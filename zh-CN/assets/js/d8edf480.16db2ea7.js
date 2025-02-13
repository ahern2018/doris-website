"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["636642"],{506819:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/reverse","title":"REVERSE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/reverse.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/reverse","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/reverse","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REVERSE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REPEAT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/repeat"},"next":{"title":"CHAR","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/char"}}'),t=s("785893"),r=s("250065");let i={title:"REVERSE",language:"zh-CN"},c=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"REVERSE \u51FD\u6570\u7528\u4E8E\u5C06\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26\u987A\u5E8F\u98A0\u5012\u6216\u5C06\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u987A\u5E8F\u98A0\u5012\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"REVERSE( <seq> )\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<seq>"})}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u88AB\u53CD\u8F6C\u987A\u5E8F\u7684\u5B57\u7B26\u4E32\u6216\u6570\u7EC4"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD4\u56DE\u53CD\u8F6C\u987A\u5E8F\u540E\u7684\u5B57\u7B26\u4E32\u6216\u6570\u7EC4\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4EFB\u610F\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT reverse('hello');\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+------------------+\n| REVERSE('hello') |\n+------------------+\n| olleh            |\n+------------------+\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT reverse(['hello', 'world']);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"+-----------------------------+\n| reverse(['hello', 'world']) |\n+-----------------------------+\n| [\"world\", \"hello\"]          |\n+-----------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var l=s(667294);let t={},r=l.createContext(t);function i(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);