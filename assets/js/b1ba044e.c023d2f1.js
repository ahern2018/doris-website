"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["162353"],{516949:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/transaction/BEGIN","title":"BEGIN","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/transaction/BEGIN.md","sourceDirName":"sql-manual/sql-statements/transaction","slug":"/sql-manual/sql-statements/transaction/BEGIN","permalink":"/docs/dev/sql-manual/sql-statements/transaction/BEGIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BEGIN","language":"en"},"sidebar":"docs","previous":{"title":"KILL CONNECTION","permalink":"/docs/dev/sql-manual/sql-statements/session/connection/KILL-CONNECTION"},"next":{"title":"COMMIT","permalink":"/docs/dev/sql-manual/sql-statements/transaction/COMMIT"}}'),s=n("785893"),l=n("250065");let i={title:"BEGIN",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameter",id:"optional-parameter",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Users can specify a Label. If not specified, the system will generate a Label automatically."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"BEGIN [ WITH LABEL <label> ]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"optional-parameter",children:"Optional Parameter"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"[ WITH LABEL <label> ]"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Explicitly specify the Label associated with the transaction. If not specified, the system will generate a ",(0,s.jsx)(t.a,{href:"../../../data-operate/transaction",children:"label"})," automatically."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If an explicit transaction is started without a commit or rollback, executing the BEGIN command again will not take effect."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Start an explicit transaction using a system-generated Label"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"mysql> BEGIN;\n{'label':'txn_insert_624a0e16ef4c43d4-9814c7fa3e83a705', 'status':'PREPARE', 'txnId':''}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Start an explicit transaction with a specified Label"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"mysql> BEGIN WITH LABEL load_1;\n{'label':'load_1', 'status':'PREPARE', 'txnId':''}\n"})})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var a=n(667294);let s={},l=a.createContext(s);function i(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);