export function createMockFirestoreDatabase() {
  const store = {};
  const listeners = {};

  const getCollection = (collectionName) => {
    const normalizedName = String(collectionName || '').toLowerCase();
    if (!store[normalizedName]) {
      store[normalizedName] = [];
    }

    return store[normalizedName];
  };

  const notify = (collectionName) => {
    const normalizedName = String(collectionName || '').toLowerCase();
    const collectionListeners = listeners[normalizedName] || [];
    const documents = getCollection(normalizedName).map((doc) => ({ ...doc }));

    collectionListeners.forEach((listener) => listener(documents));
  };

  return {
    async addDocument(collectionName, value) {
      const collection = getCollection(collectionName);
      const id = `mock-${Date.now()}-${collection.length + 1}`;
      const createdDocument = { id, ...value };

      collection.push(createdDocument);
      notify(collectionName);
      return createdDocument;
    },

    async setDocument(collectionName, documentId, value) {
      const collection = getCollection(collectionName);
      const existingIndex = collection.findIndex((doc) => doc.id === documentId);

      if (existingIndex >= 0) {
        collection[existingIndex] = { ...collection[existingIndex], ...value, id: documentId };
      } else {
        collection.push({ id: documentId, ...value });
      }

      notify(collectionName);
      return { id: documentId, ...value };
    },

    async getAllDocuments(collectionName) {
      return getCollection(collectionName).map((doc) => ({ ...doc }));
    },

    async deleteDocument(collectionName, id) {
      const collection = getCollection(collectionName);
      const filteredCollection = collection.filter((doc) => doc.id !== id);
      store[String(collectionName || '').toLowerCase()] = filteredCollection;
      notify(collectionName);
      return true;
    },

    subscribe(collectionName, callback) {
      const normalizedName = String(collectionName || '').toLowerCase();
      if (!listeners[normalizedName]) {
        listeners[normalizedName] = [];
      }

      listeners[normalizedName].push(callback);

      return () => {
        listeners[normalizedName] = (listeners[normalizedName] || []).filter((listener) => listener !== callback);
      };
    }
  };
}
