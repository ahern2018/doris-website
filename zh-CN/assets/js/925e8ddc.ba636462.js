"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["805675"],{443857:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>o,assets:()=>a,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/unhex","title":"UNHEX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/unhex.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/unhex","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/unhex","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"UNHEX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HEX","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/hex"},"next":{"title":"ELT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/elt"}}'),l=s("785893"),c=s("250065");let i={title:"UNHEX",language:"zh-CN"},r=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"unhex"})," \u51FD\u6570\u7528\u4E8E\u5C06\u5341\u516D\u8FDB\u5236\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u539F\u59CB\u5B57\u7B26\u4E32\u3002\u5C06\u6BCF\u4E24\u4E2A\u5341\u516D\u8FDB\u5236\u5B57\u7B26\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5B57\u8282\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"UNHEX(<str>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str>"})}),(0,l.jsx)(e.td,{children:"16\u8FDB\u5236\u5B57\u7B26\u5B57\u7B26\u4E32"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(e.p,{children:["\u8F93\u5165\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u5B57\u7B26\u4E32\u957F\u5EA6\u4E3A0\u6216\u8005\u4E3A\u5947\u6570\uFF0C\u8FD4\u56DE\u7A7A\u4E32\uFF1B\n\u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u5305\u542B",(0,l.jsx)(e.code,{children:"[0-9]\u3001[a-f]\u3001[A-F]"}),"\u4E4B\u5916\u7684\u5B57\u7B26\uFF0C\u8FD4\u56DE\u7A7A\u4E32\uFF1B\n\u5176\u4ED6\u60C5\u51B5\u6BCF\u4E24\u4E2A\u5B57\u7B26\u4E3A\u4E00\u7EC4\u8F6C\u5316\u4E3A16\u8FDB\u5236\u540E\u7684\u5B57\u7B26\uFF0C\u7136\u540E\u62FC\u63A5\u6210\u5B57\u7B26\u4E32\u8F93\u51FA\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select unhex('@');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------+\n| unhex('@') |\n+------------+\n|            |\n+------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select unhex('41');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------+\n| unhex('41') |\n+-------------+\n| A           |\n+-------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select unhex('4142');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+---------------+\n| unhex('4142') |\n+---------------+\n| AB            |\n+---------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var t=s(667294);let l={},c=t.createContext(l);function i(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);