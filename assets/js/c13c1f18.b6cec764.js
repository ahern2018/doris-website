"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["271918"],{616339:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SHOW-ROLES","title":"SHOW ROLES","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/account-management/SHOW-ROLES.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SHOW-ROLES","permalink":"/docs/sql-manual/sql-statements/account-management/SHOW-ROLES","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW ROLES","language":"en"},"sidebar":"docs","previous":{"title":"DROP ROLE","permalink":"/docs/sql-manual/sql-statements/account-management/DROP-ROLE"},"next":{"title":"GRANT TO","permalink":"/docs/sql-manual/sql-statements/account-management/GRANT-TO"}}'),l=t("785893"),r=t("250065");let i={title:"SHOW ROLES",language:"en"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"SHOW ROLES"})," statement is used to display all created role information, including role name, included users and permissions."]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ROLES\n"})}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Column"}),(0,l.jsx)(n.th,{children:"DataType"}),(0,l.jsx)(n.th,{children:"Note"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Name"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Role Name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Comment"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Comment"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Users"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Included Users"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"GlobalPrivs"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Global Privileges"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"CatalogPrivs"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Catalog Privileges"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"DatabasePrivs"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Database Privileges"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TablePrivs"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Table Privileges"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ResourcePrivs"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Resource Privileges"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"WorkloadGroupPrivs"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Workload Group Privileges"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"GRANT_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"USER or ROLE"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"This operation can only be performed by users or roles with GRANT_PRIV permissions"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"View created roles"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ROLES\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);