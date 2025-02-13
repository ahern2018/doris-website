"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["903803"],{353813:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/statistics/SHOW-TABLE-STATS","title":"SHOW TABLE STATS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/statistics/SHOW-TABLE-STATS.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/SHOW-TABLE-STATS","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/SHOW-TABLE-STATS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW TABLE STATS","language":"en"},"sidebar":"docs","previous":{"title":"DROP STATS","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/DROP-STATS"},"next":{"title":"SHOW COLUMN STATS","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/SHOW-STATS"}}'),l=n("785893"),i=n("250065");let r={title:"SHOW TABLE STATS",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"This statement is used to view the overview statistics of a table."}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"SHOW TABLE STATS <table_name>;\n"})}),"\n",(0,l.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["1. ",(0,l.jsx)(t.code,{children:"<table_name>"})]})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"Table name"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"None"})}),"\n",(0,l.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Column"}),(0,l.jsx)(t.th,{children:"Note"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"updated_rows"}),(0,l.jsx)(t.td,{children:"table updated row count"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"query_times"}),(0,l.jsx)(t.td,{children:"table query times"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"row_count"}),(0,l.jsx)(t.td,{children:"table row count"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"updated_time"}),(0,l.jsx)(t.td,{children:"table last modified time"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"columns"}),(0,l.jsx)(t.td,{children:"analyzed column list"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"trigger"}),(0,l.jsx)(t.td,{children:"last analyze trigger method"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"new_partition"}),(0,l.jsx)(t.td,{children:"flag of new partition first loaded"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"user_inject"}),(0,l.jsx)(t.td,{children:"flag of user inject statistics"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"enable_auto_analyze"}),(0,l.jsx)(t.td,{children:"flag of auto analyzed enabled"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"last_analyze_time"}),(0,l.jsx)(t.td,{children:"last analyze time"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(t.p,{children:"The user who executes this SQL must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Table"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"When executing SHOW, the SELECT_PRIV privilege for the queried table is required."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Show the overview statistics of table test1."}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SHOW TABLE STATS test1;\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-text",children:"+--------------+-------------+-----------+---------------------+------------------------+---------+---------------+-------------+---------------------+---------------------+\n| updated_rows | query_times | row_count | updated_time        | columns                | trigger | new_partition | user_inject | enable_auto_analyze | last_analyze_time   |\n+--------------+-------------+-----------+---------------------+------------------------+---------+---------------+-------------+---------------------+---------------------+\n| 0            | 0           | 100000    | 2025-01-17 16:46:31 | [test1:name, test1:id] | MANUAL  | false         | false       | true                | 2025-02-05 12:17:41 |\n+--------------+-------------+-----------+---------------------+------------------------+---------+---------------+-------------+---------------------+---------------------+\n"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(667294);let l={},i=s.createContext(l);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);