"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["60041"],{497869:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>x,assets:()=>d,toc:()=>a,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SHOW-PROPERTY","title":"SHOW PROPERTY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/account-management/SHOW-PROPERTY.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SHOW-PROPERTY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/SHOW-PROPERTY","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW PROPERTY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SET PROPERTY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/account-management/SET-PROPERTY"},"next":{"title":"USE COMPUTE GROUP","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/session/context/USE-COMPUTE-GROUP"}}'),t=s("785893"),r=s("250065");let i={title:"SHOW PROPERTY",language:"zh-CN"},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u770B\u7528\u6237\u7684\u5C5E\u6027"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW {ALL PROPERTIES | PROPERTY [FOR <user_name>]} [LIKE <key>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"[ALL PROPERTIES]"})]})}),"\n",(0,t.jsx)(n.p,{children:"\u662F\u5426\u67E5\u770B\u6240\u6709\u7528\u6237\u7684\u5C5E\u6027\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"<user_name>"})]})}),"\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B\u6307\u5B9A\u7528\u6237\u7684\u5C5E\u6027\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u68C0\u67E5\u5F53\u524D\u7528\u6237\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["3. ",(0,t.jsx)(n.code,{children:"<key>"})]})}),"\n",(0,t.jsx)(n.p,{children:"\u6A21\u7CCA\u5339\u914D\u53EF\u4EE5\u901A\u8FC7\u5C5E\u6027\u540D\u6765\u5B8C\u6210\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u82E5\u8BED\u53E5\u4E2D\u4F7F\u7528\u7684\u662F",(0,t.jsx)(n.code,{children:"PROPERTY"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5217\u540D"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key"}),(0,t.jsx)(n.td,{children:"\u5C5E\u6027\u540D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Value"}),(0,t.jsx)(n.td,{children:"\u5C5E\u6027\u503C"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u82E5\u8BED\u53E5\u4E2D\u4F7F\u7528\u7684\u662F",(0,t.jsx)(n.code,{children:"PROPERTIES"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5217\u540D"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"User"}),(0,t.jsx)(n.td,{children:"\u7528\u6237\u540D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Properties"}),(0,t.jsxs)(n.td,{children:["\u5BF9\u5E94\u7528\u6237\u5404\u4E2A ",(0,t.jsx)(n.code,{children:"property"})," \u7684 ",(0,t.jsx)(n.code,{children:"key:value"})]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"GRANT_PRIV"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u7528\u6237\uFF08User\uFF09\u6216 \u89D2\u8272\uFF08Role\uFF09"}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["\u7528\u6237\u6216\u8005\u89D2\u8272\u62E5\u6709 GRANT_PRIV \u6743\u9650\u624D\u80FD\u67E5\u770B\u6240\u6709\u7528\u6237\u5C5E\u6027\uFF0C",(0,t.jsx)(n.code,{children:"SHOW PROPERTY"}),"\u67E5\u770B\u5F53\u524D\u7528\u6237\u5C5E\u6027\u4E0D\u9700\u8981",(0,t.jsx)(n.code,{children:"GRANT_PRIV"}),"\u6743\u9650"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SHOW ALL PROPERTIES"})," \u53EF\u4EE5\u67E5\u770B\u6240\u6709\u7528\u6237\u7684\u5C5E\u6027\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679C\u6307\u5B9A ",(0,t.jsx)(n.code,{children:"user_name"}),"\uFF0C\u5219\u67E5\u770B\u8BE5\u6307\u5B9A\u7528\u6237\u7684\u5C5E\u6027\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679C\u4E0D\u6307\u5B9A ",(0,t.jsx)(n.code,{children:"user_name"}),"\uFF0C\u5219\u67E5\u770B\u5F53\u524D\u7528\u6237\u7684\u5C5E\u6027\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SHOW PROPERTY"}),"\u67E5\u770B\u5F53\u524D\u7528\u6237\u5C5E\u6027\u4E0D\u9700\u8981",(0,t.jsx)(n.code,{children:"GRANT_PRIV"}),"\u6743\u9650\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B jack \u7528\u6237\u7684\u5C5E\u6027"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW PROPERTY FOR 'jack';\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+-------------------------------------+--------+\n| Key                                 | Value  |\n+-------------------------------------+--------+\n| cpu_resource_limit                  | -1     |\n| default_load_cluster                |        |\n| default_workload_group              | normal |\n| exec_mem_limit                      | -1     |\n| insert_timeout                      | -1     |\n| max_query_instances                 | 3000   |\n| max_user_connections                | 1000   |\n| parallel_fragment_exec_instance_num | -1     |\n| query_timeout                       | -1     |\n| resource_tags                       |        |\n| sql_block_rules                     |        |\n+-------------------------------------+--------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B jack \u7528\u6237 limit \u76F8\u5173\u5C5E\u6027"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW PROPERTY FOR 'jack' LIKE '%limit%';\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+--------------------+-------+\n| Key                | Value |\n+--------------------+-------+\n| cpu_resource_limit | -1    |\n| exec_mem_limit     | -1    |\n+--------------------+-------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B\u6240\u6709\u7528\u6237 limit \u76F8\u5173\u5C5E\u6027"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ALL PROPERTIES LIKE '%limit%';\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'+-------+------------------------------------------------------------+\n| User  | Properties                                                 |\n+-------+------------------------------------------------------------+\n| root  | {\n  "cpu_resource_limit": "-1",\n  "exec_mem_limit": "-1"\n} |\n| admin | {\n  "cpu_resource_limit": "-1",\n  "exec_mem_limit": "-1"\n} |\n| jack  | {\n  "cpu_resource_limit": "-1",\n  "exec_mem_limit": "-1"\n} |\n+-------+------------------------------------------------------------+\n'})}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var l=s(667294);let t={},r=l.createContext(t);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);