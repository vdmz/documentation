(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(344)),i={title:"1.24.4",sidebar_label:"1.24.4"},c={unversionedId:"release-notes/1.24.4",id:"release-notes/1.24.4",isDocsHomePage:!1,title:"1.24.4",description:"General",source:"@site/../docs/release-notes/1.24.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.4",permalink:"/documentation/release-notes/1.24.4",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620224805,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"1.24.4",frontMatter:{title:"1.24.4",sidebar_label:"1.24.4"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: Problem with config endpoint ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3916"},"#3916")),Object(o.b)("li",{parentName:"ul"},"Documentation: cli-admin example not running ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4315"},"#4315")),Object(o.b)("li",{parentName:"ul"},"Documentation: Fix small typos and grammatical errors ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4321"},"#4321")),Object(o.b)("li",{parentName:"ul"},"Documentation: Fix typos in replica_workflow.rst ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4324"},"#4324")),Object(o.b)("li",{parentName:"ul"},"REST & API: OIDC authentication endpoint on Flask ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4042"},"#4042"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: lfns2pfns in rsemanager throws ORM exception when no replica can be found ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4311"},"#4311")),Object(o.b)("li",{parentName:"ul"},"Deletion: RSE sorting in reaper2 failing if there is no obsolete rse usage source ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4307"},"#4307"))))}s.isMDXComponent=!0},344:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);