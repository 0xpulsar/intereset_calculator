(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(17),r=a.n(i),s=(a(25),a(26),a(27),a(3)),c=a(4),o=a(7),h=a(5),m=a(6),u=(a(28),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},l.a.createElement("img",{src:"https://fullthrottlelabs.com/img/logo/logo-2.png",width:"80",height:"30",className:"d-inline-block align-top",alt:""}),l.a.createElement("b",null,"FullThrottle Labs")))}}]),t}(n.Component)),d=a(2),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleMonthsChange=a.handleMonthsChange.bind(Object(d.a)(a)),a.handlePrincipalChange=a.handlePrincipalChange.bind(Object(d.a)(a)),a.state={principal:"0",months:"0"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handlePrincipalChange",value:function(e){var t=e.target.value;isNaN(t)||(this.setState({principal:e.target.value}),this.props.principalDataEvent(e.target.value))}},{key:"handleMonthsChange",value:function(e){var t=e.target.value;isNaN(t)||(this.setState({months:e.target.value}),this.props.monthsDataEvent(e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-left"},l.a.createElement("b",{className:"card-text"},l.a.createElement("div",{className:"container"},l.a.createElement("h4",null,"Loan Amount ($500 - $5000)"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("input",{type:"text",className:this.state.principal<=5e3&&this.state.principal>=500?"form-control valid-input":"form-control invalid-input",id:"principalINP",placeholder:"amount",value:this.state.principal,onChange:this.handlePrincipalChange.bind(this)})),l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{class:"slidecontainer"},l.a.createElement("input",{type:"range",min:"500",max:"5000",onChange:this.handlePrincipalChange.bind(this),className:"slider",id:"prinRange"})))),l.a.createElement("br",null),l.a.createElement("h4",null,"Loan Duration ( 6 - 24 months)"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("input",{type:"text",className:this.state.months<=24&&this.state.months>=6?"form-control valid-input":"form-control invalid-input",id:"MonthsINP",placeholder:"months",value:this.state.months,onChange:this.handleMonthsChange.bind(this)})),l.a.createElement("div",{className:"col-sm"},l.a.createElement("input",{type:"range",min:"6",max:"24",onChange:this.handleMonthsChange.bind(this),className:"slider",id:"montRange"}))))))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-left"},l.a.createElement("h2",{className:"card-title"},l.a.createElement("b",null,"Result")),l.a.createElement("b",{className:"card-text "},"Principal:"," ",l.a.createElement("b",null,this.props.principal," ",this.props.currency)," ",l.a.createElement("br",null),"Interest Rate: ",l.a.createElement("b",null,100*this.props.interestRate,"%"),l.a.createElement("br",null),"monthly Payment:",l.a.createElement("b",null,this.props.monthlyPayment," ",this.props.currency),l.a.createElement("br",null),"Duration:",l.a.createElement("b",null,this.props.months)," months"))))}}]),t}(n.Component),E=a(18),b=a.n(E),g=(a(46),{interestRate:"0",monthlyPayment:"0",currency:"USD",months:"0",principal:"0",dataChange:"False",dataSending:"False"}),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleDataEvent=a.handleDataEvent.bind(Object(d.a)(a)),a.handlePrincipalDataEvent=a.handlePrincipalDataEvent.bind(Object(d.a)(a)),a.handleMonthsDataEvent=a.handleMonthsDataEvent.bind(Object(d.a)(a)),a.state=g,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handlePrincipalDataEvent",value:function(e){this.setState({principal:e,dataChange:"True"})}},{key:"handleMonthsDataEvent",value:function(e){this.setState({months:e,dataChange:"True"})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.state.months>=6&&e.state.months<=24&&e.state.principal>=500&&e.state.principal<=5e3&&"True"==e.state.dataChange&&(e.handleDataEvent(),e.setState({dataSending:"True"}),console.log("Data send.."))},2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"handleDataEvent",value:function(e){var t=this,a="https://ftl-frontend-test.herokuapp.com/interest?amount="+parseInt(this.state.principal)+"&numMonths="+parseInt(this.state.months);b.a.get(a).then(function(e){var a=e.data;console.log("Data recevied.."),t.setState({interestRate:a.interestRate,monthlyPayment:a.monthlyPayment.amount,currency:a.monthlyPayment.currency,months:a.numPayments,principal:a.principal.amount,dataChange:"False",dataSending:"False"})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement(p,{dataEvent:this.handleDataEvent,principalDataEvent:this.handlePrincipalDataEvent,monthsDataEvent:this.handleMonthsDataEvent})),l.a.createElement("div",{className:"False"==this.state.dataSending?"  col-sm":"col-sm start-color-change-anim"},l.a.createElement(v,{interestRate:this.state.interestRate,monthlyPayment:this.state.monthlyPayment,currency:this.state.currency,months:this.state.months,principal:this.state.principal}))))}}]),t}(n.Component);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.bd41c4d0.chunk.js.map