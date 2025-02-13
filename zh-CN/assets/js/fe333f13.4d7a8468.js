"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["655346"],{919615:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD","title":"SET LDAP_ADMIN_PASSWORD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SET LDAP_ADMIN_PASSWORD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REFRESH LDAP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/REFRESH-LDAP"},"next":{"title":"SET PROPERTY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/SET-PROPERTY"}}'),s=t("785893"),a=t("250065");let i={title:"SET LDAP_ADMIN_PASSWORD",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SET LDAP_ADMIN_PASSWORD"})," \u547D\u4EE4\u7528\u4E8E\u8BBE\u7F6E LDAP \u7BA1\u7406\u5458\u5BC6\u7801\u3002\u4F7F\u7528 LDAP \u8BA4\u8BC1\u65F6\uFF0Cdoris \u9700\u4F7F\u7528\u7BA1\u7406\u5458\u8D26\u6237\u548C\u5BC6\u7801\u6765\u5411 LDAP \u670D\u52A1\u67E5\u8BE2\u767B\u5F55\u7528\u6237\u7684\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:" SET LDAP_ADMIN_PASSWORD = PASSWORD('<plain_password>')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<plain_password>"})]})}),"\n",(0,s.jsx)(n.p,{children:"LDAP \u7BA1\u7406\u5458\u5BC6\u7801"}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 ADMIN_PRIV \u6743\u9650\u624D\u80FD\u8FDB\u884C\u6B64\u64CD\u4F5C"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8BBE\u7F6E LDAP \u7BA1\u7406\u5458\u5BC6\u7801\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET LDAP_ADMIN_PASSWORD = PASSWORD('123456')\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var l=t(667294);let s={},a=l.createContext(s);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);