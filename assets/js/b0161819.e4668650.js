"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["390813"],{712969:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>s,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"data-operate/delete/atomicity-replace","title":"Replacing Atomic Table","description":"\x3c!--","source":"@site/docs/data-operate/delete/atomicity-replace.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/atomicity-replace","permalink":"/docs/dev/data-operate/delete/atomicity-replace","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Replacing Atomic Table","language":"en"},"sidebar":"docs","previous":{"title":"Deleting Data with TRUNCATE Command","permalink":"/docs/dev/data-operate/delete/truncate-manual"},"next":{"title":"Temporary Partition","permalink":"/docs/dev/data-operate/delete/table-temp-partition"}}'),l=n("785893"),i=n("250065");let r={title:"Replacing Atomic Table",language:"en"},s=void 0,o={},c=[{value:"Applicable Scenarios",id:"applicable-scenarios",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Principle",id:"principle",level:2},{value:"Notes",id:"notes",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Doris supports atomic replacement operations between two tables, applicable only to OLAP tables."}),"\n",(0,l.jsx)(t.h2,{id:"applicable-scenarios",children:"Applicable Scenarios"}),"\n",(0,l.jsxs)(t.p,{children:["Sometimes, users need to rewrite table data, but deleting and then importing the data would result in a period of unavailability. In such cases, users can create a new table with the same structure using the ",(0,l.jsx)(t.code,{children:"CREATE TABLE LIKE"})," statement, import the new data into the new table, and then perform an atomic replacement of the old table. For partition-level atomic overwrite operations, refer to the ",(0,l.jsx)(t.a,{href:"../delete/table-temp-partition",children:"temporary partition documentation"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-Plain",children:"ALTER TABLE [db.]tbl1 REPLACE WITH TABLE tbl2\n[PROPERTIES('swap' = 'true')];\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Replace table ",(0,l.jsx)(t.code,{children:"tbl1"})," with table ",(0,l.jsx)(t.code,{children:"tbl2"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["If the ",(0,l.jsx)(t.code,{children:"swap"})," parameter is ",(0,l.jsx)(t.code,{children:"true"}),", after the replacement, the data in ",(0,l.jsx)(t.code,{children:"tbl1"})," will be the original data in ",(0,l.jsx)(t.code,{children:"tbl2"}),", and the data in ",(0,l.jsx)(t.code,{children:"tbl2"})," will be the original data in ",(0,l.jsx)(t.code,{children:"tbl1"}),", meaning the data in the two tables will be swapped."]}),"\n",(0,l.jsxs)(t.p,{children:["If the ",(0,l.jsx)(t.code,{children:"swap"})," parameter is ",(0,l.jsx)(t.code,{children:"false"}),", after the replacement, the data in ",(0,l.jsx)(t.code,{children:"tbl1"})," will be the original data in ",(0,l.jsx)(t.code,{children:"tbl2"}),", and ",(0,l.jsx)(t.code,{children:"tbl2"})," will be deleted."]}),"\n",(0,l.jsx)(t.h2,{id:"principle",children:"Principle"}),"\n",(0,l.jsx)(t.p,{children:"The table replacement function turns the following set of operations into an atomic operation."}),"\n",(0,l.jsxs)(t.p,{children:["Assuming table A is replaced with table B, and ",(0,l.jsx)(t.code,{children:"swap"})," is ",(0,l.jsx)(t.code,{children:"true"}),", the operations are as follows:"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Rename table B to table A."}),"\n",(0,l.jsx)(t.li,{children:"Rename table A to table B."}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["If ",(0,l.jsx)(t.code,{children:"swap"})," is ",(0,l.jsx)(t.code,{children:"false"}),", the operations are as follows:"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Delete table A."}),"\n",(0,l.jsx)(t.li,{children:"Rename table B to table A."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["If the ",(0,l.jsx)(t.code,{children:"swap"})," parameter is ",(0,l.jsx)(t.code,{children:"false"}),", the replaced table (table A) will be deleted and cannot be recovered."]}),"\n",(0,l.jsx)(t.li,{children:"The replacement operation can only occur between two OLAP tables and does not check if the table structures are consistent."}),"\n",(0,l.jsx)(t.li,{children:"The replacement operation will not change the original permission settings, as permission checks are based on table names."}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var a=n(667294);let l={},i=a.createContext(l);function r(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);