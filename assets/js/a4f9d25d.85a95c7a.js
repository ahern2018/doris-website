"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["861203"],{161776:function(a,r,e){e.r(r),e.d(r,{metadata:()=>n,contentTitle:()=>l,default:()=>x,assets:()=>i,toc:()=>d,frontMatter:()=>t});var n=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-map","title":"ARRAY_MAP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-map.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-map","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-map","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_MAP","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_MIN","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-min"},"next":{"title":"ARRAY_FILTER","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-filter"}}'),s=e("785893"),c=e("250065");let t={title:"ARRAY_MAP",language:"en"},l=void 0,i={},d=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"example",id:"example",level:2}];function o(a){let r={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(r.p,{children:"Use a lambda expression as the input parameter to calculate the corresponding expression for the internal data of other input ARRAY parameters.\nThe number of parameters entered the lambda expression is 1 or more, which must be consistent with the number of input array columns.\nThe scalar functions can be executed in lambda, and aggregate functions are not supported."}),"\n",(0,s.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"ARRAY_MAP(lambda, <arr> [ , <arr> ... ] )\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"lambda"})}),(0,s.jsx)(r.td,{children:"A lambda expression with one or more input parameters, which must match the number of input arrays. The lambda can execute valid scalar functions but does not support aggregate functions."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"<arr>"})}),(0,s.jsx)(r.td,{children:"ARRAY array"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(r.p,{children:"An ARRAY processed through the lambda expression."}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE array_test2 (\n                             id INT,\n                             c_array1 ARRAY<INT>,\n                             c_array2 ARRAY<INT>\n)\n    duplicate key (id)\ndistributed by hash(id) buckets 1\nproperties(\n    'replication_num' = '1'\n    );\nINSERT INTO array_test2 (id, c_array1, c_array2) VALUES\n                                                     (1, [1, 2, 3, 4, 5], [10, 20, -40, 80, -100]),\n                                                     (2, [6, 7, 8], [10, 12, 13]),\n                                                     (3, [1], [-100]),\n                                                     (4, NULL, NULL);\nselect *, array_map(x->x,[1,2,3]) from array_test2 order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n|    3 | [1]             | [-100]                  | [1, 2, 3]                              |\n|    4 | NULL            | NULL                    | [1, 2, 3]                              |\n+------+-----------------+-------------------------+----------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select *, array_map(x->x+2,[1,2,3]) from array_test2 order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+--------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) + 2, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+--------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [3, 4, 5]                                  |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [3, 4, 5]                                  |\n|    3 | [1]             | [-100]                  | [3, 4, 5]                                  |\n|    4 | NULL            | NULL                    | [3, 4, 5]                                  |\n+------+-----------------+-------------------------+--------------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select c_array1, c_array2, array_map(x->x,[1,2,3]) from array_test2 order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------+----------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n| [1]             | [-100]                  | [1, 2, 3]                              |\n| NULL            | NULL                    | [1, 2, 3]                              |\n+-----------------+-------------------------+----------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select c_array1, c_array2, array_map(x->power(x,2),[1,2,3]) from array_test2 order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> power(x(0), 2.0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 4, 9]                                          |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 4, 9]                                          |\n| [1]             | [-100]                  | [1, 4, 9]                                          |\n| NULL            | NULL                    | [1, 4, 9]                                          |\n+-----------------+-------------------------+----------------------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select c_array1, c_array2, array_map((x,y)->x+y,c_array1,c_array2) from array_test2 order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------+----------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> x(0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 22, -37, 84, -95]                                   |\n| [6, 7, 8]       | [10, 12, 13]            | [16, 19, 21]                                             |\n| [1]             | [-100]                  | [-99]                                                    |\n| NULL            | NULL                    | NULL                                                     |\n+-----------------+-------------------------+----------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select c_array1, c_array2, array_map((x,y)->power(x,2)+y,c_array1, c_array2) from array_test2 order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------+----------------------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> power(x(0), 2.0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 24, -31, 96, -75]                                               |\n| [6, 7, 8]       | [10, 12, 13]            | [46, 61, 77]                                                         |\n| [1]             | [-100]                  | [-99]                                                                |\n| NULL            | NULL                    | NULL                                                                 |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select *,array_map(x->x=3,c_array1) from array_test2 order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) = 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 0]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select *,array_map(x->x>3,c_array1) from array_test2 order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) > 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 0, 1, 1]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select *,array_map((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+----------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                |\n|    3 | [1]             | [-100]                  | [1]                                                      |\n|    4 | NULL            | NULL                    | NULL                                                     |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select array_map(x->cast(x as string), c_array1) from test_array_map_function;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------------------------------------+\n| c_array1        | array_map([x] -> CAST(x(0) AS CHARACTER), `c_array1`) |\n+-----------------+-------------------------------------------------------+\n| [1, 2, 3, 4, 5] | ['1', '2', '3', '4', '5']                             |\n| [6, 7, 8]       | ['6', '7', '8']                                       |\n| []              | []                                                    |\n| NULL            | NULL                                                  |\n+-----------------+-------------------------------------------------------+\n"})})]})}function x(a={}){let{wrapper:r}={...(0,c.a)(),...a.components};return r?(0,s.jsx)(r,{...a,children:(0,s.jsx)(o,{...a})}):o(a)}},250065:function(a,r,e){e.d(r,{Z:function(){return l},a:function(){return t}});var n=e(667294);let s={},c=n.createContext(s);function t(a){let r=n.useContext(c);return n.useMemo(function(){return"function"==typeof a?a(r):{...r,...a}},[r,a])}function l(a){let r;return r=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:t(a.components),n.createElement(c.Provider,{value:r},a.children)}}}]);