(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{231:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),a=(r(0),r(347)),i=["components"],c={title:"Running rucio-c3po"},u={unversionedId:"bin/rucio-c3po",id:"bin/rucio-c3po",isDocsHomePage:!1,title:"Running rucio-c3po",description:"`",source:"@site/../docs/bin/rucio-c3po.md",sourceDirName:"bin",slug:"/bin/rucio-c3po",permalink:"/documentation/bin/rucio-c3po",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-c3po.md",version:"current",frontMatter:{title:"Running rucio-c3po"}},s=[],p={toc:s};function l(e){var n=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"usage: rucio-c3po [-h] [--run-once] [--threads THREADS] [--only-workload]\n                  [--dry_run] [--sampling] [--algorithms ALGORITHMS]\n                  [--datatypes DATATYPES] [--dest_rse_expr DEST_RSE_EXPR]\n                  [--max_bytes_hour MAX_BYTES_HOUR]\n                  [--max_files_hour MAX_FILES_HOUR]\n                  [--max_bytes_hour_rse MAX_BYTES_HOUR_RSE]\n                  [--max_files_hour_rse MAX_FILES_HOUR_RSE]\n                  [--min_popularity MIN_POPULARITY]\n                  [--min_recent_requests MIN_RECENT_REQUESTS]\n                  [--max_replicas MAX_REPLICAS]\n\nThe C3PO daemon is responsible for dynamic data placement.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: number of threads\n  --only-workload       Only run the workload collector\n  --dry_run             Do not create any rules\n  --sampling            In the end flip a to decide to create a rule or not\n  --algorithms ALGORITHMS\n                        The placement algorithm or, if in dry_run, a comma\n                        separated list of algorithms\n  --datatypes DATATYPES\n                        Comma separated list of datatype that should trigger\n                        the placement\n  --dest_rse_expr DEST_RSE_EXPR\n                        RSE expression defining the allowed destination RSEs\n  --max_bytes_hour MAX_BYTES_HOUR\n                        Max number of bytes that c3po is allow to replicate\n                        per hour\n  --max_files_hour MAX_FILES_HOUR\n                        Max number of files that c3po is allow to replicate\n                        per hour\n  --max_bytes_hour_rse MAX_BYTES_HOUR_RSE\n                        Max number of bytes that c3po is allow to replicate\n                        per hour per rse\n  --max_files_hour_rse MAX_FILES_HOUR_RSE\n                        Max number of files that c3po is allow to replicate\n                        per hour prse_rse\n  --min_popularity MIN_POPULARITY\n                        Min number of popularity accesses for a DID in the\n                        last 7 days to trigger\n  --min_recent_requests MIN_RECENT_REQUESTS\n                        Min number of times a DID has to be requested in the\n                        last hour to trigger\n  --max_replicas MAX_REPLICAS\n                        Max number of replicas above which not to trigger\n                        anymore\n")))}l.isMDXComponent=!0},347:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),f=t,d=l["".concat(i,".").concat(f)]||l[f]||m[f]||a;return r?o.a.createElement(d,c(c({ref:n},s),{},{components:r})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);