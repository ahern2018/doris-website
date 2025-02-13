"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["394966"],{6274:function(n,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>o,toc:()=>u,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/parse-url","title":"PARSE_URL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/parse-url.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/parse-url","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/parse-url","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"PARSE_URL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MONEY_FORMAT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/money-format"},"next":{"title":"CONVERT_TO","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/convert-to"}}'),t=r("785893"),l=r("250065");let i={title:"PARSE_URL",language:"zh-CN"},a=void 0,o={},u=[{value:"parse_url",id:"parse_url",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"keywords",id:"keywords",level:3}];function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"parse_url",children:"parse_url"}),"\n",(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"VARCHAR  parse_url(VARCHAR url, VARCHAR  name)"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728 url \u89E3\u6790\u51FA name \u5BF9\u5E94\u7684\u5B57\u6BB5\uFF0Cname \u53EF\u9009\u9879\u4E3A\uFF1A'PROTOCOL', 'HOST', 'PATH', 'REF', 'AUTHORITY', 'FILE', 'USERINFO', 'PORT', 'QUERY'\uFF0C\u5C06\u7ED3\u679C\u8FD4\u56DE\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> SELECT parse_url ('https://doris.apache.org/', 'HOST');\n+------------------------------------------------+\n| parse_url('https://doris.apache.org/', 'HOST') |\n+------------------------------------------------+\n| doris.apache.org                               |\n+------------------------------------------------+\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679C\u60F3\u83B7\u53D6 QUERY \u4E2D\u7684\u7279\u5B9A\u53C2\u6570\uFF0C\u53EF\u4F7F\u7528",(0,t.jsx)(e.a,{href:"../string-functions/extract-url-parameter",children:"extract_url_parameter"}),"\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"PARSE URL\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return a},a:function(){return i}});var s=r(667294);let t={},l=s.createContext(t);function i(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);