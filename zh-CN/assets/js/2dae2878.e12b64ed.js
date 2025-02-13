"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["92150"],{119104:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"ecosystem/logstash","title":"Logstash Doris Output Plugin","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/ecosystem/logstash.md","sourceDirName":"ecosystem","slug":"/ecosystem/logstash","permalink":"/zh-CN/docs/2.0/ecosystem/logstash","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Logstash Doris Output Plugin","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Kyuubi","permalink":"/zh-CN/docs/2.0/ecosystem/kyuubi"},"next":{"title":"Beats Doris Output Plugin","permalink":"/zh-CN/docs/2.0/ecosystem/beats"}}'),i=t("785893"),r=t("250065");let o={title:"Logstash Doris Output Plugin",language:"zh-CN"},a="Logstash Doris output plugin",l={},d=[{value:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD",level:2},{value:"\u5B89\u88C5",id:"\u5B89\u88C5",level:2},{value:"\u83B7\u53D6\u63D2\u4EF6",id:"\u83B7\u53D6\u63D2\u4EF6",level:3},{value:"\u5B89\u88C5\u63D2\u4EF6",id:"\u5B89\u88C5\u63D2\u4EF6",level:3},{value:"\u53C2\u6570\u914D\u7F6E",id:"\u53C2\u6570\u914D\u7F6E",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"TEXT \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",id:"text-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",level:3},{value:"JSON \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",id:"json-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",level:3}];function c(n){let e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"logstash-doris-output-plugin",children:"Logstash Doris output plugin"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),"\n",(0,i.jsx)(e.p,{children:"Logstash \u662F\u4E00\u4E2A\u65E5\u5FD7ETL\u6846\u67B6\uFF08\u91C7\u96C6\uFF0C\u9884\u5904\u7406\uFF0C\u53D1\u9001\u5230\u5B58\u50A8\u7CFB\u7EDF\uFF09\uFF0C\u5B83\u652F\u6301\u81EA\u5B9A\u4E49\u8F93\u51FA\u63D2\u4EF6\u5C06\u6570\u636E\u5199\u5165\u5B58\u50A8\u7CFB\u7EDF\uFF0CLogstash Doris output plugin \u662F\u8F93\u51FA\u5230 Doris \u7684\u63D2\u4EF6\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["Logstash Doris output plugin \u8C03\u7528 ",(0,i.jsx)(e.a,{href:"/zh-CN/docs/2.0/data-operate/import/stream-load-manual",children:"Doris Stream Load"})," HTTP \u63A5\u53E3\u5C06\u6570\u636E\u5B9E\u65F6\u5199\u5165 Doris\uFF0C\u63D0\u4F9B\u591A\u7EBF\u7A0B\u5E76\u53D1\uFF0C\u5931\u8D25\u91CD\u8BD5\uFF0C\u81EA\u5B9A\u4E49 Stream Load \u683C\u5F0F\u548C\u53C2\u6570\uFF0C\u8F93\u51FA\u5199\u5165\u901F\u5EA6\u7B49\u80FD\u529B\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u4F7F\u7528 Logstash Doris output plugin \u4E3B\u8981\u6709\u4E09\u4E2A\u6B65\u9AA4\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5C06\u63D2\u4EF6\u5B89\u88C5\u5230 Logstash \u4E2D"}),"\n",(0,i.jsx)(e.li,{children:"\u914D\u7F6E Doris \u8F93\u51FA\u5730\u5740\u548C\u5176\u4ED6\u53C2\u6570"}),"\n",(0,i.jsx)(e.li,{children:"\u542F\u52A8 Logstash \u5C06\u6570\u636E\u5B9E\u65F6\u5199\u5165 Doris"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5B89\u88C5",children:"\u5B89\u88C5"}),"\n",(0,i.jsx)(e.h3,{id:"\u83B7\u53D6\u63D2\u4EF6",children:"\u83B7\u53D6\u63D2\u4EF6"}),"\n",(0,i.jsx)(e.p,{children:"\u53EF\u4EE5\u4ECE\u5B98\u7F51\u4E0B\u8F7D\u6216\u8005\u81EA\u884C\u4ECE\u6E90\u7801\u7F16\u8BD1 Logstash Doris output plugin\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4ECE\u5B98\u7F51\u4E0B\u8F7D"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4E0D\u5305\u542B\u4F9D\u8D56\u7684\u5B89\u88C5\u5305\n",(0,i.jsx)(e.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.gem",children:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.gem"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5305\u542B\u4F9D\u8D56\u7684\u5B89\u88C5\u5305\n",(0,i.jsx)(e.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.zip",children:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.zip"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4ECE\u6E90\u7801\u7F16\u8BD1"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"cd extension/logstash/\n\ngem build logstash-output-doris.gemspec\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u5B89\u88C5\u63D2\u4EF6",children:"\u5B89\u88C5\u63D2\u4EF6"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u666E\u901A\u5B89\u88C5"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"${LOGSTASH_HOME} \u662F Logstash \u7684\u5B89\u88C5\u76EE\u5F55\uFF0C\u8FD0\u884C\u5B83\u4E0B\u9762\u7684 bin/logstash-plugin \u547D\u4EE4\u5B89\u88C5\u63D2\u4EF6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"${LOGSTASH_HOME}/bin/logstash-plugin install logstash-output-doris-1.0.0.gem\n\nValidating logstash-output-doris-1.0.0.gem\nInstalling logstash-output-doris\nInstallation successful\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u666E\u901A\u5B89\u88C5\u6A21\u5F0F\u4F1A\u81EA\u52A8\u5B89\u88C5\u63D2\u4EF6\u4F9D\u8D56\u7684 ruby \u6A21\u5757\uFF0C\u5BF9\u4E8E\u7F51\u7EDC\u4E0D\u901A\u7684\u60C5\u51B5\u4F1A\u5361\u4F4F\u65E0\u6CD5\u5B8C\u6210\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E0B\u8F7D\u5305\u542B\u4F9D\u8D56\u7684zip\u5B89\u88C5\u5305\u8FDB\u884C\u5B8C\u5168\u79BB\u7EBF\u5B89\u88C5\uFF0C\u6CE8\u610F\u9700\u8981\u7528 file:// \u6307\u5B9A\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u79BB\u7EBF\u5B89\u88C5"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"${LOGSTASH_HOME}/bin/logstash-plugin install file:///tmp/logstash-output-doris-1.0.0.zip\n\nInstalling file: logstash-output-doris-1.0.0.zip\nResolving dependencies.........................\nInstall successful\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570\u914D\u7F6E",children:"\u53C2\u6570\u914D\u7F6E"}),"\n",(0,i.jsx)(e.p,{children:"Logstash Doris output plugin \u7684\u914D\u7F6E\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u914D\u7F6E"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"http_hosts"})}),(0,i.jsx)(e.td,{children:'Stream Load HTTP \u5730\u5740\uFF0C\u683C\u5F0F\u662F\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u53EF\u4EE5\u6709\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u5143\u7D20\uFF0C\u6BCF\u4E2A\u5143\u7D20\u662F host:port\u3002 \u4F8B\u5982\uFF1A["http://fe1:8030", "http://fe2:8030"]'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"user"})}),(0,i.jsx)(e.td,{children:"Doris \u7528\u6237\u540D\uFF0C\u8BE5\u7528\u6237\u9700\u8981\u6709doris\u5BF9\u5E94\u5E93\u8868\u7684\u5BFC\u5165\u6743\u9650"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"password"})}),(0,i.jsx)(e.td,{children:"Doris \u7528\u6237\u7684\u5BC6\u7801"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"db"})}),(0,i.jsx)(e.td,{children:"\u8981\u5199\u5165\u7684 Doris \u5E93\u540D"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"table"})}),(0,i.jsx)(e.td,{children:"\u8981\u5199\u5165\u7684 Doris \u8868\u540D"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"label_prefix"})}),(0,i.jsxs)(e.td,{children:["Doris Stream Load Label \u524D\u7F00\uFF0C\u6700\u7EC8\u751F\u6210\u7684 Label \u4E3A ",(0,i.jsxs)(e.em,{children:["{label_prefix}",(0,i.jsx)(e.em,{children:"{db}"}),"{table}",(0,i.jsx)(e.em,{children:"{yyyymmdd_hhmmss}"}),"{uuid}"]})," \uFF0C\u9ED8\u8BA4\u503C\u662F logstash"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"headers"})}),(0,i.jsx)(e.td,{children:'Doris Stream Load \u7684 headers \u53C2\u6570\uFF0C\u8BED\u6CD5\u683C\u5F0F\u4E3A ruby map\uFF0C\u4F8B\u5982\uFF1Aheaders => { "format" => "json" "read_json_by_line" => "true" }'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"mapping"})}),(0,i.jsx)(e.td,{children:"Logstash \u5B57\u6BB5\u5230 Doris \u8868\u5B57\u6BB5\u7684\u6620\u5C04\uFF0C \u53C2\u8003\u540E\u7EED\u7AE0\u8282\u7684\u4F7F\u7528\u793A\u4F8B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"message_only"})}),(0,i.jsx)(e.td,{children:"\u4E00\u79CD\u7279\u6B8A\u7684 mapping \u5F62\u5F0F\uFF0C\u53EA\u5C06 Logstash \u7684 @message \u5B57\u6BB5\u8F93\u51FA\u5230 Doris\uFF0C\u9ED8\u8BA4\u4E3A false"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"max_retries"})}),(0,i.jsx)(e.td,{children:"Doris Stream Load \u8BF7\u6C42\u5931\u8D25\u91CD\u8BD5\u6B21\u6570\uFF0C\u9ED8\u8BA4\u4E3A -1 \u65E0\u9650\u91CD\u8BD5\u4FDD\u8BC1\u6570\u636E\u53EF\u9760\u6027"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"log_request"})}),(0,i.jsx)(e.td,{children:"\u65E5\u5FD7\u4E2D\u662F\u5426\u8F93\u51FA Doris Stream Load \u8BF7\u6C42\u548C\u54CD\u5E94\u5143\u6570\u636E\uFF0C\u7528\u4E8E\u6392\u67E5\u95EE\u9898\uFF0C\u9ED8\u8BA4\u4E3A false"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"log_speed_interval"})}),(0,i.jsx)(e.td,{children:"\u65E5\u5FD7\u4E2D\u8F93\u51FA\u901F\u5EA6\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u662F\u79D2\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u5173\u95ED\u8FD9\u79CD\u65E5\u5FD7"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsx)(e.h3,{id:"text-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",children:"TEXT \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u8BE5\u793A\u4F8B\u4EE5 Doris FE \u7684\u65E5\u5FD7\u4E3A\u4F8B\u5C55\u793A TEXT \u65E5\u5FD7\u91C7\u96C6\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"1. \u6570\u636E"})}),"\n",(0,i.jsx)(e.p,{children:"FE \u65E5\u5FD7\u6587\u4EF6\u4E00\u822C\u4F4D\u4E8E Doris \u5B89\u88C5\u76EE\u5F55\u4E0B\u7684 fe/log/fe.log \u6587\u4EF6\uFF0C\u662F\u5178\u578B\u7684 Java \u7A0B\u5E8F\u65E5\u5FD7\uFF0C\u5305\u62EC\u65F6\u95F4\u6233\uFF0C\u65E5\u5FD7\u7EA7\u522B\uFF0C\u7EBF\u7A0B\u540D\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF0C\u65E5\u5FD7\u5185\u5BB9\u7B49\u5B57\u6BB5\u3002\u4E0D\u4EC5\u6709\u6B63\u5E38\u7684\u65E5\u5FD7\uFF0C\u8FD8\u6709\u5E26 stacktrace \u7684\u5F02\u5E38\u65E5\u5FD7\uFF0Cstacktrace \u662F\u8DE8\u884C\u7684\uFF0C\u65E5\u5FD7\u91C7\u96C6\u5B58\u50A8\u9700\u8981\u628A\u4E3B\u65E5\u5FD7\u548C stacktrace \u7EC4\u5408\u6210\u4E00\u6761\u65E5\u5FD7\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2024-07-08 21:18:01,432 INFO (Statistics Job Appender|61) [StatisticsJobAppender.runAfterCatalogReady():70] Stats table not available, skip\n2024-07-08 21:18:53,710 WARN (STATS_FETCH-0|208) [StmtExecutor.executeInternalQuery():3332] Failed to run internal SQL: OriginStatement{originStmt='SELECT * FROM __internal_schema.column_statistics WHERE part_id is NULL  ORDER BY update_time DESC LIMIT 500000', idx=0}\norg.apache.doris.common.UserException: errCode = 2, detailMessage = tablet 10031 has no queryable replicas. err: replica 10032's backend 10008 does not exist or not alive\n        at org.apache.doris.planner.OlapScanNode.addScanRangeLocations(OlapScanNode.java:931) ~[doris-fe.jar:1.2-SNAPSHOT]\n        at org.apache.doris.planner.OlapScanNode.computeTabletInfo(OlapScanNode.java:1197) ~[doris-fe.jar:1.2-SNAPSHOT]\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"2. \u5EFA\u8868"})}),"\n",(0,i.jsx)(e.p,{children:"\u8868\u7ED3\u6784\u5305\u62EC\u65E5\u5FD7\u7684\u4EA7\u751F\u65F6\u95F4\uFF0C\u91C7\u96C6\u65F6\u95F4\uFF0C\u4E3B\u673A\u540D\uFF0C\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\uFF0C\u65E5\u5FD7\u7C7B\u578B\uFF0C\u65E5\u5FD7\u7EA7\u522B\uFF0C\u7EBF\u7A0B\u540D\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF0C\u65E5\u5FD7\u5185\u5BB9\u7B49\u5B57\u6BB5\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'CREATE TABLE `doris_log` (\n  `log_time` datetime NULL COMMENT \'log content time\',\n  `collect_time` datetime NULL COMMENT \'log agent collect time\',\n  `host` text NULL COMMENT \'hostname or ip\',\n  `path` text NULL COMMENT \'log file path\',\n  `type` text NULL COMMENT \'log type\',\n  `level` text NULL COMMENT \'log level\',\n  `thread` text NULL COMMENT \'log thread\',\n  `position` text NULL COMMENT \'log code position\',\n  `message` text NULL COMMENT \'log message\',\n  INDEX idx_host (`host`) USING INVERTED COMMENT \'\',\n  INDEX idx_path (`path`) USING INVERTED COMMENT \'\',\n  INDEX idx_type (`type`) USING INVERTED COMMENT \'\',\n  INDEX idx_level (`level`) USING INVERTED COMMENT \'\',\n  INDEX idx_thread (`thread`) USING INVERTED COMMENT \'\',\n  INDEX idx_position (`position`) USING INVERTED COMMENT \'\',\n  INDEX idx_message (`message`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true") COMMENT \'\'\n) ENGINE=OLAP\nDUPLICATE KEY(`log_time`)\nCOMMENT \'OLAP\'\nPARTITION BY RANGE(`log_time`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-7",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.create_history_partition" = "true",\n"compaction_policy" = "time_series"\n);\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"3. Logstash \u914D\u7F6E"})}),"\n",(0,i.jsx)(e.p,{children:"Logstash \u4E3B\u8981\u6709\u4E24\u7C7B\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E00\u7C7B\u662F\u6574\u4E2A Logstash \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53E6\u4E00\u7C7B\u662F\u67D0\u4E2A\u65E5\u5FD7\u91C7\u96C6\u7684\u914D\u7F6E\u6587\u4EF6\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6574\u4E2A Logstash \u7684\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u5728 config/logstash.yml\uFF0C\u4E3A\u4E86\u63D0\u5347\u5199\u5165 Doris \u7684\u6027\u80FD\u9700\u8981\u4FEE\u6539 batch \u5927\u5C0F\u548C\u6512\u6279\u65F6\u95F4\uFF0C\u5BF9\u4E8E\u5E73\u5747\u6BCF\u6761i\u51E0\u767E\u5B57\u8282\u7684\u65E5\u5FD7\uFF0C\u63A8\u8350 100 \u4E07\u884C\u548C 10s \u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"pipeline.batch.size: 1000000\npipeline.batch.delay: 10000\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u67D0\u4E2A\u65E5\u5FD7\u91C7\u96C6\u7684\u914D\u7F6E\u6587\u4EF6\u5982 logstash_doris_log.conf \u4E3B\u8981\u7531 3 \u90E8\u5206\u7EC4\u6210\uFF0C\u5206\u522B\u5BF9\u5E94 ETL \u7684\u5404\u4E2A\u90E8\u5206\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"input \u8D1F\u8D23\u8BFB\u53D6\u539F\u59CB\u6570\u636E"}),"\n",(0,i.jsx)(e.li,{children:"filter \u8D1F\u8D23\u505A\u6570\u636E\u8F6C\u6362"}),"\n",(0,i.jsx)(e.li,{children:"output \u8D1F\u8D23\u5C06\u6570\u636E\u8F93\u51FA"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'\n# 1. input \u8D1F\u8D23\u8BFB\u53D6\u539F\u59CB\u6570\u636E\n# file input \u662F\u4E00\u4E2A input plugin\uFF0C\u53EF\u4EE5\u914D\u7F6E\u8BFB\u53D6\u7684\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\uFF0C\u901A\u8FC7 multiline codec \u5C06\u975E\u65F6\u95F4\u5F00\u5934\u7684\u884C\u62FC\u63A5\u5230\u4E0A\u4E00\u884C\u540E\u9762\uFF0C\u5B9E\u73B0 stacktrace \u548C\u4E3B\u65E5\u5FD7\u5408\u5E76\u7684\u6548\u679C\u3002file input \u4F1A\u5C06\u65E5\u5FD7\u5185\u5BB9\u4FDD\u5B58\u5728 @message \u5B57\u6BB5\u4E2D\uFF0C\u53E6\u5916\u8FD8\u6709\u4E00\u4E9B\u5143\u6570\u636E\u5B57\u6BB5\u6BD4\u5982 host\uFF0Clog.file.path\uFF0C\u8FD9\u91CC\u6211\u4EEC\u8FD8\u901A\u8FC7 add_field \u624B\u52A8\u6DFB\u52A0\u4E86\u4E00\u4E2A\u5B57\u6BB5 type\uFF0C\u5B83\u7684\u503C\u4E3A fe.log \u3002\ninput {\n    file {\n        path => "/mnt/disk2/xiaokang/opt/doris_master/fe/log/fe.log"\n        add_field => {"type" => "fe.log"}\n        codec => multiline {\n            # valid line starts with timestamp\n            pattern => "^%{TIMESTAMP_ISO8601} "\n            # any line not starting with a timestamp should be merged with the previous line\n            negate => true\n            what => "previous"\n        }\n    }\n}\n\n# 2. filter \u90E8\u5206\u8D1F\u8D23\u6570\u636E\u8F6C\u6362\n# grok \u662F\u4E00\u4E2A\u5E38\u7528\u7684\u6570\u636E\u8F6C\u6362\u63D2\u4EF6\uFF0C\u5B83\u5185\u7F6E\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684pattern \u6BD4\u5982 TIMESTAMP_ISO8601 \u89E3\u6790\u65F6\u95F4\u6233\uFF0C\u8FD8\u652F\u6301\u5199\u6B63\u5219\u8868\u8FBE\u5F0F\u63D0\u53D6\u5B57\u6BB5\u3002\nfilter {\n    grok {\n        match => {\n            # parse log_time, level, thread, position fields from message\n            "message" => "%{TIMESTAMP_ISO8601:log_time} (?<level>[A-Z]+) \\((?<thread>[^\\[]*)\\) \\[(?<position>[^\\]]*)\\]"\n        }\n    }\n}\n\n# 3. output \u90E8\u5206\u8D1F\u8D23\u6570\u636E\u8F93\u51FA\n# doris output \u5C06\u6570\u636E\u8F93\u51FA\u5230 Doris\uFF0C\u4F7F\u7528\u7684\u662F Stream Load HTTP \u63A5\u53E3\u3002\u901A\u8FC7 headers \u53C2\u6570\u6307\u5B9A\u4E86 Stream Load \u7684\u6570\u636E\u683C\u5F0F\u4E3A JSON\uFF0C\u901A\u8FC7 mapping \u53C2\u6570\u6307\u5B9A Logstash \u5B57\u6BB5\u5230 JSON \u5B57\u6BB5\u7684\u6620\u5C04\u3002\u7531\u4E8E headers \u6307\u5B9A\u4E86 "format" => "json"\uFF0CStream Load \u4F1A\u81EA\u52A8\u89E3\u6790 JSON \u5B57\u6BB5\u5199\u5165\u5BF9\u5E94\u7684 Doris \u8868\u7684\u5B57\u6BB5\u3002\noutput {\n    doris {\n        http_hosts => ["http://localhost:8630"]\n        user => "root"\n        password => ""\n        db => "log_db"\n        table => "doris_log"\n        headers => {\n          "format" => "json"\n          "read_json_by_line" => "true"\n          "load_to_single_tablet" => "true"\n        }\n        mapping => {\n          "log_time" => "%{log_time}"\n          "collect_time" => "%{@timestamp}"\n          "host" => "%{[host][name]}"\n          "path" => "%{[log][file][path]}"\n          "type" => "%{type}"\n          "level" => "%{level}"\n          "thread" => "%{thread}"\n          "position" => "%{position}"\n          "message" => "%{message}"\n        }\n        log_request => true\n    }\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"4. \u8FD0\u884C Logstash"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'\n${LOGSTASH_HOME}/bin/logstash -f config/logstash_doris_log.conf\n\n# log_request \u4E3A true \u65F6\u65E5\u5FD7\u4F1A\u8F93\u51FA\u6BCF\u6B21 Stream Load \u7684\u8BF7\u6C42\u53C2\u6570\u548C\u54CD\u5E94\u7ED3\u679C\n\n[2024-07-08T22:35:34,772][INFO ][logstash.outputs.doris   ][main][e44d2a24f17d764647ce56f5fed24b9bbf08d3020c7fddcc3298800daface80a] doris stream load response:\n{\n    "TxnId": 45464,\n    "Label": "logstash_log_db_doris_log_20240708_223532_539_6c20a0d1-dcab-4b8e-9bc0-76b46a929bd1",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 452,\n    "NumberLoadedRows": 452,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 277230,\n    "LoadTimeMs": 1797,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 18,\n    "ReadDataTimeMs": 9,\n    "WriteDataTimeMs": 1758,\n    "CommitAndPublishTimeMs": 18\n}\n\n# \u9ED8\u8BA4\u6BCF\u9694 10s \u4F1A\u65E5\u5FD7\u8F93\u51FA\u901F\u5EA6\u4FE1\u606F\uFF0C\u5305\u62EC\u81EA\u542F\u52A8\u4EE5\u6765\u7684\u6570\u636E\u91CF\uFF08MB \u548C ROWS\uFF09\uFF0C\u603B\u901F\u5EA6\uFF08MB/s \u548C R/S\uFF09\uFF0C\u6700\u8FD1 10s \u901F\u5EA6\n[2024-07-08T22:35:38,285][INFO ][logstash.outputs.doris   ][main] total 11 MB 18978 ROWS, total speed 0 MB/s 632 R/s, last 10 seconds speed 1 MB/s 1897 R/s\n'})}),"\n",(0,i.jsx)(e.h3,{id:"json-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",children:"JSON \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u8BE5\u6837\u4F8B\u4EE5 github events archive \u7684\u6570\u636E\u4E3A\u4F8B\u5C55\u793A JSON \u65E5\u5FD7\u91C7\u96C6\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"1. \u6570\u636E"})}),"\n",(0,i.jsxs)(e.p,{children:["github events archive \u662F github \u7528\u6237\u64CD\u4F5C\u4E8B\u4EF6\u7684\u5F52\u6863\u6570\u636E\uFF0C\u683C\u5F0F\u662F JSON\uFF0C\u53EF\u4EE5\u4ECE ",(0,i.jsx)(e.a,{href:"https://www.gharchive.org/",children:"https://www.gharchive.org/"})," \u4E0B\u8F7D\uFF0C\u6BD4\u5982\u4E0B\u8F7D 2024\u5E741\u67081\u65E515\u70B9\u7684\u6570\u636E\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"wget https://data.gharchive.org/2024-01-01-15.json.gz\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4E0B\u9762\u662F\u4E00\u6761\u6570\u636E\u6837\u4F8B\uFF0C\u5B9E\u9645\u4E00\u6761\u6570\u636E\u4E00\u884C\uFF0C\u8FD9\u91CC\u4E3A\u4E86\u65B9\u4FBF\u5C55\u793A\u8FDB\u884C\u4E86\u683C\u5F0F\u5316\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'{\n  "id": "37066529221",\n  "type": "PushEvent",\n  "actor": {\n    "id": 46139131,\n    "login": "Bard89",\n    "display_login": "Bard89",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/Bard89",\n    "avatar_url": "https://avatars.githubusercontent.com/u/46139131?"\n  },\n  "repo": {\n    "id": 780125623,\n    "name": "Bard89/talk-to-me",\n    "url": "https://api.github.com/repos/Bard89/talk-to-me"\n  },\n  "payload": {\n    "repository_id": 780125623,\n    "push_id": 17799451992,\n    "size": 1,\n    "distinct_size": 1,\n    "ref": "refs/heads/add_mvcs",\n    "head": "f03baa2de66f88f5f1754ce3fa30972667f87e81",\n    "before": "85e6544ede4ae3f132fe2f5f1ce0ce35a3169d21"\n  },\n  "public": true,\n  "created_at": "2024-04-01T23:00:00Z"\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"2. Doris \u5EFA\u8868"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'CREATE DATABASE log_db;\nUSE log_db;\n\n\nCREATE TABLE github_events\n(\n  `created_at` DATETIME,\n  `id` BIGINT,\n  `type` TEXT,\n  `public` BOOLEAN,\n  `actor.id` BIGINT,\n  `actor.login` TEXT,\n  `actor.display_login` TEXT,\n  `actor.gravatar_id` TEXT,\n  `actor.url` TEXT,\n  `actor.avatar_url` TEXT,\n  `repo.id` BIGINT,\n  `repo.name` TEXT,\n  `repo.url` TEXT,\n  `payload` TEXT,\n  `host` TEXT,\n  `path` TEXT,\n  INDEX `idx_id` (`id`) USING INVERTED,\n  INDEX `idx_type` (`type`) USING INVERTED,\n  INDEX `idx_actor.id` (`actor.id`) USING INVERTED,\n  INDEX `idx_actor.login` (`actor.login`) USING INVERTED,\n  INDEX `idx_repo.id` (`repo.id`) USING INVERTED,\n  INDEX `idx_repo.name` (`repo.name`) USING INVERTED,\n  INDEX `idx_host` (`host`) USING INVERTED,\n  INDEX `idx_path` (`path`) USING INVERTED,\n  INDEX `idx_payload` (`payload`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true")\n)\nENGINE = OLAP\nDUPLICATE KEY(`created_at`)\nPARTITION BY RANGE(`created_at`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"compaction_policy" = "time_series",\n"enable_single_replica_compaction" = "true",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.create_history_partition" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-30",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.replication_num" = "1"\n);\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"3. Logstash \u914D\u7F6E"})}),"\n",(0,i.jsx)(e.p,{children:"\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u548C\u4E4B\u524D TEXT \u65E5\u5FD7\u91C7\u96C6\u4E0D\u540C\u7684\u6709\u4E0B\u9762\u51E0\u70B9\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"file input \u7684 codec \u53C2\u6570\u662F json\uFF0CLogstash \u4F1A\u5C06\u6BCF\u4E00\u884C\u6587\u672C\u5F53\u4F5C JSON \u683C\u5F0F\u89E3\u6790\uFF0C\u89E3\u6790\u51FA\u6765\u7684\u5B57\u6BB5\u7528\u4E8E\u540E\u7EED\u5904\u7406"}),"\n",(0,i.jsx)(e.li,{children:"\u6CA1\u6709\u7528 filter plugin\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u989D\u5916\u7684\u5904\u7406\u8F6C\u6362"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'input {\n    file {\n        path => "/tmp/github_events/2024-04-01-23.json"\n        codec => json\n    }\n}\n\noutput {\n    doris {\n        http_hosts => ["http://fe1:8630", "http://fe2:8630", "http://fe3:8630"]\n        user => "root"\n        password => ""\n        db => "log_db"\n        table => "github_events"\n        headers => {\n          "format" => "json"\n          "read_json_by_line" => "true"\n          "load_to_single_tablet" => "true"\n        }\n        mapping => {\n          "created_at" => "%{created_at}"\n          "id" => "%{id}"\n          "type" => "%{type}"\n          "public" => "%{public}"\n          "actor.id" => "%{[actor][id]}"\n          "actor.login" => "%{[actor][login]}"\n          "actor.display_login" => "%{[actor][display_login]}"\n          "actor.gravatar_id" => "%{[actor][gravatar_id]}"\n          "actor.url" => "%{[actor][url]}"\n          "actor.avatar_url" => "%{[actor][avatar_url]}"\n          "repo.id" => "%{[repo][id]}"\n          "repo.name" => "%{[repo][name]}"\n          "repo.url" => "%{[repo][url]}"\n          "payload" => "%{[payload]}"\n          "host" => "%{[host][name]}"\n          "path" => "%{[log][file][path]}"\n        }\n        log_request => true\n    }\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"4. \u8FD0\u884C Logstash"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"${LOGSTASH_HOME}/bin/logstash -f logstash_github_events.conf\n"})})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);