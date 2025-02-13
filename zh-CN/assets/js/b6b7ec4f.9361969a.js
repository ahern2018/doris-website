"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["70499"],{682481:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>d,assets:()=>c,toc:()=>i,frontMatter:()=>a});var r=JSON.parse('{"id":"admin-manual/workload-management/resource-group","title":"Resource Group","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/workload-management/resource-group.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/resource-group","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/resource-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Resource Group","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8D1F\u8F7D\u7BA1\u7406\u6982\u8FF0","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/workload-management-summary"},"next":{"title":"Compute Group","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/compute-group"}}'),s=o("785893"),l=o("250065");let a={title:"Resource Group",language:"zh-CN"},t=void 0,c={},i=[{value:"\u5178\u578B\u4F7F\u7528\u573A\u666F",id:"\u5178\u578B\u4F7F\u7528\u573A\u666F",level:2},{value:"\u914D\u7F6E Resource Group",id:"\u914D\u7F6E-resource-group",level:2},{value:"\u4E3A BE \u8BBE\u7F6E\u6807\u7B7E",id:"\u4E3A-be-\u8BBE\u7F6E\u6807\u7B7E",level:3},{value:"\u6309\u7167\u8D44\u6E90\u7EC4\u5206\u914D\u6570\u636E\u5206\u5E03",id:"\u6309\u7167\u8D44\u6E90\u7EC4\u5206\u914D\u6570\u636E\u5206\u5E03",level:3},{value:"\u4E3A\u7528\u6237\u8BBE\u7F6E ResourceGroup",id:"\u4E3A\u7528\u6237\u8BBE\u7F6E-resourcegroup",level:2},{value:"\u5BFC\u5165\u4F5C\u4E1A\u7684\u8D44\u6E90\u7EC4\u5206\u914D",id:"\u5BFC\u5165\u4F5C\u4E1A\u7684\u8D44\u6E90\u7EC4\u5206\u914D",level:2}];function u(e){let n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Resource Group \u662F\u5B58\u7B97\u4E00\u4F53\u67B6\u6784\u4E0B\uFF0C\u5B9E\u73B0\u4E0D\u540C\u7684\u8D1F\u8F7D\u4E4B\u95F4\u7269\u7406\u9694\u79BB\u7684\u4E00\u79CD\u673A\u5236\uFF0C\u5B83\u7684\u57FA\u672C\u539F\u7406\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Resource Group",src:o(701845).Z+"",width:"918",height:"492"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u901A\u8FC7 Tag \u7684\u65B9\u5F0F\uFF0C\u628A BE \u5212\u5206\u4E3A\u4E0D\u540C\u7684\u7EC4\uFF0C\u6BCF\u4E2A\u7EC4\u901A\u8FC7 tag \u7684\u540D\u5B57\u6765\u6807\u8BC6\uFF0C\u6BD4\u5982\u4E0A\u56FE\u4E2D\u628A host1,host2,host3 \u90FD\u8BBE\u7F6E\u4E3A group a, \u628A host4,host5 \u90FD\u8BBE\u7F6E\u4E3A group b\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u5C06\u8868\u7684\u4E0D\u540C\u7684\u526F\u672C\u653E\u5230\u4E0D\u540C\u7684\u5206\u7EC4\u4E2D\uFF0C\u6BD4\u5982\u4E0A\u56FE\u4E2D table1 \u6709 3 \u4E2A\u526F\u672C\uFF0C\u90FD\u4F4D\u4E8E group a \u4E2D\uFF0Ctable2 \u6709 4 \u4E2A\u526F\u672C\uFF0C\u5176\u4E2D 2 \u4E2A\u4F4D\u4E8E group a \u4E2D\uFF0C2 \u4E2A\u526F\u672C\u4F4D\u4E8E group b \u4E2D\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u67E5\u8BE2\u65F6\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u7528\u6237\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684 Resource Group\uFF0C\u6BD4\u5982 online \u7528\u6237\uFF0C\u53EA\u80FD\u8BBF\u95EE host1,host2,host3 \u4E0A\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u4ED6\u53EF\u4EE5\u8BBF\u95EE table1 \u548C table2\uFF1B\u4F46\u662F offline \u7528\u6237\u53EA\u80FD\u8BBF\u95EE host4\uFF0Chost5\uFF0C\u6240\u4EE5\u53EA\u80FD\u8BBF\u95EE table2 \u7684\u6570\u636E\uFF0C\u7531\u4E8E table1 \u5728 group b \u4E0A\u6CA1\u6709\u5BF9\u5E94\u7684\u526F\u672C\uFF0C\u6240\u4EE5\u8BBF\u95EE\u4F1A\u51FA\u9519\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Resource Group \u672C\u8D28\u4E0A\u662F\u4E00\u79CD Table \u526F\u672C\u7684\u653E\u7F6E\u7B56\u7565\uFF0C\u6240\u4EE5\u5B83\u6709\u4EE5\u4E0B\u4F18\u52BF\u548C\u9650\u5236\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4E0D\u540C\u7684 Resource Group \u4F7F\u7528\u7684\u662F\u4E0D\u540C\u7684 BE\uFF0C\u6240\u4EE5\u5B83\u4EEC\u4E4B\u95F4\u5B8C\u5168\u65E0\u5E72\u6270\uFF0C\u5373\u4F7F\u4E00\u4E2A group \u5185\u7684\u67D0\u4E2A BE \u5B95\u673A\u4E86\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6 Group \u7684\u67E5\u8BE2\uFF1B\u7531\u4E8E\u5BFC\u5165\u9700\u8981\u591A\u526F\u672C\u6210\u529F\uFF0C\u6240\u4EE5\u5982\u679C\u5269\u4E0B\u7684\u526F\u672C\u6570\u91CF\u4E0D\u6EE1\u8DB3 Quoram\uFF0C\u90A3\u4E48\u5BFC\u5165\u8FD8\u662F\u4F1A\u5931\u8D25\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u6BCF\u4E2A Resource Group \u81F3\u5C11\u8981\u6709\u4E00\u4E2A Table \u7684\u4E00\u4E2A\u526F\u672C\uFF0C\u6BD4\u5982\u5982\u679C\u8981\u5EFA\u7ACB 5 \u4E2A Resource Group\uFF0C\u5E76\u4E14\u6BCF\u4E2A Resource Group \u90FD\u53EF\u80FD\u8BBF\u95EE\u6240\u6709\u7684 Table\uFF0C\u90A3\u4E48\u5C31\u9700\u8981 Table \u6709 5 \u4E2A\u526F\u672C\uFF0C\u4F1A\u5E26\u6765\u6BD4\u8F83\u5927\u7684\u5B58\u50A8\u5F00\u9500\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5178\u578B\u4F7F\u7528\u573A\u666F",children:"\u5178\u578B\u4F7F\u7528\u573A\u666F"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8BFB\u5199\u9694\u79BB\uFF0C\u53EF\u4EE5\u5C06\u4E00\u4E2A\u96C6\u7FA4\u5212\u5206\u4E3A\u4E24\u4E2A Resource Group\uFF0COffline Resource Group \u7528\u6765\u6267\u884C ETL \u4F5C\u4E1A\uFF0COnline Resource Group \u8D1F\u8D23\u5728\u7EBF\u67E5\u8BE2\uFF1B\u6570\u636E\u4EE5 3 \u526F\u672C\u7684\u65B9\u5F0F\u5B58\u50A8\uFF0C\u5176\u4E2D 2 \u4E2A\u526F\u672C\u5B58\u653E\u5728 Online \u8D44\u6E90\u7EC4\uFF0C1 \u4E2A\u526F\u672C\u5B58\u653E\u5728 Offline \u8D44\u6E90\u7EC4\u3002Online \u8D44\u6E90\u7EC4\u4E3B\u8981\u7528\u4E8E\u9AD8\u5E76\u53D1\u4F4E\u5EF6\u8FDF\u7684\u5728\u7EBF\u6570\u636E\u670D\u52A1\uFF0C\u800C\u4E00\u4E9B\u5927\u67E5\u8BE2\u6216\u79BB\u7EBF ETL \u64CD\u4F5C\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 Offline \u8D44\u6E90\u7EC4\u4E2D\u7684\u8282\u70B9\u6267\u884C\u3002\u4ECE\u800C\u5B9E\u73B0\u5728\u7EDF\u4E00\u96C6\u7FA4\u5185\u540C\u65F6\u63D0\u4F9B\u5728\u7EBF\u548C\u79BB\u7EBF\u670D\u52A1\u7684\u80FD\u529B\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4E0D\u540C\u4E1A\u52A1\u4E4B\u95F4\u9694\u79BB\uFF0C\u6B64\u65F6\u591A\u4E2A\u4E1A\u52A1\u4E4B\u95F4\u6570\u636E\u6CA1\u6709\u5171\u4EAB\uFF0C\u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u4E1A\u52A1\u5212\u5206\u4E00\u4E2A Resource Group\uFF0C\u591A\u4E2A\u4E1A\u52A1\u4E4B\u95F4\u6CA1\u6709\u4EFB\u4F55\u5E72\u6270\uFF0C\u8FD9\u5B9E\u9645\u4E0A\u662F\u628A\u591A\u4E2A\u7269\u7406\u96C6\u7FA4\u5408\u5E76\u5230\u7EDF\u4E00\u7684\u4E00\u4E2A\u5927\u96C6\u7FA4\u7BA1\u7406\uFF1B"}),"\n",(0,s.jsx)(n.li,{children:"\u4E0D\u540C\u7528\u6237\u4E4B\u95F4\u9694\u79BB\uFF0C\u6BD4\u5982\u96C6\u7FA4\u5185\u6709\u4E00\u5F20\u4E1A\u52A1\u8868\u9700\u8981\u5171\u4EAB\u7ED9\u6240\u6709 3 \u4E2A\u7528\u6237\u4F7F\u7528\uFF0C\u4F46\u662F\u5E0C\u671B\u80FD\u591F\u5C3D\u91CF\u907F\u514D\u4E0D\u540C\u7528\u6237\u4E4B\u95F4\u7684\u8D44\u6E90\u62A2\u5360\u3002\u5219\u6211\u4EEC\u53EF\u4EE5\u4E3A\u8FD9\u5F20\u8868\u521B\u5EFA 3 \u4E2A\u526F\u672C\uFF0C\u5206\u522B\u5B58\u50A8\u5728 3 \u4E2A\u8D44\u6E90\u7EC4\u4E2D\uFF0C\u4E3A\u4E2A\u7528\u6237\u7ED1\u5B9A\u4E00\u4E2A\u8D44\u6E90\u7EC4\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u914D\u7F6E-resource-group",children:"\u914D\u7F6E Resource Group"}),"\n",(0,s.jsx)(n.h3,{id:"\u4E3A-be-\u8BBE\u7F6E\u6807\u7B7E",children:"\u4E3A BE \u8BBE\u7F6E\u6807\u7B7E"}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8BBE\u5F53\u524D Doris \u96C6\u7FA4\u6709 6 \u4E2A BE \u8282\u70B9\u3002\u5206\u522B\u4E3A host[1-6]\u3002\u5728\u521D\u59CB\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709 BE \u8282\u70B9\u90FD\u5C5E\u4E8E\u4E00\u4E2A\u9ED8\u8BA4\u8D44\u6E90\u7EC4\uFF08Default\uFF09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06\u8FD9 6 \u4E2A\u8282\u70B9\u5212\u5206\u6210 3 \u4E2A\u8D44\u6E90\u7EC4\uFF1Agroup_a\u3001group_b\u3001group_c\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'alter system modify backend "host1:9050" set ("tag.location" = "group_a");\nalter system modify backend "host2:9050" set ("tag.location" = "group_a");\nalter system modify backend "host3:9050" set ("tag.location" = "group_b");\nalter system modify backend "host4:9050" set ("tag.location" = "group_b");\nalter system modify backend "host5:9050" set ("tag.location" = "group_c");\nalter system modify backend "host6:9050" set ("tag.location" = "group_c");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u5C06 ",(0,s.jsx)(n.code,{children:"host[1-2]"})," \u7EC4\u6210\u8D44\u6E90\u7EC4 ",(0,s.jsx)(n.code,{children:"group_a"}),"\uFF0C",(0,s.jsx)(n.code,{children:"host[3-4]"})," \u7EC4\u6210\u8D44\u6E90\u7EC4 ",(0,s.jsx)(n.code,{children:"group_b"}),"\uFF0C",(0,s.jsx)(n.code,{children:"host[5-6]"})," \u7EC4\u6210\u8D44\u6E90\u7EC4 ",(0,s.jsx)(n.code,{children:"group_c"}),"\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6CE8\uFF1A\u4E00\u4E2A BE \u53EA\u80FD\u5C5E\u4E8E\u4E00\u4E2A\u8D44\u6E90\u7EC4\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6309\u7167\u8D44\u6E90\u7EC4\u5206\u914D\u6570\u636E\u5206\u5E03",children:"\u6309\u7167\u8D44\u6E90\u7EC4\u5206\u914D\u6570\u636E\u5206\u5E03"}),"\n",(0,s.jsx)(n.p,{children:"\u8D44\u6E90\u7EC4\u5212\u5206\u597D\u540E\u53EF\u4EE5\u5C06\u7528\u6237\u6570\u636E\u7684\u4E0D\u540C\u526F\u672C\u5206\u5E03\u5728\u4E0D\u540C\u8D44\u6E90\u7EC4\u3002\u5047\u8BBE\u4E00\u5F20\u7528\u6237\u8868 UserTable\u3002\u6211\u4EEC\u5E0C\u671B\u5728 3 \u4E2A\u8D44\u6E90\u7EC4\u5185\u5404\u5B58\u653E\u4E00\u4E2A\u526F\u672C\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u5EFA\u8868\u8BED\u53E5\u5B9E\u73B0\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'create table UserTable\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n    "replication_allocation"="tag.location.group_a:1, tag.location.group_b:1, tag.location.group_c:1"\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u6837\u4E00\u6765\uFF0C\u8868 UserTable \u4E2D\u7684\u6570\u636E\uFF0C\u5C06\u4F1A\u4EE5 3 \u526F\u672C\u7684\u5F62\u5F0F\uFF0C\u5206\u522B\u5B58\u50A8\u5728\u8D44\u6E90\u7EC4 group_a\u3001group_b\u3001group_c \u6240\u5728\u7684\u8282\u70B9\u4E2D\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4E0B\u56FE\u5C55\u793A\u4E86\u5F53\u524D\u7684\u8282\u70B9\u5212\u5206\u548C\u6570\u636E\u5206\u5E03\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:" \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502                                                    \u2502\n \u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host1            \u2502  \u2502 host2            \u2502 \u2502\n \u2502         \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502                  \u2502 \u2502\n \u2502 group_a \u2502  \u2502   replica1  \u2502 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host3            \u2502  \u2502 host4            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_b \u2502                  \u2502  \u2502  \u2502   replica2  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host5            \u2502  \u2502 host6            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_c \u2502                  \u2502  \u2502  \u2502   replica3  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53\u4E00\u4E2A DB \u4E0B\u6709\u975E\u5E38\u591A\u7684 Table \u65F6\uFF0C\u4FEE\u6539\u6BCF\u4E2A Table \u7684\u5206\u5E03\u7B56\u7565\u662F\u975E\u5E38\u7E41\u7410\u7684\uFF0C\u6240\u4EE5 Doris \u8FD8\u652F\u6301\u4E86\u5728 database \u5C42\u9762\u8BBE\u7F6E\u7EDF\u4E00\u7684\u6570\u636E\u5206\u5E03\u7B56\u7565\uFF0C\u4F46\u662F table \u8BBE\u7F6E\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E database\u3002\u6BD4\u5982\u6709\u4E00\u4E2A db1, db1 \u4E0B\u6709\u56DB\u4E2A table\uFF0Ctable1 \u9700\u8981\u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\u4E3A ",(0,s.jsx)(n.code,{children:"group_a:1,group_b:2"}),"\uFF0Ctable2\uFF0Ctable3, table4 \u9700\u8981\u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\u4E3A ",(0,s.jsx)(n.code,{children:"group_c:1,group_b:2"})]}),"\n",(0,s.jsx)(n.p,{children:"\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u8BED\u53E5\u521B\u5EFA db1\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE DATABASE db1 PROPERTIES (\n"replication_allocation" = "tag.location.group_c:1, tag.location.group_b:2"\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u5982\u4E0B\u8BED\u53E5\u521B\u5EFA table1\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE table1\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n"replication_allocation"="tag.location.group_a:1, tag.location.group_b:2"\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["table2\uFF0Ctable3,table4 \u7684\u5EFA\u8868\u8BED\u53E5\u65E0\u9700\u518D\u6307\u5B9A",(0,s.jsx)(n.code,{children:"replication_allocation"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,s.jsx)(n.p,{children:"\u66F4\u6539 database \u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\u4E0D\u4F1A\u5BF9\u5DF2\u6709\u7684 table \u4EA7\u751F\u5F71\u54CD\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4E3A\u7528\u6237\u8BBE\u7F6E-resourcegroup",children:"\u4E3A\u7528\u6237\u8BBE\u7F6E ResourceGroup"}),"\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u8BED\u53E5\uFF0C\u9650\u5236 user1 \u53EA\u80FD\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"group_a"})," \u8D44\u6E90\u7EC4\u4E2D\u7684\u8282\u70B9\u8FDB\u884C\u6570\u636E\u67E5\u8BE2\uFF0Cuser2 \u53EA\u80FD\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"group_b"})," \u8D44\u6E90\u7EC4\uFF0C\u800C user3 \u53EF\u4EE5\u540C\u65F6\u4F7F\u7528 3 \u4E2A\u8D44\u6E90\u7EC4\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"set property for 'user1' 'resource_tags.location' = 'group_a';\nset property for 'user2' 'resource_tags.location' = 'group_b';\nset property for 'user3' 'resource_tags.location' = 'group_a, group_b, group_c';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8BBE\u7F6E\u5B8C\u6210\u540E\uFF0Cuser1 \u5728\u53D1\u8D77\u5BF9 UserTable \u8868\u7684\u67E5\u8BE2\u65F6\uFF0C\u53EA\u4F1A\u8BBF\u95EE ",(0,s.jsx)(n.code,{children:"group_a"})," \u8D44\u6E90\u7EC4\u5185\u8282\u70B9\u4E0A\u7684\u6570\u636E\u526F\u672C\uFF0C\u5E76\u4E14\u67E5\u8BE2\u4EC5\u4F1A\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"group_a"})," \u8D44\u6E90\u7EC4\u5185\u7684\u8282\u70B9\u8BA1\u7B97\u8D44\u6E90\u3002\u800C user3 \u7684\u67E5\u8BE2\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F\u8D44\u6E90\u7EC4\u5185\u7684\u526F\u672C\u548C\u8BA1\u7B97\u8D44\u6E90\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6CE8\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u7684 ",(0,s.jsx)(n.code,{children:"resource_tags.location"})," \u5C5E\u6027\u4E3A\u7A7A\uFF0C\u5728 2.0.2\uFF08\u542B\uFF09\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u4E0D\u53D7 tag \u7684\u9650\u5236\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F\u8D44\u6E90\u7EC4\u3002\u5728 2.0.3 \u7248\u672C\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u666E\u901A\u7528\u6237\u53EA\u80FD\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"default"})," \u8D44\u6E90\u7EC4\u3002root \u548C admin \u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F\u8D44\u6E90\u7EC4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,s.jsxs)(n.p,{children:["\u5C5E\u6027 ",(0,s.jsx)(n.code,{children:"resource_tags.location"})," \u6BCF\u6B21\u4FEE\u6539\u5B8C\u6210\u4E4B\u540E\uFF0C\u7528\u6237\u9700\u8981\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u624D\u80FD\u4F7F\u53D8\u66F4\u751F\u6548\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5BFC\u5165\u4F5C\u4E1A\u7684\u8D44\u6E90\u7EC4\u5206\u914D",children:"\u5BFC\u5165\u4F5C\u4E1A\u7684\u8D44\u6E90\u7EC4\u5206\u914D"}),"\n",(0,s.jsx)(n.p,{children:"\u5BFC\u5165\u4F5C\u4E1A\uFF08\u5305\u62EC insert\u3001broker load\u3001routine load\u3001stream load \u7B49\uFF09\u7684\u8D44\u6E90\u4F7F\u7528\u53EF\u4EE5\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BA1\u7B97\u8D44\u6E90\uFF1A\u8D1F\u8D23\u8BFB\u53D6\u6570\u636E\u6E90\u3001\u6570\u636E\u8F6C\u6362\u548C\u5206\u53D1\uFF1B"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5199\u5165\u8D44\u6E90\uFF1A\u8D1F\u8D23\u6570\u636E\u7F16\u7801\u3001\u538B\u7F29\u5E76\u5199\u5165\u78C1\u76D8\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u4E8E\u5199\u5165\u8D44\u6E90\u5FC5\u987B\u662F\u6570\u636E\u526F\u672C\u6240\u5728\u7684\u8282\u70B9\uFF0C\u800C\u8BA1\u7B97\u8D44\u6E90\u53EF\u4EE5\u9009\u62E9\u4EFB\u610F\u8282\u70B9\u5B8C\u6210\uFF0C\u6240\u4EE5\u5728\u5BFC\u5165\u7684\u573A\u666F\u4E0B\uFF0CResource Group \u53EA\u80FD\u9650\u5236\u8BA1\u7B97\u90E8\u5206\u4F7F\u7528\u7684\u8D44\u6E90\u3002"})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},701845:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/resource_group-520201e8a83fd62e502a16bc4ce4e01b.png"},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return a}});var r=o(667294);let s={},l=r.createContext(s);function a(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);