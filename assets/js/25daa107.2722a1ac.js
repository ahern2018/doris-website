"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["663476"],{471910:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/backup-and-restore/DROP-REPOSITORY","title":"DROP REPOSITORY","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/backup-and-restore/DROP-REPOSITORY.md","sourceDirName":"sql-manual/sql-statements/data-modification/backup-and-restore","slug":"/sql-manual/sql-statements/data-modification/backup-and-restore/DROP-REPOSITORY","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/DROP-REPOSITORY","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DROP REPOSITORY","language":"en"},"sidebar":"docs","previous":{"title":"CREATE REPOSITORY","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY"},"next":{"title":"SHOW CREATE REPOSITORY","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-CREATE-REPOSITORY"}}'),r=n("785893"),a=n("250065");let i={title:"DROP REPOSITORY",language:"en"},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"This statement is used to delete a created repository."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DROP REPOSITORY <repo_name>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"<repo_name>"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The unique name of the repository."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Entire cluster management permissions"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Only the root or superuser can create repositories"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Deleting the repository only removes its mapping in Doris and does not delete the actual repository data. After deletion, the repository can be mapped again by specifying the same LOCATION."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Delete the repository named example_repo:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DROP REPOSITORY `example_repo`;\n"})})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var s=n(667294);let r={},a=s.createContext(r);function i(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);