(this["webpackJsonpplanning-cards"]=this["webpackJsonpplanning-cards"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),l=n.n(r),o=(n(10),n(3)),s=n(4);n(11);function u(e){var t=e.number,n=e.nextPage;return c.a.createElement("div",{className:"flex flex-col justify-center"},c.a.createElement("a",{className:"justify-center h-16 p-4 m-auto text-2xl",onClick:function(){return n(null)}},"Go Back"),c.a.createElement("p",{className:"justify-center h-screen align-center",style:{fontSize:"60vh"}},t))}function i(e){var t=e.numbers,n=e.nextPage;return c.a.createElement("div",{className:"flex flex-col justify-center"},c.a.createElement("p",{className:"justify-center h-16 p-4 m-auto text-2xl"},"Choose points"),c.a.createElement("div",{className:"flex flex-wrap"},t.map((function(e){return c.a.createElement(m,{key:e,number:e,nextPage:n})}))))}function m(e){var t=e.number,n=e.nextPage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){return n(t)},className:"w-32 w-1/3 h-32 px-4 py-2 text-3xl font-bold text-black bg-blue-100 hover:bg-blue-300"},t))}var f=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],l=[].concat(Object(o.a)(Array(11).keys()),["?","0"]).slice(1);return Object(a.useEffect)((function(){console.log(n)})),c.a.createElement("div",{className:"flex justify-center"},n?c.a.createElement(u,{number:n,nextPage:r}):c.a.createElement(i,{numbers:l,nextPage:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.5ae3fa7f.chunk.js.map