(this["webpackJsonpgameoflife-2"]=this["webpackJsonpgameoflife-2"]||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),l=n.n(i),c=(n(16),n(1)),o=n(7),s=n(8),m=n(9),u=n(10),d=(n(17),n(4)),f=(n(18),function(e,t,n){return e+t<0?e+n+t:e+t>n-1?(e+t)%n:e+t}),v=function(e,t,n){for(var a,r,i,l=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],c=JSON.parse(e),o=Object(d.a)(c,2),s=o[0],m=o[1],u=new Set,v=-1;v<=1;v++){r=l?f(m,v,n):m+v;for(var g=-1;g<=1;g++)a=l?f(s,g,n):s+g,(i=JSON.stringify([a,r]))!==e&&u.add(i)}return u},g=function(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=v(e,t,n,a),i=0;return r.forEach((function(e){t.has(e)&&i++})),i},h=function(e,t){return 3===e||!(2!==e||!t)},S=function(e,t){var n=new Set(t);return t.has(e)?n.delete(e):n.add(e),n},b=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=new Set,i=new Set;return e.forEach((function(a){i.add(a),v(a,e,t,n).forEach((function(e){i.add(e)}))})),i.forEach((function(i){var l=JSON.parse(i),c=Object(d.a)(l,2),o=c[0],s=c[1];if(!a||!(Math.abs(o)>150||Math.abs(s)>150)){var m=e.has(i),u=g(i,e,t,n);h(u,m)&&r.add(i)}})),r},E=function(e,t){var n=new Set;return Object(c.a)(Array(t).keys()).forEach((function(a){return Object(c.a)(Array(t).keys()).forEach((function(t){if(Math.random()>1-e){var r=JSON.stringify([a,t]);n.add(r)}}))})),n},p={HO:JSON.stringify(["[9,9]","[10,9]","[11,9]","[12,9]","[13,9]","[11,10]","[11,11]","[9,11]","[10,11]","[12,11]","[13,11]","[9,13]","[9,14]","[9,15]","[10,13]","[11,13]","[12,13]","[13,13]","[13,14]","[13,15]","[12,15]","[11,15]","[10,15]"])},w=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={gridSize:32,lifeSeed:.2,grid:new Set,ticks:0,running:!1,tickInterval:210,mouseClicked:!1,wrap:!1},e.setGridSize=function(t){var n=Number(t);e.setState({gridSize:n}),e.styles=e.adjustTableStyles(n)},e.go=function(){var t=e.state.tickInterval;e.timerId=setInterval(e.iterate,570-t),e.setState((function(e){return{running:!e.running}}))},e.stop=function(){clearInterval(e.timerId),e.setState((function(e){return{running:!e.running}}))},e.handleCellClick=function(t){var n=e.state,a=n.grid;if(!n.running){var r=S(t,a);e.setState({grid:r})}},e.adjustTableStyles=function(e){var t=window.screen.width>600?Math.floor(600/e)-2:Math.floor(window.screen.width/e)-2;return{width:t,height:t}},e.componentDidMount=function(){var t=e.state,n=t.gridSize,a=t.lifeSeed;e.styles=e.adjustTableStyles(n),e.setState({grid:E(a,n)})},e.iterate=function(){e.setState((function(e){var t=e.grid,n=e.gridSize,a=e.ticks,r=e.wrap;return{grid:b(t,n,r,!0),ticks:a+1}}))},e.clearGrid=function(){var t=new Set;e.setState({grid:t,ticks:0})},e.renderHashGrid=function(){var t=e.state,n=t.gridSize,r=t.grid;return a.createElement("table",null,a.createElement("tbody",null,Object(c.a)(Array(n).keys()).map((function(t){return a.createElement("tr",{key:"row-".concat(t),className:"grid-row"},Object(c.a)(Array(n).keys()).map((function(n){var i=JSON.stringify([t,n]);return a.createElement("td",{style:e.styles,onMouseOver:function(){e.state.mouseClicked&&e.handleCellClick(i)},onClick:function(){e.handleCellClick(i)},key:"cell-".concat(i),className:"cell"},a.createElement("div",{className:r.has(i)?"live":""}))})))}))))},e.handleSliderChange=function(t){var n=e.state,a=n.running,r=n.gridSize;if(!a){var i=Number(t.target.value)/100;e.setState({lifeSeed:i,grid:E(i,r),ticks:0})}},e.load=function(t){var n;n="default"===t?JSON.parse(localStorage.getItem("save")||"[]"):JSON.parse(p[t]);var a=new Set(n);e.setState({grid:a})},e.save=function(){var t=e.state.grid,n=(JSON.parse(localStorage.getItem("save")||"[]"),JSON.parse(localStorage.getItem("saves")||"{}")),a=new Date,r="".concat(a.toLocaleDateString()," ").concat(a.toLocaleTimeString()),i=JSON.stringify(Array.from(t));n[r]=Object(c.a)(t);var l=JSON.stringify(n);console.log(l),localStorage.setItem("save",i)},e}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,r=t.gridSize,i=t.lifeSeed,l=t.ticks,c=t.running,o=t.tickInterval,s=n.size;return a.createElement("div",{className:"container"},a.createElement("h1",null,"Conway's Game of Life"),a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},a.createElement("p",null,"Iterations: ",l)),a.createElement("div",{className:"col"},a.createElement("p",null,"Live cells: ",s))),a.createElement("div",{className:"row mb-3"},a.createElement("div",{className:"col-md-2 mb-3 mb-md-0"},a.createElement("button",{className:"btn btn-primary",onClick:function(){c?e.stop():e.go()}},c?"STOP!":"GO!"),!c&&a.createElement("button",{className:"btn btn-primary",onClick:function(){e.clearGrid()}},"Clear Grid")," ",!c&&a.createElement("button",{className:"btn btn-primary",onClick:function(){e.setState({grid:E(i,r),ticks:0})}},"Random")," ",!c&&a.createElement("button",{className:"btn btn-primary",onClick:function(){e.iterate()}},"Step")," ",!c&&a.createElement(a.Fragment,null,a.createElement("button",{className:"btn btn-primary",onClick:this.save},"Save"),a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.load("default")}},"Load")),!c&&a.createElement("button",{className:"btn btn-primary",onClick:function(){e.load("HO")}},"Preset")),a.createElement("div",{className:"col-md-9"},this.renderHashGrid(n))),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-8"},c?a.createElement("div",null,a.createElement("label",{className:"mr-3",htmlFor:"customRange1"},"Slower/Faster"),a.createElement("input",{type:"range",className:"custom-range",id:"customRange1",min:"3",max:"51",step:"6",value:o/10,onChange:function(t){var n=10*Number(t.target.value);clearInterval(e.timerId),e.timerId=setInterval(e.iterate,570-n),e.setState({tickInterval:n})}})):a.createElement("div",null,a.createElement("div",{className:"form-check"},a.createElement("input",{onChange:function(){e.setState((function(e){return{wrap:!e.wrap}}))},className:"form-check-input",checked:this.state.wrap,type:"checkbox",id:"defaultCheck1"}),a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"},"Round world?")),a.createElement("div",null,a.createElement("label",{className:"mr-3",htmlFor:"densityRange"},"Initial Density"),a.createElement("input",{type:"range",min:"1",max:"50",value:100*i,className:"custom-range",onChange:this.handleSliderChange,id:"densityRange"})),a.createElement("div",null,a.createElement("label",{className:"mr-3",htmlFor:"grid-size"},"Grid Size"),a.createElement("input",{id:"grid-size",type:"number",min:"10",max:"50",value:this.state.gridSize,onChange:function(t){e.setGridSize(t.target.value)}}))))),a.createElement("hr",null),a.createElement("div",{className:"row"},a.createElement("div",{className:"explanation ".concat(this.state.explanation," ? 'show' : ''")},a.createElement("p",null,a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Wikipedia")),a.createElement("ul",null,a.createElement("li",null,"Each cell has 8 neighboring cells"),a.createElement("li",null,"A live cell with 2 or 3 live neighbors will continue to the next iteration"),a.createElement("li",null,"A dead cell with exactly 3 live neighbors will come to life"),a.createElement("li",null,"A live cell with 4 or more live neighbors will die, as if by overpopulation")))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.7d7e6dee.chunk.js.map