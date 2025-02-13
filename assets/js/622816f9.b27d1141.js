"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["729070"],{550116:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/system-functions/session-user","title":"SESSION_USER","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/system-functions/session-user.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/system-functions","slug":"/sql-manual/sql-functions/scalar-functions/system-functions/session-user","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/system-functions/session-user","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SESSION_USER","language":"en"},"sidebar":"docs","previous":{"title":"DATABASE","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/system-functions/database"},"next":{"title":"USER","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/system-functions/user"}}'),r=s("785893"),i=s("250065");let l={title:"SESSION_USER",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Get the current username and IP of Doris connection, compatible with MySQL protocol."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SESSION_USER()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the current username and IP Doris is connected to.\nFormat:",(0,r.jsx)(n.code,{children:"<user_name>@<ip>"})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select session_user();\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"+----------------------+\n| session_user()       |\n+----------------------+\n| 'root'@'10.244.2.10' |\n+----------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);