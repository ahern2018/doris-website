"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["354592"],{631362:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap","title":"TO_BITMAP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"TO_BITMAP","language":"en"},"sidebar":"docs","previous":{"title":"TO_IPV6_OR_NULL","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6-or-null"},"next":{"title":"BITMAP_HASH","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash"}}'),s=t("785893"),a=t("250065");let r={title:"TO_BITMAP",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Converts an unsigned bigint to a Bitmap."}),"\n",(0,s.jsx)(e.p,{children:"The input is an unsigned bigint with a value in the range 0 to 18446744073709551615, and the output is a Bitmap containing that element."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"TO_BITMAP(<expr>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<expr>"})}),(0,s.jsx)(e.td,{children:"An unsigned bigint with a range of 0 to 18446744073709551615"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsxs)(e.p,{children:["A Bitmap containing the corresponding bigint.",(0,s.jsx)(e.br,{}),"\nReturns ",(0,s.jsx)(e.code,{children:"NULL"})," if the input value is not within the specified range."]}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.p,{children:"To convert an integer to a Bitmap and count the number of elements in the Bitmap:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select bitmap_count(to_bitmap(10));\n"})}),"\n",(0,s.jsx)(e.p,{children:"The result will be:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"To convert a negative integer to a Bitmap, which is outside the valid range, and convert it to a string:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(to_bitmap(-1));\n"})}),"\n",(0,s.jsx)(e.p,{children:"The result will be:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+---------------------------------+\n| bitmap_to_string(to_bitmap(-1)) |\n+---------------------------------+\n|                                 |\n+---------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var i=t(667294);let s={},a=i.createContext(s);function r(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);