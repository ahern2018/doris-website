"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["410480"],{796009:function(n,t,e){e.r(t),e.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>u,frontMatter:()=>c});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-count","title":"BITMAP_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-count.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-count","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-count","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BITMAP_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SUB_BITMAP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/sub-bitmap"},"next":{"title":"BITMAP_AND_COUNT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-count"}}'),s=e("785893"),o=e("250065");let c={title:"BITMAP_COUNT",language:"zh-CN"},l=void 0,a={},u=[{value:"bitmap_count",id:"bitmap_count",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function r(n){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"bitmap_count",children:"bitmap_count"}),"\n",(0,s.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"BITMAP BITMAP_COUNT(BITMAP lhs)"})}),"\n",(0,s.jsx)(t.p,{children:"\u8FD4\u56DE\u8F93\u5165bitmap\u7684\u4E2A\u6570\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select bitmap_count(to_bitmap(1)) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nmysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"BITMAP_COUNT\n"})})]})}function d(n={}){let{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(r,{...n})}):r(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return l},a:function(){return c}});var i=e(667294);let s={},o=i.createContext(s);function c(n){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);