"use strict";(self.webpackChunklp_compat=self.webpackChunklp_compat||[]).push([[237],{6917:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ve});var l=a(7294),o=a(6010),n=a(9960),r=a(2263),i=a(1962),c=a(7462);const s="features_DHSf";var p=a(4623),d=a(4159),m=a(1927),u=a(9762),f=a(120),b=a(9630),g=a(9072),h=a(5173),E=a(2014),y=a(6480),Z=a(3265),w=a(1448),P=a(562),v=a(2097),x=a(9837),k=a(1359),A=a(918),I=a(4731),S=a(7814),C=a(3024),L=a(9417),D=a(6486),N=a(9758);const T=function(e,t){void 0===t&&(t=(0,u.Z)());const a=function(e){return void 0===e&&(e=(0,u.Z)()),{iap:{label:"IAP patch works!",color:e.palette.success.main},"partial-iap":{label:"IAP partially compatible",color:e.palette.warning.main},"unclear-iap":{label:"IAP need verification - Try it out and post in Discord!",color:e.palette.warning.main},"no-iap":{label:"IAP incompatible",color:e.palette.error.main},subscription:{label:"Subscription redeemable!",color:e.palette.success.main},"no-subscription":{label:"Subscription cannot be redeemed",color:e.palette.warning.main},repurchase:{label:"Some IAPs need to be redeemed after every restart",color:e.palette.warning.main},"account-login":{label:"Account login works!",color:e.palette.info.main},"facebook-login":{label:"Facebook login works!",color:e.palette.info.main},"facebook-login-broken":{label:"Facebook login broken",color:e.palette.warning.main},"facebook-login-no-app-installed":{label:"Facebook app must not be installed to login",color:e.palette.warning.main},transfer:{label:"App data can be transferred to another account",color:e.palette.info.main},"transfer-steam":{label:"App data can be transferred to Steam",color:e.palette.info.main},"transfer-ios":{label:"App data can be transferred to iOS",color:e.palette.info.main},multiplayer:{label:"Full Multiplayer; IAP compatible",color:e.palette.primary.main},"partial-multiplayer":{label:"App has some multiplayer features; IAP compatible",color:e.palette.primary.main},"no-multiplayer":{label:"Singleplayer only",color:e.palette.warning.main},"no-multiplayer-iap":{label:"Multiplayer IAP broken",color:e.palette.warning.main},"slightly-broken":{label:"Slightly broken, but playable",color:e.palette.warning.main},"too-many-iap-break":{label:"Buying too many IAP will break the app!",color:e.palette.warning.main},"disable-data-on-lp-popup":{label:"Disable data connection when the LP purchase popup shows to get IAP",color:e.palette.info.main},"restore-purchase":{label:"IAP can be redeemed by restoring purchase and restarting the app",color:e.palette.info.main},"iap-before-load":{label:"Purchase IAP before the app is fully loaded. Play anonymously.",color:e.palette.info.main},"subscription-restore-purchase":{label:"Subscription can be redeemed by restoring purchase",color:e.palette.info.main},"dont-bother":{label:"Don't bother. This game is either grindy or uninteresting.",color:e.palette.warning.main},"region-locked":{label:"If region locked, use Google Account from another region",color:e.palette.warning.main},"patch-before-first-launch":{label:"Patch this game before launching it for the first time!",color:e.palette.warning.main},"special-patch-full-offline":{label:"Select patch option: Make fully offline",color:e.palette.info.main},"special-patch-signature":{label:"Select patch option: Signature verification killer",color:e.palette.info.main},"special-patch-lvl":{label:"Select patch option: Support patch for LVL and Inapp emulation",color:e.palette.info.main},"may-require-root":{label:"This app may require a root-level patch to work.",color:e.palette.info.main},"root-iap":{label:"IAP patch works with rooted device",color:e.palette.info.main},"root-patch":{label:"Root patch available",color:e.palette.info.main},"root-patch-iap":{label:"Patch app with root to make IAP work!",color:e.palette.info.main},"no-root-patch-iap":{label:"Root patch doesn't make IAP available",color:e.palette.info.main},"apk-platinmods":{label:"Patched APK download at PlatinMods",color:e.palette.info.main},"apk-apkpure":{label:"Download APK from APKPure, then patch",color:e.palette.info.main}}}(t)[e.toLowerCase()]||{};if(e.indexOf("::")>-1){var l;const o=e.split("::");a.color=(null==(l=t.palette[o[0]])?void 0:l.main)||t.palette.info.main,a.label=o[1]}return a};var M=a(2949),G=a(9473);const R=G.I0,U=G.v9;var _=a(9498),F=a(9669);const O=a.n(F)().create({baseURL:"https://luck.up.railway.app/",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Max-Age":600}}),z={appsListUpdated:Date.now(),appsListPage:0,discordUser:void 0,discordGuilds:[],dialogs:{EDIT_APP:{open:!1}}},H=(0,_.PH)("clear"),j=(0,_.hg)("/discord/get",(async e=>{let{code:t}=e;return(await O.get(`discord/get/${t}`)).data})),$=(0,_.oM)({name:"system",initialState:z,reducers:{setAppsListUpdated(e,t){e.appsListUpdated=t.payload},setAppsListPage(e,t){e.appsListPage=t.payload},openDialog(e,t){e.dialogs[t.payload.dialog]={open:!0,...t.payload.data}},closeDialog(e,t){e.dialogs[t.payload.dialog]={open:!1}}},extraReducers:e=>{e.addCase(H,((e,t)=>z)),e.addCase(j.fulfilled,((e,t)=>{e.discordUser=t.payload.user,e.discordGuilds=t.payload.guilds}))}}),{setAppsListUpdated:q,setAppsListPage:V,openDialog:W,closeDialog:Y}=$.actions,B=$.reducer,K=(0,_.hg)("apps/all",(async()=>(await O.get("/apps/all")).data)),J=(0,_.hg)("apps/get",(async e=>{let{appId:t}=e;return(await O.get(`apps/get/${t}`)).data})),Q=(0,_.hg)("apps/page",(async(e,t)=>{let{page:a}=e;const l=(await O.get(`apps/page/${a}/50`)).data;return t.dispatch(V(a+1)),l})),X=(0,_.hg)("apps/count",(async()=>(await O.get("apps/count")).data)),ee=[],te=(0,_.oM)({name:"apps",initialState:ee,reducers:{},extraReducers:e=>{e.addCase(H,((e,t)=>ee)),e.addCase(K.fulfilled,((e,t)=>t.payload)),e.addCase(J.fulfilled,((e,t)=>{const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(Q.fulfilled,((e,t)=>(t.payload.forEach((e=>"632c280dabd31def75d1ac54"===e._id&&console.log("Found app!"))),[...e,...t.payload])))}}).reducer;var ae=a(2595);const le={namespace:"flixbox",states:["apps","system.appsListPage","system.appsListUpdated"]},oe=(0,_.xC)({reducer:{apps:te,system:B},middleware:e=>e().concat((0,ae.a1)(le)),preloadedState:(0,ae.zD)(le)});var ne=a(412),re=a(1470),ie=a(5050),ce=a(784),se=a(5084),pe=a(5214),de=a(1702),me=a(4373);const ue=e=>{let{open:t}=e;const a=R(),o=()=>a(Y({dialog:"EDIT_APP"}));return l.createElement(re.Z,{fullScreen:!0,open:t,onClose:o},l.createElement(ie.Z,{sx:{position:"relative"}},l.createElement(ce.Z,null,l.createElement(P.Z,{edge:"start",color:"inherit",onClick:o,"aria-label":"close"},"Close"),l.createElement(b.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},"Sound"),l.createElement(se.Z,{autoFocus:!0,color:"inherit",onClick:o},"save"))),l.createElement(pe.Z,null,l.createElement(Z.ZP,{button:!0},l.createElement(de.Z,{primary:"Phone ringtone",secondary:"Titania"})),l.createElement(me.Z,null),l.createElement(Z.ZP,{button:!0},l.createElement(de.Z,{primary:"Default notification ringtone",secondary:"Tethys"}))))},fe=()=>{const{dialogs:e}=U((e=>e.system));return l.createElement(l.Fragment,null,l.createElement(ue,{open:null==e?void 0:e.EDIT_APP.open}))},be=[{icon:l.createElement(f.Z,{flex:"1"},l.createElement(f.Z,{className:"fa-layers fa-fw"},l.createElement(b.Z,{className:"fa-layers-text fa-inverse",color:"#607d8b",fontWeight:900,fontSize:30},"ROOT"),l.createElement(S.G,{icon:L.gPx,color:"#e51c23",size:"lg",opacity:.9}))),description:l.createElement(b.Z,null,'No root access is required for these patches, except for apps in the "Root" category.')},{icon:l.createElement(f.Z,{flex:"1"},l.createElement(f.Z,{className:"fa-layers fa-fw",mr:4},l.createElement(S.G,{icon:L.HCh,color:"#607d8b"}),l.createElement(S.G,{icon:L.gPx,color:"#e51c23",size:"lg",opacity:.9})),l.createElement(f.Z,{className:"fa-layers fa-fw",ml:4},l.createElement(S.G,{icon:L.vJI,color:"#607d8b"}),l.createElement(S.G,{icon:L.Vkm,color:"#e51c23",size:"xs",opacity:.9,transform:"down-4 right-8"}))),description:l.createElement(b.Z,null,"Apps are patched using"," ",l.createElement(n.Z,{href:"/docs/intro"},"the default IAP and Adblock patches"),".")},{icon:l.createElement(S.G,{icon:L.jMV,color:"#607d8b"}),description:l.createElement(b.Z,null,"Many apps work with LP, even if they're not on the list.",l.createElement("br",null),"Please try them yourself and report back!")},{icon:l.createElement(S.G,{icon:C.omb,color:"#607d8b"}),description:l.createElement(b.Z,null,"Found something? Create an"," ",l.createElement(n.Z,{href:"https://github.com/Flixbox/lp-compat/issues"},"issue")," or post on the ",l.createElement(n.Z,{href:"https://discord.gg/RS5ddYf7mw"},"Discord"),"!")},{icon:l.createElement(S.G,{icon:L.kWN,color:"#607d8b"}),description:l.createElement(b.Z,null,"Check out the"," ",l.createElement(n.Z,{href:"/docs/honorable-mentions"},"honorable mentions")," too!")}];function ge(e){let{icon:t,description:a}=e;return l.createElement("div",{className:(0,o.Z)("col col--4")},l.createElement(f.Z,{className:"text--center",height:"70px",mt:3},t),l.createElement("div",{className:"text--center padding-horiz--md"},a))}const he=()=>{const e=R(),[t,a]=(0,N.Yw)("","appsTitleFilter"),[o,n]=(0,N.Yw)("installs-asc","apps-sorting"),[r,i]=(0,l.useState)(!1),[p,d]=(0,l.useState)(0),m=U((e=>e.apps)),{appsListUpdated:u,appsListPage:v,discordUser:x}=U((e=>e.system));let k;if(ne.Z.canUseDOM&&(k=new URLSearchParams(window.location.search).get("code")),x){document.getElementById("discord-login").innerHTML=x.username}(0,l.useEffect)((()=>{e(X()).then((e=>{d(e.payload)})),e(j({code:k}))}),[]);const A=[{id:"compatible",title:"Compatible apps",onlyRenderIf:e=>e.features.indexOf("iap")>-1},{id:"unclear-iap",title:"Uncategorized",onlyRenderIf:e=>-1===e.features.indexOf("iap")&&-1===e.features.indexOf("no-iap")},{id:"incompatible",title:"Incompatible apps",onlyRenderIf:e=>e.features.indexOf("no-iap")>-1}],[I,C]=(0,N.Yw)(A.map((e=>e.id)),"onlyShowTheseVisibilitySettings");o||n("installs-asc");const T={"name-asc":{title:"Sort by name",getSortedApps:()=>[...m].sort(((e,t)=>e.title.localeCompare(t.title)))},"installs-asc":{title:"Sort by downloads",getSortedApps:()=>[...m].sort(((e,t)=>t.minInstalls-e.minInstalls))},"date-modified":{title:"Sort by last modified",getSortedApps:()=>[...m].sort(((e,t)=>t.dateModified-e.dateModified))}},M=T[o].getSortedApps(),G=50*v>=p||m.length>=p;return(0,l.useEffect)((()=>{r||(G?r&&i(!1):(!r&&i(!0),console.log("appsListPage",v),e(Q({page:v})).then((()=>{i(!1)}))))}),[m,r,p]),l.createElement("section",{className:s},l.createElement("div",{className:"container"},l.createElement("div",{className:"row fa-3x"},be.map(((e,t)=>l.createElement(ge,(0,c.Z)({key:t},e))))),l.createElement(f.Z,{m:8}),l.createElement(f.Z,{className:"row",display:"flex",flexDirection:"column"},l.createElement(g.ZP,{container:!0},l.createElement(b.Z,{variant:"h3"},"Filter apps"),l.createElement(f.Z,{flexGrow:1}),l.createElement(h.Z,{value:o,onChange:e=>n(e.target.value)},Object.entries(T).map((e=>l.createElement(E.Z,{value:e[0],key:e[0]},e[1].title))))),l.createElement(y.Z,{placeholder:"Filter app title or ID",value:t,onChange:e=>a(e.currentTarget.value.toLowerCase())}),A.map((e=>{let{id:t,title:a}=e;return l.createElement(Z.ZP,{key:t},l.createElement(w.Z,{label:a,onClick:()=>C((0,D.xor)(I,[t])),icon:l.createElement(S.G,{icon:-1!==I.indexOf(t)?L.Mdf:L.Aq,color:"#e51c23",size:"lg",opacity:.9})}))}))),l.createElement("div",{id:"apps"}),l.createElement(b.Z,null,`Loaded ${m.length} out of ${p} apps!`,r&&" Loading more...",l.createElement("br",null),!r&&G&&l.createElement(P.Z,{onClick:()=>(e(H()),void(0,ae.ZH)())},l.createElement(S.G,{icon:L.QDM})),`Last refreshed: ${new Date(u).toLocaleString()}`),M.map((e=>{if(-1===e.title.toLowerCase().indexOf(t)&&-1===e.appId.toLowerCase().indexOf(t))return;let a=!1;return I.forEach((t=>{A.find((e=>e.id===t)).onlyRenderIf(e)&&(a=!0)})),a?l.createElement(Ee,{app:e,key:e.appId}):void 0}))))},Ee=e=>{let{app:t}=e;const a=(0,v.Z)(),{appId:o,features:n,dateModified:r,title:i,icon:c,installs:s,scoreText:m,url:u,genre:h,screenshots:E,free:y,priceText:Z}=t,{discordUser:w}=U((e=>e.system));return l.createElement(g.ZP,{item:!0,xs:12,m:1},l.createElement(d.Z,{defaultHeight:800,stayRendered:!0},l.createElement("a",{href:u},l.createElement(x.Z,{style:{maxWidth:"100%"}},l.createElement(k.Z,{sx:{padding:"8px"}},l.createElement(p.Z,{hideScrollbar:!1,style:{height:"200px"}},E.map((e=>l.createElement("img",{src:e,alt:"App screenshot",loading:"lazy",key:e})))),n&&n.map((e=>l.createElement(A.Z,{component:f.Z,elevation:0,padding:.5,sx:{backgroundColor:T(e,a).color},key:e,mt:.5},l.createElement(b.Z,{color:a.palette.getContrastText(T(e,a).color)},T(e,a).label)))),l.createElement(f.Z,{display:"flex",mt:1},l.createElement(I.Z,{src:c,variant:"square",sx:{marginRight:1}}),l.createElement(f.Z,{display:"flex",flexDirection:"column"},l.createElement(b.Z,null,i),l.createElement(b.Z,{variant:"subtitle2"},o))),l.createElement(f.Z,{display:"flex",justifyContent:"space-between"},l.createElement(b.Z,{variant:"subtitle2"},"\u2b50",m),l.createElement(b.Z,{variant:"subtitle2"},"\ud83d\udce9 ",s)),l.createElement(f.Z,{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},l.createElement(b.Z,{variant:"subtitle2"},h),r&&l.createElement(b.Z,{variant:"subtitle2",whiteSpace:"nowrap"},"Entry last modified:"," ",new Date(r).toLocaleString())),!y&&l.createElement(b.Z,{variant:"subtitle2"},Z),(null==w?void 0:w.username)&&l.createElement(P.Z,{onClick:()=>W({dialog:"EDIT_APP",data:{appId:o}})},l.createElement(S.G,{icon:L.IwR})))))))},ye=()=>{const{colorMode:e}=(0,M.I)();return l.createElement(l.Fragment,null,l.createElement(G.zt,{store:oe},l.createElement(m.Z,{theme:(0,u.Z)({palette:{mode:e}})},l.createElement(he,null),l.createElement(fe,null))))},Ze="heroBanner_jHI5",we="buttons_Pntg";a(8440);function Pe(){const{siteConfig:e}=(0,r.Z)();return l.createElement("header",{className:(0,o.Z)("hero hero--primary",Ze)},l.createElement("div",{className:"container"},l.createElement(S.G,{icon:L.eSc,size:"4x"}),l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement(f.Z,{className:we,flex:"1",flexDirection:"column"},l.createElement(n.Z,{className:"button button--secondary button--lg",to:"/docs/lp-info"},"Important info about LP \ud83d\udca1"),l.createElement(f.Z,{m:1}),l.createElement(n.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"How to install & patch an app \ud83d\udcd6"),l.createElement(f.Z,{m:1}),l.createElement(n.Z,{className:"button button--secondary button--lg",to:"#apps"},"To the list \ud83d\ude80"))))}function ve(){const{siteConfig:e}=(0,r.Z)();return l.createElement(i.Z,{title:`${e.title}`,description:"A full overview of Lucky Patcher Compatibility with various apps."},l.createElement(Pe,null),l.createElement("main",null,l.createElement(ye,null)))}a(3636).vc.autoAddCss=!1}}]);