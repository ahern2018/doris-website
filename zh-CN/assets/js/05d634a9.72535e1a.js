"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["436446"],{734260:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>s,default:()=>p,assets:()=>r,toc:()=>c,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate","title":"ORTHOGONAL_BITMAP_EXPR_CALCULATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ORTHOGONAL_BITMAP_EXPR_CALCULATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ORTHOGONAL_BITMAP_INTERSECT_COUNT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect-count"},"next":{"title":"ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate-count"}}'),l=n("785893"),o=n("250065");let i={title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE",language:"zh-CN"},s=void 0,r={},c=[{value:"orthogonal_bitmap_expr_calculate",id:"orthogonal_bitmap_expr_calculate",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(e){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"orthogonal_bitmap_expr_calculate",children:"orthogonal_bitmap_expr_calculate"}),"\n",(0,l.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"BITMAP ORTHOGONAL_BITMAP_EXPR_CALCULATE(bitmap_column, column_to_filter, input_string)"}),"\n\u6C42\u8868\u8FBE\u5F0Fbitmap\u4EA4\u5E76\u5DEE\u96C6\u5408\u8BA1\u7B97\u51FD\u6570, \u7B2C\u4E00\u4E2A\u53C2\u6570\u662FBitmap\u5217\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u7528\u6765\u8FC7\u6EE4\u7684\u7EF4\u5EA6\u5217\uFF0C\u5373\u8BA1\u7B97\u7684key\u5217\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u8BA1\u7B97\u8868\u8FBE\u5F0F\u5B57\u7B26\u4E32\uFF0C\u542B\u4E49\u662F\u4F9D\u636Ekey\u5217\u8FDB\u884Cbitmap\u4EA4\u5E76\u5DEE\u96C6\u8868\u8FBE\u5F0F\u8BA1\u7B97\n\u8868\u8FBE\u5F0F\u652F\u6301\u7684\u8BA1\u7B97\u7B26\uFF1A& \u4EE3\u8868\u4EA4\u96C6\u8BA1\u7B97\uFF0C| \u4EE3\u8868\u5E76\u96C6\u8BA1\u7B97\uFF0C- \u4EE3\u8868\u5DEE\u96C6\u8BA1\u7B97, ^ \u4EE3\u8868\u5F02\u6216\u8BA1\u7B97\uFF0C\\ \u4EE3\u8868\u8F6C\u4E49\u5B57\u7B26"]}),"\n",(0,l.jsx)(t.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"select orthogonal_bitmap_expr_calculate(user_id, tag, '(833736|999777)&(1308083|231207)&(1000|20000-30000)') from user_tag_bitmap where tag in (833736,999777,130808,231207,1000,20000,30000);\n\u6CE8\uFF1A1000\u300120000\u300130000\u7B49\u6574\u5F62tag\uFF0C\u4EE3\u8868\u7528\u6237\u4E0D\u540C\u6807\u7B7E\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"select orthogonal_bitmap_expr_calculate(user_id, tag, '(A:a/b|B:2\\\\-4)&(C:1-D:12)&E:23') from user_str_tag_bitmap where tag in ('A:a/b', 'B:2-4', 'C:1', 'D:12', 'E:23');\n \u6CE8\uFF1A'A:a/b', 'B:2-4'\u7B49\u662F\u5B57\u7B26\u4E32\u7C7B\u578Btag\uFF0C\u4EE3\u8868\u7528\u6237\u4E0D\u540C\u6807\u7B7E, \u5176\u4E2D'B:2-4'\u9700\u8981\u8F6C\u4E49\u6210'B:2\\\\-4'\n"})}),"\n",(0,l.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(t.p,{children:"ORTHOGONAL_BITMAP_EXPR_CALCULATE,BITMAP"})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var a=n(667294);let l={},o=a.createContext(l);function i(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);