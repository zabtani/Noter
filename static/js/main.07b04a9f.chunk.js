(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{13:function(e,t,a){e.exports={formButton:"TaskGenerator_formButton__2rDnS",gen:"TaskGenerator_gen__OH5Ca",labelsList:"TaskGenerator_labelsList__1DknC",option:"TaskGenerator_option__1FuX3",labelButton:"TaskGenerator_labelButton__1_irb",delButton:"TaskGenerator_delButton__HHdN5",chosen:"TaskGenerator_chosen__3Wy_g",icon:"TaskGenerator_icon__3nCQL"}},16:function(e,t,a){e.exports={task:"Task_task__1rJHX",topContainer:"Task_topContainer__14lcd",date:"Task_date__5DF-i",title:"Task_title__1sxnH",completed:"Task_completed__1KEmB",label:"Task_label__D89nM",buttonsContainer:"Task_buttonsContainer__2fy2f",icon:"Task_icon__1PomF",deleteButton:"Task_deleteButton__1xL8e"}},25:function(e,t,a){e.exports={card:"Card_card__1NlOb",header:"Card_header__1EsBM",icon:"Card_icon__2NNQZ",expanded:"Card_expanded__242JD",mainContent:"Card_mainContent__3ZezA"}},31:function(e,t,a){e.exports={backdrop:"Modal_backdrop__2B7vN",modal:"Modal_modal__35tKt","slide-down":"Modal_slide-down__2hmTo"}},35:function(e,t,a){e.exports={tasksList:"Lists_tasksList__1K9Aj",listCard:"Lists_listCard__39v9n"}},38:function(e,t,a){e.exports={app:"App_app__3YFrR"}},39:function(e,t,a){e.exports={header:"Header_header__2eXYa"}},40:function(e,t,a){e.exports={footer:"Footer_footer__PgvOm"}},41:function(e,t,a){e.exports={input:"Input_input__IG9Qu"}},53:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(8),r=a.n(o),l=(a(53),a(38)),s=a.n(l),i=a(2),d=function(e){return Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:"currentColor",className:"bi bi-check2-square",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{d:"M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"}),Object(i.jsx)("path",{d:"m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"})]})},u=a(39),b=a.n(u),j=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("header",{className:b.a.header,children:[Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)(d,{width:20,height:20})]})})},h=a(40),O=a.n(h),m=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("footer",{className:O.a.footer,children:Object(i.jsx)("p",{children:" by Omer Zabtani"})})})},x=a(12),f=a(9),p=a(13),g=a.n(p),v=a(91),_=a(41),w=a.n(_),C=c.a.forwardRef((function(e,t){return Object(i.jsx)(v.a,{defaultValue:e.defaultValue,type:"text",className:w.a.input,id:e.id,label:e.label,variant:"outlined",onChange:e.onChange,inputRef:t,multiline:!!e.multiline||null,rows:e.row?e.row:null})})),k=function(e){return Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:e.fillColor,className:"bi bi-backspace-reverse-fill ".concat(e.className),viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2V3zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8l2.147-2.146z"})})},N=function(e){return Object(i.jsxs)("li",{className:"".concat(g.a.option," ").concat(e.chosen&&g.a.chosen),children:[e.chosen&&Object(i.jsx)("button",{className:g.a.delButton,children:Object(i.jsx)(k,{className:g.a.icon,fillColor:e.color,width:24,height:24})}),Object(i.jsx)("button",{className:g.a.labelButton,type:"button",style:{backgroundColor:e.color},onClick:e.onClick,children:e.title})]})},L=a(92),S=function(e){return Object(i.jsx)(L.a,{variant:"contained",color:e.color,type:e.type,className:g.a.formButton,onClick:e.onClick,children:e.text})},y=function(e){var t=Object(n.useState)(e.chosenLabel),a=Object(x.a)(t,2),c=a[0],o=a[1],r=Object(n.useRef)(),l=Object(n.useRef)(),s=function(e){o(e)},d=e.labels.map((function(e){var t=e.id===c.id;return Object(i.jsx)(N,{chosen:t,title:e.name,color:e.color,onClick:s.bind(null,e)},e.id)}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault();var a=r.current.value,n=l.current.value;a.trim("").length<3?e.onError("note name is too short"):(e.onAddNewTask({name:a,description:n,label:c}),r.current.value="",l.current.value="")},children:[Object(i.jsx)(C,{label:"Note name",id:"name",ref:r,defaultValue:e.lastInputsData.name}),Object(i.jsx)(C,{defaultValue:e.lastInputsData.description,id:"description",label:"Description",multiline:!0,row:4,ref:l}),Object(i.jsx)(S,{color:"primary",type:"submit",text:"Add Note"}),Object(i.jsx)(S,{type:"button",onClick:function(){e.toggleView({name:r.current.value,description:l.current.value})},text:"Add new label"}),Object(i.jsx)("ul",{className:g.a.labelsList,children:d})]})})},T=function(e){var t=Object(n.useState)(e.labelColors[0]),a=Object(x.a)(t,2),c=a[0],o=a[1],r=Object(n.useRef)(),l=function(e){o(e)},s=e.labelColors.map((function(e){var t=c===e.hex;return Object(i.jsx)(N,{chosen:t,color:e.hex,title:e.colorName,type:"button",value:e.hex,label:"Description",onClick:l.bind(null,e.hex)},e.hex.replace("#",""))}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault();var a=r.current.value;a.length<3?e.onError("label is too short!"):(e.onAddNewLabel({name:a,color:c}),e.toggleView())},children:[Object(i.jsx)("p",{children:"Choose a name then a color for this new label!"}),Object(i.jsx)(C,{label:"Label name",ref:r}),Object(i.jsx)("ul",{className:g.a.labelsList,children:s}),Object(i.jsx)(S,{color:"primary",type:"submit",text:"Add Label"}),Object(i.jsx)(S,{type:"button",text:"Go back",onClick:e.toggleView})]})})},A=a(25),M=a.n(A),B=function(e){return Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:"whitesmoke",className:"bi bi-toggle-on ".concat(e.className),viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"})})},F=function(e){return Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:"currentColor",className:"bi bi-toggle-off ".concat(e.className),viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"})})},D=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"".concat(M.a.card," ").concat(e.className),children:[Object(i.jsxs)("div",{className:M.a.header,children:[Object(i.jsx)("h2",{children:e.title}),e.onShow&&Object(i.jsxs)("button",{type:"button",onClick:e.onShow,children:[e.switchText,e.toggleIconOn?Object(i.jsx)(B,{className:M.a.icon,width:"35",height:"35"}):Object(i.jsx)(F,{className:M.a.icon,width:"35",height:"35"})]})]}),Object(i.jsx)("div",{className:M.a.mainContent,children:e.children})]})})},E=c.a.createContext({tasks:[],add:function(){},move:function(e){},remove:function(){}}),I=function(){var e=new Date,t=[e.getDate(),e.getMonth()+1,e.getHours(),e.getMinutes()],a=t[0],n=t[1],c=t[2],o=t[3],r=[e.getFullYear(),e.getDay(),["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]],l=r[0];return a<10&&(a="0"+a),n<10&&(n="0"+n),c<10&&(c="0"+c),o<10&&(o="0"+o)," ".concat(r[2][r[1]],", ").concat(a,"/").concat(n,"/").concat(l,", ").concat(c,":").concat(o)},R=function(){return Date.now().toString(36)+Math.random().toString(36).substr(2)},V=a(31),z=a.n(V),H=function(e){return Object(i.jsx)("div",{className:z.a.backdrop,onClick:e.onClick})},G=function(e){return console.log(e),Object(i.jsxs)("div",{className:z.a.modal,children:[Object(i.jsx)("p",{className:z.a.content,children:e.children}),Object(i.jsx)(L.a,{variant:"contained",color:"primary",type:"button",onClick:e.onClick,children:e.buttonText})]})},J=document.getElementById("overlays"),P=function(e){return Object(i.jsxs)(i.Fragment,{children:[r.a.createPortal(Object(i.jsx)(H,{onClick:e.onClose}),J),r.a.createPortal(Object(i.jsx)(G,{buttonText:e.buttonText,onClick:e.onClose,children:e.children}),J)]})},W={mainFormView:!0,currentInputsData:{name:"",description:""},lastCreatedLabel:{id:"def",name:"General",color:"#0000003b"},formError:!1},K=function(e,t){switch(t.type){case"SWITCH_TO_TASK_FORM":return Object(f.a)(Object(f.a)({},e),{},{mainFormView:!0});case"SWITCH_TO_LABEL_FORM":return Object(f.a)(Object(f.a)({},e),{},{mainFormView:!1,currentInputsData:t.value});case"FORM_ERROR":var a=t.value;return Object(f.a)(Object(f.a)({},e),{},{formError:a});default:return W}},Y=function(e){var t=Object(n.useReducer)(K,W),a=Object(x.a)(t,2),c=a[0],o=a[1],r=Object(n.useContext)(E);console.log(r);var l=function(e){o({type:"FORM_ERROR",value:e})};return Object(i.jsxs)(D,{className:g.a.gen,title:"New Note",children:[c.formError&&Object(i.jsx)(P,{buttonText:"Back To App",onClose:function(){o({type:"FORM_ERROR",value:!1})},children:c.formError}),c.mainFormView&&Object(i.jsx)(y,{onError:l,lastInputsData:c.currentInputsData&&c.currentInputsData,chosenLabel:c.lastCreatedLabel,onAddNewTask:function(e){r.add(Object(f.a)(Object(f.a)({},e),{},{id:R()}))},toggleView:function(e){o({type:"SWITCH_TO_LABEL_FORM",value:e})},labels:r.labels}),!c.mainFormView&&Object(i.jsx)(T,{onError:l,labelColors:[{hex:"#0000003b",colorName:"Grey"},{hex:"#04f43f3b",colorName:"Green"},{hex:"#f4041e3b",colorName:"Red"},{hex:"#e804f43b",colorName:"Pink"},{hex:"#ffeb003b",colorName:"Yellow"},{hex:"#042df43b",colorName:"Blue"}],onAddNewLabel:function(e){var t=Object(f.a)(Object(f.a)({},e),{},{id:R()});r.addLabel(t)},toggleView:function(){o({type:"SWITCH_TO_TASK_FORM"})}})]})},Q=a(16),X=a.n(Q),Z=function(e){return Object(i.jsxs)("svg",{className:"bi bi-check-circle ".concat(e.className),xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:"currentColor",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(i.jsx)("path",{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"})]})},q=function(e){return Object(i.jsxs)("svg",{className:"bi bi-info-circle ".concat(e.className),xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:"currentColor",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(i.jsx)("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})},U=function(e){return Object(i.jsxs)("svg",{className:"bi bi-x-circle ".concat(e.className),xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:"currentColor",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(i.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})},$=function(e){var t=Object(n.useState)(!1),a=Object(x.a)(t,2),c=a[0],o=a[1],r=Object(n.useContext)(E);return console.log(e),Object(i.jsxs)("div",{className:e.data.active?X.a.task:"".concat(X.a.task," ").concat(X.a.completed),style:{background:"linear-gradient(".concat(e.data.label.color,",rgb(253, 253, 253)")},children:[Object(i.jsxs)("div",{className:X.a.topContainer,children:[Object(i.jsx)("div",{className:X.a.date,children:e.data.date}),Object(i.jsx)("button",{type:"button",onClick:function(e){r.remove(e)}.bind(null,e.data.id),children:Object(i.jsx)(U,{className:X.a.deleteButton,width:19,height:19})})]}),Object(i.jsx)("h2",{className:X.a.title,children:e.data.name}),e.data.description&&c&&Object(i.jsx)("p",{children:e.data.description}),Object(i.jsxs)("div",{className:X.a.label,style:{backgroundColor:e.data.label.color},children:["#",e.data.label.name]}),Object(i.jsxs)("div",{className:X.a.buttonsContainer,children:[Object(i.jsxs)("button",{type:"button",onClick:function(e){r.move(e)}.bind(null,e.data.id),children:[e.data.active?"Complete":"Activate",Object(i.jsx)("div",{className:X.a.icon,children:Object(i.jsx)(Z,{width:25,height:25})})]}),e.data.description&&Object(i.jsxs)("button",{type:"button",onClick:function(){o(!c)},children:[c?"Hide paragraph":"Info",Object(i.jsx)("div",{className:X.a.icon,children:Object(i.jsx)(q,{width:25,height:25})})]})]})]})},ee=a(35),te=a.n(ee),ae=function(e){var t=e.tasks.map((function(e){return Object(i.jsx)($,{data:e},e.id)}));return Object(i.jsx)(D,{switchText:e.toggleIconOn?"change to completed":"change to active",onShow:e.onShow,toggleIconOn:e.toggleIconOn,className:te.a.listCard,active:e.active,title:e.title,children:Object(i.jsx)("div",{className:te.a.tasksList,children:t.length>0?t:"List is empty."})})},ne=function(){var e=Object(n.useContext)(E).tasks,t=Object(n.useState)({isActiveShown:!0,isCompletedShown:!1}),a=Object(x.a)(t,2),c=a[0],o=a[1],r=e.filter((function(e){return!0===e.active})),l=e.filter((function(e){return!0!==e.active})),s=function(){o((function(e){return{isActiveShown:!e.isActiveShown,isCompletedShown:!e.isCompletedShown}}))};return Object(i.jsxs)(i.Fragment,{children:[c.isActiveShown&&Object(i.jsx)(ae,{toggleIconOn:!0,onShow:s,tasks:r,title:"Active"}),c.isCompletedShown&&Object(i.jsx)(ae,{toggleIconOn:!1,onShow:s,tasks:l,title:"Completed"})]})},ce=a(14),oe=localStorage.getItem("tasks"),re=localStorage.getItem("labels"),le={tasks:oe?JSON.parse(oe):[],labels:re?JSON.parse(re):[{id:"def",name:"General",color:"#0000003b"}]};function se(e,t){var a=Object(ce.a)(e.tasks);switch(t.type){case"ADDLABEL":var n=t.value;return Object(f.a)(Object(f.a)({},e),{},{labels:[].concat(Object(ce.a)(e.labels),[n])});case"ADD":var c=t.value;return Object(f.a)(Object(f.a)({},e),{},{tasks:[].concat(Object(ce.a)(a),[Object(f.a)(Object(f.a)({},c),{},{active:!0,date:I()})])});case"MOVE":var o=t.value,r=e.tasks.findIndex((function(e){return e.id===o})),l=a[r],s=Object(f.a)(Object(f.a)({},l),{},{active:!l.active});return a[r]=s,Object(f.a)(Object(f.a)({},e),{},{tasks:Object(ce.a)(a)});case"REMOVE":var i=t.value;return a=a.filter((function(e){return e.id!==i})),Object(f.a)(Object(f.a)({},e),{},{tasks:Object(ce.a)(a)});default:return le}}var ie=function(e){var t=Object(n.useReducer)(se,le),a=Object(x.a)(t,2),c=a[0],o=a[1],r=c.tasks,l=c.labels;Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r)),localStorage.setItem("labels",JSON.stringify(l))}),[r,l]);var s={labels:l,tasks:r,addLabel:function(e){o({type:"ADDLABEL",value:e})},add:function(e){o({type:"ADD",value:e})},move:function(e){o({type:"MOVE",value:e})},remove:function(e){o({type:"REMOVE",value:e})}};return Object(i.jsx)(E.Provider,{value:s,children:e.children})},de=function(){return Object(n.useEffect)((function(){var e=function(){localStorage.setItem("dodo","drerei")};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[]),Object(i.jsxs)("div",{className:s.a.app,children:[Object(i.jsx)(j,{title:"Noter"}),Object(i.jsx)(ie,{children:Object(i.jsxs)("main",{children:[Object(i.jsx)(Y,{}),Object(i.jsx)(ne,{})]})}),Object(i.jsx)(m,{})]})},ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(de,{})}),document.getElementById("root")),ue()}},[[60,1,2]]]);
//# sourceMappingURL=main.07b04a9f.chunk.js.map