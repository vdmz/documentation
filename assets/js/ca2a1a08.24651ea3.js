(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{284:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),i=(r(0),r(345)),a={title:"Running rucio-atropos"},c={unversionedId:"bin/rucio-atropos",id:"bin/rucio-atropos",isDocsHomePage:!1,title:"Running rucio-atropos",description:"`",source:"@site/../docs/bin/rucio-atropos.md",sourceDirName:"bin",slug:"/bin/rucio-atropos",permalink:"/documentation/bin/rucio-atropos",editUrl:"https://github.com/rucio/documentation/docs/../docs/bin/rucio-atropos.md",version:"current",frontMatter:{title:"Running rucio-atropos"}},u=[],l={toc:u};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-atropos [-h] [--run-once] [--dry-run] [--threads THREADS]\n                     [--bulk BULK] [--grace-period GRACE_PERIOD]\n                     [--date-check DATE_CHECK] [--unlock-rules]\n                     [--spread-period SPREAD_PERIOD] [--purge-replicas]\n\nThe Atropos Daemon is responsible for the deletion of rules with expired\neol_at (end the life at), according to the Lifetime Model. Once the rule is\ndeleted, the replicas covered by the rule will not be protected anymore and\neventually, will be deleted by another daemon.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --dry-run             Dry run mode\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --grace-period GRACE_PERIOD\n                        Grace period for the rules. In seconds !!!\n  --date-check DATE_CHECK\n                        Date when the lifetime model will be applied. Cannot\n                        be used for a date in the future if dry-run is not\n                        enabled\n  --unlock-rules        Automatically unlock affected rules\n  --spread-period SPREAD_PERIOD\n                        Set the rules to randomly expire over a period (in\n                        seconds). Uses a uniform distribution\n  --purge-replicas      Set the replicas to be deleted instead of secondarised\n")))}p.isMDXComponent=!0},345:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),f=t,b=s["".concat(a,".").concat(f)]||s[f]||d[f]||i;return r?o.a.createElement(b,c(c({ref:n},l),{},{components:r})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);