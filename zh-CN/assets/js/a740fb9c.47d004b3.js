"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["831538"],{565613:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>h,assets:()=>i,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/catalog/SHOW-CREATE-CATALOG","title":"SHOW CREATE CATALOG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/catalog/SHOW-CREATE-CATALOG.md","sourceDirName":"sql-manual/sql-statements/catalog","slug":"/sql-manual/sql-statements/catalog/SHOW-CREATE-CATALOG","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/catalog/SHOW-CREATE-CATALOG","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW CREATE CATALOG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP CATALOG","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/catalog/DROP-CATALOG"},"next":{"title":"SHOW-CATALOGS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/catalog/SHOW-CATALOG"}}'),s=t("785893"),a=t("250065");let r={title:"SHOW CREATE CATALOG",language:"zh-CN"},c=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u67E5\u770B Doris \u6570\u636E\u76EE\u5F55\u7684\u521B\u5EFA\u8BED\u53E5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE CATALOG <catalog_name>;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. ",(0,s.jsx)(n.code,{children:"<catalog_name>"})]})}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u67E5\u770B\u521B\u5EFA\u8BED\u53E5\u7684 catalog \u7684\u540D\u5B57"}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ADMIN_PRIV / SELECT_PRIV / LOAD_PRIV / ALTER_PRIV / CREATE_PRIV / SHOW_VIEW_PRIV / DROP_PRIV"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Catalog"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u9700\u8981\u6709\u4E0A\u8FF0\u6743\u9650\u4E2D\u7684\u4E00\u79CD\u5C31\u53EF\u4EE5"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B Doris \u4E2D oracle \u6570\u636E\u76EE\u5F55\u7684\u521B\u5EFA\u8BED\u53E5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE CATALOG oracle;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'+---------+----------------------------------------------------------------------------------------------------------------------+\n | Catalog | CreateCatalog                                                                                                        |\n +---------+----------------------------------------------------------------------------------------------------------------------+\n | oracle  |\n CREATE CATALOG `oracle` PROPERTIES (\n "user" = "XXX",\n "type" = "jdbc",\n "password" = "*XXX",\n "jdbc_url" = "XXX",\n "driver_url" = "XXX",\n "driver_class" = "oracle.jdbc.driver.OracleDriver",\n "checksum" = "XXX"\n ); |\n +---------+----------------------------------------------------------------------------------------------------------------------+\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var l=t(667294);let s={},a=l.createContext(s);function r(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);