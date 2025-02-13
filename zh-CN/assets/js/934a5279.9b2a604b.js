"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["244615"],{164673:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>u,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range","title":"BITMAP_SUBSET_IN_RANGE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BITMAP_SUBSET_IN_RANGE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_SUBSET_LIMIT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit"},"next":{"title":"SUB_BITMAP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/sub-bitmap"}}'),i=t("785893"),a=t("250065");let r={title:"BITMAP_SUBSET_IN_RANGE",language:"zh-CN"},l=void 0,u={},o=[{value:"bitmap_subset_in_range",id:"bitmap_subset_in_range",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"bitmap_subset_in_range",children:"bitmap_subset_in_range"}),"\n",(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"BITMAP BITMAP_SUBSET_IN_RANGE(BITMAP src, BIGINT range_start, BIGINT range_end)"})}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE BITMAP \u6307\u5B9A\u8303\u56F4\u5185\u7684\u5B50\u96C6(\u4E0D\u5305\u62EC\u8303\u56F4\u7ED3\u675F)\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 0, 9)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,2,3,4,5 |\n+-----------+\n\nmysql> select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 2, 3)) value;\n+-------+\n| value |\n+-------+\n| 2     |\n+-------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"BITMAP_SUBSET_IN_RANGE,BITMAP_SUBSET,BITMAP\n"})})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);