(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var i=a(3),n=a(7),r=(a(0),a(345)),o={id:"replica-workflow",title:"Typical Replica Workflow",sidebar_label:"Typical Replica Workflow"},s={unversionedId:"replica-workflow",id:"replica-workflow",isDocsHomePage:!1,title:"Typical Replica Workflow",description:"This section gives an overview of what happens within Rucio, for a typical replica workflow. Two workflows are described:",source:"@site/../docs/replica-workflow.md",sourceDirName:".",slug:"/replica-workflow",permalink:"/documentation/replica-workflow",editUrl:"https://github.com/rucio/documentation/docs/../docs/replica-workflow.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620233867,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"Typical Replica Workflow",frontMatter:{id:"replica-workflow",title:"Typical Replica Workflow",sidebar_label:"Typical Replica Workflow"}},l=[],c={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section gives an overview of what happens within Rucio, for a typical replica workflow. Two workflows are described:\nWhen a replica is uploaded to Rucio via a client and when a replica is created by a\nsite to site transfer due to the creation of a ",Object(r.b)("a",{parentName:"p",href:"overview_Replica_management.html"},"replication rule"),"."),Object(r.b)("p",null,"##Replica paths on storage"),Object(r.b)("p",null,"Rucio has two basic paradigms in deciding the path for a replica on a specific storage system. ",Object(r.b)("strong",{parentName:"p"},"Deterministic")," and ",Object(r.b)("strong",{parentName:"p"},"Non-deterministic")," paths. If we assume\na file whose data identifier is ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1"),", thus the scope is ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe")," and the name is ",Object(r.b)("inlineCode",{parentName:"p"},"test.file.1"),". In Rucio a deterministically created path is a path\nwhich can be generated solely knowing the scope and name of a data identifier (Ignoring the static prefix of the storage endpoint). For a non-deterministic path\nadditional information describing the file is necessary, such as meta-data, the dataset the file belongs to, etc."),Object(r.b)("p",null,"Rucio supports pluggable algorithms for both deterministic and non-deterministic algorithms. This section explains a few of them."),Object(r.b)("p",null,"##Deterministic algorithm based on hashes"),Object(r.b)("p",null,"The hash deterministic algorithm is an algorithm commonly used in Rucio. The advantage of this algorithm is that, due to the characteristics of cryptographic hash functions,\nthe files are evenly distributed to directories. This can be an important characteristic for storage systems whose access performance degrades based on the number\nof files in a directory."),Object(r.b)("p",null,"For a data identifier, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1")," a md5-hashsum is calculated ",Object(r.b)("inlineCode",{parentName:"p"},"077c8119053bebb168d125034bff64ac"),". The generated path is then based on the first four\ncharacters of the hashsum. e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"/07/7c/user.jdoe/test.file.1"),"."),Object(r.b)("p",null,"##Deterministic algorithm based on naming convention"),Object(r.b)("p",null,"If a specific naming convention is enforced on the filenames, a possible deterministic algorithm can be based on it."),Object(r.b)("p",null,"For the data identifier ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1")," the first part of the filename (",Object(r.b)("inlineCode",{parentName:"p"},"test"),") is extracted and used to generate the path: ",Object(r.b)("inlineCode",{parentName:"p"},"/test/user.jdoe/file.1")),Object(r.b)("p",null,"##Non-Deterministic algorithm based on parent dataset"),Object(r.b)("p",null,"If the file is part of a dataset, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"data:dataset1234")," the dataset can be used in the path of the filename. This is useful for e.g. tape storage systems, to keep the files belonging to the same dataset on the same tape."),Object(r.b)("p",null,"For the data identifier ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1")," which is part of the dataset ",Object(r.b)("inlineCode",{parentName:"p"},"data:dataset1234")," the generated path is: ",Object(r.b)("inlineCode",{parentName:"p"},"/data/dataset1234/user.jdoe/test.file.1")),Object(r.b)("p",null,"##Replica is uploaded with the command line client"),Object(r.b)("p",null,"This is a typical workflow when a user uploads multiple files, which are part of a dataset, via the command line client."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The dataset ",Object(r.b)("inlineCode",{parentName:"li"},"test.dataset")," is being registered at the server.\nAll files, or datasets are associated to a ",Object(r.b)("a",{parentName:"li",href:"overview_File_Dataset_Container.html"},"scope"),", if not specifically mentioned the client will assume the default scope of the user,\nsuch as ",Object(r.b)("inlineCode",{parentName:"li"},"user.jdoe"),". Thus the full data identifier for the dataset is ",Object(r.b)("inlineCode",{parentName:"li"},"user.jdoe:test.dataset"),".")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The client queries the RSE information from the server. This not only gives a list of prioritized write protocols to use but also the information\nif the RSE is a deterministic or non-deterministic one.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The file replica is registered as ",Object(r.b)("inlineCode",{parentName:"p"},"COPYING")," on the RSE.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Based on the identified naming algorithm of the RSE and the list of prioritized write protocols, the file URL is calculated.\ne.g. using the hash algorithm from above: ",Object(r.b)("inlineCode",{parentName:"p"},"https://storageserver.organization.org/VO/data/07/7c/user.jdoe/test.file.1"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The file upload is done with the first prioritized protocol. If the upload fails, step 4 is repeated with the second prioritized protocol, etc.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the upload is successfully finished, the replica state is changed to ",Object(r.b)("inlineCode",{parentName:"p"},"AVAILABLE"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Step 3-6 are repeated (done in parallel) with all other files part of the uploaded dataset."))),Object(r.b)("p",null,"##Replica is created by a replication rule"),Object(r.b)("p",null,"This is a typical workflow if a file already exists in Rucio but the user wants to replicate it to a different RSE."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The user creates a replication rule for the dataset ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.dataset")," at the server.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The Rucio server creates internal requests for each single file in the dataset and puts them in a queue to be read by the data transfer service.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The data transfer submitter picks these requests up and queries the destination RSE information for each file.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Based on the identified naming algorithm of the destination RSE it creates the destination URLs and creates the file replicas in ",Object(r.b)("inlineCode",{parentName:"p"},"COPYING")," state.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The transfer service then submits the transfer job to the connected transfer tool (e.g. FTS)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the transfers are finished the transfer tool notifies Rucio about the transfer success and the transfer services mark the replicas as ",Object(r.b)("inlineCode",{parentName:"p"},"AVAILABLE"),"."))))}p.isMDXComponent=!0},345:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=i,h=d["".concat(o,".").concat(f)]||d[f]||b[f]||r;return a?n.a.createElement(h,s(s({ref:t},c),{},{components:a})):n.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);