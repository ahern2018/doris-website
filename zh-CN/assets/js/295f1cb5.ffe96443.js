"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["158624"],{757107:function(e,n,t){t.r(n),t.d(n,{metadata:()=>d,contentTitle:()=>i,default:()=>x,assets:()=>c,toc:()=>a,frontMatter:()=>l});var d=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES","title":"SHOW DYNAMIC PARTITION TABLES","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW DYNAMIC PARTITION TABLES","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW PARTITIONS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS"},"next":{"title":"SHOW COLUMNS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/table/SHOW-COLUMNS"}}'),s=t("785893"),r=t("250065");let l={title:"SHOW DYNAMIC PARTITION TABLES",language:"zh-CN"},i=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5\uFF1A",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u5F53\u524D db \u4E0B\u6240\u6709\u7684\u52A8\u6001\u5206\u533A\u8868\u72B6\u6001"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW DYNAMIC PARTITION TABLES [ FROM <db_name> ];\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,s.jsxs)(n.p,{children:["\u6307\u5B9A\u5C55\u793A\u52A8\u6001\u5206\u533A\u8868\u72B6\u6001\u7684 ",(0,s.jsx)(n.code,{children:"DB"})," \u540D\u79F0\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u5C55\u793A\u5F53\u524D ",(0,s.jsx)(n.code,{children:"DB"})," \u4E0B\u7684\u6240\u6709\u52A8\u6001\u5206\u533A\u8868\u72B6\u6001\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5217\u540D"}),(0,s.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TableName"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsxs)(n.td,{children:["\u5F53\u524D ",(0,s.jsx)(n.code,{children:"DB"})," \u6216\u6307\u5B9A ",(0,s.jsx)(n.code,{children:"DB"})," \u7684\u8868\u540D\u79F0"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Enable"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u662F\u5426\u5F00\u542F\u4E86\u8868\u7684\u52A8\u6001\u5206\u533A\u5C5E\u6027"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TimeUnit"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsxs)(n.td,{children:["\u52A8\u6001\u5206\u533A\u8868\u7684\u5206\u533A\u7C92\u5EA6\uFF0C\u6709 ",(0,s.jsx)(n.code,{children:"HOUR"}),"\uFF0C",(0,s.jsx)(n.code,{children:"DAY"}),",",(0,s.jsx)(n.code,{children:"WEEK"}),",",(0,s.jsx)(n.code,{children:"MONTH"}),",",(0,s.jsx)(n.code,{children:"YEAR"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Start"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u52A8\u6001\u5206\u533A\u7684\u8D77\u59CB\u504F\u79FB\uFF0C\u4E3A\u8D1F\u6570\u3002\u9ED8\u8BA4\u503C\u4E3A -2147483648\uFF0C\u5373\u4E0D\u5220\u9664\u5386\u53F2\u5206\u533A\u3002\u6839\u636E time_unit \u5C5E\u6027\u7684\u4E0D\u540C\uFF0C\u4EE5\u5F53\u5929\uFF08\u661F\u671F/\u6708\uFF09\u4E3A\u57FA\u51C6\uFF0C\u5206\u533A\u8303\u56F4\u5728\u6B64\u504F\u79FB\u4E4B\u524D\u7684\u5206\u533A\u5C06\u4F1A\u88AB\u5220\u9664\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"End"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u52A8\u6001\u5206\u533A\u7684\u7ED3\u675F\u504F\u79FB\uFF0C\u4E3A\u6B63\u6570\u3002\u6839\u636E time_unit \u5C5E\u6027\u7684\u4E0D\u540C\uFF0C\u4EE5\u5F53\u5929\uFF08\u661F\u671F/\u6708\uFF09\u4E3A\u57FA\u51C6\uFF0C\u63D0\u524D\u521B\u5EFA\u5BF9\u5E94\u8303\u56F4\u7684\u5206\u533A\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Prefix"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u52A8\u6001\u521B\u5EFA\u7684\u5206\u533A\u540D\u524D\u7F00\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Buckets"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u52A8\u6001\u521B\u5EFA\u7684\u5206\u533A\u6240\u5BF9\u5E94\u7684\u5206\u6876\u6570\u91CF\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReplicationNum"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u52A8\u6001\u521B\u5EFA\u7684\u5206\u533A\u6240\u5BF9\u5E94\u7684\u526F\u672C\u6570\u91CF\uFF0C\u5982\u679C\u4E0D\u586B\u5199\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u8BE5\u8868\u521B\u5EFA\u65F6\u6307\u5B9A\u7684\u526F\u672C\u6570\u91CF\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReplicaAllocation"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u52A8\u6001\u521B\u5EFA\u7684\u5206\u533A\u6240\u5BF9\u5E94\u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\uFF0C\u5982\u679C\u4E0D\u586B\u5199\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u8BE5\u8868\u521B\u5EFA\u65F6\u6307\u5B9A\u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"StartOf"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsxs)(n.td,{children:["\u52A8\u6001\u5206\u533A\u6BCF\u4E2A\u5206\u533A\u7C92\u5EA6\u7684\u8D77\u59CB\u70B9\u3002\u5F53 ",(0,s.jsx)(n.code,{children:"time_unit"})," \u4E3A ",(0,s.jsx)(n.code,{children:"WEEK"})," \u65F6\uFF0C\u8BE5\u5B57\u6BB5\u8868\u793A\u6BCF\u5468\u7684\u8D77\u59CB\u70B9\uFF0C\u53D6\u503C\u4E3A ",(0,s.jsx)(n.code,{children:"MONDAY"})," \u5230 ",(0,s.jsx)(n.code,{children:"SUNDAY"}),"\uFF1B\u5F53 ",(0,s.jsx)(n.code,{children:"time_unit"})," \u4E3A ",(0,s.jsx)(n.code,{children:"MONTH"})," \u65F6\uFF0C\u8868\u793A\u6BCF\u6708\u7684\u8D77\u59CB\u65E5\u671F\uFF0C\u53D6\u503C\u4E3A ",(0,s.jsx)(n.code,{children:"1rd"})," \u81F3 ",(0,s.jsx)(n.code,{children:"28rd"}),"\uFF1B\u5F53 ",(0,s.jsx)(n.code,{children:"time_unit"})," \u4E3A ",(0,s.jsx)(n.code,{children:"MONTH"})," \u65F6\uFF0C\u8BE5\u503C\u9ED8\u8BA4\u4E3A ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LastUpdateTime"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsxs)(n.td,{children:["\u52A8\u6001\u5206\u533A\u7684\u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LastSchedulerTime"}),(0,s.jsx)(n.td,{children:"datetime"}),(0,s.jsx)(n.td,{children:"\u52A8\u6001\u5206\u533A\u7684\u4E0A\u4E00\u6B21\u8C03\u5EA6\u65F6\u95F4\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"State"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u52A8\u6001\u5206\u533A\u7684\u521B\u5EFA\u72B6\u6001\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LastCreatePartitionMsg"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u6700\u540E\u4E00\u6B21\u6267\u884C\u52A8\u6001\u6DFB\u52A0\u5206\u533A\u8C03\u5EA6\u7684\u9519\u8BEF\u4FE1\u606F\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LastDropPartitionMsg"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u6700\u540E\u4E00\u6B21\u6267\u884C\u52A8\u6001\u5220\u9664\u5206\u533A\u8C03\u5EA6\u7684\u9519\u8BEF\u4FE1\u606F\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReservedHistoryPeriods"}),(0,s.jsx)(n.td,{children:"varchar"}),(0,s.jsx)(n.td,{children:"\u52A8\u6001\u5206\u533A\u4FDD\u7559\u7684\u5386\u53F2\u5206\u533A\u7684\u5206\u533A\u533A\u95F4\uFF0C\u5B83\u8868\u793A\u5728\u52A8\u6001\u5206\u533A\u8868\u4E2D\uFF0C\u54EA\u4E9B\u5386\u53F2\u5206\u533A\u5E94\u8BE5\u88AB\u4FDD\u7559\uFF0C\u800C\u4E0D\u662F\u88AB\u81EA\u52A8\u5220\u9664\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u53C2\u6570 ",(0,s.jsx)(n.code,{children:"db_name"}),"\uFF0C\u5C55\u793A\u7684\u662F\u5F53\u524D ",(0,s.jsx)(n.code,{children:"DB"})," \u4E0B\u7684\u6240\u6709\u52A8\u6001\u5206\u533A\u8868\u72B6\u6001\uFF0C\u9ED8\u8BA4\u7528\u6237\u5177\u5907\u5F53\u524D DB \u7684",(0,s.jsx)(n.code,{children:"SHOW_PRIV"}),"\u6743\u9650\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679C\u6307\u5B9A\u4E86\u53C2\u6570 ",(0,s.jsx)(n.code,{children:"db_name"}),"\uFF0C\u5C55\u793A\u7684\u662F\u6307\u5B9A ",(0,s.jsx)(n.code,{children:"DB"})," \u4E0B\u7684\u6240\u6709\u52A8\u6001\u5206\u533A\u8868\u72B6\u6001\uFF0C\u7528\u6237\u9700\u8981\u5177\u5907\u8BE5 ",(0,s.jsx)(n.code,{children:"DB"})," \u7684 ",(0,s.jsx)(n.code,{children:"SHOW_PRIV"})," \u6743\u9650\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u4E0B\u7684\u6240\u6709\u52A8\u6001\u5206\u533A\u8868\u72B6\u6001\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW DYNAMIC PARTITION TABLES;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg | ReservedHistoryPeriods  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| d3        | true   | WEEK     | -3          | 3    | p      | 1       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | [2021-12-01,2021-12-31] |\n| d5        | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d4        | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    | \n| d6        | true   | MONTH    | -2147483648 | 2    | p      | 8       | 3rd       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d2        | true   | DAY      | -3          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d7        | true   | MONTH    | -2147483648 | 5    | p      | 8       | 24th      | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u67E5\u770B\u6307\u5B9A\u6570\u636E\u5E93\u4E0B\u7684\u6240\u6709\u52A8\u6001\u5206\u533A\u8868\u72B6\u6001\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW DYNAMIC PARTITION TABLES FROM test;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg | ReservedHistoryPeriods  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| test1     | true   | WEEK     | -30          | 3    | p      | 8       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | [2021-12-01,2021-12-31] |\n| test2     | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| test3     | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    | \n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n"})})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var d=t(667294);let s={},r=d.createContext(s);function l(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);