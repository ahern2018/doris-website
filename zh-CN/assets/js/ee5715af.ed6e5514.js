"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["850137"],{891589:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>x,frontMatter:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/yearweek","title":"YEARWEEK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/yearweek.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/yearweek","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/yearweek","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"YEARWEEK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WEEKOFYEAR","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/weekofyear"},"next":{"title":"DAYNAME","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/dayname"}}'),s=n("785893"),i=n("250065");let d={title:"YEARWEEK",language:"zh-CN"},r=void 0,c={},x=[{value:"yearweek",id:"yearweek",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function a(e){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"yearweek",children:"yearweek"}),"\n",(0,s.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(t.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"INT YEARWEEK(DATE date[, INT mode])"})}),"\n",(0,s.jsx)(t.p,{children:"\u8FD4\u56DE\u6307\u5B9A\u65E5\u671F\u7684\u5E74\u4EFD\u548C\u661F\u671F\u6570\u3002mode\u7684\u503C\u9ED8\u8BA4\u4E3A0\u3002\n\u5F53\u65E5\u671F\u6240\u5728\u7684\u661F\u671F\u5C5E\u4E8E\u4E0A\u4E00\u5E74\u65F6\uFF0C\u8FD4\u56DE\u7684\u662F\u4E0A\u4E00\u5E74\u7684\u5E74\u4EFD\u548C\u661F\u671F\u6570\uFF1B\n\u5F53\u65E5\u671F\u6240\u5728\u7684\u661F\u671F\u5C5E\u4E8E\u4E0B\u4E00\u5E74\u65F6\uFF0C\u8FD4\u56DE\u7684\u662F\u4E0B\u4E00\u5E74\u7684\u5E74\u4EFD\uFF0C\u661F\u671F\u6570\u4E3A1\u3002\n\u53C2\u6570mode\u7684\u4F5C\u7528\u53C2\u89C1\u4E0B\u9762\u7684\u8868\u683C\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Mode"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u661F\u671F\u7684\u7B2C\u4E00\u5929"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u661F\u671F\u6570\u7684\u8303\u56F4"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u7B2C\u4E00\u4E2A\u661F\u671F\u7684\u5B9A\u4E49"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u661F\u671F\u65E5"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8FD9\u4E00\u5E74\u4E2D\u7684\u7B2C\u4E00\u4E2A\u661F\u671F\u65E5\u6240\u5728\u7684\u661F\u671F"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u661F\u671F\u4E00"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8FD9\u4E00\u5E74\u7684\u65E5\u671F\u6240\u5360\u7684\u5929\u6570\u5927\u4E8E\u7B49\u4E8E4\u5929\u7684\u7B2C\u4E00\u4E2A\u661F\u671F"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u661F\u671F\u65E5"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8FD9\u4E00\u5E74\u4E2D\u7684\u7B2C\u4E00\u4E2A\u661F\u671F\u65E5\u6240\u5728\u7684\u661F\u671F"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u661F\u671F\u4E00"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8FD9\u4E00\u5E74\u7684\u65E5\u671F\u6240\u5360\u7684\u5929\u6570\u5927\u4E8E\u7B49\u4E8E4\u5929\u7684\u7B2C\u4E00\u4E2A\u661F\u671F"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u661F\u671F\u65E5"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8FD9\u4E00\u5E74\u7684\u65E5\u671F\u6240\u5360\u7684\u5929\u6570\u5927\u4E8E\u7B49\u4E8E4\u5929\u7684\u7B2C\u4E00\u4E2A\u661F\u671F"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u661F\u671F\u4E00"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8FD9\u4E00\u5E74\u4E2D\u7684\u7B2C\u4E00\u4E2A\u661F\u671F\u4E00\u6240\u5728\u7684\u661F\u671F"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u661F\u671F\u65E5"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8FD9\u4E00\u5E74\u7684\u65E5\u671F\u6240\u5360\u7684\u5929\u6570\u5927\u4E8E\u7B49\u4E8E4\u5929\u7684\u7B2C\u4E00\u4E2A\u661F\u671F"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"7"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u661F\u671F\u4E00"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8FD9\u4E00\u5E74\u4E2D\u7684\u7B2C\u4E00\u4E2A\u661F\u671F\u4E00\u6240\u5728\u7684\u661F\u671F"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"\u53C2\u6570\u4E3ADate\u6216\u8005Datetime\u7C7B\u578B"}),"\n",(0,s.jsx)(t.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select yearweek('2021-1-1');\n+----------------------+\n| yearweek('2021-1-1') |\n+----------------------+\n|               202052 |\n+----------------------+\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select yearweek('2020-7-1');\n+----------------------+\n| yearweek('2020-7-1') |\n+----------------------+\n|               202026 |\n+----------------------+\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select yearweek('2024-12-30',1);\n+------------------------------------+\n| yearweek('2024-12-30 00:00:00', 1) |\n+------------------------------------+\n|                             202501 |\n+------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"YEARWEEK\n"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return d}});var l=n(667294);let s={},i=l.createContext(s);function d(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);