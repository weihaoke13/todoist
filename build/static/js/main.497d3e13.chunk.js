(window.webpackJsonpcurrency=window.webpackJsonpcurrency||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(1),r=a.n(c),o=a(2),s=a(4),u=a(5),m=a(7),i=a(6),v=a(8),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={currencies:["USD","CNY","CAD","PHP","EUR","JPY","MXN"],base:"USD",amount:"",convertTo:"EUR",result:"",date:""},a.handleSelect=function(e){var t;a.setState((t={},Object(o.a)(t,e.target.name,e.target.value),Object(o.a)(t,"result",null),t),a.calculate)},a.handleInput=function(e){a.setState({amount:e.target.value,result:null},a.calculate)},a.calculate=function(){var e=a.state.amount;e!==isNaN&&fetch("https://api.exchangeratesapi.io/latest?base=".concat(a.state.base)).then(function(e){return e.json()}).then(function(t){var n=t.date,l=(t.rates[a.state.convertTo]*e).toFixed(4);a.setState({result:l,date:n})})},a.handleSwap=function(e){var t=a.state.base,n=a.state.convertTo;e.preventDefault(),a.setState({convertTo:t,base:n,result:null},a.calculate)},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currencies,a=e.base,n=e.amount,c=e.convertTo,r=e.result,o=e.date;return l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 mx-auto"},l.a.createElement("div",{className:"card card-body"},l.a.createElement("h5",null,n," ",a," is equevalent to "),l.a.createElement("h2",null,null===r?"Calculating ...":r," ",c),l.a.createElement("p",null,"As of ",o),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 "},l.a.createElement("form",{className:"form-inline md-4"},l.a.createElement("input",{type:"number",value:n,onChange:this.handleInput,className:"form-control form-control-lg mx-3"}),l.a.createElement("select",{name:"base",value:a,onChange:this.handleSelect,className:"form-control form-control-lg"},t.map(function(e){return l.a.createElement("option",{key:e,value:e},e)}))),l.a.createElement("form",{className:"form-inline mb-4"},l.a.createElement("input",{disabled:!0,value:null===r?"calculating":r,className:"form-control  form-control-lg mx-3"}),l.a.createElement("select",{name:"convertTo",value:c,onChange:this.handleSelect,className:"form-control form-control-lg"},t.map(function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",{className:"col-lg-2 align-self-center"},l.a.createElement("h1",{onClick:this.handleSwap,className:"swap"},"\u2193\u2191")))))))}}]),t}(n.Component);a(14);var f=document.getElementById("root");r.a.render(l.a.createElement(function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null))},null),f)},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.497d3e13.chunk.js.map