"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["244185"],{338813:function(t,n,e){e.r(n),e.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/to-bitmap","title":"TO_BITMAP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/to-bitmap.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/to-bitmap","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/to-bitmap","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"TO_BITMAP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_AGG","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/bitmap-agg"},"next":{"title":"BITMAP_HASH","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash"}}'),s=e("785893"),o=e("250065");let a={title:"TO_BITMAP",language:"zh-CN"},l=void 0,r={},c=[{value:"to_bitmap",id:"to_bitmap",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(t){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"to_bitmap",children:"to_bitmap"}),"\n",(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"BITMAP TO_BITMAP(expr)"})}),"\n",(0,s.jsx)(n.p,{children:"\u8F93\u5165\u4E3A\u53D6\u503C\u5728 0 ~ 18446744073709551615 \u533A\u95F4\u7684 unsigned bigint \uFF0C\u8F93\u51FA\u4E3A\u5305\u542B\u8BE5\u5143\u7D20\u7684bitmap\u3002\n\u5F53\u8F93\u5165\u503C\u4E0D\u5728\u6B64\u8303\u56F4\u65F6\uFF0C \u4F1A\u8FD4\u56DENULL\u3002\n\u8BE5\u51FD\u6570\u4E3B\u8981\u7528\u4E8Estream load\u4EFB\u52A1\u5C06\u6574\u578B\u5B57\u6BB5\u5BFC\u5165Doris\u8868\u7684bitmap\u5B57\u6BB5\u3002\u4F8B\u5982"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)"   http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select bitmap_count(to_bitmap(10));\n+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n\nMySQL> select bitmap_to_string(to_bitmap(-1));\n+---------------------------------+\n| bitmap_to_string(to_bitmap(-1)) |\n+---------------------------------+\n|                                 |\n+---------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"TO_BITMAP,BITMAP\n"})})]})}function d(t={}){let{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},250065:function(t,n,e){e.d(n,{Z:function(){return l},a:function(){return a}});var i=e(667294);let s={},o=i.createContext(s);function a(t){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function l(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),i.createElement(o.Provider,{value:n},t.children)}}}]);