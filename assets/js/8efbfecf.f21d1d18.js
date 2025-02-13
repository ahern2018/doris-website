"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["42179"],{265444:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/types/SHOW-TYPECAST","title":"SHOW TYPECAST","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/types/SHOW-TYPECAST.md","sourceDirName":"sql-manual/sql-statements/types","slug":"/sql-manual/sql-statements/types/SHOW-TYPECAST","permalink":"/docs/dev/sql-manual/sql-statements/types/SHOW-TYPECAST","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW TYPECAST","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW DATA TYPES","permalink":"/docs/dev/sql-manual/sql-statements/types/SHOW-DATA-TYPES"},"next":{"title":"SHOW PROC","permalink":"/docs/dev/sql-manual/sql-statements/system-info-and-help/SHOW-PROC"}}'),r=t("785893"),l=t("250065");let i={title:"SHOW TYPECAST",language:"zh-CN"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"View all type cast under the database. If the user specifies a database, then view the corresponding database, otherwise\ndirectly query the database where the current session is located"}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW TYPE_CAST [ { IN | FROM } <db>]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<db>"})]})}),"\n",(0,r.jsx)(n.p,{children:"The name of the database to query."}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Column Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Origin Type"}),(0,r.jsx)(n.td,{children:"Original Type"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cast Type"}),(0,r.jsx)(n.td,{children:"Conversion Type"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Privilege"}),(0,r.jsx)(n.th,{children:"Object"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Select_priv"})}),(0,r.jsx)(n.td,{children:"Database (DB)"}),(0,r.jsxs)(n.td,{children:["The user or role must have ",(0,r.jsx)(n.code,{children:"Select_priv"})," on the DB to view all type conversions under the database"]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,r.jsx)(n.p,{children:"If a database is specified by the user, the system will query the specified database; otherwise, it will query the\ndatabase associated with the current session by default."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"View all type casts in database TESTDB"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW TYPE_CAST IN TESTDB;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------------+----------------+\n| Origin Type    | Cast Type      |\n+----------------+----------------+\n| DATETIMEV2     | BOOLEAN        |\n| DATETIMEV2     | TINYINT        |\n| DATETIMEV2     | SMALLINT       |\n| DATETIMEV2     | INT            |\n| DATETIMEV2     | BIGINT         |\n| DATETIMEV2     | LARGEINT       |\n| DATETIMEV2     | FLOAT          |\n| DATETIMEV2     | DOUBLE         |\n| DATETIMEV2     | DATE           |\n| DATETIMEV2     | DATETIME       |\n| DATETIMEV2     | DATEV2         |\n| DATETIMEV2     | DATETIMEV2     |\n| DATETIMEV2     | DECIMALV2      |\n| DATETIMEV2     | DECIMAL32      |\n| DATETIMEV2     | DECIMAL64      |\n| DATETIMEV2     | DECIMAL128     |\n| DATETIMEV2     | DECIMAL256     |\n| DATETIMEV2     | VARCHAR        |\n| DATETIMEV2     | STRING         |\n| DECIMAL256     | DECIMAL128     |\n| DECIMAL256     | DECIMAL256     |\n| DECIMAL256     | VARCHAR        |\n| DECIMAL256     | STRING         |\n+----------------+----------------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);