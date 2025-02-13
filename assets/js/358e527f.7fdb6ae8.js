"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["422609"],{83403:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/spatial-functions/st-angle-sphere","title":"ST_ANGLE_SPHERE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/spatial-functions/st-angle-sphere.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/spatial-functions","slug":"/sql-manual/sql-functions/scalar-functions/spatial-functions/st-angle-sphere","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-angle-sphere","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ST_ANGLE_SPHERE","language":"en"},"sidebar":"docs","previous":{"title":"ST_AZIMUTH","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-azimuth"},"next":{"title":"ST_AREA_SQUARE_METERS","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/spatial-functions/st-area-square-meters"}}'),a=t("785893"),l=t("250065");let r={title:"ST_ANGLE_SPHERE",language:"en"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Calculate the center Angle between two points on the Earth's surface in degrees. The parameters passed in are the longitude of point X, latitude of point X, longitude of point Y, and latitude of point Y."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ST_ANGLE_SPHERE( <x_lng>, <x_lat>, <y_lng>, <y_lat>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameters"}),(0,a.jsx)(n.th,{children:"Instructions"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<x_lng>"})}),(0,a.jsx)(n.td,{children:"Longitude data, reasonable value range is [-180, 180]"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<y_lng>"})}),(0,a.jsx)(n.td,{children:"Longitude data, reasonable value range is [-180, 180]"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<x_lat>"})}),(0,a.jsx)(n.td,{children:"Latitude data, reasonable value range is [-90, 90]"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<y_lat>"})}),(0,a.jsx)(n.td,{children:"Latitude data, reasonable value range is [-90, 90]"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"The Angle of the center between two points"}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select ST_Angle_Sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------------------+\n| st_angle_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+---------------------------------------------------------------------------+\n|                                                        0.0659823452409903 |\n+---------------------------------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select ST_Angle_Sphere(0, 0, 45, 0);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------------------------------------+\n| st_angle_sphere(0.0, 0.0, 45.0, 0.0) |\n+----------------------------------------+\n|                                     45 |\n+----------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);