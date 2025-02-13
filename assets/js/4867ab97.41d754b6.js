"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["928462"],{648796:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/SHOW-CACHE-HOTSPOT","title":"SHOW CACHE HOTSPOT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/cluster-management/storage-management/SHOW-CACHE-HOTSPOT.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/SHOW-CACHE-HOTSPOT","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/storage-management/SHOW-CACHE-HOTSPOT","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW CACHE HOTSPOT","language":"en"},"sidebar":"docs","previous":{"title":"SHOW WARM UP JOB","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/storage-management/SHOW-WARM-UP-JOB"},"next":{"title":"CREATE FILE","permalink":"/docs/3.0/sql-manual/sql-statements/security/CREATE-FILE"}}'),a=t("785893"),l=t("250065");let r={title:"SHOW CACHE HOTSPOT",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"References",id:"references",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to display the hotspot information of file cache."}),"\n",(0,a.jsx)(n.admonition,{title:"note",type:"info",children:(0,a.jsxs)(n.p,{children:["Before version 3.0.4, the ",(0,a.jsx)(n.code,{children:"SHOW CACHE HOTSPOT"})," statement can be used to query cache hotness information statistics. Starting from version 3.0.4, the ",(0,a.jsx)(n.code,{children:"SHOW CACHE HOTSPOT"})," statement is no longer supported for querying cache hotness information statistics. Please directly query the system table ",(0,a.jsx)(n.code,{children:"__internal_schema.cloud_cache_hotspot"}),". For specific usage, please refer to ",(0,a.jsx)(n.a,{href:"../../../compute-storage-decoupled/file-cache.md",children:"MANAGING FILE CACHE"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"   SHOW CACHE HOTSPOT '/[<compute_group_name>/<table_name>]';\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"compute_group_name : Name of compute group."}),"\n",(0,a.jsx)(n.li,{children:"table_name : Name of table."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"View the table creation statement of a table"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW CACHE HOTSPOT '/';\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-commands",children:"Related Commands"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../Database-Administration-Statements/WARM-UP-COMPUTE-GROUP.md",children:"WARMUP CACHE"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../../../compute-storage-decoupled/file-cache.md",children:"MANAGING FILE CACHE"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SHOW, CACHE, HOTSPOT\n"})})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);