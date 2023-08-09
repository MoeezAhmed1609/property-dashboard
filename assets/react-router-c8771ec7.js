import{r as a}from"./react-1f0f9d5b.js";import{i as d,g as M,r as O,j as R,A as D,p as j,s as T,m as z,a as _}from"./@remix-run-3a320cb3.js";/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}const U=a.createContext(null),V=a.createContext(null),E=a.createContext(null),b=a.createContext(null),g=a.createContext({outlet:null,matches:[],isDataRoute:!1}),J=a.createContext(null);function ae(e,t){let{relative:r}=t===void 0?{}:t;y()||d(!1);let{basename:n,navigator:l}=a.useContext(E),{hash:o,pathname:s,search:u}=q(e,{relative:r}),i=s;return n!=="/"&&(i=s==="/"?n:R([n,s])),l.createHref({pathname:i,search:u,hash:o})}function y(){return a.useContext(b)!=null}function I(){return y()||d(!1),a.useContext(b).location}function F(e){a.useContext(E).static||a.useLayoutEffect(e)}function oe(){let{isDataRoute:e}=a.useContext(g);return e?ee():W()}function W(){y()||d(!1);let e=a.useContext(U),{basename:t,navigator:r}=a.useContext(E),{matches:n}=a.useContext(g),{pathname:l}=I(),o=JSON.stringify(M(n).map(i=>i.pathnameBase)),s=a.useRef(!1);return F(()=>{s.current=!0}),a.useCallback(function(i,c){if(c===void 0&&(c={}),!s.current)return;if(typeof i=="number"){r.go(i);return}let p=O(i,JSON.parse(o),l,c.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:R([t,p.pathname])),(c.replace?r.replace:r.push)(p,c.state,c)},[t,r,o,l,e])}function le(){let{matches:e}=a.useContext(g),t=e[e.length-1];return t?t.params:{}}function q(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=a.useContext(g),{pathname:l}=I(),o=JSON.stringify(M(n).map(s=>s.pathnameBase));return a.useMemo(()=>O(e,JSON.parse(o),l,r==="path"),[e,o,l,r])}function G(e,t){return K(e,t)}function K(e,t,r){y()||d(!1);let{navigator:n}=a.useContext(E),{matches:l}=a.useContext(g),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let i=I(),c;if(t){var p;let f=typeof t=="string"?j(t):t;u==="/"||(p=f.pathname)!=null&&p.startsWith(u)||d(!1),c=f}else c=i;let v=c.pathname||"/",C=u==="/"?v:v.slice(u.length)||"/",m=z(e,{pathname:C}),h=$(m&&m.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:R([u,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:R([u,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,r);return t&&h?a.createElement(b.Provider,{value:{location:P({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:D.Pop}},h):h}function Q(){let e=H(),t=_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:l},r):null,o)}const X=a.createElement(Q,null);class Y extends a.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?a.createElement(g.Provider,{value:this.props.routeContext},a.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z(e){let{routeContext:t,match:r,children:n}=e,l=a.useContext(U);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(g.Provider,{value:t},n)}function $(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var l;if((l=r)!=null&&l.errors)e=r.matches;else return null}let o=e,s=(n=r)==null?void 0:n.errors;if(s!=null){let u=o.findIndex(i=>i.route.id&&(s==null?void 0:s[i.route.id]));u>=0||d(!1),o=o.slice(0,Math.min(o.length,u+1))}return o.reduceRight((u,i,c)=>{let p=i.route.id?s==null?void 0:s[i.route.id]:null,v=null;r&&(v=i.route.errorElement||X);let C=t.concat(o.slice(0,c+1)),m=()=>{let h;return p?h=v:i.route.Component?h=a.createElement(i.route.Component,null):i.route.element?h=i.route.element:h=u,a.createElement(Z,{match:i,routeContext:{outlet:u,matches:C,isDataRoute:r!=null},children:h})};return r&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?a.createElement(Y,{location:r.location,revalidation:r.revalidation,component:v,error:p,children:m(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):m()},null)}var N;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(N||(N={}));var x;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(x||(x={}));function w(e){let t=a.useContext(U);return t||d(!1),t}function S(e){let t=a.useContext(V);return t||d(!1),t}function A(e){let t=a.useContext(g);return t||d(!1),t}function k(e){let t=A(),r=t.matches[t.matches.length-1];return r.route.id||d(!1),r.route.id}function H(){var e;let t=a.useContext(J),r=S(x.UseRouteError),n=k(x.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function ee(){let{router:e}=w(N.UseNavigateStable),t=k(x.UseNavigateStable),r=a.useRef(!1);return F(()=>{r.current=!0}),a.useCallback(function(l,o){o===void 0&&(o={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,P({fromRouteId:t},o)))},[e,t])}function te(e){d(!1)}function ie(e){let{basename:t="/",children:r=null,location:n,navigationType:l=D.Pop,navigator:o,static:s=!1}=e;y()&&d(!1);let u=t.replace(/^\/*/,"/"),i=a.useMemo(()=>({basename:u,navigator:o,static:s}),[u,o,s]);typeof n=="string"&&(n=j(n));let{pathname:c="/",search:p="",hash:v="",state:C=null,key:m="default"}=n,h=a.useMemo(()=>{let f=T(c,u);return f==null?null:{location:{pathname:f,search:p,hash:v,state:C,key:m},navigationType:l}},[u,c,p,v,C,m,l]);return h==null?null:a.createElement(E.Provider,{value:i},a.createElement(b.Provider,{children:r,value:h}))}function se(e){let{children:t,location:r}=e;return G(B(t),r)}var L;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(L||(L={}));new Promise(()=>{});function B(e,t){t===void 0&&(t=[]);let r=[];return a.Children.forEach(e,(n,l)=>{if(!a.isValidElement(n))return;let o=[...t,l];if(n.type===a.Fragment){r.push.apply(r,B(n.props.children,o));return}n.type!==te&&d(!1),!n.props.index||!n.props.children||d(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=B(n.props.children,o)),r.push(s)}),r}export{V as D,E as N,ie as R,oe as a,I as b,q as c,le as d,se as e,te as f,ae as u};
