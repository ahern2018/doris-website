"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["689039"],{569737:function(e,a,n){n.r(a),n.d(a,{metadata:()=>r,contentTitle:()=>i,default:()=>d,assets:()=>m,toc:()=>s,frontMatter:()=>t});var r=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/global-memory-analysis","title":"\u5168\u5C40\u5185\u5B58\u5206\u6790","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/global-memory-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/global-memory-analysis","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/global-memory-analysis","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5168\u5C40\u5185\u5B58\u5206\u6790","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Jemalloc \u5185\u5B58\u5206\u6790","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/jemalloc-memory-analysis"},"next":{"title":"Cache \u5185\u5B58\u5206\u6790","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/doris-cache-memory-analysis"}}'),o=n("785893"),l=n("250065");let t={title:"\u5168\u5C40\u5185\u5B58\u5206\u6790",language:"zh-CN"},i=void 0,m={},s=[{value:"Global Memory \u67E5\u770B\u65B9\u6CD5",id:"global-memory-\u67E5\u770B\u65B9\u6CD5",level:2},{value:"Global Memory \u5360\u7528\u591A",id:"global-memory-\u5360\u7528\u591A",level:2},{value:"Cache \u5206\u6790\u65B9\u6CD5",id:"cache-\u5206\u6790\u65B9\u6CD5",level:3},{value:"Metadata \u5206\u6790\u65B9\u6CD5",id:"metadata-\u5206\u6790\u65B9\u6CD5",level:3},{value:"Orphan \u5206\u6790\u65B9\u6CD5",id:"orphan-\u5206\u6790\u65B9\u6CD5",level:3}];function c(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"GLobal Memory \u662F Doris \u5168\u5C40\u5171\u4EAB\u7684\u5185\u5B58\uFF0C\u4E3B\u8981\u5305\u62EC Cache \u548C Metadata\u3002"}),"\n",(0,o.jsx)(a.h2,{id:"global-memory-\u67E5\u770B\u65B9\u6CD5",children:"Global Memory \u67E5\u770B\u65B9\u6CD5"}),"\n",(0,o.jsxs)(a.p,{children:["Web \u9875\u9762 ",(0,o.jsx)(a.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker?type=global"})," \u5C55\u793A ",(0,o.jsx)(a.code,{children:"type=global"})," \u7684\u6240\u6709 Memory Tracker\u3002"]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:"https://github.com/apache/doris/assets/13197424/e0b4a327-5bfb-4dfd-9e1e-bf58a482a456",alt:"image"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{children:"- Orphan: \u6536\u96C6\u4E0D\u77E5\u6240\u5C5E\u7684\u5185\u5B58\uFF0C\u7406\u60F3\u60C5\u51B5\u4E0B\u9884\u671F\u7B49\u4E8E0\u3002\n- DataPageCache\\[size\\](AllocByAllocator): \u6570\u636E Page \u7F13\u5B58\u7684\u5927\u5C0F\u3002\n- IndexPageCache\\[size\\](AllocByAllocator): \u6570\u636E Page \u7684\u7D22\u5F15\u7F13\u5B58\u7684\u5927\u5C0F\u3002\n- PKIndexPageCache\\[size\\](AllocByAllocator): \u6570\u636E Page \u7684\u4E3B\u952E\u7D22\u5F15\u3002\n- DetailsTrackerSet: \u5305\u542B\u4E00\u4E9B\u5F53\u524D\u6CA1\u6709\u88AB\u51C6\u786E\u8DDF\u8E2A\u7684\u5185\u5B58\uFF0C\u8FD9\u4E9B\u5185\u5B58\u4E0D\u4F1A\u88AB\u7B97\u5728 Global \u5185\u5B58\u4E2D\uFF0C\u5305\u62EC\u90E8\u5206 Cache \u548C \u5143\u6570\u636E\u5185\u5B58\u7B49\uFF0C\u9ED8\u8BA4\u53EA\u5C55\u793A Peak Consumption \u4E0D\u7B49\u4E8E 0 \u7684 Memory Tracker\uFF0C\u4E3B\u8981\u5305\u62EC\u4E0B\u9762\u8FD9\u4E9B\uFF1A\n    - SegmentCache[size]: \u7F13\u5B58\u5DF2\u6253\u5F00\u7684 Segment \u7684\u5185\u5B58\u5927\u5C0F\uFF0C\u5982\u7D22\u5F15\u4FE1\u606F\u3002\n    - SchemaCache[number]: \u7F13\u5B58 Rowset Schema \u7684\u6761\u76EE\u6570\u3002\n    - TabletSchemaCache[number]: \u7F13\u5B58 Tablet Schema \u7684\u6761\u76EE\u6570\u3002\n    - TabletMeta(experimental): \u6240\u6709 Tablet Schema \u7684\u5185\u5B58\u5927\u5C0F\u3002\n    - CreateTabletRRIdxCache[number]: \u7F13\u5B58 create tabelt \u7D22\u5F15\u7684\u6761\u76EE\u6570\u3002\n    - PageNoCache: \u5982\u679C\u5173\u95ED\u4E86 page cache, \u8FD9\u4E2A Memory Trakcer \u5C06\u8DDF\u8E2A\u6240\u6709 Query \u4F7F\u7528\u7684\u6240\u6709 page \u5185\u5B58\u603B\u548C\u3002\n    - IOBufBlockMemory: BRPC \u4F7F\u7528\u7684 IOBuf \u5185\u5B58\u603B\u548C\u3002\n    - PointQueryLookupConnectionCache[number]: \u7F13\u5B58\u7684 Point Query Lookup Connection \u6761\u76EE\u6570\u3002\n    - AllMemTableMemory: \u6240\u6709\u5BFC\u5165\u5728\u5185\u5B58\u4E2D\u7F13\u5B58\u7B49\u5F85\u4E0B\u5237\u7684 Memtable \u5185\u5B58\u603B\u548C\u3002\n    - MowTabletVersionCache[number]: \u7F13\u5B58\u7684 Mow Tablet Version \u6761\u76EE\u6570\u3002\n    - MowDeleteBitmapAggCache[size]: \u7F13\u5B58\u7684 Mow DeleteBitmap \u5185\u5B58\u5927\u5C0F\u3002\n- SegCompaction: \u6240\u6709 SegCompaction \u4EFB\u52A1\u4ECE `Doris Allocator` \u5206\u914D\u7684\u5185\u5B58\u603B\u548C\u3002\n- PointQueryExecutor: \u6240\u6709 Point Query \u5171\u4EAB\u7684\u4E00\u4E9B\u5185\u5B58\u3002\n- BlockCompression: \u6240\u6709 Query \u5171\u4EAB\u7684\u4E00\u4E9B\u89E3\u538B\u7F29\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u7684\u5185\u5B58\u3002\n- RowIdStorageReader: \u6240\u6709 Multiget Data \u8BF7\u6C42\u5728 RowIdStorageReader \u4E2D\u4F7F\u7528\u7684\u5185\u5B58\u3002\n- SubcolumnsTree: Point Query \u5728 SubcolumnsTree \u4E2D\u4F7F\u7528\u7684\u4E00\u4E9B\u5185\u5B58\u3002\n- S3FileBuffer: \u8BFB\u53D6 S3 \u65F6 File Buffer \u5206\u914D\u7684\u5185\u5B58\u3002\n"})}),"\n",(0,o.jsx)(a.p,{children:"\u5176\u4E2D\u90E8\u5206 Memory Tracker \u6807\u8BB0\u6709\u4E00\u4E9B\u540E\u7F00\uFF0C\u542B\u4E49\u4E3A\uFF1A"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"[size]"})," \u610F\u5473\u7740 Cache Tracker \u8BB0\u5F55\u7684\u662F\u5185\u5B58\u5927\u5C0F\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"[number]"})," \u610F\u5473\u7740 Cache Tracker \u8BB0\u5F55\u7684\u662F\u7F13\u5B58\u7684\u6761\u76EE\u6570\uFF0C\u8FD9\u901A\u5E38\u662F\u56E0\u4E3A\u76EE\u524D\u65E0\u6CD5\u51C6\u786E\u7EDF\u8BA1\u5185\u5B58\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"(AllocByAllocator)"})," \u610F\u5473\u7740 Tracker \u7684\u503C\u7531 Doris Allocator \u8DDF\u8E2A\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"(experimental)"})," \u610F\u5473\u7740\u8FD9\u4E2A Memory Tracker \u8FD8\u5904\u4E8E\u5B9E\u9A8C\u4E2D\uFF0C\u503C\u53EF\u80FD\u4E0D\u51C6\u786E\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"global-memory-\u5360\u7528\u591A",children:"Global Memory \u5360\u7528\u591A"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{children:"MemTrackerLimiter Label=global, Type=overview, Limit=-1.00 B(-1 B), Used=199.37 MB(209053204 B), Peak=199.37 MB(209053204 B)\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Global Memory Tracker ",(0,o.jsx)(a.code,{children:"Label=global, Type=overview"})," \u7684\u503C\u7B49\u4E8E\u6240\u6709 ",(0,o.jsx)(a.code,{children:"Type=global"})," \u4E14 ",(0,o.jsx)(a.code,{children:"Parent Label != DetailsTrackerSet"})," \u7684 Memory Tracker \u4E4B\u548C\uFF0C\u4E3B\u8981\u5305\u62EC Cache \u548C\u5143\u6570\u636E\u7B49\u5728\u4E0D\u540C\u4EFB\u52A1\u95F4\u5171\u4EAB\u7684\u5185\u5B58\u3002"]}),"\n",(0,o.jsx)(a.h3,{id:"cache-\u5206\u6790\u65B9\u6CD5",children:"Cache \u5206\u6790\u65B9\u6CD5"}),"\n",(0,o.jsxs)(a.p,{children:["\u53C2\u8003 ",(0,o.jsx)(a.a,{href:"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/doris-cache-memory-analysis",children:"Cache \u5185\u5B58\u5206\u6790"})]}),"\n",(0,o.jsx)(a.h3,{id:"metadata-\u5206\u6790\u65B9\u6CD5",children:"Metadata \u5206\u6790\u65B9\u6CD5"}),"\n",(0,o.jsxs)(a.p,{children:["\u53C2\u8003 ",(0,o.jsx)(a.a,{href:"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/metadata-memory-analysis",children:"Metadata \u5185\u5B58\u5206\u6790"})]}),"\n",(0,o.jsx)(a.h3,{id:"orphan-\u5206\u6790\u65B9\u6CD5",children:"Orphan \u5206\u6790\u65B9\u6CD5"}),"\n",(0,o.jsxs)(a.p,{children:["\u5982\u679C Orphan Memory Tracker \u503C\u8FC7\u5927\u610F\u5473\u7740 Memory Tracker \u7EDF\u8BA1\u7F3A\u5931\uFF0C\u53C2\u8003 ",(0,o.jsx)(a.a,{href:"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-feature/memory-tracker",children:"\u5185\u5B58\u8DDF\u8E2A\u5668"})," \u4E2D [Memory Tracker \u7EDF\u8BA1\u7F3A\u5931] \u4E2D\u7684\u5206\u6790\u3002"]})]})}function d(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return t}});var r=n(667294);let o={},l=r.createContext(o);function t(e){let a=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(l.Provider,{value:a},e.children)}}}]);