"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["573713"],{921681:function(e,a,n){n.r(a),n.d(a,{metadata:()=>r,contentTitle:()=>i,default:()=>c,assets:()=>m,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/metadata-memory-analysis","title":"\u5143\u6570\u636E\u5185\u5B58\u5206\u6790","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/trouble-shooting/memory-management/memory-analysis/metadata-memory-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/metadata-memory-analysis","permalink":"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/metadata-memory-analysis","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u5143\u6570\u636E\u5185\u5B58\u5206\u6790","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Cache \u5185\u5B58\u5206\u6790","permalink":"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/doris-cache-memory-analysis"},"next":{"title":"\u67E5\u8BE2\u5185\u5B58\u5206\u6790","permalink":"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis"}}'),o=n("785893"),t=n("250065");let s={title:"\u5143\u6570\u636E\u5185\u5B58\u5206\u6790",language:"zh-CN"},i=void 0,m={},l=[{value:"Metadata \u67E5\u770B\u65B9\u6CD5",id:"metadata-\u67E5\u770B\u65B9\u6CD5",level:2},{value:"Doris BE Bvar",id:"doris-be-bvar",level:3},{value:"Doris BE Metrics",id:"doris-be-metrics",level:3},{value:"\u4F7F\u7528 Heap Profile \u5206\u6790\u5143\u6570\u636E\u5185\u5B58",id:"\u4F7F\u7528-heap-profile-\u5206\u6790\u5143\u6570\u636E\u5185\u5B58",level:3}];function d(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:["Doris BE \u5728\u5185\u5B58\u4E2D\u7684\u5143\u6570\u636E\uFF08Metadata\uFF09\u5305\u62EC ",(0,o.jsx)(a.code,{children:"Tablet"}),"\u3001",(0,o.jsx)(a.code,{children:"Rowset"}),"\u3001",(0,o.jsx)(a.code,{children:"Segment"}),"\u3001",(0,o.jsx)(a.code,{children:"TabletSchema"}),"\u3001",(0,o.jsx)(a.code,{children:"ColumnReader"}),"\u3001",(0,o.jsx)(a.code,{children:"PrimaryKeyIndex"}),"\u3001",(0,o.jsx)(a.code,{children:"BloomFilterIndex"})," \u7B49\u6570\u636E\u7ED3\u6784\uFF0C\u6709\u5173 Doris BE \u5143\u6570\u636E\u7684\u66F4\u591A\u4ECB\u7ECD\u53C2\u8003\u6587\u6863 ",(0,o.jsx)(a.a,{href:"https://blog.csdn.net/ucanuup_/article/details/115004829",children:"Doris \u5B58\u50A8\u7ED3\u6784\u8BBE\u8BA1\u89E3\u6790"}),"\u3002"]}),"\n",(0,o.jsx)(a.h2,{id:"metadata-\u67E5\u770B\u65B9\u6CD5",children:"Metadata \u67E5\u770B\u65B9\u6CD5"}),"\n",(0,o.jsx)(a.p,{children:"\u76EE\u524D Memory Tracker \u6CA1\u6709\u51C6\u786E\u7EDF\u8BA1 Doris BE \u7684\u5143\u6570\u636E\u5185\u5B58\u5927\u5C0F\uFF0C\u901A\u8FC7\u67E5\u770B Doris BE Bvar \u548C Doris BE Metrics \u4E2D\u7684\u4E00\u4E9B Counter \u53BB\u4F30\u7B97\u5143\u6570\u636E\u5185\u5B58\u5927\u5C0F\uFF0C\u6216\u8005\u4F7F\u7528 Heap Profile \u8FDB\u4E00\u6B65\u5206\u6790\u3002"}),"\n",(0,o.jsx)(a.h3,{id:"doris-be-bvar",children:"Doris BE Bvar"}),"\n",(0,o.jsxs)(a.p,{children:["Web \u9875\u9762 ",(0,o.jsx)(a.code,{children:"http://{be_host}:{brpc_port}/vars"})," \u53EF\u4EE5\u770B\u5230 Bvar \u7EDF\u8BA1\u7684\u4E00\u4E9B\u5143\u6570\u636E\u76F8\u5173\u6307\u6807\u3002"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{children:"- `doris_total_tablet_num`\uFF1A\u6240\u6709 Tablet \u7684\u6570\u91CF\u3002\n- `doris_total_rowset_num`\uFF1A\u6240\u6709 Rowset \u7684\u6570\u91CF\u3002\n- `doris_total_segment_num`\uFF1A\u6240\u6709\u6253\u5F00\u7684 Segment \u6570\u91CF\u3002\n- `doris_total_tablet_schema_num`\uFF1A\u6240\u6709 Tablet Schema \u7684\u6570\u91CF\u3002\n- `tablet_schema_cache_count`\uFF1ATablet Schema \u88AB Cache \u7684\u6570\u91CF\u3002\n- `tablet_meta_schema_columns_count`\uFF1A\u6240\u6709 Tablet Schema \u4E2D Column \u7684\u6570\u91CF\u3002\n- `tablet_schema_cache_columns_count`\uFF1ATablet Schema \u4E2D Column \u88AB Cache \u7684\u6570\u91CF\u3002\n- `doris_column_reader_num`\uFF1A\u6253\u5F00\u7684 Column Reader \u6570\u91CF\u3002\n- `doris_column_reader_memory_bytes`\uFF1A\u6253\u5F00\u7684 Column Reader \u5360\u7528\u5185\u5B58\u7684\u5B57\u8282\u6570\u3002\n- `doris_ordinal_index_memory_bytes`\uFF1A\u6253\u5F00\u7684 Ordinal Index \u5360\u7528\u5185\u5B58\u7684\u5B57\u8282\u6570\u3002\n- `doris_zone_map_memory_bytes`\uFF1A\u6253\u5F00\u7684 ZoneMap Index \u5360\u7528\u5185\u5B58\u7684\u5B57\u8282\u6570\u3002\n- `doris_short_key_index_memory_bytes`\uFF1A\u6253\u5F00\u7684 Short Key Index \u5360\u7528\u5185\u5B58\u7684\u5B57\u8282\u6570\u3002\n- `doris_pk/index_reader_bytes`\uFF1A\u7D2F\u8BA1\u7684 Primary Key Index Reader \u5360\u7528\u5185\u5B58\u7684\u5B57\u8282\u6570\uFF0C\u8FD9\u4E0D\u662F\u5B9E\u65F6\u7684\u7EDF\u8BA1\u503C\uFF0C\u671F\u5F85\u88AB\u4FEE\u590D\u3002\n- `doris_pk/index_reader_pages`\uFF1A\u540C\u4E0A\uFF0C\u7EDF\u8BA1\u7684\u7D2F\u8BA1\u503C\u3002\n- `doris_pk/index_reader_cached_pages`\uFF1A\u540C\u4E0A\uFF0C\u7EDF\u8BA1\u7684\u7D2F\u8BA1\u503C\u3002\n- `doris_pk/index_reader_pagindex_reader_pk_pageses`\uFF1A\u540C\u4E0A\uFF0C\u7EDF\u8BA1\u7684\u7D2F\u8BA1\u503C\u3002\n- `doris_primary_key_index_memory_bytes`\uFF1A\u540C\u4E0A\uFF0C\u7EDF\u8BA1\u7684\u7D2F\u8BA1\u503C\u3002\n"})}),"\n",(0,o.jsx)(a.h3,{id:"doris-be-metrics",children:"Doris BE Metrics"}),"\n",(0,o.jsxs)(a.p,{children:["Web \u9875\u9762 ",(0,o.jsx)(a.code,{children:"http://{be_host}:{be_web_server_port}/metrics"})," \u53EF\u4EE5\u770B\u5230 BE \u8FDB\u7A0B\u5185\u5B58\u76D1\uFF08Metrics\uFF09\u4E2D\u7684\u4E00\u4E9B\u5143\u6570\u636E\u6307\u6807\u3002\u5176\u4E2D Metadata Cache \u76F8\u5173\u6307\u6807\u53C2\u8003 ",(0,o.jsx)(a.a,{href:"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/doris-cache-memory-analysis",children:"Cache \u5185\u5B58\u5206\u6790"}),"\u3002"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{children:"- `doris_be_all_rowsets_num`\uFF1A\u6240\u6709 Rowset \u7684\u6570\u91CF\u3002\n- `doris_be_all_segments_num`\uFF1A\u6240\u6709 Segment \u6570\u91CF\u3002\n"})}),"\n",(0,o.jsx)(a.h3,{id:"\u4F7F\u7528-heap-profile-\u5206\u6790\u5143\u6570\u636E\u5185\u5B58",children:"\u4F7F\u7528 Heap Profile \u5206\u6790\u5143\u6570\u636E\u5185\u5B58"}),"\n",(0,o.jsxs)(a.p,{children:["\u5982\u679C\u4E0A\u9762\u4F7F\u7528 Doris BE Bvar \u548C Metrics \u65E0\u6CD5\u51C6\u786E\u5B9A\u4F4D\u5185\u5B58\u4F4D\u7F6E\uFF0C\u82E5\u96C6\u7FA4\u65B9\u4FBF\u91CD\u542F\uFF0C\u5E76\u4E14\u73B0\u8C61\u53EF\u4EE5\u88AB\u590D\u73B0\uFF0C\u53C2\u8003 ",(0,o.jsx)(a.a,{href:"/zh-CN/docs/admin-manual/trouble-shooting/memory-management/memory-analysis/heap-profile-memory-analysis",children:"Heap Profile \u5185\u5B58\u5206\u6790"})," \u5206\u6790 Metadata \u5185\u5B58\u3002"]}),"\n",(0,o.jsxs)(a.p,{children:["\u73B0\u8C61\u590D\u73B0\u540E\uFF0C\u5982\u679C\u4F60\u5728 Heap Profile \u5185\u5B58\u5360\u6BD4\u5927\u7684\u8C03\u7528\u6808\u4E2D\u770B\u5230 ",(0,o.jsx)(a.code,{children:"Tablet"}),"\uFF0C ",(0,o.jsx)(a.code,{children:"Segment"}),"\uFF0C",(0,o.jsx)(a.code,{children:"TabletSchema"}),"\u3001",(0,o.jsx)(a.code,{children:"ColumnReader"})," \u5B57\u6BB5\uFF0C\u5219\u57FA\u672C\u53EF\u4EE5\u786E\u8BA4\u662F\u5143\u6570\u636E\u5360\u7528\u4E86\u5927\u91CF\u5185\u5B58\u3002"]})]})}function c(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return s}});var r=n(667294);let o={},t=r.createContext(o);function s(e){let a=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);