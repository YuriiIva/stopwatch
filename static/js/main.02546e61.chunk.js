(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{22:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),a=n(17),o=n.n(a),i=(n(22),n(16)),b=n(2),l=function(t){var e=t.handleStart,n=t.handleReset,c=t.handleResume,s=t.handleStop;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{type:"button",onClick:e,className:"btn",children:"START"}),Object(b.jsx)("button",{type:"button",onClick:s,className:"btn",children:"STOP"}),Object(b.jsx)("button",{type:"button",className:"btn",onDoubleClick:c,children:"Wait"}),Object(b.jsx)("button",{type:"button",onClick:n,className:"btn",children:"Reset"})]})},r=function(t){var e=t.time;return Object(b.jsxs)("div",{className:"tabl",children:[Object(b.jsxs)("span",{children:[("0"+Math.floor(e/36e5%60)).slice(-2),":"]}),Object(b.jsxs)("span",{children:[("0"+Math.floor(e/6e4%60)).slice(-2),":"]}),Object(b.jsx)("span",{children:("0"+e/1e3%60).slice(-2)})]})},u=n(29),j=n(28),h=n(27),d=function(){var t=Object(c.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)(0),o=Object(i.a)(a,2),d=o[0],O=o[1];Object(c.useEffect)((function(){var t=new u.a;return console.log("unsubscribe",t),Object(j.a)(1e3).pipe(Object(h.a)(t)).subscribe((function(){n&&O((function(t){return t+1e3}))})),function(){t.next(),t.complete()}}),[n]);var p=function(){s(!0)};return Object(b.jsxs)("div",{className:"stopwatch",children:[Object(b.jsx)(r,{time:d}),Object(b.jsx)(l,{handleStart:p,handleReset:function(){O(0),s(!0)},handleResume:function(){setTimeout((function(){p(),s(!1)}),300)},handleStop:function(){0!==d&&(s(!1),O(0))}})]})};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.02546e61.chunk.js.map