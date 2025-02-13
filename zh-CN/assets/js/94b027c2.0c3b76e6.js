"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["603732"],{720570:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>d,default:()=>E,assets:()=>r,toc:()=>c,frontMatter:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/sync-materialized-view/SHOW-ALTER-TABLE-MATERIALIZED-VIEW","title":"SHOW ALTER TABLE MATERIALIZED VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/sync-materialized-view/SHOW-ALTER-TABLE-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/sync-materialized-view","slug":"/sql-manual/sql-statements/table-and-view/sync-materialized-view/SHOW-ALTER-TABLE-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/sync-materialized-view/SHOW-ALTER-TABLE-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW ALTER TABLE MATERIALIZED VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP MATERIALIZED VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/sync-materialized-view/DROP-MATERIALIZED-VIEW"},"next":{"title":"SHOW CREATE SYNC MATERIALIZED VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/sync-materialized-view/SHOW-CREATE-MATERIALIZED-VIEW"}}'),s=n("785893"),i=n("250065");let a={title:"SHOW ALTER TABLE MATERIALIZED VIEW",language:"zh-CN"},d=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(t.p,{children:"\u67E5\u770B\u540C\u6B65\u7269\u5316\u89C6\u56FE\u6784\u5EFA\u4EFB\u52A1\u72B6\u6001\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u7531\u4E8E\u521B\u5EFA\u540C\u6B65\u7269\u5316\u89C6\u56FE\u662F\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u7528\u6237\u5728\u63D0\u4EA4\u521B\u5EFA\u7269\u5316\u89C6\u56FE\u4EFB\u52A1\u540E\uFF0C\u9700\u8981\u5F02\u6B65\u5730\u901A\u8FC7\u547D\u4EE4\u67E5\u770B\u540C\u6B65\u7269\u5316\u89C6\u56FE\u6784\u5EFA\u72B6\u6001\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SHOW ALTER TABLE MATERIALIZED VIEW FROM <database>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["1. ",(0,s.jsx)(t.code,{children:"<database>"})]})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u540C\u6B65\u7269\u5316\u89C6\u56FE\u7684\u57FA\u8868\u6240\u5C5E\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(t.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8868"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u9700\u8981\u62E5\u6709\u5F53\u524D\u7269\u5316\u89C6\u56FE\u6240\u5C5E\u8868\u7684 ALTER_PRIV \u6743\u9650"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SHOW ALTER TABLE MATERIALIZED VIEW FROM doc_db;\n"})})]})}function E(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var l=n(667294);let s={},i=l.createContext(s);function a(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);