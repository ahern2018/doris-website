"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["336224"],{234493:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>i,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-statements/session/context/USE-DATABASE","title":"USE DATABASE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/session/context/USE-DATABASE.md","sourceDirName":"sql-manual/sql-statements/session/context","slug":"/sql-manual/sql-statements/session/context/USE-DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/session/context/USE-DATABASE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"USE DATABASE","language":"en"},"sidebar":"docs","previous":{"title":"SWITCH CATALOG","permalink":"/docs/3.0/sql-manual/sql-statements/session/context/SWITCH-CATALOG"},"next":{"title":"SET VARIABLE","permalink":"/docs/3.0/sql-manual/sql-statements/session/variable/SET-VARIABLE"}}'),r=s("785893"),l=s("250065");let c={title:"USE DATABASE",language:"en"},o=void 0,a={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Used to switch to the specified database or compute group."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"USE { [<catalog_name>.]<database_name>[@<compute_group_name>] | @<compute_group_name> }\n"})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Switch to the specified database."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<database_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the database to switch to.\nIf no catalog is specified, the current catalog is used by default."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Switch to the specified compute group only."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<compute_group_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the compute group to switch to."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Switch to the specified database."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<catalog_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the catalog to switch to."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<compute_group_name>"})]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The name of the compute group to switch to."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Privilege"}),(0,r.jsx)(n.th,{children:"Object"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SELECT_PRIV"}),(0,r.jsx)(n.td,{children:"Catalog, Database"}),(0,r.jsx)(n.td,{children:"SELECT_PRIV privilege is required on the catalog or database to switch to."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"USAGE_PRIV"}),(0,r.jsx)(n.td,{children:"Compute Group"}),(0,r.jsx)(n.td,{children:"USAGE_PRIV privilege is required on the compute group to switch to."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"demo"})," database exists, try to use it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"use demo;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"demo"})," database exists under the ",(0,r.jsx)(n.code,{children:"hms_catalog"})," catalog, try to switch to ",(0,r.jsx)(n.code,{children:"hms_catalog"})," and use it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"use hms_catalog.demo;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"demo"})," database exists in the current catalog and you want to use the compute group named 'cg1', try to access it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"use demo@cg1;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you only want to use the compute group named 'cg1', try to access it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"use @cg1;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var t=s(667294);let r={},l=t.createContext(r);function c(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);