var cx=Object.defineProperty;var fx=(t,e,n)=>e in t?cx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var gt=(t,e,n)=>(fx(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Xm={exports:{}},Xl={},jm={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),dx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),px=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),xx=Symbol.for("react.forward_ref"),_x=Symbol.for("react.suspense"),yx=Symbol.for("react.memo"),Sx=Symbol.for("react.lazy"),Zd=Symbol.iterator;function Mx(t){return t===null||typeof t!="object"?null:(t=Zd&&t[Zd]||t["@@iterator"],typeof t=="function"?t:null)}var Ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,$m={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Ym}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Km(){}Km.prototype=Gs.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Ym}var Bf=zf.prototype=new Km;Bf.constructor=zf;qm(Bf,Gs.prototype);Bf.isPureReactComponent=!0;var Jd=Array.isArray,Zm=Object.prototype.hasOwnProperty,kf={current:null},Jm={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zm.call(e,i)&&!Jm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Zo,type:t,key:s,ref:o,props:r,_owner:kf.current}}function wx(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function Ex(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qd=/\/+/g;function xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ex(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case dx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xu(o,0):i,Jd(r)?(n="",t!=null&&(n=t.replace(Qd,"$&/")+"/"),el(r,e,n,"",function(u){return u})):r!=null&&(Hf(r)&&(r=wx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xu(s,a);o+=el(s,e,n,l,r)}else if(l=Mx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xu(s,a++),o+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Tx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},tl={transition:null},Ax={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:tl,ReactCurrentOwner:kf};He.Children={map:ua,forEach:function(t,e,n){ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ua(t,function(){e++}),e},toArray:function(t){return ua(t,function(e){return e})||[]},only:function(t){if(!Hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Gs;He.Fragment=hx;He.Profiler=mx;He.PureComponent=zf;He.StrictMode=px;He.Suspense=_x;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=qm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zm.call(e,l)&&!Jm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Zo,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:vx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gx,_context:t},t.Consumer=t};He.createElement=Qm;He.createFactory=function(t){var e=Qm.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:xx,render:t}};He.isValidElement=Hf;He.lazy=function(t){return{$$typeof:Sx,_payload:{_status:-1,_result:t},_init:Tx}};He.memo=function(t,e){return{$$typeof:yx,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};He.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};He.useCallback=function(t,e){return Qt.current.useCallback(t,e)};He.useContext=function(t){return Qt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Qt.current.useEffect(t,e)};He.useId=function(){return Qt.current.useId()};He.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Qt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};He.useRef=function(t){return Qt.current.useRef(t)};He.useState=function(t){return Qt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Qt.current.useTransition()};He.version="18.2.0";jm.exports=He;var be=jm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=be,Rx=Symbol.for("react.element"),Px=Symbol.for("react.fragment"),bx=Object.prototype.hasOwnProperty,Lx=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dx={key:!0,ref:!0,__self:!0,__source:!0};function eg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)bx.call(e,i)&&!Dx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Rx,type:t,key:s,ref:o,props:r,_owner:Lx.current}}Xl.Fragment=Px;Xl.jsx=eg;Xl.jsxs=eg;Xm.exports=Xl;var Z=Xm.exports,Ec={},tg={exports:{}},yn={},ng={exports:{}},ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,B){var G=U.length;U.push(B);e:for(;0<G;){var se=G-1>>>1,I=U[se];if(0<r(I,B))U[se]=B,U[G]=I,G=se;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var B=U[0],G=U.pop();if(G!==B){U[0]=G;e:for(var se=0,I=U.length,Q=I>>>1;se<Q;){var J=2*(se+1)-1,he=U[J],de=J+1,xe=U[de];if(0>r(he,G))de<I&&0>r(xe,he)?(U[se]=xe,U[de]=G,se=de):(U[se]=he,U[J]=G,se=J);else if(de<I&&0>r(xe,G))U[se]=xe,U[de]=G,se=de;else break e}}return B}function r(U,B){var G=U.sortIndex-B.sortIndex;return G!==0?G:U.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=U)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function y(U){if(x=!1,g(U),!v)if(n(l)!==null)v=!0,ne(M);else{var B=n(u);B!==null&&q(y,B.startTime-U)}}function M(U,B){v=!1,x&&(x=!1,h(b),b=-1),p=!0;var G=d;try{for(g(B),f=n(l);f!==null&&(!(f.expirationTime>B)||U&&!H());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var I=se(f.expirationTime<=B);B=t.unstable_now(),typeof I=="function"?f.callback=I:f===n(l)&&i(l),g(B)}else i(l);f=n(l)}if(f!==null)var Q=!0;else{var J=n(u);J!==null&&q(y,J.startTime-B),Q=!1}return Q}finally{f=null,d=G,p=!1}}var E=!1,R=null,b=-1,w=5,C=-1;function H(){return!(t.unstable_now()-C<w)}function ee(){if(R!==null){var U=t.unstable_now();C=U;var B=!0;try{B=R(!0,U)}finally{B?O():(E=!1,R=null)}}else E=!1}var O;if(typeof _=="function")O=function(){_(ee)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,W=V.port2;V.port1.onmessage=ee,O=function(){W.postMessage(null)}}else O=function(){m(ee,0)};function ne(U){R=U,E||(E=!0,O())}function q(U,B){b=m(function(){U(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,ne(M))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var G=d;d=B;try{return U()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var G=d;d=U;try{return B()}finally{d=G}},t.unstable_scheduleCallback=function(U,B,G){var se=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?se+G:se):G=se,U){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=G+I,U={id:c++,callback:B,priorityLevel:U,startTime:G,expirationTime:I,sortIndex:-1},G>se?(U.sortIndex=G,e(u,U),n(l)===null&&U===n(u)&&(x?(h(b),b=-1):x=!0,q(y,G-se))):(U.sortIndex=I,e(l,U),v||p||(v=!0,ne(M))),U},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(U){var B=d;return function(){var G=d;d=B;try{return U.apply(this,arguments)}finally{d=G}}}})(ig);ng.exports=ig;var Ux=ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg=be,xn=Ux;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sg=new Set,Ro={};function kr(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(Ro[t]=e,t=0;t<e.length;t++)sg.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=Object.prototype.hasOwnProperty,Nx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eh={},th={};function Ix(t){return Tc.call(th,t)?!0:Tc.call(eh,t)?!1:Nx.test(t)?th[t]=!0:(eh[t]=!0,!1)}function Fx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ox(t,e,n,i){if(e===null||typeof e>"u"||Fx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gf,Vf);Ot[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gf,Vf);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gf,Vf);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wf(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ox(e,n,r,i)&&(n=null),i||r===null?Ix(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),ag=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Rc=Symbol.for("react.suspense_list"),Yf=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),nh=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=nh&&t[nh]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,_u;function ao(t){if(_u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_u=e&&e[1]||""}return`
`+_u+t}var yu=!1;function Su(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function zx(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=Su(t.type,!1),t;case 11:return t=Su(t.type.render,!1),t;case 1:return t=Su(t.type,!0),t;default:return""}}function Pc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case Ac:return"Profiler";case Xf:return"StrictMode";case Cc:return"Suspense";case Rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ag:return(t.displayName||"Context")+".Consumer";case og:return(t._context.displayName||"Context")+".Provider";case jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yf:return e=t.displayName||null,e!==null?e:Pc(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return Pc(t(e))}catch{}}return null}function Bx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pc(e);case 8:return e===Xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ug(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kx(t){var e=ug(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=kx(t))}function cg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ug(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bc(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ih(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fg(t,e){e=e.checked,e!=null&&Wf(t,"checked",e,!1)}function Lc(t,e){fg(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dc(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(lo(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function dg(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,pg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hx=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){Hx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gx=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ic(t,e){if(e){if(Gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oc=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zc=null,Es=null,Ts=null;function ah(t){if(t=ea(t)){if(typeof zc!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Kl(e),zc(t.stateNode,t.type,e))}}function vg(t){Es?Ts?Ts.push(t):Ts=[t]:Es=t}function xg(){if(Es){var t=Es,e=Ts;if(Ts=Es=null,ah(t),e)for(t=0;t<e.length;t++)ah(e[t])}}function _g(t,e){return t(e)}function yg(){}var Mu=!1;function Sg(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return _g(t,e,n)}finally{Mu=!1,(Es!==null||Ts!==null)&&(yg(),xg())}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Bc=!1;if(wi)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Bc=!1}function Vx(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var mo=!1,ml=null,gl=!1,kc=null,Wx={onError:function(t){mo=!0,ml=t}};function Xx(t,e,n,i,r,s,o,a,l){mo=!1,ml=null,Vx.apply(Wx,arguments)}function jx(t,e,n,i,r,s,o,a,l){if(Xx.apply(this,arguments),mo){if(mo){var u=ml;mo=!1,ml=null}else throw Error(te(198));gl||(gl=!0,kc=u)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lh(t){if(Hr(t)!==t)throw Error(te(188))}function Yx(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return lh(r),t;if(s===i)return lh(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function wg(t){return t=Yx(t),t!==null?Eg(t):null}function Eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Eg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=xn.unstable_scheduleCallback,uh=xn.unstable_cancelCallback,qx=xn.unstable_shouldYield,$x=xn.unstable_requestPaint,ct=xn.unstable_now,Kx=xn.unstable_getCurrentPriorityLevel,$f=xn.unstable_ImmediatePriority,Ag=xn.unstable_UserBlockingPriority,vl=xn.unstable_NormalPriority,Zx=xn.unstable_LowPriority,Cg=xn.unstable_IdlePriority,jl=null,ti=null;function Jx(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:t_,Qx=Math.log,e_=Math.LN2;function t_(t){return t>>>=0,t===0?32:31-(Qx(t)/e_|0)|0}var ha=64,pa=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=uo(a):(s&=o,s!==0&&(i=uo(s)))}else o=n&~r,o!==0?i=uo(o):s!==0&&(i=uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function n_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=n_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rg(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function wu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function r_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ye=0;function Pg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bg,Zf,Lg,Dg,Ug,Gc=!1,ma=[],Xi=null,ji=null,Yi=null,Lo=new Map,Do=new Map,zi=[],s_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(e.pointerId)}}function Zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ea(e),e!==null&&Zf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function o_(t,e,n,i,r){switch(e){case"focusin":return Xi=Zs(Xi,t,e,n,i,r),!0;case"dragenter":return ji=Zs(ji,t,e,n,i,r),!0;case"mouseover":return Yi=Zs(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Lo.set(s,Zs(Lo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Do.set(s,Zs(Do.get(s)||null,t,e,n,i,r)),!0}return!1}function Ng(t){var e=Mr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=Mg(n),e!==null){t.blockedOn=e,Ug(t.priority,function(){Lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Oc=i,n.target.dispatchEvent(i),Oc=null}else return e=ea(n),e!==null&&Zf(e),t.blockedOn=n,!1;e.shift()}return!0}function fh(t,e,n){nl(t)&&n.delete(e)}function a_(){Gc=!1,Xi!==null&&nl(Xi)&&(Xi=null),ji!==null&&nl(ji)&&(ji=null),Yi!==null&&nl(Yi)&&(Yi=null),Lo.forEach(fh),Do.forEach(fh)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Gc||(Gc=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,a_)))}function Uo(t){function e(r){return Js(r,t)}if(0<ma.length){Js(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&Js(Xi,t),ji!==null&&Js(ji,t),Yi!==null&&Js(Yi,t),Lo.forEach(e),Do.forEach(e),n=0;n<zi.length;n++)i=zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<zi.length&&(n=zi[0],n.blockedOn===null);)Ng(n),n.blockedOn===null&&zi.shift()}var As=bi.ReactCurrentBatchConfig,_l=!0;function l_(t,e,n,i){var r=Ye,s=As.transition;As.transition=null;try{Ye=1,Jf(t,e,n,i)}finally{Ye=r,As.transition=s}}function u_(t,e,n,i){var r=Ye,s=As.transition;As.transition=null;try{Ye=4,Jf(t,e,n,i)}finally{Ye=r,As.transition=s}}function Jf(t,e,n,i){if(_l){var r=Vc(t,e,n,i);if(r===null)Uu(t,e,i,yl,n),ch(t,i);else if(o_(r,t,e,n,i))i.stopPropagation();else if(ch(t,i),e&4&&-1<s_.indexOf(t)){for(;r!==null;){var s=ea(r);if(s!==null&&bg(s),s=Vc(t,e,n,i),s===null&&Uu(t,e,i,yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uu(t,e,i,null,n)}}var yl=null;function Vc(t,e,n,i){if(yl=null,t=qf(i),t=Mr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function Ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kx()){case $f:return 1;case Ag:return 4;case vl:case Zx:return 16;case Cg:return 536870912;default:return 16}default:return 16}}var ki=null,Qf=null,il=null;function Fg(){if(il)return il;var t,e=Qf,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function dh(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:dh,this.isPropagationStopped=dh,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=Sn(Vs),Qo=st({},Vs,{view:0,detail:0}),c_=Sn(Qo),Eu,Tu,Qs,Yl=st({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Eu=t.screenX-Qs.screenX,Tu=t.screenY-Qs.screenY):Tu=Eu=0,Qs=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),hh=Sn(Yl),f_=st({},Yl,{dataTransfer:0}),d_=Sn(f_),h_=st({},Qo,{relatedTarget:0}),Au=Sn(h_),p_=st({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),m_=Sn(p_),g_=st({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v_=Sn(g_),x_=st({},Vs,{data:0}),ph=Sn(x_),__={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S_[t])?!!e[t]:!1}function td(){return M_}var w_=st({},Qo,{key:function(t){if(t.key){var e=__[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:td,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E_=Sn(w_),T_=st({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=Sn(T_),A_=st({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:td}),C_=Sn(A_),R_=st({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),P_=Sn(R_),b_=st({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L_=Sn(b_),D_=[9,13,27,32],nd=wi&&"CompositionEvent"in window,go=null;wi&&"documentMode"in document&&(go=document.documentMode);var U_=wi&&"TextEvent"in window&&!go,Og=wi&&(!nd||go&&8<go&&11>=go),gh=String.fromCharCode(32),vh=!1;function zg(t,e){switch(t){case"keyup":return D_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function N_(t,e){switch(t){case"compositionend":return Bg(e);case"keypress":return e.which!==32?null:(vh=!0,gh);case"textInput":return t=e.data,t===gh&&vh?null:t;default:return null}}function I_(t,e){if(cs)return t==="compositionend"||!nd&&zg(t,e)?(t=Fg(),il=Qf=ki=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Og&&e.locale!=="ko"?null:e.data;default:return null}}var F_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F_[t.type]:e==="textarea"}function kg(t,e,n,i){vg(i),e=Sl(e,"onChange"),0<e.length&&(n=new ed("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var vo=null,No=null;function O_(t){Zg(t,0)}function ql(t){var e=hs(t);if(cg(e))return t}function z_(t,e){if(t==="change")return e}var Hg=!1;if(wi){var Cu;if(wi){var Ru="oninput"in document;if(!Ru){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),Ru=typeof _h.oninput=="function"}Cu=Ru}else Cu=!1;Hg=Cu&&(!document.documentMode||9<document.documentMode)}function yh(){vo&&(vo.detachEvent("onpropertychange",Gg),No=vo=null)}function Gg(t){if(t.propertyName==="value"&&ql(No)){var e=[];kg(e,No,t,qf(t)),Sg(O_,e)}}function B_(t,e,n){t==="focusin"?(yh(),vo=e,No=n,vo.attachEvent("onpropertychange",Gg)):t==="focusout"&&yh()}function k_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(No)}function H_(t,e){if(t==="click")return ql(e)}function G_(t,e){if(t==="input"||t==="change")return ql(e)}function V_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:V_;function Io(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tc.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Sh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mh(t,e){var n=Sh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sh(n)}}function Vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wg(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W_(t){var e=Wg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vg(n.ownerDocument.documentElement,n)){if(i!==null&&id(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Mh(n,s);var o=Mh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X_=wi&&"documentMode"in document&&11>=document.documentMode,fs=null,Wc=null,xo=null,Xc=!1;function wh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||fs==null||fs!==pl(i)||(i=fs,"selectionStart"in i&&id(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xo&&Io(xo,i)||(xo=i,i=Sl(Wc,"onSelect"),0<i.length&&(e=new ed("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Pu={},Xg={};wi&&(Xg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function $l(t){if(Pu[t])return Pu[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xg)return Pu[t]=e[n];return t}var jg=$l("animationend"),Yg=$l("animationiteration"),qg=$l("animationstart"),$g=$l("transitionend"),Kg=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){Kg.set(t,e),kr(e,[t])}for(var bu=0;bu<Eh.length;bu++){var Lu=Eh[bu],j_=Lu.toLowerCase(),Y_=Lu[0].toUpperCase()+Lu.slice(1);sr(j_,"on"+Y_)}sr(jg,"onAnimationEnd");sr(Yg,"onAnimationIteration");sr(qg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr($g,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q_=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Th(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jx(i,e,void 0,t),t.currentTarget=null}function Zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Th(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Th(r,a,u),s=l}}}if(gl)throw t=kc,gl=!1,kc=null,t}function Qe(t,e){var n=e[Kc];n===void 0&&(n=e[Kc]=new Set);var i=t+"__bubble";n.has(i)||(Jg(e,t,2,!1),n.add(i))}function Du(t,e,n){var i=0;e&&(i|=4),Jg(n,t,i,e)}var xa="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[xa]){t[xa]=!0,sg.forEach(function(n){n!=="selectionchange"&&(q_.has(n)||Du(n,!1,t),Du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xa]||(e[xa]=!0,Du("selectionchange",!1,e))}}function Jg(t,e,n,i){switch(Ig(e)){case 1:var r=l_;break;case 4:r=u_;break;default:r=Jf}n=r.bind(null,e,n,t),r=void 0,!Bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Sg(function(){var u=s,c=qf(n),f=[];e:{var d=Kg.get(t);if(d!==void 0){var p=ed,v=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":p=E_;break;case"focusin":v="focus",p=Au;break;case"focusout":v="blur",p=Au;break;case"beforeblur":case"afterblur":p=Au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=d_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=C_;break;case jg:case Yg:case qg:p=m_;break;case $g:p=P_;break;case"scroll":p=c_;break;case"wheel":p=L_;break;case"copy":case"cut":case"paste":p=v_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=mh}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var _=u,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,h!==null&&(y=bo(_,h),y!=null&&x.push(Oo(_,y,g)))),m)break;_=_.return}0<x.length&&(d=new p(d,v,null,n,c),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Oc&&(v=n.relatedTarget||n.fromElement)&&(Mr(v)||v[Ei]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Mr(v):null,v!==null&&(m=Hr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=hh,y="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=mh,y="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?d:hs(p),g=v==null?d:hs(v),d=new x(y,_+"leave",p,n,c),d.target=m,d.relatedTarget=g,y=null,Mr(c)===u&&(x=new x(h,_+"enter",v,n,c),x.target=g,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,h=v,_=0,g=x;g;g=Gr(g))_++;for(g=0,y=h;y;y=Gr(y))g++;for(;0<_-g;)x=Gr(x),_--;for(;0<g-_;)h=Gr(h),g--;for(;_--;){if(x===h||h!==null&&x===h.alternate)break t;x=Gr(x),h=Gr(h)}x=null}else x=null;p!==null&&Ah(f,d,p,x,!1),v!==null&&m!==null&&Ah(f,m,v,x,!0)}}e:{if(d=u?hs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var M=z_;else if(xh(d))if(Hg)M=G_;else{M=k_;var E=B_}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=H_);if(M&&(M=M(t,u))){kg(f,M,n,c);break e}E&&E(t,d,u),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Dc(d,"number",d.value)}switch(E=u?hs(u):window,t){case"focusin":(xh(E)||E.contentEditable==="true")&&(fs=E,Wc=u,xo=null);break;case"focusout":xo=Wc=fs=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,wh(f,n,c);break;case"selectionchange":if(X_)break;case"keydown":case"keyup":wh(f,n,c)}var R;if(nd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else cs?zg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Og&&n.locale!=="ko"&&(cs||b!=="onCompositionStart"?b==="onCompositionEnd"&&cs&&(R=Fg()):(ki=c,Qf="value"in ki?ki.value:ki.textContent,cs=!0)),E=Sl(u,b),0<E.length&&(b=new ph(b,t,null,n,c),f.push({event:b,listeners:E}),R?b.data=R:(R=Bg(n),R!==null&&(b.data=R)))),(R=U_?N_(t,n):I_(t,n))&&(u=Sl(u,"onBeforeInput"),0<u.length&&(c=new ph("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=R))}Zg(f,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=bo(t,n),s!=null&&i.unshift(Oo(t,s,r)),s=bo(t,e),s!=null&&i.push(Oo(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ah(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=bo(n,s),l!=null&&o.unshift(Oo(n,l,a))):r||(l=bo(n,s),l!=null&&o.push(Oo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $_=/\r\n?/g,K_=/\u0000|\uFFFD/g;function Ch(t){return(typeof t=="string"?t:""+t).replace($_,`
`).replace(K_,"")}function _a(t,e,n){if(e=Ch(e),Ch(t)!==e&&n)throw Error(te(425))}function Ml(){}var jc=null,Yc=null;function qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,Z_=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,J_=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(t){return Rh.resolve(null).then(t).catch(Q_)}:$c;function Q_(t){setTimeout(function(){throw t})}function Nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Uo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Uo(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),ei="__reactFiber$"+Ws,zo="__reactProps$"+Ws,Ei="__reactContainer$"+Ws,Kc="__reactEvents$"+Ws,ey="__reactListeners$"+Ws,ty="__reactHandles$"+Ws;function Mr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ph(t);t!==null;){if(n=t[ei])return n;t=Ph(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[ei]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Kl(t){return t[zo]||null}var Zc=[],ps=-1;function or(t){return{current:t}}function et(t){0>ps||(t.current=Zc[ps],Zc[ps]=null,ps--)}function Ke(t,e){ps++,Zc[ps]=t.current,t.current=e}var nr={},Xt=or(nr),rn=or(!1),Dr=nr;function Ds(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function wl(){et(rn),et(Xt)}function bh(t,e,n){if(Xt.current!==nr)throw Error(te(168));Ke(Xt,e),Ke(rn,n)}function Qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Bx(t)||"Unknown",r));return st({},n,i)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Dr=Xt.current,Ke(Xt,t),Ke(rn,rn.current),!0}function Lh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Qg(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,et(rn),et(Xt),Ke(Xt,t)):et(rn),Ke(rn,n)}var pi=null,Zl=!1,Iu=!1;function e0(t){pi===null?pi=[t]:pi.push(t)}function ny(t){Zl=!0,e0(t)}function ar(){if(!Iu&&pi!==null){Iu=!0;var t=0,e=Ye;try{var n=pi;for(Ye=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pi=null,Zl=!1}catch(r){throw pi!==null&&(pi=pi.slice(t+1)),Tg($f,ar),r}finally{Ye=e,Iu=!1}}return null}var ms=[],gs=0,Tl=null,Al=0,wn=[],En=0,Ur=null,vi=1,xi="";function gr(t,e){ms[gs++]=Al,ms[gs++]=Tl,Tl=t,Al=e}function t0(t,e,n){wn[En++]=vi,wn[En++]=xi,wn[En++]=Ur,Ur=t;var i=vi;t=xi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,vi=1<<32-Wn(e)+r|n<<r|i,xi=s+t}else vi=1<<s|n<<r|i,xi=t}function rd(t){t.return!==null&&(gr(t,1),t0(t,1,0))}function sd(t){for(;t===Tl;)Tl=ms[--gs],ms[gs]=null,Al=ms[--gs],ms[gs]=null;for(;t===Ur;)Ur=wn[--En],wn[En]=null,xi=wn[--En],wn[En]=null,vi=wn[--En],wn[En]=null}var gn=null,mn=null,tt=!1,Bn=null;function n0(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:vi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Jc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qc(t){if(tt){var e=mn;if(e){var n=e;if(!Dh(t,e)){if(Jc(t))throw Error(te(418));e=qi(n.nextSibling);var i=gn;e&&Dh(t,e)?n0(i,n):(t.flags=t.flags&-4097|2,tt=!1,gn=t)}}else{if(Jc(t))throw Error(te(418));t.flags=t.flags&-4097|2,tt=!1,gn=t}}}function Uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function ya(t){if(t!==gn)return!1;if(!tt)return Uh(t),tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qc(t.type,t.memoizedProps)),e&&(e=mn)){if(Jc(t))throw i0(),Error(te(418));for(;e;)n0(t,e),e=qi(e.nextSibling)}if(Uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?qi(t.stateNode.nextSibling):null;return!0}function i0(){for(var t=mn;t;)t=qi(t.nextSibling)}function Us(){mn=gn=null,tt=!1}function od(t){Bn===null?Bn=[t]:Bn.push(t)}var iy=bi.ReactCurrentBatchConfig;function On(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cl=or(null),Rl=null,vs=null,ad=null;function ld(){ad=vs=Rl=null}function ud(t){var e=Cl.current;et(Cl),t._currentValue=e}function ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){Rl=t,ad=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(ad!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Rl===null)throw Error(te(308));vs=t,Rl.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var wr=null;function cd(t){wr===null?wr=[t]:wr.push(t)}function r0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,cd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kf(t,n)}}function Nh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=st({},f,d);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,t.lanes=o,t.memoizedState=f}}function Ih(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var o0=new rg.Component().refs;function tf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=Zi(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Xn(e,t,r,i),sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=Zi(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Xn(e,t,r,i),sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=Zi(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Xn(e,t,i,n),sl(e,t,i))}};function Fh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(n,i)||!Io(r,s):!0}function a0(t,e,n){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=sn(e)?Dr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Ds(t,r):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Oh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function nf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=o0,fd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=sn(e)?Dr:Xt.current,r.context=Ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===o0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zh(t){var e=t._init;return e(t._payload)}function l0(t){function e(h,_){if(t){var g=h.deletions;g===null?(h.deletions=[_],h.flags|=16):g.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Ji(h,_),h.index=0,h.sibling=null,h}function s(h,_,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<_?(h.flags|=2,_):g):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,g,y){return _===null||_.tag!==6?(_=Gu(g,h.mode,y),_.return=h,_):(_=r(_,g),_.return=h,_)}function l(h,_,g,y){var M=g.type;return M===us?c(h,_,g.props.children,y,g.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fi&&zh(M)===_.type)?(y=r(_,g.props),y.ref=eo(h,_,g),y.return=h,y):(y=fl(g.type,g.key,g.props,null,h.mode,y),y.ref=eo(h,_,g),y.return=h,y)}function u(h,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Vu(g,h.mode,y),_.return=h,_):(_=r(_,g.children||[]),_.return=h,_)}function c(h,_,g,y,M){return _===null||_.tag!==7?(_=Cr(g,h.mode,y,M),_.return=h,_):(_=r(_,g),_.return=h,_)}function f(h,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Gu(""+_,h.mode,g),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:return g=fl(_.type,_.key,_.props,null,h.mode,g),g.ref=eo(h,null,_),g.return=h,g;case ls:return _=Vu(_,h.mode,g),_.return=h,_;case Fi:var y=_._init;return f(h,y(_._payload),g)}if(lo(_)||$s(_))return _=Cr(_,h.mode,g,null),_.return=h,_;Sa(h,_)}return null}function d(h,_,g,y){var M=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return M!==null?null:a(h,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:return g.key===M?l(h,_,g,y):null;case ls:return g.key===M?u(h,_,g,y):null;case Fi:return M=g._init,d(h,_,M(g._payload),y)}if(lo(g)||$s(g))return M!==null?null:c(h,_,g,y,null);Sa(h,g)}return null}function p(h,_,g,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(g)||null,a(_,h,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ca:return h=h.get(y.key===null?g:y.key)||null,l(_,h,y,M);case ls:return h=h.get(y.key===null?g:y.key)||null,u(_,h,y,M);case Fi:var E=y._init;return p(h,_,g,E(y._payload),M)}if(lo(y)||$s(y))return h=h.get(g)||null,c(_,h,y,M,null);Sa(_,y)}return null}function v(h,_,g,y){for(var M=null,E=null,R=_,b=_=0,w=null;R!==null&&b<g.length;b++){R.index>b?(w=R,R=null):w=R.sibling;var C=d(h,R,g[b],y);if(C===null){R===null&&(R=w);break}t&&R&&C.alternate===null&&e(h,R),_=s(C,_,b),E===null?M=C:E.sibling=C,E=C,R=w}if(b===g.length)return n(h,R),tt&&gr(h,b),M;if(R===null){for(;b<g.length;b++)R=f(h,g[b],y),R!==null&&(_=s(R,_,b),E===null?M=R:E.sibling=R,E=R);return tt&&gr(h,b),M}for(R=i(h,R);b<g.length;b++)w=p(R,h,b,g[b],y),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?b:w.key),_=s(w,_,b),E===null?M=w:E.sibling=w,E=w);return t&&R.forEach(function(H){return e(h,H)}),tt&&gr(h,b),M}function x(h,_,g,y){var M=$s(g);if(typeof M!="function")throw Error(te(150));if(g=M.call(g),g==null)throw Error(te(151));for(var E=M=null,R=_,b=_=0,w=null,C=g.next();R!==null&&!C.done;b++,C=g.next()){R.index>b?(w=R,R=null):w=R.sibling;var H=d(h,R,C.value,y);if(H===null){R===null&&(R=w);break}t&&R&&H.alternate===null&&e(h,R),_=s(H,_,b),E===null?M=H:E.sibling=H,E=H,R=w}if(C.done)return n(h,R),tt&&gr(h,b),M;if(R===null){for(;!C.done;b++,C=g.next())C=f(h,C.value,y),C!==null&&(_=s(C,_,b),E===null?M=C:E.sibling=C,E=C);return tt&&gr(h,b),M}for(R=i(h,R);!C.done;b++,C=g.next())C=p(R,h,b,C.value,y),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?b:C.key),_=s(C,_,b),E===null?M=C:E.sibling=C,E=C);return t&&R.forEach(function(ee){return e(h,ee)}),tt&&gr(h,b),M}function m(h,_,g,y){if(typeof g=="object"&&g!==null&&g.type===us&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:e:{for(var M=g.key,E=_;E!==null;){if(E.key===M){if(M=g.type,M===us){if(E.tag===7){n(h,E.sibling),_=r(E,g.props.children),_.return=h,h=_;break e}}else if(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fi&&zh(M)===E.type){n(h,E.sibling),_=r(E,g.props),_.ref=eo(h,E,g),_.return=h,h=_;break e}n(h,E);break}else e(h,E);E=E.sibling}g.type===us?(_=Cr(g.props.children,h.mode,y,g.key),_.return=h,h=_):(y=fl(g.type,g.key,g.props,null,h.mode,y),y.ref=eo(h,_,g),y.return=h,h=y)}return o(h);case ls:e:{for(E=g.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(h,_.sibling),_=r(_,g.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Vu(g,h.mode,y),_.return=h,h=_}return o(h);case Fi:return E=g._init,m(h,_,E(g._payload),y)}if(lo(g))return v(h,_,g,y);if($s(g))return x(h,_,g,y);Sa(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,g),_.return=h,h=_):(n(h,_),_=Gu(g,h.mode,y),_.return=h,h=_),o(h)):n(h,_)}return m}var Ns=l0(!0),u0=l0(!1),ta={},ni=or(ta),Bo=or(ta),ko=or(ta);function Er(t){if(t===ta)throw Error(te(174));return t}function dd(t,e){switch(Ke(ko,e),Ke(Bo,t),Ke(ni,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nc(e,t)}et(ni),Ke(ni,e)}function Is(){et(ni),et(Bo),et(ko)}function c0(t){Er(ko.current);var e=Er(ni.current),n=Nc(e,t.type);e!==n&&(Ke(Bo,t),Ke(ni,n))}function hd(t){Bo.current===t&&(et(ni),et(Bo))}var nt=or(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function pd(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var ol=bi.ReactCurrentDispatcher,Ou=bi.ReactCurrentBatchConfig,Nr=0,rt=null,vt=null,Ct=null,Ll=!1,_o=!1,Ho=0,ry=0;function Bt(){throw Error(te(321))}function md(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function gd(t,e,n,i,r,s){if(Nr=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?ly:uy,t=n(i,r),_o){s=0;do{if(_o=!1,Ho=0,25<=s)throw Error(te(301));s+=1,Ct=vt=null,e.updateQueue=null,ol.current=cy,t=n(i,r)}while(_o)}if(ol.current=Dl,e=vt!==null&&vt.next!==null,Nr=0,Ct=vt=rt=null,Ll=!1,e)throw Error(te(300));return t}function vd(){var t=Ho!==0;return Ho=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?rt.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function bn(){if(vt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=Ct===null?rt.memoizedState:Ct.next;if(e!==null)Ct=e,vt=t;else{if(t===null)throw Error(te(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Ct===null?rt.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Go(t,e){return typeof e=="function"?e(t):e}function zu(t){var e=bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,rt.lanes|=c,Ir|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bu(t){var e=bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function f0(){}function d0(t,e){var n=rt,i=bn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,xd(m0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Vo(9,p0.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(te(349));Nr&30||h0(n,e,r)}return r}function h0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function p0(t,e,n,i){e.value=n,e.getSnapshot=i,g0(e)&&v0(t)}function m0(t,e,n){return n(function(){g0(e)&&v0(t)})}function g0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function v0(t){var e=Ti(t,1);e!==null&&Xn(e,t,1,-1)}function Bh(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=ay.bind(null,rt,t),[e.memoizedState,t]}function Vo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function x0(){return bn().memoizedState}function al(t,e,n,i){var r=Jn();rt.flags|=t,r.memoizedState=Vo(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,i!==null&&md(i,o.deps)){r.memoizedState=Vo(e,n,s,i);return}}rt.flags|=t,r.memoizedState=Vo(1|e,n,s,i)}function kh(t,e){return al(8390656,8,t,e)}function xd(t,e){return Ql(2048,8,t,e)}function _0(t,e){return Ql(4,2,t,e)}function y0(t,e){return Ql(4,4,t,e)}function S0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M0(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,S0.bind(null,e,t),n)}function _d(){}function w0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&md(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function E0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&md(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function T0(t,e,n){return Nr&21?(Yn(n,e)||(n=Rg(),rt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function sy(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var i=Ou.transition;Ou.transition={};try{t(!1),e()}finally{Ye=n,Ou.transition=i}}function A0(){return bn().memoizedState}function oy(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},C0(t))R0(e,n);else if(n=r0(t,e,n,i),n!==null){var r=Jt();Xn(n,t,i,r),P0(n,e,i)}}function ay(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(C0(t))R0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,cd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=r0(t,e,r,i),n!==null&&(r=Jt(),Xn(n,t,i,r),P0(n,e,i))}}function C0(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function R0(t,e){_o=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kf(t,n)}}var Dl={readContext:Pn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},ly={readContext:Pn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,S0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=oy.bind(null,rt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Bh,useDebugValue:_d,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Bh(!1),e=t[0];return t=sy.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rt,r=Jn();if(tt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Pt===null)throw Error(te(349));Nr&30||h0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,kh(m0.bind(null,i,s,t),[t]),i.flags|=2048,Vo(9,p0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Pt.identifierPrefix;if(tt){var n=xi,i=vi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ry++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uy={readContext:Pn,useCallback:w0,useContext:Pn,useEffect:xd,useImperativeHandle:M0,useInsertionEffect:_0,useLayoutEffect:y0,useMemo:E0,useReducer:zu,useRef:x0,useState:function(){return zu(Go)},useDebugValue:_d,useDeferredValue:function(t){var e=bn();return T0(e,vt.memoizedState,t)},useTransition:function(){var t=zu(Go)[0],e=bn().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:d0,useId:A0,unstable_isNewReconciler:!1},cy={readContext:Pn,useCallback:w0,useContext:Pn,useEffect:xd,useImperativeHandle:M0,useInsertionEffect:_0,useLayoutEffect:y0,useMemo:E0,useReducer:Bu,useRef:x0,useState:function(){return Bu(Go)},useDebugValue:_d,useDeferredValue:function(t){var e=bn();return vt===null?e.memoizedState=t:T0(e,vt.memoizedState,t)},useTransition:function(){var t=Bu(Go)[0],e=bn().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:d0,useId:A0,unstable_isNewReconciler:!1};function Fs(t,e){try{var n="",i=e;do n+=zx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ku(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function b0(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,pf=i),rf(t,e)},n}function L0(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rf(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ty.bind(null,t,e,n),e.then(t,t))}function Gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var dy=bi.ReactCurrentOwner,nn=!1;function $t(t,e,n,i){e.child=t===null?u0(e,null,n,i):Ns(e,t.child,n,i)}function Wh(t,e,n,i,r){n=n.render;var s=e.ref;return Cs(e,r),i=gd(t,e,n,i,s,r),n=vd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(tt&&n&&rd(e),e.flags|=1,$t(t,e,i,r),e.child)}function Xh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D0(t,e,s,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(o,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function D0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Io(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return sf(t,e,n,i,r)}function U0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(_s,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(_s,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ke(_s,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ke(_s,hn),hn|=i;return $t(t,e,r,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sf(t,e,n,i,r){var s=sn(n)?Dr:Xt.current;return s=Ds(e,s),Cs(e,r),n=gd(t,e,n,i,s,r),i=vd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(tt&&i&&rd(e),e.flags|=1,$t(t,e,n,r),e.child)}function jh(t,e,n,i,r){if(sn(n)){var s=!0;El(e)}else s=!1;if(Cs(e,r),e.stateNode===null)ll(t,e),a0(e,n,i),nf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=sn(n)?Dr:Xt.current,u=Ds(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Oh(e,o,i,u),Oi=!1;var d=e.memoizedState;o.state=d,Pl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||rn.current||Oi?(typeof c=="function"&&(tf(e,n,c,i),l=e.memoizedState),(a=Oi||Fh(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,s0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=sn(n)?Dr:Xt.current,l=Ds(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Oh(e,o,i,l),Oi=!1,d=e.memoizedState,o.state=d,Pl(e,i,o,r);var v=e.memoizedState;a!==f||d!==v||rn.current||Oi?(typeof p=="function"&&(tf(e,n,p,i),v=e.memoizedState),(u=Oi||Fh(e,n,u,i,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return of(t,e,n,i,s,r)}function of(t,e,n,i,r,s){N0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lh(e,n,!1),Ai(t,e,s);i=e.stateNode,dy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ns(e,t.child,null,s),e.child=Ns(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&Lh(e,n,!0),e.child}function I0(t){var e=t.stateNode;e.pendingContext?bh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bh(t,e.context,!1),dd(t,e.containerInfo)}function Yh(t,e,n,i,r){return Us(),od(r),e.flags|=256,$t(t,e,n,i),e.child}var af={dehydrated:null,treeContext:null,retryLane:0};function lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function F0(t,e,n){var i=e.pendingProps,r=nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ke(nt,r&1),t===null)return Qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lf(n),e.memoizedState=af,t):yd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?lf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=af,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yd(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&od(i),Ns(e,t.child,null,n),t=yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ku(Error(te(422))),Ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ns(e,t.child,null,o),e.child.memoizedState=lf(o),e.memoizedState=af,s);if(!(e.mode&1))return Ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=ku(s,i,void 0),Ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),Xn(i,t,r,-1))}return Ad(),i=ku(Error(te(421))),Ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ay.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=qi(r.nextSibling),gn=e,tt=!0,Bn=null,t!==null&&(wn[En++]=vi,wn[En++]=xi,wn[En++]=Ur,vi=t.id,xi=t.overflow,Ur=e),e=yd(e,i.children),e.flags|=4096,e)}function qh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ef(t.return,e,n)}function Hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function O0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=nt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,n,e);else if(t.tag===19)qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ke(nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hu(e,!0,n,null,s);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function py(t,e,n){switch(e.tag){case 3:I0(e),Us();break;case 5:c0(e);break;case 1:sn(e.type)&&El(e);break;case 4:dd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(Cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(nt,nt.current&1),e.flags|=128,null):n&e.child.childLanes?F0(t,e,n):(Ke(nt,nt.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);Ke(nt,nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return O0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(nt,nt.current),i)break;return null;case 22:case 23:return e.lanes=0,U0(t,e,n)}return Ai(t,e,n)}var z0,uf,B0,k0;z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uf=function(){};B0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ni.current);var s=null;switch(n){case"input":r=bc(t,r),i=bc(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=Uc(t,r),i=Uc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ml)}Ic(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ro.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Qe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};k0=function(t,e,n,i){n!==i&&(e.flags|=4)};function to(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function my(t,e,n){var i=e.pendingProps;switch(sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return sn(e.type)&&wl(),kt(e),null;case 3:return i=e.stateNode,Is(),et(rn),et(Xt),pd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(vf(Bn),Bn=null))),uf(t,e),kt(e),null;case 5:hd(e);var r=Er(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)B0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return kt(e),null}if(t=Er(ni.current),ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[zo]=s,t=(e.mode&1)!==0,n){case"dialog":Qe("cancel",i),Qe("close",i);break;case"iframe":case"object":case"embed":Qe("load",i);break;case"video":case"audio":for(r=0;r<co.length;r++)Qe(co[r],i);break;case"source":Qe("error",i);break;case"img":case"image":case"link":Qe("error",i),Qe("load",i);break;case"details":Qe("toggle",i);break;case"input":ih(i,s),Qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Qe("invalid",i);break;case"textarea":sh(i,s),Qe("invalid",i)}Ic(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",""+a]):Ro.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Qe("scroll",i)}switch(n){case"input":fa(i),rh(i,s,!0);break;case"textarea":fa(i),oh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[zo]=i,z0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fc(n,i),n){case"dialog":Qe("cancel",t),Qe("close",t),r=i;break;case"iframe":case"object":case"embed":Qe("load",t),r=i;break;case"video":case"audio":for(r=0;r<co.length;r++)Qe(co[r],t);r=i;break;case"source":Qe("error",t),r=i;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),r=i;break;case"details":Qe("toggle",t),r=i;break;case"input":ih(t,i),r=bc(t,i),Qe("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),Qe("invalid",t);break;case"textarea":sh(t,i),r=Uc(t,i),Qe("invalid",t);break;default:r=i}Ic(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Po(t,l):typeof l=="number"&&Po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Qe("scroll",t):l!=null&&Wf(t,s,l,o))}switch(n){case"input":fa(t),rh(t,i,!1);break;case"textarea":fa(t),oh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)k0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Er(ko.current),Er(ni.current),ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:_a(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return kt(e),null;case 13:if(et(nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(tt&&mn!==null&&e.mode&1&&!(e.flags&128))i0(),Us(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ei]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Bn!==null&&(vf(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||nt.current&1?xt===0&&(xt=3):Ad())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Is(),uf(t,e),t===null&&Fo(e.stateNode.containerInfo),kt(e),null;case 10:return ud(e.type._context),kt(e),null;case 17:return sn(e.type)&&wl(),kt(e),null;case 19:if(et(nt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)to(s,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,to(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(nt,nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&ct()>Os&&(e.flags|=128,i=!0,to(s,!1),e.lanes=4194304)}else{if(!i)if(t=bl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!tt)return kt(e),null}else 2*ct()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,i=!0,to(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ct(),e.sibling=null,n=nt.current,Ke(nt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Td(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function gy(t,e){switch(sd(e),e.tag){case 1:return sn(e.type)&&wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),et(rn),et(Xt),pd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hd(e),null;case 13:if(et(nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(nt),null;case 4:return Is(),null;case 10:return ud(e.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var wa=!1,Vt=!1,vy=typeof WeakSet=="function"?WeakSet:Set,pe=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){lt(t,e,i)}else n.current=null}function cf(t,e,n){try{n()}catch(i){lt(t,e,i)}}var $h=!1;function xy(t,e){if(jc=_l,t=Wg(),id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yc={focusedElem:t,selectionRange:n},_l=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:On(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){lt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=$h,$h=!1,v}function yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&cf(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H0(t){var e=t.alternate;e!==null&&(t.alternate=null,H0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[zo],delete e[Kc],delete e[ey],delete e[ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G0(t){return t.tag===5||t.tag===3||t.tag===4}function Kh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}function hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}var Ut=null,zn=!1;function Li(t,e,n){for(n=n.child;n!==null;)V0(t,e,n),n=n.sibling}function V0(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Vt||xs(n,e);case 6:var i=Ut,r=zn;Ut=null,Li(t,e,n),Ut=i,zn=r,Ut!==null&&(zn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(zn?(t=Ut,n=n.stateNode,t.nodeType===8?Nu(t.parentNode,n):t.nodeType===1&&Nu(t,n),Uo(t)):Nu(Ut,n.stateNode));break;case 4:i=Ut,r=zn,Ut=n.stateNode.containerInfo,zn=!0,Li(t,e,n),Ut=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cf(n,e,o),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Vt&&(xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){lt(n,e,a)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Li(t,e,n),Vt=i):Li(t,e,n);break;default:Li(t,e,n)}}function Zh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vy),e.forEach(function(i){var r=Cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,zn=!1;break e;case 3:Ut=a.stateNode.containerInfo,zn=!0;break e;case 4:Ut=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Ut===null)throw Error(te(160));V0(s,o,r),Ut=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W0(e,t),e=e.sibling}function W0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Kn(t),i&4){try{yo(3,t,t.return),eu(3,t)}catch(x){lt(t,t.return,x)}try{yo(5,t,t.return)}catch(x){lt(t,t.return,x)}}break;case 1:Dn(e,t),Kn(t),i&512&&n!==null&&xs(n,n.return);break;case 5:if(Dn(e,t),Kn(t),i&512&&n!==null&&xs(n,n.return),t.flags&32){var r=t.stateNode;try{Po(r,"")}catch(x){lt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fg(r,s),Fc(a,o);var u=Fc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?gg(r,f):c==="dangerouslySetInnerHTML"?pg(r,f):c==="children"?Po(r,f):Wf(r,c,f,u)}switch(a){case"input":Lc(r,s);break;case"textarea":dg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ws(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ws(r,!!s.multiple,s.defaultValue,!0):ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[zo]=s}catch(x){lt(t,t.return,x)}}break;case 6:if(Dn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){lt(t,t.return,x)}}break;case 3:if(Dn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(x){lt(t,t.return,x)}break;case 4:Dn(e,t),Kn(t);break;case 13:Dn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wd=ct())),i&4&&Zh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||c,Dn(e,t),Vt=u):Dn(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(pe=t,c=t.child;c!==null;){for(f=pe=c;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:yo(4,d,d.return);break;case 1:xs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){lt(i,n,x)}}break;case 5:xs(d,d.return);break;case 22:if(d.memoizedState!==null){Qh(f);continue}}p!==null?(p.return=d,pe=p):Qh(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mg("display",o))}catch(x){lt(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){lt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),Kn(t),i&4&&Zh(t);break;case 21:break;default:Dn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Po(r,""),i.flags&=-33);var s=Kh(t);hf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kh(t);df(t,a,o);break;default:throw Error(te(161))}}catch(l){lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _y(t,e,n){pe=t,X0(t)}function X0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=wa;var u=Vt;if(wa=o,(Vt=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?ep(r):l!==null?(l.return=o,pe=l):ep(r);for(;s!==null;)pe=s,X0(s),s=s.sibling;pe=r,wa=a,Vt=u}Jh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Jh(t)}}function Jh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ih(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ih(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Uo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Vt||e.flags&512&&ff(e)}catch(d){lt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Qh(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function ep(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){lt(e,r,l)}}var s=e.return;try{ff(e)}catch(l){lt(e,s,l)}break;case 5:var o=e.return;try{ff(e)}catch(l){lt(e,o,l)}}}catch(l){lt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var yy=Math.ceil,Ul=bi.ReactCurrentDispatcher,Sd=bi.ReactCurrentOwner,Rn=bi.ReactCurrentBatchConfig,Xe=0,Pt=null,mt=null,Ft=0,hn=0,_s=or(0),xt=0,Wo=null,Ir=0,tu=0,Md=0,So=null,tn=null,wd=0,Os=1/0,hi=null,Nl=!1,pf=null,Ki=null,Ea=!1,Hi=null,Il=0,Mo=0,mf=null,ul=-1,cl=0;function Jt(){return Xe&6?ct():ul!==-1?ul:ul=ct()}function Zi(t){return t.mode&1?Xe&2&&Ft!==0?Ft&-Ft:iy.transition!==null?(cl===0&&(cl=Rg()),cl):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:Ig(t.type)),t):1}function Xn(t,e,n,i){if(50<Mo)throw Mo=0,mf=null,Error(te(185));Jo(t,n,i),(!(Xe&2)||t!==Pt)&&(t===Pt&&(!(Xe&2)&&(tu|=n),xt===4&&Bi(t,Ft)),on(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Os=ct()+500,Zl&&ar()))}function on(t,e){var n=t.callbackNode;i_(t,e);var i=xl(t,t===Pt?Ft:0);if(i===0)n!==null&&uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&uh(n),e===1)t.tag===0?ny(tp.bind(null,t)):e0(tp.bind(null,t)),J_(function(){!(Xe&6)&&ar()}),n=null;else{switch(Pg(i)){case 1:n=$f;break;case 4:n=Ag;break;case 16:n=vl;break;case 536870912:n=Cg;break;default:n=vl}n=Q0(n,j0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j0(t,e){if(ul=-1,cl=0,Xe&6)throw Error(te(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var i=xl(t,t===Pt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fl(t,i);else{e=i;var r=Xe;Xe|=2;var s=q0();(Pt!==t||Ft!==e)&&(hi=null,Os=ct()+500,Ar(t,e));do try{wy();break}catch(a){Y0(t,a)}while(1);ld(),Ul.current=s,Xe=r,mt!==null?e=0:(Pt=null,Ft=0,e=xt)}if(e!==0){if(e===2&&(r=Hc(t),r!==0&&(i=r,e=gf(t,r))),e===1)throw n=Wo,Ar(t,0),Bi(t,i),on(t,ct()),n;if(e===6)Bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sy(r)&&(e=Fl(t,i),e===2&&(s=Hc(t),s!==0&&(i=s,e=gf(t,s))),e===1))throw n=Wo,Ar(t,0),Bi(t,i),on(t,ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:vr(t,tn,hi);break;case 3:if(Bi(t,i),(i&130023424)===i&&(e=wd+500-ct(),10<e)){if(xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$c(vr.bind(null,t,tn,hi),e);break}vr(t,tn,hi);break;case 4:if(Bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yy(i/1960))-i,10<i){t.timeoutHandle=$c(vr.bind(null,t,tn,hi),i);break}vr(t,tn,hi);break;case 5:vr(t,tn,hi);break;default:throw Error(te(329))}}}return on(t,ct()),t.callbackNode===n?j0.bind(null,t):null}function gf(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=tn,tn=n,e!==null&&vf(e)),t}function vf(t){tn===null?tn=t:tn.push.apply(tn,t)}function Sy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bi(t,e){for(e&=~Md,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function tp(t){if(Xe&6)throw Error(te(327));Rs();var e=xl(t,0);if(!(e&1))return on(t,ct()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var i=Hc(t);i!==0&&(e=i,n=gf(t,i))}if(n===1)throw n=Wo,Ar(t,0),Bi(t,e),on(t,ct()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,tn,hi),on(t,ct()),null}function Ed(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Os=ct()+500,Zl&&ar())}}function Fr(t){Hi!==null&&Hi.tag===0&&!(Xe&6)&&Rs();var e=Xe;Xe|=1;var n=Rn.transition,i=Ye;try{if(Rn.transition=null,Ye=1,t)return t()}finally{Ye=i,Rn.transition=n,Xe=e,!(Xe&6)&&ar()}}function Td(){hn=_s.current,et(_s)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z_(n)),mt!==null)for(n=mt.return;n!==null;){var i=n;switch(sd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wl();break;case 3:Is(),et(rn),et(Xt),pd();break;case 5:hd(i);break;case 4:Is();break;case 13:et(nt);break;case 19:et(nt);break;case 10:ud(i.type._context);break;case 22:case 23:Td()}n=n.return}if(Pt=t,mt=t=Ji(t.current,null),Ft=hn=e,xt=0,Wo=null,Md=tu=Ir=0,tn=So=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}wr=null}return t}function Y0(t,e){do{var n=mt;try{if(ld(),ol.current=Dl,Ll){for(var i=rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ll=!1}if(Nr=0,Ct=vt=rt=null,_o=!1,Ho=0,Sd.current=null,n===null||n.return===null){xt=1,Wo=e,mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Gh(o);if(p!==null){p.flags&=-257,Vh(p,o,a,s,e),p.mode&1&&Hh(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Hh(s,u,e),Ad();break e}l=Error(te(426))}}else if(tt&&a.mode&1){var m=Gh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vh(m,o,a,s,e),od(Fs(l,a));break e}}s=l=Fs(l,a),xt!==4&&(xt=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=b0(s,l,e);Nh(s,h);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ki===null||!Ki.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=L0(s,a,e);Nh(s,y);break e}}s=s.return}while(s!==null)}K0(n)}catch(M){e=M,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(1)}function q0(){var t=Ul.current;return Ul.current=Dl,t===null?Dl:t}function Ad(){(xt===0||xt===3||xt===2)&&(xt=4),Pt===null||!(Ir&268435455)&&!(tu&268435455)||Bi(Pt,Ft)}function Fl(t,e){var n=Xe;Xe|=2;var i=q0();(Pt!==t||Ft!==e)&&(hi=null,Ar(t,e));do try{My();break}catch(r){Y0(t,r)}while(1);if(ld(),Xe=n,Ul.current=i,mt!==null)throw Error(te(261));return Pt=null,Ft=0,xt}function My(){for(;mt!==null;)$0(mt)}function wy(){for(;mt!==null&&!qx();)$0(mt)}function $0(t){var e=J0(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?K0(t):mt=e,Sd.current=null}function K0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,mt=null;return}}else if(n=my(n,e,hn),n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);xt===0&&(xt=5)}function vr(t,e,n){var i=Ye,r=Rn.transition;try{Rn.transition=null,Ye=1,Ey(t,e,n,i)}finally{Rn.transition=r,Ye=i}return null}function Ey(t,e,n,i){do Rs();while(Hi!==null);if(Xe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(r_(t,s),t===Pt&&(mt=Pt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,Q0(vl,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=Ye;Ye=1;var a=Xe;Xe|=4,Sd.current=null,xy(t,n),W0(n,t),W_(Yc),_l=!!jc,Yc=jc=null,t.current=n,_y(n),$x(),Xe=a,Ye=o,Rn.transition=s}else t.current=n;if(Ea&&(Ea=!1,Hi=t,Il=r),s=t.pendingLanes,s===0&&(Ki=null),Jx(n.stateNode),on(t,ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=pf,pf=null,t;return Il&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===mf?Mo++:(Mo=0,mf=t):Mo=0,ar(),null}function Rs(){if(Hi!==null){var t=Pg(Il),e=Rn.transition,n=Ye;try{if(Rn.transition=null,Ye=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Il=0,Xe&6)throw Error(te(331));var r=Xe;for(Xe|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:yo(8,c,s)}var f=c.child;if(f!==null)f.return=c,pe=f;else for(;pe!==null;){c=pe;var d=c.sibling,p=c.return;if(H0(c),c===u){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(M){lt(a,a.return,M)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Xe=r,ar(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{Ye=n,Rn.transition=e}}return!1}function np(t,e,n){e=Fs(n,e),e=b0(t,e,1),t=$i(t,e,1),e=Jt(),t!==null&&(Jo(t,1,e),on(t,e))}function lt(t,e,n){if(t.tag===3)np(t,t,n);else for(;e!==null;){if(e.tag===3){np(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Fs(n,t),t=L0(e,t,1),e=$i(e,t,1),t=Jt(),e!==null&&(Jo(e,1,t),on(e,t));break}}e=e.return}}function Ty(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Ft&n)===n&&(xt===4||xt===3&&(Ft&130023424)===Ft&&500>ct()-wd?Ar(t,0):Md|=n),on(t,e)}function Z0(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=Jt();t=Ti(t,e),t!==null&&(Jo(t,e,n),on(t,n))}function Ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z0(t,n)}function Cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Z0(t,n)}var J0;J0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,py(t,e,n);nn=!!(t.flags&131072)}else nn=!1,tt&&e.flags&1048576&&t0(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=Ds(e,Xt.current);Cs(e,n),r=gd(null,e,i,t,r,n);var s=vd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fd(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,nf(e,i,t,n),e=of(null,e,i,!0,s,n)):(e.tag=0,tt&&s&&rd(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Py(i),t=On(i,t),r){case 0:e=sf(null,e,i,t,n);break e;case 1:e=jh(null,e,i,t,n);break e;case 11:e=Wh(null,e,i,t,n);break e;case 14:e=Xh(null,e,i,On(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),sf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),jh(t,e,i,r,n);case 3:e:{if(I0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s0(t,e),Pl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fs(Error(te(423)),e),e=Yh(t,e,i,n,r);break e}else if(i!==r){r=Fs(Error(te(424)),e),e=Yh(t,e,i,n,r);break e}else for(mn=qi(e.stateNode.containerInfo.firstChild),gn=e,tt=!0,Bn=null,n=u0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),i===r){e=Ai(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return c0(e),t===null&&Qc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,qc(i,r)?o=null:s!==null&&qc(i,s)&&(e.flags|=32),N0(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Qc(e),null;case 13:return F0(t,e,n);case 4:return dd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ns(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Wh(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ke(Cl,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!rn.current){e=Ai(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Cs(e,n),r=Pn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),Xh(t,e,i,r,n);case 15:return D0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),ll(t,e),e.tag=1,sn(i)?(t=!0,El(e)):t=!1,Cs(e,n),a0(e,i,r),nf(e,i,r,n),of(null,e,i,!0,t,n);case 19:return O0(t,e,n);case 22:return U0(t,e,n)}throw Error(te(156,e.tag))};function Q0(t,e){return Tg(t,e)}function Ry(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new Ry(t,e,n,i)}function Cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return Cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jf)return 11;if(t===Yf)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Cd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return Cr(n.children,r,s,e);case Xf:o=8,r|=8;break;case Ac:return t=Cn(12,n,e,r|2),t.elementType=Ac,t.lanes=s,t;case Cc:return t=Cn(13,n,e,r),t.elementType=Cc,t.lanes=s,t;case Rc:return t=Cn(19,n,e,r),t.elementType=Rc,t.lanes=s,t;case lg:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case og:o=10;break e;case ag:o=9;break e;case jf:o=11;break e;case Yf:o=14;break e;case Fi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Cn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=lg,t.lanes=n,t.stateNode={isHidden:!1},t}function Gu(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function Vu(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function by(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wu(0),this.expirationTimes=wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rd(t,e,n,i,r,s,o,a,l){return t=new by(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(s),t}function Ly(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ev(t){if(!t)return nr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(sn(n))return Qg(t,n,e)}return e}function tv(t,e,n,i,r,s,o,a,l){return t=Rd(n,i,!0,t,r,s,o,a,l),t.context=ev(null),n=t.current,i=Jt(),r=Zi(n),s=Si(i,r),s.callback=e??null,$i(n,s,r),t.current.lanes=r,Jo(t,r,i),on(t,i),t}function iu(t,e,n,i){var r=e.current,s=Jt(),o=Zi(r);return n=ev(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,o),t!==null&&(Xn(t,r,o,s),sl(t,r,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pd(t,e){ip(t,e),(t=t.alternate)&&ip(t,e)}function Dy(){return null}var nv=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}ru.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));iu(t,e,null,null)};ru.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){iu(null,t,null,null)}),e[Ei]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zi.length&&e!==0&&e<zi[n].priority;n++);zi.splice(n,0,t),n===0&&Ng(t)}};function Ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rp(){}function Uy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ol(o);s.call(u)}}var o=tv(e,i,t,0,null,!1,!1,"",rp);return t._reactRootContainer=o,t[Ei]=o.current,Fo(t.nodeType===8?t.parentNode:t),Fr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ol(l);a.call(u)}}var l=Rd(t,0,!1,null,null,!1,!1,"",rp);return t._reactRootContainer=l,t[Ei]=l.current,Fo(t.nodeType===8?t.parentNode:t),Fr(function(){iu(e,l,n,i)}),l}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ol(o);a.call(l)}}iu(e,o,t,r)}else o=Uy(n,e,t,r,i);return Ol(o)}bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(Kf(e,n|1),on(e,ct()),!(Xe&6)&&(Os=ct()+500,ar()))}break;case 13:Fr(function(){var i=Ti(t,1);if(i!==null){var r=Jt();Xn(i,t,1,r)}}),Pd(t,1)}};Zf=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=Jt();Xn(e,t,134217728,n)}Pd(t,134217728)}};Lg=function(t){if(t.tag===13){var e=Zi(t),n=Ti(t,e);if(n!==null){var i=Jt();Xn(n,t,e,i)}Pd(t,e)}};Dg=function(){return Ye};Ug=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};zc=function(t,e,n){switch(e){case"input":if(Lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(te(90));cg(i),Lc(i,r)}}}break;case"textarea":dg(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};_g=Ed;yg=Fr;var Ny={usingClientEntryPoint:!1,Events:[ea,hs,Kl,vg,xg,Ed]},no={findFiberByHostInstance:Mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Iy={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wg(t),t===null?null:t.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||Dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{jl=Ta.inject(Iy),ti=Ta}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(e))throw Error(te(200));return Ly(t,e,null,n)};yn.createRoot=function(t,e){if(!Ld(t))throw Error(te(299));var n=!1,i="",r=nv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rd(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,Fo(t.nodeType===8?t.parentNode:t),new bd(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=wg(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Fr(t)};yn.hydrate=function(t,e,n){if(!su(e))throw Error(te(200));return ou(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Ld(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=nv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tv(e,null,t,1,n??null,r,!1,s,o),t[Ei]=e.current,Fo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};yn.render=function(t,e,n){if(!su(e))throw Error(te(200));return ou(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!su(t))throw Error(te(40));return t._reactRootContainer?(Fr(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};yn.unstable_batchedUpdates=Ed;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return ou(t,e,n,!1,i)};yn.version="18.2.0-next-9e3b772b8-20220608";function iv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iv)}catch(t){console.error(t)}}iv(),tg.exports=yn;var Fy=tg.exports,sp=Fy;Ec.createRoot=sp.createRoot,Ec.hydrateRoot=sp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dd="153",Oy=0,op=1,zy=2,rv=1,By=2,di=3,_n=0,an=1,gi=2,Qi=0,Ps=1,ap=2,lp=3,up=4,ky=5,os=100,Hy=101,Gy=102,cp=103,fp=104,Vy=200,Wy=201,Xy=202,jy=203,sv=204,ov=205,Yy=206,qy=207,$y=208,Ky=209,Zy=210,Jy=0,Qy=1,eS=2,xf=3,tS=4,nS=5,iS=6,rS=7,av=0,sS=1,oS=2,Mi=0,aS=1,lS=2,uS=3,cS=4,fS=5,lv=300,zs=301,Bs=302,_f=303,yf=304,au=306,Sf=1e3,Gn=1001,Mf=1002,Kt=1003,dp=1004,Wu=1005,Tn=1006,dS=1007,Xo=1008,er=1009,hS=1010,pS=1011,Ud=1012,uv=1013,Gi=1014,Vi=1015,jo=1016,cv=1017,fv=1018,Rr=1020,mS=1021,Vn=1023,gS=1024,vS=1025,Pr=1026,ks=1027,xS=1028,dv=1029,_S=1030,hv=1031,pv=1033,Xu=33776,ju=33777,Yu=33778,qu=33779,hp=35840,pp=35841,mp=35842,gp=35843,yS=36196,vp=37492,xp=37496,_p=37808,yp=37809,Sp=37810,Mp=37811,wp=37812,Ep=37813,Tp=37814,Ap=37815,Cp=37816,Rp=37817,Pp=37818,bp=37819,Lp=37820,Dp=37821,$u=36492,SS=36283,Up=36284,Np=36285,Ip=36286,mv=3e3,br=3001,MS=3200,wS=3201,ES=0,TS=1,Lr="",Ue="srgb",ii="srgb-linear",gv="display-p3",Ku=7680,AS=519,CS=512,RS=513,PS=514,bS=515,LS=516,DS=517,US=518,NS=519,Fp=35044,Op="300 es",wf=1035,_i=2e3,zl=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=Math.PI/180,Ef=180/Math.PI;function js(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function IS(t,e){return(t%e+e)%e}function Ju(t,e,n){return(1-n)*t+n*e}function zp(t){return(t&t-1)===0&&t!==0}function Tf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class K{constructor(e=0,n=0){K.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,o,a,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],h=r[6],_=r[1],g=r[4],y=r[7],M=r[2],E=r[5],R=r[8];return s[0]=o*x+a*_+l*M,s[3]=o*m+a*g+l*E,s[6]=o*h+a*y+l*R,s[1]=u*x+c*_+f*M,s[4]=u*m+c*g+f*E,s[7]=u*h+c*y+f*R,s[2]=d*x+p*_+v*M,s[5]=d*m+p*g+v*E,s[8]=d*h+p*y+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qu.makeScale(e,n)),this}rotate(e){return this.premultiply(Qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qu=new Ie;function vv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Bp={};function wo(t){t in Bp||(Bp[t]=!0,console.warn(t))}function bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ec(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const FS=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),OS=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function zS(t){return t.convertSRGBToLinear().applyMatrix3(OS)}function BS(t){return t.applyMatrix3(FS).convertLinearToSRGB()}const kS={[ii]:t=>t,[Ue]:t=>t.convertSRGBToLinear(),[gv]:zS},HS={[ii]:t=>t,[Ue]:t=>t.convertLinearToSRGB(),[gv]:BS},Un={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ii},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=kS[e],r=HS[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Vr;class xv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=Bl("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GS=0;class _v{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=js(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tc(r[o].image)):s.push(tc(r[o]))}else s=tc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VS=0;class vn extends Xs{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Gn,r=Gn,s=Tn,o=Xo,a=Vn,l=er,u=vn.DEFAULT_ANISOTROPY,c=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=js(),this.name="",this.source=new _v(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===br?Ue:Lr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sf:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sf:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?br:mv}set encoding(e){wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===br?Ue:Lr}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=lv;vn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(p+1)/2,M=(h+1)/2,E=(c+d)/4,R=(f+x)/4,b=(v+m)/4;return g>y&&g>M?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=E/i,s=R/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=b/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=R/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(f-x)/_,this.z=(d-c)/_,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Or extends Xs{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(wo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===br?Ue:Lr),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Tn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new _v(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yv extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WS extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==d||u!==p||c!==v){let m=1-a;const h=l*d+u*p+c*v+f*x,_=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const M=Math.sqrt(g),E=Math.atan2(M,h*_);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const y=a*_;if(l=l*m+d*y,u=u*m+p*y,c=c*m+v*y,f=f*m+x*y,m===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+c*f+l*p-u*d,e[n+1]=l*v+c*d+u*f-a*p,e[n+2]=u*v+c*p+a*d-l*f,e[n+3]=c*v-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*v,this._y=u*p*f-d*c*v,this._z=u*c*v+d*p*f,this._w=u*c*f-d*p*v;break;case"YXZ":this._x=d*c*f+u*p*v,this._y=u*p*f-d*c*v,this._z=u*c*v-d*p*f,this._w=u*c*f+d*p*v;break;case"ZXY":this._x=d*c*f-u*p*v,this._y=u*p*f+d*c*v,this._z=u*c*v+d*p*f,this._w=u*c*f-d*p*v;break;case"ZYX":this._x=d*c*f-u*p*v,this._y=u*p*f+d*c*v,this._z=u*c*v-d*p*f,this._w=u*c*f+d*p*v;break;case"YZX":this._x=d*c*f+u*p*v,this._y=u*p*f+d*c*v,this._z=u*c*v-d*p*f,this._w=u*c*f-d*p*v;break;case"XZY":this._x=d*c*f-u*p*v,this._y=u*p*f-d*c*v,this._z=u*c*v+d*p*f,this._w=u*c*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new D,kp=new na;class lr{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox),Wr.applyMatrix4(e.matrixWorld),this.union(Wr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)ai.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ai)}else r.boundingBox===null&&r.computeBoundingBox(),Wr.copy(r.boundingBox),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Ca.subVectors(this.max,io),Xr.subVectors(e.a,io),jr.subVectors(e.b,io),Yr.subVectors(e.c,io),Di.subVectors(jr,Xr),Ui.subVectors(Yr,jr),dr.subVectors(Xr,Yr);let n=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-dr.z,dr.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,dr.z,0,-dr.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-dr.y,dr.x,0];return!ic(n,Xr,jr,Yr,Ca)||(n=[1,0,0,0,1,0,0,0,1],!ic(n,Xr,jr,Yr,Ca))?!1:(Ra.crossVectors(Di,Ui),n=[Ra.x,Ra.y,Ra.z],ic(n,Xr,jr,Yr,Ca))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new D,new D,new D,new D,new D,new D,new D,new D],ai=new D,Wr=new lr,Xr=new D,jr=new D,Yr=new D,Di=new D,Ui=new D,dr=new D,io=new D,Ca=new D,Ra=new D,hr=new D;function ic(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){hr.fromArray(t,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),u=n.dot(hr),c=i.dot(hr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const XS=new lr,ro=new D,rc=new D;class lu{constructor(e=new D,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const n=ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(rc)),this.expandByPoint(ro.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new D,sc=new D,Pa=new D,Ni=new D,oc=new D,ba=new D,ac=new D;class Sv{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sc.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(sc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pa),a=Ni.dot(this.direction),l=-Ni.dot(Pa),u=Ni.lengthSq(),c=Math.abs(1-o*o);let f,d,p,v;if(c>0)if(f=o*l-a,d=o*a-l,v=s*c,f>=0)if(d>=-v)if(d<=v){const x=1/c;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sc).addScaledVector(Pa,d),p}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){oc.subVectors(n,e),ba.subVectors(i,e),ac.crossVectors(oc,ba);let o=this.direction.dot(ac),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(ba.crossVectors(Ni,ba));if(l<0)return null;const u=a*this.direction.dot(oc.cross(Ni));if(u<0||l+u>o)return null;const c=-a*Ni.dot(ac);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,u,c,f,d,p,v,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,p,v,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,v=a*c,x=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,v=u*c,x=u*f;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,v=u*c,x=u*f;n[0]=d-x*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,v=a*c,x=a*f;n[0]=l*c,n[4]=v*u-p,n[8]=d*u+x,n[1]=l*f,n[5]=x*u+d,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=x-d*f,n[8]=v*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+v,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+x,n[5]=o*c,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*c,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jS,e,YS)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(i,fn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(i,fn)),Ii.normalize(),La.crossVectors(fn,Ii),r[0]=Ii.x,r[4]=La.x,r[8]=fn.x,r[1]=Ii.y,r[5]=La.y,r[9]=fn.y,r[2]=Ii.z,r[6]=La.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],h=i[14],_=i[3],g=i[7],y=i[11],M=i[15],E=r[0],R=r[4],b=r[8],w=r[12],C=r[1],H=r[5],ee=r[9],O=r[13],V=r[2],W=r[6],ne=r[10],q=r[14],U=r[3],B=r[7],G=r[11],se=r[15];return s[0]=o*E+a*C+l*V+u*U,s[4]=o*R+a*H+l*W+u*B,s[8]=o*b+a*ee+l*ne+u*G,s[12]=o*w+a*O+l*q+u*se,s[1]=c*E+f*C+d*V+p*U,s[5]=c*R+f*H+d*W+p*B,s[9]=c*b+f*ee+d*ne+p*G,s[13]=c*w+f*O+d*q+p*se,s[2]=v*E+x*C+m*V+h*U,s[6]=v*R+x*H+m*W+h*B,s[10]=v*b+x*ee+m*ne+h*G,s[14]=v*w+x*O+m*q+h*se,s[3]=_*E+g*C+y*V+M*U,s[7]=_*R+g*H+y*W+M*B,s[11]=_*b+g*ee+y*ne+M*G,s[15]=_*w+g*O+y*q+M*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],h=e[15],_=f*m*u-x*d*u+x*l*p-a*m*p-f*l*h+a*d*h,g=v*d*u-c*m*u-v*l*p+o*m*p+c*l*h-o*d*h,y=c*x*u-v*f*u+v*a*p-o*x*p-c*a*h+o*f*h,M=v*f*l-c*x*l-v*a*d+o*x*d+c*a*m-o*f*m,E=n*_+i*g+r*y+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(x*d*s-f*m*s-x*r*p+i*m*p+f*r*h-i*d*h)*R,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*h+i*l*h)*R,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*R,e[4]=g*R,e[5]=(c*m*s-v*d*s+v*r*p-n*m*p-c*r*h+n*d*h)*R,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*h-n*l*h)*R,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*R,e[8]=y*R,e[9]=(v*f*s-c*x*s-v*i*p+n*x*p+c*i*h-n*f*h)*R,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*h+n*a*h)*R,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*R,e[12]=M*R,e[13]=(c*x*r-v*f*r+v*i*d-n*x*d-c*i*m+n*f*m)*R,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,v=s*f,x=o*c,m=o*f,h=a*f,_=l*u,g=l*c,y=l*f,M=i.x,E=i.y,R=i.z;return r[0]=(1-(x+h))*M,r[1]=(p+y)*M,r[2]=(v-g)*M,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(d+h))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(v+g)*R,r[9]=(m-_)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,c=1/o,f=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=c,Nn.elements[5]*=c,Nn.elements[6]*=c,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===_i)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===zl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*c;let v,x;if(a===_i)v=(o+s)*f,x=-2*f;else if(a===zl)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new D,Nn=new yt,jS=new D(0,0,0),YS=new D(1,1,1),Ii=new D,La=new D,fn=new D,Hp=new yt,Gp=new na;class uu{constructor(e=0,n=0,i=0,r=uu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uu.DEFAULT_ORDER="XYZ";class Mv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qS=0;const Vp=new D,$r=new na,ui=new yt,Da=new D,so=new D,$S=new D,KS=new na,Wp=new D(1,0,0),Xp=new D(0,1,0),jp=new D(0,0,1),ZS={type:"added"},Yp={type:"removed"};class ln extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new D,n=new uu,i=new na,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ie}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Da.copy(e):Da.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(so,Da,this.up):ui.lookAt(Da,so,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(ui),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ZS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Yp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,$S),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new D(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new D,ci=new D,lc=new D,fi=new D,Kr=new D,Zr=new D,qp=new D,uc=new D,cc=new D,fc=new D;let Ua=!1;class kn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ci.subVectors(i,n),lc.subVectors(e,n);const o=In.dot(In),a=In.dot(ci),l=In.dot(lc),u=ci.dot(ci),c=ci.dot(lc),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(u*l-a*c)*d,v=(o*c-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi),fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fi),l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ci.subVectors(e,n),In.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),In.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Kr.subVectors(r,i),Zr.subVectors(s,i),uc.subVectors(e,i);const l=Kr.dot(uc),u=Zr.dot(uc);if(l<=0&&u<=0)return n.copy(i);cc.subVectors(e,r);const c=Kr.dot(cc),f=Zr.dot(cc);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Kr,o);fc.subVectors(e,s);const p=Kr.dot(fc),v=Zr.dot(fc);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Zr,a);const m=c*v-p*f;if(m<=0&&f-c>=0&&p-v>=0)return qp.subVectors(s,r),a=(f-c)/(f-c+(p-v)),n.copy(r).addScaledVector(qp,a);const h=1/(m+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(Kr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let JS=0;class ia extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Ps,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sv,this.blendDst=ov,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ku,this.stencilZFail=Ku,this.stencilZPass=Ku,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==_n&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Na={h:0,s:0,l:0};function dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Un.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Un.workingColorSpace){return this.r=e,this.g=n,this.b=i,Un.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Un.workingColorSpace){if(e=IS(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=dc(o,s,e+1/3),this.g=dc(o,s,e),this.b=dc(o,s,e-1/3)}return Un.toWorkingColorSpace(this,r),this}setStyle(e,n=Ue){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ue){const i=wv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=ec(e.r),this.g=ec(e.g),this.b=ec(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Un.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Wt(Gt.r*255,0,255))*65536+Math.round(Wt(Gt.g*255,0,255))*256+Math.round(Wt(Gt.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Un.workingColorSpace){Un.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Un.workingColorSpace){return Un.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Ue){Un.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Ue?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fn),Fn.h+=e,Fn.s+=n,Fn.l+=i,this.setHSL(Fn.h,Fn.s,Fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fn),e.getHSL(Na);const i=Ju(Fn.h,Na.h,n),r=Ju(Fn.s,Na.s,n),s=Ju(Fn.l,Na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new We;We.NAMES=wv;class Ci extends ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new D,Ia=new K;class Zt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fp,this.updateRange={offset:0,count:-1},this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ia.fromBufferAttribute(this,n),Ia.applyMatrix3(e),this.setXY(n,Ia.x,Ia.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ev extends Zt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Tv extends Zt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jn extends Zt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let QS=0;const Mn=new yt,hc=new ln,Jr=new D,dn=new lr,oo=new lr,Tt=new D;class qn extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?Tv:Ev)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(dn.min,oo.min),dn.expandByPoint(Tt),Tt.addVectors(dn.max,oo.max),dn.expandByPoint(Tt)):(dn.expandByPoint(oo.min),dn.expandByPoint(oo.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Tt.fromBufferAttribute(a,u),l&&(Jr.fromBufferAttribute(e,u),Tt.add(Jr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let C=0;C<a;C++)u[C]=new D,c[C]=new D;const f=new D,d=new D,p=new D,v=new K,x=new K,m=new K,h=new D,_=new D;function g(C,H,ee){f.fromArray(r,C*3),d.fromArray(r,H*3),p.fromArray(r,ee*3),v.fromArray(o,C*2),x.fromArray(o,H*2),m.fromArray(o,ee*2),d.sub(f),p.sub(f),x.sub(v),m.sub(v);const O=1/(x.x*m.y-m.x*x.y);isFinite(O)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(O),_.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(O),u[C].add(h),u[H].add(h),u[ee].add(h),c[C].add(_),c[H].add(_),c[ee].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let C=0,H=y.length;C<H;++C){const ee=y[C],O=ee.start,V=ee.count;for(let W=O,ne=O+V;W<ne;W+=3)g(i[W+0],i[W+1],i[W+2])}const M=new D,E=new D,R=new D,b=new D;function w(C){R.fromArray(s,C*3),b.copy(R);const H=u[C];M.copy(H),M.sub(R.multiplyScalar(R.dot(H))).normalize(),E.crossVectors(b,H);const O=E.dot(c[C])<0?-1:1;l[C*4]=M.x,l[C*4+1]=M.y,l[C*4+2]=M.z,l[C*4+3]=O}for(let C=0,H=y.length;C<H;++C){const ee=y[C],O=ee.start,V=ee.count;for(let W=O,ne=O+V;W<ne;W+=3)w(i[W+0]),w(i[W+1]),w(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let h=0;h<c;h++)d[v++]=u[p++]}return new Zt(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $p=new yt,pr=new Sv,Fa=new lu,Kp=new D,Qr=new D,es=new D,ts=new D,pc=new D,Oa=new D,za=new K,Ba=new K,ka=new K,Zp=new D,Jp=new D,Qp=new D,Ha=new D,Ga=new D;class It extends ln{constructor(e=new qn,n=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Oa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(pc.fromBufferAttribute(f,e),o?Oa.addScaledVector(pc,c):Oa.addScaledVector(pc.sub(n),c))}n.add(Oa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Fa.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Fa,Kp)===null||pr.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&($p.copy(s).invert(),pr.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=g;y<M;y+=3){const E=a.getX(y),R=a.getX(y+1),b=a.getX(y+2);r=Va(this,h,e,i,u,c,f,E,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const _=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=Va(this,o,e,i,u,c,f,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=g;y<M;y+=3){const E=y,R=y+1,b=y+2;r=Va(this,h,e,i,u,c,f,E,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const _=m,g=m+1,y=m+2;r=Va(this,o,e,i,u,c,f,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function eM(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_n,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ga);return u<n.near||u>n.far?null:{distance:u,point:Ga.clone(),object:t}}function Va(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Qr),t.getVertexPosition(l,es),t.getVertexPosition(u,ts);const c=eM(t,e,n,i,Qr,es,ts,Ha);if(c){r&&(za.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),ka.fromBufferAttribute(r,u),c.uv=kn.getInterpolation(Ha,Qr,es,ts,za,Ba,ka,new K)),s&&(za.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),ka.fromBufferAttribute(s,u),c.uv1=kn.getInterpolation(Ha,Qr,es,ts,za,Ba,ka,new K),c.uv2=c.uv1),o&&(Zp.fromBufferAttribute(o,a),Jp.fromBufferAttribute(o,l),Qp.fromBufferAttribute(o,u),c.normal=kn.getInterpolation(Ha,Qr,es,ts,Zp,Jp,Qp,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new D,materialIndex:0};kn.getNormal(Qr,es,ts,f.normal),c.face=f}return c}class ra extends qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jn(u,3)),this.setAttribute("normal",new jn(c,3)),this.setAttribute("uv",new jn(f,2));function v(x,m,h,_,g,y,M,E,R,b,w){const C=y/R,H=M/b,ee=y/2,O=M/2,V=E/2,W=R+1,ne=b+1;let q=0,U=0;const B=new D;for(let G=0;G<ne;G++){const se=G*H-O;for(let I=0;I<W;I++){const Q=I*C-ee;B[x]=Q*_,B[m]=se*g,B[h]=V,u.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[h]=E>0?1:-1,c.push(B.x,B.y,B.z),f.push(I/R),f.push(1-G/b),q+=1}}for(let G=0;G<b;G++)for(let se=0;se<R;se++){const I=d+se+W*G,Q=d+se+W*(G+1),J=d+(se+1)+W*(G+1),he=d+(se+1)+W*G;l.push(I,Q,he),l.push(Q,J,he),U+=6}a.addGroup(p,U,w),p+=U,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const r in i)e[r]=i[r]}return e}function tM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Av(t){return t.getRenderTarget()===null?t.outputColorSpace:ii}const nM={clone:Hs,merge:qt};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Cv extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends Cv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ef*2*Math.atan(Math.tan(Zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class sM extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Hn(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new Hn(ns,is,e,n);s.layers=this.layers,this.add(s);const o=new Hn(ns,is,e,n);o.layers=this.layers,this.add(o);const a=new Hn(ns,is,e,n);a.layers=this.layers,this.add(a);const l=new Hn(ns,is,e,n);l.layers=this.layers,this.add(l);const u=new Hn(ns,is,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Mi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Rv extends vn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oM extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(wo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===br?Ue:Lr),this.texture=new Rv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ra(5,5,5),s=new zr({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Qi});s.uniforms.tEquirect.value=n;const o=new It(r,s),a=n.minFilter;return n.minFilter===Xo&&(n.minFilter=Tn),new sM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const mc=new D,aM=new D,lM=new Ie;class xr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mc.subVectors(i,n).cross(aM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lM.getNormalMatrix(e),r=this.coplanarPoint(mc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new lu,Wa=new D;class Pv{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],h=r[12],_=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,m-p,y-h).normalize(),i[1].setComponents(l+s,d+u,m+p,y+h).normalize(),i[2].setComponents(l+o,d+c,m+v,y+_).normalize(),i[3].setComponents(l-o,d-c,m-v,y-_).normalize(),i[4].setComponents(l-a,d-f,m-x,y-g).normalize(),n===_i)i[5].setComponents(l+a,d+f,m+x,y+g).normalize();else if(n===zl)i[5].setComponents(a,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,f,d),u.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,p=c.updateRange;t.bindBuffer(f,u),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Nd extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let h=0;h<c;h++){const _=h*d-o;for(let g=0;g<u;g++){const y=g*f-s;v.push(y,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const g=_+u*h,y=_+u*(h+1),M=_+1+u*(h+1),E=_+1+u*h;p.push(g,y,E),p.push(y,M,E)}this.setIndex(p),this.setAttribute("position",new jn(v,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nd(e.width,e.height,e.widthSegments,e.heightSegments)}}var cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM="vec3 transformed = vec3( position );",vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_M=`#ifdef USE_IRIDESCENCE
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
#endif`,yM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
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
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,PM=`#define PI 3.141592653589793
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LM=`vec3 transformedNormal = objectNormal;
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
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
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
}`,qM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
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
#endif`,QM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ew=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,sw=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
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
}`,ow=`
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
#endif`,aw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,uw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hw=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_w=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yw=`#ifdef USE_MORPHNORMALS
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
#endif`,Sw=`#ifdef USE_MORPHTARGETS
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
#endif`,Mw=`#ifdef USE_MORPHTARGETS
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
#endif`,ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ow=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ww=`float getShadowMask() {
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
}`,Xw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jw=`#ifdef USE_SKINNING
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
#endif`,Yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qw=`#ifdef USE_SKINNING
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
#endif`,$w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eE=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tE=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nE=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iE=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fE=`#include <common>
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
}`,dE=`#if DEPTH_PACKING == 3200
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
}`,hE=`#define DISTANCE
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
}`,pE=`#define DISTANCE
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_E=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
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
}`,SE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,ME=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
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
}`,wE=`#define MATCAP
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
}`,EE=`#define MATCAP
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
}`,TE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,CE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,RE=`#define PHONG
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
}`,PE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
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
}`,bE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
}`,LE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,DE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
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
}`,UE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,NE=`uniform vec3 diffuse;
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
}`,IE=`#include <common>
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
}`,FE=`uniform vec3 color;
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
}`,OE=`uniform float rotation;
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
}`,zE=`uniform vec3 diffuse;
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
}`,Ne={alphamap_fragment:cM,alphamap_pars_fragment:fM,alphatest_fragment:dM,alphatest_pars_fragment:hM,aomap_fragment:pM,aomap_pars_fragment:mM,begin_vertex:gM,beginnormal_vertex:vM,bsdfs:xM,iridescence_fragment:_M,bumpmap_pars_fragment:yM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:EM,color_fragment:TM,color_pars_fragment:AM,color_pars_vertex:CM,color_vertex:RM,common:PM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:LM,displacementmap_pars_vertex:DM,displacementmap_vertex:UM,emissivemap_fragment:NM,emissivemap_pars_fragment:IM,encodings_fragment:FM,encodings_pars_fragment:OM,envmap_fragment:zM,envmap_common_pars_fragment:BM,envmap_pars_fragment:kM,envmap_pars_vertex:HM,envmap_physical_pars_fragment:QM,envmap_vertex:GM,fog_vertex:VM,fog_pars_vertex:WM,fog_fragment:XM,fog_pars_fragment:jM,gradientmap_pars_fragment:YM,lightmap_fragment:qM,lightmap_pars_fragment:$M,lights_lambert_fragment:KM,lights_lambert_pars_fragment:ZM,lights_pars_begin:JM,lights_toon_fragment:ew,lights_toon_pars_fragment:tw,lights_phong_fragment:nw,lights_phong_pars_fragment:iw,lights_physical_fragment:rw,lights_physical_pars_fragment:sw,lights_fragment_begin:ow,lights_fragment_maps:aw,lights_fragment_end:lw,logdepthbuf_fragment:uw,logdepthbuf_pars_fragment:cw,logdepthbuf_pars_vertex:fw,logdepthbuf_vertex:dw,map_fragment:hw,map_pars_fragment:pw,map_particle_fragment:mw,map_particle_pars_fragment:gw,metalnessmap_fragment:vw,metalnessmap_pars_fragment:xw,morphcolor_vertex:_w,morphnormal_vertex:yw,morphtarget_pars_vertex:Sw,morphtarget_vertex:Mw,normal_fragment_begin:ww,normal_fragment_maps:Ew,normal_pars_fragment:Tw,normal_pars_vertex:Aw,normal_vertex:Cw,normalmap_pars_fragment:Rw,clearcoat_normal_fragment_begin:Pw,clearcoat_normal_fragment_maps:bw,clearcoat_pars_fragment:Lw,iridescence_pars_fragment:Dw,output_fragment:Uw,packing:Nw,premultiplied_alpha_fragment:Iw,project_vertex:Fw,dithering_fragment:Ow,dithering_pars_fragment:zw,roughnessmap_fragment:Bw,roughnessmap_pars_fragment:kw,shadowmap_pars_fragment:Hw,shadowmap_pars_vertex:Gw,shadowmap_vertex:Vw,shadowmask_pars_fragment:Ww,skinbase_vertex:Xw,skinning_pars_vertex:jw,skinning_vertex:Yw,skinnormal_vertex:qw,specularmap_fragment:$w,specularmap_pars_fragment:Kw,tonemapping_fragment:Zw,tonemapping_pars_fragment:Jw,transmission_fragment:Qw,transmission_pars_fragment:eE,uv_pars_fragment:tE,uv_pars_vertex:nE,uv_vertex:iE,worldpos_vertex:rE,background_vert:sE,background_frag:oE,backgroundCube_vert:aE,backgroundCube_frag:lE,cube_vert:uE,cube_frag:cE,depth_vert:fE,depth_frag:dE,distanceRGBA_vert:hE,distanceRGBA_frag:pE,equirect_vert:mE,equirect_frag:gE,linedashed_vert:vE,linedashed_frag:xE,meshbasic_vert:_E,meshbasic_frag:yE,meshlambert_vert:SE,meshlambert_frag:ME,meshmatcap_vert:wE,meshmatcap_frag:EE,meshnormal_vert:TE,meshnormal_frag:AE,meshphong_vert:CE,meshphong_frag:RE,meshphysical_vert:PE,meshphysical_frag:bE,meshtoon_vert:LE,meshtoon_frag:DE,points_vert:UE,points_frag:NE,shadow_vert:IE,shadow_frag:FE,sprite_vert:OE,sprite_frag:zE},ae={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Qn={basic:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:qt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:qt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:qt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:qt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:qt([ae.lights,ae.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Qn.physical={uniforms:qt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Xa={r:0,b:0,g:0};function BE(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function v(m,h){let _=!1,g=h.isScene===!0?h.background:null;switch(g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===au)?(c===void 0&&(c=new It(new ra(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Hs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=g.colorSpace!==Ue,(f!==g||d!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new It(new Nd(2,2),new zr({name:"BackgroundMaterial",uniforms:Hs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Ue,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function x(m,h){m.getRGB(Xa,Av(t)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function kE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(V,W,ne,q,U){let B=!1;if(o){const G=x(q,ne,W);u!==G&&(u=G,p(u.object)),B=h(V,q,ne,U),B&&_(V,q,ne,U)}else{const G=W.wireframe===!0;(u.geometry!==q.id||u.program!==ne.id||u.wireframe!==G)&&(u.geometry=q.id,u.program=ne.id,u.wireframe=G,B=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,b(V,W,ne,q),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(V){return i.isWebGL2?t.bindVertexArray(V):s.bindVertexArrayOES(V)}function v(V){return i.isWebGL2?t.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function x(V,W,ne){const q=ne.wireframe===!0;let U=a[V.id];U===void 0&&(U={},a[V.id]=U);let B=U[W.id];B===void 0&&(B={},U[W.id]=B);let G=B[q];return G===void 0&&(G=m(d()),B[q]=G),G}function m(V){const W=[],ne=[],q=[];for(let U=0;U<r;U++)W[U]=0,ne[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ne,attributeDivisors:q,object:V,attributes:{},index:null}}function h(V,W,ne,q){const U=u.attributes,B=W.attributes;let G=0;const se=ne.getAttributes();for(const I in se)if(se[I].location>=0){const J=U[I];let he=B[I];if(he===void 0&&(I==="instanceMatrix"&&V.instanceMatrix&&(he=V.instanceMatrix),I==="instanceColor"&&V.instanceColor&&(he=V.instanceColor)),J===void 0||J.attribute!==he||he&&J.data!==he.data)return!0;G++}return u.attributesNum!==G||u.index!==q}function _(V,W,ne,q){const U={},B=W.attributes;let G=0;const se=ne.getAttributes();for(const I in se)if(se[I].location>=0){let J=B[I];J===void 0&&(I==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),I==="instanceColor"&&V.instanceColor&&(J=V.instanceColor));const he={};he.attribute=J,J&&J.data&&(he.data=J.data),U[I]=he,G++}u.attributes=U,u.attributesNum=G,u.index=q}function g(){const V=u.newAttributes;for(let W=0,ne=V.length;W<ne;W++)V[W]=0}function y(V){M(V,0)}function M(V,W){const ne=u.newAttributes,q=u.enabledAttributes,U=u.attributeDivisors;ne[V]=1,q[V]===0&&(t.enableVertexAttribArray(V),q[V]=1),U[V]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,W),U[V]=W)}function E(){const V=u.newAttributes,W=u.enabledAttributes;for(let ne=0,q=W.length;ne<q;ne++)W[ne]!==V[ne]&&(t.disableVertexAttribArray(ne),W[ne]=0)}function R(V,W,ne,q,U,B,G){G===!0?t.vertexAttribIPointer(V,W,ne,U,B):t.vertexAttribPointer(V,W,ne,q,U,B)}function b(V,W,ne,q){if(i.isWebGL2===!1&&(V.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=q.attributes,B=ne.getAttributes(),G=W.defaultAttributeValues;for(const se in B){const I=B[se];if(I.location>=0){let Q=U[se];if(Q===void 0&&(se==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),se==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),Q!==void 0){const J=Q.normalized,he=Q.itemSize,de=n.get(Q);if(de===void 0)continue;const xe=de.buffer,Fe=de.type,Ae=de.bytesPerElement,wt=i.isWebGL2===!0&&(Fe===t.INT||Fe===t.UNSIGNED_INT||Q.gpuType===uv);if(Q.isInterleavedBufferAttribute){const Ge=Q.data,F=Ge.stride,Lt=Q.offset;if(Ge.isInstancedInterleavedBuffer){for(let Ee=0;Ee<I.locationSize;Ee++)M(I.location+Ee,Ge.meshPerAttribute);V.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Ee=0;Ee<I.locationSize;Ee++)y(I.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Ee=0;Ee<I.locationSize;Ee++)R(I.location+Ee,he/I.locationSize,Fe,J,F*Ae,(Lt+he/I.locationSize*Ee)*Ae,wt)}else{if(Q.isInstancedBufferAttribute){for(let Ge=0;Ge<I.locationSize;Ge++)M(I.location+Ge,Q.meshPerAttribute);V.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ge=0;Ge<I.locationSize;Ge++)y(I.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Ge=0;Ge<I.locationSize;Ge++)R(I.location+Ge,he/I.locationSize,Fe,J,he*Ae,he/I.locationSize*Ge*Ae,wt)}}else if(G!==void 0){const J=G[se];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(I.location,J);break;case 3:t.vertexAttrib3fv(I.location,J);break;case 4:t.vertexAttrib4fv(I.location,J);break;default:t.vertexAttrib1fv(I.location,J)}}}}E()}function w(){ee();for(const V in a){const W=a[V];for(const ne in W){const q=W[ne];for(const U in q)v(q[U].object),delete q[U];delete W[ne]}delete a[V]}}function C(V){if(a[V.id]===void 0)return;const W=a[V.id];for(const ne in W){const q=W[ne];for(const U in q)v(q[U].object),delete q[U];delete W[ne]}delete a[V.id]}function H(V){for(const W in a){const ne=a[W];if(ne[V.id]===void 0)continue;const q=ne[V.id];for(const U in q)v(q[U].object),delete q[U];delete ne[V.id]}}function ee(){O(),c=!0,u!==l&&(u=l,p(u.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ee,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:H,initAttributes:g,enableAttribute:y,disableUnusedAttributes:E}}function HE(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,c,f),n.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function GE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=o||e.has("OES_texture_float"),M=g&&y,E=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function VE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xr,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,g=_*4;let y=h.clippingState||null;l.value=y,y=c(v,d,g,p);for(let M=0;M!==g;++M)y[M]=n[M];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const h=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,y=p;g!==x;++g,y+=4)o.copy(f[g]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function WE(t){let e=new WeakMap;function n(o,a){return a===_f?o.mapping=zs:a===yf&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===_f||a===yf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new oM(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cu extends Cv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ys=4,em=[.125,.215,.35,.446,.526,.582],yr=20,gc=new cu,tm=new We;let vc=null;const _r=(1+Math.sqrt(5))/2,rs=1/_r,nm=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,_r,rs),new D(0,_r,-rs),new D(rs,0,_r),new D(-rs,0,_r),new D(_r,rs,0),new D(-_r,rs,0)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){vc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc),e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:jo,format:Vn,colorSpace:ii,depthBuffer:!1},r=rm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XE(s)),this._blurMaterial=jE(s,e,n)}return r}_compileMaterial(e){const n=new It(this._lodPlanes[0],e);this._renderer.compile(n,gc)}_sceneToCubeUV(e,n,i,r){const a=new Hn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(tm),c.toneMapping=Mi,c.autoClear=!1;const p=new Ci({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),v=new It(new ra,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(tm),x=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const g=this._cubeSize;ja(r,_*g,h>2?g:0,g,g),c.setRenderTarget(r),x&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zs||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nm[(r-1)%nm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new It(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),x=s/v,m=isFinite(s)?1+Math.floor(c*x):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const h=[];let _=0;for(let R=0;R<yr;++R){const b=R/x,w=Math.exp(-b*b/2);h.push(w),R===0?_+=w:R<m&&(_+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const y=this._sizeLods[r],M=3*y*(r>g-ys?r-g+ys:0),E=4*(this._cubeSize-y);ja(n,M,E,3*y,2*y),l.setRenderTarget(n),l.render(f,gc)}}function XE(t){const e=[],n=[],i=[];let r=t;const s=t-ys+1+em.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ys?l=em[o-t+ys-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,v=6,x=3,m=2,h=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),y=new Float32Array(h*v*p);for(let E=0;E<p;E++){const R=E%3*2/3-1,b=E>2?0:-1,w=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];_.set(w,x*v*E),g.set(d,m*v*E);const C=[E,E,E,E,E,E];y.set(C,h*v*E)}const M=new qn;M.setAttribute("position",new Zt(_,x)),M.setAttribute("uv",new Zt(g,m)),M.setAttribute("faceIndex",new Zt(y,h)),e.push(M),r>ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function rm(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jE(t,e,n){const i=new Float32Array(yr),r=new D(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function sm(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function om(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Id(){return`

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
	`}function YE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===_f||l===yf,c=l===zs||l===Bs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new im(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new im(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function qE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $E(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const x=p[v];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,y=_.length;g<y;g+=3){const M=_[g+0],E=_[g+1],R=_[g+2];d.push(M,E,E,R,R,M)}}else{const _=v.array;x=v.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const M=g+0,E=g+1,R=g+2;d.push(M,E,E,R,R,M)}}const m=new(vv(d)?Tv:Ev)(d,1);m.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function KE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,p){t.drawElements(s,p,a,d*l),n.update(p,s,1)}function f(d,p,v){if(v===0)return;let x,m;if(r)x=t,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,p,a,d*l,v),n.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function ZE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JE(t,e){return t[0]-e[0]}function QE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function e1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Nt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=p!==void 0?p.length:0;let x=s.get(c);if(x===void 0||x.count!==v){let V=function(){ee.dispose(),s.delete(c),c.removeEventListener("dispose",V)};x!==void 0&&x.texture.dispose();const _=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let w=c.attributes.position.count*b,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const H=new Float32Array(w*C*4*v),ee=new yv(H,w,C,v);ee.type=Vi,ee.needsUpdate=!0;const O=b*4;for(let W=0;W<v;W++){const ne=M[W],q=E[W],U=R[W],B=w*C*4*W;for(let G=0;G<ne.count;G++){const se=G*O;_===!0&&(o.fromBufferAttribute(ne,G),H[B+se+0]=o.x,H[B+se+1]=o.y,H[B+se+2]=o.z,H[B+se+3]=0),g===!0&&(o.fromBufferAttribute(q,G),H[B+se+4]=o.x,H[B+se+5]=o.y,H[B+se+6]=o.z,H[B+se+7]=0),y===!0&&(o.fromBufferAttribute(U,G),H[B+se+8]=o.x,H[B+se+9]=o.y,H[B+se+10]=o.z,H[B+se+11]=U.itemSize===4?o.w:1)}}x={count:v,texture:ee,size:new K(w,C)},s.set(c,x),c.addEventListener("dispose",V)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const h=c.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",h),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let v=i[c.id];if(v===void 0||v.length!==p){v=[];for(let g=0;g<p;g++)v[g]=[g,0];i[c.id]=v}for(let g=0;g<p;g++){const y=v[g];y[0]=g,y[1]=d[g]}v.sort(QE);for(let g=0;g<8;g++)g<p&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(JE);const x=c.morphAttributes.position,m=c.morphAttributes.normal;let h=0;for(let g=0;g<8;g++){const y=a[g],M=y[0],E=y[1];M!==Number.MAX_SAFE_INTEGER&&E?(x&&c.getAttribute("morphTarget"+g)!==x[M]&&c.setAttribute("morphTarget"+g,x[M]),m&&c.getAttribute("morphNormal"+g)!==m[M]&&c.setAttribute("morphNormal"+g,m[M]),r[g]=E,h+=E):(x&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),m&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),r[g]=0)}const _=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function t1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Lv=new vn,Dv=new yv,Uv=new WS,Nv=new Rv,am=[],lm=[],um=new Float32Array(16),cm=new Float32Array(9),fm=new Float32Array(4);function Ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=am[r];if(s===void 0&&(s=new Float32Array(r),am[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fu(t,e){let n=lm[e];n===void 0&&(n=new Int32Array(e),lm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function n1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function i1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function r1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function s1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function o1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;fm.set(i),t.uniformMatrix2fv(this.addr,!1,fm),Mt(n,i)}}function a1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;cm.set(i),t.uniformMatrix3fv(this.addr,!1,cm),Mt(n,i)}}function l1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;um.set(i),t.uniformMatrix4fv(this.addr,!1,um),Mt(n,i)}}function u1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function h1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function g1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function v1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Lv,r)}function x1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Uv,r)}function _1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Nv,r)}function y1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Dv,r)}function S1(t){switch(t){case 5126:return n1;case 35664:return i1;case 35665:return r1;case 35666:return s1;case 35674:return o1;case 35675:return a1;case 35676:return l1;case 5124:case 35670:return u1;case 35667:case 35671:return c1;case 35668:case 35672:return f1;case 35669:case 35673:return d1;case 5125:return h1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return y1}}function M1(t,e){t.uniform1fv(this.addr,e)}function w1(t,e){const n=Ys(e,this.size,2);t.uniform2fv(this.addr,n)}function E1(t,e){const n=Ys(e,this.size,3);t.uniform3fv(this.addr,n)}function T1(t,e){const n=Ys(e,this.size,4);t.uniform4fv(this.addr,n)}function A1(t,e){const n=Ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function C1(t,e){const n=Ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function R1(t,e){const n=Ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function P1(t,e){t.uniform1iv(this.addr,e)}function b1(t,e){t.uniform2iv(this.addr,e)}function L1(t,e){t.uniform3iv(this.addr,e)}function D1(t,e){t.uniform4iv(this.addr,e)}function U1(t,e){t.uniform1uiv(this.addr,e)}function N1(t,e){t.uniform2uiv(this.addr,e)}function I1(t,e){t.uniform3uiv(this.addr,e)}function F1(t,e){t.uniform4uiv(this.addr,e)}function O1(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Lv,s[o])}function z1(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Uv,s[o])}function B1(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Nv,s[o])}function k1(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Dv,s[o])}function H1(t){switch(t){case 5126:return M1;case 35664:return w1;case 35665:return E1;case 35666:return T1;case 35674:return A1;case 35675:return C1;case 35676:return R1;case 5124:case 35670:return P1;case 35667:case 35671:return b1;case 35668:case 35672:return L1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return N1;case 36295:return I1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return k1}}class G1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=S1(n.type)}}class V1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=H1(n.type)}}class W1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function dm(t,e){t.seq.push(e),t.map[e.id]=e}function X1(t,e,n){const i=t.name,r=i.length;for(xc.lastIndex=0;;){const s=xc.exec(i),o=xc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){dm(n,u===void 0?new G1(a,t,e):new V1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new W1(a),dm(n,f)),n=f}}}class dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);X1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function hm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let j1=0;function Y1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function q1(t){switch(t){case ii:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function pm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Y1(t.getShaderSource(e),o)}else return r}function $1(t,e){const n=q1(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function K1(t,e){let n;switch(e){case aS:n="Linear";break;case lS:n="Reinhard";break;case uS:n="OptimizedCineon";break;case cS:n="ACESFilmic";break;case fS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Z1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fo).join(`
`)}function J1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Q1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fo(t){return t!==""}function mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(t){return t.replace(eT,tT)}function tT(t,e){const n=Ne[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Af(n)}const nT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(t){return t.replace(nT,iT)}function iT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===rv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===By?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function sT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case zs:case Bs:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function aT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case av:e="ENVMAP_BLENDING_MULTIPLY";break;case sS:e="ENVMAP_BLENDING_MIX";break;case oS:e="ENVMAP_BLENDING_ADD";break}return e}function lT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rT(n),u=sT(n),c=oT(n),f=aT(n),d=lT(n),p=n.isWebGL2?"":Z1(n),v=J1(s),x=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fo).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fo).join(`
`),h.length>0&&(h+=`
`)):(m=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),h=[p,xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Mi?K1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,$1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),o=Af(o),o=mm(o,n),o=gm(o,n),a=Af(a),a=mm(a,n),a=gm(a,n),o=vm(o),a=vm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=_+m+o,y=_+h+a,M=hm(r,r.VERTEX_SHADER,g),E=hm(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,M),r.attachShader(x,E),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const w=r.getProgramInfoLog(x).trim(),C=r.getShaderInfoLog(M).trim(),H=r.getShaderInfoLog(E).trim();let ee=!0,O=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,M,E);else{const V=pm(r,M,"vertex"),W=pm(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+V+`
`+W)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(C===""||H==="")&&(O=!1);O&&(this.diagnostics={runnable:ee,programLog:w,vertexShader:{log:C,prefix:m},fragmentShader:{log:H,prefix:h}})}r.deleteShader(M),r.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new dl(r,x)),R};let b;return this.getAttributes=function(){return b===void 0&&(b=Q1(r,x)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=j1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}let cT=0;class fT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dT(e),n.set(e,i)),i}}class dT{constructor(e){this.id=cT++,this.code=e,this.usedTimes=0}}function hT(t,e,n,i,r,s,o){const a=new Mv,l=new fT,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return w===0?"uv":`uv${w}`}function m(w,C,H,ee,O){const V=ee.fog,W=O.geometry,ne=w.isMeshStandardMaterial?ee.environment:null,q=(w.isMeshStandardMaterial?n:e).get(w.envMap||ne),U=q&&q.mapping===au?q.image.height:null,B=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const G=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=G!==void 0?G.length:0;let I=0;W.morphAttributes.position!==void 0&&(I=1),W.morphAttributes.normal!==void 0&&(I=2),W.morphAttributes.color!==void 0&&(I=3);let Q,J,he,de;if(B){const ft=Qn[B];Q=ft.vertexShader,J=ft.fragmentShader}else Q=w.vertexShader,J=w.fragmentShader,l.update(w),he=l.getVertexShaderID(w),de=l.getFragmentShaderID(w);const xe=t.getRenderTarget(),Fe=O.isInstancedMesh===!0,Ae=!!w.map,wt=!!w.matcap,Ge=!!q,F=!!w.aoMap,Lt=!!w.lightMap,Ee=!!w.bumpMap,Oe=!!w.normalMap,Ce=!!w.displacementMap,Ze=!!w.emissiveMap,ke=!!w.metalnessMap,Le=!!w.roughnessMap,qe=w.anisotropy>0,Dt=w.clearcoat>0,zt=w.iridescence>0,P=w.sheen>0,T=w.transmission>0,j=qe&&!!w.anisotropyMap,ie=Dt&&!!w.clearcoatMap,re=Dt&&!!w.clearcoatNormalMap,ue=Dt&&!!w.clearcoatRoughnessMap,_e=zt&&!!w.iridescenceMap,ce=zt&&!!w.iridescenceThicknessMap,$=P&&!!w.sheenColorMap,ye=P&&!!w.sheenRoughnessMap,Se=!!w.specularMap,we=!!w.specularColorMap,ge=!!w.specularIntensityMap,ve=T&&!!w.transmissionMap,ze=T&&!!w.thicknessMap,$e=!!w.gradientMap,L=!!w.alphaMap,le=w.alphaTest>0,k=!!w.extensions,oe=!!W.attributes.uv1,fe=!!W.attributes.uv2,je=!!W.attributes.uv3;return{isWebGL2:c,shaderID:B,shaderType:w.type,shaderName:w.name,vertexShader:Q,fragmentShader:J,defines:w.defines,customVertexShaderID:he,customFragmentShaderID:de,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ii,map:Ae,matcap:wt,envMap:Ge,envMapMode:Ge&&q.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:Lt,bumpMap:Ee,normalMap:Oe,displacementMap:d&&Ce,emissiveMap:Ze,normalMapObjectSpace:Oe&&w.normalMapType===TS,normalMapTangentSpace:Oe&&w.normalMapType===ES,metalnessMap:ke,roughnessMap:Le,anisotropy:qe,anisotropyMap:j,clearcoat:Dt,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:ue,iridescence:zt,iridescenceMap:_e,iridescenceThicknessMap:ce,sheen:P,sheenColorMap:$,sheenRoughnessMap:ye,specularMap:Se,specularColorMap:we,specularIntensityMap:ge,transmission:T,transmissionMap:ve,thicknessMap:ze,gradientMap:$e,opaque:w.transparent===!1&&w.blending===Ps,alphaMap:L,alphaTest:le,combine:w.combine,mapUv:Ae&&x(w.map.channel),aoMapUv:F&&x(w.aoMap.channel),lightMapUv:Lt&&x(w.lightMap.channel),bumpMapUv:Ee&&x(w.bumpMap.channel),normalMapUv:Oe&&x(w.normalMap.channel),displacementMapUv:Ce&&x(w.displacementMap.channel),emissiveMapUv:Ze&&x(w.emissiveMap.channel),metalnessMapUv:ke&&x(w.metalnessMap.channel),roughnessMapUv:Le&&x(w.roughnessMap.channel),anisotropyMapUv:j&&x(w.anisotropyMap.channel),clearcoatMapUv:ie&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:$&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(w.sheenRoughnessMap.channel),specularMapUv:Se&&x(w.specularMap.channel),specularColorMapUv:we&&x(w.specularColorMap.channel),specularIntensityMapUv:ge&&x(w.specularIntensityMap.channel),transmissionMapUv:ve&&x(w.transmissionMap.channel),thicknessMapUv:ze&&x(w.thicknessMap.channel),alphaMapUv:L&&x(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Oe||qe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:fe,vertexUv3s:je,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Ae||L),fog:!!V,useFog:w.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:I,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:w.toneMapped?t.toneMapping:Mi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gi,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:k&&w.extensions.derivatives===!0,extensionFragDepth:k&&w.extensions.fragDepth===!0,extensionDrawBuffers:k&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:k&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function h(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(_(C,w),g(C,w),C.push(t.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function _(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function g(w,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),w.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),w.push(a.mask)}function y(w){const C=v[w.type];let H;if(C){const ee=Qn[C];H=nM.clone(ee.uniforms)}else H=w.uniforms;return H}function M(w,C){let H;for(let ee=0,O=u.length;ee<O;ee++){const V=u[ee];if(V.cacheKey===C){H=V,++H.usedTimes;break}}return H===void 0&&(H=new uT(t,C,w,s),u.push(H)),H}function E(w){if(--w.usedTimes===0){const C=u.indexOf(w);u[C]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:M,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:b}}function pT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function mT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ym(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,v,x,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function a(f,d,p,v,x,m){const h=o(f,d,p,v,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,v,x,m){const h=o(f,d,p,v,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||mT),i.length>1&&i.sort(d||_m),r.length>1&&r.sort(d||_m)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function gT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ym,t.set(i,[o])):r>=s.length?(o=new ym,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function vT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new We};break;case"SpotLight":n={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function xT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _T=0;function yT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ST(t,e){const n=new vT,i=xT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new D);const s=new D,o=new yt,a=new yt;function l(c,f){let d=0,p=0,v=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let x=0,m=0,h=0,_=0,g=0,y=0,M=0,E=0,R=0,b=0;c.sort(yT);const w=f===!0?Math.PI:1;for(let H=0,ee=c.length;H<ee;H++){const O=c[H],V=O.color,W=O.intensity,ne=O.distance,q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=V.r*W*w,p+=V.g*W*w,v+=V.b*W*w;else if(O.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(O.sh.coefficients[U],W);else if(O.isDirectionalLight){const U=n.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const B=O.shadow,G=i.get(O);G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,r.directionalShadow[x]=G,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=O.shadow.matrix,y++}r.directional[x]=U,x++}else if(O.isSpotLight){const U=n.get(O);U.position.setFromMatrixPosition(O.matrixWorld),U.color.copy(V).multiplyScalar(W*w),U.distance=ne,U.coneCos=Math.cos(O.angle),U.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),U.decay=O.decay,r.spot[h]=U;const B=O.shadow;if(O.map&&(r.spotLightMap[R]=O.map,R++,B.updateMatrices(O),O.castShadow&&b++),r.spotLightMatrix[h]=B.matrix,O.castShadow){const G=i.get(O);G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,r.spotShadow[h]=G,r.spotShadowMap[h]=q,E++}h++}else if(O.isRectAreaLight){const U=n.get(O);U.color.copy(V).multiplyScalar(W),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),r.rectArea[_]=U,_++}else if(O.isPointLight){const U=n.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity*w),U.distance=O.distance,U.decay=O.decay,O.castShadow){const B=O.shadow,G=i.get(O);G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,r.pointShadow[m]=G,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=O.shadow.matrix,M++}r.point[m]=U,m++}else if(O.isHemisphereLight){const U=n.get(O);U.skyColor.copy(O.color).multiplyScalar(W*w),U.groundColor.copy(O.groundColor).multiplyScalar(W*w),r.hemi[g]=U,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==x||C.pointLength!==m||C.spotLength!==h||C.rectAreaLength!==_||C.hemiLength!==g||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==E||C.numSpotMaps!==R)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=E+R-b,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=b,C.directionalLength=x,C.pointLength=m,C.spotLength=h,C.rectAreaLength=_,C.hemiLength=g,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=E,C.numSpotMaps=R,r.version=_T++)}function u(c,f){let d=0,p=0,v=0,x=0,m=0;const h=f.matrixWorldInverse;for(let _=0,g=c.length;_<g;_++){const y=c[_];if(y.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),d++}else if(y.isSpotLight){const M=r.spot[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),v++}else if(y.isRectAreaLight){const M=r.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function Sm(t,e){const n=new ST(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function MT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Sm(t,e),n.set(s,[l])):o>=a.length?(l=new Sm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class wT extends ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ET extends ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AT=`uniform sampler2D shadow_pass;
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
}`;function CT(t,e,n){let i=new Pv;const r=new K,s=new K,o=new Nt,a=new wT({depthPacking:wS}),l=new ET,u={},c=n.maxTextureSize,f={[_n]:an,[an]:_n,[gi]:gi},d=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:TT,fragmentShader:AT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new qn;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new It(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rv;let h=this.type;this.render=function(M,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const b=t.getRenderTarget(),w=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Qi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const ee=h!==di&&this.type===di,O=h===di&&this.type!==di;for(let V=0,W=M.length;V<W;V++){const ne=M[V],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const U=q.getFrameExtents();if(r.multiply(U),s.copy(q.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/U.x),r.x=s.x*U.x,q.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/U.y),r.y=s.y*U.y,q.mapSize.y=s.y)),q.map===null||ee===!0||O===!0){const G=this.type!==di?{minFilter:Kt,magFilter:Kt}:{};q.map!==null&&q.map.dispose(),q.map=new Or(r.x,r.y,G),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const B=q.getViewportCount();for(let G=0;G<B;G++){const se=q.getViewport(G);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),H.viewport(o),q.updateMatrices(ne,G),i=q.getFrustum(),y(E,R,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===di&&_(q,R),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(b,w,C)};function _(M,E){const R=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Or(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(E,null,R,d,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(E,null,R,p,x,null)}function g(M,E,R,b){let w=null;const C=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)w=C;else if(w=R.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=w.uuid,ee=E.uuid;let O=u[H];O===void 0&&(O={},u[H]=O);let V=O[ee];V===void 0&&(V=w.clone(),O[ee]=V),w=V}if(w.visible=E.visible,w.wireframe=E.wireframe,b===di?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:f[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=t.properties.get(w);H.light=R}return w}function y(M,E,R,b,w){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===di)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const ee=e.update(M),O=M.material;if(Array.isArray(O)){const V=ee.groups;for(let W=0,ne=V.length;W<ne;W++){const q=V[W],U=O[q.materialIndex];if(U&&U.visible){const B=g(M,U,b,w);t.renderBufferDirect(R,null,ee,B,M,q)}}}else if(O.visible){const V=g(M,O,b,w);t.renderBufferDirect(R,null,ee,V,M,null)}}const H=M.children;for(let ee=0,O=H.length;ee<O;ee++)y(H[ee],E,R,b,w)}}function RT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const le=new Nt;let k=null;const oe=new Nt(0,0,0,0);return{setMask:function(fe){k!==fe&&!L&&(t.colorMask(fe,fe,fe,fe),k=fe)},setLocked:function(fe){L=fe},setClear:function(fe,je,ot,ft,ur){ur===!0&&(fe*=ft,je*=ft,ot*=ft),le.set(fe,je,ot,ft),oe.equals(le)===!1&&(t.clearColor(fe,je,ot,ft),oe.copy(le))},reset:function(){L=!1,k=null,oe.set(-1,0,0,0)}}}function s(){let L=!1,le=null,k=null,oe=null;return{setTest:function(fe){fe?xe(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(fe){le!==fe&&!L&&(t.depthMask(fe),le=fe)},setFunc:function(fe){if(k!==fe){switch(fe){case Jy:t.depthFunc(t.NEVER);break;case Qy:t.depthFunc(t.ALWAYS);break;case eS:t.depthFunc(t.LESS);break;case xf:t.depthFunc(t.LEQUAL);break;case tS:t.depthFunc(t.EQUAL);break;case nS:t.depthFunc(t.GEQUAL);break;case iS:t.depthFunc(t.GREATER);break;case rS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}k=fe}},setLocked:function(fe){L=fe},setClear:function(fe){oe!==fe&&(t.clearDepth(fe),oe=fe)},reset:function(){L=!1,le=null,k=null,oe=null}}}function o(){let L=!1,le=null,k=null,oe=null,fe=null,je=null,ot=null,ft=null,ur=null;return{setTest:function(at){L||(at?xe(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(at){le!==at&&!L&&(t.stencilMask(at),le=at)},setFunc:function(at,$n,jt){(k!==at||oe!==$n||fe!==jt)&&(t.stencilFunc(at,$n,jt),k=at,oe=$n,fe=jt)},setOp:function(at,$n,jt){(je!==at||ot!==$n||ft!==jt)&&(t.stencilOp(at,$n,jt),je=at,ot=$n,ft=jt)},setLocked:function(at){L=at},setClear:function(at){ur!==at&&(t.clearStencil(at),ur=at)},reset:function(){L=!1,le=null,k=null,oe=null,fe=null,je=null,ot=null,ft=null,ur=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},v=new WeakMap,x=[],m=null,h=!1,_=null,g=null,y=null,M=null,E=null,R=null,b=null,w=!1,C=null,H=null,ee=null,O=null,V=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,q=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(U)[1]),ne=q>=1):U.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),ne=q>=2);let B=null,G={};const se=t.getParameter(t.SCISSOR_BOX),I=t.getParameter(t.VIEWPORT),Q=new Nt().fromArray(se),J=new Nt().fromArray(I);function he(L,le,k,oe){const fe=new Uint8Array(4),je=t.createTexture();t.bindTexture(L,je),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<k;ot++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(le+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return je}const de={};de[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(de[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(t.DEPTH_TEST),l.setFunc(xf),Ce(!1),Ze(op),xe(t.CULL_FACE),Ee(Qi);function xe(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Fe(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ae(L,le){return p[L]!==le?(t.bindFramebuffer(L,le),p[L]=le,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=le),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function wt(L,le){let k=x,oe=!1;if(L)if(k=v.get(le),k===void 0&&(k=[],v.set(le,k)),L.isWebGLMultipleRenderTargets){const fe=L.texture;if(k.length!==fe.length||k[0]!==t.COLOR_ATTACHMENT0){for(let je=0,ot=fe.length;je<ot;je++)k[je]=t.COLOR_ATTACHMENT0+je;k.length=fe.length,oe=!0}}else k[0]!==t.COLOR_ATTACHMENT0&&(k[0]=t.COLOR_ATTACHMENT0,oe=!0);else k[0]!==t.BACK&&(k[0]=t.BACK,oe=!0);oe&&(n.isWebGL2?t.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function Ge(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const F={[os]:t.FUNC_ADD,[Hy]:t.FUNC_SUBTRACT,[Gy]:t.FUNC_REVERSE_SUBTRACT};if(i)F[cp]=t.MIN,F[fp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(F[cp]=L.MIN_EXT,F[fp]=L.MAX_EXT)}const Lt={[Vy]:t.ZERO,[Wy]:t.ONE,[Xy]:t.SRC_COLOR,[sv]:t.SRC_ALPHA,[Zy]:t.SRC_ALPHA_SATURATE,[$y]:t.DST_COLOR,[Yy]:t.DST_ALPHA,[jy]:t.ONE_MINUS_SRC_COLOR,[ov]:t.ONE_MINUS_SRC_ALPHA,[Ky]:t.ONE_MINUS_DST_COLOR,[qy]:t.ONE_MINUS_DST_ALPHA};function Ee(L,le,k,oe,fe,je,ot,ft){if(L===Qi){h===!0&&(Fe(t.BLEND),h=!1);return}if(h===!1&&(xe(t.BLEND),h=!0),L!==ky){if(L!==_||ft!==w){if((g!==os||E!==os)&&(t.blendEquation(t.FUNC_ADD),g=os,E=os),ft)switch(L){case Ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ap:t.blendFunc(t.ONE,t.ONE);break;case lp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ap:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case lp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case up:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,M=null,R=null,b=null,_=L,w=ft}return}fe=fe||le,je=je||k,ot=ot||oe,(le!==g||fe!==E)&&(t.blendEquationSeparate(F[le],F[fe]),g=le,E=fe),(k!==y||oe!==M||je!==R||ot!==b)&&(t.blendFuncSeparate(Lt[k],Lt[oe],Lt[je],Lt[ot]),y=k,M=oe,R=je,b=ot),_=L,w=!1}function Oe(L,le){L.side===gi?Fe(t.CULL_FACE):xe(t.CULL_FACE);let k=L.side===an;le&&(k=!k),Ce(k),L.blending===Ps&&L.transparent===!1?Ee(Qi):Ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const oe=L.stencilWrite;u.setTest(oe),oe&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){C!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),C=L)}function Ze(L){L!==Oy?(xe(t.CULL_FACE),L!==H&&(L===op?t.cullFace(t.BACK):L===zy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),H=L}function ke(L){L!==ee&&(ne&&t.lineWidth(L),ee=L)}function Le(L,le,k){L?(xe(t.POLYGON_OFFSET_FILL),(O!==le||V!==k)&&(t.polygonOffset(le,k),O=le,V=k)):Fe(t.POLYGON_OFFSET_FILL)}function qe(L){L?xe(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function Dt(L){L===void 0&&(L=t.TEXTURE0+W-1),B!==L&&(t.activeTexture(L),B=L)}function zt(L,le,k){k===void 0&&(B===null?k=t.TEXTURE0+W-1:k=B);let oe=G[k];oe===void 0&&(oe={type:void 0,texture:void 0},G[k]=oe),(oe.type!==L||oe.texture!==le)&&(B!==k&&(t.activeTexture(k),B=k),t.bindTexture(L,le||de[L]),oe.type=L,oe.texture=le)}function P(){const L=G[B];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function T(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){Q.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function ge(L){J.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function ve(L,le){let k=f.get(le);k===void 0&&(k=new WeakMap,f.set(le,k));let oe=k.get(L);oe===void 0&&(oe=t.getUniformBlockIndex(le,L.name),k.set(L,oe))}function ze(L,le){const oe=f.get(le).get(L);c.get(le)!==oe&&(t.uniformBlockBinding(le,oe,L.__bindingPointIndex),c.set(le,oe))}function $e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},B=null,G={},p={},v=new WeakMap,x=[],m=null,h=!1,_=null,g=null,y=null,M=null,E=null,R=null,b=null,w=!1,C=null,H=null,ee=null,O=null,V=null,Q.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:xe,disable:Fe,bindFramebuffer:Ae,drawBuffers:wt,useProgram:Ge,setBlending:Ee,setMaterial:Oe,setFlipSided:Ce,setCullFace:Ze,setLineWidth:ke,setPolygonOffset:Le,setScissorTest:qe,activeTexture:Dt,bindTexture:zt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:ye,texImage3D:Se,updateUBOMapping:ve,uniformBlockBinding:ze,texStorage2D:ce,texStorage3D:$,texSubImage2D:ie,texSubImage3D:re,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:we,viewport:ge,reset:$e}}function PT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return h?new OffscreenCanvas(P,T):Bl("canvas")}function g(P,T,j,ie){let re=1;if((P.width>ie||P.height>ie)&&(re=ie/Math.max(P.width,P.height)),re<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ue=T?Tf:Math.floor,_e=ue(re*P.width),ce=ue(re*P.height);x===void 0&&(x=_(_e,ce));const $=j?_(_e,ce):x;return $.width=_e,$.height=ce,$.getContext("2d").drawImage(P,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+_e+"x"+ce+")."),$}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return zp(P.width)&&zp(P.height)}function M(P){return a?!1:P.wrapS!==Gn||P.wrapT!==Gn||P.minFilter!==Kt&&P.minFilter!==Tn}function E(P,T){return P.generateMipmaps&&T&&P.minFilter!==Kt&&P.minFilter!==Tn}function R(P){t.generateMipmap(P)}function b(P,T,j,ie,re=!1){if(a===!1)return T;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=T;return T===t.RED&&(j===t.FLOAT&&(ue=t.R32F),j===t.HALF_FLOAT&&(ue=t.R16F),j===t.UNSIGNED_BYTE&&(ue=t.R8)),T===t.RG&&(j===t.FLOAT&&(ue=t.RG32F),j===t.HALF_FLOAT&&(ue=t.RG16F),j===t.UNSIGNED_BYTE&&(ue=t.RG8)),T===t.RGBA&&(j===t.FLOAT&&(ue=t.RGBA32F),j===t.HALF_FLOAT&&(ue=t.RGBA16F),j===t.UNSIGNED_BYTE&&(ue=ie===Ue&&re===!1?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)),(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function w(P,T,j){return E(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==Kt&&P.minFilter!==Tn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function C(P){return P===Kt||P===dp||P===Wu?t.NEAREST:t.LINEAR}function H(P){const T=P.target;T.removeEventListener("dispose",H),O(T),T.isVideoTexture&&v.delete(T)}function ee(P){const T=P.target;T.removeEventListener("dispose",ee),W(T)}function O(P){const T=i.get(P);if(T.__webglInit===void 0)return;const j=P.source,ie=m.get(j);if(ie){const re=ie[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&V(P),Object.keys(ie).length===0&&m.delete(j)}i.remove(P)}function V(P){const T=i.get(P);t.deleteTexture(T.__webglTexture);const j=P.source,ie=m.get(j);delete ie[T.__cacheKey],o.memory.textures--}function W(P){const T=P.texture,j=i.get(P),ie=i.get(T);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)t.deleteFramebuffer(j.__webglFramebuffer[re]),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[re]);else{if(t.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let re=0;re<j.__webglColorRenderbuffer.length;re++)j.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[re]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let re=0,ue=T.length;re<ue;re++){const _e=i.get(T[re]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(T[re])}i.remove(T),i.remove(P)}let ne=0;function q(){ne=0}function U(){const P=ne;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),ne+=1,P}function B(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function G(P,T){const j=i.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(j,P,T);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+T)}function se(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){Ae(j,P,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+T)}function I(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){Ae(j,P,T);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+T)}function Q(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){wt(j,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+T)}const J={[Sf]:t.REPEAT,[Gn]:t.CLAMP_TO_EDGE,[Mf]:t.MIRRORED_REPEAT},he={[Kt]:t.NEAREST,[dp]:t.NEAREST_MIPMAP_NEAREST,[Wu]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[dS]:t.LINEAR_MIPMAP_NEAREST,[Xo]:t.LINEAR_MIPMAP_LINEAR},de={[CS]:t.NEVER,[NS]:t.ALWAYS,[RS]:t.LESS,[bS]:t.LEQUAL,[PS]:t.EQUAL,[US]:t.GEQUAL,[LS]:t.GREATER,[DS]:t.NOTEQUAL};function xe(P,T,j){if(j?(t.texParameteri(P,t.TEXTURE_WRAP_S,J[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,J[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,J[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,he[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,he[T.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==Gn||T.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,C(T.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==Kt&&T.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,de[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Kt||T.minFilter!==Wu&&T.minFilter!==Xo||T.type===Vi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===jo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function Fe(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",H));const ie=T.source;let re=m.get(ie);re===void 0&&(re={},m.set(ie,re));const ue=B(T);if(ue!==P.__cacheKey){re[ue]===void 0&&(re[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),re[ue].usedTimes++;const _e=re[P.__cacheKey];_e!==void 0&&(re[P.__cacheKey].usedTimes--,_e.usedTimes===0&&V(T)),P.__cacheKey=ue,P.__webglTexture=re[ue].texture}return j}function Ae(P,T,j){let ie=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=t.TEXTURE_3D);const re=Fe(P,T),ue=T.source;n.bindTexture(ie,P.__webglTexture,t.TEXTURE0+j);const _e=i.get(ue);if(ue.version!==_e.__version||re===!0){n.activeTexture(t.TEXTURE0+j),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ce=M(T)&&y(T.image)===!1;let $=g(T.image,ce,!1,c);$=zt(T,$);const ye=y($)||a,Se=s.convert(T.format,T.colorSpace);let we=s.convert(T.type),ge=b(T.internalFormat,Se,we,T.colorSpace);xe(ie,T,ye);let ve;const ze=T.mipmaps,$e=a&&T.isVideoTexture!==!0,L=_e.__version===void 0||re===!0,le=w(T,$,ye);if(T.isDepthTexture)ge=t.DEPTH_COMPONENT,a?T.type===Vi?ge=t.DEPTH_COMPONENT32F:T.type===Gi?ge=t.DEPTH_COMPONENT24:T.type===Rr?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:T.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Pr&&ge===t.DEPTH_COMPONENT&&T.type!==Ud&&T.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Gi,we=s.convert(T.type)),T.format===ks&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,T.type!==Rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Rr,we=s.convert(T.type))),L&&($e?n.texStorage2D(t.TEXTURE_2D,1,ge,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,ge,$.width,$.height,0,Se,we,null));else if(T.isDataTexture)if(ze.length>0&&ye){$e&&L&&n.texStorage2D(t.TEXTURE_2D,le,ge,ze[0].width,ze[0].height);for(let k=0,oe=ze.length;k<oe;k++)ve=ze[k],$e?n.texSubImage2D(t.TEXTURE_2D,k,0,0,ve.width,ve.height,Se,we,ve.data):n.texImage2D(t.TEXTURE_2D,k,ge,ve.width,ve.height,0,Se,we,ve.data);T.generateMipmaps=!1}else $e?(L&&n.texStorage2D(t.TEXTURE_2D,le,ge,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,Se,we,$.data)):n.texImage2D(t.TEXTURE_2D,0,ge,$.width,$.height,0,Se,we,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$e&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,ze[0].width,ze[0].height,$.depth);for(let k=0,oe=ze.length;k<oe;k++)ve=ze[k],T.format!==Vn?Se!==null?$e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,ve.width,ve.height,$.depth,Se,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,k,ge,ve.width,ve.height,$.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,ve.width,ve.height,$.depth,Se,we,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,k,ge,ve.width,ve.height,$.depth,0,Se,we,ve.data)}else{$e&&L&&n.texStorage2D(t.TEXTURE_2D,le,ge,ze[0].width,ze[0].height);for(let k=0,oe=ze.length;k<oe;k++)ve=ze[k],T.format!==Vn?Se!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_2D,k,0,0,ve.width,ve.height,Se,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,k,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage2D(t.TEXTURE_2D,k,0,0,ve.width,ve.height,Se,we,ve.data):n.texImage2D(t.TEXTURE_2D,k,ge,ve.width,ve.height,0,Se,we,ve.data)}else if(T.isDataArrayTexture)$e?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Se,we,$.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,$.width,$.height,$.depth,0,Se,we,$.data);else if(T.isData3DTexture)$e?(L&&n.texStorage3D(t.TEXTURE_3D,le,ge,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Se,we,$.data)):n.texImage3D(t.TEXTURE_3D,0,ge,$.width,$.height,$.depth,0,Se,we,$.data);else if(T.isFramebufferTexture){if(L)if($e)n.texStorage2D(t.TEXTURE_2D,le,ge,$.width,$.height);else{let k=$.width,oe=$.height;for(let fe=0;fe<le;fe++)n.texImage2D(t.TEXTURE_2D,fe,ge,k,oe,0,Se,we,null),k>>=1,oe>>=1}}else if(ze.length>0&&ye){$e&&L&&n.texStorage2D(t.TEXTURE_2D,le,ge,ze[0].width,ze[0].height);for(let k=0,oe=ze.length;k<oe;k++)ve=ze[k],$e?n.texSubImage2D(t.TEXTURE_2D,k,0,0,Se,we,ve):n.texImage2D(t.TEXTURE_2D,k,ge,Se,we,ve);T.generateMipmaps=!1}else $e?(L&&n.texStorage2D(t.TEXTURE_2D,le,ge,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,we,$)):n.texImage2D(t.TEXTURE_2D,0,ge,Se,we,$);E(T,ye)&&R(ie),_e.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function wt(P,T,j){if(T.image.length!==6)return;const ie=Fe(P,T),re=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+j);const ue=i.get(re);if(re.version!==ue.__version||ie===!0){n.activeTexture(t.TEXTURE0+j),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,$=[];for(let k=0;k<6;k++)!_e&&!ce?$[k]=g(T.image[k],!1,!0,u):$[k]=ce?T.image[k].image:T.image[k],$[k]=zt(T,$[k]);const ye=$[0],Se=y(ye)||a,we=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),ve=b(T.internalFormat,we,ge,T.colorSpace),ze=a&&T.isVideoTexture!==!0,$e=ue.__version===void 0||ie===!0;let L=w(T,ye,Se);xe(t.TEXTURE_CUBE_MAP,T,Se);let le;if(_e){ze&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ve,ye.width,ye.height);for(let k=0;k<6;k++){le=$[k].mipmaps;for(let oe=0;oe<le.length;oe++){const fe=le[oe];T.format!==Vn?we!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe,0,0,fe.width,fe.height,we,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe,0,0,fe.width,fe.height,we,ge,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe,ve,fe.width,fe.height,0,we,ge,fe.data)}}}else{le=T.mipmaps,ze&&$e&&(le.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ve,$[0].width,$[0].height));for(let k=0;k<6;k++)if(ce){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,$[k].width,$[k].height,we,ge,$[k].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ve,$[k].width,$[k].height,0,we,ge,$[k].data);for(let oe=0;oe<le.length;oe++){const je=le[oe].image[k].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe+1,0,0,je.width,je.height,we,ge,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe+1,ve,je.width,je.height,0,we,ge,je.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,we,ge,$[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ve,we,ge,$[k]);for(let oe=0;oe<le.length;oe++){const fe=le[oe];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe+1,0,0,we,ge,fe.image[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe+1,ve,we,ge,fe.image[k])}}}E(T,Se)&&R(t.TEXTURE_CUBE_MAP),ue.__version=re.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ge(P,T,j,ie,re){const ue=s.convert(j.format,j.colorSpace),_e=s.convert(j.type),ce=b(j.internalFormat,ue,_e,j.colorSpace);i.get(T).__hasExternalTextures||(re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,0,ce,T.width,T.height,T.depth,0,ue,_e,null):n.texImage2D(re,0,ce,T.width,T.height,0,ue,_e,null)),n.bindFramebuffer(t.FRAMEBUFFER,P),qe(T)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,re,i.get(j).__webglTexture,0,Le(T)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,re,i.get(j).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(P,T,j){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let ie=t.DEPTH_COMPONENT16;if(j||qe(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===Vi?ie=t.DEPTH_COMPONENT32F:re.type===Gi&&(ie=t.DEPTH_COMPONENT24));const ue=Le(T);qe(T)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ie,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ie,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const ie=Le(T);j&&qe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,T.width,T.height):qe(T)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const ie=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0;re<ie.length;re++){const ue=ie[re],_e=s.convert(ue.format,ue.colorSpace),ce=s.convert(ue.type),$=b(ue.internalFormat,_e,ce,ue.colorSpace),ye=Le(T);j&&qe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,$,T.width,T.height):qe(T)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,$,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,$,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Lt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const ie=i.get(T.depthTexture).__webglTexture,re=Le(T);if(T.depthTexture.format===Pr)qe(T)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(T.depthTexture.format===ks)qe(T)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ee(P){const T=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Lt(T.__webglFramebuffer,P)}else if(j){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]=t.createRenderbuffer(),F(T.__webglDepthbuffer[ie],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),F(T.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(P,T,j){const ie=i.get(P);T!==void 0&&Ge(ie.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),j!==void 0&&Ee(P)}function Ce(P){const T=P.texture,j=i.get(P),ie=i.get(T);P.addEventListener("dispose",ee),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=T.version,o.memory.textures++);const re=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,_e=y(P)||a;if(re){j.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)j.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(j.__webglFramebuffer=t.createFramebuffer(),ue)if(r.drawBuffers){const ce=P.texture;for(let $=0,ye=ce.length;$<ye;$++){const Se=i.get(ce[$]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&qe(P)===!1){const ce=ue?T:[T];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let $=0;$<ce.length;$++){const ye=ce[$];j.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[$]);const Se=s.convert(ye.format,ye.colorSpace),we=s.convert(ye.type),ge=b(ye.internalFormat,Se,we,ye.colorSpace,P.isXRRenderTarget===!0),ve=Le(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ge,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,j.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),F(j.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),xe(t.TEXTURE_CUBE_MAP,T,_e);for(let ce=0;ce<6;ce++)Ge(j.__webglFramebuffer[ce],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce);E(T,_e)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const ce=P.texture;for(let $=0,ye=ce.length;$<ye;$++){const Se=ce[$],we=i.get(Se);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),xe(t.TEXTURE_2D,Se,_e),Ge(j.__webglFramebuffer,P,Se,t.COLOR_ATTACHMENT0+$,t.TEXTURE_2D),E(Se,_e)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,ie.__webglTexture),xe(ce,T,_e),Ge(j.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,ce),E(T,_e)&&R(ce),n.unbindTexture()}P.depthBuffer&&Ee(P)}function Ze(P){const T=y(P)||a,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,re=j.length;ie<re;ie++){const ue=j[ie];if(E(ue,T)){const _e=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(ue).__webglTexture;n.bindTexture(_e,ce),R(_e),n.unbindTexture()}}}function ke(P){if(a&&P.samples>0&&qe(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,ie=P.height;let re=t.COLOR_BUFFER_BIT;const ue=[],_e=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(P),$=P.isWebGLMultipleRenderTargets===!0;if($)for(let ye=0;ye<T.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){ue.push(t.COLOR_ATTACHMENT0+ye),P.depthBuffer&&ue.push(_e);const Se=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Se===!1&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),$&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]),Se===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),$){const we=i.get(T[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,j,ie,0,0,j,ie,re,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let ye=0;ye<T.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const Se=i.get(T[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(P){return Math.min(f,P.samples)}function qe(P){const T=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Dt(P){const T=o.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function zt(P,T){const j=P.colorSpace,ie=P.format,re=P.type;return P.isCompressedTexture===!0||P.format===wf||j!==ii&&j!==Lr&&(j===Ue?a===!1?e.has("EXT_sRGB")===!0&&ie===Vn?(P.format=wf,P.minFilter=Tn,P.generateMipmaps=!1):T=xv.sRGBToLinear(T):(ie!==Vn||re!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}this.allocateTextureUnit=U,this.resetTextureUnits=q,this.setTexture2D=G,this.setTexture2DArray=se,this.setTexture3D=I,this.setTextureCube=Q,this.rebindTextures=Oe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=qe}function bT(t,e,n){const i=n.isWebGL2;function r(s,o=Lr){let a;if(s===er)return t.UNSIGNED_BYTE;if(s===cv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===fv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===hS)return t.BYTE;if(s===pS)return t.SHORT;if(s===Ud)return t.UNSIGNED_SHORT;if(s===uv)return t.INT;if(s===Gi)return t.UNSIGNED_INT;if(s===Vi)return t.FLOAT;if(s===jo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===mS)return t.ALPHA;if(s===Vn)return t.RGBA;if(s===gS)return t.LUMINANCE;if(s===vS)return t.LUMINANCE_ALPHA;if(s===Pr)return t.DEPTH_COMPONENT;if(s===ks)return t.DEPTH_STENCIL;if(s===wf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===xS)return t.RED;if(s===dv)return t.RED_INTEGER;if(s===_S)return t.RG;if(s===hv)return t.RG_INTEGER;if(s===pv)return t.RGBA_INTEGER;if(s===Xu||s===ju||s===Yu||s===qu)if(o===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ju)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hp||s===pp||s===mp||s===gp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===hp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vp||s===xp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===vp)return o===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_p||s===yp||s===Sp||s===Mp||s===wp||s===Ep||s===Tp||s===Ap||s===Cp||s===Rp||s===Pp||s===bp||s===Lp||s===Dp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===_p)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ep)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ap)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$u)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===$u)return o===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===SS||s===Up||s===Np||s===Ip)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===$u)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Up)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Np)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class LT extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DT={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(u,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class UT extends vn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Pr,c!==Pr&&c!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Pr&&(i=Gi),i===void 0&&c===ks&&(i=Rr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class NT extends Xs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,v=null;const x=n.getContextAttributes();let m=null,h=null;const _=[],g=[];let y=null;const M=new Hn;M.layers.enable(1),M.viewport=new Nt;const E=new Hn;E.layers.enable(2),E.viewport=new Nt;const R=[M,E],b=new LT;b.layers.enable(1),b.layers.enable(2);let w=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(I){y=I},this.getController=function(I){let Q=_[I];return Q===void 0&&(Q=new _c,_[I]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(I){let Q=_[I];return Q===void 0&&(Q=new _c,_[I]=Q),Q.getGripSpace()},this.getHand=function(I){let Q=_[I];return Q===void 0&&(Q=new _c,_[I]=Q),Q.getHandSpace()};function H(I){const Q=g.indexOf(I.inputSource);if(Q===-1)return;const J=_[Q];J!==void 0&&(J.update(I.inputSource,I.frame,u||o),J.dispatchEvent({type:I.type,data:I.inputSource}))}function ee(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",O);for(let I=0;I<_.length;I++){const Q=g[I];Q!==null&&(g[I]=null,_[I].disconnect(Q))}w=null,C=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),h=new Or(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:er,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,J=null,he=null;x.depth&&(he=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=x.stencil?ks:Pr,J=x.stencil?Rr:Gi);const de={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(de),r.updateRenderState({layers:[d]}),h=new Or(d.textureWidth,d.textureHeight,{format:Vn,type:er,depthTexture:new UT(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const xe=e.properties.get(h);xe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(I){for(let Q=0;Q<I.removed.length;Q++){const J=I.removed[Q],he=g.indexOf(J);he>=0&&(g[he]=null,_[he].disconnect(J))}for(let Q=0;Q<I.added.length;Q++){const J=I.added[Q];let he=g.indexOf(J);if(he===-1){for(let xe=0;xe<_.length;xe++)if(xe>=g.length){g.push(J),he=xe;break}else if(g[xe]===null){g[xe]=J,he=xe;break}if(he===-1)break}const de=_[he];de&&de.connect(J)}}const V=new D,W=new D;function ne(I,Q,J){V.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(J.matrixWorld);const he=V.distanceTo(W),de=Q.projectionMatrix.elements,xe=J.projectionMatrix.elements,Fe=de[14]/(de[10]-1),Ae=de[14]/(de[10]+1),wt=(de[9]+1)/de[5],Ge=(de[9]-1)/de[5],F=(de[8]-1)/de[0],Lt=(xe[8]+1)/xe[0],Ee=Fe*F,Oe=Fe*Lt,Ce=he/(-F+Lt),Ze=Ce*-F;Q.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ze),I.translateZ(Ce),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const ke=Fe+Ce,Le=Ae+Ce,qe=Ee-Ze,Dt=Oe+(he-Ze),zt=wt*Ae/Le*ke,P=Ge*Ae/Le*ke;I.projectionMatrix.makePerspective(qe,Dt,zt,P,ke,Le),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function q(I,Q){Q===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(Q.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCameraXR=function(I){if(r===null)return I;y&&(I=y),b.near=E.near=M.near=I.near,b.far=E.far=M.far=I.far,(w!==b.near||C!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,C=b.far);const Q=I.parent,J=b.cameras;q(b,Q);for(let he=0;he<J.length;he++)q(J[he],Q);return J.length===2?ne(b,M,E):b.projectionMatrix.copy(M.projectionMatrix),y&&U(b,Q),b};function U(I,Q){const J=y;Q===null?J.matrix.copy(I.matrixWorld):(J.matrix.copy(Q.matrixWorld),J.matrix.invert(),J.matrix.multiply(I.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0);const he=J.children;for(let de=0,xe=he.length;de<xe;de++)he[de].updateMatrixWorld(!0);J.projectionMatrix.copy(I.projectionMatrix),J.projectionMatrixInverse.copy(I.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ef*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)};let B=null;function G(I,Q){if(c=Q.getViewerPose(u||o),v=Q,c!==null){const J=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let he=!1;J.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let de=0;de<J.length;de++){const xe=J[de];let Fe=null;if(p!==null)Fe=p.getViewport(xe);else{const wt=f.getViewSubImage(d,xe);Fe=wt.viewport,de===0&&(e.setRenderTargetTextures(h,wt.colorTexture,d.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(h))}let Ae=R[de];Ae===void 0&&(Ae=new Hn,Ae.layers.enable(de),Ae.viewport=new Nt,R[de]=Ae),Ae.matrix.fromArray(xe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(xe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),de===0&&(b.matrix.copy(Ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(Ae)}}for(let J=0;J<_.length;J++){const he=g[J],de=_[J];he!==null&&de!==void 0&&de.update(he,Q,u||o)}B&&B(I,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),v=null}const se=new bv;se.setAnimationLoop(G),this.setAnimationLoop=function(I){B=I},this.dispose=function(){}}}function IT(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Av(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,g,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,g):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===an&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===an&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function u(_,g){let y=r[_.id];y===void 0&&(v(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const M=g.program;i.updateUBOMapping(_,M);const E=e.render.frame;s[_.id]!==E&&(d(_),s[_.id]=E)}function c(_){const g=f();_.__bindingPointIndex=g;const y=t.createBuffer(),M=_.__size,E=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],y=_.uniforms,M=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let E=0,R=y.length;E<R;E++){const b=y[E];if(p(b,E,M)===!0){const w=b.__offset,C=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let ee=0;ee<C.length;ee++){const O=C[ee],V=x(O);typeof O=="number"?(b.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,w+H,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=O.elements[0],b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=O.elements[0],b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=O.elements[0]):(O.toArray(b.__data,H),H+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,w,b.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,y){const M=_.value;if(y[g]===void 0){if(typeof M=="number")y[g]=M;else{const E=Array.isArray(M)?M:[M],R=[];for(let b=0;b<E.length;b++)R.push(E[b].clone());y[g]=R}return!0}else if(typeof M=="number"){if(y[g]!==M)return y[g]=M,!0}else{const E=Array.isArray(y[g])?y[g]:[y[g]],R=Array.isArray(M)?M:[M];for(let b=0;b<E.length;b++){const w=E[b];if(w.equals(R[b])===!1)return w.copy(R[b]),!0}}return!1}function v(_){const g=_.uniforms;let y=0;const M=16;let E=0;for(let R=0,b=g.length;R<b;R++){const w=g[R],C={boundary:0,storage:0},H=Array.isArray(w.value)?w.value:[w.value];for(let ee=0,O=H.length;ee<O;ee++){const V=H[ee],W=x(V);C.boundary+=W.boundary,C.storage+=W.storage}if(w.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,R>0){E=y%M;const ee=M-E;E!==0&&ee-C.boundary<0&&(y+=M-E,w.__offset=y)}y+=C.storage}return E=y%M,E>0&&(y+=M-E),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}function OT(){const t=Bl("canvas");return t.style.display="block",t}class Fd{constructor(e={}){const{canvas:n=OT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this.useLegacyLights=!0,this.toneMapping=Mi,this.toneMappingExposure=1;const g=this;let y=!1,M=0,E=0,R=null,b=-1,w=null;const C=new Nt,H=new Nt;let ee=null;const O=new We(0);let V=0,W=n.width,ne=n.height,q=1,U=null,B=null;const G=new Nt(0,0,W,ne),se=new Nt(0,0,W,ne);let I=!1;const Q=new Pv;let J=!1,he=!1,de=null;const xe=new yt,Fe=new K,Ae=new D,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return R===null?q:1}let F=i;function Lt(A,z){for(let X=0;X<A.length;X++){const N=A[X],Y=n.getContext(N,z);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dd}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",oe,!1),F===null){const z=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&z.shift(),F=Lt(z,A),F===null)throw Lt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,Oe,Ce,Ze,ke,Le,qe,Dt,zt,P,T,j,ie,re,ue,_e,ce,$,ye,Se,we,ge,ve,ze;function $e(){Ee=new qE(F),Oe=new GE(F,Ee,e),Ee.init(Oe),ge=new bT(F,Ee,Oe),Ce=new RT(F,Ee,Oe),Ze=new ZE(F),ke=new pT,Le=new PT(F,Ee,Ce,ke,Oe,ge,Ze),qe=new WE(g),Dt=new YE(g),zt=new uM(F,Oe),ve=new kE(F,Ee,zt,Oe),P=new $E(F,zt,Ze,ve),T=new t1(F,P,zt,Ze),ye=new e1(F,Oe,Le),_e=new VE(ke),j=new hT(g,qe,Dt,Ee,Oe,ve,_e),ie=new IT(g,ke),re=new gT,ue=new MT(Ee,Oe),$=new BE(g,qe,Dt,Ce,T,d,l),ce=new CT(g,T,Oe),ze=new FT(F,Ze,Oe,Ce),Se=new HE(F,Ee,Ze,Oe),we=new KE(F,Ee,Ze,Oe),Ze.programs=j.programs,g.capabilities=Oe,g.extensions=Ee,g.properties=ke,g.renderLists=re,g.shadowMap=ce,g.state=Ce,g.info=Ze}$e();const L=new NT(g,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(W,ne,!1))},this.getSize=function(A){return A.set(W,ne)},this.setSize=function(A,z,X=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,ne=z,n.width=Math.floor(A*q),n.height=Math.floor(z*q),X===!0&&(n.style.width=A+"px",n.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(W*q,ne*q).floor()},this.setDrawingBufferSize=function(A,z,X){W=A,ne=z,q=X,n.width=Math.floor(A*X),n.height=Math.floor(z*X),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(G)},this.setViewport=function(A,z,X,N){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,z,X,N),Ce.viewport(C.copy(G).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,z,X,N){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,z,X,N),Ce.scissor(H.copy(se).multiplyScalar(q).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(A){Ce.setScissorTest(I=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,z=!0,X=!0){let N=0;if(A){let Y=!1;if(R!==null){const me=R.texture.format;Y=me===pv||me===hv||me===dv}if(Y){const me=R.texture.type,Me=me===er||me===Gi||me===Ud||me===Rr||me===cv||me===fv,Te=$.getClearColor(),Re=$.getClearAlpha(),Be=Te.r,Pe=Te.g,De=Te.b,Je=ke.get(R).__webglFramebuffer;Me?(p[0]=Be,p[1]=Pe,p[2]=De,p[3]=Re,F.clearBufferuiv(F.COLOR,Je,p)):(v[0]=Be,v[1]=Pe,v[2]=De,v[3]=Re,F.clearBufferiv(F.COLOR,Je,v))}else N|=F.COLOR_BUFFER_BIT}z&&(N|=F.DEPTH_BUFFER_BIT),X&&(N|=F.STENCIL_BUFFER_BIT),F.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),re.dispose(),ue.dispose(),ke.dispose(),qe.dispose(),Dt.dispose(),T.dispose(),ve.dispose(),ze.dispose(),j.dispose(),L.dispose(),L.removeEventListener("sessionstart",at),L.removeEventListener("sessionend",$n),de&&(de.dispose(),de=null),jt.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Ze.autoReset,z=ce.enabled,X=ce.autoUpdate,N=ce.needsUpdate,Y=ce.type;$e(),Ze.autoReset=A,ce.enabled=z,ce.autoUpdate=X,ce.needsUpdate=N,ce.type=Y}function oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const z=A.target;z.removeEventListener("dispose",fe),je(z)}function je(A){ot(A),ke.remove(A)}function ot(A){const z=ke.get(A).programs;z!==void 0&&(z.forEach(function(X){j.releaseProgram(X)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,X,N,Y,me){z===null&&(z=wt);const Me=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=ox(A,z,X,N,Y);Ce.setMaterial(N,Me);let Re=X.index,Be=1;N.wireframe===!0&&(Re=P.getWireframeAttribute(X),Be=2);const Pe=X.drawRange,De=X.attributes.position;let Je=Pe.start*Be,ut=(Pe.start+Pe.count)*Be;me!==null&&(Je=Math.max(Je,me.start*Be),ut=Math.min(ut,(me.start+me.count)*Be)),Re!==null?(Je=Math.max(Je,0),ut=Math.min(ut,Re.count)):De!=null&&(Je=Math.max(Je,0),ut=Math.min(ut,De.count));const Ln=ut-Je;if(Ln<0||Ln===1/0)return;ve.setup(Y,N,Te,X,Re);let si,dt=Se;if(Re!==null&&(si=zt.get(Re),dt=we,dt.setIndex(si)),Y.isMesh)N.wireframe===!0?(Ce.setLineWidth(N.wireframeLinewidth*Ge()),dt.setMode(F.LINES)):dt.setMode(F.TRIANGLES);else if(Y.isLine){let Ve=N.linewidth;Ve===void 0&&(Ve=1),Ce.setLineWidth(Ve*Ge()),Y.isLineSegments?dt.setMode(F.LINES):Y.isLineLoop?dt.setMode(F.LINE_LOOP):dt.setMode(F.LINE_STRIP)}else Y.isPoints?dt.setMode(F.POINTS):Y.isSprite&&dt.setMode(F.TRIANGLES);if(Y.isInstancedMesh)dt.renderInstances(Je,Ln,Y.count);else if(X.isInstancedBufferGeometry){const Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pu=Math.min(X.instanceCount,Ve);dt.renderInstances(Je,Ln,pu)}else dt.render(Je,Ln)},this.compile=function(A,z){function X(N,Y,me){N.transparent===!0&&N.side===gi&&N.forceSinglePass===!1?(N.side=an,N.needsUpdate=!0,la(N,Y,me),N.side=_n,N.needsUpdate=!0,la(N,Y,me),N.side=gi):la(N,Y,me)}m=ue.get(A),m.init(),_.push(m),A.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(g.useLegacyLights),A.traverse(function(N){const Y=N.material;if(Y)if(Array.isArray(Y))for(let me=0;me<Y.length;me++){const Me=Y[me];X(Me,A,N)}else X(Y,A,N)}),_.pop(),m=null};let ft=null;function ur(A){ft&&ft(A)}function at(){jt.stop()}function $n(){jt.start()}const jt=new bv;jt.setAnimationLoop(ur),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(A){ft=A,L.setAnimationLoop(A),A===null?jt.stop():jt.start()},L.addEventListener("sessionstart",at),L.addEventListener("sessionend",$n),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(z=L.updateCameraXR(z)),A.isScene===!0&&A.onBeforeRender(g,A,z,R),m=ue.get(A,_.length),m.init(),_.push(m),xe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(xe),he=this.localClippingEnabled,J=_e.init(this.clippingPlanes,he),x=re.get(A,h.length),x.init(),h.push(x),Xd(A,z,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(U,B),J===!0&&_e.beginShadows();const X=m.state.shadowsArray;if(ce.render(X,A,z),J===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,$.render(x,A),m.setupLights(g.useLegacyLights),z.isArrayCamera){const N=z.cameras;for(let Y=0,me=N.length;Y<me;Y++){const Me=N[Y];jd(x,A,Me,Me.viewport)}}else jd(x,A,z);R!==null&&(Le.updateMultisampleRenderTarget(R),Le.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(g,A,z),ve.resetDefaultState(),b=-1,w=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Xd(A,z,X,N){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){N&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const Me=T.update(A),Te=A.material;Te.visible&&x.push(A,Me,Te,X,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==Ze.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ze.render.frame);const Me=T.update(A),Te=A.material;if(N&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ae.copy(Me.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){const Re=Me.groups;for(let Be=0,Pe=Re.length;Be<Pe;Be++){const De=Re[Be],Je=Te[De.materialIndex];Je&&Je.visible&&x.push(A,Me,Je,X,Ae.z,De)}}else Te.visible&&x.push(A,Me,Te,X,Ae.z,null)}}const me=A.children;for(let Me=0,Te=me.length;Me<Te;Me++)Xd(me[Me],z,X,N)}function jd(A,z,X,N){const Y=A.opaque,me=A.transmissive,Me=A.transparent;m.setupLightsView(X),J===!0&&_e.setGlobalState(g.clippingPlanes,X),me.length>0&&sx(Y,me,z,X),N&&Ce.viewport(C.copy(N)),Y.length>0&&aa(Y,z,X),me.length>0&&aa(me,z,X),Me.length>0&&aa(Me,z,X),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function sx(A,z,X,N){const Y=Oe.isWebGL2;de===null&&(de=new Or(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?jo:er,minFilter:Xo,samples:Y&&a===!0?4:0})),g.getDrawingBufferSize(Fe),Y?de.setSize(Fe.x,Fe.y):de.setSize(Tf(Fe.x),Tf(Fe.y));const me=g.getRenderTarget();g.setRenderTarget(de),g.getClearColor(O),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),g.clear();const Me=g.toneMapping;g.toneMapping=Mi,aa(A,X,N),Le.updateMultisampleRenderTarget(de),Le.updateRenderTargetMipmap(de);let Te=!1;for(let Re=0,Be=z.length;Re<Be;Re++){const Pe=z[Re],De=Pe.object,Je=Pe.geometry,ut=Pe.material,Ln=Pe.group;if(ut.side===gi&&De.layers.test(N.layers)){const si=ut.side;ut.side=an,ut.needsUpdate=!0,Yd(De,X,N,Je,ut,Ln),ut.side=si,ut.needsUpdate=!0,Te=!0}}Te===!0&&(Le.updateMultisampleRenderTarget(de),Le.updateRenderTargetMipmap(de)),g.setRenderTarget(me),g.setClearColor(O,V),g.toneMapping=Me}function aa(A,z,X){const N=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,me=A.length;Y<me;Y++){const Me=A[Y],Te=Me.object,Re=Me.geometry,Be=N===null?Me.material:N,Pe=Me.group;Te.layers.test(X.layers)&&Yd(Te,z,X,Re,Be,Pe)}}function Yd(A,z,X,N,Y,me){A.onBeforeRender(g,z,X,N,Y,me),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(g,z,X,N,A,me),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=an,Y.needsUpdate=!0,g.renderBufferDirect(X,z,N,Y,A,me),Y.side=_n,Y.needsUpdate=!0,g.renderBufferDirect(X,z,N,Y,A,me),Y.side=gi):g.renderBufferDirect(X,z,N,Y,A,me),A.onAfterRender(g,z,X,N,Y,me)}function la(A,z,X){z.isScene!==!0&&(z=wt);const N=ke.get(A),Y=m.state.lights,me=m.state.shadowsArray,Me=Y.state.version,Te=j.getParameters(A,Y.state,me,z,X),Re=j.getProgramCacheKey(Te);let Be=N.programs;N.environment=A.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(A.isMeshStandardMaterial?Dt:qe).get(A.envMap||N.environment),Be===void 0&&(A.addEventListener("dispose",fe),Be=new Map,N.programs=Be);let Pe=Be.get(Re);if(Pe!==void 0){if(N.currentProgram===Pe&&N.lightsStateVersion===Me)return qd(A,Te),Pe}else Te.uniforms=j.getUniforms(A),A.onBuild(X,Te,g),A.onBeforeCompile(Te,g),Pe=j.acquireProgram(Te,Re),Be.set(Re,Pe),N.uniforms=Te.uniforms;const De=N.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=_e.uniform),qd(A,Te),N.needsLights=lx(A),N.lightsStateVersion=Me,N.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Je=Pe.getUniforms(),ut=dl.seqWithValue(Je.seq,De);return N.currentProgram=Pe,N.uniformsList=ut,Pe}function qd(A,z){const X=ke.get(A);X.outputColorSpace=z.outputColorSpace,X.instancing=z.instancing,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function ox(A,z,X,N,Y){z.isScene!==!0&&(z=wt),Le.resetTextureUnits();const me=z.fog,Me=N.isMeshStandardMaterial?z.environment:null,Te=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ii,Re=(N.isMeshStandardMaterial?Dt:qe).get(N.envMap||Me),Be=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!X.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),De=!!X.morphAttributes.position,Je=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color,Ln=N.toneMapped?g.toneMapping:Mi,si=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=si!==void 0?si.length:0,Ve=ke.get(N),pu=m.state.lights;if(J===!0&&(he===!0||A!==w)){const un=A===w&&N.id===b;_e.setState(N,A,un)}let Et=!1;N.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==pu.state.version||Ve.outputColorSpace!==Te||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Re||N.fog===!0&&Ve.fog!==me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==_e.numPlanes||Ve.numIntersection!==_e.numIntersection)||Ve.vertexAlphas!==Be||Ve.vertexTangents!==Pe||Ve.morphTargets!==De||Ve.morphNormals!==Je||Ve.morphColors!==ut||Ve.toneMapping!==Ln||Oe.isWebGL2===!0&&Ve.morphTargetsCount!==dt)&&(Et=!0):(Et=!0,Ve.__version=N.version);let cr=Ve.currentProgram;Et===!0&&(cr=la(N,z,Y));let $d=!1,qs=!1,mu=!1;const Yt=cr.getUniforms(),fr=Ve.uniforms;if(Ce.useProgram(cr.program)&&($d=!0,qs=!0,mu=!0),N.id!==b&&(b=N.id,qs=!0),$d||w!==A){if(Yt.setValue(F,"projectionMatrix",A.projectionMatrix),Oe.logarithmicDepthBuffer&&Yt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),w!==A&&(w=A,qs=!0,mu=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const un=Yt.map.cameraPosition;un!==void 0&&un.setValue(F,Ae.setFromMatrixPosition(A.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Yt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Y.isSkinnedMesh)&&Yt.setValue(F,"viewMatrix",A.matrixWorldInverse)}if(Y.isSkinnedMesh){Yt.setOptional(F,Y,"bindMatrix"),Yt.setOptional(F,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(Oe.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Yt.setValue(F,"boneTexture",un.boneTexture,Le),Yt.setValue(F,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gu=X.morphAttributes;if((gu.position!==void 0||gu.normal!==void 0||gu.color!==void 0&&Oe.isWebGL2===!0)&&ye.update(Y,X,cr),(qs||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,Yt.setValue(F,"receiveShadow",Y.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(fr.envMap.value=Re,fr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),qs&&(Yt.setValue(F,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&ax(fr,mu),me&&N.fog===!0&&ie.refreshFogUniforms(fr,me),ie.refreshMaterialUniforms(fr,N,q,ne,de),dl.upload(F,Ve.uniformsList,fr,Le)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(dl.upload(F,Ve.uniformsList,fr,Le),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Yt.setValue(F,"center",Y.center),Yt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Yt.setValue(F,"normalMatrix",Y.normalMatrix),Yt.setValue(F,"modelMatrix",Y.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const un=N.uniformsGroups;for(let vu=0,ux=un.length;vu<ux;vu++)if(Oe.isWebGL2){const Kd=un[vu];ze.update(Kd,cr),ze.bind(Kd,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function ax(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function lx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,z,X){ke.get(A.texture).__webglTexture=z,ke.get(A.depthTexture).__webglTexture=X;const N=ke.get(A);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const X=ke.get(A);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,X=0){R=A,M=z,E=X;let N=!0,Y=null,me=!1,Me=!1;if(A){const Re=ke.get(A);Re.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(F.FRAMEBUFFER,null),N=!1):Re.__webglFramebuffer===void 0?Le.setupRenderTarget(A):Re.__hasExternalTextures&&Le.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const Pe=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Y=Pe[z],me=!0):Oe.isWebGL2&&A.samples>0&&Le.useMultisampledRTT(A)===!1?Y=ke.get(A).__webglMultisampledFramebuffer:Y=Pe,C.copy(A.viewport),H.copy(A.scissor),ee=A.scissorTest}else C.copy(G).multiplyScalar(q).floor(),H.copy(se).multiplyScalar(q).floor(),ee=I;if(Ce.bindFramebuffer(F.FRAMEBUFFER,Y)&&Oe.drawBuffers&&N&&Ce.drawBuffers(A,Y),Ce.viewport(C),Ce.scissor(H),Ce.setScissorTest(ee),me){const Re=ke.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,X)}else if(Me){const Re=ke.get(A.texture),Be=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,X||0,Be)}b=-1},this.readRenderTargetPixels=function(A,z,X,N,Y,me,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){Ce.bindFramebuffer(F.FRAMEBUFFER,Te);try{const Re=A.texture,Be=Re.format,Pe=Re.type;if(Be!==Vn&&ge.convert(Be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===jo&&(Ee.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Pe!==er&&ge.convert(Pe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Vi&&(Oe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-N&&X>=0&&X<=A.height-Y&&F.readPixels(z,X,N,Y,ge.convert(Be),ge.convert(Pe),me)}finally{const Re=R!==null?ke.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,z,X=0){const N=Math.pow(2,-X),Y=Math.floor(z.image.width*N),me=Math.floor(z.image.height*N);Le.setTexture2D(z,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,A.x,A.y,Y,me),Ce.unbindTexture()},this.copyTextureToTexture=function(A,z,X,N=0){const Y=z.image.width,me=z.image.height,Me=ge.convert(X.format),Te=ge.convert(X.type);Le.setTexture2D(X,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,A.x,A.y,Y,me,Me,Te,z.image.data):z.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,N,A.x,A.y,Me,Te,z.image),N===0&&X.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(A,z,X,N,Y=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,Te=A.max.z-A.min.z+1,Re=ge.convert(N.format),Be=ge.convert(N.type);let Pe;if(N.isData3DTexture)Le.setTexture3D(N,0),Pe=F.TEXTURE_3D;else if(N.isDataArrayTexture)Le.setTexture2DArray(N,0),Pe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const De=F.getParameter(F.UNPACK_ROW_LENGTH),Je=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ut=F.getParameter(F.UNPACK_SKIP_PIXELS),Ln=F.getParameter(F.UNPACK_SKIP_ROWS),si=F.getParameter(F.UNPACK_SKIP_IMAGES),dt=X.isCompressedTexture?X.mipmaps[0]:X.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,dt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?F.texSubImage3D(Pe,Y,z.x,z.y,z.z,me,Me,Te,Re,Be,dt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Pe,Y,z.x,z.y,z.z,me,Me,Te,Re,dt.data)):F.texSubImage3D(Pe,Y,z.x,z.y,z.z,me,Me,Te,Re,Be,dt),F.pixelStorei(F.UNPACK_ROW_LENGTH,De),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ut),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ln),F.pixelStorei(F.UNPACK_SKIP_IMAGES,si),Y===0&&N.generateMipmaps&&F.generateMipmap(Pe),Ce.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Le.setTextureCube(A,0):A.isData3DTexture?Le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Le.setTexture2DArray(A,0):Le.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){M=0,E=0,R=null,Ce.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?br:mv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===br?Ue:ii}}class zT extends Fd{}zT.prototype.isWebGL1Renderer=!0;class BT extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Od extends ia{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mm=new D,wm=new D,Em=new yt,yc=new Sv,Ya=new lu;class kT extends ln{constructor(e=new qn,n=new Od){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Mm.fromBufferAttribute(n,r-1),wm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Mm.distanceTo(wm);e.setAttribute("lineDistance",new jn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Ya.radius+=s,e.ray.intersectsSphere(Ya)===!1)return;Em.copy(r).invert(),yc.copy(e.ray).applyMatrix4(Em);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new D,c=new D,f=new D,d=new D,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const h=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=h,y=_-1;g<y;g+=p){const M=v.getX(g),E=v.getX(g+1);if(u.fromBufferAttribute(m,M),c.fromBufferAttribute(m,E),yc.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||n.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let g=h,y=_-1;g<y;g+=p){if(u.fromBufferAttribute(m,g),c.fromBufferAttribute(m,g+1),yc.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||n.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,p=(o-c)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new K:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],o=[],a=new D,l=new yt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new D)}s[0]=new D,o[0]=new D;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Wt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Wt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zd extends ri{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new K,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*f+this.aX,u=d*f+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class HT extends zd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;d*=c,p*=c,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const qa=new D,Sc=new Bd,Mc=new Bd,wc=new Bd;class GT extends ri{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(qa.subVectors(r[0],r[1]).add(r[0]),u=qa);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(qa.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=qa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Sc.initNonuniformCatmullRom(u.x,f.x,d.x,c.x,v,x,m),Mc.initNonuniformCatmullRom(u.y,f.y,d.y,c.y,v,x,m),wc.initNonuniformCatmullRom(u.z,f.z,d.z,c.z,v,x,m)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(u.x,f.x,d.x,c.x,this.tension),Mc.initCatmullRom(u.y,f.y,d.y,c.y,this.tension),wc.initCatmullRom(u.z,f.z,d.z,c.z,this.tension));return i.set(Sc.calc(l),Mc.calc(l),wc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function VT(t,e){const n=1-t;return n*n*e}function WT(t,e){return 2*(1-t)*t*e}function XT(t,e){return t*t*e}function Eo(t,e,n,i){return VT(t,e)+WT(t,n)+XT(t,i)}function jT(t,e){const n=1-t;return n*n*n*e}function YT(t,e){const n=1-t;return 3*n*n*t*e}function qT(t,e){return 3*(1-t)*t*t*e}function $T(t,e){return t*t*t*e}function To(t,e,n,i,r){return jT(t,e)+YT(t,n)+qT(t,i)+$T(t,r)}class Iv extends ri{constructor(e=new K,n=new K,i=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new K){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(To(e,r.x,s.x,o.x,a.x),To(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class KT extends ri{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(To(e,r.x,s.x,o.x,a.x),To(e,r.y,s.y,o.y,a.y),To(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kd extends ri{constructor(e=new K,n=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new K){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new K){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ZT extends ri{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fv extends ri{constructor(e=new K,n=new K,i=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new K){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JT extends ri{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y),Eo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ov extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new K){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Tm(a,l.x,u.x,c.x,f.x),Tm(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new K().fromArray(r))}return this}}var QT=Object.freeze({__proto__:null,ArcCurve:HT,CatmullRomCurve3:GT,CubicBezierCurve:Iv,CubicBezierCurve3:KT,EllipseCurve:zd,LineCurve:kd,LineCurve3:ZT,QuadraticBezierCurve:Fv,QuadraticBezierCurve3:JT,SplineCurve:Ov});class eA extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);e.equals(n)||this.curves.push(new kd(n,e))}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new QT[r.type]().fromJSON(r))}return this}}class Cf extends eA{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new kd(this.currentPoint.clone(),new K(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Fv(this.currentPoint.clone(),new K(e,n),new K(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Iv(this.currentPoint.clone(),new K(e,n),new K(i,r),new K(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Ov(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new zd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yo extends Cf{constructor(e){super(e),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Cf().fromJSON(r))}return this}}const tA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=zv(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,d,p;if(i&&(s=oA(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let v=n;v<r;v+=n)f=t[v],d=t[v+1],f<a&&(a=f),d<l&&(l=d),f>u&&(u=f),d>c&&(c=d);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return qo(s,o,n,a,l,p,0),o}};function zv(t,e,n,i,r){let s,o;if(r===vA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Am(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Am(s,t[s],t[s+1],o);return o&&du(o,o.next)&&(Ko(o),o=o.next),o}function Br(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(du(n,n.next)||it(n.prev,n,n.next)===0)){if(Ko(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function qo(t,e,n,i,r,s,o){if(!t)return;!o&&s&&fA(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?iA(t,i,r,s):nA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),Ko(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=rA(Br(t),e,n),qo(t,e,n,i,r,s,2)):o===2&&sA(t,e,n,i,r,s):qo(Br(t),e,n,i,r,s,1);break}}}function nA(t){const e=t.prev,n=t,i=t.next;if(it(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let v=i.next;for(;v!==e;){if(v.x>=c&&v.x<=d&&v.y>=f&&v.y<=p&&Ms(r,a,s,l,o,u,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function iA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(it(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,d=o.y,p=a<l?a<u?a:u:l<u?l:u,v=c<f?c<d?c:d:f<d?f:d,x=a>l?a>u?a:u:l>u?l:u,m=c>f?c>d?c:d:f>d?f:d,h=Rf(p,v,e,n,i),_=Rf(x,m,e,n,i);let g=t.prevZ,y=t.nextZ;for(;g&&g.z>=h&&y&&y.z<=_;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&Ms(a,c,l,f,u,d,g.x,g.y)&&it(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=p&&y.x<=x&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&Ms(a,c,l,f,u,d,y.x,y.y)&&it(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=h;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&Ms(a,c,l,f,u,d,g.x,g.y)&&it(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&Ms(a,c,l,f,u,d,y.x,y.y)&&it(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!du(r,s)&&Bv(r,i,i.next,s)&&$o(r,s)&&$o(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Ko(i),Ko(i.next),i=t=s),i=i.next}while(i!==t);return Br(i)}function sA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pA(o,a)){let l=kv(o,a);o=Br(o,o.next),l=Br(l,l.next),qo(o,e,n,i,r,s,0),qo(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function oA(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=zv(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(hA(u));for(r.sort(aA),s=0;s<r.length;s++)n=lA(r[s],n);return n}function aA(t,e){return t.x-e.x}function lA(t,e){const n=uA(t,e);if(!n)return e;const i=kv(n,t);return Br(i,i.next),Br(n,n.next)}function uA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ms(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),$o(n,t)&&(f<c||f===c&&(n.x>r.x||n.x===r.x&&cA(r,n)))&&(r=n,c=f)),n=n.next;while(n!==a);return r}function cA(t,e){return it(t.prev,t,e.prev)<0&&it(e.next,t,t.next)<0}function fA(t,e,n,i){let r=t;do r.z===0&&(r.z=Rf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,dA(r)}function dA(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function Rf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function hA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ms(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function pA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!mA(t,e)&&($o(t,e)&&$o(e,t)&&gA(t,e)&&(it(t.prev,t,e.prev)||it(t,e.prev,e))||du(t,e)&&it(t.prev,t,t.next)>0&&it(e.prev,e,e.next)>0)}function it(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function du(t,e){return t.x===e.x&&t.y===e.y}function Bv(t,e,n,i){const r=Ka(it(t,e,n)),s=Ka(it(t,e,i)),o=Ka(it(n,i,t)),a=Ka(it(n,i,e));return!!(r!==s&&o!==a||r===0&&$a(t,n,e)||s===0&&$a(t,i,e)||o===0&&$a(n,t,i)||a===0&&$a(n,e,i))}function $a(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ka(t){return t>0?1:t<0?-1:0}function mA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Bv(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function $o(t,e){return it(t.prev,t,t.next)<0?it(t,e,t.next)>=0&&it(t,t.prev,e)>=0:it(t,e,t.prev)<0||it(t,t.next,e)<0}function gA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function kv(t,e){const n=new Pf(t.i,t.x,t.y),i=new Pf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Am(t,e,n,i){const r=new Pf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ko(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Pf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Ao{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ao.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Cm(e),Rm(i,e);let o=e.length;n.forEach(Cm);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Rm(i,n[l]);const a=tA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Cm(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Rm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class ir extends qn{constructor(e=new Yo([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new jn(r,3)),this.setAttribute("normal",new jn(s,3)),this.setAttribute("uv",new jn(o,2));function u(c){const f=r.length/3,d=c.extractPoints(n);let p=d.shape;const v=d.holes;Ao.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=v.length;m<h;m++){const _=v[m];Ao.isClockWise(_)===!0&&(v[m]=_.reverse())}const x=Ao.triangulateShape(p,v);for(let m=0,h=v.length;m<h;m++){const _=v[m];p=p.concat(_)}for(let m=0,h=p.length;m<h;m++){const _=p[m];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let m=0,h=x.length;m<h;m++){const _=x[m],g=_[0]+f,y=_[1]+f,M=_[2]+f;i.push(g,y,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return xA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new ir(i,e.curveSegments)}}function xA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}const Pm=new K;class Ri{constructor(e=new K(1/0,1/0),n=new K(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pm.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);var _t=(t=>(t[t.Pen=0]="Pen",t[t.Shape=1]="Shape",t[t.Eraser=2]="Eraser",t[t.Select=3]="Select",t))(_t||{}),Tr=(t=>(t[t.Pen=0]="Pen",t[t.FountainPen=1]="FountainPen",t))(Tr||{}),kl=(t=>(t[t.LinearRegression=0]="LinearRegression",t[t.Complex=1]="Complex",t))(kl||{}),Rt=(t=>(t[t.Idle=0]="Idle",t[t.Movement=1]="Movement",t[t.Edit=2]="Edit",t))(Rt||{}),pt=(t=>(t[t.Rectangle=0]="Rectangle",t[t.Triangle=1]="Triangle",t[t.Line=2]="Line",t[t.Rhombus=3]="Rhombus",t[t.Hexagon=4]="Hexagon",t[t.Kite=5]="Kite",t))(pt||{});function _A(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const ss=(t,e,n,i)=>{const r=new D;return r.set(t.x/n*2-1,-(t.y/i)*2+1,0),r.unproject(e),new K(r.x,r.y)},bm=(t,e,n,i)=>{let r=new D(t.x,t.y,0);return r.project(e),r.x=(r.x+1)*n/2,r.y=(-r.y+1)*i/2,r.z=0,new K(r.x,r.y)},rr=(t,e,n,i)=>{const r=new D;return r.set(t.x/n*2-1,-(t.y/i)*2+1,0),r.unproject(e),new D(r.x,r.y,t.z)},sa=t=>{if(t instanceof MouseEvent){const e=t.target.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;return new D(n,i,1)}else{const e=t.target.getBoundingClientRect(),n=t.touches[0].clientX-e.left,i=t.touches[0].clientY-e.top;return new D(n,i,t.touches[0].force)}},Lm=(t,e)=>{const n=t.target.getBoundingClientRect(),i=t.touches[e].clientX-n.left,r=t.touches[e].clientY-n.top;return new D(i,r,t.touches[e].force)},yA=t=>{if(t instanceof MouseEvent){const e=t.target.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;return new D(n,i,1)}else if(t.touches[0]!=null&&t.touches[0].clientX!=null&&t.touches[0].clientY!=null){const e=t.target.getBoundingClientRect(),n=t.touches[0].clientX-e.left,i=t.touches[0].clientY-e.top;return new D(n,i,t.touches[0].force)}else return},bf=(t,e,n)=>(t-e[0])*(n[1]-n[0])/(e[1]-e[0])+n[0],Dm=(t,e,n,i,r,s,o=.25,a=.25,l=0,u=35,c=.01,f=.5)=>{const d=u*r,p=l*r,v=Math.hypot(e.x-t.x,e.y-t.y),x=Math.hypot(e.x-n.x,e.y-n.y),m=Math.min((v+p)/(d+p),1),h=Math.min((x+p)/(d+p),1),_=bf(m,[0,1],[c,f])*i;let g=bf(h,[0,1],[c,f])*i;if(Math.abs(g-_)>(v+x)*a&&(g=_+(v+x)*a*(g-_)/Math.abs(g-_)),s!=null){const y=_-s[1];let M=_,E=g;return Math.abs(y)>o&&(M=s[1]+o*(y/Math.abs(y))),[M,E]}else return[_,g]},SA=async(t,e,n)=>{const i=new Blob([t],{type:n}),r={suggestedName:"Untitled",types:[{description:"Inkuility Notebook File",accept:{"application/json":[".inkuility"]}}]};let s=!1;if("showSaveFilePicker"in window&&(()=>{try{return window.self===window.top}catch{return!1}})())try{const l=await(await window.showSaveFilePicker(r)).createWritable();await l.write(i),await l.close();return}catch(a){a.name!=="AbortError"||(s=!0)}if(!s){const a=URL.createObjectURL(i),l=document.createElement("a");l.href=a,l.download=e,l.style.display="none",document.body.append(l),l.click(),setTimeout(()=>{URL.revokeObjectURL(a),l.remove()},1e3)}},MA=t=>{const e=document.createElement("input");e.type="file",e.className="z-20 fixed bottom-0",e.click(),e.addEventListener("change",n);function n(i){const r=i.target.files[0];if(!r)return;const s=new FileReader;s.onload=function(o){const a=o.target.result;t(a)},s.readAsText(r)}},bt=(t,e,n,i)=>{const r=bm(new K(e.position.x,e.position.y),e,n,i),s=bm(new K(0,0),e,n,i),o=s.x-r.x,a=s.y-r.y;t.translate(r.x+o,r.y+a),t.scale(e.zoom,-e.zoom)};class S{constructor(e,n){gt(this,"x");gt(this,"y");this.x=e,this.y=n}round(){return this}add(e){return new S(this.x+e.x,this.y+e.y)}sub(e){return new S(this.x-e.x,this.y-e.y)}trunc(e){return new S(Math.trunc(this.x*10**e)/10**e,Math.trunc(this.y*10**e)/10**e)}scale(e){return new S(this.x*e,this.y*e)}normalizeTo(e){let n=Math.sqrt(this.x*this.x+this.y*this.y);return n>0?(n=e/n,new S(this.x*n,this.y*n)):new S(this.x,this.y)}normalize(){var e=this.x*this.x+this.y*this.y;return e>0?(e=1/Math.sqrt(e),new S(this.x*e,this.y*e)):new S(this.x,this.y)}getPerpendicular(){return new S(-this.y,this.x)}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}interpolateTo(e,n){return new S(this.x+(e.x-this.x)*n,this.y+(e.y-this.y)*n)}dotProd(e){return this.x*e.x+this.y*e.y}angleBetween(e,n){if(n===void 0)return Math.acos(this.dotProd(e));var i=n?this.normalize().dotProd(e.normalize()):this.dotProd(e);return Math.acos(i)}elementarEqualTo(e){return e.x==this.x&&e.y==this.y}copy(){return new S(this.x,this.y)}length(){return Math.sqrt(this.x**2+this.y**2)}static vec2ToWorld(e,n,i,r){const s=new D;return s.set(e.x/i*2-1,-(e.y/r)*2+1,0),s.unproject(n),new S(s.x,s.y)}static vec2ToScreen(e,n,i,r){let s=new D(e.x,e.y,0);return s.project(n),s.x=Math.round((s.x+1)*i/2),s.y=Math.round((-s.y+1)*r/2),s.z=0,new S(s.x,s.y)}}const Um=function(t){if(t.length<1)return new S(0,0);const e=t.map(f=>f.x).reduce(function(f,d){return f+d},0),n=t.map(f=>f.y).reduce(function(f,d){return f+d},0),i=e/t.length,r=n/t.length;let s=0,o=0,a=0;for(let f=0;f<t.length;f++)o+=(t[f].x-i)*(t[f].y-r),a+=Math.pow(t[f].x-i,2);s=o/a;const l=r-i*s,u=i,c=s*i+l;return new S(u,isNaN(c)?r:c)},Nm=(t,e,n)=>t+e*n,Im=function(t,e,n){const i=t.map(s=>s.copy());i[0]=new S(e.x,e.y);for(let s=1;s<i.length;s++){const o=i[s],a=i[s-1],l=a.x-o.x,u=a.y-o.y;i[s]=new S(Nm(o.x,l,n),Nm(o.y,u,n))}const r=new S(i[i.length-1].x,i[i.length-1].y);return{newBuffer:i,point:r}};class Sr{constructor(){gt(this,"path2D");gt(this,"threeShape");gt(this,"minX");gt(this,"minY");gt(this,"maxX");gt(this,"maxY");this.path2D=new Path2D,this.threeShape=new Yo,this.threeShape.autoClose=!0,this.minX=void 0,this.minY=void 0,this.maxX=void 0,this.maxY=void 0}updateBoundingBox(e,n){this.minX==null?this.minX=e:this.minX=Math.min(this.minX,e),this.minY==null?this.minY=n:this.minY=Math.min(this.minY,n),this.maxX==null?this.maxX=e:this.maxX=Math.max(this.maxX,e),this.maxY==null?this.maxY=n:this.maxY=Math.max(this.maxY,n)}moveTo(e){this.path2D.moveTo(e.x,e.y),this.threeShape.moveTo(e.x,e.y),this.updateBoundingBox(e.x,e.y)}lineTo(e){this.path2D.lineTo(e.x,e.y),this.threeShape.lineTo(e.x,e.y),this.updateBoundingBox(e.x,e.y)}quadraticCurveTo(e,n){this.path2D.quadraticCurveTo(e.x,e.y,n.x,n.y),this.threeShape.quadraticCurveTo(e.x,e.y,n.x,n.y),this.updateBoundingBox(e.x,e.y),this.updateBoundingBox(n.x,n.y)}arc(e,n,i,r,s){this.path2D.arc(e.x,e.y,n,i,r,s),this.threeShape.absarc(e.x,e.y,n,2*Math.PI-i,2*Math.PI-r,!s),this.updateBoundingBox(e.x-n,e.y),this.updateBoundingBox(e.x+n,e.y),this.updateBoundingBox(e.x,e.y-n),this.updateBoundingBox(e.x,e.y+n)}closePath(){this.path2D.closePath()}}class wA{constructor(){gt(this,"path2D");this.path2D=new Path2D}moveTo(e){this.path2D.moveTo(e.x,e.y)}lineTo(e){this.path2D.lineTo(e.x,e.y)}quadraticCurveTo(e,n){this.path2D.quadraticCurveTo(e.x,e.y,n.x,n.y)}arc(e,n,i,r,s){this.path2D.arc(e.x,e.y,n,i,r,s)}closePath(){this.path2D.closePath()}}function Fm(t,e){const n=t.x-e.x,i=t.y-e.y;return n*n+i*i}const EA=(t,e,n)=>{const i=Math.sqrt(Fm(t,e)),r=Math.sqrt(Fm(n,e));return i/(i+r)};function Co(t){const{x:e,y:n}=t;return{x:-n,y:e}}function An(t,e){const{x:n,y:i}=t;return{x:n*e,y:i*e}}function At(t,e){return{x:t.x-e.x,y:t.y-e.y}}function pn(t,e){return{x:t.x+e.x,y:t.y+e.y}}function Wi(t){const{x:e,y:n}=t,i=Math.sqrt(e*e+n*n);return{x:e/i,y:n/i}}function TA(t,e,n){return EA(t,e,n)}function AA(t,e,n,i){const r={x:(1-i)*t.x+i*e.x,y:(1-i)*t.y+i*e.y},s={x:(1-i)*e.x+i*n.x,y:(1-i)*e.y+i*n.y},o={x:(1-i)*r.x+i*s.x,y:(1-i)*r.y+i*s.y};return[{P0:t,P1:r,P2:o},{P0:o,P1:s,P2:n}]}function CA(t,e,n,i,r,s){if(t={x:Math.round(t.x*1e3)/1e3,y:Math.round(t.y*1e3)/1e3},e={x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3},n={x:Math.round(n.x*1e3)/1e3,y:Math.round(n.y*1e3)/1e3},t.x===e.x&&e.x===n.x&&t.y===e.y&&e.y===n.y)return[[],[]];if(t.x===e.x&&e.x===n.x||t.y===e.y&&e.y===n.y){const c=t.y===e.y&&e.y===n.y?{x:0,y:1}:{x:1,y:0},f=An(c,i/2),d=An(c,r/2),p=[At(t,f),At(n,d)],v=[pn(t,f),pn(n,d)];return[p,v]}if(t.x===e.x&&t.y===e.y||e.x===n.x&&e.y===n.y||t.x===n.x&&t.y===n.y){let c=t,f=n;t.x===n.x&&t.y===n.y&&(c=e);const d=Wi(At(f,c)),p=An(Co(d),i/2),v=An(Co(d),r/2),x=[At(c,p),At(f,v)],m=[pn(c,p),pn(f,v)];return[x,m]}const o=At(e,t),a=At(n,e);if(o.x*a.y-o.y*a.x===0){const c=Wi(Co(o)),f=An(c,i/2),d=An(c,r/2),p=pn(t,f),v=pn(n,d),x=At(t,f),m=At(n,d);return[[p,v],[x,m]]}function u(c,f,d,p,v,x){if(x<=0){const m=Om(c,f,d,p,v)[0],h=Om(c,f,d,p,v)[1];return[m,h]}else{const m=TA(c,f,d),[h,_]=AA(c,f,d,m),g=(1-m)*p+m*v,y=u(h.P0,h.P1,h.P2,p,g,x-1),M=u(_.P0,_.P1,_.P2,g,v,x-1);return[[...y[0],...M[0]],[...y[1],...M[1]]]}}return u(t,e,n,i,r,s)}function Om(t,e,n,i,r){const s=Wi(At(e,t)),o=Wi(At(n,e)),a=Co(s),l=Co(o),u=An(a,i/2),c=An(l,r/2),f=pn(t,u),d=pn(n,c),p=At(t,u),v=At(n,c),x=pn(e,An(Wi(pn(u,c)),(i+r)/4)),m=At(e,An(Wi(pn(u,c)),(i+r)/4));return[[f,x,d],[p,m,v]]}function Hv(t){const{x:e,y:n}=t,i=e*e+n*n;return Math.sqrt(i)}const Gv=(t,e,n)=>(e.x-t.x)*(n.y-t.y)-(e.y-t.y)*(n.x-t.x)>0;function RA(t,e,n){let i=Math.abs(n-e);return t*i}function PA(t,e,n,i){const s=RA(n,t,e)/i;return Math.ceil(s)}const bA=(t,e,n,i,r,s,o)=>{let a=i,l=Hv(At(r,s))/2,u=n;const c=e,f=n,d=i;c.x===f.x&&f.x===d.x&&c.y===f.y&&f.y===d.y&&(u=e),(c.x===f.x&&f.x===d.x||c.y===f.y&&f.y===d.y)&&(u=e),(c.x===f.x&&c.y===f.y||f.x===d.x&&f.y===d.y||c.x===d.x&&c.y===d.y)&&(u=e);let p=pn(a,An(Wi(At(a,u)),l)),v=Math.atan2(r.y-a.y,r.x-a.x),x=Math.atan2(s.y-a.y,s.x-a.x),m=Gv(r,s,p);o?Hl(t,a.x,a.y,l,x,v,!m):Hl(t,a.x,a.y,l,v,x,m)},LA=(t,e,n,i,r,s,o)=>{let a=e,l=Hv(At(r,s))/2,u=n;const c=e,f=n,d=i;c.x===f.x&&f.x===d.x&&c.y===f.y&&f.y===d.y&&(u=i),(c.x===f.x&&f.x===d.x||c.y===f.y&&f.y===d.y)&&(u=i),(c.x===f.x&&c.y===f.y||f.x===d.x&&f.y===d.y||c.x===d.x&&c.y===d.y)&&(u=i);let p=pn(a,An(Wi(At(a,u)),l)),v=Math.atan2(r.y-a.y,r.x-a.x),x=Math.atan2(s.y-a.y,s.x-a.x),m=Gv(r,s,p);o?Hl(t,a.x,a.y,l,x,v,!m):Hl(t,a.x,a.y,l,v,x,m)};function Hl(t,e,n,i,r,s,o=!1){let a=PA(r,s,i,3);a=Math.max(16,Math.min(25,a));let l=(s-r)/a;(r>s&&!o||r<s&&o)&&(l*=-1);for(let u=0;u<=a;u++){const c=r+l*u,f=e+i*Math.cos(c),d=n+i*Math.sin(c);t.lineTo({x:f,y:d})}}const Vv=(t,e,n,i,r,s)=>{const o=CA(e,n,i,r*2,s*2,0);if(o[0].length>0&&o[1].length>0){if(o[0].length<3)t.moveTo(o[0][0]),t.lineTo(o[0][1]);else for(let d=0;d<o[0].length;d+=3)d==0?t.moveTo(o[0][d]):t.lineTo(o[0][d]),t.quadraticCurveTo(o[0][d+1],o[0][d+2]);let a={x:o[0][o[0].length-1].x,y:o[0][o[0].length-1].y},l={x:o[1][o[1].length-1].x,y:o[1][o[1].length-1].y};bA(t,e,n,i,a,l,!1);let u=[...o[1]].reverse();if(u.length<3)t.lineTo(u[0]),t.lineTo(u[1]);else for(let d=0;d<u.length;d+=3)t.lineTo(u[d]),t.quadraticCurveTo(u[d+1],u[d+2]);let c={x:o[0][0].x,y:o[0][0].y},f={x:o[1][0].x,y:o[1][0].y};LA(t,e,n,i,c,f,!0)}t.closePath()},zm=(t,e,n,i,r)=>{const s=new Sr;return Vv(s,t,e,n,i,r),s},Hd=(t,e,n,i,r)=>{const s=new wA;return Vv(s,t,e,n,i,r),s},Gl=t=>{t.pencilKitState.bufferVec3Arr=[],t.pencilKitState.pointerVec3Arr=[],t.pencilKitState.midPointsVec3Arr=[],t.pencilKitState.threeShapePoints=[],t.pencilKitState.uniPathsBBs=[],t.pencilKitState.penStrokeSubPathsData=[]};let DA;const Wv=(t,e,n)=>{const{renderer:i,camera:r,bufferCanvasCtx1:s,bufferCanvasCtx2:o,settings:a,pencilKitState:l}=t,{bufferVec3Arr:u,midPointsVec3Arr:c,pointerVec3Arr:f}=l,{x:d,y:p}=i.getSize(new K),v=a.drawSize,x=a.penType==Tr.FountainPen;let m=[];if(a.stabilizer==kl.LinearRegression){{u.push(new S(n.x,n.y)),u.length>a.bufferSize&&u.shift();const M=Um(u);f.push(M)}let g=[];const y=[...u];for(var h=0;h<=a.bufferSize;h+=1){let M=y[y.length-1];y.shift(),y.push(M);let E=Um(y);g.push(new S(E.x,E.y))}g.push(new S(n.x,n.y)),m=g}else if(a.stabilizer==kl.Complex){{const R=Im(u,new S(n.x,n.y),a.bufferWeight);l.bufferVec3Arr=R.newBuffer,f.push(R.point)}let g=[],y=[...u].map(R=>R.copy()),M=!0,E=n!==void 0?n:u[0].copy();for(;M;){let R=Im(y,new S(E.x,E.y),a.bufferWeight);Math.hypot(R.point.x-E.x,R.point.y-E.y)<=1&&(M=!1),y=R.newBuffer,g.push(new S(R.point.x,R.point.y))}g.push(new S(E.x,E.y)),m=g}else f.push(new S(n.x,n.y));if(f.length>=2&&c.push(f[f.length-1].add(f[f.length-2]).scale(.5)),c.length>=2){let g=c[c.length-2],y=f[f.length-2],M=c[c.length-1];const E=Dm(g,y,M,v,r.zoom,DA,0);let R=E[0],b=E[1];x||(R=v,b=v);const w=ss(new K(g.x,g.y),r,d,p),C=ss(new K(y.x,y.y),r,d,p),H=ss(new K(M.x,M.y),r,d,p),ee=zm(new S(w.x,w.y),new S(C.x,C.y),new S(H.x,H.y),R,b);s.save(),bt(s,r,d,p),s.beginPath(),s.fillStyle=a.drawColor,s.fill(ee.path2D),s.closePath(),s.restore(),l.threeShapePoints.push(new Float32Array(ee.threeShape.getPoints().map(O=>[O.x,O.y]).flat())),l.penStrokeSubPathsData.push({p1:new S(w.x,w.y),cp:new S(C.x,C.y),p2:new S(H.x,H.y),v1:R,v2:b}),l.uniPathsBBs.push([[ee.minX,ee.minY],[ee.maxX,ee.maxY]])}m.unshift(f[f.length-1].copy());const _=[];c.length>0&&_.push(c[c.length-1].copy());for(let g=1;g<m.length;g++)_.push(m[g-1].add(m[g]).scale(.5));o.clearRect(0,0,o.canvas.width,o.canvas.height);for(let g=1;g<_.length;g+=1){let y=_[g-1],M=m[g-1],E=_[g];const R=Dm(y,M,E,v,r.zoom);let b=R[0],w=R[1];x||(b=v,w=v);const C=ss(new K(y.x,y.y),r,d,p),H=ss(new K(M.x,M.y),r,d,p),ee=ss(new K(E.x,E.y),r,d,p),O=zm(new S(C.x,C.y),new S(H.x,H.y),new S(ee.x,ee.y),b,w);e?(s.save(),bt(s,r,d,p),s.beginPath(),s.fillStyle=a.drawColor,s.fill(O.path2D),s.closePath(),s.restore(),l.threeShapePoints.push(new Float32Array(O.threeShape.getPoints().map(V=>[V.x,V.y]).flat())),l.penStrokeSubPathsData.push({p1:new S(C.x,C.y),cp:new S(H.x,H.y),p2:new S(ee.x,ee.y),v1:b,v2:w}),l.uniPathsBBs.push([[O.minX,O.minY],[O.maxX,O.maxY]])):(o.save(),bt(o,r,d,p),o.beginPath(),o.fillStyle=a.drawColor,o.fill(O.path2D),o.closePath(),o.restore())}},UA=(t,e)=>{Gl(e);for(let n=0;n<e.settings.bufferSize;n++)e.pencilKitState.bufferVec3Arr.push(new S(t.x,t.y))},NA=(t,e)=>{Wv(e,!1,t)},Xv=(t,e)=>{const{bufferCanvasCtx1:n,bufferCanvasCtx2:i,pencilKitState:r,renderer:s,camera:o,scene:a}=e,{pointerVec3Arr:l}=r;if(l.length<1){Gl(e),i.clearRect(0,0,n.canvas.width,n.canvas.height);return}t!=null&&Wv(e,!0,t);{const u=r.threeShapePoints.map(p=>{const v=[];for(let x=0;x<p.length;x+=2)v.push(new K(p[x],p[x+1]));return v}).filter(p=>p.length!=0).map(p=>new Yo().setFromPoints(p)),c=new ir(u),f=new Ci({color:new We(e.settings.drawColor),side:_n,transparent:!0}),d=new It(c,f);d.userData.type="PenStroke",d.userData.penStrokeSubPathsData=e.pencilKitState.penStrokeSubPathsData,d.userData.uniPathsBBs=e.pencilKitState.uniPathsBBs,d.userData.drawColor=e.settings.drawColor,Wd(e,d)}s.render(a,o),Gl(e),n.clearRect(0,0,n.canvas.width,n.canvas.height),i.clearRect(0,0,i.canvas.width,i.canvas.height)},jv=t=>{const{renderer:e,scene:n,camera:i,bufferCanvasCtx1:r,bufferCanvasCtx2:s}=t;Gl(t),r.clearRect(0,0,r.canvas.width,r.canvas.height),s.clearRect(0,0,s.canvas.width,s.canvas.height),e.render(n,i)},Gd=t=>{const{renderer:e,moveKitState:n}=t,{scale:i,origin:r}=n,s=e.getSize(new K).x,o=e.getSize(new K).y;let a=-s*i+r.x,l=-o*i+r.y,u=s*3*i,c=o*3*i,f=!0;return(a>0||l>0)&&(f=!1),(a+u<s||l+c<o)&&(f=!1),f};function hu(t){const{renderer:e,bufferCanvasCtx1:n,moveKitState:i}=t,{scale:r,origin:s,panRenderer:o}=i,{x:a,y:l}=e.getSize(new K);n.save(),n.clearRect(0,0,n.canvas.width,n.canvas.height);let u=-a*r+s.x,c=-l*r+s.y,f=a*3*r,d=l*3*r;n.drawImage(o.domElement,u,c,f,d),n.restore(),r==1&&(n.save(),n.beginPath(),n.rect(s.x,s.y,a*r,l*r),n.closePath(),n.clip(),n.globalCompositeOperation="copy",n.drawImage(e.domElement,s.x,s.y,a*r,l*r),n.restore())}function oa(t){const{renderer:e,moveKitState:n,camera:i,scene:r}=t,{startedZoom:s,panRenderer:o}=n;if(s)return;const{x:a,y:l}=e.getSize(new K);n.panCamera=new cu(a/-2,a/2,l/2,l/-2,1,1e3),n.panCamera.position.set(i.position.x,i.position.y,i.position.z),n.panCamera.zoom=i.zoom/3,n.panCamera.updateProjectionMatrix(),n.startZoomValue=i.zoom,o.setSize(a,l),e.domElement.style.visibility="hidden",o.render(r,n.panCamera),n.startedZoom=!0}function Vd(t){const{renderer:e,bufferCanvasCtx1:n,moveKitState:i,camera:r,scene:s}=t,{x:o,y:a}=e.getSize(new K);r.updateProjectionMatrix(),e.domElement.style.visibility="visible",e.render(s,r),n.clearRect(0,0,o,a),i.origin=new K(0,0),i.scale=1,i.startedZoom=!1,i.lastDragPoint=void 0}function yi(t){const{renderer:e,moveKitState:n,camera:i,scene:r}=t;i.updateProjectionMatrix(),e.render(r,i),n.origin=new K(0,0),n.scale=1,n.startedZoom=!1,oa(t)}function IA(t){oa(t),hu(t)}let as;const FA=(t,e)=>{if(t.touches.length<1)return;const{moveKitState:n,camera:i,renderer:r}=e,{minZoom:s,maxZoom:o,startZoomValue:a,lastDragPoint:l}=n;oa(e);const{x:u,y:c}=r.getSize(new K),f=Lm(t,0),d=Lm(t,1),p=f.distanceTo(d);let v=-1;as!=null&&as<p&&(v=1);const x=f.add(d.sub(f).multiplyScalar(.5));let m=new D(x.x,x.y,1),h=rr(m,i,u,c),_=1;as!=null&&(_=p/as);const g=_;let y=1;v>0?i.zoom*g<s&&(y=g):i.zoom*g>o&&(y=g);let M=0,E=0;l!=null&&(M=l.x-x.x,E=l.y-x.y),n.scale*=y,n.origin.x=x.x-(x.x-n.origin.x)*y-M,n.origin.y=x.y-(x.y-n.origin.y)*y-E,i.zoom*=y,i.updateProjectionMatrix();let R=rr(m,i,u,c);i.position.x+=h.x-R.x+M/i.zoom,i.position.y+=h.y-R.y-E/i.zoom,i.updateProjectionMatrix(),Gd(e)?i.zoom/a>=5&&yi(e):yi(e),(i.zoom/a<=.5||i.zoom/a>=5)&&yi(e),hu(e),as=p,n.lastDragPoint=x.clone()};function OA(t,e){const{moveKitState:n,camera:i}=e,{lastDragPoint:r}=n,s=sa(t);if(oa(e),window.TouchEvent!=null&&t instanceof TouchEvent)FA(t,e);else if(t instanceof MouseEvent){if(r!=null){const o=r.x-s.x,a=r.y-s.y;n.origin.x-=o,n.origin.y-=a,i.position.x+=o/i.zoom,i.position.y-=a/i.zoom,i.updateProjectionMatrix()}n.lastDragPoint=s.clone()}Gd(e)||yi(e),hu(e)}function zA(t){Vd(t),as=void 0}let Bm=0;function BA(t,e,n){if(t==0)return;const{moveKitState:i,camera:r,renderer:s}=n,{minZoom:o,maxZoom:a,startZoomValue:l}=i;oa(n);const{x:u,y:c}=s.getSize(new K);let f=t<0?1:-1,d=new D(e.x,e.y,1),p=rr(d,r,u,c);const v=1.1;let x=1;f>0?r.zoom*v<o&&(x=v):r.zoom*(1/v)>a&&(x=v,f<0&&(x=1/x)),i.scale*=x,i.origin.x=e.x-(e.x-i.origin.x)*x,i.origin.y=e.y-(e.y-i.origin.y)*x,r.zoom*=x,r.updateProjectionMatrix();let m=rr(d,r,u,c);r.position.x+=p.x-m.x,r.position.y+=p.y-m.y,r.updateProjectionMatrix(),Gd(n)?r.zoom/l>=5&&yi(n):yi(n),(r.zoom/l<=.5||r.zoom/l>=5)&&yi(n),clearTimeout(Bm),Bm=setTimeout(()=>{n.moveKitState.startedZoom&&Vd(n)},750),hu(n)}function Yv(t){t.moveKitState.startedZoom&&Vd(t)}const Za=(t,e,n)=>{let i=t.sub(e).normalize().getPerpendicular().scale(n),r=t.add(i),s=t.sub(i),o=e.add(i),a=e.sub(i);return[r,s,o,a]};function km(t,e,n,i){var r=n.x-i.x,s=t.x-e.x,o=n.y-i.y,a=t.y-e.y,l=s*o-a*r;if(l==0)return null;var u=t.x*e.y-t.y*e.x,c=n.x*i.y-n.y*i.x,f=(u*r-s*c)/l,d=(u*o-a*c)/l,p={x:f,y:d};return new S(p.x,p.y)}const Ja=t=>{let e=new Sr;return e.moveTo(t[0]),e.lineTo(t[2]),e.lineTo(t[3]),e.lineTo(t[1]),e.lineTo(t[0]),e.closePath(),e},Pi=(t,e,n,i="round",r)=>{let s=(a,l,u)=>{let c=Za(a,l,n),f=Za(l,u,n),d=Ja(c),p=Ja(f),v=null,x=null;i=="miter"&&(v=km(c[0],c[2],f[0],f[2]),x=km(c[1],c[3],f[1],f[3])),(r.isPointInPath(p.path2D,c[2].x,c[2].y)||r.isPointInPath(d.path2D,f[0].x,f[0].y))&&(v=null),(r.isPointInPath(p.path2D,c[3].x,c[3].y)||r.isPointInPath(d.path2D,f[1].x,f[1].y))&&(x=null);let m=new Sr;return m.moveTo(c[3]),x!=null&&m.lineTo(x),m.lineTo(f[1]),m.lineTo(c[2]),v!=null&&m.lineTo(v),m.lineTo(f[0]),m.lineTo(c[3]),m.closePath(),m},o=[];for(let a=1;a<t.length;a++){let l=t[a-1],u=t[a],c=Za(l,u,n),f=Ja(c);if(o.push(f),a<t.length-1){let d=t[a-1],p=t[a],v=t[a+1];(i=="bevel"||i=="miter")&&o.push(s(d,p,v))}if(i=="round"){let d=new Sr;d.arc(l,n,0,2*Math.PI,!1),d.closePath(),o.push(d)}}if(e&&t.length>2){let a=t[t.length-2],l=t[t.length-1],u=t[0],c=t[1],f=Za(l,u,n),d=Ja(f);if(o.push(d),i=="bevel"||i=="miter")o.push(s(l,u,c)),o.push(s(a,l,u));else{let p=new Sr;p.arc(u,n,0,2*Math.PI,!1),p.closePath(),o.push(p);let v=new Sr;v.arc(l,n,0,2*Math.PI,!1),v.closePath(),o.push(v)}}else if(i=="round"){let a=new Sr;a.arc(t[t.length-1],n,0,2*Math.PI,!1),a.closePath(),o.push(a)}return o},kA=(t,e,n)=>{if(t.userData.type!=="PenStroke")return;const{bufferCanvasCtx1:i,settings:r,renderer:s,camera:o,DPR:a}=n,{x:l,y:u}=s.getSize(new K),c=rr(e.clone(),o,l,u),f=r.drawSize,d=new lr().setFromObject(t),x=new Ri(new K(d.min.x,d.min.y),new K(d.max.x,d.max.y)).clone().expandByScalar(f/o.zoom).containsPoint(new K(c.x,c.y)),m=t.userData;if(!x)return;const h=m.uniPathsBBs??[];if(h!=null){for(let _=0;_<h.length;_++){if(!new Ri(new K(h[_][0][0]==null?h[_][0][0]:h[_][0][0]+t.position.x,h[_][0][1]==null?h[_][0][1]:h[_][0][1]+t.position.y),new K(h[_][1][0]==null?h[_][1][0]:h[_][1][0]+t.position.x,h[_][1][1]==null?h[_][1][1]:h[_][1][1]+t.position.y)).clone().expandByScalar(f/o.zoom).containsPoint(new K(c.x,c.y)))continue;const E=m.penStrokeSubPathsData[_],R=Hd(E.p1,E.cp,E.p2,E.v1+f/o.zoom,E.v2+f/o.zoom);i.save(),bt(i,o,l,u),i.translate(t.position.x,t.position.y);const b=i.isPointInPath(R.path2D,e.x*a,e.y*a)||i.isPointInStroke(R.path2D,e.x*a,e.y*a);if(i.restore(),b)return!0}return!1}},HA=(t,e,n)=>{if(t.userData.type!=="Shape")return;const{bufferCanvasCtx1:i,settings:r,renderer:s,camera:o,DPR:a}=n,{x:l,y:u}=s.getSize(new K),c=rr(e.clone(),o,l,u),f=r.drawSize,d=new lr().setFromObject(t),x=new Ri(new K(d.min.x,d.min.y),new K(d.max.x,d.max.y)).clone().expandByScalar(f/o.zoom).containsPoint(new K(c.x,c.y)),m=t.userData;if(!x)return;const h=m.formPoints,_=Pi(h,!0,m.drawSize+f/o.zoom,"round",i);for(let g=0;g<_.length;g++){const y=_[g];if(!new Ri(new K(y.minX==null?y.minX:y.minX+t.position.x,y.minY==null?y.minY:y.minY+t.position.y),new K(y.maxX==null?y.maxX:y.maxX+t.position.x,y.maxY==null?y.maxY:y.maxY+t.position.y)).containsPoint(new K(c.x,c.y)))continue;i.save(),bt(i,o,l,u),i.translate(t.position.x,t.position.y);const R=i.isPointInPath(y.path2D,e.x*a,e.y*a)||i.isPointInStroke(y.path2D,e.x*a,e.y*a);if(i.restore(),R)return!0}return!1},GA=(t,e,n)=>t.userData.type=="PenStroke"?kA(t,e,n):t.userData.type=="Shape"?HA(t,e,n):!1,VA=(t,e)=>{const{bufferCanvasCtx1:n,settings:i,renderer:r,camera:s,scene:o}=e,a=i.drawSize;n.clearRect(0,0,n.canvas.width,n.canvas.height),n.save(),n.beginPath(),n.lineWidth=2,n.strokeStyle="rgb(64 64 64)",n.fillStyle="rgba(0, 0, 0, 0.1)",n.arc(t.x,t.y,a,0,2*Math.PI,!1),n.stroke(),n.fill(),n.closePath(),n.restore();const l=[],u=c=>{c.isObject3D&&c instanceof It&&c.isMesh&&GA(c,t,e)&&l.push(c)};o.traverse(u),l.forEach(c=>{pC(e,c)}),l.length>0&&r.render(o,s)},WA=t=>{const{bufferCanvasCtx1:e,bufferCanvasCtx2:n}=t;e.clearRect(0,0,e.canvas.width,e.canvas.height),n.clearRect(0,0,n.canvas.width,n.canvas.height)};function qv(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},o={},a=t[0].morphTargetsRelative,l=new qn;let u=0;for(let c=0;c<t.length;++c){const f=t[c];let d=0;if(n!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(n)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(n){let c=0;const f=[];for(let d=0;d<t.length;++d){const p=t[d].index;for(let v=0;v<p.count;++v)f.push(p.getX(v)+c);c+=t[d].attributes.position.count}l.setIndex(f)}for(const c in s){const f=Hm(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in o){const f=o[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<f;++d){const p=[];for(let x=0;x<o[c].length;++x)p.push(o[c][x][d]);const v=Hm(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(v)}}return l}function Hm(t){let e,n,i,r=-1,s=0;for(let u=0;u<t.length;++u){const c=t[u];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=c.itemSize),n!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.array.length}const o=new e(s);let a=0;for(let u=0;u<t.length;++u)o.set(t[u].array,a),a+=t[u].array.length;const l=new Zt(o,n,i);return r!==void 0&&(l.gpuType=r),l}function Zn(t,e,n,i,r){const s=Math.cos(r),o=Math.sin(r),a=s*(n-t)+o*(i-e)+t,l=s*(i-e)-o*(n-t)+e;return new S(a,l)}const Qa=(t,e,n)=>t==pt.Line?{formPoints:[new S(e.x,e.y),new S(n.x,n.y)],boundingPoints:[new S(e.x,e.y),new S(n.x,n.y)],boundingPointsMoveBoundingUpdate:[[new S(1,1),new S(0,0)],[new S(0,0),new S(1,1)]],boundingPointsMoveFormUpdate:[[new S(1,1),new S(0,0)],[new S(0,0),new S(1,1)]]}:t==pt.Rectangle?{formPoints:[new S(e.x,e.y),new S(n.x,e.y),new S(n.x,n.y),new S(e.x,n.y)],boundingPoints:[new S(e.x,e.y),new S(n.x,e.y),new S(n.x,n.y),new S(e.x,n.y)],boundingPointsMoveBoundingUpdate:[[new S(1,1),new S(0,1),new S(0,0),new S(1,0)],[new S(0,1),new S(1,1),new S(1,0),new S(0,0)],[new S(0,0),new S(1,0),new S(1,1),new S(0,1)],[new S(1,0),new S(0,0),new S(0,1),new S(1,1)]],boundingPointsMoveFormUpdate:[[new S(1,1),new S(0,1),new S(0,0),new S(1,0)],[new S(0,1),new S(1,1),new S(1,0),new S(0,0)],[new S(0,0),new S(1,0),new S(1,1),new S(0,1)],[new S(1,0),new S(0,0),new S(0,1),new S(1,1)]]}:t==pt.Triangle?{formPoints:[new S((e.x+n.x)/2,e.y),new S(n.x,n.y),new S(e.x,e.y)],boundingPoints:[new S(e.x,e.y),new S(n.x,e.y),new S(n.x,n.y),new S(e.x,n.y)],boundingPointsMoveBoundingUpdate:[[new S(1,1),new S(0,1),new S(0,0),new S(1,0)],[new S(0,1),new S(1,1),new S(1,0),new S(0,0)],[new S(0,0),new S(1,0),new S(1,1),new S(0,1)],[new S(1,0),new S(0,0),new S(0,1),new S(1,1)]],boundingPointsMoveFormUpdate:[[new S(.5,1),new S(0,0),new S(1,0)],[new S(.5,1),new S(1,0),new S(0,0)],[new S(.5,0),new S(1,1),new S(0,1)],[new S(.5,0),new S(0,1),new S(1,1)]]}:t==pt.Rhombus?{formPoints:[new S(n.x,n.y),new S(n.x,n.y),new S(n.x,n.y),new S(n.x,n.y)],boundingPoints:[new S(e.x,e.y),new S(n.x,e.y),new S(n.x,n.y),new S(e.x,n.y)],boundingPointsMoveBoundingUpdate:[[new S(1,1),new S(0,1),new S(0,0),new S(1,0)],[new S(0,1),new S(1,1),new S(1,0),new S(0,0)],[new S(0,0),new S(1,0),new S(1,1),new S(0,1)],[new S(1,0),new S(0,0),new S(0,1),new S(1,1)]],boundingPointsMoveFormUpdate:[[new S(.5,1),new S(0,.5),new S(.5,0),new S(1,.5)],[new S(.5,1),new S(1,.5),new S(.5,0),new S(0,.5)],[new S(.5,0),new S(1,.5),new S(.5,1),new S(0,.5)],[new S(.5,0),new S(0,.5),new S(.5,1),new S(1,.5)]]}:t==pt.Hexagon?{formPoints:[new S(n.x,n.y),new S(n.x,n.y),new S(n.x,n.y),new S(n.x,n.y),new S(n.x,n.y),new S(n.x,n.y)],boundingPoints:[new S(e.x,e.y),new S(n.x,e.y),new S(n.x,n.y),new S(e.x,n.y)],boundingPointsMoveBoundingUpdate:[[new S(1,1),new S(0,1),new S(0,0),new S(1,0)],[new S(0,1),new S(1,1),new S(1,0),new S(0,0)],[new S(0,0),new S(1,0),new S(1,1),new S(0,1)],[new S(1,0),new S(0,0),new S(0,1),new S(1,1)]],boundingPointsMoveFormUpdate:[[new S(.5,1),new S(0,.75),new S(0,.25),new S(.5,0),new S(1,.25),new S(1,.75)],[new S(.5,1),new S(1,.75),new S(1,.25),new S(.5,0),new S(0,.25),new S(0,.75)],[new S(.5,0),new S(1,.25),new S(1,.75),new S(.5,1),new S(0,.75),new S(0,.25)],[new S(.5,0),new S(0,.25),new S(0,.75),new S(.5,1),new S(1,.75),new S(1,.25)]]}:t==pt.Kite?{formPoints:[new S(n.x,n.y),new S(n.x,n.y),new S(n.x,n.y),new S(n.x,n.y)],boundingPoints:[new S(e.x,e.y),new S(n.x,e.y),new S(n.x,n.y),new S(e.x,n.y)],boundingPointsMoveBoundingUpdate:[[new S(1,1),new S(0,1),new S(0,0),new S(1,0)],[new S(0,1),new S(1,1),new S(1,0),new S(0,0)],[new S(0,0),new S(1,0),new S(1,1),new S(0,1)],[new S(1,0),new S(0,0),new S(0,1),new S(1,1)]],boundingPointsMoveFormUpdate:[[new S(.5,1),new S(0,.25),new S(.5,0),new S(1,.25)],[new S(.5,1),new S(1,.25),new S(.5,0),new S(0,.25)],[new S(.5,0),new S(1,.75),new S(.5,1),new S(0,.75)],[new S(.5,0),new S(0,.75),new S(.5,1),new S(1,.75)]]}:{formPoints:[new S(e.x,e.y),new S(n.x,e.y),new S(n.x,n.y),new S(e.x,n.y)],boundingPoints:[new S(e.x,e.y),new S(n.x,e.y),new S(n.x,n.y),new S(e.x,n.y)],boundingPointsMoveBoundingUpdate:[[new S(1,1),new S(0,1),new S(0,0),new S(1,0)],[new S(0,1),new S(1,1),new S(1,0),new S(0,0)],[new S(0,0),new S(1,0),new S(1,1),new S(0,1)],[new S(1,0),new S(0,0),new S(0,1),new S(1,1)]],boundingPointsMoveFormUpdate:[[new S(1,1),new S(0,1),new S(0,0),new S(1,0)],[new S(0,1),new S(1,1),new S(1,0),new S(0,0)],[new S(0,0),new S(1,0),new S(1,1),new S(0,1)],[new S(1,0),new S(0,0),new S(0,1),new S(1,1)]]},Lf=(t,e)=>{const{bufferCanvasCtx1:n,renderer:i,camera:r}=e,{x:s,y:o}=i.getSize(new K);t.forEach(a=>{n.save(),bt(n,r,s,o),n.fillStyle="white",n.beginPath(),n.shadowColor="black",n.shadowBlur=2,n.arc(a.x,a.y,7/r.zoom,0,2*Math.PI,!1),n.fill(),n.closePath(),n.restore(),n.save(),bt(n,r,s,o),n.fillStyle="rgb(29, 78, 216)",n.beginPath(),n.arc(a.x,a.y,5/r.zoom,0,2*Math.PI,!1),n.fill(),n.closePath(),n.restore()})},Df=(t,e)=>{const{bufferCanvasCtx1:n,renderer:i,camera:r}=e,{x:s,y:o}=i.getSize(new K);n.save(),bt(n,r,s,o),n.fillStyle="white",n.beginPath(),n.shadowColor="black",n.shadowBlur=2,n.arc(t.x,t.y,7/r.zoom,0,2*Math.PI,!1),n.fill(),n.closePath(),n.restore(),n.save(),bt(n,r,s,o),n.fillStyle="rgb(22 163 74)",n.beginPath(),n.arc(t.x,t.y,5/r.zoom,0,2*Math.PI,!1),n.fill(),n.closePath(),n.restore()},Uf=(t,e)=>{const{bufferCanvasCtx1:n,renderer:i,camera:r}=e,{x:s,y:o}=i.getSize(new K);n.save(),bt(n,r,s,o),n.fillStyle="white",n.beginPath(),n.shadowColor="black",n.shadowBlur=2,n.arc(t.x,t.y,7/r.zoom,0,2*Math.PI,!1),n.fill(),n.closePath(),n.restore(),n.save(),bt(n,r,s,o),n.fillStyle="rgb(29, 78, 216)",n.beginPath(),n.arc(t.x,t.y,5/r.zoom,0,2*Math.PI,!1),n.fill(),n.closePath(),n.restore()},Nf=(t,e,n)=>{const{bufferCanvasCtx1:i,renderer:r,camera:s}=e,{x:o,y:a}=r.getSize(new K);i.save(),bt(i,s,o,a),i.beginPath(),i.moveTo(t[0].x,t[0].y);for(let l=0;l<t.length;l++)i.lineTo(t[l].x,t[l].y);(n==null||n==!1)&&i.closePath(),i.lineJoin=i.lineCap="round",i.lineWidth=3/s.zoom,i.setLineDash([20/s.zoom]),i.strokeStyle="rgb(29, 78, 216)",i.globalAlpha=.1,i.stroke(),i.restore()},If=(t,e)=>{const{bufferCanvasCtx1:n,renderer:i,camera:r}=e,{x:s,y:o}=i.getSize(new K);n.save(),bt(n,r,s,o),n.beginPath(),n.moveTo(t[0].x,t[0].y);for(let a=0;a<t.length;a++)n.lineTo(t[a].x,t[a].y);n.closePath(),n.fillStyle="rgb(29, 78, 216)",n.globalAlpha=.05,n.fill(),n.restore()},Ff=(t,e)=>{const{bufferCanvasCtx1:n,renderer:i,camera:r,shapeKitState:s}=e,{x:o,y:a}=i.getSize(new K);t.forEach(l=>{n.save(),bt(n,r,o,a),n.fillStyle=s.shapeColor,n.beginPath(),n.fill(l.path2D),n.closePath(),n.restore()})},XA=(t,e)=>{const{shapeKitState:n,bufferCanvasCtx1:i,camera:r}=e;if(n.anchorPoint=new S(t.x,t.y),n.lastPoint=new S(t.x,t.y),n.currentPoint=new S(t.x,t.y),n.boundingPoints.length!=0){let s=!1;if(n.boundingPoints.forEach((o,a)=>{const l=new Path2D;l.arc(o.x,o.y,7/r.zoom,0,2*Math.PI,!1),l.closePath(),i.isPointInPath(l,t.x,t.y)&&(n.selectedBoundingPointIndex=a,n.modifyFlag=!0,s=!0)}),n.rotatePoint!=null){const o=new Path2D;o.arc(n.rotatePoint.x,n.rotatePoint.y,7/r.zoom,0,2*Math.PI,!1),o.closePath(),i.isPointInPath(o,t.x,t.y)&&(n.rotate=!0,n.modifyFlag=!0,s=!0)}if(n.movePoint!=null){const o=new Path2D;o.arc(n.movePoint.x,n.movePoint.y,7/r.zoom,0,2*Math.PI,!1),o.closePath(),i.isPointInPath(o,t.x,t.y)&&(n.modifyFlag=!0)}if(!s){Pi(n.formPoints,!0,n.shapeDrawSize,n.shapeLineJoin,i).forEach(l=>{i.isPointInPath(l.path2D,t.x,t.y)&&(n.modifyFlag=!0)});const a=new Path2D;a.moveTo(n.boundingPoints[0].x,n.boundingPoints[0].y);for(let l=0;l<n.boundingPoints.length;l++)a.lineTo(n.boundingPoints[l].x,n.boundingPoints[l].y);a.closePath(),i.save(),(i.isPointInPath(a,t.x,t.y)||i.isPointInStroke(a,t.x,t.y))&&(n.modifyFlag=!0),i.restore()}}},jA=(t,e)=>{const{shapeKitState:n,bufferCanvasCtx1:i,camera:r}=e;if(!(n.lastPoint==null||n.anchorPoint==null)){if(n.currentPoint=new S(t.x,t.y),n.boundingPoints.length!=0){if(!n.modifyFlag){n.lastPoint=new S(t.x,t.y);return}if(n.rotate){let o=n.boundingPoints.map(x=>x.x).reduce((x,m)=>x+m),a=n.boundingPoints.map(x=>x.y).reduce((x,m)=>x+m),l=new S(o/n.boundingPoints.length,a/n.boundingPoints.length),u=Math.atan2(t.x-l.x,t.y-l.y),c=Math.atan2(n.lastPoint.x-l.x,n.lastPoint.y-l.y),f=u-c;n.rotation+=f,n.boundingPoints=n.boundingPoints.map((x,m)=>Zn(l.x,l.y,x.x,x.y,f)),n.formPoints=n.formPoints.map((x,m)=>Zn(l.x,l.y,x.x,x.y,f)),n.movePoint=new S(l.x,l.y),o=n.boundingPoints.map(x=>x.x).reduce((x,m)=>x+m),a=n.boundingPoints.map(x=>x.y).reduce((x,m)=>x+m),l=new S(o/n.boundingPoints.length,a/n.boundingPoints.length),n.movePoint=new S(l.x,l.y);const d=n.boundingPoints[0].sub(n.boundingPoints[1]),p=n.boundingPoints[1].add(d.scale(.5)),v=p.add(Math.round(p.sub(l).length()*1e3)==0?d.getPerpendicular().normalizeTo(20/r.zoom):p.sub(l).normalizeTo(20/r.zoom));n.rotatePoint=v}else if(n.selectedBoundingPointIndex!=null){const o=Qa(n.shapeType,new S(0,0),new S(0,0)).boundingPointsMoveBoundingUpdate,a=Qa(n.shapeType,new S(0,0),new S(0,0)).boundingPointsMoveFormUpdate;let l=n.boundingPoints.map(x=>x.x).reduce((x,m)=>x+m),u=n.boundingPoints.map(x=>x.y).reduce((x,m)=>x+m),c=new S(l/n.boundingPoints.length,u/n.boundingPoints.length),f=n.rotation;n.boundingPoints=n.boundingPoints.map((x,m)=>{let h=Zn(c.x,c.y,x.x,x.y,-f),_=Zn(c.x,c.y,n.lastPoint.x,n.lastPoint.y,-f),g=Zn(c.x,c.y,n.currentPoint.x,n.currentPoint.y,-f),y=_.x-g.x,M=_.y-g.y,E=new S(h.x-y*o[n.selectedBoundingPointIndex][m].x,h.y-M*o[n.selectedBoundingPointIndex][m].y);return Zn(c.x,c.y,E.x,E.y,f)}),n.formPoints=n.formPoints.map((x,m)=>{let h=Zn(c.x,c.y,x.x,x.y,-f),_=Zn(c.x,c.y,n.lastPoint.x,n.lastPoint.y,-f),g=Zn(c.x,c.y,n.currentPoint.x,n.currentPoint.y,-f),y=_.x-g.x,M=_.y-g.y,E=new S(h.x-y*a[n.selectedBoundingPointIndex][m].x,h.y-M*a[n.selectedBoundingPointIndex][m].y);return Zn(c.x,c.y,E.x,E.y,f)}),l=n.boundingPoints.map(x=>x.x).reduce((x,m)=>x+m),u=n.boundingPoints.map(x=>x.y).reduce((x,m)=>x+m),c=new S(l/n.boundingPoints.length,u/n.boundingPoints.length),n.movePoint=new S(c.x,c.y);const d=n.boundingPoints[0].sub(n.boundingPoints[1]),p=n.boundingPoints[1].add(d.scale(.5)),v=p.add(Math.round(p.sub(c).length()*1e3)==0?d.getPerpendicular().normalizeTo(20/r.zoom):p.sub(c).normalizeTo(20/r.zoom));n.rotatePoint=v}else{let o=n.lastPoint.x-n.currentPoint.x,a=n.lastPoint.y-n.currentPoint.y;n.boundingPoints=n.boundingPoints.map((v,x)=>new S(v.x-o,v.y-a)),n.formPoints=n.formPoints.map((v,x)=>new S(v.x-o,v.y-a));const l=n.boundingPoints.map(v=>v.x).reduce((v,x)=>v+x),u=n.boundingPoints.map(v=>v.y).reduce((v,x)=>v+x),c=new S(l/n.boundingPoints.length,u/n.boundingPoints.length);n.movePoint=new S(c.x,c.y);const f=n.boundingPoints[0].sub(n.boundingPoints[1]),d=n.boundingPoints[1].add(f.scale(.5)),p=d.add(Math.round(d.sub(c).length()*1e3)==0?f.getPerpendicular().normalizeTo(20/r.zoom):d.sub(c).normalizeTo(20/r.zoom));n.rotatePoint=p}const s=Pi(n.formPoints,!0,n.shapeDrawSize,n.shapeLineJoin,i);i.clearRect(0,0,i.canvas.width,i.canvas.height),Ff(s,e),If(n.boundingPoints,e),Nf(n.boundingPoints,e,n.shapeType==pt.Line),Lf(n.boundingPoints,e),Df(n.rotatePoint,e),Uf(n.movePoint,e)}else{if(!n.createdFlag){n.shapeType=e.settings.shapeType,n.shapeColor=e.settings.drawColor,n.shapeDrawSize=e.settings.drawSize,n.shapeLineJoin=e.settings.shapeLineJoin,n.boundingPoints=Qa(n.shapeType,n.currentPoint,n.currentPoint).boundingPoints,n.formPoints=Qa(n.shapeType,n.currentPoint,n.currentPoint).formPoints;const o=n.boundingPoints.map(d=>d.x).reduce((d,p)=>d+p),a=n.boundingPoints.map(d=>d.y).reduce((d,p)=>d+p),l=new S(o/n.boundingPoints.length,a/n.boundingPoints.length);n.movePoint=new S(l.x,l.y);const u=n.boundingPoints[0].sub(n.boundingPoints[1]),c=n.boundingPoints[1].add(u.scale(.5)),f=c.add(Math.round(c.sub(l).length()*1e3)==0?u.getPerpendicular().normalizeTo(20/r.zoom):c.sub(l).normalizeTo(20/r.zoom));n.rotatePoint=f,n.modifyFlag=!0,n.selectedBoundingPointIndex=0}n.createdFlag=!0,i.clearRect(0,0,i.canvas.width,i.canvas.height);const s=Pi(n.formPoints,!0,n.shapeDrawSize,n.shapeLineJoin,i);Ff(s,e),If(n.boundingPoints,e),Nf(n.boundingPoints,e,n.shapeType==pt.Line),Lf(n.boundingPoints,e),Df(n.rotatePoint,e),Uf(n.movePoint,e)}n.lastPoint=new S(t.x,t.y)}},$v=t=>{const{shapeKitState:e}=t;e.modifyFlag=!1,e.rotate=!1,e.formPoints=[],e.boundingPoints=[],e.movePoint=void 0,e.rotatePoint=void 0,e.rotation=0,e.selectedBoundingPointIndex=void 0,e.createdFlag=!1,e.preModifyMesh=void 0,e.anchorPoint=void 0,e.lastPoint=void 0,e.currentPoint=void 0,e.shapeType=pt.Rectangle,e.shapeColor="red",e.shapeDrawSize=1,e.shapeLineJoin="round"},YA=t=>{const{shapeKitState:e,bufferCanvasCtx1:n,renderer:i,camera:r,scene:s}=t;if(e.boundingPoints.length!=0){if(!e.modifyFlag){const o=Pi(e.formPoints,!0,e.shapeDrawSize,e.shapeLineJoin,n),a=[];o.forEach(f=>{const d=new ir(f.threeShape);a.push(d)});let l=qv(a);const u=new Ci({transparent:!0,color:new We(e.shapeColor),side:_n}),c=new It(l,u);if(c.userData.type="Shape",c.userData.shapeType=e.shapeType,c.userData.formPoints=e.formPoints,c.userData.boundingPoints=e.boundingPoints,c.userData.rotation=e.rotation,c.userData.drawColor=e.shapeColor,c.userData.drawSize=e.shapeDrawSize,c.userData.lineJoin=e.shapeLineJoin,e.preModifyMesh!=null){const f=e.preModifyMesh;t.historyManager.add({undo:()=>{s.remove(c),s.add(f),i.render(s,r)},redo:()=>{s.add(c),s.remove(f),i.render(s,r)}}),s.add(c)}else Wd(t,c);$v(t),n.clearRect(0,0,n.canvas.width,n.canvas.height),i.render(s,r)}}else if(!e.createdFlag){let o=!1,a;s.traverse(l=>{if(o||!l.isObject3D||l.userData.type!="Shape")return;const u=l.userData,c=l.position.x*r.zoom,f=l.position.y*r.zoom,d=(u.formPoints??[]).map(m=>new S(m.x+c,m.y-f)),p=(u.boundingPoints??[]).map(m=>new S(m.x+c,m.y-f)),v=Pi(d,!0,u.drawSize??1,u.lineJoin??"round",n);let x=!1;n.save();for(let m=0;m<v.length;m++)if(n.isPointInPath(v[m].path2D,e.currentPoint.x,e.currentPoint.y)){x=!0,o=!0;break}if(n.restore(),x){e.boundingPoints=p,e.formPoints=d,e.rotation=u.rotation??0;const m=e.boundingPoints.map(E=>E.x).reduce((E,R)=>E+R),h=e.boundingPoints.map(E=>E.y).reduce((E,R)=>E+R),_=new S(m/e.boundingPoints.length,h/e.boundingPoints.length);e.movePoint=new S(_.x,_.y);const g=e.boundingPoints[0].sub(e.boundingPoints[1]),y=e.boundingPoints[1].add(g.scale(.5)),M=y.add(Math.round(y.sub(_).length()*1e3)==0?g.getPerpendicular().normalizeTo(20/r.zoom):y.sub(_).normalizeTo(20/r.zoom));e.rotatePoint=M,e.shapeType=u.shapeType??pt.Rectangle,e.shapeColor=u.drawColor??"red",e.shapeDrawSize=u.drawSize??"1",e.shapeLineJoin=u.lineJoin??"round",a=l,n.clearRect(0,0,n.canvas.width,n.canvas.height),Ff(v,t),If(e.boundingPoints,t),Nf(e.boundingPoints,t,e.shapeType==pt.Line),Lf(e.boundingPoints,t),Df(e.rotatePoint,t),Uf(e.movePoint,t)}}),o&&(a!=null&&(t.shapeKitState.preModifyMesh=a,s.remove(a)),i.render(s,r))}e.modifyFlag=!1,e.rotate=!1,e.selectedBoundingPointIndex=void 0,e.createdFlag=!1,e.anchorPoint=void 0,e.lastPoint=void 0,e.currentPoint=void 0},Vl=t=>{const{shapeKitState:e,bufferCanvasCtx1:n,renderer:i,camera:r,scene:s}=t;if(e.boundingPoints.length!=0){const o=Pi(e.formPoints,!0,e.shapeDrawSize,e.shapeLineJoin,n),a=[];o.forEach(f=>{const d=new ir(f.threeShape);a.push(d)});let l=qv(a);const u=new Ci({transparent:!0,color:new We(e.shapeColor),side:_n}),c=new It(l,u);if(c.userData.type="Shape",c.userData.shapeType=e.shapeType,c.userData.formPoints=e.formPoints,c.userData.boundingPoints=e.boundingPoints,c.userData.rotation=e.rotation,c.userData.drawColor=e.shapeColor,c.userData.drawSize=e.shapeDrawSize,c.userData.lineJoin=e.shapeLineJoin,e.preModifyMesh!=null){const f=e.preModifyMesh;t.historyManager.add({undo:()=>{s.remove(c),s.add(f),i.render(s,r)},redo:()=>{s.add(c),s.remove(f),i.render(s,r)}}),s.add(c)}else Wd(t,c)}$v(t),n.clearRect(0,0,n.canvas.width,n.canvas.height),i.render(s,r)},Kv=(t,e)=>{const{selectKitState:n,camera:i}=t,r=new Path2D;r.moveTo(n.lassoWorldPoints[0].x,n.lassoWorldPoints[0].y);for(let s=0;s<n.lassoWorldPoints.length;s++)r.lineTo(n.lassoWorldPoints[s].x,n.lassoWorldPoints[s].y);r.closePath(),e.lineJoin=e.lineCap="round",e.lineWidth=3/i.zoom,e.setLineDash([10/i.zoom]),e.strokeStyle="dodgerblue",e.stroke(r)},qA=(t,e,n,i,r)=>{if(t.userData.type!=="PenStroke")return!1;const{bufferCanvasCtx1:s,DPR:o}=e,a=t.userData,l=a.uniPathsBBs??[];for(let u=0;u<l.length;u++){if(!new Ri(new K(l[u][0][0]==null?l[u][0][0]:l[u][0][0]+t.position.x,l[u][0][1]==null?l[u][0][1]:l[u][0][1]+t.position.y),new K(l[u][1][0]==null?l[u][1][0]:l[u][1][0]+t.position.x,l[u][1][1]==null?l[u][1][1]:l[u][1][1]+t.position.y)).intersectsBox(n))continue;let f=!1;const d=a.penStrokeSubPathsData[u],p=[d.p1,d.cp,d.p2];s.save();for(let v=0;v<p.length;v++){const{x,y:m}=t.position;if(s.isPointInPath(i,p[v].x*o+x,p[v].y*o+m)){f=!0;break}}if(s.restore(),f)return!0}for(let u=0;u<l.length;u++){const c=new Ri(new K(l[u][0][0]==null?l[u][0][0]:l[u][0][0]+t.position.x,l[u][0][1]==null?l[u][0][1]:l[u][0][1]+t.position.y),new K(l[u][1][0]==null?l[u][1][0]:l[u][1][0]+t.position.x,l[u][1][1]==null?l[u][1][1]:l[u][1][1]+t.position.y));if(!c.intersectsBox(n))continue;const f=a.penStrokeSubPathsData[u];if(f==null)continue;const d=Hd(f.p1,f.cp,f.p2,f.v1,f.v2);for(let p=0;p<r.length;p++){if(!c.containsPoint(new K(r[p].x,r[p].y)))continue;s.save(),s.translate(t.position.x,t.position.y);const v=s.isPointInPath(d.path2D,r[p].x*o,r[p].y*o)||s.isPointInStroke(d.path2D,r[p].x*o,r[p].y*o);if(s.restore(),v)return!0}}return!1},$A=(t,e,n,i,r)=>{if(t.userData.type!=="Shape")return!1;const{bufferCanvasCtx1:s,DPR:o}=e,a=t.userData,l=a.formPoints;s.save();for(let c=0;c<l.length;c++){const{x:f,y:d}=t.position;if(s.isPointInPath(i,l[c].x*o+f,l[c].y*o+d))return!0}s.restore();const u=Pi(l,!0,a.drawSize,"round",s);for(let c=0;c<u.length;c++){const f=u[c],d=new Ri(new K(f.minX==null?f.minX:f.minX+t.position.x,f.minY==null?f.minY:f.minY+t.position.y),new K(f.maxX==null?f.maxX:f.maxX+t.position.x,f.maxY==null?f.maxY:f.maxY+t.position.y));if(d.intersectsBox(n))for(let p=0;p<r.length;p++){if(!d.containsPoint(new K(r[p].x,r[p].y)))continue;s.save(),s.translate(t.position.x,t.position.y);const v=s.isPointInPath(f.path2D,r[p].x*o,r[p].y*o)||s.isPointInStroke(f.path2D,r[p].x*o,r[p].y*o);if(s.restore(),v)return!0}}return!1},KA=(t,e,n,i,r)=>qA(t,e,n,i,r)||$A(t,e,n,i,r),ZA=(t,e)=>{const{selectKitState:n,bufferCanvasCtx1:i,DPR:r}=e;if(n.lassoWorldPoints.length==0)n.lassoExists=!1,n.newLasso=!0,n.lassoWorldPoints.push(new S(t.x,t.y));else{n.lassoExists=!0,n.newLasso=!1;const s=new Path2D;s.moveTo(n.lassoWorldPoints[0].x,n.lassoWorldPoints[0].y);for(let o=0;o<n.lassoWorldPoints.length;o++)s.lineTo(n.lassoWorldPoints[o].x,n.lassoWorldPoints[o].y);s.closePath(),i.isPointInPath(s,t.x*r,t.y*r)?n.modifyFlag=!0:n.modifyFlag=!1}n.previousWorldPoint=new S(t.x,t.y)},JA=(t,e)=>{const{selectKitState:n,bufferCanvasCtx1:i,bufferCanvasCtx2:r,renderer:s,camera:o,DPR:a}=e,{x:l,y:u}=s.getSize(new K);if(n.lassoExists){if(n.modifyFlag&&n.previousWorldPoint!=null){const c=t.x-n.previousWorldPoint.x,f=t.y-n.previousWorldPoint.y;n.lassoWorldPoints=n.lassoWorldPoints.map(d=>new S(d.x+c,d.y+f)),n.movedX+=c,n.movedY-=f,r.save(),r.clearRect(0,0,r.canvas.width,r.canvas.height),n.imgData!=null&&r.putImageData(n.imgData,0,0),i.clearRect(0,0,i.canvas.width,i.canvas.height),i.save(),n.imgData!=null&&i.drawImage(r.canvas,n.movedX*a*o.zoom,n.movedY*a*o.zoom),i.restore(),r.clearRect(0,0,r.canvas.width,r.canvas.height),r.restore()}}else n.lassoWorldPoints.push(new S(t.x,t.y)),i.clearRect(0,0,i.canvas.width,i.canvas.height),i.save(),bt(i,o,l,u),Kv(e,i),i.restore();n.previousWorldPoint=new S(t.x,t.y)},QA=t=>{const{selectKitState:e,bufferCanvasCtx1:n,bufferCanvasCtx2:i,renderer:r,camera:s,scene:o,DPR:a}=t,{x:l,y:u}=r.getSize(new K);if(e.newLasso){const c=new Path2D;c.moveTo(e.lassoWorldPoints[0].x,e.lassoWorldPoints[0].y);for(let _=0;_<e.lassoWorldPoints.length;_++)c.lineTo(e.lassoWorldPoints[_].x,e.lassoWorldPoints[_].y);c.closePath();const f=e.lassoWorldPoints,d=[];for(let _=1;_<f.length;_++){const g=f[_-1],y=f[_],M=y.sub(g).length();for(let E=1;E<M;E+=1){const R=g.add(y.sub(g).scale(E/M));d.push(R)}}const p=f.concat(d),v=new Ri().setFromPoints(p.map(_=>new K(_.x,_.y))),x=[],m=_=>{if(!_.isObject3D||!(_ instanceof It)||!_.isMesh)return;const g=new lr().setFromObject(_);new Ri(new K(g.min.x,g.min.y),new K(g.max.x,g.max.y)).intersectsBox(v)&&KA(_,t,v,c,p)&&x.push(_)};if(o.traverse(m),x.length==0){hl(t);return}e.selectedMeshes=x,x.forEach(_=>{o.remove(_)}),i.clearRect(0,0,i.canvas.width,i.canvas.height),e.selectedMeshes.forEach(_=>{if(_.userData.type=="PenStroke"){const g=_.userData,y=g.penStrokeSubPathsData;for(let M=0;M<y.length;M++){const E=y[M],R=Hd(E.p1,E.cp,E.p2,E.v1,E.v2);i.save(),bt(i,s,l,u),i.translate(_.position.x,_.position.y),i.fillStyle=g.drawColor??"black",i.fill(R.path2D),i.restore()}}else if(_.userData.type="Shape"){const g=_.userData,y=Pi(g.formPoints,!0,g.drawSize,"round",n);for(let M=0;M<y.length;M++){const E=y[M];i.save(),bt(i,s,l,u),i.translate(_.position.x,_.position.y),i.fillStyle=g.drawColor??"black",i.fill(E.path2D),i.restore()}}}),i.save(),bt(i,s,l,u),Kv(t,i),i.restore(),i.save();const h=i.getImageData(0,0,i.canvas.width,i.canvas.height);e.imgData=h,n.clearRect(0,0,n.canvas.width,n.canvas.height),n.save(),e.imgData!=null&&n.drawImage(i.canvas,e.movedX*a*s.zoom,e.movedY*a*s.zoom),n.restore(),i.clearRect(0,0,i.canvas.width,i.canvas.height),i.restore(),r.render(o,s)}else e.lassoExists&&e.modifyFlag||hl(t);e.previousWorldPoint=void 0,e.modifyFlag=!1,e.newLasso=!1},hl=t=>{const{selectKitState:e,bufferCanvasCtx1:n,bufferCanvasCtx2:i,renderer:r,camera:s,scene:o}=t;if(e.selectedMeshes.length!=0){const a=e.movedX,l=e.movedY,u=[...e.selectedMeshes];t.historyManager.add({redo:()=>{u.forEach(c=>{c.position.add(new D(a,-l,0)),r.render(o,s)})},undo:()=>{u.forEach(c=>{c.position.add(new D(-a,l,0)),r.render(o,s)})}}),e.selectedMeshes.forEach(c=>{c.position.add(new D(e.movedX,-e.movedY,0)),o.add(c)})}e.lassoWorldPoints=[],e.selectedMeshes=[],e.selectedPageIndex=-1,e.previousWorldPoint=void 0,e.lassoExists=!1,e.modifyFlag=!1,e.newLasso=!1,e.imgData=void 0,e.movedX=0,e.movedY=0,n.clearRect(0,0,n.canvas.width,n.canvas.height),i.clearRect(0,0,i.canvas.width,i.canvas.height),r.render(o,s)},Wl=t=>{hl(t)},eC=(t,e)=>{t.preventDefault();const{settings:n,renderer:i,camera:r}=e,{x:s,y:o}=i.getSize(new K),a=sa(t),l=rr(a,r,s,o);if(e.currentInputState!=Rt.Idle){if(e.currentInputState==Rt.Movement)return;Vl(e),Wl(e),jv(e)}t instanceof MouseEvent?t.button==2?e.currentInputState=Rt.Movement:e.currentInputState=Rt.Edit:t.touches.length>=2?e.currentInputState=Rt.Movement:e.currentInputState=Rt.Edit,e.currentInputState==Rt.Movement?(Vl(e),Wl(e),IA(e)):e.currentInputState==Rt.Edit&&(Yv(e),n.toolType==_t.Pen?UA(a,e):n.toolType==_t.Shape?XA(l,e):n.toolType==_t.Eraser||n.toolType==_t.Select&&ZA(l,e))},tC=(t,e)=>{t.preventDefault();const{settings:n,renderer:i,camera:r}=e,{x:s,y:o}=i.getSize(new K);if(e.currentInputState==Rt.Idle)return;const a=sa(t),l=rr(a,r,s,o);e.currentInputState==Rt.Movement?OA(t,e):n.toolType==_t.Pen?NA(a,e):n.toolType==_t.Shape?jA(l,e):n.toolType==_t.Eraser?VA(a,e):n.toolType==_t.Select&&JA(l,e)},nC=(t,e)=>{t.preventDefault();const{settings:n}=e;if(e.currentInputState==Rt.Idle)return;const i=yA(t);e.currentInputState==Rt.Movement?zA(e):n.toolType==_t.Pen?Xv(i,e):n.toolType==_t.Shape?YA(e):n.toolType==_t.Eraser?WA(e):n.toolType==_t.Select&&QA(e),e.currentInputState=Rt.Idle},iC=(t,e)=>{const{settings:n}=e;Vl(e),jv(e),Wl(e),Yv(e);const i=sa(t);e.currentInputState==Rt.Edit&&n.toolType==_t.Pen&&Xv(i,e),e.currentInputState=Rt.Idle},rC=(t,e)=>{if(t.preventDefault(),e.currentInputState==Rt.Edit)return;const n=sa(t);Vl(e),Wl(e),BA(t.deltaY,n,e)};class Zv{constructor(e,n,i){gt(this,"workers");gt(this,"busycheck");gt(this,"callbackStack");gt(this,"queue");gt(this,"finishCallback");this.finishCallback=i,this.workers=[],this.busycheck=[],this.callbackStack=[],this.queue=[];for(let r=0;r<e;r++){let s=new Worker(new URL(n,import.meta.url),{type:"module"});this.workers.push(s),this.busycheck.push(!1),this.callbackStack.push(void 0),s.onerror=o=>{this.callbackStack[r]([]),this.busycheck[r]=!1,this.callbackStack[r]=void 0,this.nextInQueue(r)},s.onmessage=o=>{this.callbackStack[r](o.data),this.busycheck[r]=!1,this.callbackStack[r]=void 0,this.nextInQueue(r)}}}nextInQueue(e){if(this.queue.length>0){let n=this.queue.shift();this.busycheck[e]=!0,this.callbackStack[e]=n.doneCallback;let i=this.workers[e];n.buffer!=null?i.postMessage(n.data(),n.buffer()):i.postMessage(n.data())}else{let n=!0;for(let i=0;i<this.busycheck.length;i++)if(this.busycheck[i]){n=!1;break}n&&this.finishCallback()}}requestWork(e,n,i){for(let s=0;s<this.busycheck.length&&!this.busycheck[s];s++);let r;for(let s=0;s<this.workers.length;s++)if(this.busycheck[s]==!1){r=s;break}if(r==null)this.queue.push({data:e,buffer:i,doneCallback:n});else{this.busycheck[r]=!0,this.callbackStack[r]=n;let s=this.workers[r];i!=null?s.postMessage(e(),i()):s.postMessage(e())}}}class sC{constructor(e,n=100){gt(this,"undoStack");gt(this,"redoStack");gt(this,"stackChangeCallback");gt(this,"stackLength");this.undoStack=[],this.redoStack=[],this.stackChangeCallback=e,this.stackLength=n}add(e){this.undoStack.push(e),this.undoStack.length>this.stackLength&&this.undoStack.shift(),this.redoStack=[],this.stackChangeCallback([this.undoStack.length,this.redoStack.length])}undo(){const e=this.undoStack.pop();e!=null&&(e.undo(),this.redoStack.push(e)),this.stackChangeCallback([this.undoStack.length,this.redoStack.length])}redo(){const e=this.redoStack.pop();e!=null&&(e.redo(),this.undoStack.push(e)),this.stackChangeCallback([this.undoStack.length,this.redoStack.length])}}var mi=(t=>(t[t.Dots=0]="Dots",t[t.HLines=1]="HLines",t[t.VHLines=2]="VHLines",t[t.None=3]="None",t))(mi||{});const Jv=(t,e,n)=>{if(t==0){const i=window.innerHeight/2/.1*3,r=window.innerWidth/2/.1*3;let s=[];for(let u=-i;u<i;u+=200)for(let c=-r;c<r;c+=200){const f=new Yo;f.arc(u-e/2,c-e/2,e/2,0,2*Math.PI,!1),f.closePath(),s.push(f)}const o=new ir(s,20),a=new Ci({color:n});return new It(o,a)}else if(t==1||t==2){let i=[],r=100;if(t==2){const o=window.innerHeight/2/.1*3,a=window.innerWidth/2/.1*3;for(let l=-a;l<a;l+=r){const u=new Cf;u.moveTo(l,-o),u.lineTo(l,o),i.push(u)}}if(t==1||t==2){const o=window.innerHeight/2/.1*3,a=window.innerWidth/2/.1*3;for(let l=-o;l<o;l+=r){const u=new Yo;u.moveTo(a,l),u.lineTo(-a,l),i.push(u)}}let s=new Ss;return i.forEach(o=>{const a=new qn().setFromPoints(o.getPoints()),l=new Od({color:n}),u=new kT(a,l);s.add(u)}),s}return new Ss};document.addEventListener("contextmenu",function(t){t.preventDefault()},!1);const oC=(t,e,n)=>{const i=new Fd({antialias:!0,alpha:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});i.setSize(t,e),i.setClearColor(0),i.setClearAlpha(0),i.setPixelRatio(n),i.localClippingEnabled=!0;const r=new cu(t/-2,t/2,e/2,e/-2,1,1e3);r.position.z=500,r.zoom=1,r.updateProjectionMatrix();const s=new BT;return s.add(r),[i,r,s]},aC=(t,e,n)=>{const i=document.createElement("canvas");i.width=t*n,i.height=e*n,i.style.width=t+"px",i.style.height=e+"px";const r=i.getContext("2d");r.scale(n,n);const s=document.createElement("canvas");s.width=t*n,s.height=e*n,s.style.width=t+"px",s.style.height=e+"px";const o=s.getContext("2d");return o.scale(n,n),[r,o]},lC=(t,e,n,i,r)=>{const s=devicePixelRatio,o=document.createElement("div");o.style.display="grid",o.style.width="min-content",o.style.height="min-content",o.addEventListener("contextmenu",_=>(_.preventDefault,!1),!1),t.appendChild(o);const[a,l,u]=oC(e,n,s);a.domElement.style.gridArea="1 / 1",a.domElement.style.alignSelf="end",o.appendChild(a.domElement);const c=Jv(r.gridType,10,r.gridColor);u.add(c);const[f,d]=aC(e,n,s);f.canvas.style.gridArea="1 / 1",f.canvas.style.alignSelf="end",o.appendChild(f.canvas),d.canvas.style.gridArea="1 / 1",d.canvas.style.alignSelf="end",o.appendChild(d.canvas);const p=a.getSize(new K).x,v=a.getSize(new K).y,x=new cu(p/-2,p/2,v/2,v/-2,1,1e3);x.position.set(l.position.x,l.position.y,l.position.z),x.zoom=l.zoom/3,x.updateProjectionMatrix();const m=new Fd({antialias:!0,alpha:!0,premultipliedAlpha:!0});m.setSize(p,v),m.setClearColor(0),m.setClearAlpha(0),m.localClippingEnabled=!0;const h={outputElement:t,containerElement:o,renderer:a,camera:l,scene:u,gridMesh:c,bufferCanvasCtx1:f,bufferCanvasCtx2:d,currentInputState:Rt.Idle,DPR:s,historyManager:new sC(i),settings:r,pencilKitState:{bufferVec3Arr:[],pointerVec3Arr:[],midPointsVec3Arr:[],threeShapePoints:[],uniPathsBBs:[],penStrokeSubPathsData:[]},shapeKitState:{anchorPoint:void 0,currentPoint:void 0,lastPoint:void 0,boundingPoints:[],formPoints:[],selectedBoundingPointIndex:void 0,rotation:0,rotatePoint:void 0,rotate:!1,movePoint:void 0,modifyFlag:!1,createdFlag:!1,shapeType:pt.Rectangle,shapeLineJoin:"round",shapeColor:"red",shapeDrawSize:1,preModifyMesh:void 0},moveKitState:{lastDragPoint:void 0,origin:new K(0,0),scale:1,startedZoom:!1,startZoomValue:l.zoom,maxZoom:.1,minZoom:10,panRenderer:m,panCamera:x},selectKitState:{lassoWorldPoints:[],selectedMeshes:[],selectedPageIndex:-1,imgData:void 0,previousWorldPoint:void 0,lassoExists:!1,modifyFlag:!1,newLasso:!1,movedX:0,movedY:0}};return fC(h),a.render(u,l),h},uC=t=>{const{outputElement:e,containerElement:n,renderer:i,camera:r,scene:s,bufferCanvasCtx1:o,bufferCanvasCtx2:a}=t;i.dispose(),r.clear(),s.clear(),o.canvas.width=1,o.canvas.height=1,a.canvas.width=1,a.canvas.height=1,n.removeChild(i.domElement),n.removeChild(o.canvas),n.removeChild(a.canvas),e.removeChild(n)},cC=(t,e,n)=>{const{renderer:i,camera:r,scene:s,bufferCanvasCtx1:o,bufferCanvasCtx2:a,DPR:l}=t;i.setSize(e,n),r.left=e/-2,r.right=e/2,r.top=n/2,r.bottom=n/-2,r.updateProjectionMatrix(),s.traverse(u=>{u.isObject3D}),o.clearRect(0,0,o.canvas.width,o.canvas.height),o.canvas.width=e*l,o.canvas.height=n*l,o.canvas.style.width=e+"px",o.canvas.style.height=n+"px",o.scale(l,l),a.clearRect(0,0,a.canvas.width,a.canvas.height),a.canvas.width=e*l,a.canvas.height=n*l,a.canvas.style.width=e+"px",a.canvas.style.height=n+"px",a.scale(l,l),i.render(s,r)},fC=t=>{const{bufferCanvasCtx2:e}=t,n=["touchstart","touchmove","touchend","touchcancle"],i=["mousedown","mousemove","mouseup","mouseleave"],r=_A(),s=r?n:i;e.canvas.addEventListener(s[0],o=>{eC(o,t)}),e.canvas.addEventListener(s[1],o=>{tC(o,t)}),e.canvas.addEventListener(s[2],o=>{nC(o,t)}),e.canvas.addEventListener(s[3],o=>{iC(o,t)}),r||e.canvas.addEventListener("wheel",o=>{rC(o,t)})},dC=t=>{const e=new Zv(1,"./SaveWorker.ts",()=>{}),{scene:n}=t,i=[],r=s=>{if(s.isObject3D&&s instanceof It&&s.isMesh){if(s.userData.type==="PenStroke"){const o=s.userData,l=o.penStrokeSubPathsData.map(u=>({p1:{x:Math.round(u.p1.x*1e3)/1e3,y:Math.round(u.p1.y*1e3)/1e3},cp:{x:Math.round(u.cp.x*1e3)/1e3,y:Math.round(u.cp.y*1e3)/1e3},p2:{x:Math.round(u.p2.x*1e3)/1e3,y:Math.round(u.p2.y*1e3)/1e3},v1:Math.round(u.v1*1e3)/1e3,v2:Math.round(u.v2*1e3)/1e3}));i.push({type:"PenStroke",penStrokeSubPathsJSON:l,drawColor:o.drawColor})}else if(s.userData.type==="Shape"){const o=s.userData;i.push({type:"Shape",boundingPoints:o.boundingPoints.map(a=>({x:a.x,y:a.y})),formPoints:o.formPoints.map(a=>({x:a.x,y:a.y})),drawColor:o.drawColor,drawSize:o.drawSize,lineJoin:o.lineJoin,rotation:o.rotation,shapeType:o.shapeType})}}};n.traverse(r),e.requestWork(()=>i,s=>{SA(s,"download.txt","application/json")})},hC=t=>{const e=new Zv(navigator.hardwareConcurrency,"./LoadWorker.ts",()=>{}),{renderer:n,scene:i,camera:r,bufferCanvasCtx1:s,bufferCanvasCtx2:o}=t;let a=0;MA(u=>{const c=JSON.parse(u);try{for(let f=0;f<c.length;f++){const d=c[f];d.type=="PenStroke"?e.requestWork(()=>({type:"PenStroke",penStrokeSubPathsJSON:d.penStrokeSubPathsJSON}),p=>{if(p.length==0){a+=1;return}const v=new ir;v.setAttribute("position",new Zt(p[2],3)),v.setIndex(new Zt(p[3],1));const x=new Ci({color:new We(d.drawColor),side:_n,transparent:!0}),m=new It(v,x);m.userData.type="PenStroke",m.userData.penStrokeSubPathsData=p[0],m.userData.uniPathsBBs=p[1],m.userData.drawColor=d.drawColor??t.settings.drawColor,i.add(m),a+=1,console.log(c.length),a===c.length&&n.render(i,r)}):d.type=="Shape"&&e.requestWork(()=>({type:"Shape",formPoints:d.formPoints,drawSize:d.drawSize,lineJoin:d.lineJoin}),p=>{if(p.length==0){a+=1;return}const v=new ir;v.setAttribute("position",new Zt(p[1],3)),v.setIndex(new Zt(p[2],1));const x=new Ci({color:new We(d.drawColor),side:_n,transparent:!0}),m=new It(v,x);m.userData.type="Shape",m.userData.formPoints=p[0],m.userData.boundingPoints=d.boundingPoints.map(h=>new S(h.x,h.y)),m.userData.drawColor=d.drawColor,m.userData.drawSize=d.drawSize,m.userData.lineJoin=d.lineJoin,m.userData.rotation=d.rotation,m.userData.shapeType=d.shapeType,i.add(m),a+=1,a===c.length&&n.render(i,r)})}i.clear(),r.position.z=500,r.position.x=0,r.position.y=0,r.zoom=1,r.updateProjectionMatrix(),i.add(r),s.clearRect(0,0,s.canvas.width,s.canvas.height),o.clearRect(0,0,o.canvas.width,o.canvas.height),Of(t)}catch(f){console.log(f),i.clear(),r.position.z=500,r.position.x=0,r.position.y=0,r.zoom=1,r.updateProjectionMatrix(),i.add(r),n.render(i,r),s.clearRect(0,0,s.canvas.width,s.canvas.height),o.clearRect(0,0,o.canvas.width,o.canvas.height),Of(t)}})},Wd=(t,e)=>{const{historyManager:n,renderer:i,scene:r,camera:s}=t;n.add({redo:()=>{r.add(e),i.render(r,s)},undo:()=>{r.remove(e),i.render(r,s)}}),r.add(e)},pC=(t,e)=>{const{historyManager:n,renderer:i,scene:r,camera:s}=t;n.add({redo:()=>{r.remove(e),i.render(r,s)},undo:()=>{r.add(e),i.render(r,s)}}),r.remove(e)},mC=t=>{t.historyManager.undo()},gC=t=>{t.historyManager.redo()},Of=t=>{const{renderer:e,camera:n,scene:i}=t,r=Jv(t.settings.gridType,10,t.settings.gridColor);i.remove(t.gridMesh),t.gridMesh=r,i.add(t.gridMesh),e.render(i,n)},vC=t=>{const{renderer:e,camera:n,scene:i}=t;if(t.settings.gridType!=mi.None){if(t.settings.gridType==mi.Dots){const r=new Ci({color:t.settings.gridColor});t.gridMesh.material=r}else{const r=new Od({color:t.settings.gridColor});t.gridMesh.traverse(s=>{s.material=r})}e.render(i,n)}};function ho(t){const{showMenu:e,setShowMenu:n}=t,i=be.useRef(null);return be.useEffect(()=>{window.addEventListener("mousedown",r=>{if(i.current!=null){let s=!1,o=r.target;for(o==i.current&&(s=!0),o==t.togglerRef.current&&(s=!0);o.parentElement!=null;){if(o=o.parentElement,o==i.current){s=!0;break}if(o==t.togglerRef.current){s=!0;break}}s||n(!1)}}),window.addEventListener("touchstart",r=>{if(i.current!=null){let s=!1,o=r.target;for(o==i.current&&(s=!0),o==t.togglerRef.current&&(s=!0);o.parentElement!=null;){if(o=o.parentElement,o==i.current){s=!0;break}if(o==t.togglerRef.current){s=!0;break}}s||n(!1)}})},[]),Z.jsxs("div",{className:`w-full h-auto max-w-xs bg-neutral-800 text-white shadow-sm rounded-sm pointer-events-auto flex flex-col items-center justify-center ${e?"":"invisible"}`,ref:i,children:[Z.jsxs("div",{className:"w-full h-12 relative flex items-center justify-center",children:[Z.jsx("p",{className:"text-xl",children:t.title}),Z.jsx("div",{className:"h-12 w-12 h-full flex items-center justify-center absolute right-0 cursor-pointer",onClick:()=>n(!1),children:Z.jsx("span",{className:"material-symbols-outlined",children:"done"})})]}),Z.jsx("div",{className:"w-full h-auto",children:t.children})]})}const Qv=({min:t,max:e,startValue:n,changeCallback:i})=>{const r=u=>Math.round(t+(e-t)*u),[s,o]=be.useState(0),[a,l]=be.useState([n,r(1/4),r(2/4),r(3/4),r(4/4)]);return be.useEffect(()=>{i(a[s])},[s]),Z.jsxs("div",{className:"w-full h-auto flex flex-col items-center justify-center",children:[Z.jsx("div",{className:"w-full h-auto flex flex-row items-center justify-between",children:a.map((u,c)=>Z.jsx("div",{className:`w-full h-auto flex flex-row items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-blue-700 hover:border-blue-700 border border-neutral-700 border-opacity-40 cursor-pointer ${s===c?"bg-blue-700 border-blue-700":""}`,onClick:()=>o(c),children:u},c))}),Z.jsx("div",{className:"w-full px-1",children:Z.jsx("input",{type:"range",className:"slider",min:t,max:e,value:a[s],onChange:u=>{const c=Number(u.target.value),f=[...a];f[s]=c,l(f),i(c)}})})]})},xC=({changePenTypeCallback:t,changeStabilizerCallback:e,changeBufferSizeCallback:n,startPenType:i,startStabilizer:r,startBufferSize:s})=>{const[o,a]=be.useState(i),[l]=be.useState(r);return be.useEffect(()=>{t(o)},[o]),be.useEffect(()=>{e(l)},[l]),Z.jsxs("div",{className:"w-full h-auto flex flex-col items-center justify-center p-5 pt-0",children:[Z.jsxs("div",{className:"w-full mt-2",children:[Z.jsx("p",{className:"w-full mb-1",children:"Pen Type"}),Z.jsxs("div",{className:"w-full h-auto flex flex-row justify-between items-center",children:[Z.jsxs("div",{className:`flex flex-col items-center cursor-pointer w-full h-auto hover:bg-blue-700 hover:border-blue-700 border border-neutral-700 border-opacity-40 shadow-md p-2 mr-2 rounded-sm ${o==Tr.FountainPen?"bg-blue-700 border-blue-700":""}`,onClick:()=>a(Tr.FountainPen),children:[Z.jsx("span",{className:"material-symbols-outlined",children:"ink_pen"}),Z.jsx("p",{className:"text-xs",children:"Fountain Pen"})]}),Z.jsxs("div",{className:`flex flex-col items-center cursor-pointer w-full h-auto hover:bg-blue-700 hover:border-blue-700 border border-neutral-700 border-opacity-40 shadow-md p-2 rounded-sm ${o==Tr.Pen?"bg-blue-700  border-blue-700":""}`,onClick:()=>a(Tr.Pen),children:[Z.jsx("span",{className:"material-symbols-outlined",children:"edit"}),Z.jsx("p",{className:"text-xs",children:"Ball Pen"})]})]})]}),Z.jsxs("div",{className:"w-full mt-2",children:[Z.jsx("p",{className:"w-full mb-1",children:"Pen Stabilizer Delay"}),Z.jsx("div",{className:"w-full",children:Z.jsx(Qv,{startValue:s,min:1,max:30,changeCallback:u=>n(u)})})]})]})},_C=({changeShapeTypeCallback:t,startShapeType:e,changeLineJoinCallback:n,startLineJoin:i})=>{const[r,s]=be.useState(e),[o,a]=be.useState(i);be.useEffect(()=>{t(r)},[r]),be.useEffect(()=>{n(o)},[o]);const l=[["Rectangle",pt.Rectangle],["Triangle",pt.Triangle],["Line",pt.Line],["Hexagon",pt.Hexagon],["Kite",pt.Kite],["Rhombus",pt.Rhombus]],u=["bevel","miter","round"];return Z.jsxs("div",{className:"w-full h-auto flex flex-col items-center justify-center p-5 pt-0",children:[Z.jsxs("div",{className:"w-full mt-2",children:[Z.jsx("p",{className:"w-full mb-1",children:"Shape Type"}),Z.jsx("div",{className:"flex flex-row flex-wrap",children:l.map((c,f)=>Z.jsx("div",{className:" h-12 w-1/3 p-1 flex flex-col items-center justify-center",children:Z.jsxs("div",{className:`h-full w-full border flex flex-col items-center justify-center rounded-sm  hover:bg-blue-700 hover:border-blue-700 border border-neutral-700 border-opacity-40 shadow-md cursor-pointer p-1 ${r==c[1]?"bg-blue-700 border-blue-700":""}`,onClick:()=>s(c[1]),children:[Z.jsx("p",{className:"flex justify-between items-center"}),Z.jsx("p",{className:"text-sm",children:c[0]})]})},f))})]}),Z.jsxs("div",{className:"w-full mt-2",children:[Z.jsx("p",{className:"w-full mb-1",children:"Line Join"}),Z.jsx("div",{className:"flex flex-row flex-wrap",children:u.map((c,f)=>Z.jsx("div",{className:" h-12 w-1/3 p-1 flex flex-col items-center justify-center",children:Z.jsxs("div",{className:`h-full w-full border flex flex-col items-center justify-center rounded-sm  hover:bg-blue-700 hover:border-blue-700 border border-neutral-700 border-opacity-40 shadow-md cursor-pointer p-1 ${o==c?"bg-blue-700 border-blue-700":""}`,onClick:()=>a(c),children:[Z.jsx("p",{className:"flex justify-between items-center"}),Z.jsx("p",{className:"text-sm",children:c})]})},f))})]})]})},yC=({changeDrawSizeCallback:t,startDrawSize:e,minDrawSize:n,maxDrawSize:i})=>{const[r,s]=be.useState(e);return be.useEffect(()=>{t(r)},[r]),Z.jsx("div",{className:"w-full h-auto flex flex-col items-center justify-center p-5 pt-0",children:Z.jsx("div",{className:"w-full mt-2",children:Z.jsx("div",{className:"w-full",children:Z.jsx(Qv,{startValue:e,min:n,max:i,changeCallback:o=>s(o)})})})})},SC=({changeDrawColorCallback:t,startDrawColor:e})=>{const[n,i]=be.useState(0),[r,s]=be.useState([e,"rgb(28, 28, 30)","rgb(242, 242, 247)","rgb(255, 69, 58)","rgb(48, 219, 91)","rgb(10, 132, 255)","rgb(255, 214, 10)"]);return be.useEffect(()=>{t("#"+new We(r[n]).getHexString())},[n]),Z.jsx("div",{className:"w-full h-auto flex flex-col items-center justify-center p-5 pt-0",children:Z.jsxs("div",{className:"w-full mt-2",children:[Z.jsx("div",{className:"w-full h-auto flex flex-row items-center justify-between",children:r.map((o,a)=>Z.jsx("div",{className:"w-full h-6 p-1 mx-0.5 rounded-sm cursor-pointer ",style:{backgroundColor:"#"+new We(o).getHexString()},onClick:()=>i(a)},a))}),Z.jsx("div",{className:"w-full mt-2",children:Z.jsx("input",{type:"color",name:"DrawColor",className:"w-full h-6",value:"#"+new We(r[n]).getHexString(),onChange:o=>{const a=o.target.value,l=[...r];l[n]=a,s(l),t(a)}})})]})})},ex=1,tx=30,MC=t=>{let n=Math.round(bf(t,[ex,tx],[1,5]))-1;return n=Math.max(0,Math.min(n,5-1)),["pen_size_1","pen_size_2","pen_size_3","pen_size_4","pen_size_5"][n]},nx="w-10 h-10 rounded-sm shadow-sm m-1 flex items-center justify-center cursor-pointer hover:bg-blue-700 text-neutral-100",ix=(t,e)=>{let n=nx;return t.toolType===e?n+=" bg-blue-700":n+=" bg-neutral-800",n},wC=t=>{let e=nx;return t?e+=" bg-blue-700":e+=" bg-neutral-800",e},rx=(t,e,n)=>{const i=structuredClone(t);i.toolType=n,e(i)},Gm=({appSettings:t,setAppSettings:e,toggleRef:n,showDropdown:i,setShowDropdown:r,toolType:s,iconName:o})=>Z.jsx("div",{ref:n,className:ix(t,s),onClick:()=>{rx(t,e,s),t.toolType==s&&r(!i)},children:Z.jsx("span",{className:"material-symbols-outlined",children:o})}),Vm=({appSettings:t,setAppSettings:e,toolType:n,iconName:i})=>Z.jsx("div",{className:ix(t,n),onClick:()=>{rx(t,e,n)},children:Z.jsx("span",{className:"material-symbols-outlined",children:i})}),Wm=({toggleRef:t,showDropdown:e,setShowDropdown:n,iconName:i})=>Z.jsx("div",{ref:t,className:wC(e),onClick:()=>{n(!e)},children:Z.jsx("span",{className:"material-symbols-outlined",children:i})}),EC=({appSettings:t,setAppSettings:e})=>{const n=be.useRef(null),[i,r]=be.useState(!1),s=be.useRef(null),[o,a]=be.useState(!1),l=be.useRef(null),[u,c]=be.useState(!1),f=be.useRef(null),[d,p]=be.useState(!1);return Z.jsxs(Z.Fragment,{children:[Z.jsxs("div",{className:"w-auto h-auto p-3 fixed top-1/2 left-0 -translate-y-1/2 flex flex-col justify-center items-start",children:[Z.jsx(Gm,{appSettings:t,setAppSettings:e,toolType:_t.Pen,iconName:"ink_pen",toggleRef:n,showDropdown:i,setShowDropdown:r}),Z.jsx(Vm,{appSettings:t,setAppSettings:e,toolType:_t.Eraser,iconName:"ink_eraser"}),Z.jsx(Vm,{appSettings:t,setAppSettings:e,toolType:_t.Select,iconName:"lasso_select"}),Z.jsx(Gm,{appSettings:t,setAppSettings:e,toolType:_t.Shape,iconName:"shapes",toggleRef:s,showDropdown:o,setShowDropdown:a}),Z.jsxs("div",{className:"flex flex-col pt-2",children:[Z.jsx(Wm,{iconName:MC(t.drawSize),toggleRef:l,showDropdown:u,setShowDropdown:c}),Z.jsx(Wm,{iconName:"palette",toggleRef:f,showDropdown:d,setShowDropdown:p})]})]}),Z.jsx("div",{className:"w-full h-auto p-2 z-30 ml-16 fixed top-1/2 left-0 -translate-y-1/2 pointer-events-none",children:Z.jsx(ho,{togglerRef:n,showMenu:i,setShowMenu:r,title:"Pen Tool Settings",children:Z.jsx(xC,{changePenTypeCallback:v=>{const x=structuredClone(t);x.penType=v,e(x)},changeStabilizerCallback:v=>{const x=structuredClone(t);x.stabilizer=v,e(x)},changeBufferSizeCallback:v=>{const x=structuredClone(t);x.bufferSize=v,e(x)},changeBufferWeightCallback:v=>{const x=structuredClone(t);x.bufferWeight=v,e(x)},startBufferSize:t.bufferSize,startBufferWeight:t.bufferWeight,startPenType:t.penType,startStabilizer:t.stabilizer})})}),Z.jsx("div",{className:"w-full h-auto p-2 z-30 ml-16 fixed top-1/2 left-0 -translate-y-1/2 pointer-events-none",children:Z.jsx(ho,{togglerRef:s,showMenu:o,setShowMenu:a,title:"Shape Tool Settings",children:Z.jsx(_C,{changeShapeTypeCallback:v=>{const x=structuredClone(t);x.shapeType=v,e(x)},startShapeType:t.shapeType,changeLineJoinCallback:v=>{const x=structuredClone(t);x.shapeLineJoin=v,e(x)},startLineJoin:t.shapeLineJoin})})}),Z.jsx("div",{className:"w-full h-auto p-2 z-30 ml-16 fixed top-1/2 left-0 -translate-y-1/2 pointer-events-none",children:Z.jsx(ho,{togglerRef:l,showMenu:u,setShowMenu:c,title:"Draw Size Settings",children:Z.jsx(yC,{changeDrawSizeCallback:v=>{const x=structuredClone(t);x.drawSize=v,e(x)},startDrawSize:t.drawSize,minDrawSize:ex,maxDrawSize:tx})})}),Z.jsx("div",{className:"w-full h-auto p-2 z-30 ml-16 fixed top-1/2 left-0 -translate-y-1/2 pointer-events-none",children:Z.jsx(ho,{togglerRef:f,showMenu:d,setShowMenu:p,title:"Draw Color Settings",children:Z.jsx(SC,{changeDrawColorCallback:v=>{const x=structuredClone(t);x.drawColor=v,e(x)},startDrawColor:t.drawColor})})})]})};function TC(){const t=be.useRef(null),e=be.useRef(),[n,i]=be.useState({bufferSize:4,bufferWeight:.2,drawColor:"dodgerblue",drawSize:3,toolType:_t.Pen,penType:Tr.Pen,shapeType:pt.Rectangle,stabilizer:kl.LinearRegression,shapeLineJoin:"round",gridType:mi.VHLines,gridColor:"#404040"}),[r,s]=be.useState("#353535");be.useEffect(()=>{document.body.style.backgroundColor=r},[r]);const[o,a]=be.useState(mi.Dots),[l,u]=be.useState(n.gridColor);be.useEffect(()=>{const M=structuredClone(n);M.gridType=o,e.current!=null&&(e.current.settings=M,Of(e.current)),i(M)},[o]);const c=()=>{const M=structuredClone(n);M.gridColor=l,e.current!=null&&(e.current.settings=M,vC(e.current)),i(M)},[f,d]=be.useState([0,0]);be.useEffect(()=>{e.current=lC(t.current,window.innerWidth,window.innerHeight,E=>d(E),n);const M=()=>{e.current!=null&&cC(e.current,window.innerWidth,window.innerHeight)};return window.addEventListener("resize",M),()=>{console.log("dispose"),window.removeEventListener("resize",M),e.current!=null&&uC(e.current)}},[]),be.useEffect(()=>{e.current!=null&&(e.current.settings=n)},[n]);const p=()=>{e.current!=null&&dC(e.current)},v=()=>{e.current!=null&&hC(e.current)},x=()=>{e.current!=null&&mC(e.current)},m=()=>{e.current!=null&&gC(e.current)},h=be.useRef(null),[_,g]=be.useState(!1),y=[["Dots",mi.Dots],["Horizontal Lines",mi.HLines],["Grid",mi.VHLines],["Blank",mi.None]];return Z.jsxs("div",{children:[Z.jsx(EC,{appSettings:n,setAppSettings:i}),Z.jsxs("div",{className:"w-full h-auto p-3 fixed top-0 flex flex-row justify-between items-center",children:[Z.jsxs("div",{className:"flex flex-row items-center justify-center",children:[Z.jsx("div",{className:"w-10 h-10 rounded-sm shadow-sm m-1 flex items-center justify-center cursor-pointer bg-neutral-800 hover:bg-blue-700 text-neutral-100",onClick:p,children:Z.jsx("span",{className:"material-symbols-outlined",children:"download"})}),Z.jsx("div",{className:"w-10 h-10 rounded-sm shadow-sm m-1 flex items-center justify-center cursor-pointer bg-neutral-800 hover:bg-blue-700 text-neutral-100",onClick:v,children:Z.jsx("span",{className:"material-symbols-outlined",children:"publish"})})]}),Z.jsxs("div",{className:"flex flex-row items-center justify-center",children:[Z.jsx("div",{className:`w-10 h-10 rounded-sm shadow-sm m-1 flex items-center justify-center bg-neutral-800 text-neutral-100 ${f[0]==0?"opacity-50":"cursor-pointer hover:bg-blue-700"}`,onClick:x,children:Z.jsx("span",{className:"material-symbols-outlined",children:"undo"})}),Z.jsx("div",{className:`w-10 h-10 rounded-sm shadow-sm m-1 flex items-center justify-center bg-neutral-800 text-neutral-100 ${f[1]==0?"opacity-50":"cursor-pointer hover:bg-blue-700"}`,onClick:m,children:Z.jsx("span",{className:"material-symbols-outlined",children:"redo"})}),Z.jsx("div",{ref:h,onClick:()=>{g(!_)},className:"w-10 h-10 rounded-sm shadow-sm m-1 flex items-center justify-center cursor-pointer bg-neutral-800 hover:bg-blue-700 text-neutral-100",children:Z.jsx("span",{className:"material-symbols-outlined",children:"menu"})})]})]}),Z.jsx("div",{className:"w-full h-auto p-4 z-30 mt-14 fixed top-0 right-0 pointer-events-none flex flex-col items-end justify-center",children:Z.jsx(ho,{togglerRef:h,showMenu:_,setShowMenu:g,title:"Menu",children:Z.jsxs("div",{className:"w-full h-auto flex flex-col items-center justify-center p-5 pt-0",children:[Z.jsxs("div",{className:"w-full flex flex-row items-center justify-between py-1",children:[Z.jsx("p",{className:"text-sm",children:"Background Color"}),Z.jsx("input",{type:"color",name:"DrawColor",className:"h-6 w-12 ml-1",value:r,onChange:M=>{const E=M.target.value;s(E)}})]}),Z.jsxs("div",{className:"w-full flex flex-row items-center justify-between py-1",children:[Z.jsx("p",{className:"text-sm",children:"Grid Color"}),Z.jsx("input",{type:"color",name:"DrawColor",className:"h-6 w-12 ml-1",value:l,onInput:M=>{const E=M.target.value;u(E),c()}})]}),Z.jsx("div",{className:"w-full h-auto flex flex-col items-center justify-center",children:y.map((M,E)=>Z.jsx("div",{className:"w-full h-12 p-1 flex flex-col items-center justify-center",children:Z.jsxs("div",{className:`h-full w-full border flex flex-col items-center justify-center rounded-sm  hover:bg-blue-700 hover:border-blue-700 border border-neutral-700 border-opacity-40 shadow-md cursor-pointer p-1 ${n.gridType==M[1]?"bg-blue-700 border-blue-700":""}`,onClick:()=>a(M[1]),children:[Z.jsx("p",{className:"flex justify-between items-center"}),Z.jsx("p",{className:"text-sm",children:M[0]})]})},E))})]})})}),Z.jsx("div",{id:"inkCanvasWrapper",ref:t})]})}Ec.createRoot(document.getElementById("root")).render(Z.jsx(TC,{}));
