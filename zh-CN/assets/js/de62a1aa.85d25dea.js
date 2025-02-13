"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["521820"],{691663:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>t});var l=JSON.parse('{"id":"query-acceleration/materialized-view/overview","title":"\u7269\u5316\u89C6\u56FE\u6982\u89C8","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-acceleration/materialized-view/overview.md","sourceDirName":"query-acceleration/materialized-view","slug":"/query-acceleration/materialized-view/overview","permalink":"/zh-CN/docs/3.0/query-acceleration/materialized-view/overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u7269\u5316\u89C6\u56FE\u6982\u89C8","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8C03\u4F18\u6D41\u7A0B","permalink":"/zh-CN/docs/3.0/query-acceleration/performance-tuning-overview/tuning-process"},"next":{"title":"\u540C\u6B65\u7269\u5316\u89C6\u56FE","permalink":"/zh-CN/docs/3.0/query-acceleration/materialized-view/sync-materialized-view"}}'),r=i("785893"),s=i("250065");let t={title:"\u7269\u5316\u89C6\u56FE\u6982\u89C8",language:"zh-CN"},c=void 0,d={},a=[{value:"\u7269\u5316\u89C6\u56FE\u7684\u4F7F\u7528\u573A\u666F",id:"\u7269\u5316\u89C6\u56FE\u7684\u4F7F\u7528\u573A\u666F",level:2},{value:"\u67E5\u8BE2\u52A0\u901F",id:"\u67E5\u8BE2\u52A0\u901F",level:3},{value:"\u8F7B\u91CF\u5316 ETL\uFF08\u6570\u636E\u5EFA\u6A21\uFF09",id:"\u8F7B\u91CF\u5316-etl\u6570\u636E\u5EFA\u6A21",level:3},{value:"\u6E56\u4ED3\u4E00\u4F53",id:"\u6E56\u4ED3\u4E00\u4F53",level:3},{value:"\u7269\u5316\u89C6\u56FE\u7684\u5206\u7C7B",id:"\u7269\u5316\u89C6\u56FE\u7684\u5206\u7C7B",level:2},{value:"\u6309\u7167\u6570\u636E\u65F6\u6548\u6027\u5206\u7C7B\uFF1A\u540C\u6B65 vs \u5F02\u6B65",id:"\u6309\u7167\u6570\u636E\u65F6\u6548\u6027\u5206\u7C7B\u540C\u6B65-vs-\u5F02\u6B65",level:3},{value:"\u6309\u7167\u652F\u6301\u900F\u660E\u6539\u5199\u7684 SQL \u6A21\u5F0F\u5206\u7C7B\uFF1A\u5355\u8868 vs \u591A\u8868",id:"\u6309\u7167\u652F\u6301\u900F\u660E\u6539\u5199\u7684-sql-\u6A21\u5F0F\u5206\u7C7B\u5355\u8868-vs-\u591A\u8868",level:3},{value:"\u6309\u7167\u7269\u5316\u89C6\u56FE\u5237\u65B0\u5206\u7C7B\uFF1A\u5168\u91CF\u5237\u65B0 vs \u5206\u533A\u589E\u91CF\u5237\u65B0 vs \u5B9E\u65F6\u5237\u65B0",id:"\u6309\u7167\u7269\u5316\u89C6\u56FE\u5237\u65B0\u5206\u7C7B\u5168\u91CF\u5237\u65B0-vs-\u5206\u533A\u589E\u91CF\u5237\u65B0-vs-\u5B9E\u65F6\u5237\u65B0",level:3}];function o(e){let n={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\u662F\u65E2\u5305\u542B\u8BA1\u7B97\u903B\u8F91\u4E5F\u5305\u542B\u6570\u636E\u7684\u5B9E\u4F53\u3002\u5B83\u4E0D\u540C\u4E8E\u89C6\u56FE\uFF0C\u56E0\u4E3A\u89C6\u56FE\u4EC5\u5305\u542B\u8BA1\u7B97\u903B\u8F91\uFF0C\u672C\u8EAB\u4E0D\u5B58\u50A8\u6570\u636E\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7269\u5316\u89C6\u56FE\u7684\u4F7F\u7528\u573A\u666F",children:"\u7269\u5316\u89C6\u56FE\u7684\u4F7F\u7528\u573A\u666F"}),"\n",(0,r.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\u6839\u636E SQL \u5B9A\u4E49\u8BA1\u7B97\u5E76\u5B58\u50A8\u6570\u636E\uFF0C\u4E14\u6839\u636E\u7B56\u7565\u8FDB\u884C\u5468\u671F\u6027\u6216\u5B9E\u65F6\u6027\u66F4\u65B0\u3002\u7269\u5316\u89C6\u56FE\u53EF\u76F4\u63A5\u67E5\u8BE2\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u67E5\u8BE2\u900F\u660E\u6539\u5199\u3002\u5B83\u53EF\u7528\u4E8E\u4EE5\u4E0B\u51E0\u4E2A\u573A\u666F\uFF1A"}),"\n",(0,r.jsx)(n.h3,{id:"\u67E5\u8BE2\u52A0\u901F",children:"\u67E5\u8BE2\u52A0\u901F"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u51B3\u7B56\u652F\u6301\u7CFB\u7EDF\u4E2D\uFF0C\u5982 BI \u62A5\u8868\u3001Ad-Hoc \u67E5\u8BE2\u7B49\uFF0C\u8FD9\u7C7B\u5206\u6790\u578B\u67E5\u8BE2\u901A\u5E38\u5305\u542B\u805A\u5408\u64CD\u4F5C\uFF0C\u53EF\u80FD\u8FD8\u6D89\u53CA\u591A\u8868\u8FDE\u63A5\u3002\u7531\u4E8E\u8BA1\u7B97\u6B64\u7C7B\u67E5\u8BE2\u7ED3\u679C\u8F83\u4E3A\u6D88\u8017\u8D44\u6E90\u3001\u54CD\u5E94\u65F6\u95F4\u53EF\u80FD\u957F\u8FBE\u5206\u949F\u7EA7\uFF0C\u4E14\u4E1A\u52A1\u573A\u666F\u5F80\u5F80\u8981\u6C42\u79D2\u7EA7\u54CD\u5E94\uFF0C\u53EF\u4EE5\u6784\u5EFA\u7269\u5316\u89C6\u56FE\uFF0C\u5BF9\u5E38\u89C1\u67E5\u8BE2\u8FDB\u884C\u52A0\u901F\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8F7B\u91CF\u5316-etl\u6570\u636E\u5EFA\u6A21",children:"\u8F7B\u91CF\u5316 ETL\uFF08\u6570\u636E\u5EFA\u6A21\uFF09"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6570\u636E\u5206\u5C42\u573A\u666F\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5D4C\u5957\u7269\u5316\u89C6\u56FE\u6765\u6784\u5EFA DWD \u548C DWM \u5C42\uFF0C\u5229\u7528\u7269\u5316\u89C6\u56FE\u7684\u8C03\u5EA6\u5237\u65B0\u80FD\u529B\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6E56\u4ED3\u4E00\u4F53",children:"\u6E56\u4ED3\u4E00\u4F53"}),"\n",(0,r.jsx)(n.p,{children:"\u9488\u5BF9\u591A\u79CD\u5916\u90E8\u6570\u636E\u6E90\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6570\u636E\u6E90\u6240\u4F7F\u7528\u7684\u8868\u8FDB\u884C\u7269\u5316\u89C6\u56FE\u6784\u5EFA\uFF0C\u4EE5\u6B64\u6765\u8282\u7701\u4ECE\u5916\u90E8\u8868\u5BFC\u5165\u5230\u5185\u90E8\u8868\u7684\u6210\u672C\uFF0C\u5E76\u4E14\u52A0\u901F\u67E5\u8BE2\u8FC7\u7A0B\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7269\u5316\u89C6\u56FE\u7684\u5206\u7C7B",children:"\u7269\u5316\u89C6\u56FE\u7684\u5206\u7C7B"}),"\n",(0,r.jsx)(n.h3,{id:"\u6309\u7167\u6570\u636E\u65F6\u6548\u6027\u5206\u7C7B\u540C\u6B65-vs-\u5F02\u6B65",children:"\u6309\u7167\u6570\u636E\u65F6\u6548\u6027\u5206\u7C7B\uFF1A\u540C\u6B65 vs \u5F02\u6B65"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u540C\u6B65\u7269\u5316\u89C6\u56FE\u9700\u8981\u4E0E\u57FA\u8868\u7684\u6570\u636E\u4FDD\u6301\u5F3A\u4E00\u81F4\u6027\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u4E0E\u57FA\u8868\u7684\u6570\u636E\u4FDD\u6301\u6700\u7EC8\u4E00\u81F4\u6027\uFF0C\u53EF\u80FD\u4F1A\u6709\u4E00\u5B9A\u7684\u5EF6\u8FDF\u3002\u5B83\u901A\u5E38\u7528\u4E8E\u5BF9\u6570\u636E\u65F6\u6548\u6027\u8981\u6C42\u4E0D\u9AD8\u7684\u573A\u666F\uFF0C\u4E00\u822C\u4F7F\u7528 T+1 \u6216\u5C0F\u65F6\u7EA7\u522B\u7684\u6570\u636E\u6765\u6784\u5EFA\u7269\u5316\u89C6\u56FE\u3002\u5982\u679C\u65F6\u6548\u6027\u8981\u6C42\u9AD8\uFF0C\u5219\u8003\u8651\u4F7F\u7528\u540C\u6B65\u7269\u5316\u89C6\u56FE\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u76EE\u524D\uFF0C\u540C\u6B65\u7269\u5316\u89C6\u56FE\u4E0D\u652F\u6301\u76F4\u63A5\u67E5\u8BE2\uFF0C\u800C\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u652F\u6301\u76F4\u63A5\u67E5\u8BE2\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6309\u7167\u652F\u6301\u900F\u660E\u6539\u5199\u7684-sql-\u6A21\u5F0F\u5206\u7C7B\u5355\u8868-vs-\u591A\u8868",children:"\u6309\u7167\u652F\u6301\u900F\u660E\u6539\u5199\u7684 SQL \u6A21\u5F0F\u5206\u7C7B\uFF1A\u5355\u8868 vs \u591A\u8868"}),"\n",(0,r.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\u7684\u5B9A\u4E49 SQL \u53EF\u4EE5\u5305\u542B\u5355\u8868\u67E5\u8BE2\uFF0C\u4E5F\u53EF\u4EE5\u5305\u542B\u591A\u8868\u67E5\u8BE2\u3002\u4ECE\u4F7F\u7528\u8868\u7684\u6570\u91CF\u89D2\u5EA6\u51FA\u53D1\uFF0C\u53EF\u4EE5\u5212\u5206\u7269\u5316\u89C6\u56FE\u4E3A\u5355\u8868\u7269\u5316\u89C6\u56FE\u6216\u591A\u8868\u7269\u5316\u89C6\u56FE\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5BF9\u4E8E\u5F02\u6B65\u7269\u5316\u89C6\u56FE\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5355\u8868\u6216\u591A\u8868\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5BF9\u4E8E\u540C\u6B65\u7269\u5316\u89C6\u56FE\uFF0C\u53EA\u80FD\u4F7F\u7528\u5355\u8868\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6309\u7167\u7269\u5316\u89C6\u56FE\u5237\u65B0\u5206\u7C7B\u5168\u91CF\u5237\u65B0-vs-\u5206\u533A\u589E\u91CF\u5237\u65B0-vs-\u5B9E\u65F6\u5237\u65B0",children:"\u6309\u7167\u7269\u5316\u89C6\u56FE\u5237\u65B0\u5206\u7C7B\uFF1A\u5168\u91CF\u5237\u65B0 vs \u5206\u533A\u589E\u91CF\u5237\u65B0 vs \u5B9E\u65F6\u5237\u65B0"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5BF9\u4E8E\u5F02\u6B65\u7269\u5316\u89C6\u56FE"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5168\u91CF\u5237\u65B0\uFF1A\u8BA1\u7B97\u7269\u5316\u89C6\u56FE\u5B9A\u4E49 SQL \u7684\u6240\u6709\u6570\u636E\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5206\u533A\u589E\u91CF\u5237\u65B0\uFF1A\u5F53\u7269\u5316\u89C6\u56FE\u57FA\u8868\u7684\u5206\u533A\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8BC6\u522B\u51FA\u7269\u5316\u89C6\u56FE\u5BF9\u5E94\u53D8\u5316\u7684\u5206\u533A\uFF0C\u5E76\u4EC5\u5237\u65B0\u8FD9\u4E9B\u5206\u533A\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5206\u533A\u589E\u91CF\u5237\u65B0\uFF0C\u800C\u65E0\u9700\u5237\u65B0\u6574\u4E2A\u7269\u5316\u89C6\u56FE\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5BF9\u4E8E\u540C\u6B65\u7269\u5316\u89C6\u56FE"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u53EF\u4EE5\u7406\u89E3\u4E3A\u5B9E\u65F6\u66F4\u65B0\uFF0C\u4FDD\u6301\u4E0E\u57FA\u8868\u7684\u6570\u636E\u4E00\u81F4\u3002"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var l=i(667294);let r={},s=l.createContext(r);function t(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);