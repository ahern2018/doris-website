"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["542701"],{499204:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>r});var n=JSON.parse('{"id":"sql-manual/sql-statements/statistics/DROP-ANALYZE-JOB","title":"DROP ANALYZE JOB","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/statistics/DROP-ANALYZE-JOB.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/DROP-ANALYZE-JOB","permalink":"/docs/sql-manual/sql-statements/statistics/DROP-ANALYZE-JOB","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"DROP ANALYZE JOB","language":"en"},"sidebar":"docs","previous":{"title":"SHOW COLUMN STATS","permalink":"/docs/sql-manual/sql-statements/statistics/SHOW-STATS"},"next":{"title":"KILL ANALYZE JOB","permalink":"/docs/sql-manual/sql-statements/statistics/KILL-ANALYZE-JOB"}}'),i=s("785893"),l=s("250065");let r={title:"DROP ANALYZE JOB",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Delete the history of the specified statistics collection job."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"DROP ANALYZE JOB <job_id>\n"})}),"\n",(0,i.jsx)(t.h1,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"<job_id>"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:'Specifies the id of the job. You can obtain the job_id by running SHOW ANALYZE. For detailed usage, please refer to the "SHOW ANALYZE" section.'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(t.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Privilege"}),(0,i.jsx)(t.th,{children:"Object"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELECT_PRIV"}),(0,i.jsx)(t.td,{children:"Table"}),(0,i.jsx)(t.td,{})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Delete the statistics information job record with id 10036"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"DROP ANALYZE JOB 10036\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return r}});var n=s(667294);let i={},l=n.createContext(i);function r(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);