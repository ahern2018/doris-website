"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["117843"],{634967:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>x,assets:()=>c,toc:()=>a,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS","title":"SHOW REPLICA STATUS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW REPLICA STATUS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ADMIN SET REPLICA VERSION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-SET-REPLICA-VERSION"},"next":{"title":"SHOW REPLICA DISTRIBUTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-DISTRIBUTION"}}'),t=s("785893"),d=s("250065");let i={title:"SHOW REPLICA STATUS",language:"zh-CN"},r=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u4E00\u4E2A\u8868\u6216\u5206\u533A\u7684\u526F\u672C\u72B6\u6001\u4FE1\u606F\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SHOW REPLICA STATUS FROM [ <database_name>.]<table_name> [<partition_list>] \n[where_clause]\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"partition_list\n  : PARTITION (<partition_name>[ , ... ])\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"where_clause\n: WHERE <output_column_name> = <value>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.strong,{children:["1. ",(0,t.jsx)(e.code,{children:"<table_name>"})]})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u6307\u5B9A\u8868\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\uFF0C\u5728\u5176\u6240\u5728\u7684\u6570\u636E\u5E93\uFF08Database\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982My Object\uFF09\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.strong,{children:["1. ",(0,t.jsx)(e.code,{children:"<db_name>"})]})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\uFF0C\u5728\u5176\u6240\u5728\u7684\u96C6\u7FA4\uFF08Cluster\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982My Object\uFF09\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.strong,{children:["2. ",(0,t.jsx)(e.code,{children:"<partition_list>"})]})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u6307\u5B9A\u5206\u533A\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u5272\uFF0C\u5728\u5176\u6240\u5728\u7684\u8868\uFF08Table\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982",(0,t.jsx)(e.code,{children:"My Object"}),"\uFF09\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.strong,{children:["3. ",(0,t.jsx)(e.code,{children:"WHERE <output_column_name> = <value>"})]})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u6307\u5B9A\u8F93\u51FA\u8FC7\u6EE4\u6761\u4EF6\uFF0Coutput_column_name \u5FC5\u987B\u5728\u8F93\u51FA\u7684\u5B57\u6BB5\u5217\u8868\u4E2D\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5F53 ",(0,t.jsx)(e.code,{children:"output_column_name"})," \u4E3A ",(0,t.jsx)(e.code,{children:"STATUS"})," \u65F6"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"value"})," \u53EF\u9009\u503C\u5982\u4E0B"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"OK:             replica \u5904\u4E8E\u5065\u5EB7\u72B6\u6001"}),"\n",(0,t.jsx)(e.li,{children:"DEAD:           replica \u6240\u5728 Backend \u4E0D\u53EF\u7528"}),"\n",(0,t.jsx)(e.li,{children:"VERSION_ERROR:  replica \u6570\u636E\u7248\u672C\u6709\u7F3A\u5931"}),"\n",(0,t.jsx)(e.li,{children:"SCHEMA_ERROR:   replica \u7684 schema hash \u4E0D\u6B63\u786E"}),"\n",(0,t.jsx)(e.li,{children:"MISSING:        replica \u4E0D\u5B58\u5728"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5217\u540D"}),(0,t.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"TabletId"}),(0,t.jsx)(e.td,{children:"Int"}),(0,t.jsx)(e.td,{children:"tablet \u7684\u552F\u4E00\u6807\u8BC6\u7B26\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ReplicaId"}),(0,t.jsx)(e.td,{children:"Int"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u7684\u552F\u4E00\u6807\u8BC6\u7B26\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"BackendId"}),(0,t.jsx)(e.td,{children:"Int"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u6240\u5728\u7684 BE\uFF08Backend\uFF09\u8282\u70B9\u7684 ID\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Version"}),(0,t.jsx)(e.td,{children:"Int"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u7684\u5F53\u524D\u7248\u672C\u53F7\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"LastFailedVersion"}),(0,t.jsx)(e.td,{children:"Int"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u6700\u540E\u5931\u8D25\u7684\u7248\u672C\u53F7\uFF0C-1 \u8868\u793A\u6CA1\u6709\u5931\u8D25\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"LastSuccessVersion"}),(0,t.jsx)(e.td,{children:"Int"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u6700\u540E\u6210\u529F\u7684\u7248\u672C\u53F7\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CommittedVersion"}),(0,t.jsx)(e.td,{children:"Int"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u7684\u63D0\u4EA4\u7248\u672C\u53F7\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"SchemaHash"}),(0,t.jsx)(e.td,{children:"Int"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u7684 schema \u54C8\u5E0C\u503C\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VersionNum"}),(0,t.jsx)(e.td,{children:"Int"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u7684\u7248\u672C\u6570\u91CF\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"IsBad"}),(0,t.jsx)(e.td,{children:"Boolean"}),(0,t.jsx)(e.td,{children:"\u6307\u793A\u526F\u672C\u662F\u5426\u5904\u4E8E\u574F\u72B6\u6001\uFF08true/false\uFF09\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"IsUserDrop"}),(0,t.jsx)(e.td,{children:"Boolean"}),(0,t.jsx)(e.td,{children:"\u6307\u793A\u526F\u672C\u662F\u5426\u88AB\u6807\u8BB0\u4E3A\u7528\u6237\u5220\u9664\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"State"}),(0,t.jsx)(e.td,{children:"String"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u7684\u5F53\u524D\u72B6\u6001\uFF08\u4F8B\u5982\uFF1ANORMAL\uFF09\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Status"}),(0,t.jsx)(e.td,{children:"String"}),(0,t.jsx)(e.td,{children:"\u526F\u672C\u7684\u5065\u5EB7\u72B6\u6001\uFF08\u4F8B\u5982\uFF1AOK\uFF09\u3002"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u62E5\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"Admin_priv"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"Database"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u6267\u884C\u6570\u636E\u5E93\u7BA1\u7406\u64CD\u4F5C\u6240\u9700\u7684\u6743\u9650\uFF0C\u5305\u62EC\u7BA1\u7406\u8868\u3001\u5206\u533A\u4EE5\u53CA\u7CFB\u7EDF\u7EA7\u547D\u4EE4\u7B49\u64CD\u4F5C\u3002"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u67E5\u770B\u8868\u5168\u90E8\u7684\u526F\u672C\u72B6\u6001"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SHOW REPLICA STATUS FROM db1.tbl1;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+----------+-----------+-----------+---------+-------------------+--------------------+------------------+------------+------------+-------+------------+--------+--------+\n| TabletId | ReplicaId | BackendId | Version | LastFailedVersion | LastSuccessVersion | CommittedVersion | SchemaHash | VersionNum | IsBad | IsUserDrop | State  | Status |\n+----------+-----------+-----------+---------+-------------------+--------------------+------------------+------------+------------+-------+------------+--------+--------+\n| 10145    | 10146     | 10009     | 14      | -1                | 14                 | 14               | 182881783  | 1          | false | false      | NORMAL | OK     |\n| 10147    | 10148     | 10009     | 14      | -1                | 14                 | 14               | 182881783  | 1          | false | false      | NORMAL | OK     |\n| 10149    | 10150     | 10009     | 14      | -1                | 14                 | 14               | 182881783  | 1          | false | false      | NORMAL | OK     |\n| 10151    | 10152     | 10009     | 14      | -1                | 14                 | 14               | 182881783  | 1          | false | false      | NORMAL | OK     |\n+----------+-----------+-----------+---------+-------------------+--------------------+------------------+------------+------------+-------+------------+--------+--------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u67E5\u770B\u8868\u67D0\u4E2A\u5206\u533A\u72B6\u6001\u4E3A VERSION_ERROR \u7684\u526F\u672C"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)\nWHERE STATUS = "VERSION_ERROR";\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u67E5\u770B\u8868\u6240\u6709\u72B6\u6001\u4E0D\u5065\u5EB7\u7684\u526F\u672C"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";\n'})}),"\n"]}),"\n"]})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var l=s(667294);let t={},d=l.createContext(t);function i(n){let e=l.useContext(d);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);