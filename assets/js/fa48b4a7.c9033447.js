"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["351291"],{671101:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>f,assets:()=>r,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/weeks-diff","title":"WEEKS_DIFF","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/weeks-diff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/weeks-diff","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/weeks-diff","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"WEEKS_DIFF","language":"en"},"sidebar":"docs","previous":{"title":"WEEKS_ADD","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/weeks-add"},"next":{"title":"WEEKS_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/weeks-sub"}}'),i=t("785893"),d=t("250065");let l={title:"WEEKS_DIFF",language:"en"},o=void 0,r={},a=[{value:"weeks_diff",id:"weeks_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"weeks_diff",children:"weeks_diff"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"INT weeks_diff(DATETIME enddate, DATETIME startdate)"})}),"\n",(0,i.jsx)(n.p,{children:"The difference between the start time and the end time is weeks"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select weeks_diff('2020-12-25','2020-10-25');\n+----------------------------------------------------------+\n| weeks_diff('2020-12-25 00:00:00', '2020-10-25 00:00:00') |\n+----------------------------------------------------------+\n|                                                        8 |\n+----------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"weeks_diff\n"})})]})}function f(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let i={},d=s.createContext(i);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);