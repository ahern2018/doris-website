"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["859439"],{643202:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/orthogonal-bitmap-intersect-count","title":"ORTHOGONAL_BITMAP_INTERSECT_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/orthogonal-bitmap-intersect-count.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/orthogonal-bitmap-intersect-count","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/orthogonal-bitmap-intersect-count","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ORTHOGONAL_BITMAP_INTERSECT_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ORTHOGONAL_BITMAP_INTERSECT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/orthogonal-bitmap-intersect"},"next":{"title":"ORTHOGONAL_BITMAP_UNION_COUNT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/orthogonal-bitmap-union-count"}}'),l=t("785893"),r=t("250065");let i={title:"ORTHOGONAL_BITMAP_INTERSECT_COUNT",language:"zh-CN"},o=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570\u8BF4\u660E",id:"\u53C2\u6570\u8BF4\u660E",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"ORTHOGONAL_BITMAP_INTERSECT_COUNT \u51FD\u6570\u8FD4\u56DE\u5BF9 Bitmap \u8868\u8FBE\u5F0F\u8FDB\u884C\u4EA4\u96C6\u8BA1\u7B97\u540E\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u6570\u91CF"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ORTHOGONAL_BITMAP_INTERSECT_COUNT(<bitmap_column>, <column_to_filter>, <filter_values>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570\u8BF4\u660E",children:"\u53C2\u6570\u8BF4\u660E"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"bitmap_column"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u83B7\u53D6\u503C\u7684 Bitmap \u7C7B\u578B\u8868\u8FBE\u5F0F"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"column_to_filter"})}),(0,l.jsx)(e.td,{children:"\u53EF\u9009\u3002\u9700\u8981\u8FDB\u884C\u8FC7\u6EE4\u7684\u7EF4\u5EA6\u5217"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"filter_values"})}),(0,l.jsx)(e.td,{children:"\u53EF\u9009\u3002\u53D8\u957F\u53C2\u6570\uFF0C\u7528\u4E8E\u8FC7\u6EE4\u7EF4\u5EA6\u5217\u7684\u4E0D\u540C\u53D6\u503C"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE BIGINT \u7C7B\u578B\u7684\u503C\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select orthogonal_bitmap_intersect_count(members, tag_group, 1150000, 1150001, 390006) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------------------------------------------+\n| orthogonal_bitmap_intersect_count(`members`, `tag_group`, 1150000, 1150001, 390006) |\n+-------------------------------------------------------------------------------------+\n|                                                                                   0 |\n+-------------------------------------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);