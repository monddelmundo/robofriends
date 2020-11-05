(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),c=n.n(a),i=(n(25),n(6)),s=n.n(i),l=n(11),u=n(17),d=function(e){var t=e.email,n=e.name,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},h=function(e){var t=e.robots;return console.log("cardList"),o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},f=o.a.memo((function(e){e.searchField;var t=e.searchChange;return console.log("searchfield"),o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))})),b=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"600px"}},e.children)},g=n(12),p=n(13),E=n(19),m=n(18),v=function(e){Object(E.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"That is not good!"):this.props.children}}]),n}(r.Component),O=(n(27),n(2)),w=o.a.memo((function(){return console.log("Header"),o.a.createElement("h1",{className:"f2"},"Robofriends")}));var j=function(e){var t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(O.c)((function(e){return e.searchRobots.searchField})),d=Object(O.c)((function(e){return e.requestRobots.robots})),g=Object(O.c)((function(e){return e.requestRobots.isPending})),p=(Object(O.c)((function(e){return e.requestRobots.error})),Object(O.b)());function E(){return(E=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===d.length&&m(),d.length>0&&c(d);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[d.length]),Object(r.useEffect)((function(){d.length&&c(d.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})))}),[i.length]);var m=function(){!function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}(p)};return g?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement(w,null),o.a.createElement(f,{searchChange:function(e){p({type:"CHANGE_SEARCH_FIELD",payload:e.target.value})}}),o.a.createElement(b,null,o.a.createElement(v,null,o.a.createElement(h,{robots:a}))))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(33);var R=n(3),C=n(15),k=n(16),_=n(1),T={searchField:""},N={isPending:!1,robots:[],error:""},A=Object(k.createLogger)(),L=Object(R.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(_.a)(Object(_.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(_.a)(Object(_.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(_.a)(Object(_.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),U=Object(R.d)(L,Object(R.a)(C.a,A));c.a.render(o.a.createElement(O.a,{store:U},o.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.3e44fbd9.chunk.js.map