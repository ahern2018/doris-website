"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["78438"],{487720:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/makedate","title":"MAKEDATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/date-time-functions/makedate.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/makedate","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/makedate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MAKEDATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXTRACT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/extract"},"next":{"title":"STR_TO_DATE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date"}}'),l=t("785893"),a=t("250065");let i={title:"MAKEDATE",language:"zh-CN"},c=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u6839\u636E\u6307\u5B9A\u7684\u5E74\u4EFD\u548C\u4E00\u5E74\u4E2D\u7684\u5929\u6570\uFF08dayofyear\uFF09\u6784\u5EFA\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65E5\u671F\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5F53 ",(0,l.jsx)(n.code,{children:"<day_of_year>"})," \u5C0F\u4E8E\u7B49\u4E8E 0 \u65F6\uFF0C\u8FD4\u56DE NULL"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5F53 ",(0,l.jsx)(n.code,{children:"<day_of_year>"})," \u8D85\u8FC7\u5F53\u5E74\u5929\u6570\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5F80\u540E\u987A\u5EF6\u5230\u4E0B\u4E00\u5E74"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MAKEDATE(<year>, <day_of_year>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"year"}),(0,l.jsx)(n.td,{children:"\u6307\u5B9A\u7684\u5E74\u4EFD\uFF0C\u7C7B\u578B\u4E3A INT"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"dayofyear"}),(0,l.jsx)(n.td,{children:"\u4E00\u5E74\u4E2D\u7684\u7B2C\u51E0\u5929\uFF081-366\uFF09\uFF0C\u7C7B\u578B\u4E3A INT"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD4\u56DE\u7C7B\u578B\u4E3A DATE\uFF0C\u8FD4\u56DE\u4EE5\u6307\u5B9A\u5E74\u4EFD\u548C\u4E00\u5E74\u4E2D\u7684\u7B2C\u51E0\u5929\u6784\u5EFA\u7684\u65E5\u671F\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT MAKEDATE(2021, 1), MAKEDATE(2021, 100), MAKEDATE(2021, 400);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------------------+---------------------+---------------------+\n| makedate(2021, 1) | makedate(2021, 100) | makedate(2021, 400) |\n+-------------------+---------------------+---------------------+\n| 2021-01-01        | 2021-04-10          | 2022-02-04          |\n+-------------------+---------------------+---------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);