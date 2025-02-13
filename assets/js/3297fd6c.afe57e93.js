"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["202199"],{338498:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/spatial-functions/st-linefromtext","title":"ST_LINEFROMTEXT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/spatial-functions/st-linefromtext.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/spatial-functions","slug":"/sql-manual/sql-functions/scalar-functions/spatial-functions/st-linefromtext","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-linefromtext","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ST_LINEFROMTEXT","language":"en"},"sidebar":"docs","previous":{"title":"ST_GEOMETRYFROMTEXT","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-geometryfromtext"},"next":{"title":"ST_ASBINARY","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-asbinary"}}'),l=t("785893"),a=t("250065");let i={title:"ST_LINEFROMTEXT",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Alias",id:"alias",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Converts a WKT (Well Known Text) to a memory representation in the form of a Line"}),"\n",(0,l.jsx)(n.h2,{id:"alias",children:"Alias"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ST_LINESTRINGFROMTEXT"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ST_LINEFROMTEXT( <wkt>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameters"}),(0,l.jsx)(n.th,{children:"Instructions"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<wkt>"})}),(0,l.jsx)(n.td,{children:"A line segment consisting of two coordinates"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"The memory form of a line segment."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SELECT ST_AsText(ST_LineFromText("LINESTRING (1 1, 2 2)"));\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------+\n| st_astext(st_geometryfromtext('LINESTRING (1 1, 2 2)')) |\n+---------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                   |\n+---------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);