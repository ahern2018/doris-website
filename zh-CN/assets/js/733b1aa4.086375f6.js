"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["595568"],{475023:function(n,r,e){e.r(r),e.d(r,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>c});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-sortby","title":"ARRAY_SORTBY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/array-functions/array-sortby.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-sortby","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-sortby","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_SORTBY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_REVERSE_SORT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-reverse-sort"},"next":{"title":"ARRAY_SPLIT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-split"}}'),s=e("785893"),t=e("250065");let c={title:"ARRAY_SORTBY",language:"zh-CN"},l=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let r={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(r.p,{children:"\u9996\u5148\u5C06 key \u5217\u5347\u5E8F\u6392\u5217\uFF0C\u7136\u540E\u5C06 src \u5217\u6309\u6B64\u987A\u5E8F\u6392\u5E8F\u540E\u7684\u5BF9\u5E94\u5217\u505A\u4E3A\u7ED3\u679C\u8FD4\u56DE;\n\u5982\u679C\u8F93\u5165\u6570\u7EC4 src \u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL\u3002\n\u5982\u679C\u8F93\u5165\u6570\u7EC4 key \u4E3A NULL\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE src \u6570\u7EC4\u3002\n\u5982\u679C\u8F93\u5165\u6570\u7EC4 key \u5143\u7D20\u5305\u542B NULL, \u5219\u8F93\u51FA\u7684\u6392\u5E8F\u6570\u7EC4\u4F1A\u5C06 NULL \u653E\u5728\u6700\u524D\u9762\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"ARRAY_SORTBY(<src>, <key>)\nARRAY_SORTBY(<lambda>, <arr> [, ...])\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u53C2\u6570"}),(0,s.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"<lambda>"})}),(0,s.jsx)(r.td,{children:"lambda \u8868\u8FBE\u5F0F\uFF0C\u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u5FC5\u987B\u548C\u540E\u9762\u7684\u8F93\u5165 array \u5217\u6570\u91CF\u4E00\u81F4\u3002\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"<arr>"})}),(0,s.jsx)(r.td,{children:"ARRAY\u6570\u7EC4"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(r.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6392\u5E8F\u540E\u7684 ARRAY \u7C7B\u578B\u7684\u7ED3\u679C"}),"\n",(0,s.jsx)(r.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select array_sortby(['a','b','c'],[3,2,1]);\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+----------------------------------------------------+\n| array_sortby(ARRAY('a', 'b', 'c'), ARRAY(3, 2, 1)) |\n+----------------------------------------------------+\n| ['c', 'b', 'a']                                    |\n+----------------------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select array_sortby([1,2,3,4,5],[10,5,1,20,80]);\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+-------------------------------------------------------------+\n| array_sortby(ARRAY(1, 2, 3, 4, 5), ARRAY(10, 5, 1, 20, 80)) |\n+-------------------------------------------------------------+\n| [3, 2, 1, 4, 5]                                             |\n+-------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select *,array_sortby(c_array1,c_array2) from test_array_sortby order by id;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+------+-----------------+-------------------------+--------------------------------------+\n| id   | c_array1        | c_array2                | array_sortby(`c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+--------------------------------------+\n|    0 | NULL            | [2]                     | NULL                                 |\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [5, 3, 1, 2, 4]                      |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [6, 7, 8]                            |\n|    3 | [1]             | [-100]                  | [1]                                  |\n|    4 | NULL            | NULL                    | NULL                                 |\n|    5 | [3]             | NULL                    | [3]                                  |\n|    6 | [1, 2]          | [2, 1]                  | [2, 1]                               |\n|    7 | [NULL]          | [NULL]                  | [NULL]                               |\n|    8 | [1, 2, 3]       | [3, 2, 1]               | [3, 2, 1]                            |\n+------+-----------------+-------------------------+--------------------------------------+\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select *, array_map((x,y)->(y+x),c_array1,c_array2) as arr_sum,array_sortby((x,y)->(y+x),c_array1,c_array2) as arr_sort from array_test2;\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"+------+-----------------+--------------+----------------+-----------------+\n| id   | c_array1        | c_array2     | arr_sum        | arr_sort        |\n+------+-----------------+--------------+----------------+-----------------+\n|    1 | [1, 2, 3]       | [10, 11, 12] | [11, 13, 15]   | [1, 2, 3]       |\n|    2 | [4, 3, 5]       | [10, 20, 30] | [14, 23, 35]   | [4, 3, 5]       |\n|    3 | [-40, 30, -100] | [30, 10, 20] | [-10, 40, -80] | [-100, -40, 30] |\n+------+-----------------+--------------+----------------+-----------------+\n"})})]})}function u(n={}){let{wrapper:r}={...(0,t.a)(),...n.components};return r?(0,s.jsx)(r,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,r,e){e.d(r,{Z:function(){return l},a:function(){return c}});var a=e(667294);let s={},t=a.createContext(s);function c(n){let r=a.useContext(t);return a.useMemo(function(){return"function"==typeof n?n(r):{...r,...n}},[r,n])}function l(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),a.createElement(t.Provider,{value:r},n.children)}}}]);