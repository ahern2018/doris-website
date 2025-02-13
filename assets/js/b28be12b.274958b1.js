"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["914840"],{172155:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/tasks","title":"TASKS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/table-valued-functions/tasks.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/tasks","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/tasks","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TASKS","language":"en"},"sidebar":"docs","previous":{"title":"partition_values","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/partition-values"},"next":{"title":"SELECT","permalink":"/docs/sql-manual/sql-statements/data-query/SELECT"}}'),t=s("785893"),i=s("250065");let d={title:"TASKS",language:"en"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Table function, generates a temporary table of tasks, which allows you to view the information of tasks generated by jobs in the current Doris cluster."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'TASKS(\n    "type"="<type>"\n)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"<type>"})})}),(0,t.jsxs)(n.td,{children:["Type of the task: ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"insert"}),": insert into type task. ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"mv"}),": materialized view type task."]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:'tasks("type"="insert")'})})," tasks return value of type insert"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"TaskId"})}),(0,t.jsx)(n.td,{children:"Task id"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"JobId"})}),(0,t.jsx)(n.td,{children:"Job id"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"JobName"})}),(0,t.jsx)(n.td,{children:"Job name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Label"})}),(0,t.jsx)(n.td,{children:"Label"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Status"})}),(0,t.jsx)(n.td,{children:"Task status"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"ErrorMsg"})}),(0,t.jsx)(n.td,{children:"Task failure information"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"CreateTime"})}),(0,t.jsx)(n.td,{children:"Task creation time"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"FinishTime"})}),(0,t.jsx)(n.td,{children:"Task completion time"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"TrackingUrl"})}),(0,t.jsx)(n.td,{children:"Tracking URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"LoadStatistic"})}),(0,t.jsx)(n.td,{children:"Load statistics"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"User"})}),(0,t.jsx)(n.td,{children:"User"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:'tasks("type"="mv")'})})," Tasks return value of type MV"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"TaskId"})}),(0,t.jsx)(n.td,{children:"Task id"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"JobId"})}),(0,t.jsx)(n.td,{children:"Job id"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"JobName"})}),(0,t.jsx)(n.td,{children:"Job Name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MvId"})}),(0,t.jsx)(n.td,{children:"Materialized View ID"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MvName"})}),(0,t.jsx)(n.td,{children:"Materialized View Name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MvDatabaseId"})}),(0,t.jsx)(n.td,{children:"DB ID of the materialized view"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MvDatabaseName"})}),(0,t.jsx)(n.td,{children:"Name of the database to which the materialized view belongs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Status"})}),(0,t.jsx)(n.td,{children:"Task status"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"ErrorMsg"})}),(0,t.jsx)(n.td,{children:"Task failure information"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"CreateTime"})}),(0,t.jsx)(n.td,{children:"Task creation time"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"StartTime"})}),(0,t.jsx)(n.td,{children:"Task start running time"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"FinishTime"})}),(0,t.jsx)(n.td,{children:"Task End Run Time"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"DurationMs"})}),(0,t.jsx)(n.td,{children:"Task runtime"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"TaskContext"})}),(0,t.jsx)(n.td,{children:"Task running parameters"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"RefreshMode"})}),(0,t.jsx)(n.td,{children:"Refresh mode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"NeedRefreshPartitions"})}),(0,t.jsx)(n.td,{children:"The partition information that needs to be refreshed for this task"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"CompletedPartitions"})}),(0,t.jsx)(n.td,{children:"The partition information that has been refreshed for this task"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Progress"})}),(0,t.jsx)(n.td,{children:"Task running progress"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"View tasks for all materialized views"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select * from tasks("type"="mv");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'+-----------------+-------+------------------+-------+--------------------------+--------------+--------------------------------------------------------+---------+----------+---------------------+---------------------+---------------------+------------+-------------------------------------------------------------+-------------+-----------------------------------------------+-----------------------------------------------+---------------+-----------------------------------+\n| TaskId          | JobId | JobName          | MvId  | MvName                   | MvDatabaseId | MvDatabaseName                                         | Status  | ErrorMsg | CreateTime          | StartTime           | FinishTime          | DurationMs | TaskContext                                                 | RefreshMode | NeedRefreshPartitions                         | CompletedPartitions                           | Progress      | LastQueryId                       |\n+-----------------+-------+------------------+-------+--------------------------+--------------+--------------------------------------------------------+---------+----------+---------------------+---------------------+---------------------+------------+-------------------------------------------------------------+-------------+-----------------------------------------------+-----------------------------------------------+---------------+-----------------------------------+\n| 509478985247053 | 23369 | inner_mtmv_23363 | 23363 | range_date_up_union_mv1  | 21805        | regression_test_nereids_rules_p0_mv_create_part_and_up | SUCCESS |          | 2025-01-08 18:19:10 | 2025-01-08 18:19:10 | 2025-01-08 18:19:10 | 233        | {"triggerMode":"SYSTEM","isComplete":false}                 | COMPLETE    | ["p_20231001_20231101"]                       | ["p_20231001_20231101"]                       | 100.00% (1/1) | 71897c47d0d94fd2-9ca52a0e6eb3bff5 |\n| 509486915704885 | 23369 | inner_mtmv_23363 | 23363 | range_date_up_union_mv1  | 21805        | regression_test_nereids_rules_p0_mv_create_part_and_up | SUCCESS |          | 2025-01-08 18:19:17 | 2025-01-08 18:19:17 | 2025-01-08 18:19:17 | 227        | {"triggerMode":"MANUAL","partitions":[],"isComplete":false} | PARTIAL     | ["p_20231101_20231201"]                       | ["p_20231101_20231201"]                       | 100.00% (1/1) | 9bf5ff69d4cc4c78-b50505436c8410c4 |\n| 509487197275880 | 23369 | inner_mtmv_23363 | 23363 | range_date_up_union_mv1  | 21805        | regression_test_nereids_rules_p0_mv_create_part_and_up | SUCCESS |          | 2025-01-08 18:19:18 | 2025-01-08 18:19:18 | 2025-01-08 18:19:18 | 191        | {"triggerMode":"MANUAL","partitions":[],"isComplete":false} | PARTIAL     | ["p_20231101_20231201"]                       | ["p_20231101_20231201"]                       | 100.00% (1/1) | 5b3b4525b6774b5b-89b070042cdcbcd5 |\n| 509478131194211 | 23377 | inner_mtmv_23371 | 23371 | range_date_up_union_mv2  | 21805        | regression_test_nereids_rules_p0_mv_create_part_and_up | SUCCESS |          | 2025-01-08 18:19:10 | 2025-01-08 18:19:10 | 2025-01-08 18:19:10 | 156        | {"triggerMode":"SYSTEM","isComplete":false}                 | COMPLETE    | ["p_20231001_20231101"]                       | ["p_20231001_20231101"]                       | 100.00% (1/1) | 6d0a0782819b446e-b9da5d5de513ce00 |\n| 509486057129101 | 23377 | inner_mtmv_23371 | 23371 | range_date_up_union_mv2  | 21805        | regression_test_nereids_rules_p0_mv_create_part_and_up | SUCCESS |          | 2025-01-08 18:19:17 | 2025-01-08 18:19:17 | 2025-01-08 18:19:18 | 213        | {"triggerMode":"MANUAL","partitions":[],"isComplete":false} | PARTIAL     | ["p_20231101_20231201"]                       | ["p_20231101_20231201"]                       | 100.00% (1/1) | f1303483e3db43e7-aa424acc32dc39ca |\n| 509486143784554 | 23377 | inner_mtmv_23371 | 23371 | range_date_up_union_mv2  | 21805        | regression_test_nereids_rules_p0_mv_create_part_and_up | SUCCESS |          | 2025-01-08 18:19:18 | 2025-01-08 18:19:18 | 2025-01-08 18:19:18 | 151        | {"triggerMode":"MANUAL","partitions":[],"isComplete":false} | PARTIAL     | ["p_20231101_20231201"]                       | ["p_20231101_20231201"]                       | 100.00% (1/1) | 8d29b11ac41f4fe0-9d7c86372707310b |\n| 488317385772600 | 21794 | inner_mtmv_21788 | 21788 | test_tablet_type_mtmv_mv | 16016        | zd                                                     | SUCCESS |          | 2025-01-08 12:26:29 | 2025-01-08 12:26:29 | 2025-01-08 12:26:29 | 1          | {"triggerMode":"MANUAL","partitions":[],"isComplete":true}  | NOT_REFRESH | []                                            | \\N                                            | \\N            |                                   |\n| 437156301250803 | 19508 | inner_mtmv_19494 | 19494 | mv1                      | 16016        | zd                                                     | SUCCESS |          | 2025-01-07 22:13:48 | 2025-01-07 22:13:48 | 2025-01-07 22:17:45 | 236985     | {"triggerMode":"MANUAL","partitions":[],"isComplete":false} | COMPLETE    | ["p_20210101_MAXVALUE","p_20200101_20210101"] | ["p_20210101_MAXVALUE","p_20200101_20210101"] | 100.00% (2/2) | 7965b4ddce8a4480-8884e9701679c1c4 |\n| 439689059641969 | 19508 | inner_mtmv_19494 | 19494 | mv1                      | 16016        | zd                                                     | SUCCESS |          | 2025-01-07 22:55:59 | 2025-01-07 22:55:59 | 2025-01-07 22:55:59 | 35         | {"triggerMode":"MANUAL","partitions":[],"isComplete":false} | NOT_REFRESH | []                                            | \\N                                            | \\N            |                                   |\n+-----------------+-------+------------------+-------+--------------------------+--------------+--------------------------------------------------------+---------+----------+---------------------+---------------------+---------------------+------------+-------------------------------------------------------------+-------------+-----------------------------------------------+-----------------------------------------------+---------------+-----------------------------------+\n'})}),"\n",(0,t.jsx)(n.p,{children:"View tasks for all insert tasks"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'select * from tasks("type"="insert");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+----------------+----------------+----------------+-------------------------------+---------+----------+---------------------+---------------------+---------------------+-------------+---------------+------+\n| TaskId         | JobId          | JobName        | Label                         | Status  | ErrorMsg | CreateTime          | StartTime           | FinishTime          | TrackingUrl | LoadStatistic | User |\n+----------------+----------------+----------------+-------------------------------+---------+----------+---------------------+---------------------+---------------------+-------------+---------------+------+\n| 79133848479750 | 78533940810334 | insert_tab_job | 78533940810334_79133848479750 | SUCCESS |          | 2025-01-17 14:42:54 | 2025-01-17 14:42:54 | 2025-01-17 14:42:54 |             |               | root |\n+----------------+----------------+----------------+-------------------------------+---------+----------+---------------------+---------------------+---------------------+-------------+---------------+------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);