webpackJsonp([4],{Kssg:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("//Fk"),a=n.n(o),r=n("7+uW"),s={name:"App",data:function(){return{}},created:function(){console.log(88888)},methods:{}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")(s,u,!1,function(t){n("Kssg")},null,null).exports,i=n("/ocq");r.default.use(i.a);var l=new i.a({mode:"history",routes:[{path:"/",name:"首页",component:function(t){n.e(2).then(function(){var e=[n("0lDp")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order",name:"订单",component:function(t){n.e(0).then(function(){var e=[n("vY7Z")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/orderDetail",name:"订单详情",component:function(t){n.e(1).then(function(){var e=[n("dRV+")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),p=n("9rMa"),d=n("mUbh"),f=n("UjVw"),m=n("ukYY"),h={"wsc.qinwell.com":{url:"http://wsc.qinwell.com/restapi"},"wsc.test.qinwell.com":{url:"http://wsc.test.qinwell.com/restapi"}}[window.location.host.toLowerCase()]||{url:"http://wsc.test.qinwell.com/restapi"},w=(h.url,h.url,h.url,h.url,h.url,{state:{},mutations:{},actions:{}}),v={state:{},mutations:{},actions:{}},b={state:{},mutations:{},actions:{}};r.default.use(p.a);var g=new p.a.Store({getters:f,mutations:m,actions:d,modules:{ORDER_LIST:w,ORDER_DETAIL:v,PRODUCT_LIST:b}}),q=n("5dq/"),_=n.n(q),k=(n("vlok"),n("zLbt"),n("aozt")),L=n.n(k);n("erWL"),r.default.use(_.a),r.default.prototype.$axios=L.a,r.default.config.productionTip=!1,L.a.interceptors.request.use(function(t){return localStorage.qhwsc_token&&(t.headers.Authorization=localStorage.qhwsc_token),t},function(t){return a.a.reject(t)}),L.a.interceptors.response.use(function(t){return 0==t.data.status&&Object(q.Toast)({duration:2e3,message:t.data.msg?t.data.msg:"服务器异常，请稍后重试！",type:"text"}),t},function(t){return a.a.reject(t)}),new r.default({el:"#app",router:l,store:g,components:{App:c},template:"<App/>"})},UjVw:function(t,e){},erWL:function(t,e){},mUbh:function(t,e){},ukYY:function(t,e){},vlok:function(t,e){},zLbt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.34d767d62b6dec2c5a73.js.map