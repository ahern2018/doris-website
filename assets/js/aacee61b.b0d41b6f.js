"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["365821"],{613937:function(n,t,e){e.r(t),e.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>o,assets:()=>l,toc:()=>c,frontMatter:()=>d});var i=JSON.parse('{"id":"admin-manual/system-tables/internal_schema/partition_statistics","title":"partition_statistics","description":"\x3c!--","source":"@site/docs/admin-manual/system-tables/internal_schema/partition_statistics.md","sourceDirName":"admin-manual/system-tables/internal_schema","slug":"/admin-manual/system-tables/internal_schema/partition_statistics","permalink":"/docs/dev/admin-manual/system-tables/internal_schema/partition_statistics","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"partition_statistics","language":"en"},"sidebar":"docs","previous":{"title":"column_statistics","permalink":"/docs/dev/admin-manual/system-tables/internal_schema/column_statistics"},"next":{"title":"Overview","permalink":"/docs/dev/admin-manual/trouble-shooting/memory-management/overview"}}'),s=e("785893"),r=e("250065");let d={title:"partition_statistics",language:"en"},a=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}];function h(n){let t={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Partition statistics"}),"\n",(0,s.jsx)(t.h2,{id:"database",children:"Database"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"__internal_schema"})}),"\n",(0,s.jsx)(t.h2,{id:"table-information",children:"Table Information"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Column Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"catalog_id"}),(0,s.jsx)(t.td,{children:"varchar(64)"}),(0,s.jsx)(t.td,{children:"ID of the Catalog"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db_id"}),(0,s.jsx)(t.td,{children:"varchar(64)"}),(0,s.jsx)(t.td,{children:"ID of the Database"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tbl_id"}),(0,s.jsx)(t.td,{children:"varchar(64)"}),(0,s.jsx)(t.td,{children:"ID of the Table"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"idx_id"}),(0,s.jsx)(t.td,{children:"varchar(64)"}),(0,s.jsx)(t.td,{children:"ID of the Index"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"part_name"}),(0,s.jsx)(t.td,{children:"varchar(64)"}),(0,s.jsx)(t.td,{children:"Name of the Partition"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"part_id"}),(0,s.jsx)(t.td,{children:"bigint"}),(0,s.jsx)(t.td,{children:"ID of the Partition"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"col_id"}),(0,s.jsx)(t.td,{children:"varchar(64)"}),(0,s.jsx)(t.td,{children:"ID of the column, currently storing column names"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"count"}),(0,s.jsx)(t.td,{children:"bigint"}),(0,s.jsx)(t.td,{children:"Number of rows"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ndv"}),(0,s.jsx)(t.td,{children:"hll"}),(0,s.jsx)(t.td,{children:"Number of distinct values"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"null_count"}),(0,s.jsx)(t.td,{children:"bigint"}),(0,s.jsx)(t.td,{children:"Number of NULLs"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"min"}),(0,s.jsx)(t.td,{children:"varchar(65533)"}),(0,s.jsx)(t.td,{children:"Minimum value"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"max"}),(0,s.jsx)(t.td,{children:"varchar(65533)"}),(0,s.jsx)(t.td,{children:"Maximum value"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data_size_in_bytes"}),(0,s.jsx)(t.td,{children:"bigint"}),(0,s.jsx)(t.td,{children:"Data size in bytes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update_time"}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"Last update time of current statistics"})]})]})]})]})}function o(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return a},a:function(){return d}});var i=e(667294);let s={},r=i.createContext(s);function d(n){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);