"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["270392"],{327577:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/DROP-STORAGE-POLICY","title":"DROP STORAGE POLICY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/cluster-management/storage-management/DROP-STORAGE-POLICY.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/DROP-STORAGE-POLICY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/DROP-STORAGE-POLICY","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DROP STORAGE POLICY","language":"zh-CN","toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"ALTER STORAGE POLICY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-POLICY"},"next":{"title":"SHOW STORAGE POLICY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY"}}'),s=t("785893"),a=t("250065");let r={title:"DROP STORAGE POLICY",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},i=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u5B58\u50A8\u7B56\u7565\u3002\u5B58\u50A8\u7B56\u7565\u7684\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u8BF7\u53C2\u9605\u201C\u5B58\u50A8\u7B56\u7565\u201D\u7AE0\u8282\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP STORAGE POLICY <policy_name>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"<policy_name>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5B58\u50A8\u7B56\u7565\u540D\u79F0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5168\u5C40"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5220\u9664\u540D\u5B57\u4E3A policy1 \u7684\u5B58\u50A8\u7B56\u7565"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP STORAGE POLICY policy1\n"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var l=t(667294);let s={},a=l.createContext(s);function r(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);