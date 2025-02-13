"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["141521"],{416604:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>r,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"ecosystem/bi/finebi","title":"FineBI","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/ecosystem/bi/finebi.md","sourceDirName":"ecosystem/bi","slug":"/ecosystem/bi/finebi","permalink":"/docs/2.0/ecosystem/bi/finebi","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"FineBI","language":"en"},"sidebar":"docs","previous":{"title":"Apache Superset","permalink":"/docs/2.0/ecosystem/bi/apache-superset"},"next":{"title":"Power BI","permalink":"/docs/2.0/ecosystem/bi/powerbi"}}'),s=i("785893"),a=i("250065");let o={title:"FineBI",language:"en"},c=void 0,r={},d=[{value:"FineBI Introduction",id:"finebi-introduction",level:2},{value:"Precondition",id:"precondition",level:2},{value:"Login and Connection",id:"login-and-connection",level:2},{value:"Create  model",id:"create--model",level:2}];function l(e){let n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"finebi-introduction",children:"FineBI Introduction"}),"\n",(0,s.jsx)(n.p,{children:"As a business intelligence product, FineBI has a system architecture of data processing, real-time analysis, multidimensional analysis Dashboard and other functions. FineBI supports rich data source connection and analysis and management of tables with multiple views. FineBI can successfully support the modeling and visualization of internal and external data of Apache Doris."}),"\n",(0,s.jsx)(n.h2,{id:"precondition",children:"Precondition"}),"\n",(0,s.jsxs)(n.p,{children:["Install FineBI 5.0 or later, Download link: ",(0,s.jsx)(n.a,{href:"https://intl.finebi.com/",children:"https://intl.finebi.com/"})]}),"\n",(0,s.jsx)(n.h2,{id:"login-and-connection",children:"Login and Connection"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create  account and  log in FineBI"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"login page",src:i(182673).Z+"",width:"686",height:"592"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the Built-in database, If you need to select an external database configuration, the documentation is available\uFF1A",(0,s.jsx)(n.a,{href:"https://help.fanruan.com/finebi-en/doc-view-4437.html",children:"https://help.fanruan.com/finebi-en/doc-view-4437.html"})]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsx)(n.p,{children:"It is recommended to select the built-in database as the information repository of FineBI. The database type selected here is not the target database for querying and analyzing data, but the database for storing and maintaining FineBI model, dashboard and other information. FineBI needs to add, delete, modify and check it."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"select database",src:i(120782).Z+"",width:"1388",height:"684"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click the Management System button and select the database connection management in Data Connections to create a new database connection."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"data connection",src:i(14637).Z+"",width:"2004",height:"1532"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On the new database connection page, select MySQL database"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"select connection",src:i(767691).Z+"",width:"1776",height:"498"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fill in the link information of the Doris database"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Parameters are described as follows\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Username\uFF1AThe username for logging into Doris\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Password\uFF1APassword of the current user\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Host\uFF1AIP address of the FE host in the Doris cluster\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Port\uFF1AFE query port of the Doris cluster\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Coding\uFF1AEncoding format of the Doris cluster\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Name Database\uFF1ATarget database in Doris cluster\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"connection information",src:i(744918).Z+"",width:"1072",height:"1468"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click the test link. Connection succeeded is displayed when the connection information is correct"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"connection test",src:i(697867).Z+"",width:"904",height:"512"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create--model",children:"Create  model"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'In the "Public Data" section, click to create a new dataset. Then click the database table'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"new dataset",src:i(942666).Z+"",width:"746",height:"624"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You need to import tables in the existing database connection"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"select table",src:i(712750).Z+"",width:"2294",height:"410"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You need to refresh each imported table after importing the table. You can analyze the table in the topic only after refreshing the table"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"refresh table",src:i(770757).Z+"",width:"3650",height:"1330"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the imported public data to the edited topic, and then conduct compass analysis and configuration according to business logic."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"data analysis",src:i(531430).Z+"",width:"2802",height:"1526"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},182673:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-1-9ac6bf2a297df74354404c35d165b808.png"},531430:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-10-c858dee55fb99605ce13fc9a2d4f13b5.png"},120782:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-2-8f7c241a6c82537184e7502da96f8f0c.png"},14637:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-3-5ad1b290c79c275e001177c25b3d5886.png"},767691:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-4-3c85ea98da3aaa21519a5b69f2fefd8f.png"},744918:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-5-1-93f3b223024e2e9a50ba2f0a2da45fd4.png"},697867:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-6-bf862861654bdb2dd749e42c30dbe853.png"},942666:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-7-a6ead2e4bfeda94e238c92e7a15176fb.png"},712750:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-8-2-85e527a5d08fd9059faf560e21a99fed.png"},770757:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bi-finebi-en-9-81e4d1fc59ad09d95d6f0a6b05127339.png"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return o}});var t=i(667294);let s={},a=t.createContext(s);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);