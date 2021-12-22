(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={find:"FindContacts_find__372A-",input:"FindContacts_input__4fWyi",title:"FindContacts_title__-IvSF"}},16:function(t,e,n){t.exports={item:"contacts_item__2tTD7",btn:"contacts_btn__3HcCm"}},35:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(10),r=n.n(i),s=n(5),o=n(17),u=n(6),l=n(18),b=n.n(l),d=n(22),j=n(3),m=n(7),f=Object(s.b)("contacts/items_add",(function(t){return{payload:Object(m.a)(Object(m.a)({},t),{},{id:Object(s.d)()})}})),O=Object(s.b)("contacts/items_delete"),h=Object(s.b)("contacts/filter_change"),p=Object(s.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(function(t){t.addCase(f,(function(t,e){return[].concat(Object(d.a)(t),[e.payload])})).addCase(O,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))}))})),x=Object(s.c)("",(function(t){t.addCase(h,(function(t,e){return e.payload}))})),_=Object(j.b)({items:p,filter:x}),C={key:"items",storage:b.a,whitelist:["items"],blacklist:["filter"]},g=Object(o.createLogger)({collapsed:function(t,e,n){return!n.error},timestamp:!1}),v=Object(s.a)({reducer:{contacts:Object(u.g)(C,_)},middleware:function(t){return t({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}}).concat(g)},devTools:!1}),y=Object(u.h)(v),F=n(4),N=n(20),k=(n(35),n(16)),w=n.n(k),S=n(1),A=function(t){var e=t.items,n=t.onDaleteCard;return Object(S.jsx)("div",{children:Object(S.jsx)("ul",{children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(S.jsxs)("li",{className:w.a.item,children:[Object(S.jsxs)("p",{children:[e,":",c]}),Object(S.jsx)("button",{type:"submit",onClick:function(){return n(a)},className:w.a.btn,children:"Delete"})]},a)}))})})},I=n(12),z=n.n(I),D=function(){var t=Object(F.c)((function(t){return t.contacts.filter})),e=Object(F.b)();return Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{className:z.a.title,children:"Contacts"}),Object(S.jsx)("form",{action:"",children:Object(S.jsxs)("label",{className:z.a.find,children:["Finde contacts by name",Object(S.jsx)("input",{type:"text",className:z.a.input,value:t,onChange:function(t){return e(h(t.target.value))}})]})})]})},J=n(13),Z=n(8),B=n.n(Z),E=function(t){var e=t.onSubmit,n=Object(F.c)((function(t){return t.contacts.items})),a=Object(c.useState)(""),i=Object(J.a)(a,2),r=i[0],s=i[1],o=Object(c.useState)(""),u=Object(J.a)(o,2),l=u[0],b=u[1],d=Object(c.useState)(""),j=Object(J.a)(d,2),m=j[0],f=j[1],O=function(t){switch(t.target.name){case"name":s(t.target.value);break;case"number":b(t.target.value);break;default:return}},h=function(){s(""),b(""),f("")};return Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{className:B.a.title,children:"Phonebook"}),Object(S.jsxs)("form",{className:B.a.form,onSubmit:function(t){t.preventDefault(),n.some((function(t){return r===t.name}))?alert("".concat(r," is alredy in contact")):(e({name:r,number:l,id:m}),h())},children:[Object(S.jsxs)("label",{htmlFor:"",className:B.a.label,children:["name",Object(S.jsx)("input",{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:O,required:!0})]}),Object(S.jsxs)("label",{htmlFor:"",className:B.a.label,children:["number",Object(S.jsx)("input",{type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:O,required:!0})]}),Object(S.jsx)("button",{type:"submit",className:B.a.button,children:"add contact"})]})]})},L=function(){var t=Object(F.c)((function(t){return t.contacts.items})),e=Object(F.c)((function(t){return t.contacts.filter})),n=Object(F.b)();Object(c.useEffect)((function(){!function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){return null}}("contacts",t)}),[t]);return Object(S.jsxs)("div",{children:[Object(S.jsx)(E,{onSubmit:function(t){n(f(t))}}),Object(S.jsx)(D,{}),Object(S.jsx)(A,{items:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})),onDaleteCard:function(t){n(O(t))}})]})},M=n(21),P=n.n(M),q=function(){return Object(S.jsx)(P.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3,class:"lod"})};r.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(F.a,{store:v,children:Object(S.jsx)(N.a,{loading:Object(S.jsx)(q,{}),persistor:y,children:Object(S.jsx)(L,{})})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"InputContacts_form__GZK3_",label:"InputContacts_label__1aefF",button:"InputContacts_button__1_9Jn",title:"InputContacts_title__3eXMi"}}},[[55,1,2]]]);
//# sourceMappingURL=main.fb407dad.chunk.js.map