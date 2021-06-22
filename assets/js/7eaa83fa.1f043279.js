(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[611],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=s,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9170:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=t(2122),s=t(9756),r=(t(7294),t(3905)),o=["components"],i={},c={unversionedId:"libraries/nodejs/examples",id:"libraries/nodejs/examples",isDocsHomePage:!1,title:"Examples",description:"This section will guide you through several examples using the node.js binding of the Wallet.rs library. You can also find the code for the examples in the /bindings/nodejs/examples folder in the official GitHub repository.",source:"@site/docs/libraries/nodejs/examples.md",sourceDirName:"libraries/nodejs",slug:"/libraries/nodejs/examples",permalink:"/wallet.rs/docs/libraries/nodejs/examples",editUrl:"https://github.com/iotaledger/wallet.rs/tree/main/docs/docs/libraries/nodejs/examples.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started with Node.js",permalink:"/wallet.rs/docs/libraries/nodejs/getting_started"},next:{title:"API Reference",permalink:"/wallet.rs/docs/libraries/nodejs/api_reference"}},l=[{value:"Account Manager and Individual Accounts",id:"account-manager-and-individual-accounts",children:[{value:"Accounts",id:"accounts",children:[]}]},{value:"Generating Address(es)",id:"generating-addresses",children:[]},{value:"Checking Balance",id:"checking-balance",children:[]},{value:"Sending tokens",id:"sending-tokens",children:[{value:"Dust protection",id:"dust-protection",children:[]}]},{value:"Backup a database",id:"backup-a-database",children:[]},{value:"Restore database",id:"restore-database",children:[]},{value:"Listening to events",id:"listening-to-events",children:[]},{value:"Migration",id:"migration",children:[]}],d={toc:l};function u(e){var n=e.components,i=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section will guide you through several examples using the node.js binding of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," library. You can also find the code for the examples in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/bindings/nodejs/examples")," folder in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs/examples"},"official GitHub repository"),"."),(0,r.kt)("p",null,"All the examples in this section expect you to set your custom password  in the ",(0,r.kt)("em",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SH_PASSWORD="here is your super secure password"\n')),(0,r.kt)("h2",{id:"account-manager-and-individual-accounts"},"Account Manager and Individual Accounts"),(0,r.kt)("p",null,"You can initialize (open) a secure storage for individual accounts.  The storage is backed up by ",(0,r.kt)("inlineCode",{parentName:"p"},"Stronghold")," by default, using an AccountManager instance.  "),(0,r.kt)("p",null,"The following example creates a new database and account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"require('dotenv').config()\n\nasync function run() {\n    const { AccountManager, SignerType } = require('@iota/wallet')\n    const manager = new AccountManager({\n        storagePath: './alice-database',\n    })\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n    manager.storeMnemonic(SignerType.Stronghold)\n\n    const account = await manager.createAccount({\n        clientOptions: { node: \"https://api.lb-0.testnet.chrysalis2.com\", localPow: true },\n        alias: 'Alice',\n    })\n\n    console.log('Account created:', account.alias())\n      \n}\n\nrun()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Storage is initialized under the given path (",(0,r.kt)("inlineCode",{parentName:"li"},"./alice-database"),")"),(0,r.kt)("li",{parentName:"ul"},"The password is set based on your password in ",(0,r.kt)("em",{parentName:"li"},".env")," file ( ",(0,r.kt)("em",{parentName:"li"},"manager.setStrongholdPassword(process.env.SH_PASSWORD)")," )"),(0,r.kt)("li",{parentName:"ul"},"When you initialize the new database, a Stronghold mnemonic (seed) is automatically generated and stored by default ( ",(0,r.kt)("em",{parentName:"li"},"manager.storeMnemonic(SignerType.Stronghold)")," )."),(0,r.kt)("li",{parentName:"ul"},"The seed should be set only for the first time. In order to open already initialized database, you can simply use your password.")),(0,r.kt)("p",null,"The storage is encrypted at rest, so you need a strong password and location where to place your storage. "),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We highly recommended that you to store your ",(0,r.kt)("inlineCode",{parentName:"p"},"Stronghold")," password encrypted on rest and separated from ",(0,r.kt)("inlineCode",{parentName:"p"},"Stronghold")," snapshots. "),(0,r.kt)("p",{parentName:"div"},"Deal with the password with utmost care."))),(0,r.kt)("p",null," The storage comprises two things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single file called ",(0,r.kt)("em",{parentName:"li"},"wallet.stronghold")," , which contains ",(0,r.kt)("em",{parentName:"li"},"seed"),".  ",(0,r.kt)("inlineCode",{parentName:"li"},"Stronghold")," will secure the seed and encrypt it at rest. The generated seed (mnemonic) serves as a cryptographic key, which is used to generate all accounts and related addresses."),(0,r.kt)("li",{parentName:"ul"},"Other data used by library that is stored under ",(0,r.kt)("em",{parentName:"li"},"db")," sub-directory.  The includes account information, generated addresses, fetched messages, etc. This data is used to speed up some operations, such as account creation, address generation, etc.")),(0,r.kt)("p",null,"One of the key principles behind ",(0,r.kt)("inlineCode",{parentName:"p"},"Stronghold")," based storage is that no one can extract a seed from the storage. You deal with all accounts purely via an ",(0,r.kt)("em",{parentName:"p"},"AccountManager")," instance and all complexities are hidden under the hood and are dealt with securely."),(0,r.kt)("p",null,"If you also want to store a seed somewhere else, you can use the ",(0,r.kt)("em",{parentName:"p"},"AccountManager.generateMnemonic()")," method. You can use this method to generate a random seed.  You can also use it before the actual account initialization."),(0,r.kt)("p",null,"You can find detailed information about seed generation at ",(0,r.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/dev_guide.html#seed"},"Developer Guide to Chrysalis"),"."),(0,r.kt)("h3",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," library uses a model of individual accounts to separate individual users/clients from each other. It is possible to generate multiple addresses for each account deterministically. "),(0,r.kt)("p",null,"Once the backend storage has been created, individual accounts for individual users can be created by running the ",(0,r.kt)("em",{parentName:"p"},"manager.createAccount()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let account = await manager.createAccount({\n        alias: 'Alice',  // an unique id from your existing user\n        clientOptions: { node: 'http://api.lb-0.testnet.chrysalis2.com', localPow: false }\n    })\n")),(0,r.kt)("p",null,"Each account is related to a specific IOTA network (mainnet / testnet), which is referenced by a node properties such as node url.  In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Chrysalis")," testnet balancer."),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("em",{parentName:"p"},"clientOptions")," , please refer to ",(0,r.kt)("a",{parentName:"p",href:"/wallet.rs/docs/libraries/nodejs/api_reference"},"Wallet NodeJs API Reference"),"."),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"Alias")," should be unique, and it can be any string that you see fit. The ",(0,r.kt)("em",{parentName:"p"},"alias")," is usually used to identify the account later on. Each account is also represented by an ",(0,r.kt)("em",{parentName:"p"},"index")," which is incremented by 1 every time new account is created.\nAny account can be then referred to by its ",(0,r.kt)("em",{parentName:"p"},"index")," , ",(0,r.kt)("em",{parentName:"p"},"alias")," or one of its generated ",(0,r.kt)("em",{parentName:"p"},"addresses")," ."),(0,r.kt)("p",null,"Several API calls can be performed via an ",(0,r.kt)("em",{parentName:"p"},"account")," instance."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is a good practice to sync accounts with the Tangle every time you work with an ",(0,r.kt)("em",{parentName:"p"},"account")," instance.  This way you can ensure that you rely on the latest available information."),(0,r.kt)("p",{parentName:"div"},"You can do this using ",(0,r.kt)("em",{parentName:"p"},"account.sync()"),". ",(0,r.kt)("em",{parentName:"p"},"account.sync()")," is performed automatically on ",(0,r.kt)("em",{parentName:"p"},"send"),", ",(0,r.kt)("em",{parentName:"p"},"retry"),", ",(0,r.kt)("em",{parentName:"p"},"reattach")," and ",(0,r.kt)("em",{parentName:"p"},"promote")," API calls."))),(0,r.kt)("p",null,"Once an account has been created, you can retrieve an instance using the following methods: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet.rs/docs/libraries/nodejs/api_reference#getaccountaccountid"}," ",(0,r.kt)("em",{parentName:"a"},"AccountManager.getAccount(accountId)")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet.rs/docs/libraries/nodejs/api_reference#getaccountbyaliasalias"}," ",(0,r.kt)("em",{parentName:"a"},"AccountManager.getAccountByAlias(alias)")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet.rs/docs/libraries/nodejs/api_reference#getaccounts"}," ",(0,r.kt)("em",{parentName:"a"},"AccountManager.getAccounts()")," ."))),(0,r.kt)("p",null,"The most common methods of ",(0,r.kt)("em",{parentName:"p"},"account")," instance are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"account.alias()")," : returns an alias of the given account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"account.listAddresses()")," : returns list of addresses related to the account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"account.getUnusedAddress()")," : returns a first unused address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"account.generateAddress()")," : generate a new address for the address index incremented by 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"account.balance()")," : returns the balance for the given account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"account.sync()")," : sync the account information with the tangle.")),(0,r.kt)("h2",{id:"generating-addresses"},"Generating Address(es)"),(0,r.kt)("p",null,"Each account can have multiple addresses. Addresses are generated deterministically based on the account and address index. This means that the combination of account and index uniquely identifies the given address."),(0,r.kt)("p",null,"There are two types of addresses, ",(0,r.kt)("em",{parentName:"p"},"internal")," and ",(0,r.kt)("em",{parentName:"p"},"public")," (external), and each set of addresses is independent of each other and has independent ",(0,r.kt)("em",{parentName:"p"},"index")," id."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Public")," addresses are created by ",(0,r.kt)("em",{parentName:"li"},"account.generateAddress()")," and  are indicated as ",(0,r.kt)("em",{parentName:"li"},"internal=false")," (public)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Internal")," addresses are also called ",(0,r.kt)("em",{parentName:"li"},"change")," addresses. ",(0,r.kt)("em",{parentName:"li"},"Internal")," addresses are used to store the excess funds and are indicated as ",(0,r.kt)("em",{parentName:"li"},"internal=false"),".")),(0,r.kt)("p",null,"This approach is also known as a ",(0,r.kt)("em",{parentName:"p"},"BIP32 Hierarchical Deterministic wallet (HD Wallet)"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The IOTA 1.5 (Chrysalis) network supports reusing addresses multiple times."))),(0,r.kt)("p",null,"You can use the following example to generate a new address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"require('dotenv').config()\n\nasync function run() {\n    const { AccountManager } = require('@iota/wallet')\n    const manager = new AccountManager({\n        storagePath: './alice-database'\n    })\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n\n    const account = manager.getAccount('Alice')\n    console.log('Account:', account.alias())\n\n    // Always sync before doing anything with the account\n    const synced = await account.sync()\n    console.log('Syncing...')\n\n    const { address } = account.generateAddress()\n    console.log('New address:', address)\n\n    // You can also get the latest unused address:\n    // const addressObject = account.latestAddress()\n    // console.log(\"Address:\", addressObject.address)\n\n    // Use the Chrysalis Faucet to send testnet tokens to your address:\n    console.log(\"Fill your address with the Faucet: https://faucet.testnet.chrysalis2.com/\")\n}\n\nrun()\n")),(0,r.kt)("h2",{id:"checking-balance"},"Checking Balance"),(0,r.kt)("p",null,"Before we continue further, please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.testnet.chrysalis2.com/"},"IOTA testnet faucet service")," and send to your testnet addresses some tokens."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IOTA Faucet Service",src:t(9442).Z})),(0,r.kt)("p",null,"You can use the following example to generate a new database and account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nrequire('dotenv').config()\n\nasync function run() {\n    const { AccountManager } = require('@iota/wallet')\n    const manager = new AccountManager({\n        storagePath: './alice-database'\n    })\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n\n    const account = manager.getAccount('Alice')\n    \n    console.log('Account:', account.alias())\n    \n    // Always sync before doing anything with the account\n    const synced = await account.sync()\n    console.log('Syncing...')\n\n    console.log('Available balance', account.balance().available)\n}\n\nrun()\n")),(0,r.kt)("p",null,"IOTA is based on ",(0,r.kt)("em",{parentName:"p"},"Unspent Transaction Output")," model. You can find a detailed explanation in the ",(0,r.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/dev_guide.html#unspent-transaction-output-utxo"},"Developer Guide to Chrysalis"),"."),(0,r.kt)("h2",{id:"sending-tokens"},"Sending tokens"),(0,r.kt)("p",null,"You can use the following example to send tokens using an  Account  instance to any desired  address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," require('dotenv').config();\n\nasync function run() {\n    const { AccountManager, RemainderValueStrategy } = require('@iota/wallet')\n    const manager = new AccountManager({\n        storagePath: './alice-database'\n    })\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n\n    const account = manager.getAccount('Alice')\n    \n    console.log('alias', account.alias())\n    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('available balance', account.balance().available)\n    \n    //TODO: Replace with the address of your choice!\n    const addr = 'atoi1qykf7rrdjzhgynfkw6z7360avhaaywf5a4vtyvvk6a06gcv5y7sksu7n5cs'\n    const amount = 10000000\n\n    const node_response = await account.send(\n        addr,\n        amount,\n        {remainderValueStrategy: RemainderValueStrategy.reuseAddress()}\n    ) \n\n    console.log(`Check your message on https://explorer.iota.org/chrysalis/message/${node_response.id}`)\n}\n\nrun()\n")),(0,r.kt)("p",null,"The full function signature is ",(0,r.kt)("inlineCode",{parentName:"p"},"Account.send(address, amount, [options])"),".\nYou can use the default options. However, you can provide additional options, such as ",(0,r.kt)("em",{parentName:"p"},"remainderValueStrategy")," which has the following strategies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"changeAddress()")," : Send the remainder value to an internal address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"reuseAddress()")," : Send the remainder value back to its original address")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Account.send()")," function returns a ",(0,r.kt)("em",{parentName:"p"},"wallet message")," that fully describes the given transaction. You can use the ",(0,r.kt)("em",{parentName:"p"},"messageId")," to check confirmation status. You can retrieve individual messages related to any given account using the ",(0,r.kt)("em",{parentName:"p"},"Account.listMessages()")," function."),(0,r.kt)("h3",{id:"dust-protection"},"Dust protection"),(0,r.kt)("p",null,"The network uses a ",(0,r.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/dev_guide.html#dust-protection"},"dust protection")," protocol to prevent malicious actors from spamming the network while also keeping track of the unspent amount ( ",(0,r.kt)("em",{parentName:"p"},"UTXO")," )."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Micro-transaction below 1Mi of IOTA tokens can be sent to another address if there is already at least 1Mi on that address.\nThat's why we sent 1Mi in the last example to comply with the dust protection."))),(0,r.kt)("p",null,"Dust protection also means you can't leave less than 1Mi on a spent address (leave a dust behind)."),(0,r.kt)("h2",{id:"backup-a-database"},"Backup a database"),(0,r.kt)("p",null,"Due to security practices that are incorporated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stronghold's")," DNA, there's no way to retrieve a seed, as it is encrypted at rest.  Therefore, if you're using the default options,  backing up the seed storage is a very important task. "),(0,r.kt)("p",null,"The following example will guide you in backing up your data in secure files. You can move this file to another app or device, and restore it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"require('dotenv').config();\n\nasync function run() {\n\n    const { AccountManager } = require('@iota/wallet')\n    const manager = new AccountManager({\n        storagePath: './alice-database'\n    })\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n\n    let backup_path = await manager.backup(\"./backup\", process.env.SH_PASSWORD)\n    \n    console.log('Backup path:', backup_path)\n}\n\nrun()\n")),(0,r.kt)("p",null,"Alternatively, you can create a copy of the ",(0,r.kt)("em",{parentName:"p"},"wallet.stronghold")," file and use it as seed backup. This can be achieved by a daily ",(0,r.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/crontab"},(0,r.kt)("em",{parentName:"a"},"cronjob")),", ",(0,r.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/rsync"},(0,r.kt)("em",{parentName:"a"},"rsync"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/scp"},(0,r.kt)("em",{parentName:"a"},"scp"))," with a datetime suffix for example."),(0,r.kt)("h2",{id:"restore-database"},"Restore database"),(0,r.kt)("p",null,"To restore a database via ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet.rs"),", you will need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create new empty database with a password (without mnemonic seed)"),(0,r.kt)("li",{parentName:"ol"},"Import all accounts from the file that has been backed up earlier")),(0,r.kt)("p",null,"The following example restores a secured backup file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"require('dotenv').config();\n\nasync function run() {\n\n    const { AccountManager } = require('@iota/wallet')\n    const manager = new AccountManager({\n        storagePath: './alice-database'\n    })\n\n    // Add the path to the file from example 5-backup.js\n    // for example: ./backup/2021-02-12T01-23-11-iota-wallet-backup-wallet.stronghold\n    let backup_path = \"input your backup file\"\n\n    await manager.importAccounts(backup_path, process.env.SH_PASSWORD)\n    const account = manager.getAccount('Alice')\n    console.log('Account:', account.alias())\n}\n\nrun()\n")),(0,r.kt)("p",null,"Since the backup file is just a copy of the original database it can be also be renamed to ",(0,r.kt)("em",{parentName:"p"},"wallet.stronghold")," and opened in a standard way."),(0,r.kt)("h2",{id:"listening-to-events"},"Listening to events"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," library is able to listen to several supported event. As soon as the event occurs, a provided callback will be triggered."),(0,r.kt)("p",null,"You can use the following example to fetch an existing ",(0,r.kt)("em",{parentName:"p"},"Account")," and listen to transaction events related to that ",(0,r.kt)("em",{parentName:"p"},"Account")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nrequire('dotenv').config()\n\nasync function run() {\n    const { AccountManager, addEventListener } = require('@iota/wallet')\n    const manager = new AccountManager({\n        storagePath: './alice-database'\n    })\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n\n    const account = manager.getAccount('Alice')\n    console.log('Account:', account.alias())\n\n    // Always sync before doing anything with the account\n    const synced = await account.sync()\n    console.log('Syncing...')\n    // let address = account.generateAddress()\n\n    // get latest address\n    let addressObject = account.latestAddress()\n\n    console.log(\"Address:\", addressObject.address)\n\n    // Use the Chrysalis Faucet to send testnet tokens to your address:\n    console.log(\"Fill your address with the Faucet: https://faucet.testnet.chrysalis2.com/\")\n\n\n    const callback = function (err, data) {\n        console.log(\"data:\", data)\n    }\n\n    addEventListener(\"BalanceChange\", callback)\n\n    // Possible Event Types:\n    //\n    // ErrorThrown\n    // BalanceChange\n    // NewTransaction\n    // ConfirmationStateChange\n    // Reattachment\n    // Broadcast\n}\n\nrun()\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"data: {\n  accountId: 'wallet-account://1666fc60fc95534090728a345cc5a861301428f68a237bea2b5ba0c844988566',\n  address: {\n    address: 'atoi1q9c6r2ek5w2yz54en78m8dxwl4qmwd7gmh9u0krm45p8txxyhtfry6apvwj',\n    balance: 20000000,\n    keyIndex: 0,\n    internal: false,\n    outputs: [ [Object], [Object] ]\n  },\n  balance: 20000000\n}\n")),(0,r.kt)("p",null,"You can then use the ",(0,r.kt)("em",{parentName:"p"},"accountId")," to identify the account via ",(0,r.kt)("em",{parentName:"p"},"AccountManager.getAccount(accountId)"),"."),(0,r.kt)("p",null,"Read more about Events in the ",(0,r.kt)("a",{parentName:"p",href:"/wallet.rs/docs/libraries/nodejs/api_reference#addeventlistenerevent-cb"},"API reference"),"."),(0,r.kt)("h2",{id:"migration"},"Migration"),(0,r.kt)("p",null,"You can use the following example to create a new database and account, and migrate funds from the legacy network to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Chrysalis")," network."),(0,r.kt)("p",null,"Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node 8-migration.js\n")),(0,r.kt)("p",null,"Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"require('dotenv').config()\n\n// Address security level\nconst ADDRESS_SECURITY_LEVEL = 2\n// Minimum balance that is required for a migration bundle, because of the dust protection in the new network\nconst MINIMUM_MIGRATION_BALANCE = 1000000\n// This value shouldn't be too high, because then the PoW could take to long to get it confirmed\nconst MAX_INPUTS_PER_BUNDLE = 10\n// Wallet.rs database storage path. Stronghold and database file would be stored in this path.\nconst DB_STORAGE_PATH = './migration-database'\n// Legacy network nodes\nconst LEGACY_NETWORK_NODES = ['https://nodes.iota.org']\n// Legacy permanode\nconst LEGACY_PERMANODE = 'https://chronicle.iota.org/api'\n// Chrysalis node\nconst CHRYSALIS_NODE = 'https://chrysalis-nodes.iota.cafe'\n\nasync function run() {\n  try {\n    const { AccountManager, SignerType, addEventListener } = require('@iota/wallet')\n\n    // We store all bundle hashes here and check later if the bundles got confirmed\n    let migrationBundleHashes = [];\n\n    // Log migration events\n    const callback = function (err, data) {\n      // After a successful broadcast of this bundle, the library will automatically reattach bundle to \n      // speed up the confirmation process. An event with type \"TransactionConfirmed\" (with corresponding bundle hash) \n      // will be emitted as soon as the bundle is confirmed.\n      if (data.event.type === 'TransactionConfirmed') {\n        console.log(\"MigrationProgress:\", data)\n        migrationBundleHashes = migrationBundleHashes.filter(hash => hash !== data.event.data.bundleHash)\n\n        if (migrationBundleHashes.length == 0) {\n          process.exit()\n        }\n\n        console.log(\"Still unconfirmed bundles: \", migrationBundleHashes);\n      }\n    }\n\n    // Attach an event listener to keep track of the migration process\n    addEventListener(\"MigrationProgress\", callback)\n\n    const manager = new AccountManager({\n      storagePath: DB_STORAGE_PATH,\n    })\n\n    // Set Stronghold password\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n\n    // IMPORTANT: SAVE THIS MNEMONIC SECURELY. IF YOU LOSE IT, YOU POTENTIALLY LOSE EVERYTHING.\n    const mnemonic = manager.generateMnemonic()\n\n    console.log(\"IMPORTANT: SAVE THIS MNEMONIC SECURELY. IF YOU LOSE IT, YOU POTENTIALLY LOSE EVERYTHING.\", mnemonic);\n\n    manager.storeMnemonic(SignerType.Stronghold, mnemonic)\n\n    const account = await manager.createAccount({\n      // Node url for the new network\n      clientOptions: { node: CHRYSALIS_NODE, localPow: true, network: \"chrysalis-mainnet\" },\n      alias: 'Migration',\n    })\n\n    console.log('Account created:', account.alias())\n    // Nodes for the legacy network\n    const nodes = LEGACY_NETWORK_NODES\n    const seed = process.env.MIGRATION_SEED\n\n    const migrationData = await manager.getMigrationData(\n      nodes,\n      seed,\n      {\n        // permanode for the legacy network\n        permanode: LEGACY_PERMANODE,\n        securityLevel: ADDRESS_SECURITY_LEVEL,\n        // this is the default and from there it will check addresses for balance until 30 in a row have 0 balance\n        // if not all balance got detected because a higher address index was used it needs to be increased here\n        initialAddressIndex: 0\n      }\n    )\n\n    console.log(migrationData)\n\n    if (migrationData.balance > 0) {\n      let input_batches = getMigrationBundles(migrationData.inputs)\n      // create bundles with the inputs\n      for (batch of input_batches) {\n        try {\n          const bundle = await manager.createMigrationBundle(seed, batch.inputs.map(input => input.index), {\n            logFileName: 'iota-migration.log',\n            // if the input is a spent address we do a bundle mining process which takes 10 minutes to reduce the amount \n            // of the parts of the private key which get revealed\n            mine: batch.inputs[0].spent\n          })\n          migrationBundleHashes.push(bundle.bundleHash)\n        } catch (e) {\n          console.error(e);\n        }\n      }\n\n      // Send all bundles to the Tangle and reattach them until they are confirmed\n      for (bundleHash of migrationBundleHashes) {\n        try {\n          await manager.sendMigrationBundle(nodes, bundleHash)\n        } catch (e) { console.error(e) }\n      }\n    } else {\n      console.log('Detected 0 balance. Exiting.')\n\n      process.exit(0)\n    }\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nrun()\n\nconst getMigrationBundles = (inputs) => {\n  // Categorise spent vs unspent inputs\n  const { spent, unspent } = inputs.reduce((acc, input) => {\n    if (input.spent) {\n      acc.spent.push(input)\n    } else {\n      acc.unspent.push(input)\n    }\n    return acc;\n  }, { spent: [], unspent: [] })\n  const unspentInputChunks = selectInputsForUnspentAddresses(unspent)\n  const spentInputs = spent.filter((input) => input.balance >= MINIMUM_MIGRATION_BALANCE)\n  return [\n    ...spentInputs.map((input) => ({\n      // Make sure for spent addresses, we only have one input per bundle    \n      inputs: [input]\n    })),\n    ...unspentInputChunks.map((inputs) => ({ inputs }))\n  ]\n};\n\n/**\n * Prepares inputs (as bundles) for unspent addresses.\n * Steps:\n *   - Categorises inputs in two groups 1) inputs with balance >= MINIMUM_MIGRATION_BALANCE 2) inputs with balance < MINIMUM_MIGRATION_BALANCE\n *   - Creates chunks of category 1 input addresses such that length of each chunk should not exceed MAX_INPUTS_PER_BUNDLE\n *   - For category 2: \n *         - Sort the inputs in descending order based on balance;\n *         - Pick first N inputs (where N = MAX_INPUTS_PER_BUNDLE) and see if their accumulative balance >= MINIMUM_MIGRATION_BALANCE\n *         - If yes, then repeat the process for next N inputs. Otherwise, iterate on the remaining inputs and add it to a chunk that has space for more inputs\n *         - If there's no chunk with space left, then ignore these funds. NOTE THAT THESE FUNDS WILL ESSENTIALLY BE LOST!\n * \n * NOTE: If the total sum of provided inputs are less than MINIMUM_MIGRATION_BALANCE, then this method will just return and empty array as those funds can't be migrated.\n * \n * This method gives precedence to max inputs over funds. It ensures, a maximum a bundle could have is 30 inputs and their accumulative balance >= MINIMUM_MIGRATION_BALANCE\n * \n * @method selectInputsForUnspentAddresses\n * \n * @params {Input[]} inputs\n * \n * @returns {Input[][]}\n */\nconst selectInputsForUnspentAddresses = (inputs) => {\n  const totalInputsBalance = inputs.reduce((acc, input) => acc + input.balance, 0);\n\n  // If the total sum of unspent addresses is less than MINIMUM MIGRATION BALANCE, just return an empty array as these funds cannot be migrated\n  if (totalInputsBalance < MINIMUM_MIGRATION_BALANCE) {\n    return [];\n  }\n\n  const { inputsWithEnoughBalance, inputsWithLowBalance } = inputs.reduce((acc, input) => {\n    if (input.balance >= MINIMUM_MIGRATION_BALANCE) {\n      acc.inputsWithEnoughBalance.push(input);\n    } else {\n      acc.inputsWithLowBalance.push(input);\n    }\n\n    return acc;\n  }, { inputsWithEnoughBalance: [], inputsWithLowBalance: [] })\n\n  let chunks = inputsWithEnoughBalance.reduce((acc, input, index) => {\n    const chunkIndex = Math.floor(index / MAX_INPUTS_PER_BUNDLE)\n\n    if (!acc[chunkIndex]) {\n      acc[chunkIndex] = [] // start a new chunk\n    }\n\n    acc[chunkIndex].push(input)\n\n    return acc\n  }, [])\n\n  const fill = (_inputs) => {\n   _inputs.every((input) => {\n      const chunkIndexWithSpaceForInput = chunks.findIndex((chunk) => chunk.length < MAX_INPUTS_PER_BUNDLE);\n\n      if (chunkIndexWithSpaceForInput > -1) {\n        chunks = chunks.map((chunk, idx) => {\n          if (idx === chunkIndexWithSpaceForInput) {\n            return [...chunk, input]\n          }\n\n          return chunk\n        })\n\n        return true;\n      }\n\n      // If there is no space, then exit\n      return false;\n    })\n  }\n\n  const totalBalanceOnInputsWithLowBalance = inputsWithLowBalance.reduce((acc, input) => acc + input.balance, 0)\n\n  // If all the remaining input addresses have accumulative balance less than the minimum migration balance,\n  // Then sort the inputs in descending order and try to pair the\n  if (totalBalanceOnInputsWithLowBalance < MINIMUM_MIGRATION_BALANCE) {\n    const sorted = inputsWithLowBalance.slice().sort((a, b) => b.balance - a.balance)\n\n    fill(sorted)\n  } else {\n    let startIndex = 0\n\n    const sorted = inputsWithLowBalance.slice().sort((a, b) => b.balance - a.balance)\n    const max = Math.ceil(sorted.length / MAX_INPUTS_PER_BUNDLE);\n\n    while (startIndex < max) {\n      const inputsSubset = sorted.slice(startIndex * MAX_INPUTS_PER_BUNDLE, (startIndex + 1) * MAX_INPUTS_PER_BUNDLE)\n      const balanceOnInputsSubset = inputsSubset.reduce((acc, input) => acc + input.balance, 0);\n\n      if (balanceOnInputsSubset >= MINIMUM_MIGRATION_BALANCE) {\n        chunks = [...chunks, inputsSubset]\n      } else {\n        fill(inputsSubset)\n      }\n\n      startIndex++;\n    }\n  }\n\n  return chunks;\n};\n")))}u.isMDXComponent=!0},9442:function(e,n,t){"use strict";n.Z=t.p+"assets/images/screenshot_faucet-463b151b10627e967d2ba2b79de1db89.png"}}]);