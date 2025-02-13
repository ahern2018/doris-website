"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["926404"],{883631:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/strcmp","title":"STRCMP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/strcmp.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/strcmp","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/strcmp","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"STRCMP","language":"zh-CN"}}'),l=s("785893"),r=s("250065");let c={title:"STRCMP",language:"zh-CN"},i=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"STRCMP \u51FD\u6570\u7528\u4E8E\u6309\u7167\u5B57\u5178\u987A\u5E8F\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u3002\u8BE5\u51FD\u6570\u5C06\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\u503C\u6765\u8868\u793A\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u6BD4\u8F83\u7ED3\u679C\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"STRCMP(<str0>, <str1>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str0>"})}),(0,l.jsx)(e.td,{children:"\u7B2C\u4E00\u4E2A\u8981\u6BD4\u8F83\u7684\u5B57\u7B26\u4E32\u3002\u7C7B\u578B\uFF1AVARCHAR"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<str1>"})}),(0,l.jsx)(e.td,{children:"\u7B2C\u4E8C\u4E2A\u8981\u6BD4\u8F83\u7684\u5B57\u7B26\u4E32\u3002\u7C7B\u578B\uFF1AVARCHAR"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE TINYINT \u7C7B\u578B\uFF0C\u8868\u793A\u6BD4\u8F83\u7ED3\u679C\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8FD4\u56DE 0\uFF1A\u5982\u679C str0 \u548C str1 \u76F8\u540C"}),"\n",(0,l.jsx)(e.li,{children:"\u8FD4\u56DE 1\uFF1A\u5982\u679C str0 \u5728\u5B57\u5178\u987A\u5E8F\u4E0A\u5927\u4E8E str1"}),"\n",(0,l.jsx)(e.li,{children:"\u8FD4\u56DE -1\uFF1A\u5982\u679C str0 \u5728\u5B57\u5178\u987A\u5E8F\u4E0A\u5C0F\u4E8E str1"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679C\u4EFB\u610F\u53C2\u6570\u4E3A NULL\uFF0C\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u76F8\u540C\u5B57\u7B26\u4E32\u6BD4\u8F83"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT strcmp('test', 'test');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------------------------+\n| strcmp('test', 'test') |\n+------------------------+\n|                      0 |\n+------------------------+\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\u8F83\u5927"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT strcmp('test1', 'test');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| strcmp('test1', 'test') |\n+-------------------------+\n|                       1 |\n+-------------------------+\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"3",children:["\n",(0,l.jsx)(e.li,{children:"\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\u8F83\u5C0F"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT strcmp('test', 'test1');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| strcmp('test', 'test1') |\n+-------------------------+\n|                      -1 |\n+-------------------------+\n"})})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var t=s(667294);let l={},r=t.createContext(l);function c(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);