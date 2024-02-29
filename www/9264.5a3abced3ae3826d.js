"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9264],{9264:(A,y,p)=>{p.r(y),p.d(y,{ion_route:()=>L,ion_route_redirect:()=>D,ion_router:()=>ee,ion_router_link:()=>x});var f=p(1225),d=p(1804),v=p(3592),C=p(1061),P=p(7064);const L=class{constructor(e){(0,d.r)(this,e),this.ionRouteDataChanged=(0,d.d)(this,"ionRouteDataChanged",7),this.url="",this.component=void 0,this.componentProps=void 0,this.beforeLeave=void 0,this.beforeEnter=void 0}onUpdate(e){this.ionRouteDataChanged.emit(e)}onComponentProps(e,t){if(e===t)return;const n=e?Object.keys(e):[],r=t?Object.keys(t):[];if(n.length===r.length){for(const o of n)if(e[o]!==t[o])return void this.onUpdate(e)}else this.onUpdate(e)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},D=class{constructor(e){(0,d.r)(this,e),this.ionRouteRedirectChanged=(0,d.d)(this,"ionRouteRedirectChanged",7),this.from=void 0,this.to=void 0}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},l="root",h="forward",_=e=>"/"+e.filter(n=>n.length>0).join("/"),g=e=>{let n,t=[""];if(null!=e){const r=e.indexOf("?");r>-1&&(n=e.substring(r+1),e=e.substring(0,r)),t=e.split("/").map(o=>o.trim()).filter(o=>o.length>0),0===t.length&&(t=[""])}return{segments:t,queryString:n}},T=function(){var e=(0,f.c)(function*(t,n,r,o,s=!1,i){try{const a=k(t);if(o>=n.length||!a)return s;yield new Promise(b=>(0,v.c)(a,b));const c=n[o],u=yield a.setRouteId(c.id,c.params,r,i);return u.changed&&(r=l,s=!0),s=yield T(u.element,n,r,o+1,s,i),u.markVisible&&(yield u.markVisible()),s}catch(a){return console.error(a),!1}});return function(n,r,o,s){return e.apply(this,arguments)}}(),z=function(){var e=(0,f.c)(function*(t){const n=[];let r,o=t;for(;r=k(o);){const s=yield r.getRouteId();if(!s)break;o=s.element,s.element=void 0,n.push(s)}return{ids:n,outlet:r}});return function(n){return e.apply(this,arguments)}}(),U=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",k=e=>{if(e)return e.matches(U)?e:e.querySelector(U)??void 0},j=(e,t)=>t.find(n=>((e,t)=>{const{from:n,to:r}=t;if(void 0===r||n.length>e.length)return!1;for(let o=0;o<n.length;o++){const s=n[o];if("*"===s)return!0;if(s!==e[o])return!1}return n.length===e.length})(e,n)),J=(e,t)=>{const n=Math.min(e.length,t.length);let r=0;for(let o=0;o<n;o++){const s=e[o],i=t[o];if(s.id.toLowerCase()!==i.id)break;if(s.params){const a=Object.keys(s.params);if(a.length===i.segments.length){const c=a.map(u=>`:${u}`);for(let u=0;u<c.length&&c[u].toLowerCase()===i.segments[u];u++)r++}}r++}return r},Q=(e,t)=>{const n=new Z(e);let o,r=!1;for(let i=0;i<t.length;i++){const a=t[i].segments;if(""===a[0])r=!0;else{for(const c of a){const u=n.next();if(":"===c[0]){if(""===u)return null;o=o||[],(o[i]||(o[i]={}))[c.slice(1)]=u}else if(u!==c)return null}r=!1}}return r&&r!==(""===n.next())?null:o?t.map((i,a)=>({id:i.id,segments:i.segments,params:I(i.params,o[a]),beforeEnter:i.beforeEnter,beforeLeave:i.beforeLeave})):t},I=(e,t)=>e||t?Object.assign(Object.assign({},e),t):void 0,N=(e,t)=>{let n=null,r=0;for(const o of t){const s=Q(e,o);if(null!==s){const i=Y(s);i>r&&(r=i,n=s)}}return n},Y=e=>{let t=1,n=1;for(const r of e)for(const o of r.segments)":"===o[0]?t+=Math.pow(1,n):""!==o&&(t+=Math.pow(2,n)),n++;return t};class Z{constructor(t){this.segments=t.slice()}next(){return this.segments.length>0?this.segments.shift():""}}const S=(e,t)=>t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null,O=e=>Array.from(e.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const n=S(t,"to");return{from:g(S(t,"from")).segments,to:null==n?void 0:g(n)}}),w=e=>V(M(e)),M=e=>Array.from(e.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(t=>{const n=S(t,"component");return{segments:g(S(t,"url")).segments,id:n.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:M(t)}}),V=e=>{const t=[];for(const n of e)W([],t,n);return t},W=(e,t,n)=>{if(e=[...e,{id:n.id,segments:n.segments,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}],0!==n.children.length)for(const r of n.children)W(e,t,r);else t.push(e)},ee=class{constructor(e){(0,d.r)(this,e),this.ionRouteWillChange=(0,d.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,d.d)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}componentWillLoad(){var e=this;return(0,f.c)(function*(){yield k(document.body)?Promise.resolve():new Promise(e=>{window.addEventListener("ionNavWillLoad",()=>e(),{once:!0})});const t=yield e.runGuards(e.getSegments());if(!0!==t){if("object"==typeof t){const{redirect:n}=t,r=g(n);e.setSegments(r.segments,l,r.queryString),yield e.writeNavStateRoot(r.segments,l)}}else yield e.onRoutesChanged()})()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",(0,v.q)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,v.q)(this.onRoutesChanged.bind(this),100))}onPopState(){var e=this;return(0,f.c)(function*(){const t=e.historyDirection();let n=e.getSegments();const r=yield e.runGuards(n);if(!0!==r){if("object"!=typeof r)return!1;n=g(r.redirect).segments}return e.writeNavStateRoot(n,t)})()}onBackButton(e){e.detail.register(0,t=>{this.back(),t()})}canTransition(){var e=this;return(0,f.c)(function*(){const t=yield e.runGuards();return!0===t||"object"==typeof t&&t.redirect})()}push(e,t="forward",n){var r=this;return(0,f.c)(function*(){var o;if(e.startsWith(".")){const a=null!==(o=r.previousPath)&&void 0!==o?o:"/",c=new URL(e,`https://host/${a}`);e=c.pathname+c.search}let s=g(e);const i=yield r.runGuards(s.segments);if(!0!==i){if("object"!=typeof i)return!1;s=g(i.redirect)}return r.setSegments(s.segments,t,s.queryString),r.writeNavStateRoot(s.segments,t,n)})()}back(){return window.history.back(),Promise.resolve(this.waitPromise)}printDebug(){var e=this;return(0,f.c)(function*(){(e=>{console.group(`[ion-core] ROUTES[${e.length}]`);for(const t of e){const n=[];t.forEach(o=>n.push(...o.segments));const r=t.map(o=>o.id);console.debug(`%c ${_(n)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${r.join(", ")})`)}console.groupEnd()})(w(e.el)),(e=>{console.group(`[ion-core] REDIRECTS[${e.length}]`);for(const t of e)t.to&&console.debug("FROM: ",`$c ${_(t.from)}`,"font-weight: bold"," TO: ",`$c ${_(t.to.segments)}`,"font-weight: bold");console.groupEnd()})(O(e.el))})()}navChanged(e){var t=this;return(0,f.c)(function*(){if(t.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:n,outlet:r}=yield z(window.document.body),s=((e,t)=>{let n=null,r=0;for(const o of t){const s=J(e,o);s>r&&(n=o,r=s)}return n?n.map((o,s)=>{var i;return{id:o.id,segments:o.segments,params:I(o.params,null===(i=e[s])||void 0===i?void 0:i.params)}}):null})(n,w(t.el));if(!s)return console.warn("[ion-router] no matching URL for ",n.map(a=>a.id)),!1;const i=(e=>{const t=[];for(const n of e)for(const r of n.segments)if(":"===r[0]){const o=n.params&&n.params[r.slice(1)];if(!o)return null;t.push(o)}else""!==r&&t.push(r);return t})(s);return i?(t.setSegments(i,e),yield t.safeWriteNavState(r,s,l,i,null,n.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)})()}onRedirectChanged(){const e=this.getSegments();e&&j(e,O(this.el))&&this.writeNavStateRoot(e,l)}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),l)}historyDirection(){var e;const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,null===(e=t.document.location)||void 0===e?void 0:e.href));const n=t.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?h:n<r?"back":l}writeNavStateRoot(e,t,n){var r=this;return(0,f.c)(function*(){if(!e)return console.error("[ion-router] URL is not part of the routing set"),!1;const o=O(r.el),s=j(e,o);let i=null;if(s){const{segments:u,queryString:b}=s.to;r.setSegments(u,t,b),i=s.from,e=u}const a=w(r.el),c=N(e,a);return c?r.safeWriteNavState(document.body,c,t,e,i,0,n):(console.error("[ion-router] the path does not match any route"),!1)})()}safeWriteNavState(e,t,n,r,o,s=0,i){var a=this;return(0,f.c)(function*(){const c=yield a.lock();let u=!1;try{u=yield a.writeNavState(e,t,n,r,o,s,i)}catch(b){console.error(b)}return c(),u})()}lock(){var e=this;return(0,f.c)(function*(){const t=e.waitPromise;let n;return e.waitPromise=new Promise(r=>n=r),void 0!==t&&(yield t),n})()}runGuards(e=this.getSegments(),t){var n=this;return(0,f.c)(function*(){if(void 0===t&&(t=g(n.previousPath).segments),!e||!t)return!0;const r=w(n.el),o=N(t,r),s=o&&o[o.length-1].beforeLeave,i=!s||(yield s());if(!1===i||"object"==typeof i)return i;const a=N(e,r),c=a&&a[a.length-1].beforeEnter;return!c||c()})()}writeNavState(e,t,n,r,o,s=0,i){var a=this;return(0,f.c)(function*(){if(a.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;a.busy=!0;const c=a.routeChangeEvent(r,o);c&&a.ionRouteWillChange.emit(c);const u=yield T(e,t,n,s,!1,i);return a.busy=!1,c&&a.ionRouteDidChange.emit(c),u})()}setSegments(e,t,n){this.state++,((e,t,n,r,o,s,i)=>{const a=((e,t,n)=>{let r=_(e);return t&&(r="#"+r),void 0!==n&&(r+="?"+n),r})([...g(t).segments,...r],n,i);o===h?e.pushState(s,"",a):e.replaceState(s,"",a)})(window.history,this.root,this.useHash,e,t,this.state,n)}getSegments(){return((e,t,n)=>{const r=g(this.root).segments,o=n?e.hash.slice(1):e.pathname;return((e,t)=>{if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return null;return t.length===e.length?[""]:t.slice(e.length)})(r,g(o).segments)})(window.location,0,this.useHash)}routeChangeEvent(e,t){const n=this.previousPath,r=_(e);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:t?_(t):null,to:r}}get el(){return(0,d.f)(this)}},x=class{constructor(e){(0,d.r)(this,e),this.onClick=t=>{(0,C.o)(this.href,t,this.routerDirection,this.routerAnimation)},this.color=void 0,this.href=void 0,this.rel=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.target=void 0}render(){const e=(0,P.b)(this),t={href:this.href,rel:this.rel,target:this.target};return(0,d.h)(d.H,{key:"9944573e56abecc47afd2df03b386e38fc7ed2f3",onClick:this.onClick,class:(0,C.c)(this.color,{[e]:!0,"ion-activatable":!0})},(0,d.h)("a",Object.assign({key:"383de10c02eb9ab87e27890548ef681dccf2a765"},t),(0,d.h)("slot",{key:"584a5a52e2b116f3827596cc5869a3557d6bcb6b"})))}};x.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},1061:(A,y,p)=>{p.d(y,{c:()=>v,g:()=>P,h:()=>d,o:()=>D});var f=p(1225);const d=(l,h)=>null!==h.closest(l),v=(l,h)=>"string"==typeof l&&l.length>0?Object.assign({"ion-color":!0,[`ion-color-${l}`]:!0},h):h,P=l=>{const h={};return(l=>void 0!==l?(Array.isArray(l)?l:l.split(" ")).filter(m=>null!=m).map(m=>m.trim()).filter(m=>""!==m):[])(l).forEach(m=>h[m]=!0),h},L=/^[a-z][a-z0-9+\-.]*:/,D=function(){var l=(0,f.c)(function*(h,m,_,E){if(null!=h&&"#"!==h[0]&&!L.test(h)){const R=document.querySelector("ion-router");if(R)return m?.preventDefault(),R.push(h,_,E)}return!1});return function(m,_,E,R){return l.apply(this,arguments)}}()}}]);