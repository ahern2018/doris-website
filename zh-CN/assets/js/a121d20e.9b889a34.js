"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["171794"],{706506:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>t,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"install/cluster-deployment/k8s-deploy/compute-storage-coupled/access-cluster","title":"\u8BBF\u95EE Doris \u96C6\u7FA4","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/cluster-deployment/k8s-deploy/compute-storage-coupled/access-cluster.md","sourceDirName":"install/cluster-deployment/k8s-deploy/compute-storage-coupled","slug":"/install/cluster-deployment/k8s-deploy/compute-storage-coupled/access-cluster","permalink":"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-coupled/access-cluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u8BBF\u95EE Doris \u96C6\u7FA4","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u90E8\u7F72 Doris \u96C6\u7FA4","permalink":"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-cluster"},"next":{"title":"\u96C6\u7FA4\u8FD0\u7EF4","permalink":"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-coupled/cluster-operation"}}'),l=n("785893"),c=n("250065");let o={title:"\u8BBF\u95EE Doris \u96C6\u7FA4",language:"zh-CN"},t=void 0,i={},d=[{value:"ClusterIP \u6A21\u5F0F",id:"clusterip-\u6A21\u5F0F",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u83B7\u53D6 Service",id:"\u7B2C-1-\u6B65\u83B7\u53D6-service",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u8BBF\u95EE Doris",id:"\u7B2C-2-\u6B65\u8BBF\u95EE-doris",level:3},{value:"NodePort \u6A21\u5F0F",id:"nodeport-\u6A21\u5F0F",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u83B7\u53D6 Service",id:"\u7B2C-1-\u6B65\u83B7\u53D6-service-1",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u8BBF\u95EE Doris",id:"\u7B2C-2-\u6B65\u8BBF\u95EE-doris-1",level:3},{value:"LoadBalancer \u6A21\u5F0F",id:"loadbalancer-\u6A21\u5F0F",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u83B7\u53D6 Service",id:"\u7B2C-1-\u6B65\u83B7\u53D6-service-2",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u8BBF\u95EE Doris",id:"\u7B2C-2-\u6B65\u8BBF\u95EE-doris-2",level:3}];function a(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["Kubernetes \u901A\u8FC7 Service \u4F5C\u4E3A vip \u548C\u8D1F\u8F7D\u5747\u8861\u5668\u7684\u80FD\u529B\uFF0CService \u6709\u4E09\u79CD\u5BF9\u5916\u66B4\u6F0F\u6A21\u5F0F ",(0,l.jsx)(s.code,{children:"ClusterIP"})," \u3001 ",(0,l.jsx)(s.code,{children:"NodePort"})," \u3001 ",(0,l.jsx)(s.code,{children:"LoadBalancer"}),"\u3002"]}),"\n",(0,l.jsx)(s.h2,{id:"clusterip-\u6A21\u5F0F",children:"ClusterIP \u6A21\u5F0F"}),"\n",(0,l.jsxs)(s.p,{children:["Doris \u5728 Kubernetes \u4E0A\u9ED8\u8BA4\u4F7F\u7528 ",(0,l.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip",children:"ClusterIP \u8BBF\u95EE\u6A21\u5F0F"}),"\u3002ClusterIP \u8BBF\u95EE\u6A21\u5F0F\u5728 Kubernetes \u96C6\u7FA4\u5185\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5185\u90E8\u5730\u5740\uFF0C\u8BE5\u5730\u5740\u4F5C\u4E3A\u670D\u52A1\u5728 Kubernetes \u5185\u90E8\u7684\u3002\n\u9996\u6B21\u90E8\u7F72\u540E\uFF0C\u901A\u8FC7 MySQL \u534F\u8BAE\uFF0C\u4F7F\u7528 root \u7528\u6237\u65E0\u5BC6\u7801\u7684\u6A21\u5F0F\u8BBF\u95EE\u90E8\u7F72\u5982\u4E0B\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u7B2C-1-\u6B65\u83B7\u53D6-service",children:"\u7B2C 1 \u6B65\uFF1A\u83B7\u53D6 Service"}),"\n",(0,l.jsx)(s.p,{children:"\u90E8\u7F72\u96C6\u7FA4\u540E\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B Doris Operator \u66B4\u9732\u7684 service\uFF1A"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"kubectl -n doris get svc\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"NAME                              TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)                               AGE\ndoriscluster-sample-be-internal   ClusterIP   None          <none>        9050/TCP                              9m\ndoriscluster-sample-be-service    ClusterIP   10.1.68.128   <none>        9060/TCP,8040/TCP,9050/TCP,8060/TCP   9m\ndoriscluster-sample-fe-internal   ClusterIP   None          <none>        9030/TCP                              14m\ndoriscluster-sample-fe-service    ClusterIP   10.1.118.16   <none>        8030/TCP,9020/TCP,9030/TCP,9010/TCP   14m\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u5728\u4E0A\u8FF0\u7ED3\u679C\u4E2D\uFF0CFE \u4E0E BE \u5404\u81EA\u6709\u4E24\u7C7B Service\uFF0C\u5206\u522B\u4EE5 internal \u4E0E service \u4F5C\u4E3A\u540E\u7F00\uFF1A"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u4EE5 internal \u540E\u7F00\u7684 Service \u4EC5\u4F9B Doris \u5185\u90E8\u901A\u4FE1\u4F7F\u7528\uFF0C\u5982\u5FC3\u8DF3\uFF0C\u6570\u636E\u4EA4\u6362\u7B49\uFF0C\u4E0D\u5BF9\u5916\u66B4\u6F0F\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u4EE5 service \u540E\u7F00\u7684 Service \u7528\u4E8E\u8BBF\u95EE\u96C6\u7FA4\u670D\u52A1\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"\u7B2C-2-\u6B65\u8BBF\u95EE-doris",children:"\u7B2C 2 \u6B65\uFF1A\u8BBF\u95EE Doris"}),"\n",(0,l.jsx)(s.p,{children:"ClusterIP \u6A21\u5F0F\u53EA\u80FD\u5728 Kubernetes \u5185\u90E8\u4F7F\u7528\uFF0C\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u5728\u5F53\u524D\u7684 Kubernetes \u96C6\u7FA4\u4E2D\u521B\u5EFA\u4E00\u4E2A\u5305\u542B MySQL \u5BA2\u6237\u7AEF \u7684 Pod\uFF1A"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"kubectl run mysql-client --image=mysql:5.7 -it --rm --restart=Never --namespace=doris -- /bin/bash\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u5728\u5BB9\u5668\u5185\u90E8\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE\u5E26\u6709 ",(0,l.jsx)(s.code,{children:"service"})," \u540E\u7F00\u7684 Service \u540D\u79F0\u8FDE\u63A5 Doris \u96C6\u7FA4\uFF1A"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"mysql -uroot -P9030 -hdoriscluster-sample-fe-service\n"})}),"\n",(0,l.jsx)(s.h2,{id:"nodeport-\u6A21\u5F0F",children:"NodePort \u6A21\u5F0F"}),"\n",(0,l.jsxs)(s.p,{children:["\u6309\u7167 DorisCluster \u8BBF\u95EE\u914D\u7F6E\u7AE0\u8282\uFF0C",(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-config-cluster#nodeport",children:"\u914D\u7F6E\u4F7F\u7528 NodePort \u8BBF\u95EE\u6A21\u5F0F"}),"\u540E\uFF0C\u4F7F\u7528 MySQL \u534F\u8BAE\uFF0C\u901A\u8FC7 root \u65E0\u5BC6\u7801\u6A21\u5F0F\u8BBF\u95EE FE \u6B65\u9AA4\u5982\u4E0B\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u7B2C-1-\u6B65\u83B7\u53D6-service-1",children:"\u7B2C 1 \u6B65\uFF1A\u83B7\u53D6 Service"}),"\n",(0,l.jsxs)(s.p,{children:["\u96C6\u7FA4\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B ",(0,l.jsx)(s.code,{children:"Service"})," \uFF1A"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"kubectl get service\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"NAME                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                       AGE\nkubernetes                        ClusterIP   10.152.183.1     <none>        443/TCP                                                       169d\ndoriscluster-sample-fe-internal   ClusterIP   None             <none>        9030/TCP                                                      2d\ndoriscluster-sample-fe-service    NodePort    10.152.183.58    <none>        8030:31041/TCP,9020:30783/TCP,9030:31545/TCP,9010:31610/TCP   2d\ndoriscluster-sample-be-internal   ClusterIP   None             <none>        9050/TCP                                                      2d\ndoriscluster-sample-be-service    NodePort    10.152.183.244   <none>        9060:30940/TCP,8040:32713/TCP,9050:30621/TCP,8060:30926/TCP   2d\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u7B2C-2-\u6B65\u8BBF\u95EE-doris-1",children:"\u7B2C 2 \u6B65\uFF1A\u8BBF\u95EE Doris"}),"\n",(0,l.jsx)(s.p,{children:"\u4EE5 mysql \u8FDE\u63A5\u4E3A\u4F8B\uFF0CDoris \u7684 Query Port \u9ED8\u8BA4\u7AEF\u53E3 9030\uFF0C\u5728\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0C\u7AEF\u53E3  9030 \u88AB\u6620\u5C04\u5230\u672C\u5730\u7AEF\u53E3 31545\u3002\u8981\u8BBF\u95EE Doris \u96C6\u7FA4\uFF0C\u9700\u8981\u83B7\u53D6\u5230\u96C6\u7FA4\u7684\u8282\u70B9 IP \u5730\u5740\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\uFF1A"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"kubectl get nodes -owide\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"NAME   STATUS   ROLES           AGE   VERSION   INTERNAL-IP     EXTERNAL-IP   OS-IMAGE          KERNEL-VERSION          CONTAINER-RUNTIME\nr60    Ready    control-plane   14d   v1.28.2   192.168.88.60   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\nr61    Ready    <none>          14d   v1.28.2   192.168.88.61   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\nr62    Ready    <none>          14d   v1.28.2   192.168.88.62   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\nr63    Ready    <none>          14d   v1.28.2   192.168.88.63   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u5728 NodePort \u6A21\u5F0F\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EFB\u610F node \u8282\u70B9\u7684 IP \u5730\u5740\u4E0E\u6620\u5C04\u7684\u5BBF\u4E3B\u673A\u7AEF\u53E3\u65B9\u4F4D Kubernetes \u96C6\u7FA4\u5185\u7684\u670D\u52A1\u3002\u5728\u672C\u4F8B\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7684 node \u8282\u70B9 IP \u5305\u62EC 192.168.88.61\u3001192.168.88.62\u3001192.168.88.63\u3002\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u8282\u70B9 192.168.88.62 \u548C ",(0,l.jsx)(s.code,{children:"query port"})," \u6620\u5C04\u7684\u5BBF\u4E3B\u673A\u7AEF\u53E3 31545 \u8FDE\u63A5 Doris\uFF1A"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"mysql -h 192.168.88.62 -P 31545 -uroot\n"})}),"\n",(0,l.jsx)(s.h2,{id:"loadbalancer-\u6A21\u5F0F",children:"LoadBalancer \u6A21\u5F0F"}),"\n",(0,l.jsxs)(s.p,{children:["\u6309\u7167 DorisCluster \u8BBF\u95EE\u914D\u7F6E\u7AE0\u8282\uFF0C\u5728\u516C\u6709\u4E91\u4E0A\uFF0C",(0,l.jsx)(s.a,{href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-config-cluster#loadbalancer",children:"\u914D\u7F6E\u4F7F\u7528 LoadBalancer \u8BBF\u95EE\u6A21\u5F0F"}),"\u540E\uFF0C\u4F7F\u7528 MySQL \u534F\u8BAE\uFF0C\u901A\u8FC7 root \u65E0\u5BC6\u7801\u6A21\u5F0F\u8BBF\u95EE FE \u6B65\u9AA4\u5982\u4E0B\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u7B2C-1-\u6B65\u83B7\u53D6-service-2",children:"\u7B2C 1 \u6B65\uFF1A\u83B7\u53D6 Service"}),"\n",(0,l.jsxs)(s.p,{children:["\u5728\u90E8\u7F72\u96C6\u7FA4\u540E\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u53EF\u8BBF\u95EE ",(0,l.jsx)(s.code,{children:"Doris"})," \u7684 ",(0,l.jsx)(s.code,{children:"Service"}),"\uFF1A"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"kubectl get service\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"NAME                              TYPE           CLUSTER-IP       EXTERNAL-IP                                                                     PORT(S)                                                       AGE\nkubernetes                        ClusterIP      10.152.183.1     <none>                                                                          443/TCP                                                       169d\ndoriscluster-sample-fe-internal   ClusterIP      None             <none>                                                                          9030/TCP                                                      2d\ndoriscluster-sample-fe-service    LoadBalancer   10.152.183.58    ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com         8030:31041/TCP,9020:30783/TCP,9030:31545/TCP,9010:31610/TCP   2d\ndoriscluster-sample-be-internal   ClusterIP      None             <none>                                                                          9050/TCP                                                      2d\ndoriscluster-sample-be-service    LoadBalancer   10.152.183.244   ac4828493dgrftb884g67wg4tb68gyut-1137823345.us-east-1.elb.amazonaws.com         9060:30940/TCP,8040:32713/TCP,9050:30621/TCP,8060:30926/TCP   2d\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u7B2C-2-\u6B65\u8BBF\u95EE-doris-2",children:"\u7B2C 2 \u6B65\uFF1A\u8BBF\u95EE Doris"}),"\n",(0,l.jsx)(s.p,{children:"\u4EE5 MySQL \u8FDE\u63A5\u4E3A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"mysql -h ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com -P 31545 -uroot\n"})})]})}function u(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return o}});var r=n(667294);let l={},c=r.createContext(l);function o(e){let s=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);