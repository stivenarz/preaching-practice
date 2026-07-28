import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, addDoc, setDoc, getDocs, deleteDoc, onSnapshot } from 'firebase/firestore'
import { Observable, Subject } from 'rxjs';
import { createMockFirestoreDatabase } from './fake-firestore.js';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class FireDatabaseService implements OnDestroy {

  /** Variables de firebase */
  private firebase: any = null
  private database: any = null
  private mockDatabase: any = null
  private useMockDatabase = false
  
  /** Objetos de contenido */
  private collections$: any = {}
  private collections: any = {}
  
  /** Array de subscripciones */
  private subs: Array<any> = []
  
  constructor() {
    this.initializeDatabase()
  }

  private initializeDatabase(): void {
    const firebaseConfig = (environment as any).firebaseConfig
    const hasValidConfig = !!firebaseConfig && typeof firebaseConfig === 'object' && firebaseConfig.projectId && firebaseConfig.apiKey

    if (!hasValidConfig) {
      this.enableMockDatabase('Firebase config missing')
      return
    }

    try {
      this.firebase = initializeApp(firebaseConfig)
      this.database = getFirestore(this.firebase)
      this.useMockDatabase = false
    } catch (error) {
      this.enableMockDatabase(error)
    }
  }

  private enableMockDatabase(reason: unknown): void {
    console.warn('Firebase no disponible. Usando almacenamiento simulado.', reason)
    this.mockDatabase = createMockFirestoreDatabase()
    this.database = this.mockDatabase
    this.useMockDatabase = true
  }

  /** Siclo de vida */
  ngOnDestroy(): void {
    this.subs.forEach((item) => item?.())
  }

  /**
   * Crea una nueva coleccion en la base de datos si no existe y devuelve un objeto observable de dicha coleccion
   * @param collectionName collection name
   * @returns Objeto observable para suscripcion
   */
  getCollection(collectionName: string): Observable<any> {
    if (!this.collections[collectionName]) this.subscriptionCreate(collectionName)
    return this.collections[collectionName]
  }

  /**
   * Agrega un nuevo Subject al array collections$, un nuevo observable al array collections y agrega la subscripcion de la coleccion al array subs
   * @param collectionName collection name
   */
  subscriptionCreate(collectionName: string): void {
    this.collections$[collectionName] = new Subject<any>
    this.collections[collectionName] = this.collections$[collectionName].asObservable()
    this.subs.push(this.subscription(collectionName, () => { this.updateCollection(collectionName) }))
  }

  /**
   * Publica el cambio del contenido de la coleccion
   * @param collectionName collection name
   */
  async updateCollection(collectionName: string): Promise<void> {
    this.collections$[collectionName].next(await this.getAllDocuments(collectionName))
  }

  /**
   * Devuelve una subscripcion a los cambios de una coleccion en firestore
   * @param collectionName Nombre de la coleccion (lista)
   * @param callBack Funcion, se ejecuta cuando detecta cambios
   * @returns void
   */
  subscription = (collectionName: string, callBack: Function) => {
    if (this.useMockDatabase) {
      return this.mockDatabase.subscribe(collectionName.toLowerCase(), () => {
        if (callBack) callBack(collectionName)
      })
    }

    const collectionRef = collection(this.database, collectionName.toLowerCase());
    return onSnapshot(collectionRef, () => {
      if (callBack) callBack(collectionName)
    })
  }

  /**
   * Crea un nuevo documento noSQL de firestore y lo almacena en la nube
   * @param collectionName nombre de coleccion
   * @param value {} datos del documento
   * @returns la referencia de firestore al documento creado
   */
  async addNewDocument(collectionName: string, value: any): Promise<any> {
    try {
      if (this.useMockDatabase) {
        return await this.mockDatabase.addDocument(collectionName.toLowerCase(), value)
      }

      return await addDoc(collection(this.database, collectionName.toLowerCase()), value);
    } catch (e) {
      console.error("Error adding document: ", e);
      return null
    }
  }

  /**
   * Reescribe un documento noSQL de firestore o lo crea como nuevo si no existe 
   * @param collectionName nombre de coleccion
   * @param documentId id del documento
   * @param value datos del documento
   * @returns referencia de firestore al documento modificado
   */
  async setDocument(collectionName: string, documentId: string, value: any): Promise<any> {
    try {
      if (this.useMockDatabase) {
        return await this.mockDatabase.setDocument(collectionName.toLowerCase(), documentId, value)
      }

      const documentRef = doc(this.database, collectionName.toLowerCase(), documentId)
      return await setDoc(documentRef, value)
    } catch (error) {
      console.error('error setting document: ', error)
      return null
    }
  }

  /**
   * Obtiene los documentos de la coleccion dada
   * @param collectionName nombre de coleccion
   * @returns [] todos los documentos de la coleccion
   */
  
  async getAllDocuments(collectionName: string): Promise<any> {
    try {
      const normalizedCollectionName = collectionName.toLowerCase()

      if (this.useMockDatabase) {
        return await this.mockDatabase.getAllDocuments(normalizedCollectionName)
      }

      const documents: any[] | PromiseLike<any[]> = []
      const querySnapshot = await getDocs(collection(this.database, normalizedCollectionName))
      querySnapshot.forEach((doc) => {
        documents.push({
          id: doc.id,
          ...doc.data()
        })
      })
      return documents
    } catch (error) {
      console.error("Error getting documents: ", error);
      return null
    }
  }


  /**
   * Elimina un documento de la base de datos
   * @param collectionName nombre de coleccion
   * @param id id del documento
   * @returns referencia al documento de firestore eliminado
   */
  async deleteDocument(collectionName: string, id: string): Promise<any> {
    try {
      if (this.useMockDatabase) {
        return await this.mockDatabase.deleteDocument(collectionName.toLowerCase(), id)
      }

      const documentRef = doc(this.database, collectionName.toLowerCase(), id)
      return await deleteDoc(documentRef)
    } catch (error) {
      console.error("Error deleting document: ", error);
      return null
    }
  }
}
