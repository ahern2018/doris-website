"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["533515"],{172130:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/statistics/SHOW-TABLE-STATS","title":"SHOW TABLE STATS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/statistics/SHOW-TABLE-STATS.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/SHOW-TABLE-STATS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/statistics/SHOW-TABLE-STATS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW TABLE STATS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP STATS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/statistics/DROP-STATS"},"next":{"title":"SHOW COLUMN STATS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/statistics/SHOW-STATS"}}'),l=t("785893"),i=t("250065");let r={title:"SHOW TABLE STATS",language:"zh-CN"},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u6765\u67E5\u770B\u8868\u7684\u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6\u6982\u51B5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW TABLE STATS <table_name>;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u76EE\u6807\u8868\u540D"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u65E0"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5217\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"updated_rows"}),(0,l.jsx)(n.td,{children:"\u8868\u5F53\u524D\u66F4\u65B0\u884C\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"query_times"}),(0,l.jsx)(n.td,{children:"\u8868\u88AB\u67E5\u8BE2\u6B21\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"row_count"}),(0,l.jsx)(n.td,{children:"\u8868\u5F53\u524D\u7684\u603B\u884C\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"updated_time"}),(0,l.jsx)(n.td,{children:"\u8868\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"columns"}),(0,l.jsx)(n.td,{children:"\u6536\u96C6\u8FC7\u7684\u5217\u5217\u8868"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"trigger"}),(0,l.jsx)(n.td,{children:"\u6536\u96C6\u89E6\u53D1\u65B9\u5F0F"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"new_partition"}),(0,l.jsx)(n.td,{children:"\u662F\u5426\u6709\u65B0\u5206\u533A\u9996\u6B21\u5BFC\u5165\u6570\u636E"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"user_inject"}),(0,l.jsx)(n.td,{children:"\u7528\u6237\u662F\u5426\u624B\u52A8\u6CE8\u5165\u4E86\u7EDF\u8BA1\u4FE1\u606F"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"enable_auto_analyze"}),(0,l.jsx)(n.td,{children:"\u8FD9\u5F20\u8868\u662F\u5426\u53C2\u4E0E\u7EDF\u8BA1\u4FE1\u606F\u81EA\u52A8\u6536\u96C6"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"last_analyze_time"}),(0,l.jsx)(n.td,{children:"\u4E0A\u6B21\u6536\u96C6\u65F6\u95F4"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868\uFF08Table\uFF09"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5F53\u6267\u884C SHOW \u65F6\uFF0C\u9700\u8981\u62E5\u6709\u88AB\u67E5\u8BE2\u7684\u8868\u7684 SELECT_PRIV \u6743\u9650"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5C55\u793A\u8868test1\u7684\u7EDF\u8BA1\u4FE1\u606F\u6982\u51B5"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW TABLE STATS test1;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------+-------------+-----------+---------------------+------------------------+---------+---------------+-------------+---------------------+---------------------+\n| updated_rows | query_times | row_count | updated_time        | columns                | trigger | new_partition | user_inject | enable_auto_analyze | last_analyze_time   |\n+--------------+-------------+-----------+---------------------+------------------------+---------+---------------+-------------+---------------------+---------------------+\n| 0            | 0           | 100000    | 2025-01-17 16:46:31 | [test1:name, test1:id] | MANUAL  | false         | false       | true                | 2025-02-05 12:17:41 |\n+--------------+-------------+-----------+---------------------+------------------------+---------+---------------+-------------+---------------------+---------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);