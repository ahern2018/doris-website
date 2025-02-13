"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["754204"],{868285:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>o,assets:()=>a,toc:()=>r,frontMatter:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/hudi-meta","title":"HUDI_META","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/table-valued-functions/hudi-meta.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/hudi-meta","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/hudi-meta","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"HUDI_META","language":"zh-CN"}}'),i=t("785893"),s=t("250065");let c={title:"HUDI_META",language:"zh-CN"},d=void 0,a={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u586B\u53C2\u6570",id:"\u5FC5\u586B\u53C2\u6570",level:2},{value:"\u793A\u4F8B\uFF08Examples\uFF09",id:"\u793A\u4F8Bexamples",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"hudi_meta \u8868\u51FD\u6570\uFF08table-valued-function,tvf\uFF09\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8BFB\u53D6 hudi \u8868\u7684\u5404\u7C7B\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5982\u64CD\u4F5C\u5386\u53F2\u3001\u8868\u7684\u65F6\u95F4\u7EBF\u3001\u6587\u4EF6\u5143\u6570\u636E\u7B49\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'HUDI_META(\n    "table" = "<table>", \n    "query_type" = "<query_type>"\n  );\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u5FC5\u586B\u53C2\u6570",children:"\u5FC5\u586B\u53C2\u6570"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"hudi_meta"})," \u8868\u51FD\u6570 tvf \u4E2D\u7684\u6BCF\u4E00\u4E2A\u53C2\u6570\u90FD\u662F\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:'"key"="value"'})," \u5BF9"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5B57\u6BB5"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<table>"})}),(0,i.jsx)(n.td,{children:"\u5B8C\u6574\u7684\u8868\u540D\uFF0C\u9700\u8981\u6309\u7167\u76EE\u5F55\u540D\u3002\u5E93\u540D\u3002\u8868\u540D\u7684\u683C\u5F0F\uFF0C\u586B\u5199\u9700\u8981\u67E5\u770B\u7684 Hudi \u8868\u540D\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<query_type>"})}),(0,i.jsxs)(n.td,{children:["\u60F3\u8981\u67E5\u770B\u7684\u5143\u6570\u636E\u7C7B\u578B\uFF0C\u76EE\u524D\u4EC5\u652F\u6301 ",(0,i.jsx)(n.code,{children:"timeline"}),"\u3002"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8Bexamples",children:"\u793A\u4F8B\uFF08Examples\uFF09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8BFB\u53D6\u5E76\u8BBF\u95EE hudi \u8868\u683C\u5F0F\u7684 timeline \u5143\u6570\u636E\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'select * from hudi_meta("table" = "ctl.db.tbl", "query_type" = "timeline");\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u914D\u5408",(0,i.jsx)(n.code,{children:"desc function"}),"\u4F7F\u7528"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'desc function hudi_meta("table" = "ctl.db.tbl", "query_type" = "timeline");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u67E5\u770B hudi \u8868\u7684 timeline"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'select * from hudi_meta("table" = "hudi_ctl.test_db.test_tbl", "query_type" = "timeline");\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-------------------+--------+--------------------------+-----------+-----------------------+\n| timestamp         | action | file_name                | state     | state_transition_time |\n+-------------------+--------+--------------------------+-----------+-----------------------+\n| 20240724195843565 | commit | 20240724195843565.commit | COMPLETED | 20240724195844269     |\n| 20240724195845718 | commit | 20240724195845718.commit | COMPLETED | 20240724195846653     |\n| 20240724195848377 | commit | 20240724195848377.commit | COMPLETED | 20240724195849337     |\n| 20240724195850799 | commit | 20240724195850799.commit | COMPLETED | 20240724195851676     |\n+-------------------+--------+--------------------------+-----------+-----------------------+\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6839\u636E timestamp \u5B57\u6BB5\u7B5B\u9009"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'select * from hudi_meta("table" = "hudi_ctl.test_db.test_tbl", "query_type" = "timeline") where timestamp = 20240724195843565;\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-------------------+--------+--------------------------+-----------+-----------------------+\n| timestamp         | action | file_name                | state     | state_transition_time |\n+-------------------+--------+--------------------------+-----------+-----------------------+\n| 20240724195843565 | commit | 20240724195843565.commit | COMPLETED | 20240724195844269     |\n+-------------------+--------+--------------------------+-----------+-----------------------+\n"})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var l=t(667294);let i={},s=l.createContext(i);function c(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);