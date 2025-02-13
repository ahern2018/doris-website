"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["608616"],{96547:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>o,assets:()=>d,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-add","title":"QUARTERS_ADD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-add.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-add","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-add","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"QUARTERS_ADD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"QUARTERS_SUB","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-sub"},"next":{"title":"YEARS_ADD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/years-add"}}'),l=t("785893"),i=t("250065");let a={title:"QUARTERS_ADD",language:"zh-CN"},r=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u51FD\u6570\u7528\u4E8E\u5728\u6307\u5B9A\u7684\u65E5\u671F\u6216\u65E5\u671F\u65F6\u95F4\u503C\u57FA\u7840\u4E0A\uFF0C\u589E\u52A0\u6216\u51CF\u5C11\u6307\u5B9A\u7684\u5B63\u5EA6\u6570\uFF0C\u5E76\u8FD4\u56DE\u8BA1\u7B97\u540E\u7684\u65E5\u671F\u503C\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"QUARTERS_ADD(<date/datetime>, <quarters>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<date/datetime>"})}),(0,l.jsx)(n.td,{children:"\u8F93\u5165\u7684\u65E5\u671F\u6216\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u652F\u6301 DATE \u6216 DATETIME \u7C7B\u578B\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<quarters>"})}),(0,l.jsx)(n.td,{children:"\u8981\u589E\u52A0\u6216\u51CF\u5C11\u7684\u5B63\u5EA6\u6570\uFF0C\u6B63\u6574\u6570\u8868\u793A\u589E\u52A0\uFF0C\u8D1F\u6574\u6570\u8868\u793A\u51CF\u5C11\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8FD4\u56DE\u4E00\u4E2A\u65E5\u671F\u503C\uFF0C\u4E0E\u8F93\u5165\u7684\u65E5\u671F\u7C7B\u578B\u4E00\u81F4\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679C ",(0,l.jsx)(n.code,{children:"<date/datetime>"})," \u4E3A NULL\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679C ",(0,l.jsx)(n.code,{children:"<date/datetime>"})," \u4E3A\u975E\u6CD5\u65E5\u671F\uFF08\u5982 0000-00-00\uFF09\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select quarters_add("2020-01-31 02:02:02", 1);\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| quarters_add(cast('2020-01-31 02:02:02' as DATETIMEV2(0)), 1) |\n+---------------------------------------------------------------+\n| 2020-04-30 02:02:02                                           |\n+---------------------------------------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);