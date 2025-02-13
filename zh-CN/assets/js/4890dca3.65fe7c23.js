"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["626427"],{282272:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/CANCEL-DECOMMISSION-BACKEND","title":"CANCEL DECOMMISSION BACKEND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/cluster-management/instance-management/CANCEL-DECOMMISSION-BACKEND.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/CANCEL-DECOMMISSION-BACKEND","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/CANCEL-DECOMMISSION-BACKEND","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CANCEL DECOMMISSION BACKEND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DECOMMISSION BACKEND","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/DECOMMISSION-BACKEND"},"next":{"title":"ADD BROKER","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER"}}'),l=t("785893"),a=t("250065");let i={title:"CANCEL DECOMMISSION BACKEND",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u64A4\u9500\u4E00\u4E2A BE \u8282\u70B9\u4E0B\u7EBF\u64CD\u4F5C\u3002"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u4E0B\u4E0D\u652F\u6301\u6B64\u547D\u4EE4"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CANCEL DECOMMISSION BACKEND "<be_identifier>" [, "<be_identifier>" ... ]\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'be_identifier\n  : "<be_host>:<be_heartbeat_port>"\n  | "<backend_id>"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"1. <be_host>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u53EF\u4EE5\u662F BE \u8282\u70B9\u7684\u4E3B\u673A\u540D\u6216 IP \u5730\u5740"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"2. <heartbeat_port>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"BE \u8282\u70B9\u7684\u5FC3\u8DF3\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A 9050"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"3. <backend_id>"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"BE \u8282\u70B9\u7684 ID"}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"<be_host>"}),"\u3001",(0,l.jsx)(n.code,{children:"<be_heartbeat_port>"}),"\u53CA",(0,l.jsx)(n.code,{children:"<backend_id>"}),"\u5747\u53EF\u901A\u8FC7",(0,l.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS",children:"SHOW BACKENDS"}),"\u8BED\u53E5\u67E5\u8BE2\u83B7\u5F97\u3002"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u6743\u9650"}),(0,l.jsx)(n.th,{children:"\u5BF9\u8C61"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"NODE_PRIV"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6267\u884C\u6B64\u547D\u4EE4\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7",(0,l.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS",children:"SHOW BACKENDS"}),"\u8BED\u53E5\u67E5\u770B\u4E0B\u7EBF\u72B6\u6001\uFF08",(0,l.jsx)(n.code,{children:"SystemDecommissioned"}),"\u5217\u7684\u503C\u4E3A",(0,l.jsx)(n.code,{children:"false"}),"\uFF09\u548C\u4E0B\u7EBF\u8FDB\u5EA6\uFF08",(0,l.jsx)(n.code,{children:"TabletNum"}),"\u5217\u7684\u503C\u4E0D\u518D\u7F13\u6162\u4E0B\u964D\uFF09"]}),"\n",(0,l.jsx)(n.li,{children:"\u96C6\u7FA4\u4F1A\u91CD\u65B0\u6162\u6162\u7684\u628A\u5176\u4ED6\u8282\u70B9\u7684 tablet \u8FC1\u79FB\u56DE\u5F53\u524D BE\uFF0C\u4F7F\u5F97\u6700\u7EC8\u6BCF\u53F0 BE \u7684 tablet \u6570\u91CF\u8D8B\u4E8E\u76F8\u8FD1"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6839\u636E BE \u7684 Host \u548C HeartbeatPort \u4ECE\u96C6\u7FA4\u4E2D\u5B89\u5168\u4E0B\u7EBF\u4E24\u4E2A\u8282\u70B9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CANCEL DECOMMISSION BACKEND "192.168.0.1:9050", "192.168.0.2:9050";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6839\u636E BE \u7684 ID \u4ECE\u96C6\u7FA4\u4E2D\u5B89\u5168\u4E0B\u7EBF\u4E00\u4E2A\u8282\u70B9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CANCEL DECOMMISSION BACKEND "10002";\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);