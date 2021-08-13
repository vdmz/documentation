(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{338:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(354)),c=["components"],o={title:"1.25.3",sidebar_label:"1.25.3"},l={unversionedId:"release-notes/1.25.3",id:"release-notes/1.25.3",isDocsHomePage:!1,title:"1.25.3",description:"General",source:"@site/../docs/release-notes/1.25.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.3",permalink:"/documentation/release-notes/1.25.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.25.3.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1628851209,formattedLastUpdatedAt:"8/13/2021",sidebar_label:"1.25.3",frontMatter:{title:"1.25.3",sidebar_label:"1.25.3"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Docker & Kubernetes: FTS transfers in rucio-dev container fail ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4525"},"#4525")),Object(i.b)("li",{parentName:"ul"},"Policies: New scope in extract_scope_belleii method ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4549"},"#4549"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: add_replicas with PFN does not consider lower-priority protocols ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3940"},"#3940")),Object(i.b)("li",{parentName:"ul"},"Life time model: Atropos can\u2019t fetch the list of rules beyond EOL ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4519"},"#4519")),Object(i.b)("li",{parentName:"ul"},"REST & API: Account RSE Usage page occasionally does not work ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4532"},"#4532")),Object(i.b)("li",{parentName:"ul"},"Traces: Kronos: Properly close ActiveMQ connections ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4527"},"#4527"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Relative transfer timeout for downloads ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4374"},"#4374"))),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: The client should gracefully handle a broken pipe ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4482"},"#4482"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: The client suggests that an invalid DID has replicas on tape ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4492"},"#4492")),Object(i.b)("li",{parentName:"ul"},"Clients: Client/Common utils: correctly handle utf locales ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4503"},"#4503")),Object(i.b)("li",{parentName:"ul"},"Clients: Declaring bad file replicas does not work with CRLF line terminators in Python 2 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4544"},"#4544"))))}b.isMDXComponent=!0},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);