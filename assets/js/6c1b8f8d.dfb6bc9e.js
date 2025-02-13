"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["10031"],{560878:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/convert-tz","title":"CONVERT_TZ","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/convert-tz.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/convert-tz","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/convert-tz","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CONVERT_TZ","language":"en"},"sidebar":"docs","previous":{"title":"DIGITAL_MASKING","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/string-functions/digital-masking"},"next":{"title":"CURDATE,CURRENT_DATE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/curdate"}}'),r=t("785893"),i=t("250065");let l={title:"CONVERT_TZ",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Converts a datetime value from the time zone specified by from_tz to the time zone specified by to_tz, and returns the resulting value. Special cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the parameters are invalid, the function returns NULL."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CONVERT_TZ(<dt>, <from_tz>, <to_tz>)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<dt>"})}),(0,r.jsx)(n.td,{children:"The datetime value to be converted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<from_tz>"})}),(0,r.jsx)(n.td,{children:"The original time zone of dt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<to_tz>"})}),(0,r.jsx)(n.td,{children:"The target time zone to convert to"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"Returns the calculated date."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select CONVERT_TZ('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles') |\n+---------------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                       |\n+---------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select CONVERT_TZ('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles') |\n+--------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                |\n+--------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);