"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["344488"],{872627:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-EXPORT","title":"SHOW-EXPORT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-EXPORT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-EVENTS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-EVENTS"},"next":{"title":"SHOW-ENCRYPT-KEY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY"}}'),r=l("785893"),t=l("250065");let i={title:"SHOW-EXPORT",language:"zh-CN"},a=void 0,c={},d=[{value:"SHOW-EXPORT",id:"show-export",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"show-export",children:"SHOW-EXPORT"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"SHOW EXPORT"}),"\n",(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u6307\u5B9A\u7684\u5BFC\u51FA\u4EFB\u52A1\u7684\u6267\u884C\u60C5\u51B5"}),"\n",(0,r.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'SHOW EXPORT\n[FROM db_name]\n  [\n    WHERE\n      [ID = your_job_id]\n      [STATE = ["PENDING"|"EXPORTING"|"FINISHED"|"CANCELLED"]]\n      [LABEL = your_label]\n   ]\n[ORDER BY ...]\n[LIMIT limit];\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A\n1. \u5982\u679C\u4E0D\u6307\u5B9A db_name\uFF0C\u4F7F\u7528\u5F53\u524D\u9ED8\u8BA4db\n2. \u5982\u679C\u6307\u5B9A\u4E86 STATE\uFF0C\u5219\u5339\u914D EXPORT \u72B6\u6001\n3. \u53EF\u4EE5\u4F7F\u7528 ORDER BY \u5BF9\u4EFB\u610F\u5217\u7EC4\u5408\u8FDB\u884C\u6392\u5E8F\n4. \u5982\u679C\u6307\u5B9A\u4E86 LIMIT\uFF0C\u5219\u663E\u793A limit \u6761\u5339\u914D\u8BB0\u5F55\u3002\u5426\u5219\u5168\u90E8\u663E\u793A"}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5C55\u793A\u9ED8\u8BA4 db \u7684\u6240\u6709\u5BFC\u51FA\u4EFB\u52A1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW EXPORT;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u51FA\u4EFB\u52A1\uFF0C\u6309 StartTime \u964D\u5E8F\u6392\u5E8F"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" SHOW EXPORT FROM example_db ORDER BY StartTime DESC;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u51FA\u4EFB\u52A1\uFF0Cstate \u4E3A "exporting", \u5E76\u6309 StartTime \u964D\u5E8F\u6392\u5E8F'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'SHOW EXPORT FROM example_db WHERE STATE = "exporting" ORDER BY StartTime DESC;\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5C55\u793A\u6307\u5B9Adb\uFF0C\u6307\u5B9Ajob_id\u7684\u5BFC\u51FA\u4EFB\u52A1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"  SHOW EXPORT FROM example_db WHERE ID = job_id;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5C55\u793A\u6307\u5B9Adb\uFF0C\u6307\u5B9Alabel\u7684\u5BFC\u51FA\u4EFB\u52A1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:' SHOW EXPORT FROM example_db WHERE LABEL = "mylabel";\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SHOW, EXPORT\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return i}});var s=l(667294);let r={},t=s.createContext(r);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);