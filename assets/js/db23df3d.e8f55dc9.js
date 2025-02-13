"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["583289"],{644008:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>o,assets:()=>c,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-statements/session/variable/SHOW-VARIABLES","title":"SHOW VARIABLES","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/session/variable/SHOW-VARIABLES.md","sourceDirName":"sql-manual/sql-statements/session/variable","slug":"/sql-manual/sql-statements/session/variable/SHOW-VARIABLES","permalink":"/docs/dev/sql-manual/sql-statements/session/variable/SHOW-VARIABLES","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW VARIABLES","language":"en"},"sidebar":"docs","previous":{"title":"UNSET VARIABLE","permalink":"/docs/dev/sql-manual/sql-statements/session/variable/UNSET-VARIABLE"},"next":{"title":"SHOW PROCESSLIST","permalink":"/docs/dev/sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST"}}'),l=s("785893"),i=s("250065");let r={title:"SHOW VARIABLES",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to display Doris system variables, which can be queried by conditions"}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW [<effective_scope>] VARIABLES [<like_pattern> | <where clause>]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<effective_scope>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Effective scope is one of ",(0,l.jsx)(n.code,{children:"GLOBAL"})," or ",(0,l.jsx)(n.code,{children:"SESSION"})," or ",(0,l.jsx)(n.code,{children:"LOCAL"}),". If there is no effective scope, default value is ",(0,l.jsx)(n.code,{children:"SESSION"}),". ",(0,l.jsx)(n.code,{children:"LOCAL"})," is an alias of ",(0,l.jsx)(n.code,{children:"SESSION"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<like_pattern>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Use like statement to match and filter result"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["3. ",(0,l.jsx)(n.code,{children:"<where>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Use where statement to match and filter result"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Any_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Session"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Any privilege can show variables"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Variable_name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Value"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Default_Value"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Changed"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"variable name1"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"value1"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"default value1"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"0/1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"variable name2"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"value2"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"default value2"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"0/1"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Show variables is mainly used to view the values of system variables."}),"\n",(0,l.jsx)(n.li,{children:"Executing the SHOW VARIABLES command does not require any privileges, it only requires being able to connect to the server."}),"\n",(0,l.jsxs)(n.li,{children:["The column ",(0,l.jsx)(n.code,{children:"Changed"})," from ",(0,l.jsx)(n.code,{children:"Return Value"}),", 0 means no changed and 1 means changed."]}),"\n",(0,l.jsxs)(n.li,{children:["There are some restrictions when using the ",(0,l.jsx)(n.code,{children:"SHOW"})," statement:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Can not use ",(0,l.jsx)(n.code,{children:"or"})," in where clause"]}),"\n",(0,l.jsx)(n.li,{children:"Column names are on the left"}),"\n",(0,l.jsx)(n.li,{children:"Only supports equivalent comparisons in where clause"}),"\n",(0,l.jsx)(n.li,{children:"Use the like statement to match with variable_name."}),"\n",(0,l.jsx)(n.li,{children:"The % percent wildcard can be used anywhere in the matching pattern"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The default here is to match the Variable_name, here is the exact match"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show variables like 'max_connections';\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Matching through the percent sign (%) wildcard can match multiple items"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show variables like '%connec%';\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Use the Where clause for matching queries"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"show variables where variable_name = 'version';\n"})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);