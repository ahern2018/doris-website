"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["144378"],{961730:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>o,assets:()=>c,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-subset-in-range","title":"BITMAP_SUBSET_IN_RANGE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-subset-in-range.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-subset-in-range","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-subset-in-range","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_SUBSET_IN_RANGE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_SUBSET_LIMIT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-subset-limit"},"next":{"title":"SUB_BITMAP","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/sub-bitmap"}}'),i=t("785893"),l=t("250065");let a={title:"BITMAP_SUBSET_IN_RANGE",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE Bitmap \u6307\u5B9A\u8303\u56F4\u5185\u7684\u5B50\u96C6(\u4E0D\u5305\u62EC\u8303\u56F4\u7ED3\u675F)\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"bitmap_subset_in_range(<bitmap>, <range_start_include>, <range_end_exclude>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<bitmap>"})}),(0,i.jsx)(e.td,{children:"Bitmap \u503C"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<range_start_include>"})}),(0,i.jsx)(e.td,{children:"\u8303\u56F4\u5F00\u59CB\uFF08\u5305\u542B\uFF09"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<range_end_exclude>"})}),(0,i.jsx)(e.td,{children:"\u8303\u56F4\u7ED3\u675F\uFF08\u4E0D\u5305\u542B\uFF09"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u6307\u5B9A\u8303\u56F4\u7684\u5B50\u96C6 Bitmap\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u83B7\u53D6 Bitmap \u4E2D\u4F4D\u4E8E\u8303\u56F4 0 \u5230 9 \u5185\u7684\u5B50\u96C6\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 0, 9)) value;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-----------+\n| value     |\n+-----------+\n| 1,2,3,4,5 |\n+-----------+\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u83B7\u53D6 Bitmap \u4E2D\u4F4D\u4E8E\u8303\u56F4 2 \u5230 3 \u5185\u7684\u5B50\u96C6\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 2, 3)) value;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+-------+\n| value |\n+-------+\n| 2     |\n+-------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);