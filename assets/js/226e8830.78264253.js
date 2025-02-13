"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["196588"],{501070:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>r,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/database/ALTER-DATABASE","title":"ALTER DATABASE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/database/ALTER-DATABASE.md","sourceDirName":"sql-manual/sql-statements/database","slug":"/sql-manual/sql-statements/database/ALTER-DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/ALTER-DATABASE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ALTER DATABASE","language":"en"},"sidebar":"docs","previous":{"title":"CREATE DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/CREATE-DATABASE"},"next":{"title":"DROP DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/DROP-DATABASE"}}'),a=t("785893"),l=t("250065");let i={title:"ALTER DATABASE",language:"en"},d=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Permission Control",id:"permission-control",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Example",id:"example",level:2}];function c(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to set the properties of a specified db, change the db name, and set various quotas for the db."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER DATABASE <db_name> RENAME <new_name>\nALTER DATABASE <db_name> SET { DATA | REPLICA | TRANSACTION } QUOTA <quota>\nALTER DATABASE <db_name> SET <PROPERTIES> ("<key>" = "<value>" [, ...])\n'})}),"\n",(0,a.jsx)(n.h2,{id:"required-parameters",children:"Required parameters"}),"\n",(0,a.jsxs)(n.p,{children:["** 1. ",(0,a.jsx)(n.code,{children:"<db_name>"}),"**"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Specifies the identifier for the database to alter."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["** 2. ",(0,a.jsx)(n.code,{children:"<new_db_name>"}),"**"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Specifies the new identifier for the database"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["** 3. ",(0,a.jsx)(n.code,{children:"<quota>"}),"**"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Database data volume quota or database replica number quota"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["** 4. ",(0,a.jsx)(n.code,{children:"<PROPERTIES>"}),"**"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Additional information about this database"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"permission-control",children:"Permission Control"}),"\n",(0,a.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Permissions"}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Corresponding database"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"You need to have the permission to change the corresponding database."})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,a.jsx)(n.p,{children:"After renaming the database, use the REVOKE and GRANT commands to modify the corresponding user permissions if necessary. The default data volume quota for a database is 1024 GB, and the default replica number quota is 1073741824."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set the data volume quota for the specified database"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"  ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Rename the database example_db to example_db2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"  ALTER DATABASE example_db RENAME example_db2;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set a quota for the number of copies of a specified database"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"  ALTER DATABASE example_db SET REPLICA QUOTA 102400;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Modify the default replica distribution strategy of the table under db (this operation is only effective for newly created tables and will not modify existing tables under db)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'  ALTER DATABASE example_db SET PROPERTIES("replication_allocation" = "tag.location.default:2");\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Cancel the default replica distribution policy of the table under db (this operation is only effective for newly created tables and will not modify existing tables under db)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'  ALTER DATABASE example_db SET PROPERTIES("replication_allocation" = "");\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);