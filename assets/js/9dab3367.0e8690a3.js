"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["128238"],{628774:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>s});var a=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/bitmap-intersect","title":"BITMAP_INTERSECT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/bitmap-intersect.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/bitmap-intersect","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/bitmap-intersect","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_INTERSECT","language":"en"},"sidebar":"docs","previous":{"title":"WINDOW_FUNNEL","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/window-funnel"},"next":{"title":"BITMAP_UNION","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/bitmap-union"}}'),i=n("785893"),r=n("250065");let s={title:"BITMAP_INTERSECT",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Aggregation function, used to calculate the bitmap intersection after grouping. Common usage scenarios such as: calculating user retention rate."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"BITMAP_INTERSECT(BITMAP <value>)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<value>"})}),(0,i.jsx)(t.td,{children:"Supported bitmap data types"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(t.p,{children:"The data type of the return value is BITMAP."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Table schema"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Find the retention of users between 2020-05-18 and 2020-05-19 under different tags.\nmysql> select tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n"})}),"\n",(0,i.jsx)(t.p,{children:"Used in combination with the bitmap_to_string function to obtain the specific data of the intersection"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Who are the users retained under different tags between 2020-05-18 and 2020-05-19?\nmysql> select tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var a=n(667294);let i={},r=a.createContext(i);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);