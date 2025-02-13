"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["529689"],{278042:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>o,assets:()=>i,toc:()=>m,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-GROUP","title":"CREATE WORKLOAD GROUP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-GROUP.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-GROUP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-GROUP","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE WORKLOAD GROUP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW RESOURCES","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/SHOW-RESOURCES"},"next":{"title":"ALTER WORKLOAD GROUP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/ALTER-WORKLOAD-GROUP"}}'),r=t("785893"),l=t("250065");let c={title:"CREATE WORKLOAD GROUP",language:"zh-CN"},a=void 0,i={},m=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u521B\u5EFA\u8D44\u6E90\u7EC4\u3002\u8D44\u6E90\u7EC4\u53EF\u5B9E\u73B0\u5355\u4E2A be \u4E0A cpu \u8D44\u6E90\u548C\u5185\u5B58\u8D44\u6E90\u7684\u9694\u79BB\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE WORKLOAD GROUP [IF NOT EXISTS] "<rg_name>"\nPROPERTIES (\n    `<property>`\n    [ , ... ]\n);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,r.jsxs)(n.p,{children:["1.",(0,r.jsx)(n.code,{children:"<property>"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<property>"})," \u683C\u5F0F\u4E3A ",(0,r.jsx)(n.code,{children:"<key>"})," = ",(0,r.jsx)(n.code,{children:"<value>"}),"\uFF0C",(0,r.jsx)(n.code,{children:"<key>"}),"\u7684\u5177\u4F53\u53EF\u9009\u503C\u5982\u4E0B\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,r.jsx)(n.th,{children:"\u662F\u5426\u5FC5\u586B"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<cpu_share>"})}),(0,r.jsx)(n.td,{children:"\u7528\u4E8E\u8BBE\u7F6E\u8D44\u6E90\u7EC4\u83B7\u53D6 cpu \u65F6\u95F4\u7684\u591A\u5C11\uFF0C\u53EF\u4EE5\u5B9E\u73B0 cpu \u8D44\u6E90\u8F6F\u9694\u79BB\u3002cpu_share \u662F\u76F8\u5BF9\u503C\uFF0C\u8868\u793A\u6B63\u5728\u8FD0\u884C\u7684\u8D44\u6E90\u7EC4\u53EF\u83B7\u53D6 cpu \u8D44\u6E90\u7684\u6743\u91CD\u3002\u4F8B\u5982\uFF0C\u7528\u6237\u521B\u5EFA\u4E86 3 \u4E2A\u8D44\u6E90\u7EC4 rg-a\u3001rg-b \u548C rg-c\uFF0Ccpu_share \u5206\u522B\u4E3A 10\u300130\u300140\uFF0C\u67D0\u4E00\u65F6\u523B rg-a \u548C rg-b \u6B63\u5728\u8DD1\u4EFB\u52A1\uFF0C\u800C rg-c \u6CA1\u6709\u4EFB\u52A1\uFF0C\u6B64\u65F6 rg-a \u53EF\u83B7\u5F97 (10 / (10 + 30)) = 25% \u7684 cpu \u8D44\u6E90\uFF0C\u800C\u8D44\u6E90\u7EC4 rg-b \u53EF\u83B7\u5F97 75% \u7684 cpu \u8D44\u6E90\u3002\u5982\u679C\u7CFB\u7EDF\u53EA\u6709\u4E00\u4E2A\u8D44\u6E90\u7EC4\u6B63\u5728\u8FD0\u884C\uFF0C\u5219\u4E0D\u7BA1\u5176 cpu_share \u7684\u503C\u4E3A\u591A\u5C11\uFF0C\u5B83\u90FD\u53EF\u4EE5\u83B7\u53D6\u5168\u90E8\u7684 cpu \u8D44\u6E90\u3002"}),(0,r.jsx)(n.td,{children:"\u662F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<memory_limit>"})}),(0,r.jsxs)(n.td,{children:["\u7528\u4E8E\u8BBE\u7F6E\u8D44\u6E90\u7EC4\u53EF\u4EE5\u4F7F\u7528 be \u5185\u5B58\u7684\u767E\u5206\u6BD4\u3002\u8D44\u6E90\u7EC4\u5185\u5B58\u9650\u5236\u7684\u7EDD\u5BF9\u503C\u4E3A\uFF1A",(0,r.jsx)(n.code,{children:"\u7269\u7406\u5185\u5B58 * mem_limit * memory_limit"}),"\uFF0C\u5176\u4E2D mem_limit \u4E3A be \u914D\u7F6E\u9879\u3002\u7CFB\u7EDF\u6240\u6709\u8D44\u6E90\u7EC4\u7684 memory_limit \u603B\u5408\u4E0D\u53EF\u8D85\u8FC7 100%\u3002\u8D44\u6E90\u7EC4\u5728\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4FDD\u8BC1\u7EC4\u5185\u4EFB\u52A1\u53EF\u4F7F\u7528 memory_limit \u7684\u5185\u5B58\uFF0C\u5F53\u8D44\u6E90\u7EC4\u5185\u5B58\u4F7F\u7528\u8D85\u51FA\u8BE5\u9650\u5236\u540E\uFF0C\u7EC4\u5185\u5185\u5B58\u5360\u7528\u8F83\u5927\u7684\u4EFB\u52A1\u53EF\u80FD\u4F1A\u88AB cancel \u4EE5\u91CA\u653E\u8D85\u51FA\u7684\u5185\u5B58\uFF0C\u53C2\u8003 enable_memory_overcommit\u3002"]}),(0,r.jsx)(n.td,{children:"\u662F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<enable_memory_overcommit>"})}),(0,r.jsx)(n.td,{children:"\u7528\u4E8E\u5F00\u542F\u8D44\u6E90\u7EC4\u5185\u5B58\u8F6F\u9694\u79BB\uFF0C\u9ED8\u8BA4\u4E3A false\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A false\uFF0C\u5219\u8BE5\u8D44\u6E90\u7EC4\u4E3A\u5185\u5B58\u786C\u9694\u79BB\uFF0C\u7CFB\u7EDF\u68C0\u6D4B\u5230\u8D44\u6E90\u7EC4\u5185\u5B58\u4F7F\u7528\u8D85\u51FA\u9650\u5236\u540E\u5C06\u7ACB\u5373 cancel \u7EC4\u5185\u5185\u5B58\u5360\u7528\u6700\u5927\u7684\u82E5\u5E72\u4E2A\u4EFB\u52A1\uFF0C\u4EE5\u91CA\u653E\u8D85\u51FA\u7684\u5185\u5B58\uFF1B\u5982\u679C\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u8BE5\u8D44\u6E90\u7EC4\u4E3A\u5185\u5B58\u8F6F\u9694\u79BB\uFF0C\u5982\u679C\u7CFB\u7EDF\u6709\u7A7A\u95F2\u5185\u5B58\u8D44\u6E90\u5219\u8BE5\u8D44\u6E90\u7EC4\u5728\u8D85\u51FA memory_limit \u7684\u9650\u5236\u540E\u53EF\u7EE7\u7EED\u4F7F\u7528\u7CFB\u7EDF\u5185\u5B58\uFF0C\u5728\u7CFB\u7EDF\u603B\u5185\u5B58\u7D27\u5F20\u65F6\u4F1A cancel \u7EC4\u5185\u5185\u5B58\u5360\u7528\u6700\u5927\u7684\u82E5\u5E72\u4E2A\u4EFB\u52A1\uFF0C\u91CA\u653E\u90E8\u5206\u8D85\u51FA\u7684\u5185\u5B58\u4EE5\u7F13\u89E3\u7CFB\u7EDF\u5185\u5B58\u538B\u529B\u3002\u5EFA\u8BAE\u5728\u6709\u8D44\u6E90\u7EC4\u5F00\u542F\u8BE5\u914D\u7F6E\u65F6\uFF0C\u6240\u6709\u8D44\u6E90\u7EC4\u7684 memory_limit \u603B\u548C\u4F4E\u4E8E 100%\uFF0C\u5269\u4F59\u90E8\u5206\u7528\u4E8E\u8D44\u6E90\u7EC4\u5185\u5B58\u8D85\u53D1\u3002"}),(0,r.jsx)(n.td,{children:"\u5426"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA\u540D\u4E3A g1 \u7684\u8D44\u6E90\u7EC4\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:' create workload group if not exists g1\n properties (\n     "cpu_share"="10",\n     "memory_limit"="30%",\n     "enable_memory_overcommit"="true"\n );\n'})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var s=t(667294);let r={},l=s.createContext(r);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);