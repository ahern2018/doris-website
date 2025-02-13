"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["319212"],{975982:function(e,r,o){o.r(r),o.d(r,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>i,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"install/cluster-deployment/k8s-deploy/install-doris-operator","title":"\u90E8\u7F72 Doris Operator","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/install/cluster-deployment/k8s-deploy/install-doris-operator.md","sourceDirName":"install/cluster-deployment/k8s-deploy","slug":"/install/cluster-deployment/k8s-deploy/install-doris-operator","permalink":"/zh-CN/docs/install/cluster-deployment/k8s-deploy/install-doris-operator","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u90E8\u7F72 Doris Operator","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u624B\u52A8\u90E8\u7F72\u96C6\u7FA4","permalink":"/zh-CN/docs/install/deploy-manually/storage-compute-coupled-deploy-manually"},"next":{"title":"\u914D\u7F6E Doris \u96C6\u7FA4","permalink":"/zh-CN/docs/install/cluster-deployment/k8s-deploy/install-config-cluster"}}'),n=o("785893"),s=o("250065");let l={title:"\u90E8\u7F72 Doris Operator",language:"zh-CN"},a=void 0,i={},c=[{value:"\u7B2C 1 \u6B65\uFF1A\u5B89\u88C5 Doris Operator CRD",id:"\u7B2C-1-\u6B65\u5B89\u88C5-doris-operator-crd",level:2},{value:"\u7B2C 2 \u6B65\uFF1A\u90E8\u7F72 Doris Operator",id:"\u7B2C-2-\u6B65\u90E8\u7F72-doris-operator",level:2},{value:"\u7B2C 3 \u6B65\uFF1A\u68C0\u67E5 Doris Operator \u72B6\u6001",id:"\u7B2C-3-\u6B65\u68C0\u67E5-doris-operator-\u72B6\u6001",level:2}];function d(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"\u90E8\u7F72 Doris Operator \u5206\u4E3A\u5B89\u88C5\u5B9A\u4E49\uFF0C\u90E8\u7F72 Operator \u670D\u52A1\u4EE5\u53CA\u68C0\u67E5\u90E8\u7F72\u72B6\u6001\u4E09\u4E2A\u6B65\u9AA4\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u7B2C-1-\u6B65\u5B89\u88C5-doris-operator-crd",children:"\u7B2C 1 \u6B65\uFF1A\u5B89\u88C5 Doris Operator CRD"}),"\n",(0,n.jsx)(r.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u6DFB\u52A0 Doris Operator \u7684\u81EA\u5B9A\u4E49\u8D44\u6E90\uFF08CRD\uFF09\uFF1A"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"kubectl create -f https://raw.githubusercontent.com/apache/doris-operator/master/config/crd/bases/doris.apache.com_dorisclusters.yaml\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u7B2C-2-\u6B65\u90E8\u7F72-doris-operator",children:"\u7B2C 2 \u6B65\uFF1A\u90E8\u7F72 Doris Operator"}),"\n",(0,n.jsx)(r.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 Doris Operator\uFF1A"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/apache/doris-operator/master/config/operator/operator.yaml\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u671F\u671B\u8F93\u51FA\u7ED3\u679C\uFF1A"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"namespace/doris created\nrole.rbac.authorization.k8s.io/leader-election-role created\nrolebinding.rbac.authorization.k8s.io/leader-election-rolebinding created\nclusterrole.rbac.authorization.k8s.io/doris-operator created\nclusterrolebinding.rbac.authorization.k8s.io/doris-operator-rolebinding created\nserviceaccount/doris-operator created\ndeployment.apps/doris-operator created\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u7B2C-3-\u6B65\u68C0\u67E5-doris-operator-\u72B6\u6001",children:"\u7B2C 3 \u6B65\uFF1A\u68C0\u67E5 Doris Operator \u72B6\u6001"}),"\n",(0,n.jsx)(r.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5 Doris Operator \u7684\u90E8\u7F72\u72B6\u6001\uFF1A"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"kubectl get pods -n doris\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u671F\u671B\u8F93\u51FA\u7ED3\u679C\uFF1A"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"NAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-7f578c86cb-nz6jn   1/1     Running   0          19m\n"})})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return a},a:function(){return l}});var t=o(667294);let n={},s=t.createContext(n);function l(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);