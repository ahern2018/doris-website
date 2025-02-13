"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["48863"],{654249:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT","title":"SHOW TABLET STORAGE FORMAT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW TABLET STORAGE FORMAT","language":"en"},"sidebar":"docs","previous":{"title":"ADMIN COPY TABLET","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET"},"next":{"title":"ADMIN-CLEAN-TRASH","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH"}}'),r=t("785893"),l=t("250065");let i={title:"SHOW TABLET STORAGE FORMAT",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to display storage format information on the Backend."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET STORAGE FORMAT [VERBOSE]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["** 1. ",(0,r.jsx)(n.code,{children:"VERBOSE"})," **"]}),"\n",(0,r.jsx)(n.p,{children:"Displays more detailed information."}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Column"}),(0,r.jsx)(n.th,{children:"DataType"}),(0,r.jsx)(n.th,{children:"Note"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BackendId"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:"The ID of the BE (Backend) node where the tablet replica is located."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"V1Count"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:"Number of V1 version tablets."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"V2Count"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:"Number of V2 version tablets."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TabletId"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:"The unique identifier of the tablet."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"StorageFormat"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The version of the tablet, either V1 or V2."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Admin_priv"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Database"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Required to execute administrative operations on the database, including managing tables, partitions, and system-level commands."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execute the statement without the verbose parameter"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"show tablet storage format;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-----------+---------+---------+\n| BackendId | V1Count | V2Count |\n+-----------+---------+---------+\n| 10002     | 0       | 2867    |\n+-----------+---------+---------+\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execute the statement with the verbose parameter"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"show tablet storage format verbose;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-----------+----------+---------------+\n| BackendId | TabletId | StorageFormat |\n+-----------+----------+---------------+\n| 10002     | 39227    | V2            |\n| 10002     | 39221    | V2            |\n| 10002     | 39215    | V2            |\n| 10002     | 39199    | V2            |\n+-----------+----------+---------------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);