(function(){"use strict";var t={3103:function(t,e,o){var n=o(8935),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("div",{staticClass:"hello"}),o("h1",{staticClass:"title"},[t._v("Todo App")]),o("main",{staticClass:"main"},[o("div",{staticClass:"wrapper"},[o("TodoAdd",{attrs:{msg:"Add todo"},on:{"add-todo":t.addTodo}}),o("TodoContainer",{attrs:{todos:t.todos,all:t.all,done:t.done,undone:t.undone},on:{"del-todo":t.ddeleteTodo,"update:todos":function(e){t.todos=e}}})],1)])])},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._m(0),o("div",{staticClass:"quantity"},[o("button",{staticClass:"qu",class:{active:t.viewAll},attrs:{name:"viewAll"},on:{click:function(e){return t.setTodos(t.todos,"viewAll")}}},[t._v(" All "+t._s(t.all)+" ")]),t._v(" / "),o("button",{staticClass:"qu",class:{active:t.viewDone},attrs:{name:"viewDone"},on:{click:function(e){return t.setTodos(t.done,"viewDone")}}},[t._v(" Done "+t._s(t.done.length)+" ")]),t._v(" / "),o("button",{staticClass:"qu",class:{active:t.viewUndone},attrs:{name:"viewUndone"},on:{click:function(e){return t.setTodos(t.undone,"viewUndone")}}},[t._v(" Undone "+t._s(t.undone.length)+" ")])]),o("div",{staticClass:"todos"},t._l(t.filter,(function(e){return o("div",{key:e.id,attrs:{id:"todos"}},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)])},d=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"titleSearch"},[o("h3",{staticClass:"my-todos"},[t._v("My todos")]),o("input",{staticClass:"search",attrs:{type:"text",placeholder:"Search",name:"search"}})])}],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[o("button",{on:{click:function(e){return t.onDeleteTodo(t.todo.id)}}},[t._v("x")]),o("p",[t._v(t._s(t.todo.title))]),o("p",[t._v(t._s(t.todo.completed))])])},r=[],c={name:"TodoItem",data(){return{checked:!1}},props:{todo:{completed:Boolean,id:Number,title:String,userId:Number}},methods:{onDeleteTodo(t){this.$emit("del-todo",t)}}},u=c,v=o(3736),p=(0,v.Z)(u,l,r,!1,null,"66c3f5e0",null),h=p.exports,f={name:"TodoContainer",data(){return{filter:[],viewAll:!0,viewDone:!1,viewUndone:!1}},props:["todos","all","done","undone"],methods:{setTodos(t,e){this.filter=t,"viewAll"===e&&(this.viewAll=!0,this.viewDone=!1,this.viewUndone=!1),"viewDone"===e&&(this.viewAll=!1,this.viewDone=!0,this.viewUndone=!1),"viewUndone"===e&&(this.viewAll=!1,this.viewDone=!1,this.viewUndone=!0)}},components:{TodoItem:h},emits:["del-todo"],watch:{todos(){this.$emit("update:this.todos",this.todos)}},created(){this.setTodos(this.todos,"viewAll")}},m=f,g=(0,v.Z)(m,a,d,!1,null,"32af8974",null),w=g.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h3",{staticClass:"h3"},[t._v(t._s(t.msg))]),o("form",{staticClass:"formAdd",attrs:{action:"submit"},on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"inputAdd",attrs:{placeholder:"Add todo...",type:"text",name:"add"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btnAdd",attrs:{type:"submit",value:"+"}})])])},_=[],C=o(905),b={name:"TodoAdd",data(){return{title:""}},props:{msg:String},methods:{addTodo(t){t.preventDefault();const e={id:(0,C.Z)(),title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},S=b,A=(0,v.Z)(S,T,_,!1,null,"17256cec",null),O=A.exports,y=o(6166),D=o.n(y),I={name:"App",data(){return{todos:[],done:[],undone:[],all:0}},components:{TodoContainer:w,TodoAdd:O},methods:{addTodo(t){const e=[...this.todos,t];console.log(e),localStorage.setItem("vueTodos",JSON.stringify(e)),this.todos=JSON.parse(localStorage.getItem("vueTodos")),this.updateData(e)},updateData(t){this.all=t.length,this.done=t.filter((t=>t.completed)),this.undone=t.filter((t=>!t.completed))},ddeleteTodo(t){console.log(t,"todo");const e=this.todos.filter((e=>e.id!==t));localStorage.setItem("vueTodos",JSON.stringify(e)),this.todos=JSON.parse(localStorage.getItem("vueTodos")),this.updateData(e)}},created(){0===JSON.parse(localStorage.getItem("vueTodos")).length||null===JSON.parse(localStorage.getItem("vueTodos"))?D().get("https://jsonplaceholder.typicode.com/todos?_limit=20").then((t=>{localStorage.setItem("vueTodos",JSON.stringify(t.data));const e=JSON.parse(localStorage.getItem("vueTodos"));return this.updateData(e),this.todos=e})).catch(console.log):(this.todos=JSON.parse(localStorage.getItem("vueTodos")),this.updateData(this.todos))}},x=I,N=(0,v.Z)(x,s,i,!1,null,null,null),k=N.exports;n.Z.config.productionTip=!1,new n.Z({render:t=>t(k)}).$mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,i){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],i=t[c][2];for(var d=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(d=!1,i<a&&(a=i));if(d){t.splice(c--,1);var r=s();void 0!==r&&(e=r)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,s,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,i,a=n[0],d=n[1],l=n[2],r=0;if(a.some((function(e){return 0!==t[e]}))){for(s in d)o.o(d,s)&&(o.m[s]=d[s]);if(l)var c=l(o)}for(e&&e(n);r<a.length;r++)i=a[r],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self["webpackChunktodo_vue"]=self["webpackChunktodo_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3103)}));n=o.O(n)})();
//# sourceMappingURL=app.b9393abb.js.map