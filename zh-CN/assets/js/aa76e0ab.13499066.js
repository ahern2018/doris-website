"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["42891"],{33655:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>c,default:()=>t,assets:()=>h,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"releasenotes/all-release","title":"\u6700\u65B0\u53D1\u5E03","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/all-release.md","sourceDirName":"releasenotes","slug":"/releasenotes/all-release","permalink":"/zh-CN/docs/dev/releasenotes/all-release","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u6700\u65B0\u53D1\u5E03","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW PROC","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/system-info-and-help/SHOW-PROC"},"next":{"title":"Release 3.0.3","permalink":"/zh-CN/docs/dev/releasenotes/v3.0/release-3.0.3"}}'),l=n("785893"),i=n("250065");let a={title:"\u6700\u65B0\u53D1\u5E03",language:"zh-CN"},c=void 0,h={},d=[];function o(e){let s={a:"a",admonition:"admonition",br:"br",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"\u672C\u6587\u5217\u51FA\u4E86\u8FD1\u4E00\u5E74\u5185\u6240\u6709\u5DF2\u53D1\u5E03\u7684 Apache Doris \u7248\u672C\uFF0C\u6309\u53D1\u5E03\u65F6\u95F4\u5012\u5E8F\u5448\u73B0\u3002"}),"\n",(0,l.jsxs)(s.admonition,{title:"\u6700\u65B0\u53D1\u5E03",type:"tip",children:[(0,l.jsxs)(s.p,{children:["\uD83C\uDF89 3.0.3 \u7248\u672C\u5DF2\u4E8E 2024 \u5E74 12 \u6708 02 \u65E5\u6B63\u5F0F\u53D1\u5E03\uFF0C\u8BE6\u60C5\u53EF\u67E5\u770B",(0,l.jsx)(s.a,{href:"../releasenotes/v3.0/release-3.0.3",children:"\u7248\u672C\u53D1\u5E03"}),"\u3002\u4ECE 3.X \u7248\u672C\u5F00\u59CB\uFF0CApache Doris \u9664\u4E86\u652F\u6301\u8BA1\u7B97\u5B58\u50A8\u4E00\u4F53\u6A21\u5F0F\u5916\uFF0C\u8FD8\u652F\u6301\u8BA1\u7B97\u5B58\u50A8\u5206\u79BB\u6A21\u5F0F\u8FDB\u884C\u96C6\u7FA4\u90E8\u7F72\u3002\u501F\u52A9\u5C06\u8BA1\u7B97\u548C\u5B58\u50A8\u5C42\u89E3\u8026\u7684\u4E91\u539F\u751F\u67B6\u6784\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u591A\u4E2A\u8BA1\u7B97\u96C6\u7FA4\u4E4B\u95F4\u5B9E\u73B0\u67E5\u8BE2\u8D1F\u8F7D\u7684\u7269\u7406\u9694\u79BB\uFF0C\u4EE5\u53CA\u8BFB\u5199\u8D1F\u8F7D\u7684\u9694\u79BB\u3002"]}),(0,l.jsx)(s.br,{}),(0,l.jsxs)(s.p,{children:["\uD83C\uDF89 2.1.8 \u7248\u672C\u73B0\u5DF2\u4E8E 2025 \u5E74 01 \u6708 24 \u65E5\u6B63\u5F0F\u53D1\u5E03\uFF0C\u8BE6\u60C5\u53EF\u67E5\u770B",(0,l.jsx)(s.a,{href:"../releasenotes/v2.1/release-2.1.8",children:"\u7248\u672C\u53D1\u5E03"}),"\u3002\u5B50\u67E5\u8BE2\u6027\u80FD\u65B9\u9762 2.1 \u7248\u672C\u5F00\u7BB1\u5373\u7528\u67E5\u8BE2\u7684\u6027\u80FD\u63D0\u9AD8\u4E86 100%\uFF1B\u5728\u6570\u636E\u6E56\u5206\u6790\u573A\u666F\u65B9\u9762\uFF0C\u76F8\u5BF9\u4E8E Trino \u548C Spark \u5206\u522B\u6709 4-6 \u500D\u6027\u80FD\u63D0\u5347\uFF1B\u5728\u534A\u7ED3\u6784\u5316\u6570\u636E\u5206\u6790\u573A\u666F\u4E2D\u63D0\u4F9B\u4E86\u5F3A\u6709\u529B\u7684\u652F\u6301\uFF0C\u5305\u62EC\u65B0\u7684 Variant \u7C7B\u578B\u548C\u4E00\u7CFB\u5217\u5206\u6790\u51FD\u6570\u3002\u6B64\u5916\uFF0C2.1 \u7248\u672C\u8D77\u652F\u6301\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u4EE5\u52A0\u901F\u67E5\u8BE2\uFF0C\u4F18\u5316\u4E86\u5927\u89C4\u6A21\u5B9E\u65F6\u5199\u5165\uFF0C\u5E76\u901A\u8FC7\u7A33\u5B9A\u6027\u548C\u8FD0\u884C\u65F6 SQL \u8D44\u6E90\u8DDF\u8E2A\u6539\u8FDB\u4E86\u5DE5\u4F5C\u8D1F\u8F7D\u7BA1\u7406\u3002"]})]}),"\n",(0,l.jsx)(s.br,{}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.8",children:"2025-01-24, Apache Doris 2.1.8 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v3.0/release-3.0.3",children:"2024-12-02, Apache Doris 3.0.3 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.7",children:"2024-11-10, Apache Doris 2.1.7 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v3.0/release-3.0.2",children:"2024-10-15, Apache Doris 3.0.2 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.15",children:"2024-09-30, Apache Doris 2.0.15 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.6",children:"2024-09-10, Apache Doris 2.1.6 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v3.0/release-3.0.1",children:"2024-08-23, Apache Doris 3.0.1 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.5",children:"2024-07-24, Apache Doris 2.1.5 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.13",children:"2024-07-17, Apache Doris 2.0.13 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.12",children:"2024-06-27, Apache Doris 2.0.12 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.4",children:"2024-06-26, Apache Doris 2.1.4 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.11",children:"2024-06-05, Apache Doris 2.0.11 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.3",children:"2024-05-21, Apache Doris 2.1.3 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.10",children:"2024-05-16, Apache Doris 2.0.10 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.9",children:"2024-04-23, Apache Doris 2.0.9 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.2",children:"2024-04-12, Apache Doris 2.1.2 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.8",children:"2024-04-09, Apache Doris 2.0.8 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.1",children:"2024-04-03, Apache Doris 2.1.1 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.7",children:"2024-03-26, Apache Doris 2.0.7 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.0",children:"2024-03-12, Apache Doris 2.1.0 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.6",children:"2024-03-11, Apache Doris 2.0.6 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.5",children:"2024-02-28, Apache Doris 2.0.5 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.4",children:"2024-01-26, Apache Doris 2.0.4 \u7248\u672C\u53D1\u5E03"})}),"\n"]}),"\n"]})]})}function t(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return a}});var r=n(667294);let l={},i=r.createContext(l);function a(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);