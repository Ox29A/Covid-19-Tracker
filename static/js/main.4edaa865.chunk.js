(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{115:function(e,t,a){e.exports={container:"Chart_container__IH8Zh"}},116:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__27JAj"}},117:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},126:function(e,t,a){e.exports=a(247)},247:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),u=a(7),l=a.n(u),s=a(13),i=a(50),m=a(51),d=a(58),p=a(57),f=a(41),v=a.n(f),h=a(59),b=a.n(h),E="https://covid19.mathdro.id/api",y=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,c,o,u,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E,t&&(a="".concat(E,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:s});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=a(286),O=a(30),j=a(110),w=a(4),_=a(24),k=a(75),D=a(14),N=a(5),S=a(280),I=a(281),M=a(62),H=a(287),P=a(283),B=a(284),V=a(285),A=a(282),R=a(118),F=a.n(R),J=Object(N.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}}))((function(e){e.classes;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page")))})),L=a(276),U=a(277),z=a(278),G=a(60),T=a.n(G),W=a(61),Y=a.n(W),Z=a(26),q=a.n(Z),K=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:q.a.container},r.a.createElement(L.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(L.a,{item:!0,component:U.a,xs:12,md:3,className:Y()(q.a.card,q.a.infected)},r.a.createElement(z.a,null,r.a.createElement(M.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(M.a,{variant:"h5"},r.a.createElement(T.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(M.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(M.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(L.a,{item:!0,component:U.a,xs:12,md:3,className:Y()(q.a.card,q.a.recovered)},r.a.createElement(z.a,null,r.a.createElement(M.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(M.a,{variant:"h5"},r.a.createElement(T.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(M.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(M.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(L.a,{item:!0,component:U.a,xs:12,md:3,className:Y()(q.a.card,q.a.deaths)},r.a.createElement(z.a,null,r.a.createElement(M.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(M.a,{variant:"h5"},r.a.createElement(T.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(M.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(M.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},Q=a(72),X=a(115),$=a.n(X),ee=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)({}),m=Object(O.a)(i,2),d=m[0],p=m[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(Q.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=d[0]?r.a.createElement(Q.b,{data:{labels:d.map((function(e){return e.date})),datasets:[{data:d.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:d.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:$.a.container},u?f:v)},te=a(279),ae=a(288),ne=a(116),re=a.n(ne),ce=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(te.a,{className:re.a.formControl},r.a.createElement(ae.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},oe=a(117),ue=a.n(oe),le=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:v.a.container},r.a.createElement("img",{className:v.a.image,src:ue.a,alt:"COVID-19"}),r.a.createElement(K,{data:t}),r.a.createElement(ce,{handleCountryChange:this.handleCountryChange}),r.a.createElement(ee,{data:t,country:a}))}}]),a}(r.a.Component),se=Object(D.a)(),ie=function(e){return{root:{flexGrow:1},flex:{flex:1},drawerPaper:{position:"relative",width:240},menuButton:{marginLeft:-12,marginRight:20},toolbarMargin:e.mixins.toolbar,aboveDrawer:{zIndex:e.zIndex.drawer+1}}},me=Object(N.a)(ie)((function(e){var t=e.classes,a=e.title,c=e.onMenuClick;return r.a.createElement(n.Fragment,null,r.a.createElement(S.a,{className:t.aboveDrawer},r.a.createElement(I.a,null,r.a.createElement(A.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:c},r.a.createElement(F.a,null)),r.a.createElement(M.a,{variant:"h6",color:"inherit",className:t.flex},a))),r.a.createElement("div",{className:t.toolbarMargin}))})),de=Object(N.a)(ie)((function(e){var t=e.classes,a=e.variant,n=e.open,c=e.onClose,o=e.onItemClick;return r.a.createElement(_.b,{history:se},r.a.createElement(H.a,{variant:a,open:n,onClose:c,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:Object(w.a)(Object(j.a)({},t.toolbarMargin,"persistent"===a))}),r.a.createElement(P.a,null,r.a.createElement(B.a,{button:!0,component:k.a,to:"/Home",onClick:o("Home")},r.a.createElement(V.a,null,"Home")),r.a.createElement(B.a,{button:!0,component:k.a,to:"/Covid-19",onClick:o("Covid-19")},r.a.createElement(V.a,null,"Covid Tracker")))),r.a.createElement("main",{className:t.content},r.a.createElement(_.a,{exact:!0,path:"/Home",component:J}),r.a.createElement(_.a,{path:"/Covid-19",component:le})))}));var pe=Object(N.a)(ie)((function(e){var t=e.classes,a=e.variant,c=Object(n.useState)(!1),o=Object(O.a)(c,2),u=o[0],l=o[1],s=Object(n.useState)("Home"),i=Object(O.a)(s,2),m=i[0],d=i[1],p=function(){l(!u)};return r.a.createElement("div",{className:t.root},r.a.createElement(me,{title:m,onMenuClick:p}),r.a.createElement(de,{open:u,onClose:p,onItemClick:function(e){return function(){d(e),l("temporary"!==a&&u),l(!u),console.log(e)}},variant:a}))})),fe=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;e.data,e.country;return r.a.createElement("div",{className:v.a.container},r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null),r.a.createElement(pe,null)))}}]),a}(r.a.Component);o.a.render(r.a.createElement(fe,null),document.getElementById("root"))},26:function(e,t,a){e.exports={container:"Cards_container__1PFP5",card:"Cards_card__3afWE",infected:"Cards_infected__v0ELY",recovered:"Cards_recovered__1MRVD",deaths:"Cards_deaths__1bnRe"}},41:function(e,t,a){e.exports={container:"App_container__122D_",image:"App_image__IjOew"}}},[[126,1,2]]]);
//# sourceMappingURL=main.4edaa865.chunk.js.map