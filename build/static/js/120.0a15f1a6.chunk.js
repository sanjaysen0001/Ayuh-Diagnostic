(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[120],{2079:function(e,t,a){"use strict";a.r(t),a.d(t,"EditPrediction",(function(){return N}));var n=a(51),r=a(13),l=a(14),i=a(16),s=a(15),c=a(0),o=a.n(c),u=a(1116),m=a(1114),d=a(1115),p=a(175),f=a(1119),h=a(803),b=a(806),g=a(805),E=a(117),v=(a(804),a(56)),y=a(799),O=a(807),j=a.n(O),N=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=l.props.match.params.id;E.a.post("admin/editPridiction/".concat(t),l.state).then((function(e){console.log(e),j()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/prediction/predictionList")})).catch((function(e){console.log(e)}))},l.state={title:"",rashiName:"",pre_type:"",desc:"",status:""},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;E.a.get("admin/getonePridiction/".concat(t)).then((function(t){console.log(t),e.setState({title:t.data.data.title,rashiName:t.data.data.rashiName,pre_type:t.data.data.pre_type,desc:t.data.data.desc,status:t.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(y.a,{breadCrumbTitle:"Predictoin",breadCrumbParent:"Home",breadCrumbActive:"Edit Predictoin "}),o.a.createElement(u.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Prediction")),o.a.createElement(d.a,null,o.a.createElement(v.Route,{render:function(e){var t=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/prediction/predictionList")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Title"),o.a.createElement(g.a,{required:!0,type:"text",name:"title",placeholder:"Enter Title",value:this.state.title,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Prediction Type"),o.a.createElement(g.a,{required:!0,type:"select",name:"pre_type",value:this.state.pre_type,onChange:this.changeHandler},o.a.createElement("option",{selected:!0},"---Select---"),o.a.createElement("option",null,"Daily"),o.a.createElement("option",null,"Weekly"),o.a.createElement("option",null,"Monthly"))),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Rashi name"),o.a.createElement(g.a,{required:!0,type:"select",name:"rashiName",value:this.state.rashiName,onChange:this.changeHandler},o.a.createElement("option",null,"---Select Rashi---"),o.a.createElement("option",null,"Aries"),o.a.createElement("option",null,"Taurus"),o.a.createElement("option",null,"Gemini"),o.a.createElement("option",null,"Cancer"),o.a.createElement("option",null,"Leo"),o.a.createElement("option",null,"Virgo"),o.a.createElement("option",null,"Libra"),o.a.createElement("option",null,"Scorpio"),o.a.createElement("option",null,"Saggitarius"),o.a.createElement("option",null,"Capricorn"),o.a.createElement("option",null,"Aquarius"),o.a.createElement("option",null,"Pisces"))),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Description"),o.a.createElement(g.a,{required:!0,type:"textarea",name:"desc",placeholder:"Enter desc",value:this.state.desc,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),o.a.createElement(m.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(c.Component);t.default=N},803:function(e,t,a){"use strict";var n=a(5),r=a(9),l=a(11),i=a(12),s=a(0),c=a.n(s),o=a(1),u=a.n(o),m=a(4),d=a.n(m),p=a(3),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,i=e.tag,s=e.innerRef,o=Object(r.a)(e,f),u=Object(p.mapToCssModules)(d()(t,!!l&&"form-inline"),a);return c.a.createElement(i,Object(n.a)({},o,{ref:s,className:u}))},t}(s.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b},804:function(e,t,a){},805:function(e,t,a){"use strict";var n=a(5),r=a(9),l=a(11),i=a(12),s=a(0),c=a.n(s),o=a(1),u=a.n(o),m=a(4),d=a.n(m),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,i=e.bsSize,s=e.valid,o=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,b=e.innerRef,g=Object(r.a)(e,f),E=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),y=u||("select"===l||"textarea"===l?l:"input"),O="form-control";h?(O+="-plaintext",y=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":E&&(O=m?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(t,o&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,O),a);return("input"===y||u&&"function"===typeof u)&&(g.type=l),g.children&&!h&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":o}))},t}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},806:function(e,t,a){"use strict";var n=a(5),r=a(9),l=a(0),i=a.n(l),s=a(1),c=a.n(s),o=a(4),u=a.n(o),m=a(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,l=e.hidden,s=e.widths,c=e.tag,o=e.check,p=e.size,f=e.for,h=Object(r.a)(e,d),b=[];s.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var l,i=!n;if(Object(m.isObject)(r)){var s,c=i?"-":"-"+t+"-";l=g(i,t,r.size),b.push(Object(m.mapToCssModules)(u()(((s={})[l]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s))),a)}else l=g(i,t,r),b.push(l)}}));var E=Object(m.mapToCssModules)(u()(t,!!l&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),a);return i.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:E}))};E.propTypes=h,E.defaultProps=b,t.a=E}}]);
//# sourceMappingURL=120.0a15f1a6.chunk.js.map