"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["722279"],{94209:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"query-data/udf/alias-function","title":"\u522B\u540D\u51FD\u6570","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-data/udf/alias-function.md","sourceDirName":"query-data/udf","slug":"/query-data/udf/alias-function","permalink":"/zh-CN/docs/query-data/udf/alias-function","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u522B\u540D\u51FD\u6570","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u516C\u7528\u8868\u8868\u8FBE\u5F0F\uFF08CTE\uFF09","permalink":"/zh-CN/docs/query-data/cte"},"next":{"title":"Java UDF, UDAF, UDTF","permalink":"/zh-CN/docs/query-data/udf/java-user-defined-function"}}'),s=i("785893"),l=i("250065");let d={title:"\u522B\u540D\u51FD\u6570",language:"zh-CN"},t=void 0,a={},c=[{value:"\u6982\u5FF5\u4ECB\u7ECD",id:"\u6982\u5FF5\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:2},{value:"\u4E3A\u51FD\u6570\u8D77\u522B\u540D",id:"\u4E3A\u51FD\u6570\u8D77\u522B\u540D",level:3},{value:"\u7B80\u5316\u67E5\u8BE2\u8BED\u53E5",id:"\u7B80\u5316\u67E5\u8BE2\u8BED\u53E5",level:3},{value:"\u652F\u6301\u8303\u56F4",id:"\u652F\u6301\u8303\u56F4",level:2},{value:"\u8868\u8FBE\u5F0F\u8981\u6C42",id:"\u8868\u8FBE\u5F0F\u8981\u6C42",level:3},{value:"\u53C2\u6570\u8981\u6C42",id:"\u53C2\u6570\u8981\u6C42",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6982\u5FF5\u4ECB\u7ECD",children:"\u6982\u5FF5\u4ECB\u7ECD"}),"\n",(0,s.jsx)(n.p,{children:"\u522B\u540D\u51FD\u6570\uFF0C\u662F\u6307\u4E3A\u51FD\u6570\u8D77\u4E00\u4E2A\u522B\u540D\u3002\u901A\u8FC7\u5728\u7CFB\u7EDF\u4E2D\u4E3A\u4E00\u4E2A\u51FD\u6570\u6216\u8868\u8FBE\u5F0F\u7247\u6BB5\u6CE8\u518C\u4E00\u4E2A\u65B0\u7684\u7B7E\u540D\uFF0C\u53EF\u4EE5\u8FBE\u5230\u63D0\u5347\u517C\u5BB9\u6027\u6216\u589E\u52A0\u4FBF\u5229\u6027\u7684\u76EE\u7684\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u522B\u540D\u51FD\u6570\u548C\u5176\u4ED6\u81EA\u5B9A\u4E49\u51FD\u6570\u4E00\u6837\uFF0C\u652F\u6301\u4E24\u4E2A\u4F5C\u7528\u57DF\uFF1A",(0,s.jsx)(n.code,{children:"LOCAL"})," \u548C ",(0,s.jsx)(n.code,{children:"GLOBAL"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LOCAL"}),"\uFF1A\u522B\u540D\u51FD\u6570\u6CE8\u518C\u5728\u5F53\u524D\u6570\u636E\u5E93\u4F5C\u7528\u57DF\u4E0B\u3002\u5982\u679C\u9700\u8981\u5728\u5176\u4ED6\u6570\u636E\u5E93\u4E0B\u4F7F\u7528\u6B64\u522B\u540D\u51FD\u6570\uFF0C\u9700\u8981\u4F7F\u7528\u5B83\u7684\u5168\u9650\u5B9A\u540D\u79F0\uFF0C\u5373 ",(0,s.jsx)(n.code,{children:"<\u6240\u5C5E\u6570\u636E\u5E93\u540D>.<\u51FD\u6570\u540D>"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GLOBAL"}),"\uFF1A\u522B\u540D\u51FD\u6570\u6CE8\u518C\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u3002\u5B83\u53EF\u4EE5\u5728\u4EFB\u610F\u6570\u636E\u5E93\u4E0B\u901A\u8FC7\u51FD\u6570\u540D\u76F4\u63A5\u8BBF\u95EE\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,s.jsx)(n.h3,{id:"\u4E3A\u51FD\u6570\u8D77\u522B\u540D",children:"\u4E3A\u51FD\u6570\u8D77\u522B\u540D"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u573A\u666F\u5E38\u89C1\u4E8E\u7CFB\u7EDF\u8FC1\u79FB\uFF0C\u5F53\u7528\u6237\u4FA7\u5B58\u5728\u5DF2\u6709\u7684\u3001\u76EE\u6807\u4E3A\u5176\u4ED6\u6570\u636E\u5E93\u7CFB\u7EDF\u7684\u67E5\u8BE2\u65F6\uFF0C\u53EF\u80FD\u5728\u67E5\u8BE2\u4E2D\u5B58\u5728\u4E00\u4E9B\u4E0E Doris \u4E2D\u67D0\u4E2A\u51FD\u6570\u529F\u80FD\u4E00\u81F4\u4F46\u540D\u79F0\u4E0D\u540C\u7684\u51FD\u6570\u3002\u8FD9\u65F6\uFF0C\u901A\u8FC7\u4E3A\u8FD9\u4E2A\u51FD\u6570\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u522B\u540D\u51FD\u6570\uFF0C\u53EF\u4EE5\u5728\u7528\u6237\u4FA7\u65E0\u611F\u7684\u60C5\u51B5\u4E0B\u5B8C\u6210\u8FC1\u79FB\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u7B80\u5316\u67E5\u8BE2\u8BED\u53E5",children:"\u7B80\u5316\u67E5\u8BE2\u8BED\u53E5"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u573A\u666F\u5E38\u89C1\u4E8E\u590D\u6742\u7684\u5206\u6790\uFF0C\u5F53\u4E66\u5199\u590D\u6742\u7684\u67E5\u8BE2\u8BED\u53E5\u65F6\uFF0C\u53EF\u80FD\u5728\u4E00\u4E2A\u8BED\u53E5\u6216\u4E0D\u540C\u8BED\u53E5\u4E2D\u5B58\u5728\u5927\u91CF\u7684\u91CD\u590D\u6027\u8868\u8FBE\u5F0F\u7247\u6BB5\u3002\u8FD9\u65F6\uFF0C\u901A\u8FC7\u4E3A\u8FD9\u4E00\u6BB5\u590D\u6742\u7684\u8868\u8FBE\u5F0F\u521B\u5EFA\u4E00\u4E2A\u522B\u540D\u51FD\u6570\uFF0C\u53EF\u4EE5\u7B80\u5316\u67E5\u8BE2\u8BED\u53E5\uFF0C\u63D0\u5347\u4E66\u5199\u4FBF\u5229\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u652F\u6301\u8303\u56F4",children:"\u652F\u6301\u8303\u56F4"}),"\n",(0,s.jsx)(n.h3,{id:"\u8868\u8FBE\u5F0F\u8981\u6C42",children:"\u8868\u8FBE\u5F0F\u8981\u6C42"}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u524D\uFF0C\u522B\u540D\u51FD\u6570\u8981\u6C42\u6307\u5411\u7684\u771F\u5B9E\u8868\u8FBE\u5F0F\u7684\u6839\u8282\u70B9\u5FC5\u987B\u4E3A\u51FD\u6570\u8868\u8FBE\u5F0F\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5408\u6CD5\u7684\u4F8B\u5B50\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A func\uFF0C\u53C2\u6570\u4E3A INT, INT \u7684\u522B\u540D\u51FD\u6570\uFF0C\u5B9E\u9645\u6307\u5411\u7684\u8868\u8FBE\u5F0F\u4E3A abs(foo + bar);\nCREATE ALIAS FUNCTION func(INT, INT) WITH PARAMETER(foo, bar) AS abs(foo + bar);\n\n-- \u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A func\uFF0C\u53C2\u6570\u4E3A DATETIMEV2(3), INT \u7684\u522B\u540D\u51FD\u6570\uFF0C\u5B9E\u9645\u6307\u5411\u7684\u8868\u8FBE\u5F0F\u4E3A date_trunc(days_sub(foo, bar), 'day')\nCREATE ALIAS FUNCTION func(DATETIMEV2(3), INT) WITH PARAMETER (foo, bar) as date_trunc(days_sub(foo, bar), 'day')\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4E0D\u5408\u6CD5\u7684\u4F8B\u5B50\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u6839\u8868\u8FBE\u5F0F\u4E0D\u662F\u51FD\u6570\nCREATE ALIAS FUNCTION func(INT, INT) WITH PARAMETER(foo, bar) AS foo + bar;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53C2\u6570\u8981\u6C42",children:"\u53C2\u6570\u8981\u6C42"}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u524D\u522B\u540D\u51FD\u6570\u4E0D\u652F\u6301\u53D8\u957F\u53C2\u6570\uFF0C\u4E14\u81F3\u5C11\u6709\u4E00\u4E2A\u53C2\u6570\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return d}});var r=i(667294);let s={},l=r.createContext(s);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);