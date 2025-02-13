"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["897656"],{835916:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>i,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>s});var a=JSON.parse('{"id":"data-operate/delete/truncate-manual","title":"Deleting Data with TRUNCATE Command","description":"\x3c!--","source":"@site/docs/data-operate/delete/truncate-manual.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/truncate-manual","permalink":"/docs/dev/data-operate/delete/truncate-manual","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Deleting Data with TRUNCATE Command","language":"en"},"sidebar":"docs","previous":{"title":"Batch Deletion Based on Load","permalink":"/docs/dev/data-operate/delete/batch-delete-manual"},"next":{"title":"Replacing Atomic Table","permalink":"/docs/dev/data-operate/delete/atomicity-replace"}}'),r=n("785893"),l=n("250065");let s={title:"Deleting Data with TRUNCATE Command",language:"en"},i="Truncate",d={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"truncate",children:"Truncate"})}),"\n",(0,r.jsx)(t.p,{children:"Use this statement to clear data from a specified table and its partitions."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"TRUNCATE TABLE [db.]tbl [PARTITION(p1, p2, ...)];\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"This statement clears the data but retains the table or partition structure."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Unlike DELETE, TRUNCATE only performs metadata operations, making it faster and not affecting query performance."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Data removed by this operation cannot be recovered."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The table status must be NORMAL, and there should be no ongoing SCHEMA CHANGE operations."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"This command may cause ongoing import tasks to fail."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["1. Clear the table ",(0,r.jsx)(t.code,{children:"tbl"})," in the ",(0,r.jsx)(t.code,{children:"example_db"})," database"]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"TRUNCATE TABLE example_db.tbl;\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["2. Clear the ",(0,r.jsx)(t.code,{children:"p1"})," and ",(0,r.jsx)(t.code,{children:"p2"})," partitions of the table ",(0,r.jsx)(t.code,{children:"tbl"})]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"TRUNCATE TABLE tbl PARTITION(p1, p2);\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var a=n(667294);let r={},l=a.createContext(r);function s(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);