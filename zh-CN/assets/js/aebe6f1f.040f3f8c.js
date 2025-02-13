"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["808667"],{586947:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SHOW-EXPORT","title":"SHOW EXPORT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/data-modification/load-and-export/SHOW-EXPORT.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SHOW-EXPORT","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/SHOW-EXPORT","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW EXPORT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CANCEL EXPORT","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-EXPORT"},"next":{"title":"OUTFILE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/OUTFILE"}}'),l=s("785893"),d=s("250065");let r={title:"SHOW EXPORT",language:"zh-CN"},i=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function x(n){let e={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u6307\u5B9A\u7684\u5BFC\u51FA\u4EFB\u52A1\u7684\u6267\u884C\u60C5\u51B5"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'SHOW EXPORT\n[ FROM <db_name> ]\n  [\n    WHERE\n      [ ID = <job_id> ]\n      [ STATE = { "PENDING" | "EXPORTING" | "FINISHED" | "CANCELLED" } ]\n      [ LABEL = <label> ]\n   ]\n[ ORDER BY <column_name> [ ASC | DESC ] [, column_name [ ASC | DESC ] ... ] ]\n[ LIMIT <limit> ];\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.strong,{children:["1. ",(0,l.jsx)(e.code,{children:"<db_name>"})]}),"\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u4F7F\u7528\u5F53\u524D\u9ED8\u8BA4\u6570\u636E\u5E93\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.strong,{children:["2. ",(0,l.jsx)(e.code,{children:"<job_id>"})]}),"\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u8981\u5C55\u793A\u7684\u5BFC\u51FA\u4F5C\u4E1A ID\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.strong,{children:["3. ",(0,l.jsx)(e.code,{children:"<label>"})]}),"\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u8981\u5C55\u793A\u7684\u5BFC\u51FA\u4F5C\u4E1A\u7684\u6807\u7B7E\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.strong,{children:["4. ",(0,l.jsx)(e.code,{children:"<column_name>"})]}),"\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u6392\u5E8F\u7684\u5217\u540D\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.strong,{children:["5. ",(0,l.jsx)(e.code,{children:"<limit>"})]}),"\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u8BE5\u53C2\u6570\uFF0C\u5219\u4EC5\u663E\u793A\u6307\u5B9A\u6761\u6570\u7684\u5339\u914D\u8BB0\u5F55\uFF1B\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u663E\u793A\u5168\u90E8\u8BB0\u5F55\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5217\u540D"}),(0,l.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"JobId"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u4F5C\u4E1A\u7684\u552F\u4E00 ID"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Label"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u8BE5\u5BFC\u51FA\u4F5C\u4E1A\u7684\u6807\u7B7E\uFF0C\u5982\u679C Export \u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u7CFB\u7EDF\u4F1A\u9ED8\u8BA4\u751F\u6210\u4E00\u4E2A\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"State"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsxs)(e.td,{children:["\u4F5C\u4E1A\u72B6\u6001\uFF1A",(0,l.jsx)(e.br,{})," - ",(0,l.jsx)(e.code,{children:"PENDING"}),"\uFF1A\u4F5C\u4E1A\u5F85\u8C03\u5EA6",(0,l.jsx)(e.br,{})," - ",(0,l.jsx)(e.code,{children:"EXPORTING"}),"\uFF1A\u6570\u636E\u5BFC\u51FA\u4E2D",(0,l.jsx)(e.br,{})," - ",(0,l.jsx)(e.code,{children:"FINISHED"}),"\uFF1A\u4F5C\u4E1A\u6210\u529F",(0,l.jsx)(e.br,{})," - ",(0,l.jsx)(e.code,{children:"CANCELLED"}),"\uFF1A\u4F5C\u4E1A\u5931\u8D25"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Progress"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u4F5C\u4E1A\u8FDB\u5EA6\u3002\u8BE5\u8FDB\u5EA6\u4EE5\u67E5\u8BE2\u8BA1\u5212\u4E3A\u5355\u4F4D\u3002\u5047\u8BBE\u4E00\u5171 10 \u4E2A\u7EBF\u7A0B\uFF0C\u5F53\u524D\u5DF2\u5B8C\u6210 3 \u4E2A\uFF0C\u5219\u8FDB\u5EA6\u4E3A 30%\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"TaskInfo"}),(0,l.jsx)(e.td,{children:"json"}),(0,l.jsxs)(e.td,{children:["\u4EE5 Json \u683C\u5F0F\u5C55\u793A\u7684\u4F5C\u4E1A\u4FE1\u606F\uFF1A",(0,l.jsx)(e.br,{})," - db\uFF1A\u6570\u636E\u5E93\u540D",(0,l.jsx)(e.br,{})," - tbl\uFF1A\u8868\u540D",(0,l.jsx)(e.br,{})," - partitions\uFF1A\u6307\u5B9A\u5BFC\u51FA\u7684\u5206\u533A\uFF0C",(0,l.jsx)(e.code,{children:"\u7A7A"})," \u5217\u8868\u8868\u793A\u6240\u6709\u5206\u533A",(0,l.jsx)(e.br,{})," - column_separator\uFF1A\u5BFC\u51FA\u6587\u4EF6\u7684\u5217\u5206\u9694\u7B26",(0,l.jsx)(e.br,{})," - line_delimiter\uFF1A\u5BFC\u51FA\u6587\u4EF6\u7684\u884C\u5206\u9694\u7B26",(0,l.jsx)(e.br,{})," - tablet num\uFF1A\u6D89\u53CA\u7684\u603B Tablet \u6570\u91CF",(0,l.jsx)(e.br,{})," - broker\uFF1A\u4F7F\u7528\u7684 broker \u7684\u540D\u79F0",(0,l.jsx)(e.br,{})," - coord num\uFF1A\u67E5\u8BE2\u8BA1\u5212\u7684\u4E2A\u6570",(0,l.jsx)(e.br,{})," - max_file_size\uFF1A\u4E00\u4E2A\u5BFC\u51FA\u6587\u4EF6\u7684\u6700\u5927\u5927\u5C0F",(0,l.jsx)(e.br,{})," - delete_existing_files\uFF1A\u662F\u5426\u5220\u9664\u5BFC\u51FA\u76EE\u5F55\u4E0B\u5DF2\u5B58\u5728\u7684\u6587\u4EF6\u53CA\u76EE\u5F55",(0,l.jsx)(e.br,{})," - columns\uFF1A\u6307\u5B9A\u9700\u8981\u5BFC\u51FA\u7684\u5217\u540D\uFF0C\u7A7A\u503C\u4EE3\u8868\u5BFC\u51FA\u6240\u6709\u5217",(0,l.jsx)(e.br,{})," - format\uFF1A\u5BFC\u51FA\u7684\u6587\u4EF6\u683C\u5F0F"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Path"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u8FDC\u7AEF\u5B58\u50A8\u4E0A\u7684\u5BFC\u51FA\u8DEF\u5F84"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"CreateTime"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u4F5C\u4E1A\u7684\u521B\u5EFA\u65F6\u95F4"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"StartTime"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u4F5C\u4E1A\u5F00\u59CB\u8C03\u5EA6\u65F6\u95F4"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"FinishTime"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u4F5C\u4E1A\u7ED3\u675F\u65F6\u95F4"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Timeout"}),(0,l.jsx)(e.td,{children:"int"}),(0,l.jsx)(e.td,{children:"\u4F5C\u4E1A\u8D85\u65F6\u65F6\u95F4\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09\u3002\u8BE5\u65F6\u95F4\u4ECE CreateTime \u5F00\u59CB\u8BA1\u7B97\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ErrorMsg"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsx)(e.td,{children:"\u5982\u679C\u4F5C\u4E1A\u51FA\u73B0\u9519\u8BEF\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A\u9519\u8BEF\u539F\u56E0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"OutfileInfo"}),(0,l.jsx)(e.td,{children:"string"}),(0,l.jsxs)(e.td,{children:["\u5982\u679C\u4F5C\u4E1A\u5BFC\u51FA\u6210\u529F\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A\u5177\u4F53\u7684 ",(0,l.jsx)(e.code,{children:"SELECT INTO OUTFILE"})," \u7ED3\u679C\u4FE1\u606F"]})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"SELECT_PRIV"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5E93\uFF08Database\uFF09"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u6570\u636E\u5E93\u3001\u8868\u7684\u8BFB\u6743\u9650\u3002"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5C55\u793A\u9ED8\u8BA4 db \u7684\u6240\u6709\u5BFC\u51FA\u4EFB\u52A1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SHOW EXPORT;\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u51FA\u4EFB\u52A1\uFF0C\u6309 StartTime \u964D\u5E8F\u6392\u5E8F"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:" SHOW EXPORT FROM example_db ORDER BY StartTime DESC;\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u51FA\u4EFB\u52A1\uFF0Cstate \u4E3A "exporting", \u5E76\u6309 StartTime \u964D\u5E8F\u6392\u5E8F'}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'SHOW EXPORT FROM example_db WHERE STATE = "exporting" ORDER BY StartTime DESC;\n'})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5C55\u793A\u6307\u5B9A db\uFF0C\u6307\u5B9A job_id \u7684\u5BFC\u51FA\u4EFB\u52A1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"  SHOW EXPORT FROM example_db WHERE ID = job_id;\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5C55\u793A\u6307\u5B9A db\uFF0C\u6307\u5B9A label \u7684\u5BFC\u51FA\u4EFB\u52A1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:' SHOW EXPORT FROM example_db WHERE LABEL = "mylabel";\n'})}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(x,{...n})}):x(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return r}});var t=s(667294);let l={},d=t.createContext(l);function r(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);