(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{240:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),c=(n(0),n(345)),a={title:"Running rucio-hermes"},i={unversionedId:"bin/rucio-hermes",id:"bin/rucio-hermes",isDocsHomePage:!1,title:"Running rucio-hermes",description:"`",source:"@site/../docs/bin/rucio-hermes.md",sourceDirName:"bin",slug:"/bin/rucio-hermes",permalink:"/documentation/bin/rucio-hermes",editUrl:"https://github.com/rucio/documentation/docs/../docs/bin/rucio-hermes.md",version:"current",frontMatter:{title:"Running rucio-hermes"}},u=[],s={toc:u};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"usage: rucio-hermes [-h] [--run-once] [--threads THREADS] [--bulk BULK]\n                    [--delay DELAY] [--broker-timeout BROKER_TIMEOUT]\n                    [--broker-retry BROKER_RETRY]\n\nThe Hermes daemon is responsible for delivering messages via STOMP to a messagebroker and via SMTP as email.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --delay DELAY         Delay control: second control per cycle\n  --broker-timeout BROKER_TIMEOUT\n                        Broker control: timeout second per cycle\n  --broker-retry BROKER_RETRY\n                        Broker control: number of retries per cycle\n\nCreate a message::\n\n  $ python\n  from rucio.core.message import add_message\n  add_message(event_type='NEW_DID', payload='There is a new DID')\n\nRun the daemon::\n\n  $ rucio-hermes --run-once\n    \n")))}l.isMDXComponent=!0},345:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=t,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||c;return n?o.a.createElement(f,i(i({ref:r},s),{},{components:n})):o.a.createElement(f,i({ref:r},s))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);