"use strict";(self.webpackChunklp_compat=self.webpackChunklp_compat||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},i="Patching an app",l={unversionedId:"intro",id:"intro",title:"Patching an app",description:"Set up Lucky Patcher",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/lp-compat/docs/intro",draft:!1,editUrl:"https://github.com/Flixbox/lp-compat/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lucky Patcher - Important information",permalink:"/lp-compat/docs/lp-info"},next:{title:"Update an existing app",permalink:"/lp-compat/docs/update"}},p={},c=[{value:"Set up Lucky Patcher",id:"set-up-lucky-patcher",level:2},{value:"Create the modified APK file",id:"create-the-modified-apk-file",level:2},{value:"Reinstall the app",id:"reinstall-the-app",level:2},{value:"Cleanup",id:"cleanup",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"patching-an-app"},"Patching an app"),(0,o.kt)("h2",{id:"set-up-lucky-patcher"},"Set up Lucky Patcher"),(0,o.kt)("p",null,'Follow the tutorial on the official website. Make sure to give LP the "Draw over other apps" permission in the app\'s settings.'),(0,o.kt)("p",null,"Read the ",(0,o.kt)("a",{parentName:"p",href:"/lp-compat/docs/lp-info"},"important info about LP")," section."),(0,o.kt)("h2",{id:"create-the-modified-apk-file"},"Create the modified APK file"),(0,o.kt)("p",null,"Follow these screenshots to create your modified APK file. Read any pop-ups you may come across and try to follow their advice, but don't worry too much about them."),(0,o.kt)("p",null,"First, open Lucky Patcher and tap the app you'd like to modify."),(0,o.kt)("p",null,'On this screen, tap the "APK with multi patch" option. We\'d like to apply two patch categories: The ad-free and the IAP patches.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3027).Z,width:"540",height:"1200"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3177).Z,width:"540",height:"1200"})),(0,o.kt)("p",null,"Apply some patches."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3914).Z,width:"540",height:"1200"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6013).Z,width:"540",height:"1200"})),(0,o.kt)("p",null,'Finally, install the modified APK file by tapping the "Go to file" button and then the "Reinstall" button.'),(0,o.kt)("h2",{id:"reinstall-the-app"},"Reinstall the app"),(0,o.kt)("p",null,"When you reinstall (uninstall the original app and install the patched one) you will no longer be able to use Google features like Google Play sign-in in that app anymore. However, some patchable apps like Merge Dragons and City Island 5 feature Facebook sign-in, which will usually work."),(0,o.kt)("p",null,"Since Android will usually prevent us from installing the patched APK as an update, we'll have to reinstall the app."),(0,o.kt)("h2",{id:"cleanup"},"Cleanup"),(0,o.kt)("p",null,"You'll also be able to find the patched APK files in LP under the \"Rebuild & Install\" option in the menu. If you'd like to clean up some storage, remove these APK files manually."),(0,o.kt)("p",null,"You can also clean up all of your patched APK files at once. Go to your stock file manager (it needs elevated access, the stock file manager usually has elevated access), then go to this path:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/Android/data/ru.<random letters>.<random letters>/files/LuckyPatcher/Modified")),(0,o.kt)("p",null,"You can delete everything in this ",(0,o.kt)("inlineCode",{parentName:"p"},"Modified")," folder. It only contains your patched APKs and some metadata."))}u.isMDXComponent=!0},3914:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ad_patches-7868e231ca5d1d343b88e9378d9a8034.jpg"},3027:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_modified_apk-ce294b3f390b9ebc58a0e3f6ee09ca91.jpg"},6013:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/iap_patches-f5b772900ac0f2d6007b66ecb9627e31.jpg"},3177:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rebuild_categories_selection-3c13e0e7eaf5c3fccdd053dd85d76690.jpg"}}]);