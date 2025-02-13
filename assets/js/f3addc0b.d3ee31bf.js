"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["714661"],{956856:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD","title":"SET LDAP_ADMIN_PASSWORD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD","permalink":"/docs/3.0/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SET LDAP_ADMIN_PASSWORD","language":"en"},"sidebar":"docs","previous":{"title":"REFRESH LDAP","permalink":"/docs/3.0/sql-manual/sql-statements/account-management/REFRESH-LDAP"},"next":{"title":"SET PROPERTY","permalink":"/docs/3.0/sql-manual/sql-statements/account-management/SET-PROPERTY"}}'),r=t("785893"),l=t("250065");let a={title:"SET LDAP_ADMIN_PASSWORD",language:"en"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SET LDAP_ADMIN_PASSWORD"})," command is used to set the LDAP administrator password. When using LDAP authentication, doris needs to use the administrator account and password to query the LDAP service for login user information."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" SET LDAP_ADMIN_PASSWORD = PASSWORD('<plain_password>')\n"})}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"<plain_password>"})]})}),"\n",(0,r.jsx)(n.p,{children:"LDAP administrator password"}),"\n",(0,r.jsx)(n.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The user executing this SQL command must have at least the following permissions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"USER or ROLE"}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["This operation can only be performed by users or roles with ",(0,r.jsx)(n.code,{children:"ADMIN_PRIV"})," permissions"]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Set the LDAP administrator password\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET LDAP_ADMIN_PASSWORD = PASSWORD('123456')\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);