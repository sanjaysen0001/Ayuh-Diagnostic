(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[288],{2111:function(e,a,t){"use strict";t.r(a),t.d(a,"Editsubcategory",(function(){return S}));var n=t(51),r=t(13),c=t(14),l=t(174),o=t(16),u=t(15),s=t(0),m=t.n(s),i=t(1116),d=t(1114),h=t(1115),g=t(175),b=t(1119),y=t(803),f=t(806),p=t(805),E=(t(809),t(817),t(818),t(117)),v=(t(804),t(56)),C=(t(799),t(814),t(808),t(874),t(873)),N=t.n(C),S=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).fetchData=function(e){E.a.get("/category/view-sub-category-by-id/".concat(e)).then((function(e){var a;n.setState(e.data.SubCategory),console.log(null===(a=e.data)||void 0===a?void 0:a.SubCategory)})).catch((function(e){n.setState({error:e.message})}))},n.state={category:"",subCategoryName:"",id:n.props.match.params.id},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.fetchData(e)}},{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.category,n=a.subCategoryName,r=a.id;E.a.put("/category/update-sub-category/".concat(r),{category:t,subCategoryName:n}).then((function(e){console.log(e.data),N.a.fire({icon:"success",title:"Success!",text:"Sub-Category Edit successfully.",confirmButtonColor:"#3085d6",confirmButtonText:"OK"})})).catch((function(e){console.error("There was an error updating the category!",e)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(h.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Sub-Category")),m.a.createElement(h.a,null,m.a.createElement(v.Route,{render:function(e){var a=e.history;return m.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/Sub-category")}},"Back")}}))),m.a.createElement(b.a,null,m.a.createElement(y.a,{className:"m-1",onSubmit:this.handleSubmit},m.a.createElement(d.a,null,m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,null,"Category Name"),m.a.createElement(p.a,{required:!0,type:"text",name:"category",disabled:!0,value:this.state.category,onChange:this.handleChange})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,null,"Sub-Category Name"),m.a.createElement(p.a,{required:!0,type:"text",name:"subCategoryName",value:this.state.subCategoryName,onChange:this.handleChange}))),m.a.createElement(d.a,null,m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(s.Component);a.default=S},808:function(e,a,t){}}]);
//# sourceMappingURL=288.a6eb9477.chunk.js.map