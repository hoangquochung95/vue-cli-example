webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=n("/5sW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},i=n("VU/8")({name:"App"},s,!1,null,null,null).exports,l=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[n("tbody",[t._m(0),t._v(" "),t._l(t.p.products,function(e){return n("tr",[n("td",[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("td",[t._l(t.p.action,function(a){return[n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:a.name,params:{id:e.id}}}},[t._v(" "+t._s(a.alias)+"                                                       ")])],1)])]})],2)])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Tên sản phẩm")]),this._v(" "),e("th",[this._v("Thao tác")])])}]},d=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Hung dep trai",p:{products:{a:{name:"Bàn",id:"1"},b:{name:"Ghế",id:"2"},c:{name:"Tủ",id:"3"}},action:[{alias:"Xóa",name:"delete"},{alias:"Example2",name:"example2"},{alias:"Example1",name:"example1"}]}}}},o,!1,null,null,null).exports,c=new r.a;c.$on("Deleted",function(t){a=t});var u={name:"delete",data:function(){return{form:null}},mounted:function(){this.form=a}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[n("tbody",[t._m(0),t._v(" "),n("tr",t._l(t.form,function(e,a){return n("td",[t._v(t._s(a)+" : "+t._s(e))])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{colspan:"3"}},[e("th",[this._v("Sản phẩm đã xóa")])])}]},m=n("VU/8")(u,h,!1,null,null,null).exports,v={name:"thaythe",data:function(){return{form:{height:"",width:"",weight:""},display:!1}},created:function(){var t=this;c.$on("getData",function(e){void 0!==e&&(t.display=!0,t.form.height=e.height,t.form.width=e.width,t.form.weight=e.weight)})},methods:{deleted:function(){c.$emit("DeleteEvent"),c.$emit("Deleted",this.form)}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"table"},[n("tbody",[n("tr",[n("td",[t._v(t._s(t.form.height))]),t._v(" "),n("td",[t._v(t._s(t.form.width))]),t._v(" "),n("td",[t._v(t._s(t.form.weight))]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-danger",on:{click:t.deleted}},[t._v("Xóa")])])])])])},staticRenderFns:[]},f=n("VU/8")(v,_,!1,null,null,null).exports;console.log(c);var p={name:"Example2",data:function(){return{form:{height:"10",width:"5",weight:"20"},deleted:!1}},created:function(){var t=this;c.$on("DeleteEvent",function(){t.deleted=!0})},methods:{save:function(){c.$emit("getData",this.form)}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.deleted,expression:"deleted"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n        Đã Xóa\n    ")]),t._v(" "),n("table",{staticClass:"table"},[n("tbody",[t._m(0),t._v(" "),t._l(t.form,function(e,a){return n("tr",[n("td",[t._v(t._s(a))]),t._v(" "),n("td",[t._v(t._s(e))]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form[a],expression:"form[index]"}],attrs:{type:"text"},domProps:{value:t.form[a]},on:{input:function(e){e.target.composing||t.$set(t.form,a,e.target.value)}}})])])}),t._v(" "),n("tr",[n("td",{attrs:{colspan:"3"}},[n("button",{on:{click:function(e){t.$router.go(-1)}}},[t._v("back")]),t._v(" "),n("button",{on:{click:function(e){t.save()}}},[t._v("Save")])])])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Chi tiết")]),this._v(" "),e("th",[this._v("Thông Số")]),this._v(" "),e("th",[this._v("Thao tác")])])}]},b={name:"Example2",data:function(){return{form:{height:"10",width:"5",weight:"20"},deleted:!1}},methods:{DeleteEvent:function(){this.deleted=!0}},components:{"thay-the":f,"san-pham":n("VU/8")(p,g,!1,null,null,null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("san-pham"),this._v(" "),e("thay-the",{attrs:{form:this.form},on:{deleteEvent:this.DeleteEvent}})],1)},staticRenderFns:[]},x=n("VU/8")(b,w,!1,null,null,null).exports,E={name:"thaythe",data:function(){return{}},methods:{deleted:function(){this.$emit("deleteEvent")}},props:{form:Object,deleteEvent:{}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",[t._v(t._s(t.form.height))]),t._v(" "),n("td",[t._v(t._s(t.form.width))]),t._v(" "),n("td",[t._v(t._s(t.form.weight))]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-danger",on:{click:t.deleted}},[t._v("Xóa")])])])])])},staticRenderFns:[]},y={name:"example1",data:function(){return{form:{height:"10",width:"5",weight:"20"},deleted:!1}},methods:{DeleteEvent:function(){this.deleted=!0}},components:{"thay-the":n("VU/8")(E,$,!1,null,null,null).exports}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.deleted,expression:"deleted"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n        Đã Xóa\n    ")]),t._v(" "),n("table",{staticClass:"table"},[n("tbody",[t._m(0),t._v(" "),t._l(t.form,function(e,a){return n("tr",[n("td",[t._v(t._s(a))]),t._v(" "),n("td",[t._v(t._s(e))]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form[a],expression:"form[index]"}],attrs:{type:"text"},domProps:{value:t.form[a]},on:{input:function(e){e.target.composing||t.$set(t.form,a,e.target.value)}}})])])}),t._v(" "),n("tr",[n("td",{attrs:{colspan:"3"}},[n("button",{on:{click:function(e){t.$router.go(-1)}}},[t._v("back")]),t._v(" "),n("button",{on:{click:function(e){t.save()}}},[t._v("Save")])])])],2)]),t._v(" "),n("thay-the",{attrs:{form:t.form},on:{deleteEvent:t.DeleteEvent}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Chi tiết")]),this._v(" "),e("th",[this._v("Thông Số")]),this._v(" "),e("th",[this._v("Thao tác")])])}]},k=n("VU/8")(y,C,!1,null,null,null).exports;r.a.use(l.a);var D=new l.a({routes:[{path:"/",name:"HelloWorld",component:d},{path:"/example1/:id",name:"example1",component:k},{path:"/delete",name:"delete",component:m},{path:"/example/:id",name:"example2",component:x}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:D,render:function(t){return t(i)}})}},["NHnr"]);
//# sourceMappingURL=app.c47c9b5ea8b8e848546e.js.map