"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["133409"],{402816:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-all","title":"REGEXP_EXTRACT_ALL","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-all.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-all","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-all","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REGEXP_EXTRACT_ALL","language":"en"},"sidebar":"docs","previous":{"title":"REGEXP_EXTRACT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract"},"next":{"title":"REGEXP_EXTRACT_OR_NULL","permalink":"/docs/sql-manual/sql-functions/scalar-functions/string-functions/regexp-extract-or-null"}}'),s=t("785893"),a=t("250065");let l={title:"REGEXP_EXTRACT_ALL",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Regularly matches a string ",(0,s.jsx)(n.code,{children:"str"})," and extracts the first sub-pattern matching part of ",(0,s.jsx)(n.code,{children:"pattern"}),". The pattern needs to exactly match a part of ",(0,s.jsx)(n.code,{children:"str"})," in order to return an array of strings for the part of the pattern that needs to be matched. If there is no match or the pattern has no sub-pattern, the empty string is returned."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Character set matching requires the use of Unicode standard character classes. For example, to match Chinese, use ",(0,s.jsx)(n.code,{children:"\\p{Han}"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"REGEXP_EXTRACT_ALL(<str>, <pattern>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<str>"})}),(0,s.jsx)(n.td,{children:"The column need to do regular matching."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<pattern>"})}),(0,s.jsx)(n.td,{children:"Target pattern."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Value after extraction. It is ",(0,s.jsx)(n.code,{children:"Array"})," type."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)');\n+--------------------------------------------------------------+\n| regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)') |\n+--------------------------------------------------------------+\n| ['b']                                                        |\n+--------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)');\n+-----------------------------------------------------------------+\n| regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)') |\n+-----------------------------------------------------------------+\n| ['b','f']                                                       |\n+-----------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('abc=111, def=222, ghi=333','(\"[^\"]+\"|\\\\w+)=(\"[^\"]+\"|\\\\w+)');\n+--------------------------------------------------------------------------------+\n| regexp_extract_all('abc=111, def=222, ghi=333', '(\"[^\"]+\"|\\w+)=(\"[^\"]+\"|\\w+)') |\n+--------------------------------------------------------------------------------+\n| ['abc','def','ghi']                                                            |\n+--------------------------------------------------------------------------------+\n\nmysql> select regexp_extract_all('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '(\\\\p{Han}+)(.+)');\n+------------------------------------------------------------------------------------------------+\n| regexp_extract_all('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '(\\p{Han}+)(.+)')       |\n+------------------------------------------------------------------------------------------------+\n| ['\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587']                                                                               |\n+------------------------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(667294);let s={},a=r.createContext(s);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);