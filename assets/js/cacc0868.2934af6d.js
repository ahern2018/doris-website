"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["858423"],{791473:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE","title":"REPAIR TABLE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE","permalink":"/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REPAIR TABLE","language":"en"},"sidebar":"docs","previous":{"title":"COMPACT TABLE","permalink":"/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/COMPACT-TABLE"},"next":{"title":"CANCEL REPAIR TABLE","permalink":"/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE"}}'),i=n("785893"),a=n("250065");let l={title:"REPAIR TABLE",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"REPAIR TABLE"})," statement is used to prioritize the repair of replicas for a specified table or partition. This statement has the following functionalities:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"It can repair all replicas of an entire table."}),"\n",(0,i.jsx)(t.li,{children:"It can repair replicas of specified partitions."}),"\n",(0,i.jsx)(t.li,{children:"It performs replica repairs with high priority."}),"\n",(0,i.jsx)(t.li,{children:"It supports setting a repair timeout."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"ADMIN REPAIR TABLE <table_name> [ PARTITION (<partition_name> [, ...]) ];\n"})}),"\n",(0,i.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["1. ",(0,i.jsx)(t.code,{children:"<table_name>"})]})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Specifies the name of the table that needs to be repaired."}),"\n",(0,i.jsx)(t.p,{children:"The table name must be unique within its database."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["1. ",(0,i.jsx)(t.code,{children:"PARTITION (<partition_name> [, ...])"})]})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Specifies a list of partition names that need to be repaired."}),"\n",(0,i.jsx)(t.p,{children:"If this parameter is not specified, it will repair all partitions of the entire table."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(t.p,{children:"Users executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"System"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The user must have ADMIN privileges to execute this command."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"This statement indicates that the system will attempt to repair the specified replicas with high priority, but it does not guarantee successful repairs."}),"\n",(0,i.jsx)(t.li,{children:"The default timeout is set to 14,400 seconds (4 hours)."}),"\n",(0,i.jsx)(t.li,{children:"After the timeout, the system will no longer prioritize the repair of specified replicas."}),"\n",(0,i.jsx)(t.li,{children:"If a repair times out, the command needs to be executed again to continue the repair process."}),"\n",(0,i.jsxs)(t.li,{children:["The progress of repairs can be monitored using the ",(0,i.jsx)(t.code,{children:"SHOW REPLICA STATUS"})," command."]}),"\n",(0,i.jsx)(t.li,{children:"This command does not affect the normal replica repair mechanism of the system; it merely elevates the priority of repairs for the specified table or partition."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Repair all replicas of an entire table:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"ADMIN REPAIR TABLE tbl1;\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Repair replicas of specified partitions:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Check the repair progress:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SHOW REPLICA STATUS FROM tbl1;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(667294);let i={},a=s.createContext(i);function l(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);