"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["435709"],{496771:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not","title":"BITMAP_AND_NOT,BITMAP_ANDNOT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_AND_NOT,BITMAP_ANDNOT","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_NOT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-not"},"next":{"title":"BITMAP_SUBSET_LIMIT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-subset-limit"}}'),a=t("785893"),i=t("250065");let l={title:"BITMAP_AND_NOT,BITMAP_ANDNOT",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:["Perform a NOT operation on two BITMAPs and return the result. The first input parameter is called ",(0,a.jsx)(e.code,{children:"base BITMAP"})," and the second is called ",(0,a.jsx)(e.code,{children:"exclude BITMAP"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"alias",children:"Alias"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"BITMAP_ANDNOT"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"BITMAP_AND_NOT(<bitmap1>, <bitmap2>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Parameter"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<bitmap1>"})}),(0,a.jsxs)(e.td,{children:[(0,a.jsx)(e.code,{children:"Base BITMAP"})," to be negated"]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<bitmap2>"})}),(0,a.jsxs)(e.td,{children:[(0,a.jsx)(e.code,{children:"Exclusion BITMAP"})," to be negated"]})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(e.p,{children:"Returns a BITMAP."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"If the parameter has a null value, returns NULL"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select bitmap_count(bitmap_and_not(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'))) cnt;\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')));\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'))) |\n+--------------------------------------------------------------------------------------------+\n| 1,2                                                                                        |\n+--------------------------------------------------------------------------------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'),bitmap_empty()));\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'), bitmap_empty())) |\n+-------------------------------------------------------------------------------+\n| 1,2,3                                                                         |\n+-------------------------------------------------------------------------------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'),NULL));\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'), NULL)) |\n+---------------------------------------------------------------------+\n| NULL                                                                |\n+---------------------------------------------------------------------+\n"})})]})}function m(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);