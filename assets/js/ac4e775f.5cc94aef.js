"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["390957"],{516478:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>r,frontMatter:()=>o});var a=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/PAUSE-SYNC-JOB","title":"PAUSE SYNC JOB","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/data-modification/load-and-export/PAUSE-SYNC-JOB.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/PAUSE-SYNC-JOB","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/PAUSE-SYNC-JOB","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PAUSE SYNC JOB","language":"en"},"sidebar":"docs","previous":{"title":"CREATE SYNC JOB","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/CREATE-SYNC-JOB"},"next":{"title":"RESUME SYNC JOB","permalink":"/docs/dev/sql-manual/sql-statements/data-modification/load-and-export/RESUME-SYNC-JOB"}}'),s=t("785893"),i=t("250065");let o={title:"PAUSE SYNC JOB",language:"en"},l=void 0,d={},r=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Pause a running resident data synchronization job in a database via ",(0,s.jsx)(n.code,{children:"job_name"}),". The suspended job will stop synchronizing data and keep the latest position of consumption until it is resumed by the user."]}),"\n",(0,s.jsx)(n.p,{children:"grammar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"PAUSE SYNC JOB [db.]job_name\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Pause the data sync job named ",(0,s.jsx)(n.code,{children:"job_name"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"PAUSE SYNC JOB `job_name`;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PAUSE, SYNC, JOB\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var a=t(667294);let s={},i=a.createContext(s);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);