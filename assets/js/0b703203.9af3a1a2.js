"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["424666"],{945353:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-statements/account-management/REFRESH-LDAP","title":"REFRESH LDAP","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/account-management/REFRESH-LDAP.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/REFRESH-LDAP","permalink":"/docs/dev/sql-manual/sql-statements/account-management/REFRESH-LDAP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"REFRESH LDAP","language":"en"},"sidebar":"docs","previous":{"title":"SHOW GRANTS","permalink":"/docs/dev/sql-manual/sql-statements/account-management/SHOW-GRANTS"},"next":{"title":"SET LDAP_ADMIN_PASSWORD","permalink":"/docs/dev/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD"}}'),r=s("785893"),i=s("250065");let l={title:"REFRESH LDAP",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function h(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to refresh the cache information of LDAP in Doris. When modifying user information in the LDAP service or modifying the role permissions corresponding to LDAP user groups in Doris, the changes may not take effect immediately due to caching, and the cache can be refreshed through this statement."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"REFRESH LDAP [ALL | FOR <user_name>];\n"})}),"\n",(0,r.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"[ALL]"})]})}),"\n",(0,r.jsx)(n.p,{children:"Whether to refresh the LDAP cache information of all users."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"<user_name>"})]})}),"\n",(0,r.jsx)(n.p,{children:"The user whose LDAP cache information needs to be refreshed"}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"User or Role"}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Only users or roles with the ",(0,r.jsx)(n.code,{children:"ADMIN_PRIV"})," permission can refresh the LDAP cache information of all users. Otherwise, they can only refresh the LDAP cache information of the current user"]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The default timeout for LDAP information cache in Doris is 12 hours, which can be viewed by ",(0,r.jsx)(n.code,{children:"SHOW FRONTEND CONFIG LIKE 'ldap_user_cache_timeout_s';"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"REFRESH LDAP ALL"})," refreshes the LDAP cache information of all users, but requires the ",(0,r.jsx)(n.code,{children:"ADMIN_PRIV"})," permission."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"user_name"})," is specified, the LDAP cache information of the specified user will be refreshed."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"user_name"})," is not specified, the LDAP cache information of the current user will be refreshed."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Refresh the cache information of all LDAP users."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"REFRESH LDAP ALL;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Refresh the cache information of the current LDAP user."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"REFRESH LDAP;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Refresh the cache information of the specified LDAP user jack."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"REFRESH LDAP FOR jack;\n"})}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);