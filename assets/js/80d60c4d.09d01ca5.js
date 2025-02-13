"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["829239"],{616698:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-xor-count","title":"BITMAP_XOR_COUNT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-xor-count.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-xor-count","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-xor-count","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_XOR_COUNT","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not-count"},"next":{"title":"BITMAP_OR_COUNT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or-count"}}'),s=t("785893"),r=t("250065");let a={title:"BITMAP_XOR_COUNT",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function m(e){let n={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Computes the symmetric difference (XOR operation) of two or more Bitmap sets and returns the count of elements in the result set."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"BITMAP_XOR_COUNT(<bitmap1>, <bitmap2>, ..., <bitmapN>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<bitmap1>"})}),(0,s.jsx)(n.td,{children:"The first Bitmap"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<bitmap2>"})}),(0,s.jsx)(n.td,{children:"The second Bitmap"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"..."}),(0,s.jsx)(n.td,{children:"..."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<bitmapN>"})}),(0,s.jsx)(n.td,{children:"The N-th Bitmap"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsxs)(n.p,{children:["The count of elements in the Bitmap resulting from the XOR operation of multiple Bitmaps.",(0,s.jsx)(n.br,{}),"\nReturns ",(0,s.jsx)(n.code,{children:"NULL"})," if any of the input Bitmap parameters is ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"To compute the count of elements in the symmetric difference of two Bitmaps:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'));\n"})}),"\n",(0,s.jsx)(n.p,{children:"The result will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+----------------------------------------------------------------------------+\n|                                                                          4 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"To compute the count of elements in the symmetric difference of two identical Bitmaps:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3'));\n"})}),"\n",(0,s.jsx)(n.p,{children:"The result will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+----------------------------------------------------------------------------+\n|                                                                          0 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"To compute the count of elements in the symmetric difference of two different Bitmaps:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('4,5,6'));\n"})}),"\n",(0,s.jsx)(n.p,{children:"The result will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('4,5,6')) |\n+----------------------------------------------------------------------------+\n|                                                                          6 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"To compute the count of elements in the symmetric difference of three Bitmaps:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'));\n"})}),"\n",(0,s.jsx)(n.p,{children:"The result will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'))    |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         3 |\n+-----------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"To compute the count of elements in the symmetric difference of multiple Bitmaps, including an empty Bitmap:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty());\n"})}),"\n",(0,s.jsx)(n.p,{children:"The result will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty())    |\n+---------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                         3 |\n+---------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To compute the count of elements in the symmetric difference of multiple Bitmaps, including a ",(0,s.jsx)(n.code,{children:"NULL"})," value:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL);\n"})}),"\n",(0,s.jsx)(n.p,{children:"The result will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL)   |\n+-----------------------------------------------------------------------------------------------------------------+\n|                                                                                                            NULL |\n+-----------------------------------------------------------------------------------------------------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);