"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["439369"],{440442:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>o});var a=JSON.parse('{"id":"admin-manual/data-admin/backup","title":"Data Backup","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/data-admin/backup.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/backup","permalink":"/docs/2.0/admin-manual/data-admin/backup","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Data Backup","language":"en"},"sidebar":"docs","previous":{"title":"FQDN","permalink":"/docs/2.0/admin-manual/cluster-management/fqdn"},"next":{"title":"Data Restore","permalink":"/docs/2.0/admin-manual/data-admin/restore"}}'),r=n("785893"),s=n("250065");let o={title:"Data Backup",language:"en"},i="Data Backup",l={},c=[{value:"A brief explanation of the principle",id:"a-brief-explanation-of-the-principle",level:2},{value:"Start Backup",id:"start-backup",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Backup",id:"backup",level:3},{value:"Data Migration",id:"data-migration",level:3},{value:"Highlights",id:"highlights",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"More Help",id:"more-help",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"data-backup",children:"Data Backup"})}),"\n",(0,r.jsx)(t.p,{children:"Doris supports backing up the current data in the form of files to the remote storage system like S3 and HDFS. Afterwards, you can restore data from the remote storage system to any Doris cluster through the restore command. Through this function, Doris can support periodic snapshot backup of data. You can also use this function to migrate data between different clusters."}),"\n",(0,r.jsx)(t.p,{children:"This feature requires Doris version 0.8.2+"}),"\n",(0,r.jsx)(t.h2,{id:"a-brief-explanation-of-the-principle",children:"A brief explanation of the principle"}),"\n",(0,r.jsx)(t.p,{children:"The backup operation is to upload the data of the specified table or partition directly to the remote warehouse for storage in the form of files stored by Doris. When a user submits a Backup request, the system will perform the following operations:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Snapshot and snapshot upload"}),"\n",(0,r.jsx)(t.p,{children:"The snapshot phase takes a snapshot of the specified table or partition data file. After that, backups are all operations on snapshots. After the snapshot, changes, imports, etc. to the table no longer affect the results of the backup. Snapshots only generate a hard link to the current data file, which takes very little time. After the snapshot is completed, the snapshot files will be uploaded one by one. Snapshot uploads are done concurrently by each Backend."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Metadata preparation and upload"}),"\n",(0,r.jsx)(t.p,{children:"After the data file snapshot upload is complete, Frontend will first write the corresponding metadata to a local file, and then upload the local metadata file to the remote warehouse through the broker. Completing the final backup job"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Dynamic Partition Table Description"}),"\n",(0,r.jsx)(t.p,{children:"If the table is a dynamic partition table, the dynamic partition attribute will be automatically disabled after backup. When restoring, you need to manually enable the dynamic partition attribute of the table. The command is as follows:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE tbl1 SET ("dynamic_partition.enable"="true")\n'})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["Backup and Restore operation will NOT keep the ",(0,r.jsx)(t.code,{children:"colocate_with"})," property of a table."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"start-backup",children:"Start Backup"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a hdfs remote warehouse example_repo (S3 skips step 1):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'CREATE REPOSITORY `example_repo`\nWITH HDFS\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n"fs.defaultFS"="hdfs://hdfs_host:port",\n"hadoop.username" = "hadoop"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a remote repository for s3 : s3_repo (HDFS skips step 2)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://bucket_name/test"\nPROPERTIES\n(\n    "AWS_ENDPOINT" = "http://xxxx.xxxx.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "xxx"\n); \n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Note that."}),"\n",(0,r.jsx)(t.p,{children:"ON LOCATION is followed by Bucket Name here"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Full backup of table example_tbl under example_db to warehouse example_repo:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nON (example_tbl)\nPROPERTIES ("type" = "full");\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Under the full backup example_db, the p1, p2 partitions of the table example_tbl, and the table example_tbl2 to the warehouse example_repo:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON\n(\n   example_tbl PARTITION (p1,p2),\n   example_tbl2\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"View the execution of the most recent backup job:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"mysql> show BACKUP\\G;\n*************************** 1. row ***************************\n               JobId: 17891847\n        SnapshotName: snapshot_label1\n              DbName: example_db\n               State: FINISHED\n          BackupObjs: [default_cluster:example_db.example_tbl]\n          CreateTime: 2022-04-08 15:52:29\nSnapshotFinishedTime: 2022-04-08 15:52:32\n  UploadFinishedTime: 2022-04-08 15:52:38\n        FinishedTime: 2022-04-08 15:52:44\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              Status: [OK]\n             Timeout: 86400\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"View existing backups in remote repositories:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'mysql> SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "snapshot_label1";\n+-----------------+---------------------+--------+\n| Snapshot        | Timestamp           | Status |\n+-----------------+---------------------+--------+\n| snapshot_label1 | 2022-04-08-15-52-29 | OK     |\n+-----------------+---------------------+--------+\n1 row in set (0.15 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For the detailed usage of BACKUP, please refer to ",(0,r.jsx)(t.a,{href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsx)(t.h3,{id:"backup",children:"Backup"}),"\n",(0,r.jsx)(t.p,{children:"Currently, we support full backup with the smallest partition (Partition) granularity (incremental backup may be supported in future versions). If you need to back up data regularly, you first need to plan the partitioning and bucketing of the table reasonably when building the table, such as partitioning by time. Then, in the subsequent running process, regular data backups are performed according to the partition granularity."}),"\n",(0,r.jsx)(t.h3,{id:"data-migration",children:"Data Migration"}),"\n",(0,r.jsx)(t.p,{children:"Users can back up the data to the remote warehouse first, and then restore the data to another cluster through the remote warehouse to complete the data migration. Because data backup is done in the form of snapshots, new imported data after the snapshot phase of the backup job will not be backed up. Therefore, after the snapshot is completed and until the recovery job is completed, the data imported on the original cluster needs to be imported again on the new cluster."}),"\n",(0,r.jsx)(t.p,{children:"It is recommended to import the new and old clusters in parallel for a period of time after the migration is complete. After verifying the correctness of data and services, migrate services to a new cluster."}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Operations related to backup and recovery are currently only allowed to be performed by users with ADMIN privileges."}),"\n",(0,r.jsx)(t.li,{children:"Within a database, only one backup or restore job is allowed to be executed."}),"\n",(0,r.jsx)(t.li,{children:"Both backup and recovery support operations at the minimum partition (Partition) level. When the amount of data in the table is large, it is recommended to perform operations by partition to reduce the cost of failed retry."}),"\n",(0,r.jsxs)(t.li,{children:["Because of the backup and restore operations, the operations are the actual data files. Therefore, when a table has too many shards, or a shard has too many small versions, it may take a long time to backup or restore even if the total amount of data is small. Users can use ",(0,r.jsx)(t.code,{children:"SHOW PARTITIONS FROM table_name;"})," and ",(0,r.jsx)(t.code,{children:"SHOW TABLETS FROM table_name;"})," to view the number of shards in each partition and the number of file versions in each shard to estimate job execution time. The number of files has a great impact on the execution time of the job. Therefore, it is recommended to plan partitions and buckets reasonably when creating tables to avoid excessive sharding."]}),"\n",(0,r.jsxs)(t.li,{children:["When checking job status via ",(0,r.jsx)(t.code,{children:"SHOW BACKUP"})," or ",(0,r.jsx)(t.code,{children:"SHOW RESTORE"})," command. It is possible to see error messages in the ",(0,r.jsx)(t.code,{children:"TaskErrMsg"})," column. But as long as the ",(0,r.jsx)(t.code,{children:"State"})," column is not ",(0,r.jsx)(t.code,{children:"CANCELLED"}),", the job is still continuing. These tasks may retry successfully. Of course, some Task errors will also directly cause the job to fail."]}),"\n",(0,r.jsxs)(t.li,{children:["If the recovery job is an overwrite operation (specifying the recovery data to an existing table or partition), then from the ",(0,r.jsx)(t.code,{children:"COMMIT"})," phase of the recovery job, the overwritten data on the current cluster may no longer be restored. If the restore job fails or is canceled at this time, the previous data may be damaged and inaccessible. In this case, the only way to do it is to perform the recovery operation again and wait for the job to complete. Therefore, we recommend that if unnecessary, try not to restore data by overwriting unless it is confirmed that the current data is no longer used."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-commands",children:"Related Commands"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["The commands related to the backup and restore function are as follows. For the following commands, you can use ",(0,r.jsx)(t.code,{children:"help cmd;"})," to view detailed help after connecting to Doris through mysql-client."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"CREATE REPOSITORY"}),"\n",(0,r.jsxs)(t.p,{children:["Create a remote repository path for backup or restore. Please refer to ",(0,r.jsx)(t.a,{href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",children:"Create Repository Reference"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"BACKUP"}),"\n",(0,r.jsxs)(t.p,{children:["Perform a backup operation. Please refer to ",(0,r.jsx)(t.a,{href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP",children:"Backup Reference"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"SHOW BACKUP"}),"\n",(0,r.jsxs)(t.p,{children:["View the execution of the most recent backup job. Please refer to ",(0,r.jsx)(t.a,{href:"../../sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/SHOW-BACKUP.md",children:"Show Backup Reference"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"SHOW SNAPSHOT"}),"\n",(0,r.jsxs)(t.p,{children:["View existing backups in the remote repository. Please refer to ",(0,r.jsx)(t.a,{href:"../../sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/SHOW-SNAPSHOT.md",children:"Show Snapshot Reference"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"CANCEL BACKUP"}),"\n",(0,r.jsx)(t.p,{children:"Cancel the currently executing backup job. Please refer to [Cancel Backup Reference] (../../sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP.md)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"DROP REPOSITORY"}),"\n",(0,r.jsx)(t.p,{children:"Delete the created remote repository. Deleting a warehouse only deletes the mapping of the warehouse in Doris, and does not delete the actual warehouse data. Please refer to [Drop Repository Reference] (../../sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY.md)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"more-help",children:"More Help"}),"\n",(0,r.jsxs)(t.p,{children:["For more detailed syntax and best practices used by BACKUP, please refer to the ",(0,r.jsx)(t.a,{href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP",children:"BACKUP"})," command manual, You can also type ",(0,r.jsx)(t.code,{children:"HELP BACKUP"})," on the MySql client command line for more help."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var a=n(667294);let r={},s=a.createContext(r);function o(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);