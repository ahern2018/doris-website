"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["540476"],{939120:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/partition-values","title":"partition_values","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/table-valued-functions/partition-values.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/partition-values","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/partition-values","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"partition_values","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PARTITIONS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/partitions"},"next":{"title":"TASKS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/tasks"}}'),l=t("785893"),a=t("250065");let i={title:"partition_values",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u586B\u53C2\u6570 (Required Parameters)",id:"\u5FC5\u586B\u53C2\u6570-required-parameters",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8868\u51FD\u6570\uFF0C\u751F\u6210\u5206\u533A\u503C\u4E34\u65F6\u8868\uFF0C\u53EF\u4EE5\u67E5\u770B\u67D0\u4E2A TABLE \u7684\u5206\u533A\u503C\u5217\u8868\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u7528\u4E8E FROM \u5B50\u53E5\u4E2D\uFF0C\u4EC5\u652F\u6301 hive \u8868"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'PARTITION_VALUES(\n    "catalog"="<catalog>",\n    "database"="<database>",\n    "table"="<table>"\n)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u586B\u53C2\u6570-required-parameters",children:"\u5FC5\u586B\u53C2\u6570 (Required Parameters)"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5B57\u6BB5"}),(0,l.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<catalog>"})}),(0,l.jsx)(n.td,{children:"\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u96C6\u7FA4 catalog \u540D\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<database>"})}),(0,l.jsx)(n.td,{children:"\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u96C6\u7FA4\u6570\u636E\u5E93\u540D\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<table>"})}),(0,l.jsx)(n.td,{children:"\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u96C6\u7FA4\u8868\u540D\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u8981\u67E5\u7684\u8868\u6709\u51E0\u4E2A\u5206\u533A\u5B57\u6BB5\uFF0C\u8BE5\u8868\u5C31\u6709\u51E0\u5217"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.p,{children:"hive3 CATALOG \u4E0B multi_catalog \u7684 text_partitioned_columns \u7684\u5EFA\u8868\u8BED\u53E5\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `text_partitioned_columns`(\n  `t_timestamp` timestamp)\nPARTITIONED BY (\n `t_int` int,\n `t_float` float,\n `t_string` string)\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"mysql> select * from text_partitioned_columns;\n+----------------------------+-------+---------+----------+\n| t_timestamp                | t_int | t_float | t_string |\n+----------------------------+-------+---------+----------+\n| 2023-01-01 00:00:00.000000 |  NULL |     0.1 | test1    |\n| 2023-01-02 00:00:00.000000 |  NULL |     0.2 | test2    |\n| 2023-01-03 00:00:00.000000 |   100 |     0.3 | test3    |\n+----------------------------+-------+---------+----------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B hive3 CATALOG \u4E0B multi_catalog \u7684 text_partitioned_columns \u7684\u5206\u533A\u503C\u5217\u8868"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select * from partition_values("catalog"="hive3", "database" = "multi_catalog","table" = "text_partitioned_columns");\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------+---------+----------+\n| t_int | t_float | t_string |\n+-------+---------+----------+\n|   100 |     0.3 | test3    |\n|  NULL |     0.2 | test2    |\n|  NULL |     0.1 | test1    |\n+-------+---------+----------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);