"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["450488"],{106276:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/space","title":"SPACE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/space.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/space","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/space","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SPACE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"UUID","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/uuid"},"next":{"title":"RANDOM_BYTES","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/random_bytes"}}'),t=s("785893"),c=s("250065");let i={title:"SPACE",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u751F\u6210\u7531\u6307\u5B9A\u6570\u91CF\u7684\u7A7A\u683C\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SPACE ( <len> )\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<len>"})}),(0,t.jsx)(e.td,{children:"\u8981\u751F\u6210\u7684\u7A7A\u683C\u7684\u6570\u91CF"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u6307\u5B9A\u6570\u91CF\u7684\u7A7A\u683C\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4EFB\u610F\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"<len>"}),"\u5C0F\u4E8E 0 \u65F6\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT space(10);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------+\n| space(10)  |\n+------------+\n|            |\n+------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT space(null);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-------------+\n| space(NULL) |\n+-------------+\n| NULL        |\n+-------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var l=s(667294);let t={},c=l.createContext(t);function i(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);