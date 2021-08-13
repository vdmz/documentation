(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(354)),r=["components"],c={id:"multi-vo-rucio",title:"Multi-VO Rucio",sidebar_label:"Multi-VI Rucio"},s={unversionedId:"multi-vo-rucio",id:"multi-vo-rucio",isDocsHomePage:!1,title:"Multi-VO Rucio",description:'This section provides an overview of using Rucio for multiple virtual organizations (VOs) on a single instance with the "Multi-VO" feature. Rather than each VO having to set up',source:"@site/../docs/multi_vo_rucio.md",sourceDirName:".",slug:"/multi-vo-rucio",permalink:"/documentation/multi-vo-rucio",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/multi_vo_rucio.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1628851209,formattedLastUpdatedAt:"8/13/2021",sidebar_label:"Multi-VI Rucio",frontMatter:{id:"multi-vo-rucio",title:"Multi-VO Rucio",sidebar_label:"Multi-VI Rucio"}},l=[{value:"Changes to the Client",id:"changes-to-the-client",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'This section provides an overview of using Rucio for multiple virtual organizations (VOs) on a single instance with the "Multi-VO" feature. Rather than each VO having to set up\nan entire instance by themselves, they can share the same server and database which are run by a central "super_root", and continue to use Rucio as they would a normal or\n"Single-VO" instance. Their accounts, scopes and RSEs are associated with their VO which ensures all rules and replicas are kept separate from other VOs using the instance.'),Object(i.b)("h2",{id:"changes-to-the-client"},"Changes to the Client"),Object(i.b)("p",null,"At the CLI and client level there are few changes to how Rucio is used. These cases, such as optional arguments for VO, are covered in documentation for the affected function. The\nmain change is the addition of two options in the ",Object(i.b)("inlineCode",{parentName:"p"},"rucio.cfg")," file, one to flag that the instance is being run in M-VO mode and another to specify the VO the users belong to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cfg"},"  [common]\n  ...\n  multi_vo = True\n\n  [client]\n  ...\n  vo = abc\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," should also be set in the other config files for the server, daemons etc. However, ",Object(i.b)("inlineCode",{parentName:"p"},"vo")," should not be set in these cases as these parts of Rucio are not associated\nwith a single VO. If ",Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," is not set, or set to False, then Rucio will operate normally."),Object(i.b)("p",null,"##Role of the super_root"),Object(i.b)("p",null,"While root accounts still retain their administrative role within a VO, for example adding RSEs and accounts, functions relating to the creation and management of VOs is handled\nby the super_root account, a concept introduced with M-VO Rucio. It is worth noting that the super_root account ",Object(i.b)("strong",{parentName:"p"},"cannot")," be used to perform individual VO administration; the\nroles of super_root and root are distinct."),Object(i.b)("p",null,"##Access of super_root Functions"),Object(i.b)("p",null,"As the super_root functions aren't intended for use by normal users of admins, they do not have an implementation in the client or CLI. They can be accessed from the core or the\n:ref:",Object(i.b)("inlineCode",{parentName:"p"},"vo-rest-api"),", however the latter will require the VO endpoint to be added to the aliases file used when setting up the server as it is disabled by default."),Object(i.b)("p",null,"##Starting a M-VO Instance"),Object(i.b)("p",null,"When bootstrapping the database as part of the Rucio installation, if M-VO is enabled in ",Object(i.b)("inlineCode",{parentName:"p"},"rucio.cfg"),' then the super_root account is created automatically. The default VO "def"\nis also created, and the super_root acccount is associated with it. The identity used to access this account can be managed in the usual way.'),Object(i.b)("p",null,"##Creating VOs"),Object(i.b)("p",null,"When creating a new VO with the ",Object(i.b)("inlineCode",{parentName:"p"},"add_vo")," function you need to specify the three digit identifier for the new VO, which can contain letters and numbers. This must be unique for\nthe instance. A more complete description can also be optionally included, along with an email to use for the root of this new VO. In addition to creating the new VO, a root\naccount is also created for this VO, and has all identities associated with super_root added to it. The identities for the new root can then be configured as usual."),Object(i.b)("p",null,"##Managing VOs"),Object(i.b)("p",null,"In addition to creating VOs, the description and email for a VO can be altered using ",Object(i.b)("inlineCode",{parentName:"p"},"update_vo"),". If the root user of a VO loses access to their account, the super_root can\nassociate a new identity with it using ",Object(i.b)("inlineCode",{parentName:"p"},"recover_vo_root_identity"),". Finally, a list of current VOs and their descriptions is accessible via ",Object(i.b)("inlineCode",{parentName:"p"},"list_vos"),"."),Object(i.b)("p",null,"##Converting Existing Instances"),Object(i.b)("p",null,"As opposed to starting a new M-VO instance from scratch, it may be desirable to\nconvert the database for an existing (S-VO) Rucio instance into a M-VO instance\nso that additional VOs can be added without disrupting the original VO or\nneeding to create a second instance. Conversely, one VO within a M-VO instance may\ngrow to the point where it needs its own dedicated instance, and so converting\ndata from M-VO to S-VO may also be desirable. These operations can be performed\nusing utility functions included with Rucio."),Object(i.b)("p",null,"As mentioned above, in order to configure a M-VO instance of Rucio only the\nconfig file needs to change. However for an existing instance any entries already\nin the database will not be associated with a VO (or associated with their old\none if previously in M-VO mode). In order to change these, direct operations on\nthe database are required. These commands are generated using SQLAlchemy, and\ncan either be run directly on the database or printed out and run manually."),Object(i.b)("p",null,"##Practicalities"),Object(i.b)("p",null,'Before attempting to convert existing data, it is recommended that a backup of\nthe database is taken in case an issue arises. Furthermore, of the databases\nsupported by Rucio, only PostgreSQL has been tested on real data. Based on this\ntest (which was performed on a machine with 64GB memory and four Intel Xeon E5-2430 v2),\nthe tables with 2 columns that needed updating were converted at a rate of 5GB\nof data per hour. However many tables do not need any changes, so the process\nwill likely be faster than this in practice. Another approach to speed up the\nconversion is to skip the "history" tables, as these can be very large. Unlike\nother tables these do not have foreign key constraints set, and so do not need\nto be updated in order to use the database. While the history will be\ninaccessible from the new VO, it will still exist in the database and could be\naccessed using the ',Object(i.b)("inlineCode",{parentName:"p"},"super_root")," account if needed."),Object(i.b)("p",null,"##S-VO to M-VO"),Object(i.b)("p",null,"Before starting, ensure that ",Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"True")," in the config file.\nThe SQL commands needed to convert the database involve dropping foreign key\nconstraints that affect accounts/scopes, then altering the relevant columns,\nbefore re-adding the constraints. The 3 character identifier for the VO, a full\ndescription and an admin email should be provided:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ tools/convert_database_vo.py convert_to_mvo new \"New VO for existing data\" rucio@email.com\n  ALTER TABLE account_limits DROP CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\";\n  ...\n  UPDATE account_limits SET account=(split_part(account_limits.account, '@', 1) || CAST('@new' AS CHAR(4))) WHERE split_part(account_limits.account, '@', 2) = '';\n  ...\n  ALTER TABLE account_limits ADD CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\" FOREIGN KEY(account) REFERENCES accounts (account);\n")),Object(i.b)("p",null,"In this example, no changes will be made to the database by running the script,\nand so the SQL will need to be run manually. After running the commands, a\n",Object(i.b)("inlineCode",{parentName:"p"},"super_root")," account should be setup to allow administrative functions like\nadding more VOs:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ python\n  >>> from rucio.db.sqla.util import create_root_account\n  >>> create_root_account(create_counters=False)\n")),Object(i.b)("p",null,"Alternatively by specifying ",Object(i.b)("inlineCode",{parentName:"p"},"--commit_changes")," the script will attempt to\nmodify the database as it runs, however this requires the account used by the\nRucio instance to access the database to be the owner of the the tables. In\nthis case, the ",Object(i.b)("inlineCode",{parentName:"p"},"super_root")," account can be added as part of the script by\npassing the argument ",Object(i.b)("inlineCode",{parentName:"p"},"--create_super_root"),". If there is an error during the\nconversion, then none of the changes will be committed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  $ tools/convert_database_vo.py --commit_changes convert_to_mvo new "New VO for existing data" rucio@email.com --create_super_root\n')),Object(i.b)("p",null,"Finally, there is the option to skip the (potentially very large) tables of\nhistorical data using ",Object(i.b)("inlineCode",{parentName:"p"},"--skip_history"),". In this case the commands to alter\nthose tables are omitted:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  $ tools/convert_database_vo.py --skip_history convert_to_mvo new "New VO for existing data" rucio@email.com\n')),Object(i.b)("p",null,"##M-VO to S-VO"),Object(i.b)("p",null,"Before starting, ensure that ",Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"True")," in the config file\n(this option can be removed after completing the conversion). The first stage\nof the conversion is the same as before, dropping foreign key constraints and\nrenaming the entries that were associated with the old VO. The name of this VO\nis the only required argument:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ tools/convert_database_vo.py convert_to_svo old\n  ALTER TABLE account_limits DROP CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\";\n  ...\n  UPDATE account_limits SET account=split_part(account_limits.account, '@', 1) WHERE split_part(account_limits.account, '@', 2) = 'old';\n  ...\n  ALTER TABLE account_limits ADD CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\" FOREIGN KEY(account) REFERENCES accounts (account);\n")),Object(i.b)("p",null,"By default data associated with any other VOs is left in the database, but will be\ninaccessible to Rucio users. By setting pass the argument ",Object(i.b)("inlineCode",{parentName:"p"},"--delete_vos"),", these\nentries will be deleted from the database completely:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ tools/convert_database_vo.py convert_to_svo old --delete_vos\n  ...\n  DELETE FROM account_limits WHERE split_part(account_limits.account, '@', 2) = 'xyz';\n  ...\n  DELETE FROM account_limits WHERE split_part(account_limits.account, '@', 2) = '123';\n  ...\n")),Object(i.b)("p",null,"Once again, historical tables skipped with ",Object(i.b)("inlineCode",{parentName:"p"},"--skip_history"),", and the commands\ncan be run directly against the database using the ",Object(i.b)("inlineCode",{parentName:"p"},"--commit_changes")," argument;\nif this is not set then the ",Object(i.b)("inlineCode",{parentName:"p"},"super_root")," account should be manually deleted\nafter running the SQL:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ python\n  >>> from rucio.common.types import InternalAccount\n  >>> from rucio.core.account import del_account\n  >>> del_account(InternalAccount('super_root', vo='def'))\n")))}d.isMDXComponent=!0},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,b=d["".concat(r,".").concat(h)]||d[h]||p[h]||i;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);