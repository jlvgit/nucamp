(this.webpackJsonpnucampsite=this.webpackJsonpnucampsite||[]).push([[0],{100:function(e,t,s){},154:function(e,t,s){},155:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(16),r=s.n(n),i=(s(100),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,183)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))}),o=(s(101),s(102),s(103),s(104),s(105),s(21)),l=s(22),j=s(24),d=s(23),m=s(11),h=s(27),b=s(12),u="ADD_COMMENT",O="CAMPSITES_LOADING",p="CAMPSITES_FAILED",x="ADD_CAMPSITES",f="ADD_COMMENTS",g="COMMENTS_FAILED",N="PROMOTIONS_LOADING",v="ADD_PROMOTIONS",y="PROMOTIONS_FAILED",w="http://localhost:3001/",M=function(e,t,s,c){return function(a){var n={campsiteId:e,rating:t,author:s,text:c};return n.date=(new Date).toISOString(),fetch(w+"comments",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return a({type:u,payload:e})})).catch((function(e){console.log("post comment",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}},k=function(){return{type:O}},C=function(e){return{type:p,payload:e}},L=function(e){return{type:x,payload:e}},S=function(e){return{type:g,payload:e}},F=function(e){return{type:f,payload:e}},E=function(){return{type:N}},I=function(e){return{type:y,payload:e}},T=function(e){return{type:v,payload:e}},A=s(57),D=s(90),P=s(17),q=s(156),R=s(157),W=s(158),_=s(159),U=s(160),Y=s(161),J=s(162),B=s(163),G=s(182),H=s(164),Z=s(165),z=s(166),$=s(167),K=s(168),Q=s(169),V=s(10),X=s(0),ee=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).toggleNav=c.toggleNav.bind(Object(P.a)(c)),c.state={isNavOpen:!1,isModalOpen:!1},c.toggleNav=c.toggleNav.bind(Object(P.a)(c)),c.toggleModal=c.toggleModal.bind(Object(P.a)(c)),c.handleLogin=c.handleLogin.bind(Object(P.a)(c)),c}return Object(l.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){alert("Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember: ").concat(this.remember.checked)),this.toggleModal(),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(X.jsxs)(a.a.Fragment,{children:[Object(X.jsx)(q.a,{fluid:!0,children:Object(X.jsx)("div",{className:"container",children:Object(X.jsx)("div",{className:"row",children:Object(X.jsxs)("div",{className:"col",children:[Object(X.jsx)("h1",{children:"NuCamp"}),Object(X.jsx)("h2",{children:"a better way to camp"})]})})})}),Object(X.jsx)(R.a,{dark:!0,sticky:"top",expand:"md",children:Object(X.jsxs)("div",{className:"container",children:[Object(X.jsx)(W.a,{className:"mr-auto",href:"/",children:Object(X.jsx)("img",{src:"/assets/images/logo.png",height:"30",width:"30",alt:"NuCamp Logo"})}),Object(X.jsx)(_.a,{onClick:this.toggleNav}),Object(X.jsxs)(U.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(X.jsxs)(Y.a,{navbar:!0,children:[Object(X.jsx)(J.a,{children:Object(X.jsxs)(V.c,{className:"nav-link",to:"/home",children:[Object(X.jsx)("i",{className:"fa fa-home fa-lg"})," Home"]})}),Object(X.jsx)(J.a,{children:Object(X.jsxs)(V.c,{className:"nav-link",to:"/directory",children:[Object(X.jsx)("i",{className:"fa fa-list fa-lg"}),"Directory"]})}),Object(X.jsx)(J.a,{children:Object(X.jsxs)(V.c,{className:"nav-link",to:"/aboutus",children:[Object(X.jsx)("i",{className:"fa fa-info fa-lg"})," About"]})}),Object(X.jsx)(J.a,{children:Object(X.jsxs)(V.c,{className:"nav-link",to:"/contactus",children:[Object(X.jsx)("i",{className:"fa fa-address-card fa-lg"}),"Contact Us"]})})]}),Object(X.jsx)("span",{className:"navbar-text ml-auto",children:Object(X.jsxs)(B.a,{outline:!0,onClick:this.toggleModal,children:[Object(X.jsx)("i",{className:"fa fa-sign-in fa-lg"})," Login"]})})]})]})}),Object(X.jsxs)(G.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(X.jsx)(H.a,{toggle:this.toggleModal,children:"Login"}),Object(X.jsx)(Z.a,{children:Object(X.jsxs)(z.a,{onSubmit:this.handleLogin,children:[Object(X.jsxs)($.a,{children:[Object(X.jsx)(K.a,{htmlFor:"username",children:"Username"}),Object(X.jsx)(Q.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(X.jsxs)($.a,{children:[Object(X.jsx)(K.a,{htmlFor:"password",children:"Password"}),Object(X.jsx)(Q.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(X.jsx)($.a,{check:!0,children:Object(X.jsxs)(K.a,{check:!0,children:[Object(X.jsx)(Q.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(X.jsx)(B.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(c.Component);var te=function(e){return Object(X.jsx)("footer",{className:"site-footer",children:Object(X.jsx)("div",{className:"container",children:Object(X.jsxs)("div",{className:"row",children:[Object(X.jsxs)("div",{className:"col-4 col-sm-2 offset-1",children:[Object(X.jsx)("h5",{children:"Links"}),Object(X.jsxs)("ul",{className:"list-unstyled",children:[Object(X.jsx)("li",{children:Object(X.jsx)(V.b,{to:"/home",children:"Home"})}),Object(X.jsx)("li",{children:Object(X.jsx)(V.b,{to:"/directory",children:"Directory"})}),Object(X.jsx)("li",{children:Object(X.jsx)(V.b,{to:"/aboutus",children:"About"})}),Object(X.jsx)("li",{children:Object(X.jsx)(V.b,{to:"/contactus",children:"Contact"})})]})]}),Object(X.jsxs)("div",{className:"col-6 col-sm-3 text-center",children:[Object(X.jsx)("h5",{children:"Social"}),Object(X.jsx)("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/",children:Object(X.jsx)("i",{className:"fa fa-instagram"})}),Object(X.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/",children:Object(X.jsx)("i",{className:"fa fa-facebook"})}),Object(X.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(X.jsx)("i",{className:"fa fa-twitter"})}),Object(X.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(X.jsx)("i",{className:"fa fa-youtube"})})]}),Object(X.jsxs)("div",{className:"col-sm-4 text-center",children:[Object(X.jsxs)("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234",children:[Object(X.jsx)("i",{className:"fa fa-phone"})," 1-206-555-1234"]}),Object(X.jsx)("br",{}),Object(X.jsxs)("a",{role:"button",className:"btn btn-link",href:"mailto:notreal@notreal.co",children:[Object(X.jsx)("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"]})]})]})})})},se=s(170),ce=s(171),ae=s(172),ne=s(173),re=s(174),ie=s(175),oe=function(){return Object(X.jsxs)("div",{className:"col",children:[Object(X.jsx)("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(X.jsx)("p",{children:"Loading..."})]})};function le(e){var t=e.campsite;return Object(X.jsx)(se.a,{children:Object(X.jsxs)(V.b,{to:"/directory/".concat(t.id),children:[Object(X.jsx)(ce.a,{width:"100%",src:w+t.image,alt:t.name})," ",Object(X.jsx)(ae.a,{children:Object(X.jsx)(ne.a,{children:t.name})})]})})}var je=function(e){var t=e.campsites.campsites.map((function(e){return Object(X.jsx)("div",{className:"col-md-5 m-1",children:Object(X.jsx)(le,{campsite:e})},e.id)}));return e.campsites.isLoading?Object(X.jsx)("div",{className:"container",children:Object(X.jsx)("div",{className:"row",children:Object(X.jsx)(oe,{})})}):e.campsites.errMess?Object(X.jsx)("div",{className:"container",children:Object(X.jsx)("div",{className:"row",children:Object(X.jsx)("div",{className:"col",children:Object(X.jsx)("h4",{children:e.campsites.errMess})})})}):Object(X.jsxs)("div",{className:"container",children:[Object(X.jsx)("div",{className:"row",children:Object(X.jsxs)("div",{className:"col",children:[Object(X.jsxs)(re.a,{children:[Object(X.jsx)(ie.a,{children:Object(X.jsx)(V.b,{to:"/home",children:"Home"})}),Object(X.jsx)(ie.a,{active:!0,children:"Directory"})]}),Object(X.jsx)("h2",{children:"Directory"}),Object(X.jsx)("hr",{})]})}),Object(X.jsx)("div",{className:"row",children:t})]})},de=s(176),me=s(177),he=s(38),be=function(e){return e&&e.length},ue=function(e){return function(t){return!t||t.length<=e}};function Oe(e){var t=e.campsite;return Object(X.jsx)("div",{className:"col-md-5 m-1",children:Object(X.jsx)(he.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(X.jsxs)(se.a,{children:[Object(X.jsx)(ce.a,{top:!0,src:w+t.image,alt:t.name}),Object(X.jsx)(de.a,{children:Object(X.jsx)(me.a,{children:t.description})})]})})})}function pe(e){var t=e.comments,s=e.postComment,c=e.campsiteId;return t?Object(X.jsxs)("div",{className:"col-md-5 m-1",children:[Object(X.jsx)("h4",{children:"Comments"}),Object(X.jsx)(he.Stagger,{in:!0,children:t.map((function(e){return Object(X.jsx)(he.Fade,{in:!0,children:Object(X.jsx)("div",{children:Object(X.jsxs)("p",{children:[e.text,Object(X.jsx)("br",{}),"-- ",e.author,","," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})})},e.id)}))}),Object(X.jsx)(xe,{campsiteId:c,postComment:s})," "]}):Object(X.jsx)("div",{})}var xe=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={isModalOpen:!1,author:"",rating:"",text:"",touched:{author:!1}},c.toggleModal=c.toggleModal.bind(Object(P.a)(c)),c.handleCommentSubmit=c.handleCommentSubmit.bind(Object(P.a)(c)),c}return Object(l.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleCommentSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.campsiteId,e.rating,e.author,e.text)}},{key:"render",value:function(){return Object(X.jsxs)("div",{children:[Object(X.jsxs)(B.a,{outline:!0,onClick:this.toggleModal,children:[Object(X.jsx)("i",{className:"fa fa-pencil fa-lg p-1","aria-hidden":"true"}),"Submit Comment"]}),Object(X.jsxs)(G.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(X.jsx)(H.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(X.jsx)(Z.a,{children:Object(X.jsxs)(b.LocalForm,{onSubmit:this.handleCommentSubmit,children:[Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)(K.a,{htmlFor:"rating",children:"Rating"}),Object(X.jsxs)(b.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control",children:[Object(X.jsx)("option",{}),Object(X.jsx)("option",{value:"1",children:"1"}),Object(X.jsx)("option",{value:"2",children:"2"}),Object(X.jsx)("option",{value:"3",children:"3"}),Object(X.jsx)("option",{value:"4",children:"4"}),Object(X.jsx)("option",{value:"5",children:"5"})]})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)(K.a,{htmlFor:"author",children:"Your Name"}),Object(X.jsx)(b.Control.text,{model:".author",id:"author",name:"author",placeholder:"Enter Your Name...",className:"form-control",validators:{required:be,minLength:(e=2,function(t){return t&&t.length>=e}),maxLength:ue(15)}}),Object(X.jsx)(b.Errors,{className:"text-danger",model:".author",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)(K.a,{htmlFor:"text",children:"Comment"}),Object(X.jsx)(b.Control.textarea,{model:".text",id:"text",name:"text",rows:"6",placeholder:"Enter Your Comment...",className:"form-control"})]}),Object(X.jsx)(B.a,{type:"submit",value:"submit",color:"primary",children:"Submit"})]})})]})]});var e}}]),s}(c.Component);var fe=function(e){return e.isLoading?Object(X.jsx)("div",{className:"container",children:Object(X.jsx)("div",{className:"row",children:Object(X.jsx)(oe,{})})}):e.errMess?Object(X.jsx)("div",{className:"container",children:Object(X.jsx)("div",{className:"row",children:Object(X.jsx)("div",{className:"col",children:Object(X.jsx)("h4",{children:e.errMess})})})}):e.campsite?Object(X.jsxs)("div",{className:"container",children:[Object(X.jsx)("div",{className:"row",children:Object(X.jsxs)("div",{className:"col",children:[Object(X.jsxs)(re.a,{children:[Object(X.jsx)(ie.a,{children:Object(X.jsx)(V.b,{to:"/directory",children:"Directory"})}),Object(X.jsx)(ie.a,{active:!0,children:e.campsite.name})]}),Object(X.jsx)("h2",{children:e.campsite.name}),Object(X.jsx)("hr",{})]})}),Object(X.jsxs)("div",{className:"row",children:[Object(X.jsx)(Oe,{campsite:e.campsite}),Object(X.jsx)(pe,{comments:e.comments,postComment:e.postComment,campsiteId:e.campsite.id})]})]}):Object(X.jsx)("div",{})};function ge(e){var t=e.item,s=e.isLoading,c=e.errMess;return s?Object(X.jsx)(oe,{}):c?Object(X.jsx)("h4",{children:c}):Object(X.jsx)(he.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(50%)"},children:Object(X.jsxs)(se.a,{children:[Object(X.jsx)(ce.a,{src:w+t.image,alt:t.name}),Object(X.jsxs)(de.a,{children:[Object(X.jsx)(ne.a,{children:t.name}),Object(X.jsx)(me.a,{children:t.description})]})]})})}var Ne=function(e){return Object(X.jsx)("div",{className:"container",children:Object(X.jsxs)("div",{className:"row",children:[Object(X.jsx)("div",{className:"col-md m-1",children:Object(X.jsx)(ge,{item:e.campsite,isLoading:e.campsitesLoading,errMess:e.campsitesErrMess})}),Object(X.jsx)("div",{className:"col-md m-1",children:Object(X.jsx)(ge,{item:e.promotion,isLoading:e.promotionLoading,errMess:e.promotionErrMess})}),Object(X.jsx)("div",{className:"col-md m-1",children:Object(X.jsx)(ge,{item:e.partner})})]})})},ve=s(58),ye=s(178),we=s(179),Me=function(e){return e&&e.length},ke=function(e){return function(t){return!t||t.length<=e}},Ce=function(e){return function(t){return t&&t.length>=e}},Le=function(e){return!isNaN(+e)},Se=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},Fe=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"By Phone",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},c.handleInputChange=c.handleInputChange.bind(Object(P.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(P.a)(c)),c}return Object(l.a)(s,[{key:"handleInputChange",value:function(e){var t=e.target,s=t.name,c="checkbox"===t.type?t.checked:t.value;this.setState(Object(ve.a)({},s,c))}},{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(X.jsxs)("div",{className:"container",children:[Object(X.jsx)("div",{className:"row",children:Object(X.jsxs)("div",{className:"col",children:[Object(X.jsxs)(re.a,{children:[Object(X.jsx)(ie.a,{children:Object(X.jsx)(V.b,{to:"/home",children:"Home"})}),Object(X.jsx)(ie.a,{active:!0,children:"Contact Us"})]}),Object(X.jsx)("h2",{children:"Contact Us"}),Object(X.jsx)("hr",{})]})}),Object(X.jsxs)("div",{className:"row row-content align-items-center",children:[Object(X.jsxs)("div",{className:"col-sm-4",children:[Object(X.jsx)("h5",{children:"Our Address"}),Object(X.jsxs)("address",{children:["1 Nucamp Way",Object(X.jsx)("br",{}),"Seattle, WA 98001",Object(X.jsx)("br",{}),"U.S.A."]})]}),Object(X.jsxs)("div",{className:"col",children:[Object(X.jsxs)("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234",children:[Object(X.jsx)("i",{className:"fa fa-phone"})," 1-206-555-1234"]}),Object(X.jsx)("br",{}),Object(X.jsxs)("a",{role:"button",className:"btn btn-link",href:"mailto:fakeemail@fakeemail.co",children:[Object(X.jsx)("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"]})]})]}),Object(X.jsxs)("div",{className:"row row-content",children:[Object(X.jsxs)("div",{className:"col-12",children:[Object(X.jsx)("h2",{children:"Send us your Feedback"}),Object(X.jsx)("hr",{})]}),Object(X.jsx)("div",{className:"col-md-10",children:Object(X.jsxs)(b.Form,{model:"feedbackForm",onSubmit:function(t){return e.handleSubmit(t)},children:[" ",Object(X.jsxs)(ye.a,{className:"form-group",children:[Object(X.jsx)(K.a,{htmlFor:"firstName",md:2,children:"First Name"}),Object(X.jsxs)(we.a,{md:10,children:[Object(X.jsx)(b.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:Me,minLength:Ce(2),maxLength:ke(15)}}),Object(X.jsx)(b.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(X.jsxs)(ye.a,{className:"form-group",children:[Object(X.jsx)(K.a,{htmlFor:"lastName",md:2,children:"Last Name"}),Object(X.jsxs)(we.a,{md:10,children:[Object(X.jsx)(b.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:Me,minLength:Ce(2),maxLength:ke(15)}}),Object(X.jsx)(b.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(X.jsxs)(ye.a,{className:"form-group",children:[Object(X.jsx)(K.a,{htmlFor:"phoneNum",md:2,children:"Phone"}),Object(X.jsxs)(we.a,{md:10,children:[Object(X.jsx)(b.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:Me,minLength:Ce(10),maxLength:ke(15),isNumber:Le}}),Object(X.jsx)(b.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(X.jsxs)(ye.a,{className:"form-group",children:[Object(X.jsx)(K.a,{htmlFor:"email",md:2,children:"Email"}),Object(X.jsxs)(we.a,{md:10,children:[Object(X.jsx)(b.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:Me,validEmail:Se}}),Object(X.jsx)(b.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}})]})]}),Object(X.jsxs)(ye.a,{className:"form-group",children:[Object(X.jsx)(K.a,{htmlFor:"feedback",md:2,children:"Your Feedback"}),Object(X.jsx)(we.a,{md:10,children:Object(X.jsx)(b.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"12",className:"form-control"})})]}),Object(X.jsx)(ye.a,{className:"form-group",children:Object(X.jsx)(we.a,{md:{size:10,offset:2},children:Object(X.jsx)(B.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(c.Component),Ee=s(180),Ie=s(181);function Te(e){var t=e.partner;return t?Object(X.jsxs)(a.a.Fragment,{children:[Object(X.jsx)(Ee.a,{object:"true",src:t.image,alt:t.name,width:"150"}),Object(X.jsxs)(Ee.a,{body:"true",className:"ml-5 mb-4",children:[Object(X.jsx)(Ee.a,{heading:"true",children:t.name}),t.description]})]}):Object(X.jsx)("div",{})}var Ae=function(e){var t=e.partners.map((function(e){return Object(X.jsx)(Ee.a,{tag:"li",children:Object(X.jsx)(Te,{partner:e})},e.id)}));return Object(X.jsxs)("div",{className:"container",children:[Object(X.jsx)("div",{className:"row",children:Object(X.jsxs)("div",{className:"col",children:[Object(X.jsxs)(re.a,{children:[Object(X.jsx)(ie.a,{children:Object(X.jsx)(V.b,{to:"/home",children:"Home"})}),Object(X.jsx)(ie.a,{active:!0,children:"About Us"})]}),Object(X.jsx)("h2",{children:"About Us"}),Object(X.jsx)("hr",{})]})}),Object(X.jsxs)("div",{className:"row row-content",children:[Object(X.jsxs)("div",{className:"col-sm-6",children:[Object(X.jsx)("h3",{children:"Our Mission"}),Object(X.jsx)("p",{children:"We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other."})]}),Object(X.jsx)("div",{className:"col-sm-6",children:Object(X.jsxs)(se.a,{children:[Object(X.jsx)(Ie.a,{className:"bg-primary text-white",children:Object(X.jsx)("h3",{children:"Facts At a Glance"})}),Object(X.jsx)(de.a,{children:Object(X.jsxs)("dl",{className:"row",children:[Object(X.jsx)("dt",{className:"col-6",children:"Founded"}),Object(X.jsx)("dd",{className:"col-6",children:"February 3, 2016"}),Object(X.jsx)("dt",{className:"col-6",children:"No. of Campsites in 2019"}),Object(X.jsx)("dd",{className:"col-6",children:"563"}),Object(X.jsx)("dt",{className:"col-6",children:"No. of Reviews in 2019"}),Object(X.jsx)("dd",{className:"col-6",children:"4388"}),Object(X.jsx)("dt",{className:"col-6",children:"Employees"}),Object(X.jsx)("dd",{className:"col-6",children:"42"})]})})]})}),Object(X.jsx)("div",{className:"col",children:Object(X.jsx)(se.a,{className:"bg-light mt-3",children:Object(X.jsx)(de.a,{children:Object(X.jsxs)("blockquote",{className:"blockquote",children:[Object(X.jsx)("p",{className:"mb-0",children:"I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail."}),Object(X.jsxs)("footer",{className:"blockquote-footer",children:["Muriel Strode, ",Object(X.jsx)("cite",{title:"Source Title",children:'"Wind-Wafted Wild Flowers" - The Open Court, 1903'})]})]})})})})]}),Object(X.jsxs)("div",{className:"row row-content",children:[Object(X.jsx)("div",{className:"col-12",children:Object(X.jsx)("h3",{children:"Community Partners"})}),Object(X.jsx)("div",{className:"col mt-4",children:Object(X.jsx)(Ee.a,{list:!0,children:t})})]})]})},De={postComment:function(e,t,s,c){return M(e,t,s,c)},fetchCampsites:function(){return function(e){return e(k()),fetch(w+"campsites").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(L(t))})).catch((function(t){return e(C(t.message))}))}},resetFeedbackForm:function(){return b.actions.reset("feedbackForm")},fetchComments:function(){return function(e){return fetch(w+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(F(t))})).catch((function(t){return e(S(t.message))}))}},fetchPromotions:function(){return function(e){return e(E()),fetch(w+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(T(t))})).catch((function(t){return e(I(t.message))}))}}},Pe=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchCampsites(),this.props.fetchComments(),this.props.fetchPromotions()}},{key:"render",value:function(){var e=this;return Object(X.jsxs)("div",{children:[Object(X.jsx)(ee,{}),Object(X.jsx)(A.a,{children:Object(X.jsx)(D.a,{classNames:"page",timeout:300,children:Object(X.jsxs)(m.d,{children:[Object(X.jsx)(m.b,{path:"/home",component:function(){return Object(X.jsx)(Ne,{campsite:e.props.campsites.campsites.filter((function(e){return e.featured}))[0],campsitesLoading:e.props.campsites.isLoading,campsitesErrMess:e.props.campsites.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promotionLoading:e.props.promotions.isLoading,promotionErrMess:e.props.promotions.errMess,partner:e.props.partners.filter((function(e){return e.featured}))[0]})}}),Object(X.jsx)(m.b,{exact:!0,path:"/directory",render:function(){return Object(X.jsx)(je,{campsites:e.props.campsites})}}),Object(X.jsx)(m.b,{path:"/directory/:campsiteId",component:function(t){var s=t.match;return Object(X.jsx)(fe,{campsite:e.props.campsites.campsites.filter((function(e){return e.id===+s.params.campsiteId}))[0],isLoading:e.props.campsites.isLoading,errMess:e.props.campsites.errMess,comments:e.props.comments.comments.filter((function(e){return e.campsiteId===+s.params.campsiteId})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(X.jsx)(m.b,{exact:!0,path:"/contactus",render:function(){return Object(X.jsx)(Fe,{resetFeedbackForm:e.props.resetFeedbackForm})}}),Object(X.jsx)(m.b,{exact:!0,path:"/aboutus",render:function(){return Object(X.jsx)(Ae,{partners:e.props.partners})}}),Object(X.jsx)(m.a,{to:"/home"})]})},this.props.location.key)}),Object(X.jsx)(te,{})]})}}]),s}(c.Component),qe=Object(m.g)(Object(h.connect)((function(e){return{campsites:e.campsites,comments:e.comments,partners:e.partners,promotions:e.promotions}}),De)(Pe)),Re=(s(154),s(9)),We=s(28),_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,campsites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(Re.a)(Object(Re.a)({},e),{},{isLoading:!1,errMess:null,campsites:t.payload});case O:return Object(Re.a)(Object(Re.a)({},e),{},{isLoading:!0,errMess:null,campsites:[]});case p:return Object(Re.a)(Object(Re.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(Re.a)(Object(Re.a)({},e),{},{errMess:null,comments:t.payload});case g:return Object(Re.a)(Object(Re.a)({},e),{},{errMess:t.payload});case u:var s=t.payload;return Object(Re.a)(Object(Re.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},Ye=[{id:0,name:"Bootstrap Outfitters",image:"/assets/images/bootstrap-logo.png",featured:!1,description:"Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."},{id:1,name:"Git Out Expeditions",image:"/assets/images/git-logo.png",featured:!1,description:"Join Git Out Expeditions to explore new horizons with a group of other adventurers!"},{id:2,name:"Mongo Fly Shop",image:"/assets/images/mongo-logo.png",featured:!1,description:"Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop."},{id:3,name:"Node Outdoor Apparel",image:"/assets/images/node-logo.png",featured:!0,description:"From polar fleeces to swimsuits, hiking boots to waders, a visit to Node will be sure to get you covered."}],Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(Re.a)(Object(Re.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case N:return Object(Re.a)(Object(Re.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case y:return Object(Re.a)(Object(Re.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ge={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"Phone",feedback:""},He=s(93),Ze=s(94),ze=s.n(Ze),$e=Object(We.createStore)(Object(We.combineReducers)(Object(Re.a)({campsites:_e,comments:Ue,partners:Je,promotions:Be},Object(b.createForms)({feedbackForm:Ge}))),Object(We.applyMiddleware)(He.a,ze.a)),Ke=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(X.jsx)(h.Provider,{store:$e,children:Object(X.jsx)(V.a,{children:Object(X.jsx)("div",{className:"App",children:Object(X.jsx)(qe,{})})})})}}]),s}(c.Component);r.a.render(Object(X.jsx)(a.a.StrictMode,{children:Object(X.jsx)(Ke,{})}),document.getElementById("root")),i()}},[[155,1,2]]]);
//# sourceMappingURL=main.9a6a4a50.chunk.js.map