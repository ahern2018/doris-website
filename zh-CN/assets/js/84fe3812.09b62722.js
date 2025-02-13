"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["193664"],{114504:function(e,t,a){a.r(t),a.d(t,{metadata:()=>r,contentTitle:()=>i,default:()=>c,assets:()=>s,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"data-operate/import/file-format/parquet","title":"Parquet","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/file-format/parquet.md","sourceDirName":"data-operate/import/file-format","slug":"/data-operate/import/file-format/parquet","permalink":"/zh-CN/docs/dev/data-operate/import/file-format/parquet","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Parquet","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON","permalink":"/zh-CN/docs/dev/data-operate/import/file-format/json"},"next":{"title":"ORC","permalink":"/zh-CN/docs/dev/data-operate/import/file-format/orc"}}'),n=a("785893"),l=a("250065");let o={title:"Parquet",language:"zh-CN"},i=void 0,s={},d=[{value:"\u652F\u6301\u7684\u5BFC\u5165\u65B9\u5F0F",id:"\u652F\u6301\u7684\u5BFC\u5165\u65B9\u5F0F",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"Stream Load \u5BFC\u5165",id:"stream-load-\u5BFC\u5165",level:3},{value:"Broker Load \u5BFC\u5165",id:"broker-load-\u5BFC\u5165",level:3},{value:"TVF \u5BFC\u5165",id:"tvf-\u5BFC\u5165",level:3}];function u(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u5728 Doris \u4E2D\u5BFC\u5165 Parquet \u683C\u5F0F\u7684\u6570\u636E\u6587\u4EF6\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u652F\u6301\u7684\u5BFC\u5165\u65B9\u5F0F",children:"\u652F\u6301\u7684\u5BFC\u5165\u65B9\u5F0F"}),"\n",(0,n.jsx)(t.p,{children:"\u4EE5\u4E0B\u5BFC\u5165\u65B9\u5F0F\u652F\u6301 Parquet \u683C\u5F0F\u7684\u6570\u636E\u5BFC\u5165\uFF1A"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual",children:"Stream Load"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/zh-CN/docs/dev/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../../sql-manual/sql-functions/table-valued-functions/s3",children:"INSERT INTO FROM S3 TVF"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../../sql-manual/sql-functions/table-valued-functions/hdfs",children:"INSERT INTO FROM HDFS TVF"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,n.jsx)(t.p,{children:"\u672C\u8282\u5C55\u793A\u4E86\u4E0D\u540C\u5BFC\u5165\u65B9\u5F0F\u4E0B\u7684 Parquet \u683C\u5F0F\u4F7F\u7528\u65B9\u6CD5\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"stream-load-\u5BFC\u5165",children:"Stream Load \u5BFC\u5165"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'curl --location-trusted -u <user>:<passwd> \\\n    -H "format: parquet" \\\n    -T example.parquet \\\n    http://<fe_host>:<fe_http_port>/api/example_db/example_table/_stream_load\n'})}),"\n",(0,n.jsx)(t.h3,{id:"broker-load-\u5BFC\u5165",children:"Broker Load \u5BFC\u5165"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'LOAD LABEL example_db.example_label\n(\n    DATA INFILE("s3://bucket/example.parquet")\n    INTO TABLE example_table\n    FORMAT AS "parquet"\n)\nWITH S3 \n(\n    ...\n);\n'})}),"\n",(0,n.jsx)(t.h3,{id:"tvf-\u5BFC\u5165",children:"TVF \u5BFC\u5165"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'INSERT INTO example_table\nSELECT *\nFROM S3\n(\n    "uri" = "s3://bucket/example.parquet",\n    "format" = "parquet",\n    ...\n);\n'})})]})}function c(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return i},a:function(){return o}});var r=a(667294);let n={},l=r.createContext(n);function o(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);