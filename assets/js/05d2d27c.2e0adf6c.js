"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["918020"],{225806:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/hll-functions/hll-cardinality","title":"HLL_CARDINALITY","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/hll-functions/hll-cardinality.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/hll-functions","slug":"/sql-manual/sql-functions/scalar-functions/hll-functions/hll-cardinality","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/hll-functions/hll-cardinality","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"HLL_CARDINALITY","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_REMOVE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-remove"},"next":{"title":"HLL_EMPTY","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/hll-functions/hll-empty"}}'),s=t("785893"),a=t("250065");let i={title:"HLL_CARDINALITY",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HLL_CARDINALITY"})," calculates the cardinality of a HyperLogLog (HLL) type value. It is an approximate counting algorithm suitable for estimating the number of distinct elements in large datasets."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"HLL_CARDINALITY(<hll>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<hll>"})}),(0,s.jsx)(n.td,{children:"The HLL type value representing the dataset whose cardinality needs to be estimated."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns the estimated cardinality of the HLL type value, representing the number of distinct elements in the dataset."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select HLL_CARDINALITY(uv_set) from test_uv;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------------------+\n| hll_cardinality(`uv_set`) |\n+---------------------------+\n|                         3 |\n+---------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var l=t(667294);let s={},a=l.createContext(s);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);