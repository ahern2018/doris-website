"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["261405"],{146403:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>t,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>c});var l=JSON.parse('{"id":"gettingStarted/quick-start","title":"\u5FEB\u901F\u4F53\u9A8C","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/gettingStarted/quick-start.md","sourceDirName":"gettingStarted","slug":"/gettingStarted/quick-start","permalink":"/zh-CN/docs/dev/gettingStarted/quick-start","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5FEB\u901F\u4F53\u9A8C","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Apache Doris \u7B80\u4ECB","permalink":"/zh-CN/docs/dev/gettingStarted/what-is-apache-doris"},"next":{"title":"\u8F6F\u786C\u4EF6\u73AF\u5883\u68C0\u67E5","permalink":"/zh-CN/docs/dev/install/preparation/env-checking"}}'),r=s("785893"),i=s("250065");let c={title:"\u5FEB\u901F\u4F53\u9A8C",language:"zh-CN"},t=void 0,a={},d=[{value:"\u4F7F\u7528 Docker \u5FEB\u901F\u90E8\u7F72",id:"\u4F7F\u7528-docker-\u5FEB\u901F\u90E8\u7F72",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u521B\u5EFA docker-compose.yaml \u6587\u4EF6",id:"\u7B2C-1-\u6B65\u521B\u5EFA-docker-composeyaml-\u6587\u4EF6",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u542F\u52A8\u96C6\u7FA4",id:"\u7B2C-2-\u6B65\u542F\u52A8\u96C6\u7FA4",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 MySQL \u5BA2\u6237\u7AEF\u8FDE\u63A5\u96C6\u7FA4\uFF0C\u5E76\u68C0\u67E5\u96C6\u7FA4\u72B6\u6001",id:"\u7B2C-3-\u6B65\u4F7F\u7528-mysql-\u5BA2\u6237\u7AEF\u8FDE\u63A5\u96C6\u7FA4\u5E76\u68C0\u67E5\u96C6\u7FA4\u72B6\u6001",level:3},{value:"\u672C\u5730\u5FEB\u901F\u90E8\u7F72",id:"\u672C\u5730\u5FEB\u901F\u90E8\u7F72",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305",id:"\u7B2C-1-\u6B65\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u4FEE\u6539\u73AF\u5883\u53D8\u91CF",id:"\u7B2C-2-\u6B65\u4FEE\u6539\u73AF\u5883\u53D8\u91CF",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u5B89\u88C5 FE",id:"\u7B2C-3-\u6B65\u5B89\u88C5-fe",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u5B89\u88C5 BE",id:"\u7B2C-4-\u6B65\u5B89\u88C5-be",level:3},{value:"\u8FD0\u884C\u67E5\u8BE2",id:"\u8FD0\u884C\u67E5\u8BE2",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{title:"\u8B66\u544A\uFF1A",type:"caution",children:[(0,r.jsxs)(n.p,{children:["\u5FEB\u901F\u90E8\u7F72",(0,r.jsx)(n.strong,{children:"\u4EC5\u9002\u7528\u4E8E\u672C\u5730\u5F00\u53D1"}),"\u3002\u8BF7\u52FF\u5C06\u8BE5\u79CD\u90E8\u7F72\u65B9\u5F0F\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\uFF1A"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 Docker \u65B9\u5F0F\u5FEB\u901F\u90E8\u7F72\uFF0C\u5F53 Docker \u5B9E\u4F8B\u9500\u6BC1\u65F6\uFF0C\u76F8\u5E94\u7684\u6570\u636E\u4E5F\u4F1A\u91CA\u653E\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u624B\u52A8\u90E8\u7F72\u5355\u526F\u672C Doris \u5B9E\u4F8B\uFF0C\u4E0D\u5177\u6709\u6570\u636E\u591A\u526F\u672C\u5B58\u50A8\u80FD\u529B\uFF0C\u5355\u53F0\u673A\u5668\u5B95\u673A\u53EF\u80FD\u4F1A\u9020\u6210\u6570\u636E\u4E22\u5931\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u672C\u793A\u4F8B\u4E2D\u7684\u5EFA\u8868\u5747\u4E3A\u5355\u526F\u672C\uFF0C\u5728\u751F\u4EA7\u4E2D\u8BF7\u4F7F\u7528\u591A\u526F\u672C\u5B58\u50A8\u6570\u636E\u3002"}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528-docker-\u5FEB\u901F\u90E8\u7F72",children:"\u4F7F\u7528 Docker \u5FEB\u901F\u90E8\u7F72"}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u521B\u5EFA-docker-composeyaml-\u6587\u4EF6",children:"\u7B2C 1 \u6B65\uFF1A\u521B\u5EFA docker-compose.yaml \u6587\u4EF6"}),"\n",(0,r.jsxs)(n.p,{children:["\u590D\u5236\u4EE5\u4E0B\u5185\u5BB9\u5230 docker-compose.yaml\uFF0C\u66FF\u6362 DORIS_QUICK_START_VERSION \u53C2\u6570\u4E3A\u6307\u5B9A\u7248\u672C\uFF0C\u5982 ",(0,r.jsx)(n.code,{children:"3.0.1"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'version: "3"\nservices:\n  fe:\n    image: apache/doris.fe-ubuntu:${DORIS_QUICK_START_VERSION}\n    hostname: fe\n    environment:\n     - FE_SERVERS=fe1:127.0.0.1:9010\n     - FE_ID=1\n    network_mode: host\n  be:\n    image: apache/doris.be-ubuntu:${DORIS_QUICK_START_VERSION}\n    hostname: be\n    environment:\n     - FE_SERVERS=fe1:127.0.0.1:9010\n     - BE_ADDR=127.0.0.1:9050\n    depends_on:\n      - fe\n    network_mode: host\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u542F\u52A8\u96C6\u7FA4",children:"\u7B2C 2 \u6B65\uFF1A\u542F\u52A8\u96C6\u7FA4"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 docker-compose \u547D\u4EE4\u542F\u52A8\u96C6\u7FA4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker-compose -f ./docker-compose.yaml up -d\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-mysql-\u5BA2\u6237\u7AEF\u8FDE\u63A5\u96C6\u7FA4\u5E76\u68C0\u67E5\u96C6\u7FA4\u72B6\u6001",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 MySQL \u5BA2\u6237\u7AEF\u8FDE\u63A5\u96C6\u7FA4\uFF0C\u5E76\u68C0\u67E5\u96C6\u7FA4\u72B6\u6001"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"## \u68C0\u67E5 FE \u72B6\u6001\uFF0C\u786E\u5B9A Join \u4E0E Alive \u5217\u90FD\u4E3A true\nmysql -uroot -P9030 -h127.0.0.1 -e 'SELECT `host`, `join`, `alive` FROM frontends()'\n+-----------+------+-------+\n| host      | join | alive |\n+-----------+------+-------+\n| 127.0.0.1 | true | true  |\n+-----------+------+-------+\n\n## \u68C0\u67E5 BE \u72B6\u6001\uFF0C\u786E\u5B9A Alive \u5217\u4E3A true\nmysql -uroot -P9030 -h127.0.0.1 -e 'SELECT `host`, `alive` FROM backends()'\n+-----------+-------+\n| host      | alive |\n+-----------+-------+\n| 127.0.0.1 |     1 |\n+-----------+-------+\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u672C\u5730\u5FEB\u901F\u90E8\u7F72",children:"\u672C\u5730\u5FEB\u901F\u90E8\u7F72"}),"\n",(0,r.jsx)(n.admonition,{title:"\u73AF\u5883\u5EFA\u8BAE\uFF1A",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u9009\u62E9\u4E00\u4E2A AMD/ARM \u4E0A\u7684\u4E3B\u6D41 Linux \u73AF\u5883\uFF0C\u63A8\u8350 CentOS 7.1 \u6216\u8005 Ubuntu 16.04 \u4EE5\u4E0A\u7248\u672C\u3002\u66F4\u591A\u8FD0\u884C\u73AF\u5883\u8BF7\u53C2\u8003\u5B89\u88C5\u90E8\u7F72\u90E8\u5206\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Java 8 \u8FD0\u884C\u73AF\u5883\uFF08\u975E Oracle JDK \u5546\u4E1A\u6388\u6743\u7528\u6237\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u514D\u8D39\u7684 Oracle JDK 8u300 \u4EE5\u540E\u7248\u672C\uFF0C",(0,r.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html#license-lightbox",children:"\u7ACB\u5373\u4E0B\u8F7D"}),")\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5EFA\u8BAE\u5728 Linux \u4E0A\u65B0\u5EFA\u4E00\u4E2A Doris \u7528\u6237\u3002\u8BF7\u907F\u514D\u4F7F\u7528 Root \u7528\u6237\uFF0C\u4EE5\u9632\u5BF9\u64CD\u4F5C\u7CFB\u7EDF\u8BEF\u64CD\u4F5C\u3002"}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305",children:"\u7B2C 1 \u6B65\uFF1A\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ECE Apache Doris \u7F51\u7AD9\u4E0A",(0,r.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/download",children:"\u4E0B\u8F7D"}),"\u76F8\u5E94\u7684\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\uFF0C\u5E76\u89E3\u538B\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u4FEE\u6539\u73AF\u5883\u53D8\u91CF",children:"\u7B2C 2 \u6B65\uFF1A\u4FEE\u6539\u73AF\u5883\u53D8\u91CF"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4FEE\u6539\u7CFB\u7EDF\u6700\u5927\u6253\u5F00\u6587\u4EF6\u53E5\u67C4\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u8C03\u6574\u6700\u5927\u6587\u4EF6\u53E5\u67C4\u6570\u3002\u5728\u8C03\u6574\u540E\uFF0C\u9700\u8981\u91CD\u542F\u4F1A\u8BDD\u4EE5\u751F\u6548\u914D\u7F6E\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"vi /etc/security/limits.conf \n* soft nofile 1000000\n* hard nofile 1000000\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4FEE\u6539\u865A\u62DF\u5185\u5B58\u533A\u57DF"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u6C38\u4E45\u4FEE\u6539\u865A\u62DF\u5185\u5B58\u533A\u57DF\u81F3\u5C11\u4E3A 2000000\uFF0C\u5E76\u7ACB\u5373\u751F\u6548\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat >> /etc/sysctl.conf << EOF\nvm.max_map_count = 2000000\nEOF\n\nTake effect immediately\nsysctl -p\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u5B89\u88C5-fe",children:"\u7B2C 3 \u6B65\uFF1A\u5B89\u88C5 FE"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u914D\u7F6E FE"}),"\n",(0,r.jsxs)(n.p,{children:["\u4FEE\u6539 FE \u914D\u7F6E\u6587\u4EF6 ",(0,r.jsx)(n.code,{children:"apache-doris/fe/conf/fe.conf"})," \u7684\u4EE5\u4E0B\u5185\u5BB9\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"## \u6307\u5B9A Java \u73AF\u5883\nJAVA_HOME=/home/doris/jdk\n\n# \u6307\u5B9A FE \u76D1\u542C IP \u7684 CIDR \u7F51\u6BB5\npriority_networks=127.0.0.1/32\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542F\u52A8 FE"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7 start_fe.sh \u811A\u672C\u8FD0\u884C FE \u8FDB\u7A0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"apache-doris/fe/bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u68C0\u67E5 FE \u72B6\u6001"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 MySQL \u5BA2\u6237\u7AEF\u8FDE\u63A5\u96C6\u7FA4\uFF0C\u5E76\u68C0\u67E5\u96C6\u7FA4\u72B6\u6001\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'## \u68C0\u67E5 FE \u72B6\u6001\uFF0C\u786E\u5B9A Join \u4E0E Alive \u5217\u90FD\u4E3A true\nmysql -uroot -P9030 -h127.0.0.1 -e "show frontends;"\n+-----------------------------------------+-----------+-------------+----------+-----------+---------+----------+----------+-----------+------+-------+-------------------+---------------------+----------+--------+-------------------------+------------------+\n| Name                                    | Host      | EditLogPort | HttpPort | QueryPort | RpcPort | Role     | IsMaster | ClusterId | Join | Alive | ReplayedJournalId | LastHeartbeat       | IsHelper | ErrMsg | Version                 | CurrentConnected |\n+-----------------------------------------+-----------+-------------+----------+-----------+---------+----------+----------+-----------+------+-------+-------------------+---------------------+----------+--------+-------------------------+------------------+\n| fe_9d0169c5_b01f_478c_96ab_7c4e8602ec57 | 127.0.0.1 | 9010        | 8030     | 9030      | 9020    | FOLLOWER | true     | 656872880 | true | true  | 276               | 2024-07-28 18:07:39 | true     |        | doris-2.0.12-2971efd194 | Yes              |\n+-----------------------------------------+-----------+-------------+----------+-----------+---------+----------+----------+-----------+------+-------+-------------------+---------------------+----------+--------+-------------------------+------------------+\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u5B89\u88C5-be",children:"\u7B2C 4 \u6B65\uFF1A\u5B89\u88C5 BE"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u914D\u7F6E BE"}),"\n",(0,r.jsxs)(n.p,{children:["\u4FEE\u6539 BE \u914D\u7F6E\u6587\u4EF6 ",(0,r.jsx)(n.code,{children:"apache-doris/be/conf/be.conf"})," \u7684\u4EE5\u4E0B\u5185\u5BB9\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"## \u6307\u5B9A Java \u73AF\u5883\nJAVA_HOME=/home/doris/jdk\n\n# \u6307\u5B9A FE \u76D1\u542C IP \u7684 CIDR \u7F51\u6BB5\npriority_networks=127.0.0.1/32\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542F\u52A8 BE"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8 BE \u8FDB\u7A0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"apache-doris/fe/bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u96C6\u7FA4\u4E2D\u6CE8\u518C BE \u8282\u70B9"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 MySQL \u5BA2\u6237\u7AEF\u8FDE\u63A5\u96C6\u7FA4\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql -uroot -P9030 -h127.0.0.1\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 ADD BACKEND \u547D\u4EE4\u6CE8\u518C BE \u8282\u70B9\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BACKEND "127.0.0.1:9050";\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u68C0\u67E5 BE \u72B6\u6001"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 MySQL \u5BA2\u6237\u7AEF\u8FDE\u63A5\u96C6\u7FA4\uFF0C\u5E76\u68C0\u67E5\u96C6\u7FA4\u72B6\u6001\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'## \u68C0\u67E5 BE \u72B6\u6001\uFF0C\u786E\u5B9A Alive \u5217\u4E3A true\nmysql -uroot -P9030 -h127.0.0.1 -e "show backends;"\n+-----------+-----------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------+------------------+--------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-------------------------+-------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+\n| BackendId | Host      | HeartbeatPort | BePort | HttpPort | BrpcPort | LastStartTime       | LastHeartbeat       | Alive | SystemDecommissioned | TabletNum | DataUsedCapacity | TrashUsedCapcacity | AvailCapacity | TotalCapacity | UsedPct | MaxDiskUsedPct | RemoteUsedCapacity | Tag                      | ErrMsg | Version                 | Status                                                                                                                        | HeartbeatFailureCounter | NodeRole |\n+-----------+-----------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------+------------------+--------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-------------------------+-------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+\n| 10156     | 127.0.0.1 | 9050          | 9060   | 8040     | 8060     | 2024-07-28 17:59:14 | 2024-07-28 18:08:24 | true  | false                | 14        | 0.000            | 0.000              | 8.342 GB      | 19.560 GB     | 57.35 % | 57.35 %        | 0.000              | {"location" : "default"} |        | doris-2.0.12-2971efd194 | {"lastSuccessReportTabletsTime":"2024-07-28 18:08:14","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false} | 0                       | mix      |\n+-----------+-----------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------+------------------+--------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-------------------------+-------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD0\u884C\u67E5\u8BE2",children:"\u8FD0\u884C\u67E5\u8BE2"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 MySQL \u5BA2\u6237\u7AEF\u8FDE\u63A5\u96C6\u7FA4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql -uroot -P9030 -h127.0.0.1\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA\u6570\u636E\u5E93\u4E0E\u6D4B\u8BD5\u8868"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'create database demo;\n\nuse demo; \ncreate table mytable\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.05",    \n    k3 CHAR(10) COMMENT "string column",    \n    k4 INT NOT NULL DEFAULT "1" COMMENT "int column"\n) \nCOMMENT "my first table"\nDISTRIBUTED BY HASH(k1) BUCKETS 1;\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5BFC\u5165\u6D4B\u8BD5\u6570\u636E"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 Insert Into \u8BED\u53E5\u63D2\u5165\u6D4B\u8BD5\u6570\u636E"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"insert into mytable values\n(1,0.14,'a1',20),\n(2,1.04,'b2',21),\n(3,3.14,'c3',22),\n(4,4.35,'d4',23);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 MySQL \u5BA2\u6237\u7AEF\u4E2D\u6267\u884C\u4EE5\u4E0B SQL \u8BED\u53E5\u53EF\u4EE5\u67E5\u770B\u5230\u5DF2\u5BFC\u5165\u7684\u6570\u636E\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MySQL [demo]> select * from demo.mytable;\n+------+------+------+------+\n| k1   | k2   | k3   | k4   |\n+------+------+------+------+\n|    1 | 0.14 | a1   |   20 |\n|    2 | 1.04 | b2   |   21 |\n|    3 | 3.14 | c3   |   22 |\n|    4 | 4.35 | d4   |   23 |\n+------+------+------+------+\n4 rows in set (0.10 sec)\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return c}});var l=s(667294);let r={},i=l.createContext(r);function c(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);