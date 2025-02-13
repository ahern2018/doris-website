"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["501405"],{931247:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/from-days","title":"FROM_DAYS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/from-days.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/from-days","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/from-days","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"FROM_DAYS","language":"en"},"sidebar":"docs","previous":{"title":"SECOND","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/second"},"next":{"title":"LAST_DAY","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/last-day"}}'),a=t("785893"),r=t("250065");let i={title:"FROM_DAYS",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Given a number of days, returns a DATE."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Note: To maintain consistent behavior with MySQL, the date 0000-02-29 does not exist."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"FROM_DAYS(<dt>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<dt>"})}),(0,a.jsx)(n.td,{children:"Days"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Returns the date corresponding to the given number of days."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select from_days(730669),from_days(5),from_days(59), from_days(60);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------+--------------+---------------+---------------+\n| from_days(730669) | from_days(5) | from_days(59) | from_days(60) |\n+-------------------+--------------+---------------+---------------+\n| 2000-07-03        | 0000-01-05   | 0000-02-28    | 0000-03-01    |\n+-------------------+--------------+---------------+---------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);