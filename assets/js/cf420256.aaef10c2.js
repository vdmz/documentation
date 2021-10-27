(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(362)),i=["components"],c={title:"Rucio Storage Element"},s={unversionedId:"Rucio_storage_element",id:"Rucio_storage_element",isDocsHomePage:!1,title:"Rucio Storage Element",description:"A Rucio Storage Element (RSE) is the logical abstraction of a storage",source:"@site/../docs/Rucio_storage_element.md",sourceDirName:".",slug:"/Rucio_storage_element",permalink:"/documentation/Rucio_storage_element",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/Rucio_storage_element.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1635341119,formattedLastUpdatedAt:"10/27/2021",frontMatter:{title:"Rucio Storage Element"}},l=[{value:"Rucio Cache RSE",id:"rucio-cache-rse",children:[]},{value:"Distances between RSEs",id:"distances-between-rses",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A Rucio Storage Element (RSE) is the logical abstraction of a storage\nsystem for physical files. It is the smallest unit of storage space\naddressable within Rucio. It has a unique identifier and a set of meta\nattributes describing properties such as supported protocols (https,\nsrm, s3, ",".","..), host/port address, quality of service, storage type\n(disk, tape, ",".","..), physical space properties (used-, available-,\nnon-pledged space), and geographical zone."),Object(o.b)("p",null,"Rucio Storage Elements can be grouped in many logical ways, e.g. the UK\nRSEs, the Tier-1 RSEs, or the \\'good\\' RSEs. One can reference groups of\nRSEs by metadata attributes or by explicit enumeration of RSEs. See the\nsection about ",Object(o.b)("a",{parentName:"p",href:"/documentation/rse_expressions"},"RSE Expressions")," for more\ninformation."),Object(o.b)("p",null,"RSE tags are expanded at transfer time to enumerate target sites.\nPost-facto changes to the sites in an RSE tag list will not affect\ncurrently replicated files."),Object(o.b)("h2",{id:"rucio-cache-rse"},"Rucio Cache RSE"),Object(o.b)("p",null,"A cache is storage service which keeps additional copies of files to\nreduce response time and bandwidth usage. In Rucio, a cache is an RSE,\ntagged as volatile. The control of the cache content is usually handled\nby an external process or applications (e.g. the Workflow management\nsystems) and not by Rucio. Thus, as Rucio doesn't control all file\nmovements on these RSEs, the application populating the cache must\nregister and unregister these file replicas in Rucio. The information\nabout replica location on volatile RSEs can have a lifetime. Replicas\nregistered on volatile RSEs are excluded from the Rucio replica\nmanagement system (replication rules, quota, replication locks)\ndescribed in the section ",Object(o.b)("a",{parentName:"p",href:"Replica_management.md"},"Replica\nmanagement"),". Explicit transfer\nrequests can be made to Rucio in order to populate the cache."),Object(o.b)("h2",{id:"distances-between-rses"},"Distances between RSEs"),Object(o.b)("p",null,"When configuring transfers between RSEs, bidirectional distances or rankings must\nbe defined for that link. When sorting by these distances in the\nselection of a transfer source, the following criterion are used:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Higher source_ranking first"),Object(o.b)("li",{parentName:"ul"},"On equal source_ranking, prefer DISK over TAPE"),Object(o.b)("li",{parentName:"ul"},"On equal type, prefer lower distance_ranking"),Object(o.b)("li",{parentName:"ul"},"On equal distance, prefer single hop")))}p.isMDXComponent=!0},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);