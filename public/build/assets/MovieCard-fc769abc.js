import{c as w,r as N,o as I,f as j,b as T,j as v,a as u,d as _}from"./app-848fb18b.js";import{p as c}from"./index-4d501b15.js";var E={},D={get exports(){return E},set exports(p){E=p}},b={},A={get exports(){return b},set exports(p){b=p}},L;function B(){return L||(L=1,function(p){(function(i,r){p.exports?p.exports=r():i.EvEmitter=r()})(typeof window<"u"?window:w,function(){function i(){}var r=i.prototype;return r.on=function(s,n){if(!(!s||!n)){var a=this._events=this._events||{},l=a[s]=a[s]||[];return l.indexOf(n)==-1&&l.push(n),this}},r.once=function(s,n){if(!(!s||!n)){this.on(s,n);var a=this._onceEvents=this._onceEvents||{},l=a[s]=a[s]||{};return l[n]=!0,this}},r.off=function(s,n){var a=this._events&&this._events[s];if(!(!a||!a.length)){var l=a.indexOf(n);return l!=-1&&a.splice(l,1),this}},r.emitEvent=function(s,n){var a=this._events&&this._events[s];if(!(!a||!a.length)){a=a.slice(0),n=n||[];for(var l=this._onceEvents&&this._onceEvents[s],g=0;g<a.length;g++){var m=a[g],d=l&&l[m];d&&(this.off(s,m),delete l[m]),m.apply(this,n)}return this}},r.allOff=function(){delete this._events,delete this._onceEvents},i})}(A)),b}/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(p){(function(i,r){p.exports?p.exports=r(i,B()):i.imagesLoaded=r(i,i.EvEmitter)})(typeof window<"u"?window:w,function(r,s){var n=r.jQuery,a=r.console;function l(t,e){for(var o in e)t[o]=e[o];return t}var g=Array.prototype.slice;function m(t){if(Array.isArray(t))return t;var e=typeof t=="object"&&typeof t.length=="number";return e?g.call(t):[t]}function d(t,e,o){if(!(this instanceof d))return new d(t,e,o);var h=t;if(typeof t=="string"&&(h=document.querySelectorAll(t)),!h){a.error("Bad element for imagesLoaded "+(h||t));return}this.elements=m(h),this.options=l({},this.options),typeof e=="function"?o=e:l(this.options,e),o&&this.on("always",o),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))}d.prototype=Object.create(s.prototype),d.prototype.options={},d.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},d.prototype.addElementImages=function(t){t.nodeName=="IMG"&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(!(!e||!R[e])){for(var o=t.querySelectorAll("img"),h=0;h<o.length;h++){var y=o[h];this.addImage(y)}if(typeof this.options.background=="string"){var k=t.querySelectorAll(this.options.background);for(h=0;h<k.length;h++){var C=k[h];this.addElementBackgroundImages(C)}}}};var R={1:!0,9:!0,11:!0};d.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var o=/url\((['"])?(.*?)\1\)/gi,h=o.exec(e.backgroundImage);h!==null;){var y=h&&h[2];y&&this.addBackground(y,t),h=o.exec(e.backgroundImage)}},d.prototype.addImage=function(t){var e=new f(t);this.images.push(e)},d.prototype.addBackground=function(t,e){var o=new x(t,e);this.images.push(o)},d.prototype.check=function(){var t=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}function e(o,h,y){setTimeout(function(){t.progress(o,h,y)})}this.images.forEach(function(o){o.once("progress",e),o.check()})},d.prototype.progress=function(t,e,o){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+o,t,e)},d.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}};function f(t){this.img=t}f.prototype=Object.create(s.prototype),f.prototype.check=function(){var t=this.getIsImageComplete();if(t){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src},f.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},f.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},f.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},f.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},f.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},f.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function x(t,e){this.url=t,this.element=e,this.img=new Image}return x.prototype=Object.create(f.prototype),x.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},x.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},x.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},d.makeJQueryPlugin=function(t){t=t||r.jQuery,t&&(n=t,n.fn.imagesLoaded=function(e,o){var h=new d(this,e,o);return h.jqDeferred.promise(n(this))})},d.makeJQueryPlugin(),d})})(D);const O=!!(typeof window<"u"&&window.document&&window.document.createElement);class q extends N.Component{constructor(i){super(i),this.state={flickityReady:!1,flickityCreated:!1,cellCount:0},this.carousel=null,this.flkty=null}static getDerivedStateFromProps(i,r){const s=I.Children.count(i.children);return s!==r.cellCount?{flickityReady:!1,cellCount:s}:null}componentDidUpdate(i,r){const{children:s,options:{draggable:n,initialIndex:a},reloadOnUpdate:l,disableImagesLoaded:g}=this.props,{flickityReady:m}=this.state;if(l||!r.flickityReady&&m){if(!this.flkty)return;const d=this.flkty.isActive;this.flkty.deactivate(),this.flkty.selectedIndex=a||0,this.flkty.options.draggable=n===void 0?s?s.length>1:!1:n,d&&this.flkty.activate(),!g&&this.carousel&&E(this.carousel,()=>{this.flkty.reloadCells()})}else this.flkty.reloadCells()}async componentDidMount(){if(!O)return null;const i=(await j(()=>import("./index-b3ee927a.js").then(n=>n.i),[])).default,{flickityRef:r,options:s}=this.props;this.flkty=new i(this.carousel,s),r&&r(this.flkty),this.props.static?this.setReady():this.setState({flickityCreated:!0})}setReady(){if(this.state.flickityReady)return;const i=()=>this.setState({flickityReady:!0});this.props.disableImagesLoaded?i():E(this.carousel,i)}renderPortal(){if(!this.carousel)return null;const i=this.carousel.querySelector(".flickity-slider");if(i){const r=T.createPortal(this.props.children,i);return setTimeout(()=>this.setReady(),0),r}}render(){return I.createElement(this.props.elementType,{className:this.props.className,ref:i=>{this.carousel=i}},this.props.static?this.props.children:this.renderPortal())}}q.propTypes={children:c.array,className:c.string,disableImagesLoaded:c.bool,elementType:c.string,flickityRef:c.func,options:c.object,reloadOnUpdate:c.bool,static:c.bool};q.defaultProps={className:"",disableImagesLoaded:!1,elementType:"div",options:{},reloadOnUpdate:!1,static:!1};P.propType={slug:c.string.isRequired,name:c.string.isRequired,category:c.string.isRequired,thumbnail:c.string.isRequired,rating:c.number};function P({slug:p,name:i,category:r,thumbnail:s,rating:n}){return v("div",{className:"absolute overflow-hidden group mr-[30px]",children:[u("img",{src:`/storage/${s}`,className:"object-cover rounded-[30px] w-[520px] h-[340px]",alt:""}),u("div",{className:"rating absolute top-0 left-0",children:v("div",{className:"p-[30px] flex items-center gap-1",children:[u("img",{src:"/icons/ic_star.svg",alt:""}),v("span",{className:"text-sm font-medium text-white mt-1",children:[n.toFixed(1),"/5.0"]})]})}),v("div",{className:`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
            rounded-br-[28px] flex justify-between items-center px-7 h-[130px]`,children:[v("div",{children:[u("div",{className:"font-medium text-[22px] text-white",children:i}),u("p",{className:"mb-0 text-white text-sm font-light",children:r})]}),u("div",{className:"translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500",children:u("img",{src:"/icons/ic_play.svg",width:"50",alt:""})})]}),u(_,{href:route("user.dashboard.movie.show",p),className:"inset-0 absolute z-50"})]})}S.propType={slug:c.string.isRequired,name:c.string.isRequired,category:c.string.isRequired,thumbnail:c.string.isRequired};function S({slug:p,name:i,category:r,thumbnail:s}){return v("div",{className:"absolute group overflow-hidden mr-[30px]",children:[u("img",{src:`/storage/${s}`,className:"object-cover rounded-[30px] h-[340px] w-[250px]",alt:""}),u("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]",children:v("div",{className:"px-7 pb-7",children:[u("div",{className:"font-medium text-xl text-white",children:i}),u("p",{className:"mb-0 text-gray-300 text-base mt-[10px]",children:r})]})}),u("div",{className:`absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
            -translate-x-1/2 z-20 transition ease-in-out duration-500`,children:u("img",{src:"/icons/ic_play.svg",className:"",width:"50",alt:""})}),u(_,{href:route("user.dashboard.movie.show",p),className:"inset-0 absolute z-50"})]})}export{P as F,S as M,B as a,q as r};
