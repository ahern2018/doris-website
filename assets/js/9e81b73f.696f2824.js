"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["332143"],{177195:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"admin-manual/log-management/be-log","title":"BE Log Management","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/log-management/be-log.md","sourceDirName":"admin-manual/log-management","slug":"/admin-manual/log-management/be-log","permalink":"/docs/3.0/admin-manual/log-management/be-log","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BE Log Management","language":"en"},"sidebar":"docs","previous":{"title":"FE Log Management","permalink":"/docs/3.0/admin-manual/log-management/fe-log"},"next":{"title":"Monitor Metrics","permalink":"/docs/3.0/admin-manual/maint-monitor/metrics"}}'),o=t("785893"),l=t("250065");let i={title:"BE Log Management",language:"en"},r=void 0,d={},c=[{value:"Log Categories",id:"log-categories",level:2},{value:"Log Configuration",id:"log-configuration",level:2},{value:"Enable DEBUG Log",id:"enable-debug-log",level:2},{value:"Static Configuration",id:"static-configuration",level:3},{value:"Dynamic Modification",id:"dynamic-modification",level:3},{value:"Container Environment Log Configuration",id:"container-environment-log-configuration",level:2}];function a(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This document mainly introduces the log management of the Backend (BE) process."}),"\n",(0,o.jsx)(n.p,{children:"This document is applicable to Doris versions 2.1.4 and later."}),"\n",(0,o.jsx)(n.h2,{id:"log-categories",children:"Log Categories"}),"\n",(0,o.jsxs)(n.p,{children:["When starting the BE process using ",(0,o.jsx)(n.code,{children:"sh bin/start_be.sh --daemon"}),", the following types of log files will be generated in the BE log directory:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"be.INFO"}),"\n",(0,o.jsx)(n.p,{children:"BE process running log. The main log file for BE. All levels of BE process running logs (DEBUG, INFO, WARN, ERROR, etc.) will be printed to this log file."}),"\n",(0,o.jsx)(n.p,{children:"Note that this file is a symbolic link pointing to the current latest BE running log file."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"be.WARNING"}),"\n",(0,o.jsx)(n.p,{children:"BE process running log. However, only WARN level and above running logs will be printed. The content in be.WARNING is a subset of the be.INFO log content. It is mainly used for quickly viewing warning or error level logs."}),"\n",(0,o.jsx)(n.p,{children:"Note that this file is a symbolic link pointing to the current latest BE warning log file."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"be.out"}),"\n",(0,o.jsxs)(n.p,{children:["Used to receive standard output streams and error data streams. For example, output from ",(0,o.jsx)(n.code,{children:"echo"})," commands in start scripts, or other log information not captured by the glog framework. Usually used as a supplement to running logs."]}),"\n",(0,o.jsx)(n.p,{children:"Typically, in the event of a BE crash, you need to check this log to obtain the stack trace of the exception."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"jni.log"}),"\n",(0,o.jsx)(n.p,{children:"Logs printed by Java programs when the BE process calls Java programs through JNI."}),"\n",(0,o.jsx)(n.p,{children:"TODO: In future versions, this part of the logs will be unified into the be.INFO log."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"be.gc.log"}),"\n",(0,o.jsxs)(n.p,{children:["BE JVM's GC log. The behavior of this log is controlled by the JVM startup option ",(0,o.jsx)(n.code,{children:"JAVA_OPTS"})," in be.conf."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"log-configuration",children:"Log Configuration"}),"\n",(0,o.jsx)(n.p,{children:"Includes configuring log storage paths, retention time, retention count, size, etc."}),"\n",(0,o.jsxs)(n.p,{children:["The following configuration items are configured in the ",(0,o.jsx)(n.code,{children:"be.conf"})," file."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Configuration Item"}),(0,o.jsx)(n.th,{children:"Default Value"}),(0,o.jsx)(n.th,{children:"Options"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"LOG_DIR"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ENV(DORIS_HOME)/log"})}),(0,o.jsx)(n.td,{}),(0,o.jsxs)(n.td,{children:["Storage path for all logs. By default, it is the ",(0,o.jsx)(n.code,{children:"log/"})," directory under the BE deployment path. Note that this is an environment variable, and the configuration name needs to be in uppercase."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sys_log_level"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"INFO"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"INFO"}),", ",(0,o.jsx)(n.code,{children:"WARNING"}),", ",(0,o.jsx)(n.code,{children:"ERROR"}),", ",(0,o.jsx)(n.code,{children:"FATAL"})]}),(0,o.jsxs)(n.td,{children:["Log level for ",(0,o.jsx)(n.code,{children:"be.INFO"}),". Default is INFO. Not recommended to change, as INFO level contains many critical log information."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sys_log_roll_num"})}),(0,o.jsx)(n.td,{children:"10"}),(0,o.jsx)(n.td,{}),(0,o.jsxs)(n.td,{children:["Controls the maximum number of files for ",(0,o.jsx)(n.code,{children:"be.INFO"})," and ",(0,o.jsx)(n.code,{children:"be.WARNING"}),". Default is 10. When the number of log files exceeds this threshold due to log rolling or splitting, older log files will be deleted."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sys_log_verbose_modules"})}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:'Can set specific code directories to enable DEBUG level logs. See the "Enable DEBUG Logs" section for details.'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sys_log_verbose_level"})}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:'See the "Enable DEBUG Logs" section for details.'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sys_log_verbose_flags_v"})}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:'See the "Enable DEBUG Logs" section for details.'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sys_log_roll_mode"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"SIZE-MB-1024"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"TIME-DAY"}),", ",(0,o.jsx)(n.code,{children:"TIME-HOUR"}),", ",(0,o.jsx)(n.code,{children:"SIZE-MB-nnn"})]}),(0,o.jsxs)(n.td,{children:["Rolling strategy for ",(0,o.jsx)(n.code,{children:"be.INFO"})," and ",(0,o.jsx)(n.code,{children:"be.WARNING"})," logs. Default is ",(0,o.jsx)(n.code,{children:"SIZE-MB-1024"}),", meaning a new log file is generated after each log reaches 1024MB in size. Can also set to roll by day or hour."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"log_buffer_level"})}),(0,o.jsx)(n.td,{children:"Empty"}),(0,o.jsxs)(n.td,{children:["Empty or ",(0,o.jsx)(n.code,{children:"-1"})]}),(0,o.jsx)(n.td,{children:"BE log output mode. By default, BE logs are asynchronously flushed to disk log files. If set to -1, log content will be flushed in real-time. Real-time flushing affects log performance but can retain the latest logs as much as possible. This allows viewing the last log information in the event of a BE crash."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"disable_compaction_trace_log"})}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:"true, false"}),(0,o.jsx)(n.td,{children:"Default is true, meaning tracing logs for compaction operations are disabled. If set to false, tracing logs related to Compaction operations will be printed for troubleshooting."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"aws_log_level"})}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"Controls the log level for the AWS SDK. Default is 0, indicating AWS SDK logs are turned off. By default, AWS SDK logs are actively captured by glog and will be printed normally. In some cases, you may need to enable AWS SDK logs to view more uncaptured logs. Different numbers represent different log levels: Off = 0, Fatal = 1, Error = 2, Warn = 3, Info = 4, Debug = 5, Trace = 6."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"s3_file_writer_log_interval_second"})}),(0,o.jsx)(n.td,{children:"60"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"When performing S3 Upload operations, the progress of operations is printed every 60 seconds by default."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"enable_debug_log_timeout_secs"})}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"When the value is greater than 0, some detailed execution logs of the pipeline execution engine will be printed. Mainly used for troubleshooting. By default, this is turned off."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sys_log_enable_custom_date_time_format"})}),(0,o.jsx)(n.td,{children:"false"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"Whether to allow custom date format in logs (supported since version 2.1.7)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sys_log_custom_date_time_format"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"%Y-%m-%d %H:%M:%S"})}),(0,o.jsx)(n.td,{}),(0,o.jsxs)(n.td,{children:["The default custom format for log date, only effective when ",(0,o.jsx)(n.code,{children:"sys_log_enable_custom_date_time_forma"})," is ",(0,o.jsx)(n.code,{children:"true"})," (supported since version 2.1.7)"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sys_log_custom_date_time_ms_format"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:",{:03d}"})}),(0,o.jsx)(n.td,{}),(0,o.jsxs)(n.td,{children:["The default time precision in the log date. This is only effective when ",(0,o.jsx)(n.code,{children:"sys_log_enable_custom_date_time_format"})," is ",(0,o.jsx)(n.code,{children:"true"})," (supported since version 2.1.7)"]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"enable-debug-log",children:"Enable DEBUG Log"}),"\n",(0,o.jsx)(n.h3,{id:"static-configuration",children:"Static Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"sys_log_verbose_modules"})," and ",(0,o.jsx)(n.code,{children:"sys_log_verbose_level"})," in ",(0,o.jsx)(n.code,{children:"be.conf"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"sys_log_verbose_modules=plan_fragment_executor,olap_scan_node\nsys_log_verbose_level=3\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"sys_log_verbose_modules"})," Specifies the names of the files to be opened, which can be specified by the wildcard ",(0,o.jsx)(n.code,{children:"*"}),". For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"sys_log_verbose_modules=*\n"})}),"\n",(0,o.jsx)(n.p,{children:"will turn on all BE verbose log."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"sys_log_verbose_level"})," Indicates the level of DEBUG. The higher the number, the more detailed the DEBUG log. The value ranges from 1 to 10."]}),"\n",(0,o.jsx)(n.h3,{id:"dynamic-modification",children:"Dynamic Modification"}),"\n",(0,o.jsx)(n.p,{children:"Since 2.1, the DEBUG log of BE supports dynamic modification via the following RESTful API:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://<be_host>:<webport>/api/glog/adjust?module=<module_name>&level=<level_number>"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The dynamic adjustment method also supports wildcards, e.g. using ",(0,o.jsx)(n.code,{children:"module=*&level=10"})," will turn on all BE vlogs, but wildcards are not attached to individual module names. e.g. adjusting the vlog level of ",(0,o.jsx)(n.code,{children:"moduleA"})," to ",(0,o.jsx)(n.code,{children:"10"}),", then using ",(0,o.jsx)(n.code,{children:"module=*&level=-1"})," will ",(0,o.jsx)(n.strong,{children:"NOT"})," turn off the vlog of ",(0,o.jsx)(n.code,{children:"moduleA"}),"'s vlog."]}),"\n",(0,o.jsx)(n.p,{children:"Note: Dynamically adjusted configurations are not persisted and will expire after a BE reboot."}),"\n",(0,o.jsx)(n.p,{children:"In addition, GLOG will create the corresponding log module if the module does not exist (no real effect) and will not return an error, regardless of the method."}),"\n",(0,o.jsx)(n.h2,{id:"container-environment-log-configuration",children:"Container Environment Log Configuration"}),"\n",(0,o.jsx)(n.p,{children:"In some cases, the FE process is deployed through container environments (such as k8s). All logs need to be output through standard output streams instead of files."}),"\n",(0,o.jsxs)(n.p,{children:["At this time, you can start the BE process in the foreground and output all logs to the standard output stream by using the command ",(0,o.jsx)(n.code,{children:"sh bin/start_be.sh --console"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To distinguish different types of logs in the same standard output stream, a different prefix will be added before each log. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"RuntimeLogger W20240624 00:36:46.325274 1460943 olap_server.cpp:710] Have not get FE Master heartbeat yet\nRuntimeLogger I20240624 00:36:46.325999 1459644 olap_server.cpp:208] tablet checkpoint tasks producer thread started\nRuntimeLogger I20240624 00:36:46.326066 1460954 olap_server.cpp:448] begin to produce tablet meta checkpoint tasks.\nRuntimeLogger I20240624 00:36:46.326093 1459644 olap_server.cpp:213] tablet path check thread started\nRuntimeLogger I20240624 00:36:46.326190 1459644 olap_server.cpp:219] cache clean thread started\nRuntimeLogger I20240624 00:36:46.326336 1459644 olap_server.cpp:231] path gc threads started. number:1\nRuntimeLogger I20240624 00:36:46.326643 1460958 olap_server.cpp:424] try to start path gc thread!\n"})}),"\n",(0,o.jsx)(n.p,{children:"The meanings of different prefixes are as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"RuntimeLogger"}),": corresponds to the logs in ",(0,o.jsx)(n.code,{children:"fe.log"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Support for ",(0,o.jsx)(n.code,{children:"jni.log"})," will be added in future versions."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In addition, there is an additional configuration parameter for container environments:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Configuration Item"}),(0,o.jsx)(n.th,{children:"Default Value"}),(0,o.jsx)(n.th,{children:"Options"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"enable_file_logger"})}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:"true, false"}),(0,o.jsxs)(n.td,{children:["Whether to enable file logging. The default is ",(0,o.jsx)(n.code,{children:"true"}),". When starting the BE process with the ",(0,o.jsx)(n.code,{children:"--console"})," command, logs will be output to both the standard output stream and the normal log file. When set to ",(0,o.jsx)(n.code,{children:"false"}),", logs will only be output to the standard output stream and will not generate log files."]})]})})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let o={},l=s.createContext(o);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);