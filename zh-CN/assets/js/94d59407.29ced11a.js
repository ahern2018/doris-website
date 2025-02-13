"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["456917"],{319051:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD","title":"SHOW LOAD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW LOAD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MYSQL LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/MYSQL-LOAD"},"next":{"title":"SHOW STREAM LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-STREAM-LOAD"}}'),t=l("785893"),d=l("250065");let i={title:"SHOW LOAD",language:"zh-CN"},a=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u6307\u5B9A\u7684\u5BFC\u5165\u4EFB\u52A1\u7684\u6267\u884C\u60C5\u51B5\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD\n[FROM <db_name>]\n[\n   WHERE\n   [LABEL  = [ "<your_label>" | LIKE "<label_matcher>"]]\n   [ STATE = { " PENDING " | " ETL " | " LOADING " | " FINISHED " | " CANCELLED " } ]\n]\n[ORDER BY { <col_name> | <expr> | <position> }]\n[LIMIT <limit>[OFFSET <offset>]];\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u4E0D\u6307\u5B9A db_name\uFF0C\u4F7F\u7528\u5F53\u524D\u9ED8\u8BA4\u6570\u636E\u5E93\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<label_matcher>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:'LABEL LIKE = "<label_matcher>"'}),"\uFF0C\u5219\u4F1A\u5339\u914D\u5BFC\u5165\u4EFB\u52A1\u7684 label \u5305\u542B label_matcher \u7684\u5BFC\u5165\u4EFB\u52A1\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["3. ",(0,t.jsx)(n.code,{children:"<your_label>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:'LABEL = "<your_label>"'}),"\uFF0C\u5219\u7CBE\u786E\u5339\u914D\u6307\u5B9A\u7684 label\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:'4. STATE = { " PENDING " | " ETL " | " LOADING " | " FINISHED " | " CANCELLED " }'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6307\u5B9A\u4E86 ",(0,t.jsx)(n.code,{children:"PENDING"}),' \u8868\u793A\u5339\u914D LOAD = "PENDING" \u72B6\u6001\u7684 job\uFF0C\u5176\u4F59\u72B6\u6001\u8BCD\u540C\u7406\u3002']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["5. ",(0,t.jsx)(n.code,{children:"<col_name>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u7ED3\u679C\u96C6\u4E2D\u7528\u4E8E\u6392\u5E8F\u7684\u5217\u540D\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["6. ",(0,t.jsx)(n.code,{children:"<expr>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528\u8868\u8FBE\u5F0F\u8FDB\u884C\u6392\u5E8F\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["7. ",(0,t.jsx)(n.code,{children:"<position>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6309\u5217\u5728 SELECT \u5217\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u4ECE 1 \u5F00\u59CB\uFF09\u6392\u5E8F\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["8. ",(0,t.jsx)(n.code,{children:"<limit>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C\u6307\u5B9A\u4E86 ",(0,t.jsx)(n.code,{children:"LIMIT"}),"\uFF0C\u5219\u663E\u793A limit \u6761\u5339\u914D\u8BB0\u5F55\u3002\u5426\u5219\u5168\u90E8\u663E\u793A\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["9. ",(0,t.jsx)(n.code,{children:"<offset>"})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6307\u5B9A\u4ECE\u504F\u79FB\u91CF offset \u5F00\u59CB\u663E\u793A\u67E5\u8BE2\u7ED3\u679C\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u504F\u79FB\u91CF\u4E3A 0\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"LOAD_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u5E93\uFF08Database\uFF09"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u5E93\u8868\u7684\u5BFC\u5165\u6743\u9650"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(n.p,{children:"\u8FD4\u56DE\u6307\u5B9A\u5BFC\u5165\u4EFB\u52A1\u7684\u8BE6\u7EC6\u72B6\u6001\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5C55\u793A\u9ED8\u8BA4 db \u7684\u6240\u6709\u5BFC\u5165\u4EFB\u52A1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW LOAD;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u5165\u4EFB\u52A1\uFF0Clabel \u4E2D\u5305\u542B\u5B57\u7B26\u4E32 "2014_01_02"\uFF0C\u5C55\u793A\u6700\u8001\u768410\u4E2A'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u5165\u4EFB\u52A1\uFF0C\u6307\u5B9A label \u4E3A "load_example_db_20140102" \u5E76\u6309 LoadStartTime \u964D\u5E8F\u6392\u5E8F'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u5165\u4EFB\u52A1\uFF0C\u6307\u5B9A label \u4E3A "load_example_db_20140102" \uFF0Cstate \u4E3A "loading", \u5E76\u6309 LoadStartTime \u964D\u5E8F\u6392\u5E8F'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u5165\u4EFB\u52A1 \u5E76\u6309 LoadStartTime \u964D\u5E8F\u6392\u5E8F,\u5E76\u4ECE\u504F\u79FB\u91CF5\u5F00\u59CB\u663E\u793A10\u6761\u67E5\u8BE2\u7ED3\u679C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5C0F\u6279\u91CF\u5BFC\u5165\u662F\u67E5\u770B\u5BFC\u5165\u72B6\u6001\u7684\u547D\u4EE4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"curl --location-trusted -u {user}:{passwd} http://{hostname}:{port}/api/{database}/_load_info?label={labelname}\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return i}});var s=l(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);