(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{189:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),i=(r(0),r(345)),a={title:"Running rucio-minos-temporary-expiration"},c={unversionedId:"bin/rucio-minos-temporary-expiration",id:"bin/rucio-minos-temporary-expiration",isDocsHomePage:!1,title:"Running rucio-minos-temporary-expiration",description:"`",source:"@site/../docs/bin/rucio-minos-temporary-expiration.md",sourceDirName:"bin",slug:"/bin/rucio-minos-temporary-expiration",permalink:"/documentation/bin/rucio-minos-temporary-expiration",editUrl:"https://github.com/rucio/documentation/docs/../docs/bin/rucio-minos-temporary-expiration.md",version:"current",frontMatter:{title:"Running rucio-minos-temporary-expiration"}},u=[],p={toc:u};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-minos-temporary-expiration [-h] [--run-once] [--threads THREADS]\n                                        [--bulk BULK]\n                                        [--sleep-time SLEEP_TIME]\n\nThis special type of minos daemon lists the expired TEMPORARY_UNAVAILABLE\nreplicas and puts them back into AVAILABLE state.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n")))}s.isMDXComponent=!0},345:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),f=t,b=l["".concat(a,".").concat(f)]||l[f]||m[f]||i;return r?o.a.createElement(b,c(c({ref:n},p),{},{components:r})):o.a.createElement(b,c({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);