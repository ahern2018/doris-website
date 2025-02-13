"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["385313"],{132016:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-encrypt","title":"AES_ENCRYPT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-encrypt.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-encrypt","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-encrypt","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"AES_ENCRYPT","language":"en"},"sidebar":"docs","previous":{"title":"ST_GEOMETRYFROMWKB","permalink":"/docs/sql-manual/sql-functions/scalar-functions/spatial-functions/st-geometryfromwkb"},"next":{"title":"AES_DECRYPT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/encrypt-digest-functions/aes-decrypt"}}'),i=t("785893"),r=t("250065");let c={title:"AES_ENCRYPT",language:"en"},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["AES encryption function. This function behaves the same as the ",(0,i.jsx)(n.code,{children:"AES_ENCRYPT"})," function in MySQL. The default algorithm is ",(0,i.jsx)(n.code,{children:"AES_128_ECB"}),", and the padding mode is ",(0,i.jsx)(n.code,{children:"PKCS7"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The AES_ENCRYPT function does not use the passed key directly, but further processes it. The specific steps are as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Determine the number of bytes of the key according to the encryption algorithm used. For example, if the AES_128_ECB algorithm is used, the number of bytes of the key is ",(0,i.jsx)(n.code,{children:"128 / 8 = 16"})," (if the AES_256_ECB algorithm is used, the number of bytes of the key is ",(0,i.jsx)(n.code,{children:"128 / 8 = 32"}),");"]}),"\n",(0,i.jsxs)(n.li,{children:["Then, for the key input by the user, the ",(0,i.jsx)(n.code,{children:"i"}),"th bit and the ",(0,i.jsx)(n.code,{children:"16*k+i"}),"th bit are XORed. If the key input by the user is less than 16 bits, 0 is added at the end."]}),"\n",(0,i.jsx)(n.li,{children:"Finally, use the newly generated key to encrypt;"}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Until 2.1.6, function with two arguments will ignore session variable ",(0,i.jsx)(n.code,{children:"block_encryption_mode"})," and always use ",(0,i.jsx)(n.code,{children:"AES_128_ECB"})," to do encryption. So it's not recommended to use it."]}),(0,i.jsx)(n.p,{children:"Since 2.1.7, it works as expected."})]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"AES_ENCRYPT( <str>, <key_str>[, <init_vector>][, <encryption_mode>])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"parameter"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<str>"})}),(0,i.jsx)(n.td,{children:"The text to be encrypted"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<key_str>"})}),(0,i.jsxs)(n.td,{children:["is the key. Note that this key is not a hexadecimal encoding, but an encoded string representation. For example, for 128-bit key encryption, the length of ",(0,i.jsx)(n.code,{children:"key_str"})," should be 16. If the key length is insufficient, use ",(0,i.jsx)(n.strong,{children:"zero padding"})," to make it complete. If the length exceeds, use circular XOR to find the final key. For example, if the 128-bit key used by the algorithm is ",(0,i.jsx)(n.code,{children:"key"}),", then ",(0,i.jsx)(n.code,{children:"key[i] = key_str[i] ^ key_str[i+128] ^ key_str[i+256] ^ ..."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<init_vector>"})}),(0,i.jsx)(n.td,{children:"It is the initial vector used in the algorithm. It is only effective under specific algorithms. If not specified, Doris uses the built-in vector"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<encryption_mode>"})}),(0,i.jsx)(n.td,{children:"For encryption algorithms, optional values \u200B\u200Bare given in variables"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"Returns the encrypted binary data"}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Using AES_128_ECB algorithm"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"set block_encryption_mode='';\nselect to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '', 'AES_128_ECB')) |\n+----------------------------------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==                                 |\n+----------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Use AES_256_CBC algorithm"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"set block_encryption_mode=\"AES_256_CBC\";\nselect to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '', 'AES_256_CBC')) |\n+----------------------------------------------------------+\n| 3dym0E7/+1zbrLIaBVNHSw==                                 |\n+----------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Use AES_256_CBC algorithm and set initial vector"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '0123456789', 'AES_256_CBC')) |\n+--------------------------------------------------------------------+\n| tsmK1HzbpnEdR2//WhO+MA==                                           |\n+--------------------------------------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);