(this["webpackJsonpcalendar-events"]=this["webpackJsonpcalendar-events"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=a(35),i=(a(85),a(88),a(89),a(39)),m=a(36),s=a(45),u=a(7),d=a(24),E=(a(90),function(e){var t=Object(n.useState)(e),a=Object(u.a)(t,2),l=a[0],r=a[1];return[l,function(e){r(e.target.value)},function(e){r(e)}]});var b=function(e){var t=e.closeForm,a=e.addEvents,n=e.calendarEvents,r=e.addCalendarEvent,c=E(""),o=Object(u.a)(c,3),i=o[0],m=o[1],s=o[2],d=E(""),b=Object(u.a)(d,3),f=b[0],v=b[1],p=b[2],h=E(""),j=Object(u.a)(h,3),O=j[0],g=j[1],y=j[2],C=E(0),N=Object(u.a)(C,3),T=N[0],S=N[1],B=N[2],k=E("Bob"),w=Object(u.a)(k,3),x=w[0],A=w[1],R=w[2];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"formEvent"},l.a.createElement("h1",{className:"text-center p-2"},"Form Event"),l.a.createElement("form",{className:"Form-container",onSubmit:function(e){return function(e){e.preventDefault(),t(),a({eventTitle:i,dateTime:f,location:O,Attendes:T,AssignedTo:x}),n.title=i,n.AssignedTo=x,r(n),s(),p(),y(),B(0),R("Bob")}(e)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"eventTitle",className:"float-left"},"Event Title"),l.a.createElement("input",{name:"eventTitle",value:i,onChange:m,placeholder:"Ted Talk",className:"form-control mb-4"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"dateTime",className:"float-left"},"Date/Time"),l.a.createElement("input",{name:"dateTime",value:f,onChange:v,placeholder:"5.30pm - 6.30pm",className:"form-control",id:"date-time"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"location",className:"float-left"},"Location"),l.a.createElement("input",{name:"location",value:O,onChange:g,placeholder:"MSU Campus",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Attendes",className:"float-left"},"Number of people attending"),l.a.createElement("input",{name:"Attendes",value:T,onChange:S,placeholder:"Attendes",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"user",className:"float-left"},"Assign to"),l.a.createElement("select",{name:"AssignedTo",className:"form-control",onChange:A},l.a.createElement("option",{value:"Bob",name:"AssignedTo"},"Bob"),l.a.createElement("option",{value:"Robert",name:"AssignedTo"},"Robert"))),l.a.createElement("button",{className:"btn bg-black btn-block text-white"},"Submit"))))},f=a(135),v=a(131),p=a(148),h=a(134),j=a(63),O=a.n(j),g=a(64),y=a.n(g),C=a(65),N=a.n(C),T=a(66),S=a.n(T);var B=function(e){var t=e.eventList;return l.a.createElement(v.a,null,t.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(p.a,null,l.a.createElement(h.a,null,l.a.createElement(O.a,null)),"Date/Time : ",e.dateTime),l.a.createElement(p.a,null,l.a.createElement(h.a,null,l.a.createElement(y.a,null)),"Location : ",e.location),l.a.createElement(p.a,null,l.a.createElement(h.a,null,l.a.createElement(N.a,null)),"Number Of People : ",e.Attendes),l.a.createElement(p.a,null,l.a.createElement(h.a,null,l.a.createElement(S.a,null)),"Assigned To : ",e.AssignedTo))})))},k=a(136),w=a(37);function x(e){var t=e.openPopEvent,a=e.popEvent,r=e.eventsInfo,c=Object(n.useState)(!1),o=Object(u.a)(c,2),i=o[0],m=o[1],s=Object(n.useState)(""),d=Object(u.a)(s,2),E=d[0],b=d[1],v=Object(n.useRef)(!0);Object(n.useEffect)((function(){if(v.current)v.current=!1;else{m(!0)}}),[t]),Object(n.useEffect)((function(){var e=r.filter((function(e){return e.eventTitle===a}));if(v.current)v.current=!1;else{b(e)}}),[i]);return l.a.createElement("div",null,l.a.createElement(f.a,{open:i,onClose:function(){m(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(k.a,null,l.a.createElement(w.a,{variant:"h6"},a," ")),l.a.createElement(B,{eventList:E,popEvent:a})))}var A=a(53),R=a(139),F=a(138),D=a(140),L=a(137),P=a(42),G=a(23),I=a(43),W=a(44),M=Object(L.a)((function(e){return{card:{maxWidth:1e3,overflow:"hidden"}}}));var J=function(e){var t=e.BobEvents,a=e.addEvents,r=e.addCalendarEvent,c=e.BobCalendarEvent,o=e.user,i=void 0===o?"Bob":o,m=Object(n.useState)(!1),s=Object(u.a)(m,2),d=s[0],E=s[1],f=Object(n.useState)([]),v=Object(u.a)(f,2),p=v[0],h=v[1],j=Object(n.useState)(),O=Object(u.a)(j,2),g=O[0],y=O[1],C=Object(n.useState)(!0),N=Object(u.a)(C,2),T=N[0],S=N[1],B=Object(n.useState)(!1),k=Object(u.a)(B,2),w=k[0],L=k[1],J=Object(n.useState)(""),V=Object(u.a)(J,2),H=V[0],K=V[1];Object(n.useEffect)((function(){return function(){E(!0)}}),[g]),Object(n.useEffect)((function(){h({start:g,allDay:T,user:i})}),[g]);var U=M();return l.a.createElement(A.a,{style:{padding:0,margin:0,height:"100vh"},elevation:0},l.a.createElement(F.a,{container:!0,justify:"center",style:{marginTop:"3rem"}},d?l.a.createElement(b,{closeForm:function(){E(!1)},addEvents:a,addCalendarEvent:r,calendarEvents:p}):l.a.createElement(R.a,{className:U.card},l.a.createElement(D.a,null,l.a.createElement("h1",null,"Bob's Event"),l.a.createElement(P.a,{defaultView:"dayGridMonth",header:{left:"prev,next ",center:"title",right:""},plugins:[G.d,I.a,W.a],events:c,dateClick:function(e){y(e.date),S(!0)},eventClick:function(e){L(!w),K(e.event.title)}}),l.a.createElement(x,{openPopEvent:w,eventsInfo:t,popEvent:H})))))},V=a(141),H=a(67),K=a.n(H);a(95);var U=function(){return l.a.createElement(A.a,{style:{padding:100,margin:0,height:"100vh",backgroundColor:"#fafafa"},elevation:0},l.a.createElement(F.a,{container:!0,justify:"center",style:{marginTop:"1rem"}},l.a.createElement(R.a,{style:{maxHeight:"auto"}},l.a.createElement(V.a,{style:{paddingBottom:50}},l.a.createElement("img",{src:K.a,alt:"loading...",className:"rounded mx-auto d-block "}),l.a.createElement(D.a,null,l.a.createElement(w.a,{gutterBottom:!0,variant:"h4",component:"h2"},"About ."),l.a.createElement(w.a,{variant:"h5",color:"textSecondary",component:"h5"},"Calendar planner has 2 hard coded user name Bob and Robert. Both can set events on a calendar to each other as shown in the gif above."))))))},$=Object(L.a)((function(e){return{card:{maxWidth:1e3,overflow:"hidden"}}}));var q=function(e){var t=e.RobertEvents,a=e.addEvents,r=e.addCalendarEvent,c=e.RobertCalendarEvent,o=e.user,i=void 0===o?"Robert":o,m=Object(n.useState)(!1),s=Object(u.a)(m,2),d=s[0],E=s[1],f=Object(n.useState)([]),v=Object(u.a)(f,2),p=v[0],h=v[1],j=Object(n.useState)(),O=Object(u.a)(j,2),g=O[0],y=O[1],C=Object(n.useState)(!0),N=Object(u.a)(C,2),T=N[0],S=N[1],B=Object(n.useState)(!1),k=Object(u.a)(B,2),w=k[0],L=k[1],M=Object(n.useState)(""),J=Object(u.a)(M,2),V=J[0],H=J[1];Object(n.useEffect)((function(){return function(){E(!0)}}),[g]),Object(n.useEffect)((function(){h({start:g,allDay:T,user:i})}),[g]);var K=$();return l.a.createElement(A.a,{style:{padding:0,margin:0,height:"100vh"},elevation:0},l.a.createElement(F.a,{container:!0,justify:"center",style:{marginTop:"3rem"}},d?l.a.createElement(b,{closeForm:function(){E(!1)},addEvents:a,addCalendarEvent:r,calendarEvents:p}):l.a.createElement(R.a,{className:K.card},l.a.createElement(D.a,null,l.a.createElement("h1",null,"Robert's Event"),l.a.createElement(P.a,{defaultView:"dayGridMonth",header:{left:"prev,next ",center:"title",right:""},plugins:[G.d,I.a,W.a],events:c,dateClick:function(e){y(e.date),S(!0)},eventClick:function(e){L(!w),H(e.event.title)}}),l.a.createElement(x,{openPopEvent:w,eventsInfo:t,popEvent:V})))))},z=a(49),Q=a.n(z),X=a(144),Y=a(145),Z=a(70),_=a.n(Z),ee=a(143),te=a(147),ae=a(142),ne=a(146),le=a(69),re=a.n(le),ce=a(52),oe=a.n(ce),ie=(a(98),Object(L.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},list:{width:250},fullList:{width:"auto"}}})));var me=function(){var e,t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],E=Object(n.useState)([]),b=Object(u.a)(E,2),f=b[0],j=b[1],O=Object(n.useState)([]),g=Object(u.a)(O,2),y=g[0],C=g[1],N=Object(n.useState)([]),T=Object(u.a)(N,2),S=T[0],B=T[1],k=function(e){var t=Object(s.a)({},e,{id:Q()()});"Bob"===e.AssignedTo?C([].concat(Object(m.a)(y),[t])):B([].concat(Object(m.a)(S),[t]))},x=function(e){var t=Object(s.a)({},e,{id:Q()()});"Bob"===e.AssignedTo?c([].concat(Object(m.a)(r),[t])):j([].concat(Object(m.a)(f),[t]))},A=l.a.useState({left:!1}),R=Object(u.a)(A,2),F=R[0],D=R[1],L=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&D(Object(s.a)({},F,Object(i.a)({},e,t)))}},P=ie();return l.a.createElement("div",{className:P.root},l.a.createElement(X.a,{position:"static",style:{backgroundColor:"#2c3e50"}},l.a.createElement(Y.a,null,l.a.createElement(ne.a,{edge:"start",className:P.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(_.a,{onClick:L("left",!0)})),l.a.createElement(w.a,{variant:"h6",className:P.title},"Calendar Planner"))),l.a.createElement(te.a,{open:F.left,onClose:L("left",!1)},(e="left",l.a.createElement("div",{className:P.list,role:"presentation",onClick:L(e,!1),onKeyDown:L(e,!1)},l.a.createElement(v.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{button:!0,key:"about",exact:"true",component:o.b,to:"/"},l.a.createElement(h.a,null,l.a.createElement(re.a,null)),l.a.createElement(ae.a,{primary:"About"})),l.a.createElement(ee.a,null),l.a.createElement(p.a,{button:!0,key:"Bob",exact:"true",component:o.b,to:"/Bob"},l.a.createElement(h.a,null,l.a.createElement(oe.a,null)),l.a.createElement(ae.a,{primary:"Bob"})),l.a.createElement(p.a,{button:!0,key:"Robert",exact:"true",component:o.b,to:"/Robert"},l.a.createElement(h.a,null,l.a.createElement(oe.a,null)),l.a.createElement(ae.a,{primary:"Robert"})))),l.a.createElement(ee.a,null)))),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:U}),l.a.createElement(d.a,{exact:!0,path:"/Bob",render:function(){return l.a.createElement(J,{BobEvents:r,addEvents:x,BobCalendarEvent:y,addCalendarEvent:k})}}),l.a.createElement(d.a,{exact:!0,path:"/Robert",render:function(){return l.a.createElement(q,{RobertEvents:f,addEvents:x,RobertCalendarEvent:S,addCalendarEvent:k})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(100),a(101),a(102);c.a.render(l.a.createElement(o.a,null,l.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){e.exports=a.p+"static/media/Calendar-planner.04ea6f85.gif"},80:function(e,t,a){e.exports=a(103)},89:function(e,t,a){},90:function(e,t,a){},95:function(e,t,a){},98:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.84672fae.chunk.js.map