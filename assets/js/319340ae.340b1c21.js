"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["972638"],{228854:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/index/BUILD-INDEX","title":"BUILD INDEX","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/table-and-view/index/BUILD-INDEX.md","sourceDirName":"sql-manual/sql-statements/table-and-view/index","slug":"/sql-manual/sql-statements/table-and-view/index/BUILD-INDEX","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/index/BUILD-INDEX","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BUILD INDEX","language":"en"},"sidebar":"docs","previous":{"title":"SHOW INDEX","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/index/SHOW-INDEX"},"next":{"title":"CANCEL BUILD INDEX","permalink":"/docs/dev/sql-manual/sql-statements/table-and-view/index/CANCEL-BUILD-INDEX"}}'),s=t("785893"),r=t("250065");let a={title:"BUILD INDEX",language:"en"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Build an index for the entire table or table partitions. You must specify the table name and index name, and optionally specify the partition list."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"BUILD INDEX <index_name> ON <table_name> [partition_list]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"partition_list\n  : PARTITION (<partition_name1>[ , parition_name2 ][ ... ])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"<index_name>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the identifier (name) of the index, which must be unique within its table."}),"\n",(0,s.jsxs)(n.p,{children:["The identifier must start with a letter character (or any language character if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., ",(0,s.jsx)(n.code,{children:"My Object"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"The identifier cannot use reserved keywords."}),"\n",(0,s.jsx)(n.p,{children:"For more details, see Identifier Requirements and Reserved Keywords."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"<table_name>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the identifier (name) of the table, which must be unique within its database."}),"\n",(0,s.jsxs)(n.p,{children:["The identifier must start with a letter character (or any language character if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., ",(0,s.jsx)(n.code,{children:"My Object"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"The identifier cannot use reserved keywords."}),"\n",(0,s.jsx)(n.p,{children:"For more details, see Identifier Requirements and Reserved Keywords."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"<partition_list>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies a list of partition identifiers (names) separated by commas, which must be unique within their table."}),"\n",(0,s.jsxs)(n.p,{children:["The identifier must start with a letter character (or any language character if unicode name support is enabled) and cannot contain spaces or special characters unless the entire identifier string is enclosed in backticks (e.g., ",(0,s.jsx)(n.code,{children:"My Object"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"The identifier cannot use reserved keywords."}),"\n",(0,s.jsx)(n.p,{children:"For more details, see Identifier Requirements and Reserved Keywords."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Table"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"BUILD INDEX is an ALTER operation on a table"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Currently only valid for inverted indexes, other indexes such as BloomFilter index are not valid."}),"\n",(0,s.jsx)(n.li,{children:"Currently only valid for compute-storage integrated mode, not valid for compute-storage separated mode."}),"\n",(0,s.jsx)(n.li,{children:"The progress of BUILD INDEX can be viewed through SHOW BUILD INDEX"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build index index1 on the entire table1."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"BUILD INDEX index1 ON TABLE table1\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build index index1 on partitions p1 and p2 of table1."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"BUILD INDEX index1 ON TABLE table1 PARTITION(p1, p2)\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);