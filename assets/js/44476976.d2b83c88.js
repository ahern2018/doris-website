"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["974874"],{590406:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATS","title":"SHOW-TABLE-STATS","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATS.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATS","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATS","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-TABLE-STATS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-PROC","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROC"},"next":{"title":"SHOW-TABLE-STATUS","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATUS"}}'),s=n("785893"),r=n("250065");let i={title:"SHOW-TABLE-STATS",language:"en"},d=void 0,c={},a=[{value:"SHOW-TABLE-STATS",id:"show-table-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Keywords",id:"keywords",level:3}];function o(e){let t={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"show-table-stats",children:"SHOW-TABLE-STATS"}),"\n",(0,s.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(t.p,{children:"SHOW TABLE STATS"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"SHOW TABLE STATS"})," to view an overview of statistics collection for a table."]}),"\n",(0,s.jsx)(t.p,{children:"Syntax:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW TABLE STATS table_name;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Where:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["table_name: The target table name. It can be in the format ",(0,s.jsx)(t.code,{children:"db_name.table_name"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Output:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Column Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"updated_rows"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Updated rows since the last ANALYZE"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"query_times"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Reserved column for recording the number of times the table was queried in future versions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"row_count"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Number of rows (does not reflect the exact number of rows at the time of command execution)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"updated_time"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Last update time"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"columns"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Columns for which statistics information has been collected"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"mysql> show table stats lineitem \\G;\n*************************** 1. row ***************************\nupdated_rows: 0\n query_times: 0\n   row_count: 6001215\nupdated_time: 2023-11-07\n     columns: [l_returnflag, l_receiptdate, l_tax, l_shipmode, l_suppkey, l_shipdate, l_commitdate, l_partkey, l_orderkey, l_quantity, l_linestatus, l_comment, l_extendedprice, l_linenumber, l_discount, l_shipinstruct]\n     trigger: MANUAL\n"})}),"\n",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.p,{children:"SHOW, TABLE, STATS"})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var l=n(667294);let s={},r=l.createContext(s);function i(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);