"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["561512"],{310729:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-slice","title":"ARRAY_SLICE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-slice.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-slice","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-slice","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_SLICE","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_REMOVE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-remove"},"next":{"title":"ARRAY_SORT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-sort"}}'),a=t("785893"),s=t("250065");let i={title:"ARRAY_SLICE",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Specify the starting position and length to extract a portion of elements from an array to form a new sub-array"}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ARRAY_SLICE(<arr>, <off>, <len>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<arr>"})}),(0,a.jsx)(n.td,{children:"Corresponding array"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<off>"})}),(0,a.jsx)(n.td,{children:"Starting position. If off is a positive number, it indicates the offset from the left. If off is a negative number, it indicates the offset from the right. When the specified off is not within the actual range of the array, an empty array is returned."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<len>"})}),(0,a.jsx)(n.td,{children:"If len is a negative number, it means the length is 0."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Returns a subarray containing all elements of the specified length starting from the specified position. If the input parameter is NULL, it returns NULL."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT ARRAY_SLICE([1, 2, 3, 6],2,3),ARRAY_SLICE([1, 4, 3, 5, NULL],-2,1),ARRAY_SLICE([1, 3, 5],0);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+---------------------------------+----------------------------------------+---------------------------+\n| array_slice([1, 2, 3, 6], 2, 3) | array_slice([1, 4, 3, 5, NULL], -2, 1) | array_slice([1, 3, 5], 0) |\n+---------------------------------+----------------------------------------+---------------------------+\n| [2, 3, 6]                       | [5]                                    | []                        |\n+---------------------------------+----------------------------------------+---------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let a={},s=r.createContext(a);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);