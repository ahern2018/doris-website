"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["121210"],{582920:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>o,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/security/SHOW-FILE","title":"SHOW FILE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/security/SHOW-FILE.md","sourceDirName":"sql-manual/sql-statements/security","slug":"/sql-manual/sql-statements/security/SHOW-FILE","permalink":"/zh-CN/docs/sql-manual/sql-statements/security/SHOW-FILE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW FILE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP FILE","permalink":"/zh-CN/docs/sql-manual/sql-statements/security/DROP-FILE"},"next":{"title":"CREATE ENCRYPTKEY","permalink":"/zh-CN/docs/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY"}}'),l=t("785893"),d=t("250065");let i={title:"SHOW FILE",language:"zh-CN"},r=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u4E00\u4E2A database \u5185\u521B\u5EFA\u7684\u6587\u4EF6\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW FILE { [ FROM | IN ] <database_name>}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["1. ",(0,l.jsx)(n.code,{children:"<database_name>"})]})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6587\u4EF6\u5F52\u5C5E\u4E8E\u7684database\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u4F7F\u7528\u5F53\u524D session \u7684 database\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5217\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FileId"}),(0,l.jsx)(n.td,{children:"\u6587\u4EF6 ID\uFF0C\u5168\u5C40\u552F\u4E00"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"DbName"}),(0,l.jsx)(n.td,{children:"\u6240\u5C5E\u6570\u636E\u5E93\u540D\u79F0"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Catalog"}),(0,l.jsx)(n.td,{children:"\u81EA\u5B9A\u4E49\u5206\u7C7B"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FileName"}),(0,l.jsx)(n.td,{children:"\u6587\u4EF6\u540D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"FileSize"}),(0,l.jsx)(n.td,{children:"\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"IsContent"}),(0,l.jsx)(n.td,{children:"\u662F\u5426\u6709\u5185\u5BB9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MD5"}),(0,l.jsx)(n.td,{children:"\u6587\u4EF6\u7684 MD5"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"ADMIN_PRIV"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709\u6587\u4EF6\u6240\u5C5E\u6570\u636E\u5E93\u7684\u8BBF\u95EE\u6743\u9650\u5C31\u80FD\u6267\u884C\u6B64\u6307\u4EE4"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B session \u6570\u636E\u5E93\u4E2D\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW FILE;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------+--------+----------+--------------------------+----------+-----------+----------------------------------+\n| Id    | DbName | Catalog  | FileName                 | FileSize | IsContent | MD5                              |\n+-------+--------+----------+--------------------------+----------+-----------+----------------------------------+\n| 12006 | testdb | doris_be | doris_be_metadata_layout | 89349    | true      | 9a3f68160b4106b0e923a0aa2fc05599 |\n+-------+--------+----------+--------------------------+----------+-----------+----------------------------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B\u6570\u636E\u5E93 example_db \u4E2D\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW FILE FROM example_db;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+-------+------------+----------+--------------------------+----------+-----------+----------------------------------+\n| Id    | DbName     | Catalog  | FileName                 | FileSize | IsContent | MD5                              |\n+-------+------------+----------+--------------------------+----------+-----------+----------------------------------+\n| 12007 | example_db | doris_fe | doris_fe_metadata_layout | 569373   | true      | 10385505d3c0d03f085fea6f8d51adfa |\n| 12008 | example_db | doris_be | doris_be_metadata_layout | 89349    | true      | 9a3f68160b4106b0e923a0aa2fc05599 |\n+-------+------------+----------+--------------------------+----------+-----------+----------------------------------+\n"})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},d=s.createContext(l);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);