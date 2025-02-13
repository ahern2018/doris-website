"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["924065"],{569775:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>i});var o=JSON.parse('{"id":"ecosystem/doris-operator/on-aws","title":"Recommendations on AWS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/ecosystem/doris-operator/on-aws.md","sourceDirName":"ecosystem/doris-operator","slug":"/ecosystem/doris-operator/on-aws","permalink":"/docs/ecosystem/doris-operator/on-aws","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Recommendations on AWS","language":"en"},"sidebar":"docs","previous":{"title":"Recommendations on Alibaba Cloud","permalink":"/docs/ecosystem/doris-operator/on-alibaba"},"next":{"title":"BladePipe","permalink":"/docs/ecosystem/cloudcanal"}}'),s=n("785893"),r=n("250065");let i={title:"Recommendations on AWS",language:"en"},a=void 0,c={},l=[{value:"AWS EKS",id:"aws-eks",level:2},{value:"Create a new cluster",id:"create-a-new-cluster",level:3},{value:"Already exists cluster",id:"already-exists-cluster",level:3},{value:"Assess DockerHub",id:"assess-dockerhub",level:3},{value:"K8s Privileged",id:"k8s-privileged",level:3},{value:"Storage",id:"storage",level:3},{value:"Compute resource pool configuration",id:"compute-resource-pool-configuration",level:3}];function d(e){let t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"aws-eks",children:"AWS EKS"}),"\n",(0,s.jsx)(t.h3,{id:"create-a-new-cluster",children:"Create a new cluster"}),"\n",(0,s.jsx)(t.p,{children:"The containers running in the EKS cluster are hosted on EC2 instances, and the EC2 instances need to be configured at the system level according to the requirements of Doris. When creating a cluster, the user needs to confirm the EKS mode, auto mode or non-auto mode.\nIt is recommended not to use the autonomous mode here, because the computing resources in the autonomous mode are allocated and recycled through the built-in node pool. At each resource application or release, the existing resources will be reintegrated. For stateful services such as statefulset, especially those that take a long time to start and services with strict distributed collaboration requirements such as Doris, it will cause turbulence in all services in the shared node pool. The direct phenomenon is that it may cause all nodes in the entire Doris cluster to drift (this is more terrifying than restarting. This process will not be a rolling restart, but when the previously stable service is on the node, the node is forced to be released, and K8s schedules these pods to the new node) There are great security risks to the production environment."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"As mentioned above, the autonomous mode is suitable for stateless service operation and maintenance deployment. The non-autonomous mode is recommended for installing the Doris cluster"}),"\n",(0,s.jsx)(t.li,{children:"Recommended operating system image: Amazon Linux 2"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"already-exists-cluster",children:"Already exists cluster"}),"\n",(0,s.jsx)(t.p,{children:"On an existing cluster (non-auto mode), you can run the Doris cluster through Doris Operator, unless the cluster is restricted to use the privileged mode of K8s.\nIt is recommended that the existing cluster configure a new node group to deploy and maintain Doris cluster resources separately, which involves the system settings for Doris BE operation and may adjust the system parameters of the host machine."}),"\n",(0,s.jsx)(t.h3,{id:"assess-dockerhub",children:"Assess DockerHub"}),"\n",(0,s.jsxs)(t.p,{children:["If you need to access the DockerHub public image repository on EKS, you need to add network plug-ins such as ",(0,s.jsx)(t.code,{children:"Amazon VPC CNI"}),", ",(0,s.jsx)(t.code,{children:"CoreDNS"}),", ",(0,s.jsx)(t.code,{children:"kube-proxy"})," to the cluster, and when configuring VPC for the cluster, select a subnet that can access the public environment."]}),"\n",(0,s.jsx)(t.h3,{id:"k8s-privileged",children:"K8s Privileged"}),"\n",(0,s.jsx)(t.p,{children:"Under EKS, EC2 instances completely belong to the current EKS user, and there is no situation where different user clusters affect each other in the resource pool and disable the K8s privileged mode."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If your EKS allows privileged mode (allowed by default), you don't need to care about system parameters. Doris Operator will adjust system parameters for Doris operation by default."}),"\n",(0,s.jsxs)(t.li,{children:["If privileged mode is not allowed, you need to adjust the following system parameters on the host:\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Modify the number of virtual memory areas: ",(0,s.jsx)(t.code,{children:"sysctl -w vm.max_map_count=2000000"})," to adjust the maximum number of virtual memory mappings. View it through ",(0,s.jsx)(t.code,{children:"sysctl vm.max_map_count"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Turn off transparent huge pages: Transparent huge pages may have an adverse effect on performance, so you need to turn it off. Judge by whether cat /sys/kernel/mm/transparent_hugepage/enabled contains never."}),"\n",(0,s.jsxs)(t.li,{children:["Set the maximum number of open file handles: adjust the maximum number of file handles by modifying ",(0,s.jsx)(t.code,{children:"/etc/security/limits.conf"}),". View it through ",(0,s.jsx)(t.code,{children:"ulimit -n"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Disable swap: ",(0,s.jsx)(t.code,{children:"swapoff -a"})," is used to disable all swap partitions and files. Verify with ",(0,s.jsx)(t.code,{children:"swapon --show"}),", no output if not enabled."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"storage",children:"Storage"}),"\n",(0,s.jsxs)(t.p,{children:["Doris Operator must use persistent configuration in the production environment to save the node storage. ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/ebs",children:"EBS"})," is recommended."]}),"\n",(0,s.jsx)(t.p,{children:"There are the following points to note:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["In the cluster configuration installation or management interface, add the EBS storage plug-in. If you use the EKS autonomous mode (not recommended), it is recommended to install EFS, and the storage plug-in needs to have the corresponding ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html",children:"role permissions"})]}),"\n",(0,s.jsxs)(t.li,{children:["Ensure that the IAM role of the EKS node has the following permissions:\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"AmazonEC2FullAccess"}),"\n",(0,s.jsx)(t.li,{children:"AmazonEKSWorkerNodePolicy"}),"\n",(0,s.jsx)(t.li,{children:"AmazonEKS_CNI_Policy"}),"\n",(0,s.jsx)(t.li,{children:"AmazonSSMManagedInstanceCore"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"compute-resource-pool-configuration",children:"Compute resource pool configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["AWS Resource Groups(recommended)",(0,s.jsx)(t.br,{}),"\nYou can create a node group in the cluster creation interface, or add a node group after the cluster is initialized. Use EC2 > Launch Template > Create Launch Template to set the node group launch template for the node pool. Use the template to inject scripts to automatically adjust the system environment configuration of the EC2 instance to ensure that the node automatically configures the required system parameters when it starts. By configuring the node template, you can also achieve the ability to automatically configure the system parameters of the newly added nodes when using EKS automatic elastic expansion and contraction.",(0,s.jsx)(t.br,{}),"\nExample startup script:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'#!/bin/bash\nchmod +x /etc/rc.d/rc.local\necho "sudo systemctl stop firewalld.service" >> /etc/rc.d/rc.local\necho "sudo systemctl disable firewalld.service" >> /etc/rc.d/rc.local\necho "sysctl -w vm.max_map_count=2000000" >> /etc/rc.d/rc.local\necho "swapoff -a" >> /etc/rc.d/rc.local\ncurrent_limit=$(ulimit -n)\ndesired_limit=1000000\nconfig_file="/etc/security/limits.conf"\nif [ "$current_limit" -ne "$desired_limit" ]; then\n  echo "* soft nofile 1000000" >> "$config_file"\n  echo "* hard nofile 1000000" >> "$config_file"\nfi\n'})}),"\n",(0,s.jsx)(t.p,{children:"In addition, when creating a node group, if you want to access it through the command line, you need to configure remote node access permissions."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Default node pools(not recommended)"}),"\n",(0,s.jsxs)(t.p,{children:["Enable the resource pool used in EKS autonomous mode. When creating a node pool, you can choose a custom EC2 instance type and adjust the instance's CPU, memory and other resources. When configuring the node pool, you can add a startup script for the EC2 instance to adjust the system parameters. However, this type of resource pool requires autonomous mode and reduces the freedom to manage the cluster. For details on the specific modification operations, please refer to: ",(0,s.jsx)(t.a,{href:"/docs/install/preparation/os-checking",children:"Cluster Environment OS Checking"})]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var o=n(667294);let s={},r=o.createContext(s);function i(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);