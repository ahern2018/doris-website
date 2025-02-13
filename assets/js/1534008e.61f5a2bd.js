"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["171918"],{753366:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/async-materialized-view/REFRESH-MATERIALIZED-VIEW","title":"REFRESH MATERIALIZED VIEW","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/async-materialized-view/REFRESH-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/async-materialized-view","slug":"/sql-manual/sql-statements/table-and-view/async-materialized-view/REFRESH-MATERIALIZED-VIEW","permalink":"/docs/sql-manual/sql-statements/table-and-view/async-materialized-view/REFRESH-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REFRESH MATERIALIZED VIEW","language":"en"},"sidebar":"docs","previous":{"title":"DROP ASYNC MATERIALIZED VIEW","permalink":"/docs/sql-manual/sql-statements/table-and-view/async-materialized-view/DROP-ASYNC-MATERIALIZED-VIEW"},"next":{"title":"RESUME MATERIALIZED VIEW","permalink":"/docs/sql-manual/sql-statements/table-and-view/async-materialized-view/RESUME-MATERIALIZED-VIEW-JOB"}}'),s=t("785893"),a=t("250065");let r={title:"REFRESH MATERIALIZED VIEW",language:"en"},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to manually refresh the specified asynchronous materialized view"}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"REFRESH MATERIALIZED VIEW <mv_name> <refresh_type>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"refresh_type\n  : { <partitionSpec> | COMPLETE | AUTO }\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"partitionSpec\n  : PARTITIONS (<partition_name> [, <partition_name> [, ... ] ])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<mv_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the materialized view name."}),"\n",(0,s.jsxs)(n.p,{children:["The materialized view name must start with a letter character (or any language character if unicode name support is enabled) and cannot contain spaces or special characters unless the entire materialized view name string is enclosed in backticks (e.g., ",(0,s.jsx)(n.code,{children:"My Object"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"The materialized view name cannot use reserved keywords."}),"\n",(0,s.jsx)(n.p,{children:"For more details, see Reserved Keywords."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. ",(0,s.jsx)(n.code,{children:"<refresh_type>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the refresh type of this materialized view."}),"\n",(0,s.jsx)(n.p,{children:"The refresh type may be one of the partitionSpec, COMPLETE or AUTO."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<partition_name>"})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the partition name when refresh the partition"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ALTER_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Materialized View"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"REFRESH is an ALTER operation on a materialized view"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["AUTO: The calculation will determine which partitions of the materialized view are not synchronized with the base table. (Currently, if the base table is an external table, it is considered to be always synchronized with the materialized view. Therefore, if the base table is an external table, it is necessary to specify ",(0,s.jsx)(n.code,{children:"COMPLETE"})," or designate the partitions to be refreshed), and then proceed to refresh the corresponding partitions accordingly."]}),"\n",(0,s.jsx)(n.li,{children:"COMPLETE: It will forcibly refresh all partitions of the materialized view without checking whether the partitions are synchronized with the base table."}),"\n",(0,s.jsx)(n.li,{children:"partitionSpec: It will forcibly refresh the specified partitions without checking whether the partitions are synchronized with the base table."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Refresh materialized view mv1 (automatically calculate the partition to be refreshed)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"REFRESH MATERIALIZED VIEW mv1 AUTO;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Refresh partition named p_19950801_19950901 and p_19950901_19951001"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"REFRESH MATERIALIZED VIEW mv1 partitions(p_19950801_19950901,p_19950901_19951001);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Force refresh of all materialized view data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"REFRESH MATERIALIZED VIEW mv1 complete;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(667294);let s={},a=i.createContext(s);function r(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);