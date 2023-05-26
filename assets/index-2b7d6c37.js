var rv=Object.defineProperty;var sv=(n,e,t)=>e in n?rv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ue=(n,e,t)=>(sv(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var So={},ov={get exports(){return So},set exports(n){So=n}},Cl={},Ue={},av={get exports(){return Ue},set exports(n){Ue=n}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),lv=Symbol.for("react.portal"),uv=Symbol.for("react.fragment"),cv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),dv=Symbol.for("react.provider"),fv=Symbol.for("react.context"),pv=Symbol.for("react.forward_ref"),mv=Symbol.for("react.suspense"),gv=Symbol.for("react.memo"),vv=Symbol.for("react.lazy"),Md=Symbol.iterator;function xv(n){return n===null||typeof n!="object"?null:(n=Md&&n[Md]||n["@@iterator"],typeof n=="function"?n:null)}var fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pm=Object.assign,mm={};function Cs(n,e,t){this.props=n,this.context=e,this.refs=mm,this.updater=t||fm}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Cs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function gm(){}gm.prototype=Cs.prototype;function yh(n,e,t){this.props=n,this.context=e,this.refs=mm,this.updater=t||fm}var Sh=yh.prototype=new gm;Sh.constructor=yh;pm(Sh,Cs.prototype);Sh.isPureReactComponent=!0;var Ed=Array.isArray,vm=Object.prototype.hasOwnProperty,wh={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function _m(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vm.call(e,i)&&!xm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Xo,type:n,key:s,ref:o,props:r,_owner:wh.current}}function _v(n,e){return{$$typeof:Xo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Mh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Xo}function yv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Td=/\/+/g;function nu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?yv(""+n.key):e.toString(36)}function Ga(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Xo:case lv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+nu(o,0):i,Ed(r)?(t="",n!=null&&(t=n.replace(Td,"$&/")+"/"),Ga(r,e,t,"",function(u){return u})):r!=null&&(Mh(r)&&(r=_v(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Td,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ed(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+nu(s,a);o+=Ga(s,e,t,l,r)}else if(l=xv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+nu(s,a++),o+=Ga(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(n,e,t){if(n==null)return n;var i=[],r=0;return Ga(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Sv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var jt={current:null},Wa={transition:null},wv={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:wh};De.Children={map:Qo,forEach:function(n,e,t){Qo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Qo(n,function(){e++}),e},toArray:function(n){return Qo(n,function(e){return e})||[]},only:function(n){if(!Mh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};De.Component=Cs;De.Fragment=uv;De.Profiler=hv;De.PureComponent=yh;De.StrictMode=cv;De.Suspense=mv;De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;De.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=pm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)vm.call(e,l)&&!xm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Xo,type:n.type,key:r,ref:s,props:i,_owner:o}};De.createContext=function(n){return n={$$typeof:fv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:dv,_context:n},n.Consumer=n};De.createElement=_m;De.createFactory=function(n){var e=_m.bind(null,n);return e.type=n,e};De.createRef=function(){return{current:null}};De.forwardRef=function(n){return{$$typeof:pv,render:n}};De.isValidElement=Mh;De.lazy=function(n){return{$$typeof:vv,_payload:{_status:-1,_result:n},_init:Sv}};De.memo=function(n,e){return{$$typeof:gv,type:n,compare:e===void 0?null:e}};De.startTransition=function(n){var e=Wa.transition;Wa.transition={};try{n()}finally{Wa.transition=e}};De.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};De.useCallback=function(n,e){return jt.current.useCallback(n,e)};De.useContext=function(n){return jt.current.useContext(n)};De.useDebugValue=function(){};De.useDeferredValue=function(n){return jt.current.useDeferredValue(n)};De.useEffect=function(n,e){return jt.current.useEffect(n,e)};De.useId=function(){return jt.current.useId()};De.useImperativeHandle=function(n,e,t){return jt.current.useImperativeHandle(n,e,t)};De.useInsertionEffect=function(n,e){return jt.current.useInsertionEffect(n,e)};De.useLayoutEffect=function(n,e){return jt.current.useLayoutEffect(n,e)};De.useMemo=function(n,e){return jt.current.useMemo(n,e)};De.useReducer=function(n,e,t){return jt.current.useReducer(n,e,t)};De.useRef=function(n){return jt.current.useRef(n)};De.useState=function(n){return jt.current.useState(n)};De.useSyncExternalStore=function(n,e,t){return jt.current.useSyncExternalStore(n,e,t)};De.useTransition=function(){return jt.current.useTransition()};De.version="18.2.0";(function(n){n.exports=De})(av);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=Ue,Ev=Symbol.for("react.element"),Tv=Symbol.for("react.fragment"),bv=Object.prototype.hasOwnProperty,Av=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function ym(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)bv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ev,type:n,key:s,ref:o,props:r,_owner:Av.current}}Cl.Fragment=Tv;Cl.jsx=ym;Cl.jsxs=ym;(function(n){n.exports=Cl})(ov);const Sm=So.Fragment,Ge=So.jsx,gi=So.jsxs;var mc={},gc={},Lv={get exports(){return gc},set exports(n){gc=n}},mn={},vc={},Cv={get exports(){return vc},set exports(n){vc=n}},wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(R,G){var U=R.length;R.push(G);e:for(;0<U;){var ie=U-1>>>1,z=R[ie];if(0<r(z,G))R[ie]=G,R[U]=z,U=ie;else break e}}function t(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var G=R[0],U=R.pop();if(U!==G){R[0]=U;e:for(var ie=0,z=R.length,J=z>>>1;ie<J;){var ne=2*(ie+1)-1,F=R[ne],le=ne+1,re=R[le];if(0>r(F,U))le<z&&0>r(re,F)?(R[ie]=re,R[le]=U,ie=le):(R[ie]=F,R[ne]=U,ie=ne);else if(le<z&&0>r(re,U))R[ie]=re,R[le]=U,ie=le;else break e}}return G}function r(R,G){var U=R.sortIndex-G.sortIndex;return U!==0?U:R.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,x=!1,f=!1,p=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=R)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function y(R){if(f=!1,g(R),!x)if(t(l)!==null)x=!0,K(w);else{var G=t(u);G!==null&&Q(y,G.startTime-R)}}function w(R,G){x=!1,f&&(f=!1,v(S),S=-1),m=!0;var U=d;try{for(g(G),h=t(l);h!==null&&(!(h.expirationTime>G)||R&&!B());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,d=h.priorityLevel;var z=ie(h.expirationTime<=G);G=n.unstable_now(),typeof z=="function"?h.callback=z:h===t(l)&&i(l),g(G)}else i(l);h=t(l)}if(h!==null)var J=!0;else{var ne=t(u);ne!==null&&Q(y,ne.startTime-G),J=!1}return J}finally{h=null,d=U,m=!1}}var A=!1,T=null,S=-1,E=5,L=-1;function B(){return!(n.unstable_now()-L<E)}function V(){if(T!==null){var R=n.unstable_now();L=R;var G=!0;try{G=T(!0,R)}finally{G?N():(A=!1,T=null)}}else A=!1}var N;if(typeof _=="function")N=function(){_(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,H=I.port2;I.port1.onmessage=V,N=function(){H.postMessage(null)}}else N=function(){p(V,0)};function K(R){T=R,A||(A=!0,N())}function Q(R,G){S=p(function(){R(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,K(w))},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(R){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var U=d;d=G;try{return R()}finally{d=U}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var U=d;d=R;try{return G()}finally{d=U}},n.unstable_scheduleCallback=function(R,G,U){var ie=n.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ie+U:ie):U=ie,R){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=U+z,R={id:c++,callback:G,priorityLevel:R,startTime:U,expirationTime:z,sortIndex:-1},U>ie?(R.sortIndex=U,e(u,R),t(l)===null&&R===t(u)&&(f?(v(S),S=-1):f=!0,Q(y,U-ie))):(R.sortIndex=z,e(l,R),x||m||(x=!0,K(w))),R},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(R){var G=d;return function(){var U=d;d=G;try{return R.apply(this,arguments)}finally{d=U}}}})(wm);(function(n){n.exports=wm})(Cv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=Ue,pn=vc;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Em=new Set,wo={};function Lr(n,e){vs(n,e),vs(n+"Capture",e)}function vs(n,e){for(wo[n]=e,n=0;n<e.length;n++)Em.add(e[n])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=Object.prototype.hasOwnProperty,Dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bd={},Ad={};function Rv(n){return xc.call(Ad,n)?!0:xc.call(bd,n)?!1:Dv.test(n)?Ad[n]=!0:(bd[n]=!0,!1)}function zv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Iv(n,e,t,i){if(e===null||typeof e>"u"||zv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){bt[n]=new qt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];bt[e]=new qt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){bt[n]=new qt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){bt[n]=new qt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){bt[n]=new qt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){bt[n]=new qt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){bt[n]=new qt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){bt[n]=new qt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){bt[n]=new qt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Eh=/[\-:]([a-z])/g;function Th(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Eh,Th);bt[e]=new qt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Eh,Th);bt[e]=new qt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Eh,Th);bt[e]=new qt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){bt[n]=new qt(n,1,!1,n.toLowerCase(),null,!1,!1)});bt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){bt[n]=new qt(n,1,!1,n.toLowerCase(),null,!0,!0)});function bh(n,e,t,i){var r=bt.hasOwnProperty(e)?bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Iv(e,t,r,i)&&(t=null),i||r===null?Rv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Mi=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),qr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Ah=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),bm=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),yc=Symbol.for("react.suspense"),Sc=Symbol.for("react.suspense_list"),Lh=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Am=Symbol.for("react.offscreen"),Pd=Symbol.iterator;function ks(n){return n===null||typeof n!="object"?null:(n=Pd&&n[Pd]||n["@@iterator"],typeof n=="function"?n:null)}var tt=Object.assign,iu;function eo(n){if(iu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);iu=e&&e[1]||""}return`
`+iu+n}var ru=!1;function su(n,e){if(!n||ru)return"";ru=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{ru=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?eo(n):""}function Nv(n){switch(n.tag){case 5:return eo(n.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return n=su(n.type,!1),n;case 11:return n=su(n.type.render,!1),n;case 1:return n=su(n.type,!0),n;default:return""}}function wc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $r:return"Fragment";case qr:return"Portal";case _c:return"Profiler";case Ah:return"StrictMode";case yc:return"Suspense";case Sc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case bm:return(n.displayName||"Context")+".Consumer";case Tm:return(n._context.displayName||"Context")+".Provider";case Ph:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Lh:return e=n.displayName||null,e!==null?e:wc(n.type)||"Memo";case Li:e=n._payload,n=n._init;try{return wc(n(e))}catch{}}return null}function Fv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wc(e);case 8:return e===Ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kv(n){var e=Pm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ta(n){n._valueTracker||(n._valueTracker=kv(n))}function Lm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Pm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function tl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mc(n,e){var t=e.checked;return tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ld(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=$i(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cm(n,e){e=e.checked,e!=null&&bh(n,"checked",e,!1)}function Ec(n,e){Cm(n,e);var t=$i(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Tc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Tc(n,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Cd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Tc(n,e,t){(e!=="number"||tl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var to=Array.isArray;function ls(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+$i(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function bc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return tt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Dd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(to(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:$i(t)}}function Dm(n,e){var t=$i(e.value),i=$i(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Rd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Rm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ac(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Rm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var na,zm=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Mo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ov=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(n){Ov.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ao[e]=ao[n]})});function Im(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ao.hasOwnProperty(n)&&ao[n]?(""+e).trim():e+"px"}function Nm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Im(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Uv=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(n,e){if(e){if(Uv[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Lc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cc=null;function Ch(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Dc=null,us=null,cs=null;function zd(n){if(n=$o(n)){if(typeof Dc!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Nl(e),Dc(n.stateNode,n.type,e))}}function Fm(n){us?cs?cs.push(n):cs=[n]:us=n}function km(){if(us){var n=us,e=cs;if(cs=us=null,zd(n),e)for(n=0;n<e.length;n++)zd(e[n])}}function Om(n,e){return n(e)}function Um(){}var ou=!1;function Bm(n,e,t){if(ou)return n(e,t);ou=!0;try{return Om(n,e,t)}finally{ou=!1,(us!==null||cs!==null)&&(Um(),km())}}function Eo(n,e){var t=n.stateNode;if(t===null)return null;var i=Nl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var Rc=!1;if(_i)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Rc=!1}function Bv(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var lo=!1,nl=null,il=!1,zc=null,Vv={onError:function(n){lo=!0,nl=n}};function Gv(n,e,t,i,r,s,o,a,l){lo=!1,nl=null,Bv.apply(Vv,arguments)}function Wv(n,e,t,i,r,s,o,a,l){if(Gv.apply(this,arguments),lo){if(lo){var u=nl;lo=!1,nl=null}else throw Error(ee(198));il||(il=!0,zc=u)}}function Cr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Vm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Id(n){if(Cr(n)!==n)throw Error(ee(188))}function Hv(n){var e=n.alternate;if(!e){if(e=Cr(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Id(r),n;if(s===i)return Id(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function Gm(n){return n=Hv(n),n!==null?Wm(n):null}function Wm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Wm(n);if(e!==null)return e;n=n.sibling}return null}var Hm=pn.unstable_scheduleCallback,Nd=pn.unstable_cancelCallback,Xv=pn.unstable_shouldYield,jv=pn.unstable_requestPaint,st=pn.unstable_now,qv=pn.unstable_getCurrentPriorityLevel,Dh=pn.unstable_ImmediatePriority,Xm=pn.unstable_UserBlockingPriority,rl=pn.unstable_NormalPriority,$v=pn.unstable_LowPriority,jm=pn.unstable_IdlePriority,Dl=null,ti=null;function Yv(n){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(Dl,n,void 0,(n.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:Jv,Zv=Math.log,Kv=Math.LN2;function Jv(n){return n>>>=0,n===0?32:31-(Zv(n)/Kv|0)|0}var ia=64,ra=4194304;function no(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function sl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=no(a):(s&=o,s!==0&&(i=no(s)))}else o=t&~r,o!==0?i=no(o):s!==0&&(i=no(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-On(e),r=1<<t,i|=n[t],e&=~r;return i}function Qv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ex(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Qv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ic(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qm(){var n=ia;return ia<<=1,!(ia&4194240)&&(ia=64),n}function au(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function jo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-On(e),n[e]=t}function tx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-On(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Rh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-On(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ve=0;function $m(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ym,zh,Zm,Km,Jm,Nc=!1,sa=[],Ui=null,Bi=null,Vi=null,To=new Map,bo=new Map,Di=[],nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(n,e){switch(n){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function Us(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$o(e),e!==null&&zh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ix(n,e,t,i,r){switch(e){case"focusin":return Ui=Us(Ui,n,e,t,i,r),!0;case"dragenter":return Bi=Us(Bi,n,e,t,i,r),!0;case"mouseover":return Vi=Us(Vi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return To.set(s,Us(To.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bo.set(s,Us(bo.get(s)||null,n,e,t,i,r)),!0}return!1}function Qm(n){var e=hr(n.target);if(e!==null){var t=Cr(e);if(t!==null){if(e=t.tag,e===13){if(e=Vm(t),e!==null){n.blockedOn=e,Jm(n.priority,function(){Zm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ha(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Fc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Cc=i,t.target.dispatchEvent(i),Cc=null}else return e=$o(t),e!==null&&zh(e),n.blockedOn=t,!1;e.shift()}return!0}function kd(n,e,t){Ha(n)&&t.delete(e)}function rx(){Nc=!1,Ui!==null&&Ha(Ui)&&(Ui=null),Bi!==null&&Ha(Bi)&&(Bi=null),Vi!==null&&Ha(Vi)&&(Vi=null),To.forEach(kd),bo.forEach(kd)}function Bs(n,e){n.blockedOn===e&&(n.blockedOn=null,Nc||(Nc=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,rx)))}function Ao(n){function e(r){return Bs(r,n)}if(0<sa.length){Bs(sa[0],n);for(var t=1;t<sa.length;t++){var i=sa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ui!==null&&Bs(Ui,n),Bi!==null&&Bs(Bi,n),Vi!==null&&Bs(Vi,n),To.forEach(e),bo.forEach(e),t=0;t<Di.length;t++)i=Di[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Di.length&&(t=Di[0],t.blockedOn===null);)Qm(t),t.blockedOn===null&&Di.shift()}var hs=Mi.ReactCurrentBatchConfig,ol=!0;function sx(n,e,t,i){var r=Ve,s=hs.transition;hs.transition=null;try{Ve=1,Ih(n,e,t,i)}finally{Ve=r,hs.transition=s}}function ox(n,e,t,i){var r=Ve,s=hs.transition;hs.transition=null;try{Ve=4,Ih(n,e,t,i)}finally{Ve=r,hs.transition=s}}function Ih(n,e,t,i){if(ol){var r=Fc(n,e,t,i);if(r===null)vu(n,e,i,al,t),Fd(n,i);else if(ix(r,n,e,t,i))i.stopPropagation();else if(Fd(n,i),e&4&&-1<nx.indexOf(n)){for(;r!==null;){var s=$o(r);if(s!==null&&Ym(s),s=Fc(n,e,t,i),s===null&&vu(n,e,i,al,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else vu(n,e,i,null,t)}}var al=null;function Fc(n,e,t,i){if(al=null,n=Ch(i),n=hr(n),n!==null)if(e=Cr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Vm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return al=n,null}function eg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qv()){case Dh:return 1;case Xm:return 4;case rl:case $v:return 16;case jm:return 536870912;default:return 16}default:return 16}}var Ii=null,Nh=null,Xa=null;function tg(){if(Xa)return Xa;var n,e=Nh,t=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Xa=r.slice(n,1<i?1-i:void 0)}function ja(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function oa(){return!0}function Od(){return!1}function gn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:Od,this.isPropagationStopped=Od,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fh=gn(Ds),qo=tt({},Ds,{view:0,detail:0}),ax=gn(qo),lu,uu,Vs,Rl=tt({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vs&&(Vs&&n.type==="mousemove"?(lu=n.screenX-Vs.screenX,uu=n.screenY-Vs.screenY):uu=lu=0,Vs=n),lu)},movementY:function(n){return"movementY"in n?n.movementY:uu}}),Ud=gn(Rl),lx=tt({},Rl,{dataTransfer:0}),ux=gn(lx),cx=tt({},qo,{relatedTarget:0}),cu=gn(cx),hx=tt({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=gn(hx),fx=tt({},Ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),px=gn(fx),mx=tt({},Ds,{data:0}),Bd=gn(mx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=xx[n])?!!e[n]:!1}function kh(){return _x}var yx=tt({},qo,{key:function(n){if(n.key){var e=gx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ja(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?vx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(n){return n.type==="keypress"?ja(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ja(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Sx=gn(yx),wx=tt({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=gn(wx),Mx=tt({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),Ex=gn(Mx),Tx=tt({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=gn(Tx),Ax=tt({},Rl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=gn(Ax),Lx=[9,13,27,32],Oh=_i&&"CompositionEvent"in window,uo=null;_i&&"documentMode"in document&&(uo=document.documentMode);var Cx=_i&&"TextEvent"in window&&!uo,ng=_i&&(!Oh||uo&&8<uo&&11>=uo),Gd=String.fromCharCode(32),Wd=!1;function ig(n,e){switch(n){case"keyup":return Lx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Yr=!1;function Dx(n,e){switch(n){case"compositionend":return rg(e);case"keypress":return e.which!==32?null:(Wd=!0,Gd);case"textInput":return n=e.data,n===Gd&&Wd?null:n;default:return null}}function Rx(n,e){if(Yr)return n==="compositionend"||!Oh&&ig(n,e)?(n=tg(),Xa=Nh=Ii=null,Yr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ng&&e.locale!=="ko"?null:e.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!zx[n.type]:e==="textarea"}function sg(n,e,t,i){Fm(i),e=ll(e,"onChange"),0<e.length&&(t=new Fh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var co=null,Po=null;function Ix(n){gg(n,0)}function zl(n){var e=Jr(n);if(Lm(e))return n}function Nx(n,e){if(n==="change")return e}var og=!1;if(_i){var hu;if(_i){var du="oninput"in document;if(!du){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),du=typeof Xd.oninput=="function"}hu=du}else hu=!1;og=hu&&(!document.documentMode||9<document.documentMode)}function jd(){co&&(co.detachEvent("onpropertychange",ag),Po=co=null)}function ag(n){if(n.propertyName==="value"&&zl(Po)){var e=[];sg(e,Po,n,Ch(n)),Bm(Ix,e)}}function Fx(n,e,t){n==="focusin"?(jd(),co=e,Po=t,co.attachEvent("onpropertychange",ag)):n==="focusout"&&jd()}function kx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zl(Po)}function Ox(n,e){if(n==="click")return zl(e)}function Ux(n,e){if(n==="input"||n==="change")return zl(e)}function Bx(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Gn=typeof Object.is=="function"?Object.is:Bx;function Lo(n,e){if(Gn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!xc.call(e,r)||!Gn(n[r],e[r]))return!1}return!0}function qd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $d(n,e){var t=qd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=qd(t)}}function lg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?lg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ug(){for(var n=window,e=tl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=tl(n.document)}return e}function Uh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Vx(n){var e=ug(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&lg(t.ownerDocument.documentElement,t)){if(i!==null&&Uh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=$d(t,s);var o=$d(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Gx=_i&&"documentMode"in document&&11>=document.documentMode,Zr=null,kc=null,ho=null,Oc=!1;function Yd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Oc||Zr==null||Zr!==tl(i)||(i=Zr,"selectionStart"in i&&Uh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&Lo(ho,i)||(ho=i,i=ll(kc,"onSelect"),0<i.length&&(e=new Fh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Zr)))}function aa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Kr={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},fu={},cg={};_i&&(cg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Il(n){if(fu[n])return fu[n];if(!Kr[n])return n;var e=Kr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in cg)return fu[n]=e[t];return n}var hg=Il("animationend"),dg=Il("animationiteration"),fg=Il("animationstart"),pg=Il("transitionend"),mg=new Map,Zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(n,e){mg.set(n,e),Lr(e,[n])}for(var pu=0;pu<Zd.length;pu++){var mu=Zd[pu],Wx=mu.toLowerCase(),Hx=mu[0].toUpperCase()+mu.slice(1);Zi(Wx,"on"+Hx)}Zi(hg,"onAnimationEnd");Zi(dg,"onAnimationIteration");Zi(fg,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(pg,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function Kd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Wv(i,e,void 0,n),n.currentTarget=null}function gg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Kd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Kd(r,a,u),s=l}}}if(il)throw n=zc,il=!1,zc=null,n}function Xe(n,e){var t=e[Wc];t===void 0&&(t=e[Wc]=new Set);var i=n+"__bubble";t.has(i)||(vg(e,n,2,!1),t.add(i))}function gu(n,e,t){var i=0;e&&(i|=4),vg(t,n,i,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function Co(n){if(!n[la]){n[la]=!0,Em.forEach(function(t){t!=="selectionchange"&&(Xx.has(t)||gu(t,!1,n),gu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[la]||(e[la]=!0,gu("selectionchange",!1,e))}}function vg(n,e,t,i){switch(eg(e)){case 1:var r=sx;break;case 4:r=ox;break;default:r=Ih}t=r.bind(null,e,t,n),r=void 0,!Rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function vu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Bm(function(){var u=s,c=Ch(t),h=[];e:{var d=mg.get(n);if(d!==void 0){var m=Fh,x=n;switch(n){case"keypress":if(ja(t)===0)break e;case"keydown":case"keyup":m=Sx;break;case"focusin":x="focus",m=cu;break;case"focusout":x="blur",m=cu;break;case"beforeblur":case"afterblur":m=cu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ex;break;case hg:case dg:case fg:m=dx;break;case pg:m=bx;break;case"scroll":m=ax;break;case"wheel":m=Px;break;case"copy":case"cut":case"paste":m=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vd}var f=(e&4)!==0,p=!f&&n==="scroll",v=f?d!==null?d+"Capture":null:d;f=[];for(var _=u,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,v!==null&&(y=Eo(_,v),y!=null&&f.push(Do(_,y,g)))),p)break;_=_.return}0<f.length&&(d=new m(d,x,null,t,c),h.push({event:d,listeners:f}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",d&&t!==Cc&&(x=t.relatedTarget||t.fromElement)&&(hr(x)||x[yi]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=u,x=x?hr(x):null,x!==null&&(p=Cr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(f=Ud,y="onMouseLeave",v="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(f=Vd,y="onPointerLeave",v="onPointerEnter",_="pointer"),p=m==null?d:Jr(m),g=x==null?d:Jr(x),d=new f(y,_+"leave",m,t,c),d.target=p,d.relatedTarget=g,y=null,hr(c)===u&&(f=new f(v,_+"enter",x,t,c),f.target=g,f.relatedTarget=p,y=f),p=y,m&&x)t:{for(f=m,v=x,_=0,g=f;g;g=Dr(g))_++;for(g=0,y=v;y;y=Dr(y))g++;for(;0<_-g;)f=Dr(f),_--;for(;0<g-_;)v=Dr(v),g--;for(;_--;){if(f===v||v!==null&&f===v.alternate)break t;f=Dr(f),v=Dr(v)}f=null}else f=null;m!==null&&Jd(h,d,m,f,!1),x!==null&&p!==null&&Jd(h,p,x,f,!0)}}e:{if(d=u?Jr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var w=Nx;else if(Hd(d))if(og)w=Ux;else{w=kx;var A=Fx}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=Ox);if(w&&(w=w(n,u))){sg(h,w,t,c);break e}A&&A(n,d,u),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Tc(d,"number",d.value)}switch(A=u?Jr(u):window,n){case"focusin":(Hd(A)||A.contentEditable==="true")&&(Zr=A,kc=u,ho=null);break;case"focusout":ho=kc=Zr=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Yd(h,t,c);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":Yd(h,t,c)}var T;if(Oh)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Yr?ig(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(ng&&t.locale!=="ko"&&(Yr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Yr&&(T=tg()):(Ii=c,Nh="value"in Ii?Ii.value:Ii.textContent,Yr=!0)),A=ll(u,S),0<A.length&&(S=new Bd(S,n,null,t,c),h.push({event:S,listeners:A}),T?S.data=T:(T=rg(t),T!==null&&(S.data=T)))),(T=Cx?Dx(n,t):Rx(n,t))&&(u=ll(u,"onBeforeInput"),0<u.length&&(c=new Bd("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=T))}gg(h,e)})}function Do(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ll(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Eo(n,t),s!=null&&i.unshift(Do(n,s,r)),s=Eo(n,e),s!=null&&i.push(Do(n,s,r))),n=n.return}return i}function Dr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jd(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Eo(t,s),l!=null&&o.unshift(Do(t,l,a))):r||(l=Eo(t,s),l!=null&&o.push(Do(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var jx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Qd(n){return(typeof n=="string"?n:""+n).replace(jx,`
`).replace(qx,"")}function ua(n,e,t){if(e=Qd(e),Qd(n)!==e&&t)throw Error(ee(425))}function ul(){}var Uc=null,Bc=null;function Vc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,ef=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof ef<"u"?function(n){return ef.resolve(null).then(n).catch(Zx)}:Gc;function Zx(n){setTimeout(function(){throw n})}function xu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ao(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ao(e)}function Gi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function tf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Rs,Ro="__reactProps$"+Rs,yi="__reactContainer$"+Rs,Wc="__reactEvents$"+Rs,Kx="__reactListeners$"+Rs,Jx="__reactHandles$"+Rs;function hr(n){var e=n[Qn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[yi]||t[Qn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=tf(n);n!==null;){if(t=n[Qn])return t;n=tf(n)}return e}n=t,t=n.parentNode}return null}function $o(n){return n=n[Qn]||n[yi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Jr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Nl(n){return n[Ro]||null}var Hc=[],Qr=-1;function Ki(n){return{current:n}}function qe(n){0>Qr||(n.current=Hc[Qr],Hc[Qr]=null,Qr--)}function We(n,e){Qr++,Hc[Qr]=n.current,n.current=e}var Yi={},zt=Ki(Yi),Qt=Ki(!1),_r=Yi;function xs(n,e){var t=n.type.contextTypes;if(!t)return Yi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function en(n){return n=n.childContextTypes,n!=null}function cl(){qe(Qt),qe(zt)}function nf(n,e,t){if(zt.current!==Yi)throw Error(ee(168));We(zt,e),We(Qt,t)}function xg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,Fv(n)||"Unknown",r));return tt({},t,i)}function hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yi,_r=zt.current,We(zt,n),We(Qt,Qt.current),!0}function rf(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=xg(n,e,_r),i.__reactInternalMemoizedMergedChildContext=n,qe(Qt),qe(zt),We(zt,n)):qe(Qt),We(Qt,t)}var hi=null,Fl=!1,_u=!1;function _g(n){hi===null?hi=[n]:hi.push(n)}function Qx(n){Fl=!0,_g(n)}function Ji(){if(!_u&&hi!==null){_u=!0;var n=0,e=Ve;try{var t=hi;for(Ve=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}hi=null,Fl=!1}catch(r){throw hi!==null&&(hi=hi.slice(n+1)),Hm(Dh,Ji),r}finally{Ve=e,_u=!1}}return null}var es=[],ts=0,dl=null,fl=0,_n=[],yn=0,yr=null,pi=1,mi="";function sr(n,e){es[ts++]=fl,es[ts++]=dl,dl=n,fl=e}function yg(n,e,t){_n[yn++]=pi,_n[yn++]=mi,_n[yn++]=yr,yr=n;var i=pi;n=mi;var r=32-On(i)-1;i&=~(1<<r),t+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-On(e)+r|t<<r|i,mi=s+n}else pi=1<<s|t<<r|i,mi=n}function Bh(n){n.return!==null&&(sr(n,1),yg(n,1,0))}function Vh(n){for(;n===dl;)dl=es[--ts],es[ts]=null,fl=es[--ts],es[ts]=null;for(;n===yr;)yr=_n[--yn],_n[yn]=null,mi=_n[--yn],_n[yn]=null,pi=_n[--yn],_n[yn]=null}var hn=null,cn=null,$e=!1,In=null;function Sg(n,e){var t=wn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function sf(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,hn=n,cn=Gi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,hn=n,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=yr!==null?{id:pi,overflow:mi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=wn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,hn=n,cn=null,!0):!1;default:return!1}}function Xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if($e){var e=cn;if(e){var t=e;if(!sf(n,e)){if(Xc(n))throw Error(ee(418));e=Gi(t.nextSibling);var i=hn;e&&sf(n,e)?Sg(i,t):(n.flags=n.flags&-4097|2,$e=!1,hn=n)}}else{if(Xc(n))throw Error(ee(418));n.flags=n.flags&-4097|2,$e=!1,hn=n}}}function of(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function ca(n){if(n!==hn)return!1;if(!$e)return of(n),$e=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Vc(n.type,n.memoizedProps)),e&&(e=cn)){if(Xc(n))throw wg(),Error(ee(418));for(;e;)Sg(n,e),e=Gi(e.nextSibling)}if(of(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){cn=Gi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}cn=null}}else cn=hn?Gi(n.stateNode.nextSibling):null;return!0}function wg(){for(var n=cn;n;)n=Gi(n.nextSibling)}function _s(){cn=hn=null,$e=!1}function Gh(n){In===null?In=[n]:In.push(n)}var e_=Mi.ReactCurrentBatchConfig;function Rn(n,e){if(n&&n.defaultProps){e=tt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var pl=Ki(null),ml=null,ns=null,Wh=null;function Hh(){Wh=ns=ml=null}function Xh(n){var e=pl.current;qe(pl),n._currentValue=e}function qc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ds(n,e){ml=n,Wh=ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Kt=!0),n.firstContext=null)}function En(n){var e=n._currentValue;if(Wh!==n)if(n={context:n,memoizedValue:e,next:null},ns===null){if(ml===null)throw Error(ee(308));ns=n,ml.dependencies={lanes:0,firstContext:n}}else ns=ns.next=n;return e}var dr=null;function jh(n){dr===null?dr=[n]:dr.push(n)}function Mg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,jh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Si(n,i)}function Si(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ci=!1;function qh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Fe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(n,t)}return r=i.interleaved,r===null?(e.next=e,jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(n,t)}function qa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Rh(n,t)}}function af(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function gl(n,e,t,i){var r=n.updateQueue;Ci=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,f=a;switch(d=e,m=t,f.tag){case 1:if(x=f.payload,typeof x=="function"){h=x.call(m,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=f.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break e;h=tt({},h,d);break e;case 2:Ci=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=o,n.lanes=o,n.memoizedState=h}}function lf(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Tg=new Mm.Component().refs;function $c(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:tt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var kl={isMounted:function(n){return(n=n._reactInternals)?Cr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Xt(),r=Xi(n),s=vi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Wi(n,s,r),e!==null&&(Un(e,n,r,i),qa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Xt(),r=Xi(n),s=vi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Wi(n,s,r),e!==null&&(Un(e,n,r,i),qa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Xt(),i=Xi(n),r=vi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(n,r,i),e!==null&&(Un(e,n,i,t),qa(e,n,i))}};function uf(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Lo(t,i)||!Lo(r,s):!0}function bg(n,e,t){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=en(e)?_r:zt.current,i=e.contextTypes,s=(i=i!=null)?xs(n,r):Yi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function cf(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&kl.enqueueReplaceState(e,e.state,null)}function Yc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Tg,qh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=en(e)?_r:zt.current,r.context=xs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($c(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kl.enqueueReplaceState(r,r.state,null),gl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Tg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function ha(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function hf(n){var e=n._init;return e(n._payload)}function Ag(n){function e(v,_){if(n){var g=v.deletions;g===null?(v.deletions=[_],v.flags|=16):g.push(_)}}function t(v,_){if(!n)return null;for(;_!==null;)e(v,_),_=_.sibling;return null}function i(v,_){for(v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function r(v,_){return v=ji(v,_),v.index=0,v.sibling=null,v}function s(v,_,g){return v.index=g,n?(g=v.alternate,g!==null?(g=g.index,g<_?(v.flags|=2,_):g):(v.flags|=2,_)):(v.flags|=1048576,_)}function o(v){return n&&v.alternate===null&&(v.flags|=2),v}function a(v,_,g,y){return _===null||_.tag!==6?(_=bu(g,v.mode,y),_.return=v,_):(_=r(_,g),_.return=v,_)}function l(v,_,g,y){var w=g.type;return w===$r?c(v,_,g.props.children,y,g.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Li&&hf(w)===_.type)?(y=r(_,g.props),y.ref=Gs(v,_,g),y.return=v,y):(y=Qa(g.type,g.key,g.props,null,v.mode,y),y.ref=Gs(v,_,g),y.return=v,y)}function u(v,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Au(g,v.mode,y),_.return=v,_):(_=r(_,g.children||[]),_.return=v,_)}function c(v,_,g,y,w){return _===null||_.tag!==7?(_=vr(g,v.mode,y,w),_.return=v,_):(_=r(_,g),_.return=v,_)}function h(v,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=bu(""+_,v.mode,g),_.return=v,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ea:return g=Qa(_.type,_.key,_.props,null,v.mode,g),g.ref=Gs(v,null,_),g.return=v,g;case qr:return _=Au(_,v.mode,g),_.return=v,_;case Li:var y=_._init;return h(v,y(_._payload),g)}if(to(_)||ks(_))return _=vr(_,v.mode,g,null),_.return=v,_;ha(v,_)}return null}function d(v,_,g,y){var w=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:a(v,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ea:return g.key===w?l(v,_,g,y):null;case qr:return g.key===w?u(v,_,g,y):null;case Li:return w=g._init,d(v,_,w(g._payload),y)}if(to(g)||ks(g))return w!==null?null:c(v,_,g,y,null);ha(v,g)}return null}function m(v,_,g,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return v=v.get(g)||null,a(_,v,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ea:return v=v.get(y.key===null?g:y.key)||null,l(_,v,y,w);case qr:return v=v.get(y.key===null?g:y.key)||null,u(_,v,y,w);case Li:var A=y._init;return m(v,_,g,A(y._payload),w)}if(to(y)||ks(y))return v=v.get(g)||null,c(_,v,y,w,null);ha(_,y)}return null}function x(v,_,g,y){for(var w=null,A=null,T=_,S=_=0,E=null;T!==null&&S<g.length;S++){T.index>S?(E=T,T=null):E=T.sibling;var L=d(v,T,g[S],y);if(L===null){T===null&&(T=E);break}n&&T&&L.alternate===null&&e(v,T),_=s(L,_,S),A===null?w=L:A.sibling=L,A=L,T=E}if(S===g.length)return t(v,T),$e&&sr(v,S),w;if(T===null){for(;S<g.length;S++)T=h(v,g[S],y),T!==null&&(_=s(T,_,S),A===null?w=T:A.sibling=T,A=T);return $e&&sr(v,S),w}for(T=i(v,T);S<g.length;S++)E=m(T,v,S,g[S],y),E!==null&&(n&&E.alternate!==null&&T.delete(E.key===null?S:E.key),_=s(E,_,S),A===null?w=E:A.sibling=E,A=E);return n&&T.forEach(function(B){return e(v,B)}),$e&&sr(v,S),w}function f(v,_,g,y){var w=ks(g);if(typeof w!="function")throw Error(ee(150));if(g=w.call(g),g==null)throw Error(ee(151));for(var A=w=null,T=_,S=_=0,E=null,L=g.next();T!==null&&!L.done;S++,L=g.next()){T.index>S?(E=T,T=null):E=T.sibling;var B=d(v,T,L.value,y);if(B===null){T===null&&(T=E);break}n&&T&&B.alternate===null&&e(v,T),_=s(B,_,S),A===null?w=B:A.sibling=B,A=B,T=E}if(L.done)return t(v,T),$e&&sr(v,S),w;if(T===null){for(;!L.done;S++,L=g.next())L=h(v,L.value,y),L!==null&&(_=s(L,_,S),A===null?w=L:A.sibling=L,A=L);return $e&&sr(v,S),w}for(T=i(v,T);!L.done;S++,L=g.next())L=m(T,v,S,L.value,y),L!==null&&(n&&L.alternate!==null&&T.delete(L.key===null?S:L.key),_=s(L,_,S),A===null?w=L:A.sibling=L,A=L);return n&&T.forEach(function(V){return e(v,V)}),$e&&sr(v,S),w}function p(v,_,g,y){if(typeof g=="object"&&g!==null&&g.type===$r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ea:e:{for(var w=g.key,A=_;A!==null;){if(A.key===w){if(w=g.type,w===$r){if(A.tag===7){t(v,A.sibling),_=r(A,g.props.children),_.return=v,v=_;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Li&&hf(w)===A.type){t(v,A.sibling),_=r(A,g.props),_.ref=Gs(v,A,g),_.return=v,v=_;break e}t(v,A);break}else e(v,A);A=A.sibling}g.type===$r?(_=vr(g.props.children,v.mode,y,g.key),_.return=v,v=_):(y=Qa(g.type,g.key,g.props,null,v.mode,y),y.ref=Gs(v,_,g),y.return=v,v=y)}return o(v);case qr:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){t(v,_.sibling),_=r(_,g.children||[]),_.return=v,v=_;break e}else{t(v,_);break}else e(v,_);_=_.sibling}_=Au(g,v.mode,y),_.return=v,v=_}return o(v);case Li:return A=g._init,p(v,_,A(g._payload),y)}if(to(g))return x(v,_,g,y);if(ks(g))return f(v,_,g,y);ha(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(t(v,_.sibling),_=r(_,g),_.return=v,v=_):(t(v,_),_=bu(g,v.mode,y),_.return=v,v=_),o(v)):t(v,_)}return p}var ys=Ag(!0),Pg=Ag(!1),Yo={},ni=Ki(Yo),zo=Ki(Yo),Io=Ki(Yo);function fr(n){if(n===Yo)throw Error(ee(174));return n}function $h(n,e){switch(We(Io,e),We(zo,n),We(ni,Yo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ac(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ac(e,n)}qe(ni),We(ni,e)}function Ss(){qe(ni),qe(zo),qe(Io)}function Lg(n){fr(Io.current);var e=fr(ni.current),t=Ac(e,n.type);e!==t&&(We(zo,n),We(ni,t))}function Yh(n){zo.current===n&&(qe(ni),qe(zo))}var Je=Ki(0);function vl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yu=[];function Zh(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var $a=Mi.ReactCurrentDispatcher,Su=Mi.ReactCurrentBatchConfig,Sr=0,et=null,ht=null,St=null,xl=!1,fo=!1,No=0,t_=0;function At(){throw Error(ee(321))}function Kh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Gn(n[t],e[t]))return!1;return!0}function Jh(n,e,t,i,r,s){if(Sr=s,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=n===null||n.memoizedState===null?s_:o_,n=t(i,r),fo){s=0;do{if(fo=!1,No=0,25<=s)throw Error(ee(301));s+=1,St=ht=null,e.updateQueue=null,$a.current=a_,n=t(i,r)}while(fo)}if($a.current=_l,e=ht!==null&&ht.next!==null,Sr=0,St=ht=et=null,xl=!1,e)throw Error(ee(300));return n}function Qh(){var n=No!==0;return No=0,n}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?et.memoizedState=St=n:St=St.next=n,St}function Tn(){if(ht===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var e=St===null?et.memoizedState:St.next;if(e!==null)St=e,ht=n;else{if(n===null)throw Error(ee(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},St===null?et.memoizedState=St=n:St=St.next=n}return St}function Fo(n,e){return typeof e=="function"?e(n):e}function wu(n){var e=Tn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=ht,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Sr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,et.lanes|=c,wr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Gn(i,e.memoizedState)||(Kt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,et.lanes|=s,wr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Mu(n){var e=Tn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Gn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Cg(){}function Dg(n,e){var t=et,i=Tn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,Kt=!0),i=i.queue,ed(Ig.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||St!==null&&St.memoizedState.tag&1){if(t.flags|=2048,ko(9,zg.bind(null,t,i,r,e),void 0,null),wt===null)throw Error(ee(349));Sr&30||Rg(t,e,r)}return r}function Rg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function zg(n,e,t,i){e.value=t,e.getSnapshot=i,Ng(e)&&Fg(n)}function Ig(n,e,t){return t(function(){Ng(e)&&Fg(n)})}function Ng(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Gn(n,t)}catch{return!0}}function Fg(n){var e=Si(n,1);e!==null&&Un(e,n,1,-1)}function df(n){var e=Zn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},e.queue=n,n=n.dispatch=r_.bind(null,et,n),[e.memoizedState,n]}function ko(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function kg(){return Tn().memoizedState}function Ya(n,e,t,i){var r=Zn();et.flags|=n,r.memoizedState=ko(1|e,t,void 0,i===void 0?null:i)}function Ol(n,e,t,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(ht!==null){var o=ht.memoizedState;if(s=o.destroy,i!==null&&Kh(i,o.deps)){r.memoizedState=ko(e,t,s,i);return}}et.flags|=n,r.memoizedState=ko(1|e,t,s,i)}function ff(n,e){return Ya(8390656,8,n,e)}function ed(n,e){return Ol(2048,8,n,e)}function Og(n,e){return Ol(4,2,n,e)}function Ug(n,e){return Ol(4,4,n,e)}function Bg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Vg(n,e,t){return t=t!=null?t.concat([n]):null,Ol(4,4,Bg.bind(null,e,n),t)}function td(){}function Gg(n,e){var t=Tn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Wg(n,e){var t=Tn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Hg(n,e,t){return Sr&21?(Gn(t,e)||(t=qm(),et.lanes|=t,wr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=t)}function n_(n,e){var t=Ve;Ve=t!==0&&4>t?t:4,n(!0);var i=Su.transition;Su.transition={};try{n(!1),e()}finally{Ve=t,Su.transition=i}}function Xg(){return Tn().memoizedState}function i_(n,e,t){var i=Xi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},jg(n))qg(e,t);else if(t=Mg(n,e,t,i),t!==null){var r=Xt();Un(t,n,i,r),$g(t,e,i)}}function r_(n,e,t){var i=Xi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(jg(n))qg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(r.next=r,jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Mg(n,e,r,i),t!==null&&(r=Xt(),Un(t,n,i,r),$g(t,e,i))}}function jg(n){var e=n.alternate;return n===et||e!==null&&e===et}function qg(n,e){fo=xl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function $g(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Rh(n,t)}}var _l={readContext:En,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},s_={readContext:En,useCallback:function(n,e){return Zn().memoizedState=[n,e===void 0?null:e],n},useContext:En,useEffect:ff,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ya(4194308,4,Bg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ya(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ya(4,2,n,e)},useMemo:function(n,e){var t=Zn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Zn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=i_.bind(null,et,n),[i.memoizedState,n]},useRef:function(n){var e=Zn();return n={current:n},e.memoizedState=n},useState:df,useDebugValue:td,useDeferredValue:function(n){return Zn().memoizedState=n},useTransition:function(){var n=df(!1),e=n[0];return n=n_.bind(null,n[1]),Zn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=et,r=Zn();if($e){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),wt===null)throw Error(ee(349));Sr&30||Rg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ff(Ig.bind(null,i,s,n),[n]),i.flags|=2048,ko(9,zg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Zn(),e=wt.identifierPrefix;if($e){var t=mi,i=pi;t=(i&~(1<<32-On(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=No++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=t_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},o_={readContext:En,useCallback:Gg,useContext:En,useEffect:ed,useImperativeHandle:Vg,useInsertionEffect:Og,useLayoutEffect:Ug,useMemo:Wg,useReducer:wu,useRef:kg,useState:function(){return wu(Fo)},useDebugValue:td,useDeferredValue:function(n){var e=Tn();return Hg(e,ht.memoizedState,n)},useTransition:function(){var n=wu(Fo)[0],e=Tn().memoizedState;return[n,e]},useMutableSource:Cg,useSyncExternalStore:Dg,useId:Xg,unstable_isNewReconciler:!1},a_={readContext:En,useCallback:Gg,useContext:En,useEffect:ed,useImperativeHandle:Vg,useInsertionEffect:Og,useLayoutEffect:Ug,useMemo:Wg,useReducer:Mu,useRef:kg,useState:function(){return Mu(Fo)},useDebugValue:td,useDeferredValue:function(n){var e=Tn();return ht===null?e.memoizedState=n:Hg(e,ht.memoizedState,n)},useTransition:function(){var n=Mu(Fo)[0],e=Tn().memoizedState;return[n,e]},useMutableSource:Cg,useSyncExternalStore:Dg,useId:Xg,unstable_isNewReconciler:!1};function ws(n,e){try{var t="",i=e;do t+=Nv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Eu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Zc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var l_=typeof WeakMap=="function"?WeakMap:Map;function Yg(n,e,t){t=vi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Sl||(Sl=!0,oh=i),Zc(n,e)},t}function Zg(n,e,t){t=vi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Zc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Zc(n,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function pf(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new l_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=w_.bind(null,n,e,t),e.then(n,n))}function mf(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function gf(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=vi(-1,1),e.tag=2,Wi(t,e,1))),t.lanes|=1),n)}var u_=Mi.ReactCurrentOwner,Kt=!1;function Ut(n,e,t,i){e.child=n===null?Pg(e,null,t,i):ys(e,n.child,t,i)}function vf(n,e,t,i,r){t=t.render;var s=e.ref;return ds(e,r),i=Jh(n,e,t,i,s,r),t=Qh(),n!==null&&!Kt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,wi(n,e,r)):($e&&t&&Bh(e),e.flags|=1,Ut(n,e,i,r),e.child)}function xf(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ud(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Kg(n,e,s,i,r)):(n=Qa(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Lo,t(o,i)&&n.ref===e.ref)return wi(n,e,r)}return e.flags|=1,n=ji(s,i),n.ref=e.ref,n.return=e,e.child=n}function Kg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Lo(s,i)&&n.ref===e.ref)if(Kt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Kt=!0);else return e.lanes=n.lanes,wi(n,e,r)}return Kc(n,e,t,i,r)}function Jg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(rs,un),un|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,We(rs,un),un|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,We(rs,un),un|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,We(rs,un),un|=i;return Ut(n,e,r,t),e.child}function Qg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Kc(n,e,t,i,r){var s=en(t)?_r:zt.current;return s=xs(e,s),ds(e,r),t=Jh(n,e,t,i,s,r),i=Qh(),n!==null&&!Kt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,wi(n,e,r)):($e&&i&&Bh(e),e.flags|=1,Ut(n,e,t,r),e.child)}function _f(n,e,t,i,r){if(en(t)){var s=!0;hl(e)}else s=!1;if(ds(e,r),e.stateNode===null)Za(n,e),bg(e,t,i),Yc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=En(u):(u=en(t)?_r:zt.current,u=xs(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&cf(e,o,i,u),Ci=!1;var d=e.memoizedState;o.state=d,gl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Qt.current||Ci?(typeof c=="function"&&($c(e,t,c,i),l=e.memoizedState),(a=Ci||uf(e,t,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Eg(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=En(l):(l=en(t)?_r:zt.current,l=xs(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&cf(e,o,i,l),Ci=!1,d=e.memoizedState,o.state=d,gl(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||Qt.current||Ci?(typeof m=="function"&&($c(e,t,m,i),x=e.memoizedState),(u=Ci||uf(e,t,u,i,d,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Jc(n,e,t,i,s,r)}function Jc(n,e,t,i,r,s){Qg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&rf(e,t,!1),wi(n,e,s);i=e.stateNode,u_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ys(e,n.child,null,s),e.child=ys(e,null,a,s)):Ut(n,e,a,s),e.memoizedState=i.state,r&&rf(e,t,!0),e.child}function e0(n){var e=n.stateNode;e.pendingContext?nf(n,e.pendingContext,e.pendingContext!==e.context):e.context&&nf(n,e.context,!1),$h(n,e.containerInfo)}function yf(n,e,t,i,r){return _s(),Gh(r),e.flags|=256,Ut(n,e,t,i),e.child}var Qc={dehydrated:null,treeContext:null,retryLane:0};function eh(n){return{baseLanes:n,cachePool:null,transitions:null}}function t0(n,e,t){var i=e.pendingProps,r=Je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),We(Je,r&1),n===null)return jc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vl(o,i,0,null),n=vr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=eh(t),e.memoizedState=Qc,n):nd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return c_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ji(a,s):(s=vr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?eh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Qc,i}return s=n.child,n=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function nd(n,e){return e=Vl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function da(n,e,t,i){return i!==null&&Gh(i),ys(e,n.child,null,t),n=nd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function c_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Eu(Error(ee(422))),da(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ys(e,n.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Qc,s);if(!(e.mode&1))return da(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Eu(s,i,void 0),da(n,e,o,i)}if(a=(o&n.childLanes)!==0,Kt||a){if(i=wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(n,r),Un(i,n,r,-1))}return ld(),i=Eu(Error(ee(421))),da(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=M_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,cn=Gi(r.nextSibling),hn=e,$e=!0,In=null,n!==null&&(_n[yn++]=pi,_n[yn++]=mi,_n[yn++]=yr,pi=n.id,mi=n.overflow,yr=e),e=nd(e,i.children),e.flags|=4096,e)}function Sf(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),qc(n.return,e,t)}function Tu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function n0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ut(n,e,i.children,t),i=Je.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sf(n,t,e);else if(n.tag===19)Sf(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(We(Je,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&vl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Tu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&vl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Tu(e,!0,t,null,s);break;case"together":Tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function wi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),wr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=ji(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ji(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function h_(n,e,t){switch(e.tag){case 3:e0(e),_s();break;case 5:Lg(e);break;case 1:en(e.type)&&hl(e);break;case 4:$h(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;We(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(We(Je,Je.current&1),e.flags|=128,null):t&e.child.childLanes?t0(n,e,t):(We(Je,Je.current&1),n=wi(n,e,t),n!==null?n.sibling:null);We(Je,Je.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return n0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),We(Je,Je.current),i)break;return null;case 22:case 23:return e.lanes=0,Jg(n,e,t)}return wi(n,e,t)}var i0,th,r0,s0;i0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};th=function(){};r0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,fr(ni.current);var s=null;switch(t){case"input":r=Mc(n,r),i=Mc(n,i),s=[];break;case"select":r=tt({},r,{value:void 0}),i=tt({},i,{value:void 0}),s=[];break;case"textarea":r=bc(n,r),i=bc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ul)}Pc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Xe("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};s0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ws(n,e){if(!$e)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Pt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function d_(n,e,t){var i=e.pendingProps;switch(Vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return en(e.type)&&cl(),Pt(e),null;case 3:return i=e.stateNode,Ss(),qe(Qt),qe(zt),Zh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ca(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(uh(In),In=null))),th(n,e),Pt(e),null;case 5:Yh(e);var r=fr(Io.current);if(t=e.type,n!==null&&e.stateNode!=null)r0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Pt(e),null}if(n=fr(ni.current),ca(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Ro]=s,n=(e.mode&1)!==0,t){case"dialog":Xe("cancel",i),Xe("close",i);break;case"iframe":case"object":case"embed":Xe("load",i);break;case"video":case"audio":for(r=0;r<io.length;r++)Xe(io[r],i);break;case"source":Xe("error",i);break;case"img":case"image":case"link":Xe("error",i),Xe("load",i);break;case"details":Xe("toggle",i);break;case"input":Ld(i,s),Xe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Xe("invalid",i);break;case"textarea":Dd(i,s),Xe("invalid",i)}Pc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ua(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ua(i.textContent,a,n),r=["children",""+a]):wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Xe("scroll",i)}switch(t){case"input":ta(i),Cd(i,s,!0);break;case"textarea":ta(i),Rd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Rm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Qn]=e,n[Ro]=i,i0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Lc(t,i),t){case"dialog":Xe("cancel",n),Xe("close",n),r=i;break;case"iframe":case"object":case"embed":Xe("load",n),r=i;break;case"video":case"audio":for(r=0;r<io.length;r++)Xe(io[r],n);r=i;break;case"source":Xe("error",n),r=i;break;case"img":case"image":case"link":Xe("error",n),Xe("load",n),r=i;break;case"details":Xe("toggle",n),r=i;break;case"input":Ld(n,i),r=Mc(n,i),Xe("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=tt({},i,{value:void 0}),Xe("invalid",n);break;case"textarea":Dd(n,i),r=bc(n,i),Xe("invalid",n);break;default:r=i}Pc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Nm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zm(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Mo(n,l):typeof l=="number"&&Mo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Xe("scroll",n):l!=null&&bh(n,s,l,o))}switch(t){case"input":ta(n),Cd(n,i,!1);break;case"textarea":ta(n),Rd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+$i(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ls(n,!!i.multiple,s,!1):i.defaultValue!=null&&ls(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ul)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(n&&e.stateNode!=null)s0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=fr(Io.current),fr(ni.current),ca(e)){if(i=e.stateNode,t=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==t)&&(n=hn,n!==null))switch(n.tag){case 3:ua(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ua(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Pt(e),null;case 13:if(qe(Je),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($e&&cn!==null&&e.mode&1&&!(e.flags&128))wg(),_s(),e.flags|=98560,s=!1;else if(s=ca(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Qn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),s=!1}else In!==null&&(uh(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Je.current&1?dt===0&&(dt=3):ld())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return Ss(),th(n,e),n===null&&Co(e.stateNode.containerInfo),Pt(e),null;case 10:return Xh(e.type._context),Pt(e),null;case 17:return en(e.type)&&cl(),Pt(e),null;case 19:if(qe(Je),s=e.memoizedState,s===null)return Pt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ws(s,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=vl(n),o!==null){for(e.flags|=128,Ws(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return We(Je,Je.current&1|2),e.child}n=n.sibling}s.tail!==null&&st()>Ms&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(n=vl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return Pt(e),null}else 2*st()-s.renderingStartTime>Ms&&t!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=st(),e.sibling=null,t=Je.current,We(Je,i?t&1|2:t&1),e):(Pt(e),null);case 22:case 23:return ad(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function f_(n,e){switch(Vh(e),e.tag){case 1:return en(e.type)&&cl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ss(),qe(Qt),qe(zt),Zh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Yh(e),null;case 13:if(qe(Je),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));_s()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return qe(Je),null;case 4:return Ss(),null;case 10:return Xh(e.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var fa=!1,Rt=!1,p_=typeof WeakSet=="function"?WeakSet:Set,de=null;function is(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){it(n,e,i)}else t.current=null}function nh(n,e,t){try{t()}catch(i){it(n,e,i)}}var wf=!1;function m_(n,e){if(Uc=ol,n=ug(),Uh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,d=null;t:for(;;){for(var m;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bc={focusedElem:n,selectionRange:t},ol=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var f=x.memoizedProps,p=x.memoizedState,v=e.stateNode,_=v.getSnapshotBeforeUpdate(e.elementType===e.type?f:Rn(e.type,f),p);v.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){it(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return x=wf,wf=!1,x}function po(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&nh(e,t,s)}r=r.next}while(r!==i)}}function Ul(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ih(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function o0(n){var e=n.alternate;e!==null&&(n.alternate=null,o0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Qn],delete e[Ro],delete e[Wc],delete e[Kx],delete e[Jx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function a0(n){return n.tag===5||n.tag===3||n.tag===4}function Mf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||a0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(n=n.child,n!==null))for(rh(n,e,t),n=n.sibling;n!==null;)rh(n,e,t),n=n.sibling}function sh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(sh(n,e,t),n=n.sibling;n!==null;)sh(n,e,t),n=n.sibling}var Mt=null,zn=!1;function Ei(n,e,t){for(t=t.child;t!==null;)l0(n,e,t),t=t.sibling}function l0(n,e,t){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(Dl,t)}catch{}switch(t.tag){case 5:Rt||is(t,e);case 6:var i=Mt,r=zn;Mt=null,Ei(n,e,t),Mt=i,zn=r,Mt!==null&&(zn?(n=Mt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Mt.removeChild(t.stateNode));break;case 18:Mt!==null&&(zn?(n=Mt,t=t.stateNode,n.nodeType===8?xu(n.parentNode,t):n.nodeType===1&&xu(n,t),Ao(n)):xu(Mt,t.stateNode));break;case 4:i=Mt,r=zn,Mt=t.stateNode.containerInfo,zn=!0,Ei(n,e,t),Mt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Rt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(t,e,o),r=r.next}while(r!==i)}Ei(n,e,t);break;case 1:if(!Rt&&(is(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){it(t,e,a)}Ei(n,e,t);break;case 21:Ei(n,e,t);break;case 22:t.mode&1?(Rt=(i=Rt)||t.memoizedState!==null,Ei(n,e,t),Rt=i):Ei(n,e,t);break;default:Ei(n,e,t)}}function Ef(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new p_),e.forEach(function(i){var r=E_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Pn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,zn=!1;break e;case 3:Mt=a.stateNode.containerInfo,zn=!0;break e;case 4:Mt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Mt===null)throw Error(ee(160));l0(s,o,r),Mt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){it(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u0(e,n),e=e.sibling}function u0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pn(e,n),$n(n),i&4){try{po(3,n,n.return),Ul(3,n)}catch(f){it(n,n.return,f)}try{po(5,n,n.return)}catch(f){it(n,n.return,f)}}break;case 1:Pn(e,n),$n(n),i&512&&t!==null&&is(t,t.return);break;case 5:if(Pn(e,n),$n(n),i&512&&t!==null&&is(t,t.return),n.flags&32){var r=n.stateNode;try{Mo(r,"")}catch(f){it(n,n.return,f)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cm(r,s),Lc(a,o);var u=Lc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Nm(r,h):c==="dangerouslySetInnerHTML"?zm(r,h):c==="children"?Mo(r,h):bh(r,c,h,u)}switch(a){case"input":Ec(r,s);break;case"textarea":Dm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ls(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ro]=s}catch(f){it(n,n.return,f)}}break;case 6:if(Pn(e,n),$n(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(f){it(n,n.return,f)}}break;case 3:if(Pn(e,n),$n(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(f){it(n,n.return,f)}break;case 4:Pn(e,n),$n(n);break;case 13:Pn(e,n),$n(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sd=st())),i&4&&Ef(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Rt=(u=Rt)||c,Pn(e,n),Rt=u):Pn(e,n),$n(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(de=n,c=n.child;c!==null;){for(h=de=c;de!==null;){switch(d=de,m=d.child,d.tag){case 0:case 11:case 14:case 15:po(4,d,d.return);break;case 1:is(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(f){it(i,t,f)}}break;case 5:is(d,d.return);break;case 22:if(d.memoizedState!==null){bf(h);continue}}m!==null?(m.return=d,de=m):bf(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Im("display",o))}catch(f){it(n,n.return,f)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(f){it(n,n.return,f)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pn(e,n),$n(n),i&4&&Ef(n);break;case 21:break;default:Pn(e,n),$n(n)}}function $n(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(a0(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Mo(r,""),i.flags&=-33);var s=Mf(n);sh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Mf(n);rh(n,a,o);break;default:throw Error(ee(161))}}catch(l){it(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function g_(n,e,t){de=n,c0(n)}function c0(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||fa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=fa;var u=Rt;if(fa=o,(Rt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Af(r):l!==null?(l.return=o,de=l):Af(r);for(;s!==null;)de=s,c0(s),s=s.sibling;de=r,fa=a,Rt=u}Tf(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Tf(n)}}function Tf(n){for(;de!==null;){var e=de;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||Ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Rn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}lf(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Rt||e.flags&512&&ih(e)}catch(d){it(e,e.return,d)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function bf(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function Af(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ul(4,e)}catch(l){it(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){it(e,r,l)}}var s=e.return;try{ih(e)}catch(l){it(e,s,l)}break;case 5:var o=e.return;try{ih(e)}catch(l){it(e,o,l)}}}catch(l){it(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var v_=Math.ceil,yl=Mi.ReactCurrentDispatcher,id=Mi.ReactCurrentOwner,Mn=Mi.ReactCurrentBatchConfig,Fe=0,wt=null,ct=null,Tt=0,un=0,rs=Ki(0),dt=0,Oo=null,wr=0,Bl=0,rd=0,mo=null,Yt=null,sd=0,Ms=1/0,ci=null,Sl=!1,oh=null,Hi=null,pa=!1,Ni=null,wl=0,go=0,ah=null,Ka=-1,Ja=0;function Xt(){return Fe&6?st():Ka!==-1?Ka:Ka=st()}function Xi(n){return n.mode&1?Fe&2&&Tt!==0?Tt&-Tt:e_.transition!==null?(Ja===0&&(Ja=qm()),Ja):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:eg(n.type)),n):1}function Un(n,e,t,i){if(50<go)throw go=0,ah=null,Error(ee(185));jo(n,t,i),(!(Fe&2)||n!==wt)&&(n===wt&&(!(Fe&2)&&(Bl|=t),dt===4&&Ri(n,Tt)),tn(n,i),t===1&&Fe===0&&!(e.mode&1)&&(Ms=st()+500,Fl&&Ji()))}function tn(n,e){var t=n.callbackNode;ex(n,e);var i=sl(n,n===wt?Tt:0);if(i===0)t!==null&&Nd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Nd(t),e===1)n.tag===0?Qx(Pf.bind(null,n)):_g(Pf.bind(null,n)),Yx(function(){!(Fe&6)&&Ji()}),t=null;else{switch($m(i)){case 1:t=Dh;break;case 4:t=Xm;break;case 16:t=rl;break;case 536870912:t=jm;break;default:t=rl}t=x0(t,h0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function h0(n,e){if(Ka=-1,Ja=0,Fe&6)throw Error(ee(327));var t=n.callbackNode;if(fs()&&n.callbackNode!==t)return null;var i=sl(n,n===wt?Tt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ml(n,i);else{e=i;var r=Fe;Fe|=2;var s=f0();(wt!==n||Tt!==e)&&(ci=null,Ms=st()+500,gr(n,e));do try{y_();break}catch(a){d0(n,a)}while(1);Hh(),yl.current=s,Fe=r,ct!==null?e=0:(wt=null,Tt=0,e=dt)}if(e!==0){if(e===2&&(r=Ic(n),r!==0&&(i=r,e=lh(n,r))),e===1)throw t=Oo,gr(n,0),Ri(n,i),tn(n,st()),t;if(e===6)Ri(n,i);else{if(r=n.current.alternate,!(i&30)&&!x_(r)&&(e=Ml(n,i),e===2&&(s=Ic(n),s!==0&&(i=s,e=lh(n,s))),e===1))throw t=Oo,gr(n,0),Ri(n,i),tn(n,st()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:or(n,Yt,ci);break;case 3:if(Ri(n,i),(i&130023424)===i&&(e=sd+500-st(),10<e)){if(sl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Xt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Gc(or.bind(null,n,Yt,ci),e);break}or(n,Yt,ci);break;case 4:if(Ri(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=st()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*v_(i/1960))-i,10<i){n.timeoutHandle=Gc(or.bind(null,n,Yt,ci),i);break}or(n,Yt,ci);break;case 5:or(n,Yt,ci);break;default:throw Error(ee(329))}}}return tn(n,st()),n.callbackNode===t?h0.bind(null,n):null}function lh(n,e){var t=mo;return n.current.memoizedState.isDehydrated&&(gr(n,e).flags|=256),n=Ml(n,e),n!==2&&(e=Yt,Yt=t,e!==null&&uh(e)),n}function uh(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function x_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(n,e){for(e&=~rd,e&=~Bl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-On(e),i=1<<t;n[t]=-1,e&=~i}}function Pf(n){if(Fe&6)throw Error(ee(327));fs();var e=sl(n,0);if(!(e&1))return tn(n,st()),null;var t=Ml(n,e);if(n.tag!==0&&t===2){var i=Ic(n);i!==0&&(e=i,t=lh(n,i))}if(t===1)throw t=Oo,gr(n,0),Ri(n,e),tn(n,st()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,or(n,Yt,ci),tn(n,st()),null}function od(n,e){var t=Fe;Fe|=1;try{return n(e)}finally{Fe=t,Fe===0&&(Ms=st()+500,Fl&&Ji())}}function Mr(n){Ni!==null&&Ni.tag===0&&!(Fe&6)&&fs();var e=Fe;Fe|=1;var t=Mn.transition,i=Ve;try{if(Mn.transition=null,Ve=1,n)return n()}finally{Ve=i,Mn.transition=t,Fe=e,!(Fe&6)&&Ji()}}function ad(){un=rs.current,qe(rs)}function gr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,$x(t)),ct!==null)for(t=ct.return;t!==null;){var i=t;switch(Vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cl();break;case 3:Ss(),qe(Qt),qe(zt),Zh();break;case 5:Yh(i);break;case 4:Ss();break;case 13:qe(Je);break;case 19:qe(Je);break;case 10:Xh(i.type._context);break;case 22:case 23:ad()}t=t.return}if(wt=n,ct=n=ji(n.current,null),Tt=un=e,dt=0,Oo=null,rd=Bl=wr=0,Yt=mo=null,dr!==null){for(e=0;e<dr.length;e++)if(t=dr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}dr=null}return n}function d0(n,e){do{var t=ct;try{if(Hh(),$a.current=_l,xl){for(var i=et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}xl=!1}if(Sr=0,St=ht=et=null,fo=!1,No=0,id.current=null,t===null||t.return===null){dt=1,Oo=e,ct=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=mf(o);if(m!==null){m.flags&=-257,gf(m,o,a,s,e),m.mode&1&&pf(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var f=new Set;f.add(l),e.updateQueue=f}else x.add(l);break e}else{if(!(e&1)){pf(s,u,e),ld();break e}l=Error(ee(426))}}else if($e&&a.mode&1){var p=mf(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),gf(p,o,a,s,e),Gh(ws(l,a));break e}}s=l=ws(l,a),dt!==4&&(dt=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Yg(s,l,e);af(s,v);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hi===null||!Hi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Zg(s,a,e);af(s,y);break e}}s=s.return}while(s!==null)}m0(t)}catch(w){e=w,ct===t&&t!==null&&(ct=t=t.return);continue}break}while(1)}function f0(){var n=yl.current;return yl.current=_l,n===null?_l:n}function ld(){(dt===0||dt===3||dt===2)&&(dt=4),wt===null||!(wr&268435455)&&!(Bl&268435455)||Ri(wt,Tt)}function Ml(n,e){var t=Fe;Fe|=2;var i=f0();(wt!==n||Tt!==e)&&(ci=null,gr(n,e));do try{__();break}catch(r){d0(n,r)}while(1);if(Hh(),Fe=t,yl.current=i,ct!==null)throw Error(ee(261));return wt=null,Tt=0,dt}function __(){for(;ct!==null;)p0(ct)}function y_(){for(;ct!==null&&!Xv();)p0(ct)}function p0(n){var e=v0(n.alternate,n,un);n.memoizedProps=n.pendingProps,e===null?m0(n):ct=e,id.current=null}function m0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=f_(t,e),t!==null){t.flags&=32767,ct=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,ct=null;return}}else if(t=d_(t,e,un),t!==null){ct=t;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=n}while(e!==null);dt===0&&(dt=5)}function or(n,e,t){var i=Ve,r=Mn.transition;try{Mn.transition=null,Ve=1,S_(n,e,t,i)}finally{Mn.transition=r,Ve=i}return null}function S_(n,e,t,i){do fs();while(Ni!==null);if(Fe&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(tx(n,s),n===wt&&(ct=wt=null,Tt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||pa||(pa=!0,x0(rl,function(){return fs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=Ve;Ve=1;var a=Fe;Fe|=4,id.current=null,m_(n,t),u0(t,n),Vx(Bc),ol=!!Uc,Bc=Uc=null,n.current=t,g_(t),jv(),Fe=a,Ve=o,Mn.transition=s}else n.current=t;if(pa&&(pa=!1,Ni=n,wl=r),s=n.pendingLanes,s===0&&(Hi=null),Yv(t.stateNode),tn(n,st()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,n=oh,oh=null,n;return wl&1&&n.tag!==0&&fs(),s=n.pendingLanes,s&1?n===ah?go++:(go=0,ah=n):go=0,Ji(),null}function fs(){if(Ni!==null){var n=$m(wl),e=Mn.transition,t=Ve;try{if(Mn.transition=null,Ve=16>n?16:n,Ni===null)var i=!1;else{if(n=Ni,Ni=null,wl=0,Fe&6)throw Error(ee(331));var r=Fe;for(Fe|=4,de=n.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:po(8,c,s)}var h=c.child;if(h!==null)h.return=c,de=h;else for(;de!==null;){c=de;var d=c.sibling,m=c.return;if(o0(c),c===u){de=null;break}if(d!==null){d.return=m,de=d;break}de=m}}}var x=s.alternate;if(x!==null){var f=x.child;if(f!==null){x.child=null;do{var p=f.sibling;f.sibling=null,f=p}while(f!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,de=v;break e}de=s.return}}var _=n.current;for(de=_;de!==null;){o=de;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,de=g;else e:for(o=_;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(w){it(a,a.return,w)}if(a===o){de=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,de=y;break e}de=a.return}}if(Fe=r,Ji(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(Dl,n)}catch{}i=!0}return i}finally{Ve=t,Mn.transition=e}}return!1}function Lf(n,e,t){e=ws(t,e),e=Yg(n,e,1),n=Wi(n,e,1),e=Xt(),n!==null&&(jo(n,1,e),tn(n,e))}function it(n,e,t){if(n.tag===3)Lf(n,n,t);else for(;e!==null;){if(e.tag===3){Lf(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){n=ws(t,n),n=Zg(e,n,1),e=Wi(e,n,1),n=Xt(),e!==null&&(jo(e,1,n),tn(e,n));break}}e=e.return}}function w_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Xt(),n.pingedLanes|=n.suspendedLanes&t,wt===n&&(Tt&t)===t&&(dt===4||dt===3&&(Tt&130023424)===Tt&&500>st()-sd?gr(n,0):rd|=t),tn(n,e)}function g0(n,e){e===0&&(n.mode&1?(e=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):e=1);var t=Xt();n=Si(n,e),n!==null&&(jo(n,e,t),tn(n,t))}function M_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),g0(n,t)}function E_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),g0(n,t)}var v0;v0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Qt.current)Kt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Kt=!1,h_(n,e,t);Kt=!!(n.flags&131072)}else Kt=!1,$e&&e.flags&1048576&&yg(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Za(n,e),n=e.pendingProps;var r=xs(e,zt.current);ds(e,t),r=Jh(null,e,i,n,r,t);var s=Qh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qh(e),r.updater=kl,e.stateNode=r,r._reactInternals=e,Yc(e,i,n,t),e=Jc(null,e,i,!0,s,t)):(e.tag=0,$e&&s&&Bh(e),Ut(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Za(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=b_(i),n=Rn(i,n),r){case 0:e=Kc(null,e,i,n,t);break e;case 1:e=_f(null,e,i,n,t);break e;case 11:e=vf(null,e,i,n,t);break e;case 14:e=xf(null,e,i,Rn(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Kc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),_f(n,e,i,r,t);case 3:e:{if(e0(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Eg(n,e),gl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ws(Error(ee(423)),e),e=yf(n,e,i,t,r);break e}else if(i!==r){r=ws(Error(ee(424)),e),e=yf(n,e,i,t,r);break e}else for(cn=Gi(e.stateNode.containerInfo.firstChild),hn=e,$e=!0,In=null,t=Pg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_s(),i===r){e=wi(n,e,t);break e}Ut(n,e,i,t)}e=e.child}return e;case 5:return Lg(e),n===null&&jc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Vc(i,r)?o=null:s!==null&&Vc(i,s)&&(e.flags|=32),Qg(n,e),Ut(n,e,o,t),e.child;case 6:return n===null&&jc(e),null;case 13:return t0(n,e,t);case 4:return $h(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ys(e,null,i,t):Ut(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),vf(n,e,i,r,t);case 7:return Ut(n,e,e.pendingProps,t),e.child;case 8:return Ut(n,e,e.pendingProps.children,t),e.child;case 12:return Ut(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,We(pl,i._currentValue),i._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===r.children&&!Qt.current){e=wi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),qc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),qc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ds(e,t),r=En(r),i=i(r),e.flags|=1,Ut(n,e,i,t),e.child;case 14:return i=e.type,r=Rn(i,e.pendingProps),r=Rn(i.type,r),xf(n,e,i,r,t);case 15:return Kg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Za(n,e),e.tag=1,en(i)?(n=!0,hl(e)):n=!1,ds(e,t),bg(e,i,r),Yc(e,i,r,t),Jc(null,e,i,!0,n,t);case 19:return n0(n,e,t);case 22:return Jg(n,e,t)}throw Error(ee(156,e.tag))};function x0(n,e){return Hm(n,e)}function T_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,e,t,i){return new T_(n,e,t,i)}function ud(n){return n=n.prototype,!(!n||!n.isReactComponent)}function b_(n){if(typeof n=="function")return ud(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ph)return 11;if(n===Lh)return 14}return 2}function ji(n,e){var t=n.alternate;return t===null?(t=wn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Qa(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ud(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case $r:return vr(t.children,r,s,e);case Ah:o=8,r|=8;break;case _c:return n=wn(12,t,e,r|2),n.elementType=_c,n.lanes=s,n;case yc:return n=wn(13,t,e,r),n.elementType=yc,n.lanes=s,n;case Sc:return n=wn(19,t,e,r),n.elementType=Sc,n.lanes=s,n;case Am:return Vl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Tm:o=10;break e;case bm:o=9;break e;case Ph:o=11;break e;case Lh:o=14;break e;case Li:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=wn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function vr(n,e,t,i){return n=wn(7,n,i,e),n.lanes=t,n}function Vl(n,e,t,i){return n=wn(22,n,i,e),n.elementType=Am,n.lanes=t,n.stateNode={isHidden:!1},n}function bu(n,e,t){return n=wn(6,n,null,e),n.lanes=t,n}function Au(n,e,t){return e=wn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function A_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=au(0),this.expirationTimes=au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cd(n,e,t,i,r,s,o,a,l){return n=new A_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},qh(s),n}function P_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function _0(n){if(!n)return Yi;n=n._reactInternals;e:{if(Cr(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(en(t))return xg(n,t,e)}return e}function y0(n,e,t,i,r,s,o,a,l){return n=cd(t,i,!0,n,r,s,o,a,l),n.context=_0(null),t=n.current,i=Xt(),r=Xi(t),s=vi(i,r),s.callback=e??null,Wi(t,s,r),n.current.lanes=r,jo(n,r,i),tn(n,i),n}function Gl(n,e,t,i){var r=e.current,s=Xt(),o=Xi(r);return t=_0(t),e.context===null?e.context=t:e.pendingContext=t,e=vi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Wi(r,e,o),n!==null&&(Un(n,r,o,s),qa(n,r,o)),o}function El(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cf(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function hd(n,e){Cf(n,e),(n=n.alternate)&&Cf(n,e)}function L_(){return null}var S0=typeof reportError=="function"?reportError:function(n){console.error(n)};function dd(n){this._internalRoot=n}Wl.prototype.render=dd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));Gl(n,e,null,null)};Wl.prototype.unmount=dd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Mr(function(){Gl(null,n,null,null)}),e[yi]=null}};function Wl(n){this._internalRoot=n}Wl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Km();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Di.length&&e!==0&&e<Di[t].priority;t++);Di.splice(t,0,n),t===0&&Qm(n)}};function fd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Df(){}function C_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=El(o);s.call(u)}}var o=y0(e,i,n,0,null,!1,!1,"",Df);return n._reactRootContainer=o,n[yi]=o.current,Co(n.nodeType===8?n.parentNode:n),Mr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=El(l);a.call(u)}}var l=cd(n,0,!1,null,null,!1,!1,"",Df);return n._reactRootContainer=l,n[yi]=l.current,Co(n.nodeType===8?n.parentNode:n),Mr(function(){Gl(e,l,t,i)}),l}function Xl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=El(o);a.call(l)}}Gl(e,o,n,r)}else o=C_(t,e,n,r,i);return El(o)}Ym=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=no(e.pendingLanes);t!==0&&(Rh(e,t|1),tn(e,st()),!(Fe&6)&&(Ms=st()+500,Ji()))}break;case 13:Mr(function(){var i=Si(n,1);if(i!==null){var r=Xt();Un(i,n,1,r)}}),hd(n,1)}};zh=function(n){if(n.tag===13){var e=Si(n,134217728);if(e!==null){var t=Xt();Un(e,n,134217728,t)}hd(n,134217728)}};Zm=function(n){if(n.tag===13){var e=Xi(n),t=Si(n,e);if(t!==null){var i=Xt();Un(t,n,e,i)}hd(n,e)}};Km=function(){return Ve};Jm=function(n,e){var t=Ve;try{return Ve=n,e()}finally{Ve=t}};Dc=function(n,e,t){switch(e){case"input":if(Ec(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Nl(i);if(!r)throw Error(ee(90));Lm(i),Ec(i,r)}}}break;case"textarea":Dm(n,t);break;case"select":e=t.value,e!=null&&ls(n,!!t.multiple,e,!1)}};Om=od;Um=Mr;var D_={usingClientEntryPoint:!1,Events:[$o,Jr,Nl,Fm,km,od]},Hs={findFiberByHostInstance:hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},R_={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Gm(n),n===null?null:n.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||L_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Dl=ma.inject(R_),ti=ma}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_;mn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(e))throw Error(ee(200));return P_(n,e,null,t)};mn.createRoot=function(n,e){if(!fd(n))throw Error(ee(299));var t=!1,i="",r=S0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cd(n,1,!1,null,null,t,!1,i,r),n[yi]=e.current,Co(n.nodeType===8?n.parentNode:n),new dd(e)};mn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=Gm(e),n=n===null?null:n.stateNode,n};mn.flushSync=function(n){return Mr(n)};mn.hydrate=function(n,e,t){if(!Hl(e))throw Error(ee(200));return Xl(null,n,e,!0,t)};mn.hydrateRoot=function(n,e,t){if(!fd(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=S0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=y0(e,null,n,1,t??null,r,!1,s,o),n[yi]=e.current,Co(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Wl(e)};mn.render=function(n,e,t){if(!Hl(e))throw Error(ee(200));return Xl(null,n,e,!1,t)};mn.unmountComponentAtNode=function(n){if(!Hl(n))throw Error(ee(40));return n._reactRootContainer?(Mr(function(){Xl(null,null,n,!1,function(){n._reactRootContainer=null,n[yi]=null})}),!0):!1};mn.unstable_batchedUpdates=od;mn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Hl(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return Xl(n,e,t,!1,i)};mn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=mn})(Lv);var Rf=gc;mc.createRoot=Rf.createRoot,mc.hydrateRoot=Rf.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="150",z_=0,zf=1,I_=2,w0=1,N_=2,ro=3,Wn=0,dn=1,Fi=2,qi=0,ps=1,If=2,Nf=3,Ff=4,F_=5,jr=100,k_=101,O_=102,kf=103,Of=104,U_=200,B_=201,V_=202,G_=203,M0=204,E0=205,W_=206,H_=207,X_=208,j_=209,q_=210,$_=0,Y_=1,Z_=2,ch=3,K_=4,J_=5,Q_=6,ey=7,T0=0,ty=1,ny=2,xi=0,iy=1,ry=2,sy=3,oy=4,ay=5,b0=300,Es=301,Ts=302,hh=303,dh=304,jl=306,fh=1e3,Fn=1001,ph=1002,Bt=1003,Uf=1004,Pu=1005,Sn=1006,ly=1007,Uo=1008,Er=1009,uy=1010,cy=1011,A0=1012,hy=1013,pr=1014,mr=1015,Bo=1016,dy=1017,fy=1018,ms=1020,py=1021,kn=1023,my=1024,gy=1025,xr=1026,bs=1027,vy=1028,xy=1029,_y=1030,yy=1031,Sy=1033,Lu=33776,Cu=33777,Du=33778,Ru=33779,Bf=35840,Vf=35841,Gf=35842,Wf=35843,wy=36196,Hf=37492,Xf=37496,jf=37808,qf=37809,$f=37810,Yf=37811,Zf=37812,Kf=37813,Jf=37814,Qf=37815,ep=37816,tp=37817,np=37818,ip=37819,rp=37820,sp=37821,zu=36492,My=36283,op=36284,ap=36285,lp=36286,Tr=3e3,je=3001,Ey=3200,Ty=3201,by=0,Ay=1,Kn="srgb",Vo="srgb-linear",P0="display-p3",Iu=7680,Py=519,up=35044,cp="300 es",mh=1035;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=Math.PI/180,hp=180/Math.PI;function Is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Gt(n,e,t){return Math.max(e,Math.min(t,n))}function Ly(n,e){return(n%e+e)%e}function Fu(n,e,t){return(1-t)*n+t*e}function dp(n){return(n&n-1)===0&&n!==0}function Cy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ga(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Y{constructor(e=0,t=0){Y.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],m=i[5],x=i[8],f=r[0],p=r[3],v=r[6],_=r[1],g=r[4],y=r[7],w=r[2],A=r[5],T=r[8];return s[0]=o*f+a*_+l*w,s[3]=o*p+a*g+l*A,s[6]=o*v+a*y+l*T,s[1]=u*f+c*_+h*w,s[4]=u*p+c*g+h*A,s[7]=u*v+c*y+h*T,s[2]=d*f+m*_+x*w,s[5]=d*p+m*g+x*A,s[8]=d*v+m*y+x*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,m=u*s-o*l,x=t*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/x;return e[0]=h*f,e[1]=(r*u-c*i)*f,e[2]=(a*i-r*o)*f,e[3]=d*f,e[4]=(c*t-r*l)*f,e[5]=(r*s-a*t)*f,e[6]=m*f,e[7]=(i*l-u*t)*f,e[8]=(o*t-i*s)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ku.makeScale(e,t)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(ku.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new Ht;function L0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Tl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class Zo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],x=s[o+2],f=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=f;return}if(h!==f||l!==d||u!==m||c!==x){let p=1-a;const v=l*d+u*m+c*x+h*f,_=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){const w=Math.sqrt(g),A=Math.atan2(w,v*_);p=Math.sin(p*A)/w,a=Math.sin(a*A)/w}const y=a*_;if(l=l*p+d*y,u=u*p+m*y,c=c*p+x*y,h=h*p+f*y,p===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=w,u*=w,c*=w,h*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+c*h+l*m-u*d,e[t+1]=l*x+c*d+u*h-a*m,e[t+2]=u*x+c*m+a*d-l*h,e[t+3]=c*x-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*m*x,this._y=u*m*h-d*c*x,this._z=u*c*x+d*m*h,this._w=u*c*h-d*m*x;break;case"YXZ":this._x=d*c*h+u*m*x,this._y=u*m*h-d*c*x,this._z=u*c*x-d*m*h,this._w=u*c*h+d*m*x;break;case"ZXY":this._x=d*c*h-u*m*x,this._y=u*m*h+d*c*x,this._z=u*c*x+d*m*h,this._w=u*c*h-d*m*x;break;case"ZYX":this._x=d*c*h-u*m*x,this._y=u*m*h+d*c*x,this._z=u*c*x-d*m*h,this._w=u*c*h+d*m*x;break;case"YZX":this._x=d*c*h+u*m*x,this._y=u*m*h+d*c*x,this._z=u*c*x-d*m*h,this._w=u*c*h-d*m*x;break;case"XZY":this._x=d*c*h-u*m*x,this._y=u*m*h-d*c*x,this._z=u*c*x+d*m*h,this._w=u*c*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,h=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=u*l+d*-s+c*-a-h*-o,this.y=c*l+d*-o+h*-s-u*-a,this.z=h*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new C,fp=new Zo;function gs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Dy=new Ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ry=new Ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),ki=new C;function zy(n){return n.convertSRGBToLinear(),ki.set(n.r,n.g,n.b).applyMatrix3(Ry),n.setRGB(ki.x,ki.y,ki.z)}function Iy(n){return ki.set(n.r,n.g,n.b).applyMatrix3(Dy),n.setRGB(ki.x,ki.y,ki.z).convertLinearToSRGB()}const Ny={[Vo]:n=>n,[Kn]:n=>n.convertSRGBToLinear(),[P0]:zy},Fy={[Vo]:n=>n,[Kn]:n=>n.convertLinearToSRGB(),[P0]:Iy},kt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Vo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ny[e],r=Fy[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Rr;class C0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=Tl("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gs(t[i]/255)*255):t[i]=gs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class D0{constructor(e=null){this.isSource=!0,this.uuid=Is(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bu(r[o].image)):s.push(Bu(r[o]))}else s=Bu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?C0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ky=0;class fn extends zs{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Fn,r=Fn,s=Sn,o=Uo,a=kn,l=Er,u=fn.DEFAULT_ANISOTROPY,c=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Is(),this.name="",this.source=new D0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=b0;fn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],m=l[5],x=l[9],f=l[2],p=l[6],v=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-f)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+f)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(u+1)/2,y=(m+1)/2,w=(v+1)/2,A=(c+d)/4,T=(h+f)/4,S=(x+p)/4;return g>y&&g>w?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=T/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=S/s),this.set(i,r,s,t),this}let _=Math.sqrt((p-x)*(p-x)+(h-f)*(h-f)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(h-f)/_,this.z=(d-c)/_,this.w=Math.acos((u+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class br extends zs{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new D0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class R0 extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oy extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],h=e[l+1],d=e[l+2];c<t&&(t=c),h<i&&(i=h),d<r&&(r=d),c>s&&(s=c),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),h=e.getY(l),d=e.getZ(l);c<t&&(t=c),h<i&&(i=h),d<r&&(r=d),c>s&&(s=c),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)nr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(nr)}else i.boundingBox===null&&i.computeBoundingBox(),Vu.copy(i.boundingBox),Vu.applyMatrix4(e.matrixWorld),this.union(Vu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),va.subVectors(this.max,Xs),zr.subVectors(e.a,Xs),Ir.subVectors(e.b,Xs),Nr.subVectors(e.c,Xs),Ti.subVectors(Ir,zr),bi.subVectors(Nr,Ir),ir.subVectors(zr,Nr);let t=[0,-Ti.z,Ti.y,0,-bi.z,bi.y,0,-ir.z,ir.y,Ti.z,0,-Ti.x,bi.z,0,-bi.x,ir.z,0,-ir.x,-Ti.y,Ti.x,0,-bi.y,bi.x,0,-ir.y,ir.x,0];return!Gu(t,zr,Ir,Nr,va)||(t=[1,0,0,0,1,0,0,0,1],!Gu(t,zr,Ir,Nr,va))?!1:(xa.crossVectors(Ti,bi),t=[xa.x,xa.y,xa.z],Gu(t,zr,Ir,Nr,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new C,new C,new C,new C,new C,new C,new C,new C],nr=new C,Vu=new Vt,zr=new C,Ir=new C,Nr=new C,Ti=new C,bi=new C,ir=new C,Xs=new C,va=new C,xa=new C,rr=new C;function Gu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){rr.fromArray(n,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),u=t.dot(rr),c=i.dot(rr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Uy=new Vt,js=new C,Wu=new C;class ql{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Wu)),this.expandByPoint(js.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new C,Hu=new C,_a=new C,Ai=new C,Xu=new C,ya=new C,ju=new C;class z0{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hu.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Hu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=Ai.dot(this.direction),l=-Ai.dot(_a),u=Ai.lengthSq(),c=Math.abs(1-o*o);let h,d,m,x;if(c>0)if(h=o*l-a,d=o*a-l,x=s*c,h>=0)if(d>=-x)if(d<=x){const f=1/c;h*=f,d*=f,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Hu).addScaledVector(_a,d),m}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,r,s){Xu.subVectors(t,e),ya.subVectors(i,e),ju.crossVectors(Xu,ya);let o=this.direction.dot(ju),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(ya.crossVectors(Ai,ya));if(l<0)return null;const u=a*this.direction.dot(Xu.cross(Ai));if(u<0||l+u>o)return null;const c=-a*Ai.dot(ju);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,h,d,m,x,f,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=u,v[6]=c,v[10]=h,v[14]=d,v[3]=m,v[7]=x,v[11]=f,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*h,x=a*c,f=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+x*u,t[5]=d-f*u,t[9]=-a*l,t[2]=f-d*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*h,x=u*c,f=u*h;t[0]=d+f*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=m*a-x,t[6]=f+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*h,x=u*c,f=u*h;t[0]=d-f*a,t[4]=-o*h,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*c,t[9]=f-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*h,x=a*c,f=a*h;t[0]=l*c,t[4]=x*u-m,t[8]=d*u+f,t[1]=l*h,t[5]=f*u+d,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,x=a*l,f=a*u;t[0]=l*c,t[4]=f-d*h,t[8]=x*h+m,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*h+x,t[10]=d-f*h}else if(e.order==="XZY"){const d=o*l,m=o*u,x=a*l,f=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+f,t[5]=o*c,t[9]=m*h-x,t[2]=x*h-m,t[6]=a*c,t[10]=f*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,Vy)}lookAt(e,t,i){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Pi.crossVectors(i,an),Pi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Pi.crossVectors(i,an)),Pi.normalize(),Sa.crossVectors(an,Pi),r[0]=Pi.x,r[4]=Sa.x,r[8]=an.x,r[1]=Pi.y,r[5]=Sa.y,r[9]=an.y,r[2]=Pi.z,r[6]=Sa.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],m=i[13],x=i[2],f=i[6],p=i[10],v=i[14],_=i[3],g=i[7],y=i[11],w=i[15],A=r[0],T=r[4],S=r[8],E=r[12],L=r[1],B=r[5],V=r[9],N=r[13],I=r[2],H=r[6],K=r[10],Q=r[14],R=r[3],G=r[7],U=r[11],ie=r[15];return s[0]=o*A+a*L+l*I+u*R,s[4]=o*T+a*B+l*H+u*G,s[8]=o*S+a*V+l*K+u*U,s[12]=o*E+a*N+l*Q+u*ie,s[1]=c*A+h*L+d*I+m*R,s[5]=c*T+h*B+d*H+m*G,s[9]=c*S+h*V+d*K+m*U,s[13]=c*E+h*N+d*Q+m*ie,s[2]=x*A+f*L+p*I+v*R,s[6]=x*T+f*B+p*H+v*G,s[10]=x*S+f*V+p*K+v*U,s[14]=x*E+f*N+p*Q+v*ie,s[3]=_*A+g*L+y*I+w*R,s[7]=_*T+g*B+y*H+w*G,s[11]=_*S+g*V+y*K+w*U,s[15]=_*E+g*N+y*Q+w*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],m=e[14],x=e[3],f=e[7],p=e[11],v=e[15];return x*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+f*(+t*l*m-t*u*d+s*o*d-r*o*m+r*u*c-s*l*c)+p*(+t*u*h-t*a*m-s*o*h+i*o*m+s*a*c-i*u*c)+v*(-r*a*c-t*l*h+t*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],m=e[11],x=e[12],f=e[13],p=e[14],v=e[15],_=h*p*u-f*d*u+f*l*m-a*p*m-h*l*v+a*d*v,g=x*d*u-c*p*u-x*l*m+o*p*m+c*l*v-o*d*v,y=c*f*u-x*h*u+x*a*m-o*f*m-c*a*v+o*h*v,w=x*h*l-c*f*l-x*a*d+o*f*d+c*a*p-o*h*p,A=t*_+i*g+r*y+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(f*d*s-h*p*s-f*r*m+i*p*m+h*r*v-i*d*v)*T,e[2]=(a*p*s-f*l*s+f*r*u-i*p*u-a*r*v+i*l*v)*T,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*T,e[4]=g*T,e[5]=(c*p*s-x*d*s+x*r*m-t*p*m-c*r*v+t*d*v)*T,e[6]=(x*l*s-o*p*s-x*r*u+t*p*u+o*r*v-t*l*v)*T,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*m+t*l*m)*T,e[8]=y*T,e[9]=(x*h*s-c*f*s-x*i*m+t*f*m+c*i*v-t*h*v)*T,e[10]=(o*f*s-x*a*s+x*i*u-t*f*u-o*i*v+t*a*v)*T,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*m-t*a*m)*T,e[12]=w*T,e[13]=(c*f*r-x*h*r+x*i*d-t*f*d-c*i*p+t*h*p)*T,e[14]=(x*a*r-o*f*r-x*i*l+t*f*l+o*i*p-t*a*p)*T,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,d=s*u,m=s*c,x=s*h,f=o*c,p=o*h,v=a*h,_=l*u,g=l*c,y=l*h,w=i.x,A=i.y,T=i.z;return r[0]=(1-(f+v))*w,r[1]=(m+y)*w,r[2]=(x-g)*w,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(d+v))*A,r[6]=(p+_)*A,r[7]=0,r[8]=(x+g)*T,r[9]=(p-_)*T,r[10]=(1-(d+f))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,c=1/o,h=1/a;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=c,Ln.elements[5]*=c,Ln.elements[6]*=c,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),h=(t+e)*l,d=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fr=new C,Ln=new ft,By=new C(0,0,0),Vy=new C(1,1,1),Pi=new C,Sa=new C,an=new C,pp=new ft,mp=new Zo;class $l{constructor(e=0,t=0,i=0,r=$l.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mp.setFromEuler(this),this.setFromQuaternion(mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$l.DEFAULT_ORDER="XYZ";class I0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const gp=new C,kr=new Zo,ai=new ft,wa=new C,qs=new C,Wy=new C,Hy=new Zo,vp=new C(1,0,0),xp=new C(0,1,0),_p=new C(0,0,1),Xy={type:"added"},yp={type:"removed"};class nn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new C,t=new $l,i=new Zo,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ht}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(vp,e)}rotateY(e){return this.rotateOnAxis(xp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,t){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vp,e)}translateY(e){return this.translateOnAxis(xp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wa.copy(e):wa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(qs,wa,this.up):ai.lookAt(wa,qs,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(ai),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new C(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new C,li=new C,qu=new C,ui=new C,Or=new C,Ur=new C,Sp=new C,$u=new C,Yu=new C,Zu=new C;class fi{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Cn.subVectors(e,t),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Cn.subVectors(r,t),li.subVectors(i,t),qu.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(li),l=Cn.dot(qu),u=li.dot(li),c=li.dot(qu),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(u*l-a*c)*d,x=(o*c-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ui),l.set(0,0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l}static isFrontFacing(e,t,i,r){return Cn.subVectors(i,t),li.subVectors(e,t),Cn.cross(li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Cn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return fi.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),Ur.subVectors(s,i),$u.subVectors(e,i);const l=Or.dot($u),u=Ur.dot($u);if(l<=0&&u<=0)return t.copy(i);Yu.subVectors(e,r);const c=Or.dot(Yu),h=Ur.dot(Yu);if(c>=0&&h<=c)return t.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Or,o);Zu.subVectors(e,s);const m=Or.dot(Zu),x=Ur.dot(Zu);if(x>=0&&m<=x)return t.copy(s);const f=m*u-l*x;if(f<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Ur,a);const p=c*x-m*h;if(p<=0&&h-c>=0&&m-x>=0)return Sp.subVectors(s,r),a=(h-c)/(h-c+(m-x)),t.copy(r).addScaledVector(Sp,a);const v=1/(p+f+d);return o=f*v,a=d*v,t.copy(i).addScaledVector(Or,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jy=0;class Ko extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=ps,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=M0,this.blendDst=E0,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ch,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Py,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Iu,this.stencilZFail=Iu,this.stencilZPass=Iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const N0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function Ku(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=kt.workingColorSpace){return this.r=e,this.g=t,this.b=i,kt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=kt.workingColorSpace){if(e=Ly(e,1),t=Gt(t,0,1),i=Gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ku(o,s,e+1/3),this.g=Ku(o,s,e),this.b=Ku(o,s,e-1/3)}return kt.toWorkingColorSpace(this,r),this}setStyle(e,t=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,kt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,kt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,kt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,kt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const i=N0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Uu(e.r),this.g=Uu(e.g),this.b=Uu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return kt.fromWorkingColorSpace(Ct.copy(this),e),Gt(Ct.r*255,0,255)<<16^Gt(Ct.g*255,0,255)<<8^Gt(Ct.b*255,0,255)<<0}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Kn){kt.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(Dn),Dn.h+=e,Dn.s+=t,Dn.l+=i,this.setHSL(Dn.h,Dn.s,Dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ma);const i=Fu(Dn.h,Ma.h,t),r=Fu(Dn.s,Ma.s,t),s=Fu(Dn.l,Ma.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Be;Be.NAMES=N0;class As extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=T0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new C,Ea=new Y;class Bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=up,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ga(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ga(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ga(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ga(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==up&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class F0 extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class k0 extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vn extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qy=0;const xn=new ft,Ju=new nn,Br=new C,ln=new Vt,$s=new Vt,yt=new C;class Hn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L0(e)?k0:F0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(ln.min,$s.min),ln.expandByPoint(yt),yt.addVectors(ln.max,$s.max),ln.expandByPoint(yt)):(ln.expandByPoint($s.min),ln.expandByPoint($s.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)yt.fromBufferAttribute(a,u),l&&(Br.fromBufferAttribute(e,u),yt.add(Br)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new C,c[L]=new C;const h=new C,d=new C,m=new C,x=new Y,f=new Y,p=new Y,v=new C,_=new C;function g(L,B,V){h.fromArray(r,L*3),d.fromArray(r,B*3),m.fromArray(r,V*3),x.fromArray(o,L*2),f.fromArray(o,B*2),p.fromArray(o,V*2),d.sub(h),m.sub(h),f.sub(x),p.sub(x);const N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(N),_.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(N),u[L].add(v),u[B].add(v),u[V].add(v),c[L].add(_),c[B].add(_),c[V].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let L=0,B=y.length;L<B;++L){const V=y[L],N=V.start,I=V.count;for(let H=N,K=N+I;H<K;H+=3)g(i[H+0],i[H+1],i[H+2])}const w=new C,A=new C,T=new C,S=new C;function E(L){T.fromArray(s,L*3),S.copy(T);const B=u[L];w.copy(B),w.sub(T.multiplyScalar(T.dot(B))).normalize(),A.crossVectors(S,B);const N=A.dot(c[L])<0?-1:1;l[L*4]=w.x,l[L*4+1]=w.y,l[L*4+2]=w.z,l[L*4+3]=N}for(let L=0,B=y.length;L<B;++L){const V=y[L],N=V.start,I=V.count;for(let H=N,K=N+I;H<K;H+=3)E(i[H+0]),E(i[H+1]),E(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new C,s=new C,o=new C,a=new C,l=new C,u=new C,c=new C,h=new C;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),f=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,f),o.fromBufferAttribute(t,p),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,f),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let m=0,x=0;for(let f=0,p=l.length;f<p;f++){a.isInterleavedBufferAttribute?m=l[f]*a.data.stride+a.offset:m=l[f]*c;for(let v=0;v<c;v++)d[x++]=u[m++]}return new Bn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wp=new ft,Yn=new z0,Ta=new ql,Mp=new C,Ys=new C,Zs=new C,Ks=new C,Qu=new C,ba=new C,Aa=new Y,Pa=new Y,La=new Y,ec=new C,Ca=new C;class Jt extends nn{constructor(e=new Hn,t=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ba.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Qu.fromBufferAttribute(h,e),o?ba.addScaledVector(Qu,c):ba.addScaledVector(Qu.sub(t),c))}t.add(ba)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Yn.copy(e.ray).recast(e.near),Ta.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Ta,Mp)===null||Yn.origin.distanceToSquared(Mp)>(e.far-e.near)**2))||(wp.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(wp),i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,h=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=h.length;m<x;m++){const f=h[m],p=r[f.materialIndex],v=Math.max(f.start,d.start),_=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let g=v,y=_;g<y;g+=3){const w=a.getX(g),A=a.getX(g+1),T=a.getX(g+2);o=Da(this,p,e,Yn,u,c,w,A,T),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let f=m,p=x;f<p;f+=3){const v=a.getX(f),_=a.getX(f+1),g=a.getX(f+2);o=Da(this,r,e,Yn,u,c,v,_,g),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=h.length;m<x;m++){const f=h[m],p=r[f.materialIndex],v=Math.max(f.start,d.start),_=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let g=v,y=_;g<y;g+=3){const w=g,A=g+1,T=g+2;o=Da(this,p,e,Yn,u,c,w,A,T),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let f=m,p=x;f<p;f+=3){const v=f,_=f+1,g=f+2;o=Da(this,r,e,Yn,u,c,v,_,g),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}}}function $y(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wn,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ca);return u<t.near||u>t.far?null:{distance:u,point:Ca.clone(),object:n}}function Da(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,Ys),n.getVertexPosition(a,Zs),n.getVertexPosition(l,Ks);const u=$y(n,e,t,i,Ys,Zs,Ks,ec);if(u){r&&(Aa.fromBufferAttribute(r,o),Pa.fromBufferAttribute(r,a),La.fromBufferAttribute(r,l),u.uv=fi.getUV(ec,Ys,Zs,Ks,Aa,Pa,La,new Y)),s&&(Aa.fromBufferAttribute(s,o),Pa.fromBufferAttribute(s,a),La.fromBufferAttribute(s,l),u.uv2=fi.getUV(ec,Ys,Zs,Ks,Aa,Pa,La,new Y));const c={a:o,b:a,c:l,normal:new C,materialIndex:0};fi.getNormal(Ys,Zs,Ks,c.normal),u.face=c}return u}class Jo extends Hn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vn(u,3)),this.setAttribute("normal",new Vn(c,3)),this.setAttribute("uv",new Vn(h,2));function x(f,p,v,_,g,y,w,A,T,S,E){const L=y/T,B=w/S,V=y/2,N=w/2,I=A/2,H=T+1,K=S+1;let Q=0,R=0;const G=new C;for(let U=0;U<K;U++){const ie=U*B-N;for(let z=0;z<H;z++){const J=z*L-V;G[f]=J*_,G[p]=ie*g,G[v]=I,u.push(G.x,G.y,G.z),G[f]=0,G[p]=0,G[v]=A>0?1:-1,c.push(G.x,G.y,G.z),h.push(z/T),h.push(1-U/S),Q+=1}}for(let U=0;U<S;U++)for(let ie=0;ie<T;ie++){const z=d+ie+H*U,J=d+ie+H*(U+1),ne=d+(ie+1)+H*(U+1),F=d+(ie+1)+H*U;l.push(z,J,F),l.push(J,ne,F),R+=6}a.addGroup(m,R,E),m+=R,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const r in i)e[r]=i[r]}return e}function Yy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function O0(n){return n.getRenderTarget()===null&&n.outputEncoding===je?Kn:Vo}const Zy={clone:Ps,merge:Ot};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Yy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class U0 extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends U0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hp*2*Math.atan(Math.tan(Nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=-90,Gr=1;class Qy extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Nn(Vr,Gr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Nn(Vr,Gr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Nn(Vr,Gr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Nn(Vr,Gr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Nn(Vr,Gr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Nn(Vr,Gr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=xi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class B0 extends fn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class e1 extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new B0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jo(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:qi});s.uniforms.tEquirect.value=t;const o=new Jt(r,s),a=t.minFilter;return t.minFilter===Uo&&(t.minFilter=Sn),new Qy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const tc=new C,t1=new C,n1=new Ht;class ar{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=tc.subVectors(i,t).cross(t1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||n1.getNormalMatrix(e),r=this.coplanarPoint(tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new ql,Ra=new C;class V0{constructor(e=new ar,t=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],h=i[7],d=i[8],m=i[9],x=i[10],f=i[11],p=i[12],v=i[13],_=i[14],g=i[15];return t[0].setComponents(a-r,h-l,f-d,g-p).normalize(),t[1].setComponents(a+r,h+l,f+d,g+p).normalize(),t[2].setComponents(a+s,h+u,f+m,g+v).normalize(),t[3].setComponents(a-s,h-u,f-m,g-v).normalize(),t[4].setComponents(a-o,h-c,f-x,g-_).normalize(),t[5].setComponents(a+o,h+c,f+x,g+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function i1(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(h instanceof Int16Array)x=5122;else if(h instanceof Uint32Array)x=5125;else if(h instanceof Int32Array)x=5124;else if(h instanceof Int8Array)x=5120;else if(h instanceof Uint8Array)x=5121;else if(h instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const d=c.array,m=c.updateRange;n.bindBuffer(h,u),m.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:o,remove:a,update:l}}class md extends Hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=t/l,m=[],x=[],f=[],p=[];for(let v=0;v<c;v++){const _=v*d-o;for(let g=0;g<u;g++){const y=g*h-s;x.push(y,-_,0),f.push(0,0,1),p.push(g/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let _=0;_<a;_++){const g=_+u*v,y=_+u*(v+1),w=_+1+u*(v+1),A=_+1+u*v;m.push(g,y,A),m.push(y,w,A)}this.setIndex(m),this.setAttribute("position",new Vn(x,3)),this.setAttribute("normal",new Vn(f,3)),this.setAttribute("uv",new Vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.width,e.height,e.widthSegments,e.heightSegments)}}var r1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,s1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,a1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c1="vec3 transformed = vec3( position );",h1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,f1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,M1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,E1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",D1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,W1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,q1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,$1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Q1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,xS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,MS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ES=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,LS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,US=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$S=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,YS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ZS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,KS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,JS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,QS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ew=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gw=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_w=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Aw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Iw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:r1,alphamap_pars_fragment:s1,alphatest_fragment:o1,alphatest_pars_fragment:a1,aomap_fragment:l1,aomap_pars_fragment:u1,begin_vertex:c1,beginnormal_vertex:h1,bsdfs:d1,iridescence_fragment:f1,bumpmap_pars_fragment:p1,clipping_planes_fragment:m1,clipping_planes_pars_fragment:g1,clipping_planes_pars_vertex:v1,clipping_planes_vertex:x1,color_fragment:_1,color_pars_fragment:y1,color_pars_vertex:S1,color_vertex:w1,common:M1,cube_uv_reflection_fragment:E1,defaultnormal_vertex:T1,displacementmap_pars_vertex:b1,displacementmap_vertex:A1,emissivemap_fragment:P1,emissivemap_pars_fragment:L1,encodings_fragment:C1,encodings_pars_fragment:D1,envmap_fragment:R1,envmap_common_pars_fragment:z1,envmap_pars_fragment:I1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:q1,envmap_vertex:F1,fog_vertex:k1,fog_pars_vertex:O1,fog_fragment:U1,fog_pars_fragment:B1,gradientmap_pars_fragment:V1,lightmap_fragment:G1,lightmap_pars_fragment:W1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:X1,lights_pars_begin:j1,lights_toon_fragment:$1,lights_toon_pars_fragment:Y1,lights_phong_fragment:Z1,lights_phong_pars_fragment:K1,lights_physical_fragment:J1,lights_physical_pars_fragment:Q1,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:oS,map_fragment:aS,map_pars_fragment:lS,map_particle_fragment:uS,map_particle_pars_fragment:cS,metalnessmap_fragment:hS,metalnessmap_pars_fragment:dS,morphcolor_vertex:fS,morphnormal_vertex:pS,morphtarget_pars_vertex:mS,morphtarget_vertex:gS,normal_fragment_begin:vS,normal_fragment_maps:xS,normal_pars_fragment:_S,normal_pars_vertex:yS,normal_vertex:SS,normalmap_pars_fragment:wS,clearcoat_normal_fragment_begin:MS,clearcoat_normal_fragment_maps:ES,clearcoat_pars_fragment:TS,iridescence_pars_fragment:bS,output_fragment:AS,packing:PS,premultiplied_alpha_fragment:LS,project_vertex:CS,dithering_fragment:DS,dithering_pars_fragment:RS,roughnessmap_fragment:zS,roughnessmap_pars_fragment:IS,shadowmap_pars_fragment:NS,shadowmap_pars_vertex:FS,shadowmap_vertex:kS,shadowmask_pars_fragment:OS,skinbase_vertex:US,skinning_pars_vertex:BS,skinning_vertex:VS,skinnormal_vertex:GS,specularmap_fragment:WS,specularmap_pars_fragment:HS,tonemapping_fragment:XS,tonemapping_pars_fragment:jS,transmission_fragment:qS,transmission_pars_fragment:$S,uv_pars_fragment:YS,uv_pars_vertex:ZS,uv_vertex:KS,uv2_pars_fragment:JS,uv2_pars_vertex:QS,uv2_vertex:ew,worldpos_vertex:tw,background_vert:nw,background_frag:iw,backgroundCube_vert:rw,backgroundCube_frag:sw,cube_vert:ow,cube_frag:aw,depth_vert:lw,depth_frag:uw,distanceRGBA_vert:cw,distanceRGBA_frag:hw,equirect_vert:dw,equirect_frag:fw,linedashed_vert:pw,linedashed_frag:mw,meshbasic_vert:gw,meshbasic_frag:vw,meshlambert_vert:xw,meshlambert_frag:_w,meshmatcap_vert:yw,meshmatcap_frag:Sw,meshnormal_vert:ww,meshnormal_frag:Mw,meshphong_vert:Ew,meshphong_frag:Tw,meshphysical_vert:bw,meshphysical_frag:Aw,meshtoon_vert:Pw,meshtoon_frag:Lw,points_vert:Cw,points_frag:Dw,shadow_vert:Rw,shadow_frag:zw,sprite_vert:Iw,sprite_frag:Nw},ae={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ht},uv2Transform:{value:new Ht},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}}},Jn={basic:{uniforms:Ot([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Ot([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Ot([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Ot([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Ot([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Ot([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Ot([ae.points,ae.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Ot([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Ot([ae.common,ae.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Ot([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Ot([ae.sprite,ae.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Ot([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Ot([ae.lights,ae.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Jn.physical={uniforms:Ot([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Y(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const za={r:0,b:0,g:0};function Fw(n,e,t,i,r,s,o){const a=new Be(0);let l=s===!0?0:1,u,c,h=null,d=0,m=null;function x(p,v){let _=!1,g=v.isScene===!0?v.background:null;g&&g.isTexture&&(g=(v.backgroundBlurriness>0?t:e).get(g));const y=n.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(g=null),g===null?f(a,l):g&&g.isColor&&(f(g,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===jl)?(c===void 0&&(c=new Jt(new Jo(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:Ps(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=g.encoding!==je,(h!==g||d!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Jt(new md(2,2),new Ar({name:"BackgroundMaterial",uniforms:Ps(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=g.encoding!==je,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function f(p,v){p.getRGB(za,O0(n)),i.buffers.color.setClear(za.r,za.g,za.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(p,v=1){a.set(p),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(a,l)},render:x}}function kw(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function h(I,H,K,Q,R){let G=!1;if(o){const U=f(Q,K,H);u!==U&&(u=U,m(u.object)),G=v(I,Q,K,R),G&&_(I,Q,K,R)}else{const U=H.wireframe===!0;(u.geometry!==Q.id||u.program!==K.id||u.wireframe!==U)&&(u.geometry=Q.id,u.program=K.id,u.wireframe=U,G=!0)}R!==null&&t.update(R,34963),(G||c)&&(c=!1,S(I,H,K,Q),R!==null&&n.bindBuffer(34963,t.get(R).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function f(I,H,K){const Q=K.wireframe===!0;let R=a[I.id];R===void 0&&(R={},a[I.id]=R);let G=R[H.id];G===void 0&&(G={},R[H.id]=G);let U=G[Q];return U===void 0&&(U=p(d()),G[Q]=U),U}function p(I){const H=[],K=[],Q=[];for(let R=0;R<r;R++)H[R]=0,K[R]=0,Q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:Q,object:I,attributes:{},index:null}}function v(I,H,K,Q){const R=u.attributes,G=H.attributes;let U=0;const ie=K.getAttributes();for(const z in ie)if(ie[z].location>=0){const ne=R[z];let F=G[z];if(F===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),ne===void 0||ne.attribute!==F||F&&ne.data!==F.data)return!0;U++}return u.attributesNum!==U||u.index!==Q}function _(I,H,K,Q){const R={},G=H.attributes;let U=0;const ie=K.getAttributes();for(const z in ie)if(ie[z].location>=0){let ne=G[z];ne===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const F={};F.attribute=ne,ne&&ne.data&&(F.data=ne.data),R[z]=F,U++}u.attributes=R,u.attributesNum=U,u.index=Q}function g(){const I=u.newAttributes;for(let H=0,K=I.length;H<K;H++)I[H]=0}function y(I){w(I,0)}function w(I,H){const K=u.newAttributes,Q=u.enabledAttributes,R=u.attributeDivisors;K[I]=1,Q[I]===0&&(n.enableVertexAttribArray(I),Q[I]=1),R[I]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),R[I]=H)}function A(){const I=u.newAttributes,H=u.enabledAttributes;for(let K=0,Q=H.length;K<Q;K++)H[K]!==I[K]&&(n.disableVertexAttribArray(K),H[K]=0)}function T(I,H,K,Q,R,G){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(I,H,K,R,G):n.vertexAttribPointer(I,H,K,Q,R,G)}function S(I,H,K,Q){if(i.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const R=Q.attributes,G=K.getAttributes(),U=H.defaultAttributeValues;for(const ie in G){const z=G[ie];if(z.location>=0){let J=R[ie];if(J===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const ne=J.normalized,F=J.itemSize,le=t.get(J);if(le===void 0)continue;const re=le.buffer,fe=le.type,pe=le.bytesPerElement;if(J.isInterleavedBufferAttribute){const Se=J.data,be=Se.stride,Ae=J.offset;if(Se.isInstancedInterleavedBuffer){for(let Re=0;Re<z.locationSize;Re++)w(z.location+Re,Se.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Re=0;Re<z.locationSize;Re++)y(z.location+Re);n.bindBuffer(34962,re);for(let Re=0;Re<z.locationSize;Re++)T(z.location+Re,F/z.locationSize,fe,ne,be*pe,(Ae+F/z.locationSize*Re)*pe)}else{if(J.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)w(z.location+Se,J.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<z.locationSize;Se++)y(z.location+Se);n.bindBuffer(34962,re);for(let Se=0;Se<z.locationSize;Se++)T(z.location+Se,F/z.locationSize,fe,ne,F*pe,F/z.locationSize*Se*pe)}}else if(U!==void 0){const ne=U[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(z.location,ne);break;case 3:n.vertexAttrib3fv(z.location,ne);break;case 4:n.vertexAttrib4fv(z.location,ne);break;default:n.vertexAttrib1fv(z.location,ne)}}}}A()}function E(){V();for(const I in a){const H=a[I];for(const K in H){const Q=H[K];for(const R in Q)x(Q[R].object),delete Q[R];delete H[K]}delete a[I]}}function L(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const K in H){const Q=H[K];for(const R in Q)x(Q[R].object),delete Q[R];delete H[K]}delete a[I.id]}function B(I){for(const H in a){const K=a[H];if(K[I.id]===void 0)continue;const Q=K[I.id];for(const R in Q)x(Q[R].object),delete Q[R];delete K[I.id]}}function V(){N(),c=!0,u!==l&&(u=l,m(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:y,disableUnusedAttributes:A}}function Ow(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,h){if(h===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,c,h),t.update(c,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Uw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),d=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),f=n.getParameter(34921),p=n.getParameter(36347),v=n.getParameter(36348),_=n.getParameter(36349),g=d>0,y=o||e.has("OES_texture_float"),w=g&&y,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:A}}function Bw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ar,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,f=h.clipIntersection,p=h.clipShadows,v=n.get(h);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,g=_*4;let y=v.clippingState||null;l.value=y,y=c(x,d,g,m);for(let w=0;w!==g;++w)y[w]=t[w];v.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,m,x){const f=h!==null?h.length:0;let p=null;if(f!==0){if(p=l.value,x!==!0||p===null){const v=m+f*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<v)&&(p=new Float32Array(v));for(let g=0,y=m;g!==f;++g,y+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function Vw(n){let e=new WeakMap;function t(o,a){return a===hh?o.mapping=Es:a===dh&&(o.mapping=Ts),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===hh||a===dh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new e1(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bl extends U0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,Ep=[.125,.215,.35,.446,.526,.582],ur=20,nc=new bl,Tp=new Be;let ic=null;const lr=(1+Math.sqrt(5))/2,Hr=1/lr,bp=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,lr,Hr),new C(0,lr,-Hr),new C(Hr,0,lr),new C(-Hr,0,lr),new C(lr,Hr,0),new C(-lr,Hr,0)];class Ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ic=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic),e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Bo,format:kn,encoding:Tr,depthBuffer:!1},r=Pp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gw(s)),this._blurMaterial=Ww(s,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,nc)}_sceneToCubeUV(e,t,i,r){const a=new Nn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Tp),c.toneMapping=xi,c.autoClear=!1;const m=new As({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new Jt(new Jo,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(Tp),f=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(a.up.set(0,l[v],0),a.lookAt(u[v],0,0)):_===1?(a.up.set(0,0,l[v]),a.lookAt(0,u[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,u[v]));const g=this._cubeSize;Ia(r,_*g,v>2?g:0,g,g),c.setRenderTarget(r),f&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Es||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bp[(r-1)%bp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Jt(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ur-1),f=s/x,p=isFinite(s)?1+Math.floor(c*f):ur;p>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ur}`);const v=[];let _=0;for(let T=0;T<ur;++T){const S=T/f,E=Math.exp(-S*S/2);v.push(E),T===0?_+=E:T<p&&(_+=2*E)}for(let T=0;T<v.length;T++)v[T]=v[T]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const y=this._sizeLods[r],w=3*y*(r>g-ss?r-g+ss:0),A=4*(this._cubeSize-y);Ia(t,w,A,3*y,2*y),l.setRenderTarget(t),l.render(h,nc)}}function Gw(n){const e=[],t=[],i=[];let r=n;const s=n-ss+1+Ep.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ss?l=Ep[o-n+ss-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,x=6,f=3,p=2,v=1,_=new Float32Array(f*x*m),g=new Float32Array(p*x*m),y=new Float32Array(v*x*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,S=A>2?0:-1,E=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];_.set(E,f*x*A),g.set(d,p*x*A);const L=[A,A,A,A,A,A];y.set(L,v*x*A)}const w=new Hn;w.setAttribute("position",new Bn(_,f)),w.setAttribute("uv",new Bn(g,p)),w.setAttribute("faceIndex",new Bn(y,v)),e.push(w),r>ss&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pp(n,e,t){const i=new br(n,e,t);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ww(n,e,t){const i=new Float32Array(ur),r=new C(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Lp(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Cp(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hh||l===dh,c=l===Es||l===Ts;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ap(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){t===null&&(t=new Ap(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Xw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jw(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],34962);const m=h.morphAttributes;for(const x in m){const f=m[x];for(let p=0,v=f.length;p<v;p++)e.update(f[p],34962)}}function u(h){const d=[],m=h.index,x=h.attributes.position;let f=0;if(m!==null){const _=m.array;f=m.version;for(let g=0,y=_.length;g<y;g+=3){const w=_[g+0],A=_[g+1],T=_[g+2];d.push(w,A,A,T,T,w)}}else{const _=x.array;f=x.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const w=g+0,A=g+1,T=g+2;d.push(w,A,A,T,T,w)}}const p=new(L0(d)?k0:F0)(d,1);p.version=f;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function c(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function qw(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,m){n.drawElements(s,m,a,d*l),t.update(m,s,1)}function h(d,m,x){if(x===0)return;let f,p;if(r)f=n,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,a,d*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h}function $w(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yw(n,e){return n[0]-e[0]}function Zw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Kw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Et,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=x!==void 0?x.length:0;let p=s.get(c);if(p===void 0||p.count!==f){let H=function(){N.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let E=0;g===!0&&(E=1),y===!0&&(E=2),w===!0&&(E=3);let L=c.attributes.position.count*E,B=1;L>e.maxTextureSize&&(B=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const V=new Float32Array(L*B*4*f),N=new R0(V,L,B,f);N.type=mr,N.needsUpdate=!0;const I=E*4;for(let K=0;K<f;K++){const Q=A[K],R=T[K],G=S[K],U=L*B*4*K;for(let ie=0;ie<Q.count;ie++){const z=ie*I;g===!0&&(o.fromBufferAttribute(Q,ie),V[U+z+0]=o.x,V[U+z+1]=o.y,V[U+z+2]=o.z,V[U+z+3]=0),y===!0&&(o.fromBufferAttribute(R,ie),V[U+z+4]=o.x,V[U+z+5]=o.y,V[U+z+6]=o.z,V[U+z+7]=0),w===!0&&(o.fromBufferAttribute(G,ie),V[U+z+8]=o.x,V[U+z+9]=o.y,V[U+z+10]=o.z,V[U+z+11]=G.itemSize===4?o.w:1)}}p={count:f,texture:N,size:new Y(L,B)},s.set(c,p),c.addEventListener("dispose",H)}let v=0;for(let g=0;g<d.length;g++)v+=d[g];const _=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let f=i[c.id];if(f===void 0||f.length!==x){f=[];for(let y=0;y<x;y++)f[y]=[y,0];i[c.id]=f}for(let y=0;y<x;y++){const w=f[y];w[0]=y,w[1]=d[y]}f.sort(Zw);for(let y=0;y<8;y++)y<x&&f[y][1]?(a[y][0]=f[y][0],a[y][1]=f[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Yw);const p=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const w=a[y],A=w[0],T=w[1];A!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+y)!==p[A]&&c.setAttribute("morphTarget"+y,p[A]),v&&c.getAttribute("morphNormal"+y)!==v[A]&&c.setAttribute("morphNormal"+y,v[A]),r[y]=T,_+=T):(p&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),v&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const g=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Jw(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);return r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const W0=new fn,H0=new R0,X0=new Oy,j0=new B0,Dp=[],Rp=[],zp=new Float32Array(16),Ip=new Float32Array(9),Np=new Float32Array(4);function Ns(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Dp[r];if(s===void 0&&(s=new Float32Array(r),Dp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yl(n,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function iM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Np.set(i),n.uniformMatrix2fv(this.addr,!1,Np),mt(t,i)}}function rM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Ip.set(i),n.uniformMatrix3fv(this.addr,!1,Ip),mt(t,i)}}function sM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;zp.set(i),n.uniformMatrix4fv(this.addr,!1,zp),mt(t,i)}}function oM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function cM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function pM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||W0,r)}function mM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||X0,r)}function gM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||j0,r)}function vM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||H0,r)}function xM(n){switch(n){case 5126:return Qw;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return rM;case 35676:return sM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return uM;case 5125:return cM;case 36294:return hM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return vM}}function _M(n,e){n.uniform1fv(this.addr,e)}function yM(n,e){const t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function SM(n,e){const t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function wM(n,e){const t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function MM(n,e){const t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function EM(n,e){const t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TM(n,e){const t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bM(n,e){n.uniform1iv(this.addr,e)}function AM(n,e){n.uniform2iv(this.addr,e)}function PM(n,e){n.uniform3iv(this.addr,e)}function LM(n,e){n.uniform4iv(this.addr,e)}function CM(n,e){n.uniform1uiv(this.addr,e)}function DM(n,e){n.uniform2uiv(this.addr,e)}function RM(n,e){n.uniform3uiv(this.addr,e)}function zM(n,e){n.uniform4uiv(this.addr,e)}function IM(n,e,t){const i=this.cache,r=e.length,s=Yl(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||W0,s[o])}function NM(n,e,t){const i=this.cache,r=e.length,s=Yl(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||X0,s[o])}function FM(n,e,t){const i=this.cache,r=e.length,s=Yl(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||j0,s[o])}function kM(n,e,t){const i=this.cache,r=e.length,s=Yl(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||H0,s[o])}function OM(n){switch(n){case 5126:return _M;case 35664:return yM;case 35665:return SM;case 35666:return wM;case 35674:return MM;case 35675:return EM;case 35676:return TM;case 5124:case 35670:return bM;case 35667:case 35671:return AM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return CM;case 36294:return DM;case 36295:return RM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return kM}}class UM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=xM(t.type)}}class BM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=OM(t.type)}}class VM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function Fp(n,e){n.seq.push(e),n.map[e.id]=e}function GM(n,e,t){const i=n.name,r=i.length;for(rc.lastIndex=0;;){const s=rc.exec(i),o=rc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Fp(t,u===void 0?new UM(a,n,e):new BM(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new VM(a),Fp(t,h)),t=h}}}class el{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);GM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function kp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let WM=0;function HM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function XM(n){switch(n){case Tr:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Op(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+HM(n.getShaderSource(e),o)}else return r}function jM(n,e){const t=XM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qM(n,e){let t;switch(e){case iy:t="Linear";break;case ry:t="Reinhard";break;case sy:t="OptimizedCineon";break;case oy:t="ACESFilmic";break;case ay:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $M(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(so).join(`
`)}function YM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function so(n){return n!==""}function Up(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(n){return n.replace(KM,JM)}function JM(n,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return gh(t)}const QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(n){return n.replace(QM,e3)}function e3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===w0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===N_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ro&&(e="SHADOWMAP_TYPE_VSM"),e}function n3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function r3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case T0:e="ENVMAP_BLENDING_MULTIPLY";break;case ty:e="ENVMAP_BLENDING_MIX";break;case ny:e="ENVMAP_BLENDING_ADD";break}return e}function s3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function o3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=t3(t),u=n3(t),c=i3(t),h=r3(t),d=s3(t),m=t.isWebGL2?"":$M(t),x=YM(s),f=r.createProgram();let p,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(so).join(`
`),p.length>0&&(p+=`
`),v=[m,x].filter(so).join(`
`),v.length>0&&(v+=`
`)):(p=[Gp(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),v=[m,Gp(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Pe.tonemapping_pars_fragment:"",t.toneMapping!==xi?qM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,jM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=gh(o),o=Up(o,t),o=Bp(o,t),a=gh(a),a=Up(a,t),a=Bp(a,t),o=Vp(o),a=Vp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const g=_+p+o,y=_+v+a,w=kp(r,35633,g),A=kp(r,35632,y);if(r.attachShader(f,w),r.attachShader(f,A),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(f).trim(),L=r.getShaderInfoLog(w).trim(),B=r.getShaderInfoLog(A).trim();let V=!0,N=!0;if(r.getProgramParameter(f,35714)===!1){V=!1;const I=Op(r,w,"vertex"),H=Op(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,35715)+`

Program Info Log: `+E+`
`+I+`
`+H)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(L===""||B==="")&&(N=!1);N&&(this.diagnostics={runnable:V,programLog:E,vertexShader:{log:L,prefix:p},fragmentShader:{log:B,prefix:v}})}r.deleteShader(w),r.deleteShader(A);let T;this.getUniforms=function(){return T===void 0&&(T=new el(r,f)),T};let S;return this.getAttributes=function(){return S===void 0&&(S=ZM(r,f)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=A,this}let a3=0;class l3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new u3(e),t.set(e,i)),i}}class u3{constructor(e){this.id=a3++,this.code=e,this.usedTimes=0}}function c3(n,e,t,i,r,s,o){const a=new I0,l=new l3,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(S,E,L,B,V){const N=B.fog,I=V.geometry,H=S.isMeshStandardMaterial?B.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),Q=K&&K.mapping===jl?K.image.height:null,R=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,U=G!==void 0?G.length:0;let ie=0;I.morphAttributes.position!==void 0&&(ie=1),I.morphAttributes.normal!==void 0&&(ie=2),I.morphAttributes.color!==void 0&&(ie=3);let z,J,ne,F;if(R){const be=Jn[R];z=be.vertexShader,J=be.fragmentShader}else z=S.vertexShader,J=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),F=l.getFragmentShaderID(S);const le=n.getRenderTarget(),re=S.alphaTest>0,fe=S.clearcoat>0,pe=S.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:S.type,vertexShader:z,fragmentShader:J,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:F,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:d,outputEncoding:le===null?n.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:Tr,map:!!S.map,matcap:!!S.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Q,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Ay,tangentSpaceNormalMap:S.normalMapType===by,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===je,clearcoat:fe,clearcoatMap:fe&&!!S.clearcoatMap,clearcoatRoughnessMap:fe&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!S.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!S.iridescenceMap,iridescenceThicknessMap:pe&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===ps,alphaMap:!!S.alphaMap,alphaTest:re,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!I.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:xi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fi,flipSided:S.side===dn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)E.push(L),E.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(v(E,S),_(E,S),E.push(n.outputEncoding)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputEncoding),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.combine),S.push(E.vertexUvs),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function _(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),S.push(a.mask)}function g(S){const E=x[S.type];let L;if(E){const B=Jn[E];L=Zy.clone(B.uniforms)}else L=S.uniforms;return L}function y(S,E){let L;for(let B=0,V=u.length;B<V;B++){const N=u[B];if(N.cacheKey===E){L=N,++L.usedTimes;break}}return L===void 0&&(L=new o3(n,E,S,s),u.push(L)),L}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:g,acquireProgram:y,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:T}}function h3(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function d3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,m,x,f,p){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:f,group:p},n[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=m,v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=f,v.group=p),e++,v}function a(h,d,m,x,f,p){const v=o(h,d,m,x,f,p);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(h,d,m,x,f,p){const v=o(h,d,m,x,f,p);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function u(h,d){t.length>1&&t.sort(h||d3),i.length>1&&i.sort(d||Wp),r.length>1&&r.sort(d||Wp)}function c(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function f3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Hp,n.set(i,[o])):r>=s.length?(o=new Hp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function p3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Be};break;case"SpotLight":t={position:new C,direction:new C,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function m3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let g3=0;function v3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x3(n,e){const t=new p3,i=m3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new C);const s=new C,o=new ft,a=new ft;function l(c,h){let d=0,m=0,x=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let f=0,p=0,v=0,_=0,g=0,y=0,w=0,A=0,T=0,S=0;c.sort(v3);const E=h===!0?Math.PI:1;for(let B=0,V=c.length;B<V;B++){const N=c[B],I=N.color,H=N.intensity,K=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=I.r*H*E,m+=I.g*H*E,x+=I.b*H*E;else if(N.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(N.sh.coefficients[R],H);else if(N.isDirectionalLight){const R=t.get(N);if(R.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const G=N.shadow,U=i.get(N);U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,r.directionalShadow[f]=U,r.directionalShadowMap[f]=Q,r.directionalShadowMatrix[f]=N.shadow.matrix,y++}r.directional[f]=R,f++}else if(N.isSpotLight){const R=t.get(N);R.position.setFromMatrixPosition(N.matrixWorld),R.color.copy(I).multiplyScalar(H*E),R.distance=K,R.coneCos=Math.cos(N.angle),R.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),R.decay=N.decay,r.spot[v]=R;const G=N.shadow;if(N.map&&(r.spotLightMap[T]=N.map,T++,G.updateMatrices(N),N.castShadow&&S++),r.spotLightMatrix[v]=G.matrix,N.castShadow){const U=i.get(N);U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,r.spotShadow[v]=U,r.spotShadowMap[v]=Q,A++}v++}else if(N.isRectAreaLight){const R=t.get(N);R.color.copy(I).multiplyScalar(H),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),r.rectArea[_]=R,_++}else if(N.isPointLight){const R=t.get(N);if(R.color.copy(N.color).multiplyScalar(N.intensity*E),R.distance=N.distance,R.decay=N.decay,N.castShadow){const G=N.shadow,U=i.get(N);U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,U.shadowCameraNear=G.camera.near,U.shadowCameraFar=G.camera.far,r.pointShadow[p]=U,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=N.shadow.matrix,w++}r.point[p]=R,p++}else if(N.isHemisphereLight){const R=t.get(N);R.skyColor.copy(N.color).multiplyScalar(H*E),R.groundColor.copy(N.groundColor).multiplyScalar(H*E),r.hemi[g]=R,g++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==_||L.hemiLength!==g||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==T)&&(r.directional.length=f,r.spot.length=v,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+T-S,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=S,L.directionalLength=f,L.pointLength=p,L.spotLength=v,L.rectAreaLength=_,L.hemiLength=g,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=T,r.version=g3++)}function u(c,h){let d=0,m=0,x=0,f=0,p=0;const v=h.matrixWorldInverse;for(let _=0,g=c.length;_<g;_++){const y=c[_];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),d++}else if(y.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),x++}else if(y.isRectAreaLight){const w=r.rectArea[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),a.identity(),o.copy(y.matrixWorld),o.premultiply(v),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),f++}else if(y.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),m++}else if(y.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(v),p++}}}return{setup:l,setupView:u,state:r}}function Xp(n,e){const t=new x3(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function _3(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Xp(n,e),t.set(s,[l])):o>=a.length?(l=new Xp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class y3 extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S3 extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const w3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E3(n,e,t){let i=new V0;const r=new Y,s=new Y,o=new Et,a=new y3({depthPacking:Ty}),l=new S3,u={},c=t.maxTextureSize,h={[Wn]:dn,[dn]:Wn,[Fi]:Fi},d=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:w3,fragmentShader:M3}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Hn;x.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Jt(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w0,this.render=function(y,w,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),L=n.state;L.setBlending(qi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let B=0,V=y.length;B<V;B++){const N=y[B],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const H=I.getFrameExtents();if(r.multiply(H),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/H.x),r.x=s.x*H.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/H.y),r.y=s.y*H.y,I.mapSize.y=s.y)),I.map===null){const Q=this.type!==ro?{minFilter:Bt,magFilter:Bt}:{};I.map=new br(r.x,r.y,Q),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const K=I.getViewportCount();for(let Q=0;Q<K;Q++){const R=I.getViewport(Q);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),L.viewport(o),I.updateMatrices(N,Q),i=I.getFrustum(),g(w,A,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===ro&&v(I,A),I.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(T,S,E)};function v(y,w){const A=e.update(f);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new br(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(w,null,A,d,f,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(w,null,A,m,f,null)}function _(y,w,A,T,S,E){let L=null;const B=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(B!==void 0)L=B;else if(L=A.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=L.uuid,N=w.uuid;let I=u[V];I===void 0&&(I={},u[V]=I);let H=I[N];H===void 0&&(H=L.clone(),I[N]=H),L=H}return L.visible=w.visible,L.wireframe=w.wireframe,E===ro?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:h[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=T,L.farDistance=S),L}function g(y,w,A,T,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===ro)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const B=e.update(y),V=y.material;if(Array.isArray(V)){const N=B.groups;for(let I=0,H=N.length;I<H;I++){const K=N[I],Q=V[K.materialIndex];if(Q&&Q.visible){const R=_(y,Q,T,A.near,A.far,S);n.renderBufferDirect(A,null,B,R,y,K)}}}else if(V.visible){const N=_(y,V,T,A.near,A.far,S);n.renderBufferDirect(A,null,B,N,y,null)}}const L=y.children;for(let B=0,V=L.length;B<V;B++)g(L[B],w,A,T,S)}}function T3(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const j=new Et;let te=null;const he=new Et(0,0,0,0);return{setMask:function(ge){te!==ge&&!D&&(n.colorMask(ge,ge,ge,ge),te=ge)},setLocked:function(ge){D=ge},setClear:function(ge,He,xt,Nt,jn){jn===!0&&(ge*=Nt,He*=Nt,xt*=Nt),j.set(ge,He,xt,Nt),he.equals(j)===!1&&(n.clearColor(ge,He,xt,Nt),he.copy(j))},reset:function(){D=!1,te=null,he.set(-1,0,0,0)}}}function s(){let D=!1,j=null,te=null,he=null;return{setTest:function(ge){ge?re(2929):fe(2929)},setMask:function(ge){j!==ge&&!D&&(n.depthMask(ge),j=ge)},setFunc:function(ge){if(te!==ge){switch(ge){case $_:n.depthFunc(512);break;case Y_:n.depthFunc(519);break;case Z_:n.depthFunc(513);break;case ch:n.depthFunc(515);break;case K_:n.depthFunc(514);break;case J_:n.depthFunc(518);break;case Q_:n.depthFunc(516);break;case ey:n.depthFunc(517);break;default:n.depthFunc(515)}te=ge}},setLocked:function(ge){D=ge},setClear:function(ge){he!==ge&&(n.clearDepth(ge),he=ge)},reset:function(){D=!1,j=null,te=null,he=null}}}function o(){let D=!1,j=null,te=null,he=null,ge=null,He=null,xt=null,Nt=null,jn=null;return{setTest:function(rt){D||(rt?re(2960):fe(2960))},setMask:function(rt){j!==rt&&!D&&(n.stencilMask(rt),j=rt)},setFunc:function(rt,vn,qn){(te!==rt||he!==vn||ge!==qn)&&(n.stencilFunc(rt,vn,qn),te=rt,he=vn,ge=qn)},setOp:function(rt,vn,qn){(He!==rt||xt!==vn||Nt!==qn)&&(n.stencilOp(rt,vn,qn),He=rt,xt=vn,Nt=qn)},setLocked:function(rt){D=rt},setClear:function(rt){jn!==rt&&(n.clearStencil(rt),jn=rt)},reset:function(){D=!1,j=null,te=null,he=null,ge=null,He=null,xt=null,Nt=null,jn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,f=[],p=null,v=!1,_=null,g=null,y=null,w=null,A=null,T=null,S=null,E=!1,L=null,B=null,V=null,N=null,I=null;const H=n.getParameter(35661);let K=!1,Q=0;const R=n.getParameter(7938);R.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(R)[1]),K=Q>=1):R.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),K=Q>=2);let G=null,U={};const ie=n.getParameter(3088),z=n.getParameter(2978),J=new Et().fromArray(ie),ne=new Et().fromArray(z);function F(D,j,te){const he=new Uint8Array(4),ge=n.createTexture();n.bindTexture(D,ge),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let He=0;He<te;He++)n.texImage2D(j+He,0,6408,1,1,0,6408,5121,he);return ge}const le={};le[3553]=F(3553,3553,1),le[34067]=F(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),re(2929),l.setFunc(ch),$t(!1),It(zf),re(2884),gt(qi);function re(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function fe(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function pe(D,j){return m[D]!==j?(n.bindFramebuffer(D,j),m[D]=j,i&&(D===36009&&(m[36160]=j),D===36160&&(m[36009]=j)),!0):!1}function Se(D,j){let te=f,he=!1;if(D)if(te=x.get(j),te===void 0&&(te=[],x.set(j,te)),D.isWebGLMultipleRenderTargets){const ge=D.texture;if(te.length!==ge.length||te[0]!==36064){for(let He=0,xt=ge.length;He<xt;He++)te[He]=36064+He;te.length=ge.length,he=!0}}else te[0]!==36064&&(te[0]=36064,he=!0);else te[0]!==1029&&(te[0]=1029,he=!0);he&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function be(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const Ae={[jr]:32774,[k_]:32778,[O_]:32779};if(i)Ae[kf]=32775,Ae[Of]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ae[kf]=D.MIN_EXT,Ae[Of]=D.MAX_EXT)}const Re={[U_]:0,[B_]:1,[V_]:768,[M0]:770,[q_]:776,[X_]:774,[W_]:772,[G_]:769,[E0]:771,[j_]:775,[H_]:773};function gt(D,j,te,he,ge,He,xt,Nt){if(D===qi){v===!0&&(fe(3042),v=!1);return}if(v===!1&&(re(3042),v=!0),D!==F_){if(D!==_||Nt!==E){if((g!==jr||A!==jr)&&(n.blendEquation(32774),g=jr,A=jr),Nt)switch(D){case ps:n.blendFuncSeparate(1,771,1,771);break;case If:n.blendFunc(1,1);break;case Nf:n.blendFuncSeparate(0,769,0,1);break;case Ff:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ps:n.blendFuncSeparate(770,771,1,771);break;case If:n.blendFunc(770,1);break;case Nf:n.blendFuncSeparate(0,769,0,1);break;case Ff:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,w=null,T=null,S=null,_=D,E=Nt}return}ge=ge||j,He=He||te,xt=xt||he,(j!==g||ge!==A)&&(n.blendEquationSeparate(Ae[j],Ae[ge]),g=j,A=ge),(te!==y||he!==w||He!==T||xt!==S)&&(n.blendFuncSeparate(Re[te],Re[he],Re[He],Re[xt]),y=te,w=he,T=He,S=xt),_=D,E=!1}function bn(D,j){D.side===Fi?fe(2884):re(2884);let te=D.side===dn;j&&(te=!te),$t(te),D.blending===ps&&D.transparent===!1?gt(qi):gt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const he=D.stencilWrite;u.setTest(he),he&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(32926):fe(32926)}function $t(D){L!==D&&(D?n.frontFace(2304):n.frontFace(2305),L=D)}function It(D){D!==z_?(re(2884),D!==B&&(D===zf?n.cullFace(1029):D===I_?n.cullFace(1028):n.cullFace(1032))):fe(2884),B=D}function nt(D){D!==V&&(K&&n.lineWidth(D),V=D)}function Ye(D,j,te){D?(re(32823),(N!==j||I!==te)&&(n.polygonOffset(j,te),N=j,I=te)):fe(32823)}function Xn(D){D?re(3089):fe(3089)}function An(D){D===void 0&&(D=33984+H-1),G!==D&&(n.activeTexture(D),G=D)}function P(D,j,te){te===void 0&&(G===null?te=33984+H-1:te=G);let he=U[te];he===void 0&&(he={type:void 0,texture:void 0},U[te]=he),(he.type!==D||he.texture!==j)&&(G!==te&&(n.activeTexture(te),G=te),n.bindTexture(D,j||le[D]),he.type=D,he.texture=j)}function M(){const D=U[G];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){J.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function xe(D){ne.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function ke(D,j){let te=h.get(j);te===void 0&&(te=new WeakMap,h.set(j,te));let he=te.get(D);he===void 0&&(he=n.getUniformBlockIndex(j,D.name),te.set(D,he))}function Ze(D,j){const he=h.get(j).get(D);c.get(j)!==he&&(n.uniformBlockBinding(j,he,D.__bindingPointIndex),c.set(j,he))}function vt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},G=null,U={},m={},x=new WeakMap,f=[],p=null,v=!1,_=null,g=null,y=null,w=null,A=null,T=null,S=null,E=!1,L=null,B=null,V=null,N=null,I=null,J.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:re,disable:fe,bindFramebuffer:pe,drawBuffers:Se,useProgram:be,setBlending:gt,setMaterial:bn,setFlipSided:$t,setCullFace:It,setLineWidth:nt,setPolygonOffset:Ye,setScissorTest:Xn,activeTexture:An,bindTexture:P,unbindTexture:M,compressedTexImage2D:q,compressedTexImage3D:se,texImage2D:ve,texImage3D:Ee,updateUBOMapping:ke,uniformBlockBinding:Ze,texStorage2D:Z,texStorage3D:Me,texSubImage2D:oe,texSubImage3D:ce,compressedTexSubImage2D:_e,compressedTexSubImage3D:me,scissor:we,viewport:xe,reset:vt}}function b3(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return v?new OffscreenCanvas(P,M):Tl("canvas")}function g(P,M,q,se){let oe=1;if((P.width>se||P.height>se)&&(oe=se/Math.max(P.width,P.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ce=M?Cy:Math.floor,_e=ce(oe*P.width),me=ce(oe*P.height);f===void 0&&(f=_(_e,me));const Z=q?_(_e,me):f;return Z.width=_e,Z.height=me,Z.getContext("2d").drawImage(P,0,0,_e,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+_e+"x"+me+")."),Z}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return dp(P.width)&&dp(P.height)}function w(P){return a?!1:P.wrapS!==Fn||P.wrapT!==Fn||P.minFilter!==Bt&&P.minFilter!==Sn}function A(P,M){return P.generateMipmaps&&M&&P.minFilter!==Bt&&P.minFilter!==Sn}function T(P){n.generateMipmap(P)}function S(P,M,q,se,oe=!1){if(a===!1)return M;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce=M;return M===6403&&(q===5126&&(ce=33326),q===5131&&(ce=33325),q===5121&&(ce=33321)),M===33319&&(q===5126&&(ce=33328),q===5131&&(ce=33327),q===5121&&(ce=33323)),M===6408&&(q===5126&&(ce=34836),q===5131&&(ce=34842),q===5121&&(ce=se===je&&oe===!1?35907:32856),q===32819&&(ce=32854),q===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function E(P,M,q){return A(P,q)===!0||P.isFramebufferTexture&&P.minFilter!==Bt&&P.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function L(P){return P===Bt||P===Uf||P===Pu?9728:9729}function B(P){const M=P.target;M.removeEventListener("dispose",B),N(M),M.isVideoTexture&&x.delete(M)}function V(P){const M=P.target;M.removeEventListener("dispose",V),H(M)}function N(P){const M=i.get(P);if(M.__webglInit===void 0)return;const q=P.source,se=p.get(q);if(se){const oe=se[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&I(P),Object.keys(se).length===0&&p.delete(q)}i.remove(P)}function I(P){const M=i.get(P);n.deleteTexture(M.__webglTexture);const q=P.source,se=p.get(q);delete se[M.__cacheKey],o.memory.textures--}function H(P){const M=P.texture,q=i.get(P),se=i.get(M);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)n.deleteFramebuffer(q.__webglFramebuffer[oe]),q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[oe]);else{if(n.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let oe=0;oe<q.__webglColorRenderbuffer.length;oe++)q.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[oe]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let oe=0,ce=M.length;oe<ce;oe++){const _e=i.get(M[oe]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(P)}let K=0;function Q(){K=0}function R(){const P=K;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),K+=1,P}function G(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.encoding),M.join()}function U(P,M){const q=i.get(P);if(P.isVideoTexture&&Xn(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(q,P,M);return}}t.bindTexture(3553,q.__webglTexture,33984+M)}function ie(P,M){const q=i.get(P);if(P.version>0&&q.__version!==P.version){fe(q,P,M);return}t.bindTexture(35866,q.__webglTexture,33984+M)}function z(P,M){const q=i.get(P);if(P.version>0&&q.__version!==P.version){fe(q,P,M);return}t.bindTexture(32879,q.__webglTexture,33984+M)}function J(P,M){const q=i.get(P);if(P.version>0&&q.__version!==P.version){pe(q,P,M);return}t.bindTexture(34067,q.__webglTexture,33984+M)}const ne={[fh]:10497,[Fn]:33071,[ph]:33648},F={[Bt]:9728,[Uf]:9984,[Pu]:9986,[Sn]:9729,[ly]:9985,[Uo]:9987};function le(P,M,q){if(q?(n.texParameteri(P,10242,ne[M.wrapS]),n.texParameteri(P,10243,ne[M.wrapT]),(P===32879||P===35866)&&n.texParameteri(P,32882,ne[M.wrapR]),n.texParameteri(P,10240,F[M.magFilter]),n.texParameteri(P,10241,F[M.minFilter])):(n.texParameteri(P,10242,33071),n.texParameteri(P,10243,33071),(P===32879||P===35866)&&n.texParameteri(P,32882,33071),(M.wrapS!==Fn||M.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,10240,L(M.magFilter)),n.texParameteri(P,10241,L(M.minFilter)),M.minFilter!==Bt&&M.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Bt||M.minFilter!==Pu&&M.minFilter!==Uo||M.type===mr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Bo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(P,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function re(P,M){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",B));const se=M.source;let oe=p.get(se);oe===void 0&&(oe={},p.set(se,oe));const ce=G(M);if(ce!==P.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),oe[ce].usedTimes++;const _e=oe[P.__cacheKey];_e!==void 0&&(oe[P.__cacheKey].usedTimes--,_e.usedTimes===0&&I(M)),P.__cacheKey=ce,P.__webglTexture=oe[ce].texture}return q}function fe(P,M,q){let se=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=35866),M.isData3DTexture&&(se=32879);const oe=re(P,M),ce=M.source;t.bindTexture(se,P.__webglTexture,33984+q);const _e=i.get(ce);if(ce.version!==_e.__version||oe===!0){t.activeTexture(33984+q),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const me=w(M)&&y(M.image)===!1;let Z=g(M.image,me,!1,c);Z=An(M,Z);const Me=y(Z)||a,ve=s.convert(M.format,M.encoding);let Ee=s.convert(M.type),we=S(M.internalFormat,ve,Ee,M.encoding,M.isVideoTexture);le(se,M,Me);let xe;const ke=M.mipmaps,Ze=a&&M.isVideoTexture!==!0,vt=_e.__version===void 0||oe===!0,D=E(M,Z,Me);if(M.isDepthTexture)we=6402,a?M.type===mr?we=36012:M.type===pr?we=33190:M.type===ms?we=35056:we=33189:M.type===mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===xr&&we===6402&&M.type!==A0&&M.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=pr,Ee=s.convert(M.type)),M.format===bs&&we===6402&&(we=34041,M.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ms,Ee=s.convert(M.type))),vt&&(Ze?t.texStorage2D(3553,1,we,Z.width,Z.height):t.texImage2D(3553,0,we,Z.width,Z.height,0,ve,Ee,null));else if(M.isDataTexture)if(ke.length>0&&Me){Ze&&vt&&t.texStorage2D(3553,D,we,ke[0].width,ke[0].height);for(let j=0,te=ke.length;j<te;j++)xe=ke[j],Ze?t.texSubImage2D(3553,j,0,0,xe.width,xe.height,ve,Ee,xe.data):t.texImage2D(3553,j,we,xe.width,xe.height,0,ve,Ee,xe.data);M.generateMipmaps=!1}else Ze?(vt&&t.texStorage2D(3553,D,we,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,ve,Ee,Z.data)):t.texImage2D(3553,0,we,Z.width,Z.height,0,ve,Ee,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&vt&&t.texStorage3D(35866,D,we,ke[0].width,ke[0].height,Z.depth);for(let j=0,te=ke.length;j<te;j++)xe=ke[j],M.format!==kn?ve!==null?Ze?t.compressedTexSubImage3D(35866,j,0,0,0,xe.width,xe.height,Z.depth,ve,xe.data,0,0):t.compressedTexImage3D(35866,j,we,xe.width,xe.height,Z.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(35866,j,0,0,0,xe.width,xe.height,Z.depth,ve,Ee,xe.data):t.texImage3D(35866,j,we,xe.width,xe.height,Z.depth,0,ve,Ee,xe.data)}else{Ze&&vt&&t.texStorage2D(3553,D,we,ke[0].width,ke[0].height);for(let j=0,te=ke.length;j<te;j++)xe=ke[j],M.format!==kn?ve!==null?Ze?t.compressedTexSubImage2D(3553,j,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(3553,j,we,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(3553,j,0,0,xe.width,xe.height,ve,Ee,xe.data):t.texImage2D(3553,j,we,xe.width,xe.height,0,ve,Ee,xe.data)}else if(M.isDataArrayTexture)Ze?(vt&&t.texStorage3D(35866,D,we,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,ve,Ee,Z.data)):t.texImage3D(35866,0,we,Z.width,Z.height,Z.depth,0,ve,Ee,Z.data);else if(M.isData3DTexture)Ze?(vt&&t.texStorage3D(32879,D,we,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,ve,Ee,Z.data)):t.texImage3D(32879,0,we,Z.width,Z.height,Z.depth,0,ve,Ee,Z.data);else if(M.isFramebufferTexture){if(vt)if(Ze)t.texStorage2D(3553,D,we,Z.width,Z.height);else{let j=Z.width,te=Z.height;for(let he=0;he<D;he++)t.texImage2D(3553,he,we,j,te,0,ve,Ee,null),j>>=1,te>>=1}}else if(ke.length>0&&Me){Ze&&vt&&t.texStorage2D(3553,D,we,ke[0].width,ke[0].height);for(let j=0,te=ke.length;j<te;j++)xe=ke[j],Ze?t.texSubImage2D(3553,j,0,0,ve,Ee,xe):t.texImage2D(3553,j,we,ve,Ee,xe);M.generateMipmaps=!1}else Ze?(vt&&t.texStorage2D(3553,D,we,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,ve,Ee,Z)):t.texImage2D(3553,0,we,ve,Ee,Z);A(M,Me)&&T(se),_e.__version=ce.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function pe(P,M,q){if(M.image.length!==6)return;const se=re(P,M),oe=M.source;t.bindTexture(34067,P.__webglTexture,33984+q);const ce=i.get(oe);if(oe.version!==ce.__version||se===!0){t.activeTexture(33984+q),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let j=0;j<6;j++)!_e&&!me?Z[j]=g(M.image[j],!1,!0,u):Z[j]=me?M.image[j].image:M.image[j],Z[j]=An(M,Z[j]);const Me=Z[0],ve=y(Me)||a,Ee=s.convert(M.format,M.encoding),we=s.convert(M.type),xe=S(M.internalFormat,Ee,we,M.encoding),ke=a&&M.isVideoTexture!==!0,Ze=ce.__version===void 0||se===!0;let vt=E(M,Me,ve);le(34067,M,ve);let D;if(_e){ke&&Ze&&t.texStorage2D(34067,vt,xe,Me.width,Me.height);for(let j=0;j<6;j++){D=Z[j].mipmaps;for(let te=0;te<D.length;te++){const he=D[te];M.format!==kn?Ee!==null?ke?t.compressedTexSubImage2D(34069+j,te,0,0,he.width,he.height,Ee,he.data):t.compressedTexImage2D(34069+j,te,xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+j,te,0,0,he.width,he.height,Ee,we,he.data):t.texImage2D(34069+j,te,xe,he.width,he.height,0,Ee,we,he.data)}}}else{D=M.mipmaps,ke&&Ze&&(D.length>0&&vt++,t.texStorage2D(34067,vt,xe,Z[0].width,Z[0].height));for(let j=0;j<6;j++)if(me){ke?t.texSubImage2D(34069+j,0,0,0,Z[j].width,Z[j].height,Ee,we,Z[j].data):t.texImage2D(34069+j,0,xe,Z[j].width,Z[j].height,0,Ee,we,Z[j].data);for(let te=0;te<D.length;te++){const ge=D[te].image[j].image;ke?t.texSubImage2D(34069+j,te+1,0,0,ge.width,ge.height,Ee,we,ge.data):t.texImage2D(34069+j,te+1,xe,ge.width,ge.height,0,Ee,we,ge.data)}}else{ke?t.texSubImage2D(34069+j,0,0,0,Ee,we,Z[j]):t.texImage2D(34069+j,0,xe,Ee,we,Z[j]);for(let te=0;te<D.length;te++){const he=D[te];ke?t.texSubImage2D(34069+j,te+1,0,0,Ee,we,he.image[j]):t.texImage2D(34069+j,te+1,xe,Ee,we,he.image[j])}}}A(M,ve)&&T(34067),ce.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Se(P,M,q,se,oe){const ce=s.convert(q.format,q.encoding),_e=s.convert(q.type),me=S(q.internalFormat,ce,_e,q.encoding);i.get(M).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,me,M.width,M.height,M.depth,0,ce,_e,null):t.texImage2D(oe,0,me,M.width,M.height,0,ce,_e,null)),t.bindFramebuffer(36160,P),Ye(M)?d.framebufferTexture2DMultisampleEXT(36160,se,oe,i.get(q).__webglTexture,0,nt(M)):(oe===3553||oe>=34069&&oe<=34074)&&n.framebufferTexture2D(36160,se,oe,i.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(P,M,q){if(n.bindRenderbuffer(36161,P),M.depthBuffer&&!M.stencilBuffer){let se=33189;if(q||Ye(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===mr?se=36012:oe.type===pr&&(se=33190));const ce=nt(M);Ye(M)?d.renderbufferStorageMultisampleEXT(36161,ce,se,M.width,M.height):n.renderbufferStorageMultisample(36161,ce,se,M.width,M.height)}else n.renderbufferStorage(36161,se,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,P)}else if(M.depthBuffer&&M.stencilBuffer){const se=nt(M);q&&Ye(M)===!1?n.renderbufferStorageMultisample(36161,se,35056,M.width,M.height):Ye(M)?d.renderbufferStorageMultisampleEXT(36161,se,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,P)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<se.length;oe++){const ce=se[oe],_e=s.convert(ce.format,ce.encoding),me=s.convert(ce.type),Z=S(ce.internalFormat,_e,me,ce.encoding),Me=nt(M);q&&Ye(M)===!1?n.renderbufferStorageMultisample(36161,Me,Z,M.width,M.height):Ye(M)?d.renderbufferStorageMultisampleEXT(36161,Me,Z,M.width,M.height):n.renderbufferStorage(36161,Z,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function Ae(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,oe=nt(M);if(M.depthTexture.format===xr)Ye(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,oe):n.framebufferTexture2D(36160,36096,3553,se,0);else if(M.depthTexture.format===bs)Ye(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,oe):n.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function Re(P){const M=i.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,P)}else if(q){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=n.createRenderbuffer(),be(M.__webglDepthbuffer[se],P,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),be(M.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function gt(P,M,q){const se=i.get(P);M!==void 0&&Se(se.__webglFramebuffer,P,P.texture,36064,3553),q!==void 0&&Re(P)}function bn(P){const M=P.texture,q=i.get(P),se=i.get(M);P.addEventListener("dispose",V),P.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=M.version,o.memory.textures++);const oe=P.isWebGLCubeRenderTarget===!0,ce=P.isWebGLMultipleRenderTargets===!0,_e=y(P)||a;if(oe){q.__webglFramebuffer=[];for(let me=0;me<6;me++)q.__webglFramebuffer[me]=n.createFramebuffer()}else{if(q.__webglFramebuffer=n.createFramebuffer(),ce)if(r.drawBuffers){const me=P.texture;for(let Z=0,Me=me.length;Z<Me;Z++){const ve=i.get(me[Z]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ye(P)===!1){const me=ce?M:[M];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let Z=0;Z<me.length;Z++){const Me=me[Z];q.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(36161,q.__webglColorRenderbuffer[Z]);const ve=s.convert(Me.format,Me.encoding),Ee=s.convert(Me.type),we=S(Me.internalFormat,ve,Ee,Me.encoding,P.isXRRenderTarget===!0),xe=nt(P);n.renderbufferStorageMultisample(36161,xe,we,P.width,P.height),n.framebufferRenderbuffer(36160,36064+Z,36161,q.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(36161,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),be(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,se.__webglTexture),le(34067,M,_e);for(let me=0;me<6;me++)Se(q.__webglFramebuffer[me],P,M,36064,34069+me);A(M,_e)&&T(34067),t.unbindTexture()}else if(ce){const me=P.texture;for(let Z=0,Me=me.length;Z<Me;Z++){const ve=me[Z],Ee=i.get(ve);t.bindTexture(3553,Ee.__webglTexture),le(3553,ve,_e),Se(q.__webglFramebuffer,P,ve,36064+Z,3553),A(ve,_e)&&T(3553)}t.unbindTexture()}else{let me=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?me=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,se.__webglTexture),le(me,M,_e),Se(q.__webglFramebuffer,P,M,36064,me),A(M,_e)&&T(me),t.unbindTexture()}P.depthBuffer&&Re(P)}function $t(P){const M=y(P)||a,q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let se=0,oe=q.length;se<oe;se++){const ce=q[se];if(A(ce,M)){const _e=P.isWebGLCubeRenderTarget?34067:3553,me=i.get(ce).__webglTexture;t.bindTexture(_e,me),T(_e),t.unbindTexture()}}}function It(P){if(a&&P.samples>0&&Ye(P)===!1){const M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],q=P.width,se=P.height;let oe=16384;const ce=[],_e=P.stencilBuffer?33306:36096,me=i.get(P),Z=P.isWebGLMultipleRenderTargets===!0;if(Z)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){ce.push(36064+Me),P.depthBuffer&&ce.push(_e);const ve=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(ve===!1&&(P.depthBuffer&&(oe|=256),P.stencilBuffer&&(oe|=1024)),Z&&n.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Me]),ve===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),Z){const Ee=i.get(M[Me]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ee,0)}n.blitFramebuffer(0,0,q,se,0,0,q,se,oe,9728),m&&n.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,me.__webglColorRenderbuffer[Me]);const ve=i.get(M[Me]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,ve,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function nt(P){return Math.min(h,P.samples)}function Ye(P){const M=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xn(P){const M=o.render.frame;x.get(P)!==M&&(x.set(P,M),P.update())}function An(P,M){const q=P.encoding,se=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===mh||q!==Tr&&(q===je?a===!1?e.has("EXT_sRGB")===!0&&se===kn?(P.format=mh,P.minFilter=Sn,P.generateMipmaps=!1):M=C0.sRGBToLinear(M):(se!==kn||oe!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),M}this.allocateTextureUnit=R,this.resetTextureUnits=Q,this.setTexture2D=U,this.setTexture2DArray=ie,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=gt,this.setupRenderTarget=bn,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ye}function A3(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Er)return 5121;if(s===dy)return 32819;if(s===fy)return 32820;if(s===uy)return 5120;if(s===cy)return 5122;if(s===A0)return 5123;if(s===hy)return 5124;if(s===pr)return 5125;if(s===mr)return 5126;if(s===Bo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===py)return 6406;if(s===kn)return 6408;if(s===my)return 6409;if(s===gy)return 6410;if(s===xr)return 6402;if(s===bs)return 34041;if(s===mh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vy)return 6403;if(s===xy)return 36244;if(s===_y)return 33319;if(s===yy)return 33320;if(s===Sy)return 36249;if(s===Lu||s===Cu||s===Du||s===Ru)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Lu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Lu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Du)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ru)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bf||s===Vf||s===Gf||s===Wf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hf||s===Xf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hf)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xf)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jf||s===qf||s===$f||s===Yf||s===Zf||s===Kf||s===Jf||s===Qf||s===ep||s===tp||s===np||s===ip||s===rp||s===sp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jf)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qf)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$f)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yf)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zf)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kf)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jf)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qf)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ep)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tp)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===np)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ip)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rp)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sp)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===zu)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===My||s===op||s===ap||s===lp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===zu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===op)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ms?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class P3 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oo extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L3={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const f of e.hand.values()){const p=t.getJointPose(f,i),v=this._getHandJoint(u,f);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class C3 extends fn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:xr,c!==xr&&c!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===xr&&(i=pr),i===void 0&&c===bs&&(i=ms),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1}}class D3 extends zs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,m=null,x=null;const f=t.getContextAttributes();let p=null,v=null;const _=[],g=[],y=new Set,w=new Map,A=new Nn;A.layers.enable(1),A.viewport=new Et;const T=new Nn;T.layers.enable(2),T.viewport=new Et;const S=[A,T],E=new P3;E.layers.enable(1),E.layers.enable(2);let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=_[z];return J===void 0&&(J=new sc,_[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=_[z];return J===void 0&&(J=new sc,_[z]=J),J.getGripSpace()},this.getHand=function(z){let J=_[z];return J===void 0&&(J=new sc,_[z]=J),J.getHandSpace()};function V(z){const J=g.indexOf(z.inputSource);if(J===-1)return;const ne=_[J];ne!==void 0&&ne.dispatchEvent({type:z.type,data:z.inputSource})}function N(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",I);for(let z=0;z<_.length;z++){const J=g[z];J!==null&&(g[z]=null,_[z].disconnect(J))}L=null,B=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,v=null,ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",N),r.addEventListener("inputsourceschange",I),f.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),v=new br(m.framebufferWidth,m.framebufferHeight,{format:kn,type:Er,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let J=null,ne=null,F=null;f.depth&&(F=f.stencil?35056:33190,J=f.stencil?bs:xr,ne=f.stencil?ms:pr);const le={colorFormat:32856,depthFormat:F,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(le),r.updateRenderState({layers:[d]}),v=new br(d.textureWidth,d.textureHeight,{format:kn,type:Er,depthTexture:new C3(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const re=e.properties.get(v);re.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(z){for(let J=0;J<z.removed.length;J++){const ne=z.removed[J],F=g.indexOf(ne);F>=0&&(g[F]=null,_[F].disconnect(ne))}for(let J=0;J<z.added.length;J++){const ne=z.added[J];let F=g.indexOf(ne);if(F===-1){for(let re=0;re<_.length;re++)if(re>=g.length){g.push(ne),F=re;break}else if(g[re]===null){g[re]=ne,F=re;break}if(F===-1)break}const le=_[F];le&&le.connect(ne)}}const H=new C,K=new C;function Q(z,J,ne){H.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(ne.matrixWorld);const F=H.distanceTo(K),le=J.projectionMatrix.elements,re=ne.projectionMatrix.elements,fe=le[14]/(le[10]-1),pe=le[14]/(le[10]+1),Se=(le[9]+1)/le[5],be=(le[9]-1)/le[5],Ae=(le[8]-1)/le[0],Re=(re[8]+1)/re[0],gt=fe*Ae,bn=fe*Re,$t=F/(-Ae+Re),It=$t*-Ae;J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(It),z.translateZ($t),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const nt=fe+$t,Ye=pe+$t,Xn=gt-It,An=bn+(F-It),P=Se*pe/Ye*nt,M=be*pe/Ye*nt;z.projectionMatrix.makePerspective(Xn,An,P,M,nt,Ye)}function R(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;E.near=T.near=A.near=z.near,E.far=T.far=A.far=z.far,(L!==E.near||B!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,B=E.far);const J=z.parent,ne=E.cameras;R(E,J);for(let le=0;le<ne.length;le++)R(ne[le],J);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),z.matrix.copy(E.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const F=z.children;for(let le=0,re=F.length;le<re;le++)F[le].updateMatrixWorld(!0);ne.length===2?Q(E,A,T):E.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return y};let G=null;function U(z,J){if(c=J.getViewerPose(u||o),x=J,c!==null){const ne=c.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let F=!1;ne.length!==E.cameras.length&&(E.cameras.length=0,F=!0);for(let le=0;le<ne.length;le++){const re=ne[le];let fe=null;if(m!==null)fe=m.getViewport(re);else{const Se=h.getViewSubImage(d,re);fe=Se.viewport,le===0&&(e.setRenderTargetTextures(v,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(v))}let pe=S[le];pe===void 0&&(pe=new Nn,pe.layers.enable(le),pe.viewport=new Et,S[le]=pe),pe.matrix.fromArray(re.transform.matrix),pe.projectionMatrix.fromArray(re.projectionMatrix),pe.viewport.set(fe.x,fe.y,fe.width,fe.height),le===0&&E.matrix.copy(pe.matrix),F===!0&&E.cameras.push(pe)}}for(let ne=0;ne<_.length;ne++){const F=g[ne],le=_[ne];F!==null&&le!==void 0&&le.update(F,J,u||o)}if(G&&G(z,J),J.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ne=null;for(const F of y)J.detectedPlanes.has(F)||(ne===null&&(ne=[]),ne.push(F));if(ne!==null)for(const F of ne)y.delete(F),w.delete(F),i.dispatchEvent({type:"planeremoved",data:F});for(const F of J.detectedPlanes)if(!y.has(F))y.add(F),w.set(F,J.lastChangedTime),i.dispatchEvent({type:"planeadded",data:F});else{const le=w.get(F);F.lastChangedTime>le&&(w.set(F,F.lastChangedTime),i.dispatchEvent({type:"planechanged",data:F}))}}x=null}const ie=new G0;ie.setAnimationLoop(U),this.setAnimationLoop=function(z){G=z},this.dispose=function(){}}}function R3(n,e){function t(f,p){p.color.getRGB(f.fogColor.value,O0(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,v,_,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),c(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,g)):p.isMeshMatcapMaterial?(r(f,p),m(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),x(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?a(f,p,v,_):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===dn&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===dn&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(f.envMap.value=v,f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const y=n.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix));let g;p.aoMap?g=p.aoMap:p.lightMap&&(g=p.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uv2Transform.value.copy(g.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function a(f,p,v,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*v,f.scale.value=_*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uvTransform.value.copy(g.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function c(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,v){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===dn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function z3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function u(_,g){let y=r[_.id];y===void 0&&(x(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",p));const w=g.program;i.updateUBOMapping(_,w);const A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function c(_){const g=h();_.__bindingPointIndex=g;const y=n.createBuffer(),w=_.__size,A=_.usage;return n.bindBuffer(35345,y),n.bufferData(35345,w,A),n.bindBuffer(35345,null),n.bindBufferBase(35345,g,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],y=_.uniforms,w=_.__cache;n.bindBuffer(35345,g);for(let A=0,T=y.length;A<T;A++){const S=y[A];if(m(S,A,w)===!0){const E=S.__offset,L=Array.isArray(S.value)?S.value:[S.value];let B=0;for(let V=0;V<L.length;V++){const N=L[V],I=f(N);typeof N=="number"?(S.__data[0]=N,n.bufferSubData(35345,E+B,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=N.elements[0],S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=N.elements[0],S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=N.elements[0]):(N.toArray(S.__data,B),B+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,E,S.__data)}}n.bindBuffer(35345,null)}function m(_,g,y){const w=_.value;if(y[g]===void 0){if(typeof w=="number")y[g]=w;else{const A=Array.isArray(w)?w:[w],T=[];for(let S=0;S<A.length;S++)T.push(A[S].clone());y[g]=T}return!0}else if(typeof w=="number"){if(y[g]!==w)return y[g]=w,!0}else{const A=Array.isArray(y[g])?y[g]:[y[g]],T=Array.isArray(w)?w:[w];for(let S=0;S<A.length;S++){const E=A[S];if(E.equals(T[S])===!1)return E.copy(T[S]),!0}}return!1}function x(_){const g=_.uniforms;let y=0;const w=16;let A=0;for(let T=0,S=g.length;T<S;T++){const E=g[T],L={boundary:0,storage:0},B=Array.isArray(E.value)?E.value:[E.value];for(let V=0,N=B.length;V<N;V++){const I=B[V],H=f(I);L.boundary+=H.boundary,L.storage+=H.storage}if(E.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,T>0){A=y%w;const V=w-A;A!==0&&V-L.boundary<0&&(y+=w-A,E.__offset=y)}y+=L.storage}return A=y%w,A>0&&(y+=w-A),_.__size=y,_.__cache={},this}function f(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function v(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:v}}function I3(){const n=Tl("canvas");return n.style.display="block",n}function Zl(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:I3(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let h=null,d=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Tr,this.useLegacyLights=!0,this.toneMapping=xi,this.toneMappingExposure=1;const f=this;let p=!1,v=0,_=0,g=null,y=-1,w=null;const A=new Et,T=new Et;let S=null,E=e.width,L=e.height,B=1,V=null,N=null;const I=new Et(0,0,E,L),H=new Et(0,0,E,L);let K=!1;const Q=new V0;let R=!1,G=!1,U=null;const ie=new ft,z=new C,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return g===null?B:1}let F=t;function le(b,O){for(let X=0;X<b.length;X++){const k=b[X],$=e.getContext(k,O);if($!==null)return $}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pd}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",xe,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&O.shift(),F=le(O,b),F===null)throw le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let re,fe,pe,Se,be,Ae,Re,gt,bn,$t,It,nt,Ye,Xn,An,P,M,q,se,oe,ce,_e,me,Z;function Me(){re=new Xw(F),fe=new Uw(F,re,n),re.init(fe),_e=new A3(F,re,fe),pe=new T3(F,re,fe),Se=new $w,be=new h3,Ae=new b3(F,re,pe,be,fe,_e,Se),Re=new Vw(f),gt=new Hw(f),bn=new i1(F,fe),me=new kw(F,re,bn,fe),$t=new jw(F,bn,Se,me),It=new Jw(F,$t,bn,Se),se=new Kw(F,fe,Ae),P=new Bw(be),nt=new c3(f,Re,gt,re,fe,me,P),Ye=new R3(f,be),Xn=new f3,An=new _3(re,fe),q=new Fw(f,Re,gt,pe,It,c,o),M=new E3(f,It,fe),Z=new z3(F,Se,fe,pe),oe=new Ow(F,re,Se,fe),ce=new qw(F,re,Se,fe),Se.programs=nt.programs,f.capabilities=fe,f.extensions=re,f.properties=be,f.renderLists=Xn,f.shadowMap=M,f.state=pe,f.info=Se}Me();const ve=new D3(f,F);this.xr=ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(E,L,!1))},this.getSize=function(b){return b.set(E,L)},this.setSize=function(b,O,X=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=b,L=O,e.width=Math.floor(b*B),e.height=Math.floor(O*B),X===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(E*B,L*B).floor()},this.setDrawingBufferSize=function(b,O,X){E=b,L=O,B=X,e.width=Math.floor(b*X),e.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(I)},this.setViewport=function(b,O,X,k){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,O,X,k),pe.viewport(A.copy(I).multiplyScalar(B).floor())},this.getScissor=function(b){return b.copy(H)},this.setScissor=function(b,O,X,k){b.isVector4?H.set(b.x,b.y,b.z,b.w):H.set(b,O,X,k),pe.scissor(T.copy(H).multiplyScalar(B).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(b){pe.setScissorTest(K=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(b=!0,O=!0,X=!0){let k=0;b&&(k|=16384),O&&(k|=256),X&&(k|=1024),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",xe,!1),Xn.dispose(),An.dispose(),be.dispose(),Re.dispose(),gt.dispose(),It.dispose(),me.dispose(),Z.dispose(),nt.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",te),ve.removeEventListener("sessionend",he),U&&(U.dispose(),U=null),ge.stop()};function Ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const b=Se.autoReset,O=M.enabled,X=M.autoUpdate,k=M.needsUpdate,$=M.type;Me(),Se.autoReset=b,M.enabled=O,M.autoUpdate=X,M.needsUpdate=k,M.type=$}function xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ke(b){const O=b.target;O.removeEventListener("dispose",ke),Ze(O)}function Ze(b){vt(b),be.remove(b)}function vt(b){const O=be.get(b).programs;O!==void 0&&(O.forEach(function(X){nt.releaseProgram(X)}),b.isShaderMaterial&&nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,k,$,ye){O===null&&(O=J);const Te=$.isMesh&&$.matrixWorld.determinant()<0,Le=ev(b,O,X,k,$);pe.setMaterial(k,Te);let Ce=X.index,Oe=1;k.wireframe===!0&&(Ce=$t.getWireframeAttribute(X),Oe=2);const ze=X.drawRange,Ie=X.attributes.position;let ot=ze.start*Oe,rn=(ze.start+ze.count)*Oe;ye!==null&&(ot=Math.max(ot,ye.start*Oe),rn=Math.min(rn,(ye.start+ye.count)*Oe)),Ce!==null?(ot=Math.max(ot,0),rn=Math.min(rn,Ce.count)):Ie!=null&&(ot=Math.max(ot,0),rn=Math.min(rn,Ie.count));const ri=rn-ot;if(ri<0||ri===1/0)return;me.setup($,k,Le,X,Ce);let Qi,at=oe;if(Ce!==null&&(Qi=bn.get(Ce),at=ce,at.setIndex(Qi)),$.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*ne()),at.setMode(1)):at.setMode(4);else if($.isLine){let Ne=k.linewidth;Ne===void 0&&(Ne=1),pe.setLineWidth(Ne*ne()),$.isLineSegments?at.setMode(1):$.isLineLoop?at.setMode(2):at.setMode(3)}else $.isPoints?at.setMode(0):$.isSprite&&at.setMode(4);if($.isInstancedMesh)at.renderInstances(ot,ri,$.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Jl=Math.min(X.instanceCount,Ne);at.renderInstances(ot,ri,Jl)}else at.render(ot,ri)},this.compile=function(b,O){function X(k,$,ye){k.transparent===!0&&k.side===Fi&&k.forceSinglePass===!1?(k.side=dn,k.needsUpdate=!0,vn(k,$,ye),k.side=Wn,k.needsUpdate=!0,vn(k,$,ye),k.side=Fi):vn(k,$,ye)}d=An.get(b),d.init(),x.push(d),b.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(f.useLegacyLights),b.traverse(function(k){const $=k.material;if($)if(Array.isArray($))for(let ye=0;ye<$.length;ye++){const Te=$[ye];X(Te,b,k)}else X($,b,k)}),x.pop(),d=null};let D=null;function j(b){D&&D(b)}function te(){ge.stop()}function he(){ge.start()}const ge=new G0;ge.setAnimationLoop(j),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(b){D=b,ve.setAnimationLoop(b),b===null?ge.stop():ge.start()},ve.addEventListener("sessionstart",te),ve.addEventListener("sessionend",he),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),b.isScene===!0&&b.onBeforeRender(f,b,O,g),d=An.get(b,x.length),d.init(),x.push(d),ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(ie),G=this.localClippingEnabled,R=P.init(this.clippingPlanes,G),h=Xn.get(b,m.length),h.init(),m.push(h),He(b,O,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(V,N),R===!0&&P.beginShadows();const X=d.state.shadowsArray;if(M.render(X,b,O),R===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(h,b),d.setupLights(f.useLegacyLights),O.isArrayCamera){const k=O.cameras;for(let $=0,ye=k.length;$<ye;$++){const Te=k[$];xt(h,b,Te,Te.viewport)}}else xt(h,b,O);g!==null&&(Ae.updateMultisampleRenderTarget(g),Ae.updateRenderTargetMipmap(g)),b.isScene===!0&&b.onAfterRender(f,b,O),me.resetDefaultState(),y=-1,w=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function He(b,O,X,k){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){k&&z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);const Te=It.update(b),Le=b.material;Le.visible&&h.push(b,Te,Le,X,z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Se.render.frame&&(b.skeleton.update(),b.skeleton.frame=Se.render.frame),!b.frustumCulled||Q.intersectsObject(b))){k&&z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);const Te=It.update(b),Le=b.material;if(Array.isArray(Le)){const Ce=Te.groups;for(let Oe=0,ze=Ce.length;Oe<ze;Oe++){const Ie=Ce[Oe],ot=Le[Ie.materialIndex];ot&&ot.visible&&h.push(b,Te,ot,X,z.z,Ie)}}else Le.visible&&h.push(b,Te,Le,X,z.z,null)}}const ye=b.children;for(let Te=0,Le=ye.length;Te<Le;Te++)He(ye[Te],O,X,k)}function xt(b,O,X,k){const $=b.opaque,ye=b.transmissive,Te=b.transparent;d.setupLightsView(X),R===!0&&P.setGlobalState(f.clippingPlanes,X),ye.length>0&&Nt($,O,X),k&&pe.viewport(A.copy(k)),$.length>0&&jn($,O,X),ye.length>0&&jn(ye,O,X),Te.length>0&&jn(Te,O,X),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Nt(b,O,X){const k=fe.isWebGL2;U===null&&(U=new br(1024,1024,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?Bo:Er,minFilter:Uo,samples:k&&s===!0?4:0}));const $=f.getRenderTarget();f.setRenderTarget(U),f.clear();const ye=f.toneMapping;f.toneMapping=xi,jn(b,O,X),f.toneMapping=ye,Ae.updateMultisampleRenderTarget(U),Ae.updateRenderTargetMipmap(U),f.setRenderTarget($)}function jn(b,O,X){const k=O.isScene===!0?O.overrideMaterial:null;for(let $=0,ye=b.length;$<ye;$++){const Te=b[$],Le=Te.object,Ce=Te.geometry,Oe=k===null?Te.material:k,ze=Te.group;Le.layers.test(X.layers)&&rt(Le,O,X,Ce,Oe,ze)}}function rt(b,O,X,k,$,ye){b.onBeforeRender(f,O,X,k,$,ye),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(f,O,X,k,b,ye),$.transparent===!0&&$.side===Fi&&$.forceSinglePass===!1?($.side=dn,$.needsUpdate=!0,f.renderBufferDirect(X,O,k,$,b,ye),$.side=Wn,$.needsUpdate=!0,f.renderBufferDirect(X,O,k,$,b,ye),$.side=Fi):f.renderBufferDirect(X,O,k,$,b,ye),b.onAfterRender(f,O,X,k,$,ye)}function vn(b,O,X){O.isScene!==!0&&(O=J);const k=be.get(b),$=d.state.lights,ye=d.state.shadowsArray,Te=$.state.version,Le=nt.getParameters(b,$.state,ye,O,X),Ce=nt.getProgramCacheKey(Le);let Oe=k.programs;k.environment=b.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(b.isMeshStandardMaterial?gt:Re).get(b.envMap||k.environment),Oe===void 0&&(b.addEventListener("dispose",ke),Oe=new Map,k.programs=Oe);let ze=Oe.get(Ce);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===Te)return qn(b,Le),ze}else Le.uniforms=nt.getUniforms(b),b.onBuild(X,Le,f),b.onBeforeCompile(Le,f),ze=nt.acquireProgram(Le,Ce),Oe.set(Ce,ze),k.uniforms=Le.uniforms;const Ie=k.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=P.uniform),qn(b,Le),k.needsLights=nv(b),k.lightsStateVersion=Te,k.needsLights&&(Ie.ambientLightColor.value=$.state.ambient,Ie.lightProbe.value=$.state.probe,Ie.directionalLights.value=$.state.directional,Ie.directionalLightShadows.value=$.state.directionalShadow,Ie.spotLights.value=$.state.spot,Ie.spotLightShadows.value=$.state.spotShadow,Ie.rectAreaLights.value=$.state.rectArea,Ie.ltc_1.value=$.state.rectAreaLTC1,Ie.ltc_2.value=$.state.rectAreaLTC2,Ie.pointLights.value=$.state.point,Ie.pointLightShadows.value=$.state.pointShadow,Ie.hemisphereLights.value=$.state.hemi,Ie.directionalShadowMap.value=$.state.directionalShadowMap,Ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ie.spotShadowMap.value=$.state.spotShadowMap,Ie.spotLightMatrix.value=$.state.spotLightMatrix,Ie.spotLightMap.value=$.state.spotLightMap,Ie.pointShadowMap.value=$.state.pointShadowMap,Ie.pointShadowMatrix.value=$.state.pointShadowMatrix);const ot=ze.getUniforms(),rn=el.seqWithValue(ot.seq,Ie);return k.currentProgram=ze,k.uniformsList=rn,ze}function qn(b,O){const X=be.get(b);X.outputEncoding=O.outputEncoding,X.instancing=O.instancing,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function ev(b,O,X,k,$){O.isScene!==!0&&(O=J),Ae.resetTextureUnits();const ye=O.fog,Te=k.isMeshStandardMaterial?O.environment:null,Le=g===null?f.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:Tr,Ce=(k.isMeshStandardMaterial?gt:Re).get(k.envMap||Te),Oe=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!k.normalMap&&!!X.attributes.tangent,Ie=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,rn=!!X.morphAttributes.color,ri=k.toneMapped?f.toneMapping:xi,Qi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,at=Qi!==void 0?Qi.length:0,Ne=be.get(k),Jl=d.state.lights;if(R===!0&&(G===!0||b!==w)){const sn=b===w&&k.id===y;P.setState(k,b,sn)}let _t=!1;k.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Jl.state.version||Ne.outputEncoding!==Le||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ce||k.fog===!0&&Ne.fog!==ye||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==P.numPlanes||Ne.numIntersection!==P.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==ze||Ne.morphTargets!==Ie||Ne.morphNormals!==ot||Ne.morphColors!==rn||Ne.toneMapping!==ri||fe.isWebGL2===!0&&Ne.morphTargetsCount!==at)&&(_t=!0):(_t=!0,Ne.__version=k.version);let er=Ne.currentProgram;_t===!0&&(er=vn(k,O,$));let Sd=!1,Fs=!1,Ql=!1;const Ft=er.getUniforms(),tr=Ne.uniforms;if(pe.useProgram(er.program)&&(Sd=!0,Fs=!0,Ql=!0),k.id!==y&&(y=k.id,Fs=!0),Sd||w!==b){if(Ft.setValue(F,"projectionMatrix",b.projectionMatrix),fe.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,Fs=!0,Ql=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const sn=Ft.map.cameraPosition;sn!==void 0&&sn.setValue(F,z.setFromMatrixPosition(b.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||$.isSkinnedMesh)&&Ft.setValue(F,"viewMatrix",b.matrixWorldInverse)}if($.isSkinnedMesh){Ft.setOptional(F,$,"bindMatrix"),Ft.setOptional(F,$,"bindMatrixInverse");const sn=$.skeleton;sn&&(fe.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Ft.setValue(F,"boneTexture",sn.boneTexture,Ae),Ft.setValue(F,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const eu=X.morphAttributes;if((eu.position!==void 0||eu.normal!==void 0||eu.color!==void 0&&fe.isWebGL2===!0)&&se.update($,X,er),(Fs||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,Ft.setValue(F,"receiveShadow",$.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(tr.envMap.value=Ce,tr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Fs&&(Ft.setValue(F,"toneMappingExposure",f.toneMappingExposure),Ne.needsLights&&tv(tr,Ql),ye&&k.fog===!0&&Ye.refreshFogUniforms(tr,ye),Ye.refreshMaterialUniforms(tr,k,B,L,U),el.upload(F,Ne.uniformsList,tr,Ae)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(el.upload(F,Ne.uniformsList,tr,Ae),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ft.setValue(F,"center",$.center),Ft.setValue(F,"modelViewMatrix",$.modelViewMatrix),Ft.setValue(F,"normalMatrix",$.normalMatrix),Ft.setValue(F,"modelMatrix",$.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const sn=k.uniformsGroups;for(let tu=0,iv=sn.length;tu<iv;tu++)if(fe.isWebGL2){const wd=sn[tu];Z.update(wd,er),Z.bind(wd,er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return er}function tv(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function nv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(b,O,X){be.get(b.texture).__webglTexture=O,be.get(b.depthTexture).__webglTexture=X;const k=be.get(b);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=X===void 0,k.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const X=be.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,X=0){g=b,v=O,_=X;let k=!0,$=null,ye=!1,Te=!1;if(b){const Ce=be.get(b);Ce.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),k=!1):Ce.__webglFramebuffer===void 0?Ae.setupRenderTarget(b):Ce.__hasExternalTextures&&Ae.rebindTextures(b,be.get(b.texture).__webglTexture,be.get(b.depthTexture).__webglTexture);const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Te=!0);const ze=be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?($=ze[O],ye=!0):fe.isWebGL2&&b.samples>0&&Ae.useMultisampledRTT(b)===!1?$=be.get(b).__webglMultisampledFramebuffer:$=ze,A.copy(b.viewport),T.copy(b.scissor),S=b.scissorTest}else A.copy(I).multiplyScalar(B).floor(),T.copy(H).multiplyScalar(B).floor(),S=K;if(pe.bindFramebuffer(36160,$)&&fe.drawBuffers&&k&&pe.drawBuffers(b,$),pe.viewport(A),pe.scissor(T),pe.setScissorTest(S),ye){const Ce=be.get(b.texture);F.framebufferTexture2D(36160,36064,34069+O,Ce.__webglTexture,X)}else if(Te){const Ce=be.get(b.texture),Oe=O||0;F.framebufferTextureLayer(36160,36064,Ce.__webglTexture,X||0,Oe)}y=-1},this.readRenderTargetPixels=function(b,O,X,k,$,ye,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){pe.bindFramebuffer(36160,Le);try{const Ce=b.texture,Oe=Ce.format,ze=Ce.type;if(Oe!==kn&&_e.convert(Oe)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=ze===Bo&&(re.has("EXT_color_buffer_half_float")||fe.isWebGL2&&re.has("EXT_color_buffer_float"));if(ze!==Er&&_e.convert(ze)!==F.getParameter(35738)&&!(ze===mr&&(fe.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-k&&X>=0&&X<=b.height-$&&F.readPixels(O,X,k,$,_e.convert(Oe),_e.convert(ze),ye)}finally{const Ce=g!==null?be.get(g).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(b,O,X=0){const k=Math.pow(2,-X),$=Math.floor(O.image.width*k),ye=Math.floor(O.image.height*k);Ae.setTexture2D(O,0),F.copyTexSubImage2D(3553,X,0,0,b.x,b.y,$,ye),pe.unbindTexture()},this.copyTextureToTexture=function(b,O,X,k=0){const $=O.image.width,ye=O.image.height,Te=_e.convert(X.format),Le=_e.convert(X.type);Ae.setTexture2D(X,0),F.pixelStorei(37440,X.flipY),F.pixelStorei(37441,X.premultiplyAlpha),F.pixelStorei(3317,X.unpackAlignment),O.isDataTexture?F.texSubImage2D(3553,k,b.x,b.y,$,ye,Te,Le,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(3553,k,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Te,O.mipmaps[0].data):F.texSubImage2D(3553,k,b.x,b.y,Te,Le,O.image),k===0&&X.generateMipmaps&&F.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(b,O,X,k,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=b.max.x-b.min.x+1,Te=b.max.y-b.min.y+1,Le=b.max.z-b.min.z+1,Ce=_e.convert(k.format),Oe=_e.convert(k.type);let ze;if(k.isData3DTexture)Ae.setTexture3D(k,0),ze=32879;else if(k.isDataArrayTexture)Ae.setTexture2DArray(k,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,k.flipY),F.pixelStorei(37441,k.premultiplyAlpha),F.pixelStorei(3317,k.unpackAlignment);const Ie=F.getParameter(3314),ot=F.getParameter(32878),rn=F.getParameter(3316),ri=F.getParameter(3315),Qi=F.getParameter(32877),at=X.isCompressedTexture?X.mipmaps[0]:X.image;F.pixelStorei(3314,at.width),F.pixelStorei(32878,at.height),F.pixelStorei(3316,b.min.x),F.pixelStorei(3315,b.min.y),F.pixelStorei(32877,b.min.z),X.isDataTexture||X.isData3DTexture?F.texSubImage3D(ze,$,O.x,O.y,O.z,ye,Te,Le,Ce,Oe,at.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ze,$,O.x,O.y,O.z,ye,Te,Le,Ce,at.data)):F.texSubImage3D(ze,$,O.x,O.y,O.z,ye,Te,Le,Ce,Oe,at),F.pixelStorei(3314,Ie),F.pixelStorei(32878,ot),F.pixelStorei(3316,rn),F.pixelStorei(3315,ri),F.pixelStorei(32877,Qi),$===0&&k.generateMipmaps&&F.generateMipmap(ze),pe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ae.setTextureCube(b,0):b.isData3DTexture?Ae.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ae.setTexture2DArray(b,0):Ae.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){v=0,_=0,g=null,pe.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Zl.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class N3 extends Zl{}N3.prototype.isWebGL1Renderer=!0;class F3 extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class q0 extends Ko{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jp=new C,qp=new C,$p=new ft,oc=new z0,Na=new ql;class k3 extends nn{constructor(e=new Hn,t=new q0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)jp.fromBufferAttribute(t,r-1),qp.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=jp.distanceTo(qp);e.setAttribute("lineDistance",new Vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;$p.copy(r).invert(),oc.copy(e.ray).applyMatrix4($p);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new C,c=new C,h=new C,d=new C,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const v=Math.max(0,o.start),_=Math.min(x.count,o.start+o.count);for(let g=v,y=_-1;g<y;g+=m){const w=x.getX(g),A=x.getX(g+1);if(u.fromBufferAttribute(p,w),c.fromBufferAttribute(p,A),oc.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let g=v,y=_-1;g<y;g+=m){if(u.fromBufferAttribute(p,g),c.fromBufferAttribute(p,g+1),oc.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,m=(o-c)/d;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Y:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new C,r=[],s=[],o=[],a=new C,l=new ft;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new C)}s[0]=new C,o[0]=new C;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Gt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Gt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vd extends ii{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new Y,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=u-this.aY;l=d*c-m*h+this.aX,u=d*h+m*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class O3 extends vd{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xd(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,m=(a-o)/c-(l-o)/(c+h)+(l-a)/h;d*=c,m*=c,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Fa=new C,ac=new xd,lc=new xd,uc=new xd;class U3 extends ii{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Fa.subVectors(r[0],r[1]).add(r[0]),u=Fa);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Fa.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(u.distanceToSquared(h),m),f=Math.pow(h.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(c),m);f<1e-4&&(f=1),x<1e-4&&(x=f),p<1e-4&&(p=f),ac.initNonuniformCatmullRom(u.x,h.x,d.x,c.x,x,f,p),lc.initNonuniformCatmullRom(u.y,h.y,d.y,c.y,x,f,p),uc.initNonuniformCatmullRom(u.z,h.z,d.z,c.z,x,f,p)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(u.x,h.x,d.x,c.x,this.tension),lc.initCatmullRom(u.y,h.y,d.y,c.y,this.tension),uc.initCatmullRom(u.z,h.z,d.z,c.z,this.tension));return i.set(ac.calc(l),lc.calc(l),uc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yp(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function B3(n,e){const t=1-n;return t*t*e}function V3(n,e){return 2*(1-n)*n*e}function G3(n,e){return n*n*e}function vo(n,e,t,i){return B3(n,e)+V3(n,t)+G3(n,i)}function W3(n,e){const t=1-n;return t*t*t*e}function H3(n,e){const t=1-n;return 3*t*t*n*e}function X3(n,e){return 3*(1-n)*n*n*e}function j3(n,e){return n*n*n*e}function xo(n,e,t,i,r){return W3(n,e)+H3(n,t)+X3(n,i)+j3(n,r)}class $0 extends ii{constructor(e=new Y,t=new Y,i=new Y,r=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Y){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(xo(e,r.x,s.x,o.x,a.x),xo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q3 extends ii{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(xo(e,r.x,s.x,o.x,a.x),xo(e,r.y,s.y,o.y,a.y),xo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _d extends ii{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $3 extends ii{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends ii{constructor(e=new Y,t=new Y,i=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Y){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(vo(e,r.x,s.x,o.x),vo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y3 extends ii{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(vo(e,r.x,s.x,o.x),vo(e,r.y,s.y,o.y),vo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z0 extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Yp(a,l.x,u.x,c.x,h.x),Yp(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Y().fromArray(r))}return this}}var Z3=Object.freeze({__proto__:null,ArcCurve:O3,CatmullRomCurve3:U3,CubicBezierCurve:$0,CubicBezierCurve3:q3,EllipseCurve:vd,LineCurve:_d,LineCurve3:$3,QuadraticBezierCurve:Y0,QuadraticBezierCurve3:Y3,SplineCurve:Z0});class K3 extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new _d(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Z3[r.type]().fromJSON(r))}return this}}class vh extends K3{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new _d(this.currentPoint.clone(),new Y(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Y0(this.currentPoint.clone(),new Y(e,t),new Y(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new $0(this.currentPoint.clone(),new Y(e,t),new Y(i,r),new Y(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Z0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new vd(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Al extends vh{constructor(e){super(e),this.uuid=Is(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new vh().fromJSON(r))}return this}}const J3={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=K0(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,h,d,m;if(i&&(s=i2(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let x=t;x<r;x+=t)h=n[x],d=n[x+1],h<a&&(a=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);m=Math.max(u-a,c-l),m=m!==0?32767/m:0}return Go(s,o,t,a,l,m,0),o}};function K0(n,e,t,i,r){let s,o;if(r===p2(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Zp(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Zp(s,n[s],n[s+1],o);return o&&Kl(o,o.next)&&(Ho(o),o=o.next),o}function Pr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Kl(t,t.next)||Qe(t.prev,t,t.next)===0)){if(Ho(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Go(n,e,t,i,r,s,o){if(!n)return;!o&&s&&l2(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?e2(n,i,r,s):Q3(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),Ho(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=t2(Pr(n),e,t),Go(n,e,t,i,r,s,2)):o===2&&n2(n,e,t,i,r,s):Go(Pr(n),e,t,i,r,s,1);break}}}function Q3(n){const e=n.prev,t=n,i=n.next;if(Qe(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,d=r>s?r>o?r:o:s>o?s:o,m=a>l?a>u?a:u:l>u?l:u;let x=i.next;for(;x!==e;){if(x.x>=c&&x.x<=d&&x.y>=h&&x.y<=m&&os(r,a,s,l,o,u,x.x,x.y)&&Qe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function e2(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Qe(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,h=s.y,d=o.y,m=a<l?a<u?a:u:l<u?l:u,x=c<h?c<d?c:d:h<d?h:d,f=a>l?a>u?a:u:l>u?l:u,p=c>h?c>d?c:d:h>d?h:d,v=xh(m,x,e,t,i),_=xh(f,p,e,t,i);let g=n.prevZ,y=n.nextZ;for(;g&&g.z>=v&&y&&y.z<=_;){if(g.x>=m&&g.x<=f&&g.y>=x&&g.y<=p&&g!==r&&g!==o&&os(a,c,l,h,u,d,g.x,g.y)&&Qe(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=m&&y.x<=f&&y.y>=x&&y.y<=p&&y!==r&&y!==o&&os(a,c,l,h,u,d,y.x,y.y)&&Qe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=v;){if(g.x>=m&&g.x<=f&&g.y>=x&&g.y<=p&&g!==r&&g!==o&&os(a,c,l,h,u,d,g.x,g.y)&&Qe(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=_;){if(y.x>=m&&y.x<=f&&y.y>=x&&y.y<=p&&y!==r&&y!==o&&os(a,c,l,h,u,d,y.x,y.y)&&Qe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function t2(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Kl(r,s)&&J0(r,i,i.next,s)&&Wo(r,s)&&Wo(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Ho(i),Ho(i.next),i=n=s),i=i.next}while(i!==n);return Pr(i)}function n2(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h2(o,a)){let l=Q0(o,a);o=Pr(o,o.next),l=Pr(l,l.next),Go(o,e,t,i,r,s,0),Go(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function i2(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=K0(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(c2(u));for(r.sort(r2),s=0;s<r.length;s++)t=s2(r[s],t);return t}function r2(n,e){return n.x-e.x}function s2(n,e){const t=o2(n,e);if(!t)return e;const i=Q0(t,n);return Pr(i,i.next),Pr(t,t.next)}function o2(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&os(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Wo(t,n)&&(h<c||h===c&&(t.x>r.x||t.x===r.x&&a2(r,t)))&&(r=t,c=h)),t=t.next;while(t!==a);return r}function a2(n,e){return Qe(n.prev,n,e.prev)<0&&Qe(e.next,n,n.next)<0}function l2(n,e,t,i){let r=n;do r.z===0&&(r.z=xh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,u2(r)}function u2(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function xh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function c2(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function os(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function h2(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!d2(n,e)&&(Wo(n,e)&&Wo(e,n)&&f2(n,e)&&(Qe(n.prev,n,e.prev)||Qe(n,e.prev,e))||Kl(n,e)&&Qe(n.prev,n,n.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Kl(n,e){return n.x===e.x&&n.y===e.y}function J0(n,e,t,i){const r=Oa(Qe(n,e,t)),s=Oa(Qe(n,e,i)),o=Oa(Qe(t,i,n)),a=Oa(Qe(t,i,e));return!!(r!==s&&o!==a||r===0&&ka(n,t,e)||s===0&&ka(n,i,e)||o===0&&ka(t,n,i)||a===0&&ka(t,e,i))}function ka(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Oa(n){return n>0?1:n<0?-1:0}function d2(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&J0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Wo(n,e){return Qe(n.prev,n,n.next)<0?Qe(n,e,n.next)>=0&&Qe(n,n.prev,e)>=0:Qe(n,e,n.prev)<0||Qe(n,n.next,e)<0}function f2(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Q0(n,e){const t=new _h(n.i,n.x,n.y),i=new _h(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Zp(n,e,t,i){const r=new _h(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ho(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _h(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p2(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class _o{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return _o.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Kp(e),Jp(i,e);let o=e.length;t.forEach(Kp);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Jp(i,t[l]);const a=J3.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Kp(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Jp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ls extends Hn{constructor(e=new Al([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Vn(r,3)),this.setAttribute("normal",new Vn(s,3)),this.setAttribute("uv",new Vn(o,2));function u(c){const h=r.length/3,d=c.extractPoints(t);let m=d.shape;const x=d.holes;_o.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,v=x.length;p<v;p++){const _=x[p];_o.isClockWise(_)===!0&&(x[p]=_.reverse())}const f=_o.triangulateShape(m,x);for(let p=0,v=x.length;p<v;p++){const _=x[p];m=m.concat(_)}for(let p=0,v=m.length;p<v;p++){const _=m[p];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let p=0,v=f.length;p<v;p++){const _=f[p],g=_[0]+h,y=_[1]+h,w=_[2]+h;i.push(g,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return m2(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Ls(i,e.curveSegments)}}function m2(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);var Ke=(n=>(n[n.Pen=0]="Pen",n[n.FountainPen=1]="FountainPen",n[n.Shape=2]="Shape",n[n.Eraser=3]="Eraser",n[n.Select=4]="Select",n))(Ke||{}),ei=(n=>(n[n.Rectangle=0]="Rectangle",n[n.Triangle=1]="Triangle",n[n.Line=2]="Line",n))(ei||{});class W{constructor(e,t){ue(this,"x");ue(this,"y");this.x=e,this.y=t}add(e){return new W(this.x+e.x,this.y+e.y)}sub(e){return new W(this.x-e.x,this.y-e.y)}trunc(e){return new W(Math.trunc(this.x*10**e)/10**e,Math.trunc(this.y*10**e)/10**e)}scale(e){return new W(this.x*e,this.y*e)}normalizeTo(e){let t=Math.sqrt(this.x*this.x+this.y*this.y);return t>0?(t=e/t,new W(this.x*t,this.y*t)):new W(this.x,this.y)}normalize(){var e=this.x*this.x+this.y*this.y;return e>0?(e=1/Math.sqrt(e),new W(this.x*e,this.y*e)):new W(this.x,this.y)}getPerpendicular(){return new W(-this.y,this.x)}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}interpolateTo(e,t){return new W(this.x+(e.x-this.x)*t,this.y+(e.y-this.y)*t)}dotProd(e){return this.x*e.x+this.y*e.y}angleBetween(e,t){if(t===void 0)return Math.acos(this.dotProd(e));var i=t?this.normalize().dotProd(e.normalize()):this.dotProd(e);return Math.acos(i)}elementarEqualTo(e){return e.x==this.x&&e.y==this.y}copy(){return new W(this.x,this.y)}length(){return Math.sqrt(this.x**2+this.y**2)}}const zi=(n,e,t,i)=>{const r=new C;return r.set(n.x/t*2-1,-(n.y/i)*2+1,0),r.unproject(e),new Y(r.x,r.y)},Pl=(n,e,t,i)=>{const r=new C;return r.set(n.x/t*2-1,-(n.y/i)*2+1,0),r.unproject(e),new C(r.x,r.y,n.z)},as=(n,e,t,i)=>{let r=new C(n.x,n.y,0);return r.project(e),r.x=Math.round((r.x+1)*t/2),r.y=Math.round((-r.y+1)*i/2),r.z=0,new Y(r.x,r.y)},Qp=n=>n instanceof MouseEvent?new C(n.clientX,n.clientY,1):new C(n.touches[0].clientX,n.touches[0].clientY,n.touches[0].force);function g2(){return"ontouchstart"in window||navigator.maxTouchPoints>0}class cr{constructor(e,t){ue(this,"path2D");ue(this,"svgPath");ue(this,"threeShape");ue(this,"renderer");ue(this,"camera");ue(this,"minX");ue(this,"minY");ue(this,"maxX");ue(this,"maxY");ue(this,"points");this.path2D=new Path2D,this.threeShape=new Al,this.svgPath="",this.threeShape.autoClose=!0,this.renderer=e,this.camera=t,this.minX=void 0,this.minY=void 0,this.maxX=void 0,this.maxY=void 0,this.points=[]}updateBoundingBox(e,t){this.minX==null?this.minX=e:this.minX=Math.min(this.minX,e),this.minY==null?this.minY=t:this.minY=Math.min(this.minY,t),this.maxX==null?this.maxX=e:this.maxX=Math.max(this.maxX,e),this.maxY==null?this.maxY=t:this.maxY=Math.max(this.maxY,t)}moveTo(e){this.path2D.moveTo(e.x,e.y),this.svgPath+=`M ${e.x} ${e.y}`;const t=this.renderer.getSize(new Y).x,i=this.renderer.getSize(new Y).y,r=zi(new Y(e.x,e.y),this.camera,t,i);this.threeShape.moveTo(r.x,r.y),this.updateBoundingBox(r.x,r.y),this.points.push(new W(r.x,r.y))}lineTo(e){this.path2D.lineTo(e.x,e.y),this.svgPath+=`L ${e.x} ${e.y}`;const t=this.renderer.getSize(new Y).x,i=this.renderer.getSize(new Y).y,r=zi(new Y(e.x,e.y),this.camera,t,i);this.threeShape.lineTo(r.x,r.y),this.updateBoundingBox(r.x,r.y),this.points.push(new W(r.x,r.y))}quadraticCurveTo(e,t){this.path2D.quadraticCurveTo(e.x,e.y,t.x,t.y),this.svgPath+=`Q ${e.x} ${e.y}, ${t.x} ${t.y}`;const i=this.renderer.getSize(new Y).x,r=this.renderer.getSize(new Y).y,s=zi(new Y(e.x,e.y),this.camera,i,r),o=zi(new Y(t.x,t.y),this.camera,i,r);this.threeShape.quadraticCurveTo(s.x,s.y,o.x,o.y),this.updateBoundingBox(s.x,s.y),this.updateBoundingBox(o.x,o.y),this.points.push(new W(s.x,s.y)),this.points.push(new W(o.x,o.y))}arc(e,t,i,r,s){this.path2D.arc(e.x,e.y,t,i,r,s);let o=e.x,a=e.y;var l=Math.cos(r)*t+o,u=Math.sin(r)*t+a,c=Math.cos(i)*t+o,h=Math.sin(i)*t+a;this.svgPath+=`L ${c} ${h} A ${t} ${t} 0 0 0 ${l} ${u}`;const d=this.renderer.getSize(new Y).x,m=this.renderer.getSize(new Y).y,x=zi(new Y(e.x,e.y),this.camera,d,m);this.threeShape.absarc(x.x,x.y,t/this.camera.zoom,2*Math.PI-i,2*Math.PI-r,!s),this.updateBoundingBox(x.x-t/this.camera.zoom,x.y),this.updateBoundingBox(x.x+t/this.camera.zoom,x.y),this.updateBoundingBox(x.x,x.y-t/this.camera.zoom),this.updateBoundingBox(x.x,x.y+t/this.camera.zoom),this.points.push(new W(x.x,x.y))}closePath(){this.path2D.closePath(),this.svgPath+="Z",this.threeShape.getPoints().length>0&&this.threeShape.closePath()}}const Dt=n=>new Y(n.x,n.y);function em(n,e){const t=n.x-e.x,i=n.y-e.y;return t*t+i*i}const v2=(n,e,t)=>{const i=Math.sqrt(em(n,e)),r=Math.sqrt(em(t,e));return i/(i+r)};function yo(n){const{x:e,y:t}=n;return{x:-t,y:e}}function Zt(n,e){const{x:t,y:i}=n;return{x:t*e,y:i*e}}function ut(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Wt(n,e){return{x:n.x+e.x,y:n.y+e.y}}function Oi(n){const{x:e,y:t}=n,i=Math.sqrt(e*e+t*t);return{x:e/i,y:t/i}}function x2(n,e,t){return v2(n,e,t)}function _2(n,e,t,i){const r={x:(1-i)*n.x+i*e.x,y:(1-i)*n.y+i*e.y},s={x:(1-i)*e.x+i*t.x,y:(1-i)*e.y+i*t.y},o={x:(1-i)*r.x+i*s.x,y:(1-i)*r.y+i*s.y};return[{P0:n,P1:r,P2:o},{P0:o,P1:s,P2:t}]}function y2(n,e,t,i,r,s){if(n={x:Math.round(n.x*1e3)/1e3,y:Math.round(n.y*1e3)/1e3},e={x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3},t={x:Math.round(t.x*1e3)/1e3,y:Math.round(t.y*1e3)/1e3},n.x===e.x&&e.x===t.x&&n.y===e.y&&e.y===t.y)return{left:[],right:[]};if(n.x===e.x&&e.x===t.x||n.y===e.y&&e.y===t.y){const c=n.y===e.y&&e.y===t.y?{x:0,y:1}:{x:1,y:0},h=Zt(c,i/2),d=Zt(c,r/2),m=[ut(n,h),ut(t,d)],x=[Wt(n,h),Wt(t,d)];return{left:m,right:x}}if(n.x===e.x&&n.y===e.y||e.x===t.x&&e.y===t.y||n.x===t.x&&n.y===t.y){const c=Oi(ut(t,n)),h=Zt(yo(c),i/2),d=Zt(yo(c),r/2),m=[ut(n,h),ut(t,d)],x=[Wt(n,h),Wt(t,d)];return{left:m,right:x}}const o=ut(e,n),a=ut(t,e);if(o.x*a.y-o.y*a.x===0){const c=Oi(yo(o)),h=Zt(c,i/2),d=Zt(c,r/2),m=Wt(n,h),x=Wt(t,d),f=ut(n,h),p=ut(t,d);return{left:[m,x],right:[f,p]}}function u(c,h,d,m,x,f){if(f<=0){const p=tm(c,h,d,m,x).left,v=tm(c,h,d,m,x).right;return{left:p,right:v}}else{const p=x2(c,h,d),[v,_]=_2(c,h,d,p),g=(1-p)*m+p*x,y=u(v.P0,v.P1,v.P2,m,g,f-1),w=u(_.P0,_.P1,_.P2,g,x,f-1);return{left:[...y.left,...w.left],right:[...y.right,...w.right]}}}return u(n,e,t,i,r,s)}function tm(n,e,t,i,r){const s=Oi(ut(e,n)),o=Oi(ut(t,e)),a=yo(s),l=yo(o),u=Zt(a,i/2),c=Zt(l,r/2),h=Wt(n,u),d=Wt(t,c),m=ut(n,u),x=ut(t,c),f=Wt(e,Zt(Oi(Wt(u,c)),(i+r)/4)),p=ut(e,Zt(Oi(Wt(u,c)),(i+r)/4));return{left:[h,f,d],right:[m,p,x]}}function nm(n){const{x:e,y:t}=n,i=e*e+t*t;return Math.sqrt(i)}const im=(n,e,t)=>(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)>0,Js=(n,e,t,i,r,s,o)=>{let a=new cr(s,o);const l=y2(n,e,t,i*2,r*2,3),u=(h,d,m,x,f,p)=>{let v=Wt(x,Zt(ut(f,x),.5)),_=nm(ut(x,f))/2,g=d;(v.x==g.x&&v.y==g.y||m.x==h.x&&m.x==d.x&&m.y!=d.y)&&(g=h);let y=Wt(v,Zt(Oi(ut(v,g)),_)),w=Math.atan2(x.y-v.y,x.x-v.x),A=Math.atan2(f.y-v.y,f.x-v.x),T=im(x,f,y);p?a.arc(Dt(v),_,A,w,!T):a.arc(Dt(v),_,w,A,T)},c=(h,d,m,x,f,p)=>{{let v=Wt(x,Zt(ut(f,x),.5)),_=nm(ut(x,f))/2,g=d;(v.x==g.x&&v.y==g.y||m.x==h.x&&m.x==d.x&&h.y!=d.y)&&(g=m);let y=Wt(v,Zt(Oi(ut(v,g)),_)),w=Math.atan2(x.y-v.y,x.x-v.x),A=Math.atan2(f.y-v.y,f.x-v.x),T=im(x,f,y);p?a.arc(Dt(v),_,A,w,!T):a.arc(Dt(v),_,w,A,T)}};if(l.left.length>0&&l.right.length>0){if(l.left.length<3)a.moveTo(Dt(l.left[0])),a.lineTo(Dt(l.left[1]));else{a.moveTo(Dt(l.left[0]));for(let p=0;p<l.left.length;p+=3)a.lineTo(Dt(l.left[p])),a.quadraticCurveTo(Dt(l.left[p+1]),Dt(l.left[p+2]))}let h={x:l.left[l.left.length-1].x,y:l.left[l.left.length-1].y},d={x:l.right[l.right.length-1].x,y:l.right[l.right.length-1].y};u(n,e,t,h,d,!1);let m=[...l.right].reverse();if(m.length<3)a.lineTo(Dt(m[0])),a.lineTo(Dt(m[1]));else for(let p=0;p<m.length;p+=3)a.lineTo(Dt(m[p])),a.quadraticCurveTo(Dt(m[p+1]),Dt(m[p+2]));let x={x:l.left[0].x,y:l.left[0].y},f={x:l.right[0].x,y:l.right[0].y};c(n,e,t,x,f,!0),a.lineTo(Dt(l.left[0]))}return a.closePath(),a},cc=function(n){if(n.length<1)return new W(0,0);const e=n.map(h=>h.x).reduce(function(h,d){return h+d},0),t=n.map(h=>h.y).reduce(function(h,d){return h+d},0),i=e/n.length,r=t/n.length;let s=0,o=0,a=0;for(let h=0;h<n.length;h++)o+=(n[h].x-i)*(n[h].y-r),a+=Math.pow(n[h].x-i,2);s=o/a;const l=r-i*s,u=i,c=s*i+l;return new W(u,isNaN(c)?r:c)},rm=(n,e,t)=>n+e*t,hc=function(n,e,t){const i=n.map(s=>s.copy());i[0]=new W(e.x,e.y);for(let s=1;s<i.length;s++){const o=i[s],a=i[s-1],l=a.x-o.x,u=a.y-o.y;i[s]=new W(rm(o.x,l,t),rm(o.y,u,t))}const r=new W(i[i.length-1].x,i[i.length-1].y);return{newBuffer:i,point:r}},dc=(n,e,t,i,r)=>{const s=50*r;let o=Math.hypot(e.x-n.x,e.y-n.y),a=Math.hypot(e.x-t.x,e.y-t.y),l=Math.min(o/s,1)*i/2+1,u=Math.min(a/s,1)*i/2+1;return l*=r,u*=r,[l,u]};class S2{constructor(){ue(this,"pointerVec3Arr");ue(this,"midPointsVec3Arr");ue(this,"threeShapes");ue(this,"paths");ue(this,"pathContructionFunctions");ue(this,"bufferVec3Arr");ue(this,"bufferSize");ue(this,"bufferWeight");ue(this,"stabilizerType");this.pointerVec3Arr=[],this.midPointsVec3Arr=[],this.bufferVec3Arr=[],this.bufferSize=3,this.bufferWeight=.5,this.threeShapes=[],this.paths=[],this.pathContructionFunctions=[],this.stabilizerType=1}reset(){this.pointerVec3Arr=[],this.midPointsVec3Arr=[],this.bufferVec3Arr=[],this.threeShapes=[],this.paths=[],this.pathContructionFunctions=[]}down(e,t){this.reset();for(let i=0;i<this.bufferSize;i++)this.bufferVec3Arr.push(new W(e.x,e.y))}move(e,t,i,r,s,o,a,l,u){let c=l.drawSize,h=[];if(this.stabilizerType==1){this.bufferVec3Arr.push(new W(e.x,e.y)),this.bufferVec3Arr.length>this.bufferSize&&this.bufferVec3Arr.shift();const x=cc(this.bufferVec3Arr);this.pointerVec3Arr.push(x);let f=[];const p=[...this.bufferVec3Arr];for(var d=0;d<=this.bufferSize;d+=1){let v=p[p.length-1];p.shift(),p.push(v);let _=cc(p);f.push(new W(_.x,_.y))}f.push(new W(e.x,e.y)),h=f}else if(this.stabilizerType==0){const x=hc(this.bufferVec3Arr,new W(e.x,e.y),this.bufferWeight);this.bufferVec3Arr=x.newBuffer,this.pointerVec3Arr.push(x.point);let f=[],p=[...this.bufferVec3Arr].map(_=>_.copy()),v=!0;for(;v;){let _=hc(p,new W(e.x,e.y),this.bufferWeight);Math.hypot(_.point.x-e.x,_.point.y-e.y)<=1&&(v=!1),p=_.newBuffer,f.push(new W(_.point.x,_.point.y))}f.push(new W(e.x,e.y)),h=f}else this.pointerVec3Arr.push(new W(e.x,e.y));if(this.pointerVec3Arr.length>=2&&this.midPointsVec3Arr.push(this.pointerVec3Arr[this.pointerVec3Arr.length-1].add(this.pointerVec3Arr[this.pointerVec3Arr.length-2]).scale(.5)),this.midPointsVec3Arr.length>=2){let x=this.midPointsVec3Arr[this.midPointsVec3Arr.length-2],f=this.pointerVec3Arr[this.pointerVec3Arr.length-2],p=this.midPointsVec3Arr[this.midPointsVec3Arr.length-1];const v=dc(x,f,p,c,i.zoom);let _=v[0],g=v[1];u||(_=c*i.zoom,g=c*i.zoom);const y=Js(new W(x.x,x.y),new W(f.x,f.y),new W(p.x,p.y),_,g,r,i);o.save(),o.beginPath(),o.fillStyle=l.color,o.fill(y.path2D),o.closePath(),o.restore(),this.paths.push(y),this.pathContructionFunctions.push((w,A)=>Js(new W(x.x,x.y),new W(f.x,f.y),new W(p.x,p.y),_+w,g+A,r,i)),this.threeShapes.push(y.threeShape)}h.unshift(this.pointerVec3Arr[this.pointerVec3Arr.length-1].copy());const m=[];this.midPointsVec3Arr.length>0&&m.push(this.midPointsVec3Arr[this.midPointsVec3Arr.length-1].copy());for(let x=1;x<h.length;x++)m.push(h[x-1].add(h[x]).scale(.5));a.clearRect(0,0,a.canvas.width,a.canvas.height);for(let x=1;x<m.length;x+=1){let f=m[x-1],p=h[x-1],v=m[x];const _=dc(f,p,v,c,i.zoom);let g=_[0],y=_[1];u||(g=c*i.zoom,y=c*i.zoom);const w=Js(new W(f.x,f.y),new W(p.x,p.y),new W(v.x,v.y),g,y,r,i);a.save(),a.beginPath(),a.fillStyle=l.color,a.fill(w.path2D),a.closePath(),a.restore()}}up(e,t,i,r,s,o,a){if(this.pointerVec3Arr.length<1){r.clearRect(0,0,r.canvas.width,r.canvas.height),s.clearRect(0,0,s.canvas.width,s.canvas.height),t.render(i,e);return}const l=o.drawSize;let u=[];if(this.stabilizerType==1){let v=[];const _=[...this.bufferVec3Arr];for(var c=0;c<=this.bufferSize;c+=1){let g=_[_.length-1];_.shift(),_.push(g);let y=cc(_);v.push(new W(y.x,y.y))}u=v}else if(this.stabilizerType==0){let v=[],_=[...this.bufferVec3Arr],g=!0,y=this.bufferVec3Arr[0].copy();for(;g;){let w=hc(_,y,this.bufferWeight);Math.hypot(w.point.x-y.x,w.point.y-y.y)<=1&&(g=!1),_=w.newBuffer,v.push(new W(w.point.x,w.point.y))}v.push(new W(y.x,y.y)),u=v}u.unshift(this.pointerVec3Arr[this.pointerVec3Arr.length-1].copy());const h=[];this.midPointsVec3Arr.length>0&&h.push(this.midPointsVec3Arr[this.midPointsVec3Arr.length-1].copy());for(let v=1;v<u.length;v++)h.push(u[v-1].add(u[v]).scale(.5));s.clearRect(0,0,s.canvas.width,s.canvas.height);for(let v=1;v<h.length;v+=1){let _=h[v-1],g=u[v-1],y=h[v];const w=dc(_,g,y,l,e.zoom);let A=w[0],T=w[1];a||(A=l*e.zoom,T=l*e.zoom);const S=Js(new W(_.x,_.y),new W(g.x,g.y),new W(y.x,y.y),A,T,t,e);r.save(),r.beginPath(),r.fillStyle=o.color,r.fill(S.path2D),r.closePath(),r.restore(),this.paths.push(S),this.pathContructionFunctions.push((E,L)=>Js(new W(_.x,_.y),new W(g.x,g.y),new W(y.x,y.y),A+E,T+L,t,e)),this.threeShapes.push(S.threeShape)}const d=[...this.paths],m=[...this.pathContructionFunctions],x=new Ls(this.threeShapes),f=new As({color:new Be(o.color),side:Wn,transparent:!0}),p=new Jt(x,f);p.userData.type="Pen",p.userData.paths=d,p.userData.pathContructionFunctions=m,p.userData.position=e.position.clone(),p.userData.zoom=e.zoom,p.userData.color=o.color,this.reset(),i.add(p),t.render(i,e),r.clearRect(0,0,r.canvas.width,r.canvas.height),s.clearRect(0,0,s.canvas.width,s.canvas.height),r.canvas.style.opacity="1",s.canvas.style.opacity="1"}abort(e,t){this.bufferVec3Arr=[],this.pointerVec3Arr=[],this.midPointsVec3Arr=[],this.paths=[],this.pathContructionFunctions=[],e.clearRect(0,0,e.canvas.width,e.canvas.height),t.clearRect(0,0,t.canvas.width,t.canvas.height),e.canvas.style.opacity="1",t.canvas.style.opacity="1"}}class w2{constructor(e,t){ue(this,"lastDragPoint");ue(this,"panCamera");ue(this,"panRenderer");ue(this,"origin");ue(this,"scale");ue(this,"startedZoom");ue(this,"startZoomValue");ue(this,"maxZoom");ue(this,"minZoom");ue(this,"checkBounds",e=>{const t=e.getSize(new Y).x,i=e.getSize(new Y).y;let r=-t*this.scale+this.origin.x,s=-i*this.scale+this.origin.y,o=t*3*this.scale,a=i*3*this.scale,l=!0;return(r>0||s>0)&&(l=!1),(r+o<t||s+a<i)&&(l=!1),l});this.lastDragPoint=void 0;const i=e.getSize(new Y).x,r=e.getSize(new Y).y;this.panCamera=new bl(i/-2,i/2,r/2,r/-2,1,1e3),this.panCamera.position.set(t.position.x,t.position.y,t.position.z),this.panCamera.zoom=t.zoom/3,this.panCamera.updateProjectionMatrix();const s=new Zl({antialias:!0,alpha:!0,premultipliedAlpha:!0});s.setSize(i,r),e.setClearColor(0),e.setClearAlpha(0),this.panRenderer=s,this.origin=new Y(0,0),this.scale=1,this.startedZoom=!1,this.startZoomValue=t.zoom,this.maxZoom=.1,this.minZoom=10}draw(e,t){const i=e.getSize(new Y).x,r=e.getSize(new Y).y;t.save(),t.clearRect(0,0,t.canvas.width,t.canvas.height);let s=-i*this.scale+this.origin.x,o=-r*this.scale+this.origin.y,a=i*3*this.scale,l=r*3*this.scale;t.drawImage(this.panRenderer.domElement,s,o,a,l),t.restore(),this.scale==1&&(t.save(),t.beginPath(),t.rect(this.origin.x,this.origin.y,i*this.scale,r*this.scale),t.closePath(),t.clip(),t.globalCompositeOperation="copy",t.drawImage(e.domElement,this.origin.x,this.origin.y,i*this.scale,r*this.scale),t.restore())}prep(e,t,i){if(this.startedZoom)return;const r=e.getSize(new Y).x,s=e.getSize(new Y).y;this.panCamera=new bl(r/-2,r/2,s/2,s/-2,1,1e3),this.panCamera.position.set(t.position.x,t.position.y,t.position.z),this.panCamera.zoom=t.zoom/3,this.panCamera.updateProjectionMatrix(),this.startZoomValue=t.zoom,this.panRenderer.setSize(r,s),e.domElement.style.visibility="hidden",this.panRenderer.render(i,this.panCamera),this.startedZoom=!0}offreset(e,t,i,r){const s=t.getSize(new Y).x,o=t.getSize(new Y).y;e.updateProjectionMatrix(),t.domElement.style.visibility="visible",t.render(i,e),r.clearRect(0,0,s,o),this.origin=new Y(0,0),this.scale=1,this.startedZoom=!1,this.lastDragPoint=void 0}onreset(e,t,i,r){e.updateProjectionMatrix(),t.render(i,e),this.origin=new Y(0,0),this.scale=1,this.startedZoom=!1,this.prep(t,e,i)}down(e,t,i,r,s){this.lastDragPoint=e.clone(),this.prep(t,i,r),this.draw(t,s)}move(e,t,i,r,s){if(this.lastDragPoint==null)return;this.prep(t,i,r);const o=this.lastDragPoint.x-e.x,a=this.lastDragPoint.y-e.y;this.origin.x-=o,this.origin.y-=a,i.position.x+=o/i.zoom,i.position.y-=a/i.zoom,i.updateProjectionMatrix();{const l=r.getObjectByName("grid");l!=null&&(l.position.x=i.position.x-i.position.x%200,l.position.y=i.position.y-i.position.y%200)}this.checkBounds(t)||this.onreset(i,t,r,s),this.draw(t,s),this.lastDragPoint=e.clone()}up(e,t,i,r){this.offreset(e,t,i,r)}wheel(e,t,i,r,s){if(e.deltaY==0)return;this.prep(i,t,r);const o=i.getSize(new Y).x,a=i.getSize(new Y).y;let l=e.deltaY<0?1:-1,u=new C(e.clientX,e.clientY,1),c=Pl(u,t,o,a),h=1;l>0?t.zoom*1.1<this.minZoom&&(h=1.1):t.zoom*(1/1.1)>this.maxZoom&&(h=1.1,l<0&&(h=1/h)),this.scale*=h,this.origin.x=e.clientX-(e.clientX-this.origin.x)*h,this.origin.y=e.clientY-(e.clientY-this.origin.y)*h,t.zoom*=h,t.updateProjectionMatrix();let d=Pl(u,t,o,a);t.position.x+=c.x-d.x,t.position.y+=c.y-d.y,t.updateProjectionMatrix();{const m=r.getObjectByName("grid");m!=null&&(m.position.x=t.position.x-t.position.x%200,m.position.y=t.position.y-t.position.y%200)}this.checkBounds(i)?t.zoom/this.startZoomValue>=5&&this.onreset(t,i,r,s):this.onreset(t,i,r,s),t.zoom/this.startZoomValue<=.5?this.onreset(t,i,r,s):t.zoom/this.startZoomValue>=5&&this.onreset(t,i,r,s),this.draw(i,s)}abort(e,t,i,r){this.startedZoom&&this.offreset(e,t,i,r)}}const Ua=(n,e,t)=>{let i=n.sub(e).normalize().getPerpendicular().scale(t),r=n.add(i),s=n.sub(i),o=e.add(i),a=e.sub(i);return[r,s,o,a]};function sm(n,e,t,i){var r=t.x-i.x,s=n.x-e.x,o=t.y-i.y,a=n.y-e.y,l=s*o-a*r;if(l==0)return null;var u=n.x*e.y-n.y*e.x,c=t.x*i.y-t.y*i.x,h=(u*r-s*c)/l,d=(u*o-a*c)/l,m={x:h,y:d};return new W(m.x,m.y)}const Ba=(n,e,t)=>{let i=new cr(e,t);return i.moveTo(n[0]),i.lineTo(n[2]),i.lineTo(n[3]),i.lineTo(n[1]),i.lineTo(n[0]),i.closePath(),i},di=(n,e,t,i="round",r,s,o)=>{let a=(u,c,h)=>{let d=Ua(u,c,t),m=Ua(c,h,t),x=Ba(d,r,s),f=Ba(m,r,s),p=null,v=null;i=="miter"&&(p=sm(d[0],d[2],m[0],m[2]),v=sm(d[1],d[3],m[1],m[3])),(o.isPointInPath(f.path2D,d[2].x,d[2].y)||o.isPointInPath(x.path2D,m[0].x,m[0].y))&&(p=null),(o.isPointInPath(f.path2D,d[3].x,d[3].y)||o.isPointInPath(x.path2D,m[1].x,m[1].y))&&(v=null);let _=new cr(r,s);return _.moveTo(d[3]),v!=null&&_.lineTo(v),_.lineTo(m[1]),_.lineTo(d[2]),p!=null&&_.lineTo(p),_.lineTo(m[0]),_.lineTo(d[3]),_.closePath(),_},l=[];for(let u=1;u<n.length;u++){let c=n[u-1],h=n[u],d=Ua(c,h,t),m=Ba(d,r,s);if(l.push(m),u<n.length-1){let x=n[u-1],f=n[u],p=n[u+1];(i=="bevel"||i=="miter")&&l.push(a(x,f,p))}if(i=="round"){let x=new cr(r,s);x.arc(c,t,0,2*Math.PI,!1),x.closePath(),l.push(x)}}if(e&&n.length>2){let u=n[n.length-2],c=n[n.length-1],h=n[0],d=n[1],m=Ua(c,h,t),x=Ba(m,r,s);if(l.push(x),i=="bevel"||i=="miter")l.push(a(c,h,d)),l.push(a(u,c,h));else{let f=new cr(r,s);f.arc(h,t,0,2*Math.PI,!1),f.closePath(),l.push(f);let p=new cr(r,s);p.arc(c,t,0,2*Math.PI,!1),p.closePath(),l.push(p)}}else if(i=="round"){let u=new cr(r,s);u.arc(n[n.length-1],t,0,2*Math.PI,!1),u.closePath(),l.push(u)}return l};function om(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Hn;let u=0;for(let c=0;c<n.length;++c){const h=n[c];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,m,c),u+=m}}if(t){let c=0;const h=[];for(let d=0;d<n.length;++d){const m=n[d].index;for(let x=0;x<m.count;++x)h.push(m.getX(x)+c);c+=n[d].attributes.position.count}l.setIndex(h)}for(const c in s){const h=am(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<h;++d){const m=[];for(let f=0;f<o[c].length;++f)m.push(o[c][f][d]);const x=am(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(x)}}return l}function am(n){let e,t,i,r=0;for(let a=0;a<n.length;++a){const l=n[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;r+=l.array.length}const s=new e(r);let o=0;for(let a=0;a<n.length;++a)s.set(n[a].array,o),o+=n[a].array.length;return new Bn(s,t,i)}const lm=(n,e,t)=>n==ei.Line?{points:[new W(e.x,e.y),new W(t.x,t.y)],move:[[new W(1,1),new W(0,0)],[new W(0,0),new W(1,1)]]}:n==ei.Rectangle?{points:[new W(e.x,e.y),new W(t.x,e.y),new W(t.x,t.y),new W(e.x,t.y)],move:[[new W(1,1),new W(0,1),new W(0,0),new W(1,0)],[new W(0,1),new W(1,1),new W(1,0),new W(0,0)],[new W(0,0),new W(1,0),new W(1,1),new W(0,1)],[new W(1,0),new W(0,0),new W(0,1),new W(1,1)]]}:n==ei.Triangle?{points:[new W((e.x+t.x)/2,e.y),new W(t.x,t.y),new W(e.x,t.y)],move:[[new W(1,1),new W(0,0),new W(0,0)],[new W(0,0),new W(1,1),new W(0,0)],[new W(0,0),new W(0,0),new W(1,1)]]}:{points:[new W(e.x,e.y),new W(t.x,e.y),new W(t.x,t.y),new W(e.x,t.y)],move:[[new W(1,1),new W(0,1),new W(0,0),new W(1,0)],[new W(0,1),new W(1,1),new W(1,0),new W(0,0)],[new W(0,0),new W(1,0),new W(1,1),new W(0,1)],[new W(1,0),new W(0,0),new W(0,1),new W(1,1)]]};class M2{constructor(){ue(this,"anchorPoint");ue(this,"lastPoint");ue(this,"currentPoint");ue(this,"dragPoints");ue(this,"modifyFlag");ue(this,"createdFlag");ue(this,"dragPointIndex");ue(this,"shapeType");this.anchorPoint=void 0,this.currentPoint=void 0,this.modifyFlag=!1,this.dragPointIndex=void 0,this.createdFlag=!1,this.dragPoints=[],this.shapeType=ei.Rectangle}drawDragPoints(e,t){e.forEach(i=>{t.save(),t.fillStyle="white",t.beginPath(),t.shadowColor="black",t.shadowBlur=5,t.arc(i.x,i.y,7,0,2*Math.PI,!1),t.fill(),t.closePath(),t.restore(),t.save(),t.fillStyle="dodgerblue",t.beginPath(),t.arc(i.x,i.y,5,0,2*Math.PI,!1),t.fill(),t.closePath(),t.restore()})}down(e,t,i,r,s,o,a){if(this.anchorPoint=new W(e.x,e.y),this.lastPoint=new W(e.x,e.y),this.currentPoint=new W(e.x,e.y),this.dragPoints.length!=0){let l=!1;this.dragPoints.forEach((u,c)=>{let h=new Path2D;h.arc(u.x,u.y,7,0,2*Math.PI,!1),h.closePath(),o.isPointInPath(h,e.x,e.y)&&(this.dragPointIndex=c,this.modifyFlag=!0,l=!0)}),l||di(this.dragPoints,!0,a.drawSize*i.zoom,"round",r,i,o).forEach(c=>{o.isPointInPath(c.path2D,e.x,e.y)&&(this.modifyFlag=!0)})}}move(e,t,i,r,s,o,a){if(!(this.lastPoint==null||this.anchorPoint==null)){if(this.currentPoint=new W(e.x,e.y),this.dragPoints.length!=0){if(this.modifyFlag){if(this.dragPointIndex!=null){let u=this.lastPoint.x-this.currentPoint.x,c=this.lastPoint.y-this.currentPoint.y;const h=lm(this.shapeType,new W(0,0),new W(0,0)).move;this.dragPointIndex!=null&&(this.dragPoints=this.dragPoints.map((d,m)=>new W(d.x-u*h[this.dragPointIndex][m].x,d.y-c*h[this.dragPointIndex][m].y)))}else{let u=this.lastPoint.x-this.currentPoint.x,c=this.lastPoint.y-this.currentPoint.y;this.dragPoints.forEach((h,d)=>{this.dragPoints[d]=this.dragPoints[d].sub(new W(u,c))})}const l=di(this.dragPoints,!0,a.drawSize*i.zoom,"round",r,i,o);o.clearRect(0,0,o.canvas.width,o.canvas.height),l.forEach(u=>{o.save(),o.fillStyle=a.color,o.beginPath(),o.fill(u.path2D),o.closePath(),o.restore()}),this.dragPoints!=null&&this.drawDragPoints(this.dragPoints,o)}}else{this.createdFlag||(this.shapeType=a.shapeType,this.dragPoints=lm(this.shapeType,this.anchorPoint,this.currentPoint).points,this.modifyFlag=!0,this.dragPointIndex=0),this.createdFlag=!0;const l=di(this.dragPoints,!0,a.drawSize*i.zoom,"round",r,i,o);o.clearRect(0,0,o.canvas.width,o.canvas.height),l.forEach(u=>{o.save(),o.fillStyle=a.color,o.beginPath(),o.fill(u.path2D),o.closePath(),o.restore()}),this.drawDragPoints(this.dragPoints,o)}this.lastPoint=new W(e.x,e.y)}}up(e,t,i,r,s){if(this.dragPoints.length!=0){if(!this.modifyFlag){const o=di(this.dragPoints,!0,s.drawSize*e.zoom,"round",t,e,r),a=[];o.forEach(h=>{const d=new Ls(h.threeShape);a.push(d)});let l=om(a);const u=new As({transparent:!0,color:new Be(s.color),side:Wn}),c=new Jt(l,u);c.userData.type="shape",c.userData.shapeType=this.shapeType,c.userData.dragPoints=this.dragPoints.map(h=>zi(new Y(h.x,h.y),e,t.getSize(new Y).x,t.getSize(new Y).y)),c.userData.position=e.position.clone(),c.userData.zoom=e.zoom,c.userData.color=s.color,c.userData.drawSize=s.drawSize,i.add(c),this.dragPoints=[],this.dragPointIndex=void 0,this.shapeType=ei.Rectangle,r.clearRect(0,0,r.canvas.width,r.canvas.height),t.render(i,e)}}else if(!this.createdFlag){let o=!1,a;i.traverse(l=>{if(o||!l.isObject3D||l.userData.type!="shape")return;const u=t.getSize(new Y).x,c=t.getSize(new Y).y,h=l.userData.dragPoints.map(x=>as(new Y(x.x,x.y),e,u,c)).map(x=>new W(x.x,x.y)),d=di(h,!0,s.drawSize*e.zoom,"round",t,e,r);let m=!1;for(let x=0;x<d.length;x++)if(r.isPointInPath(d[x].path2D,this.currentPoint.x,this.currentPoint.y)){m=!0,o=!0;break}m&&(this.dragPoints=h,this.shapeType=l.userData.shapeType??ei.Rectangle,r.clearRect(0,0,r.canvas.width,r.canvas.height),d.forEach(x=>{r.save(),r.fillStyle=s.color,r.beginPath(),r.fill(x.path2D),r.closePath(),r.restore()}),a=l,this.drawDragPoints(this.dragPoints,r))}),o&&(i.remove(a),t.render(i,e))}this.modifyFlag=!1,this.dragPointIndex=void 0,this.createdFlag=!1,this.anchorPoint=void 0,this.lastPoint=void 0,this.currentPoint=void 0}abort(e,t,i,r,s){if(this.dragPoints.length!=0){const o=di(this.dragPoints,!0,s.drawSize*t.zoom,"round",e,t,r),a=[];o.forEach(h=>{const d=new Ls(h.threeShape);a.push(d)});let l=om(a);const u=new As({transparent:!0,color:new Be(s.color),side:Wn}),c=new Jt(l,u);c.userData.type="shape",c.userData.shapeType=this.shapeType,c.userData.dragPoints=this.dragPoints.map(h=>zi(new Y(h.x,h.y),t,e.getSize(new Y).x,e.getSize(new Y).y)),c.userData.position=t.position.clone(),c.userData.zoom=t.zoom,c.userData.color=s.color,c.userData.drawSize=s.drawSize,i.add(c)}r.clearRect(0,0,r.canvas.width,r.canvas.height),e.render(i,t),this.modifyFlag=!1,this.dragPoints=[],this.dragPointIndex=void 0,this.createdFlag=!1,this.anchorPoint=void 0,this.lastPoint=void 0,this.currentPoint=void 0,this.shapeType=ei.Rectangle}}class E2{constructor(){}move(e,t,i,r,s,o,a){const l=devicePixelRatio,u=o,c=a.drawSize;o.clearRect(0,0,o.canvas.width,o.canvas.height);const h=[];s.traverse(d=>{if(!d.isObject3D||!(d instanceof Jt)||!d.isMesh)return;let m=!1;if(d.userData.type=="Pen"){if(!new Vt().setFromObject(d).clone().expandByScalar(c/i.zoom).containsPoint(t.clone()))return;let v=d.userData.paths;if(v==null)return;for(let _=0;_<v.length;_++)if(new Vt(new C(v[_].minX==null?v[_].minX:v[_].minX+d.position.x,v[_].minY==null?v[_].minY:v[_].minY+d.position.y,0),new C(v[_].maxX==null?v[_].maxX:v[_].maxX+d.position.x,v[_].maxY==null?v[_].maxY:v[_].maxY+d.position.y,0)).clone().expandByScalar(c/i.zoom).containsPoint(t)){if(o.save(),o.translate(d.position.x*i.zoom,-d.position.y*i.zoom),o.translate(u.canvas.width/l/2,u.canvas.height/l/2),o.scale(i.zoom,i.zoom),o.translate(-(o.canvas.width/l)/2,-(o.canvas.height/l)/2),o.translate(-i.position.x+d.userData.position.x,i.position.y-d.userData.position.y),o.translate(u.canvas.width/l/2,u.canvas.height/l/2),o.scale(1/d.userData.zoom,1/d.userData.zoom),o.translate(-(o.canvas.width/l)/2,-(o.canvas.height/l)/2),d.userData.pathContructionFunctions==null)break;let A=d.userData.pathContructionFunctions[_];const T=A(c/(i.zoom/d.userData.zoom),c/(i.zoom/d.userData.zoom));let S=o.isPointInPath(T.path2D,e.x,e.y)||o.isPointInStroke(T.path2D,e.x,e.y);if(o.restore(),S){m=!0;break}}}else if(d.userData.type=="shape"){if(!new Vt().setFromObject(d).clone().expandByScalar(c).containsPoint(t.clone()))return;const v=r.getSize(new Y).x,_=r.getSize(new Y).y;o.save();const g=d.userData.dragPoints.map(w=>as(new Y(w.x,w.y),i,v,_)).map(w=>new W(w.x,w.y)),y=di(g,!0,d.userData.drawSize*i.zoom+c,"round",r,i,o);for(let w=0;w<y.length;w++)if(o.isPointInPath(y[w].path2D,e.x,e.y)||o.isPointInStroke(y[w].path2D,e.x,e.y)){m=!0;break}o.restore()}m&&h.push(d)}),h.forEach(d=>{s.remove(d)}),h.length>0&&r.render(s,i),o.save(),o.beginPath(),o.lineWidth=2,o.strokeStyle="blue",o.fillStyle="rgba(0, 0, 0, 0.1)",o.arc(e.x,e.y,c,0,2*Math.PI,!1),o.stroke(),o.fill(),o.closePath(),o.restore()}up(e,t,i,r){r.clearRect(0,0,r.canvas.width,r.canvas.height)}}class T2{constructor(){ue(this,"lassoScreenPoints");ue(this,"lassoExists");ue(this,"modifyFlag");ue(this,"previousScreenPoint");ue(this,"newLasso");ue(this,"selectedMeshes");ue(this,"imgData");ue(this,"movedX");ue(this,"movedY");this.lassoScreenPoints=[],this.selectedMeshes=[],this.imgData=void 0,this.previousScreenPoint=void 0,this.lassoExists=!1,this.modifyFlag=!1,this.newLasso=!1,this.movedX=0,this.movedY=0}drawLasso(e){let t=new Path2D;t.moveTo(this.lassoScreenPoints[0].x,this.lassoScreenPoints[0].y);for(let i=0;i<this.lassoScreenPoints.length;i++)t.lineTo(this.lassoScreenPoints[i].x,this.lassoScreenPoints[i].y);t.closePath(),e.save(),e.lineJoin=e.lineCap="round",e.lineWidth=3,e.setLineDash([10]),e.strokeStyle="dodgerblue",e.stroke(t),e.restore()}down(e,t,i,r,s,o,a){if(this.lassoScreenPoints.length==0)this.lassoExists=!1,this.newLasso=!0,this.lassoScreenPoints.push(new W(e.x,e.y));else{this.lassoExists=!0,this.newLasso=!1;let l=new Path2D;l.moveTo(this.lassoScreenPoints[0].x,this.lassoScreenPoints[0].y);for(let u=0;u<this.lassoScreenPoints.length;u++)l.lineTo(this.lassoScreenPoints[u].x,this.lassoScreenPoints[u].y);l.closePath(),o.isPointInPath(l,e.x,e.y)&&(this.modifyFlag=!0)}this.previousScreenPoint=new W(e.x,e.y)}move(e,t,i,r,s,o,a,l){if(r.getSize(new Y).x,r.getSize(new Y).y,this.lassoExists){if(this.modifyFlag&&this.previousScreenPoint!=null){const u=e.x-this.previousScreenPoint.x,c=e.y-this.previousScreenPoint.y;this.lassoScreenPoints=this.lassoScreenPoints.map(h=>new W(h.x+u,h.y+c)),o.clearRect(0,0,o.canvas.width,o.canvas.height),this.imgData!=null&&o.putImageData(this.imgData,this.movedX,this.movedY),this.movedX+=u,this.movedY+=c,this.selectedMeshes.forEach(h=>h.position.add(new C(u/i.zoom,-c/i.zoom,0)))}}else this.lassoScreenPoints.push(new W(e.x,e.y)),o.clearRect(0,0,o.canvas.width,o.canvas.height),this.drawLasso(o);this.previousScreenPoint=new W(e.x,e.y)}up(e,t,i,r,s,o){const a=t.getSize(new Y).x,l=t.getSize(new Y).y,u=devicePixelRatio,c=r;if(this.newLasso){let h=new Path2D;h.moveTo(this.lassoScreenPoints[0].x,this.lassoScreenPoints[0].y);for(let g=0;g<this.lassoScreenPoints.length;g++)h.lineTo(this.lassoScreenPoints[g].x,this.lassoScreenPoints[g].y);h.closePath();const d=this.lassoScreenPoints,m=[];for(let g=1;g<d.length;g++){const y=d[g-1],w=d[g],A=w.sub(y).length();for(let T=1;T<A;T+=1){const S=y.add(w.sub(y).scale(T/A));m.push(S)}}const x=d.concat(m),f=x.map(g=>zi(new Y(g.x,g.y),e,a,l)),p=new Vt().setFromPoints(f.map(g=>new C(g.x,g.y,0))),v=[];if(i.traverse(g=>{if(g.isObject3D&&g instanceof Jt&&g.isMesh){if(g.userData.type=="Pen"){if(!new Vt().setFromObject(g).intersectsBox(p))return;let w=g.userData.paths;if(w==null||g.userData.pathContructionFunctions==null)return;let T=!1;for(let S=0;S<w.length;S++){let E=new Vt(new C(w[S].minX==null?w[S].minX:w[S].minX+g.position.x,w[S].minY==null?w[S].minY:w[S].minY+g.position.y,0),new C(w[S].maxX==null?w[S].maxX:w[S].maxX+g.position.x,w[S].maxY==null?w[S].maxY:w[S].maxY+g.position.y,0)),L=!1;for(let B=0;B<f.length;B++)if(E.containsPoint(new C(f[B].x,f[B].y,0))){r.save(),r.translate(g.position.x*e.zoom,-g.position.y*e.zoom),r.translate(c.canvas.width/u/2,c.canvas.height/u/2),r.scale(e.zoom,e.zoom),r.translate(-(r.canvas.width/u)/2,-(r.canvas.height/u)/2),r.translate(-e.position.x+g.userData.position.x,e.position.y-g.userData.position.y),r.translate(c.canvas.width/u/2,c.canvas.height/u/2),r.scale(1/g.userData.zoom,1/g.userData.zoom),r.translate(-(r.canvas.width/u)/2,-(r.canvas.height/u)/2);let V=g.userData.pathContructionFunctions[S];const N=V(0,0);let I=r.isPointInPath(N.path2D,x[B].x,x[B].y)||r.isPointInStroke(N.path2D,x[B].x,x[B].y);if(r.restore(),I){L=!0;break}}if(L){T=!0;break}}if(T){v.push(g);return}for(let S=0;S<w.length;S++){let E=new Vt(new C(w[S].minX==null?w[S].minX:w[S].minX+g.position.x,w[S].minY==null?w[S].minY:w[S].minY+g.position.y,0),new C(w[S].maxX==null?w[S].maxX:w[S].maxX+g.position.x,w[S].maxY==null?w[S].maxY:w[S].maxY+g.position.y,0));if(!p.intersectsBox(E))continue;let L=!1;const B=w[S].points.map(V=>{let N=as(new Y(V.x,V.y),e,a,l);return new Y(N.x+g.position.x*e.zoom,N.y-g.position.y*e.zoom)});for(let V=0;V<B.length;V++)if(r.isPointInPath(h,B[V].x,B[V].y)){L=!0;break}if(L){T=!0;break}}if(T){v.push(g);return}}else if(g.userData.type=="shape"){if(!new Vt().setFromObject(g).intersectsBox(p))return;const w=g.userData.dragPoints.map(E=>as(new Y(E.x,E.y),e,a,l)).map(E=>new W(E.x,E.y));if(w==null||w.length<1)return;let T=di(w,!0,g.userData.drawSize*e.zoom,"round",t,e,r),S=!1;for(let E=0;E<T.length;E++){let L=new Vt(new C(T[E].minX==null?T[E].minX:T[E].minX+g.position.x,T[E].minY==null?T[E].minY:T[E].minY+g.position.y,0),new C(T[E].maxX==null?T[E].maxX:T[E].maxX+g.position.x,T[E].maxY==null?T[E].maxY:T[E].maxY+g.position.y,0)),B=!1;for(let V=0;V<f.length;V++)if(L.containsPoint(new C(f[V].x,f[V].y,0))){const N=T[E];r.save(),r.translate(g.position.x*e.zoom,-g.position.y*e.zoom);const I=r.isPointInPath(N.path2D,x[V].x,x[V].y)||r.isPointInStroke(N.path2D,x[V].x,x[V].y);if(r.restore(),I){B=!0;break}}if(B){S=!0;break}}if(S){v.push(g);return}for(let E=0;E<T.length;E++){let L=new Vt(new C(T[E].minX==null?T[E].minX:T[E].minX+g.position.x,T[E].minY==null?T[E].minY:T[E].minY+g.position.y,0),new C(T[E].maxX==null?T[E].maxX:T[E].maxX+g.position.x,T[E].maxY==null?T[E].maxY:T[E].maxY+g.position.y,0));if(!p.intersectsBox(L))continue;let B=!1;const V=T[E].points.map(N=>{let I=as(new Y(N.x,N.y),e,a,l);return new Y(I.x+g.position.x*e.zoom,I.y-g.position.y*e.zoom)});for(let N=0;N<V.length;N++)if(r.isPointInPath(h,V[N].x,V[N].y)){B=!0;break}if(B){S=!0;break}}if(S){v.push(g);return}}}}),v.length==0){this.lassoScreenPoints=[],this.selectedMeshes=[],this.lassoExists=!1,this.imgData=void 0,this.movedX=0,this.movedY=0,r.clearRect(0,0,r.canvas.width,r.canvas.height),t.render(i,e);return}this.selectedMeshes=v,v.forEach(g=>{i.remove(g)}),s.clearRect(0,0,s.canvas.width,s.canvas.height),this.selectedMeshes.forEach(g=>{if(g.userData.type=="Pen"){const y=g.userData.paths;for(let w=0;w<y.length;w++){s.save(),s.translate(g.position.x*e.zoom,-g.position.y*e.zoom),s.translate(c.canvas.width/u/2,c.canvas.height/u/2),s.scale(e.zoom,e.zoom),s.translate(-(s.canvas.width/u)/2,-(s.canvas.height/u)/2),s.translate(-e.position.x+g.userData.position.x,e.position.y-g.userData.position.y),s.translate(c.canvas.width/u/2,c.canvas.height/u/2),s.scale(1/g.userData.zoom,1/g.userData.zoom),s.translate(-(s.canvas.width/u)/2,-(s.canvas.height/u)/2);let A=g.userData.pathContructionFunctions[w];const T=A(0,0);s.fillStyle=g.userData.color??"black",s.fill(T.path2D),s.restore()}}else if(g.userData.type="shape"){const y=g.userData.dragPoints.map(T=>as(new Y(T.x,T.y),e,a,l)).map(T=>new W(T.x,T.y));if(y==null||y.length<1)return;const A=di(y,!0,g.userData.drawSize*e.zoom,"round",t,e,s);for(let T=0;T<A.length;T++){const S=A[T];s.save(),s.translate(g.position.x*e.zoom,-g.position.y*e.zoom),s.fillStyle=g.userData.color??"black",s.fill(S.path2D),s.restore()}}}),this.drawLasso(s);const _=s.getImageData(0,0,s.canvas.width,s.canvas.height);this.imgData=_,s.clearRect(0,0,s.canvas.width,s.canvas.height),r.putImageData(_,0,0),t.render(i,e)}else this.lassoExists?this.modifyFlag||(this.selectedMeshes.forEach(h=>{i.add(h)}),this.lassoScreenPoints=[],this.selectedMeshes=[],this.lassoExists=!1,this.imgData=void 0,this.movedX=0,this.movedY=0,r.clearRect(0,0,r.canvas.width,r.canvas.height),t.render(i,e)):(this.lassoScreenPoints=[],this.selectedMeshes=[],this.lassoExists=!1,this.imgData=void 0,this.movedX=0,this.movedY=0);this.previousScreenPoint=void 0,this.modifyFlag=!1,this.newLasso=!1}reset(e,t,i,r,s){this.selectedMeshes.length!=0&&this.selectedMeshes.forEach(o=>{i.add(o)}),this.lassoScreenPoints=[],this.selectedMeshes=[],this.previousScreenPoint=void 0,this.lassoExists=!1,this.modifyFlag=!1,this.newLasso=!1,this.imgData=void 0,this.movedX=0,this.movedY=0,r.clearRect(0,0,r.canvas.width,r.canvas.height),e.render(i,t)}abort(e,t,i,r,s){this.reset(e,t,i,r,s)}}class b2{constructor(e,t){ue(this,"currentInputState");ue(this,"panZoomKit");ue(this,"penclitKit");ue(this,"shapeKit");ue(this,"eraserKit");ue(this,"selectKit");this.currentInputState=0,this.panZoomKit=new w2(e,t),this.penclitKit=new S2,this.shapeKit=new M2,this.eraserKit=new E2,this.selectKit=new T2}pointerDown(e,t,i,r,s,o,a){if(e.preventDefault(),this.currentInputState!=0){if(this.currentInputState==2)return;this.shapeKit.abort(i,t,r,s,a),this.penclitKit.abort(s,o),this.selectKit.abort(i,t,r,s,a)}const l=Qp(e),u=Pl(l.clone(),t,i.getSize(new Y).x,i.getSize(new Y).y);e instanceof MouseEvent?e.button==2?this.currentInputState=2:this.currentInputState=1:e.touches.length>=2?this.currentInputState=2:this.currentInputState=1,this.currentInputState==2&&(this.shapeKit.abort(i,t,r,s,a),this.selectKit.abort(i,t,r,s,a),this.panZoomKit.down(l,i,t,r,s)),this.currentInputState==1&&(this.panZoomKit.abort(t,i,r,s),a.editType==Ke.Pen?this.penclitKit.down(l,u):a.editType==Ke.FountainPen?this.penclitKit.down(l,u):a.editType==Ke.Shape?this.shapeKit.down(l,u,t,i,r,s,a):a.editType==Ke.Eraser||a.editType==Ke.Select&&this.selectKit.down(l,u,t,i,r,s,a))}pointerMove(e,t,i,r,s,o,a){if(e.preventDefault(),this.currentInputState==0)return;const l=Qp(e),u=Pl(l.clone(),t,i.getSize(new Y).x,i.getSize(new Y).y);this.currentInputState==2?this.panZoomKit.move(l,i,t,r,s):a.editType==Ke.Pen?this.penclitKit.move(l,u,t,i,r,s,o,a,!1):a.editType==Ke.FountainPen?this.penclitKit.move(l,u,t,i,r,s,o,a,!0):a.editType==Ke.Shape?this.shapeKit.move(l,u,t,i,r,s,a):a.editType==Ke.Eraser?this.eraserKit.move(l,u,t,i,r,s,a):a.editType==Ke.Select&&this.selectKit.move(l,u,t,i,r,s,o,a)}pointerUp(e,t,i,r,s,o,a){e.preventDefault(),this.currentInputState!=0&&(this.currentInputState==2?this.panZoomKit.up(t,i,r,s):a.editType==Ke.Pen?this.penclitKit.up(t,i,r,s,o,a,!1):a.editType==Ke.FountainPen?this.penclitKit.up(t,i,r,s,o,a,!0):a.editType==Ke.Shape?this.shapeKit.up(t,i,r,s,a):a.editType==Ke.Eraser?this.eraserKit.up(t,i,r,s):a.editType==Ke.Select&&this.selectKit.up(t,i,r,s,o,a),this.currentInputState=0)}wheel(e,t,i,r,s,o){this.currentInputState!=1&&(this.shapeKit.abort(i,t,r,s,o),this.selectKit.abort(i,t,r,s,o),this.panZoomKit.wheel(e,t,i,r,s))}abort(e,t,i,r,s,o){this.shapeKit.abort(t,e,i,r,o),this.penclitKit.abort(r,s),this.selectKit.abort(t,e,i,r,o),this.panZoomKit.abort(e,t,i,r)}}var yd=(n=>(n[n.Dots=0]="Dots",n[n.VLines=1]="VLines",n[n.HLines=2]="HLines",n[n.VHLines=3]="VHLines",n[n.None=4]="None",n))(yd||{});class A2{constructor(e,t){ue(this,"type");ue(this,"activeMesh");ue(this,"changeType",(e,t)=>{if(this.type==e)return;this.activeMesh!=null&&t.remove(this.activeMesh),this.type=e,this.activeMesh=void 0;let i=this.createMesh();i!=null&&(i.name="grid",this.activeMesh=i,t.add(i))});this.type=4,this.activeMesh=void 0,this.changeType(e,t)}createMesh(){const t=new Be("#dddddd");if(this.type==0){const i=window.innerHeight/2/.1*3,r=window.innerWidth/2/.1*3;let s=[];for(let u=-i;u<i;u+=200)for(let c=-r;c<r;c+=200){const h=new Al;h.arc(u-1/2,c-1/2,1/2,0,2*Math.PI,!1),h.closePath(),s.push(h)}const o=new Ls(s,20),a=new As({color:t});return new Jt(o,a)}else if(this.type==2||this.type==1||this.type==3){let i=[],r=100;if(this.type==2||this.type==3){const o=window.innerHeight/2/.1*3,a=window.innerWidth/2/.1*3;for(let l=-a;l<a;l+=r){const u=new vh;u.moveTo(l,-o),u.lineTo(l,o),i.push(u)}}if(this.type==1||this.type==3){const o=window.innerHeight/2/.1*3,a=window.innerWidth/2/.1*3;for(let l=-o;l<o;l+=r){const u=new Al;u.moveTo(a,l),u.lineTo(-a,l),i.push(u)}}let s=new oo;return i.forEach(o=>{const a=new Hn().setFromPoints(o.getPoints()),l=new q0({color:t}),u=new k3(a,l);s.add(u)}),s}}}class P2{constructor(e,t,i){ue(this,"camera");ue(this,"scene");ue(this,"renderer");ue(this,"bufferCanvasCtx1");ue(this,"bufferCanvasCtx2");ue(this,"appState");ue(this,"gridKit");ue(this,"inputControls");this.appState={editType:Ke.Pen,shapeType:ei.Rectangle,drawSize:10,color:"red",gridType:yd.VHLines};const r=new F3;this.scene=r;const s=new bl(t/-2,t/2,i/2,i/-2,1,1e3);s.position.z=500,s.zoom=.3,s.updateProjectionMatrix(),r.add(s),this.camera=s,s.userData.dx=0,s.userData.dy=0;const o=new Zl({antialias:!0,alpha:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});o.setSize(t,i),o.setClearColor(0),o.setClearAlpha(0),o.setPixelRatio(devicePixelRatio),this.renderer=o,this.gridKit=new A2(this.appState.gridType,r),e.appendChild(o.domElement);const a=document.createElement("canvas");a.width=t*devicePixelRatio,a.height=i*devicePixelRatio,a.style.width=t+"px",a.style.height=i+"px";const l=a.getContext("2d");this.bufferCanvasCtx1=l,l.scale(devicePixelRatio,devicePixelRatio),e.appendChild(a);const u=document.createElement("canvas");u.width=t*devicePixelRatio,u.height=i*devicePixelRatio,u.style.width=t+"px",u.style.height=i+"px";const c=u.getContext("2d");this.bufferCanvasCtx2=c,c.scale(devicePixelRatio,devicePixelRatio),e.appendChild(u),o.render(r,s)}abort(){this.inputControls!=null&&this.inputControls.abort(this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.bufferCanvasCtx2,this.appState)}changeEditType(e){this.appState.editType=e,this.abort()}changeShapeType(e){this.appState.shapeType=e,this.abort()}changeDrawSize(e){this.appState.drawSize=Math.max(1,Math.min(e,100)),this.abort()}changeColor(e){this.appState.color=e,this.abort()}changeGridType(e){}resize(e,t){this.abort();let i=this.renderer.getSize(new Y).x-e,r=this.renderer.getSize(new Y).y-t;this.renderer.setSize(e,t),this.camera.left=e/-2,this.camera.right=e/2,this.camera.top=t/2,this.camera.bottom=t/-2,this.camera.updateProjectionMatrix(),this.scene.traverse(s=>{s.isObject3D&&(s.userData.type=="Pen"&&(s.userData.position.x-=i/s.userData.zoom/2,s.userData.position.y+=r/s.userData.zoom/2),s.userData.type=="shape"&&(s.userData.position.x-=i/s.userData.zoom/2,s.userData.position.y+=r/s.userData.zoom/2))}),this.bufferCanvasCtx1.clearRect(0,0,this.bufferCanvasCtx1.canvas.width,this.bufferCanvasCtx1.canvas.height),this.bufferCanvasCtx1.canvas.width=e,this.bufferCanvasCtx1.canvas.height=t,this.bufferCanvasCtx1.canvas.style.width=e+"px",this.bufferCanvasCtx1.canvas.style.height=t+"px",this.bufferCanvasCtx2.clearRect(0,0,this.bufferCanvasCtx2.canvas.width,this.bufferCanvasCtx2.canvas.height),this.bufferCanvasCtx2.canvas.width=e,this.bufferCanvasCtx2.canvas.height=t,this.bufferCanvasCtx2.canvas.style.width=e+"px",this.bufferCanvasCtx2.canvas.style.height=t+"px",this.renderer.render(this.scene,this.camera)}addControls(){const e=new b2(this.renderer,this.camera);this.inputControls=e,g2()?(this.bufferCanvasCtx2.canvas.addEventListener("touchstart",t=>e.pointerDown(t,this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.bufferCanvasCtx2,this.appState)),this.bufferCanvasCtx2.canvas.addEventListener("touchmove",t=>e.pointerMove(t,this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.bufferCanvasCtx2,this.appState)),this.bufferCanvasCtx2.canvas.addEventListener("touchend",t=>e.pointerUp(t,this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.bufferCanvasCtx2,this.appState)),this.bufferCanvasCtx2.canvas.addEventListener("touchcancel",t=>e.pointerUp(t,this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.bufferCanvasCtx2,this.appState))):(this.bufferCanvasCtx2.canvas.addEventListener("mousedown",t=>e.pointerDown(t,this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.bufferCanvasCtx2,this.appState)),this.bufferCanvasCtx2.canvas.addEventListener("mousemove",t=>e.pointerMove(t,this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.bufferCanvasCtx2,this.appState)),this.bufferCanvasCtx2.canvas.addEventListener("mouseup",t=>e.pointerUp(t,this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.bufferCanvasCtx2,this.appState)),this.bufferCanvasCtx2.canvas.addEventListener("mouseleave",t=>e.pointerUp(t,this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.bufferCanvasCtx2,this.appState)),this.bufferCanvasCtx2.canvas.addEventListener("wheel",t=>e.wheel(t,this.camera,this.renderer,this.scene,this.bufferCanvasCtx1,this.appState)))}}class L2 extends Ue.Component{constructor(t){super(t);ue(this,"containerRef");ue(this,"unmountCallback");ue(this,"engine");this.containerRef=Ue.createRef(),this.unmountCallback=()=>{},this.engine=void 0}componentDidMount(){const t=this.containerRef.current;let i;t!=null&&(t.innerHTML="",i=new P2(t,window.innerWidth,window.innerHeight),i.addControls(),this.engine=i);const r=()=>{console.log("resize"),i!=null&&i.resize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",r),this.unmountCallback=()=>{window.removeEventListener("resize",r)}}changeEditType(t){this.engine!=null&&this.engine.changeEditType(t)}changeShapeType(t){this.engine!=null&&this.engine.changeShapeType(t)}changeDrawSize(t){this.engine!=null&&this.engine.changeDrawSize(t)}changeColor(t){this.engine!=null&&this.engine.changeColor(t)}changeGridType(t){this.engine!=null&&this.engine.changeGridType(t)}componentWillUnmount(){this.unmountCallback()}render(){return Ge(Sm,{children:Ge("div",{id:"container",ref:this.containerRef})})}}var C2="M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z",D2="M15.54,3.5L20.5,8.47L19.07,9.88L14.12,4.93L15.54,3.5M3.5,19.78L10,13.31C9.9,13 9.97,12.61 10.23,12.35C10.62,11.96 11.26,11.96 11.65,12.35C12.04,12.75 12.04,13.38 11.65,13.77C11.39,14.03 11,14.1 10.69,14L4.22,20.5L14.83,16.95L18.36,10.59L13.42,5.64L7.05,9.17L3.5,19.78Z",R2="M12 2C17.5 2 22 5.13 22 9C22 12.26 18.81 15 14.5 15.78L14.5 15.5C14.5 14.91 14.4 14.34 14.21 13.81C17.55 13.21 20 11.28 20 9C20 6.24 16.42 4 12 4C7.58 4 4 6.24 4 9C4 10.19 4.67 11.29 5.79 12.15C5.35 12.64 5 13.21 4.78 13.85C3.06 12.59 2 10.88 2 9C2 5.13 6.5 2 12 2M9.5 12C11.43 12 13 13.57 13 15.5C13 17.4 11.5 18.95 9.6 19C9.39 19.36 9.18 20 9.83 20.68C11 21.88 13.28 19.72 16.39 19.71C18.43 19.7 20.03 19.97 20.03 19.97C20.03 19.97 21.08 20.1 20.97 21.04C20.86 21.97 19.91 21.97 19.91 21.97C19.53 21.93 18.03 21.58 16.22 21.68C14.41 21.77 13.47 22.41 12.56 22.69C11.66 22.97 9.91 23.38 8.3 22.05C6.97 20.96 7.46 19.11 7.67 18.5C6.67 17.87 6 16.76 6 15.5C6 13.57 7.57 12 9.5 12M9.5 14C8.67 14 8 14.67 8 15.5C8 16.33 8.67 17 9.5 17C10.33 17 11 16.33 11 15.5C11 14.67 10.33 14 9.5 14Z",z2="M20.71,7.04C20.37,7.38 20.04,7.71 20.03,8.04C20,8.36 20.34,8.69 20.66,9C21.14,9.5 21.61,9.95 21.59,10.44C21.57,10.93 21.06,11.44 20.55,11.94L16.42,16.08L15,14.66L19.25,10.42L18.29,9.46L16.87,10.87L13.12,7.12L16.96,3.29C17.35,2.9 18,2.9 18.37,3.29L20.71,5.63C21.1,6 21.1,6.65 20.71,7.04M3,17.25L12.56,7.68L16.31,11.43L6.75,21H3V17.25Z",I2="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z",Ll={},N2={get exports(){return Ll},set exports(n){Ll=n}},fc,um;function F2(){if(um)return fc;um=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return fc=n,fc}var pc,cm;function k2(){if(cm)return pc;cm=1;var n=F2();function e(){}function t(){}return t.resetWarningCache=e,pc=function(){function i(o,a,l,u,c,h){if(h!==n){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}i.isRequired=i;function r(){return i}var s={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:t,resetWarningCache:e};return s.PropTypes=s,s},pc}var hm;function O2(){return hm||(hm=1,N2.exports=k2()()),Ll}var U2=function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(i,r,s){t.o(i,r)||Object.defineProperty(i,r,{enumerable:!0,get:s})},t.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,r){if(1&r&&(i=t(i)),8&r||4&r&&typeof i=="object"&&i&&i.__esModule)return i;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&r&&typeof i!="string")for(var o in i)t.d(s,o,function(a){return i[a]}.bind(null,o));return s},t.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(r,"a",r),r},t.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},t.p="",t(t.s=2)}([function(n,e){n.exports=O2()},function(n,e){n.exports=Ue},function(n,e,t){t.r(e);var i=t(1),r=t(0),s=function(){return(s=Object.assign||function(x){for(var f,p=1,v=arguments.length;p<v;p++)for(var _ in f=arguments[p])Object.prototype.hasOwnProperty.call(f,_)&&(x[_]=f[_]);return x}).apply(this,arguments)},o=function(x,f){var p={};for(var v in x)Object.prototype.hasOwnProperty.call(x,v)&&f.indexOf(v)<0&&(p[v]=x[v]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function"){var _=0;for(v=Object.getOwnPropertySymbols(x);_<v.length;_++)f.indexOf(v[_])<0&&Object.prototype.propertyIsEnumerable.call(x,v[_])&&(p[v[_]]=x[v[_]])}return p},a=0,l=i.forwardRef(function(x,f){var p=x.title,v=p===void 0?null:p,_=x.description,g=_===void 0?null:_,y=x.size,w=y===void 0?null:y,A=x.color,T=A===void 0?"currentColor":A,S=x.horizontal,E=S===void 0?null:S,L=x.vertical,B=L===void 0?null:L,V=x.rotate,N=V===void 0?null:V,I=x.spin,H=I===void 0?null:I,K=x.style,Q=K===void 0?{}:K,R=x.children,G=o(x,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);a++;var U,ie=H!==null&&H,z=i.Children.map(R,function(le){var re=le;ie!==!0&&(ie=(H===null?re.props.spin:H)===!0);var fe=re.props.size;typeof w=="number"&&typeof re.props.size=="number"&&(fe=re.props.size/w);var pe={size:fe,color:T===null?re.props.color:T,horizontal:E===null?re.props.horizontal:E,vertical:B===null?re.props.vertical:B,rotate:N===null?re.props.rotate:N,spin:H===null?re.props.spin:H,inStack:!0};return i.cloneElement(re,pe)});w!==null&&(Q.width=typeof w=="string"?w:1.5*w+"rem");var J,ne="stack_labelledby_"+a,F="stack_describedby_"+a;if(v)U=g?ne+" "+F:ne;else if(J="presentation",g)throw new Error("title attribute required when description is set");return i.createElement("svg",s({ref:f,viewBox:"0 0 24 24",style:Q,role:J,"aria-labelledby":U},G),v&&i.createElement("title",{id:ne},v),g&&i.createElement("desc",{id:F},g),ie&&i.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),z)});l.displayName="Stack",l.propTypes={size:r.oneOfType([r.number,r.string]),color:r.string,horizontal:r.bool,vertical:r.bool,rotate:r.number,spin:r.oneOfType([r.bool,r.number]),children:r.oneOfType([r.arrayOf(r.node),r.node]).isRequired,className:r.string,style:r.object},l.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var u=l;t.d(e,"Icon",function(){return m}),t.d(e,"Stack",function(){return u});var c=function(){return(c=Object.assign||function(x){for(var f,p=1,v=arguments.length;p<v;p++)for(var _ in f=arguments[p])Object.prototype.hasOwnProperty.call(f,_)&&(x[_]=f[_]);return x}).apply(this,arguments)},h=function(x,f){var p={};for(var v in x)Object.prototype.hasOwnProperty.call(x,v)&&f.indexOf(v)<0&&(p[v]=x[v]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function"){var _=0;for(v=Object.getOwnPropertySymbols(x);_<v.length;_++)f.indexOf(v[_])<0&&Object.prototype.propertyIsEnumerable.call(x,v[_])&&(p[v[_]]=x[v[_]])}return p},d=0,m=i.forwardRef(function(x,f){var p=x.path,v=x.id,_=v===void 0?++d:v,g=x.title,y=g===void 0?null:g,w=x.description,A=w===void 0?null:w,T=x.size,S=T===void 0?null:T,E=x.color,L=E===void 0?"currentColor":E,B=x.horizontal,V=B!==void 0&&B,N=x.vertical,I=N!==void 0&&N,H=x.rotate,K=H===void 0?0:H,Q=x.spin,R=Q!==void 0&&Q,G=x.style,U=G===void 0?{}:G,ie=x.inStack,z=ie!==void 0&&ie,J=h(x,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),ne={},F=[];S!==null&&(z?F.push("scale("+S+")"):(U.width=typeof S=="string"?S:1.5*S+"rem",U.height=U.width)),V&&F.push("scaleX(-1)"),I&&F.push("scaleY(-1)"),K!==0&&F.push("rotate("+K+"deg)"),L!==null&&(ne.fill=L);var le=i.createElement("path",c({d:p,style:ne},z?J:{})),re=le;F.length>0&&(U.transform=F.join(" "),U.transformOrigin="center",z&&(re=i.createElement("g",{style:U},le,i.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var fe,pe=re,Se=R===!0||typeof R!="number"?2:R,be=!z&&(V||I);if(Se<0&&(be=!be),R&&(pe=i.createElement("g",{style:{animation:"spin"+(be?"-inverse":"")+" linear "+Math.abs(Se)+"s infinite",transformOrigin:"center"}},re,!(V||I||K!==0)&&i.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),z)return pe;var Ae,Re="icon_labelledby_"+_,gt="icon_describedby_"+_;if(y)fe=A?Re+" "+gt:Re;else if(Ae="presentation",A)throw new Error("title attribute required when description is set");return i.createElement("svg",c({ref:f,viewBox:"0 0 24 24",style:U,role:Ae,"aria-labelledby":fe},J),y&&i.createElement("title",{id:Re},y),A&&i.createElement("desc",{id:gt},A),!z&&R&&(be?i.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):i.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),pe)});m.displayName="Icon",m.propTypes={path:r.string.isRequired,size:r.oneOfType([r.number,r.string]),color:r.string,horizontal:r.bool,vertical:r.bool,rotate:r.number,spin:r.oneOfType([r.bool,r.number]),style:r.object,inStack:r.bool,className:r.string},m.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},e.default=m}]);function Qs(n,e,t){return{x:e.x+t*Math.cos(dm(n)),y:e.y+t*Math.sin(dm(n))}}function dm(n){return n*(Math.PI/180)}function B2(n){const[e,t]=Ue.useState(0);n.innerRadius;let i=n.outerRadius,r=10,s=i+r,o=i+r,a=0;return Ge(Sm,{children:gi("div",{className:"fixed rounded-full overflow-hidden pointer-events-none relative",style:{width:(i+r)*2,height:(i+r)*2},children:[Ge("svg",{className:"w-full h-full pointer-events-none absolute z-30",children:(()=>{let l=[];for(let u=0;u<n.data.length;u++){n.data[u];let c=2;const h=360/n.data.length*u+(u==e?-c:0)+a,d=360/n.data.length*(u+1)+(u==e?c:0)+a;let m=n.innerRadius+(u==e?-c:0),x=n.outerRadius+(u==e?c:0);const f=Qs(h,{x:s,y:o},x),p=Qs(d,{x:s,y:o},x),v=Qs(h,{x:s,y:o},m),_=Qs(d,{x:s,y:o},m);let g="";g+=`M ${f.x},${f.y}`,g+=`L ${v.x},${v.y}`,g+=`A ${m} ${m} 0 0 1 ${_.x},${_.y}`,g+=`L ${_.x},${_.y}`,g+=`L ${p.x},${p.y}`,g+=`A ${x} ${x} 0 0 0 ${f.x},${f.y}`,g+=`L ${f.x},${f.y}`,g+="Z";let y=Ge("path",{d:g,fill:"none",onClick:()=>{t(u),n.setEditType(n.data[u].editType)},strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:u==e?4:2,className:`${e==u?"fill-zinc-900 stroke-zinc-900":"fill-white stroke-gray-200"} transition-colors duration-150 pointer-events-auto cursor-pointer z-30`},u);u==e?l.push(y):l.unshift(y)}return l})()}),(()=>{let l=[];for(let u=0;u<n.data.length;u++){const c=360/n.data.length*u+a,h=360/n.data.length*(u+1)+a;let d=1,m=n.innerRadius+(u==e?-d:0),x=n.outerRadius+(u==e?d:0);const f=Qs((c+h)/2,{x:s,y:o},(x+m)/2);let p=Ge("div",{className:` ${e==u?"text-white":"text-zinc-900"} pointer-events-none absolute top-0 flex flex-col items-center justify-center select-none  `,style:{zIndex:1e6,left:f.x,top:f.y,transform:"translate(-50%, -50%)"},children:Ge(U2,{path:n.data[u].icon,size:.7,className:"pointer-events-none select-none"},u)},u);u==e?l.push(p):l.unshift(p)}return l})()]})})}function Va(n,e,t){return(n-e.min)*(t.max-t.min)/(e.max-e.min)+t.min}function V2(n){const[i,r]=Ue.useState(void 0),[s,o]=Ue.useState(!1),[a,l]=Ue.useState([5,20,30]),[u,c]=Ue.useState(0);Ue.useEffect(()=>{n.changeDrawWidthCallback(Math.max(1,Math.min(a[u],30)))},[a,u]);const h=Ue.useRef(null),d=Ue.useRef(null),m=(x,f)=>{const p=h.current.getBoundingClientRect(),v=d.current.getBoundingClientRect();let _=-v.width/2,g=p.width-v.width/2;const y=Va(x,{min:1,max:30},{min:_,max:g}),w=[...a];w[f]=Math.round(x),l(w),r(y)};return Ue.useEffect(()=>{m(a[u],u)},[]),Ue.useEffect(()=>{var g;let x=!1;const f=y=>{const w=h.current.getBoundingClientRect(),A=d.current.getBoundingClientRect();let T=y.clientX-w.left,S=-A.width/2,E=w.width-A.width/2;T=Math.max(S,Math.min(T-A.width/2,E)),r(T);let L=Va(T,{min:S,max:E},{min:0,max:1}),B=Va(L,{min:0,max:1},{min:1,max:30});const V=[...a];V[u]=Math.round(B),l(V)},p=y=>{y.preventDefault(),o(!0),x=!0,f(y)},v=y=>{y.preventDefault(),x&&f(y)},_=()=>{x&&(x=!1,o(!1))};return(g=h.current)==null||g.addEventListener("mousedown",p),window.addEventListener("mousemove",v),window.addEventListener("mouseup",_),()=>{var y;(y=h.current)==null||y.removeEventListener("mousedown",p),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",_)}},[h,u]),gi("div",{className:"w-full h-auto flex flex-col",children:[Ge("div",{className:"h-auto w-full flex flex-row items-center justify-center my-2",children:a.map((x,f)=>Ge("p",{className:`${u==f?"bg-zinc-900 text-white border-2 border-zinc-900":"text-zinc-900 bg-white border-2 border-zinc-200"} px-2 py-0.5 rounded-sm w-11 flex flex-row items-center justify-center mx-1 cursor-pointer transition-color duration-150`,onClick:()=>{c(f),m(a[f],f)},children:a[f]},f))}),Ge("div",{className:"w-full h-auto flex items-center justify-center p-1 pointer-events-auto select-none",children:gi("div",{className:"w-full h-4 bg-transparent select-none rounded-sm relative",ref:h,children:[Ge("div",{className:"h-0.5 w-full bg-zinc-900 absolute top-1/2 -translate-y-1/2 "}),a.map((x,f)=>Ge("div",{className:"h-2 w-0.5 bg-zinc-900 absolute top-1/2 -translate-y-1/2 -translate-x-1/2",style:{left:Va(x,{min:1,max:30},{min:0,max:100})+"%"}},f)),Ge("div",{ref:d,className:"h-4 w-4 absolute relative top-1/2 -translate-y-1/2 rounded-full cursor-pointer select-none"+(s?" bg-cyan-500":" bg-white border border-zinc-900"),style:i==null?{transform:"translate(-50%, -50%)"}:{left:i+"px"}})]})})]})}function Xr(n,e,t){return(n-e.min)*(t.max-t.min)/(e.max-e.min)+t.min}function G2(n){const[e,t]=Ue.useState("#55ddff");Ue.useEffect(()=>{n.changeColorCallback(e)},[e]);const[i,r]=Ue.useState(!1),s=Ue.useRef(null),o=[];Ue.useEffect(()=>{window.addEventListener("mousedown",l=>{if(s.current!=null){let u=!1,c=l.target;for(c==s.current&&(u=!0);c.parentElement!=null;)c=c.parentElement,c==s.current&&(u=!0);u||r(!1)}}),window.addEventListener("touchstart",l=>{if(s.current!=null){let u=!1,c=l.target;for(c==s.current&&(u=!0);c.parentElement!=null;)c=c.parentElement,c==s.current&&(u=!0);u||r(!1)}})},[]);const a=10;for(let l=1;l<a;l++){const u=[];for(let h=0;h<=10;h++){const d=`hsl(${Xr(h,{min:0,max:10},{min:0,max:360})}, 100%, ${Xr(l,{min:0,max:a},{min:0,max:100})}% )`,m=`hsl(${Xr(h,{min:0,max:10},{min:0,max:360})}, 50%, ${Xr(l,{min:0,max:a},{min:100,max:0})}% )`;u.push(Ge("div",{className:"w-5 h-5 hover:scale-150 hover:shadow-sm hover:border m-1 rounded-full shadow-md ",style:{backgroundColor:d,borderColor:m},onClick:()=>{t(d)}},"CRI"+l+h))}o.push(Ge("div",{className:"w-auto h-auto flex",children:u},"CR"+l))}{const l=[];for(let c=0;c<=10;c++){const h=`hsl(0, 0%, ${Xr(c,{min:0,max:10},{min:0,max:100})}%)`,d=`hsl(0, 0%, ${Xr(c,{min:0,max:10},{min:100,max:0})}%)`;l.push(Ge("div",{className:"w-5 h-5 hover:scale-150 hover:shadow-sm hover:border m-1 rounded-full shadow-md",style:{backgroundColor:h,borderColor:d},onClick:()=>{t(h)}},"CRI"+c))}o.push(Ge("div",{className:"w-auto h-auto flex",children:l},-1))}return gi("div",{className:"w-auto h-auto flex items-center justify-center p-1",ref:s,children:[Ge("div",{className:"w-7 h-7 rounded-full cursor-pointer",style:{backgroundColor:e},onClick:()=>{r(!i)}}),gi("div",{className:"flex flex-col items-center justify-center h-auto w-full bg-white fixed bottom-0 left-0 rounded-sm shadow-xl pb-5 "+(i?"":"hidden"),style:{zIndex:500},children:[gi("div",{className:"w-full h-auto flex items-center justify-center p-3 relative border-b border-zinc-300 ",children:[Ge("p",{className:"text-xl text-zinc-900",children:"Color Picker"}),Ge("p",{className:"absolute right-0 p-3 text-blue-500 cursor-pointer",onClick:()=>{r(!i)},children:"done"})]}),Ge("div",{className:"w-min h-auto p-3 flex flex-col items-center justify-center",children:Ge("div",{className:"w-auto h-auto flex flex-col",children:o})})]})]})}function W2(){const n=Ue.useRef(null);Ue.useState(!1);const[e,t]=Ue.useState(Ke.Pen),[i,r]=Ue.useState(ei.Line),[s,o]=Ue.useState("#ff0000"),[a,l]=Ue.useState(yd.Dots),[u,c]=Ue.useState(0);return Ue.useEffect(()=>{n.current!=null&&(n.current.changeEditType(e),n.current.changeShapeType(i),n.current.changeDrawSize(u),n.current.changeColor(s),n.current.changeGridType(a))},[e,i,u,s,a]),gi("div",{className:"App",children:[gi("div",{className:"fixed z-30 mt-2 p-4 flex flex-col items-center justify-center",children:[gi("div",{className:"h-auto w-auto flex items-center justify-center",children:[Ge(B2,{innerRadius:28,outerRadius:60,posX:80,posY:150,data:[{icon:z2,editType:Ke.Pen},{icon:C2,editType:Ke.Eraser},{icon:R2,editType:Ke.Select},{icon:I2,editType:Ke.Shape},{icon:D2,editType:Ke.FountainPen}],setEditType:h=>t(h)}),Ge("div",{className:"absolute w-8 h-8 flex items-center justify-center",children:Ge(G2,{changeColorCallback:h=>o(h)})})]}),Ge(V2,{changeDrawWidthCallback:h=>c(h)})]}),Ge(L2,{ref:n})]})}mc.createRoot(document.getElementById("root")).render(Ge(W2,{}));
