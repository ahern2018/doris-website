"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["673359"],{27366:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>t,default:()=>o,assets:()=>d,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/account-management/GRANT-TO","title":"GRANT TO","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/account-management/GRANT-TO.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/GRANT-TO","permalink":"/zh-CN/docs/sql-manual/sql-statements/account-management/GRANT-TO","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"GRANT TO","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW ROLES","permalink":"/zh-CN/docs/sql-manual/sql-statements/account-management/SHOW-ROLES"},"next":{"title":"REVOKE FROM","permalink":"/zh-CN/docs/sql-manual/sql-statements/account-management/REVOKE-FROM"}}'),r=l("785893"),c=l("250065");let i={title:"GRANT TO",language:"zh-CN"},t=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"GRANT \u547D\u4EE4\u7528\u4E8E\uFF1A"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5C06\u6307\u5B9A\u7684\u6743\u9650\u6388\u4E88\u67D0\u7528\u6237\u6216\u89D2\u8272\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5C06\u6307\u5B9A\u89D2\u8272\u6388\u4E88\u67D0\u7528\u6237\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u76F8\u5173\u547D\u4EE4"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-statements/account-management/REVOKE-FROM",children:"REVOKE FROM"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-statements/account-management/SHOW-GRANTS",children:"SHOW GRANTS"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-statements/account-management/CREATE-ROLE",children:"CREATE ROLE"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-GROUP",children:"CREATE WORKLOAD GROUP"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE",children:"CREATE RESOURCE"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5C06\u6307\u5B9A\u7684\u6743\u9650\u6388\u4E88\u67D0\u7528\u6237\u6216\u89D2\u8272"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT <privilege_list> \nON { <priv_level> \n    | RESOURCE <resource_name> \n    | WORKLOAD GROUP <workload_group_name> \n   } \nTO { <user_identity> | ROLE <role_name> }\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5C06\u6307\u5B9A\u89D2\u8272\u6388\u4E88\u67D0\u7528\u6237"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT <role_list> TO <user_identity> \n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["1. ",(0,r.jsx)(e.code,{children:"<privilege_list>"})]})}),"\n",(0,r.jsx)(e.p,{children:"\u9700\u8981\u8D4B\u4E88\u7684\u6743\u9650\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\u3002\u5F53\u524D\u652F\u6301\u5982\u4E0B\u6743\u9650\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"NODE_PRIV\uFF1A\u96C6\u7FA4\u8282\u70B9\u64CD\u4F5C\u6743\u9650\uFF0C\u5305\u62EC\u8282\u70B9\u4E0A\u4E0B\u7EBF\u7B49\u64CD\u4F5C\u3002"}),"\n",(0,r.jsx)(e.li,{children:"ADMIN_PRIV\uFF1A\u9664 NODE_PRIV \u4EE5\u5916\u7684\u6240\u6709\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.li,{children:"GRANT_PRIV\uFF1A\u64CD\u4F5C\u6743\u9650\u7684\u6743\u9650\uFF0C\u5305\u62EC\u521B\u5EFA\u5220\u9664\u7528\u6237\u3001\u89D2\u8272\uFF0C\u6388\u6743\u548C\u64A4\u6743\uFF0C\u8BBE\u7F6E\u5BC6\u7801\u7B49\u3002"}),"\n",(0,r.jsx)(e.li,{children:"SELECT_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684\u8BFB\u53D6\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.li,{children:"LOAD_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684\u5BFC\u5165\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.li,{children:"ALTER_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684 schema \u53D8\u66F4\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.li,{children:"CREATE_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684\u521B\u5EFA\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.li,{children:"DROP_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684\u5220\u9664\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.li,{children:"USAGE_PRIV\uFF1A\u5BF9\u6307\u5B9A\u8D44\u6E90\u3001Workload Group\u3001Compute Group \u7684\u4F7F\u7528\u6743\u9650\u3002"}),"\n",(0,r.jsx)(e.li,{children:"SHOW_VIEW_PRIV\uFF1A\u67E5\u770B view \u521B\u5EFA\u8BED\u53E5\u7684\u6743\u9650\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u65E7\u7248\u6743\u9650\u8F6C\u6362\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"ALL \u548C READ_WRITE \u4F1A\u88AB\u8F6C\u6362\u6210\uFF1ASELECT_PRIV, LOAD_PRIV, ALTER_PRIV, CREATE_PRIV, DROP_PRIV\u3002"}),"\n",(0,r.jsx)(e.li,{children:"READ_ONLY \u4F1A\u88AB\u8F6C\u6362\u4E3A SELECT_PRIV\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["2. ",(0,r.jsx)(e.code,{children:"<priv_level>"})]})}),"\n",(0,r.jsx)(e.p,{children:"\u652F\u6301\u4EE5\u4E0B\u56DB\u79CD\u5F62\u5F0F\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"."}),".*\uFF1A\u6743\u9650\u53EF\u4EE5\u5E94\u7528\u4E8E\u6240\u6709 catalog \u53CA\u5176\u4E2D\u7684\u6240\u6709\u5E93\u8868\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["catalog_name.",(0,r.jsx)(e.em,{children:"."}),"\uFF1A\u6743\u9650\u53EF\u4EE5\u5E94\u7528\u4E8E\u6307\u5B9A catalog \u4E2D\u7684\u6240\u6709\u5E93\u8868\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"catalog_name.db.*\uFF1A\u6743\u9650\u53EF\u4EE5\u5E94\u7528\u4E8E\u6307\u5B9A\u5E93\u4E0B\u7684\u6240\u6709\u8868\u3002"}),"\n",(0,r.jsx)(e.li,{children:"catalog_name.db.tbl\uFF1A\u6743\u9650\u53EF\u4EE5\u5E94\u7528\u4E8E\u6307\u5B9A\u5E93\u4E0B\u7684\u6307\u5B9A\u8868\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["3. ",(0,r.jsx)(e.code,{children:"<resource_name>"})]})}),"\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A resource \u540D\uFF0C\u652F\u6301 % \u548C * \u5339\u914D\u6240\u6709\u8D44\u6E90\uFF0C\u4E0D\u652F\u6301\u901A\u914D\u7B26\uFF0C\u6BD4\u5982 res*\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["4. ",(0,r.jsx)(e.code,{children:"<workload_group_name>"})]})}),"\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A workload group \u540D\uFF0C\u652F\u6301 % \u548C * \u5339\u914D\u6240\u6709 workload group\uFF0C\u4E0D\u652F\u6301\u901A\u914D\u7B26\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["5. ",(0,r.jsx)(e.code,{children:"<user_identity>"})]})}),"\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A\u63A5\u6536\u6743\u9650\u7684\u7528\u6237\u3002\u5FC5\u987B\u4E3A\u4F7F\u7528 CREATE USER \u521B\u5EFA\u8FC7\u7684 user_identity\u3002user_identity \u4E2D\u7684 host \u53EF\u4EE5\u662F\u57DF\u540D\uFF0C\u5982\u679C\u662F\u57DF\u540D\u7684\u8BDD\uFF0C\u6743\u9650\u7684\u751F\u6548\u65F6\u95F4\u53EF\u80FD\u4F1A\u6709 1 \u5206\u949F\u5DE6\u53F3\u7684\u5EF6\u8FDF\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["6. ",(0,r.jsx)(e.code,{children:"<role_name>"})]})}),"\n",(0,r.jsx)(e.p,{children:"\u6307\u5B9A\u63A5\u6536\u6743\u9650\u7684\u89D2\u8272\u3002\u5982\u679C\u6307\u5B9A\u7684\u89D2\u8272\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u81EA\u52A8\u521B\u5EFA\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["7. ",(0,r.jsx)(e.code,{children:"<role_list>"})]})}),"\n",(0,r.jsx)(e.p,{children:"\u9700\u8981\u8D4B\u4E88\u7684\u89D2\u8272\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\uFF0C\u6307\u5B9A\u7684\u89D2\u8272\u5FC5\u987B\u5B58\u5728\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"GRANT_PRIV"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 GRANT_PRIV \u6743\u9650\u624D\u80FD\u8FDB\u884CGRANT\u64CD\u4F5C"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6388\u4E88\u6240\u6709 catalog \u548C\u5E93\u8868\u7684\u6743\u9650\u7ED9\u7528\u6237\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT SELECT_PRIV ON *.*.* TO 'jack'@'%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6388\u4E88\u6307\u5B9A\u5E93\u8868\u7684\u6743\u9650\u7ED9\u7528\u6237\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON ctl1.db1.tbl1  TO 'jack'@'192.8.%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6388\u4E88\u6307\u5B9A\u5E93\u8868\u7684\u6743\u9650\u7ED9\u89D2\u8272\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT LOAD_PRIV ON ctl1.db1.* TO ROLE 'my_role';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6388\u4E88\u6240\u6709 resource \u7684\u4F7F\u7528\u6743\u9650\u7ED9\u7528\u6237\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6388\u4E88\u6307\u5B9A resource \u7684\u4F7F\u7528\u6743\u9650\u7ED9\u7528\u6237\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6388\u4E88\u6307\u5B9A resource \u7684\u4F7F\u7528\u6743\u9650\u7ED9\u89D2\u8272\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5C06\u6307\u5B9A role \u6388\u4E88\u67D0\u7528\u6237\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT 'role1','role2' TO 'jack'@'%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5C06\u6307\u5B9A workload group \u6388\u4E88\u7528\u6237\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO 'jack'@'%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5339\u914D\u6240\u6709 workload group \u6388\u4E88\u7528\u6237\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT USAGE_PRIV ON WORKLOAD GROUP '%' TO 'jack'@'%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5C06\u6307\u5B9A workload group \u6388\u4E88\u89D2\u8272\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO ROLE 'my_role';\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5141\u8BB8\u7528\u6237\u67E5\u770B\u6307\u5B9A view \u7684\u521B\u5EFA\u8BED\u53E5\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"GRANT SHOW_VIEW_PRIV ON db1.view1 TO 'jack'@'%';\n"})}),"\n"]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return t},a:function(){return i}});var s=l(667294);let r={},c=s.createContext(r);function i(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);