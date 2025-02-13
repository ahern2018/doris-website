"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["67513"],{924732:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL","title":"CLEAN LABEL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CLEAN LABEL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"OUTFILE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/OUTFILE"},"next":{"title":"CREATE REPOSITORY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY"}}'),s=t("785893"),a=t("250065");let d={title:"CLEAN LABEL",language:"zh-CN"},i=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4E8E\u624B\u52A8\u6E05\u7406\u5386\u53F2\u5BFC\u5165\u4F5C\u4E1A\u7684 Label\u3002\u6E05\u7406\u540E\uFF0CLabel \u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u3002\n\u5E38\u7528\u4E8E\u4E00\u4E9B\u7A0B\u5E8F\u8BBE\u7F6E\u7684\u81EA\u52A8\u5BFC\u5165\u4EFB\u52A1\uFF0C\u91CD\u590D\u6267\u884C\u65F6\uFF0C\u8BBE\u7F6E\u5BFC\u5165\u56FA\u5B9A\u5B57\u7B26\u4E32\u7684 label\uFF0C\n\u5728\u6BCF\u6B21\u5BFC\u5165\u4EFB\u52A1\u53D1\u8D77\u524D\uFF0C\u5148\u6267\u884C\u6E05\u7406\u8BE5 label \u7684\u8BED\u53E5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CLEAN LABEL [ <label> ] FROM <db_name>;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<db_name>"})]}),(0,s.jsx)(n.br,{}),"\nlabel \u5F52\u5C5E\u5E93\u540D\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<label>"})]}),(0,s.jsx)(n.br,{}),"\n\u8981\u6E05\u7406\u7684 label\u3002\u5982\u679C\u7701\u7565\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u6570\u636E\u5E93\u6240\u6709\u7684 label\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5E93\uFF08Database\uFF09"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u6570\u636E\u5E93\u7684\u4FEE\u6539\u6743\u9650\u3002"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6E05\u7406 db1 \u4E2D\uFF0CLabel \u4E3A label1 \u7684\u5BFC\u5165\u4F5C\u4E1A\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CLEAN LABEL label1 FROM db1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6E05\u7406 db1 \u4E2D\u6240\u6709\u5386\u53F2 Label\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CLEAN LABEL FROM db1;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var l=t(667294);let s={},a=l.createContext(s);function d(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);