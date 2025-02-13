"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["572925"],{365426:function(n,s,i){i.r(s),i.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/first-significant-subdomain","title":"FIRST_SIGNIFICANT_SUBDOMAIN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/first-significant-subdomain.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/first-significant-subdomain","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/first-significant-subdomain","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"FIRST_SIGNIFICANT_SUBDOMAIN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CUT_TO_FIRST_SIGNIFICANT_SUBDOMAIN","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/cut-to-first-significant-subdomain"},"next":{"title":"TOP_LEVEL_DOMAIN","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/top-level-domain"}}'),e=i("785893"),l=i("250065");let c={title:"FIRST_SIGNIFICANT_SUBDOMAIN",language:"zh-CN"},a=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let s={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,e.jsx)(s.p,{children:"\u5728 URL \u4E2D\u63D0\u53D6\u51FA \u201C\u7B2C\u4E00\u4E2A\u6709\u6548\u5B50\u57DF\u201D \u8FD4\u56DE\uFF0C\u82E5\u4E0D\u5408\u6CD5\u5219\u4F1A\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002"}),"\n",(0,e.jsx)(s.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-sql",children:"FIRST_SIGNIFICANT_SUBDOMAIN ( <url> )\n"})}),"\n",(0,e.jsx)(s.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,e.jsxs)(s.table,{children:[(0,e.jsx)(s.thead,{children:(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.th,{children:"\u53C2\u6570"}),(0,e.jsx)(s.th,{children:"\u8BF4\u660E"})]})}),(0,e.jsx)(s.tbody,{children:(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"<url>"})}),(0,e.jsx)(s.td,{children:"\u9700\u8981\u63D0\u53D6 \u201C\u7B2C\u4E00\u4E2A\u6709\u6548\u5B50\u57DF\u201D \u7684 URL"})]})})]}),"\n",(0,e.jsx)(s.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.code,{children:"<url>"})," \u4E2D\u7B2C\u4E00\u4E2A\u6709\u6548\u5B50\u57DF\u3002"]}),"\n",(0,e.jsx)(s.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-sql",children:'SELECT FIRST_SIGNIFICANT_SUBDOMAIN("www.baidu.com"),first_significant_subdomain("www.google.com.cn"),first_significant_subdomain("wwwwwwww")\n'})}),"\n",(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-text",children:"+----------------------------------------------+--------------------------------------------------+-----------------------------------------+\n| first_significant_subdomain('www.baidu.com') | first_significant_subdomain('www.google.com.cn') | first_significant_subdomain('wwwwwwww') |\n+----------------------------------------------+--------------------------------------------------+-----------------------------------------+\n| baidu                                        | google                                           |                                         |\n+----------------------------------------------+--------------------------------------------------+-----------------------------------------+\n"})})]})}function d(n={}){let{wrapper:s}={...(0,l.a)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(u,{...n})}):u(n)}},250065:function(n,s,i){i.d(s,{Z:function(){return a},a:function(){return c}});var t=i(667294);let e={},l=t.createContext(e);function c(n){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function a(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:c(n.components),t.createElement(l.Provider,{value:s},n.children)}}}]);