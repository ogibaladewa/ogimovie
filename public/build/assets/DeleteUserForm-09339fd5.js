import{o as m,r as u,b as Ge,e as ne,a as h,j as O,_ as qe}from"./app-848fb18b.js";import{I as Xe}from"./InputError-6e25bd46.js";import{I as ze}from"./InputLabel-19ee7605.js";import{l as X,s as _,a as I,u as M,b as ue,V as $,X as S,o as x,y as P,p as Ke,t as se,f as Se,T as Qe,m as Je,j as we,C as Ze,d as Y,Y as Z}from"./transition-293678aa.js";import{T as et}from"./TextInput-50197ecb.js";import"./index-4d501b15.js";var ye;let H=(ye=m.useId)!=null?ye:function(){let e=X(),[t,n]=m.useState(e?()=>_.nextId():null);return I(()=>{t===null&&n(_.nextId())},[t]),t!=null?""+t:void 0};function ce(e){return _.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let re=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),tt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(tt||{});function nt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(re)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Te=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Te||{});function rt(e,t=0){var n;return e===((n=ce(e))==null?void 0:n.body)?!1:M(t,{[0](){return e.matches(re)},[1](){let r=e;for(;r!==null;){if(r.matches(re))return!0;r=r.parentElement}return!1}})}function A(e){e==null||e.focus({preventScroll:!0})}let ot=["textarea","input"].join(",");function at(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ot))!=null?n:!1}function lt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let a=o.compareDocumentPosition(l);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function V(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?lt(e):e:nt(e);o.length>0&&a.length>1&&(a=a.filter(p=>!o.includes(p))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},s=0,f=a.length,g;do{if(s>=f||s+f<=0)return 0;let p=c+s;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}g=a[p],g==null||g.focus(d),s+=i}while(g!==l.activeElement);return t&6&&at(g)&&g.select(),g.hasAttribute("tabindex")||g.setAttribute("tabindex","0"),2}function ee(e,t,n){let r=ue(t);u.useEffect(()=>{function o(l){r.current(l)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function it(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(a,i){if(!r.current||a.defaultPrevented)return;let c=function s(f){return typeof f=="function"?s(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),d=i(a);if(d!==null&&d.getRootNode().contains(d)){for(let s of c){if(s===null)continue;let f=s instanceof HTMLElement?s:s.current;if(f!=null&&f.contains(d)||a.composed&&a.composedPath().includes(f))return}return!rt(d,Te.Loose)&&d.tabIndex!==-1&&a.preventDefault(),t(a,d)}}let l=u.useRef(null);ee("mousedown",a=>{var i,c;r.current&&(l.current=((c=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:c[0])||a.target)},!0),ee("click",a=>{!l.current||(o(a,()=>l.current),l.current=null)},!0),ee("blur",a=>o(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ut(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&st(n)?!1:r}function st(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let ct="div";var G=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(G||{});let oe=$(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return S({ourProps:o,theirProps:r,slot:{},defaultTag:ct,name:"Hidden"})});var De=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(De||{});function Fe(e,t){let n=u.useRef([]),r=x(e);u.useEffect(()=>{let o=[...n.current];for(let[l,a]of t.entries())if(n.current[l]!==a){let i=r(t,o);return n.current=t,i}},[r,...t])}function dt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ft(e,t,n){let r=ue(t);u.useEffect(()=>{function o(l){r.current(l)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}var U=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(U||{});function pt(){let e=u.useRef(0);return ft("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function z(...e){return u.useMemo(()=>ce(...e),[...e])}function de(e,t,n,r){let o=ue(n);u.useEffect(()=>{e=e??window;function l(a){o.current(a)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}let mt="div";var Le=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Le||{});let B=Object.assign($(function(e,t){let n=u.useRef(null),r=P(n,t),{initialFocus:o,containers:l,features:a=30,...i}=e;X()||(a=1);let c=z(n);gt({ownerDocument:c},Boolean(a&16));let d=ht({ownerDocument:c,container:n,initialFocus:o},Boolean(a&2));vt({ownerDocument:c,container:n,containers:l,previousActiveElement:d},Boolean(a&8));let s=pt(),f=x(y=>{let E=n.current;E&&(T=>T())(()=>{M(s.current,{[U.Forwards]:()=>{V(E,F.First,{skipElements:[y.relatedTarget]})},[U.Backwards]:()=>{V(E,F.Last,{skipElements:[y.relatedTarget]})}})})}),g=Ke(),p=u.useRef(!1),K={ref:r,onKeyDown(y){y.key=="Tab"&&(p.current=!0,g.requestAnimationFrame(()=>{p.current=!1}))},onBlur(y){let E=new Set(l==null?void 0:l.current);E.add(n);let T=y.relatedTarget;T instanceof HTMLElement&&T.dataset.headlessuiFocusGuard!=="true"&&(Ae(E,T)||(p.current?V(n.current,M(s.current,{[U.Forwards]:()=>F.Next,[U.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:y.target}):y.target instanceof HTMLElement&&A(y.target)))}};return m.createElement(m.Fragment,null,Boolean(a&4)&&m.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:G.Focusable}),S({ourProps:K,theirProps:i,defaultTag:mt,name:"FocusTrap"}),Boolean(a&4)&&m.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:G.Focusable}))}),{features:Le});function gt({ownerDocument:e},t){let n=u.useRef(null);de(e==null?void 0:e.defaultView,"focusout",o=>{!t||n.current||(n.current=o.target)},!0),Fe(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&A(n.current),n.current=null)},[t]);let r=u.useRef(!1);u.useEffect(()=>(r.current=!1,()=>{r.current=!0,se(()=>{!r.current||(A(n.current),n.current=null)})}),[])}function ht({ownerDocument:e,container:t,initialFocus:n},r){let o=u.useRef(null),l=Se();return Fe(()=>{if(!r)return;let a=t.current;!a||se(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(a.contains(i)){o.current=i;return}n!=null&&n.current?A(n.current):V(a,F.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function vt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=Se();de(e==null?void 0:e.defaultView,"focus",a=>{if(!o||!l.current)return;let i=new Set(n==null?void 0:n.current);i.add(t);let c=r.current;if(!c)return;let d=a.target;d&&d instanceof HTMLElement?Ae(i,d)?(r.current=d,A(d)):(a.preventDefault(),a.stopPropagation(),A(c)):A(r.current)},!0)}function Ae(e,t){var n;for(let r of e)if((n=r.current)!=null&&n.contains(t))return!0;return!1}let C=new Set,D=new Map;function Ee(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function be(e){let t=D.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function wt(e,t=!0){I(()=>{if(!t||!e.current)return;let n=e.current,r=ce(n);if(r){C.add(n);for(let o of D.keys())o.contains(n)&&(be(o),D.delete(o));return r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let l of C)if(o.contains(l))return;C.size===1&&(D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),Ee(o))}}),()=>{if(C.delete(n),C.size>0)r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!D.has(o)){for(let l of C)if(o.contains(l))return;D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),Ee(o)}});else for(let o of D.keys())be(o),D.delete(o)}}},[t])}let ke=u.createContext(!1);function yt(){return u.useContext(ke)}function ae(e){return m.createElement(ke.Provider,{value:e.force},e.children)}function Et(e){let t=yt(),n=u.useContext(Ne),r=z(e),[o,l]=u.useState(()=>{if(!t&&n!==null||_.isServer)return null;let a=r==null?void 0:r.getElementById("headlessui-portal-root");if(a)return a;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),u.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let bt=u.Fragment,xt=$(function(e,t){let n=e,r=u.useRef(null),o=P(Qe(s=>{r.current=s}),t),l=z(r),a=Et(r),[i]=u.useState(()=>{var s;return _.isServer?null:(s=l==null?void 0:l.createElement("div"))!=null?s:null}),c=X(),d=u.useRef(!1);return I(()=>{if(d.current=!1,!(!a||!i))return a.contains(i)||(i.setAttribute("data-headlessui-portal",""),a.appendChild(i)),()=>{d.current=!0,se(()=>{var s;!d.current||!a||!i||(i instanceof Node&&a.contains(i)&&a.removeChild(i),a.childNodes.length<=0&&((s=a.parentElement)==null||s.removeChild(a)))})}},[a,i]),c?!a||!i?null:Ge.createPortal(S({ourProps:{ref:o},theirProps:n,defaultTag:bt,name:"Portal"}),i):null}),$t=u.Fragment,Ne=u.createContext(null),St=$(function(e,t){let{target:n,...r}=e,o={ref:P(t)};return m.createElement(Ne.Provider,{value:n},S({ourProps:o,theirProps:r,defaultTag:$t,name:"Popover.Group"}))}),le=Object.assign(xt,{Group:St}),Re=u.createContext(null);function Ce(){let e=u.useContext(Re);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ce),t}return e}function Pt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=x(l=>(t(a=>[...a,l]),()=>t(a=>{let i=a.slice(),c=i.indexOf(l);return c!==-1&&i.splice(c,1),i}))),o=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(Re.Provider,{value:o},n.children)},[t])]}let Tt="p",Dt=$(function(e,t){let n=H(),{id:r=`headlessui-description-${n}`,...o}=e,l=Ce(),a=P(t);I(()=>l.register(r),[r,l.register]);let i={ref:a,...l.props,id:r};return S({ourProps:i,theirProps:o,slot:l.slot||{},defaultTag:Tt,name:l.name||"Description"})}),fe=u.createContext(()=>{});fe.displayName="StackContext";var ie=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ie||{});function Ft(){return u.useContext(fe)}function Lt({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=Ft(),a=x((...i)=>{t==null||t(...i),l(...i)});return I(()=>{let i=o===void 0||o===!0;return i&&a(0,n,r),()=>{i&&a(1,n,r)}},[a,n,r,o]),m.createElement(fe.Provider,{value:a},e)}function At(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const kt=typeof Object.is=="function"?Object.is:At,{useState:Nt,useEffect:Rt,useLayoutEffect:Ct,useDebugValue:Ot}=ne;function Mt(e,t,n){const r=t(),[{inst:o},l]=Nt({inst:{value:r,getSnapshot:t}});return Ct(()=>{o.value=r,o.getSnapshot=t,te(o)&&l({inst:o})},[e,r,t]),Rt(()=>(te(o)&&l({inst:o}),e(()=>{te(o)&&l({inst:o})})),[e]),Ot(r),r}function te(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!kt(n,r)}catch{return!0}}function It(e,t,n){return t()}const Ht=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bt=!Ht,Ut=Bt?It:Mt,_t="useSyncExternalStore"in ne?(e=>e.useSyncExternalStore)(ne):Ut;function jt(e){return _t(e.subscribe,e.getSnapshot,e.getSnapshot)}function Wt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let a=t[o].call(n,...l);a&&(n=a,r.forEach(i=>i()))}}}function Yt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,l=e-o;n.style(r,"paddingRight",`${l}px`)}}}function Vt(){if(!dt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(a){return r.containers.flatMap(i=>i()).some(i=>i.contains(a))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let i=a.target.closest("a");if(!i)return;let{hash:c}=new URL(i.href),d=t.querySelector(c);d&&!o(d)&&(l=d)}catch{}},!0),n.addEventListener(t,"touchmove",a=>{a.target instanceof HTMLElement&&!o(a.target)&&a.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}}function Gt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function qt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let L=Wt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Je(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:qt(n)},o=[Vt(),Yt(),Gt()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});L.subscribe(()=>{let e=L.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&L.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&L.dispatch("TEARDOWN",n)}});function Xt(e,t,n){let r=jt(L),o=e?r.get(e):void 0,l=o?o.count>0:!1;return I(()=>{if(!(!e||!t))return L.dispatch("PUSH",e,n),()=>L.dispatch("POP",e,n)},[t,e]),l}var zt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(zt||{}),Kt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Kt||{});let Qt={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},q=u.createContext(null);q.displayName="DialogContext";function j(e){let t=u.useContext(q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return t}function Jt(e,t,n=()=>[document.body]){Xt(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function Zt(e,t){return M(t.type,Qt,e,t)}let en="div",tn=we.RenderStrategy|we.Static,nn=$(function(e,t){let n=H(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:a,__demoMode:i=!1,...c}=e,[d,s]=u.useState(0),f=Ze();o===void 0&&f!==null&&(o=(f&Y.Open)===Y.Open);let g=u.useRef(new Set),p=u.useRef(null),K=P(p,t),y=u.useRef(null),E=z(p),T=e.hasOwnProperty("open")||f!==null,pe=e.hasOwnProperty("onClose");if(!T&&!pe)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!pe)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let b=o?0:1,[k,Oe]=u.useReducer(Zt,{titleId:null,descriptionId:null,panelRef:u.createRef()}),N=x(()=>l(!1)),me=x(v=>Oe({type:0,id:v})),Q=X()?i?!1:b===0:!1,W=d>1,Me=u.useContext(q)!==null,Ie=W?"parent":"leaf",ge=f!==null?(f&Y.Closing)===Y.Closing:!1,He=(()=>!W||ge?!1:Q)();wt(p,He);let he=x(()=>{var v,R;return[...Array.from((v=E==null?void 0:E.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?v:[]).filter(w=>!(w===document.body||w===document.head||!(w instanceof HTMLElement)||w.contains(y.current)||k.panelRef.current&&w.contains(k.panelRef.current))),(R=k.panelRef.current)!=null?R:p.current]}),Be=(()=>!(!Q||W))();it(()=>he(),N,Be);let Ue=(()=>!(W||b!==0))();de(E==null?void 0:E.defaultView,"keydown",v=>{!Ue||v.defaultPrevented||v.key===De.Escape&&(v.preventDefault(),v.stopPropagation(),N())});let _e=(()=>!(ge||b!==0||Me))();Jt(E,_e,he),u.useEffect(()=>{if(b!==0||!p.current)return;let v=new IntersectionObserver(R=>{for(let w of R)w.boundingClientRect.x===0&&w.boundingClientRect.y===0&&w.boundingClientRect.width===0&&w.boundingClientRect.height===0&&N()});return v.observe(p.current),()=>v.disconnect()},[b,p,N]);let[je,We]=Pt(),Ye=u.useMemo(()=>[{dialogState:b,close:N,setTitleId:me},k],[b,k,N,me]),ve=u.useMemo(()=>({open:b===0}),[b]),Ve={ref:K,id:r,role:"dialog","aria-modal":b===0?!0:void 0,"aria-labelledby":k.titleId,"aria-describedby":je};return m.createElement(Lt,{type:"Dialog",enabled:b===0,element:p,onUpdate:x((v,R,w)=>{R==="Dialog"&&M(v,{[ie.Add](){g.current.add(w),s(J=>J+1)},[ie.Remove](){g.current.add(w),s(J=>J-1)}})})},m.createElement(ae,{force:!0},m.createElement(le,null,m.createElement(q.Provider,{value:Ye},m.createElement(le.Group,{target:p},m.createElement(ae,{force:!1},m.createElement(We,{slot:ve,name:"Dialog.Description"},m.createElement(B,{initialFocus:a,containers:g,features:Q?M(Ie,{parent:B.features.RestoreFocus,leaf:B.features.All&~B.features.FocusLock}):B.features.None},S({ourProps:Ve,theirProps:c,slot:ve,defaultTag:en,features:tn,visible:b===0,name:"Dialog"})))))))),m.createElement(oe,{features:G.Hidden,ref:y}))}),rn="div",on=$(function(e,t){let n=H(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:a}]=j("Dialog.Overlay"),i=P(t),c=x(s=>{if(s.target===s.currentTarget){if(ut(s.currentTarget))return s.preventDefault();s.preventDefault(),s.stopPropagation(),a()}}),d=u.useMemo(()=>({open:l===0}),[l]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:c},theirProps:o,slot:d,defaultTag:rn,name:"Dialog.Overlay"})}),an="div",ln=$(function(e,t){let n=H(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},a]=j("Dialog.Backdrop"),i=P(t);u.useEffect(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let c=u.useMemo(()=>({open:l===0}),[l]);return m.createElement(ae,{force:!0},m.createElement(le,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:c,defaultTag:an,name:"Dialog.Backdrop"})))}),un="div",sn=$(function(e,t){let n=H(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},a]=j("Dialog.Panel"),i=P(t,a.panelRef),c=u.useMemo(()=>({open:l===0}),[l]),d=x(s=>{s.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:d},theirProps:o,slot:c,defaultTag:un,name:"Dialog.Panel"})}),cn="h2",dn=$(function(e,t){let n=H(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:a}]=j("Dialog.Title"),i=P(t);u.useEffect(()=>(a(r),()=>a(null)),[r,a]);let c=u.useMemo(()=>({open:l===0}),[l]);return S({ourProps:{ref:i,id:r},theirProps:o,slot:c,defaultTag:cn,name:"Dialog.Title"})}),xe=Object.assign(nn,{Backdrop:ln,Panel:sn,Overlay:on,Title:dn,Description:Dt});function $e({type:e="submit",className:t="",processing:n,children:r,onClick:o}){return h("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function fn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},a={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return h(Z,{show:t,as:u.Fragment,leave:"duration-200",children:O(xe,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[h(Z.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:h("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),h(Z.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:h(xe.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${a}`,children:e})})]})})}function pn({type:e="button",className:t="",processing:n,children:r,onClick:o}){return h("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function En({className:e}){const[t,n]=u.useState(!1),r=u.useRef(),{data:o,setData:l,delete:a,processing:i,reset:c,errors:d}=qe({password:""}),s=()=>{n(!0)},f=p=>{p.preventDefault(),a(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>g(),onError:()=>r.current.focus(),onFinish:()=>c()})},g=()=>{n(!1),c()};return O("section",{className:`space-y-6 ${e}`,children:[O("header",{children:[h("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),h("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),h($e,{onClick:s,children:"Delete Account"}),h(fn,{show:t,onClose:g,children:O("form",{onSubmit:f,className:"p-6",children:[h("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),h("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),O("div",{className:"mt-6",children:[h(ze,{for:"password",value:"Password",className:"sr-only"}),h(et,{id:"password",type:"password",name:"password",ref:r,value:o.password,handleChange:p=>l("password",p.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),h(Xe,{message:d.password,className:"mt-2"})]}),O("div",{className:"mt-6 flex justify-end",children:[h(pn,{onClick:g,children:"Cancel"}),h($e,{className:"ml-3",processing:i,children:"Delete Account"})]})]})})]})}export{En as default};
