(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[285],{2109:function(e,a,t){"use strict";t.r(a),t.d(a,"AddProduct",(function(){return C}));var n=t(51),r=t(13),l=t(14),c=t(16),o=t(15),m=t(0),s=t.n(m),i=t(1116),u=t(1114),d=t(1115),f=t(175),g=t(1119),h=t(803),y=t(806),b=t(805),p=(t(809),t(817),t(818),t(117)),E=(t(804),t(56)),N=(t(799),t(814),t(808),t(874),t(873)),v=t.n(N),C=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).handleChange=function(e){"file"===e.target.name?l.setState({file:e.target.files[0]}):l.setState(Object(n.a)({},e.target.name,e.target.value))},l.handleSubmit=function(e){e.preventDefault();var a=new FormData;a.append("categoryName",l.state.categoryName),a.append("file",l.state.file),p.a.post("/category/save-category",a).then((function(e){console.log(e.data),v.a.fire({icon:"success",title:"Success!",text:"Category Add successfully.",confirmButtonColor:"#3085d6",confirmButtonText:"OK"}).then((function(e){e.isConfirmed&&window.location.reload()}))})).catch((function(e){v.a.fire({icon:"error",title:"Oops...",text:"Something went wrong! Please try again later."})}))},l.state={categoryName:"",file:null},l}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement(u.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Category")),s.a.createElement(d.a,null,s.a.createElement(E.Route,{render:function(e){var a=e.history;return s.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/Category")}},"Back")}}))),s.a.createElement(g.a,null,s.a.createElement(h.a,{className:"m-1",onSubmit:this.handleSubmit},s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(y.a,null,"Category Name"),s.a.createElement(b.a,{required:!0,type:"text",name:"categoryName",value:this.state.categoryName,onChange:this.handleChange})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"})),s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component);a.default=C},808:function(e,a,t){}}]);
//# sourceMappingURL=285.036ee1a9.chunk.js.map