"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["592215"],{814987:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>t,toc:()=>d,frontMatter:()=>c});var i=JSON.parse('{"id":"ecosystem/doris-operator/on-aws","title":"\u5728 AWS \u4E0A\u7684\u90E8\u7F72\u5EFA\u8BAE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/doris-operator/on-aws.md","sourceDirName":"ecosystem/doris-operator","slug":"/ecosystem/doris-operator/on-aws","permalink":"/zh-CN/docs/dev/ecosystem/doris-operator/on-aws","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5728 AWS \u4E0A\u7684\u90E8\u7F72\u5EFA\u8BAE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5728\u963F\u91CC\u4E91\u4E0A\u7684\u90E8\u7F72\u5EFA\u8BAE","permalink":"/zh-CN/docs/dev/ecosystem/doris-operator/on-alibaba"},"next":{"title":"CloudCanal","permalink":"/zh-CN/docs/dev/ecosystem/cloudcanal"}}'),r=s("785893"),l=s("250065");let c={title:"\u5728 AWS \u4E0A\u7684\u90E8\u7F72\u5EFA\u8BAE",language:"zh-CN"},o=void 0,t={},d=[{value:"AWS \u5BB9\u5668\u670D\u52A1 EKS",id:"aws-\u5BB9\u5668\u670D\u52A1-eks",level:2},{value:"\u65B0\u5EFA\u96C6\u7FA4",id:"\u65B0\u5EFA\u96C6\u7FA4",level:3},{value:"\u5DF2\u6709\u96C6\u7FA4",id:"\u5DF2\u6709\u96C6\u7FA4",level:3},{value:"\u955C\u50CF\u4ED3\u5E93\u8BBF\u95EE",id:"\u955C\u50CF\u4ED3\u5E93\u8BBF\u95EE",level:3},{value:"\u7279\u6743\u6A21\u5F0F\u8BF4\u660E",id:"\u7279\u6743\u6A21\u5F0F\u8BF4\u660E",level:3},{value:"\u5B58\u50A8\u914D\u7F6E",id:"\u5B58\u50A8\u914D\u7F6E",level:3},{value:"\u8BA1\u7B97\u8D44\u6E90\u6C60\u914D\u7F6E",id:"\u8BA1\u7B97\u8D44\u6E90\u6C60\u914D\u7F6E",level:3}];function a(e){let n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"aws-\u5BB9\u5668\u670D\u52A1-eks",children:"AWS \u5BB9\u5668\u670D\u52A1 EKS"}),"\n",(0,r.jsx)(n.h3,{id:"\u65B0\u5EFA\u96C6\u7FA4",children:"\u65B0\u5EFA\u96C6\u7FA4"}),"\n",(0,r.jsx)(n.p,{children:"EKS \u96C6\u7FA4\u4E2D\u8FD0\u884C\u7684\u5BB9\u5668\u662F\u6258\u7BA1\u5728 EC2 \u5B9E\u4F8B\u4E0A\u7684, \u9700\u8981\u6839\u636E Doris \u7684\u8981\u6C42\u5BF9 EC2 \u5B9E\u4F8B\u8FDB\u884C\u7CFB\u7EDF\u7EA7\u914D\u7F6E\u3002\u5728\u96C6\u7FA4\u521B\u5EFA\u65F6\uFF0C\u9700\u8981\u7528\u6237\u786E\u8BA4 EKS \u6A21\u5F0F\uFF0C\u81EA\u6CBB\u6A21\u5F0F\u6216\u666E\u901A\u6A21\u5F0F\u3002\n\u8FD9\u91CC\u63A8\u8350\u4E0D\u4F7F\u7528\u81EA\u6CBB\u6A21\u5F0F\uFF0C\u56E0\u4E3A\u81EA\u6CBB\u6A21\u5F0F\u7684\u8BA1\u7B97\u8D44\u6E90\u662F\u901A\u8FC7\u5185\u7F6E\u8282\u70B9\u6C60\u6765\u5206\u914D\u548C\u56DE\u6536\u8D44\u6E90\uFF0C\u5728\u6BCF\u4E00\u6B21\u7684\u8D44\u6E90\u7533\u8BF7\u6216\u5219\u91CA\u653E\uFF0C\u90FD\u4F1A\u8FDB\u884C\u73B0\u6709\u8D44\u6E90\u7684\u91CD\u65B0\u6574\u5408\uFF0C\u5BF9\u4E8E statefulset \u8FD9\u7C7B\u6709\u72B6\u6001\u670D\u52A1\u5C24\u5176\u662F\u542F\u52A8\u8017\u65F6\u957F\u548C Doris \u8FD9\u79CD\u6709\u4E25\u683C\u7684\u5206\u5E03\u5F0F\u534F\u540C\u8981\u6C42\u7684\u670D\u52A1\uFF0C\u4F1A\u9020\u6210\u5171\u4EAB\u8282\u70B9\u6C60\u7684\u6240\u6709\u670D\u52A1\u52A8\u8361\uFF0C\u76F4\u63A5\u73B0\u8C61\u5C31\u662F\uFF0C\u6709\u53EF\u80FD\u5F15\u8D77\u6574\u4E2A Doris \u96C6\u7FA4\u7684\u5168\u90E8\u8282\u70B9\u6F02\u79FB\uFF08\u8FD9\u6BD4\u91CD\u542F\u66F4\u6050\u6016\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4E0D\u4F1A\u6EDA\u52A8\u91CD\u542F\uFF0C\u800C\u662F\u4E4B\u524D\u7A33\u5B9A\u8FD0\u884C\u7684\u670D\u52A1\u5728\u8282\u70B9\u4E0A\u65F6\uFF0C\u8BE5\u8282\u70B9\u88AB\u5F3A\u5236\u91CA\u653E\uFF0CK8s \u8C03\u5EA6\u8FD9\u4E9B pod \u53BB\u65B0\u7684\u8282\u70B9\uFF09\u5BF9\u751F\u4EA7\u73AF\u5883\u6709\u5F88\u5927\u7684\u5B89\u5168\u9690\u60A3\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u4E0A\u5185\u5BB9\uFF0C\u81EA\u6CBB\u6A21\u5F0F\u9002\u7528\u4E8E\u65E0\u72B6\u6001\u7684\u670D\u52A1\u8FD0\u7EF4\u90E8\u7F72\uFF0C\u5B89\u88C5Doris\u96C6\u7FA4 \u63A8\u8350\u975E\u81EA\u6CBB\u6A21\u5F0F"}),"\n",(0,r.jsx)(n.li,{children:"\u63A8\u8350\u4F7F\u7528\u64CD\u4F5C\u7CFB\u7EDF\u955C\u50CF\uFF1AAmazon Linux 2"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5DF2\u6709\u96C6\u7FA4",children:"\u5DF2\u6709\u96C6\u7FA4"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5DF2\u6709\u96C6\u7FA4\u4E0A\uFF08\u975E\u81EA\u6CBB\u6A21\u5F0F\uFF09\uFF0C\u53EF\u4EE5\u901A\u8FC7 Doris Operator \u8FD0\u884C Doris \u96C6\u7FA4\uFF0C\u9664\u975E\u8BE5\u96C6\u7FA4\u88AB\u9650\u5236\u4F7F\u7528 K8s \u7684\u7279\u6743\u6A21\u5F0F\u3002\n\u5EFA\u8BAE\u5DF2\u6709\u96C6\u7FA4\u914D\u7F6E\u65B0\u7684\u8282\u70B9\u7EC4\u6765\u5355\u72EC\u8FDB\u884C Doris \u96C6\u7FA4\u8D44\u6E90\u7684\u90E8\u7F72\u548C\u7EF4\u62A4\uFF0C\u6D89\u53CA\u5230 Doris BE \u8FD0\u884C\u7684\u7CFB\u7EDF\u8BBE\u7F6E\uFF0C\u53EF\u80FD\u4F1A\u5BF9\u5BBF\u4E3B\u673A\u7684\u7CFB\u7EDF\u53C2\u6570\u8FDB\u884C\u8C03\u6574\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u955C\u50CF\u4ED3\u5E93\u8BBF\u95EE",children:"\u955C\u50CF\u4ED3\u5E93\u8BBF\u95EE"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 EKS \u4E0A\u5982\u679C \u9700\u8981\u8BBF\u95EE DockerHub \u516C\u5171\u955C\u50CF\u4ED3\u5E93\uFF0C\u9700\u8981\u4E3A \u96C6\u7FA4\u6DFB\u52A0 ",(0,r.jsx)(n.code,{children:"Amazon VPC CNI"}),", ",(0,r.jsx)(n.code,{children:"CoreDNS"}),", ",(0,r.jsx)(n.code,{children:"kube-proxy"})," \u7B49\u7F51\u7EDC\u63D2\u4EF6\uFF0C\u5E76\u4E3A\u96C6\u7FA4\u914D\u7F6E VPC \u65F6\uFF0C\u9009\u62E9\u53EF\u8BBF\u95EE\u516C\u5171\u73AF\u5883\u7684\u5B50\u7F51\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7279\u6743\u6A21\u5F0F\u8BF4\u660E",children:"\u7279\u6743\u6A21\u5F0F\u8BF4\u660E"}),"\n",(0,r.jsx)(n.p,{children:"EKS \u4E0B\uFF0CEC2 \u5B9E\u4F8B\u662F\u5B8C\u5168\u5C5E\u4E8E\u5F53\u524D EKS \u7528\u6237\u7684\uFF0C\u4E0D\u5B58\u5728\u4E0D\u540C\u7528\u6237\u96C6\u7FA4\u5728\u8D44\u6E90\u6C60\u4E2D\u76F8\u4E92\u5F71\u54CD\u800C\u7981\u6389 K8s \u7279\u6743\u6A21\u5F0F\u7684\u60C5\u51B5\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u82E5\u60A8\u7684 EKS \u5141\u8BB8\u7279\u6743\u6A21\u5F0F\uFF08\u9ED8\u8BA4\u5141\u8BB8\uFF09\uFF0C\u5219\u65E0\u9700\u5173\u5FC3\u7CFB\u7EDF\u53C2\u6570\uFF0C Doris Operator \u9ED8\u8BA4\u4F1A\u4E3A Doris \u8FD0\u884C\u8C03\u6574\u7CFB\u7EDF\u53C2\u6570\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u82E5\u4E0D\u5141\u8BB8\u7279\u6743\u6A21\u5F0F\uFF0C\u5219\u9700\u8981\u5728\u5BBF\u4E3B\u673A\u4E0A\u8FDB\u884C\u5982\u4E0B\u7CFB\u7EDF\u53C2\u6570\u8C03\u6574\uFF1A\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4FEE\u6539\u865A\u62DF\u5185\u5B58\u533A\u57DF\u6570\u91CF\uFF1A",(0,r.jsx)(n.code,{children:"sysctl -w vm.max_map_count=2000000"})," \u8C03\u6574\u865A\u62DF\u5185\u5B58\u7684\u6700\u5927\u6620\u5C04\u6570\u91CF\u3002\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"sysctl vm.max_map_count"})," \u67E5\u770B\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5173\u95ED\u900F\u660E\u5927\u9875\uFF1A\u900F\u660E\u5927\u9875\u5BF9\u6027\u80FD\u53EF\u80FD\u6709\u4E0D\u5229\u5F71\u54CD\uFF0C\u56E0\u6B64\u9700\u8981\u5173\u95ED\u5B83\u3002\u901A\u8FC7 cat /sys/kernel/mm/transparent_hugepage/enabled  \u662F\u5426\u5305\u542B never \u6765\u5224\u65AD\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u8BBE\u7F6E\u6700\u5927\u6253\u5F00\u6587\u4EF6\u53E5\u67C4\u6570\uFF1A\u901A\u8FC7\u4FEE\u6539 ",(0,r.jsx)(n.code,{children:"/etc/security/limits.conf"})," \u6765\u8C03\u6574\u6700\u5927\u6587\u4EF6\u53E5\u67C4\u6570\u3002\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"ulimit -n"})," \u6765\u67E5\u770B\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7981\u7528 swap\uFF1A",(0,r.jsx)(n.code,{children:"swapoff -a"})," \u7528\u4E8E\u7981\u7528\u6240\u6709 swap \u5206\u533A\u548C\u6587\u4EF6\u3002\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"swapon --show"})," \u9A8C\u8BC1\uFF0C \u672A\u5F00\u542F\u5219\u65E0\u8F93\u51FA\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5B58\u50A8\u914D\u7F6E",children:"\u5B58\u50A8\u914D\u7F6E"}),"\n",(0,r.jsxs)(n.p,{children:["Doris Operator \u5728\u751F\u4EA7\u73AF\u5883\u4E00\u5B9A\u9700\u8981\u7528\u5230\u6301\u4E45\u5316\u914D\u7F6E\uFF0C\u7528\u6765\u4FDD\u5B58\u8282\u70B9\u72B6\u6001\uFF0C\u63A8\u8350 ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/ebs",children:"EBS"})," \u5B58\u50A8\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u6709\u4EE5\u4E0B\u6CE8\u610F\u4E8B\u9879\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5728\u96C6\u7FA4\u914D\u7F6E\u5B89\u88C5\u6216\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u4E3A\u5176\u6DFB\u52A0 EBS \u5B58\u50A8\u63D2\u4EF6\uFF0C\u82E5\u4F7F\u7528 EKS \u81EA\u6CBB\u6A21\u5F0F\uFF08\u4E0D\u63A8\u8350\uFF09\uFF0C\u5219\u63A8\u8350\u5B89\u88C5 EFS\uFF0C\u5E76\u4E14\u5B58\u50A8\u63D2\u4EF6\u9700\u8981\u62E5\u6709\u76F8\u5E94\u7684 ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html",children:"\u89D2\u8272\u6743\u9650"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u4FDD\u8BC1 EKS \u8282\u70B9\u7684 IAM \u89D2\u8272\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AmazonEC2FullAccess"}),"\n",(0,r.jsx)(n.li,{children:"AmazonEKSWorkerNodePolicy"}),"\n",(0,r.jsx)(n.li,{children:"AmazonEKS_CNI_Policy"}),"\n",(0,r.jsx)(n.li,{children:"AmazonSSMManagedInstanceCore"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8BA1\u7B97\u8D44\u6E90\u6C60\u914D\u7F6E",children:"\u8BA1\u7B97\u8D44\u6E90\u6C60\u914D\u7F6E"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8282\u70B9\u7EC4\u914D\u7F6E\uFF08\u63A8\u8350\uFF09",(0,r.jsx)(n.br,{}),"\n\u53EF\u4EE5\u5728\u96C6\u7FA4\u521B\u5EFA\u754C\u9762\u521B\u5EFA\u8282\u70B9\u7EC4\uFF0C\u4E5F\u53EF\u4EE5\u5728\u96C6\u7FA4\u521D\u59CB\u5316\u5B8C\u6210\u540E\u8FDB\u884C\u8282\u70B9\u7EC4\u7684\u6DFB\u52A0\u3002\u901A\u8FC7 EC2 > \u542F\u52A8\u6A21\u7248 > \u521B\u5EFA\u542F\u52A8\u6A21\u677F \u6765\u8BBE\u7F6E\u8282\u70B9\u6C60\u7684\u8282\u70B9\u7EC4\u542F\u52A8\u6A21\u677F\u3002\u901A\u8FC7\u6A21\u677F \u6CE8\u5165\u811A\u672C\u6765\u81EA\u52A8\u5316\u8C03\u6574 EC2 \u5B9E\u4F8B\u7684\u7CFB\u7EDF\u73AF\u5883\u914D\u7F6E\uFF0C\u786E\u4FDD\u8282\u70B9\u5728\u542F\u52A8\u65F6\u81EA\u52A8\u914D\u7F6E\u6240\u9700\u7684\u7CFB\u7EDF\u53C2\u6570\u3002\u901A\u8FC7\u914D\u7F6E\u8282\u70B9\u6A21\u677F\u7684\u65B9\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u5728\u4F7F\u7528 EKS \u81EA\u52A8\u5F39\u6027\u6269\u7F29\u5BB9\u7684\u65F6\u5019\uFF0C\u81EA\u52A8\u914D\u7F6E\u65B0\u589E\u8282\u70B9\u7CFB\u7EDF\u53C2\u6570\u7684\u80FD\u529B\u3002",(0,r.jsx)(n.br,{}),"\n\u793A\u4F8B\u542F\u52A8\u811A\u672C\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'#!/bin/bash\nchmod +x /etc/rc.d/rc.local\necho "sudo systemctl stop firewalld.service" >> /etc/rc.d/rc.local\necho "sudo systemctl disable firewalld.service" >> /etc/rc.d/rc.local\necho "sysctl -w vm.max_map_count=2000000" >> /etc/rc.d/rc.local\necho "swapoff -a" >> /etc/rc.d/rc.local\ncurrent_limit=$(ulimit -n)\ndesired_limit=1000000\nconfig_file="/etc/security/limits.conf"\nif [ "$current_limit" -ne "$desired_limit" ]; then\n  echo "* soft nofile 1000000" >> "$config_file"\n  echo "* hard nofile 1000000" >> "$config_file"\nfi\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u53E6\u5916\uFF0C\u521B\u5EFA\u8282\u70B9\u7EC4\u7684\u65F6\u5019\uFF0C\u82E5\u60F3\u901A\u8FC7\u547D\u4EE4\u884C\u8BBF\u95EE\uFF0C\u9700\u8981\u914D\u7F6E\u8FDC\u7A0B\u8282\u70B9\u8BBF\u95EE\u6743\u9650\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5185\u7F6E\u8282\u70B9\u6C60\u914D\u7F6E\uFF08\u4E0D\u63A8\u8350\uFF09"}),"\n",(0,r.jsxs)(n.p,{children:["\u5F00\u542F EKS \u81EA\u6CBB\u6A21\u5F0F\u4F7F\u7528\u7684\u8D44\u6E90\u6C60\uFF0C\u5728\u521B\u5EFA\u8282\u70B9\u6C60\u65F6\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u81EA\u5B9A\u4E49 EC2 \u5B9E\u4F8B\u7C7B\u578B\uFF0C\u8C03\u6574\u5B9E\u4F8B\u7684 CPU\u3001\u5185\u5B58\u7B49\u8D44\u6E90\u3002\u5728\u8282\u70B9\u6C60\u914D\u7F6E\u65F6\uFF0C\u53EF\u4EE5\u4E3A EC2 \u5B9E\u4F8B\u6DFB\u52A0\u542F\u52A8\u811A\u672C\u6765\u8FDB\u884C\u7CFB\u7EDF\u53C2\u6570\u7684\u8C03\u6574\u3002\u4F46\u662F\u6B64\u7C7B\u578B\u8D44\u6E90\u6C60\u9700\u8981\u4F7F\u7528\u81EA\u6CBB\u6A21\u5F0F\uFF0C\u5E76\u4E14\u5BF9\u96C6\u7FA4\u7684\u7BA1\u7406\u81EA\u7531\u5EA6\u964D\u4F4E\u3002\u5177\u4F53\u4FEE\u6539\u64CD\u4F5C\u8BE6\u60C5\u53C2\u8003\uFF1A",(0,r.jsx)(n.a,{href:"/zh-CN/docs/dev/install/preparation/os-checking",children:"\u64CD\u4F5C\u7CFB\u7EDF\u68C0\u67E5"})]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var i=s(667294);let r={},l=i.createContext(r);function c(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);