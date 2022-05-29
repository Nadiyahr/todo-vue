(function(){"use strict";var t={3429:function(t,e,n){var o=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"hello"}),n("h1",{staticClass:"title"},[t._v("Todo App")]),n("main",{staticClass:"main"},[n("div",{staticClass:"wrapper"},[n("TodoSearch",{attrs:{msg:"Add todo"}}),n("TodoContainer",{attrs:{todos:t.todos}})],1)])])},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._m(1),n("div",{staticClass:"todos"},t._l(t.todos,(function(t){return n("div",{key:t.id,attrs:{id:"todos"}},[n("TodoItem",{attrs:{todo:t}})],1)})),0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"titleSearch"},[n("h3",{staticClass:"my-todos"},[t._v("My todos")]),n("input",{staticClass:"search",attrs:{type:"text",placeholder:"Search",name:"search",id:"search"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quantity"},[n("button",{staticClass:"qu"},[t._v("All 20")]),t._v("/"),n("button",{staticClass:"qu"},[t._v("Done 11")]),t._v("/"),n("button",{staticClass:"qu"},[t._v("Undone 9")])])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("p",[t._v(t._s(t.todo.title))]),n("b-form-checkbox",{attrs:{name:"check-button",switch:""},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},l=[],u={name:"TodoItem",data(){return{checked:!1}},props:{todo:{completed:Boolean,id:Number,title:String,userId:Number}}},d=u,f=n(3736),p=(0,f.Z)(d,c,l,!1,null,"8a194a78",null),h=p.exports,v={name:"TodoContainer",props:["todos"],components:{TodoItem:h}},m=v,_=(0,f.Z)(m,a,i,!1,null,"b4a28f30",null),b=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h3",{staticClass:"h3"},[t._v(t._s(t.msg))]),t._m(0)])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"formAdd",attrs:{action:"submit"}},[n("input",{staticClass:"inputAdd",attrs:{placeholder:"Add new todo",type:"text",name:"add",id:"add"}}),n("button",{staticClass:"add"},[t._v("+")])])}],y={name:"TodoSearch",props:{msg:String}},k=y,T=(0,f.Z)(k,C,g,!1,null,"462fd883",null),w=T.exports,x=n(6166),O=n.n(x),E={name:"App",data(){return{todos:[]}},components:{TodoContainer:b,TodoSearch:w},methods:{},created(){O().get("https://jsonplaceholder.typicode.com/todos?_limit=20").then((t=>(console.log(t),this.todos=t.data))).catch(console.log)}},$=E,j=(0,f.Z)($,r,s,!1,null,null,null),A=j.exports;o.Z.config.productionTip=!1,new o.Z({render:t=>t(A)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,s){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],s=t[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var u=c(n)}for(e&&e(o);l<a.length;l++)s=a[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},o=self["webpackChunktodo_vue"]=self["webpackChunktodo_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3429)}));o=n.O(o)})();
//# sourceMappingURL=app.bf396652.js.map