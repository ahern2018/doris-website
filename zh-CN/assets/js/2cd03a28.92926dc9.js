"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["390452"],{660842:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/partitions","title":"PARTITIONS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-valued-functions/partitions.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/partitions","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/partitions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PARTITIONS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MV_INFOS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/mv_infos"},"next":{"title":"partition_values","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/partition-values"}}'),i=t("785893"),l=t("250065");let r={title:"PARTITIONS",language:"zh-CN"},a=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u586B\u53C2\u6570 (Required Parameters)",id:"\u5FC5\u586B\u53C2\u6570-required-parameters",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u8868\u51FD\u6570\uFF0C\u751F\u6210\u5206\u533A\u4E34\u65F6\u8868\uFF0C\u53EF\u4EE5\u67E5\u770B\u67D0\u4E2A TABLE \u7684\u5206\u533A\u5217\u8868\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'PARTITIONS(\n    "catalog"="<catalog>",\n    "database"="<database>",\n    "table"="<table>"\n)\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u5FC5\u586B\u53C2\u6570-required-parameters",children:"\u5FC5\u586B\u53C2\u6570 (Required Parameters)"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5B57\u6BB5"}),(0,i.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"<catalog>"})})}),(0,i.jsx)(e.td,{children:"\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u96C6\u7FA4 catalog \u540D\u3002"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"<database>"})})}),(0,i.jsx)(e.td,{children:"\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u96C6\u7FA4\u6570\u636E\u5E93\u540D\u3002"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"<table>"})})}),(0,i.jsx)(e.td,{children:"\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u96C6\u7FA4\u8868\u540D\u3002"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5B57\u6BB5\u540D"}),(0,i.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"PartitionId"}),(0,i.jsx)(e.td,{children:"\u5206\u533AID"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"PartitionName"}),(0,i.jsx)(e.td,{children:"\u5206\u533A\u540D\u79F0"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"VisibleVersion"}),(0,i.jsx)(e.td,{children:"\u5206\u533A\u7248\u672C"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"VisibleVersionTime"}),(0,i.jsx)(e.td,{children:"\u5206\u533A\u7248\u672C\u63D0\u4EA4\u65F6\u95F4"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"State"}),(0,i.jsx)(e.td,{children:"\u5206\u533A\u72B6\u6001"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"PartitionKey"}),(0,i.jsx)(e.td,{children:"\u5206\u533A\u952E"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Range"}),(0,i.jsx)(e.td,{children:"\u5206\u533A\u8303\u56F4"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"DistributionKey"}),(0,i.jsx)(e.td,{children:"\u5206\u5E03\u952E"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Buckets"}),(0,i.jsx)(e.td,{children:"\u5206\u6876\u6570\u91CF"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ReplicationNum"}),(0,i.jsx)(e.td,{children:"\u526F\u672C\u6570"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"StorageMedium"}),(0,i.jsx)(e.td,{children:"\u5B58\u50A8\u4ECB\u8D28"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"CooldownTime"}),(0,i.jsx)(e.td,{children:"\u51B7\u5374\u65F6\u95F4"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"RemoteStoragePolicy"}),(0,i.jsx)(e.td,{children:"\u8FDC\u7A0B\u5B58\u50A8\u7B56\u7565"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"LastConsistencyCheckTime"}),(0,i.jsx)(e.td,{children:"\u4E0A\u6B21\u4E00\u81F4\u6027\u68C0\u67E5\u65F6\u95F4"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"DataSize"}),(0,i.jsx)(e.td,{children:"\u6570\u636E\u5927\u5C0F"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"IsInMemory"}),(0,i.jsx)(e.td,{children:"\u662F\u5426\u5B58\u5728\u5185\u5B58"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"ReplicaAllocation"}),(0,i.jsx)(e.td,{children:"\u5206\u5E03\u7B56\u7565"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"IsMutable"}),(0,i.jsx)(e.td,{children:"\u662F\u5426\u53EF\u53D8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"SyncWithBaseTables"}),(0,i.jsx)(e.td,{children:"\u662F\u5426\u548C\u57FA\u8868\u6570\u636E\u540C\u6B65\uFF08\u9488\u5BF9\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u7684\u5206\u533A\uFF09"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"UnsyncTables"}),(0,i.jsx)(e.td,{children:"\u548C\u54EA\u4E2A\u57FA\u8868\u6570\u636E\u4E0D\u540C\u6B65\uFF08\u9488\u5BF9\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u7684\u5206\u533A\uFF09"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B internal CATALOG \u4E0B test \u7684 example_table \u7684\u5206\u533A\u5217\u8868"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'select * from partitions("catalog"="internal","database"="test","table"="example_table");\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------------+---------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | State  | PartitionKey | Range                                                                          | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize | IsInMemory | ReplicaAllocation       | IsMutable | SyncWithBaseTables | UnsyncTables |\n+-------------+---------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n|       43209 | p1            |              1 | 2025-01-17 12:35:22 | NORMAL | created_at   | [types: [DATEV2]; keys: [0000-01-01]; ..types: [DATEV2]; keys: [2023-01-01]; ) | id              |      10 |              1 | HDD           | 9999-12-31 23:59:59 |                     | \\N                       | 0.000    |          0 | tag.location.default: 1 |         1 |                  1 | \\N           |\n|       43210 | p2            |              1 | 2025-01-17 12:35:22 | NORMAL | created_at   | [types: [DATEV2]; keys: [2023-01-01]; ..types: [DATEV2]; keys: [2024-01-01]; ) | id              |      10 |              1 | HDD           | 9999-12-31 23:59:59 |                     | \\N                       | 0.000    |          0 | tag.location.default: 1 |         1 |                  1 | \\N           |\n|       43211 | p3            |              1 | 2025-01-17 12:35:22 | NORMAL | created_at   | [types: [DATEV2]; keys: [2024-01-01]; ..types: [DATEV2]; keys: [2025-01-01]; ) | id              |      10 |              1 | HDD           | 9999-12-31 23:59:59 |                     | \\N                       | 0.000    |          0 | tag.location.default: 1 |         1 |                  1 | \\N           |\n|       43212 | p4            |              1 | 2025-01-17 12:35:22 | NORMAL | created_at   | [types: [DATEV2]; keys: [2025-01-01]; ..types: [DATEV2]; keys: [2026-01-01]; ) | id              |      10 |              1 | HDD           | 9999-12-31 23:59:59 |                     | \\N                       | 0.000    |          0 | tag.location.default: 1 |         1 |                  1 | \\N           |\n+-------------+---------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B example_table \u4E0B\u7684\u5206\u533A\u540D\u79F0\u4E3A partition1 \u7684\u5206\u533A\u4FE1\u606F"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'select * from partitions("catalog"="internal","database"="test","table"="example_table") where PartitionName = "p1";\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------------+---------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | State  | PartitionKey | Range                                                                          | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize | IsInMemory | ReplicaAllocation       | IsMutable | SyncWithBaseTables | UnsyncTables |\n+-------------+---------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n|       43209 | p1            |              1 | 2025-01-17 12:35:22 | NORMAL | created_at   | [types: [DATEV2]; keys: [0000-01-01]; ..types: [DATEV2]; keys: [2023-01-01]; ) | id              |      10 |              1 | HDD           | 9999-12-31 23:59:59 |                     | \\N                       | 0.000    |          0 | tag.location.default: 1 |         1 |                  1 | \\N           |\n+-------------+---------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+--------------------+--------------+\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B user_tab \u4E0B\u7684\u5206\u533A\u540D\u79F0\u4E3A partition1 \u7684\u5206\u533A id"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'select PartitionId from partitions("catalog"="internal","database"="test","table"="example_table") where PartitionName = "p1";\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------------+\n| PartitionId |\n+-------------+\n|       43209 |\n+-------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);