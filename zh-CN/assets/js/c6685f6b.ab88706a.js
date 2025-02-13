"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["429963"],{619603:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/job/CANCEL-TASK","title":"CANCEL TASK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/job/CANCEL-TASK.md","sourceDirName":"sql-manual/sql-statements/job","slug":"/sql-manual/sql-statements/job/CANCEL-TASK","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/job/CANCEL-TASK","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CANCEL TASK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"RESUME JOB","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/job/RESUME-JOB"},"next":{"title":"INSTALL PLUGIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/plugin/INSTALL-PLUGIN"}}'),t=s("785893"),a=s("250065");let i={title:"CANCEL TASK",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(n.p,{children:["\u53D6\u6D88\u901A\u8FC7 ",(0,t.jsx)(n.a,{href:"../../../sql-manual/sql-statements/job/CREATE-JOB",children:"CREATE JOB"})," \u8BED\u53E5\u521B\u5EFA\u751F\u6210\u7684\u6B63\u5728\u8FD0\u884C\u4E2D\u4EFB\u52A1"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4EFB\u52A1\u5FC5\u987B\u662F\u901A\u8FC7 CREATE JOB \u8BED\u53E5\u521B\u5EFA\u751F\u6210\u7684\u4EFB\u52A1"}),"\n",(0,t.jsx)(n.li,{children:"\u5FC5\u987B\u662F\u6B63\u5728\u8FD0\u884C\u4E2D\u7684\u4EFB\u52A1"}),"\n",(0,t.jsx)(n.li,{children:"\u8BE5\u51FD\u6570\u81EA 2.1.0 \u7248\u672C\u652F\u6301\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CANCEL TASK WHERE jobName = '<job_name>' AND taskId = '<task_id>';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<job_name>"}),":\u4F5C\u4E1A\u540D\u79F0\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<task_id>"}),": \u4EFB\u52A1 ID\uFF0C\u6574\u578B\u7C7B\u578B\u3002\u53EF\u901A\u8FC7 tasks \u8868\u503C\u51FD\u6570\u67E5\u8BE2\u3002\u5982\uFF1ASELECT * FROM tasks('type'='insert')\u3002\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u53C2\u9605\u201C",(0,t.jsx)(n.a,{href:"../../../sql-manual/sql-functions/table-valued-functions/tasks",children:"task \u8868\u503C\u51FD\u6570"}),"\u201D\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709 ADMIN_PRIV \u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(n.p,{children:"\u53D6\u6D88\u4E00\u4E2A jobName \u662F example\uFF0CtaskID \u662F 378912 \u7684\u540E\u53F0\u4EFB\u52A1\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CANCEL TASK WHERE jobName='example' AND taskId=378912\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var l=s(667294);let t={},a=l.createContext(t);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);