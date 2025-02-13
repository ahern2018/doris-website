"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["576008"],{207317:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>d,assets:()=>s,toc:()=>i,frontMatter:()=>m});var r=JSON.parse('{"id":"admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis","title":"\u5BFC\u5165\u5185\u5B58\u5206\u6790","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis.md","sourceDirName":"admin-manual/trouble-shooting/memory-management/memory-analysis","slug":"/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/load-memory-analysis","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5BFC\u5165\u5185\u5B58\u5206\u6790","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u67E5\u8BE2\u5185\u5B58\u5206\u6790","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis"},"next":{"title":"\u67E5\u8BE2\u62A5\u9519 Process Memory Not Enough","permalink":"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded"}}'),o=a("785893"),l=a("250065");let m={title:"\u5BFC\u5165\u5185\u5B58\u5206\u6790",language:"zh-CN"},t=void 0,s={},i=[{value:"\u5BFC\u5165\u5185\u5B58\u67E5\u770B",id:"\u5BFC\u5165\u5185\u5B58\u67E5\u770B",level:2},{value:"\u5BFC\u5165\u5185\u5B58\u5206\u6790",id:"\u5BFC\u5165\u5185\u5B58\u5206\u6790",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Doris \u6570\u636E\u5BFC\u5165\u5206\u4E3A Fragment \u8BFB\u53D6\u548C Channel \u5199\u5165\u4E24\u4E2A\u9636\u6BB5\uFF0C\u5176\u4E2D Fragment \u548C\u67E5\u8BE2\u7684 Fragment \u6267\u884C\u903B\u8F91\u76F8\u540C\uFF0C\u4E0D\u8FC7 Stream Load \u901A\u5E38\u53EA\u6709 Scan Operator\u3002Channel \u4E3B\u8981\u5C06\u6570\u636E\u5199\u5165\u4E34\u65F6\u7684\u6570\u636E\u7ED3\u6784 Memtable\uFF0C\u7136\u540E Delta Writer \u5C06\u6570\u636E\u538B\u7F29\u540E\u5199\u5165\u6587\u4EF6\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u5BFC\u5165\u5185\u5B58\u67E5\u770B",children:"\u5BFC\u5165\u5185\u5B58\u67E5\u770B"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679C\u4EFB\u4F55\u5730\u65B9\u770B\u5230 ",(0,o.jsx)(n.code,{children:"Label=load, Type=overview"})," Memory Tracker \u7684\u503C\u8F83\u5927\uFF0C\u8BF4\u660E\u5BFC\u5165\u5185\u5B58\u4F7F\u7528\u591A\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"MemTrackerLimiter Label=load, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Doris \u5BFC\u5165\u7684\u5185\u5B58\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u7B2C\u4E00\u90E8\u5206\u662F Fragment \u6267\u884C\u4F7F\u7528\u7684\u5185\u5B58\uFF0C\u7B2C\u4E8C\u90E8\u5206\u662F MemTable \u7684\u6784\u9020\u548C\u4E0B\u5237\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u7684\u5185\u5B58\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 BE web \u9875\u9762 ",(0,o.jsx)(n.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker?type=global"})," \u4E2D\u627E\u5230 ",(0,o.jsx)(n.code,{children:"Label=AllMemTableMemory, Parent Label=DetailsTrackerSet"})," \u7684 Memory Tracker \u662F\u8FD9\u53F0 BE \u7ED3\u70B9\u4E0A\u6240\u6709\u5BFC\u5165\u4EFB\u52A1\u6784\u9020\u548C\u4E0B\u5237 ",(0,o.jsx)(n.code,{children:"MemTable"})," \u4F7F\u7528\u7684\u5185\u5B58\u3002\u62A5\u9519\u8FDB\u7A0B\u5185\u5B58\u8D85\u9650\u6216\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0C\u5728 ",(0,o.jsx)(n.code,{children:"be.INFO"})," \u65E5\u5FD7\u4E2D ",(0,o.jsx)(n.code,{children:"Memory Tracker Summary"})," \u4E5F\u53EF\u4EE5\u627E\u5230\u8FD9\u4E2A Memory Tracker\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"MemTracker Label=AllMemTableMemory, Parent Label=DetailsTrackerSet, Used=25.08 MB(26303456 B), Peak=25.08 MB(26303456 B)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5BFC\u5165\u5185\u5B58\u5206\u6790",children:"\u5BFC\u5165\u5185\u5B58\u5206\u6790"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679C ``Label=AllMemTableMemory` \u7684\u503C\u5F88\u5C0F\uFF0C\u5219\u5BFC\u5165\u4EFB\u52A1\u4E3B\u8981\u4F7F\u7528\u5185\u5B58\u7684\u4F4D\u7F6E\u662F\u6267\u884C Fragment\uFF0C\u5206\u6790\u65B9\u5F0F\u548C ",(0,o.jsx)(n.a,{href:"/zh-CN/docs/3.0/admin-manual/trouble-shooting/memory-management/memory-analysis/query-memory-analysis",children:"\u67E5\u8BE2\u5185\u5B58\u5206\u6790"})," \u76F8\u540C\uFF0C\u6B64\u5904\u4E0D\u518D\u8D58\u8FF0\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679C ",(0,o.jsx)(n.code,{children:"Label=AllMemTableMemory"})," \u7684\u503C\u5F88\u5927\uFF0C\u5219\u53EF\u80FD MemTable \u4E0B\u5237\u4E0D\u53CA\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u51CF\u5C0F ",(0,o.jsx)(n.code,{children:"be.conf"})," \u4E2D ",(0,o.jsx)(n.code,{children:"load_process_max_memory_limit_percent"})," \u548C ",(0,o.jsx)(n.code,{children:"load_process_soft_mem_limit_percent"})," \u7684\u503C\uFF0C\u8FD9\u53EF\u4EE5\u8BA9 MemTable \u66F4\u9891\u7E41\u7684\u4E0B\u5237\uFF0C\u4ECE\u800C\u5728\u5185\u5B58\u4E2D\u7F13\u5B58\u7684 MemTable \u66F4\u5C11\uFF0C\u4F46\u5199\u5165\u7684\u6587\u4EF6\u6570\u91CF\u4F1A\u53D8\u591A\uFF0C\u5982\u679C\u5199\u5165\u4E86\u592A\u591A\u7684\u5C0F\u6587\u4EF6\u4F1A\u589E\u52A0 Compaction \u7684\u538B\u529B\uFF0C\u5982\u679C Compaction \u4E0D\u53CA\u65F6\u5C06\u5BFC\u81F4\u5143\u6570\u636E\u5185\u5B58\u53D8\u5927\uFF0C\u67E5\u8BE2\u53D8\u6162\uFF0C\u751A\u81F3\u6587\u4EF6\u6570\u91CF\u8D85\u51FA\u9650\u5236\u540E\u5BFC\u5165\u5C06\u62A5\u9519\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u5BFC\u5165\u6267\u884C\u8FC7\u7A0B\u4E2D\u67E5\u770B BE Web \u9875\u9762 ",(0,o.jsx)(n.code,{children:"/mem_tracker?type=load"}),"\uFF0C\u4F9D\u636E ",(0,o.jsx)(n.code,{children:"Label=MemTableManualInsert"})," \u548C ",(0,o.jsx)(n.code,{children:"Label=MemTableHookFlush"})," \u4E24\u7EC4 Memory Tracker \u7684\u503C\uFF0C\u53EF\u4EE5\u5B9A\u4F4D ",(0,o.jsx)(n.code,{children:"MemTable"})," \u5185\u5B58\u4F7F\u7528\u5927\u7684 ",(0,o.jsx)(n.code,{children:"LoadID"})," \u548C ",(0,o.jsx)(n.code,{children:"TabltID"}),"\u3002"]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return m}});var r=a(667294);let o={},l=r.createContext(o);function m(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:m(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);