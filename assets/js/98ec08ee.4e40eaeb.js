"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["757063"],{532203:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE","title":"CANCEL REPAIR TABLE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CANCEL REPAIR TABLE","language":"en"},"sidebar":"docs","previous":{"title":"REPAIR TABLE","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE"},"next":{"title":"SET TABLE STATUS","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SET-TABLE-STATUS"}}'),i=n("785893"),a=n("250065");let l={title:"CANCEL REPAIR TABLE",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"CANCEL REPAIR TABLE"})," statement is used to cancel high-priority repairs for a specified table or partition. This statement has the following functionalities:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"It can cancel high-priority repairs for an entire table."}),"\n",(0,i.jsx)(t.li,{children:"It can cancel high-priority repairs for specified partitions."}),"\n",(0,i.jsx)(t.li,{children:"It does not affect the system's default replica repair mechanism."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE <table_name> [ PARTITION (<partition_name> [, ...]) ];\n"})}),"\n",(0,i.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["1. ",(0,i.jsx)(t.code,{children:"<table_name>"})]})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Specifies the name of the table for which the repair is to be canceled."}),"\n",(0,i.jsx)(t.p,{children:"The table name must be unique within its database."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["1. ",(0,i.jsx)(t.code,{children:"PARTITION (<partition_name> [, ...])"})]})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Specifies a list of partition names for which the repair is to be canceled."}),"\n",(0,i.jsx)(t.p,{children:"If this parameter is not specified, it will cancel high-priority repairs for the entire table."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(t.p,{children:"Users executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"System"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The user must have ADMIN privileges to execute this command."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"This statement only cancels high-priority repairs and does not stop the system's default replica repair mechanism."}),"\n",(0,i.jsx)(t.li,{children:"After cancellation, the system will still repair replicas using the default scheduling method."}),"\n",(0,i.jsxs)(t.li,{children:["If there is a need to re-establish high-priority repairs, the ",(0,i.jsx)(t.code,{children:"ADMIN REPAIR TABLE"})," command can be used."]}),"\n",(0,i.jsx)(t.li,{children:"The effects of this command take place immediately after execution."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Cancel high-priority repairs for an entire table:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE tbl;\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Cancel high-priority repairs for specified partitions:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE tbl PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(667294);let i={},a=s.createContext(i);function l(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);