(this["webpackJsonpcyph-dapp"]=this["webpackJsonpcyph-dapp"]||[]).push([[0],{1166:function(e,t){},1220:function(e,t,n){},1221:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(49),o=n.n(c),l=n(36),i=n(30),s=n(56),u=n(33),m={local:{chainId:"testing",chainName:"Testing",addressPrefix:"cosmos",rpcUrl:"http://localhost:26657",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025},sandynet:{chainId:"sandynet-1",chainName:"sandynet-1",addressPrefix:"wasm",rpcUrl:"https://rpc.sandynet.cosmwasm.com:443",httpUrl:"https://lcd.sandynet.cosmwasm.com",faucetUrl:"https://faucet.sandynet.cosmwasm.com",feeToken:"ubay",stakingToken:"umaya",coinMap:{ubay:{denom:"BAY",fractionalDigits:6},umaya:{denom:"MAYA",fractionalDigits:6}},gasPrice:.025}},d=Object(i.c)(m),p=n(37),f=(n(113),n(39)),b=n.n(f),E=n(1226),h=n(1227),g=n(1228),j=n(4),w=n.n(j),O=n(40),y=n(112),v=n(548);function k(){throw new Error("Not yet initialized")}var x={initialized:!1,address:"",config:{},init:k,getSigner:k,getClient:k},S=a.createContext(x),C=function(){return a.useContext(S)};function P(e){var t=e.config,n=e.children,r=Object(a.useState)(t),c=Object(p.a)(r,2),o=c[0],l=(c[1],Object(a.useState)()),i=Object(p.a)(l,2),s=i[0],u=i[1],m=Object(a.useState)(),d=Object(p.a)(m,2),f=d[0],b=d[1],E=Object(a.useState)(""),h=Object(p.a)(E,2),g=h[0],j=h[1],k=Object(y.a)(Object(y.a)({},x),{},{init:u}),C=Object(a.useState)(k),P=Object(p.a)(C,2),T=P[0],A=P[1];return Object(a.useEffect)((function(){s&&function(){var e=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.SigningCosmWasmClient.connectWithSigner(o.rpcUrl,s);case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,o]),Object(a.useEffect)((function(){s&&function(){var e=Object(O.a)(w.a.mark((function e(){var t,n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getAccounts();case 2:t=e.sent,n=Object(p.a)(t,1),a=n[0],j(a.address);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s]),Object(a.useEffect)((function(){s&&f&&g&&function(){var e=Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A({initialized:!0,address:g,config:o,init:function(){},getSigner:function(){return s},getClient:function(){return f}});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,f,g,o]),a.createElement(S.Provider,{value:T},n)}var T=n(227),A=n(549),N={key:"",setKey:function(e){},encrypt:function(e){return""},decrypt:function(e){return""}},B=a.createContext(N),q=function(){return a.useContext(B)};function U(e){var t=e.children,n=Object(a.useState)(""),r=Object(p.a)(n,2),c=r[0],o=r[1],l=Object(y.a)(Object(y.a)({},N),{},{setKey:o}),i=Object(a.useState)(l),s=Object(p.a)(i,2),u=s[0],m=s[1];return Object(a.useEffect)((function(){c&&m({key:c,setKey:o,encrypt:function(e){return Object(T.encrypt)(e,c).toString()},decrypt:function(e){return Object(T.decrypt)(e,c).toString(A.enc.Utf8)}})}),[c]),a.createElement(B.Provider,{value:u},t)}var K,Y,z,D,M,V=n(157),H=n(32),I=b.a.Text,W=Object(H.b)(l.d)(K||(K=Object(V.a)(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]))),_=Object(H.b)(l.d)(Y||(Y=Object(V.a)(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]))),J=Object(H.b)(l.d)(z||(z=Object(V.a)(["\n  & > * {\n    --gap: var(--s4);\n  }\n"]))),L=Object(H.b)(I)(D||(D=Object(V.a)(["\n  display: block;\n  font-weight: lighter;\n"]))),F=Object(H.b)(I)(M||(M=Object(V.a)(["\n  color: var(--color-red);\n"]))),G=b.a.Title;function Q(){var e=Object(i.i)(),t=e.error,n=e.setError,c=C(),o=c.address,u=c.getClient,m=q().decrypt,d=Object(a.useState)(),f=Object(p.a)(d,2),j=f[0],w=f[1],O=Object(a.useState)(!1),y=Object(p.a)(O,2),v=y[0],k=y[1];return Object(a.useEffect)((function(){var e=u(),t={get_all:{owner:o}};k(!0),e.queryContractSmart("wasm10ruqujapa6cg5lj5hufrqnpacwt78j445sltcw",t).then((function(e){w(e),k(!1)})).catch((function(e){console.error(e),n(Error(e).message),k(!1)}))}),[u,n,o]),v?r.a.createElement(l.b,{loadingText:"Loading passwords..."}):r.a.createElement(l.c,null,r.a.createElement(W,null,r.a.createElement(J,null,r.a.createElement(G,{level:2},"CYPH"),r.a.createElement(L,null,"Your Passwords:"),j&&j.entries.map((function(e){var t=e.name,n=e.password;return r.a.createElement(b.a,null,r.a.createElement(L,null,"Name: ",t),r.a.createElement(L,null,"Password: ",m(n)),r.a.createElement(s.b,{to:"".concat("/edit","/").concat(t)},r.a.createElement(E.a,null)),r.a.createElement(s.b,{to:"".concat("/delete","/").concat(t)},r.a.createElement(h.a,null)))})),t&&r.a.createElement(F,null,t),r.a.createElement(s.b,{to:"/add"},r.a.createElement(g.a,null)))))}n(134);var R=n(62),X=n.n(R),Z=b.a.Title;function $(){var e=Object(u.g)(),t=Object(i.i)(),n=t.error,c=t.setError,o=t.clearError,s=Object(a.useState)(!1),m=Object(p.a)(s,2),f=m[0],E=m[1],h=C();function g(){return(g=Object(O.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,e.prev=1,t.keplr){e.next=4;break}throw Error("Keplr extension not found, please install browser extension");case 4:return e.next=6,t.keplr.experimentalSuggestChain(Object(i.b)(d));case 6:return e.next=8,t.keplr.enable(d.chainId);case 8:return E(!0),o(),e.next=12,t.getOfflineSigner(d.chainId);case 12:n=e.sent,h.init(n),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(1),console.error(e.t0),"string"===typeof e.t0?c(Error(e.t0).message):e.t0 instanceof Error&&c(e.t0.message),E(!1);case 21:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){h.initialized&&e.push("/key")}),[h.initialized]),f?r.a.createElement(l.b,{loadingText:"Loading Cyph..."}):r.a.createElement(l.c,null,r.a.createElement(W,null,r.a.createElement(_,null,r.a.createElement(b.a,null,r.a.createElement(Z,{level:2},"CYPH"),r.a.createElement(L,null,"A Decentralized End to End Encrypted Password Manager"),r.a.createElement(L,null,"Please connect your Keplr wallet to continue.")),n&&r.a.createElement(F,null,n),r.a.createElement(X.a,{type:"primary",shape:"round",onClick:function(){return g.apply(this,arguments)}},"Connect Wallet")),r.a.createElement(L,null,"Built with \xa0",r.a.createElement("a",{href:"https://github.com/CosmWasm/cosmwasm",target:"_blank",rel:"noreferrer noopener"},"CosmWasm"),"\xa0 and \xa0",r.a.createElement("a",{href:"https://github.com/cosmos/cosmjs",target:"_blank",rel:"noreferrer noopener"},"CosmJS"),"\xa0 by \xa0",r.a.createElement("a",{href:"https://github.com/SavDont/cyph-dapp",target:"_blank",rel:"noreferrer noopener"},"@savdont"),"."),r.a.createElement(L,null,"This code has not been audited or reviewed by a cryptographer. This app is purely meant to be a proof of concept. Please upload passwords to the public blockchain at your own risk.")))}var ee=n(58),te=n(1225),ne=n(552),ae=n(1229),re=n(1230);function ce(e){var t=e.setNewName,n=e.setNewPassword,a=e.addButtonAction,c=Object(u.g)();return r.a.createElement(ee.c,{initialValues:{name:"",password:""},onSubmit:a},(function(e){return r.a.createElement(te.a,null,r.a.createElement(ne.a,{name:"name"},r.a.createElement(ae.a,{name:"name",placeholder:"Enter name",onChange:function(e){t(e.target.value)}})),r.a.createElement(ne.a,{name:"password"},r.a.createElement(ae.a.Password,{name:"password",placeholder:"Enter password",onChange:function(e){n(e.target.value)}})),r.a.createElement(re.a,{onClick:function(){return c.goBack()}}),r.a.createElement(X.a,{type:"primary",shape:"round",onClick:a,disabled:!(e.isValid&&e.dirty)},"Submit"))}))}var oe=b.a.Title;function le(){var e=Object(i.i)(),t=e.error,n=e.setError,c=Object(u.g)(),o=C(),s=o.address,m=o.getClient,d=Object(a.useState)(!1),f=Object(p.a)(d,2),b=f[0],E=f[1],h=q().encrypt,g=Object(a.useState)(""),j=Object(p.a)(g,2),w=j[0],O=j[1],y=Object(a.useState)(""),v=Object(p.a)(y,2),k=v[0],x=v[1];return b?r.a.createElement(l.b,{loadingText:"Adding password..."}):r.a.createElement(l.c,null,r.a.createElement(W,null,r.a.createElement(J,null,r.a.createElement(oe,{level:2},"CYPH"),r.a.createElement(L,null,"Add new password."),r.a.createElement(ce,{setNewName:O,setNewPassword:x,addButtonAction:function(){E(!0);var e=m(),t={add:{name:w,password:h(k)}};e.execute(s,"wasm10ruqujapa6cg5lj5hufrqnpacwt78j445sltcw",t,{amount:[],gas:"200000"}).then((function(){c.push("/home"),E(!1)})).catch((function(e){console.error(e),n(Error(e).message),E(!1)}))}}),t&&r.a.createElement(F,null,t))))}function ie(e){var t=e.setKey,n=e.submitButtonAction;return r.a.createElement(ee.c,{initialValues:{key:""},onSubmit:n},(function(e){return r.a.createElement(te.a,null,r.a.createElement(ne.a,{name:"key"},r.a.createElement(ae.a,{name:"key",placeholder:"Enter master key",onChange:function(e){t(e.target.value)}})),r.a.createElement(X.a,{type:"primary",shape:"round",onClick:n,disabled:!(e.isValid&&e.dirty)},"Submit"))}))}var se=b.a.Title;function ue(){var e=q(),t=Object(u.g)();return r.a.createElement(l.c,null,r.a.createElement(W,null,r.a.createElement(J,null,r.a.createElement(se,{level:2},"CYPH"),r.a.createElement(L,null,"Please enter your master key below."),r.a.createElement(L,null,"This will be used to encrypt and decrypt your passwords commited to the blockchain."),r.a.createElement(ie,{setKey:e.setKey,submitButtonAction:function(){return t.push("/home")}}))))}function me(e){var t=e.setNewPassword,n=e.editButtonAction,a=Object(u.g)();return r.a.createElement(ee.c,{initialValues:{password:""},onSubmit:n},(function(e){return r.a.createElement(te.a,null,r.a.createElement(ne.a,{name:"password"},r.a.createElement(ae.a.Password,{name:"password",placeholder:"Enter password",onChange:function(e){t(e.target.value)}})),r.a.createElement(re.a,{onClick:function(){return a.goBack()}}),r.a.createElement(X.a,{type:"primary",shape:"round",onClick:n,disabled:!(e.isValid&&e.dirty)},"Submit"))}))}var de=b.a.Title;function pe(){var e=Object(u.h)().name,t=Object(i.i)(),n=t.error,c=t.setError,o=Object(u.g)(),s=C(),m=s.address,d=s.getClient,f=Object(a.useState)(!1),b=Object(p.a)(f,2),E=b[0],h=b[1],g=q().encrypt,j=Object(a.useState)(""),w=Object(p.a)(j,2),O=w[0],y=w[1];return E?r.a.createElement(l.b,{loadingText:"Updating password..."}):r.a.createElement(l.c,null,r.a.createElement(W,null,r.a.createElement(J,null,r.a.createElement(de,{level:2},"CYPH"),r.a.createElement(L,null,"Set new password for ",e,":"),r.a.createElement(me,{setNewPassword:y,editButtonAction:function(){h(!0);var t=d(),n={edit:{name:e,password:g(O)}};t.execute(m,"wasm10ruqujapa6cg5lj5hufrqnpacwt78j445sltcw",n,{amount:[],gas:"200000"}).then((function(){o.push("/home"),h(!1)})).catch((function(e){console.error(e),c(Error(e).message),h(!1)}))}}),n&&r.a.createElement(F,null,n))))}function fe(){var e=Object(u.h)().name,t="Deleting password "+e+"...",n=Object(i.i)().setError,a=Object(u.g)(),c=C(),o=c.address,s=c.getClient;return function(e){var t={delete:{name:e}};s().execute(o,"wasm10ruqujapa6cg5lj5hufrqnpacwt78j445sltcw",t,{amount:[],gas:"200000"}).then((function(){a.push("/home")})).catch((function(e){console.error(e),n(Error(e).message),a.push("/home")}))}(e),r.a.createElement(l.b,{loadingText:t})}function be(e){var t=e.authPath,n=e.children,a=e.location;return C().initialized?r.a.createElement(u.d,{location:a},n):r.a.createElement(u.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function Ee(){return r.a.createElement(i.a,null,r.a.createElement(P,{config:d},r.a.createElement(U,null,r.a.createElement(l.a,null),r.a.createElement(s.a,{basename:"/cyph-dapp"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:$}),r.a.createElement(u.b,{exact:!0,path:"/login",component:$}),r.a.createElement(u.b,{exact:!0,path:"/key",component:ue}),r.a.createElement(be,{authPath:"/login"},r.a.createElement(u.b,{exact:!0,path:"/home",component:Q}),r.a.createElement(u.b,{exact:!0,path:"/add",component:le}),r.a.createElement(u.b,{exact:!0,path:"".concat("/edit","/:name"),component:pe}),r.a.createElement(u.b,{exact:!0,path:"".concat("/delete","/:name"),component:fe})))))))}n(1220);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root"))},361:function(e,t){},557:function(e,t,n){e.exports=n(1221)},608:function(e,t){},610:function(e,t){},620:function(e,t){},622:function(e,t){},666:function(e,t){},667:function(e,t){},672:function(e,t){},674:function(e,t){},681:function(e,t){},700:function(e,t){}},[[557,1,2]]]);
//# sourceMappingURL=main.ed48404f.chunk.js.map