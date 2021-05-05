(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(345)),c={title:"1.23.9",sidebar_label:"1.23.9"},o={unversionedId:"release-notes/1.23.9",id:"release-notes/1.23.9",isDocsHomePage:!1,title:"1.23.9",description:"General",source:"@site/../docs/release-notes/1.23.9.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.9",permalink:"/documentation/release-notes/1.23.9",editUrl:"https://github.com/rucio/documentation/docs/../docs/release-notes/1.23.9.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620233867,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"1.23.9",frontMatter:{title:"1.23.9",sidebar_label:"1.23.9"}},s=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transfers: Support checking of tape staging status ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1797"},"#1797"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: BelleII: Fix permissions ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3891"},"#3891")),Object(i.b)("li",{parentName:"ul"},"Documentation: Add documentation to dirac endpoint ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3971"},"#3971"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: 'rucio-admin rse info' should print protocol domain data as valid JSON ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4027"},"#4027")),Object(i.b)("li",{parentName:"ul"},"Clients: Unhelpful error message for certificates with incorrect permissions ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4071"},"#4071"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: rucio-admin update_rse does not work with booleans ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4048"},"#4048")),Object(i.b)("li",{parentName:"ul"},"Clients: Misleading documentation for list_dids() ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4078"},"#4078"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: make certificate error message in webui configurable ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4068"},"#4068"))))}l.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);