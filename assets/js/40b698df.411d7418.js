"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["188221"],{586492:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/distance-functions/l1-distance","title":"l1_distance","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/distance-functions/l1-distance.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/distance-functions","slug":"/sql-manual/sql-functions/scalar-functions/distance-functions/l1-distance","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/distance-functions/l1-distance","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"l1_distance","language":"en"},"sidebar":"docs","previous":{"title":"inner_product","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/distance-functions/inner-product"},"next":{"title":"l2_distance","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/distance-functions/l2-distance"}}'),a=t("785893"),r=t("250065");let i={title:"l1_distance",language:"en"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Calculate the distance between two points in L1 space (vector values are coordinates)"}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"L1_DISTANCE(<array1>, <array2>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<array1>"})}),(0,a.jsx)(n.td,{children:"The first vector (the vector value is the coordinate). The subtypes of the input array are: TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE. The number of elements must be consistent with array2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<array2>"})}),(0,a.jsx)(n.td,{children:"The second vector (the vector value is the coordinate), the subtype of the input array supports: TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, the number of elements must be consistent with array1"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Returns the distance between two points (vector values are coordinates) in L1 space. If the input array is NULL, or any element in the array is NULL, then NULL is returned."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT L1_DISTANCE([4, 5], [6, 8]),L1_DISTANCE([3, 6], [4, 5]);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-----------------------------+-----------------------------+\n| l1_distance([4, 5], [6, 8]) | l1_distance([3, 6], [4, 5]) |\n+-----------------------------+-----------------------------+\n|                           5 |                           2 |\n+-----------------------------+-----------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);