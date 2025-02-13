"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["508786"],{430063:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/view/ALTER-VIEW","title":"ALTER VIEW","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/view","slug":"/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW","permalink":"/docs/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER VIEW","language":"en"},"sidebar":"docs","previous":{"title":"CREATE VIEW","permalink":"/docs/sql-manual/sql-statements/table-and-view/view/CREATE-VIEW"},"next":{"title":"DROP VIEW","permalink":"/docs/sql-manual/sql-statements/table-and-view/view/DROP-VIEW"}}'),i=s("785893"),l=s("250065");let r={title:"ALTER VIEW",language:"en"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to modify the definition of a logical view."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER VIEW [<db_name>.]<view_name> \n [(<column_definition>)]\nAS <query_stmt>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"column_definition:\n    <column_name> [COMMENT '<comment>'] [,...]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"<view_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The identifier (i.e., name) of the view to be modified."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"<query_stmt>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The SELECT query statement that defines the view."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The name of the database where the view resides. If not specified, the current database is used by default."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"<column_definition>"})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The column definitions of the view.",(0,i.jsx)(n.br,{}),"\nWhere:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"<column_name>"})]}),(0,i.jsx)(n.br,{}),"\nColumn name.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"<comment>"})]}),(0,i.jsx)(n.br,{}),"\nColumn comment."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Privilege"}),(0,i.jsx)(n.th,{children:"Object"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ALTER_PRIV"}),(0,i.jsx)(n.td,{children:"View"}),(0,i.jsx)(n.td,{children:"ALTER_PRIV privilege is required on the view being modified."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SELECT_PRIV"}),(0,i.jsx)(n.td,{children:"Table, View"}),(0,i.jsx)(n.td,{children:"SELECT_PRIV privilege is required on the tables, views, or materialized views being queried."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Modify the view ",(0,i.jsx)(n.code,{children:"example_view"})," on ",(0,i.jsx)(n.code,{children:"example_db"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW example_db.example_view\n(\n  c1 COMMENT "column 1",\n  c2 COMMENT "column 2",\n  c3 COMMENT "column 3"\n)\nAS SELECT k1, k2, SUM(v1) FROM example_table \nGROUP BY k1, k2\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let i={},l=t.createContext(i);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);