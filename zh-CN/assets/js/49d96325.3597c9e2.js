"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["705218"],{637791:function(n,e,s){s.r(e),s.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"install/cluster-deployment/doris-on-aws","title":"Doris on AWS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/install/cluster-deployment/doris-on-aws.md","sourceDirName":"install/cluster-deployment","slug":"/install/cluster-deployment/doris-on-aws","permalink":"/zh-CN/docs/install/cluster-deployment/doris-on-aws","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Doris on AWS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8FD0\u7EF4 Doris \u96C6\u7FA4","permalink":"/zh-CN/docs/install/cluster-deployment/k8s-deploy/cluster-operation"},"next":{"title":"\u901A\u8FC7 MySQL \u534F\u8BAE\u8FDE\u63A5","permalink":"/zh-CN/docs/db-connect/database-connect"}}'),r=s("785893"),t=s("250065");let o={title:"Doris on AWS",language:"zh-CN"},l=void 0,d={},c=[{value:"\u4EC0\u4E48\u662F AWS CloudFormation\uFF1F",id:"\u4EC0\u4E48\u662F-aws-cloudformation",level:2},{value:"\u4EC0\u4E48\u662F Doris on AWS CloudFormation\uFF1F",id:"\u4EC0\u4E48\u662F-doris-on-aws-cloudformation",level:2},{value:"\u4F7F\u7528\u524D\u6CE8\u610F",id:"\u4F7F\u7528\u524D\u6CE8\u610F",level:2},{value:"\u5F00\u59CB\u90E8\u7F72",id:"\u5F00\u59CB\u90E8\u7F72",level:2},{value:"\u90E8\u7F72\u540E\uFF0C\u5982\u4F55\u8FDE\u63A5\u6570\u636E\u5E93",id:"\u90E8\u7F72\u540E\u5982\u4F55\u8FDE\u63A5\u6570\u636E\u5E93",level:2}];function a(n){let e={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u4E3A\u4E86\u65B9\u4FBF\u5927\u5BB6\u5728 AWS \u4E0A\u5FEB\u901F\u4F53\u9A8C Doris\uFF0C\u63D0\u4F9B\u4E86 CloudFormation \u6A21\u7248\uFF08CFT\uFF09\uFF0C\u5141\u8BB8\u5FEB\u901F\u542F\u52A8\u548C\u8FD0\u884C\u96C6\u7FA4\u3002\u4F7F\u7528\u6A21\u677F\uFF0C\u53EA\u9700\u6700\u5C11\u7684\u914D\u7F6E\uFF0C\u5C31\u53EF\u4EE5\u81EA\u52A8\u914D\u7F6E AWS \u8D44\u6E90\uFF0C\u5E76\u542F\u52A8 Doris \u96C6\u7FA4\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5F53\u7136\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u81EA\u884C\u8D2D\u4E70 AWS \u8D44\u6E90\uFF0C\u91C7\u7528\u6807\u51C6\u7684\u624B\u52A8\u65B9\u5F0F\u8FDB\u884C\u96C6\u7FA4\u90E8\u7F72\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4EC0\u4E48\u662F-aws-cloudformation",children:"\u4EC0\u4E48\u662F AWS CloudFormation\uFF1F"}),"\n",(0,r.jsx)(e.p,{children:"CloudFormation \u5141\u8BB8\u7528\u6237\u53EA\u7528\u4E00\u4E2A\u6B65\u9AA4\u5C31\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u201C\u8D44\u6E90\u5806\u6808\u201D\u3002\u8D44\u6E90\u662F\u6307\u7528\u6237\u6240\u521B\u5EFA\u7684\u4E1C\u897F\uFF08\u5982 EC2 \u5B9E\u4F8B\u3001VPC\u3001\u5B50\u7F51\u7B49\uFF09\uFF0C\u4E00\u7EC4\u8FD9\u6837\u7684\u8D44\u6E90\u79F0\u4E3A\u5806\u6808\u3002\u7528\u6237\u53EF\u4EE5\u7F16\u5199\u4E00\u4E2A\u6A21\u677F\uFF0C\u4F7F\u7528\u5B83\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u6309\u7167\u7528\u6237\u7684\u610F\u613F\u901A\u8FC7\u4E00\u4E2A\u6B65\u9AA4\u521B\u5EFA\u4E00\u4E2A\u8D44\u6E90\u5806\u6808\u3002\u8FD9\u6BD4\u624B\u52A8\u521B\u5EFA\u5E76\u4E14\u914D\u7F6E\u66F4\u5FEB\uFF0C\u800C\u4E14\u53EF\u91CD\u590D\uFF0C\u4E00\u81F4\u6027\u66F4\u597D\u3002\u5E76\u4E14\u53EF\u4EE5\u5C06\u6A21\u677F\u653E\u5165\u6E90\u4EE3\u7801\u505A\u7248\u672C\u63A7\u5236\uFF0C\u5728\u4EFB\u4F55\u65F6\u5019\u6839\u636E\u9700\u8981\u628A\u5B83\u7528\u4E8E\u4EFB\u4F55\u76EE\u7684\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4EC0\u4E48\u662F-doris-on-aws-cloudformation",children:"\u4EC0\u4E48\u662F Doris on AWS CloudFormation\uFF1F"}),"\n",(0,r.jsx)(e.p,{children:"\u5F53\u524D Doris \u63D0\u4F9B\u4E86 Doris CloudFormation Template\uFF0C\u65B9\u4FBF\u7528\u6237\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2A\u6A21\u677F\u53EF\u4EE5\u5728 AWS \u4E0A\u5FEB\u901F\u521B\u5EFA Doris \u76F8\u5173\u7248\u672C\u7684\u96C6\u7FA4\uFF0C\u4EE5\u4FBF\u4F53\u9A8C\u6700\u65B0\u7684 Doris \u529F\u80FD\u3002"}),"\n",(0,r.jsxs)(e.admonition,{type:"caution",children:[(0,r.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),(0,r.jsx)(e.p,{children:"\u57FA\u4E8E CloudFormation \u6784\u5EFA Doris \u96C6\u7FA4\u7684\u6A21\u677F\uFF0C\u5F53\u524D\u4EC5\u652F\u6301 us-east-1\uFF0Cus-west-1\uFF0Cus-west-2 \u533A\u57DF\u3002"}),(0,r.jsx)(e.p,{children:"Doris on AWS CloudFormation \u4E3B\u8981\u7528\u4E8E\u6D4B\u8BD5\u6216\u8005\u4F53\u9A8C\uFF0C\u8BF7\u4E0D\u8981\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F7F\u7528\u524D\u6CE8\u610F",children:"\u4F7F\u7528\u524D\u6CE8\u610F"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u786E\u5B9A\u8981\u90E8\u7F72\u7684 VPC \u548C Subnet"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u786E\u5B9A\u7528\u6765\u767B\u5F55\u8282\u70B9\u7684 key pair"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u90E8\u7F72\u4E2D\u4F1A\u5EFA\u7ACB S3 \u7684 VPC Endpoint Interface"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5F00\u59CB\u90E8\u7F72",children:"\u5F00\u59CB\u90E8\u7F72"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1. AWS \u63A7\u5236\u53F0\u4E0A\uFF0C\u8FDB\u5165 CloudFormation\uFF0C\u70B9\u51FB Create stack"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u5F00\u59CB\u90E8\u7F72-AWS \u63A7\u5236\u53F0 \u8FDB\u5165 CloudFormation",src:s(278385).Z+"",width:"1280",height:"541"})}),"\n",(0,r.jsx)(e.p,{children:"\u9009\u7528 Amazon S3 URL Template source\uFF0C\u586B\u5199 Amazon S3 URL \u4E3A\u4E0B\u9762\u6A21\u677F\u94FE\u63A5\uFF1A"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://sdb-cloud-third-party.s3.amazonaws.com/doris-cf/cloudformation_doris.template.yaml",children:"https://sdb-cloud-third-party.s3.amazonaws.com/doris-cf/cloudformation_doris.template.yaml"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2. \u914D\u7F6E\u6A21\u677F\u7684\u5177\u4F53\u53C2\u6570"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u914D\u7F6E\u6A21\u677F\u7684\u5177\u4F53\u53C2\u6570",src:s(217911).Z+"",width:"1280",height:"537"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u914D\u7F6E\u6A21\u677F\u7684\u5177\u4F53\u53C2\u6570",src:s(632527).Z+"",width:"1280",height:"566"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u914D\u7F6E\u6A21\u677F\u7684\u5177\u4F53\u53C2\u6570",src:s(578337).Z+"",width:"1280",height:"291"})}),"\n",(0,r.jsx)(e.p,{children:"\u4E3B\u8981\u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"VPC ID\uFF1A\u8981\u90E8\u7F72\u5230\u7684 VPC"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Subnet ID\uFF1A\u8981\u90E8\u7F72\u7684\u5B50\u7F51"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Key pair name\uFF1A\u7528\u6765\u8FDE\u63A5\u90E8\u7F72\u540E\u7684 BE \u548C FE \u8282\u70B9\u7684 public/private key pairs"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Version of Doris\uFF1A\u9009\u62E9\u90E8\u7F72\u7684 Doris \u7248\u672C\uFF0C\u6BD4\u5982 2.1.0\u30012.0.6 \u7B49"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Number of Doris FE\uFF1AFE \u7684\u4E2A\u6570\uFF0C\u6A21\u677F\u9ED8\u8BA4\u53EA\u80FD\u9009\u62E9 1 \u4E2A FE"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Fe instance type: FE \u7684\u8282\u70B9\u7C7B\u578B\uFF0C\u53EF\u4EE5\u91C7\u7528\u9ED8\u8BA4\u503C"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Number of Doris Be\uFF1ABE \u8282\u70B9\u7684\u4E2A\u6570\uFF0C\u53EF\u4EE5\u9009\u62E9 1 \u4E2A\u6216\u8005 3 \u4E2A"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Be instance type\uFF1ABE \u7684\u8282\u70B9\u7C7B\u578B\uFF0C\u53EF\u4EE5\u91C7\u7528\u9ED8\u8BA4\u503C"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Meta data dir\uFF1AFE \u8282\u70B9\u7684\u5143\u6570\u636E\u76EE\u5F55\uFF0C\u53EF\u4EE5\u91C7\u7528\u9ED8\u8BA4\u503C"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Sys log level\uFF1A\u8BBE\u7F6E\u7CFB\u7EDF\u65E5\u5FD7\u7684\u7B49\u7EA7\uFF0C\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u7684 info"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Volume type of Be nodes\uFF1ABE \u8282\u70B9\u6302\u8F7D EBS \u7684 volume type\uFF0C\u6BCF\u53F0\u8282\u70B9\u9ED8\u8BA4\u6302\u8F7D\u4E00\u5757\u78C1\u76D8\u3002\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u503C"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Volume size of Be nodes: BE \u8282\u70B9\u6302\u8F7D EBS \u7684\u5927\u5C0F\uFF0C\u5355\u4F4D GB\uFF0C\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u90E8\u7F72\u540E\u5982\u4F55\u8FDE\u63A5\u6570\u636E\u5E93",children:"\u90E8\u7F72\u540E\uFF0C\u5982\u4F55\u8FDE\u63A5\u6570\u636E\u5E93"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1. \u90E8\u7F72\u6210\u529F\u540E\u7684\u5C55\u793A\u5982\u4E0B"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u5982\u4F55\u8FDE\u63A5\u6570\u636E\u5E93",src:s(402929).Z+"",width:"1280",height:"488"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2. \u4F9D\u6B21\u5982\u4E0B\u9762\uFF0C\u627E\u5230 FE \u7684\u8FDE\u63A5\u5730\u5740\u3002\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u4ECE FE Outputs \u91CC\uFF0C\u53EF\u4EE5\u67E5\u770B\u5230\u5730\u5740\u4E3A 172.16.0.97\u3002"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u627E\u5230 FE \u7684\u8FDE\u63A5\u5730\u5740",src:s(190658).Z+"",width:"1280",height:"395"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u627E\u5230 FE \u7684\u8FDE\u63A5\u5730\u5740",src:s(529212).Z+"",width:"1280",height:"587"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u627E\u5230 FE \u7684\u8FDE\u63A5\u5730\u5740",src:s(730153).Z+"",width:"1280",height:"343"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"3. \u8FDE\u63A5\u90E8\u7F72\u7684 Doris Cluster\uFF0CDoris \u7684 CloudFormation \u90E8\u7F72\u540E\u7684\u4E00\u4E9B\u9ED8\u8BA4\u503C\uFF1A"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"FE \u7684 IP\uFF1A\u6309\u7167\u4E0A\u9762\u6B65\u9AA4 2 \u83B7\u53D6 FE \u7684 IP \u5730\u5740"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"FE \u7684 MySQL \u534F\u8BAE\u7AEF\u53E3\uFF1A9030"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"FE \u7684 HTTP \u534F\u8BAE\u7AEF\u53E3\uFF1A8030"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u9ED8\u8BA4\u7684 root \u5BC6\u7801\uFF1A\u7A7A"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u9ED8\u8BA4\u7684 admin \u5BC6\u7801\uFF1A\u7A7A"}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},217911:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/configure-specific-parameters-1-02a68404da0de49413e927ce78c627f6.jpeg"},632527:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/configure-specific-parameters-2-ceb37fce06a8e3f6448969749668991a.jpeg"},578337:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/configure-specific-parameters-3-a7c6b3109399344bcd5075bb1e48a742.jpeg"},190658:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/find-connection-address-for-fe-1-c20545a89a9d7bca6322546206708018.jpeg"},529212:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/find-connection-address-for-fe-2-8f03647a1597f7668059b5fde4241b10.jpeg"},730153:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/find-connection-address-for-fe-3-413321f49156410699385c752184e825.jpeg"},402929:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/how-to-connect-to-the-database-5cf97ada6d5686eb8648a3fa4e22837e.jpeg"},278385:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/start-deployment-212dd402013fb3b8b495c22f639968f7.jpeg"},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return o}});var i=s(667294);let r={},t=i.createContext(r);function o(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);