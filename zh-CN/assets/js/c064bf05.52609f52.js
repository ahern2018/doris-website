"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["497119"],{401856:function(n,t,e){e.r(t),e.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>d,assets:()=>l,toc:()=>o,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-xor-count","title":"BITMAP_XOR_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-xor-count.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-xor-count","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-xor-count","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_XOR_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-and-not-count"},"next":{"title":"BITMAP_OR_COUNT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-or-count"}}'),s=e("785893"),r=e("250065");let a={title:"BITMAP_XOR_COUNT",language:"zh-CN"},c=void 0,l={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function m(n){let t={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(t.p,{children:"\u5C06\u4E24\u4E2A\u53CA\u4EE5\u4E0A Bitmap \u96C6\u5408\u8FDB\u884C\u5F02\u6216\u64CD\u4F5C\u5E76\u8FD4\u56DE\u7ED3\u679C\u96C6\u7684\u5927\u5C0F\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"bitmap_xor_count(<bitmap1>, <bitmap2>, ..., <bitmapN>)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53C2\u6570"}),(0,s.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<bitmap1>"})}),(0,s.jsx)(t.td,{children:"\u7B2C\u4E00\u4E2A Bitmap"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<bitmap2>"})}),(0,s.jsx)(t.td,{children:"\u7B2C\u4E8C\u4E2A Bitmap"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"..."}),(0,s.jsx)(t.td,{children:"..."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<bitmapN>"})}),(0,s.jsx)(t.td,{children:"\u7B2C N \u4E2A Bitmap"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsxs)(t.p,{children:["\u5C06\u4E24\u4E2A\u53CA\u4EE5\u4E0A Bitmap \u96C6\u5408\u8FDB\u884C\u5F02\u6216\u64CD\u4F5C\u5F97\u5230\u7684\u5DEE\u96C6 Bitmap \u5143\u7D20\u6570\u91CF\u3002",(0,s.jsx)(t.br,{}),"\n\u5F53\u8F93\u5165\u7684 Bitmap \u53C2\u6570\u4E2D\u6709 ",(0,s.jsx)(t.code,{children:"NULL"})," \u65F6\uFF0C\u7ED3\u679C\u4E3A ",(0,s.jsx)(t.code,{children:"NULL"}),"\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(t.p,{children:"\u8BA1\u7B97\u4E24\u4E2A Bitmap \u7684\u5BF9\u79F0\u5DEE\u96C6\u4E2D\u7684\u5143\u7D20\u6570\u91CF\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'));\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+----------------------------------------------------------------------------+\n|                                                                          4 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u76F8\u540C Bitmap \u7684\u5BF9\u79F0\u5DEE\u96C6\u4E2D\u7684\u5143\u7D20\u6570\u91CF\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3'));\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+----------------------------------------------------------------------------+\n|                                                                          0 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u4E0D\u540C Bitmap \u7684\u5BF9\u79F0\u5DEE\u96C6\u4E2D\u7684\u5143\u7D20\u6570\u91CF\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('4,5,6'));\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('4,5,6')) |\n+----------------------------------------------------------------------------+\n|                                                                          6 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8BA1\u7B97\u4E09\u4E2A Bitmap \u7684\u5BF9\u79F0\u5DEE\u96C6\u4E2D\u7684\u5143\u7D20\u6570\u91CF\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'));\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+-----------------------------------------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'))    |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         3 |\n+-----------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8BA1\u7B97\u591A\u4E2A Bitmap\uFF08\u5305\u62EC\u4E00\u4E2A\u7A7A Bitmap\uFF09\u7684\u5BF9\u79F0\u5DEE\u96C6\u4E2D\u7684\u5143\u7D20\u6570\u91CF\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty());\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+---------------------------------------------------------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty())    |\n+---------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                         3 |\n+---------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u8BA1\u7B97\u591A\u4E2A Bitmap\uFF08\u5305\u62EC\u4E00\u4E2A ",(0,s.jsx)(t.code,{children:"NULL"})," \u503C\uFF09\u7684\u5BF9\u79F0\u5DEE\u96C6\u4E2D\u7684\u5143\u7D20\u6570\u91CF\uFF1A"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL);\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"+-----------------------------------------------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL)   |\n+-----------------------------------------------------------------------------------------------------------------+\n|                                                                                                            NULL |\n+-----------------------------------------------------------------------------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return c},a:function(){return a}});var i=e(667294);let s={},r=i.createContext(s);function a(n){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);