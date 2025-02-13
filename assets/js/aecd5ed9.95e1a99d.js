"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["460935"],{197819:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SHOW-GRANTS","title":"SHOW GRANTS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/account-management/SHOW-GRANTS.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SHOW-GRANTS","permalink":"/docs/sql-manual/sql-statements/account-management/SHOW-GRANTS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW GRANTS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW PRIVILEGES","permalink":"/docs/sql-manual/sql-statements/account-management/SHOW-PRIVILEGES"},"next":{"title":"REFRESH LDAP","permalink":"/docs/sql-manual/sql-statements/account-management/REFRESH-LDAP"}}'),i=s("785893"),t=s("250065");let l={title:"SHOW GRANTS",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to view user permissions."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW [ALL] GRANTS [FOR <user_identity>];\n"})}),"\n",(0,i.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"[ALL]"})]})}),"\n",(0,i.jsx)(n.p,{children:"Whether to view the permissions of all users."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"<user_identity>"})]})}),"\n",(0,i.jsxs)(n.p,{children:["Specify the user whose permissions are to be viewed. The ",(0,i.jsx)(n.code,{children:"user_identity"})," must be created by the ",(0,i.jsx)(n.code,{children:"CREATE USER"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Column"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UserIdentity"}),(0,i.jsx)(n.td,{children:"User identity"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Comment"}),(0,i.jsx)(n.td,{children:"Comment"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Password"}),(0,i.jsx)(n.td,{children:"Whether the password is set"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Roles"}),(0,i.jsx)(n.td,{children:"Roles"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GlobalPrivs"}),(0,i.jsx)(n.td,{children:"Global privileges"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CatalogPrivs"}),(0,i.jsx)(n.td,{children:"Catalog privileges"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DatabasePrivs"}),(0,i.jsx)(n.td,{children:"Database privileges"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TablePrivs"}),(0,i.jsx)(n.td,{children:"Table privileges"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ColPrivs"}),(0,i.jsx)(n.td,{children:"Column privileges"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ResourcePrivs"}),(0,i.jsx)(n.td,{children:"Resource privileges"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"WorkloadGroupPrivs"}),(0,i.jsx)(n.td,{children:"WorkloadGroup privileges"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(n.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"GRANT_PRIV"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"User or Role"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["User or Role has the ",(0,i.jsx)(n.code,{children:"GRANT_PRIV"})," privilege to view all user permissions, otherwise only the current user's permissions can be viewed"]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SHOW ALL GRANTS"})," can view all users' permissions, but requires the ",(0,i.jsx)(n.code,{children:"GRANT_PRIV"})," permission."]}),"\n",(0,i.jsxs)(n.li,{children:["If the ",(0,i.jsx)(n.code,{children:"user_identity"})," is specified, the permissions of the specified user are viewed. And the ",(0,i.jsx)(n.code,{children:"user_identity"})," must be created by the ",(0,i.jsx)(n.code,{children:"CREATE USER"})," command."]}),"\n",(0,i.jsxs)(n.li,{children:["If the ",(0,i.jsx)(n.code,{children:"user_identity"})," is not specified, the permissions of the current user are viewed."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View all user permission information."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW ALL GRANTS;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| UserIdentity | Comment | Password | Roles    | GlobalPrivs          | CatalogPrivs | DatabasePrivs                                                         | TablePrivs | ColPrivs | ResourcePrivs | WorkloadGroupPrivs |\n+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| 'root'@'%'   | ROOT    | No       | operator | Node_priv,Admin_priv | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n| 'admin'@'%'  | ADMIN   | No       | admin    | Admin_priv           | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n| 'jack'@'%'   |         | No       |          | NULL                 | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View the permissions of the specified user"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW GRANTS FOR jack@'%';\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------+---------+----------+-------+-------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| UserIdentity | Comment | Password | Roles | GlobalPrivs | CatalogPrivs | DatabasePrivs                                                         | TablePrivs | ColPrivs | ResourcePrivs | WorkloadGroupPrivs |\n+--------------+---------+----------+-------+-------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| 'jack'@'%'   |         | No       |       | NULL        | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n+--------------+---------+----------+-------+-------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View the permissions of the current user"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW GRANTS;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| UserIdentity | Comment | Password | Roles    | GlobalPrivs          | CatalogPrivs | DatabasePrivs                                                         | TablePrivs | ColPrivs | ResourcePrivs | WorkloadGroupPrivs |\n+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n| 'root'@'%'   | ROOT    | No       | operator | Node_priv,Admin_priv | NULL         | internal.information_schema: Select_priv; internal.mysql: Select_priv | NULL       | NULL     | NULL          | normal: Usage_priv |\n+--------------+---------+----------+----------+----------------------+--------------+-----------------------------------------------------------------------+------------+----------+---------------+--------------------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var r=s(667294);let i={},t=r.createContext(i);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);