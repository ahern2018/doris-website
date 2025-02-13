"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["211658"],{495092:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/types/SHOW-DATA-TYPES","title":"SHOW DATA TYPES","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/types/SHOW-DATA-TYPES.md","sourceDirName":"sql-manual/sql-statements/types","slug":"/sql-manual/sql-statements/types/SHOW-DATA-TYPES","permalink":"/docs/dev/sql-manual/sql-statements/types/SHOW-DATA-TYPES","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW DATA TYPES","language":"en"},"sidebar":"docs","previous":{"title":"SHOW CHARSET","permalink":"/docs/dev/sql-manual/sql-statements/character-set/SHOW-CHARSET"},"next":{"title":"SHOW TYPECAST","permalink":"/docs/dev/sql-manual/sql-statements/types/SHOW-TYPECAST"}}'),l=t("785893"),r=t("250065");let i={title:"SHOW DATA TYPES",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"This statement is used to view all supported data types.\n"})}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATA TYPES;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Column Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TypeName"}),(0,l.jsx)(n.td,{children:"Name of the type"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Size"}),(0,l.jsx)(n.td,{children:"Size in bytes"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"The user executing this SQL command does not require specific privileges."}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Display all supported data types"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATA TYPES;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+----------------+------+\n| TypeName       | Size |\n+----------------+------+\n| AGG_STATE      | 16   |\n| ARRAY          | 32   |\n| BIGINT         | 8    |\n| BITMAP         | 16   |\n| BOOLEAN        | 1    |\n| CHAR           | 16   |\n| DATE           | 16   |\n| DATETIME       | 16   |\n| DATETIMEV2     | 8    |\n| DATEV2         | 4    |\n| DECIMAL128     | 16   |\n| DECIMAL32      | 4    |\n| DECIMAL64      | 8    |\n| DECIMALV2      | 16   |\n| DOUBLE         | 8    |\n| FLOAT          | 4    |\n| HLL            | 16   |\n| INT            | 4    |\n| IPV4           | 4    |\n| IPV6           | 16   |\n| JSON           | 16   |\n| LARGEINT       | 16   |\n| MAP            | 24   |\n| QUANTILE_STATE | 16   |\n| SMALLINT       | 2    |\n| STRING         | 16   |\n| TINYINT        | 1    |\n| VARCHAR        | 16   |\n+----------------+------+\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);