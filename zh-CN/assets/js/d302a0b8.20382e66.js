"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["33171"],{213792:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/function/SHOW-FUNCTIONS","title":"SHOW FUNCTIONS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/function/SHOW-FUNCTIONS.md","sourceDirName":"sql-manual/sql-statements/function","slug":"/sql-manual/sql-statements/function/SHOW-FUNCTIONS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/function/SHOW-FUNCTIONS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW FUNCTIONS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DESC FUNCTION","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/function/DESC-FUNCTION"},"next":{"title":"ANALYZE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/statistics/ANALYZE"}}'),i=t("785893"),l=t("250065");let r={title:"SHOW FUNCTIONS",language:"zh-CN"},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53D8\u79CD\u8BED\u6CD5",id:"\u53D8\u79CD\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7684\u81EA\u5B9A\u4E49\u4E0E\u7CFB\u7EDF\u63D0\u4F9B\u7684\u51FD\u6570\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW [ FULL ] [ BUILTIN ] FUNCTIONS [ { IN | FROM } <db> ]  [ LIKE '<function_pattern>' ]\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53D8\u79CD\u8BED\u6CD5",children:"\u53D8\u79CD\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW GLOBAL [ FULL ] FUNCTIONS [ LIKE '<function_pattern>' ]\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["1. ",(0,i.jsx)(e.code,{children:"<function_pattern>"})]})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u7528\u6765\u8FC7\u6EE4\u51FD\u6570\u540D\u79F0\u7684\u5339\u914D\u6A21\u5F0F\u89C4\u5219"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["1. ",(0,i.jsx)(e.code,{children:"FULL"})]})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"FULL \u4E3A\u9009\u586B\u9879"}),"\n",(0,i.jsx)(e.p,{children:"\u82E5\u586B\u5199\u8868\u793A\u663E\u793A\u51FD\u6570\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["2. ",(0,i.jsx)(e.code,{children:"BUILTIN"})]})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"BUILTIN \u4E3A\u9009\u586B\u9879"}),"\n",(0,i.jsx)(e.p,{children:"\u82E5\u586B\u5199\u8868\u793A\u9700\u8981\u663E\u793A\u7CFB\u7EDF\u63D0\u4F9B\u7684\u51FD\u6570"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["3. ",(0,i.jsx)(e.code,{children:"<db>"})]})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"db \u4E3A\u9009\u586B\u9879"}),"\n",(0,i.jsx)(e.p,{children:"\u82E5\u586B\u5199\u8868\u793A\u5728\u6307\u5B9A\u7684\u6570\u636E\u5E93\u4E0B\u67E5\u8BE2"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5217\u540D"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Signature"}),(0,i.jsx)(e.td,{children:"\u51FD\u6570\u540D\u4E0E\u53C2\u6570\u7C7B\u578B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Return Type"}),(0,i.jsx)(e.td,{children:"\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u6570\u636E\u7C7B\u578B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Function Type"}),(0,i.jsx)(e.td,{children:"\u51FD\u6570\u7684\u7C7B\u578B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Intermediate Type"}),(0,i.jsx)(e.td,{children:"\u4E2D\u95F4\u7ED3\u679C\u7C7B\u578B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Properties"}),(0,i.jsx)(e.td,{children:"\u51FD\u6570\u7684\u8BE6\u7EC6\u5C5E\u6027"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"SHOW_PRIV"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u51FD\u6570"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u8BE5\u51FD\u6570\u6709 show \u6743\u9650"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"show full functions in testDb\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:'*************************** 1. row ***************************\nSignature: my_add(INT,INT)\nReturn Type: INT\nFunction Type: Scalar\nIntermediate Type: NULL\nProperties: {"symbol":"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_","object_file":"http://host:port/libudfsample.so","md5":"cfe7a362d10f3aaf6c49974ee0f1f878"}\n*************************** 2. row ***************************\nSignature: my_count(BIGINT)\nReturn Type: BIGINT\nFunction Type: Aggregate\nIntermediate Type: NULL\nProperties: {"object_file":"http://host:port/libudasample.so","finalize_fn":"_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE","init_fn":"_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE","merge_fn":"_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_","md5":"37d185f80f95569e2676da3d5b5b9d2f","update_fn":"_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE"}\n*************************** 3. row ***************************\nSignature: id_masking(BIGINT)\nReturn Type: VARCHAR\nFunction Type: Alias\nIntermediate Type: NULL\nProperties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"show builtin functions in testDb like 'year%';\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------+\n| Function Name |\n+---------------+\n| year          |\n| years_add     |\n| years_diff    |\n| years_sub     |\n+---------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"show global full functions\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:'*************************** 1. row ***************************\n        Signature: decimal(ALL, INT, INT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"col, precision, scale","origin_function":"CAST(`col` AS decimal(`precision`, `scale`))"}\n*************************** 2. row ***************************\n        Signature: id_masking(BIGINT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"show global functions\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------+\n| Function Name |\n+---------------+\n| decimal       |\n| id_masking    |\n+---------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);