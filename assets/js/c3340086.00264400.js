"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["924958"],{376:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/database/SHOW-CREATE-DATABASE","title":"SHOW CREATE DATABASE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/database/SHOW-CREATE-DATABASE.md","sourceDirName":"sql-manual/sql-statements/database","slug":"/sql-manual/sql-statements/database/SHOW-CREATE-DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/SHOW-CREATE-DATABASE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW CREATE DATABASE","language":"en"},"sidebar":"docs","previous":{"title":"DROP DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/DROP-DATABASE"},"next":{"title":"SHOW DATABASES","permalink":"/docs/3.0/sql-manual/sql-statements/database/SHOW-DATABASES"}}'),a=n("785893"),l=n("250065");let i={title:"SHOW CREATE DATABASE",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Permission Control",id:"permission-control",level:2},{value:"Example",id:"example",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement checks the creation information of the doris built-in database or catalog database."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW CREATE DATABASE [<catalog>.]<db_name>;\n"})}),"\n",(0,a.jsx)(t.h2,{id:"required-parameters",children:"Required parameters"}),"\n",(0,a.jsxs)(t.p,{children:["** 1. ",(0,a.jsx)(t.code,{children:"<db_name>"}),"**"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Database Name"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"optional-parameters",children:"Optional parameters"}),"\n",(0,a.jsxs)(t.p,{children:["** 1. ",(0,a.jsx)(t.code,{children:"<catalog>"}),"**"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Indicates whether the table is internal or external"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Column"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Database"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Database Name"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Create Database"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Corresponding database creation statement"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"permission-control",children:"Permission Control"}),"\n",(0,a.jsx)(t.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Permissions"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Corresponding database"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Requires read permission on the corresponding database"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"View the creation of the test database in doris"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW CREATE DATABASE test;\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+----------+------------------------+\n| Database | Create Database        |\n+----------+------------------------+\n| test     | CREATE DATABASE `test` |\n+----------+------------------------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"View the creation information of the database hdfs_text in the hive catalog"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW CREATE DATABASE hdfs_text;\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"+-----------+------------------------------------------------------------------------------------+                         \n| Database  | Create Database                                                                    |                         \n+-----------+------------------------------------------------------------------------------------+                         \n| hdfs_text | CREATE DATABASE `hdfs_text` LOCATION 'hdfs://HDFS1009138/hive/warehouse/hdfs_text' |                         \n+-----------+------------------------------------------------------------------------------------+  \n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var s=n(667294);let a={},l=s.createContext(a);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);