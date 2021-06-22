(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[647],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7023:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={},l={unversionedId:"libraries/nodejs/getting_started",id:"libraries/nodejs/getting_started",isDocsHomePage:!1,title:"Getting Started with Node.js",description:"The IOTA Wallet Node.js binding is published on npmjs.com.",source:"@site/docs/libraries/nodejs/getting_started.md",sourceDirName:"libraries/nodejs",slug:"/libraries/nodejs/getting_started",permalink:"/docs/libraries/nodejs/getting_started",editUrl:"https://github.com/iotaledger/wallet.rs/tree/main/docs/docs/libraries/nodejs/getting_started.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IOTA Wallet Node.js Library",permalink:"/docs/libraries/nodejs/README"},next:{title:"Examples",permalink:"/docs/libraries/nodejs/examples"}},c=[{value:"Security",id:"security",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/wallet"},"IOTA Wallet Node.js binding")," is published on ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs.com"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can find a guide for exchanges and the most common use cases in the ",(0,i.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/exchange_guide.html"},"Chrysalis documentation"),", which is based on ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js"),". "))),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In a production setup, do not store passwords in the host's environment variables or in the source code.  See our ",(0,i.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/backup_security.html"},"backup and security recommendations")," for production setups."))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The package is published in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/wallet"},"npmjs"),". We also use ",(0,i.kt)("em",{parentName:"p"},"dotenv")," for password management in the examples."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To install with NPM, you can run the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm install @iota/wallet dotenv\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To install with yarn, you can run the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn install @iota/wallet dotenv\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"You can find more information on using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," library's node.js binding in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/libraries/nodejs/examples"},"examples section"),"."))}d.isMDXComponent=!0}}]);