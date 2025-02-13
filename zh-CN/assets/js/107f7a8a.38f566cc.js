"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["771396"],{157909:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>c,assets:()=>l,toc:()=>h,frontMatter:()=>a});var r=JSON.parse('{"id":"admin-manual/maint-monitor/monitor-alert","title":"\u76D1\u63A7\u548C\u62A5\u8B66","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/maint-monitor/monitor-alert.md","sourceDirName":"admin-manual/maint-monitor","slug":"/admin-manual/maint-monitor/monitor-alert","permalink":"/zh-CN/docs/3.0/admin-manual/maint-monitor/monitor-alert","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u76D1\u63A7\u548C\u62A5\u8B66","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u76D1\u63A7\u6307\u6807","permalink":"/zh-CN/docs/3.0/admin-manual/maint-monitor/metrics"},"next":{"title":"\u78C1\u76D8\u7A7A\u95F4\u7BA1\u7406","permalink":"/zh-CN/docs/3.0/admin-manual/maint-monitor/disk-capacity"}}'),i=s("785893"),t=s("250065");let a={title:"\u76D1\u63A7\u548C\u62A5\u8B66",language:"zh-CN"},d="\u76D1\u63A7\u548C\u62A5\u8B66",l={},h=[{value:"\u7EC4\u4EF6",id:"\u7EC4\u4EF6",level:2},{value:"\u76D1\u63A7\u6570\u636E",id:"\u76D1\u63A7\u6570\u636E",level:2},{value:"\u76D1\u63A7\u67B6\u6784",id:"\u76D1\u63A7\u67B6\u6784",level:2},{value:"\u5F00\u59CB\u642D\u5EFA",id:"\u5F00\u59CB\u642D\u5EFA",level:2},{value:"Prometheus",id:"prometheus",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Dashboard \u8BF4\u660E",id:"dashboard-\u8BF4\u660E",level:2},{value:"Dashboard \u66F4\u65B0",id:"dashboard-\u66F4\u65B0",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u76D1\u63A7\u548C\u62A5\u8B66",children:"\u76D1\u63A7\u548C\u62A5\u8B66"})}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD Doris \u7684\u76D1\u63A7\u9879\u53CA\u5982\u4F55\u91C7\u96C6\u3001\u5C55\u793A\u76D1\u63A7\u9879\u3002\u4EE5\u53CA\u5982\u4F55\u914D\u7F6E\u62A5\u8B66\uFF08TODO\uFF09"}),"\n",(0,i.jsx)(n.p,{children:"Dashboard \u6A21\u677F\u70B9\u51FB\u4E0B\u8F7D"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Doris \u7248\u672C"}),(0,i.jsx)(n.th,{children:"Dashboard \u7248\u672C"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.2.x"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://grafana.com/api/dashboards/9734/revisions/5/download",children:"revision 5"})})]})})]}),"\n",(0,i.jsx)(n.p,{children:"Dashboard \u6A21\u677F\u4F1A\u4E0D\u5B9A\u671F\u66F4\u65B0\u3002\u66F4\u65B0\u6A21\u677F\u7684\u65B9\u5F0F\u89C1\u6700\u540E\u4E00\u5C0F\u8282\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6B22\u8FCE\u63D0\u4F9B\u66F4\u4F18\u7684 dashboard\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7EC4\u4EF6",children:"\u7EC4\u4EF6"}),"\n",(0,i.jsxs)(n.p,{children:["Doris \u4F7F\u7528 ",(0,i.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," \u548C ",(0,i.jsx)(n.a,{href:"https://grafana.com/",children:"Grafana"})," \u8FDB\u884C\u76D1\u63A7\u9879\u7684\u91C7\u96C6\u548C\u5C55\u793A\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u7EC4\u4EF6",src:s(39765).Z+"",width:"1829",height:"982"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Prometheus"}),"\n",(0,i.jsx)(n.p,{children:"Prometheus \u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u7CFB\u7EDF\u76D1\u63A7\u548C\u62A5\u8B66\u5957\u4EF6\u3002\u5B83\u53EF\u4EE5\u901A\u8FC7 Pull \u6216 Push \u91C7\u96C6\u88AB\u76D1\u63A7\u7CFB\u7EDF\u7684\u76D1\u63A7\u9879\uFF0C\u5B58\u5165\u81EA\u8EAB\u7684\u65F6\u5E8F\u6570\u636E\u5E93\u4E2D\u3002\u5E76\u4E14\u901A\u8FC7\u4E30\u5BCC\u7684\u591A\u7EF4\u6570\u636E\u67E5\u8BE2\u8BED\u8A00\uFF0C\u6EE1\u8DB3\u7528\u6237\u7684\u4E0D\u540C\u6570\u636E\u5C55\u793A\u9700\u6C42\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Grafana"}),"\n",(0,i.jsx)(n.p,{children:"Grafana \u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u6570\u636E\u5206\u6790\u548C\u5C55\u793A\u5E73\u53F0\u3002\u652F\u6301\u5305\u62EC Prometheus \u5728\u5185\u7684\u591A\u4E2A\u4E3B\u6D41\u65F6\u5E8F\u6570\u636E\u5E93\u6E90\u3002\u901A\u8FC7\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u67E5\u8BE2\u8BED\u53E5\uFF0C\u4ECE\u6570\u636E\u6E90\u4E2D\u83B7\u53D6\u5C55\u73B0\u6570\u636E\u3002\u901A\u8FC7\u7075\u6D3B\u53EF\u914D\u7F6E\u7684 Dashboard\uFF0C\u5FEB\u901F\u7684\u5C06\u8FD9\u4E9B\u6570\u636E\u4EE5\u56FE\u8868\u7684\u5F62\u5F0F\u5C55\u793A\u7ED9\u7528\u6237\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6CE8\uFF1A\u672C\u6587\u6863\u4EC5\u63D0\u4F9B\u4E00\u79CD\u4F7F\u7528 Prometheus \u548C Grafana \u8FDB\u884C Doris \u76D1\u63A7\u6570\u636E\u91C7\u96C6\u548C\u5C55\u793A\u7684\u65B9\u5F0F\u3002\u539F\u5219\u4E0A\u4E0D\u5F00\u53D1\u3001\u7EF4\u62A4\u8FD9\u4E9B\u7EC4\u4EF6\u3002\u66F4\u591A\u5173\u4E8E\u8FD9\u4E9B\u7EC4\u4EF6\u7684\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u8BF7\u79FB\u6B65\u5BF9\u5E94\u5B98\u65B9\u6587\u6863\u8FDB\u884C\u67E5\u9605\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u76D1\u63A7\u6570\u636E",children:"\u76D1\u63A7\u6570\u636E"}),"\n",(0,i.jsx)(n.p,{children:"Doris \u7684\u76D1\u63A7\u6570\u636E\u901A\u8FC7 Frontend \u548C Backend \u7684 http \u63A5\u53E3\u5411\u5916\u66B4\u9732\u3002\u76D1\u63A7\u6570\u636E\u4EE5 Key-Value \u7684\u6587\u672C\u5F62\u5F0F\u5BF9\u5916\u5C55\u73B0\u3002\u6BCF\u4E2A Key \u8FD8\u53EF\u80FD\u6709\u4E0D\u540C\u7684 Label \u52A0\u4EE5\u533A\u5206\u3002\u5F53\u7528\u6237\u642D\u5EFA\u597D Doris \u540E\uFF0C\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u63A5\u53E3\u8BBF\u95EE\u5230\u8282\u70B9\u7684\u76D1\u63A7\u6570\u636E\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Frontend: ",(0,i.jsx)(n.code,{children:"fe_host:fe_http_port/metrics"})]}),"\n",(0,i.jsxs)(n.li,{children:["Backend: ",(0,i.jsx)(n.code,{children:"be_host:be_web_server_port/metrics"})]}),"\n",(0,i.jsx)(n.li,{children:"Broker: \u6682\u4E0D\u63D0\u4F9B"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u5C06\u770B\u5230\u5982\u4E0B\u76D1\u63A7\u9879\u7ED3\u679C\uFF08\u793A\u4F8B\u4E3A FE \u90E8\u5206\u76D1\u63A7\u9879\uFF09\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 8476557312\njvm_heap_size_bytes{type="committed"} 1007550464\njvm_heap_size_bytes{type="used"} 156375280\n# HELP  jvm_non_heap_size_bytes jvm non heap stat\n# TYPE  jvm_non_heap_size_bytes gauge\njvm_non_heap_size_bytes{type="committed"} 194379776\njvm_non_heap_size_bytes{type="used"} 188201864\n# HELP  jvm_young_size_bytes jvm young mem pool stat\n# TYPE  jvm_young_size_bytes gauge\njvm_young_size_bytes{type="used"} 40652376\njvm_young_size_bytes{type="peak_used"} 277938176\njvm_young_size_bytes{type="max"} 907345920\n# HELP  jvm_old_size_bytes jvm old mem pool stat\n# TYPE  jvm_old_size_bytes gauge\njvm_old_size_bytes{type="used"} 114633448\njvm_old_size_bytes{type="peak_used"} 114633448\njvm_old_size_bytes{type="max"} 7455834112\n# HELP  jvm_gc jvm gc stat\n# TYPE  jvm_gc gauge\n<GarbageCollector>{type="count"} 247\n<GarbageCollector>{type="time"} 860\n# HELP  jvm_thread jvm thread stat\n# TYPE  jvm_thread gauge\njvm_thread{type="count"} 162\njvm_thread{type="peak_count"} 205\njvm_thread{type="new_count"} 0\njvm_thread{type="runnable_count"} 48\njvm_thread{type="blocked_count"} 1\njvm_thread{type="waiting_count"} 41\njvm_thread{type="timed_waiting_count"} 72\njvm_thread{type="terminated_count"} 0\n...\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u662F\u4E00\u4E2A\u4EE5 ",(0,i.jsx)(n.a,{href:"https://prometheus.io/docs/practices/naming/",children:"Prometheus \u683C\u5F0F"})," \u5448\u73B0\u7684\u76D1\u63A7\u6570\u636E\u3002\u6211\u4EEC\u4EE5\u5176\u4E2D\u4E00\u4E2A\u76D1\u63A7\u9879\u4E3A\u4F8B\u8FDB\u884C\u8BF4\u660E\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 8476557312\njvm_heap_size_bytes{type="committed"} 1007550464\njvm_heap_size_bytes{type="used"} 156375280\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:['"#" \u5F00\u5934\u7684\u884C\u4E3A\u6CE8\u91CA\u884C\u3002\u5176\u4E2D HELP \u4E3A\u8BE5\u76D1\u63A7\u9879\u7684\u63CF\u8FF0\u8BF4\u660E\uFF1BTYPE \u8868\u793A\u8BE5\u76D1\u63A7\u9879\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u793A\u4F8B\u4E2D\u4E3A Gauge\uFF0C\u5373\u6807\u91CF\u6570\u636E\u3002\u8FD8\u6709 Counter\u3001Histogram \u7B49\u6570\u636E\u7C7B\u578B\u3002\u5177\u4F53\u53EF\u89C1 ',(0,i.jsx)(n.a,{href:"https://prometheus.io/docs/practices/instrumentation/#counter-vs.-gauge,-summary-vs.-histogram",children:"Prometheus \u5B98\u65B9\u6587\u6863"})," \u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"jvm_heap_size_bytes"})," \u5373\u76D1\u63A7\u9879\u7684\u540D\u79F0\uFF08Key\uFF09\uFF1B",(0,i.jsx)(n.code,{children:'type="max"'})," \u5373\u4E3A\u4E00\u4E2A\u540D\u4E3A ",(0,i.jsx)(n.code,{children:"type"})," \u7684 Label\uFF0C\u503C\u4E3A ",(0,i.jsx)(n.code,{children:"max"}),"\u3002\u4E00\u4E2A\u76D1\u63A7\u9879\u53EF\u4EE5\u6709\u591A\u4E2A Label\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6700\u540E\u7684\u6570\u5B57\uFF0C\u5982 ",(0,i.jsx)(n.code,{children:"8476557312"}),"\uFF0C\u5373\u4E3A\u76D1\u63A7\u6570\u503C\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u76D1\u63A7\u67B6\u6784",children:"\u76D1\u63A7\u67B6\u6784"}),"\n",(0,i.jsx)(n.p,{children:"\u6574\u4E2A\u76D1\u63A7\u67B6\u6784\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u76D1\u63A7\u67B6\u6784",src:s(735262).Z+"",width:"410",height:"373"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9EC4\u8272\u90E8\u5206\u4E3A Prometheus \u76F8\u5173\u7EC4\u4EF6\u3002Prometheus Server \u4E3A Prometheus \u7684\u4E3B\u8FDB\u7A0B\uFF0C\u76EE\u524D Prometheus \u901A\u8FC7 Pull \u7684\u65B9\u5F0F\u8BBF\u95EE Doris \u8282\u70B9\u7684\u76D1\u63A7\u63A5\u53E3\uFF0C\u7136\u540E\u5C06\u65F6\u5E8F\u6570\u636E\u5B58\u5165\u65F6\u5E8F\u6570\u636E\u5E93 TSDB \u4E2D\uFF08TSDB \u5305\u542B\u5728 Prometheus \u8FDB\u7A0B\u4E2D\uFF0C\u65E0\u9700\u5355\u72EC\u90E8\u7F72\uFF09\u3002Prometheus \u4E5F\u652F\u6301\u901A\u8FC7\u642D\u5EFA ",(0,i.jsx)(n.a,{href:"https://github.com/prometheus/pushgateway",children:"Push Gateway"})," \u7684\u65B9\u5F0F\uFF0C\u5141\u8BB8\u88AB\u76D1\u63A7\u7CFB\u7EDF\u5C06\u76D1\u63A7\u6570\u636E\u901A\u8FC7 Push \u7684\u65B9\u5F0F\u63A8\u5230 Push Gateway, \u518D\u7531 Prometheus Server \u901A\u8FC7 Pull \u7684\u65B9\u5F0F\u4ECE Push Gateway \u4E2D\u83B7\u53D6\u6570\u636E\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/prometheus/alertmanager",children:"Alert Manager"})," \u4E3A Prometheus \u62A5\u8B66\u7EC4\u4EF6\uFF0C\u9700\u5355\u72EC\u90E8\u7F72\uFF08\u6682\u4E0D\u63D0\u4F9B\u65B9\u6848\uFF0C\u53EF\u53C2\u7167\u5B98\u65B9\u6587\u6863\u81EA\u884C\u642D\u5EFA\uFF09\u3002\u901A\u8FC7 Alert Manager\uFF0C\u7528\u6237\u53EF\u4EE5\u914D\u7F6E\u62A5\u8B66\u7B56\u7565\uFF0C\u63A5\u6536\u90AE\u4EF6\u3001\u77ED\u4FE1\u7B49\u62A5\u8B66\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u7EFF\u8272\u90E8\u5206\u4E3A Grafana \u76F8\u5173\u7EC4\u4EF6\u3002Grafana Server \u4E3A Grafana \u7684\u4E3B\u8FDB\u7A0B\u3002\u542F\u52A8\u540E\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 Web \u9875\u9762\u5BF9 Grafana \u8FDB\u884C\u914D\u7F6E\uFF0C\u5305\u62EC\u6570\u636E\u6E90\u7684\u8BBE\u7F6E\u3001\u7528\u6237\u8BBE\u7F6E\u3001Dashboard \u7ED8\u5236\u7B49\u3002\u8FD9\u91CC\u4E5F\u662F\u6700\u7EC8\u7528\u6237\u67E5\u770B\u76D1\u63A7\u6570\u636E\u7684\u5730\u65B9\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5F00\u59CB\u642D\u5EFA",children:"\u5F00\u59CB\u642D\u5EFA"}),"\n",(0,i.jsx)(n.p,{children:"\u8BF7\u5728\u5B8C\u6210 Doris \u7684\u90E8\u7F72\u540E\uFF0C\u5F00\u59CB\u642D\u5EFA\u76D1\u63A7\u7CFB\u7EDF\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"prometheus",children:"Prometheus"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.a,{href:"https://prometheus.io/download/",children:"Prometheus \u5B98\u7F51"})," \u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u7684 Prometheus\u3002\u8FD9\u91CC\u6211\u4EEC\u4EE5 2.43.0-linux-amd64 \u7248\u672C\u4E3A\u4F8B\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u51C6\u5907\u8FD0\u884C\u76D1\u63A7\u670D\u52A1\u7684\u673A\u5668\u4E0A\uFF0C\u89E3\u538B\u4E0B\u8F7D\u540E\u7684 tar \u6587\u4EF6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6253\u5F00\u914D\u7F6E\u6587\u4EF6 prometheus.yml\u3002\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u793A\u4F8B\u914D\u7F6E\u5E76\u52A0\u4EE5\u8BF4\u660E\uFF08\u914D\u7F6E\u6587\u4EF6\u4E3A yml \u683C\u5F0F\uFF0C\u4E00\u5B9A\u6CE8\u610F\u7EDF\u4E00\u7684\u7F29\u8FDB\u548C\u7A7A\u683C\uFF09\uFF1A"}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u6700\u7B80\u5355\u7684\u9759\u6001\u6587\u4EF6\u7684\u65B9\u5F0F\u8FDB\u884C\u76D1\u63A7\u914D\u7F6E\u3002Prometheus \u652F\u6301\u591A\u79CD ",(0,i.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/",children:"\u670D\u52A1\u53D1\u73B0"})," \u65B9\u5F0F\uFF0C\u53EF\u4EE5\u52A8\u6001\u7684\u611F\u77E5\u8282\u70B9\u7684\u52A0\u5165\u548C\u5220\u9664\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# my global config\nglobal:\n  scrape_interval:     15s # \u5168\u5C40\u7684\u91C7\u96C6\u95F4\u9694\uFF0C\u9ED8\u8BA4\u662F 1m\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A 15s\n  evaluation_interval: 15s # \u5168\u5C40\u7684\u89C4\u5219\u89E6\u53D1\u95F4\u9694\uFF0C\u9ED8\u8BA4\u662F 1m\uFF0C\u8FD9\u91CC\u8BBE\u7F6E 15s\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      # - alertmanager:9093\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'DORIS_CLUSTER' # \u6BCF\u4E00\u4E2A Doris \u96C6\u7FA4\uFF0C\u6211\u4EEC\u79F0\u4E3A\u4E00\u4E2A job\u3002\u8FD9\u91CC\u53EF\u4EE5\u7ED9 job \u53D6\u4E00\u4E2A\u540D\u5B57\uFF0C\u4F5C\u4E3A Doris \u96C6\u7FA4\u5728\u76D1\u63A7\u7CFB\u7EDF\u4E2D\u7684\u540D\u5B57\u3002\n    metrics_path: '/metrics' # \u8FD9\u91CC\u6307\u5B9A\u83B7\u53D6\u76D1\u63A7\u9879\u7684 restful api\u3002\u914D\u5408\u4E0B\u9762\u7684 targets \u4E2D\u7684 host:port\uFF0CPrometheus \u6700\u7EC8\u4F1A\u901A\u8FC7 host:port/metrics_path \u6765\u91C7\u96C6\u76D1\u63A7\u9879\u3002\n    static_configs: # \u8FD9\u91CC\u5F00\u59CB\u5206\u522B\u914D\u7F6E FE \u548C BE \u7684\u76EE\u6807\u5730\u5740\u3002\u6240\u6709\u7684 FE \u548C BE \u90FD\u5206\u522B\u5199\u5165\u5404\u81EA\u7684 group \u4E2D\u3002\n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe # \u8FD9\u91CC\u914D\u7F6E\u4E86 fe \u7684 group\uFF0C\u8BE5 group \u4E2D\u5305\u542B\u4E86 3 \u4E2A Frontends\n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be # \u8FD9\u91CC\u914D\u7F6E\u4E86 be \u7684 group\uFF0C\u8BE5 group \u4E2D\u5305\u542B\u4E86 3 \u4E2A Backends\n\n  - job_name: 'DORIS_CLUSTER_2' # \u6211\u4EEC\u53EF\u4EE5\u5728\u4E00\u4E2A Prometheus \u4E2D\u76D1\u63A7\u591A\u4E2A Doris \u96C6\u7FA4\uFF0C\u8FD9\u91CC\u5F00\u59CB\u53E6\u4E00\u4E2A Doris \u96C6\u7FA4\u7684\u914D\u7F6E\u3002\u914D\u7F6E\u540C\u4E0A\uFF0C\u4EE5\u4E0B\u7565\u3002\n    metrics_path: '/metrics'\n    static_configs: \n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe \n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be \n              \n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8 Prometheus"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8 Prometheus\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'nohup ./prometheus --web.listen-address="0.0.0.0:8181" &'})}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u547D\u4EE4\u5C06\u540E\u53F0\u8FD0\u884C Prometheus\uFF0C\u5E76\u6307\u5B9A\u5176 web \u7AEF\u53E3\u4E3A 8181\u3002\u542F\u52A8\u540E\uFF0C\u5373\u5F00\u59CB\u91C7\u96C6\u6570\u636E\uFF0C\u5E76\u5C06\u6570\u636E\u5B58\u653E\u5728 data \u76EE\u5F55\u4E2D\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u505C\u6B62 Prometheus"}),"\n",(0,i.jsx)(n.p,{children:"\u76EE\u524D\u6CA1\u6709\u53D1\u73B0\u6B63\u5F0F\u7684\u8FDB\u7A0B\u505C\u6B62\u65B9\u5F0F\uFF0C\u76F4\u63A5 kill -9 \u5373\u53EF\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u5C06 Prometheus \u8BBE\u4E3A\u4E00\u79CD service\uFF0C\u4EE5 service \u7684\u65B9\u5F0F\u542F\u505C\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8BBF\u95EE Prometheus"}),"\n",(0,i.jsxs)(n.p,{children:["Prometheus \u53EF\u4EE5\u901A\u8FC7 web \u9875\u9762\u8FDB\u884C\u7B80\u5355\u7684\u8BBF\u95EE\u3002\u901A\u8FC7\u6D4F\u89C8\u5668\u6253\u5F00 8181 \u7AEF\u53E3\uFF0C\u5373\u53EF\u8BBF\u95EE Prometheus \u7684\u9875\u9762\u3002\u70B9\u51FB\u5BFC\u822A\u680F\u4E2D\uFF0C",(0,i.jsx)(n.code,{children:"Status"})," -> ",(0,i.jsx)(n.code,{children:"Targets"}),"\uFF0C\u53EF\u4EE5\u770B\u5230\u6240\u6709\u5206\u7EC4 Job \u7684\u76D1\u63A7\u4E3B\u673A\u8282\u70B9\u3002\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u8282\u70B9\u90FD\u5E94\u4E3A ",(0,i.jsx)(n.code,{children:"UP"}),"\uFF0C\u8868\u793A\u6570\u636E\u91C7\u96C6\u6B63\u5E38\u3002\u70B9\u51FB\u67D0\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"Endpoint"}),"\uFF0C\u5373\u53EF\u770B\u5230\u5F53\u524D\u7684\u76D1\u63A7\u6570\u503C\u3002\u5982\u679C\u8282\u70B9\u72B6\u6001\u4E0D\u4E3A UP\uFF0C\u53EF\u4EE5\u5148\u8BBF\u95EE Doris \u7684 metrics \u63A5\u53E3\uFF08\u89C1\u524D\u6587\uFF09\u68C0\u67E5\u662F\u5426\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u6216\u67E5\u8BE2 Prometheus \u76F8\u5173\u6587\u6863\u5C1D\u8BD5\u89E3\u51B3\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u81F3\u6B64\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684 Prometheus \u5DF2\u7ECF\u642D\u5EFA\u3001\u914D\u7F6E\u5B8C\u6BD5\u3002\u66F4\u591A\u9AD8\u7EA7\u4F7F\u7528\u65B9\u5F0F\uFF0C\u8BF7\u53C2\u9605 ",(0,i.jsx)(n.a,{href:"https://prometheus.io/docs/introduction/overview/",children:"\u5B98\u65B9\u6587\u6863"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"grafana",children:"Grafana"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.a,{href:"https://grafana.com/grafana/download",children:"Grafana \u5B98\u7F51"})," \u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u7684 Grafana\u3002\u8FD9\u91CC\u6211\u4EEC\u4EE5 8.5.22.linux-amd64 \u7248\u672C\u4E3A\u4F8B\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u51C6\u5907\u8FD0\u884C\u76D1\u63A7\u670D\u52A1\u7684\u673A\u5668\u4E0A\uFF0C\u89E3\u538B\u4E0B\u8F7D\u540E\u7684 tar \u6587\u4EF6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6253\u5F00\u914D\u7F6E\u6587\u4EF6 conf/defaults.ini\u3002\u8FD9\u91CC\u6211\u4EEC\u4EC5\u5217\u4E3E\u9700\u8981\u6539\u52A8\u7684\u914D\u7F6E\u9879\uFF0C\u5176\u4F59\u914D\u7F6E\u53EF\u4F7F\u7528\u9ED8\u8BA4\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)\ndata = data\n\n# Directory where grafana can store logs\nlogs = data/log\n\n# Protocol (http, https, socket)\nprotocol = http\n\n# The ip address to bind to, empty will bind to all interfaces\nhttp_addr =\n\n# The http port to use\nhttp_port = 8182\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8 Grafana"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8 Grafana"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"nohup ./bin/grafana-server &"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u547D\u4EE4\u5C06\u540E\u53F0\u8FD0\u884C Grafana\uFF0C\u8BBF\u95EE\u7AEF\u53E3\u4E3A\u4E0A\u9762\u914D\u7F6E\u7684 8182"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u505C\u6B62 Grafana"}),"\n",(0,i.jsx)(n.p,{children:"\u76EE\u524D\u6CA1\u6709\u53D1\u73B0\u6B63\u5F0F\u7684\u8FDB\u7A0B\u505C\u6B62\u65B9\u5F0F\uFF0C\u76F4\u63A5 kill -9 \u5373\u53EF\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u5C06 Grafana \u8BBE\u4E3A\u4E00\u79CD service\uFF0C\u4EE5 service \u7684\u65B9\u5F0F\u542F\u505C\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8BBF\u95EE Grafana"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u6D4F\u89C8\u5668\uFF0C\u6253\u5F00 8182 \u7AEF\u53E3\uFF0C\u53EF\u4EE5\u5F00\u59CB\u8BBF\u95EE Grafana \u9875\u9762\u3002\u9ED8\u8BA4\u7528\u6237\u540D\u5BC6\u7801\u4E3A admin\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u914D\u7F6E Grafana"}),"\n",(0,i.jsx)(n.p,{children:"\u521D\u6B21\u767B\u9646\uFF0C\u9700\u8981\u6839\u636E\u63D0\u793A\u8BBE\u7F6E\u6570\u636E\u6E90\uFF08data source\uFF09\u3002\u6211\u4EEC\u8FD9\u91CC\u7684\u6570\u636E\u6E90\uFF0C\u5373\u4E0A\u4E00\u6B65\u914D\u7F6E\u7684 Prometheus\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6570\u636E\u6E90\u914D\u7F6E\u7684 Setting \u9875\u9762\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Name: \u6570\u636E\u6E90\u7684\u540D\u79F0\uFF0C\u81EA\u5B9A\u4E49\uFF0C\u6BD4\u5982 doris_monitor_data_source"}),"\n",(0,i.jsx)(n.li,{children:"Type: \u9009\u62E9 Prometheus"}),"\n",(0,i.jsxs)(n.li,{children:["URL: \u586B\u5199 Prometheus \u7684 web \u5730\u5740\uFF0C\u5982 ",(0,i.jsx)(n.a,{href:"http://host:8181",children:"http://host:8181"})]}),"\n",(0,i.jsx)(n.li,{children:"Access: \u8FD9\u91CC\u6211\u4EEC\u9009\u62E9 Server \u65B9\u5F0F\uFF0C\u5373\u901A\u8FC7 Grafana \u8FDB\u7A0B\u6240\u5728\u670D\u52A1\u5668\uFF0C\u8BBF\u95EE Prometheus\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5176\u4F59\u9009\u9879\u9ED8\u8BA4\u5373\u53EF\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u70B9\u51FB\u6700\u4E0B\u65B9 ",(0,i.jsx)(n.code,{children:"Save & Test"}),"\uFF0C\u5982\u679C\u663E\u793A ",(0,i.jsx)(n.code,{children:"Data source is working"}),"\uFF0C\u5373\u8868\u793A\u6570\u636E\u6E90\u53EF\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u786E\u8BA4\u6570\u636E\u6E90\u53EF\u7528\u540E\uFF0C\u70B9\u51FB\u5DE6\u8FB9\u5BFC\u822A\u680F\u7684 + \u53F7\uFF0C\u5F00\u59CB\u6DFB\u52A0 Dashboard\u3002\u8FD9\u91CC\u6211\u4EEC\u5DF2\u7ECF\u51C6\u5907\u597D\u4E86 Doris \u7684 Dashboard \u6A21\u677F\uFF08\u672C\u6587\u6863\u5F00\u5934\uFF09\u3002\u4E0B\u8F7D\u5B8C\u6210\u540E\uFF0C\u70B9\u51FB\u4E0A\u65B9\u7684 ",(0,i.jsx)(n.code,{children:"New dashboard"}),"->",(0,i.jsx)(n.code,{children:"Import dashboard"}),"->",(0,i.jsx)(n.code,{children:"Upload .json File"}),"\uFF0C\u5C06\u4E0B\u8F7D\u7684 json \u6587\u4EF6\u5BFC\u5165\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5BFC\u5165\u540E\uFF0C\u53EF\u4EE5\u547D\u540D Dashboard\uFF0C\u9ED8\u8BA4\u662F ",(0,i.jsx)(n.code,{children:"Doris Overview"}),"\u3002\u540C\u65F6\uFF0C\u9700\u8981\u9009\u62E9\u6570\u636E\u6E90\uFF0C\u8FD9\u91CC\u9009\u62E9\u4E4B\u524D\u521B\u5EFA\u7684 ",(0,i.jsx)(n.code,{children:"doris_monitor_data_source"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u70B9\u51FB ",(0,i.jsx)(n.code,{children:"Import"}),"\uFF0C\u5373\u5B8C\u6210\u5BFC\u5165\u3002\u4E4B\u540E\uFF0C\u53EF\u4EE5\u770B\u5230 Doris \u7684 Dashboard \u5C55\u793A\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u81F3\u6B64\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684 Grafana \u5DF2\u7ECF\u642D\u5EFA\u3001\u914D\u7F6E\u5B8C\u6BD5\u3002\u66F4\u591A\u9AD8\u7EA7\u4F7F\u7528\u65B9\u5F0F\uFF0C\u8BF7\u53C2\u9605 ",(0,i.jsx)(n.a,{href:"http://docs.grafana.org/",children:"\u5B98\u65B9\u6587\u6863"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dashboard-\u8BF4\u660E",children:"Dashboard \u8BF4\u660E"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u91CC\u6211\u4EEC\u7B80\u8981\u4ECB\u7ECD Doris Dashboard\u3002Dashboard \u7684\u5185\u5BB9\u53EF\u80FD\u4F1A\u968F\u7248\u672C\u5347\u7EA7\uFF0C\u4E0D\u65AD\u53D8\u5316\uFF0C\u672C\u6587\u6863\u4E0D\u4FDD\u8BC1\u662F\u6700\u65B0\u7684 Dashboard \u8BF4\u660E\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9876\u680F"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u9876\u680F",src:s(582356).Z+"",width:"1829",height:"117"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5DE6\u4E0A\u89D2\u4E3A Dashboard \u540D\u79F0\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u53F3\u4E0A\u89D2\u663E\u793A\u5F53\u524D\u76D1\u63A7\u65F6\u95F4\u8303\u56F4\uFF0C\u53EF\u4EE5\u4E0B\u62C9\u9009\u62E9\u4E0D\u540C\u7684\u65F6\u95F4\u8303\u56F4\uFF0C\u8FD8\u53EF\u4EE5\u6307\u5B9A\u5B9A\u65F6\u5237\u65B0\u9875\u9762\u95F4\u9694\u3002"}),"\n",(0,i.jsx)(n.li,{children:"cluster_name: \u5373 Prometheus \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u5404\u4E2A job_name\uFF0C\u4EE3\u8868\u4E00\u4E2A Doris \u96C6\u7FA4\u3002\u9009\u62E9\u4E0D\u540C\u7684 cluster\uFF0C\u4E0B\u65B9\u7684\u56FE\u8868\u5C06\u5C55\u793A\u5BF9\u5E94\u96C6\u7FA4\u7684\u76D1\u63A7\u4FE1\u606F\u3002"}),"\n",(0,i.jsx)(n.li,{children:"fe_master: \u5BF9\u5E94\u96C6\u7FA4\u7684 Master Frontend \u8282\u70B9\u3002"}),"\n",(0,i.jsx)(n.li,{children:"fe_instance: \u5BF9\u5E94\u96C6\u7FA4\u7684\u6240\u6709 Frontend \u8282\u70B9\u3002\u9009\u62E9\u4E0D\u540C\u7684 Frontend\uFF0C\u4E0B\u65B9\u7684\u56FE\u8868\u5C06\u5C55\u793A\u5BF9\u5E94 Frontend \u7684\u76D1\u63A7\u4FE1\u606F\u3002"}),"\n",(0,i.jsx)(n.li,{children:"be_instance: \u5BF9\u5E94\u96C6\u7FA4\u7684\u6240\u6709 Backend \u8282\u70B9\u3002\u9009\u62E9\u4E0D\u540C\u7684 Backend\uFF0C\u4E0B\u65B9\u7684\u56FE\u8868\u5C06\u5C55\u793A\u5BF9\u5E94 Backend \u7684\u76D1\u63A7\u4FE1\u606F\u3002"}),"\n",(0,i.jsx)(n.li,{children:"interval: \u6709\u4E9B\u56FE\u8868\u5C55\u793A\u4E86\u901F\u7387\u76F8\u5173\u7684\u76D1\u63A7\u9879\uFF0C\u8FD9\u91CC\u53EF\u9009\u62E9\u4EE5\u591A\u5927\u95F4\u9694\u8FDB\u884C\u91C7\u6837\u8BA1\u7B97\u901F\u7387\uFF08\u6CE8\uFF1A15s \u95F4\u9694\u53EF\u80FD\u5BFC\u81F4\u4E00\u4E9B\u56FE\u8868\u65E0\u6CD5\u663E\u793A\uFF09\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Row"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Row",src:s(162592).Z+"",width:"280",height:"82"})}),"\n",(0,i.jsx)(n.p,{children:"Grafana \u4E2D\uFF0CRow \u7684\u6982\u5FF5\uFF0C\u5373\u4E00\u7EC4\u56FE\u8868\u7684\u96C6\u5408\u3002\u5982\u4E0A\u56FE\u4E2D\u7684 Overview\u3001Cluster Overview \u5373\u4E24\u4E2A\u4E0D\u540C\u7684 Row\u3002\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB Row\uFF0C\u5BF9 Row \u8FDB\u884C\u6298\u53E0\u3002\u5F53\u524D Dashboard \u6709\u5982\u4E0B Rows\uFF08\u6301\u7EED\u66F4\u65B0\u4E2D\uFF09\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Overview: \u6240\u6709 Doris \u96C6\u7FA4\u7684\u6C47\u603B\u5C55\u793A\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Cluster Overview: \u9009\u5B9A\u96C6\u7FA4\u7684\u6C47\u603B\u5C55\u793A\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Query Statistic: \u9009\u5B9A\u96C6\u7FA4\u7684\u67E5\u8BE2\u76F8\u5173\u76D1\u63A7\u3002"}),"\n",(0,i.jsx)(n.li,{children:"FE JVM: \u9009\u5B9A Frontend \u7684 JVM \u76D1\u63A7\u3002"}),"\n",(0,i.jsx)(n.li,{children:"BE: \u9009\u5B9A\u96C6\u7FA4\u7684 Backends \u7684\u6C47\u603B\u5C55\u793A\u3002"}),"\n",(0,i.jsx)(n.li,{children:"BE Task: \u9009\u5B9A\u96C6\u7FA4\u7684 Backends \u4EFB\u52A1\u4FE1\u606F\u7684\u5C55\u793A\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u56FE\u8868"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u56FE\u8868",src:s(179280).Z+"",width:"606",height:"280"})}),"\n",(0,i.jsx)(n.p,{children:"\u4E00\u4E2A\u5178\u578B\u7684\u56FE\u6807\u5206\u4E3A\u4EE5\u4E0B\u51E0\u90E8\u5206\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u9F20\u6807\u60AC\u505C\u5DE6\u4E0A\u89D2\u7684 i \u56FE\u6807\uFF0C\u53EF\u4EE5\u67E5\u770B\u8BE5\u56FE\u8868\u7684\u8BF4\u660E\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u70B9\u51FB\u4E0B\u65B9\u7684\u56FE\u4F8B\uFF0C\u53EF\u4EE5\u5355\u72EC\u67E5\u770B\u67D0\u4E00\u76D1\u63A7\u9879\u3002\u518D\u6B21\u70B9\u51FB\uFF0C\u5219\u663E\u793A\u6240\u6709\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u56FE\u8868\u4E2D\u62D6\u62FD\u53EF\u4EE5\u9009\u5B9A\u65F6\u95F4\u8303\u56F4\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6807\u9898\u7684 [] \u4E2D\u663E\u793A\u9009\u5B9A\u7684\u96C6\u7FA4\u540D\u79F0\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u4E00\u4E9B\u6570\u503C\u5BF9\u5E94\u5DE6\u8FB9\u7684 Y \u8F74\uFF0C\u4E00\u4E9B\u5BF9\u5E94\u53F3\u8FB9\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7\u56FE\u4F8B\u672B\u5C3E\u7684 ",(0,i.jsx)(n.code,{children:"-right"})," \u533A\u5206\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u70B9\u51FB\u56FE\u8868\u540D\u79F0->",(0,i.jsx)(n.code,{children:"Edit"}),"\uFF0C\u53EF\u4EE5\u5BF9\u56FE\u8868\u8FDB\u884C\u7F16\u8F91\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dashboard-\u66F4\u65B0",children:"Dashboard \u66F4\u65B0"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u70B9\u51FB Grafana \u5DE6\u8FB9\u680F\u7684 ",(0,i.jsx)(n.code,{children:"+"}),"\uFF0C\u70B9\u51FB ",(0,i.jsx)(n.code,{children:"Dashboard"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684 ",(0,i.jsx)(n.code,{children:"New dashboard"}),"\uFF0C\u5728\u70B9\u51FB\u53F3\u4FA7\u51FA\u73B0\u7684 ",(0,i.jsx)(n.code,{children:"Import dashboard"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u70B9\u51FB ",(0,i.jsx)(n.code,{children:"Upload .json File"}),"\uFF0C\u9009\u62E9\u6700\u65B0\u7684\u6A21\u677F\u6587\u4EF6\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u9009\u62E9\u6570\u636E\u6E90"}),"\n",(0,i.jsxs)(n.li,{children:["\u70B9\u51FB ",(0,i.jsx)(n.code,{children:"Import(Overwrite)"}),"\uFF0C\u5B8C\u6210\u6A21\u677F\u66F4\u65B0\u3002"]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},582356:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/dashboard_navibar-c771e898791f510a5cb89bc3ef23bc33.png"},39765:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/dashboard_overview-45d556af325e2561e171c7dfdcd12f37.png"},179280:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/dashboard_panel-d86986f1ab0e9ce35b25ce0bac21b432.png"},162592:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/dashboard_row-f66fca759880441573e4dd3ea53c316b.png"},735262:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/monitor_arch-1c53c13bb72ba1970574ca0428791ad0.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var r=s(667294);let i={},t=r.createContext(i);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);