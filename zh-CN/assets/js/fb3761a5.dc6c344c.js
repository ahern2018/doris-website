"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["445145"],{666361:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>m,assets:()=>a,toc:()=>o,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/ALTER-RESOURCE","title":"ALTER RESOURCE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/cluster-management/compute-management/ALTER-RESOURCE.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/ALTER-RESOURCE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/ALTER-RESOURCE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ALTER RESOURCE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE RESOURCE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE"},"next":{"title":"DROP RESOURCE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/DROP-RESOURCE"}}'),t=s("785893"),c=s("250065");let r={title:"ALTER RESOURCE",language:"zh-CN"},i=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4FEE\u6539\u4E00\u4E2A\u5DF2\u6709\u7684\u8D44\u6E90\u3002\u4EC5 root \u6216 admin \u7528\u6237\u53EF\u4EE5\u4FEE\u6539\u8D44\u6E90\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER RESOURCE '<resource_name>'\nPROPERTIES (\n  `<property>`, \n  [ , ... ]\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["1.",(0,t.jsx)(n.code,{children:"<property>"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<property>"})," \u683C\u5F0F\u4E3A ",(0,t.jsx)(n.code,{children:"<key>"})," = ",(0,t.jsx)(n.code,{children:"<value>"}),"\uFF0C\u4E0D\u652F\u6301\u4FEE\u6539",(0,t.jsx)(n.code,{children:"<key>"}),"\u7B49\u4E8E type \u7684",(0,t.jsx)(n.code,{children:"<value>"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4ED6\u53EF\u4FEE\u6539\u7684 properties \u53C2\u6570\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE",children:"CREATE-RESOURCE"})," \u7AE0\u8282;"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u4FEE\u6539\u540D\u4E3A spark0 \u7684 Spark \u8D44\u6E90\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER RESOURCE \'spark0\' PROPERTIES ("working_dir" = "hdfs://127.0.0.1:10000/tmp/doris_new");\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u4FEE\u6539\u540D\u4E3A remote_s3 \u7684 S3 \u8D44\u6E90\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER RESOURCE \'remote_s3\' PROPERTIES ("s3.connection.maximum" = "100");\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u4FEE\u6539\u51B7\u70ED\u5206\u5C42 S3 \u8D44\u6E90\u76F8\u5173\u4FE1\u606F"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u652F\u6301\u4FEE\u6539\u9879\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.access_key"})," s3 \u7684 ak \u4FE1\u606F"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.secret_key"})," s3 \u7684 sk \u4FE1\u606F"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.session_token"})," s3 \u7684 session token \u4FE1\u606F"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.connection.maximum"})," s3 \u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u9ED8\u8BA4 50"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.connection.timeout"})," s3 \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4 1000ms"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s3.connection.request.timeout"})," s3 \u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4 3000ms"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u7981\u6B62\u4FEE\u6539\u9879\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"s3.region"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'s3.bucket"'})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"s3.root.path"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"s3.endpoint"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'  ALTER RESOURCE "showPolicy_1_resource" PROPERTIES("s3.connection.maximum" = "1111");\n'})})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var l=s(667294);let t={},c=l.createContext(t);function r(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);