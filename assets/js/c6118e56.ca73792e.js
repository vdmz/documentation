(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),i=(n(0),n(345)),a={title:"Running rucio-judge-repairer"},c={unversionedId:"bin/rucio-judge-repairer",id:"bin/rucio-judge-repairer",isDocsHomePage:!1,title:"Running rucio-judge-repairer",description:"`",source:"@site/../docs/bin/rucio-judge-repairer.md",sourceDirName:"bin",slug:"/bin/rucio-judge-repairer",permalink:"/documentation/bin/rucio-judge-repairer",editUrl:"https://github.com/rucio/documentation/docs/../docs/bin/rucio-judge-repairer.md",version:"current",frontMatter:{title:"Running rucio-judge-repairer"}},u=[],p={toc:u};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-judge-repairer [-h] [--run-once] [--threads THREADS]\n\nThe Judge-Repairer daemon is responsible for the repair of stuck replication\nrules.\n\noptional arguments:\n  -h, --help         show this help message and exit\n  --run-once         One iteration only\n  --threads THREADS  Concurrency control: total number of threads for this\n                     process\n")))}l.isMDXComponent=!0},345:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),f=t,b=s["".concat(a,".").concat(f)]||s[f]||d[f]||i;return n?o.a.createElement(b,c(c({ref:r},p),{},{components:n})):o.a.createElement(b,c({ref:r},p))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);