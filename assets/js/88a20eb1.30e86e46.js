"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["933112"],{149789:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>c,assets:()=>l,toc:()=>h,frontMatter:()=>a});var s=JSON.parse('{"id":"admin-manual/maint-monitor/monitor-alert","title":"Monitoring and alarming","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/maint-monitor/monitor-alert.md","sourceDirName":"admin-manual/maint-monitor","slug":"/admin-manual/maint-monitor/monitor-alert","permalink":"/docs/2.0/admin-manual/maint-monitor/monitor-alert","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Monitoring and alarming","language":"en"},"sidebar":"docs","previous":{"title":"Monitor Metrics","permalink":"/docs/2.0/admin-manual/maint-monitor/monitor-metrics/metrics"},"next":{"title":"Disk Capacity Management","permalink":"/docs/2.0/admin-manual/maint-monitor/disk-capacity"}}'),i=t("785893"),r=t("250065");let a={title:"Monitoring and alarming",language:"en"},o="Monitoring and alarming",l={},h=[{value:"Components",id:"components",level:2},{value:"Monitoring data",id:"monitoring-data",level:2},{value:"Monitoring Architecture",id:"monitoring-architecture",level:2},{value:"Start building",id:"start-building",level:2},{value:"Grafana",id:"grafana",level:3},{value:"Dashboard",id:"dashboard",level:2},{value:"Dashboard Update",id:"dashboard-update",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"monitoring-and-alarming",children:"Monitoring and alarming"})}),"\n",(0,i.jsx)(n.p,{children:"This document mainly introduces Doris's monitoring items and how to collect and display them. And how to configure alarm (TODO)"}),"\n",(0,i.jsx)(n.p,{children:"Dashboard template click download"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Doris Version"}),(0,i.jsx)(n.th,{children:"Dashboard Version"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.2.x"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://grafana.com/api/dashboards/9734/revisions/5/download",children:"revision 5"})})]})})]}),"\n",(0,i.jsx)(n.p,{children:"Dashboard templates are updated from time to time. The way to update the template is shown in the last section."}),"\n",(0,i.jsx)(n.p,{children:"Welcome to provide better dashboard."}),"\n",(0,i.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,i.jsxs)(n.p,{children:["Doris uses ",(0,i.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," and ",(0,i.jsx)(n.a,{href:"https://grafana.com/",children:"Grafana"})," to collect and display input monitoring items."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u7EC4\u4EF6",src:t(39765).Z+"",width:"1829",height:"982"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Prometheus"}),"\n",(0,i.jsx)(n.p,{children:"Prometheus is an open source system monitoring and alarm suite. It can collect monitored items by Pull or Push and store them in its own time series database. And through the rich multi-dimensional data query language, to meet the different data display needs of users."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Grafana"}),"\n",(0,i.jsx)(n.p,{children:"Grafana is an open source data analysis and display platform. Support multiple mainstream temporal database sources including Prometheus. Through the corresponding database query statements, the display data is obtained from the data source. With flexible and configurable dashboard, these data can be quickly presented to users in the form of graphs."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: This document only provides a way to collect and display Doris monitoring data using Prometheus and Grafana. In principle, these components are not developed or maintained. For more details on these components, please step through the corresponding official documents."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"monitoring-data",children:"Monitoring data"}),"\n",(0,i.jsx)(n.p,{children:"Doris's monitoring data is exposed through the HTTP interface of Frontend and Backend. Monitoring data is presented in the form of key-value text. Each Key may also be distinguished by different Labels. When the user has built Doris, the monitoring data of the node can be accessed in the browser through the following interfaces:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Frontend: ",(0,i.jsx)(n.code,{children:"fe_host:fe_http_port/metrics"})]}),"\n",(0,i.jsxs)(n.li,{children:["Backend: ",(0,i.jsx)(n.code,{children:"be_host:be_web_server_port/metrics"})]}),"\n",(0,i.jsx)(n.li,{children:"Broker: Not available for now"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Users will see the following monitoring item results (for example, FE partial monitoring items):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 8476557312\njvm_heap_size_bytes{type="committed"} 1007550464\njvm_heap_size_bytes{type="used"} 156375280\n# HELP  jvm_non_heap_size_bytes jvm non heap stat\n# TYPE  jvm_non_heap_size_bytes gauge\njvm_non_heap_size_bytes{type="committed"} 194379776\njvm_non_heap_size_bytes{type="used"} 188201864\n# HELP  jvm_young_size_bytes jvm young mem pool stat\n# TYPE  jvm_young_size_bytes gauge\njvm_young_size_bytes{type="used"} 40652376\njvm_young_size_bytes{type="peak_used"} 277938176\njvm_young_size_bytes{type="max"} 907345920\n# HELP  jvm_old_size_bytes jvm old mem pool stat\n# TYPE  jvm_old_size_bytes gauge\njvm_old_size_bytes{type="used"} 114633448\njvm_old_size_bytes{type="peak_used"} 114633448\njvm_old_size_bytes{type="max"} 7455834112\n# HELP  jvm_young_gc jvm young gc stat\n# TYPE  jvm_young_gc gauge\njvm_young_gc{type="count"} 247\njvm_young_gc{type="time"} 860\n# HELP  jvm_old_gc jvm old gc stat\n# TYPE  jvm_old_gc gauge\njvm_old_gc{type="count"} 3\njvm_old_gc{type="time"} 211\n# HELP  jvm_thread jvm thread stat\n# TYPE  jvm_thread gauge\njvm_thread{type="count"} 162\njvm_thread{type="peak_count"} 205\njvm_thread{type="new_count"} 0\njvm_thread{type="runnable_count"} 48\njvm_thread{type="blocked_count"} 1\njvm_thread{type="waiting_count"} 41\njvm_thread{type="timed_waiting_count"} 72\njvm_thread{type="terminated_count"} 0\n...\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This is a monitoring data presented in ",(0,i.jsx)(n.a,{href:"https://prometheus.io/docs/practices/naming/",children:"Prometheus Format"}),". We take one of these monitoring items as an example to illustrate:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 8476557312\njvm_heap_size_bytes{type="committed"} 1007550464\njvm_heap_size_bytes{type="used"} 156375280\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:['Behavior commentary line at the beginning of "#". HELP is the description of the monitored item; TYPE represents the data type of the monitored item, and Gauge is the scalar data in the example. There are also Counter, Histogram and other data types. Specifically, you can see ',(0,i.jsx)(n.a,{href:"https://prometheus.io/docs/practices/instrumentation/#counter-vs.-gauge,-summary-vs.-histogram",children:"Prometheus Official Document"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"jvm_heap_size_bytes"})," is the name of the monitored item (Key); ",(0,i.jsx)(n.code,{children:'type= "max"'})," is a label named ",(0,i.jsx)(n.code,{children:"type"}),", with a value of ",(0,i.jsx)(n.code,{children:"max"}),". A monitoring item can have multiple Labels."]}),"\n",(0,i.jsxs)(n.li,{children:["The final number, such as ",(0,i.jsx)(n.code,{children:"8476557312"}),", is the monitored value."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"monitoring-architecture",children:"Monitoring Architecture"}),"\n",(0,i.jsx)(n.p,{children:"The entire monitoring architecture is shown in the following figure:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Monitoring Architecture",src:t(735262).Z+"",width:"410",height:"373"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The yellow part is Prometheus related components. Prometheus Server is the main process of Prometheus. At present, Prometheus accesses the monitoring interface of Doris node by Pull, and then stores the time series data in the time series database TSDB (TSDB is included in the Prometheus process, and need not be deployed separately). Prometheus also supports building ",(0,i.jsx)(n.a,{href:"https://github.com/prometheus/pushgateway",children:"Push Gateway"})," to allow monitored data to be pushed to Push Gateway by Push by monitoring system, and then data from Push Gateway by Prometheus Server through Pull."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/prometheus/alertmanager",children:"Alert Manager"})," is a Prometheus alarm component, which needs to be deployed separately (no solution is provided yet, but can be built by referring to official documents). Through Alert Manager, users can configure alarm strategy, receive mail, short messages and other alarms."]}),"\n",(0,i.jsx)(n.li,{children:"The green part is Grafana related components. Grafana Server is the main process of Grafana. After startup, users can configure Grafana through Web pages, including data source settings, user settings, Dashboard drawing, etc. This is also where end users view monitoring data."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"start-building",children:"Start building"}),"\n",(0,i.jsx)(n.p,{children:"Please start building the monitoring system after you have completed the deployment of Doris."}),"\n",(0,i.jsx)(n.p,{children:"Prometheus"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download the latest version of Prometheus on the ",(0,i.jsx)(n.a,{href:"https://prometheus.io/download/",children:"Prometheus Website"}),". Here we take version 2.43.0-linux-amd64 as an example."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unzip the downloaded tar file on the machine that is ready to run the monitoring service."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open the configuration file prometheus.yml. Here we provide an example configuration and explain it (the configuration file is in YML format, pay attention to uniform indentation and spaces):"}),"\n",(0,i.jsxs)(n.p,{children:["Here we use the simplest way of static files to monitor configuration. Prometheus supports a variety of ",(0,i.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/",children:"service discovery"}),", which can dynamically sense the addition and deletion of nodes."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# my global config\nglobal:\n  scrape_interval:     15s # Global acquisition interval, default 1 m, set to 15s\n  evaluation_interval: 15s # Global rule trigger interval, default 1 m, set 15s here\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      # - alertmanager:9093\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'DORIS_CLUSTER' # Each Doris cluster, we call it a job. Job can be given a name here as the name of Doris cluster in the monitoring system.\n    metrics_path: '/metrics' # Here you specify the restful API to get the monitors. With host: port in the following targets, Prometheus will eventually collect monitoring items through host: port/metrics_path.\n    static_configs: # Here we begin to configure the target addresses of FE and BE, respectively. All FE and BE are written into their respective groups.\n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe # Here configure the group of fe, which contains three Frontends\n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be # Here configure the group of be, which contains three Backends\n\n  - job_name: 'DORIS_CLUSTER_2' # We can monitor multiple Doris clusters in a Prometheus, where we begin the configuration of another Doris cluster. Configuration is the same as above, the following is outlined.\n    metrics_path: '/metrics'\n    static_configs: \n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe \n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be \n              \n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"start Prometheus"}),"\n",(0,i.jsx)(n.p,{children:"Start Prometheus with the following command:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'nohup ./prometheus --web.listen-address="0.0.0.0:8181" &'})}),"\n",(0,i.jsx)(n.p,{children:"This command will run Prometheus in the background and specify its Web port as 8181. After startup, data is collected and stored in the data directory."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"stop Promethues"}),"\n",(0,i.jsx)(n.p,{children:"At present, there is no formal way to stop the process, kill - 9 directly. Of course, Prometheus can also be set as a service to start and stop in a service way."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"access Prometheus"}),"\n",(0,i.jsxs)(n.p,{children:["Prometheus can be easily accessed through web pages. The page of Prometheus can be accessed by opening port 8181 through browser. Click on the navigation bar, ",(0,i.jsx)(n.code,{children:"Status"})," -> ",(0,i.jsx)(n.code,{children:"Targets"}),", and you can see all the monitoring host nodes of the grouped Jobs. Normally, all nodes should be ",(0,i.jsx)(n.code,{children:"UP"}),", indicating that data acquisition is normal. Click on an ",(0,i.jsx)(n.code,{children:"Endpoint"})," to see the current monitoring value. If the node state is not UP, you can first access Doris's metrics interface (see previous article) to check whether it is accessible, or query Prometheus related documents to try to resolve."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["So far, a simple Prometheus has been built and configured. For more advanced usage, see ",(0,i.jsx)(n.a,{href:"https://prometheus.io/docs/introduction/overview/",children:"Official Documents"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"grafana",children:"Grafana"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download the latest version of Grafana on ",(0,i.jsx)(n.a,{href:"https://grafana.com/grafana/download",children:"Grafana's official website"}),". Here we take version 8.5.22.linux-amd64 as an example."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unzip the downloaded tar file on the machine that is ready to run the monitoring service."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open the configuration file conf/defaults.ini. Here we only list the configuration items that need to be changed, and the other configurations can be used by default."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)\ndata = data\n\n# Directory where grafana can store logs\nlogs = data/log\n\n# Protocol (http, https, socket)\nprotocal = http\n\n# The ip address to bind to, empty will bind to all interfaces\nhttp_addr =\n\n# The http port to use\nhttp_port = 8182\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"start Grafana"}),"\n",(0,i.jsx)(n.p,{children:"Start Grafana with the following command"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"nohup ./bin/grafana-server &"})}),"\n",(0,i.jsx)(n.p,{children:"This command runs Grafana in the background, and the access port is 8182 configured above."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"stop Grafana"}),"\n",(0,i.jsx)(n.p,{children:"At present, there is no formal way to stop the process, kill - 9 directly. Of course, you can also set Grafana as a service to start and stop as a service."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"access Grafana"}),"\n",(0,i.jsx)(n.p,{children:"Through the browser, open port 8182, you can start accessing the Grafana page. The default username password is admin."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure Grafana"}),"\n",(0,i.jsx)(n.p,{children:"For the first landing, you need to set up the data source according to the prompt. Our data source here is Prometheus, which was configured in the previous step."}),"\n",(0,i.jsx)(n.p,{children:"The Setting page of the data source configuration is described as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Name: Name of the data source, customized, such as doris_monitor_data_source"}),"\n",(0,i.jsx)(n.li,{children:"Type: Select Prometheus"}),"\n",(0,i.jsxs)(n.li,{children:["URL: Fill in the web address of Prometheus, such as ",(0,i.jsx)(n.a,{href:"http://host:8181",children:"http://host:8181"})]}),"\n",(0,i.jsx)(n.li,{children:"Access: Here we choose the Server mode, which is to access Prometheus through the server where the Grafana process is located."}),"\n",(0,i.jsx)(n.li,{children:"The other options are available by default."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Save & Test"})," at the bottom. If ",(0,i.jsx)(n.code,{children:"Data source is working"}),", it means that the data source is available."]}),"\n",(0,i.jsxs)(n.li,{children:["After confirming that the data source is available, click on the + number in the left navigation bar and start adding Dashboard. Here we have prepared Doris's dashboard template (at the beginning of this document). When the download is complete, click ",(0,i.jsx)(n.code,{children:"New dashboard"})," -> ",(0,i.jsx)(n.code,{children:"Import dashboard"})," -> ",(0,i.jsx)(n.code,{children:"Upload.json File"})," above to import the downloaded JSON file."]}),"\n",(0,i.jsxs)(n.li,{children:["After importing, you can name Dashboard by default ",(0,i.jsx)(n.code,{children:"Doris Overview"}),". At the same time, you need to select the data source, where you select the ",(0,i.jsx)(n.code,{children:"doris_monitor_data_source"})," you created earlier."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Import"})," to complete the import. Later, you can see Doris's dashboard display."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["So far, a simple Grafana has been built and configured. For more advanced usage, see ",(0,i.jsx)(n.a,{href:"http://docs.grafana.org/",children:"Official Documents"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,i.jsx)(n.p,{children:"Here we briefly introduce Doris Dashboard. The content of Dashboard may change with the upgrade of version. This document is not guaranteed to be the latest Dashboard description."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Top Bar"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Top Bar",src:t(582356).Z+"",width:"1829",height:"117"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The upper left corner is the name of Dashboard."}),"\n",(0,i.jsx)(n.li,{children:"The upper right corner shows the current monitoring time range. You can choose different time ranges by dropping down. You can also specify a regular refresh page interval."}),"\n",(0,i.jsx)(n.li,{children:"Cluster name: Each job name in the Prometheus configuration file represents a Doris cluster. Select a different cluster, and the chart below shows the monitoring information for the corresponding cluster."}),"\n",(0,i.jsx)(n.li,{children:"fe_master: The Master Frontend node corresponding to the cluster."}),"\n",(0,i.jsx)(n.li,{children:"fe_instance: All Frontend nodes corresponding to the cluster. Select a different Frontend, and the chart below shows the monitoring information for the Frontend."}),"\n",(0,i.jsx)(n.li,{children:"be_instance: All Backend nodes corresponding to the cluster. Select a different Backend, and the chart below shows the monitoring information for the Backend."}),"\n",(0,i.jsx)(n.li,{children:"Interval: Some charts show rate-related monitoring items, where you can choose how much interval to sample and calculate the rate (Note: 15s interval may cause some charts to be unable to display)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Row."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Row",src:t(162592).Z+"",width:"280",height:"82"})}),"\n",(0,i.jsx)(n.p,{children:"In Grafana, the concept of Row is a set of graphs. As shown in the figure above, Overview and Cluster Overview are two different Rows. Row can be folded by clicking Row. Currently Dashboard has the following Rows (in continuous updates):"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Overview: A summary display of all Doris clusters."}),"\n",(0,i.jsx)(n.li,{children:"Cluster Overview: A summary display of selected clusters."}),"\n",(0,i.jsx)(n.li,{children:"Query Statistic: Query-related monitoring of selected clusters."}),"\n",(0,i.jsx)(n.li,{children:"FE JVM: Select Frontend's JVM monitoring."}),"\n",(0,i.jsx)(n.li,{children:"BE: A summary display of the backends of the selected cluster."}),"\n",(0,i.jsx)(n.li,{children:"BE Task: Display of Backends Task Information for Selected Clusters."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Charts"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Charts",src:t(179280).Z+"",width:"606",height:"280"})}),"\n",(0,i.jsx)(n.p,{children:"A typical icon is divided into the following parts:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Hover the I icon in the upper left corner of the mouse to see the description of the chart."}),"\n",(0,i.jsx)(n.li,{children:"Click on the illustration below to view a monitoring item separately. Click again to display all."}),"\n",(0,i.jsx)(n.li,{children:"Dragging in the chart can select the time range."}),"\n",(0,i.jsx)(n.li,{children:"The selected cluster name is displayed in [] of the title."}),"\n",(0,i.jsxs)(n.li,{children:["Some values correspond to the Y-axis on the left and some to the right, which can be distinguished by the ",(0,i.jsx)(n.code,{children:"-right"})," at the end of the legend."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the name of the chart -> ",(0,i.jsx)(n.code,{children:"Edit"})," to edit the chart."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dashboard-update",children:"Dashboard Update"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"+"})," in the left column of Grafana and ",(0,i.jsx)(n.code,{children:"Dashboard"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"New dashboard"})," in the upper left corner, and ",(0,i.jsx)(n.code,{children:"Import dashboard"})," appears on the right."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Upload .json File"})," to select the latest template file."]}),"\n",(0,i.jsx)(n.li,{children:"Selecting Data Sources"}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Import (Overwrite)"})," to complete the template update."]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},582356:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/dashboard_navibar-c771e898791f510a5cb89bc3ef23bc33.png"},39765:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/dashboard_overview-45d556af325e2561e171c7dfdcd12f37.png"},179280:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/dashboard_panel-d86986f1ab0e9ce35b25ce0bac21b432.png"},162592:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/dashboard_row-f66fca759880441573e4dd3ea53c316b.png"},735262:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/monitor_arch-1c53c13bb72ba1970574ca0428791ad0.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);