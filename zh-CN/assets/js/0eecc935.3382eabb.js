"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["801032"],{284453:function(n,t,e){e.r(t),e.d(t,{metadata:()=>o,contentTitle:()=>a,default:()=>d,assets:()=>u,toc:()=>r,frontMatter:()=>l});var o=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count","title":"ORTHOGONAL_BITMAP_UNION_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ORTHOGONAL_BITMAP_UNION_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count"},"next":{"title":"BITMAP_XOR_COUNT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-xor-count"}}'),i=e("785893"),s=e("250065");let l={title:"ORTHOGONAL_BITMAP_UNION_COUNT",language:"zh-CN"},a=void 0,u={},r=[{value:"orthogonal_bitmap_union_count",id:"orthogonal_bitmap_union_count",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function c(n){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"orthogonal_bitmap_union_count",children:"orthogonal_bitmap_union_count"}),"\n",(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"BITMAP ORTHOGONAL_BITMAP_UNION_COUNT(bitmap_column, column_to_filter, filter_values)"}),"\n\u6C42bitmap\u5E76\u96C6\u5927\u5C0F\u7684\u51FD\u6570, \u53C2\u6570\u7C7B\u578B\u662Fbitmap\uFF0C\u662F\u5F85\u6C42\u5E76\u96C6count\u7684\u5217"]}),"\n",(0,i.jsx)(t.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"mysql> select orthogonal_bitmap_union_count(members) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+------------------------------------------+\n| orthogonal_bitmap_union_count(`members`) |\n+------------------------------------------+\n|                                286957811 |\n+------------------------------------------+\n1 row in set (2.645 sec)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"ORTHOGONAL_BITMAP_UNION_COUNT,BITMAP\n"})})]})}function d(n={}){let{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return a},a:function(){return l}});var o=e(667294);let i={},s=o.createContext(i);function l(n){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),o.createElement(s.Provider,{value:t},n.children)}}}]);