"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["584638"],{430581:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/ltrim","title":"LTRIM","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/string-functions/ltrim.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/ltrim","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/ltrim","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"LTRIM","language":"en"},"sidebar":"docs","previous":{"title":"TRIM","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/trim"},"next":{"title":"RTRIM","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/string-functions/rtrim"}}'),r=t("785893"),i=t("250065");let l={title:"LTRIM",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The LTRIM function is used to remove consecutive spaces or specified characters from the left side (leading) of a string."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"LTRIM( <str> [, <trim_chars> ] )\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<str>"})}),(0,r.jsx)(n.td,{children:"String that need to be trimmed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<trim_chars>"})}),(0,r.jsxs)(n.td,{children:["Optional Parameter. If this parameter is provided, the LTRIM function will remove all characters from the ",(0,r.jsx)(n.code,{children:"<trim_chars>"})," that appear on the left side of ",(0,r.jsx)(n.code,{children:"<str>"}),". If this parameter is not provided, the LTRIM function will only remove the space character to the left of ",(0,r.jsx)(n.code,{children:"'<str>'"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.p,{children:["Returns a string with leading spaces or ",(0,r.jsx)(n.code,{children:"<trim_chars>"})," removed. Special cases:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If any Parameter is NULL, NULL will be returned."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT ltrim('   ab d') str;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+------+\n| str  |\n+------+\n| ab d |\n+------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT ltrim('ababccaab','ab') str;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+-------+\n| str   |\n+-------+\n| ccaab |\n+-------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);