(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,n,a){e.exports={superInput:"SuperInputText_superInput__1Bvuw",errorInput:"SuperInputText_errorInput__2muEH",error:"SuperInputText_error__3Wpxm"}},function(e,n,a){e.exports={default:"SuperButton_default__1Sd5X",red:"SuperButton_red__2wzYU"}},function(e,n,a){e.exports={checkbox:"SuperCheckbox_checkbox__20S9c",spanClassName:"SuperCheckbox_spanClassName__gLNld"}},,,,function(e,n,a){e.exports={App:"App_App__1VxD0"}},function(e,n,a){e.exports={blue:"HW4_blue__vHsPb",column:"HW4_column__fppdm"}},function(e,n,a){e.exports=a(16)},,,,,function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(7),o=a.n(c),s=(a(15),a(8)),l=a.n(s),u=a(5),m=a(1),p=a(2),i=a.n(p),h=function(e){e.type;var n=e.onChange,a=e.onChangeText,t=e.onKeyPress,c=e.onEnter,o=e.error,s=e.className,l=e.spanClassName,u=Object(m.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),p="".concat(i.a.error," ").concat(l||""),h="".concat(o?i.a.errorInput:i.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),"Enter"===e.key&&c&&c()},className:h},u)),o&&r.a.createElement("span",{className:p},o))},d=a(9),_=a.n(d),E=a(3),g=a.n(E),C=function(e){var n=e.red,a=e.className,t=Object(m.a)(e,["red","className"]),c="".concat(n?g.a.red:g.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:c},t))},f=a(4),b=a.n(f),k=function(e){e.type;var n=e.onChange,a=e.onChangeChecked,t=e.className,c=(e.spanClassName,e.children),o=Object(m.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(b.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){n&&n(e),a&&a(e.currentTarget.checked)},className:s},o)),c&&r.a.createElement("span",{className:b.a.spanClassName},c))};var x=function(){var e=Object(t.useState)(""),n=Object(u.a)(e,2),a=n[0],c=n[1],o=a?"":"error",s=function(){o?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(a),c(""))},l=Object(t.useState)(!1),m=Object(u.a)(l,2),p=m[0],i=m[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:_.a.column},r.a.createElement(h,{value:a,onChangeText:c,onEnter:s,error:o}),r.a.createElement(C,{red:!0,onClick:s},"Delete "),r.a.createElement(k,{checked:p,onChangeChecked:i},"Some text "),r.a.createElement(k,{checked:p,onChange:function(e){return i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var N=function(){return r.a.createElement("div",{className:l.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.840aa855.chunk.js.map