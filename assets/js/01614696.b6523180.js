"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["284670"],{655589:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/security/DROP-ENCRYPTKEY","title":"DROP ENCRYPTKEY","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/security/DROP-ENCRYPTKEY.md","sourceDirName":"sql-manual/sql-statements/security","slug":"/sql-manual/sql-statements/security/DROP-ENCRYPTKEY","permalink":"/docs/3.0/sql-manual/sql-statements/security/DROP-ENCRYPTKEY","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DROP ENCRYPTKEY","language":"en"},"sidebar":"docs","previous":{"title":"CREATE ENCRYPTKEY","permalink":"/docs/3.0/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY"},"next":{"title":"SHOW ENCRYPTKEY","permalink":"/docs/3.0/sql-manual/sql-statements/security/SHOW-ENCRYPTKEY"}}'),l=n("785893"),r=n("250065");let i={title:"DROP ENCRYPTKEY",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function o(e){let t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Delete a custom key. The name of the key is exactly the same to be deleted."}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"DROP ENCRYPTKEY [IF EXISTS] <key_name>\n"})}),"\n",(0,l.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["1. ",(0,l.jsx)(t.code,{children:"<key_name>"})]})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:["Specifies the name of the key to be deleted, which may include a database identifier.\nExample: ",(0,l.jsx)(t.code,{children:"db1.my_key"})]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["1. ",(0,l.jsx)(t.code,{children:"[IF EXISTS]"})]})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"If specified, no error will be thrown when attempting to delete a non-existent key."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(t.p,{children:"The user executing this SQL command must possess the following minimum privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"ADMIN_PRIV"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"User / Role"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["The user or role must hold the",(0,l.jsx)(t.code,{children:"ADMIN_PRIV"})," privilege to perform key deletion operations"]})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Delete a key"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"DROP ENCRYPTKEY my_key;\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Drop a key without throwing errors if it doesn't exist"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"DROP ENCRYPTKEY IF EXISTS testdb.my_key;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var s=n(667294);let l={},r=s.createContext(l);function i(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);