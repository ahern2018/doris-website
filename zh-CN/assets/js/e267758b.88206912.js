"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["849570"],{407336:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SHOW-GRANTS","title":"SHOW GRANTS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/account-management/SHOW-GRANTS.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SHOW-GRANTS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/SHOW-GRANTS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW GRANTS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW PRIVILEGES","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/SHOW-PRIVILEGES"},"next":{"title":"REFRESH LDAP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/REFRESH-LDAP"}}'),r=s("785893"),t=s("250065");let i={title:"SHOW GRANTS",language:"zh-CN"},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u770B\u7528\u6237\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SHOW [ALL] GRANTS [FOR <user_identity>];\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["1. ",(0,r.jsx)(e.code,{children:"[ALL]"})]})}),"\n",(0,r.jsx)(e.p,{children:"\u662F\u5426\u67E5\u770B\u6240\u6709\u7528\u6237\u7684\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["2. ",(0,r.jsx)(e.code,{children:"<user_identity>"})]})}),"\n",(0,r.jsxs)(e.p,{children:["\u6307\u5B9A\u8981\u67E5\u770B\u6743\u9650\u7684\u7528\u6237\u3002\u5FC5\u987B\u4E3A\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"CREATE USER"})," \u547D\u4EE4\u521B\u5EFA\u7684 ",(0,r.jsx)(e.code,{children:"user_identity"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5217\u540D"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"UserIdentity"}),(0,r.jsx)(e.td,{children:"\u7528\u6237\u6807\u8BC6"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Comment"}),(0,r.jsx)(e.td,{children:"\u6CE8\u91CA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Password"}),(0,r.jsx)(e.td,{children:"\u662F\u5426\u8BBE\u7F6E\u5BC6\u7801"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Roles"}),(0,r.jsx)(e.td,{children:"\u62E5\u6709\u7684\u89D2\u8272"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GlobalPrivs"}),(0,r.jsx)(e.td,{children:"\u62E5\u6709\u7684\u5168\u5C40\u6743\u9650"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CatalogPrivs"}),(0,r.jsx)(e.td,{children:"\u62E5\u6709\u7684catalog\u6743\u9650"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DatabasePrivs"}),(0,r.jsx)(e.td,{children:"\u62E5\u6709\u7684\u6570\u636E\u5E93\u6743\u9650"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TablePrivs"}),(0,r.jsx)(e.td,{children:"\u62E5\u6709\u7684\u8868\u6743\u9650"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ColPrivs"}),(0,r.jsx)(e.td,{children:"\u62E5\u6709\u7684\u5217\u6743\u9650"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ResourcePrivs"}),(0,r.jsx)(e.td,{children:"\u62E5\u6709\u7684\u8D44\u6E90\u6743\u9650"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"WorkloadGroupPrivs"}),(0,r.jsx)(e.td,{children:"\u62E5\u6709\u7684WorkloadGroup\u6743\u9650"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"GRANT_PRIV"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 GRANT_PRIV \u6743\u9650\u624D\u80FD\u67E5\u770B\u6240\u6709\u7528\u6237\u6743\u9650\u64CD\u4F5C\uFF0C\u5426\u5219\u53EA\u80FD\u67E5\u770B\u5F53\u524D\u7528\u6237\u7684\u6743\u9650"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"SHOW ALL GRANTS"})," \u53EF\u4EE5\u67E5\u770B\u6240\u6709\u7528\u6237\u7684\u6743\u9650\uFF0C\u4F46\u9700\u8981\u6709 ",(0,r.jsx)(e.code,{children:"GRANT_PRIV"})," \u6743\u9650\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5982\u679C\u6307\u5B9A ",(0,r.jsx)(e.code,{children:"user_identity"}),"\uFF0C\u5219\u67E5\u770B\u8BE5\u6307\u5B9A\u7528\u6237\u7684\u6743\u9650\u3002\u4E14\u8BE5 ",(0,r.jsx)(e.code,{children:"user_identity"})," \u5FC5\u987B\u4E3A\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"CREATE USER"})," \u547D\u4EE4\u521B\u5EFA\u7684\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5982\u679C\u4E0D\u6307\u5B9A ",(0,r.jsx)(e.code,{children:"user_identity"}),"\uFF0C\u5219\u67E5\u770B\u5F53\u524D\u7528\u6237\u7684\u6743\u9650\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u67E5\u770B\u6240\u6709\u7528\u6237\u6743\u9650\u4FE1\u606F"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SHOW ALL GRANTS;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| UserIdentity | Comment | Password | Roles    | GlobalPrivs          | CatalogPrivs | DatabasePrivs                                                         | TablePrivs | ColPrivs | ResourcePrivs | WorkloadGroupPrivs |\n+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| 'root'@'%'   | ROOT    | No       | operator | Node_priv,Admin_priv | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n| 'admin'@'%'  | ADMIN   | No       | admin    | Admin_priv           | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n| 'jack'@'%'   |         | No       |          | NULL                 | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u67E5\u770B\u6307\u5B9A user \u7684\u6743\u9650"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SHOW GRANTS FOR jack@'%';\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------+---------+----------+-------+-------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| UserIdentity | Comment | Password | Roles | GlobalPrivs | CatalogPrivs | DatabasePrivs                                                         | TablePrivs | ColPrivs | ResourcePrivs | WorkloadGroupPrivs |\n+--------------+---------+----------+-------+-------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| 'jack'@'%'   |         | No       |       | NULL        | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n+--------------+---------+----------+-------+-------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u67E5\u770B\u5F53\u524D\u7528\u6237\u7684\u6743\u9650"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SHOW GRANTS;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| UserIdentity | Comment | Password | Roles    | GlobalPrivs          | CatalogPrivs | DatabasePrivs                                                         | TablePrivs | ColPrivs | ResourcePrivs | WorkloadGroupPrivs |\n+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| 'root'@'%'   | ROOT    | No       | operator | Node_priv,Admin_priv | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n"})}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return i}});var l=s(667294);let r={},t=l.createContext(r);function i(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);