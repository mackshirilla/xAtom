"use strict";(self.webpackChunkxatom_document=self.webpackChunkxatom_document||[]).push([[8073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"reference/routing/WFRoute",id:"reference/routing/WFRoute",title:"WFRoute",description:"The WFRoute class in the xAtom Framework \ud83d\ude80 empowers your web app with URL route-based logic execution. It's like having a GPS for your app's navigation! \ud83d\uddfa\ufe0f",source:"@site/guide/reference/routing/WFRoute.mdx",sourceDirName:"reference/routing",slug:"/reference/routing/WFRoute",permalink:"/docs/guide/reference/routing/WFRoute",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WFInvisibleForm",permalink:"/docs/guide/reference/components/WFInvisibleForm"},next:{title:"WFAuth",permalink:"/docs/guide/reference/auth/WFAuth"}},u={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Basic Routing",id:"basic-routing",level:3},{value:"Routes with Middleware",id:"routes-with-middleware",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>execute(fn)</code>",id:"executefn",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Parameters",id:"execute-parameter",level:4},{value:"Callback Function Parameters",id:"execute-fn-parameter",level:4},{value:"<code>withMiddleware()</code>",id:"withmiddleware",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Parameters",id:"with-middleware",level:4}],s={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WFRoute")," class in the xAtom Framework \ud83d\ude80 empowers your web app with URL route-based logic execution. It's like having a GPS for your app's navigation! \ud83d\uddfa\ufe0f"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"WFRoute"),", you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2728 Create dynamic routes with ease."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd17 Group routes for organized logic."),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfc3 Run specific business logic based on the current route."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd10 Make Webflow pages protected or public at the client level."),(0,r.kt)("li",{parentName:"ul"},"\ud83e\udde9 Utilize variables within your routes."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcdd Access and work with page parameters effortlessly.")),(0,r.kt)("p",null,"Navigate through the power of URLs and let ",(0,r.kt)("inlineCode",{parentName:"p"},"WFRoute")," simplify your app's routing logic! \ud83d\udca1"),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialization"),": To embark on your journey with the ",(0,r.kt)("inlineCode",{parentName:"p"},"WFRoute")," class, you need to initialize it with a route string. Below is a step-by-step guide to kickstart your route management:"),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"pro-tip"},"Pro Tip"),(0,r.kt)("p",{parentName:"blockquote"},"It's considered best practice to house your route logic within the ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/routes")," directory.")),(0,r.kt)("h3",{id:"basic-routing"},"Basic Routing"),(0,r.kt)("p",null,"For a basic route, simply create an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"WFRoute")," and specify the route path. Then, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method to define the logic to be executed when the route is accessed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'import { WFRoute } from "@xatom/core";\nimport { settingPage } from "../modules/setting";\n\n// Define a simple route for sign-up page\nnew WFRoute("/sign-up").execute(() => {\n  // Execute your logic for /sign-up\n});\n\n// Create routes with URL parameters, such as the invite page with a token parameter\n// URL: /invite?token=XYZ\nnew WFRoute("/invite").execute((params: { token: string }) => {\n  // Execute your logic for /invite\n  console.log(params.token); // XYZ\n});\n\n// Group your routes using (.*) expressions to manage all routes under /dashboard\nnew WFRoute("/dashboard/(.*)").execute(() => {\n  // Handle child routes\n\n  // Create a route for the profile page\n  new WFRoute("/dashboard/profile").execute(() => {\n    // Define logic for your profile page\n  });\n\n  // Execute logic from an imported function for the /dashboard/settings route\n  new WFRoute("/dashboard/settings").execute(settingPage);\n});\n\n// Utilize variable routes to apply a single business logic to all blog posts\n// Example URL: /blogs/how-get-started\nnew WFRoute("/blogs/:post").execute(\n  (params: { post: string }) => {\n    // Execute logic for your post page\n    console.log(params.post); // how-get-started\n  }\n);\n')),(0,r.kt)("h3",{id:"routes-with-middleware"},"Routes with Middleware"),(0,r.kt)("p",null,"Enhance your route security effortlessly by protecting specific routes or groups of routes with middleware. Simply chain your routes using the ",(0,r.kt)("inlineCode",{parentName:"p"},"withMiddleware")," method. This feature seamlessly integrates with the ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuthMiddleware")," instance. Explore more about ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuthMiddleware")," details ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/reference/auth/WFAuthMiddleware"},"here"),". Fortify your route security with ease! \ud83d\udcaa\ud83d\ude80"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'import { WFRoute } from "@xatom/core";\nimport { userMiddleware } from "../modules/auth/user";\n\n// Define a WFRoute that allows only non-logged-in users to access the sign-up page\nnew WFRoute("/sign-up")\n  .withMiddleware(userMiddleware, "GUEST", "allow", {\n    onError: () => {\n      // If the user\'s role is not guest, navigate to the dashboard\n      window.location = "/dashboard";\n    },\n  })\n  .execute(() => {\n    // Execute your logic for /sign-up\n  });\n\n// Create a WFRoute that permits only logged-in users to access all pages falling under the dashboard\nnew WFRoute("/dashboard/(.*)")\n  .withMiddleware(userMiddleware, "USER", "allow")\n  .execute((params: { token: string }) => {\n    // Handle child routes\n\n    // Logic for the profile page\n    new WFRoute("/dashboard/profile").execute(() => {\n      // Define logic for your profile page\n    });\n\n    // Logic for the message page\n    new WFRoute("/dashboard/messages").execute(() => {\n      // Define logic for your message page\n    });\n  });\n\n// Set up a WFRoute that restricts access to a route to only logged-in users\nnew WFRoute("/my-protected-page")\n  .withMiddleware(userMiddleware, "USER", "allow", {\n    onError: () => {\n      // If the user\'s role is not user (not logged in), navigate to the unauthorized page\n      window.location = "/not-allowed";\n    },\n  })\n  .execute(() => {\n    // Define logic for your protected page\n  });\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"new WFRoute(routePath:string);\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WFRoute")," class provides an extensive array of properties and methods to enhance the security of your web application:"),(0,r.kt)("h3",{id:"executefn"},(0,r.kt)("inlineCode",{parentName:"h3"},"execute(fn)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method allows you to specify a callback function that is executed when a matching route is encountered. This callback function can also access route parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Example 1: Basic route without parameters\nnew WFRoute("/my-page").execute(() => {\n  // Define your page logic here\n});\n\n// Example 2: Route with a parameter (e.g., /my-page/123)\nnew WFRoute("/my-page/:id").execute((params: { id: string }) => {\n  console.log(params.id); // Access route variables (e.g., 123)\n});\n\n// Example 3: Route with a query parameter (e.g., /my-page?id=123)\nnew WFRoute("/my-page").execute((params: { id: string }) => {\n  console.log(params.id); // Access query parameters (e.g., 123)\n});\n')),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"execute(fn: (params: {[key: string]: string}) => void): WFRoute\n")),(0,r.kt)("h4",{id:"execute-parameter"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fn")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function")))),(0,r.kt)("h4",{id:"execute-fn-parameter"},"Callback Function Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"paramse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{[key:string]:string}")),(0,r.kt)("td",{parentName:"tr",align:null},"Route parameter data")))),(0,r.kt)("h3",{id:"withmiddleware"},(0,r.kt)("inlineCode",{parentName:"h3"},"withMiddleware()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"withMiddleware")," method enables you to add middleware to your routes, providing enhanced security and control over route access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Define a WFRoute that allows only non-logged-in users to access the sign-up page\nnew WFRoute("/sign-up")\n  .withMiddleware(userMiddleware, "GUEST", "allow", {\n    onError: () => {\n      // If the user\'s role is not guest, navigate to the dashboard\n      window.location = "/dashboard";\n    },\n  })\n  .execute(() => {\n    // Execute your logic for /sign-up\n  });\n')),(0,r.kt)("h4",{id:"syntax-1"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'withMiddleware(\n  middleware: WFAuthMiddleware,\n  role: string,\n  permission: "allow" | "disallow",\n  config: { onError: () => void }\n): WFRoute\n')),(0,r.kt)("h4",{id:"with-middleware"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"middleware")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WFAuthMiddleware")),(0,r.kt)("td",{parentName:"tr",align:null},"An instance of ",(0,r.kt)("inlineCode",{parentName:"td"},"WFAuthMiddleware"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The role specified when initializing ",(0,r.kt)("inlineCode",{parentName:"td"},"WFAuthMiddleware"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"permission")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"allow"')," or ",(0,r.kt)("inlineCode",{parentName:"td"},'"disallow"')),(0,r.kt)("td",{parentName:"tr",align:null},"The middleware permission (",(0,r.kt)("inlineCode",{parentName:"td"},"allow")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"disallow"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ onError: () => void }")),(0,r.kt)("td",{parentName:"tr",align:null},"Middleware configuration, including an ",(0,r.kt)("inlineCode",{parentName:"td"},"onError")," function to handle errors.")))))}c.isMDXComponent=!0}}]);