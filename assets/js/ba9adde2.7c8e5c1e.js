"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["481058"],{876693:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>p,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64","title":"BITMAP_TO_BASE64","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/bitmap-functions","slug":"/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-to-base64","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_TO_BASE64","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_FROM_BASE64","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-from-base64"},"next":{"title":"BITMAP_REMOVE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/bitmap-functions/bitmap-remove"}}'),a=t("785893"),i=t("250065");let l={title:"BITMAP_TO_BASE64",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Converts a Bitmap into a Base64 encoded string."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"BITMAP_TO_BASE64(<bitmap>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<bitmap>"})}),(0,a.jsx)(n.td,{children:"A Bitmap type column or expression"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(n.p,{children:["A Base64 encoded string of the Bitmap.",(0,a.jsx)(n.br,{}),"\nReturns ",(0,a.jsx)(n.code,{children:"NULL"})," if the Bitmap is ",(0,a.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"::: note"}),"\n",(0,a.jsxs)(n.p,{children:["The BE configuration option ",(0,a.jsx)(n.code,{children:"enable_set_in_bitmap_value"})," changes the specific format of bitmap values in memory, which affects the result of this function.",(0,a.jsx)(n.br,{}),"\nDue to the non-guaranteed order of elements in a bitmap, the generated Base64 string may not always be the same for the same content. However, the decoded bitmap from ",(0,a.jsx)(n.code,{children:"bitmap_from_base64"})," will be the same."]}),"\n",(0,a.jsx)(n.p,{children:":::"}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["To convert a ",(0,a.jsx)(n.code,{children:"NULL"})," Bitmap to a Base64 string:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select bitmap_to_base64(null);\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------------------+\n| bitmap_to_base64(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"To convert an empty Bitmap to a Base64 string:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select bitmap_to_base64(bitmap_empty());\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------------------------------+\n| bitmap_to_base64(bitmap_empty()) |\n+----------------------------------+\n| AA==                             |\n+----------------------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"To convert a Bitmap with a single element to a Base64 string:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select bitmap_to_base64(to_bitmap(1));\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+--------------------------------+\n| bitmap_to_base64(to_bitmap(1)) |\n+--------------------------------+\n| AQEAAAA=                       |\n+--------------------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"To convert a Bitmap with multiple elements to a Base64 string:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select bitmap_to_base64(bitmap_from_string("1,9999999"));\n'})}),"\n",(0,a.jsx)(n.p,{children:"The result will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'+---------------------------------------------------------+\n| bitmap_to_base64(bitmap_from_string("1,9999999"))       |\n+---------------------------------------------------------+\n| AjowAAACAAAAAAAAAJgAAAAYAAAAGgAAAAEAf5Y=                |\n+---------------------------------------------------------+\n'})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);