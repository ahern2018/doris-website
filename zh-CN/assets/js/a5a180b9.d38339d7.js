"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["422929"],{634622:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>o,assets:()=>a,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND","title":"MODIFY BACKEND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MODIFY BACKEND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP BACKEND","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/DROP-BACKEND"},"next":{"title":"SHOW BACKENDS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS"}}'),l=s("785893"),r=s("250065");let d={title:"MODIFY BACKEND",language:"zh-CN"},i=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4FEE\u6539 BE \u8282\u70B9\u5C5E\u6027\uFF0C\u4FEE\u6539 BE \u8282\u70B9\u5C5E\u6027\u540E\uFF0C\u4F1A\u5F71\u54CD\u5230\u5F53\u524D\u7684\u8282\u70B9\u7684\u67E5\u8BE2\u3001\u5199\u5165\u548C\u6570\u636E\u5206\u5E03\u3002\u4EE5\u4E0B\u662F\u652F\u6301\u4FEE\u6539\u7684\u5C5E\u6027\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5C5E\u6027"}),(0,l.jsx)(n.th,{children:"\u5F71\u54CD"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"tag.location"})}),(0,l.jsxs)(n.td,{children:["BE \u7684\u6807\u7B7E\u540D\uFF0C\u9ED8\u8BA4\u503C\u4E3A",(0,l.jsx)(n.code,{children:"default"}),"\u3002\u4FEE\u6539\u540E\uFF0C\u4F1A\u5F71\u54CD\u5230\u540C\u4E00\u6807\u7B7E\u7EC4\u5185\u7684 BE \u6570\u636E\u5747\u8861\uFF0C\u4EE5\u53CA\u5728\u5EFA\u8868\u65F6\uFF0C\u6570\u636E\u5206\u5E03\u7684 BE \u8282\u70B9\u3002\u66F4\u591A\u4FE1\u606F\u53EF\u53C2\u8003",(0,l.jsx)(n.a,{href:"/zh-CN/docs/dev/admin-manual/workload-management/resource-group",children:"Resource Group"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"disable_query"})}),(0,l.jsxs)(n.td,{children:["\u662F\u5426\u7981\u7528\u67E5\u8BE2\uFF0C\u9ED8\u8BA4\u4E3A",(0,l.jsx)(n.code,{children:"false"}),"\u3002\u8BBE\u7F6E\u4E3A",(0,l.jsx)(n.code,{children:"true"}),"\u540E\uFF0C\u5C06\u4E0D\u4F1A\u518D\u6709\u65B0\u7684\u67E5\u8BE2\u8BF7\u6C42\u89C4\u5212\u5230\u8FD9\u53F0 BE \u8282\u70B9\u4E0A\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"disable_load"})}),(0,l.jsxs)(n.td,{children:["\u662F\u5426\u7981\u7528\u5BFC\u5165\uFF0C\u9ED8\u8BA4\u4E3A",(0,l.jsx)(n.code,{children:"false"}),"\u3002\u8BBE\u7F6E\u4E3A",(0,l.jsx)(n.code,{children:"true"}),"\u540E\uFF0C\u5C06\u4E0D\u4F1A\u518D\u6709\u65B0\u7684\u5BFC\u5165\u8BF7\u6C42\u89C4\u5212\u5230\u8FD9\u53F0 BE \u8282\u70B9\u4E0A\u3002"]})]})]})]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u6682\u4E0D\u652F\u6301\u6B64\u547D\u4EE4\u3002"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND <be_identifier> [, <be_identifier> [...] ]\nSET (\n     "<key>" = "<value>"\n)\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'be_identifier\n  : "<be_host>:<be_heartbeat_port>"\n  | "<backend_id>"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"1. <be_host>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u53EF\u4EE5\u662F BE \u8282\u70B9\u7684\u4E3B\u673A\u540D\u6216 IP \u5730\u5740"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"2. <heartbeat_port>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"BE \u8282\u70B9\u7684\u5FC3\u8DF3\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A 9050"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"3. <backend_id>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"BE \u8282\u70B9\u7684 ID"}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"<be_host>"}),"\u3001",(0,l.jsx)(n.code,{children:"<be_heartbeat_port>"}),"\u53CA",(0,l.jsx)(n.code,{children:"<backend_id>"}),"\u5747\u53EF\u901A\u8FC7",(0,l.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS",children:"SHOW BACKENDS"}),"\u8BED\u53E5\u67E5\u8BE2\u83B7\u5F97\u3002"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u6743\u9650"}),(0,l.jsx)(n.th,{children:"\u5BF9\u8C61"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"NODE_PRIV"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(n.p,{children:"\u7531\u4E8E\u6B64\u64CD\u4F5C\u662F\u9488\u5BF9\u6574\u4E2A BE \u7EA7\u522B\u7684\uFF0C\u5F71\u54CD\u9762\u8F83\u5E7F\uFF0C\u5982\u679C\u64CD\u4F5C\u4E0D\u614E\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u5230\u6574\u4E2A\u96C6\u7FA4\u7684\u6B63\u5E38\u67E5\u8BE2\u3001\u5BFC\u5165\u751A\u81F3\u662F\u5EFA\u8868\u64CD\u4F5C\u3002\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u4FEE\u6539 BE \u7684\u8D44\u6E90\u6807\u7B7E"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "127.0.0.1:9050" SET ("tag.location" = "group_a");\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u4FEE\u6539 BE \u7684\u67E5\u8BE2\u7981\u7528\u5C5E\u6027"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "10002" SET ("disable_query" = "true");\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"\u4FEE\u6539 BE \u7684\u5BFC\u5165\u7981\u7528\u5C5E\u6027"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "127.0.0.1:9050" SET ("disable_load" = "true");\n'})})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let l={},r=t.createContext(l);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);