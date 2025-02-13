"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["298417"],{294685:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>p,assets:()=>r,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/ALTER-COLOCATE-GROUP","title":"ALTER COLOCATE GROUP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/table/ALTER-COLOCATE-GROUP.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/ALTER-COLOCATE-GROUP","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/table/ALTER-COLOCATE-GROUP","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ALTER COLOCATE GROUP","language":"en"},"sidebar":"docs","previous":{"title":"SHOW COLUMNS","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/table/SHOW-COLUMNS"},"next":{"title":"CREATE INDEX","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/index/CREATE-INDEX"}}'),l=t("785893"),a=t("250065");let i={title:"ALTER COLOCATE GROUP",language:"en"},o=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to modify the properties of a Colocation Group."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER COLOCATE GROUP  [<database>.] <group_name>\nSET (\n    <property_list>\n);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<group_name>"})]})}),"\n",(0,l.jsx)(n.p,{children:"Specify the name of the colocate group to be modified."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2.",(0,l.jsx)(n.code,{children:"<property_list>"})]})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"property_list"})," is a property of the ",(0,l.jsx)(n.code,{children:"colocation group"}),", and currently only supports modifying ",(0,l.jsx)(n.code,{children:"replication_num"})," and ",(0,l.jsx)(n.code,{children:"replication_allocation"}),". After modifying these two properties of the ",(0,l.jsx)(n.code,{children:"colocation group"}),", simultaneously change the properties ",(0,l.jsx)(n.code,{children:"default.replication_allocation"}),", ",(0,l.jsx)(n.code,{children:"dynamic.replication_allocation"}),", and replication_allocation of the existing partitions of the group's tables to be the same as it."]}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<database>"})]})}),"\n",(0,l.jsxs)(n.p,{children:["Specify the database to which the ",(0,l.jsx)(n.code,{children:"colocate group"})," to be modified belongs."]}),"\n",(0,l.jsx)(n.p,{children:"Note:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["If the colocate group is global, that is, its name starts with ",(0,l.jsx)(n.strong,{children:"global"}),", then it does not belong to any Database"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsxs)(n.p,{children:["Requires ",(0,l.jsx)(n.code,{children:"ADMIN"})," permissions."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Modify the replica number of a global group, and set ",(0,l.jsx)(n.code,{children:'"colocate_with" = "__global__foo"'})," when creating the table."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER COLOCATE GROUP __global__foo\nSET (\n    "replication_num"="1"\n    );\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:'Modify the replica number of a non-global group, and set "colocate_with" = "bar" when creating the table, and the table belongs to Database example_db.'}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER COLOCATE GROUP example_db.bar\nSET (\n   "replication_num"="1"\n   );\n'})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);