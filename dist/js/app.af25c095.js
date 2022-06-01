(function(){"use strict";var t={7972:function(t,e,o){var s=o(8935),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app",attrs:{id:"app"}},[t._m(0),o("main",{staticClass:"main"},[o("div",{staticClass:"wrapper"},[o("TodoAdd",{attrs:{msg:"Add todo"},on:{"add-todo":t.addTodo}}),o("TodoContainer",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo,"toggle-status":t.toggleCompleted,"update:todos":function(e){t.todos=e}}})],1)])])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("div",{staticClass:"header"}),o("h1",{staticClass:"main-title"},[t._v("Todo App")])])}],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("form",{staticClass:"form-search"},[o("h3",[t._v("My todos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBy,expression:"searchBy"}],staticClass:"search input",attrs:{type:"text",placeholder:"Search",name:"search"},domProps:{value:t.searchBy},on:{input:function(e){e.target.composing||(t.searchBy=e.target.value)}}})]),o("div",{staticClass:"filter-btns"},[o("button",{staticClass:"f-btn",class:{active:t.view.all},attrs:{name:"viewAll"},on:{click:function(e){return t.setTodos("viewAll")}}},[t._v(" All ")]),t._v(" / "),o("button",{staticClass:"f-btn",class:{active:t.view.done},attrs:{name:"viewDone"},on:{click:function(e){return t.setTodos("viewDone")}}},[t._v(" Completed ")]),t._v(" / "),o("button",{staticClass:"f-btn",class:{active:t.view.undone},attrs:{name:"viewUndone"},on:{click:function(e){return t.setTodos("viewUndone")}}},[t._v(" Incomplete ")])]),o("div",{staticClass:"todos"},t._l(t.filterTodo,(function(e){return o("div",{key:e.id,attrs:{id:"todos"}},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)},"toggle-status":function(o){return t.$emit("toggle-status",e.id)}}})],1)})),0),o("div",{staticClass:"footer"})])},d=[],a=(o(6699),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[o("button",{staticClass:"f-btn",on:{click:function(e){return t.onDeleteTodo(t.todo.id)}}},[t._v("x")]),o("h3",{staticClass:"todo-title"},[t._v(t._s(t.todo.title))]),o("p",[o("onoff-toggle",{attrs:{theme:"ios",onColor:"#ededed",offColor:"#ededed",borderColor:"#ededed",thumbColor:"#00b3db",width:"60",height:"30",shadow:"shadow"},on:{input:t.onTogleTodo},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)])}),l=[],c={name:"TodoItem",data(){return{checked:this.todo.completed,shadow:!1}},props:{todo:{completed:Boolean,id:Number,title:String,userId:Number}},methods:{onDeleteTodo(t){this.$emit("del-todo",t)},onTogleTodo(){this.$emit("toggle-status",this.todo.id)}}},u=c,h=o(3736),v=(0,h.Z)(u,a,l,!1,null,"56821b3c",null),m=v.exports,f={name:"TodoContainer",data(){return{searchBy:null,view:{all:!0,done:!1,undone:!1}}},methods:{getView(t,e){this.$emit("set-view",t,e),this.filter.showFilter=!1},setTodos(t){"viewAll"===t&&(this.view.all=!0,this.view.done=!1,this.view.undone=!1),"viewDone"===t&&(this.view.all=!1,this.view.done=!0,this.view.undone=!1),"viewUndone"===t&&(this.view.all=!1,this.view.done=!1,this.view.undone=!0)}},props:["todos"],components:{TodoItem:m},emits:["del-todo","toggle-status"],created(){this.setTodos("viewAll")},computed:{filterTodo(){return this.searchBy?this.todos.filter((t=>t.title.includes(this.searchBy))):this.view.done?this.todos.filter((t=>t.completed)):this.view.undone?this.todos.filter((t=>!t.completed)):this.todos}}},p=f,g=(0,h.Z)(p,r,d,!1,null,"2d0678b8",null),T=g.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h3",{staticClass:"h3"},[t._v(t._s(t.msg))]),o("p",{staticClass:"error"},[t._v(t._s(t.error))]),o("form",{staticClass:"form-add",attrs:{action:"submit"},on:{submit:t.addTodo,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()},keydown:function(e){t.error=""}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input-add input",attrs:{type:"text",name:"add",placeholder:"Todo name"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn-add",attrs:{type:"submit",value:"+"}})])])},b=[],C=o(905),y={name:"TodoAdd",data(){return{title:"",error:""}},props:{msg:String},methods:{addTodo(t){if(t.preventDefault(),this.title){const t={id:(0,C.Z)(),title:this.title,completed:!1};this.$emit("add-todo",t),this.title="",this.error=""}else this.error="Input is empty!"}}},_=y,S=(0,h.Z)(_,w,b,!1,null,"196ec6f6",null),O=S.exports,k=o(6166),I=o.n(k),N={name:"App",data(){return{todos:[]}},components:{TodoContainer:T,TodoAdd:O},methods:{addTodo(t){const e=this.sortTodos([...this.todos,t]);localStorage.setItem("vueTodos",JSON.stringify(e)),this.todos=JSON.parse(localStorage.getItem("vueTodos"))},deleteTodo(t){const e=this.todos.filter((e=>e.id!==t));localStorage.setItem("vueTodos",JSON.stringify(e)),this.todos=JSON.parse(localStorage.getItem("vueTodos"))},sortTodos(t){return t.sort(((t,e)=>Number(t.completed-Number(e.completed))))},toggleCompleted(t){const e=this.todos.find((e=>e.id===t));e.completed=!e.completed,localStorage.setItem("vueTodos",JSON.stringify(this.todos)),this.todos=this.sortTodos(JSON.parse(localStorage.getItem("vueTodos")))}},created(){0===JSON.parse(localStorage.getItem("vueTodos")).length||null===JSON.parse(localStorage.getItem("vueTodos"))?I().get("https://jsonplaceholder.typicode.com/todos?_limit=20").then((t=>{localStorage.setItem("vueTodos",JSON.stringify(t.data));const e=JSON.parse(localStorage.getItem("vueTodos"));return this.todos=this.sortTodos(e)})).catch(console.log):this.todos=this.sortTodos(JSON.parse(localStorage.getItem("vueTodos")))}},x=N,$=(0,h.Z)(x,n,i,!1,null,null,null),A=$.exports,J=o(5240);s.Z.use(J.Z),s.Z.config.productionTip=!1,new s.Z({render:t=>t(A)}).$mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,i){if(!s){var r=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],i=t[c][2];for(var d=!0,a=0;a<s.length;a++)(!1&i||r>=i)&&Object.keys(o.O).every((function(t){return o.O[t](s[a])}))?s.splice(a--,1):(d=!1,i<r&&(r=i));if(d){t.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,r=s[0],d=s[1],a=s[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in d)o.o(d,n)&&(o.m[n]=d[n]);if(a)var c=a(o)}for(e&&e(s);l<r.length;l++)i=r[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},s=self["webpackChunktodo_vue"]=self["webpackChunktodo_vue"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(7972)}));s=o.O(s)})();
//# sourceMappingURL=app.af25c095.js.map