"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["810131"],{626109:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitwise-functions/bit-length","title":"BIT_LENGTH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bit-length.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitwise-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitwise-functions/bit-length","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bit-length","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BIT_LENGTH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITAND","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitand"},"next":{"title":"BITOR","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitwise-functions/bitor"}}'),i=t("785893"),l=t("250065");let c={title:"BIT_LENGTH",language:"zh-CN"},r=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4E8E\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684 \u4E8C\u8FDB\u5236\u8868\u793A \u4E2D \u4F4D\u6570\uFF08\u5373\u603B\u7684\u4E8C\u8FDB\u5236\u4F4D\u6570\uFF09\u3002\u5B83\u8BA1\u7B97\u7684\u662F\u5B57\u7B26\u4E32\u7684\u4E8C\u8FDB\u5236\u7F16\u7801\u6240\u5360\u7684\u4F4D\u6570\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"BIT_LENGTH( <str>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<str>"})}),(0,i.jsx)(e.td,{children:"\u9700\u8BA1\u7B97\u7684\u5B57\u7B26\u4E32"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD4\u56DE ",(0,i.jsx)(e.code,{children:"<str>"})," \u7684\u4E8C\u8FDB\u5236\u8868\u793A\u4E2D\u6240\u5360\u7528\u7684\u4F4D\u6570\uFF0C\u5305\u62EC\u6240\u6709\u7684 0 \u548C 1\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'select BIT_LENGTH("abc"), BIT_LENGTH("\u4E2D\u56FD"), BIT_LENGTH(123);\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------------------+----------------------+-----------------------------------------+\n| bit_length('abc') | bit_length('\u4E2D\u56FD')   | bit_length(cast(123 as VARCHAR(65533))) |\n+-------------------+----------------------+-----------------------------------------+\n|                24 |                   48 |                                      24 |\n+-------------------+----------------------+-----------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return c}});var s=t(667294);let i={},l=s.createContext(i);function c(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);