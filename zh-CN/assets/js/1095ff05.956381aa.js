"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["83243"],{578773:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>o,assets:()=>c,toc:()=>h,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/function/SHOW-CREATE-FUNCTION","title":"SHOW CREATE FUNCTION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/function/SHOW-CREATE-FUNCTION.md","sourceDirName":"sql-manual/sql-statements/function","slug":"/sql-manual/sql-statements/function/SHOW-CREATE-FUNCTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/function/SHOW-CREATE-FUNCTION","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW CREATE FUNCTION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP FUNCTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/function/DROP-FUNCTION"},"next":{"title":"DESC FUNCTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/function/DESC-FUNCTION"}}'),l=t("785893"),d=t("250065");let r={title:"SHOW CREATE FUNCTION",language:"zh-CN"},i=void 0,c={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function a(n){let e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u7528\u6237\u81EA\u5B9A\u4E49\u51FD\u6570\u7684\u521B\u5EFA\u8BED\u53E5"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW CREATE [ GLOBAL ] FUNCTION <function_name>( <arg_type> ) [ FROM <db_name> ];\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["1. ",(0,l.jsx)(e.code,{children:"<function_name>"})]})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u9700\u8981\u67E5\u8BE2\u521B\u5EFA\u8BED\u53E5\u7684\u81EA\u5B9A\u4E49\u51FD\u6570\u7684\u540D\u79F0\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["2. ",(0,l.jsx)(e.code,{children:"<arg_type>"})]})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u9700\u8981\u67E5\u8BE2\u521B\u5EFA\u8BED\u53E5\u7684\u81EA\u5B9A\u4E49\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u53C2\u6570\u5217\u8868\u5BF9\u5E94\u4F4D\u7F6E\u9700\u8981\u586B\u5199\u5BF9\u5E94\u4F4D\u7F6E\u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["1.",(0,l.jsx)(e.code,{children:"GLOBAL"})]})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"GLOBAL \u4E3A\u9009\u586B\u9879"}),"\n",(0,l.jsx)(e.p,{children:"\u82E5\u586B\u5199 GLOBAL \u5219\u4E3A\u5168\u5C40\u641C\u7D22\u8BE5\u51FD\u6570"}),"\n",(0,l.jsx)(e.p,{children:"\u82E5\u4E0D\u586B\u5199 GLOABL \u5219\u53EA\u5728\u5F53\u524D\u6570\u636E\u5E93\u4E0B\u641C\u7D22\u8BE5\u51FD\u6570"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["2.",(0,l.jsx)(e.code,{children:"<db_name>"})]})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"FROM db_name \u8868\u793A\u4ECE\u6307\u5B9A\u7684\u6570\u636E\u5E93\u4E2D\u67E5\u8BE2\u8BE5\u81EA\u5B9A\u4E49\u51FD\u6570"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5217\u540D"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"SYMBOL"}),(0,l.jsx)(e.td,{children:"\u51FD\u6570\u5305\u540D"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"FILE"}),(0,l.jsx)(e.td,{children:"jar \u5305\u8DEF\u5F84"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ALWAYS_NULLABLE"}),(0,l.jsx)(e.td,{children:"\u7ED3\u679C\u662F\u5426\u53EF\u4EE5\u4E3A NULL"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"TYPE"}),(0,l.jsx)(e.td,{children:"\u51FD\u6570\u7C7B\u578B"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"SHOW_PRIV"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u51FD\u6570"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u8BE5\u51FD\u6570\u6709 show \u6743\u9650"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW CREATE FUNCTION add_one(INT)\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'| Function Signature | Create Function\n+--------------------+-------------------------------------------------------\n| add_one(INT)       | CREATE FUNCTION add_one(INT) RETURNS INT PROPERTIES (\n  "SYMBOL"="org.apache.doris.udf.AddOne",\n  "FILE"="file:///xxx.jar",\n  "ALWAYS_NULLABLE"="true",\n  "TYPE"="JAVA_UDF"\n  ); |\n+--------------------+-------------------------------------------------------\n'})})]})}function o(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return r}});var s=t(667294);let l={},d=s.createContext(l);function r(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);