"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["545362"],{142428:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/index/CREATE-INDEX","title":"CREATE INDEX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/index/CREATE-INDEX.md","sourceDirName":"sql-manual/sql-statements/table-and-view/index","slug":"/sql-manual/sql-statements/table-and-view/index/CREATE-INDEX","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/index/CREATE-INDEX","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE INDEX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ALTER COLOCATE GROUP","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-COLOCATE-GROUP"},"next":{"title":"DROP INDEX","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/index/DROP-INDEX"}}'),t=l("785893"),i=l("250065");let d={title:"CREATE INDEX",language:"zh-CN"},r=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u4E3A\u8868\u521B\u5EFA\u65B0\u7684\u7D22\u5F15\uFF0C\u5FC5\u987B\u6307\u5B9A\u8868\u540D\u548C\u7D22\u5F15\u540D\uFF0C\u53EF\u9009\u6307\u5B9A\u7D22\u5F15\u7C7B\u578B\u3001\u5C5E\u6027\u3001\u6CE8\u91CA\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE INDEX [IF NOT EXISTS] <index_name> \n             ON <table_name> (<column_name> [, ...])\n             [USING {INVERTED | NGRAM_BF}]\n             [PROPERTIES ("<key>" = "<value>"[ , ...])]\n             [COMMENT \'<index_comment>\']\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<index_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u7D22\u5F15\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\uFF0C\u5728\u5176\u6240\u5728\u7684\u8868\uFF08Table\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982",(0,t.jsx)(n.code,{children:"My Object"}),"\uFF09\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u8868\u7684\u6807\u8BC6\u7B26\uFF08\u5373\u540D\u79F0\uFF09\uFF0C\u5728\u5176\u6240\u5728\u7684\u6570\u636E\u5E93\uFF08Database\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982",(0,t.jsx)(n.code,{children:"My Object"}),"\uFF09\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["3. ",(0,t.jsx)(n.code,{children:"<column_name> [, ...]"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u5728\u54EA\u4E9B\u5217\u4E0A\u521B\u5EFA\u7D22\u5F15\uFF08\u76EE\u524D\u4EC5\u652F\u6301\u4E00\u4E2A\uFF09\uFF0C\u5217\u5728\u5176\u6240\u5728\u7684\uFF08Table\uFF09\u4E2D\u5FC5\u987B\u552F\u4E00\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6807\u8BC6\u7B26\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5B57\u7B26\uFF08\u5982\u679C\u5F00\u542F unicode \u540D\u5B57\u652F\u6301\uFF0C\u5219\u53EF\u4EE5\u662F\u4EFB\u610F\u8BED\u8A00\u6587\u5B57\u7684\u5B57\u7B26\uFF09\u5F00\u5934\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u7279\u6B8A\u5B57\u7B26\uFF0C\u9664\u975E\u6574\u4E2A\u6807\u8BC6\u7B26\u5B57\u7B26\u4E32\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF08\u4F8B\u5982",(0,t.jsx)(n.code,{children:"My Object"}),"\uFF09\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6807\u8BC6\u7B26\u4E0D\u80FD\u4F7F\u7528\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u6807\u8BC6\u7B26\u8981\u6C42\u548C\u4FDD\u7559\u5173\u952E\u5B57\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"USING {INVERTED | NGRAM_BF}"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6307\u5B9A\u7D22\u5F15\u7C7B\u578B\uFF0C\u76EE\u524D\u652F\u6301\u4E24\u79CD\uFF1A",(0,t.jsx)(n.strong,{children:"INVERTED"})," \u5012\u6392\u7D22\u5F15\uFF0C",(0,t.jsx)(n.strong,{children:"NGRAM_BF"})," ngram bloomfilter \u7D22\u5F15\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:'PROPERTIES ("<key>" = "<value>"[ ,  ...])'})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u7D22\u5F15\u7684\u53C2\u6570\uFF0C\u4F7F\u7528\u901A\u7528\u7684 PROPERTIES \u683C\u5F0F\uFF0C\u6BCF\u4E2A\u7D22\u5F15\u652F\u6301\u7684\u53C2\u6570\u53CA\u8BED\u4E49\uFF0C\u8BF7\u53C2\u8003\u5177\u4F53\u7C7B\u578B\u7684\u7D22\u5F15\u6587\u6863\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["3. ",(0,t.jsx)(n.code,{children:"COMMENT '<index_comment>'"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u7D22\u5F15\u7684\u6CE8\u91CA\uFF0C\u4FBF\u4E8E\u7EF4\u62A4\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"CREATE INDEX \u5C5E\u4E8E\u8868 ALTER \u64CD\u4F5C"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"INVERTED"})," \u5012\u6392\u7D22\u5F15\u521B\u5EFA\u540E\u5BF9\u65B0\u5199\u5165\u7684\u6570\u636E\u7ACB\u5373\u751F\u6548\uFF0C\u5386\u53F2\u6570\u636E\u7684\u7D22\u5F15\u9700\u8981\u8FDB\u884C BUILD INDEX \u64CD\u4F5C\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NGRAM_BF"})," NGram BloomFilter \u7D22\u5F15\u521B\u5EFA\u540E\u4F1A\u5728\u540E\u53F0\u5BF9\u6240\u7528\u6570\u636E\u8FDB\u884C schema change \u4EE5\u5B8C\u6210\u7D22\u5F15\u6784\u5EFA\uFF0C\u8FDB\u5EA6\u53EF\u4EE5\u901A\u8FC7 SHOW ALTER TABLE COLUMN \u67E5\u770B\u8FDB\u5EA6"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728 table1 \u4E0A\u521B\u5EFA\u5012\u6392\u7D22\u5F15 index1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX index1 ON TABLE table1 USING INVERTED;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728 table1 \u4E0A\u521B\u5EFA NGram BloomFilter \u7D22\u5F15 index2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE INDEX index2 ON TABLE table1 USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024");\n'})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return d}});var s=l(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);