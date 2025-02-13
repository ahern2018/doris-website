"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["841141"],{429750:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/variance","title":"VARIANCE,VAR_POP,VARIANCE_POP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/variance.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/variance","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/variance","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"VARIANCE,VAR_POP,VARIANCE_POP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STDDEV_SAMP","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev-samp"},"next":{"title":"VAR_SAMP,VARIANCE_SAMP","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/var-samp"}}'),l=t("785893"),r=t("250065");let i={title:"VARIANCE,VAR_POP,VARIANCE_POP",language:"zh-CN"},a=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"VARIANCE \u51FD\u6570\u8BA1\u7B97\u6307\u5B9A\u8868\u8FBE\u5F0F\u7684\u7EDF\u8BA1\u65B9\u5DEE\u3002\u5B83\u8861\u91CF\u4E86\u6570\u636E\u503C\u4E0E\u5176\u7B97\u672F\u5E73\u5747\u503C\u4E4B\u95F4\u7684\u5DEE\u5F02\u7A0B\u5EA6\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"VAR_POP"}),"\n",(0,l.jsx)(e.li,{children:"VARIANCE_POP"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"VARIANCE(<expr>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<expr>"})}),(0,l.jsx)(e.td,{children:"\u8981\u8BA1\u7B97\u65B9\u5DEE\u7684\u5217\u6216\u8868\u8FBE\u5F0F"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A DOUBLE \u7C7B\u578B\u7684\u503C\uFF0C\u8868\u793A\u8BA1\u7B97\u5F97\u5230\u7684\u65B9\u5DEE\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'-- \u521B\u5EFA\u793A\u4F8B\u8868\nCREATE TABLE student_scores (\n    student_id INT,\n    score DECIMAL(4,1)\n) DISTRIBUTED BY HASH(student_id)\nPROPERTIES (\n    "replication_num" = "1"\n);\n\n-- \u63D2\u5165\u6D4B\u8BD5\u6570\u636E\nINSERT INTO student_scores VALUES\n(1, 85.5),\n(2, 92.0),\n(3, 78.5),\n(4, 88.0),\n(5, 95.5),\n(6, 82.0),\n(7, 90.0),\n(8, 87.5);\n-- \u8BA1\u7B97\u5B66\u751F\u6210\u7EE9\u7684\u65B9\u5DEE\nSELECT VARIANCE(score) as score_variance\nFROM student_scores;\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------+\n| score_variance    |\n+-------------------+\n| 25.73437499999998 |\n+-------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);