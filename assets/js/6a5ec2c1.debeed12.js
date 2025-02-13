"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["930390"],{15894:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/plugin/SHOW-PLUGINS","title":"SHOW PLUGINS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/plugin/SHOW-PLUGINS.md","sourceDirName":"sql-manual/sql-statements/plugin","slug":"/sql-manual/sql-statements/plugin/SHOW-PLUGINS","permalink":"/docs/sql-manual/sql-statements/plugin/SHOW-PLUGINS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW PLUGINS","language":"en"},"sidebar":"docs","previous":{"title":"UNINSTALL PLUGIN","permalink":"/docs/sql-manual/sql-statements/plugin/UNINSTALL-PLUGIN"},"next":{"title":"SHOW COLLATION","permalink":"/docs/sql-manual/sql-statements/character-set/SHOW-COLLATION"}}'),i=t("785893"),l=t("250065");let r={title:"SHOW PLUGINS",language:"en"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Permission Control",id:"permission-control",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to display installed plug-ins"}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW PLUGINS\n"})}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Column"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Corresponding plug-in description"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Version"}),(0,i.jsx)(n.td,{children:"Plug-in corresponding version number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JavaVersion"}),(0,i.jsx)(n.td,{children:"Corresponding Java version number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ClassName"}),(0,i.jsx)(n.td,{children:"Program class name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SoName"}),(0,i.jsx)(n.td,{children:"Program shared object name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Sources"}),(0,i.jsx)(n.td,{children:"Plugin Source"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Status"}),(0,i.jsx)(n.td,{children:"Installation Status"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Properties"}),(0,i.jsx)(n.td,{children:"Plugin Properties"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"permission-control",children:"Permission Control"}),"\n",(0,i.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Permissions"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The entire cluster"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Requires administrative privileges for the entire cluster"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Show installed plugins:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SHOW PLUGINS;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-------------------------------+---------+-----------------------------------------------------------+---------+-------------+------------------------------------------------------------+--------+---------+-----------+------------+\n| Name                          | Type    | Description                                               | Version | JavaVersion | ClassName                                                  | SoName | Sources | Status    | Properties |\n+-------------------------------+---------+-----------------------------------------------------------+---------+-------------+------------------------------------------------------------+--------+---------+-----------+------------+\n| __builtin_AuditLoader         | AUDIT   | builtin audit loader, to load audit log to internal table | 2.1.0   | 1.8.31      | org.apache.doris.plugin.audit.AuditLoader                  | NULL   | Builtin | INSTALLED | {}         |\n| __builtin_AuditLogBuilder     | AUDIT   | builtin audit logger                                      | 0.12.0  | 1.8.31      | org.apache.doris.plugin.audit.AuditLogBuilder              | NULL   | Builtin | INSTALLED | {}         |\n| __builtin_SqlDialectConverter | DIALECT | builtin sql dialect converter                             | 2.1.0   | 1.8.31      | org.apache.doris.plugin.dialect.HttpDialectConverterPlugin | NULL   | Builtin | INSTALLED | {}         |\n+-------------------------------+---------+-----------------------------------------------------------+---------+-------------+------------------------------------------------------------+--------+---------+-----------+------------+\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);