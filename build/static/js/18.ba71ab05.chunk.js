(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[18],{2024:function(e,t,a){"use strict";a.r(t),a.d(t,"Testlistadd",(function(){return C}));var n=a(51),r=a(13),c=a(14),l=a(174),o=a(16),s=a(15),i=a(0),m=a.n(i),u=a(1116),d=a(1114),h=a(1115),g=a(175),b=a(1119),f=a(806),p=a(805),y=(a(809),a(817),a(818),a(117)),E=(a(804),a(56)),v=(a(814),a(808),a(874),a(873)),N=a.n(v),C=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;c.setState(Object(n.a)({},a,r))},c.state={category:"",testName:"",price:"",discountPrice:"",categories:[]},c.handleChange=c.handleChange.bind(Object(l.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(l.a)(c)),c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/category/view-category").then((function(t){e.setState({categories:t.data.Category}),console.log(t.data.Category)})).catch((function(e){console.error("There was an error fetching the categories!",e)}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a={category:t.category,testName:t.testName,price:t.price,discountPrice:t.discountPrice};y.a.post("/test/save-test",a).then((function(e){console.log("Form submitted successfully:",e.data),N.a.fire({icon:"success",title:"Success!",text:"Text Add successfully.",confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),window.location.reload()})).catch((function(e){console.error("There was an error submitting the form!",e),N.a.fire({icon:"error",title:"Oops...",text:"Something went wrong! Please try again later."})}))}},{key:"render",value:function(){var e=this.state,t=e.category,a=e.testName,n=e.price,r=e.discountPrice,c=e.categories;return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(h.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Test")),m.a.createElement(h.a,null,m.a.createElement(E.Route,{render:function(e){var t=e.history;return m.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/Test")}},"Back")}}))),m.a.createElement(b.a,null,m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement(d.a,null,m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement("label",{htmlFor:"categorySelect"},"Select Category"),m.a.createElement("br",null),m.a.createElement("select",{className:"form-select w-100",style:{height:"37px",border:"1px solid #d9d9d9",borderRadius:"5px"},"aria-label":"Default select example",id:"categorySelect",name:"category",value:t,onChange:this.handleChange},m.a.createElement("option",{value:"",disabled:!0},"--Select--"),c.map((function(e){return m.a.createElement("option",{key:e.id,value:e.id},e.categoryName)})))),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,null,"Test Name"),m.a.createElement(p.a,{required:!0,type:"text",name:"testName",placeholder:"Test Name",value:a,onChange:this.handleChange})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,null,"Price"),m.a.createElement(p.a,{required:!0,type:"text",name:"price",placeholder:"Price",value:n,onChange:this.handleChange})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,null,"Discount Price"),m.a.createElement(p.a,{required:!0,type:"text",name:"discountPrice",placeholder:"Discount Price",value:r,onChange:this.handleChange})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))))}}]),a}(i.Component);t.default=C},808:function(e,t,a){}}]);
//# sourceMappingURL=18.ba71ab05.chunk.js.map