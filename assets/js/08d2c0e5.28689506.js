"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["336740"],{376756:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/spatial-functions/st-point","title":"ST_POINT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/spatial-functions/st-point.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/spatial-functions","slug":"/sql-manual/sql-functions/scalar-functions/spatial-functions/st-point","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/spatial-functions/st-point","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ST_POINT","language":"en"},"sidebar":"docs","previous":{"title":"ST_AREA_SQUARE_KM","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-km"},"next":{"title":"ST_POLYGON","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/spatial-functions/st-polygon"}}'),i=t("785893"),a=t("250065");let l={title:"ST_POINT",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"With the given X coordinate value, the Y coordinate value returns the corresponding Point."}),"\n",(0,i.jsx)(e.p,{children:"The current value is only meaningful in the sphere set, X/Y corresponds to longitude/latitude;"}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ST_POINT( <x>, <y>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameters"}),(0,i.jsx)(e.th,{children:"Instructions"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<x>"})}),(0,i.jsx)(e.td,{children:"x-coordinate"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<y>"})}),(0,i.jsx)(e.td,{children:"y-coordinate"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(e.p,{children:"Given horizontal coordinate and vertical coordinate corresponding position information"}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT ST_AsText(ST_Point(24.7, 56.7));\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);