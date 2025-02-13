"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["828705"],{878061:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>i,default:()=>o,assets:()=>c,toc:()=>u,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate-uniq","title":"ARRAY_ENUMERATE_UNIQ","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate-uniq.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate-uniq","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate-uniq","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_ENUMERATE_UNIQ","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_ENUMERATE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate"},"next":{"title":"ARRAY_POPBACK","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-popback"}}'),t=r("785893"),s=r("250065");let l={title:"ARRAY_ENUMERATE_UNIQ",language:"zh-CN"},i=void 0,c={},u=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u4E0E\u6E90\u6570\u7EC4\u5927\u5C0F\u76F8\u540C\u7684\u6570\u7EC4\uFF0C\u6307\u793A\u6BCF\u4E2A\u5143\u7D20\u5728\u5177\u6709\u76F8\u540C\u503C\u7684\u5143\u7D20\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u4F8B\u5982 array_enumerate_uniq([1, 2, 1, 4]) = [1, 1, 2, 1]\n\u8BE5\u51FD\u6570\u4E5F\u53EF\u63A5\u53D7\u591A\u4E2A\u5927\u5C0F\u76F8\u540C\u7684\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8FD4\u56DE\u7684\u662F\u6570\u7EC4\u4E2D\u76F8\u540C\u4F4D\u7F6E\u7684\u5143\u7D20\u7EC4\u6210\u7684\u5143\u7EC4\u5728\u5177\u6709\u76F8\u540C\u503C\u7684\u5143\u7EC4\u4E2D\u7684\u4F4D\u7F6E\u3002\u4F8B\u5982 array_enumerate_uniq([1, 2, 1, 1, 2], [2, 1, 2, 2, 1]) = [1, 1, 2, 3, 2]"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"ARRAY_ENUMERATE_UNIQ(<arr1> [,<arr2> , ... ])\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<arr1>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u8BA1\u7B97\u7684\u6570\u7EC4 arr1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<arr2>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u8BA1\u7B97\u7684\u6570\u7EC4 arr2"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u4E0E\u6E90\u6570\u7EC4\u5927\u5C0F\u76F8\u540C\u7684\u6570\u7EC4\uFF0C\u6307\u793A\u6BCF\u4E2A\u5143\u7D20\u5728\u5177\u6709\u76F8\u540C\u503C\u7684\u5143\u7D20\u4E2D\u7684\u4F4D\u7F6E\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select array_enumerate_uniq([1, 2, 3, 1, 2, 3]);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 2, 3, 1, 2, 3))       |\n+-----------------------------------------------------+\n| [1, 1, 1, 2, 2, 2]                                  |\n+-----------------------------------------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select array_enumerate_uniq([1, 1, 1, 1, 1], [2, 1, 2, 1, 2], [3, 1, 3, 1, 3]);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+----------------------------------------------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 1, 1, 1, 1), ARRAY(2, 1, 2, 1, 2), ARRAY(3, 1, 3, 1, 3)) |\n+----------------------------------------------------------------------------------------+\n| [1, 1, 2, 1, 3]                                                                        |\n+----------------------------------------------------------------------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);