"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["301548"],{798979:function(n,e,i){i.r(e),i.d(e,{metadata:()=>l,contentTitle:()=>c,default:()=>o,assets:()=>a,toc:()=>t,frontMatter:()=>s});var l=JSON.parse('{"id":"data-operate/import/load-high-availability","title":"\u5BFC\u5165\u9AD8\u53EF\u7528\u6027","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/load-high-availability.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/load-high-availability","permalink":"/zh-CN/docs/dev/data-operate/import/load-high-availability","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5BFC\u5165\u9AD8\u53EF\u7528\u6027","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5BFC\u5165\u65F6\u5B9E\u73B0\u6570\u636E\u8F6C\u6362","permalink":"/zh-CN/docs/dev/data-operate/import/load-data-convert"},"next":{"title":"\u9AD8\u5E76\u53D1\u5BFC\u5165\u4F18\u5316\uFF08Group Commit\uFF09","permalink":"/zh-CN/docs/dev/data-operate/import/group-commit-manual"}}'),r=i("785893"),d=i("250065");let s={title:"\u5BFC\u5165\u9AD8\u53EF\u7528\u6027",language:"zh-CN"},c="\u5BFC\u5165\u9AD8\u53EF\u7528\u6027",a={},t=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u591A\u6570\u6D3E\u5199\u5165",id:"\u591A\u6570\u6D3E\u5199\u5165",level:2},{value:"\u5DE5\u4F5C\u539F\u7406",id:"\u5DE5\u4F5C\u539F\u7406",level:3},{value:"\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",id:"\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",level:2},{value:"\u529F\u80FD\u8BF4\u660E",id:"\u529F\u80FD\u8BF4\u660E",level:3},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:3},{value:"\u914D\u7F6E\u65B9\u6CD5",id:"\u914D\u7F6E\u65B9\u6CD5",level:3},{value:"1. \u5355\u8868\u914D\u7F6E",id:"1-\u5355\u8868\u914D\u7F6E",level:4},{value:"2. \u5168\u5C40\u914D\u7F6E",id:"2-\u5168\u5C40\u914D\u7F6E",level:4},{value:"\u5176\u4ED6\u9AD8\u53EF\u7528\u6027\u673A\u5236",id:"\u5176\u4ED6\u9AD8\u53EF\u7528\u6027\u673A\u5236",level:2}];function h(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u5BFC\u5165\u9AD8\u53EF\u7528\u6027",children:"\u5BFC\u5165\u9AD8\u53EF\u7528\u6027"})}),"\n",(0,r.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"Doris \u5728\u6570\u636E\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u63D0\u4F9B\u4E86\u591A\u79CD\u673A\u5236\u6765\u786E\u4FDD\u9AD8\u53EF\u7528\u6027\u3002\u672C\u6587\u5C06\u8BE6\u7EC6\u4ECB\u7ECD Doris \u7684\u9ED8\u8BA4\u5BFC\u5165\u884C\u4E3A\u4EE5\u53CA\u4E3A\u63D0\u9AD8\u5BFC\u5165\u53EF\u7528\u6027\u800C\u63D0\u4F9B\u7684\u989D\u5916\u9009\u9879\uFF0C\u7279\u522B\u662F\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\u529F\u80FD\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u591A\u6570\u6D3E\u5199\u5165",children:"\u591A\u6570\u6D3E\u5199\u5165"}),"\n",(0,r.jsx)(e.p,{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CDoris \u91C7\u7528\u591A\u6570\u6D3E\u5199\u5165\u7B56\u7565\u6765\u786E\u4FDD\u6570\u636E\u7684\u53EF\u9760\u6027\u548C\u4E00\u81F4\u6027\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5F53\u6210\u529F\u5199\u5165\u7684\u526F\u672C\u6570\u8D85\u8FC7\u603B\u526F\u672C\u6570\u7684\u4E00\u534A\u65F6\uFF0C\u5BFC\u5165\u88AB\u89C6\u4E3A\u6210\u529F\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u4E09\u526F\u672C\u7684\u8868\uFF0C\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u526F\u672C\u5199\u5165\u6210\u529F\u624D\u7B97\u5BFC\u5165\u6210\u529F\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u5DE5\u4F5C\u539F\u7406",children:"\u5DE5\u4F5C\u539F\u7406"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6570\u636E\u5206\u53D1\uFF1A\u5BFC\u5165\u4EFB\u52A1\u9996\u5148\u5C06\u6570\u636E\u5206\u53D1\u5230\u6240\u6709\u76F8\u5173\u7684 BE \u8282\u70B9\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5E76\u884C\u5199\u5165\uFF1A\u5404\u4E2A BE \u8282\u70B9\u5E76\u884C\u5904\u7406\u6570\u636E\u5199\u5165\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5199\u5165\u786E\u8BA4\uFF1A\u6BCF\u4E2A BE \u8282\u70B9\u5728\u5B8C\u6210\u6570\u636E\u5199\u5165\u540E\uFF0C\u4F1A\u5411 FE \u53D1\u9001\u786E\u8BA4\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u591A\u6570\u6D3E\u5224\u65AD\uFF1AFE \u7EDF\u8BA1\u6210\u529F\u5199\u5165\u7684\u526F\u672C\u6570\uFF0C\u5F53\u8FBE\u5230\u591A\u6570\u6D3E\u65F6\uFF0C\u8BA4\u4E3A\u5BFC\u5165\u6210\u529F\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4E8B\u52A1\u63D0\u4EA4\uFF1AFE \u63D0\u4EA4\u5BFC\u5165\u4E8B\u52A1\uFF0C\u4F7F\u6570\u636E\u5BF9\u5916\u53EF\u89C1\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5F02\u6B65\u590D\u5236\uFF1A\u5BF9\u4E8E\u672A\u6210\u529F\u5199\u5165\u7684\u526F\u672C\uFF0C\u7CFB\u7EDF\u4F1A\u5728\u540E\u53F0\u5F02\u6B65\u8FDB\u884C\u6570\u636E\u590D\u5236\uFF0C\u4EE5\u786E\u4FDD\u6700\u7EC8\u6240\u6709\u526F\u672C\u7684\u6570\u636E\u4E00\u81F4\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u591A\u6570\u6D3E\u5199\u5165\u7B56\u7565\u662F Doris \u5728\u6570\u636E\u53EF\u9760\u6027\u548C\u7CFB\u7EDF\u53EF\u7528\u6027\u4E4B\u95F4\u7684\u4E00\u4E2A\u5E73\u8861\u3002\u5BF9\u4E8E\u6709\u7279\u6B8A\u9700\u6C42\u7684\u573A\u666F\uFF0CDoris \u63D0\u4F9B\u4E86\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\u7B49\u5176\u4ED6\u9009\u9879\u6765\u8FDB\u4E00\u6B65\u63D0\u9AD8\u7CFB\u7EDF\u7684\u7075\u6D3B\u6027\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570",children:"\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570"}),"\n",(0,r.jsx)(e.p,{children:"\u591A\u6570\u6D3E\u5199\u5165\u7B56\u7565\u5728\u4FDD\u8BC1\u6570\u636E\u53EF\u9760\u6027\u7684\u540C\u65F6\uFF0C\u4E5F\u53EF\u80FD\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u5F71\u54CD\u7CFB\u7EDF\u7684\u53EF\u7528\u6027\u3002\u4F8B\u5982\uFF0C\u5728\u4E24\u526F\u672C\u7684\u60C5\u51B5\u4E0B\uFF0C\u5FC5\u987B\u4E24\u4E2A\u526F\u672C\u90FD\u5199\u5165\u6210\u529F\u624D\u80FD\u5B8C\u6210\u5BFC\u5165\uFF0C\u8FD9\u610F\u5473\u7740\u5728\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u4E0D\u5141\u8BB8\u4EFB\u4F55\u4E00\u4E2A\u526F\u672C\u4E0D\u53EF\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\u5E76\u63D0\u9AD8\u5BFC\u5165\u7684\u53EF\u7528\u6027\uFF0CDoris \u63D0\u4F9B\u4E86\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\uFF08Min Load Replica Num\uFF09\u9009\u9879\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u529F\u80FD\u8BF4\u660E",children:"\u529F\u80FD\u8BF4\u660E"}),"\n",(0,r.jsx)(e.p,{children:"\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\u5141\u8BB8\u7528\u6237\u6307\u5B9A\u5BFC\u5165\u6570\u636E\u65F6\u9700\u8981\u6210\u529F\u5199\u5165\u7684\u6700\u5C11\u526F\u672C\u6570\u3002\u5F53\u6210\u529F\u5199\u5165\u7684\u526F\u672C\u6570\u5927\u4E8E\u6216\u7B49\u4E8E\u8FD9\u4E2A\u503C\u65F6\uFF0C\u5BFC\u5165\u5373\u89C6\u4E3A\u6210\u529F\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u90E8\u5206\u8282\u70B9\u4E0D\u53EF\u7528\u65F6\uFF0C\u4ECD\u9700\u8981\u4FDD\u8BC1\u6570\u636E\u80FD\u591F\u6210\u529F\u5BFC\u5165\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5BF9\u6570\u636E\u5BFC\u5165\u901F\u5EA6\u6709\u8F83\u9AD8\u8981\u6C42\uFF0C\u613F\u610F\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u727A\u7272\u53EF\u9760\u6027\u6765\u6362\u53D6\u66F4\u9AD8\u7684\u53EF\u7528\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u914D\u7F6E\u65B9\u6CD5",children:"\u914D\u7F6E\u65B9\u6CD5"}),"\n",(0,r.jsx)(e.h4,{id:"1-\u5355\u8868\u914D\u7F6E",children:"1. \u5355\u8868\u914D\u7F6E"}),"\n",(0,r.jsx)(e.p,{children:"a. \u521B\u5EFA\u8868\u65F6\u8BBE\u7F6E\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE example_table\n(\nid INT,\nname STRING\n)\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nPROPERTIES\n(\n'replication_num' = '3',\n'min_load_replica_num' = '2'\n);\n"})}),"\n",(0,r.jsx)(e.p,{children:"b. \u4FEE\u6539\u73B0\u6709\u8868\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE example_table\nSET ( 'min_load_replica_num' = '2' );\n"})}),"\n",(0,r.jsx)(e.h4,{id:"2-\u5168\u5C40\u914D\u7F6E",children:"2. \u5168\u5C40\u914D\u7F6E"}),"\n",(0,r.jsxs)(e.p,{children:["\u901A\u8FC7 FE \u914D\u7F6E\u9879 ",(0,r.jsx)(e.code,{children:"min_load_replica_num"})," \u8BBE\u7F6E\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6709\u6548\u503C\uFF1A\u5927\u4E8E 0"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u9ED8\u8BA4\u503C\uFF1A-1\uFF08\u8868\u793A\u4E0D\u5F00\u542F\u5168\u5C40\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\uFF09"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4F18\u5148\u7EA7\uFF1A\u8868\u5C5E\u6027 > \u5168\u5C40\u914D\u7F6E > \u9ED8\u8BA4\u591A\u6570\u6D3E\u89C4\u5219"}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679C\u8868\u5C5E\u6027\u672A\u8BBE\u7F6E\u6216\u65E0\u6548\uFF0C\u4E14\u5168\u5C40\u914D\u7F6E\u6709\u6548\uFF0C\u5219\u8868\u7684\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\u4E3A\uFF1A\n",(0,r.jsx)(e.code,{children:"min(FE\u914D\u7F6E\u7684min_load_replica_num\uFF0C\u8868\u7684\u526F\u672C\u6570/2 + 1)"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5173\u4E8E FE \u914D\u7F6E\u9879\u7684\u67E5\u770B\u548C\u4FEE\u6539\uFF0C\u8BF7\u53C2\u8003",(0,r.jsx)(e.a,{href:"/zh-CN/docs/dev/admin-manual/config/fe-config",children:"FE \u914D\u7F6E\u9879\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5176\u4ED6\u9AD8\u53EF\u7528\u6027\u673A\u5236",children:"\u5176\u4ED6\u9AD8\u53EF\u7528\u6027\u673A\u5236"}),"\n",(0,r.jsx)(e.p,{children:"\u9664\u4E86\u6700\u5C0F\u5199\u5165\u526F\u672C\u6570\u9009\u9879\uFF0CDoris \u8FD8\u91C7\u7528\u4E86\u4EE5\u4E0B\u673A\u5236\u6765\u63D0\u9AD8\u5BFC\u5165\u7684\u53EF\u7528\u6027\uFF1A"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5BFC\u5165\u91CD\u8BD5\uFF1A\u81EA\u52A8\u91CD\u8BD5\u56E0\u4E34\u65F6\u6545\u969C\u5BFC\u81F4\u7684\u5931\u8D25\u5BFC\u5165\u4EFB\u52A1\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8D1F\u8F7D\u5747\u8861\uFF1A\u5C06\u5BFC\u5165\u4EFB\u52A1\u5206\u6563\u5230\u4E0D\u540C\u7684 BE \u8282\u70B9\uFF0C\u907F\u514D\u5355\u70B9\u538B\u529B\u8FC7\u5927\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4E8B\u52A1\u673A\u5236\uFF1A\u786E\u4FDD\u6570\u636E\u7684\u4E00\u81F4\u6027\uFF0C\u5931\u8D25\u65F6\u81EA\u52A8\u56DE\u6EDA\u3002"}),"\n"]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return s}});var l=i(667294);let r={},d=l.createContext(r);function s(n){let e=l.useContext(d);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);