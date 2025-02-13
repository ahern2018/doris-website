"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["403066"],{326155:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>s});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule","title":"\u4F7F\u7528 Hint \u63A7\u5236\u4EE3\u4EF7\u6539\u5199","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u4F7F\u7528 Hint \u63A7\u5236\u4EE3\u4EF7\u6539\u5199","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528 Hint \u8C03\u6574 Join Shuffle \u65B9\u5F0F","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle"},"next":{"title":"\u4F7F\u7528 Leading Hint \u63A7\u5236 Join \u987A\u5E8F","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint"}}'),l=i("785893"),r=i("250065");let s={title:"\u4F7F\u7528 Hint \u63A7\u5236\u4EE3\u4EF7\u6539\u5199",language:"zh-CN"},c=void 0,o={},a=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6848\u4F8B",id:"\u6848\u4F8B",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function d(n){let e={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u67E5\u8BE2\u4F18\u5316\u5668\u5728\u751F\u6210\u6267\u884C\u8BA1\u5212\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5E94\u7528\u4E00\u7CFB\u5217\u89C4\u5219\u3002\u8FD9\u4E9B\u89C4\u5219\u4E3B\u8981\u5206\u4E3A\u4E24\u7C7B\uFF1A\u57FA\u4E8E\u89C4\u5219\u7684\u4F18\u5316\uFF08Rule-Based Optimizer \u5373 RBO\uFF09\u548C\u57FA\u4E8E\u4EE3\u4EF7\u7684\u4F18\u5316\uFF08Cost-Based Optimizer \u5373 CBO\uFF09 \u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"RBO\uFF1A\u6B64\u7C7B\u4F18\u5316\u901A\u8FC7\u5E94\u7528\u4E00\u7CFB\u5217\u9884\u5B9A\u4E49\u7684\u542F\u53D1\u5F0F\u89C4\u5219\u6765\u6539\u8FDB\u67E5\u8BE2\u8BA1\u5212\uFF0C\u800C\u4E0D\u8003\u8651\u5177\u4F53\u7684\u6570\u636E\u7EDF\u8BA1\u4FE1\u606F\u3002\u4F8B\u5982\uFF0C\u8C13\u8BCD\u4E0B\u63A8\u3001\u6295\u5F71\u4E0B\u63A8\u7B49\u7B56\u7565\u5747\u5C5E\u4E8E\u6B64\u7C7B\u3002"}),"\n",(0,l.jsx)(e.li,{children:"CBO\uFF1A\u6B64\u7C7B\u4F18\u5316\u5219\u5229\u7528\u6570\u636E\u7EDF\u8BA1\u4FE1\u606F\u6765\u4F30\u7B97\u4E0D\u540C\u6267\u884C\u8BA1\u5212\u7684\u4EE3\u4EF7\uFF0C\u5E76\u9009\u62E9\u4EE3\u4EF7\u6700\u5C0F\u7684\u8BA1\u5212\u8FDB\u884C\u6267\u884C\u3002\u8FD9\u5305\u62EC\u8BBF\u95EE\u8DEF\u5F84\u7684\u9009\u62E9\u3001\u8FDE\u63A5\u7B97\u6CD5\u7684\u9009\u62E9\u7B49\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6570\u636E\u5E93\u7BA1\u7406\u5458\u6216\u5F00\u53D1\u4EBA\u5458\u53EF\u80FD\u9700\u8981\u5BF9\u67E5\u8BE2\u4F18\u5316\u8FC7\u7A0B\u8FDB\u884C\u66F4\u4E3A\u7CBE\u7EC6\u7684\u63A7\u5236\u3002\u57FA\u4E8E\u6B64\uFF0C\u672C\u6587\u6863\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u67E5\u8BE2 Hint \u6765\u7BA1\u7406 CBO \u89C4\u5219\u3002"}),"\n",(0,l.jsx)(e.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,l.jsx)(e.p,{children:"\u5F53\u524D Doris \u5DF2\u7ECF\u5177\u5907\u826F\u597D\u7684\u5F00\u7BB1\u5373\u7528\u7684\u80FD\u529B\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u5728\u7EDD\u5927\u591A\u6570\u573A\u666F\u4E0B\uFF0CDoris \u4F1A\u81EA\u9002\u5E94\u7684\u4F18\u5316\u5404\u79CD\u573A\u666F\u4E0B\u7684\u6027\u80FD\uFF0C\u65E0\u9700\u7528\u6237\u6765\u624B\u5DE5\u63A7\u5236 hint \u6765\u8FDB\u884C\u4E1A\u52A1\u8C03\u4F18\u3002\u672C\u7AE0\u4ECB\u7ECD\u7684\u5185\u5BB9\u4E3B\u8981\u9762\u5411\u4E13\u4E1A\u8C03\u4F18\u4EBA\u5458\uFF0C\u4E1A\u52A1\u4EBA\u5458\u4EC5\u505A\u7B80\u5355\u4E86\u89E3\u5373\u53EF\u3002"})}),"\n",(0,l.jsx)(e.p,{children:"CBO \u89C4\u5219\u63A7\u5236 Hint \u7684\u57FA\u672C\u8BED\u6CD5\u5982\u4E0B\u6240\u793A\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ USE_CBO_RULE(rule1, rule2, ...) */ ...\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u6B64 Hint \u7D27\u8DDF\u5728 ",(0,l.jsx)(e.code,{children:"SELECT"})," \u5173\u952E\u5B57\u4E4B\u540E\uFF0C\u5E76\u5728\u62EC\u53F7\u5185\u6307\u5B9A\u8981\u542F\u7528\u7684\u89C4\u5219\u540D\u79F0\uFF08\u89C4\u5219\u540D\u79F0\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5F53\u524D Doris \u4F18\u5316\u5668\u652F\u6301\u82E5\u5E72\u4E2D\u4EE3\u4EF7\u6539\u5199\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"USE_CBO_RULE"})," hint \u6765\u663E\u5F0F\u542F\u7528\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"PUSH_DOWN_AGG_THROUGH_JOIN"}),"\n",(0,l.jsx)(e.li,{children:"PUSH_DOWN_AGG_THROUGH_JOIN_ONE_SIDE"}),"\n",(0,l.jsx)(e.li,{children:"PUSH_DOWN_DISTINCT_THROUGH_JOIN"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6848\u4F8B",children:"\u6848\u4F8B"}),"\n",(0,l.jsx)(e.p,{children:"\u67E5\u8BE2\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"explain shape plan\n    select /*+ USE_CBO_RULE(push_down_agg_through_join_one_side) */\n            a.event_id,\n            b.group_id,\n            COUNT(a.event_id)\n    from a\n    join b on\n            a.device_id = b.device_id\n    group by\n            a.event_id,\n            b.group_id\n    ;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6B64\u793A\u4F8B\u4E2D\u542F\u7528\u4E86\u4E00\u4E2A\u805A\u5408\u4E0B\u63A8 CBO \u89C4\u5219\u3002\u8FD9\u4E00\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u8868 a \u80FD\u591F\u5728\u8FDE\u63A5\u64CD\u4F5C\u4E4B\u524D\u8FDB\u884C\u63D0\u524D\u805A\u5408\uFF0C\u51CF\u5C11\u8FDE\u63A5\u7684\u5F00\u9500\uFF0C\u52A0\u901F\u67E5\u8BE2\u3002\u4E0B\u538B\u540E\u7684\u8BA1\u5212\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"PhysicalResultSink\n--hashAgg[GLOBAL]\n----hashAgg[LOCAL]\n------hashJoin[INNER_JOIN] hashCondition=((a.device_id = b.device_id)) otherCondition=()\n--------hashAgg[LOCAL]\n----------PhysicalOlapScan[a]\n--------filter((cast(experiment_id as DOUBLE) = 73.0))\n----------PhysicalOlapScan[b]\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,l.jsxs)(e.p,{children:["\u5408\u7406\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"USE_CBO_RULE"})," hint\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u624B\u52A8\u542F\u7528\u90E8\u5206\u9AD8\u7EA7 CBO \u4F18\u5316\u89C4\u5219\uFF0C\u5728\u7279\u5B9A\u573A\u666F\u4E0B\u4F18\u5316\u6027\u80FD\u3002\u4F46\u662F\u4F7F\u7528 CBO \u4F18\u5316\u89C4\u5219\u9700\u8981\u5BF9\u67E5\u8BE2\u4F18\u5316\u8FC7\u7A0B\u548C\u6570\u636E\u7279\u6027\u6709\u6DF1\u5165\u7684\u7406\u89E3\uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4F9D\u8D56 Doris \u4F18\u5316\u5668\u7684\u81EA\u52A8\u51B3\u7B56\u4ECD\u7136\u662F\u6700\u4F73\u7684\u9009\u62E9\u3002"]})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return s}});var t=i(667294);let l={},r=t.createContext(l);function s(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);