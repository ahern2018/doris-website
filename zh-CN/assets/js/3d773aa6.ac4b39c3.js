"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["119096"],{192220:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/session/queries/CLEAN-ALL-QUERY-STATS","title":"CLEAN QUERY STATS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/session/queries/CLEAN-ALL-QUERY-STATS.md","sourceDirName":"sql-manual/sql-statements/session/queries","slug":"/sql-manual/sql-statements/session/queries/CLEAN-ALL-QUERY-STATS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/session/queries/CLEAN-ALL-QUERY-STATS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CLEAN QUERY STATS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW QUERY STATS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/session/queries/SHOW-QUERY-STATS"},"next":{"title":"PLAN REPLAYER DUMP","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/session/queries/PLAN-REPLAYER-DUMP"}}'),l=s("785893"),r=s("250065");let i={title:"CLEAN QUERY STATS",language:"zh-CN"},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u6E05\u7A7A\u67E5\u8BE2\u7EDF\u8BA1\u4FE1\u606F"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CLEAN [ { ALL| DATABASE | TABLE } ] QUERY STATS [ { [ FOR <db_name>] | [ { FROM | IN } ] <table_name>]];\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"ALL"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"ALL \u53EF\u4EE5\u6E05\u7A7A\u6240\u6709\u7EDF\u8BA1\u4FE1\u606F"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"DATABASE"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"DATABASE \u8868\u793A\u6E05\u7A7A\u67D0\u4E2A\u6570\u636E\u5E93\u7684\u7EDF\u8BA1\u4FE1\u606F"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["3. ",(0,l.jsx)(n.code,{children:"TABLE"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"TABLE \u8868\u793A\u6E05\u7A7A\u67D0\u4E2A\u8868\u7684\u7EDF\u8BA1\u4FE1\u606F"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<db_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u82E5\u586B\u5199\u8868\u793A\u6E05\u7A7A\u5BF9\u5E94\u6570\u636E\u5E93\u7684\u7EDF\u8BA1\u4FE1\u606F"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<table_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u82E5\u586B\u5199\u8868\u793A\u6E05\u7A7A\u5BF9\u5E94\u8868\u7684\u7EDF\u8BA1\u4FE1\u606F"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"ALL"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5982\u679C\u6307\u5B9A ALL \u5219\u9700\u8981 ADMIN \u6743\u9650"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u6570\u636E\u5E93"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5982\u679C\u6307\u5B9A\u6570\u636E\u5E93\u5219\u9700\u8981\u5BF9\u5E94\u6570\u636E\u5E93\u7684 ALTER \u6743\u9650"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u8868"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5982\u679C\u6307\u5B9A\u8868\u5219\u9700\u8981\u5BF9\u5E94\u8868\u7684 alter \u6743\u9650"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"clean all query stats\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"clean database query stats for test_query_db\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"clean table query stats from test_query_db.baseall\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);