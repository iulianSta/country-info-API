(this["webpackJsonpcountry-info"]=this["webpackJsonpcountry-info"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(13),s=n.n(r),i=n(3),o=n(14),j=n.n(o),u=n(0),l=function(){return Object(u.jsx)(a.a.Fragment,{children:Object(u.jsxs)("div",{className:"loader",children:[Object(u.jsx)("h4",{children:Object(u.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif",alt:"Ajax-loader.gif"})}),Object(u.jsx)("h6",{children:"Loading ..."})]})})},h=function(e){var t=e.results.map((function(e,t){console.log(e);var n=e.name,c=e.nativeName,a=e.flag,r=e.capital,s=e.population,i=e.alpha2Code,o=e.area,j=e.region,l=e.subregion;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:[n,", ",c,"(",i,")"]}),Object(u.jsxs)("h5",{children:["Capital: ",r]}),Object(u.jsxs)("h5",{children:["Population: ",s]}),Object(u.jsxs)("h5",{children:["Area: ",o]}),Object(u.jsxs)("h5",{children:["Region: ",j]}),Object(u.jsxs)("h5",{children:["Subregion: ",l]}),Object(u.jsx)("img",{src:a,alt:n,className:"flag"})]},t)}));return Object(u.jsx)(a.a.Fragment,{children:t})},b=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),o=Object(i.a)(s,2),b=o[0],d=o[1],O=Object(c.useState)(!0),x=Object(i.a)(O,2),m=x[0],f=x[1];return Object(c.useEffect)((function(){setTimeout((function(){f(!1)}),3e3)}),[]),m?Object(u.jsx)(l,{}):Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)("h1",{children:"Country Information's"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=encodeURIComponent(n),c="https://restcountries.eu/rest/v2/name/".concat(t);j()(c).then((function(e){var t=e.data;return d(t)})).catch((function(e){return console.log("Your had an ".concat(e))}))},className:"form",children:[Object(u.jsx)("input",{type:"text",value:n,onChange:function(e){r(e.target.value)},placeholder:"Please write a country name"}),Object(u.jsx)("button",{type:"submit",children:"Search"})]}),Object(u.jsx)(h,{results:b})]})};n(38);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.185a5d8c.chunk.js.map