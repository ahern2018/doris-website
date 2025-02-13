"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["415594"],{243079:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-data-types/date-time/TIME","title":"TIME","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-data-types/date-time/TIME.md","sourceDirName":"sql-manual/sql-data-types/date-time","slug":"/sql-manual/sql-data-types/date-time/TIME","permalink":"/zh-CN/docs/2.0/sql-manual/sql-data-types/date-time/TIME","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"TIME","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DATE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-data-types/date-time/DATE"},"next":{"title":"DATETIME","permalink":"/zh-CN/docs/2.0/sql-manual/sql-data-types/date-time/DATETIME"}}'),a=n("785893"),i=n("250065");let l={title:"TIME",language:"zh-CN"},r=void 0,o={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function c(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(t.p,{children:["TIME \u7C7B\u578B\n\u65F6\u95F4\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u67E5\u8BE2\u7ED3\u679C\u51FA\u73B0\uFF0C\u6682\u65F6\u4E0D\u652F\u6301\u5EFA\u8868\u5B58\u50A8\u3002\u8868\u793A\u8303\u56F4\u4E3A ",(0,a.jsx)(t.code,{children:"[-838:59:59, 838:59:59]"}),"\u3002\n\u5F53\u524D Doris \u4E2D\uFF0CTIME \u4F5C\u4E3A\u8BA1\u7B97\u7ED3\u679C\u7684\u6B63\u786E\u6027\u662F\u6709\u4FDD\u8BC1\u7684\uFF08\u5982 ",(0,a.jsx)(t.code,{children:"timediff"})," \u7B49\u51FD\u6570\uFF09\uFF0C\u4F46",(0,a.jsx)(t.strong,{children:"\u4E0D\u63A8\u8350\u624B\u52A8 CAST \u4EA7\u751F TIME \u7C7B\u578B"}),"\u3002\nTIME \u7C7B\u578B\u4E0D\u4F1A\u5728\u5E38\u91CF\u6298\u53E0\u4E2D\u8FDB\u884C\u8BA1\u7B97\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"mysql> select timediff('2020-01-01 12:05:03', '2020-01-01 08:02:15');\n+------------------------------------------------------------------------------------------------------+\n| timediff(cast('2020-01-01 12:05:03' as DATETIMEV2(0)), cast('2020-01-01 08:02:15' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------------------------+\n| 04:02:48                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> select timediff('2020-01-01', '2000-01-01');\n+------------------------------------------------------------------------------------+\n| timediff(cast('2020-01-01' as DATETIMEV2(0)), cast('2000-01-01' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------+\n| 838:59:59                                                                          |\n+------------------------------------------------------------------------------------+\n1 row in set (0.11 sec)\n"})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(667294);let a={},i=s.createContext(a);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);