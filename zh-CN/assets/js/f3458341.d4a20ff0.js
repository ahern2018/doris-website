"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["889277"],{93394:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>c});var i=JSON.parse('{"id":"admin-manual/open-api/overview","title":"\u603B\u89C8","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/overview.md","sourceDirName":"admin-manual/open-api","slug":"/admin-manual/open-api/overview","permalink":"/zh-CN/docs/dev/admin-manual/open-api/overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u603B\u89C8","language":"zh-CN"}}'),d=t("785893"),r=t("250065");let c={title:"\u603B\u89C8",language:"zh-CN"},s=void 0,l={},o=[{value:"\u5B89\u5168\u8BA4\u8BC1",id:"\u5B89\u5168\u8BA4\u8BC1",level:2}];function a(n){let e={admonition:"admonition",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"OPEN API \u4F5C\u4E3A Apache Doris \u8FD0\u7EF4\u7BA1\u7406\u64CD\u4F5C\u7684\u8865\u5145\uFF0C\u4E3B\u8981\u7528\u4E8E\u6570\u636E\u5E93\u7BA1\u7406\u4EBA\u5458\u8FDB\u884C\u4E00\u4E9B\u7BA1\u7406\u64CD\u4F5C\u3002"}),"\n",(0,d.jsx)(e.admonition,{type:"note",children:(0,d.jsx)(e.p,{children:"OPEN API \u76EE\u524D\u90FD\u662F unstable \u7684\uFF0C\u4EC5\u5EFA\u8BAE\u5F00\u53D1\u4EBA\u5458\u6D4B\u8BD5\u548C\u4F7F\u7528\u3002\u6211\u4EEC\u53EF\u80FD\u4F1A\u5728\u540E\u7EED\u7248\u672C\u5BF9\u63A5\u53E3\u884C\u4E3A\u8FDB\u884C\u53D8\u66F4\u3002\n\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u5EFA\u8BAE\u4F7F\u7528 SQL \u547D\u4EE4\u5B8C\u6210\u64CD\u4F5C\u3002"})}),"\n",(0,d.jsx)(e.h2,{id:"\u5B89\u5168\u8BA4\u8BC1",children:"\u5B89\u5168\u8BA4\u8BC1"}),"\n",(0,d.jsx)(e.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F00\u542F FE BE API \u7684\u5B89\u5168\u8BA4\u8BC1\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u914D\u7F6E\u540D\u79F0"}),(0,d.jsx)(e.th,{children:"\u914D\u7F6E\u6587\u4EF6"}),(0,d.jsx)(e.th,{children:"\u9ED8\u8BA4\u503C"}),(0,d.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"enable_all_http_auth"})}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"be.conf"})}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"false"})}),(0,d.jsx)(e.td,{children:"\u5F00\u542F BE HTTP \u7AEF\u53E3\uFF08\u9ED8\u8BA4 8040\uFF09\u7684\u8BA4\u8BC1\u3002\u5F00\u542F\u540E\uFF0C\u8BBF\u95EE BE \u7684 HTTP API \u9700\u8981 ADMIN \u7528\u6237\u767B\u5F55\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"enable_brpc_builtin_services"})}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"be.conf"})}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"true"})}),(0,d.jsx)(e.td,{children:"\u662F\u5426\u5BF9\u5916\u5F00\u542F brpc \u5185\u7F6E\u670D\u52A1\uFF08\u9ED8\u8BA4 8060\uFF09\u3002\u5173\u95ED\u540E\uFF0C\u5C06\u4E0D\u80FD\u8BBF\u95EE HTTP \u534F\u8BAE\u7684 8060 \u7AEF\u53E3\u3002\uFF08\u81EA 2.1.7 \u7248\u672C\u652F\u6301\uFF09"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"enable_all_http_auth"})}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"fe.conf"})}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"false"})}),(0,d.jsx)(e.td,{children:"\u5F00\u542F FE HTTP \u7AEF\u53E3\uFF08\u9ED8\u8BA4 8030\uFF09\u7684\u8BA4\u8BC1\u3002\u5F00\u542F\u540E\uFF0C\u8BBF\u95EE FE \u7684 HTTP API \u9700\u8981\u5BF9\u5E94\u7684\u7528\u6237\u6743\u9650\u3002"})]})]})]}),"\n",(0,d.jsx)(e.admonition,{title:"NOTE",type:"info",children:(0,d.jsx)(e.p,{children:"FE \u548C BE \u7684 HTTP API \u7684\u6743\u9650\u8981\u6C42\uFF0C\u5404\u4E2A\u7248\u672C\u4E0D\u5C3D\u76F8\u540C\uFF0C\u5177\u4F53\u8BF7\u53C2\u9605\u5BF9\u5E94\u7684 API \u6587\u6863\u3002"})})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return c}});var i=t(667294);let d={},r=i.createContext(d);function c(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);