"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["565457"],{714949:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>E,assets:()=>c,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY","title":"CREATE-ENCRYPT-KEY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Create","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CREATE-ENCRYPT-KEY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE-POLICY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"},"next":{"title":"CREATE-RESOURCE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"}}'),r=s("785893"),i=s("250065");let l={title:"CREATE-ENCRYPT-KEY",language:"zh-CN"},a=void 0,c={},d=[{value:"CREATE-ENCRYPTKEY",id:"create-encryptkey",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"create-encryptkey",children:"CREATE-ENCRYPTKEY"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"CREATE ENCRYPTKEY"}),"\n",(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsxs)(n.p,{children:["\u6B64\u8BED\u53E5\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5BC6\u94A5\u3002\u6267\u884C\u6B64\u547D\u4EE4\u9700\u8981\u7528\u6237\u62E5\u6709 ",(0,r.jsx)(n.code,{children:"ADMIN"})," \u6743\u9650\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY key_name AS "key_string"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"key_name"}),": \u8981\u521B\u5EFA\u5BC6\u94A5\u7684\u540D\u5B57, \u53EF\u4EE5\u5305\u542B\u6570\u636E\u5E93\u7684\u540D\u5B57\u3002\u6BD4\u5982\uFF1A",(0,r.jsx)(n.code,{children:"db1.my_key"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"key_string"}),": \u8981\u521B\u5EFA\u5BC6\u94A5\u7684\u5B57\u7B26\u4E32\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C ",(0,r.jsx)(n.code,{children:"key_name"})," \u4E2D\u5305\u542B\u4E86\u6570\u636E\u5E93\u540D\u5B57\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u81EA\u5B9A\u4E49\u5BC6\u94A5\u4F1A\u521B\u5EFA\u5728\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u4E2D\uFF0C\u5426\u5219\u8FD9\u4E2A\u51FD\u6570\u5C06\u4F1A\u521B\u5EFA\u5728\u5F53\u524D\u4F1A\u8BDD\u6240\u5728\u7684\u6570\u636E\u5E93\u3002\u65B0\u5BC6\u94A5\u7684\u540D\u5B57\u4E0D\u80FD\u591F\u4E0E\u5BF9\u5E94\u6570\u636E\u5E93\u4E2D\u5DF2\u5B58\u5728\u7684\u5BC6\u94A5\u76F8\u540C\uFF0C\u5426\u5219\u4F1A\u521B\u5EFA\u5931\u8D25\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5BC6\u94A5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY my_key AS "ABCD123456789";\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BC6\u94A5"}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BC6\u94A5\u9700\u5728\u5BC6\u94A5\u524D\u6DFB\u52A0\u5173\u952E\u5B57 ",(0,r.jsx)(n.code,{children:"KEY"}),"/",(0,r.jsx)(n.code,{children:"key"}),"\uFF0C\u4E0E ",(0,r.jsx)(n.code,{children:"key_name"})," \u7A7A\u683C\u9694\u5F00\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6               |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+--------------------------------------------------------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+--------------------------------------------------------------------+\n| Doris is Great                                                     |\n+--------------------------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CREATE, ENCRYPTKEY\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function E(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);