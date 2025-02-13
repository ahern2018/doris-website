"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["704950"],{707283:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/sub-bitmap","title":"SUB_BITMAP","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/bitmap-functions/sub-bitmap.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/sub-bitmap","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/sub-bitmap","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SUB_BITMAP","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_SUBSET_IN_RANGE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-subset-in-range"},"next":{"title":"BITMAP_COUNT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-count"}}'),s=t("785893"),a=t("250065");let l={title:"SUB_BITMAP",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Extracts a subset of Bitmap elements starting from a specified position and limited by a specified cardinality limit, returning the subset as a new Bitmap."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SUB_BITMAP(<bitmap>, <position>, <cardinality_limit>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<bitmap>"})}),(0,s.jsx)(e.td,{children:"The Bitmap value"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<position>"})}),(0,s.jsx)(e.td,{children:"The starting position (inclusive)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<cardinality_limit>"})}),(0,s.jsx)(e.td,{children:"The maximum number of elements"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(e.p,{children:"A subset Bitmap within the specified range and limit."}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.p,{children:"To get a subset of a Bitmap starting from position 0 with a cardinality limit of 3:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,0,1,2,3,1,5'), 0, 3)) value;\n"})}),"\n",(0,s.jsx)(e.p,{children:"The result will be:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-------+\n| value |\n+-------+\n| 0,1,2 |\n+-------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"To get a subset of a Bitmap starting from position -3 with a cardinality limit of 2:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,0,1,2,3,1,5'), -3, 2)) value;\n"})}),"\n",(0,s.jsx)(e.p,{children:"The result will be:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-------+\n| value |\n+-------+\n| 2,3   |\n+-------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"To get a subset of a Bitmap starting from position 2 with a cardinality limit of 100:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,0,1,2,3,1,5'), 2, 100)) value;\n"})}),"\n",(0,s.jsx)(e.p,{children:"The result will be:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+-------+\n| value |\n+-------+\n| 2,3,5 |\n+-------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var i=t(667294);let s={},a=i.createContext(s);function l(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);