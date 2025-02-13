"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["760605"],{48166:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN","title":"SHOW CATALOG RECYCLE BIN","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN.md","sourceDirName":"sql-manual/sql-statements/recycle","slug":"/sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN","permalink":"/docs/3.0/sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW CATALOG RECYCLE BIN","language":"en"},"sidebar":"docs","previous":{"title":"SHOW TRASH","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TRASH"},"next":{"title":"DROP CATALOG RECYCLE BIN","permalink":"/docs/3.0/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN"}}'),s=n("785893"),i=n("250065");let l={title:"SHOW CATALOG RECYCLE BIN",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to display the dropped meta informations that can be recovered"}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n'})}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"The meaning of each column is as follows:\n        Type\uFF1A                type of meta information:Database\u3001Table\u3001Partition\n        Name\uFF1A                name of meta information\n        DbId\uFF1A                id of database\n        TableId\uFF1A             id of table\n        PartitionId\uFF1A         id of partition\n        DropTime\uFF1A            drop time of meta information\n        DataSize\uFF1A            the amount of data. If the type is database, this value includes the data size of the recycled tables and partitions in the database\n        RemoteDataSize\uFF1A      the amount of data on remote storage(hdfs or object storage). If the type is database, this value includes the remote data size of the recycled tables and partitions in the database\n"})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Display all meta informations that can be recovered"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:" SHOW CATALOG RECYCLE BIN;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Display meta informations with name 'test'"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:" SHOW CATALOG RECYCLE BIN WHERE NAME = 'test';\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"SHOW, CATALOG RECYCLE BIN\n"})}),"\n",(0,s.jsx)(t.h2,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var a=n(667294);let s={},i=a.createContext(s);function l(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);