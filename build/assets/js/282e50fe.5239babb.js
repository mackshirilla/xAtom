"use strict";(self.webpackChunkxatom_document=self.webpackChunkxatom_document||[]).push([[7134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||l;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"reference/auth/WFAuthMiddleware",id:"reference/auth/WFAuthMiddleware",title:"WFAuthMiddleware",description:"The WFAuthMiddleware class is like a trusty shield for your web application, packed with security features to keep it safe and sound:",source:"@site/docs/reference/auth/WFAuthMiddleware.mdx",sourceDirName:"reference/auth",slug:"/reference/auth/WFAuthMiddleware",permalink:"/docs/reference/auth/WFAuthMiddleware",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/auth/WFAuthMiddleware.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WFAuth",permalink:"/docs/reference/auth/WFAuth"},next:{title:"onReady",permalink:"/docs/reference/utils/onReady"}},s={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Syntax",id:"syntax",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>allowTo(role)</code>",id:"allowtorole",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Parameters",id:"allow-parameters",level:4},{value:"<code>disallowedTo(role)</code>",id:"disallowedtorole",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Parameters",id:"disallow-parameters",level:4},{value:"<code>getAuth()</code>",id:"getauth",level:3},{value:"Syntax",id:"syntax-3",level:4}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuthMiddleware")," class is like a trusty shield for your web application, packed with security features to keep it safe and sound:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Safeguard"),": Protect specific sections of your business logic by effortlessly adding middleware. \ud83d\udee1\ufe0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Out-of-the-box Protection"),": Ensure security for your ",(0,r.kt)("inlineCode",{parentName:"li"},"WFRoute")," instances. \ud83d\udea7"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexibility"),": Customize and extend middleware to meet your unique requirements. \ud83e\udde9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Role-Based Access Control"),": Manage access control using role information stored in the ",(0,r.kt)("inlineCode",{parentName:"li"},"WFAuth")," instance. \ud83d\udc64")),(0,r.kt)("p",null,"Empower your web application's security with the versatile ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuthMiddleware")," middleware. \ud83d\udd10\ud83d\udcaa"),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialization"),": To kickstart your journey with the ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuthMiddleware")," class, let's follow these steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'import { WFAuth, WFAuthMiddleware, WFRoute } from "@xatom/core";\n\n// Initialize the WFAuth instance with user data, roles, and configuration\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Set the default role after initialization\nuserAuth.setRole("USER");\n\n// Set user information\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Create a userMiddleware instance with the WFAuth instance\nconst userMiddleware = new WFAuthMiddleware(userAuth);\n\n// Define a WFRoute that allows only non-logged-in users to access the sign-up page\nnew WFRoute("/sign-up")\n  .withMiddleware(userMiddleware, "GUEST", "allow", {\n    onError: () => {\n      // If the user\'s role is not guest, navigate to the dashboard\n      window.location = "/dashboard";\n    },\n  })\n  .execute(() => {\n    // Execute your logic for /sign-up\n  });\n')),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"WFAuthMiddleware(auth:WFAuth);\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuthMiddleware")," class offers a useful array of properties and methods to enhance the middleware functionality of your web application:"),(0,r.kt)("h3",{id:"allowtorole"},(0,r.kt)("inlineCode",{parentName:"h3"},"allowTo(role)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"allowTo")," method allows you to validate if the current user role matches the specified role."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'const userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER" | "ADMIN",\n  {\n    token: string;\n  }\n>();\n\n// Set the default role after initialization\nuserAuth.setRole("USER");\n\n// Set user information\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Create a userMiddleware instance with the WFAuth instance\nconst userMiddleware = new WFAuthMiddleware(userAuth);\n\nconst isAllowToGuest = userMiddleware.allowTo("GUEST");\n\nconsole.log(isAllowToGuest); // false\n\nconst isAllowToUser = userMiddleware.allowTo("USER");\n\nconsole.log(isAllowToUser); // true\n\nconst isAllowToAdmin = userMiddleware.allowTo("ADMIN");\n\nconsole.log(isAllowToAdmin); // false\n')),(0,r.kt)("h4",{id:"syntax-1"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"allowTo(role: R): boolean\n")),(0,r.kt)("h4",{id:"allow-parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WFUserDefaultRole")),(0,r.kt)("td",{parentName:"tr",align:null},"The role to check against")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disallowedtorole"},(0,r.kt)("inlineCode",{parentName:"h3"},"disallowedTo(role)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"disallowedTo")," method allows you to validate if the current user role does not match the specified role."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'const userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER" | "ADMIN",\n  {\n    token: string;\n  }\n>();\n\n// Set the default role after initialization\nuserAuth.setRole("USER");\n\n// Set user information\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Create a userMiddleware instance with the WFAuth instance\nconst userMiddleware = new WFAuthMiddleware(userAuth);\n\nconst isDisallowToGuest = userMiddleware.disallowedTo("GUEST");\n\nconsole.log(isDisallowToGuest); // true\n\nconst isDisallowToUser = userMiddleware.disallowedTo("USER");\n\nconsole.log(isDisallowToUser); // false\n\nconst isDisallowToAdmin = userMiddleware.disallowedTo("ADMIN");\n\nconsole.log(isDisallowToAdmin); // true\n')),(0,r.kt)("h4",{id:"syntax-2"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"disallowedTo(role: R): boolean\n")),(0,r.kt)("h4",{id:"disallow-parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WFUserDefaultRole")),(0,r.kt)("td",{parentName:"tr",align:null},"The role to check against")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getauth"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAuth()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getAuth")," method returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuth")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a WFAuth instance\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER" | "ADMIN",\n  {\n    token: string;\n  }\n>();\n\n// Set the default role after initialization\nuserAuth.setRole("USER");\n\n// Set user information\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Create a userMiddleware instance with the WFAuth instance\nconst userMiddleware = new WFAuthMiddleware(userAuth);\n\n// Retrieve the WFAuth instance using the `getAuth` method\nconst userMiddlewareAuth = userMiddleware.getAuth();\n\nconsole.log(userMiddlewareAuth); // WFAuth instance\n')),(0,r.kt)("h4",{id:"syntax-3"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getAuth(): WFAuth\n")))}p.isMDXComponent=!0}}]);