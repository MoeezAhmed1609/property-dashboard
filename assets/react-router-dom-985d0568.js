import{r as c,a as B}from"./react-1f0f9d5b.js";import{R as j,N,u as A,a as F,b as U,c as E,D as W}from"./react-router-c8771ec7.js";import{c as _,s as K,b}from"./@remix-run-3a320cb3.js";/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},L.apply(this,arguments)}function O(e,t){if(e==null)return{};var o={},n=Object.keys(e),i,r;for(r=0;r<n.length;r++)i=n[r],!(t.indexOf(i)>=0)&&(o[i]=e[i]);return o}function I(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function D(e,t){return e.button===0&&(!t||t==="_self")&&!I(e)}const z=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],H=["aria-current","caseSensitive","className","end","style","to","children"],G="startTransition",P=B[G];function Z(e){let{basename:t,children:o,future:n,window:i}=e,r=c.useRef();r.current==null&&(r.current=_({window:i,v5Compat:!0}));let l=r.current,[f,u]=c.useState({action:l.action,location:l.location}),{v7_startTransition:a}=n||{},h=c.useCallback(p=>{a&&P?P(()=>u(p)):u(p)},[u,a]);return c.useLayoutEffect(()=>l.listen(h),[l,h]),c.createElement(j,{basename:t,children:o,location:f.location,navigationType:f.action,navigator:l})}const M=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q=c.forwardRef(function(t,o){let{onClick:n,relative:i,reloadDocument:r,replace:l,state:f,target:u,to:a,preventScrollReset:h}=t,p=O(t,z),{basename:C}=c.useContext(N),g,R=!1;if(typeof a=="string"&&X.test(a)&&(g=a,M))try{let s=new URL(window.location.href),v=a.startsWith("//")?new URL(s.protocol+a):new URL(a),w=K(v.pathname,C);v.origin===s.origin&&w!=null?a=w+v.search+v.hash:R=!0}catch{}let d=A(a,{relative:i}),y=J(a,{replace:l,state:f,target:u,preventScrollReset:h,relative:i});function m(s){n&&n(s),s.defaultPrevented||y(s)}return c.createElement("a",L({},p,{href:g||d,onClick:R||r?n:m,ref:o,target:u}))}),$=c.forwardRef(function(t,o){let{"aria-current":n="page",caseSensitive:i=!1,className:r="",end:l=!1,style:f,to:u,children:a}=t,h=O(t,H),p=E(u,{relative:h.relative}),C=U(),g=c.useContext(W),{navigator:R}=c.useContext(N),d=R.encodeLocation?R.encodeLocation(p).pathname:p.pathname,y=C.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(y=y.toLowerCase(),m=m?m.toLowerCase():null,d=d.toLowerCase());let s=y===d||!l&&y.startsWith(d)&&y.charAt(d.length)==="/",v=m!=null&&(m===d||!l&&m.startsWith(d)&&m.charAt(d.length)==="/"),w=s?n:void 0,S;typeof r=="function"?S=r({isActive:s,isPending:v}):S=[r,s?"active":null,v?"pending":null].filter(Boolean).join(" ");let T=typeof f=="function"?f({isActive:s,isPending:v}):f;return c.createElement(q,L({},h,{"aria-current":w,className:S,ref:o,style:T,to:u}),typeof a=="function"?a({isActive:s,isPending:v}):a)});var k;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(k||(k={}));var x;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(x||(x={}));function J(e,t){let{target:o,replace:n,state:i,preventScrollReset:r,relative:l}=t===void 0?{}:t,f=F(),u=U(),a=E(e,{relative:l});return c.useCallback(h=>{if(D(h,o)){h.preventDefault();let p=n!==void 0?n:b(u)===b(a);f(e,{replace:p,state:i,preventScrollReset:r,relative:l})}},[u,f,a,n,i,o,e,r,l])}export{Z as B,q as L,$ as N};
