"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["562353"],{939845:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>s});var l=JSON.parse('{"id":"data-operate/delete/truncate-manual","title":"Truncate \u64CD\u4F5C","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/delete/truncate-manual.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/truncate-manual","permalink":"/zh-CN/docs/dev/data-operate/delete/truncate-manual","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Truncate \u64CD\u4F5C","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664","permalink":"/zh-CN/docs/dev/data-operate/delete/batch-delete-manual"},"next":{"title":"\u8868\u539F\u5B50\u66FF\u6362","permalink":"/zh-CN/docs/dev/data-operate/delete/atomicity-replace"}}'),r=t("785893"),a=t("250065");let s={title:"Truncate \u64CD\u4F5C",language:"zh-CN"},c=void 0,i={},d=[{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u6E05\u7A7A\u6307\u5B9A\u8868\u548C\u5206\u533A\u7684\u6570\u636E\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE [db.]tbl [PARTITION(p1, p2, ...)];\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u6E05\u7A7A\u6570\u636E\uFF0C\u4F46\u4FDD\u7559\u8868\u6216\u5206\u533A\u7ED3\u6784\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4E0E DELETE \u4E0D\u540C\uFF0CTRUNCATE \u4EC5\u8FDB\u884C\u5143\u6570\u636E\u64CD\u4F5C\uFF0C\u901F\u5EA6\u5FEB\u4E14\u4E0D\u4F1A\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8BE5\u64CD\u4F5C\u5220\u9664\u7684\u6570\u636E\u4E0D\u53EF\u6062\u590D\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8868\u72B6\u6001\u9700\u4E3A NORMAL\uFF0C\u4E0D\u80FD\u6709\u6B63\u5728\u8FDB\u884C\u7684 SCHEMA CHANGE \u7B49\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8BE5\u547D\u4EE4\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6B63\u5728\u8FDB\u884C\u7684\u5BFC\u5165\u4EFB\u52A1\u5931\u8D25\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. \u6E05\u7A7A example_db \u4E0B\u7684\u8868 tbl"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE example_db.tbl;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. \u6E05\u7A7A\u8868 tbl \u7684 p1 \u548C p2 \u5206\u533A"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE tbl PARTITION(p1, p2);\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var l=t(667294);let r={},a=l.createContext(r);function s(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);