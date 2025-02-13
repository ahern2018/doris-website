"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["923687"],{845899:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/ceil","title":"CEIL","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/ceil.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/ceil","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/ceil","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CEIL","language":"en"},"sidebar":"docs","previous":{"title":"LN","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/ln"},"next":{"title":"FLOOR","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/floor"}}'),s=i("785893"),t=i("250065");let c={title:"CEIL",language:"en"},r=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Alias",id:"alias",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Round up floating-point and fixed-point decimals to a specific number of places and return the rounded floating-point or fixed-point number."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CEIL(<a>[, <d>])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<a>"})}),(0,s.jsx)(n.td,{children:"Floating-point (Double) or fixed-point (Decimal) parameter indicating the parameter to be rounded"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<d>"})}),(0,s.jsxs)(n.td,{children:["Optional, integer, indicates rounding to the target number of digits, a positive number means rounding to the next decimal point, a negative number means rounding to the next decimal point, and ",(0,s.jsx)(n.code,{children:"0"})," indicates rounding to an integer. When not filled, it is equivalent to ",(0,s.jsx)(n.code,{children:"<d> = 0"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the smallest rounded number greater than or equal to ",(0,s.jsx)(n.code,{children:"<a>"})," according to the following rules."]}),"\n",(0,s.jsxs)(n.p,{children:["Round to ",(0,s.jsx)(n.code,{children:"1/(10^d)"})," digit, i.e., make the result divisible by ",(0,s.jsx)(n.code,{children:"1/(10^d)"}),". If ",(0,s.jsx)(n.code,{children:"1/(10^d)"})," is not exact, the rounding digit is the nearest number of the corresponding data type."]}),"\n",(0,s.jsxs)(n.p,{children:["For an entry ",(0,s.jsx)(n.code,{children:"<a>"})," of type Decimal, assuming it is of type ",(0,s.jsx)(n.code,{children:"Decimal(p, s)"}),", the return value is:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Decimal(p, 0)"}),"\uFF0Cif ",(0,s.jsx)(n.code,{children:"<d> <= 0"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Decimal(p, <d>)"}),"\uFF0Cif ",(0,s.jsx)(n.code,{children:"0 < <d> <= s"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Decimal(p, s)"}),"\uFF0Cif ",(0,s.jsx)(n.code,{children:"<d> > s"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DCEIL"}),"\n",(0,s.jsx)(n.li,{children:"CEILING"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select ceil(123.456);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------+\n| ceil(123.456) |\n+---------------+\n|           124 |\n+---------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select ceil(123.456, 2);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------------------+\n| ceil(123.456, 2) |\n+------------------+\n|           123.46 |\n+------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select ceil(123.456, -2);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------------+\n| ceil(123.456, -2) |\n+-------------------+\n|               200 |\n+-------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select ceil(123.45, 1), ceil(123.45), ceil(123.45, 0), ceil(123.45, -1);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-----------------+--------------+-----------------+------------------+\n| ceil(123.45, 1) | ceil(123.45) | ceil(123.45, 0) | ceil(123.45, -1) |\n+-----------------+--------------+-----------------+------------------+\n|           123.5 |          124 |             124 |              130 |\n+-----------------+--------------+-----------------+------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select ceil(x, 2) from ( select cast(123.456 as decimal(6,3)) as x from numbers("number"="5") )t;\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------------+\n| ceil(x, 2) |\n+------------+\n|     123.46 |\n|     123.46 |\n|     123.46 |\n|     123.46 |\n|     123.46 |\n+------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return c}});var l=i(667294);let s={},t=l.createContext(s);function c(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);