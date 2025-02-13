"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["725074"],{740828:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/hex","title":"HEX","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/hex.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/hex","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/hex","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"HEX","language":"en"},"sidebar":"docs","previous":{"title":"RTRIM_IN","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/rtrim-in"},"next":{"title":"UNHEX","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/unhex"}}'),r=t("785893"),a=t("250065");let i={title:"HEX",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"If the input parameter is a number, return the string representation of the hexadecimal value."}),"\n",(0,r.jsx)(n.p,{children:"If the input parameter is a string, convert each character to two hexadecimal characters, concatenate all the converted characters into a string for output."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"HEX ( <str> )\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<str>"})}),(0,r.jsx)(n.td,{children:"Input parameter is a number or a string"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsxs)(n.p,{children:["The hexadecimal result of parameter ",(0,r.jsx)(n.code,{children:"<str>"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The input parameter is a number"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT HEX(12),HEX(-1)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+---------+------------------+\n| hex(12) | hex(-1)          |\n+---------+------------------+\n| C       | FFFFFFFFFFFFFFFF |\n+---------+------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"The input parameter is a string"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT HEX('1'),HEX('@'),HEX('12')\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------+----------+-----------+\n| hex('1') | hex('@') | hex('12') |\n+----------+----------+-----------+\n| 31       | 40       | 3132      |\n+----------+----------+-----------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);