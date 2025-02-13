"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["763130"],{322505:function(e,n,l){l.r(n),l.d(n,{metadata:()=>c,contentTitle:()=>r,default:()=>u,assets:()=>t,toc:()=>a,frontMatter:()=>d});var c=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/numeric-functions/ceil","title":"CEIL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/ceil.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/numeric-functions","slug":"/sql-manual/sql-functions/scalar-functions/numeric-functions/ceil","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/ceil","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CEIL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/ln"},"next":{"title":"FLOOR","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/numeric-functions/floor"}}'),s=l("785893"),i=l("250065");let d={title:"CEIL",language:"zh-CN"},r=void 0,t={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u5BF9\u6D6E\u70B9\u53CA\u5B9A\u70B9\u5C0F\u6570\u6309\u7279\u5B9A\u4F4D\u6570\u5411\u4E0A\u53D6\u6574\uFF0C\u8FD4\u56DE\u53D6\u6574\u8FC7\u540E\u7684\u6D6E\u70B9\u6216\u5B9A\u70B9\u6570\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CEIL(<a>[, <d>])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53C2\u6570"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<a>"})}),(0,s.jsx)(n.td,{children:"\u6D6E\u70B9(Double)\u6216\u5B9A\u70B9(Decimal)\u53C2\u6570\uFF0C\u8868\u793A\u8981\u8FDB\u884C\u53D6\u6574\u7684\u53C2\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<d>"})}),(0,s.jsxs)(n.td,{children:["\u53EF\u9009\u7684\uFF0C\u6574\u6570\uFF0C\u8868\u793A\u820D\u5165\u76EE\u6807\u4F4D\u6570\uFF0C\u6B63\u6570\u4E3A\u5411\u5C0F\u6570\u70B9\u540E\u820D\u5165\uFF0C\u8D1F\u6570\u4E3A\u5411\u5C0F\u6570\u70B9\u524D\u820D\u5165\uFF0C",(0,s.jsx)(n.code,{children:"0"})," \u8868\u793A\u820D\u5165\u5230\u6574\u6570\u3002\u4E0D\u586B\u5199\u65F6\u7B49\u540C\u4E8E ",(0,s.jsx)(n.code,{children:"<d> = 0"})]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsxs)(n.p,{children:["\u6309\u7167\u4E0B\u9762\u89C4\u5219\u8FD4\u56DE\u6700\u5C0F\u7684\u5927\u4E8E\u6216\u8005\u7B49\u4E8E ",(0,s.jsx)(n.code,{children:"<a>"})," \u7684\u820D\u5165\u6570\u5B57:"]}),"\n",(0,s.jsxs)(n.p,{children:["\u820D\u5165\u5230 ",(0,s.jsx)(n.code,{children:"1/(10^d)"})," \u4F4D\uFF0C\u5373\uFF0C\u4F7F\u7ED3\u679C\u53EF\u6574\u9664",(0,s.jsx)(n.code,{children:"1/(10^d)"}),"\u3002\u5982\u679C ",(0,s.jsx)(n.code,{children:"1/(10^d)"})," \u4E0D\u7CBE\u786E\uFF0C\u5219\u820D\u5165\u4F4D\u6570\u4E3A\u76F8\u5E94\u6570\u636E\u7C7B\u578B\u7684\u6700\u63A5\u8FD1\u7684\u6570\u5B57\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5BF9\u4E8E Decimal \u7C7B\u578B\u7684\u5165\u53C2 ",(0,s.jsx)(n.code,{children:"<a>"}),"\uFF0C\u5047\u8BBE\u5176\u7C7B\u578B\u4E3A ",(0,s.jsx)(n.code,{children:"Decimal(p, s)"}),"\uFF0C\u5219\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3A\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Decimal(p, 0)"}),"\uFF0C\u82E5 ",(0,s.jsx)(n.code,{children:"<d> <= 0"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Decimal(p, <d>)"}),"\uFF0C\u82E5 ",(0,s.jsx)(n.code,{children:"0 < <d> <= s"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Decimal(p, s)"}),"\uFF0C\u82E5 ",(0,s.jsx)(n.code,{children:"<d> > s"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DCEIL"}),"\n",(0,s.jsx)(n.li,{children:"CEILING"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select ceil(123.456);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------+\n| ceil(123.456) |\n+---------------+\n|           124 |\n+---------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select ceil(123.456, 2);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------------------+\n| ceil(123.456, 2) |\n+------------------+\n|           123.46 |\n+------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select ceil(123.456, -2);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------------+\n| ceil(123.456, -2) |\n+-------------------+\n|               200 |\n+-------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select ceil(123.45, 1), ceil(123.45), ceil(123.45, 0), ceil(123.45, -1);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-----------------+--------------+-----------------+------------------+\n| ceil(123.45, 1) | ceil(123.45) | ceil(123.45, 0) | ceil(123.45, -1) |\n+-----------------+--------------+-----------------+------------------+\n|           123.5 |          124 |             124 |              130 |\n+-----------------+--------------+-----------------+------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select ceil(x, 2) from ( select cast(123.456 as decimal(6,3)) as x from numbers("number"="5") )t;\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------------+\n| ceil(x, 2) |\n+------------+\n|     123.46 |\n|     123.46 |\n|     123.46 |\n|     123.46 |\n|     123.46 |\n+------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return d}});var c=l(667294);let s={},i=c.createContext(s);function d(e){let n=c.useContext(i);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);