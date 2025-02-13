"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["410839"],{505578:function(n,e,t){t.r(e),t.d(e,{metadata:()=>l,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/plugin/SHOW-PLUGINS","title":"SHOW PLUGINS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/plugin/SHOW-PLUGINS.md","sourceDirName":"sql-manual/sql-statements/plugin","slug":"/sql-manual/sql-statements/plugin/SHOW-PLUGINS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/plugin/SHOW-PLUGINS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW PLUGINS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"UNINSTALL PLUGIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/plugin/UNINSTALL-PLUGIN"},"next":{"title":"SHOW COLLATION","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/character-set/SHOW-COLLATION"}}'),s=t("785893"),i=t("250065");let r={title:"SHOW PLUGINS",language:"zh-CN"},d=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u5DF2\u5B89\u88C5\u7684\u63D2\u4EF6"}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SHOW PLUGINS\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5217"}),(0,s.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Description"}),(0,s.jsx)(e.td,{children:"\u5BF9\u5E94\u63D2\u4EF6\u63CF\u8FF0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Version"}),(0,s.jsx)(e.td,{children:"\u63D2\u4EF6\u5BF9\u5E94\u7248\u672C\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"JavaVersion"}),(0,s.jsx)(e.td,{children:"\u5BF9\u5E94 Java \u7248\u672C\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ClassName"}),(0,s.jsx)(e.td,{children:"\u7A0B\u5E8F\u7C7B\u540D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SoName"}),(0,s.jsx)(e.td,{children:"\u7A0B\u5E8F\u5171\u4EAB\u5BF9\u8C61\u540D\u79F0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Sources"}),(0,s.jsx)(e.td,{children:"\u63D2\u4EF6\u6765\u6E90"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Status"}),(0,s.jsx)(e.td,{children:"\u5B89\u88C5\u72B6\u6001"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Properties"}),(0,s.jsx)(e.td,{children:"\u63D2\u4EF6\u5C5E\u6027"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6574\u4E2A\u96C6\u7FA4"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u9700\u8981\u5BF9\u6574\u4E2A\u96C6\u7FA4\u5177\u6709\u7BA1\u7406\u6743\u9650"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5C55\u793A\u5DF2\u5B89\u88C5\u7684\u63D2\u4EF6\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"SHOW PLUGINS;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-------------------------------+---------+-----------------------------------------------------------+---------+-------------+------------------------------------------------------------+--------+---------+-----------+------------+\n| Name                          | Type    | Description                                               | Version | JavaVersion | ClassName                                                  | SoName | Sources | Status    | Properties |\n+-------------------------------+---------+-----------------------------------------------------------+---------+-------------+------------------------------------------------------------+--------+---------+-----------+------------+\n| __builtin_AuditLoader         | AUDIT   | builtin audit loader, to load audit log to internal table | 2.1.0   | 1.8.31      | org.apache.doris.plugin.audit.AuditLoader                  | NULL   | Builtin | INSTALLED | {}         |\n| __builtin_AuditLogBuilder     | AUDIT   | builtin audit logger                                      | 0.12.0  | 1.8.31      | org.apache.doris.plugin.audit.AuditLogBuilder              | NULL   | Builtin | INSTALLED | {}         |\n| __builtin_SqlDialectConverter | DIALECT | builtin sql dialect converter                             | 2.1.0   | 1.8.31      | org.apache.doris.plugin.dialect.HttpDialectConverterPlugin | NULL   | Builtin | INSTALLED | {}         |\n+-------------------------------+---------+-----------------------------------------------------------+---------+-------------+------------------------------------------------------------+--------+---------+-----------+------------+\n"})}),"\n"]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return r}});var l=t(667294);let s={},i=l.createContext(s);function r(n){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);