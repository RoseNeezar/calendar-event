(this["webpackJsonpcalendar-events"]=this["webpackJsonpcalendar-events"]||[]).push([[0],{46:function(e,t,a){e.exports=a(85)},55:function(e,t,a){},56:function(e,t,a){},74:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=a(15),i=(a(51),a(54),a(55),a(29)),s=a(5),m=a(6),u=a(9),d=a(7),h=a(4),b=a(8),v=a(16),E=(a(56),a(21)),p=a.n(E),f=(a(74),a(87)),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={isOpen:!1},a.toggleAccordion=a.toggleAccordion.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"toggleAccordion",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{onClick:this.toggleAccordion,className:"port-item p-4 bg-primary"},l.a.createElement("button",{className:"btn btn-primary"},this.props.currentDate)),l.a.createElement(f.a,{isOpen:this.state.isOpen},l.a.createElement("div",{className:"card",style:{width:"18rem"}},l.a.createElement("div",{className:"card-header"},this.props.eventTitle),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"Date : ",this.props.dateTime),l.a.createElement("li",{className:"list-group-item"},"Location : ",this.props.location),l.a.createElement("li",{className:"list-group-item"},"Number of people : ",this.props.Attendes)))))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.props.BobEvents.map((function(t){return l.a.createElement(g,{eventTitle:t.eventTitle,dateTime:t.dateTime,location:t.location,Attendes:t.Attendes,currentDate:e.props.currentDate})})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={date:new Date,redirect:!1},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.convert=a.convert.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({date:e,redirect:!0})}},{key:"convert",value:function(e){var t=new Date(e),a=("0"+(t.getMonth()+1)).slice(-2);return[("0"+t.getDate()).slice(-2),a,t.getFullYear()].join("/")}},{key:"render",value:function(){this.convert(this.state.date.toString());return l.a.createElement("div",{className:"Bob"},l.a.createElement("h1",null," Bob"),l.a.createElement("div",{className:"Calendar"},l.a.createElement(p.a,{onClickDay:this.handleChange,value:this.state.date}),l.a.createElement(O,{BobEvents:this.props.BobEvents,currentDate:this.state.date.toString()})),this.state.redirect&&l.a.createElement(v.a,{push:!0,to:"/EventForms"}))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"About"},l.a.createElement("h1",null,"ABOUT!!"),l.a.createElement("ul",null,l.a.createElement("li",null,"Click bob"),l.a.createElement("li",null,"In Bob Component click the dates on the calendar"),l.a.createElement("li",null,"It will take you to a form to fill"),l.a.createElement("li",null,"at the option selector,can select to assign to bob or robert"),l.a.createElement("li",null,"events will be displayed on either bob or robert depending on the selected option"),l.a.createElement("li",null,"current state need to manually click back the component name to go back to bob or robert from form"),l.a.createElement("li",null,"need to add better styling")))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={date:new Date,redirect:!1},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.convert=a.convert.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({date:e,redirect:!0})}},{key:"convert",value:function(e){var t=new Date(e),a=("0"+(t.getMonth()+1)).slice(-2);return[("0"+t.getDate()).slice(-2),a,t.getFullYear()].join("/")}},{key:"render",value:function(){this.convert(this.state.date.toString());return l.a.createElement("div",{className:"Robert"},this.state.redirect&&l.a.createElement(v.a,{push:!0,to:"/EventForms"}),l.a.createElement("h1",null,"Robert"),l.a.createElement("div",{className:"Calendar"},l.a.createElement(p.a,{onClickDay:this.handleChange,value:this.state.date}),this.props.RobertEvents.map((function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.eventTitle),l.a.createElement("li",null,e.dateTime),l.a.createElement("li",null,e.location),l.a.createElement("li",null,e.Attendes),l.a.createElement("li",null,e.AssignedTo))}))))}}]),t}(n.Component),k=a(45),y=(a(84),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={eventTitle:"",dateTime:"",location:"",Attendes:0,AssignedTo:"Bob"},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addEvents(this.state),this.setState({eventTitle:"",dateTime:"",location:"",Attendes:0,AssignedTo:"Bob"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"formEvent"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row justify-content-center m-4"},l.a.createElement("div",{className:"col-12 col-sm-8 col-md-7"},l.a.createElement("h1",null,"Event form"),l.a.createElement("form",{className:"Form-container",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"eventTitle",className:"float-left"},"Event Title"),l.a.createElement("input",{name:"eventTitle",value:this.state.eventTitle,onChange:this.handleChange,placeholder:"Event Title",className:"form-control mb-4"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"dateTime",className:"float-left"},"Date and time"),l.a.createElement("input",{name:"dateTime",value:this.state.dateTime,onChange:this.handleChange,placeholder:"Date and time",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"location",className:"float-left"},"Location"),l.a.createElement("input",{name:"location",value:this.state.location,onChange:this.handleChange,placeholder:"Location",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Attendes",className:"float-left"},"Number of people attending"),l.a.createElement("input",{name:"Attendes",value:this.state.Attendes,onChange:this.handleChange,placeholder:"Attendes",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"user",className:"float-left"},"Assign to"),l.a.createElement("select",{name:"AssignedTo",className:"form-control",onChange:this.handleChange},l.a.createElement("option",{value:"Bob",name:"AssignedTo"},"Bob"),l.a.createElement("option",{value:"Robert",name:"AssignedTo"},"Robert"))),l.a.createElement("button",{className:"btn bg-black btn-block text-white"},"Submit"))))))}}]),t}(n.Component)),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={BobEvents:[],RobertEvents:[]},a.addEvents=a.addEvents.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"addEvents",value:function(e){"Bob"===e.AssignedTo?this.setState({BobEvents:[].concat(Object(i.a)(this.state.BobEvents),[e])}):this.setState({RobertEvents:[].concat(Object(i.a)(this.state.RobertEvents),[e])})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"App-nav"},l.a.createElement(o.b,{exact:!0,activeClassName:"active-link",to:"/"},"About"),l.a.createElement(o.b,{exact:!0,activeClassName:"active-link",to:"/Bob"},"Bob"),l.a.createElement(o.b,{exact:!0,activeClassName:"active-link",to:"/Robert"},"Robert")),l.a.createElement(v.d,null,l.a.createElement(v.b,{exact:!0,path:"/",component:N}),l.a.createElement(v.b,{exact:!0,path:"/Bob",render:function(){return l.a.createElement(j,{BobEvents:e.state.BobEvents})}}),l.a.createElement(v.b,{exact:!0,path:"/Robert",render:function(){return l.a.createElement(C,{RobertEvents:e.state.RobertEvents})}}),l.a.createElement(v.b,{exact:!0,path:"/EventForms",render:function(){return l.a.createElement(y,{addEvents:e.addEvents})}}),"} />"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(o.a,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.8dc53c5a.chunk.js.map