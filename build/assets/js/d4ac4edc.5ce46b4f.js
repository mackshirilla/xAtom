"use strict";(self.webpackChunkxatom_document=self.webpackChunkxatom_document||[]).push([[3814],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9251:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"Configuration",id:"Configuration",title:"Configuration",description:"The xAtom configuration file \u2699\ufe0f. Your steadfast ally in the realm of web app crafting. Configure your Webflow project for real-time development changes, set the local serving port, and fine-tune vital settings for your site.",source:"@site/docs/Configuration.mdx",sourceDirName:".",slug:"/Configuration",permalink:"/docs/Configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Configuration.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/Installation"},next:{title:"Overview",permalink:"/docs/reference/Overview"}},s={},p=[{value:"Exploring xAtom Configuration Essentials",id:"exploring-xatom-configuration-essentials",level:2}],u={toc:p},c="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The xAtom configuration file \u2699\ufe0f. Your steadfast ally in the realm of web app crafting. Configure your Webflow project for real-time development changes, set the local serving port, and fine-tune vital settings for your site."),(0,a.kt)("p",null,"Assuming you've just set up your new xAtom project, your ",(0,a.kt)("inlineCode",{parentName:"p"},"xatom.json")," could resemble the following"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="xatom.json"',title:'"xatom.json"'},'{\n  "webflowSubdomain": "YOUR_WEBFLOW_SUBDOMAIN",\n  "port": 3020,\n  "source": "./src/app.ts",\n  "dist": "./dist",\n  "scriptList": ["app.js"],\n  "scriptAttribute": "xa-script"\n}\n')),(0,a.kt)("h2",{id:"exploring-xatom-configuration-essentials"},"Exploring xAtom Configuration Essentials"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"webflowSubdomain"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"YOUR_WEBFLOW_SUBDOMAIN"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicate your Webflow staging sub-domain. For instance, if your Webflow staging domain is ",(0,a.kt)("inlineCode",{parentName:"td"},"xatom-app.webflow.io")," set ",(0,a.kt)("inlineCode",{parentName:"td"},"xatom-app")," as the value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"port"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"3020"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose your preferred local development serving port. xAtom will initiate a development server on this port to preview your Webflow site and your business logic. For instance, if you set it to ",(0,a.kt)("inlineCode",{parentName:"td"},"3020"),", you can access it for testing at ",(0,a.kt)("inlineCode",{parentName:"td"},"http://localhost:3020"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"./src/app.ts"),(0,a.kt)("td",{parentName:"tr",align:null},"This is your web application's business logic entry point.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dist"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"./dist"),(0,a.kt)("td",{parentName:"tr",align:null},"This is where your web application's production-ready code will be generated and stored.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scriptList"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},'["app.js"]'),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the JavaScript file to include on each page during development with xAtom. xAtom ensures seamless testing and development by injecting your custom code from the ",(0,a.kt)("inlineCode",{parentName:"td"},"dist")," folder. The default setting is ",(0,a.kt)("inlineCode",{parentName:"td"},'["app.js"]'),", matching the source ",(0,a.kt)("inlineCode",{parentName:"td"},"./src/app.ts"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scriptAttribute"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"xa-script"),(0,a.kt)("td",{parentName:"tr",align:null},"You might want to exclude or block specific JavaScript files from your published Webflow pages to prevent conflicts with your local JavaScript custom code. Your site already includes xAtom-deployed scripts, such as ",(0,a.kt)("inlineCode",{parentName:"td"},'<script xa-script="true" src="https://mysite.com/js/app.js"><\/script>'),". By adding an attribute to this script on the published Webflow site, you can instruct xAtom to prevent the deployed script from executing, ensuring that only your local version runs. To remove scripts from development pages, you can add an attribute like ",(0,a.kt)("inlineCode",{parentName:"td"},'xa-script="true"')," to your script tag.")))))}d.isMDXComponent=!0}}]);