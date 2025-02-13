"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["210931"],{618353:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>c,assets:()=>l,toc:()=>h,frontMatter:()=>o});var n=JSON.parse('{"id":"query/join-optimization/doris-join-optimization","title":"Doris Join Optimization Principle","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/query/join-optimization/doris-join-optimization.md","sourceDirName":"query/join-optimization","slug":"/query/join-optimization/doris-join-optimization","permalink":"/docs/2.0/query/join-optimization/doris-join-optimization","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Doris Join Optimization Principle","language":"en"},"sidebar":"docs","previous":{"title":"Materialized View","permalink":"/docs/2.0/query/view-materialized-view/materialized-view"},"next":{"title":"Bucket Shuffle Join","permalink":"/docs/2.0/query/join-optimization/bucket-shuffle-join"}}'),a=i("785893"),s=i("250065");let o={title:"Doris Join Optimization Principle",language:"en"},r="Doris Join optimization principle",l={},h=[{value:"Doris Shuffle way",id:"doris-shuffle-way",level:2},{value:"Comparison of four Shuffle methods",id:"comparison-of-four-shuffle-methods",level:3},{value:"Runtime Filter Join optimization",id:"runtime-filter-join-optimization",level:2},{value:"Runtime Filter Type",id:"runtime-filter-type",level:3},{value:"Join Reader",id:"join-reader",level:2},{value:"Doris Join optimization method",id:"doris-join-optimization-method",level:2},{value:"Optimization case practice",id:"optimization-case-practice",level:2},{value:"Case 1",id:"case-1",level:3},{value:"Case 2",id:"case-2",level:3},{value:"Case 3",id:"case-3",level:3},{value:"Doris Join optimization suggestion",id:"doris-join-optimization-suggestion",level:2}];function d(e){let t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"doris-join-optimization-principle",children:"Doris Join optimization principle"})}),"\n",(0,a.jsxs)(t.p,{children:["Doris supports two physical operators, one is ",(0,a.jsx)(t.strong,{children:"Hash Join"}),", and the other is ",(0,a.jsx)(t.strong,{children:"Nest Loop Join"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Hash Join: Create a hash table on the right table based on the equivalent join column, and the left table uses the hash table to perform join calculations in a streaming manner. Its limitation is that it can only be applied to equivalent joins."}),"\n",(0,a.jsx)(t.li,{children:"Nest Loop Join: With two for loops, it is very intuitive. Then it is applicable to unequal-valued joins, such as: greater than or less than or the need to find a Cartesian product. It is a general join operator, but has poor performance."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"As a distributed MPP database, data shuffle needs to be performed during the Join process. Data needs to be split and scheduled to ensure that the final Join result is correct. As a simple example, assume that the relationship S and R are joined, and N represents the number of nodes participating in the join calculation; T represents the number of tuples in the relationship."}),"\n",(0,a.jsx)(t.h2,{id:"doris-shuffle-way",children:"Doris Shuffle way"}),"\n",(0,a.jsx)(t.p,{children:"Doris supports 4 Shuffle methods"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"BroadCast Join"}),"\n",(0,a.jsx)(t.p,{children:"It requires the full data of the right table to be sent to the left table, that is, each node participating in Join has the full data of the right table, that is, T(R)."}),"\n",(0,a.jsx)(t.p,{children:"Its applicable scenarios are more general, and it can support Hash Join and Nest loop Join at the same time, and its network overhead is N * T(R)."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"BroadCast Join",src:i(396039).Z+"",width:"2560",height:"1440"})}),"\n",(0,a.jsx)(t.p,{children:"The data in the left table is not moved, and the data in the right table is sent to the scanning node of the data in the left table."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Shuffle Join"}),"\n",(0,a.jsx)(t.p,{children:"When Hash Join is performed, the corresponding Hash value can be calculated through the Join column, and Hash bucketing can be performed."}),"\n",(0,a.jsx)(t.p,{children:"Its network overhead is: T(S) + T(R), but it can only support Hash Join, because it also calculates buckets according to the conditions of Join."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Shuffle Join",src:i(662008).Z+"",width:"2560",height:"1040"})}),"\n",(0,a.jsx)(t.p,{children:"The left and right table data are sent to different partition nodes according to the partition, and the calculated demerits are sent."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Bucket Shuffle Join"}),"\n",(0,a.jsx)(t.p,{children:"Doris's table data itself is bucketed by Hash calculation, so you can use the properties of the bucketed columns of the table itself to shuffle the Join data. If two tables need to be joined, and the Join column is the bucket column of the left table, then the data in the left table can actually be calculated by sending the data into the buckets of the left table without moving the data in the right table."}),"\n",(0,a.jsx)(t.p,{children:"Its network overhead is: T(R) is equivalent to only Shuffle the data in the right table."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Bucket Shuffle Join",src:i(753969).Z+"",width:"2560",height:"1040"})}),"\n",(0,a.jsx)(t.p,{children:"The data in the left table does not move, and the data in the right table is sent to the node that scans the table in the left table according to the result of the partition calculation."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Colocation"}),"\n",(0,a.jsx)(t.p,{children:"It is similar to Bucket Shuffle Join, which means that the data has been shuffled according to the preset Join column scenario when data is imported. Then the join calculation can be performed directly without considering the Shuffle problem of the data during the actual query."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Colocation Join",src:i(339207).Z+"",width:"2560",height:"800"})}),"\n",(0,a.jsx)(t.p,{children:"The data has been pre-partitioned, and the Join calculation is performed directly locally"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"comparison-of-four-shuffle-methods",children:"Comparison of four Shuffle methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Shuffle Mode"}),(0,a.jsx)(t.th,{children:"Network Overhead"}),(0,a.jsx)(t.th,{children:"Physical Operators"}),(0,a.jsx)(t.th,{children:"Applicable Scenarios"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"BroadCast"}),(0,a.jsx)(t.td,{children:"N * T(R)"}),(0,a.jsx)(t.td,{children:"Hash Join / Nest Loop Join"}),(0,a.jsx)(t.td,{children:"Universal"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Shuffle"}),(0,a.jsx)(t.td,{children:"T(S) + T(R)"}),(0,a.jsx)(t.td,{children:"Hash Join"}),(0,a.jsx)(t.td,{children:"General"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Bucket Shuffle"}),(0,a.jsx)(t.td,{children:"T(R)"}),(0,a.jsx)(t.td,{children:"Hash Join"}),(0,a.jsx)(t.td,{children:"There are distributed columns in the left table in the join condition, and the left table is executed as a single partition"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Colocate"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"Hash Join"}),(0,a.jsx)(t.td,{children:"There are distributed columns in the left table in the join condition, and the left and right tables belong to the same Colocate Group"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"N : The number of Instances participating in the Join calculation"}),"\n",(0,a.jsx)(t.p,{children:"T(relation) : Tuple number of relation"}),"\n",(0,a.jsx)(t.p,{children:"The flexibility of the above four methods is from high to low, and its requirements for this data distribution are becoming more and more strict, but the performance of Join calculation is also getting better and better."}),"\n",(0,a.jsx)(t.h2,{id:"runtime-filter-join-optimization",children:"Runtime Filter Join optimization"}),"\n",(0,a.jsx)(t.p,{children:"Doris will build a hash table in the right table when performing Hash Join calculation, and the left table will stream through the hash table of the right table to obtain the join result. The RuntimeFilter makes full use of the Hash table of the right table. When the right table generates a hash table, a filter condition based on the hash table data is generated at the same time, and then pushed down to the data scanning node of the left table. In this way, Doris can perform data filtering at runtime."}),"\n",(0,a.jsx)(t.p,{children:"If the left table is a large table and the right table is a small table, then using the filter conditions generated by the left table, most of the data to be filtered in the Join layer can be filtered in advance when the data is read, so that a large amount of data can be filtered. Improve the performance of join queries."}),"\n",(0,a.jsx)(t.p,{children:"Currently Doris supports three types of RuntimeFilter"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"One is IN-IN, which is well understood, and pushes a hashset down to the data scanning node."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The second is BloomFilter, which uses the data of the hash table to construct a BloomFilter, and then pushes the BloomFilter down to the scanning node that queries the data. ."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The last one is MinMax, which is a Range range. After the Range range is determined by the data in the right table, it is pushed down to the data scanning node."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"There are two requirements for the applicable scenarios of Runtime Filter:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The first requirement is that the right table is large and the left table is small, because building a Runtime Filter needs to bear the computational cost, including some memory overhead."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The second requirement is that there are few results from the join of the left and right tables, indicating that this join can filter out most of the data in the left table."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"When the above two conditions are met, turning on the Runtime Filter can achieve better results"}),"\n",(0,a.jsx)(t.p,{children:"When the Join column is the Key column of the left table, the RuntimeFilter will be pushed down to the storage engine. Doris itself supports delayed materialization,"}),"\n",(0,a.jsx)(t.p,{children:"Delayed materialization is simply like this: if you need to scan three columns A, B, and C, there is a filter condition on column A: A is equal to 2, if you want to scan 100 rows, you can scan 100 rows of column A first, Then filter through the filter condition A = 2. After filtering the results, read columns B and C, which can greatly reduce the data read IO. Therefore, if the Runtime Filter is generated on the Key column, and the delayed materialization of Doris itself is used to further improve the performance of the query."}),"\n",(0,a.jsx)(t.h3,{id:"runtime-filter-type",children:"Runtime Filter Type"}),"\n",(0,a.jsx)(t.p,{children:"Doris provides three different Runtime Filter types:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The advantage of ",(0,a.jsx)(t.strong,{children:"IN"})," is that the effect filtering effect is obvious and fast. Its shortcomings are: First, it only applies to BroadCast. Second, when the right table exceeds a certain amount of data, it will fail. The current Doris configuration is 1024, that is, if the right table is larger than 1024, the Runtime Filter of IN will directly failed."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The advantage of ",(0,a.jsx)(t.strong,{children:"MinMax"})," is that the overhead is relatively small. Its disadvantage is that it has a relatively good effect on numeric columns, but basically no effect on non-numeric columns."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The feature of ",(0,a.jsx)(t.strong,{children:"Bloom Filter"})," is that it is universal, suitable for various types, and the effect is better. The disadvantage is that its configuration is more complicated and the calculation is high."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"join-reader",children:"Join Reader"}),"\n",(0,a.jsx)(t.p,{children:"Once the database involves multi-table Join, the order of Join has a great impact on the performance of the entire Join query. Assuming that there are three tables to join, refer to the following picture, the left is the a table and the b table to do the join first, the intermediate result has 2000 rows, and then the c table is joined."}),"\n",(0,a.jsx)(t.p,{children:"Next, look at the picture on the right and adjust the order of Join. Join the a table with the c table first, the intermediate result generated is only 100, and then finally join with the b table for calculation. The final join result is the same, but the intermediate result it generates has a 20x difference, which results in a big performance diff."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Join Reorder",src:i(744313).Z+"",width:"2560",height:"1232"})}),"\n",(0,a.jsx)(t.p,{children:"Doris currently supports the rule-based Join Reorder algorithm. Its logic is:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Make joins with large tables and small tables as much as possible, and the intermediate results it generates are as small as possible."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Put the conditional join table forward, that is to say, try to filter the conditional join table"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Hash Join has higher priority than Nest Loop Join, because Hash Join itself is much faster than Nest Loop Join."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"doris-join-optimization-method",children:"Doris Join optimization method"}),"\n",(0,a.jsx)(t.p,{children:"Doris Join tuning method:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Use the Profile provided by Doris itself to locate the bottleneck of the query. Profile records various information in Doris' entire query, which is first-hand information for performance tuning. ."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Understand the Join mechanism of Doris, which is also the content shared with you in the second part. Only by knowing why and understanding its mechanism can we analyze why it is slow."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Use Session variables to change some behaviors of Join, so as to realize the tuning of Join."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Check the Query Plan to analyze whether this tuning is effective."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The above 4 steps basically complete a standard Join tuning process, and then it is to actually query and verify it to see what the effect is."}),"\n",(0,a.jsx)(t.p,{children:"If the first 4 methods are connected in series, it still does not work. At this time, it may be necessary to rewrite the Join statement, or to adjust the data distribution. It is necessary to recheck whether the entire data distribution is reasonable, including querying the Join statement, and some manual adjustments may be required. Of course, this method has a relatively high mental cost, which means that further analysis is required only when the previous method does not work."}),"\n",(0,a.jsx)(t.h2,{id:"optimization-case-practice",children:"Optimization case practice"}),"\n",(0,a.jsx)(t.h3,{id:"case-1",children:"Case 1"}),"\n",(0,a.jsx)(t.p,{children:"A four-table join query, through Profile, found that the second join took a long time, taking 14 seconds."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image-20220523153600797",src:i(293742).Z+"",width:"852",height:"514"})}),"\n",(0,a.jsx)(t.p,{children:"After further analysis of Profile, it is found that BuildRows, that is, the data volume of the right table is about 25 million. And ProbeRows (ProbeRows is the amount of data in the left table) is only more than 10,000. In this scenario, the right table is much larger than the left table, which is obviously an unreasonable situation. This obviously shows that there is some problem with the order of Join. At this time, try to change the Session variable and enable Join Reorder."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"set enable_cost_based_join_reorder = true\n"})}),"\n",(0,a.jsx)(t.p,{children:"This time, the time has been reduced from 14 seconds to 4 seconds, and the performance has been improved by more than 3 times."}),"\n",(0,a.jsx)(t.p,{children:"At this time, when checking the profile again, the order of the left and right tables has been adjusted correctly, that is, the right table is a large table, and the left table is a small table. The overhead of building a hash table based on a small table is very small. This is a typical scenario of using Join Reorder to improve Join performance."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image-20220523153757607",src:i(27440).Z+"",width:"848",height:"508"})}),"\n",(0,a.jsx)(t.h3,{id:"case-2",children:"Case 2"}),"\n",(0,a.jsx)(t.p,{children:"There is a slow query. After viewing the Profile, the entire Join node takes about 44 seconds. Its right table has 10 million, the left table has 60 million, and the final returned result is only 60 million."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image-20220523153913059",src:i(804965).Z+"",width:"914",height:"558"})}),"\n",(0,a.jsx)(t.p,{children:"It can be roughly estimated that the filtering rate is very high, so why does the Runtime Filter not take effect? Check it out through Query Plan and find that it only enables the Runtime Filter of IN."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image-20220523153958828",src:i(474262).Z+"",width:"1004",height:"442"})}),"\n",(0,a.jsx)(t.p,{children:"When the right table exceeds 1024 rows, IN will not take effect, so there is no filtering effect at all, so try to adjust the type of RuntimeFilter."}),"\n",(0,a.jsx)(t.p,{children:"This is changed to BloomFilter, and the 60 million pieces of data in the left table have filtered 59 million pieces. Basically, 99% of the data is filtered out, and this effect is very significant. The query has also dropped from the original 44 seconds to 13 seconds, and the performance has been improved by about three times."}),"\n",(0,a.jsx)(t.h3,{id:"case-3",children:"Case 3"}),"\n",(0,a.jsx)(t.p,{children:"The following is a relatively extreme case, which cannot be solved by tuning some environment variables, because it involves SQL Rewrite, so the original SQL is listed here."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"select 100.00 * sum (case\n        when P_type like 'PROMOS'\n        then 1 extendedprice * (1 - 1 discount)\n        else 0\n        end ) / sum(1 extendedprice * (1 - 1 discount)) as promo revenue\nfrom lineitem, part\nwhere\n    1_partkey = p_partkey\n    and 1_shipdate >= date '1997-06-01'\n    and 1 shipdate < date '1997-06-01' + interval '1' month\n"})}),"\n",(0,a.jsx)(t.p,{children:"This Join query is very simple, a simple join of left and right tables. Of course, there are some filter conditions on it. When I opened the Profile, I found that the entire query Hash Join was executed for more than three minutes. It is a BroadCast Join, and its right table has 200 million entries, while the left table has only 700,000. In this case, it is unreasonable to choose Broadcast Join, which is equivalent to making a Hash Table of 200 million records, and then traversing the Hash Table of 200 million records with 700,000 records, which is obviously unreasonable."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image-20220523154712519",src:i(829393).Z+"",width:"556",height:"454"})}),"\n",(0,a.jsx)(t.p,{children:"Why is there an unreasonable Join order? In fact, the left table is a large table with a level of 1 billion records. Two filter conditions are added to it. After adding these two filter conditions, there are 700,000 records of 1 billion records. But Doris currently does not have a good framework for collecting statistics, so it does not know what the filtering rate of this filter condition is. Therefore, when the join order is arranged, the wrong left and right table order of the join is selected, resulting in extremely low performance."}),"\n",(0,a.jsx)(t.p,{children:"The following figure is an SQL statement after the rewrite is completed. A Join Hint is added after the Join, a square bracket is added after the Join, and then the required Join method is written. Here, Shuffle Join is selected. You can see in the actual query plan on the right that the data is indeed Partitioned. The original 3-minute time-consuming is only 7 seconds after the rewriting, and the performance is improved significantly."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image-20220523160915229",src:i(375823).Z+"",width:"572",height:"674"})}),"\n",(0,a.jsx)(t.h2,{id:"doris-join-optimization-suggestion",children:"Doris Join optimization suggestion"}),"\n",(0,a.jsx)(t.p,{children:"Finally, we summarize four suggestions for optimization and tuning of Doris Join:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The first point: When doing Join, try to select columns of the same type or simple type. If the same type is used, reduce its data cast, and the simple type itself joins the calculation quickly."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The second point: try to choose the Key column for Join. The reason is also introduced in the Runtime Filter. The Key column can play a better effect on delayed materialization."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The third point: Join between large tables, try to make it Co-location, because the network overhead between large tables is very large, if you need to do Shuffle, the cost is very high."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Fourth point: Use Runtime Filter reasonably, which is very effective in scenarios with high join filtering rate. But it is not a panacea, but has certain side effects, so it needs to be switched according to the granularity of specific SQL."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Finally: When it comes to multi-table Join, it is necessary to judge the rationality of Join. Try to ensure that the left table is a large table and the right table is a small table, and then Hash Join will be better than Nest Loop Join. If necessary, you can use SQL Rewrite to adjust the order of Join using Hint."}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},396039:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/broadcast-join-d8bd07ac2608d3b7c4cddddf67b7fd55.png"},753969:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/bucket-shuffle-join-b0e7449164fd95a4e77e2f412b057433.png"},339207:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/colocation-join-9db80ffeb4bd80e1a54b083e4817db7d.png"},744313:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/join-reorder-720c5270f5962ae7aad73aa26a9d3553.png"},293742:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/image-20220523153600797-8c0110f8498c2b6b54fe9dfa6b6f89bf.png"},27440:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/image-20220523153757607-aced93bcd65de383a68aca075909885c.png"},804965:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/image-20220523153913059-c430baf5eae63c272d3e1355636ccad8.png"},474262:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/image-20220523153958828-1e0aaf5df637b5db23a27c9f97c22bea.png"},829393:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/image-20220523154712519-ff90fd895d5eed317bcc989f77b5b8bb.png"},375823:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/image-20220523160915229-e2e523c3e6e9e79d17e9849c1d8aa8f1.png"},662008:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/shuffle-join-82eb90441df18be5d1cd519b7700a551.png"},250065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return o}});var n=i(667294);let a={},s=n.createContext(a);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);