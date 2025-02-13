"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["693348"],{466411:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-COPY-TABLET","title":"ADMIN COPY TABLET","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-COPY-TABLET.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-COPY-TABLET","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-COPY-TABLET","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ADMIN COPY TABLET","language":"en"},"sidebar":"docs","previous":{"title":"DIAGNOSE TABLET","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/DIAGNOSE-TABLET"},"next":{"title":"ADMIN CHECK TABLET","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/ADMIN-CHECK-TABLET"}}'),a=t("785893"),i=t("250065");let l={title:"ADMIN COPY TABLET",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to make a snapshot for the specified tablet, mainly used to load the tablet locally to reproduce\nthe problem."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ADMIN COPY TABLET <tablet_id> PROPERTIES ("<key>"="<value>" [,...]).\n'})}),"\n",(0,a.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. ",(0,a.jsx)(n.code,{children:"<tablet_id>"})]})}),"\n",(0,a.jsx)(n.p,{children:"The ID of the tablet to be copied."}),"\n",(0,a.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'[ PROPERTIES ("<key>"="<value>" [, ... ]) ]\n'})}),"\n",(0,a.jsx)(n.p,{children:"The PROPERTIES clause allows specifying additional parameters:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. ",(0,a.jsx)(n.code,{children:"<backend_id>"})]})}),"\n",(0,a.jsx)(n.p,{children:"Specifies the id of the BE node where the replica is located. If not specified, a replica is randomly selected."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["2. ",(0,a.jsx)(n.code,{children:"<version>"})]})}),"\n",(0,a.jsx)(n.p,{children:"Specifies the version of the snapshot. The version must be less than or equal to the largest version of the replica. If\nnot specified, the largest version is used."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["3. ",(0,a.jsx)(n.code,{children:"<expiration_minutes>"})]})}),"\n",(0,a.jsx)(n.p,{children:"Snapshot retention time. The default is 1 hour. It will automatically clean up after a timeout. Unit minutes."}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Column"}),(0,a.jsx)(n.th,{children:"DataType"}),(0,a.jsx)(n.th,{children:"Note"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TabletId"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The ID of the tablet for which the snapshot was created."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"BackendId"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The ID of the BE node where the snapshot is stored."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Ip"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The IP address of the BE node storing the snapshot."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Path"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The storage path where the snapshot is saved on the BE node."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ExpirationMinutes"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The duration (in minutes) after which the snapshot will be automatically deleted."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"CreateTableStmt"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The table creation statement for the table corresponding to the tablet. This statement is not the original table-building statement, but a simplified table-building statement for later loading the tablet locally."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,a.jsx)(n.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Admin_priv"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Database"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Required to execute administrative operations on the database, including managing tables, partitions, and system-level commands."})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Take a snapshot of the replica on the specified BE node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ADMIN COPY TABLET 10020 PROPERTIES("backend_id" = "10003");\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'         TabletId: 10020\n        BackendId: 10003\n               Ip: 192.168.10.1\n             Path: /path/to/be/storage/snapshot/20220830101353.2.3600\nExpirationMinutes: 60\n  CreateTableStmt: CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1",\n"version_info" = "2"\n);\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Take a snapshot of the specified version of the replica on the specified BE node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ADMIN COPY TABLET 10010 PROPERTIES("backend_id" = "10003", "version" = "10");\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'         TabletId: 10010\n        BackendId: 10003\n               Ip: 192.168.10.1\n             Path: /path/to/be/storage/snapshot/20220830101353.2.3600\nExpirationMinutes: 60\n  CreateTableStmt: CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1",\n"version_info" = "2"\n);\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);