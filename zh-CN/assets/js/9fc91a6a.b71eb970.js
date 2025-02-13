"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["882289"],{725447:function(n,s,e){e.r(s),e.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/string-functions/concat-ws","title":"CONCAT_WS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/string-functions/concat-ws.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/string-functions","slug":"/sql-manual/sql-functions/scalar-functions/string-functions/concat-ws","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/concat-ws","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CONCAT_WS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CONCAT","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/concat"},"next":{"title":"SUBSTRING","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/string-functions/substring"}}'),c=e("785893"),r=e("250065");let i={title:"CONCAT_WS",language:"zh-CN"},l=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(s.p,{children:"\u4F7F\u7528\u7B2C\u4E00\u4E2A\u53C2\u6570 sep \u4F5C\u4E3A\u8FDE\u63A5\u7B26\uFF0C\u5C06\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4EE5\u53CA\u540E\u7EED\u6240\u6709\u53C2\u6570(\u6216ARRAY\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u4E32)\u62FC\u63A5\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u5982\u679C\u5206\u9694\u7B26\u662F NULL\uFF0C\u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"CONCAT_WS"}),"\u51FD\u6570\u4E0D\u4F1A\u8DF3\u8FC7\u7A7A\u5B57\u7B26\u4E32\uFF0C\u4F1A\u8DF3\u8FC7 NULL \u503C\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"CONCAT_WS ( <sep> , <str> [ , <str> ] )\nCONCAT_WS ( <sep> , <array> )\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"\u53C2\u6570"}),(0,c.jsx)(s.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"<sep>"})}),(0,c.jsx)(s.td,{children:"\u62FC\u63A5\u5B57\u7B26\u4E32\u7684\u8FDE\u63A5\u7B26"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"<str>"})}),(0,c.jsx)(s.td,{children:"\u9700\u8981\u88AB\u62FC\u63A5\u7684\u5B57\u7B26\u4E32"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"<array>"})}),(0,c.jsx)(s.td,{children:"\u9700\u8981\u88AB\u62FC\u63A5\u7684 array \u6570\u7EC4"})]})]})]}),"\n",(0,c.jsx)(s.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsxs)(s.p,{children:["\u53C2\u6570 ",(0,c.jsx)(s.code,{children:"<sep>"})," \u6216\u8005 ",(0,c.jsx)(s.code,{children:"<array>"})," \u6570\u7EC4\u4F7F\u7528 ",(0,c.jsx)(s.code,{children:"<str>"})," \u62FC\u63A5\u540E\u5B57\u7B26\u4E32\u3002\u7279\u6B8A\u60C5\u51B5\uFF1A"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u5982\u679C\u5206\u9694\u7B26\u662F NULL\uFF0C\u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(s.p,{children:"\u5C06\u5B57\u7B26\u4E32\u901A\u8FC7 or \u62FC\u63A5\u5230\u4E00\u8D77"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:'SELECT CONCAT_WS("or", "d", "is"),CONCAT_WS(NULL, "d", "is"),CONCAT_WS(\'or\', \'d\', NULL, \'is\')\n'})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-text",children:"+----------------------------+----------------------------+------------------------------------------+\n| concat_ws('or', 'd', 'is') | concat_ws(NULL, 'd', 'is') | concat_ws('or', 'd', NULL, 'is') |\n+----------------------------+----------------------------+------------------------------------------+\n| doris                      | NULL                       | doris                              |\n+----------------------------+----------------------------+------------------------------------------+\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u5C06 array \u6570\u7EC4\u901A\u8FC7 or \u62FC\u63A5\u5230\u4E00\u8D77"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:'SELECT CONCAT_WS("or", ["d", "is"]),CONCAT_WS(NULL, ["d", "is"]),CONCAT_WS("or", ["d", NULL,"is"])\n'})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-text",children:"+------------------------------+------------------------------+------------------------------------+\n| concat_ws('or', ['d', 'is']) | concat_ws(NULL, ['d', 'is']) | concat_ws('or', ['d', NULL, 'is']) |\n+------------------------------+------------------------------+------------------------------------+\n| doris                        | NULL                         | doris                              |\n+------------------------------+------------------------------+------------------------------------+\n"})})]})}function u(n={}){let{wrapper:s}={...(0,r.a)(),...n.components};return s?(0,c.jsx)(s,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,s,e){e.d(s,{Z:function(){return l},a:function(){return i}});var t=e(667294);let c={},r=t.createContext(c);function i(n){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),t.createElement(r.Provider,{value:s},n.children)}}}]);