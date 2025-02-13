"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["871395"],{414509:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-statements/security/CREATE-ENCRYPTKEY","title":"CREATE ENCRYPTKEY","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY.md","sourceDirName":"sql-manual/sql-statements/security","slug":"/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY","permalink":"/docs/dev/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE ENCRYPTKEY","language":"en"},"sidebar":"docs","previous":{"title":"SHOW FILE","permalink":"/docs/dev/sql-manual/sql-statements/security/SHOW-FILE"},"next":{"title":"DROP ENCRYPTKEY","permalink":"/docs/dev/sql-manual/sql-statements/security/DROP-ENCRYPTKEY"}}'),l=s("785893"),i=s("250065");let r={title:"CREATE ENCRYPTKEY",language:"en"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement creates a custom key."}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY <key_name> AS "<key_string>"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<key_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Specifies the name of the key to be created, which may include a database identifier.",(0,l.jsx)(n.br,{}),"\nExample: ",(0,l.jsx)(n.code,{children:"db1.my_key"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["2. ",(0,l.jsx)(n.code,{children:"<key_string>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Defines the key material string for cryptographic operations."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Behavior Notes"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["When the ",(0,l.jsx)(n.code,{children:"<key_name>"})," contains a database identifier, the key will be created in the specified database"]}),"\n",(0,l.jsxs)(n.li,{children:["If no database is specified in ",(0,l.jsx)(n.code,{children:"<key_name>"}),", the current session's database will be used"]}),"\n",(0,l.jsx)(n.li,{children:"Key creation will fail if duplicate key names exist in the target database"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,l.jsx)(n.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"ADMIN_PRIV"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"User / Role"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Must hold the ",(0,l.jsx)(n.code,{children:"ADMIN_PRIV"})," privilege on the target user or role to create custom keys"]})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create a custom key"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY my_key AS "ABCD123456789";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create a custom key in the testdb database"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY testdb.test_key AS "ABCD123456789";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Use a custom key to encrypt data"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["When using custom keys, you must prefix the key name with ",(0,l.jsx)(n.code,{children:"KEY"}),"/",(0,l.jsx)(n.code,{children:"key"})," followed by a space."]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SELECT HEX(AES_ENCRYPT("Doris is Great", KEY my_key));\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6               |\n+------------------------------------------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Use a custom key to decrypt data"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------- -------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key)  |\n+------------------------------------------------- -------------------+\n| Doris is Great                                                      |\n+------------------------------------------------- -------------------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);