(this["webpackJsonpweb-site"]=this["webpackJsonpweb-site"]||[]).push([[12],{172:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),r=a(5),c=a(19),i=function(e){var t=e.label,a=e.link,n=e.value,r=e.format;return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{width:"70%",children:t}),Object(s.jsx)("td",{children:a?Object(s.jsx)("a",{href:a,children:r(n)}):r(n)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var l=i,o=function(e){var t=e.data;return Object(s.jsx)("table",{children:Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(l,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},u=a(20),b=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1995-08-05T09:24:00");r(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(s.jsx)(s.Fragment,{children:a})},h=[{key:"age",label:"Current age",value:Object(s.jsx)(b,{})},{key:"countries",label:"Cities visited",value:53,link:"https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2"},{key:"location",label:"Current city",value:"Hyderabad, TA"}],j=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Some stats about me"}),Object(s.jsx)(o,{data:h})]})},d=a(159),m=a.n(d),f=a(56),p=a(161),O=a(72),k=a.n(O),v=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/sahoodman/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/sahodman/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/sahoodman/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/sahoodman/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/sahoodman/commits",format:function(e){return k()(e).format("MMMM D, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/sahoodman"}],x=function(){var e=Object(n.useState)(v),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useCallback)(Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/sahoodman");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(v.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){c()}),[c]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Some stats about this site"}),Object(s.jsx)(o,{data:a})]})};t.default=function(){return Object(s.jsx)(c.a,{title:"Stats",description:"Some statistics about Michael D'Angelo and mldangelo.com",children:Object(s.jsxs)("article",{className:"post",id:"stats",children:[Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h2",{"data-testid":"heading",children:Object(s.jsx)(r.b,{to:"/stats",children:"Stats"})})})}),Object(s.jsx)(j,{}),Object(s.jsx)(x,{})]})})}}}]);
//# sourceMappingURL=12.09e3b876.chunk.js.map