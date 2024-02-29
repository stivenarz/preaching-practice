"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9312],{4844:(M,v,i)=>{i.d(v,{c:()=>r});var g=i(1804),l=i(4640),c=i(8272);const r=(o,s)=>{let t,e;const u=(a,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,w);E&&s(E)?E!==t&&(n(),d(E,p)):n()},d=(a,w)=>{t=a,e||(e=t);const p=t;(0,g.w)(()=>p.classList.add("ion-activated")),w()},n=(a=!1)=>{if(!t)return;const w=t;(0,g.w)(()=>w.classList.remove("ion-activated")),a&&e!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,l.a),onMove:a=>u(a.currentX,a.currentY,l.b),onEnd:()=>{n(!0),(0,l.h)(),e=void 0}})}},2852:(M,v,i)=>{i.d(v,{g:()=>l});var g=i(5912);const l=()=>{if(void 0!==g.w)return g.w.Capacitor}},9876:(M,v,i)=>{i.d(v,{c:()=>g,i:()=>l});const g=(c,r,o)=>"function"==typeof o?o(c,r):"string"==typeof o?c[o]===r[o]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,o)=>void 0!==c&&(Array.isArray(c)?c.some(s=>g(s,r,o)):g(c,r,o))},808:(M,v,i)=>{i.d(v,{g:()=>g});const g=(s,t,e,u,d)=>c(s[1],t[1],e[1],u[1],d).map(n=>l(s[0],t[0],e[0],u[0],n)),l=(s,t,e,u,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*e*d+3*e+u*d))-s*Math.pow(d-1,3),c=(s,t,e,u,d)=>o((u-=d)-3*(e-=d)+3*(t-=d)-(s-=d),3*e-6*t+3*s,3*t-3*s,s).filter(a=>a>=0&&a<=1),o=(s,t,e,u)=>{if(0===s)return((s,t,e)=>{const u=t*t-4*s*e;return u<0?[]:[(-t+Math.sqrt(u))/(2*s),(-t-Math.sqrt(u))/(2*s)]})(t,e,u);const d=(3*(e/=s)-(t/=s)*t)/3,n=(2*t*t*t-9*t*e+27*(u/=s))/27;if(0===d)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-d),-Math.sqrt(-d)];const a=Math.pow(n/2,2)+Math.pow(d/3,3);if(0===a)return[Math.pow(n/2,.5)-t/3];if(a>0)return[Math.pow(-n/2+Math.sqrt(a),1/3)-Math.pow(n/2+Math.sqrt(a),1/3)-t/3];const w=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-n/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-t/3,E*Math.cos((p+2*Math.PI)/3)-t/3,E*Math.cos((p+4*Math.PI)/3)-t/3]}},2640:(M,v,i)=>{i.d(v,{i:()=>g});const g=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},9427:(M,v,i)=>{i.r(v),i.d(v,{startFocusVisible:()=>r});const g="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let s=[],t=!0;const e=o?o.shadowRoot:document,u=o||document.body,d=y=>{s.forEach(h=>h.classList.remove(g)),y.forEach(h=>h.classList.add(g)),s=y},n=()=>{t=!1,d([])},a=y=>{t=c.includes(y.key),t||d([])},w=y=>{if(t&&void 0!==y.composedPath){const h=y.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));d(h)}},p=()=>{e.activeElement===u&&d([])};return e.addEventListener("keydown",a),e.addEventListener("focusin",w),e.addEventListener("focusout",p),e.addEventListener("touchstart",n,{passive:!0}),e.addEventListener("mousedown",n),{destroy:()=>{e.removeEventListener("keydown",a),e.removeEventListener("focusin",w),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",n),e.removeEventListener("mousedown",n)},setFocus:d}}},7852:(M,v,i)=>{i.d(v,{c:()=>l});var g=i(3592);const l=s=>{const t=s;let e;return{hasLegacyControl:()=>{if(void 0===e){const d=void 0!==t.label||c(t),n=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,a=(0,g.h)(t);e=!0===t.legacy||!d&&!n&&null!==a}return e}}},c=s=>!!(r.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||o.includes(s.tagName)&&""!==s.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4640:(M,v,i)=>{i.d(v,{I:()=>l,a:()=>t,b:()=>e,c:()=>s,d:()=>d,h:()=>u});var g=i(2852),l=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(l||{});const r={getEngine(){const n=window.TapticEngine;if(n)return n;const a=(0,g.g)();return a?.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,g.g)();return"web"!==a?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,g.g)(),impact(n){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?n.style:n.style.toLowerCase();a.impact({style:w})},notification(n){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?n.type:n.type.toLowerCase();a.notification({type:w})},selection(){const n=this.isCapacitor()?l.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},o=()=>r.available(),s=()=>{o()&&r.selection()},t=()=>{o()&&r.selectionStart()},e=()=>{o()&&r.selectionChanged()},u=()=>{o()&&r.selectionEnd()},d=n=>{o()&&r.impact(n)}},7100:(M,v,i)=>{i.d(v,{I:()=>s,a:()=>d,b:()=>o,c:()=>w,d:()=>E,f:()=>n,g:()=>u,i:()=>e,p:()=>p,r:()=>y,s:()=>a});var g=i(1225),l=i(3592),c=i(384);const o="ion-content",s=".ion-content-scroll-host",t=`${o}, ${s}`,e=h=>"ION-CONTENT"===h.tagName,u=function(){var h=(0,g.c)(function*(_){return e(_)?(yield new Promise(m=>(0,l.c)(_,m)),_.getScrollElement()):_});return function(m){return h.apply(this,arguments)}}(),d=h=>h.querySelector(s)||h.querySelector(t),n=h=>h.closest(t),a=(h,_)=>e(h)?h.scrollToTop(_):Promise.resolve(h.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),w=(h,_,m,O)=>e(h)?h.scrollByPoint(_,m,O):Promise.resolve(h.scrollBy({top:m,left:_,behavior:O>0?"smooth":"auto"})),p=h=>(0,c.b)(h,o),E=h=>{if(e(h)){const m=h.scrollY;return h.scrollY=!1,m}return h.style.setProperty("overflow","hidden"),!0},y=(h,_)=>{e(h)?h.scrollY=_:h.style.removeProperty("overflow")}},3816:(M,v,i)=>{i.d(v,{a:()=>g,b:()=>w,c:()=>t,d:()=>p,e:()=>L,f:()=>s,g:()=>E,h:()=>c,i:()=>l,j:()=>O,k:()=>C,l:()=>e,m:()=>n,n:()=>y,o:()=>d,p:()=>o,q:()=>r,r:()=>m,s:()=>f,t:()=>a,u:()=>h,v:()=>_,w:()=>u});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2808:(M,v,i)=>{i.d(v,{c:()=>r,g:()=>o});var g=i(5912),l=i(3592),c=i(384);const r=(t,e,u)=>{let d,n;if(void 0!==g.w&&"MutationObserver"in g.w){const E=Array.isArray(e)?e:[e];d=new MutationObserver(y=>{for(const h of y)for(const _ of h.addedNodes)if(_.nodeType===Node.ELEMENT_NODE&&E.includes(_.slot))return u(),void(0,l.r)(()=>a(_))}),d.observe(t,{childList:!0})}const a=E=>{var y;n&&(n.disconnect(),n=void 0),n=new MutationObserver(h=>{u();for(const _ of h)for(const m of _.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===e&&p()}),n.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},p=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),p()}}},o=(t,e,u)=>{const d=null==t?0:t.toString().length,n=s(d,e);if(void 0===u)return n;try{return u(d,e)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),n}},s=(t,e)=>`${t} / ${e}`},2e3:(M,v,i)=>{i.r(v),i.d(v,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>d,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>n,trackViewportChanges:()=>O});var g=i(5680);i(2852),i(5912);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let t={},e={},u=!1;const d=()=>{t={},e={},u=!1},n=f=>{if(g.K.getEngine())a(f);else{if(!f.visualViewport)return;e=C(f.visualViewport),f.visualViewport.onresize=()=>{O(f),E()||y(f)?w(f):h(f)&&p(f)}}},a=f=>{f.addEventListener("keyboardDidShow",L=>w(f,L)),f.addEventListener("keyboardDidHide",()=>p(f))},w=(f,L)=>{_(f,L),u=!0},p=f=>{m(f),u=!1},E=()=>!u&&t.width===e.width&&(t.height-e.height)*e.scale>150,y=f=>u&&!h(f),h=f=>u&&e.height===f.innerHeight,_=(f,L)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:L?L.keyboardHeight:f.innerHeight-e.height}});f.dispatchEvent(D)},m=f=>{const L=new CustomEvent(o);f.dispatchEvent(L)},O=f=>{t=Object.assign({},e),e=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},5680:(M,v,i)=>{i.d(v,{K:()=>r,a:()=>c});var g=i(2852),l=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(l||{}),c=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(c||{});const r={getEngine(){const o=(0,g.g)();if(o?.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return o?.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==l.Unimplemented)throw s}):Promise.resolve(void 0)}}},9516:(M,v,i)=>{i.d(v,{c:()=>s});var g=i(1225),l=i(5912),c=i(5680);const r=t=>void 0===l.d||t===c.a.None||void 0===t?null:l.d.querySelector("ion-app")??l.d.body,o=t=>{const e=r(t);return null===e?0:e.clientHeight},s=function(){var t=(0,g.c)(function*(e){let u,d,n,a;const w=function(){var _=(0,g.c)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;u=()=>{void 0===a&&(a=o(O)),n=!0,p(n,O)},d=()=>{n=!1,p(n,O)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return _.apply(this,arguments)}}(),p=(_,m)=>{e&&e(_,E(m))},E=_=>{if(0===a||a===o(_))return;const m=r(_);return null!==m?new Promise(O=>{const f=new ResizeObserver(()=>{m.clientHeight===a&&(f.disconnect(),O())});f.observe(m)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>n}});return function(u){return t.apply(this,arguments)}}()},1672:(M,v,i)=>{i.d(v,{c:()=>l});var g=i(1225);const l=()=>{let c;return{lock:function(){var o=(0,g.c)(function*(){const s=c;let t;return c=new Promise(e=>t=e),void 0!==s&&(yield s),t});return function(){return o.apply(this,arguments)}}()}}},5982:(M,v,i)=>{i.d(v,{c:()=>c});var g=i(5912),l=i(3592);const c=(r,o,s)=>{let t;const e=()=>!(void 0===o()||void 0!==r.label||null===s()),d=()=>{const a=o();if(void 0===a)return;if(!e())return void a.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===a.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==t)return;const p=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),p.disconnect(),t=void 0)},{threshold:.01,root:r});p.observe(a)}else a.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{e()&&(0,l.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},5228:(M,v,i)=>{i.d(v,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,o)=>{const s=c*r/o-c+"ms",t=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(c,r,o)=>{const s=r/o,t=c*s-c+"ms",e=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})}}},6584:(M,v,i)=>{i.r(v),i.d(v,{createSwipeBackGesture:()=>o});var g=i(3592),l=i(2640),c=i(8272);i(7136);const o=(s,t,e,u,d)=>{const n=s.ownerDocument.defaultView;let a=(0,l.i)(s);const p=m=>a?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,l.i)(s),(m=>{const{startX:C}=m;return a?C>=n.innerWidth-50:C<=50})(m)&&t()),onStart:e,onMove:m=>{const C=p(m)/n.innerWidth;u(C)},onEnd:m=>{const O=p(m),C=n.innerWidth,f=O/C,L=(m=>a?-m.velocityX:m.velocityX)(m),D=L>=0&&(L>.2||O>C/2),P=(D?1-f:f)*C;let A=0;if(P>5){const T=P/Math.abs(L);A=Math.min(T,540)}d(D,f<=0?.01:(0,g.l)(0,f,.9999),A)}})}},4276:(M,v,i)=>{i.d(v,{w:()=>g});const g=(r,o,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{s(l(e,o))});return t.observe(r,{childList:!0,subtree:!0}),t},l=(r,o)=>{let s;return r.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)s=c(t.addedNodes[e],o)||s}),s},c=(r,o)=>{if(1!==r.nodeType)return;const s=r;return(s.tagName===o.toUpperCase()?[s]:Array.from(s.querySelectorAll(o))).find(e=>e.value===s.value)}},4816:(M,v,i)=>{i.r(v),i.d(v,{ConfigPageModule:()=>d});var g=i(3864),l=i(2644),c=i(5648),r=i(6372),o=i(8640),s=i(7458);const t=[{path:"",component:o.$}];let e=(()=>{class n{static#t=this.\u0275fac=function(p){return new(p||n)};static#e=this.\u0275mod=s.a4G({type:n});static#n=this.\u0275inj=s.s3X({imports:[r.qQ.forChild(t),r.qQ]})}return n})();var u=i(6528);let d=(()=>{class n{static#t=this.\u0275fac=function(p){return new(p||n)};static#e=this.\u0275mod=s.a4G({type:n});static#n=this.\u0275inj=s.s3X({imports:[g.MD,l.y,c.wZ,u.k,e]})}return n})()}}]);