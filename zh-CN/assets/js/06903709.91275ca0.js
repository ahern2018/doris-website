"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["973534"],{332069:function(n,e,s){s.r(e),s.d(e,{metadata:()=>d,contentTitle:()=>r,default:()=>a,assets:()=>c,toc:()=>h,frontMatter:()=>i});var d=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/index/SHOW-INDEX","title":"SHOW INDEX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/index/SHOW-INDEX.md","sourceDirName":"sql-manual/sql-statements/table-and-view/index","slug":"/sql-manual/sql-statements/table-and-view/index/SHOW-INDEX","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/index/SHOW-INDEX","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW INDEX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP INDEX","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/index/DROP-INDEX"},"next":{"title":"BUILD INDEX","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/index/BUILD-INDEX"}}'),t=s("785893"),l=s("250065");let i={title:"SHOW INDEX",language:"zh-CN"},r=void 0,c={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53D8\u79CD\u8BED\u6CD5",id:"\u53D8\u79CD\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function x(n){let e={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u4E00\u4E2A\u8868\u4E2D\u7D22\u5F15\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u76EE\u524D\u53EA\u652F\u6301 bitmap \u7D22\u5F15"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"SHOW INDEX [ ES ] FROM [ <db_name>. ] <table_name> [ FROM <db_name> ];\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53D8\u79CD\u8BED\u6CD5",children:"\u53D8\u79CD\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"SHOW KEY[ S ] FROM [ <db_name>. ] <table_name> [ FROM <db_name> ];\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsxs)(e.strong,{children:["1. ",(0,t.jsx)(e.code,{children:"<table_name>"})]}),"\uFF1A\u7D22\u5F15\u5F52\u5C5E\u7684\u8868\u540D\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsxs)(e.strong,{children:["1. ",(0,t.jsx)(e.code,{children:"<db_name>"})]}),"\uFF1A\u5E93\u540D\uFF0C\u9009\u586B\uFF0C\u4E0D\u586B\u9ED8\u8BA4\u5F53\u524D\u5E93\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5217\u540D"}),(0,t.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Table"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"\u7D22\u5F15\u6240\u5728\u7684\u8868\u7684\u540D\u79F0\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Non_unique"}),(0,t.jsx)(e.td,{children:"int"}),(0,t.jsxs)(e.td,{children:["\u6307\u793A\u8BE5\u7D22\u5F15\u662F\u5426\u4E3A\u552F\u4E00\u7D22\u5F15\uFF1A",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"0"}),"\uFF1A\u552F\u4E00\u7D22\u5F15",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"1"}),"\uFF1A\u975E\u552F\u4E00\u7D22\u5F15"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Key_name"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"\u7D22\u5F15\u7684\u540D\u79F0\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Seq_in_index"}),(0,t.jsx)(e.td,{children:"int"}),(0,t.jsx)(e.td,{children:"\u7D22\u5F15\u4E2D\u5217\u7684\u987A\u5E8F\u3002\u8BE5\u5217\u663E\u793A\u7684\u662F\u5217\u5728\u7D22\u5F15\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u591A\u4E2A\u5217\u7EC4\u6210\u590D\u5408\u7D22\u5F15\u65F6\u4F7F\u7528\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Column_name"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"\u88AB\u7D22\u5F15\u7684\u5217\u540D\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Collation"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsxs)(e.td,{children:["\u7D22\u5F15\u5217\u7684\u6392\u5E8F\u65B9\u5F0F\uFF1A",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"A"}),"\uFF1A\u5347\u5E8F",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"D"}),"\uFF1A\u964D\u5E8F\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Cardinality"}),(0,t.jsx)(e.td,{children:"int"}),(0,t.jsx)(e.td,{children:"\u7D22\u5F15\u4E2D\u72EC\u7ACB\u503C\u7684\u6570\u91CF\u3002\u8BE5\u503C\u7528\u4E8E\u4F30\u8BA1\u67E5\u8BE2\u6548\u7387\uFF0C\u503C\u8D8A\u5927\uFF0C\u8868\u793A\u7D22\u5F15\u7684\u9009\u62E9\u6027\u8D8A\u9AD8\uFF0C\u67E5\u8BE2\u6548\u7387\u8D8A\u597D\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sub_part"}),(0,t.jsx)(e.td,{children:"int"}),(0,t.jsxs)(e.td,{children:["\u7D22\u5F15\u6240\u4F7F\u7528\u7684\u524D\u7F00\u957F\u5EA6\u3002\u5982\u679C\u7D22\u5F15\u5217\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C",(0,t.jsx)(e.code,{children:"Sub_part"})," \u8868\u793A\u7D22\u5F15\u7684\u524D\u51E0\u4E2A\u5B57\u7B26\u957F\u5EA6\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Packed"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"\u7D22\u5F15\u662F\u5426\u538B\u7F29\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Null"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsxs)(e.td,{children:["\u662F\u5426\u5141\u8BB8 ",(0,t.jsx)(e.code,{children:"NULL"})," \u503C\uFF1A",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"YES"}),"\uFF1A\u5141\u8BB8 ",(0,t.jsx)(e.code,{children:"NULL"})," \u503C",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"NO"}),"\uFF1A\u4E0D\u5141\u8BB8 ",(0,t.jsx)(e.code,{children:"NULL"})," \u503C"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Index_type"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsxs)(e.td,{children:["\u7D22\u5F15\u7684\u7C7B\u578B\uFF1A",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"BTREE"}),"\uFF1AB+\u6811\u7D22\u5F15\uFF08MySQL \u9ED8\u8BA4\u7C7B\u578B\uFF09",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"HASH"}),"\uFF1A\u54C8\u5E0C\u7D22\u5F15",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"RTREE"}),"\uFF1AR\u6811\u7D22\u5F15",(0,t.jsx)(e.br,{})," - ",(0,t.jsx)(e.code,{children:"INVERTED"}),"\uFF1A\u5012\u6392\u7D22\u5F15\uFF08\u5982\u5168\u6587\u7D22\u5F15\uFF09"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Comment"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"\u7D22\u5F15\u7684\u6CE8\u91CA\u6216\u63CF\u8FF0\uFF0C\u901A\u5E38\u4E3A\u81EA\u5B9A\u4E49\u7684\u5907\u6CE8\u4FE1\u606F\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Properties"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"\u7D22\u5F15\u7684\u9644\u52A0\u5C5E\u6027\u3002"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"SHOW_PRIV"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u5E93\uFF08Database\uFF09"}),(0,t.jsx)(e.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5C55\u793A\u6307\u5B9A table_name \u7684\u4E0B\u7D22\u5F15"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:" SHOW INDEX FROM example_db.table_name;\n"})}),"\n"]}),"\n"]})]})}function a(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var d=s(667294);let t={},l=d.createContext(t);function i(n){let e=d.useContext(l);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),d.createElement(l.Provider,{value:e},n.children)}}}]);