(this["webpackJsonpgameoflife-2"]=this["webpackJsonpgameoflife-2"]||[]).push([[0],{18:function(e,t,n){e.exports=n(38)},23:function(e,t,n){},24:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),l=n.n(i),c=(n(23),n(1)),o=n(13),s=n(14),O=n(16),u=n(17),d=(n(24),n(7)),m=n(4),f=n.n(m),h=function(e,t,n){return e+t<0?e+n+t:e+t>n-1?(e+t)%n:e+t},v=function(e,t,n){for(var a,r,i,l=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],c=JSON.parse(e),o=Object(d.a)(c,2),s=o[0],O=o[1],u=new Set,m=-1;m<=1;m++){r=l?h(O,m,n):O+m;for(var f=-1;f<=1;f++)a=l?h(s,f,n):s+f,(i=JSON.stringify([a,r]))!==e&&u.add(i)}return u},g=function(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=v(e,t,n,a),i=0;return r.forEach((function(e){t.has(e)&&i++})),i},p=function(e,t){return 3===e||!(2!==e||!t)},w=function(e,t){var n=new Set;return Object(c.a)(Array(t).keys()).forEach((function(a){return Object(c.a)(Array(t).keys()).forEach((function(t){if(Math.random()>1-e){var r=JSON.stringify([a,t]);n.add(r)}}))})),n},b={HO:JSON.stringify(["[9,9]","[10,9]","[11,9]","[12,9]","[13,9]","[11,10]","[11,11]","[9,11]","[10,11]","[12,11]","[13,11]","[9,13]","[9,14]","[9,15]","[10,13]","[11,13]","[12,13]","[13,13]","[13,14]","[13,15]","[12,15]","[11,15]","[10,15]"])},S=["!Name: Die hard\n  !A methuselah that vanishes at generation 130, which is conjectured to be maximal for patterns of 7 or fewer cells.\n  !http://www.conwaylife.com/wiki/index.php?title=Die_hard\n  ......O\n  OO\n  .O...OOO","!Name: Bi-gun\n  !Author: Bill Gosper\n  !A true period 46 double-barreled glider gun.\n  !www.conwaylife.com/wiki/index.php?title=Bi-gun\n  ...........O\n  ..........OO\n  .........OO\n  ..........OO..OO\n  ......................................O\n  ......................................OO........OO\n  .......................................OO.......OO\n  ..........OO..OO..................OO..OO\n  OO.......OO\n  OO........OO\n  ...........O\n  ..................................OO..OO\n  .......................................OO\n  ......................................OO\n  ......................................O","!Name: P50 traffic jam\n  !Author: Noam Elkies\n  !The smallest known period 50 oscillator; discovered on October 16, 1994\n  !http://www.conwaylife.com/wiki/index.php?title=P50_traffic_jam\n  OO............................................OO\n  O..OOO....................................OOO..O\n  .OO..............................OOO.........OO\n  ......O..................O...............O\n  ......O...O............OO.OO...O.....O...O\n  .OO.....OO.OO............O.....O.....O.......OO\n  O..OOO....O....................O.....O....OOO..O\n  OO............................................OO\n  .................................OOO\n  \n  ......O..O............................O..O\n  .....O.OO.O..........................O.OO.O\n  ......O..O............................O..O\n  ......O..O............................O..O\n  .....O.OO.O..........................O.OO.O\n  ......O..O............................O..O","!Name: Queen bee shuttle\n  !Author: Bill Gosper\n  !A period 30 oscillator.\n  !www.conwaylife.com/wiki/index.php?title=Queen_bee_shuttle\n  .........O\n  .......O.O\n  ......O.O\n  OO...O..O...........OO\n  OO....O.O...........OO\n  .......O.O\n  .........O","!Name: Gliders by the dozen\n  !A methuselah with lifespan 184 that emits exactly 12 gliders over the course of its evolution.\n  !www.conwaylife.com/wiki/index.php?title=Gliders_by_the_dozen\n  OO..O\n  O...O\n  O..OO","!Name: Queen bee\n!A pattern that lays a beehive on either side of itself before exploding.\n!www.conwaylife.com/wiki/index.php?title=Queen_bee\n...O\n..O.O\n.O...O\n..OOO\nOO...OO"],E=n(15),k=n.n(E),y=function(e){Object(u.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setGridSize=function(e){var t=Number(e);a.setState({gridSize:t}),a.styles=a.adjustTableStyles(t)},a.go=function(){console.log("go clicked");var e=a.state.tickInterval;a.timerId=setInterval(a.iterate,570-e),a.setState((function(e){return{running:!e.running}}))},a.stop=function(){clearInterval(a.timerId),a.setState((function(e){return{running:!e.running}}))},a.handleCellClick=function(e){var t=a.state,n=t.grid;if(!t.running){var r=function(e,t){var n=new Set(t);return t.has(e)?n.delete(e):n.add(e),n}(e,n);console.log(r),a.setState({grid:r})}},a.adjustTableStyles=function(e){var t=a.gridTable.current.clientWidth,n=t>800?Math.floor(800/e)-2:Math.floor(t/e)-2;return{width:n,height:n}},a.componentDidMount=function(){var e=a.state,t=e.gridSize,n=e.lifeSeed,r=a.gridTable.current.clientWidth,i=t;console.log(r),r<500&&(i=38),a.styles=a.adjustTableStyles(i),a.setState({grid:w(n,i),gridSize:i})},a.iterate=function(){a.setState((function(e){var t=e.grid,n=e.gridSize,a=e.ticks;return{grid:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=new Set,i=new Set;return e.forEach((function(a){i.add(a),v(a,e,t,n).forEach((function(e){i.add(e)}))})),i.forEach((function(i){var l=JSON.parse(i),c=Object(d.a)(l,2),o=c[0],s=c[1];if(!a||!(Math.abs(o)>150||Math.abs(s)>150)){var O=e.has(i),u=g(i,e,t,n);p(u,O)&&r.add(i)}})),r}(t,n,e.wrap,!0),ticks:a+1}}))},a.clearGrid=function(){var e=new Set;a.setState({grid:e,ticks:0})},a.renderHashGrid=function(){var e=a.state,t=e.gridSize,n=e.grid;return r.a.createElement("table",null,r.a.createElement("tbody",null,Object(c.a)(Array(t).keys()).map((function(e){return r.a.createElement("tr",{key:"row-".concat(e),className:"grid-row"},Object(c.a)(Array(t).keys()).map((function(t){var i=JSON.stringify([t,e]);return r.a.createElement("td",{style:a.styles,onMouseOver:function(){a.state.mouseClicked&&a.handleCellClick(i)},onClick:function(){a.handleCellClick(i)},key:"cell-".concat(i),className:"cell"},r.a.createElement("div",{className:n.has(i)?"live":""}))})))}))))},a.handleSliderChange=function(e){var t=a.state,n=t.running,r=t.gridSize;if(!n){var i=Number(e.target.value)/100;a.setState({lifeSeed:i,grid:w(i,r),ticks:0})}},a.load=function(e){var t;t="default"===e?JSON.parse(localStorage.getItem("save")||"[]"):JSON.parse(b[e]);var n=new Set(t);a.setState({grid:n,ticks:0})},a.loadTextArea=function(){var e=function(e,t,n){var a=["\n",".","O"],r=new Set,i=[];e.split("\n").forEach((function(e){var t=e.trim();"!"!==t[0]&&i.push(t)}));var l,o=n,s=t;return i.forEach((function(e){s+=1,o=n,Object(c.a)(e).forEach((function(e){if(a.includes(e))switch(o+=1,e){case"O":return l=JSON.stringify([o,s]),void r.add(l);case".":default:return}}))})),r}(a.state.textArea,20,10);a.setState({grid:e,ticks:0})},a.save=function(){var e=a.state.grid,t=(JSON.parse(localStorage.getItem("save")||"[]"),JSON.parse(localStorage.getItem("saves")||"{}")),n=new Date,r="".concat(n.toLocaleDateString()," ").concat(n.toLocaleTimeString()),i=JSON.stringify(Array.from(e));t[r]=Object(c.a)(e);var l=JSON.stringify(t);console.log(l),localStorage.setItem("save",i)},a.renderControls=function(){var e=a.state,t=e.running,n=e.lifeSeed,i=e.gridSize,l=[{text:"GO!",visible:!t,clickHandler:function(){a.save(),a.go()}},{text:"Next",visible:!t,clickHandler:function(){a.iterate()}},{text:"STOP!",visible:t,clickHandler:function(){a.stop()}},{text:"Clear",visible:!t,clickHandler:function(){a.clearGrid()}},{text:"Random",visible:!t,clickHandler:function(){a.setState({grid:w(n,i),ticks:0})}},{text:"Restore",visible:!t,clickHandler:function(){a.load("default")}},{text:"Preset",visible:!t,clickHandler:function(){a.load("HO")}},{text:"More",visible:!t,clickHandler:function(){a.setState({modalOpen:!0})}}];return r.a.createElement("div",{className:"col-lg-2 mb-3 mb-lg-0"},l.map((function(e,t){return r.a.createElement("button",{key:"control-".concat(t),className:"btn btn-primary col-3 col-md-2 col-lg-8 ".concat(e.visible?"":"d-none"),onClick:e.clickHandler},e.text)})))},a.gridTable=r.a.createRef(),a.state={gridSize:60,lifeSeed:.2,grid:new Set,ticks:0,running:!1,tickInterval:210,mouseClicked:!1,wrap:!1,textArea:"........................O\n......................O.O\n............OO......OO............OO\n...........O...O....OO............OO\nOO........O.....O...OO\nOO........O...O.OO....O.O\n..........O.....O.......O\n...........O...O\n............OO",modalOpen:!1},a}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,a=(t.gridSize,t.lifeSeed),i=t.ticks,l=t.running,c=t.tickInterval,o=n.size;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Conway's Game of Life"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Iterations: ",i)),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Live cells: ",o))),r.a.createElement("div",{className:"row mb-3"},this.renderControls(),r.a.createElement("div",{className:"col-lg-10",ref:this.gridTable},this.renderHashGrid(n))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},l?r.a.createElement("div",null,r.a.createElement("label",{className:"mr-3",htmlFor:"customRange1"},"Slower/Faster"),r.a.createElement("input",{type:"range",className:"custom-range",id:"customRange1",min:"18",max:"71",step:"6",value:c/10,onChange:function(t){var n=10*Number(t.target.value);clearInterval(e.timerId),e.timerId=setInterval(e.iterate,570-n),e.setState({tickInterval:n})}})):r.a.createElement("div",null,r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{onChange:function(){e.setState((function(e){return{wrap:!e.wrap}}))},className:"form-check-input",checked:this.state.wrap,type:"checkbox",id:"defaultCheck1"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"},"Round world?")),r.a.createElement("div",null,r.a.createElement("label",{className:"mr-3",htmlFor:"densityRange"},"Initial Density"),r.a.createElement("input",{type:"range",min:"1",max:"50",value:100*a,className:"custom-range",onChange:this.handleSliderChange,id:"densityRange"})),r.a.createElement("div",null,r.a.createElement("label",{className:"mr-3",htmlFor:"grid-size"},"Grid Size"),r.a.createElement("input",{id:"grid-size",type:"number",min:"10",max:"50",value:this.state.gridSize,onChange:function(t){e.setGridSize(t.target.value)}}))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"explanation ".concat(this.state.explanation," ? 'show' : ''")},r.a.createElement("p",{className:"pl-3"},r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Wikipedia")),r.a.createElement("ul",null,r.a.createElement("li",null,"Each cell has 8 neighboring cells"),r.a.createElement("li",null,"A live cell with 2 or 3 live neighbors will continue to the next iteration"),r.a.createElement("li",null,"A dead cell with exactly 3 live neighbors will come to life"),r.a.createElement("li",null,"A live cell with 4 or more live neighbors will die, as if by overpopulation"))))),r.a.createElement(k.a,{isOpen:this.state.modalOpen,ariaHideApp:!1},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Preset Patterns"),r.a.createElement("div",{className:"row"},r.a.createElement("ul",null,f.a.map(S,(function(t,n){var a=t.split("\n").map((function(e){return e.trim()})),i=f.a.find(a,(function(e){return e.includes("!Name:")})).split(" ").slice(1).join(" ");return r.a.createElement("li",{onClick:function(){var t=a.join("\n");e.setState({textArea:t})},key:"preset-".concat(n)},r.a.createElement("a",{href:"#"},i))})))),r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.setState({modalOpen:!1}),e.loadTextArea()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{rows:"30",cols:"90",value:this.state.textArea,onChange:function(t){e.setState({textArea:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Load")))))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2deaa020.chunk.js.map