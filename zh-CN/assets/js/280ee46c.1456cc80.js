"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["262764"],{27890:function(a,r,n){n.r(r),n.d(r,{metadata:()=>e,contentTitle:()=>t,default:()=>y,assets:()=>d,toc:()=>i,frontMatter:()=>l});var e=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-map","title":"ARRAY_MAP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-map.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-map","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-map","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_MAP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_MIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-min"},"next":{"title":"ARRAY_FILTER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-filter"}}'),c=n("785893"),s=n("250065");let l={title:"ARRAY_MAP",language:"zh-CN"},t=void 0,d={},i=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(a){let r={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...a.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(r.p,{children:"\u4F7F\u7528\u4E00\u4E2A lambda \u8868\u8FBE\u5F0F\u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\uFF0C\u5BF9\u5176\u4ED6\u7684\u8F93\u5165 ARRAY \u53C2\u6570\u7684\u5185\u90E8\u6570\u636E\u505A\u5BF9\u5E94\u8868\u8FBE\u5F0F\u8BA1\u7B97\u3002\n\u5728 lambda \u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u5FC5\u987B\u548C\u540E\u9762\u7684\u8F93\u5165 array \u5217\u6570\u91CF\u4E00\u81F4\u3002\n\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002"}),"\n",(0,c.jsx)(r.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"ARRAY_MAP(lambda, <arr> [ , <arr> ... ] )\n"})}),"\n",(0,c.jsx)(r.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"\u53C2\u6570"}),(0,c.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"lambda"})}),(0,c.jsx)(r.td,{children:"lambda \u8868\u8FBE\u5F0F\uFF0C\u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u5FC5\u987B\u548C\u540E\u9762\u7684\u8F93\u5165 array \u5217\u6570\u91CF\u4E00\u81F4\u3002\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"<arr>"})}),(0,c.jsx)(r.td,{children:"ARRAY\u6570\u7EC4"})]})]})]}),"\n",(0,c.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(r.p,{children:"\u7ECF\u8FC7\u8868\u8FBE\u5F0Flambda\u8BA1\u7B97\u4E4B\u540EARRAY\u6570\u7EC4\u3002"}),"\n",(0,c.jsx)(r.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE array_test2 (\n                             id INT,\n                             c_array1 ARRAY<INT>,\n                             c_array2 ARRAY<INT>\n)\n    duplicate key (id)\ndistributed by hash(id) buckets 1\nproperties(\n    'replication_num' = '1'\n    );\nINSERT INTO array_test2 (id, c_array1, c_array2) VALUES\n                                                     (1, [1, 2, 3, 4, 5], [10, 20, -40, 80, -100]),\n                                                     (2, [6, 7, 8], [10, 12, 13]),\n                                                     (3, [1], [-100]),\n                                                     (4, NULL, NULL);\nselect *, array_map(x->x,[1,2,3]) from array_test2 order by id;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n|    3 | [1]             | [-100]                  | [1, 2, 3]                              |\n|    4 | NULL            | NULL                    | [1, 2, 3]                              |\n+------+-----------------+-------------------------+----------------------------------------+\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"select *, array_map(x->x+2,[1,2,3]) from array_test2 order by id;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+--------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) + 2, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+--------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [3, 4, 5]                                  |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [3, 4, 5]                                  |\n|    3 | [1]             | [-100]                  | [3, 4, 5]                                  |\n|    4 | NULL            | NULL                    | [3, 4, 5]                                  |\n+------+-----------------+-------------------------+--------------------------------------------+\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"select c_array1, c_array2, array_map(x->x,[1,2,3]) from array_test2 order by id;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------+----------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n| [1]             | [-100]                  | [1, 2, 3]                              |\n| NULL            | NULL                    | [1, 2, 3]                              |\n+-----------------+-------------------------+----------------------------------------+\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"select c_array1, c_array2, array_map(x->power(x,2),[1,2,3]) from array_test2 order by id;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> power(x(0), 2.0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 4, 9]                                          |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 4, 9]                                          |\n| [1]             | [-100]                  | [1, 4, 9]                                          |\n| NULL            | NULL                    | [1, 4, 9]                                          |\n+-----------------+-------------------------+----------------------------------------------------+\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"select c_array1, c_array2, array_map((x,y)->x+y,c_array1,c_array2) from array_test2 order by id;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------+----------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> x(0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 22, -37, 84, -95]                                   |\n| [6, 7, 8]       | [10, 12, 13]            | [16, 19, 21]                                             |\n| [1]             | [-100]                  | [-99]                                                    |\n| NULL            | NULL                    | NULL                                                     |\n+-----------------+-------------------------+----------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"select c_array1, c_array2, array_map((x,y)->power(x,2)+y,c_array1, c_array2) from array_test2 order by id;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------+----------------------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> power(x(0), 2.0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 24, -31, 96, -75]                                               |\n| [6, 7, 8]       | [10, 12, 13]            | [46, 61, 77]                                                         |\n| [1]             | [-100]                  | [-99]                                                                |\n| NULL            | NULL                    | NULL                                                                 |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"select *,array_map(x->x=3,c_array1) from array_test2 order by id;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) = 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 0]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"select *,array_map(x->x>3,c_array1) from array_test2 order by id;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) > 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 0, 1, 1]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"select *,array_map((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+----------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                |\n|    3 | [1]             | [-100]                  | [1]                                                      |\n|    4 | NULL            | NULL                    | NULL                                                     |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-sql",children:"select array_map(x->cast(x as string), c_array1) from test_array_map_function;\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-text",children:"+-----------------+-------------------------------------------------------+\n| c_array1        | array_map([x] -> CAST(x(0) AS CHARACTER), `c_array1`) |\n+-----------------+-------------------------------------------------------+\n| [1, 2, 3, 4, 5] | ['1', '2', '3', '4', '5']                             |\n| [6, 7, 8]       | ['6', '7', '8']                                       |\n| []              | []                                                    |\n| NULL            | NULL                                                  |\n+-----------------+-------------------------------------------------------+\n"})})]})}function y(a={}){let{wrapper:r}={...(0,s.a)(),...a.components};return r?(0,c.jsx)(r,{...a,children:(0,c.jsx)(o,{...a})}):o(a)}},250065:function(a,r,n){n.d(r,{Z:function(){return t},a:function(){return l}});var e=n(667294);let c={},s=e.createContext(c);function l(a){let r=e.useContext(s);return e.useMemo(function(){return"function"==typeof a?a(r):{...r,...a}},[r,a])}function t(a){let r;return r=a.disableParentContext?"function"==typeof a.components?a.components(c):a.components||c:l(a.components),e.createElement(s.Provider,{value:r},a.children)}}}]);