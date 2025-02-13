"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["511137"],{887003:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/encrypt-digest-functions/md5sum","title":"MD5SUM","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/encrypt-digest-functions/md5sum.md","sourceDirName":"sql-manual/sql-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/encrypt-digest-functions/md5sum","permalink":"/docs/2.0/sql-manual/sql-functions/encrypt-digest-functions/md5sum","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MD5SUM","language":"en"},"sidebar":"docs","previous":{"title":"MD5","permalink":"/docs/2.0/sql-manual/sql-functions/encrypt-digest-functions/md5"},"next":{"title":"SM4_ENCRYPT","permalink":"/docs/2.0/sql-manual/sql-functions/encrypt-digest-functions/sm4-encrypt"}}'),c=s("785893"),i=s("250065");let l={title:"MD5SUM",language:"en"},r=void 0,a={},d=[{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:3}];function o(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,c.jsx)(n.p,{children:"Calculates an MD5 128-bit checksum for the strings"}),"\n",(0,c.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"MD5SUM(str[,str])\n"})}),"\n",(0,c.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'select md5("abcd");\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"+----------------------------------+\n| md5('abcd')                      |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'select md5sum("ab","cd");\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"+----------------------------------+\n| md5sum('ab', 'cd')               |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(667294);let c={},i=t.createContext(c);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);