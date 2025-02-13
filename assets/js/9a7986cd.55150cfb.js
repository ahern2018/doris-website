"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["447572"],{471026:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>u,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-max","title":"BITMAP_MAX","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-max.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-max","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-max","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_MAX","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_HAS_ANY","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-has-any"},"next":{"title":"BITMAP_MIN","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-min"}}'),a=t("785893"),i=t("250065");let l={title:"BITMAP_MAX",language:"en"},r=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Computes and returns the maximum value in a Bitmap."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"BITMAP_MAX(<bitmap>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<bitmap>"})}),(0,a.jsx)(n.td,{children:"A Bitmap type column or expression"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(n.p,{children:["The maximum value in the Bitmap.",(0,a.jsx)(n.br,{}),"\nReturns ",(0,a.jsx)(n.code,{children:"NULL"})," if the Bitmap is empty."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"To compute the maximum value in an empty Bitmap:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select bitmap_max(bitmap_from_string('')) value;\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------+\n| value |\n+-------+\n|  NULL |\n+-------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"To compute the maximum value in a Bitmap with multiple elements:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select bitmap_max(bitmap_from_string('1,9999999999')) value;\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------+\n| value      |\n+------------+\n| 9999999999 |\n+------------+\n"})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);