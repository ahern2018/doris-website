"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["665752"],{730290:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"admin-manual/workload-management/job-scheduler","title":"Job Scheduler","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/workload-management/job-scheduler.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/job-scheduler","permalink":"/docs/admin-manual/workload-management/job-scheduler","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Job Scheduler","language":"en"},"sidebar":"docs","previous":{"title":"Kill Query","permalink":"/docs/admin-manual/workload-management/kill-query"},"next":{"title":"Disaster Recovery Management Overview","permalink":"/docs/admin-manual/data-admin/overview"}}'),s=i("785893"),a=i("250065");let r={title:"Job Scheduler",language:"en"},d=void 0,l={},o=[{value:"Background",id:"background",level:2},{value:"Job Scheduler",id:"job-scheduler",level:2},{value:"Syntax Explanation",id:"syntax-explanation",level:2},{value:"Examples Below:",id:"examples-below",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Data Automatic Synchronization Based on Catalog and Job Scheduler",id:"data-automatic-synchronization-based-on-catalog-and-job-scheduler",level:2},{value:"Design and Implementation",id:"design-and-implementation",level:2},{value:"Future Plans",id:"future-plans",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(n.p,{children:"In the context of increasing demands for refined data management, scheduled scheduling plays an important role. It is typically applied in the following scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Regular data updates, such as periodic data imports and ETL operations, reducing manual intervention and improving the efficiency and accuracy of data processing."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Synchronizing external data sources with Catalog to ensure efficient and accurate integration of multi-source data into the target system, meeting complex business analysis needs."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Regularly cleaning up expired/invalid data to free up storage space and prevent excessive expired/invalid data from impacting system performance."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In versions of Apache Doris prior to 2.1, it was typically necessary to rely on external scheduling systems, such as scheduling via business code or introducing third-party scheduling tools and distributed scheduling platforms to meet the above requirements. However, due to limitations of the external systems themselves, they may not be able to satisfy Doris's requirements for scheduling strategy and resource management flexibility. Additionally, if the external scheduling system fails, it not only increases business risks but also requires additional operational time and manpower to address."}),"\n",(0,s.jsx)(n.h2,{id:"job-scheduler",children:"Job Scheduler"}),"\n",(0,s.jsx)(n.p,{children:"To solve the above problems, Apache Doris introduced the Job Scheduler feature in version 2.1, achieving autonomous task scheduling capabilities with scheduling precision reaching the second level. The introduction of this feature not only ensures the integrity and consistency of data imports but also allows users to flexibly and conveniently adjust scheduling strategies. At the same time, by reducing dependence on external systems, it also lowers the risk of system failures and operational costs, providing community users with a more unified and reliable user experience."}),"\n",(0,s.jsx)(n.p,{children:"Doris Job Scheduler is a task management system based on preset schedules, capable of triggering predefined operations at specific points in time or at specified time intervals, achieving automated task execution. The Job Scheduler has the following features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficient scheduling"}),": The Job Scheduler can arrange tasks and events within specified time intervals, ensuring the efficiency of data processing. It uses a time wheel algorithm to ensure events can be triggered precisely at the second level."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexible scheduling"}),": The Job Scheduler provides multiple scheduling options, such as scheduling at minute, hour, day, or week intervals. It also supports one-time scheduling as well as recurring (periodic) event scheduling, and periodic scheduling can specify start and end times."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Event pool and high-performance processing queue"}),": The Job Scheduler uses Disruptor to implement a high-performance producer-consumer model, maximizing the avoidance of task execution overload."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Traceable scheduling records"}),": The Job Scheduler stores the latest Task execution records (configurable). Task execution records can be viewed through simple commands, ensuring process traceability."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"High availability"}),": Leveraging Doris's own high-availability mechanisms, the Job Scheduler can easily achieve self-recovery and high availability."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Related Documentation:"})," ",(0,s.jsx)(n.a,{href:"/docs/sql-manual/sql-statements/job/CREATE-JOB",children:"CREATE-JOB"})]}),"\n",(0,s.jsx)(n.h2,{id:"syntax-explanation",children:"Syntax Explanation"}),"\n",(0,s.jsx)(n.p,{children:"A valid Job statement must include the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The keyword ",(0,s.jsx)(n.strong,{children:"CREATE JOB"})," must be followed by the job name, which uniquely identifies the event in the database."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"ON SCHEDULE"})," clause is used to specify the type, trigger time, and frequency of the Job."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AT timestamp"})," is used for one-time events. It specifies that the JOB will execute only once at the given date and time, and ",(0,s.jsx)(n.strong,{children:"AT current_timestamp"})," specifies the current date and time. Since the JOB is created, it will run immediately and can also be used for asynchronous task creation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"EVERY"}),": Used for periodic jobs, specifying the execution frequency of the job. A time interval (week, day, hour, minute) must be specified after the keyword."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Interval"}),": Specifies the frequency of job execution. ",(0,s.jsx)(n.strong,{children:"1 DAY"})," means the job executes once a day, ",(0,s.jsx)(n.strong,{children:"1 HOUR"})," means once an hour, ",(0,s.jsx)(n.strong,{children:"1 MINUTE"})," means once a minute, and ",(0,s.jsx)(n.strong,{children:"1 WEEK"})," means once a week."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"EVERY"})," clause includes an optional ",(0,s.jsx)(n.strong,{children:"STARTS"})," clause. After ",(0,s.jsx)(n.strong,{children:"STARTS"})," is a timestamp value, which defines the start time for repetition, and ",(0,s.jsx)(n.strong,{children:"CURRENT_TIMESTAMP"})," specifies the current date and time. Once the JOB is created, it runs immediately."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"EVERY"})," clause includes an optional ",(0,s.jsx)(n.strong,{children:"ENDS"})," clause. After the ",(0,s.jsx)(n.strong,{children:"ENDS"})," keyword is a timestamp value, which defines the time when the JOB event stops running."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"DO"})," clause is used to specify the operation to be performed when the Job is triggered. Currently, only ",(0,s.jsx)(n.strong,{children:"INSERT"})," statements are supported."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE\nJOB\n  job_name\n  ON SCHEDULE schedule\n  [COMMENT 'string']\n  DO execute_sql;\n\nschedule: {\n    AT timestamp\n    | EVERY interval\n    [STARTS timestamp ]\n    [ENDS timestamp ]\n}\ninterval:\n    quantity { WEEK |DAY | HOUR | MINUTE}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples-below",children:"Examples Below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 MINUTE DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This statement creates a job named ",(0,s.jsx)(n.code,{children:"my_job"})," that executes once every minute. The operation performed is importing data from ",(0,s.jsx)(n.code,{children:"db2.tbl2"})," into ",(0,s.jsx)(n.code,{children:"db1.tbl1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Create a one-time Job: Execute once at ",(0,s.jsx)(n.code,{children:"2025-01-01 00:00:00"}),", importing data from ",(0,s.jsx)(n.code,{children:"db2.tbl2"})," into ",(0,s.jsx)(n.code,{children:"db1.tbl1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE AT '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a periodic Job without a specified end time: Starting at ",(0,s.jsx)(n.code,{children:"2025-01-01 00:00:00"}),", execute once a day, importing data from ",(0,s.jsx)(n.code,{children:"db2.tbl2"})," into ",(0,s.jsx)(n.code,{children:"db1.tbl1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE  create_time >=  days_add(now(),-1);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a periodic Job with a specified end time: Starting at ",(0,s.jsx)(n.code,{children:"2025-01-01 00:00:00"}),", execute once a day, importing data from ",(0,s.jsx)(n.code,{children:"db2.tbl2"})," into ",(0,s.jsx)(n.code,{children:"db1.tbl1"}),", and end at ",(0,s.jsx)(n.code,{children:"2026-01-01 00:10:00"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' ENDS '2026-01-01 00:10:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE create_time >=  days_add(now(),-1);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Implementing Asynchronous Execution with Job: Although Jobs in Doris are created as synchronous tasks, their execution process is asynchronous. This feature makes Jobs highly suitable for implementing asynchronous tasks, such as common ",(0,s.jsx)(n.code,{children:"INSERT INTO SELECT"})," operations."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you need to import data from ",(0,s.jsx)(n.code,{children:"db2.tbl2"})," into ",(0,s.jsx)(n.code,{children:"db1.tbl1"}),", you only need to specify the JOB as a one-time task and set the start time to the current time."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE AT current_timestamp DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"data-automatic-synchronization-based-on-catalog-and-job-scheduler",children:"Data Automatic Synchronization Based on Catalog and Job Scheduler"}),"\n",(0,s.jsx)(n.p,{children:"Taking an e-commerce scenario as an example, users often need to extract business data from MySQL and synchronize this data into Doris for data analysis, thereby supporting precise marketing activities. The Job Scheduler can work in conjunction with the Multi Catalog data lake capability to efficiently complete periodic data synchronization across data sources."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS user.activity (\n    `user_id` INT NOT NULL,\n    `date` DATE NOT NULL,\n    `city` VARCHAR(20),\n    `age` SMALLINT,\n    `sex` TINYINT,\n    `last_visit_date` DATETIME DEFAULT '1970-01-01 00:00:00',\n    `cost` BIGINT DEFAULT '0',\n    `max_dwell_time` INT DEFAULT '0',\n    `min_dwell_time` INT DEFAULT '99999'\n);\nINSERT INTO user.activity VALUES\n    (10000, '2017-10-01', 'BeiJing', 20, 0, '2017-10-01 06:00:00', 20, 10, 10),\n    (10000, '2017-10-01', 'BeiJing', 20, 0, '2017-10-01 07:00:00', 15, 2, 2),\n    (10001, '2017-10-01', 'BeiJing', 30, 1, '2017-10-01 17:05:00', 2, 22, 22),\n    (10002, '2017-10-02', 'ShangHai', 20, 1, '2017-10-02 12:59:00', 200, 5, 5),\n    (10003, '2017-10-02', 'GuangZhou', 32, 0, '2017-10-02 11:20:00', 30, 11, 11),\n    (10004, '2017-10-01', 'ShenZhen', 35, 0, '2017-10-01 10:00:00', 100, 3, 3),\n    (10004, '2017-10-03', 'ShenZhen', 35, 0, '2017-10-03 10:20:00', 11, 6, 6);\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"user_id"}),(0,s.jsx)(n.th,{children:"date"}),(0,s.jsx)(n.th,{children:"city"}),(0,s.jsx)(n.th,{children:"age"}),(0,s.jsx)(n.th,{children:"sex"}),(0,s.jsx)(n.th,{children:"last_visit_date"}),(0,s.jsx)(n.th,{children:"cost"}),(0,s.jsx)(n.th,{children:"max_dwell_time"}),(0,s.jsx)(n.th,{children:"min_dwell_time"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10000"}),(0,s.jsx)(n.td,{children:"2017/10/1"}),(0,s.jsx)(n.td,{children:"BeiJing"}),(0,s.jsx)(n.td,{children:"20"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"2017/10/1 6:00"}),(0,s.jsx)(n.td,{children:"20"}),(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10000"}),(0,s.jsx)(n.td,{children:"2017/10/1"}),(0,s.jsx)(n.td,{children:"BeiJing"}),(0,s.jsx)(n.td,{children:"20"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"2017/10/1 7:00"}),(0,s.jsx)(n.td,{children:"15"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10001"}),(0,s.jsx)(n.td,{children:"2017/10/1"}),(0,s.jsx)(n.td,{children:"BeiJing"}),(0,s.jsx)(n.td,{children:"30"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"2017/10/1 17:05"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"22"}),(0,s.jsx)(n.td,{children:"22"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10002"}),(0,s.jsx)(n.td,{children:"2017/10/2"}),(0,s.jsx)(n.td,{children:"ShangHai"}),(0,s.jsx)(n.td,{children:"20"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"2017/10/2 12:59"}),(0,s.jsx)(n.td,{children:"200"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10003"}),(0,s.jsx)(n.td,{children:"2017/10/2"}),(0,s.jsx)(n.td,{children:"GuangZhou"}),(0,s.jsx)(n.td,{children:"32"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"2017/10/2 11:20"}),(0,s.jsx)(n.td,{children:"30"}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsx)(n.td,{children:"11"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10004"}),(0,s.jsx)(n.td,{children:"2017/10/1"}),(0,s.jsx)(n.td,{children:"ShenZhen"}),(0,s.jsx)(n.td,{children:"35"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"2017/10/1 10:00"}),(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10004"}),(0,s.jsx)(n.td,{children:"2017/10/3"}),(0,s.jsx)(n.td,{children:"ShenZhen"}),(0,s.jsx)(n.td,{children:"35"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"2017/10/3 10:20"}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Using the table above as an example, the user wants to query users who meet specific numerical conditions such as total spending amount, last visit time, gender, and city, and import the information of users who meet these conditions into Doris for subsequent targeted promotions."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"First, create a Doris table"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS user_activity\n  (\n  `user_id` LARGEINT NOT NULL COMMENT "\u7528\u6237 id",\n  `date` DATE NOT NULL,\n  `city` VARCHAR(20),\n  `age` SMALLINT,\n  `sex` TINYINT,\n  `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00",\n  `cost` BIGINT SUM DEFAULT "0",\n  `max_dwell_time` INT MAX DEFAULT "0",\n  `min_dwell_time` INT MIN DEFAULT "99999"\n  )\n  AGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\n  DISTRIBUTED BY HASH(`user_id`) BUCKETS 1\n  PROPERTIES (\n  "replication_allocation" = "tag.location.default: 1"\n  );\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Secondly, create a Catalog corresponding to the MySQL database."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG activity PROPERTIES (\n  "type"="jdbc",\n  "user"="root",\n  "password"="123456",\n  "jdbc_url" = "jdbc:mysql://127.0.0.1:3306/user?useSSL=false",\n  "driver_url" = "mysql-connector-java-5.1.49.jar",\n  "driver_class" = "com.mysql.jdbc.Driver"\n  );\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Finally, import MySQL data into Doris. Use the Catalog + Insert Into method to import the full dataset. Since full imports may cause system service fluctuations, it is usually recommended to perform this operation during business off-peak hours."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"One-time scheduling: As shown in the code below, use a one-time task to trigger the full import task at a scheduled time, with the trigger set for 3:00 AM."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE JOB one_time_load_job\n  ON SCHEDULE\n  AT '2024-8-10 03:00:00'\n  DO\n  INSERT INTO user_activity SELECT * FROM activity.user.activity\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Periodic scheduling: Users can also create a periodic scheduling task to update the latest data regularly."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE JOB schedule_load\n  ON SCHEDULE EVERY 1 DAY\n  DO\n  INSERT INTO user_activity SELECT * FROM activity.user.activity where last_visit_date >=  days_add(now(),-1)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"design-and-implementation",children:"Design and Implementation"}),"\n",(0,s.jsx)(n.p,{children:"Efficient scheduling often comes with significant resource consumption, and high-precision scheduling is even more demanding. The traditional approach involves using Java's built-in scheduling capabilities\u2014scheduled tasks that access threads periodically\u2014or using various scheduling utility libraries. However, these methods have significant issues in terms of precision and memory usage. To better guarantee performance while reducing resource consumption, we chose to combine the TimingWheel algorithm with Disruptor to achieve second-level task scheduling."}),"\n",(0,s.jsxs)(n.p,{children:["Specifically, we use Netty's ",(0,s.jsx)(n.code,{children:"HashedWheelTimer"})," to implement the Timing Wheel algorithm. The Job Manager periodically (defaulting to every ten minutes) places future events into the timing wheel for scheduling. To ensure efficient task triggering and avoid excessive resource usage, we use Disruptor to build a single-producer, multiple-consumer model. The timing wheel only triggers events but does not execute tasks directly. For tasks that need to be triggered upon expiration, they are placed in the Dispatch thread, which is responsible for distributing the tasks to the appropriate execution thread pool. For tasks that need to be executed immediately, they are directly delivered to the corresponding task execution thread pool."]}),"\n",(0,s.jsx)(n.p,{children:"For one-time events, the event definition is deleted after the task is scheduled. For periodic events, system events in the timing wheel will regularly fetch the tasks for the next execution cycle. This helps avoid large numbers of tasks being concentrated in a single bucket, reducing unnecessary traversals and improving processing efficiency."}),"\n",(0,s.jsx)(n.p,{children:"For transactional tasks, the Job Scheduler can ensure that the execution results of transactional tasks match expectations through strong associations with transactions and the transaction callback mechanism, thus ensuring data integrity and consistency."}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(n.p,{children:"Doris Job Scheduler is a powerful and flexible task scheduling tool, an essential feature in data processing. In addition to common use cases such as data lake analytics and internal ETL, Job Scheduler also plays a key role in the implementation of asynchronous materialized views. An asynchronous materialized view is a precomputed and stored result set, where the frequency of data updates is closely related to changes in the source tables. When the source table data is updated frequently, periodic refreshing of the materialized view is required to keep its data up-to-date. In version 2.1, we cleverly utilized the JOB scheduling feature to ensure the consistency between materialized views and source table data, significantly reducing the cost of manual intervention."}),"\n",(0,s.jsx)(n.p,{children:"In the future, Doris Job Scheduler will also support the following features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Support for viewing the distribution of tasks executed during different time periods via the UI."}),"\n",(0,s.jsx)(n.li,{children:"Support for JOB workflow orchestration, i.e., DAG JOB. This means we can implement internal data warehouse task orchestration, and with the Catalog functionality, it will more efficiently complete data processing and analysis tasks."}),"\n",(0,s.jsx)(n.li,{children:"Support for scheduling import tasks, UPDATE, and DELETE operations."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return r}});var t=i(667294);let s={},a=t.createContext(s);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);