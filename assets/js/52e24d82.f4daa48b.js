"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["556366"],{163337:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-array","title":"BITMAP_FROM_ARRAY","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-array.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-array","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-array","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_FROM_ARRAY","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_TO_ARRAY","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-array"},"next":{"title":"BITMAP_EMPTY","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-empty"}}'),a=t("785893"),r=t("250065");let i={title:"BITMAP_FROM_ARRAY",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.p,{children:"Converts an array of TINYINT/SMALLINT/INT/BIGINT type to a BITMAP. When the input field is illegal, the result returns NULL."}),"\n",(0,a.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"BITMAP_FROM_ARRAY(<arr>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Parameter"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<arr>"})}),(0,a.jsx)(e.td,{children:"integer array"})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(e.p,{children:"Returns a BITMAP"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"When the input field is invalid, the result is NULL"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT bitmap_to_string(bitmap_from_array(array(1, 0, 1, 1, 0, 1, 0))) AS bs;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------+\n| bs   |\n+------+\n| 0,1  |\n+------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);