(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"79Qs":function(e,t,a){},lxvL:function(e,t,a){"use strict";a("L/Qf");var n=a("2/Rp"),r=a("q1tI"),i=a.n(r),s=a("4i/N");a("79Qs");t.a=function(e){var t=e.title,a=e.onGetActiveList,r=e.onClose,c=e.onAdd;return i.a.createElement("div",{className:"inner-page-head"},t,a?i.a.createElement(n.a,{className:"active-btn",onClick:a},"双十一活动排行榜"):"",c?i.a.createElement(n.a,{className:"active-btn",type:"primary",onClick:c},"发布公告"):"",r?i.a.createElement(s.a,{className:"close-icon",onClick:r}):"")}},uzN3:function(e,t,a){},"y/Fh":function(e,t,a){"use strict";a.r(t);a("k3Gp");var n,r,i,s,c,o=a("kLXV"),l=(a("tULf"),a("Vl3Y")),u=(a("1vPl"),a("5rEg")),m=(a("mbEz"),a("wCAj")),p=(a("8/o9"),a("tsqr")),d=a("o0o1"),y=a.n(d),f=a("J4zp"),b=a.n(f),v=a("q1tI"),g=a.n(v),w=a("kMSe"),h=a("2vnA"),E=a("yG8O"),k=a.n(E),x=a("lwsE"),S=a.n(x),O=a("W8MJ"),j=a.n(O),C=a("U+yc"),L=a.n(C),N=(a("1ABj"),a("vdCo")),z=(n=h.d.bound,r=h.d.bound,i=function(){function e(){S()(this,e),k()(this,"systemList",s,this),k()(this,"pagenation",c,this)}return j()(e,[{key:"getSystemList",value:function(e){var t;return y.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.awrap(Object(N.a)("/api/v1/admin/system/setting/list",e,!1));case 2:if(!(t=a.sent)){a.next=7;break}return this.systemList=t.data.list,this.pagenation.total=t.data.total,a.abrupt("return",!0);case 7:return a.abrupt("return",!1);case 8:case"end":return a.stop()}}),null,this)}},{key:"modifySystemSet",value:function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(Object(N.a)("/api/v1/admin/system/setting/edit",e,!1));case 2:if(0!==t.sent.code){t.next=5;break}return t.abrupt("return",!0);case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}))}}]),e}(),s=L()(i.prototype,"systemList",[h.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=L()(i.prototype,"pagenation",[h.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{page:1,page_size:10,total:0}}}),L()(i.prototype,"getSystemList",[n],Object.getOwnPropertyDescriptor(i.prototype,"getSystemList"),i.prototype),L()(i.prototype,"modifySystemSet",[r],Object.getOwnPropertyDescriptor(i.prototype,"modifySystemSet"),i.prototype),i),I=Object(v.createContext)(new z),q=a("lxvL");a("uzN3"),t.default=Object(w.a)((function(){var e=Object(v.useContext)(I),t=e.systemList,a=e.getSystemList,n=e.pagenation,r=e.modifySystemSet,i=Object(v.useRef)(null),s=Object(v.useState)({}),c=b()(s,2),d=c[0],f=c[1],w=Object(v.useState)(!1),E=b()(w,2),k=E[0],x=E[1],S=[{title:"id",key:"1",dataIndex:"id",width:70},{title:"配置项",dataIndex:"name",key:"2"},{title:"内容",dataIndex:"value",key:"3",width:230},{title:"操作",key:"operator",width:130,render:function(e){return g.a.createElement("a",{onClick:function(t){t.preventDefault(),f(e),x(!0),setTimeout((function(){i.current.setFieldsValue({id:e.id,name:e.name,key:e.key,value:e.value})}),200)}},"编辑")}}],O=function(){var e,t,n,r=arguments;return y.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t=r.length>1&&void 0!==r[1]?r[1]:10,n=r.length>2&&void 0!==r[2]?r[2]:{},i.next=5,y.a.awrap(a({page:e,page_size:t,search:n}));case 5:case"end":return i.stop()}}))},j=function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(r(e));case 2:t.sent?(p.a.success("设置成功"),O()):p.a.error("设置失败");case 4:case"end":return t.stop()}}))};return Object(v.useEffect)((function(){O()}),[]),g.a.createElement("div",{className:"system-set"},g.a.createElement(q.a,{className:"list-head",title:"系统设置"}),g.a.createElement("div",{className:"list-content"},g.a.createElement("div",{className:"list-content-inner"},g.a.createElement("div",{className:"inner-wrap"},g.a.createElement("div",{className:"inner-wrap-content"},g.a.createElement(m.a,{rowKey:function(e){return e.id},columns:S,dataSource:t,scroll:{y:"100%",x:"100%"},pagination:{position:["none","bottomRight"],total:Object(h.o)(n).total,pageSize:n.page_size,defaultCurrent:1},onChange:function(e){O(e.current)}}))))),g.a.createElement(o.a,{title:"编辑",visible:k,onOk:function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(d),j(i.current.getFieldValue()),x(!1);case 3:case"end":return e.stop()}}))},onCancel:function(){x(!1)}},g.a.createElement(l.a,{labelCol:{span:4},wrapperCol:{span:20},ref:i},g.a.createElement(l.a.Item,{label:"id",name:"id"},g.a.createElement(u.a,{disabled:!0})),g.a.createElement(l.a.Item,{label:"配置项",name:"name",rules:[{required:!0}]},g.a.createElement(u.a,null)),g.a.createElement(l.a.Item,{label:"key",name:"key",rules:[{required:!0}]},g.a.createElement(u.a,null)),g.a.createElement(l.a.Item,{label:"内容",name:"value",rules:[{required:!0}]},g.a.createElement(u.a,null)))))}))}}]);