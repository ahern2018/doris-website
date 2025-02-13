"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["236919"],{176105:function(e,n,l){l.r(n),l.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>p,assets:()=>o,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"admin-manual/data-admin/backup-restore/restore","title":"\u6062\u590D","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/data-admin/backup-restore/restore.md","sourceDirName":"admin-manual/data-admin/backup-restore","slug":"/admin-manual/data-admin/backup-restore/restore","permalink":"/zh-CN/docs/admin-manual/data-admin/backup-restore/restore","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u6062\u590D","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5907\u4EFD","permalink":"/zh-CN/docs/admin-manual/data-admin/backup-restore/backup"},"next":{"title":"\u6982\u8FF0","permalink":"/zh-CN/docs/admin-manual/data-admin/ccr/overview"}}'),s=l("785893"),i=l("250065");let r={title:"\u6062\u590D",language:"zh-CN"},t=void 0,o={},d=[{value:"\u524D\u63D0\u6761\u4EF6",id:"\u524D\u63D0\u6761\u4EF6",level:2},{value:"1. \u83B7\u53D6\u5FEB\u7167\u7684\u5907\u4EFD\u65F6\u95F4\u6233",id:"1-\u83B7\u53D6\u5FEB\u7167\u7684\u5907\u4EFD\u65F6\u95F4\u6233",level:2},{value:"2. \u4ECE\u5FEB\u7167\u6062\u590D",id:"2-\u4ECE\u5FEB\u7167\u6062\u590D",level:2},{value:"Option 1\uFF1A\u6062\u590D\u5FEB\u7167\u5230\u5F53\u524D\u6570\u636E\u5E93",id:"option-1\u6062\u590D\u5FEB\u7167\u5230\u5F53\u524D\u6570\u636E\u5E93",level:3},{value:"Option 2\uFF1A\u6062\u590D\u5FEB\u7167\u5230\u6307\u5B9A\u6570\u636E\u5E93",id:"option-2\u6062\u590D\u5FEB\u7167\u5230\u6307\u5B9A\u6570\u636E\u5E93",level:3},{value:"Option 3\uFF1A\u4ECE\u5FEB\u7167\u6062\u590D\u5355\u4E2A\u8868",id:"option-3\u4ECE\u5FEB\u7167\u6062\u590D\u5355\u4E2A\u8868",level:3},{value:"Option 4\uFF1A\u4ECE\u5FEB\u7167\u6062\u590D\u5206\u533A\u548C\u8868",id:"option-4\u4ECE\u5FEB\u7167\u6062\u590D\u5206\u533A\u548C\u8868",level:3},{value:"3. \u67E5\u770B\u6062\u590D\u4F5C\u4E1A\u7684\u6267\u884C\u60C5\u51B5",id:"3-\u67E5\u770B\u6062\u590D\u4F5C\u4E1A\u7684\u6267\u884C\u60C5\u51B5",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u524D\u63D0\u6761\u4EF6",children:"\u524D\u63D0\u6761\u4EF6"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u786E\u4FDD\u60A8\u62E5\u6709",(0,s.jsx)(n.strong,{children:"\u7BA1\u7406\u5458"}),"\u6743\u9650\u4EE5\u6267\u884C\u6062\u590D\u64CD\u4F5C\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u786E\u4FDD\u60A8\u6709\u4E00\u4E2A\u6709\u6548\u7684",(0,s.jsx)(n.strong,{children:"\u5907\u4EFD"}),"\u5FEB\u7167\u53EF\u4F9B\u6062\u590D\uFF0C\u8BF7\u53C2\u8003",(0,s.jsx)(n.a,{href:"/zh-CN/docs/admin-manual/data-admin/backup-restore/backup",children:"\u5907\u4EFD"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-\u83B7\u53D6\u5FEB\u7167\u7684\u5907\u4EFD\u65F6\u95F4\u6233",children:"1. \u83B7\u53D6\u5FEB\u7167\u7684\u5907\u4EFD\u65F6\u95F4\u6233"}),"\n",(0,s.jsxs)(n.p,{children:["\u4EE5\u4E0B SQL \u8BED\u53E5\u53EF\u7528\u4E8E\u67E5\u770B\u540D\u4E3A",(0,s.jsx)(n.code,{children:"example_repo"}),"\u7684 Repository \u4E2D\u7684\u73B0\u6709\u5907\u4EFD\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW SNAPSHOT ON example_repo;\n+-----------------+---------------------+--------+\n| Snapshot            | Timestamp              | Status   |\n+-----------------+---------------------+--------+\n| exampledb_20241225 | 2022-04-08-15-52-29 | OK     |\n+-----------------+---------------------+--------+\n1 row in set (0.15 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u4ECE\u5FEB\u7167\u6062\u590D",children:"2. \u4ECE\u5FEB\u7167\u6062\u590D"}),"\n",(0,s.jsx)(n.h3,{id:"option-1\u6062\u590D\u5FEB\u7167\u5230\u5F53\u524D\u6570\u636E\u5E93",children:"Option 1\uFF1A\u6062\u590D\u5FEB\u7167\u5230\u5F53\u524D\u6570\u636E\u5E93"}),"\n",(0,s.jsxs)(n.p,{children:["\u4EE5\u4E0B SQL \u8BED\u53E5\u4ECE\u540D\u4E3A",(0,s.jsx)(n.code,{children:"example_repo"}),"\u7684 Repository \u4E2D\u6062\u590D\u6807\u7B7E\u4E3A ",(0,s.jsx)(n.code,{children:"restore_label1"})," \u548C\u65F6\u95F4\u6233\u4E3A ",(0,s.jsx)(n.code,{children:"2022-04-08-15-52-29"})," \u7684\u5FEB\u7167\u5230\u5F53\u524D\u6570\u636E\u5E93\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT `restore_label1`\nFROM `example_repo`\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-52-29"\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"option-2\u6062\u590D\u5FEB\u7167\u5230\u6307\u5B9A\u6570\u636E\u5E93",children:"Option 2\uFF1A\u6062\u590D\u5FEB\u7167\u5230\u6307\u5B9A\u6570\u636E\u5E93"}),"\n",(0,s.jsxs)(n.p,{children:["\u4EE5\u4E0B SQL \u8BED\u53E5\u4ECE\u540D\u4E3A",(0,s.jsx)(n.code,{children:"example_repo"}),"\u7684 Repository \u4E2D\u6062\u590D\u6807\u7B7E\u4E3A ",(0,s.jsx)(n.code,{children:"restore_label1"})," \u548C\u65F6\u95F4\u6233\u4E3A ",(0,s.jsx)(n.code,{children:"2022-04-08-15-52-29"})," \u7684\u5FEB\u7167\u5230\u540D\u4E3A ",(0,s.jsx)(n.code,{children:"destdb"})," \u7684\u6570\u636E\u5E93\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT destdb.`restore_label1`\nFROM `example_repo`\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-52-29"\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"option-3\u4ECE\u5FEB\u7167\u6062\u590D\u5355\u4E2A\u8868",children:"Option 3\uFF1A\u4ECE\u5FEB\u7167\u6062\u590D\u5355\u4E2A\u8868"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ECE",(0,s.jsx)(n.code,{children:"example_repo"}),"\u4E2D\u7684\u5FEB\u7167\u6062\u590D\u8868",(0,s.jsx)(n.code,{children:"backup_tbl"}),"\u5230\u5F53\u524D\u6570\u636E\u5E93\uFF0C\u5FEB\u7167\u7684\u6807\u7B7E\u4E3A ",(0,s.jsx)(n.code,{children:"restore_label1"}),"\uFF0C\u65F6\u95F4\u6233\u4E3A ",(0,s.jsx)(n.code,{children:"2022-04-08-15-52-29"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT `restore_label1`\nFROM `example_repo`\nON ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-52-29"\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"option-4\u4ECE\u5FEB\u7167\u6062\u590D\u5206\u533A\u548C\u8868",children:"Option 4\uFF1A\u4ECE\u5FEB\u7167\u6062\u590D\u5206\u533A\u548C\u8868"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ECE",(0,s.jsx)(n.code,{children:"example_repo"}),"\u4E2D\u7684\u5907\u4EFD\u5FEB\u7167",(0,s.jsx)(n.code,{children:"snapshot_2"}),"\u6062\u590D\u8868",(0,s.jsx)(n.code,{children:"backup_tbl"}),"\u7684\u5206\u533A p1 \u548C p2\uFF0C\u4EE5\u53CA\u8868",(0,s.jsx)(n.code,{children:"backup_tbl2"}),"\u5230\u5F53\u524D\u6570\u636E\u5E93",(0,s.jsx)(n.code,{children:"example_db1"}),"\uFF0C\u5E76\u5C06\u5176\u91CD\u547D\u540D\u4E3A",(0,s.jsx)(n.code,{children:"new_tbl"}),"\uFF0C\u5FEB\u7167\u6807\u7B7E\u4E3A\u65F6\u95F4\u7248\u672C\u4E3A",(0,s.jsx)(n.code,{children:'"2018-05-04-17-11-01"'}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT `restore_label1`\nFROM `example_repo`\nON\n(\n    `backup_tbl` PARTITION (`p1`, `p2`),\n    `backup_tbl2` AS `new_tbl`\n)\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-55-43"\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"3-\u67E5\u770B\u6062\u590D\u4F5C\u4E1A\u7684\u6267\u884C\u60C5\u51B5",children:"3. \u67E5\u770B\u6062\u590D\u4F5C\u4E1A\u7684\u6267\u884C\u60C5\u51B5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  ```sql\n"})}),"\n",(0,s.jsx)(n.p,{children:'mysql> SHOW RESTORE\\G;\n*************************** 1. row ***************************\nJobId: 17891851\nLabel: snapshot_label1\nTimestamp: 2022-04-08-15-52-29\nDbName: default_cluster:example_db1\nState: FINISHED\nAllowLoad: false\nReplicationNum: 3\nRestoreObjs: {\n"name": "snapshot_label1",\n"database": "example_db",\n"backup_time": 1649404349050,\n"content": "ALL",\n"olap_table_list": [\n{\n"name": "backup_tbl",\n"partition_names": [\n"p1",\n"p2"\n]\n}\n],\n"view_list": [],\n"odbc_table_list": [],\n"odbc_resource_list": []\n}\nCreateTime: 2022-04-08 15:59:01\nMetaPreparedTime: 2022-04-08 15:59:02\nSnapshotFinishedTime: 2022-04-08 15:59:05\nDownloadFinishedTime: 2022-04-08 15:59:12\nFinishedTime: 2022-04-08 15:59:18\nUnfinishedTasks:\nProgress:\nTaskErrMsg:\nStatus: [OK]\nTimeout: 86400\n1 row in set (0.01 sec)'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return t},a:function(){return r}});var a=l(667294);let s={},i=a.createContext(s);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);