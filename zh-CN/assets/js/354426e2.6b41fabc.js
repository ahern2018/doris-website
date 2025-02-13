"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["752303"],{555298:function(n,t,e){e.r(t),e.d(t,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap","title":"TO_BITMAP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/to-bitmap","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TO_BITMAP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TO_IPV6_OR_NULL","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/ip-functions/to-ipv6-or-null"},"next":{"title":"BITMAP_HASH","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash"}}'),i=e("785893"),l=e("250065");let a={title:"TO_BITMAP",language:"zh-CN"},c=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(n){let t={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u5C06\u4E00\u4E2A\u65E0\u7B26\u53F7\u7684\u957F\u6574\u578B\u6570\u8F6C\u6362\u4E3A Bitmap\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u8F93\u5165\u4E3A\u53D6\u503C\u5728 0 ~ 18446744073709551615 \u533A\u95F4\u7684 unsigned bigint \uFF0C\u8F93\u51FA\u4E3A\u5305\u542B\u8BE5\u5143\u7D20\u7684bitmap\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"to_bitmap(<expr>)"})}),"\n",(0,i.jsx)(t.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u53C2\u6570"}),(0,i.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<expr>"})}),(0,i.jsx)(t.td,{children:"\u65E0\u7B26\u53F7\u7684\u957F\u6574\u578B\u6570, \u8303\u56F4\u4E3A 0 ~ 18446744073709551615"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(t.p,{children:["\u5305\u542B\u5BF9\u5E94\u957F\u6574\u578B\u6570\u7684 Bitmap\u3002",(0,i.jsx)(t.br,{}),"\n\u5F53\u8F93\u5165\u503C\u4E0D\u5728\u5BF9\u5E94\u8303\u56F4\u5185\u65F6\uFF0C\u5219\u8FD4\u56DE ",(0,i.jsx)(t.code,{children:"NULL"}),"\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(t.p,{children:"\u5C06\u4E00\u4E2A\u6574\u6570\u8F6C\u6362\u4E3A Bitmap \u5E76\u8BA1\u7B97 Bitmap \u4E2D\u7684\u5143\u7D20\u6570\u91CF\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select bitmap_count(to_bitmap(10));\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u5C06\u4E00\u4E2A\u8D1F\u6574\u6570\u8F6C\u6362\u4E3A Bitmap\uFF08\u8BE5\u6574\u6570\u5728\u6709\u6548\u8303\u56F4\u4E4B\u5916\uFF09\uFF0C\u5E76\u5C06\u5176\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select bitmap_to_string(to_bitmap(-1));\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"+---------------------------------+\n| bitmap_to_string(to_bitmap(-1)) |\n+---------------------------------+\n|                                 |\n+---------------------------------+\n"})})]})}function u(n={}){let{wrapper:t}={...(0,l.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return c},a:function(){return a}});var s=e(667294);let i={},l=s.createContext(i);function a(n){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(l.Provider,{value:t},n.children)}}}]);