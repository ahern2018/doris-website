"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["849261"],{763672:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64","title":"BITMAP_FROM_BASE64","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_FROM_BASE64","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_HASH64","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-hash64"},"next":{"title":"BITMAP_TO_BASE64","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64"}}'),a=s("785893"),l=s("250065");let i={title:"BITMAP_FROM_BASE64",language:"zh-CN"},c=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(e.p,{children:["\u5C06\u4E00\u4E2A base64 \u5B57\u7B26\u4E32\uFF08\u53EF\u4EE5\u7531 ",(0,a.jsx)(e.code,{children:"bitmap_to_base64"})," \u51FD\u6570\u8F6C\u6362\u6765\uFF09\u8F6C\u5316\u4E3A\u4E00\u4E2A BITMAP\u3002\u5F53\u8F93\u5165\u5B57\u7B26\u4E32\u4E0D\u5408\u6CD5\u65F6\uFF0C\u8FD4\u56DE NULL\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:" BITMAP_FROM_BASE64(<base64_str>)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u53C2\u6570"}),(0,a.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"<base64_str>"})}),(0,a.jsxs)(e.td,{children:["base64 \u5B57\u7B26\u4E32(\u53EF\u4EE5\u7531",(0,a.jsx)(e.code,{children:"bitmap_to_base64"}),"\u51FD\u6570\u8F6C\u6362\u6765)"]})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A BITMAP"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u5F53\u8F93\u5165\u5B57\u6BB5\u4E0D\u5408\u6CD5\u65F6\uFF0C\u7ED3\u679C\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'select bitmap_to_string(bitmap_from_base64("AA==")) bts;\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------+\n| bts  |\n+------+\n|      |\n+------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'select bitmap_to_string(bitmap_from_base64("AQEAAAA=")) bts;\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+------+\n| bts  |\n+------+\n| 1    |\n+------+\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'select bitmap_to_string(bitmap_from_base64("AjowAAACAAAAAAAAAJgAAAAYAAAAGgAAAAEAf5Y=")) bts;\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"+-----------+\n| bts       |\n+-----------+\n| 1,9999999 |\n+-----------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var t=s(667294);let a={},l=t.createContext(a);function i(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);