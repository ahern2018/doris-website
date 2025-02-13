"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["335034"],{641741:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/SHOW-RESOURCES","title":"SHOW RESOURCES","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/cluster-management/compute-management/SHOW-RESOURCES.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/SHOW-RESOURCES","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/SHOW-RESOURCES","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW RESOURCES","language":"en"},"sidebar":"docs","previous":{"title":"DROP RESOURCE","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/DROP-RESOURCE"},"next":{"title":"CREATE WORKLOAD GROUP","permalink":"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-GROUP"}}'),a=s("785893"),l=s("250065");let i={title:"SHOW RESOURCES",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to display resources that the user has permission to use. Ordinary users can only display resources with permission, and root or admin users will display all resources."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW RESOURCES\n[\n  WHERE\n  [NAME [ = "<your_resource_name>" | LIKE "<name_matcher>"]]\n  [RESOURCETYPE = "<type>"]\n] | [LIKE "<pattern>"]\n[ORDER BY ...]\n[LIMIT <limit>][OFFSET <offset>];\n'})}),"\n",(0,a.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"If NAME LIKE is used, it will match Resource whose Name contains name_matcher in RESOURCES"}),"\n",(0,a.jsx)(n.li,{children:"If NAME = is used, it will match the specified Name exactly"}),"\n",(0,a.jsxs)(n.li,{children:["If RESOURCETYPE is specified, match the corresponding Resrouce type, The supported RESOURCETYPEs can be referred to in ",(0,a.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE",children:"CREATE-RESOURCE"}),";"]}),"\n",(0,a.jsx)(n.li,{children:"You can use ORDER BY to sort on any combination of columns"}),"\n",(0,a.jsx)(n.li,{children:"If LIMIT is specified, limit matching records are displayed. Otherwise show all"}),"\n",(0,a.jsx)(n.li,{children:"If OFFSET is specified, the query results are displayed starting at offset offset. By default the offset is 0."}),"\n",(0,a.jsx)(n.li,{children:"If using LIKE, the WHERE clause will be ignored."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Display all resources that the current user has permissions to"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW RESOURCES;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'Display the specified Resource, the name contains the string "20140102", and display 10 attributes'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW RESOURCES WHERE NAME LIKE "2014_01_02" LIMIT 10;\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'Display the specified Resource, specify the name as "20140102" and sort by KEY in descending order'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW RESOURCES WHERE NAME = "20140102" ORDER BY `KEY` DESC;\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Using LIKE to match the resource"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW RESOURCES LIKE "jdbc%";\n'})}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var t=s(667294);let a={},l=t.createContext(a);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);