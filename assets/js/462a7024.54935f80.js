"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["797284"],{425415:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"ecosystem/bi/datagrip","title":"DataGrip","description":"\x3c!--","source":"@site/docs/ecosystem/bi/datagrip.md","sourceDirName":"ecosystem/bi","slug":"/ecosystem/bi/datagrip","permalink":"/docs/dev/ecosystem/bi/datagrip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DataGrip","language":"en"},"sidebar":"docs","previous":{"title":"DBeaver","permalink":"/docs/dev/ecosystem/bi/dbeaver"},"next":{"title":"Doris Kubernetes Operator","permalink":"/docs/dev/ecosystem/doris-operator/doris-operator-overview"}}'),a=t("785893"),s=t("250065");let o={title:"DataGrip",language:"en"},r=void 0,c={},l=[{value:"introduce",id:"introduce",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Add data source",id:"add-data-source",level:2},{value:"Function support",id:"function-support",level:2}];function d(e){let n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"introduce",children:"introduce"}),"\n",(0,a.jsx)(n.p,{children:"DataGrip is a powerful cross-platform database tool for relational and NoSQL databases from JetBrains."}),"\n",(0,a.jsx)(n.p,{children:"Apache Doris is highly compatible with the MySQL protocol. You can use DataGrip's MySQL data source to connect to Apache Doris and query data in the internal catalog and external catalog."}),"\n",(0,a.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,a.jsxs)(n.p,{children:["DataGrip installed\nYou can visit ",(0,a.jsx)(n.a,{href:"http://www.jetbrains.com/datagrip/",children:"www.jetbrains.com/datagrip/"})," to download and install DataGrip"]}),"\n",(0,a.jsx)(n.h2,{id:"add-data-source",children:"Add data source"}),"\n",(0,a.jsx)(n.admonition,{title:"Note",type:"info",children:(0,a.jsx)(n.p,{children:"Currently verified using DataGrip version 2023.3.4"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start DataGrip"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Click the plus sign (",(0,a.jsx)(n.strong,{children:"+"}),") icon in the upper left corner of the DataGrip window and select the MySQL data source"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"add data source",src:t(874869).Z+"",width:"1280",height:"850"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Configure Doris connection"}),"\n",(0,a.jsx)(n.p,{children:"On the General tab of the Data Sources and Drivers window, configure the following connection information:"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Host: FE host IP address of the Doris cluster."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Port: FE query port of Doris cluster, such as 9030."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Database: The target database in the Doris cluster."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"User: User name used to log in to the Doris cluster, such as admin."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Password: User password used to log in to the Doris cluster."}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Database can be used to distinguish between internal catalog and external catalog. If only the Database name is filled in, the current data source will be connected to the internal catalog by default. If the format is catalog.db, the current data source will be connected to the catalog filled in Database by default, as shown in DataGrip The database table is also a database table in the connected catalog. In this way, you can use DataGrip's MySQL data source to create multiple Doris data sources to manage different Catalogs in Doris."})}),"\n",(0,a.jsx)(n.admonition,{title:"Note",type:"info",children:(0,a.jsx)(n.p,{children:"Managing the external catalog connected to Doris through the Database form of catalog.db requires Doris version 2.1.0 and above."})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"internal catalog"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"connect internal catalog",src:t(740364).Z+"",width:"1280",height:"1081"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"external catalog"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"connect external catalog",src:t(351735).Z+"",width:"1280",height:"1081"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Test data source connection"}),"\n",(0,a.jsx)(n.p,{children:"After filling in the connection information, click Test Connection in the lower left corner to verify the accuracy of the database connection information. If DBeaver returns the following pop-up window, the test connection is successful. Then click OK in the lower right corner to complete the connection configuration."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"test connection",src:t(476658).Z+"",width:"1280",height:"1081"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Connect to database"}),"\n",(0,a.jsx)(n.p,{children:"After the database connection is established, you can see the created data source connection in the database connection navigation on the left, and you can connect and manage the database through DataGrip."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"create connection",src:t(981797).Z+"",width:"1280",height:"850"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"function-support",children:"Function support"}),"\n",(0,a.jsx)(n.p,{children:"Basically supports most visual viewing operations, as well as SQL console writing SQL operations Doris does not support or has not been verified various operations such as creating database tables, schema changes, and adding, deleting, and modifying data."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},874869:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/datagrip1-f19b9e109f1c1eac95c64c5bcc212d13.png"},740364:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/datagrip2-f3ff2e8b80db98c58649088293cd77b5.png"},351735:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/datagrip3-e58d5f50d57af98ecbc959e1879e11b5.png"},476658:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/datagrip4-d396b9987726e0ad47636f4f629a148a.png"},981797:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/datagrip5-7414328ecc98a654c737cd21134d5e60.png"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(667294);let a={},s=i.createContext(a);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);