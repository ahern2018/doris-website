"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["498684"],{940576:function(n,e,s){s.r(e),s.d(e,{metadata:()=>o,contentTitle:()=>i,default:()=>a,assets:()=>u,toc:()=>d,frontMatter:()=>l});var o=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/round","title":"ROUND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/round.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/round","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/round","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ROUND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PMOD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/pmod"},"next":{"title":"ROUND_BANKERS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/round-bankers"}}'),r=s("785893"),t=s("250065");let l={title:"ROUND",language:"zh-CN"},i=void 0,u={},d=[{value:"round",id:"round",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function c(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"round",children:"round"}),"\n",(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"T round(T x[, d])"}),"\n\u5C06",(0,r.jsx)(e.code,{children:"x"}),"\u56DB\u820D\u4E94\u5165\u540E\u4FDD\u7559d\u4F4D\u5C0F\u6570\uFF0Cd\u9ED8\u8BA4\u4E3A0\u3002\u5982\u679Cd\u4E3A\u8D1F\u6570\uFF0C\u5219\u5C0F\u6570\u70B9\u5DE6\u8FB9d\u4F4D\u4E3A0\u3002\u5982\u679Cx\u6216d\u4E3Anull\uFF0C\u8FD4\u56DEnull\u3002\n2.5\u4F1A\u820D\u5165\u52303\uFF0C\u5982\u679C\u60F3\u8981\u820D\u5165\u52302\u7684\u7B97\u6CD5\uFF0C\u8BF7\u4F7F\u7528round_bankers\u51FD\u6570\u3002"]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["\u8BE5\u51FD\u6570\u7684\u53E6\u4E00\u4E2A\u522B\u540D\u4E3A ",(0,r.jsx)(e.code,{children:"dround"}),"\u3002"]})}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select round(2.4);\n+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select round(2.5);\n+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\nmysql> select round(-3.4);\n+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\nmysql> select round(-3.5);\n+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\nmysql> select round(1667.2725, 2);\n+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\nmysql> select round(1667.2725, -2);\n+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"ROUND, DROUND\n"})})]})}function a(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return l}});var o=s(667294);let r={},t=o.createContext(r);function l(n){let e=o.useContext(t);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);