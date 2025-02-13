"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["340139"],{729527:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>r,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/month","title":"MONTH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/month.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/month","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/month","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MONTH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"QUARTER","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/quarter"},"next":{"title":"DAY","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/day"}}'),l=t("785893"),i=t("250065");let c={title:"MONTH",language:"zh-CN"},a=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u4ECE\u65E5\u671F\u65F6\u95F4\u503C\u4E2D\u63D0\u53D6\u6708\u4EFD\u503C\u3002\u8FD4\u56DE\u503C\u8303\u56F4\u4E3A 1 \u5230 12\uFF0C\u5206\u522B\u4EE3\u8868\u4E00\u5E74\u4E2D\u7684 12 \u4E2A\u6708\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"MONTH(<date>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<date>"})}),(0,l.jsx)(e.td,{children:"\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u7C7B\u578B\u53EF\u4EE5\u662F DATE\u3001DATETIME \u6216 DATETIMEV2"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u7C7B\u578B\u4E3A INT\uFF0C\u8868\u793A\u6708\u4EFD\u503C\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8303\u56F4\uFF1A1 \u5230 12"}),"\n",(0,l.jsx)(e.li,{children:"1 \u8868\u793A\u4E00\u6708\uFF0C12 \u8868\u793A\u5341\u4E8C\u6708"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u4E3A NULL\uFF0C\u8FD4\u56DE NULL"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT MONTH('1987-01-01');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------+\n| month(cast('1987-01-01' as DATETIMEV2(0))) |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return c}});var s=t(667294);let l={},i=s.createContext(l);function c(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);