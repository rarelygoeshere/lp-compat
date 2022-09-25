"use strict";(self.webpackChunklp_compat=self.webpackChunklp_compat||[]).push([[237],{6917:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ke});var l=a(7294),n=a(6010),o=a(9960),r=a(2263),i=a(1962),c=a(7462);const s="features_DHSf";var p=a(4623),d=a(4159),m=a(1927),u=a(9762),f=a(120),b=a(9630),g=a(9072),h=a(3678),E=a(8763),y=a(6866),Z=a(3265),w=a(1448),v=a(562),x=a(2097),P=a(9837),k=a(1359),A=a(918),I=a(4731),C=a(7814),S=a(3024),L=a(9417),D=a(6486),N=a(9758);const T=function(e){return void 0===e&&(e=(0,u.Z)()),{iap:{label:"IAP patch works!",color:e.palette.success.main},"partial-iap":{label:"IAP partially compatible",color:e.palette.warning.main},"unclear-iap":{label:"IAP need verification - Try it out and post in Discord!",color:e.palette.warning.main},"no-iap":{label:"IAP incompatible",color:e.palette.error.main},subscription:{label:"Subscription redeemable!",color:e.palette.success.main},"no-subscription":{label:"Subscription cannot be redeemed",color:e.palette.warning.main},repurchase:{label:"Some IAPs need to be redeemed after every restart",color:e.palette.warning.main},"account-login":{label:"Account login works!",color:e.palette.info.main},"facebook-login":{label:"Facebook login works!",color:e.palette.info.main},"facebook-login-broken":{label:"Facebook login broken",color:e.palette.warning.main},"facebook-login-no-app-installed":{label:"Facebook app must not be installed to login",color:e.palette.warning.main},transfer:{label:"App data can be transferred to another account",color:e.palette.info.main},"transfer-steam":{label:"App data can be transferred to Steam",color:e.palette.info.main},"transfer-ios":{label:"App data can be transferred to iOS",color:e.palette.info.main},multiplayer:{label:"Full Multiplayer; IAP compatible",color:e.palette.primary.main},"partial-multiplayer":{label:"App has some multiplayer features; IAP compatible",color:e.palette.primary.main},"no-multiplayer":{label:"Singleplayer only",color:e.palette.warning.main},"no-multiplayer-iap":{label:"Multiplayer IAP broken",color:e.palette.warning.main},"slightly-broken":{label:"Slightly broken, but playable",color:e.palette.warning.main},"too-many-iap-break":{label:"Buying too many IAP will break the app!",color:e.palette.warning.main},"disable-data-on-lp-popup":{label:"Disable data connection when the LP purchase popup shows to get IAP",color:e.palette.info.main},"restore-purchase":{label:"IAP can be redeemed by restoring purchase and restarting the app",color:e.palette.info.main},"iap-before-load":{label:"Purchase IAP before the app is fully loaded. Play anonymously.",color:e.palette.info.main},"subscription-restore-purchase":{label:"Subscription can be redeemed by restoring purchase",color:e.palette.info.main},"dont-bother":{label:"Don't bother. This game is either grindy or uninteresting.",color:e.palette.warning.main},"region-locked":{label:"If region locked, use Google Account from another region",color:e.palette.warning.main},"patch-before-first-launch":{label:"Patch this game before launching it for the first time!",color:e.palette.warning.main},"special-patch-full-offline":{label:"Select patch option: Make fully offline",color:e.palette.info.main},"special-patch-signature":{label:"Select patch option: Signature verification killer",color:e.palette.info.main},"special-patch-lvl":{label:"Select patch option: Support patch for LVL and Inapp emulation",color:e.palette.info.main},"may-require-root":{label:"This app may require a root-level patch to work.",color:e.palette.info.main},"root-iap":{label:"IAP patch works with rooted device",color:e.palette.info.main},"root-patch":{label:"Root patch available",color:e.palette.info.main},"root-patch-iap":{label:"Patch app with root to make IAP work!",color:e.palette.info.main},"no-root-patch-iap":{label:"Root patch doesn't make IAP available",color:e.palette.info.main},"apk-platinmods":{label:"Patched APK download at PlatinMods",color:e.palette.info.main},"apk-apkpure":{label:"Download APK from APKPure, then patch",color:e.palette.info.main}}},G=function(e,t){void 0===t&&(t=(0,u.Z)());const a=T(t)[e.toLowerCase()]||{};if(e.indexOf("::")>-1){var l;const n=e.split("::");a.color=(null==(l=t.palette[n[0]])?void 0:l.main)||t.palette.info.main,a.label=n[1]}return a};var M=a(2949),R=a(9473);const F=R.I0,O=R.v9;var U=a(9498),_=a(9669);const z=a.n(_)().create({baseURL:"https://luck.up.railway.app/",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Max-Age":600},withCredentials:!0}),j={appsListUpdated:Date.now(),appsListPage:0,discordUser:void 0,discordGuilds:[],dialogs:{EDIT_APP:{open:!1}}},H=(0,U.PH)("clear"),$=(0,U.hg)("/discord/get",(async e=>{let{code:t}=e;return(await z.get(`discord/get/${t}`)).data})),Y=(0,U.oM)({name:"system",initialState:j,reducers:{setAppsListUpdated(e,t){e.appsListUpdated=t.payload},setAppsListPage(e,t){e.appsListPage=t.payload},openDialog(e,t){e.dialogs[t.payload.dialog]={open:!0,...t.payload.data}},closeDialog(e,t){e.dialogs[t.payload.dialog]={open:!1}}},extraReducers:e=>{e.addCase(H,((e,t)=>j)),e.addCase($.fulfilled,((e,t)=>{e.discordUser=t.payload.user,e.discordGuilds=t.payload.guilds}))}}),{setAppsListUpdated:q,setAppsListPage:W,openDialog:B,closeDialog:K}=Y.actions,V=Y.reducer,J=(0,U.hg)("apps/all",(async()=>(await z.get("/apps/all")).data)),Q=(0,U.hg)("apps/get",(async e=>{let{appId:t}=e;return(await z.get(`apps/get/${t}`)).data})),X=(0,U.hg)("apps/page",(async(e,t)=>{let{page:a}=e;const l=(await z.get(`apps/page/${a}/50`)).data;return t.dispatch(W(a+1)),l})),ee=(0,U.hg)("apps/count",(async()=>(await z.get("apps/count")).data)),te=[],ae=(0,U.oM)({name:"apps",initialState:te,reducers:{},extraReducers:e=>{e.addCase(H,((e,t)=>te)),e.addCase(J.fulfilled,((e,t)=>t.payload)),e.addCase(Q.fulfilled,((e,t)=>{const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(X.fulfilled,((e,t)=>(t.payload.forEach((e=>"632c280dabd31def75d1ac54"===e._id&&console.log("Found app!"))),[...e,...t.payload])))}}).reducer;var le=a(2595);const ne={namespace:"flixbox",states:["apps","system.appsListPage","system.appsListUpdated","system.dialogs"]},oe=(0,U.xC)({reducer:{apps:ae,system:V},middleware:e=>e().concat((0,le.a1)(ne)),preloadedState:(0,le.zD)(ne)});var re=a(412),ie=a(7971),ce=a(1470),se=a(5050),pe=a(784),de=a(5084),me=a(8804),ue=a(8377);const fe=e=>{let{editState:t,field:a,handleChange:n}=e;return l.createElement(ie.Z,{label:a,value:t[a],onChange:e=>n(a,e.target.value)})},be=e=>{let{open:t,appId:a=""}=e;const n=F(),o=O((e=>e.apps.find((e=>e.appId===a))))||{appId:a};console.log("initialAppData",o);const[r,i]=(0,l.useState)({...o}),s=(0,x.Z)(),p=T(s);console.log("editState",r);const d=(e,t)=>{i({...r,[e]:t})},m=()=>{i({}),n(K({dialog:"EDIT_APP"}))};return l.createElement(ce.Z,{fullScreen:!0,open:t,onClose:m},l.createElement(se.Z,{sx:{position:"relative"}},l.createElement(pe.Z,null,l.createElement(v.Z,{edge:"start",color:"inherit",onClick:m,"aria-label":"close"},l.createElement(C.G,{icon:L.NBC})),l.createElement(b.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},"Edit app"),l.createElement(de.Z,{autoFocus:!0,color:"inherit",onClick:m},"save"))),l.createElement(ue.Z,{m:1}),l.createElement(b.Z,null,a),l.createElement(ue.Z,{m:1}),l.createElement(fe,{field:"title",editState:r,handleChange:d}),l.createElement(ue.Z,{m:1}),l.createElement(b.Z,null,"You can select various pre-defined features from the list or add your own. ",l.createElement("br",null)," Please try to always at least choose one of iap, unclear-iap or no-iap so that users can filter the list. ",l.createElement("br",null),"You can add custom features by prefixing them with :: ",l.createElement("br",null),"Examples: ",l.createElement("br",null),"::Works with version 1.2.3 from APKPure ",l.createElement("br",null),"warning::Does not work with Android 12"),l.createElement(ue.Z,{m:1}),l.createElement(me.Z,{multiple:!0,id:"tags-filled",options:Object.keys(p).map((e=>e)),freeSolo:!0,value:r.features,onChange:(e,t)=>{console.log("onChange",t),d("features",t)},renderTags:(e,t)=>e.map(((e,a)=>l.createElement(w.Z,(0,c.Z)({variant:"outlined",label:e},t({index:a}))))),renderInput:e=>l.createElement(ie.Z,(0,c.Z)({},e,{variant:"filled",label:"Features",placeholder:"Features"})),renderOption:(e,t)=>l.createElement(ue.Z,(0,c.Z)({component:"li",flexDirection:"column"},e),l.createElement(b.Z,null,p[t].label),l.createElement(b.Z,{variant:"caption"},t))}))},ge=()=>{const{dialogs:e}=O((e=>e.system));return l.createElement(l.Fragment,null,l.createElement(be,null==e?void 0:e.EDIT_APP))},he=[{icon:l.createElement(f.Z,{flex:"1"},l.createElement(f.Z,{className:"fa-layers fa-fw"},l.createElement(b.Z,{className:"fa-layers-text fa-inverse",color:"#607d8b",fontWeight:900,fontSize:30},"ROOT"),l.createElement(C.G,{icon:L.gPx,color:"#e51c23",size:"lg",opacity:.9}))),description:l.createElement(b.Z,null,'No root access is required for these patches, except for apps in the "Root" category.')},{icon:l.createElement(f.Z,{flex:"1"},l.createElement(f.Z,{className:"fa-layers fa-fw",mr:4},l.createElement(C.G,{icon:L.HCh,color:"#607d8b"}),l.createElement(C.G,{icon:L.gPx,color:"#e51c23",size:"lg",opacity:.9})),l.createElement(f.Z,{className:"fa-layers fa-fw",ml:4},l.createElement(C.G,{icon:L.vJI,color:"#607d8b"}),l.createElement(C.G,{icon:L.Vkm,color:"#e51c23",size:"xs",opacity:.9,transform:"down-4 right-8"}))),description:l.createElement(b.Z,null,"Apps are patched using"," ",l.createElement(o.Z,{href:"/docs/intro"},"the default IAP and Adblock patches"),".")},{icon:l.createElement(C.G,{icon:L.jMV,color:"#607d8b"}),description:l.createElement(b.Z,null,"Many apps work with LP, even if they're not on the list.",l.createElement("br",null),"Please try them yourself and report back!")},{icon:l.createElement(C.G,{icon:S.omb,color:"#607d8b"}),description:l.createElement(b.Z,null,"Found something? Create an"," ",l.createElement(o.Z,{href:"https://github.com/Flixbox/lp-compat/issues"},"issue")," or post on the ",l.createElement(o.Z,{href:"https://discord.gg/RS5ddYf7mw"},"Discord"),"!")},{icon:l.createElement(C.G,{icon:L.kWN,color:"#607d8b"}),description:l.createElement(b.Z,null,"Check out the"," ",l.createElement(o.Z,{href:"/docs/honorable-mentions"},"honorable mentions")," too!")}];function Ee(e){let{icon:t,description:a}=e;return l.createElement("div",{className:(0,n.Z)("col col--4")},l.createElement(f.Z,{className:"text--center",height:"70px",mt:3},t),l.createElement("div",{className:"text--center padding-horiz--md"},a))}const ye=()=>{const e=F(),[t,a]=(0,N.Yw)("","appsTitleFilter"),[n,o]=(0,N.Yw)("installs-asc","apps-sorting"),[r,i]=(0,l.useState)(!1),[p,d]=(0,l.useState)(0),m=O((e=>e.apps)),{appsListUpdated:u,appsListPage:x,discordUser:P}=O((e=>e.system));let k;if(re.Z.canUseDOM&&(k=new URLSearchParams(window.location.search).get("code")),P){document.getElementById("discord-login").innerHTML=P.username}(0,l.useEffect)((()=>{e(ee()).then((e=>{d(e.payload)})),e($({code:k}))}),[]);const A=[{id:"compatible",title:"Compatible apps",onlyRenderIf:e=>e.features.indexOf("iap")>-1},{id:"unclear-iap",title:"Uncategorized",onlyRenderIf:e=>-1===e.features.indexOf("iap")&&-1===e.features.indexOf("no-iap")},{id:"incompatible",title:"Incompatible apps",onlyRenderIf:e=>e.features.indexOf("no-iap")>-1}],[I,S]=(0,N.Yw)(A.map((e=>e.id)),"onlyShowTheseVisibilitySettings");n||o("installs-asc");const T={"name-asc":{title:"Sort by name",getSortedApps:()=>[...m].sort(((e,t)=>e.title.localeCompare(t.title)))},"installs-asc":{title:"Sort by downloads",getSortedApps:()=>[...m].sort(((e,t)=>t.minInstalls-e.minInstalls))},"date-modified":{title:"Sort by last modified",getSortedApps:()=>[...m].sort(((e,t)=>t.dateModified-e.dateModified))}},G=T[n].getSortedApps(),M=50*x>=p||m.length>=p;return(0,l.useEffect)((()=>{r||(M?r&&i(!1):(!r&&i(!0),console.log("appsListPage",x),e(X({page:x})).then((()=>{i(!1)}))))}),[m,r,p]),l.createElement("section",{className:s},l.createElement("div",{className:"container"},l.createElement("div",{className:"row fa-3x"},he.map(((e,t)=>l.createElement(Ee,(0,c.Z)({key:t},e))))),l.createElement(f.Z,{m:8}),l.createElement(f.Z,{className:"row",display:"flex",flexDirection:"column"},l.createElement(g.ZP,{container:!0},l.createElement(b.Z,{variant:"h3"},"Filter apps"),l.createElement(f.Z,{flexGrow:1}),l.createElement(h.Z,{value:n,onChange:e=>o(e.target.value)},Object.entries(T).map((e=>l.createElement(E.Z,{value:e[0],key:e[0]},e[1].title))))),l.createElement(y.Z,{placeholder:"Filter app title or ID",value:t,onChange:e=>a(e.currentTarget.value.toLowerCase())}),A.map((e=>{let{id:t,title:a}=e;return l.createElement(Z.ZP,{key:t},l.createElement(w.Z,{label:a,onClick:()=>S((0,D.xor)(I,[t])),icon:l.createElement(C.G,{icon:-1!==I.indexOf(t)?L.Mdf:L.Aq,color:"#e51c23",size:"lg",opacity:.9})}))}))),l.createElement("div",{id:"apps"}),l.createElement(b.Z,null,`Loaded ${m.length} out of ${p} apps!`,r&&" Loading more...",l.createElement("br",null),!r&&M&&l.createElement(v.Z,{onClick:()=>(e(H()),void(0,le.ZH)())},l.createElement(C.G,{icon:L.QDM})),`Last refreshed: ${new Date(u).toLocaleString()}`),G.map((e=>{if(-1===e.title.toLowerCase().indexOf(t)&&-1===e.appId.toLowerCase().indexOf(t))return;let a=!1;return I.forEach((t=>{A.find((e=>e.id===t)).onlyRenderIf(e)&&(a=!0)})),a?l.createElement(Ze,{app:e,key:e.appId}):void 0}))))},Ze=e=>{let{app:t}=e;const a=(0,x.Z)(),{appId:n,features:o,dateModified:r,title:i,icon:c,installs:s,scoreText:m,url:u,genre:h,screenshots:E,free:y,priceText:Z}=t,{discordUser:w}=O((e=>e.system)),S=F();(0,R.oR)();return l.createElement(g.ZP,{item:!0,xs:12,m:1},l.createElement(d.Z,{defaultHeight:800,stayRendered:!0},l.createElement(P.Z,{style:{maxWidth:"100%"}},l.createElement("a",{href:u},l.createElement(k.Z,{sx:{padding:"8px"}},l.createElement(p.Z,{hideScrollbar:!1,style:{height:"200px"}},E.map((e=>l.createElement("img",{src:e,alt:"App screenshot",loading:"lazy",key:e})))),o&&o.map((e=>l.createElement(A.Z,{component:f.Z,elevation:0,padding:.5,sx:{backgroundColor:G(e,a).color},key:e,mt:.5},l.createElement(b.Z,{color:a.palette.getContrastText(G(e,a).color)},G(e,a).label)))),l.createElement(f.Z,{display:"flex",mt:1},l.createElement(I.Z,{src:c,variant:"square",sx:{marginRight:1}}),l.createElement(f.Z,{display:"flex",flexDirection:"column"},l.createElement(b.Z,null,i),l.createElement(b.Z,{variant:"subtitle2"},n))),l.createElement(f.Z,{display:"flex",justifyContent:"space-between"},l.createElement(b.Z,{variant:"subtitle2"},"\u2b50",m),l.createElement(b.Z,{variant:"subtitle2"},"\ud83d\udce9 ",s)),l.createElement(f.Z,{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},l.createElement(b.Z,{variant:"subtitle2"},h),r&&l.createElement(b.Z,{variant:"subtitle2",whiteSpace:"nowrap"},"Entry last modified:"," ",new Date(r).toLocaleString())),!y&&l.createElement(b.Z,{variant:"subtitle2"},Z))),!(null!=w&&w.username)&&l.createElement(v.Z,{onClick:()=>{S(B({dialog:"EDIT_APP",data:{appId:n}}))}},l.createElement(C.G,{icon:L.IwR})))))},we=()=>{const{colorMode:e}=(0,M.I)();return l.createElement(l.Fragment,null,l.createElement(R.zt,{store:oe},l.createElement(m.Z,{theme:(0,u.Z)({palette:{mode:e}})},l.createElement(ye,null),l.createElement(ge,null))))},ve="heroBanner_jHI5",xe="buttons_Pntg";a(8440);function Pe(){const{siteConfig:e}=(0,r.Z)();return l.createElement("header",{className:(0,n.Z)("hero hero--primary",ve)},l.createElement("div",{className:"container"},l.createElement(C.G,{icon:L.eSc,size:"4x"}),l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement(f.Z,{className:xe,flex:"1",flexDirection:"column"},l.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/lp-info"},"Important info about LP \ud83d\udca1"),l.createElement(f.Z,{m:1}),l.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"How to install & patch an app \ud83d\udcd6"),l.createElement(f.Z,{m:1}),l.createElement(o.Z,{className:"button button--secondary button--lg",to:"#apps"},"To the list \ud83d\ude80"))))}function ke(){const{siteConfig:e}=(0,r.Z)();return l.createElement(i.Z,{title:`${e.title}`,description:"A full overview of Lucky Patcher Compatibility with various apps."},l.createElement(Pe,null),l.createElement("main",null,l.createElement(we,null)))}a(3636).vc.autoAddCss=!1}}]);