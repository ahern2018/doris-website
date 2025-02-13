"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["625505"],{826526:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>r,frontMatter:()=>c});var i=JSON.parse('{"id":"admin-manual/open-api/be-http/compaction-status","title":"\u67E5\u770B Compaction \u72B6\u6001","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/open-api/be-http/compaction-status.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/compaction-status","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/compaction-status","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u67E5\u770B Compaction \u72B6\u6001","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u91CD\u7F6E\u8FDE\u63A5\u7F13\u5B58","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/reset-rpc-channel"},"next":{"title":"\u89E6\u53D1 Compaction","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/be-http/compaction-run"}}'),s=t("785893"),a=t("250065");let c={title:"\u67E5\u770B Compaction \u72B6\u6001",language:"zh-CN"},l=void 0,o={},r=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u6574\u4F53 Compaction \u72B6\u6001",id:"\u6574\u4F53-compaction-\u72B6\u6001",level:3},{value:"\u6307\u5B9A tablet \u7684 Compaction \u72B6\u6001",id:"\u6307\u5B9A-tablet-\u7684-compaction-\u72B6\u6001",level:3},{value:"Examples",id:"examples",level:2}];function p(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GET /api/compaction/run_status"}),"\n",(0,s.jsx)(n.code,{children:"GET /api/compaction/show?tablet_id={int}"})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4E8E\u67E5\u770B\u67D0\u4E2A BE \u8282\u70B9\u603B\u4F53\u7684 compaction \u72B6\u6001\uFF0C\u6216\u8005\u6307\u5B9A tablet \u7684 compaction \u72B6\u6001\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"tablet_id"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"tablet \u7684 id"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.h3,{id:"\u6574\u4F53-compaction-\u72B6\u6001",children:"\u6574\u4F53 Compaction \u72B6\u6001"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "CumulativeCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  },\n  "BaseCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u7ED3\u6784\u8868\u793A\u67D0\u4E2A\u6570\u636E\u76EE\u5F55\u4E0B\uFF0C\u6B63\u5728\u6267\u884C compaction \u4EFB\u52A1\u7684 tablet \u7684 id\uFF0C\u4EE5\u53CA compaction \u7684\u7C7B\u578B\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6307\u5B9A-tablet-\u7684-compaction-\u72B6\u6001",children:"\u6307\u5B9A tablet \u7684 Compaction \u72B6\u6001"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "cumulative policy type": "SIZE_BASED",\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": ,\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING 574.00 MB",\n        "[49-49] 2 DATA OVERLAPPING 574.00 B",\n        "[50-50] 0 DELETE NONOVERLAPPING 574.00 B",\n        "[51-51] 5 DATA OVERLAPPING 574.00 B"\n    ],\n    "missing_rowsets": [],\n    "stale version path": [\n        {\n            "path id": "2",\n            "last create time": "2019-12-16 18:11:15.110 +0800",\n            "path list": "2-> [0-24] -> [25-48]"\n        }, \n        {\n            "path id": "1",\n            "last create time": "2019-12-16 18:13:15.110 +0800",\n            "path list": "1-> [25-40] -> [40-48]"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7ED3\u679C\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"cumulative policy type\uFF1A\u5F53\u524D tablet \u6240\u4F7F\u7528\u7684 cumulative compaction \u7B56\u7565\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"cumulative point\uFF1Abase \u548C cumulative compaction \u7684\u7248\u672C\u5206\u754C\u7EBF\u3002\u5728 point\uFF08\u4E0D\u542B\uFF09\u4E4B\u524D\u7684\u7248\u672C\u7531 base compaction \u5904\u7406\u3002point\uFF08\u542B\uFF09\u4E4B\u540E\u7684\u7248\u672C\u7531 cumulative compaction \u5904\u7406\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"last cumulative failure time\uFF1A\u4E0A\u4E00\u6B21\u5C1D\u8BD5 cumulative compaction \u5931\u8D25\u7684\u65F6\u95F4\u3002\u9ED8\u8BA4 10min \u540E\u624D\u4F1A\u518D\u6B21\u5C1D\u8BD5\u5BF9\u8BE5 tablet \u505A cumulative compaction\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"last base failure time\uFF1A\u4E0A\u4E00\u6B21\u5C1D\u8BD5 base compaction \u5931\u8D25\u7684\u65F6\u95F4\u3002\u9ED8\u8BA4 10min \u540E\u624D\u4F1A\u518D\u6B21\u5C1D\u8BD5\u5BF9\u8BE5 tablet \u505A base compaction\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["rowsets\uFF1A\u8BE5 tablet \u5F53\u524D\u7684 rowset \u96C6\u5408\u3002\u5982 [0-48] \u8868\u793A 0-48 \u7248\u672C\u3002\u7B2C\u4E8C\u4F4D\u6570\u5B57\u8868\u793A\u8BE5\u7248\u672C\u4E2D segment \u7684\u6570\u91CF\u3002",(0,s.jsx)(n.code,{children:"DELETE"})," \u8868\u793A delete \u7248\u672C\u3002",(0,s.jsx)(n.code,{children:"DATA"})," \u8868\u793A\u6570\u636E\u7248\u672C\u3002",(0,s.jsx)(n.code,{children:"OVERLAPPING"})," \u548C ",(0,s.jsx)(n.code,{children:"NONOVERLAPPING"})," \u8868\u793A segment \u6570\u636E\u662F\u5426\u91CD\u53E0\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"missing_rowsets: \u7F3A\u5931\u7684\u7248\u672C\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"stale version path\uFF1A\u8BE5 table \u5F53\u524D\u88AB\u5408\u5E76 rowset \u96C6\u5408\u7684\u5408\u5E76\u7248\u672C\u8DEF\u5F84\uFF0C\u8BE5\u7ED3\u6784\u662F\u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\uFF0C\u6BCF\u4E2A\u5143\u7D20\u8868\u793A\u4E00\u4E2A\u5408\u5E76\u8DEF\u5F84\u3002\u6BCF\u4E2A\u5143\u7D20\u4E2D\u5305\u542B\u4E86\u4E09\u4E2A\u5C5E\u6027\uFF1Apath id \u8868\u793A\u7248\u672C\u8DEF\u5F84 id\uFF0Clast create time \u8868\u793A\u5F53\u524D\u8DEF\u5F84\u4E0A\u6700\u8FD1\u7684 rowset \u521B\u5EFA\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u5728\u8FD9\u4E2A\u65F6\u95F4\u534A\u4E2A\u5C0F\u65F6\u4E4B\u540E\u8FD9\u6761\u8DEF\u5F84\u4E0A\u7684\u6240\u6709 rowset \u4F1A\u88AB\u8FC7\u671F\u5220\u9664\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var i=t(667294);let s={},a=i.createContext(s);function c(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);