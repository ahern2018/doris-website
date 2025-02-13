"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["675653"],{83814:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/group-concat","title":"GROUP_CONCAT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/group-concat.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/group-concat","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/group-concat","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GROUP_CONCAT","language":"en"},"sidebar":"docs","previous":{"title":"GROUP_BIT_XOR","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/group-bit-xor"},"next":{"title":"HLL_UNION_AGG","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/hll-union-agg"}}'),l=t("785893"),r=t("250065");let a={title:"GROUP_CONCAT",language:"en"},c=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"The GROUP_CONCAT function concatenates multiple rows of results in the result set into a string."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"GROUP_CONCAT([DISTINCT] <str>[, <sep>] [ORDER BY { <col_name> | <expr>} [ASC | DESC]])\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameters"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<str>"})}),(0,l.jsx)(n.td,{children:"Required. The expression of the value to be concatenated."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<sep>"})}),(0,l.jsx)(n.td,{children:"Optional. The separator between strings."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<col_name>"})}),(0,l.jsx)(n.td,{children:"Optional. The column used for sorting."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<expr>"})}),(0,l.jsx)(n.td,{children:"Optional. The expression used for sorting."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"Returns a value of type VARCHAR."}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select value from test;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------+\n| value |\n+-------+\n| a     |\n| b     |\n| c     |\n| c     |\n+-------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select GROUP_CONCAT(value) from test;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c, c            |\n+-----------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select GROUP_CONCAT(DISTINCT value) from test;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c               |\n+-----------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'select GROUP_CONCAT(value, " ") from test;\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+----------------------------+\n| GROUP_CONCAT(`value`, ' ') |\n+----------------------------+\n| a b c c                    |\n+----------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select GROUP_CONCAT(value, NULL) from test;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+----------------------------+\n| GROUP_CONCAT(`value`, NULL)|\n+----------------------------+\n| NULL                       |\n+----------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let l={},r=s.createContext(l);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);