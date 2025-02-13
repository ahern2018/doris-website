"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["969024"],{213250:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE","title":"ALTER SQL_BLOCK_RULE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE.md","sourceDirName":"sql-manual/sql-statements/data-governance","slug":"/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE","permalink":"/docs/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER SQL_BLOCK_RULE","language":"en"},"sidebar":"docs","previous":{"title":"CREATE SQL_BLOCK_RULE","permalink":"/docs/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE"},"next":{"title":"DROP SQL_BLOCK_RULE","permalink":"/docs/sql-manual/sql-statements/data-governance/DROP-SQL_BLOCK_RULE"}}'),r=t("785893"),l=t("250065");let a={title:"ALTER SQL_BLOCK_RULE",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to modify an SQL block rule."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER SQL_BLOCK_RULE <rule_name>\nPROPERTIES (\n          -- property\n          <property>\n          -- Additional properties\n          [ , ... ]\n          ) \n"})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<rule_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the rule."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<property>"})]})}),"\n",(0,r.jsxs)(n.p,{children:["See the introduction of ",(0,r.jsx)(n.a,{href:"/docs/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE",children:"CREATE SQL_BLOCK_RULE"})," for details."]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Privilege"}),(0,r.jsx)(n.th,{children:"Object"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ADMIN_PRIV"}),(0,r.jsx)(n.td,{children:"Global"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Modify the SQL and enable the rule"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n'})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);