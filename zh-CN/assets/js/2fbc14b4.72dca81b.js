"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["675461"],{437137:function(n,s,e){e.r(s),e.d(s,{metadata:()=>l,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>r,frontMatter:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/json-functions/json-valid","title":"JSON_VALID","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-valid.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/json-functions","slug":"/sql-manual/sql-functions/scalar-functions/json-functions/json-valid","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-valid","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"JSON_VALID","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_UNQUOTE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-unquote"},"next":{"title":"JSON_CONTAINS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/json-functions/json-contains"}}'),t=e("785893"),i=e("250065");let c={title:"JSON_VALID",language:"zh-CN"},o=void 0,a={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let s={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(s.p,{children:"JSON_VALID \u51FD\u6570\u8FD4\u56DE0\u62161\u4EE5\u8868\u660E\u662F\u5426\u4E3A\u6709\u6548\u7684JSON, \u5982\u679C\u53C2\u6570\u662FNULL\u5219\u8FD4\u56DENULL\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"JSON_VALID( <str> )\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u53C2\u6570"}),(0,t.jsx)(s.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<str>"})}),(0,t.jsx)(s.td,{children:"\u9700\u8981\u89E3\u6790\u7684 JSON \u683C\u5F0F\u7684\u8F93\u5165\u5B57\u7B26\u4E32\u3002"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"JSONB_VALID"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"\u6B63\u5E38JSON\u5B57\u7B26\u4E32"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'SELECT json_valid(\'{"k1":"v31","k2":300}\');\n+-------------------------------------+\n| json_valid(\'{"k1":"v31","k2":300}\') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n1 row in set (0.02 sec)\n'})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"\u65E0\u6548\u7684JSON\u5B57\u7B26\u4E32"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT json_valid('invalid json');\n+----------------------------+\n| json_valid('invalid json') |\n+----------------------------+\n|                          0 |\n+----------------------------+\n\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"NULL\u53C2\u6570"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT json_valid(NULL);\n+------------------+\n| json_valid(NULL) |\n+------------------+\n|             NULL |\n+------------------+\n\n"})})]})}function u(n={}){let{wrapper:s}={...(0,i.a)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,s,e){e.d(s,{Z:function(){return o},a:function(){return c}});var l=e(667294);let t={},i=l.createContext(t);function c(n){let s=l.useContext(i);return l.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),l.createElement(i.Provider,{value:s},n.children)}}}]);