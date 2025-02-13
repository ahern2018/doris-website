"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["298578"],{853731:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-first-index","title":"ARRAY_FIRST_INDEX","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-first-index.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-first-index","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-first-index","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_FIRST_INDEX","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_EXISTS","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-exists"},"next":{"title":"ARRAY_LAST_INDEX","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-last-index"}}'),s=r("785893"),t=r("250065");let l={title:"ARRAY_FIRST_INDEX",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Use an lambda expression as an input parameter to perform corresponding expression calculations on the internal data of other input ARRAY parameters. Returns the first index such that the return value of ",(0,s.jsx)(n.code,{children:"lambda(array1[i], ...)"})," is not 0. Return 0 if such index is not found."]}),"\n",(0,s.jsx)(n.p,{children:"There are one or more parameters input in the lambda expression, and the number of elements of all input arrays must be the same. Legal scalar functions can be executed in lambda, aggregate functions, etc. are not supported."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ARRAY_FIRST_INDEX(<lambda>, <arr> [, ...])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<lambda>"})}),(0,s.jsx)(n.td,{children:"A lambda expression where the input parameters must match the number of columns in the given array. The expression can execute valid scalar functions but does not support aggregate functions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<arr>"})}),(0,s.jsx)(n.td,{children:"ARRAY array"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns the index of the first non-zero value. If no such index is found, returns 0."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select array_first_index(x->x+1>3, [2, 3, 4]);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) + 1 > 3, ARRAY(2, 3, 4))) |\n+-------------------------------------------------------------------+\n|                                                                 2 |\n+-------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select array_first_index(x -> x is null, [null, 1, 2]);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) IS NULL, ARRAY(NULL, 1, 2))) |\n+----------------------------------------------------------------------+\n|                                                                    1 |\n+----------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select array_first_index(x->power(x,2)>10, [1, 2, 3, 4]);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------------------------+\n| array_first_index(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4))) |\n+---------------------------------------------------------------------------------+\n|                                                                               4 |\n+---------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select col2, col3, array_first_index((x,y)->x>y, col2, col3) from array_test;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+--------------+--------------+---------------------------------------------------------------------+\n| col2         | col3         | array_first_index(array_map([x, y] -> x(0) > y(1), `col2`, `col3`)) |\n+--------------+--------------+---------------------------------------------------------------------+\n| [1, 2, 3]    | [3, 4, 5]    |                                                                   0 |\n| [1, NULL, 2] | [NULL, 3, 1] |                                                                   3 |\n| [1, 2, 3]    | [9, 8, 7]    |                                                                   0 |\n| NULL         | NULL         |                                                                   0 |\n+--------------+--------------+---------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var a=r(667294);let s={},t=a.createContext(s);function l(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);