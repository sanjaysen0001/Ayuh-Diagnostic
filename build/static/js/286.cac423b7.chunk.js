(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[286],{2110:function(e,a,t){"use strict";t.r(a),t.d(a,"Addsubcategory",(function(){return S}));var n=t(51),r=t(13),l=t(14),c=t(174),o=t(16),s=t(15),m=t(0),u=t.n(m),i=t(1116),d=t(1114),g=t(1115),h=t(175),b=t(1119),y=t(803),f=t(806),C=t(805),p=(t(809),t(817),t(818),t(117)),v=(t(804),t(56)),E=(t(799),t(814),t(808),t(874),t(873)),N=t.n(E),S=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).handleChange=function(e){var a=e.target,t=a.name,r=a.value;l.setState(Object(n.a)({},t,r))},l.state={selectedCategory:"",subCategoryName:"",categories:[]},l.handleChange=l.handleChange.bind(Object(c.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(c.a)(l)),l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/category/view-category").then((function(a){e.setState({categories:a.data.Category}),console.log(a.data.Category)})).catch((function(e){console.error("There was an error fetching the categories!",e)}))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state,n=t.selectedCategory,r=t.subCategoryName;n&&r?p.a.post("/category/save-sub-category",{category:n,subCategoryName:r}).then((function(e){console.log(e.data),a.setState({selectedCategory:"",subCategoryName:""}),N.a.fire({icon:"success",title:"Success!",text:"Sub-Category Add successfully.",confirmButtonColor:"#3085d6",confirmButtonText:"OK"})})).catch((function(e){N.a.fire({icon:"error",title:"Oops...",text:"Something went wrong! Please try again later."})})):alert("Please fill in all fields")}},{key:"render",value:function(){var e=this.state,a=e.selectedCategory,t=e.subCategoryName,n=e.categories;return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(g.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Sub-Category")),u.a.createElement(g.a,null,u.a.createElement(v.Route,{render:function(e){var a=e.history;return u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/Sub-category")}},"Back")}}))),u.a.createElement(b.a,null,u.a.createElement(y.a,{className:"m-1",onSubmit:this.handleSubmit},u.a.createElement(d.a,null,u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement("label",{htmlFor:"categorySelect"},"Select Category"),u.a.createElement("br",null),u.a.createElement("select",{className:"form-select w-100",style:{height:"37px",border:"1px solid #d9d9d9",borderRadius:"5px"},"aria-label":"Default select example",id:"categorySelect",name:"selectedCategory",value:a,onChange:this.handleChange},u.a.createElement("option",{value:"",disabled:!0},"--Select--"),n.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.categoryName)})))),u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(f.a,{htmlFor:"subCategoryName"},"Sub-Category Name"),u.a.createElement(C.a,{required:!0,type:"text",name:"subCategoryName",id:"subCategoryName",value:t,onChange:this.handleChange}))),u.a.createElement(d.a,null,u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component);a.default=S},808:function(e,a,t){}}]);
//# sourceMappingURL=286.cac423b7.chunk.js.map