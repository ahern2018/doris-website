"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["816261"],{382960:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/iceberg-meta","title":"ICEBERG_META","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-valued-functions/iceberg-meta.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/iceberg-meta","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/iceberg-meta","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ICEBERG_META","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LOCAL","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/local"},"next":{"title":"BACKENDS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/backends"}}'),l=t("785893"),i=t("250065");let a={title:"ICEBERG_META",language:"zh-CN"},c=void 0,r={},d=[{value:"iceberg_meta",id:"iceberg_meta",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Prac",id:"best-prac",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"iceberg_meta",children:"iceberg_meta"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"iceberg_meta"}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"iceberg_meta \u8868\u51FD\u6570\uFF08table-valued-function,tvf\uFF09\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8BFB\u53D6 iceberg \u8868\u7684\u5404\u7C7B\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5982\u64CD\u4F5C\u5386\u53F2\u3001\u751F\u6210\u7684\u5FEB\u7167\u3001\u6587\u4EF6\u5143\u6570\u636E\u7B49\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'iceberg_meta(\n  "table" = "ctl.db.tbl", \n  "query_type" = "snapshots"\n  ...\n  );\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u53C2\u6570\u8BF4\u660E"})}),"\n",(0,l.jsxs)(n.p,{children:["iceberg_meta \u8868\u51FD\u6570 tvf \u4E2D\u7684\u6BCF\u4E00\u4E2A\u53C2\u6570\u90FD\u662F\u4E00\u4E2A ",(0,l.jsx)(n.code,{children:'"key"="value"'})," \u5BF9\u3002\n\u76F8\u5173\u53C2\u6570\uFF1A"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"table"}),"\uFF1A (\u5FC5\u586B) \u5B8C\u6574\u7684\u8868\u540D\uFF0C\u9700\u8981\u6309\u7167\u76EE\u5F55\u540D\u3002\u5E93\u540D\u3002\u8868\u540D\u7684\u683C\u5F0F\uFF0C\u586B\u5199\u9700\u8981\u67E5\u770B\u7684 iceberg \u8868\u540D\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"query_type"}),"\uFF1A (\u5FC5\u586B) \u60F3\u8981\u67E5\u770B\u7684\u5143\u6570\u636E\u7C7B\u578B\uFF0C\u76EE\u524D\u4EC5\u652F\u6301 snapshots\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(n.p,{children:"\u8BFB\u53D6\u5E76\u8BBF\u95EE iceberg \u8868\u683C\u5F0F\u7684 snapshots \u5143\u6570\u636E\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u53EF\u4EE5\u914D\u5408",(0,l.jsx)(n.code,{children:"desc function"}),"\u4F7F\u7528"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'desc function iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n'})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"iceberg_meta, table-valued-function, tvf\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-prac",children:"Best Prac"}),"\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B iceberg \u8868\u7684 snapshots"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots");\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-20 11:14:29   |  64123452344   |       -1      |  append   | hdfs:/path/to/m1  | {"flink.job-id":"xxm1", ...} |\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n|  2022-09-21 21:44:11   |  51232845315   |  98865735822  | overwrite | hdfs:/path/to/m3  | {"flink.job-id":"xxm3", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6839\u636E snapshot_id \u5B57\u6BB5\u7B5B\u9009"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots") \nwhere snapshot_id = 98865735822;\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);