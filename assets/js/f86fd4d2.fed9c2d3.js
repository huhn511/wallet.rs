(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7333:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={},l={unversionedId:"libraries/rust/getting_started",id:"libraries/rust/getting_started",isDocsHomePage:!1,title:"Getting Started with Rust",description:"Prerequisites",source:"@site/docs/libraries/rust/getting_started.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/getting_started",permalink:"/wallet.rs/docs/libraries/rust/getting_started",editUrl:"https://github.com/iotaledger/wallet.rs/tree/main/docs/docs/libraries/rust/getting_started.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IOTA Wallet Rust Library",permalink:"/wallet.rs/docs/libraries/rust/README"},next:{title:"Examples",permalink:"/wallet.rs/docs/libraries/rust/examples"}},p=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Dependencies",id:"dependencies",children:[]},{value:"Windows",id:"windows",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Initialisation",id:"initialisation",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null," ",(0,i.kt)("em",{parentName:"p"},"Rust")," and ",(0,i.kt)("em",{parentName:"p"},"Cargo")," are required to use Wallet.rs. You can find installation instructions in the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust documentation"),"."),(0,i.kt)("p",null,"We recommend you update ",(0,i.kt)("em",{parentName:"p"},"Rust")," to the latest stable version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},"rustup update stable"),". The nightly version should be fine, but there is a chance some changes are not compatible."),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rust-embedded.org/book/intro/no-std.html"},(0,i.kt)("em",{parentName:"a"},"no_std"))," is not currently supported, but we are working on it, and we will provide it as a feature once the new implementation is ready."),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"https://cmake.org/documentation/"},(0,i.kt)("em",{parentName:"a"},"cmake"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/"},(0,i.kt)("em",{parentName:"a"},"openssl"))," are required. In order to run the build process successfully using Cargo you may need install additional build tools on your system. "),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null," ",(0,i.kt)("em",{parentName:"p"},"cmake")," can be downloaded from the ",(0,i.kt)("a",{parentName:"p",href:"https://cmake.org/download/"},"official cmake website"),".\n",(0,i.kt)("em",{parentName:"p"},"openssl")," can be installed with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vcpkg"},"vcpkg")," or ",(0,i.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"chocolatey"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installing ",(0,i.kt)("em",{parentName:"p"},"openssl")," with ",(0,i.kt)("em",{parentName:"p"},"vcpkg")," :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ ./vcpkg.exe install openssl:x64-windows\n$ ./vcpkg.exe integrate install\n# you may want to add this to the system environment variables since you'll need it to compile the crate\n$ set VCPKGRS_DYNAMIC=1\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installing ",(0,i.kt)("em",{parentName:"p"},"openssl")," with ",(0,i.kt)("em",{parentName:"p"},"chocolatey")," :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ choco install openssl\n# you may need to set the OPENSSL_ROOT_DIR environment variable\n$ set OPENSSL_ROOT_DIR="C:\\Program Files\\OpenSSL-Win64"\n')))),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null," ",(0,i.kt)("em",{parentName:"p"},"cmake")," and ",(0,i.kt)("em",{parentName:"p"},"openssl")," can be installed with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.brew.sh/"},(0,i.kt)("em",{parentName:"a"},"Homebrew"))," by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ brew install cmake\n$ brew install openssl@1.1\n# you may want to add this to your .zshrc or .bashrc since you'll need it to compile the crate\n$ OPENSSL_ROOT_DIR=$(brew --prefix openssl@1.1)\n")),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"You can install ",(0,i.kt)("em",{parentName:"p"},"cmake")," and ",(0,i.kt)("em",{parentName:"p"},"openssl")," with your distro's package manager or download from their websites. On Debian and Ubuntu you will also need the ",(0,i.kt)("a",{parentName:"p",href:"https://packages.debian.org/sid/build-essential"},(0,i.kt)("em",{parentName:"a"},"build-essential"))," package."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use the library, add this to your ",(0,i.kt)("em",{parentName:"p"},"Cargo.toml")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[dependencies]\niota-wallet = { git = "https://github.com/iotaledger/wallet.rs", branch = "main" }\n')),(0,i.kt)("h3",{id:"initialisation"},"Initialisation"),(0,i.kt)("p",null,"In order to use the library, you first need to create an ",(0,i.kt)("em",{parentName:"p"},"AccountManager")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use iota_wallet::{\n    account_manager::AccountManager, client::ClientOptionsBuilder, signing::SignerType,\n};\nuse std::path::PathBuf;\n\n#[tokio::main]\nasync fn main() -> iota_wallet::Result<()> {\n    let storage_folder: PathBuf = "./my-db".into();\n    let manager =\n        AccountManager::builder()\n            .with_storage(&storage_folder, None)\n            .finish()\n            .await?;\n    let client_options = ClientOptionsBuilder::new().with_node("http://api.lb-0.testnet.chrysalis2.com")?.build();\n    let account = manager\n        .create_account(client_options)\n        .signer_type(SignerType::EnvMnemonic)\n        .initialise()\n        .await?;\n    Ok(())\n}\n')))}u.isMDXComponent=!0}}]);