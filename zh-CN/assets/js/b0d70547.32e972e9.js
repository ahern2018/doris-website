"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["64246"],{637583:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>d,assets:()=>u,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"query-acceleration/tuning/tuning-execution/parallelism-adjustment","title":"\u5E76\u884C\u5EA6\u8C03\u6574","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/tuning/tuning-execution/parallelism-adjustment.md","sourceDirName":"query-acceleration/tuning/tuning-execution","slug":"/query-acceleration/tuning/tuning-execution/parallelism-adjustment","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-execution/parallelism-adjustment","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u5E76\u884C\u5EA6\u8C03\u6574","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6570\u636E\u503E\u659C\u5904\u7406","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-execution/data-skew-handling"},"next":{"title":"\u5E38\u89C1\u8C03\u4F18\u53C2\u6570","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-parameters"}}'),t=i("785893"),l=i("250065");let a={title:"\u5E76\u884C\u5EA6\u8C03\u6574",language:"zh-CN"},r="\u5E76\u884C\u5EA6\u8C03\u6574",u={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6848\u4F8B 1\uFF1A\u5E76\u884C\u5EA6\u8FC7\u9AD8\u5BFC\u81F4\u9AD8\u5E76\u53D1\u538B\u529B\u573A\u666F\uFF0CCPU \u4F7F\u7528\u7387\u8FC7\u9AD8",id:"\u6848\u4F8B-1\u5E76\u884C\u5EA6\u8FC7\u9AD8\u5BFC\u81F4\u9AD8\u5E76\u53D1\u538B\u529B\u573A\u666Fcpu-\u4F7F\u7528\u7387\u8FC7\u9AD8",level:2},{value:"\u6848\u4F8B 2\uFF1A\u8C03\u9AD8\u5E76\u884C\u5EA6\uFF0C\u8FDB\u4E00\u6B65\u5229\u7528 CPU \u52A0\u901F\u67E5\u8BE2",id:"\u6848\u4F8B-2\u8C03\u9AD8\u5E76\u884C\u5EA6\u8FDB\u4E00\u6B65\u5229\u7528-cpu-\u52A0\u901F\u67E5\u8BE2",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5E76\u884C\u5EA6\u8C03\u6574",children:"\u5E76\u884C\u5EA6\u8C03\u6574"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u5B9E\u9645\u751F\u4EA7\u573A\u666F\u7ECF\u5E38\u4F1A\u9047\u5230\u5E76\u884C\u5EA6\u8BBE\u7F6E\u4E0D\u5408\u7406\uFF0C\u5F15\u8D77\u7684\u6027\u80FD\u95EE\u9898\u3002\u5728\u4EE5\u4E0B\u7684\u6848\u4F8B\u4E2D\uFF0C\u5217\u4E3E\u4E86\u8C03\u6574\u5E76\u884C\u5EA6\u4F18\u5316\u7684\u6848\u4F8B\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6848\u4F8B-1\u5E76\u884C\u5EA6\u8FC7\u9AD8\u5BFC\u81F4\u9AD8\u5E76\u53D1\u538B\u529B\u573A\u666Fcpu-\u4F7F\u7528\u7387\u8FC7\u9AD8",children:"\u6848\u4F8B 1\uFF1A\u5E76\u884C\u5EA6\u8FC7\u9AD8\u5BFC\u81F4\u9AD8\u5E76\u53D1\u538B\u529B\u573A\u666F\uFF0CCPU \u4F7F\u7528\u7387\u8FC7\u9AD8"}),"\n",(0,t.jsx)(n.p,{children:"\u5F53\u7EBF\u4E0A\u89C2\u5BDF\u5230 CPU \u4F7F\u7528\u7387\u8FC7\u9AD8\uFF0C\u5F71\u54CD\u5230\u90E8\u5206\u4F4E\u65F6\u5EF6\u67E5\u8BE2\u7684\u6027\u80FD\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u901A\u8FC7\u8C03\u6574\u67E5\u8BE2\u5E76\u884C\u5EA6\u6765\u964D\u4F4E CPU \u4F7F\u7528\u7387\u3002\u7531\u4E8E Doris \u7684\u8BBE\u8BA1\u7406\u5FF5\u662F\u4F18\u5148\u4F7F\u7528\u66F4\u591A\u8D44\u6E90\u4EE5\u6700\u5FEB\u901F\u5EA6\u83B7\u53D6\u67E5\u8BE2\u7ED3\u679C\uFF0C\u5728\u67D0\u4E9B\u7EBF\u4E0A\u8D44\u6E90\u7D27\u5F20\u7684\u573A\u666F\u4E0B\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6027\u80FD\u8868\u73B0\u4E0D\u4F73\u3002\u56E0\u6B64\uFF0C\u9002\u5F53\u8C03\u6574\u5E76\u884C\u5EA6\u53EF\u4EE5\u5728\u8D44\u6E90\u6709\u9650\u7684\u60C5\u51B5\u4E0B\u63D0\u5347\u67E5\u8BE2\u7684\u6574\u4F53\u7A33\u5B9A\u6027\u548C\u6548\u7387\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u5E76\u884C\u5EA6\u4ECE\u9ED8\u8BA4\u7684 0\uFF08CPU \u6838\u6570\u7684\u4E00\u534A\uFF09\u5230 4\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set global parallel_pipeline_task_num = 4;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4E8E\u8BE5\u53C2\u6570\u662F Session \u751F\u6548\uFF0C\u5FC5\u8981\u65F6\u8003\u8651\u91CD\u542F FE \u8BA9\u8BE5\u8BBE\u7F6E\u5168\u5C40\u751F\u6548\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8C03\u6574\u4E4B\u540E\uFF0CCPU \u4F7F\u7528\u7387\u964D\u4F4E\u5230\u539F\u5148\u9AD8\u5CF0\u503C\u7684 60%\uFF0C\u964D\u4F4E\u4E86\u90E8\u5206\u65F6\u5EF6\u8F83\u4F4E\u7684\u67E5\u8BE2\u7684\u5F71\u54CD\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6848\u4F8B-2\u8C03\u9AD8\u5E76\u884C\u5EA6\u8FDB\u4E00\u6B65\u5229\u7528-cpu-\u52A0\u901F\u67E5\u8BE2",children:"\u6848\u4F8B 2\uFF1A\u8C03\u9AD8\u5E76\u884C\u5EA6\uFF0C\u8FDB\u4E00\u6B65\u5229\u7528 CPU \u52A0\u901F\u67E5\u8BE2"}),"\n",(0,t.jsx)(n.p,{children:"\u5F53\u524D Doris \u9ED8\u8BA4\u7684\u5E76\u884C\u5EA6\u4E3A CPU \u6838\u6570\u7684\u4E00\u534A\uFF0C\u90E8\u5206\u8BA1\u7B97\u5BC6\u96C6\u578B\u7684\u573A\u666F\u5E76\u4E0D\u80FD\u5145\u5206\u5229\u7528\u6EE1 CPU \u8FDB\u884C\u67E5\u8BE2\u52A0\u901F\uFF0C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"select sum(if(t2.value is null, 0, 1)) exist_value, sum(if(t2.value is null, 1, 0)) no_exist_value\nfrom  t1 left join  t2 on t1.key = t2.key;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5DE6\u8868 20 \u4EBF\uFF0C\u53F3\u8868 500 \u4E07\u7684\u573A\u666F\u4E0A\uFF0C\u4E0A\u8FF0 SQL \u9700\u8981\u6267\u884C 28s\u3002\u89C2\u5BDF Profile\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:" HASH_JOIN_OPERATOR (id=3 , nereids_id=448):\n                - PlanInfo\n                   - join op: LEFT OUTER JOIN(BROADCAST)[]\n                   - equal join conjunct: (value = value)\n                   - cardinality=2,462,330,332\n                   - vec output tuple id: 5\n                   - output tuple id: 5\n                   - vIntermediate tuple ids: 4 \n                   - hash output slot ids: 16 \n                   - projections: value\n                   - project output tuple id: 5\n                - BlocksProduced: sum 360.099K (360099), avg 45.012K (45012), max 45.014K (45014), min 45.011K (45011)\n                - CloseTime: avg 8.44us, max 13.327us, min 5.574us\n                - ExecTime: avg 26sec153ms, max 26sec261ms, min 26sec33ms\n                - InitTime: avg 7.122us, max 13.395us, min 4.541us\n                - MemoryUsage: sum , avg , max , min \n                  - PeakMemoryUsage: sum 1.16 MB, avg 148.00 KB, max 148.00 KB, min 148.00 KB\n                  - ProbeKeyArena: sum 1.16 MB, avg 148.00 KB, max 148.00 KB, min 148.00 KB\n                - OpenTime: avg 2.967us, max 4.120us, min 1.562us\n                - ProbeRows: sum 1.4662330332B (1462330332), avg 182.791291M (182791291), max 182.811875M (182811875), min 182.782658M (182782658)\n                - ProjectionTime: avg 165.392ms, max 169.762ms, min 161.727ms\n                - RowsProduced: sum 1.462330332B (1462330332), avg 182.791291M (182791291), max 182.811875M (182811875), min 182.782658M (182782658)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u91CC\u4E3B\u8981\u7684\u65F6\u95F4\u8017\u65F6\uFF1A",(0,t.jsx)(n.code,{children:"ExecTime: avg 26sec153ms, max 26sec261ms, min 26sec33ms"}),"\u90FD\u53D1\u751F\u5728 Join \u7B97\u5B50\u4E0A\uFF0C\u540C\u65F6\u5904\u7406\u7684\u6570\u636E\u603B\u91CF\uFF1A",(0,t.jsx)(n.code,{children:"ProbeRows: sum 1.4662330332B"}),"\u6709 14 \u4EBF\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5178\u578B\u7684 CPU \u5BC6\u96C6\u7684\u8FD0\u7B97\u60C5\u51B5\u3002\u89C2\u5BDF\u673A\u5668\u76D1\u63A7\uFF0C\u53D1\u73B0 CPU \u8D44\u6E90\u6CA1\u6709\u6253\u6EE1\uFF0CCPU \u5229\u7528\u7387\u4E3A 60%\uFF0C\u6B64\u65F6\u53EF\u4EE5\u8003\u8651\u8C03\u9AD8\u5E76\u884C\u5EA6\u6765\u8FDB\u4E00\u6B65\u5229\u7528\u7A7A\u95F2\u7684 CPU \u8D44\u6E90\u8FDB\u884C\u52A0\u901F\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u5E76\u884C\u5EA6\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set parallel_pipeline_task_num = 16;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u67E5\u8BE2\u8017\u65F6\u4ECE 28s \u964D\u4F4E\u5230 19s\uFF0Ccpu \u5229\u7528\u7387\u4ECE 60% \u4E0A\u5347\u5230 90%\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,t.jsx)(n.p,{children:"\u901A\u5E38\u7528\u6237\u4E0D\u9700\u8981\u4ECB\u5165\u8C03\u6574\u67E5\u8BE2\u5E76\u884C\u5EA6\uFF0C\u5982\u9700\u8981\u8C03\u6574\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u4E8B\u9879\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5EFA\u8BAE\u4ECE CPU \u5229\u7528\u7387\u51FA\u53D1\u3002\u901A\u8FC7 PROFILE \u5DE5\u5177\u8F93\u51FA\u89C2\u5BDF\u662F\u5426\u662F CPU \u74F6\u9888\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u5E76\u884C\u5EA6\u7684\u5408\u7406\u4FEE\u6539"}),"\n",(0,t.jsx)(n.li,{children:"\u5355 SQL \u8C03\u6574\u6BD4\u8F83\u5B89\u5168\uFF0C\u5C3D\u91CF\u4E0D\u8981\u5168\u5C40\u505A\u8FC7\u4E8E\u6FC0\u8FDB\u7684\u4FEE\u6539"}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var s=i(667294);let t={},l=s.createContext(t);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);