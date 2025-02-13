"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["906497"],{680204:function(n,t,e){e.r(t),e.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>i,toc:()=>u,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/struct-functions/struct","title":"STRUCT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/struct-functions/struct.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/struct-functions","slug":"/sql-manual/sql-functions/scalar-functions/struct-functions/struct","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/struct-functions/struct","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"STRUCT","language":"en"},"sidebar":"docs","previous":{"title":"MAP_CONTAINS_VALUE","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/map-functions/map-contains-value"},"next":{"title":"NAMED_STRUCT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/struct-functions/named-struct"}}'),c=e("785893"),r=e("250065");let l={title:"STRUCT",language:"en"},a=void 0,i={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(n){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"construct an struct with variadic elements and return it, Tn could be column or literal"}),"\n",(0,c.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"STRUCT( <expr1> [ , <expr2> ... ] )\n"})}),"\n",(0,c.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Parameter"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"<expr>"})}),(0,c.jsx)(t.td,{children:"Construct the input content for the struct"})]})})]}),"\n",(0,c.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,c.jsx)(t.p,{children:"construct an struct with variadic elements and return it, Tn could be column or literal"}),"\n",(0,c.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sql",children:"select struct(1, 'a', \"abc\"),struct(null, 1, null),struct(cast('2023-03-16' as datetime));\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-text",children:'+--------------------------------------+--------------------------------------+---------------------------------------------+\n| struct(1, \'a\', \'abc\')                | struct(NULL, 1, NULL)                | struct(cast(\'2023-03-16\' as DATETIMEV2(0))) |\n+--------------------------------------+--------------------------------------+---------------------------------------------+\n| {"col1":1, "col2":"a", "col3":"abc"} | {"col1":null, "col2":1, "col3":null} | {"col1":"2023-03-16 00:00:00"}              |\n+--------------------------------------+--------------------------------------+---------------------------------------------+\n'})})]})}function d(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return a},a:function(){return l}});var s=e(667294);let c={},r=s.createContext(c);function l(n){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);