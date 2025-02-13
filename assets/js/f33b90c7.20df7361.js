"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["863042"],{962374:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>A,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE","title":"SHOW-CREATE-DATABASE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-CREATE-DATABASE","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-CREATE-CATALOG","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-CATALOG"},"next":{"title":"SHOW-CREATE-MATERIALIZED-VIEW","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW"}}'),a=t("785893"),r=t("250065");let l={title:"SHOW-CREATE-DATABASE",language:"en"},i=void 0,c={},o=[{value:"SHOW-CREATE-DATABASE",id:"show-create-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"show-create-database",children:"SHOW-CREATE-DATABASE"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"SHOW CREATE DATABASE"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement checks the creation of the doris database."}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE DATABASE db_name;\n"})}),"\n",(0,a.jsx)(n.p,{children:"illustrate:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"db_name"}),": The name of the database where doris exists."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"View the creation of the test database in doris"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW CREATE DATABASE test;\n+----------+----------------------------+\n| Database | Create Database |\n+----------+----------------------------+\n| test | CREATE DATABASE `test` |\n+----------+----------------------------+\n1 row in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:" SHOW, CREATE, DATABASE\n"})}),"\n",(0,a.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function A(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);