(function(){"use strict";var t={175:function(t,n,o){o(6992),o(8674),o(9601),o(7727);var e=o(9567),r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("div",{staticClass:"hello"}),o("main",{staticClass:"wrapper"},[o("TodoSearch",{attrs:{msg:"Add todo"}}),o("TodoContainer",{attrs:{todos:t.todos}})],1)])},i=[],u=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[o("h1",[t._v("My todos")]),o("div",t._l(t.todos,(function(t){return o("div",{key:t.id},[o("TodoItem",{attrs:{todo:t}})],1)})),0)])},c=[],a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("p",[t._v(t._s(t.todo.title))])])},s=[],l=(o(9653),{name:"TodoItem",props:{todo:{completed:Boolean,id:Number,title:String,userId:Number}}}),d=l,f=o(1001),p=(0,f.Z)(d,a,s,!1,null,"0e3edfe4",null),v=p.exports,h={name:"TodoContainer",props:["todos"],components:{TodoItem:v}},m=h,_=(0,f.Z)(m,u,c,!1,null,"e79ca282",null),g=_.exports,b=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[o("h1",[t._v(t._s(t.msg))])])},T=[],y={name:"TodoSearch",props:{msg:String}},O=y,w=(0,f.Z)(O,b,T,!1,null,"69d4341d",null),C=w.exports,x=o(6166),j=o.n(x),k={name:"App",data:function(){return{todos:[]}},components:{TodoContainer:g,TodoSearch:C},methods:{},created:function(){var t=this;j().get("https://jsonplaceholder.typicode.com/todos?_limit=20").then((function(n){return console.log(n),t.todos=n.data})).catch(console.log)}},Z=k,E=(0,f.Z)(Z,r,i,!1,null,null,null),S=E.exports;e.Z.config.productionTip=!1,new e.Z({render:function(t){return t(S)}}).$mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,i){if(!e){var u=1/0;for(l=0;l<t.length;l++){e=t[l][0],r=t[l][1],i=t[l][2];for(var c=!0,a=0;a<e.length;a++)(!1&i||u>=i)&&Object.keys(o.O).every((function(t){return o.O[t](e[a])}))?e.splice(a--,1):(c=!1,i<u&&(u=i));if(c){t.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[e,r,i]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,i,u=e[0],c=e[1],a=e[2],s=0;if(u.some((function(n){return 0!==t[n]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(a)var l=a(o)}for(n&&n(e);s<u.length;s++)i=u[s],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(l)},e=self["webpackChunktodo_vue"]=self["webpackChunktodo_vue"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(175)}));e=o.O(e)})();
//# sourceMappingURL=app-legacy.dd9de2f8.js.map