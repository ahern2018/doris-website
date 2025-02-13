"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["332336"],{56795:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/mask","title":"MASK","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/mask.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/mask","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/mask","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MASK","language":"en"},"sidebar":"docs","previous":{"title":"MULTI_MATCH_ANY","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/multi-match-any"},"next":{"title":"MASK_FIRST_N","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/mask-first-n"}}'),a=t("785893"),r=t("250065");let c={title:"MASK",language:"en"},l=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The MASK function is to shield data to protect sensitive information, and it is commonly used in data anonymization scenarios. Its default behavior is to convert a uppercase letter in the input string to ",(0,a.jsx)(n.code,{children:"X"}),", a lowercase letter to ",(0,a.jsx)(n.code,{children:"x"}),", and a number to ",(0,a.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MASK(<str> [, <upper> [, <lower> [, <number> ]]])\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<str>"})}),(0,a.jsx)(n.td,{children:"String that need to be masked"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<upper>"})}),(0,a.jsxs)(n.td,{children:["Optional Parameter, replaces uppercase character to ",(0,a.jsx)(n.code,{children:"X"})," by default. If a sequence of characters are input, the first character will be taken, and if non ASCII characters are input, the first byte will be taken"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<lower>"})}),(0,a.jsxs)(n.td,{children:["Optional Parameter, replaces lowercase character to ",(0,a.jsx)(n.code,{children:"x"})," by default. If a sequence of characters are input, the first character will be taken, and if non ASCII characters are input, the first byte will be taken"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<number>"})}),(0,a.jsxs)(n.td,{children:["Optional Parameter, replaces numeric character to ",(0,a.jsx)(n.code,{children:"n"})," by default. If a sequence of characters are input, the first character will be taken, and if non ASCII characters are input, the first byte will be taken"]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Returns a string after masking uppercase character, lowercase character and lnumeric character. Special cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If any Parameter is NULL, NULL will be returned."}),"\n",(0,a.jsx)(n.li,{children:"Non-alphabetic and non-numeric characters will do not masking"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select mask('abc123EFG');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------+\n| mask('abc123EFG') |\n+-------------------+\n| xxxnnnXXX         |\n+-------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select mask(null);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------+\n| mask(NULL) |\n+------------+\n| NULL       |\n+------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select mask('abc123EFG', '*', '#', '$');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------------------------------+\n| mask('abc123EFG', '*', '#', '$') |\n+----------------------------------+\n| ###$$$***                        |\n+----------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let a={},r=s.createContext(a);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);