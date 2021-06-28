(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(347)),c=["components"],o={title:"1.23.4",sidebar_label:"1.23.4"},l={unversionedId:"release-notes/1.23.4",id:"release-notes/1.23.4",isDocsHomePage:!1,title:"1.23.4",description:"General",source:"@site/../docs/release-notes/1.23.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.4",permalink:"/documentation/release-notes/1.23.4",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.4.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1624278235,formattedLastUpdatedAt:"6/21/2021",sidebar_label:"1.23.4",frontMatter:{title:"1.23.4",sidebar_label:"1.23.4"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],s={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: unify REST endpoints to single WSGI application ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3708"},"#3708")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Script to convert DB between VOs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3914"},"#3914")),Object(i.b)("li",{parentName:"ul"},"Deletion: VO handling for daemons ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3887"},"#3887"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Release management: Further cleanup of tools ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3917"},"#3917"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: add_replicas needs to clean signed URLs from cloud service ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3939"},"#3939")),Object(i.b)("li",{parentName:"ul"},"Rules: Cannot deny rule which is made with a lock ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3843"},"#3843"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Make m-VO compatible with WebUI ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3885"},"#3885"))))}b.isMDXComponent=!0},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,o(o({ref:t},u),{},{components:n})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);