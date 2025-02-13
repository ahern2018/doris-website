"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["820438"],{290477:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>r,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/database/CREATE-DATABASE","title":"CREATE DATABASE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/database/CREATE-DATABASE.md","sourceDirName":"sql-manual/sql-statements/database","slug":"/sql-manual/sql-statements/database/CREATE-DATABASE","permalink":"/zh-CN/docs/sql-manual/sql-statements/database/CREATE-DATABASE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE DATABASE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REFRESH","permalink":"/zh-CN/docs/sql-manual/sql-statements/catalog/REFRESH"},"next":{"title":"ALTER DATABASE","permalink":"/zh-CN/docs/sql-manual/sql-statements/database/ALTER-DATABASE"}}'),s=l("785893"),a=l("250065");let i={title:"CREATE DATABASE",language:"zh-CN"},d=void 0,c={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u65B0\u5EFA\u6570\u636E\u5E93\uFF08database\uFF09"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE DATABASE [IF NOT EXISTS] <db_name>\n    [PROPERTIES ("<key>"="<value>"[, ... ])];\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:["** 1. ",(0,s.jsx)(n.code,{children:"<db_name>"}),"**"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6570\u636E\u5E93\u540D\u79F0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:["** 1. ",(0,s.jsx)(n.code,{children:"<PROPERTIES>"}),"**"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BE5\u6570\u636E\u5E93\u7684\u9644\u52A0\u4FE1\u606F"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"CREATE_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5BF9\u5E94\u6570\u636E\u5E93"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u5BF9\u5E94\u6570\u636E\u5E93\u5177\u6709\u521B\u5EFA\u6743\u9650"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u8981\u4E3A db \u4E0B\u7684 table \u6307\u5B9A\u9ED8\u8BA4\u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\uFF0C\u9700\u8981\u6307\u5B9A",(0,s.jsx)(n.code,{children:"<replication_allocation>"}),"\uFF08table \u7684",(0,s.jsx)(n.code,{children:"<replication_allocation>"}),"\u5C5E\u6027\u4F18\u5148\u7EA7\u4F1A\u9AD8\u4E8E db\uFF09:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'PROPERTIES (\n  "replication_allocation" = "tag.location.default:3"\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u65B0\u5EFA\u6570\u636E\u5E93 db_test"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE db_test;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u65B0\u5EFA\u6570\u636E\u5E93\u5E76\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u526F\u672C\u5206\u5E03\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE DATABASE `db_test`\nPROPERTIES (\n	"replication_allocation" = "tag.location.group_1:3"\n);\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return i}});var t=l(667294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);