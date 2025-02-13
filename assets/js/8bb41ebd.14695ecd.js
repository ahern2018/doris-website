"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["834191"],{167338:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st-circle","title":"ST_CIRCLE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-circle.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st-circle","permalink":"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-circle","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ST_CIRCLE","language":"en"},"sidebar":"docs","previous":{"title":"ST_Y","permalink":"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-y"},"next":{"title":"ST_DISTANCE_SPHERE","permalink":"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-distance-sphere"}}'),l=t("785893"),i=t("250065");let r={title:"ST_CIRCLE",language:"en"},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Convert a WKT (Well Known Text) to a circle on the sphere of the Earth."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ST_CIRCLE( <center_lng>, <center_lat>, <radius>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameters"}),(0,l.jsx)(n.th,{children:"Instructions"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<center_lng>"})}),(0,l.jsx)(n.td,{children:"Longitude of the center of the circle"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<center_lat>"})}),(0,l.jsx)(n.td,{children:"The latitude of the center of the circle"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<radius>"})}),(0,l.jsx)(n.td,{children:"Radius of a circle"})]})]})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The unit of radius is meters. A maximum of 9999999 RADIUS is supported"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"A circle on a sphere based on basic information about the circle"}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT ST_AsText(ST_Circle(111, 64, 10000));\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------+\n| st_astext(st_circle(111.0, 64.0, 10000.0)) |\n+--------------------------------------------+\n| CIRCLE ((111 64), 10000)                   |\n+--------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);