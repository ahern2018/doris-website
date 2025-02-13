"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["242186"],{519723:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/bitmap-union-int","title":"bitmap-union-int","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/bitmap-union-int.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/bitmap-union-int","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/bitmap-union-int","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"bitmap-union-int","language":"en"},"sidebar":"docs","previous":{"title":"bitmap_union_count","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/bitmap-union-count"},"next":{"title":"hll_raw_agg","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/hll-raw-agg"}}'),s=t("785893"),a=t("250065");let r={title:"bitmap-union-int",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Counts the number of distinct values in columns of type TINYINT, SMALLINT and INT. The return value is the same as COUNT(DISTINCT expr)"}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"BITMAP_UNION_INT(<expr>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<expr>"})}),(0,s.jsx)(e.td,{children:"Supports columns or column expressions of type TINYINT, SMALLINT and INT"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(e.p,{children:"Returns the number of distinct values in a column."}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select dt,page,bitmap_to_string(user_id) from pv_bitmap;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+------+------+---------------------------+\n| dt   | page | bitmap_to_string(user_id) |\n+------+------+---------------------------+\n|    1 | 100  | 100,200,300               |\n|    1 | 300  | 300                       |\n|    2 | 200  | 300                       |\n+------+------+---------------------------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select bitmap_union_int(dt) from pv_bitmap;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+----------------------+\n| bitmap_union_int(dt) |\n+----------------------+\n|                    2 |\n+----------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var i=t(667294);let s={},a=i.createContext(s);function r(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);