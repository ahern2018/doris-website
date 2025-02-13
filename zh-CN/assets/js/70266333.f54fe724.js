"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["403591"],{584964:function(e,n,r){r.r(n),r.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS","title":"SHOW-WORKLOAD-GROUPS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-WORKLOAD-GROUPS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-RESOURCES","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES"},"next":{"title":"SHOW-PARTITIONS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS"}}'),s=r("785893"),t=r("250065");let a={title:"SHOW-WORKLOAD-GROUPS",language:"zh-CN"},o=void 0,i={},c=[{value:"SHOW-WORKLOAD-GROUPS",id:"show-workload-groups",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"show-workload-groups",children:"SHOW-WORKLOAD-GROUPS"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"SHOW WORKLOAD GROUPS"}),"\n",(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u5F53\u524D\u7528\u6237\u5177\u6709usage_priv\u6743\u9650\u7684\u8D44\u6E90\u7EC4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW WORKLOAD GROUPS;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u4EC5\u505A\u8D44\u6E90\u7EC4\u7B80\u5355\u5C55\u793A\uFF0C\u66F4\u590D\u6742\u7684\u5C55\u793A\u53EF\u53C2\u8003 tvf workload_groups()."}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5C55\u793A\u6240\u6709\u8D44\u6E90\u7EC4\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> show workload groups;\n+----------+--------+--------------------------+---------+\n| Id       | Name   | Item                     | Value   |\n+----------+--------+--------------------------+---------+\n| 10343386 | normal | cpu_share                | 10      |\n| 10343386 | normal | memory_limit             | 30%     |\n| 10343386 | normal | enable_memory_overcommit | true    |\n| 10352416 | g1     | memory_limit             | 20%     |\n| 10352416 | g1     | cpu_share                | 10      |\n+----------+--------+--------------------------+---------+\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW, WORKLOAD, GROUPS, GROUP\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var l=r(667294);let s={},t=l.createContext(s);function a(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);