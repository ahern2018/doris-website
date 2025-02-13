"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["776786"],{8030:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/backup-and-restore/BACKUP","title":"BACKUP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/data-modification/backup-and-restore/BACKUP.md","sourceDirName":"sql-manual/sql-statements/data-modification/backup-and-restore","slug":"/sql-manual/sql-statements/data-modification/backup-and-restore/BACKUP","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/BACKUP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BACKUP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW REPOSITORIES","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-REPOSITORIES"},"next":{"title":"CANCEL BACKUP","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/CANCEL-BACKUP"}}'),t=l("785893"),a=l("250065");let i={title:"BACKUP",language:"zh-CN"},d=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879\uFF1A",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(n.p,{children:["\u8BE5\u8BED\u53E5\u7528\u4E8E\u5907\u4EFD\u6307\u5B9A\u6570\u636E\u5E93\u4E0B\u7684\u6570\u636E\u3002\u8BE5\u547D\u4EE4\u4E3A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u63D0\u4EA4\u6210\u529F\u540E\uFF0C\u9700\u901A\u8FC7 ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-BACKUP",children:"SHOW BACKUP"})," \u547D\u4EE4\u67E5\u770B\u8FDB\u5EA6\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'BACKUP SNAPSHOT [<db_name>.]<snapshot_name>\nTO `<repository_name>`\n[ { ON | EXCLUDE } ]\n    ( <table_name> [ PARTITION ( <partition_name> [, ...] ) ]\n    [, ...] ) ]\n\n[ PROPERTIES ( "<key>" = "<value>" [ , ... ] )]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1.",(0,t.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u5907\u4EFD\u7684\u6570\u636E\u6240\u5C5E\u7684\u6570\u636E\u5E93\u540D"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2.",(0,t.jsx)(n.code,{children:"<snapshot_name>"})]})}),"\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5FEB\u7167\u540D\u3002\u5FEB\u7167\u540D\u4E0D\u53EF\u91CD\u590D\uFF0C\u5168\u5C40\u552F\u4E00"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["3.",(0,t.jsx)(n.code,{children:"<repository_name>"})]})}),"\n",(0,t.jsxs)(n.p,{children:["\u4ED3\u5E93\u540D\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY",children:"CREATE REPOSITORY"})," \u521B\u5EFA\u4ED3\u5E93"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1.",(0,t.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u5907\u4EFD\u7684\u8868\u540D\u3002\u5982\u4E0D\u6307\u5B9A\u5219\u5907\u4EFD\u6574\u4E2A\u6570\u636E\u5E93\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ON \u5B50\u53E5\u4E2D\u6807\u8BC6\u9700\u8981\u5907\u4EFD\u7684\u8868\u548C\u5206\u533A\u3002\u5982\u679C\u4E0D\u6307\u5B9A\u5206\u533A\uFF0C\u5219\u9ED8\u8BA4\u5907\u4EFD\u8BE5\u8868\u7684\u6240\u6709\u5206\u533A"}),"\n",(0,t.jsx)(n.li,{children:"EXCLUDE \u5B50\u53E5\u4E2D\u6807\u8BC6\u4E0D\u9700\u8981\u5907\u4EFD\u7684\u8868\u548C\u5206\u533A\u3002\u5907\u4EFD\u9664\u4E86\u6307\u5B9A\u7684\u8868\u6216\u5206\u533A\u4E4B\u5916\u8FD9\u4E2A\u6570\u636E\u5E93\u4E2D\u6240\u6709\u8868\u7684\u6240\u6709\u5206\u533A\u6570\u636E\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2.",(0,t.jsx)(n.code,{children:"<partition_name>"})]})}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u5907\u4EFD\u7684\u5206\u533A\u540D\u3002\u5982\u4E0D\u6307\u5B9A\u5219\u5907\u4EFD\u5BF9\u5E94\u8868\u7684\u6240\u6709\u5206\u533A\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["3.",(0,t.jsx)(n.code,{children:'[ PROPERTIES ( "<key>" = "<value>" [ , ... ] ) ]'})]})}),"\n",(0,t.jsxs)(n.p,{children:["\u6570\u636E\u5FEB\u7167\u5C5E\u6027\uFF0C\u683C\u5F0F\u4E3A ",(0,t.jsx)(n.code,{children:"<key>"})," = ",(0,t.jsx)(n.code,{children:"<value>"}),"\uFF0C\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u5C5E\u6027\uFF1A"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"type" = "full"\uFF1A\u8868\u793A\u8FD9\u662F\u4E00\u6B21\u5168\u91CF\u66F4\u65B0\uFF08\u9ED8\u8BA4\uFF09'}),"\n",(0,t.jsx)(n.li,{children:'"timeout" = "3600"\uFF1A\u4EFB\u52A1\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A\u4E00\u5929\u3002\u5355\u4F4D\u79D2\u3002'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64SQL\u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"LOAD_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 LOAD_PRIV \u6743\u9650\u624D\u80FD\u8FDB\u884C\u6B64\u64CD\u4F5C"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4EC5\u652F\u6301\u5907\u4EFD OLAP \u7C7B\u578B\u7684\u8868\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u540C\u4E00\u6570\u636E\u5E93\u4E0B\u53EA\u80FD\u6709\u4E00\u4E2A\u6B63\u5728\u6267\u884C\u7684 BACKUP \u6216 RESTORE \u4EFB\u52A1\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u5907\u4EFD\u64CD\u4F5C\u4F1A\u5907\u4EFD\u6307\u5B9A\u8868\u6216\u5206\u533A\u7684\u57FA\u7840\u8868\u53CA ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/dev/query-acceleration/materialized-view/sync-materialized-view",children:"\u7269\u5316\u89C6\u56FE"}),"\uFF0C\u5E76\u4E14\u4EC5\u5907\u4EFD\u4E00\u526F\u672C\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5907\u4EFD\u64CD\u4F5C\u7684\u6548\u7387\u53D6\u51B3\u4E8E\u6570\u636E\u91CF\u3001Compute Node \u8282\u70B9\u6570\u91CF\u4EE5\u53CA\u6587\u4EF6\u6570\u91CF\u3002\u5907\u4EFD\u6570\u636E\u5206\u7247\u6240\u5728\u7684\u6BCF\u4E2A Compute Node \u90FD\u4F1A\u53C2\u4E0E\u5907\u4EFD\u64CD\u4F5C\u7684\u4E0A\u4F20\u9636\u6BB5\u3002\u8282\u70B9\u6570\u91CF\u8D8A\u591A\uFF0C\u4E0A\u4F20\u7684\u6548\u7387\u8D8A\u9AD8\uFF0C\u6587\u4EF6\u6570\u636E\u91CF\u53EA\u6D89\u53CA\u5230\u7684\u5206\u7247\u6570\uFF0C\u4EE5\u53CA\u6BCF\u4E2A\u5206\u7247\u4E2D\u6587\u4EF6\u7684\u6570\u91CF\u3002\u5982\u679C\u5206\u7247\u975E\u5E38\u591A\uFF0C\u6216\u8005\u5206\u7247\u5185\u7684\u5C0F\u6587\u4EF6\u8F83\u591A\uFF0C\u90FD\u53EF\u80FD\u589E\u52A0\u5907\u4EFD\u64CD\u4F5C\u7684\u65F6\u95F4\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5168\u91CF\u5907\u4EFD example_db \u4E0B\u7684\u8868 example_tbl \u5230\u4ED3\u5E93 example_repo \u4E2D\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nON (example_tbl)\nPROPERTIES ("type" = "full");\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u5168\u91CF\u5907\u4EFD example_db \u4E0B\uFF0C\u8868 example_tbl \u7684 p1, p2 \u5206\u533A\uFF0C\u4EE5\u53CA\u8868 example_tbl2 \u5230\u4ED3\u5E93 example_repo \u4E2D\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON \n(\n    example_tbl PARTITION (p1,p2),\n    example_tbl2\n);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u5168\u91CF\u5907\u4EFD example_db \u4E0B\u9664\u4E86\u8868 example_tbl \u7684\u5176\u4ED6\u6240\u6709\u8868\u5230\u4ED3\u5E93 example_repo \u4E2D\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo\nEXCLUDE (example_tbl);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"\u5168\u91CF\u5907\u4EFD example_db \u4E0B\u7684\u8868\u5230\u4ED3\u5E93 example_repo \u4E2D\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return i}});var s=l(667294);let t={},a=s.createContext(t);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);