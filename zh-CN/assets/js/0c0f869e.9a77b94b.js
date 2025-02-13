"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["431594"],{493367:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/month-floor","title":"MONTH_FLOOR","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/month-floor.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/month-floor","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/month-floor","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MONTH_FLOOR","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DAY_FLOOR","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/day-floor"},"next":{"title":"year_floor","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/year-floor"}}'),l=t("785893"),s=t("250065");let r={title:"MONTH_FLOOR",language:"zh-CN"},d=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function a(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u5C06\u65E5\u671F\u65F6\u95F4\u503C\u5411\u4E0B\u53D6\u6574\u5230\u6700\u8FD1\u7684\u6307\u5B9A\u6708\u4EFD\u5468\u671F\u3002\u5982\u679C\u6307\u5B9A\u4E86\u8D77\u59CB\u65F6\u95F4\uFF08origin\uFF09\uFF0C\u5219\u4EE5\u8BE5\u65F6\u95F4\u4E3A\u57FA\u51C6\u8BA1\u7B97\u5468\u671F\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"MONTH_FLOOR(<datetime>)\nMONTH_FLOOR(<datetime>, <origin>)\nMONTH_FLOOR(<datetime>, <period>)\nMONTH_FLOOR(<datetime>, <period>, <origin>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<datetime>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u5411\u4E0B\u53D6\u6574\u7684\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u7C7B\u578B\u4E3A DATETIME \u6216 DATETIMEV2"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<period>"})}),(0,l.jsx)(e.td,{children:"\u6708\u4EFD\u5468\u671F\u503C\uFF0C\u7C7B\u578B\u4E3A INT\uFF0C\u8868\u793A\u6BCF\u4E2A\u5468\u671F\u5305\u542B\u7684\u6708\u6570"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<origin>"})}),(0,l.jsx)(e.td,{children:"\u5468\u671F\u7684\u8D77\u59CB\u65F6\u95F4\u70B9\uFF0C\u7C7B\u578B\u4E3A DATETIME \u6216 DATETIMEV2\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0001-01-01 00:00:00"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u7C7B\u578B\u4E3A DATETIME\uFF0C\u8868\u793A\u5411\u4E0B\u53D6\u6574\u540E\u7684\u65E5\u671F\u65F6\u95F4\u503C\u3002\u7ED3\u679C\u7684\u65F6\u95F4\u90E8\u5206\u5C06\u88AB\u8BBE\u7F6E\u4E3A 00:00:00\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'SELECT MONTH_FLOOR("2023-07-13 22:28:18", 5);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------------------------+\n| month_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+--------------------------------------------------------------+\n| 2023-05-01 00:00:00                                          |\n+--------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4E0D\u6307\u5B9A period \u65F6\uFF0C\u9ED8\u8BA4\u4EE5 1 \u4E2A\u6708\u4E3A\u5468\u671F"}),"\n",(0,l.jsx)(e.li,{children:"period \u5FC5\u987B\u4E3A\u6B63\u6574\u6570"}),"\n",(0,l.jsx)(e.li,{children:"\u7ED3\u679C\u603B\u662F\u5411\u8FC7\u53BB\u65F6\u95F4\u53D6\u6574"}),"\n",(0,l.jsx)(e.li,{children:"\u8FD4\u56DE\u503C\u7684\u65F6\u95F4\u90E8\u5206\u603B\u662F 00:00:00"}),"\n",(0,l.jsx)(e.li,{children:"\u4E0E MONTH_CEIL \u76F8\u53CD\uFF0CMONTH_FLOOR \u603B\u662F\u820D\u53BB\u8D85\u51FA\u5468\u671F\u7684\u90E8\u5206"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD8\u53EF\u53C2\u9605 ",(0,l.jsx)(e.a,{href:"./date_floor",children:"date_floor"})]})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return r}});var i=t(667294);let l={},s=i.createContext(l);function r(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);