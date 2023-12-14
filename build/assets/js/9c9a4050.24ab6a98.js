"use strict";(self.webpackChunkxatom_document=self.webpackChunkxatom_document||[]).push([[8060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const o={},r=void 0,l={unversionedId:"reference/components/WFInvisibleForm",id:"reference/components/WFInvisibleForm",title:"WFInvisibleForm",description:"The WFInvisibleForm class, part of the xAtom framework, is a versatile component that empowers you to create form requests to Webflow without the need for visible form elements in your webflow page. This functionality extends the boundaries of traditional form handling, providing you with the freedom to design intricate form interactions and execute custom logic. WFInvisibleForm enables you to submit multiple forms or aggregate data from various forms into a single submission, all while maintaining complete control over the form submission process.",source:"@site/docs/reference/components/WFInvisibleForm.mdx",sourceDirName:"reference/components",slug:"/reference/components/WFInvisibleForm",permalink:"/docs/reference/components/WFInvisibleForm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/components/WFInvisibleForm.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WFFormComponent",permalink:"/docs/reference/components/WFFormComponent"},next:{title:"WFRoute",permalink:"/docs/reference/routing/WFRoute"}},s={},m=[{value:"Key Advantages of WFInvisibleForm",id:"key-advantages-of-wfinvisibleform",level:4},{value:"Getting Started",id:"getting-started",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>setFormName(formTitle)</code>",id:"setformnameformtitle",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Parameters",id:"set-form-name-parameter",level:4},{value:"<code>getFormName()</code>",id:"getformname",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"<code>setFormData(data)</code>",id:"setformdatadata",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Parameters",id:"set-form-data-parameter",level:4},{value:"<code>getFormData()</code>",id:"getformdata",level:3},{value:"Syntax",id:"syntax-3",level:4},{value:"<code>submitForm()</code>",id:"submitform",level:3},{value:"Syntax",id:"syntax-4",level:4},{value:"<code>isLoading()</code>",id:"isloading",level:3},{value:"Syntax",id:"syntax-5",level:4},{value:"<code>onLoadingChange(fn)</code>",id:"onloadingchangefn",level:3},{value:"Syntax",id:"syntax-6",level:4},{value:"Parameters",id:"on-loading-parameter",level:4},{value:"<code>onSuccess(fn)</code>",id:"onsuccessfn",level:3},{value:"Syntax",id:"syntax-7",level:4},{value:"Parameters",id:"on-success-parameter",level:4},{value:"<code>onError(fn)</code>",id:"onerrorfn",level:3},{value:"Syntax",id:"syntax-8",level:4},{value:"Parameters",id:"on-error-parameter",level:4}],u={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WFInvisibleForm")," class, part of the xAtom framework, is a versatile component that empowers you to create form requests to Webflow without the need for visible form elements in your webflow page. This functionality extends the boundaries of traditional form handling, providing you with the freedom to design intricate form interactions and execute custom logic. WFInvisibleForm enables you to submit multiple forms or aggregate data from various forms into a single submission, all while maintaining complete control over the form submission process."),(0,a.kt)("h4",{id:"key-advantages-of-wfinvisibleform"},"Key Advantages of WFInvisibleForm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Flexible Form Handling"),": Escape the confines of Webflow's form elements, granting you the flexibility to craft sophisticated form interactions tailored to your project's requirements.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Combine Multiple Forms"),": WFInvisibleForm empowers you to amalgamate data from multiple forms into a unified submission, streamlining the data collection process and enhancing efficiency.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Full Control"),": With WFInvisibleForm, you wield absolute authority over the form submission process. Implement custom logic, validation procedures, and error handling tailored to your application's unique needs."))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Initialization"),": To commence your journey with the WFInvisibleForm class, adhere to the following steps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'import { WFInvisibleForm } from "@xatom/core";\n\n// Initialize a new instance of WFInvisibleForm with form name\nconst invisibleForm = new WFInvisibleForm("My Form Name");\n\n// Define your form data as an object\nconst formData = {\n  fullname: "John Doe",\n  email: "john@doe.com",\n};\n\n// Set form data\ninvisibleForm.setFormData(formData);\n\n// Listen for successful form submissions\ninvisibleForm.onSuccess(() => {\n  console.log("Form submission is successful");\n});\n\n// Listen for failed form submissions\ninvisibleForm.onError(() => {\n  console.log("Form submission has encountered an error");\n});\n\n// Submit the form\ninvisibleForm.submitForm();\n')),(0,a.kt)("p",null,"In this example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We create a fresh instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"WFInvisibleForm"),' and assign it a meaningful name ("My Form Name").')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Form data is defined as an object, allowing you to structure the necessary data for the form request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"setFormData")," method is employed to set the form data within the invisible form.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Event listeners for both successful and failed form submissions are established using the ",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," methods, respectively.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"submitForm")," method is invoked to initiate the form submission process."))),(0,a.kt)("p",null,"With these foundational steps, you embark on a journey of leveraging the capabilities of the WFInvisibleForm class to create seamless and customized form submissions in your web application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new WFInvisibleForm(formTitle:string);\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"setformnameformtitle"},(0,a.kt)("inlineCode",{parentName:"h3"},"setFormName(formTitle)")),(0,a.kt)("p",null,"Use this method to set the form name, which will be visible on Webflow's form submission email and form section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a new instance of WFInvisibleForm\nconst invisibleForm = new WFInvisibleForm<{\n  fullname: string;\n  email: string;\n}>();\n\n//highlight-start\n// Set the form name\ninvisibleForm.setFormName("Newsletter Form");\n//highlight-end\n')),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"setFormName(formTitle: string): void\n")),(0,a.kt)("h4",{id:"set-form-name-parameter"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"formTitle")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The name to assign to the form.")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getformname"},(0,a.kt)("inlineCode",{parentName:"h3"},"getFormName()")),(0,a.kt)("p",null,"This method allows you to retrieve the form name, which is visible on Webflow's form submission email and form section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a new instance of WFInvisibleForm\nconst invisibleForm = new WFInvisibleForm<{\n  fullname: string;\n  email: string;\n}>();\n\n// Set the form name\ninvisibleForm.setFormName("Newsletter Form");\n\n//highlight-start\n// Get the form name\nconst formName = invisibleForm.getFormName();\n//highlight-end\nconsole.log(formName); // Newsletter Form\n')),(0,a.kt)("h4",{id:"syntax-1"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getFormName(): string\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setformdatadata"},(0,a.kt)("inlineCode",{parentName:"h3"},"setFormData(data)")),(0,a.kt)("p",null,"Use this method to set the form data that will be included in the form submission to Webflow. Please note that file uploads will be submitted only if your Webflow hosting plan allows it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a new instance of WFInvisibleForm\nconst invisibleForm = new WFInvisibleForm<{\n  fullname: string;\n  email: string;\n}>("Newsletter Form");\n\n//highlight-start\n// Set the form data\ninvisibleForm.setFormData({\n  fullname: "John Doe",\n  email: "john@doe.com",\n});\n//highlight-end\n')),(0,a.kt)("h4",{id:"syntax-2"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"setFormData(formData: { [key: string]: string | File | File[] }): void\n")),(0,a.kt)("h4",{id:"set-form-data-parameter"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"formData")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"{","[key:string]",":string ","|"," File ","|"," File[]}")),(0,a.kt)("td",{parentName:"tr",align:null},"An object containing form data to be submitted.")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getformdata"},(0,a.kt)("inlineCode",{parentName:"h3"},"getFormData()")),(0,a.kt)("p",null,"This method allows you to retrieve the form data that will be included in the form submission to Webflow. It provides access to the data visible on Webflow's form submission email and form section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a new instance of WFInvisibleForm\nconst invisibleForm = new WFInvisibleForm<{\n  fullname: string;\n  email: string;\n}>("Newsletter Form");\n\n// Set the form data\ninvisibleForm.setFormData({\n  fullname: "John Doe",\n  email: "john@doe.com",\n});\n\n//highlight-start\n// Get form data\nconst formData = invisibleForm.getFormData();\n//highlight-end\nconsole.log(formData); // { fullname: "John Doe", email: "john@doe.com" }\n')),(0,a.kt)("h4",{id:"syntax-3"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getFormData(): { [key: string]: string | File | File[] }\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"submitform"},(0,a.kt)("inlineCode",{parentName:"h3"},"submitForm()")),(0,a.kt)("p",null,"Use this method to submit the form request to Webflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a new instance of WFInvisibleForm\nconst invisibleForm = new WFInvisibleForm<{\n  fullname: string;\n  email: string;\n}>("Newsletter Form");\n\n// Initialize a submit button using its CSS selector\nconst submitBtn = new WFComponent(".submit-btn");\n\n// Set the form data\ninvisibleForm.setFormData({\n  fullname: "John Doe",\n  email: "john@doe.com",\n});\n\n// Listen for a click event on the submit button\nsubmitBtn.on("click", () => {\n  // Submit the form when the button is clicked\n  //highlight-start\n  invisibleForm.submitForm();\n  //highlight-end\n});\n')),(0,a.kt)("h4",{id:"syntax-4"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"submitForm(): void\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isloading"},(0,a.kt)("inlineCode",{parentName:"h3"},"isLoading()")),(0,a.kt)("p",null,"This method allows you to check if the form request is still processing or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a new instance of WFInvisibleForm\nconst invisibleForm = new WFInvisibleForm<{\n  fullname: string;\n  email: string;\n}>("Newsletter Form");\n\n// Initialize a submit button using its CSS selector\nconst submitBtn = new WFComponent(".submit-btn");\n\n// Set the form data\ninvisibleForm.setFormData({\n  fullname: "John Doe",\n  email: "john@doe.com",\n});\n\n// Listen for a click event on the submit button\nsubmitBtn.on("click", () => {\n  //highlight-start\n  // Check if the form is currently loading (submitting)\n  const isLoading = invisibleForm.isLoading();\n  //highlight-end\n  if (isLoading) {\n    // Prevent form submission if the form is already submitting\n    return;\n  }\n\n  // Submit the form when the button is clicked\n  invisibleForm.submitForm();\n});\n')),(0,a.kt)("h4",{id:"syntax-5"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"isLoading(): boolean\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onloadingchangefn"},(0,a.kt)("inlineCode",{parentName:"h3"},"onLoadingChange(fn)")),(0,a.kt)("p",null,"Use this method to listen to changes in the form's loading status by providing a callback function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a new instance of WFInvisibleForm\nconst invisibleForm = new WFInvisibleForm<{\n  fullname: string;\n  email: string;\n}>("Newsletter Form");\n\n// Initialize a submit button using its CSS selector\nconst submitBtn = new WFComponent(".submit-btn");\nconst loadingSpinner = new WFComponent(".loading-spinner");\n\n// Set the form data\ninvisibleForm.setFormData({\n  fullname: "John Doe",\n  email: "john@doe.com",\n});\n\n//highlight-start\n// Listen for changes in the loading status\ninvisibleForm.onLoadingChange((status) => {\n  if (status) {\n    // If the form is loading (submitting), show the loading spinner\n    loadingSpinner.addCssClass("show");\n  } else {\n    // If the form is not loading, hide the loading spinner\n    loadingSpinner.removeCssClass("show");\n  }\n});\n//highlight-end\n\n// Listen for a click event on the submit button\nsubmitBtn.on("click", () => {\n  // Check if the form is currently loading (submitting)\n  const isLoading = invisibleForm.isLoading();\n  if (isLoading) {\n    // Prevent form submission if the form is already submitting\n    return;\n  }\n\n  // Submit the form when the button is clicked\n  invisibleForm.submitForm();\n});\n')),(0,a.kt)("h4",{id:"syntax-6"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"onLoadingChange(fn: (status: boolean) => void): void\n")),(0,a.kt)("h4",{id:"on-loading-parameter"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fn")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function")),(0,a.kt)("td",{parentName:"tr",align:null},"A callback function that receives the loading status as a boolean parameter.")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onsuccessfn"},(0,a.kt)("inlineCode",{parentName:"h3"},"onSuccess(fn)")),(0,a.kt)("p",null,"This method allows you to listen for successful form submissions by providing a callback function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a new instance of WFInvisibleForm\nconst invisibleForm = new WFInvisibleForm<{\n  fullname: string;\n  email: string;\n}>("Newsletter Form");\n\n// Initialize a submit button using its CSS selector\nconst submitBtn = new WFComponent(".submit-btn");\nconst successComponent = new WFComponent(".success-message");\n\n// Set the form data\ninvisibleForm.setFormData({\n  fullname: "John Doe",\n  email: "john@doe.com",\n});\n\n//highlight-start\n// Listen for a successful form submission\ninvisibleForm.onSuccess(() => {\n  // When the form submission is successful, show the success message component\n  successComponent.addCssClass("show");\n});\n//highlight-end\n\n// Submit the form\ninvisibleForm.submitForm();\n')),(0,a.kt)("h4",{id:"syntax-7"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"onSuccess(fn: () => void): void\n")),(0,a.kt)("h4",{id:"on-success-parameter"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fn")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function")),(0,a.kt)("td",{parentName:"tr",align:null},"A callback function to be executed when the form submission is successful.")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onerrorfn"},(0,a.kt)("inlineCode",{parentName:"h3"},"onError(fn)")),(0,a.kt)("p",null,"This method allows you to listen for failed form submissions by providing a callback function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a new instance of WFInvisibleForm\nconst invisibleForm = new WFInvisibleForm<{\n  fullname: string;\n  email: string;\n}>("Newsletter Form");\n\n// Initialize a submit button using its CSS selector\nconst submitBtn = new WFComponent(".submit-btn");\nconst errorComponent = new WFComponent(".error-message");\n\n// Set the form data\ninvisibleForm.setFormData({\n  fullname: "John Doe",\n  email: "john@doe.com",\n});\n\n//highlight-start\n// Listen for a failed form submission\ninvisibleForm.onError(() => {\n  // When the form submission fails, show the error message component\n  errorComponent.addCssClass("show");\n});\n//highlight-end\n\n// Submit the form\ninvisibleForm.submitForm();\n')),(0,a.kt)("h4",{id:"syntax-8"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"onError(fn: () => void): void\n")),(0,a.kt)("h4",{id:"on-error-parameter"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fn")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function")),(0,a.kt)("td",{parentName:"tr",align:null},"A callback function to be executed when the form submission encounters an error.")))),(0,a.kt)("p",null,"These methods provide comprehensive control over the form submission process, enabling you to customize form data, monitor loading status, and respond to both successful and failed form submissions."))}c.isMDXComponent=!0}}]);