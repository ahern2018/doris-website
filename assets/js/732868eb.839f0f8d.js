"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["51814"],{691299:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH","title":"ADMIN-CLEAN-TRASH","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ADMIN-CLEAN-TRASH","language":"en"},"sidebar":"docs","previous":{"title":"SHOW TABLET STORAGE FORMAT","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT"},"next":{"title":"RECOVER","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/RECOVER"}}'),s=t("785893"),i=t("250065");let l={title:"ADMIN-CLEAN-TRASH",language:"en"},r=void 0,d={},c=[{value:"ADMIN-CLEAN-TRASH",id:"admin-clean-trash",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"admin-clean-trash",children:"ADMIN-CLEAN-TRASH"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"ADMIN CLEAN TRASH"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to clean up garbage data in the backend"}),"\n",(0,s.jsx)(n.p,{children:"grammar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN CLEAN TRASH [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n'})}),"\n",(0,s.jsx)(n.p,{children:"illustrate:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Use BackendHost:BackendHeartBeatPort to indicate the backend that needs to be cleaned up, and clean up all backends without adding the on limit."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clean up the junk data of all be nodes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" ADMIN CLEAN TRASH;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clean up the junk data of '192.168.0.1:9050' and '192.168.0.2:9050'."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:' ADMIN CLEAN TRASH ON ("192.168.0.1:9050","192.168.0.2:9050");\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var a=t(667294);let s={},i=a.createContext(s);function l(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);