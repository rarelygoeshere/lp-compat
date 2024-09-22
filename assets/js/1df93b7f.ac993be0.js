(self.webpackChunklp_compat=self.webpackChunklp_compat||[]).push([[583],{7535:(e,t,a)=>{"use strict";a.d(t,{A:()=>o,b:()=>n});var l=a(8133);const n=function(e){return void 0===e&&(e=(0,l.A)()),{iap:{label:"Patch for in-app purchases works!",color:e.palette.success.main},ads:{label:"Remove ads patch works",color:e.palette.success.main},"no-ads":{label:"Remove ads patch does not work",color:e.palette.error.main},"partial-iap":{label:"Patch for in-app purchases partially compatible",color:e.palette.warning.main},"unclear-iap":{label:"Patch for in-app purchases needs verification - Try it out and post in Discord!",color:e.palette.warning.main},"no-iap":{label:"Patch for in-app purchases incompatible",color:e.palette.error.main},"anti-cheat":{label:"Anti-cheat in app",color:e.palette.error.main},"custom-patch":{label:"Custom patch available",color:e.palette.success.main},"dont-custom-patch":{label:"Custom patch is not working",color:e.palette.error.main},subscription:{label:"Subscription redeemable!",color:e.palette.success.main},"no-subscription":{label:"Subscription cannot be redeemed",color:e.palette.warning.main},repurchase:{label:"Some in-app purchases need to be redeemed after every restart",color:e.palette.warning.main},"account-login":{label:"Account login works!",color:e.palette.info.main},"3rd-party-login-broken":{label:"3rd-Party-Login systems (Meta, X, E-Mail) dysfunctional after patch",color:e.palette.warning.main},"facebook-login":{label:"Facebook login works!",color:e.palette.info.main},"facebook-login-broken":{label:"Facebook login broken",color:e.palette.warning.main},"facebook-login-no-app-installed":{label:"Facebook app must not be installed to login",color:e.palette.warning.main},transfer:{label:"App data can be transferred to another account",color:e.palette.info.main},"transfer-steam":{label:"App data can be transferred to Steam",color:e.palette.info.main},"transfer-ios":{label:"App data can be transferred to iOS",color:e.palette.info.main},multiplayer:{label:"Full Multiplayer - in-app purchases compatible",color:e.palette.primary.main},"partial-multiplayer":{label:"App has some multiplayer features - in-app purchases compatible",color:e.palette.primary.main},"no-multiplayer":{label:"Singleplayer only",color:e.palette.warning.main},"no-multiplayer-iap":{label:"Multiplayer in-app purchases broken",color:e.palette.warning.main},"app-broken":{label:"App becomes dysfunctional after patch",color:e.palette.error.main},"slightly-broken":{label:"Slightly broken, but playable",color:e.palette.warning.main},"too-many-iap-break":{label:"Buying too many in-app purchases will break the app!",color:e.palette.warning.main},"disable-data-on-lp-popup":{label:"Disable data connection when the LP purchase popup shows to get in-app purchases",color:e.palette.info.main},"restore-purchase":{label:"Compatible in-app purchases can be redeemed by restoring purchase and restarting the app",color:e.palette.info.main},"iap-before-load":{label:"Purchase in-app purchases before the app is fully loaded - Play anonymously",color:e.palette.info.main},"subscription-restore-purchase":{label:"Subscription can be redeemed by restoring purchase",color:e.palette.info.main},"dont-bother":{label:"Don't bother - This game is either grindy or uninteresting",color:e.palette.warning.main},"region-locked":{label:"If region locked, use Google Account from another region",color:e.palette.warning.main},"patch-before-first-launch":{label:"Patch this game before launching it for the first time!",color:e.palette.warning.main},"special-patch-full-offline":{label:"Select patch option: Make fully offline",color:e.palette.info.main},"special-patch-signature":{label:"Select patch option: Signature verification killer",color:e.palette.info.main},"special-patch-integrity-signature":{label:"Select patch option: Removes integrity check and signature verification",color:e.palette.info.main},"special-patch-fake-modified-apk":{label:"Select patch option: Fake a modified APK archive from the original",color:e.palette.info.main},"special-patch-lvl":{label:"Select patch option: Support patch for LVL and Inapp emulation",color:e.palette.info.main},"special-patch-reassembly-dex":{label:"Select patch option: Support patch for Inapp emulation (Reassembly Dex)",color:e.palette.info.main},"special-patch-revanced":{label:"You can use [ReVanced Manager](https://revanced.app/download) to patch this app",color:e.palette.info.main},"may-require-root":{label:"This app may require a root-level patch to work",color:e.palette.info.main},"root-iap":{label:"Patch for in-app purchases works only with rooted device",color:e.palette.info.main},"root-patch":{label:"Root patch available",color:e.palette.info.main},"root-patch-iap":{label:"App requires root to make in-app purchases patch work!",color:e.palette.info.main},"no-root-patch-iap":{label:"Root patch doesn't make in-app purchases available",color:e.palette.info.main},"apk-platinmods":{label:"Patched APK download available on Platinmods",color:e.palette.info.main},"apk-mobilism":{label:"Patched APK download available on Mobilism",color:e.palette.info.main},"apk-iosgods":{label:"Patched APK download available on iOSGods",color:e.palette.info.main},"appstore-happymod":{label:"Modded version on Happymod works",color:e.palette.info.main},"apk-apkpure":{label:"Download APK from APKPure, then patch",color:e.palette.info.main},"apk-aniyomi":{label:"The content in this app is likely available via [Aniyomi](https://aniyomi.org/). To make Manga, Manhwa and Webcomics available you can [add this repository](https://keiyoushi.github.io/docs/guides/getting-started#adding-the-extension-repo) to Aniyomi",color:e.palette.success.main},fmhy:{label:"The content in this app is likely available via [freemediaheckyeah](https://fmhy.pages.dev/)",color:e.palette.success.main}}},o=function(e,t){void 0===t&&(t=(0,l.A)());const a=n(t)[e.toLowerCase()]||{};if(e.indexOf("::")>-1){const l=e.split("::");a.color=t.palette[l[0]]?.main||t.palette.info.main,a.label=l[1]}return a}},4367:e=>{e.exports={getDiscordLoginUrl:(e,t)=>`https://discord.com/api/oauth2/authorize?client_id=${e}&redirect_uri=${encodeURI(t)}&response_type=token&scope=identify%20guilds%20guilds.members.read`}},8873:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Ue});var l=a(7953),n=a(8835),o=a(6489),r=a(8389),i=a(111),c=a(5265),s=a(3766);const p="features_DHSf";var d=a(8219),m=a(3469),u=a(9679),h=a(1676);const f=a.n(h)().create({baseURL:"https://luck.up.railway.app/",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Max-Age":600},withCredentials:!0}),g={appsListUpdated:Date.now(),appsListPage:0,discordUser:void 0,discordGuilds:[],dialogs:{EDIT_APP:{open:!1}}},b=(0,m.VP)("clear"),y=(0,m.Z0)({name:"system",initialState:g,reducers:{setAppsListUpdated(e,t){e.appsListUpdated=t.payload},setAppsListPage(e,t){e.appsListPage=t.payload},openDialog(e,t){e.dialogs[t.payload.dialog]={open:!0,...t.payload.data}},closeDialog(e,t){e.dialogs[t.payload.dialog]={open:!1}}},extraReducers:e=>{e.addCase(b,((e,t)=>g))}}),{setAppsListUpdated:E,setAppsListPage:A,openDialog:w,closeDialog:k}=y.actions,v=y.reducer,x=(0,m.zD)("apps/all",(async()=>(await f.get("/apps/all")).data)),I=(0,m.zD)("apps/get",(async e=>{let{appId:t}=e;return(await f.get(`apps/get/${t}`)).data})),S=(0,m.zD)("apps/page",(async(e,t)=>{let{page:a}=e;const l=(await f.get(`apps/page/${a}/5000`)).data;return t.dispatch(A(a+1)),l})),C=(0,m.zD)("apps/count",(async()=>(await f.get("apps/count")).data)),P=(0,m.zD)("apps/add",(async e=>{let{app:t,discordUser:a}=e;return(await f.post("apps/add/",{app:t,discordUser:a})).data})),D=(0,m.zD)("apps/edit",(async e=>{let{app:t,discordUser:a}=e;return(await f.post("apps/edit/",{app:t,discordUser:a})).data})),L=(0,m.zD)("playstore/get",(async e=>{let{appId:t}=e;return(await f.get(`/playstore/get/${t}`)).data})),T=(0,m.zD)("playstore/search",(async e=>{let{query:t}=e;return(await f.get(`/playstore/search/${t}`)).data})),U=[],R=(0,m.Z0)({name:"apps",initialState:U,reducers:{},extraReducers:e=>{e.addCase(b,((e,t)=>U)),e.addCase(x.fulfilled,((e,t)=>t.payload)),e.addCase(I.fulfilled,((e,t)=>{const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(P.fulfilled,((e,t)=>{console.log("addapp result",t.payload);const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(D.fulfilled,((e,t)=>{console.log("editApp result",t.payload);const a=e.findIndex((e=>t.payload.appId===e.appId));a<0&&e.push(t.payload),e[a]=t.payload})),e.addCase(S.fulfilled,((e,t)=>[...e,...t.payload]))}}).reducer,N=(0,m.U1)({reducer:(0,u.HY)({apps:R,system:v})});var _=a(7190),M=a(8711),F=a(8133),O=a(5460),j=a(8753),z=a(1017),$=a(5075),q=a(5954),G=a(9259),H=a(5548),K=a(2241),W=a(3272),B=a(658),Y=a(1769),V=a(8372),Q=a(4122),J=a(1870),Z=a(1203),X=a(2582),ee=a(3061),te=a(1834),ae=a(2978),le=a(2935),ne=a(7535),oe=a(2198),re=a(1883);const ie=re.wA,ce=re.d4;var se=a(8732),pe=a(8376),de=a(194),me=a(5864),ue=a(605),he=a(8664),fe=a(5201),ge=a(4367);const be=()=>{const[e,t]=(0,fe.Mj)("storedDiscordUserAccessToken",""),[a,n]=(0,fe.Mj)("storedDiscordUserTokenType","");(0,l.useEffect)((()=>{let l,o;const r=new URLSearchParams(window.location.hash.slice(1));if([l,o]=[r.get("access_token"),r.get("token_type")],l&&o&&(t(l),n(o),e&&a&&'""'!==localStorage.getItem("storedDiscordUserAccessToken")&&'""'!==localStorage.getItem("storedDiscordUserTokenType"))){const e=window.location.href.split("#")[0];location.replace(e)}}),[e,a]);const{data:o}=(0,s.useQuery)("discord",(async()=>(await fetch("https://discord.com/api/v9/users/@me",{method:"GET",headers:{authorization:`${a} ${e}`}})).json()));(0,l.useEffect)((()=>{"401: Unauthorized"===o?.message&&(t(""),n(""))}),[o?.message]);const r=Boolean(o?.username&&o?.id);return{discordUser:o,isLoggedIn:r}},ye=e=>{let{editState:t,field:a,handleChange:n}=e;return l.createElement(K.A,{label:a,value:t[a],onChange:e=>n(a,e.target.value)})},Ee=e=>{let{result:t,handleChange:a}=e;return l.createElement(l.Fragment,null,l.createElement(he.A,{display:"flex"},l.createElement("img",{src:t.icon,width:"100",height:"100"}),l.createElement(q.A,{onClick:()=>{a("appId",t.appId),a("title",t.title),a("icon",t.icon)}},"Use this app")),l.createElement(j.A,null,"ID: ",t.appId," "),l.createElement(j.A,null,"Title: ",t.title),+t.price&&l.createElement(j.A,null,"Price: ",t.price),l.createElement(he.A,{m:1}))},Ae=e=>{let{open:t,appId:a=""}=e;const n=ie(),o=ce((e=>e.apps.find((e=>e.appId===a))))||{appId:a};console.log("initialAppData",o);const[r,i]=(0,l.useState)({...o}),[s,p]=(0,l.useState)(!1),[d,m]=(0,l.useState)({}),[u,h]=(0,l.useState)([]),[f,g]=(0,l.useState)([]),b=(0,z.A)(),y=(0,ne.b)(b),{discordUser:E,isLoggedIn:A}=be();console.log("editState",r);const w=(e,t)=>{i((a=>({...a,[e]:t,_id:void 0})))},v=()=>{i({}),n(k({dialog:"EDIT_APP"}))};(0,l.useEffect)((()=>{t&&i({...o})}),[t]),(0,l.useEffect)((()=>{(r.appId||r.title)&&(n(L({appId:r.appId})).then((e=>m(e.payload))),n(T({query:r.title})).then((e=>h(e.payload))),n(T({query:r.appId})).then((e=>g(e.payload))))}),[r.appId,r.title]);return t&&!A&&(alert("You're not logged in!"),k()),l.createElement(se.A,{fullScreen:!0,open:t,onClose:v},t&&0!==Object.keys(r).length&&l.createElement(l.Fragment,null,l.createElement(pe.A,{sx:{position:"relative"}},l.createElement(de.A,null,l.createElement(Y.A,{edge:"start",color:"inherit",onClick:v,"aria-label":"close"},l.createElement(ee.g,{icon:ae.GRI})),l.createElement(j.A,{sx:{ml:2,flex:1},variant:"h6",component:"div"},"Add or edit app"),l.createElement(q.A,{autoFocus:!0,color:"inherit",onClick:async()=>{const e=E;let t=await n(P({app:r,discordUser:e}));"fulfilled"===t.meta.requestStatus?(console.log("addApp fulfilled"),v()):(t=await n(D({app:r,discordUser:e})),"fulfilled"===t.meta.requestStatus?(console.log("editApp fulfilled"),v()):p(!0))}},"save"))),l.createElement(he.A,{m:1}),l.createElement(j.A,null,"After patching you may have to refresh the data (hit the refresh button under the filter section)."),s&&l.createElement(me.A,{severity:"error",onClose:()=>{p(!1)}},"That didn't work. Make sure you prefix any custom features with ::",l.createElement("br",null),"Does the app ",r.appId," exist on the Play Store?"),!d?.title&&l.createElement(me.A,{severity:"info"},"Could not find an app with this ID.",l.createElement("br",null),"Does the app ",r.appId," exist on the Play Store?"),l.createElement(he.A,{m:1}),l.createElement(ye,{field:"appId",editState:r,handleChange:w}),l.createElement(he.A,{m:1}),d?.title&&l.createElement(j.A,null,`Searched app ID ${r.appId} and found app in play store with title ${d.title}`),l.createElement(he.A,{m:1}),l.createElement(ye,{field:"title",editState:r,handleChange:w}),l.createElement(j.A,null,"You can also use this title field to search for apps."),l.createElement(he.A,{m:1}),l.createElement(ye,{field:"icon",editState:r,handleChange:w}),l.createElement(j.A,null,"The icon URL can be obtained by going to ",l.createElement("a",{href:r.url,target:"_blank"},"the app's Google Play page")," and copying the icon image address."),l.createElement(he.A,{m:1}),l.createElement(j.A,null,"You can select various pre-defined features from the list or add your own. ",l.createElement("br",null)," Please try to always at least choose one of iap, unclear-iap or no-iap so that users can filter the list. ",l.createElement("br",null),"You can add custom features by prefixing them with :: ",l.createElement("br",null),"However, it must be added after a pre-defined feature is added first. ",l.createElement("br",null),"If you did it right, the result should look like this:"),l.createElement(he.A,{m:1}),l.createElement(he.A,{m:1},l.createElement("img",{src:"/lp-compat/img/Custom_features_Example.png"})),l.createElement(he.A,{m:1}),"If this page isn't showing you any results when you search for app titles, just try again in an hour or so, as there's likely been too many requests made at the time.",l.createElement(he.A,{m:1}),"Notes for special patch features: ",l.createElement("br",null),"special-patch-fake-modified-apk: This patch must always be applied to the original unmodified APK. If you want to patch it multiple times you must apply the patch every time you modify it",l.createElement(ue.A,{multiple:!0,id:"tags-filled",options:Object.keys(y).map((e=>e)),freeSolo:!0,value:r.features,onChange:(e,t)=>{console.log("onChange",t),w("features",t)},renderTags:(e,t)=>e.map(((e,a)=>l.createElement(B.A,(0,c.A)({variant:"outlined",label:e},t({index:a}))))),renderInput:e=>l.createElement(K.A,(0,c.A)({},e,{variant:"filled",label:"Features",placeholder:"Features"})),renderOption:(e,t)=>l.createElement(he.A,(0,c.A)({component:"li",flexDirection:"column"},e),l.createElement(j.A,null,y[t].label),l.createElement(j.A,{variant:"caption"},t))}),l.createElement(he.A,{m:1}),u?.length>0&&l.createElement(l.Fragment,null,l.createElement(j.A,null,"Search results by title:"),l.createElement(he.A,{display:"flex",flexDirection:"column"},u.map((e=>l.createElement(Ee,{result:e,handleChange:w}))))),l.createElement(he.A,{m:1}),f?.length>0&&l.createElement(l.Fragment,null,l.createElement(j.A,null,"Search results by ID:"),l.createElement(he.A,{display:"flex",flexDirection:"column"},f.map((e=>l.createElement(Ee,{result:e,handleChange:w})))))))},we=()=>{const{dialogs:e}=ce((e=>e.system));return l.createElement(l.Fragment,null,e?.EDIT_APP.open&&l.createElement(Ae,e?.EDIT_APP))};var ke=a(7576);const ve=new s.QueryClient,xe=(0,_.Ay)(ke.A)((e=>{let{theme:t,backgroundColor:a}=e;return`\n  && {\n    background-color: transparent;\n    color: ${t.palette.getContrastText(a)};\n    && a {\n      color: ${t.palette.getContrastText(a)};\n      &::after {\n        content: "";\n        display: inline-block;\n        width: 13px;\n        height: 13px;\n        opacity: 0.6;\n        margin: 4px 4px 0px 4px;\n        background: url(/lp-compat/img/link-solid.svg) center no-repeat;\n      }\n    }\n  }\n`})),Ie=[{icon:l.createElement(O.A,{flex:"1"},l.createElement(O.A,{className:"fa-layers fa-fw"},l.createElement(j.A,{className:"fa-layers-text fa-inverse",color:"#607d8b",fontWeight:900,fontSize:30},"ROOT"),l.createElement(ee.g,{icon:ae.Dfk,color:"#e51c23",size:"lg",opacity:.9}))),description:l.createElement(j.A,null,'No root access is required for these patches, except for apps in the "Root" category.')},{icon:l.createElement(O.A,{flex:"1"},l.createElement(O.A,{className:"fa-layers fa-fw",mr:4},l.createElement(ee.g,{icon:ae.O0t,color:"#607d8b"}),l.createElement(ee.g,{icon:ae.Dfk,color:"#e51c23",size:"lg",opacity:.9})),l.createElement(O.A,{className:"fa-layers fa-fw",ml:4},l.createElement(ee.g,{icon:ae.H37,color:"#607d8b"}),l.createElement(ee.g,{icon:ae.wd3,color:"#e51c23",size:"xs",opacity:.9,transform:"down-4 right-8"}))),description:l.createElement(j.A,null,"Apps are patched using"," ",l.createElement(o.A,{href:"/docs/intro"},"the default IAP and Adblock patches"),".")},{icon:l.createElement(ee.g,{icon:ae.UNK,color:"#607d8b"}),description:l.createElement(j.A,null,"Apps not on the list can work with LP, and many might work with specific patches. The list's entries can also be inaccurate.",l.createElement("br",null),"Feel free to try patching apps and update the list!")},{icon:l.createElement(ee.g,{icon:te._2G,color:"#607d8b"}),description:l.createElement(j.A,null,"Found something? Create an"," ",l.createElement(o.A,{href:"https://github.com/Flixbox/lp-compat/issues"},"issue")," or post on the ",l.createElement(o.A,{href:"https://discord.gg/RS5ddYf7mw"},"Discord"),"!")},{icon:l.createElement(ee.g,{icon:ae.iHh,color:"#607d8b"}),description:l.createElement(j.A,null,"Check out the"," ",l.createElement(o.A,{href:"/docs/honorable-mentions"},"honorable mentions")," too!")}];function Se(e){let{icon:t,description:a}=e;return l.createElement("div",{className:(0,n.A)("col col--4")},l.createElement(O.A,{className:"text--center",height:"70px",mt:3},t),l.createElement("div",{className:"text--center padding-horiz--md"},a))}const Ce=()=>{const e=ie(),[t,a]=(0,fe.Mj)("appsTitleFilter",""),[n,o]=(0,fe.Mj)("apps-sorting","installs-asc"),[r,i]=((0,z.A)(),(0,l.useState)(!1)),[s,m]=(0,l.useState)(0),u=ce((e=>e.apps)),{appsListUpdated:h}=ce((e=>e.system)),{discordUser:f,isLoggedIn:g}=be();if(g){document.getElementById("discord-login").innerHTML=f.username}(0,l.useEffect)((()=>{e(C()).then((e=>{m(e.payload)}))}),[]);const y=[{id:"compatible",title:"Compatible apps",onlyRenderIf:e=>e&&e.features?.indexOf("iap")>-1},{id:"unclear-iap",title:"Uncategorized",onlyRenderIf:e=>e&&-1===e.features?.indexOf("iap")&&-1===e.features?.indexOf("no-iap")},{id:"incompatible",title:"Incompatible apps",onlyRenderIf:e=>e&&e.features?.indexOf("no-iap")>-1}],[E,A]=(0,fe.Mj)("onlyShowTheseVisibilitySettings",y.map((e=>e.id)));n||o("installs-asc");const k={"name-asc":{title:"Sort by name",getSortedApps:()=>[...u].sort(((e,t)=>e&&t&&e.title.localeCompare(t.title)))},"installs-asc":{title:"Sort by downloads",getSortedApps:()=>[...u].sort(((e,t)=>e&&t&&t.minInstalls-e.minInstalls))},"date-modified":{title:"Sort by last modified",getSortedApps:()=>[...u].sort(((e,t)=>e&&t&&t.dateModified-e.dateModified))}},v=k[n].getSortedApps(),I=u.length>=s;(0,l.useEffect)((()=>{r||(I?r&&i(!1):(!r&&i(!0),e(x()).then((()=>{i(!1)}))))}),[u,r,s]);const S=v.filter((e=>{if(!e||!e.appId)return;if(-1===e.title.toLowerCase().indexOf(t)&&-1===e.appId.toLowerCase().indexOf(t))return;let a=!1;return E.forEach((t=>{y.find((e=>e.id===t)).onlyRenderIf(e)&&(a=!0)})),a?e:void 0}));return l.createElement("section",{className:p},l.createElement("div",{className:"container"},l.createElement("div",{className:"row fa-3x"},Ie.map(((e,t)=>l.createElement(Se,(0,c.A)({key:t},e))))),l.createElement(O.A,{m:8}),l.createElement(O.A,{className:"row",display:"flex",flexDirection:"column"},l.createElement($.Ay,{container:!0},l.createElement(j.A,{variant:"h3"},"Filter apps"),l.createElement(O.A,{flexGrow:1}),l.createElement(O.A,{display:"flex",maxWidth:"100%",style:{flexFlow:"row wrap"}},g?l.createElement(q.A,{variant:"outlined",style:{marginRight:4,height:"50px",minWidth:"120px"},onClick:()=>{e(w({dialog:"EDIT_APP",data:{}}))}},l.createElement(ee.g,{icon:ae.vkJ,style:{marginRight:8}}),"New app"):l.createElement(q.A,{variant:"outlined",style:{marginRight:4,height:"50px",minWidth:"120px"},href:(0,ge.getDiscordLoginUrl)("1021002998069067777","https://flixbox.github.io/lp-compat/")},l.createElement(ee.g,{icon:te._2G,style:{marginRight:5}}),"Login"),l.createElement(q.A,{variant:"outlined",onClick:async()=>{const e=await fetch("https://luck.up.railway.app/apps/all"),t=await e.json(),a=JSON.stringify(t,null,2),l=new Blob([a],{type:"application/json"}),n=URL.createObjectURL(l),o=document.createElement("a");o.href=n,o.download="lucky-patcher-app-compatibility.json",document.body.appendChild(o),o.click(),document.body.removeChild(o)},style:{marginRight:4,height:"50px",minWidth:"120px"}},l.createElement(ee.g,{icon:ae.cbP,size:"lg",opacity:.9,style:{marginRight:8}}),"JSON"),l.createElement(G.A,{value:n,onChange:e=>o(e.target.value),style:{height:"50px"}},Object.entries(k).map((e=>l.createElement(H.A,{value:e[0],key:e[0]},e[1].title)))))),l.createElement(O.A,{m:.4}),l.createElement(K.A,{placeholder:"Filter app title or ID",value:t,onChange:e=>a(e.currentTarget.value.toLowerCase())}),y.map((e=>{let{id:t,title:a}=e;return l.createElement(W.Ay,{key:t},l.createElement(B.A,{label:a,onClick:()=>A((0,le.xor)(E,[t])),icon:l.createElement(ee.g,{icon:-1!==E.indexOf(t)?ae.pS3:ae.k6j,color:"#e51c23",size:"lg",opacity:.9})}))}))),l.createElement("div",{id:"apps"}),l.createElement(j.A,null,`Loaded ${u.length} out of ${s} apps!`,r&&" Loading more...",l.createElement("br",null),l.createElement(Y.A,{onClick:()=>(localStorage.clear(),void e(b()))},l.createElement(ee.g,{icon:ae.Vpu})),`Last refreshed: ${new Date(h).toLocaleString()}`),r&&l.createElement(V.A,null),l.createElement(d.aY,{style:{height:"600px"},totalCount:S.length,itemContent:e=>l.createElement(Pe,{app:S[e]})})))},Pe=e=>{let{app:t}=e;const a=(0,z.A)();if(!t||!t.appId)return;const{appId:n,features:o,dateModified:r,title:i,icon:c,installs:p,scoreText:d,url:m,genre:u,screenshots:h,free:g,priceText:b,editedBy:y,adSupported:E,offersIAP:A,IAPRange:k}=t,{isLoggedIn:v}=be(),x=ie(),{isStaff:I}=((0,re.Pj)(),(()=>{const{data:e}=(0,s.useQuery)("staff",(async()=>(await f.get("/staff/all")).data));return{staff:e,isStaff:t=>e&&e.find((e=>e.id===t))}})());return l.createElement($.Ay,{item:!0,xs:12,m:1},l.createElement(Q.A,{style:{maxWidth:"100%"}},l.createElement(J.A,{sx:{padding:"8px"}},l.createElement("a",{href:m},l.createElement(O.A,{display:"flex",mt:1},l.createElement(Z.A,{src:c,variant:"square",sx:{marginRight:1}}),l.createElement(O.A,{display:"flex",flexDirection:"column"},l.createElement(j.A,null,i),l.createElement(j.A,{variant:"subtitle2"},n)))),l.createElement(O.A,{display:"flex",justifyContent:"space-between"},d&&l.createElement(j.A,{variant:"subtitle2"},"\u2b50",d),p&&l.createElement(j.A,{variant:"subtitle2"},"\ud83d\udce9 ",p),!1===A&&l.createElement(j.A,{variant:"subtitle2"},"\ud83d\udcb8\ud83d\udeab No IAP"),k&&l.createElement(j.A,{variant:"subtitle2"},"\ud83d\udcb8 ",k),!0===E&&l.createElement(j.A,{variant:"subtitle2"},"\ud83c\udfa5 Contains ads"),!1===E&&l.createElement(j.A,{variant:"subtitle2"},"\ud83c\udfa5\ud83d\udeab No ads")),l.createElement(O.A,{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},l.createElement(j.A,{variant:"subtitle2"},u),r&&l.createElement(j.A,{variant:"subtitle2",whiteSpace:"nowrap"},"Entry last edited: ",new Date(r).toLocaleString()),y&&l.createElement(j.A,{variant:"subtitle2",whiteSpace:"nowrap"},"Modified by:"," ",I(y.userId)&&l.createElement(B.A,{size:"small",avatar:l.createElement(ee.g,{icon:ae.fLc,style:{color:"#7289da"}}),label:"Staff"})," ",y.userName," (",y.userId,")")),!g&&l.createElement(j.A,{variant:"subtitle2"},b),o&&o.map((e=>l.createElement(X.A,{component:O.A,elevation:0,padding:.5,sx:{backgroundColor:(0,ne.A)(e,a).color},key:e,mt:.5},l.createElement(j.A,null,l.createElement(xe,{skipHtml:!0,backgroundColor:(0,ne.A)(e,a).color,wrapperElement:{"data-color-mode":"light"},source:(0,ne.A)(e,a).label})))))),v&&l.createElement(Y.A,{onClick:()=>{x(w({dialog:"EDIT_APP",data:{appId:n}}))}},l.createElement(ee.g,{icon:ae.hpd}))))},De=()=>{const{colorMode:e}=(0,oe.G)();return l.createElement(s.QueryClientProvider,{client:ve},l.createElement(re.Kq,{store:N},l.createElement(M.A,{theme:(0,F.A)({palette:{mode:e},components:{MuiChip:{styleOverrides:{labelSmall:{paddingTop:"3px"}}},MuiTextField:{defaultProps:{variant:"outlined"}}}})},l.createElement(Ce,null),l.createElement(we,null))))},Le={heroBanner:"heroBanner_jHI5",buttons:"buttons_Pntg"};a(6567);function Te(){const{siteConfig:e}=(0,r.A)();return l.createElement("header",{className:(0,n.A)("hero hero--primary",Le.heroBanner)},l.createElement("div",{className:"container"},l.createElement(ee.g,{icon:ae.OGi,size:"4x"}),l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement(O.A,{className:Le.buttons,flex:"1",flexDirection:"column"},l.createElement(o.A,{className:"button button--secondary button--lg",to:"/docs/lp-info"},"Important info about LP \ud83d\udca1"),l.createElement(O.A,{m:1}),l.createElement(o.A,{className:"button button--secondary button--lg",to:"/docs/intro"},"How to install & patch an app \ud83d\udcd6"),l.createElement(O.A,{m:1}),l.createElement(o.A,{className:"button button--secondary button--lg",to:"/docs/favourites"},"Community Favourites \u2b50"),l.createElement(O.A,{m:1}),l.createElement(o.A,{className:"button button--secondary button--lg",to:"#apps"},"To the list \ud83d\ude80"))))}function Ue(){const{siteConfig:e}=(0,r.A)();return l.createElement(i.A,{title:`${e.title}`,description:"A full overview of Lucky Patcher Compatibility with various apps."},l.createElement(Te,null),l.createElement("main",null,l.createElement(De,null)))}a(3196).$W.autoAddCss=!1}}]);