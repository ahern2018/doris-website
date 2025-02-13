"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["695567"],{857476:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>a});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/reverse","title":"REVERSE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/reverse.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/reverse","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/reverse","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REVERSE","language":"en"},"sidebar":"docs","previous":{"title":"REPEAT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/repeat"},"next":{"title":"CHAR","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/char"}}'),t=s("785893"),l=s("250065");let a={title:"REVERSE",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The REVERSE function is used to reverse the order of characters in a string or the order of elements in an array."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"REVERSE( <seq> )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<seq>"})}),(0,t.jsx)(n.td,{children:"The string or array whose order needs to be reversed."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns the string or array with the reversed order. Special cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If any Parameter is NULL, NULL will be returned."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT reverse('hello');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------------------+\n| REVERSE('hello') |\n+------------------+\n| olleh            |\n+------------------+\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT reverse(['hello', 'world']);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+-----------------------------+\n| reverse(['hello', 'world']) |\n+-----------------------------+\n| [\"world\", \"hello\"]          |\n+-----------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let t={},l=r.createContext(t);function a(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);