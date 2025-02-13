"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["725099"],{973919:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/database/CREATE-DATABASE","title":"CREATE DATABASE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/database/CREATE-DATABASE.md","sourceDirName":"sql-manual/sql-statements/database","slug":"/sql-manual/sql-statements/database/CREATE-DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/CREATE-DATABASE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE DATABASE","language":"en"},"sidebar":"docs","previous":{"title":"REFRESH","permalink":"/docs/3.0/sql-manual/sql-statements/catalog/REFRESH"},"next":{"title":"ALTER DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/ALTER-DATABASE"}}'),a=n("785893"),l=n("250065");let i={title:"CREATE DATABASE",language:"en"},r=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Permission Control",id:"permission-control",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement is used to create a new database"}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE DATABASE [IF NOT EXISTS] <db_name>\n    [PROPERTIES ("<key>"="<value>"[, ... ])];\n'})}),"\n",(0,a.jsx)(t.h2,{id:"required-parameters",children:"Required parameters"}),"\n",(0,a.jsxs)(t.p,{children:["** 1. ",(0,a.jsx)(t.code,{children:"<db_name>"}),"**"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Database Name"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"optional-parameters",children:"Optional parameters"}),"\n",(0,a.jsxs)(t.p,{children:["** 1. ",(0,a.jsx)(t.code,{children:"<PROPERTIES>"}),"**"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Additional information about this database"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"permission-control",children:"Permission Control"}),"\n",(0,a.jsx)(t.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Permissions"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"CREATE_PRIV"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Corresponding database"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"You need to have the create permission for the corresponding database"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"precautions",children:"Precautions"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to specify the default replica distribution strategy for the table under db, you need to specify ",(0,a.jsx)(t.code,{children:"<replication_allocation>"})," (the ",(0,a.jsx)(t.code,{children:"<replication_allocation>"})," attribute of table has a higher priority than db):"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'PROPERTIES (\n  "replication_allocation" = "tag.location.default:3"\n)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create a new database db_test"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CREATE DATABASE db_test;\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create a new database and set the default replica distribution:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE DATABASE `db_test`\nPROPERTIES (\n	"replication_allocation" = "tag.location.group_1:3"\n);\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var s=n(667294);let a={},l=s.createContext(a);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);