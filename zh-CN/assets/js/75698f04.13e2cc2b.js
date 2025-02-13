"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["206846"],{479192:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>x,assets:()=>a,toc:()=>h,frontMatter:()=>r});var t=JSON.parse('{"id":"table-design/data-type","title":"\u6570\u636E\u7C7B\u578B","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/data-type.md","sourceDirName":"table-design","slug":"/table-design/data-type","permalink":"/zh-CN/docs/table-design/data-type","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u6570\u636E\u7C7B\u578B","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5E38\u89C1\u95EE\u9898","permalink":"/zh-CN/docs/table-design/data-partitioning/common-issues"},"next":{"title":"\u6570\u636E\u538B\u7F29","permalink":"/zh-CN/docs/table-design/column-compression"}}'),d=s("785893"),l=s("250065");let r={title:"\u6570\u636E\u7C7B\u578B",language:"zh-CN"},i=void 0,a={},h=[{value:"\u6570\u503C\u7C7B\u578B",id:"\u6570\u503C\u7C7B\u578B",level:3},{value:"\u65E5\u671F\u7C7B\u578B",id:"\u65E5\u671F\u7C7B\u578B",level:3},{value:"\u5B57\u7B26\u4E32\u7C7B\u578B",id:"\u5B57\u7B26\u4E32\u7C7B\u578B",level:3},{value:"\u534A\u7ED3\u6784\u7C7B\u578B",id:"\u534A\u7ED3\u6784\u7C7B\u578B",level:3},{value:"\u805A\u5408\u7C7B\u578B",id:"\u805A\u5408\u7C7B\u578B",level:3},{value:"IP \u7C7B\u578B",id:"ip-\u7C7B\u578B",level:3}];function c(n){let e={a:"a",br:"br",code:"code",em:"em",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"Apache Doris \u5DF2\u652F\u6301\u7684\u6570\u636E\u7C7B\u578B\u5217\u8868\u5982\u4E0B\uFF1A"}),"\n",(0,d.jsx)(e.h3,{id:"\u6570\u503C\u7C7B\u578B",children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/data-type-overview#%E6%95%B0%E5%80%BC%E7%B1%BB%E5%9E%8B",children:"\u6570\u503C\u7C7B\u578B"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u7C7B\u578B\u540D"}),(0,d.jsx)(e.th,{children:"\u5B58\u50A8\u7A7A\u95F4\uFF08\u5B57\u8282\uFF09"}),(0,d.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/numeric/BOOLEAN",children:"BOOLEAN"})}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"\u5E03\u5C14\u503C\uFF0C0 \u4EE3\u8868 false\uFF0C1 \u4EE3\u8868 true\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/numeric/TINYINT",children:"TINYINT"})}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u8303\u56F4 [-128, 127]\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/numeric/SMALLINT",children:"SMALLINT"})}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u8303\u56F4 [-32768, 32767]\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/numeric/INT",children:"INT"})}),(0,d.jsx)(e.td,{children:"4"}),(0,d.jsx)(e.td,{children:"\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u8303\u56F4 [-2147483648, 2147483647]"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/numeric/BIGINT",children:"BIGINT"})}),(0,d.jsx)(e.td,{children:"8"}),(0,d.jsx)(e.td,{children:"\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u8303\u56F4 [-9223372036854775808, 9223372036854775807]\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/numeric/LARGEINT",children:"LARGEINT"})}),(0,d.jsx)(e.td,{children:"16"}),(0,d.jsx)(e.td,{children:"\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u8303\u56F4 [-2^127 + 1 ~ 2^127 - 1]\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/numeric/FLOAT",children:"FLOAT"})}),(0,d.jsx)(e.td,{children:"4"}),(0,d.jsxs)(e.td,{children:["\u6D6E\u70B9\u6570\uFF0C\u8303\u56F4 [-3.4",(0,d.jsx)(e.em,{children:"10^38 ~ 3.4"}),"10^38]\u3002"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/numeric/DOUBLE",children:"DOUBLE"})}),(0,d.jsx)(e.td,{children:"8"}),(0,d.jsxs)(e.td,{children:["\u6D6E\u70B9\u6570\uFF0C\u8303\u56F4 [-1.79",(0,d.jsx)(e.em,{children:"10^308 ~ 1.79"}),"10^308]\u3002"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/numeric/DECIMAL",children:"DECIMAL"})}),(0,d.jsx)(e.td,{children:"4/8/16"}),(0,d.jsx)(e.td,{children:"\u9AD8\u7CBE\u5EA6\u5B9A\u70B9\u6570\uFF0C\u683C\u5F0F\uFF1ADECIMAL(M[,D])\u3002\u5176\u4E2D\uFF0CM \u4EE3\u8868\u4E00\u5171\u6709\u591A\u5C11\u4E2A\u6709\u6548\u6570\u5B57\uFF08precision\uFF09\uFF0CD \u4EE3\u8868\u5C0F\u6570\u4F4D\u6709\u591A\u5C11\u6570\u5B57\uFF08scale\uFF09\u3002\u6709\u6548\u6570\u5B57 M \u7684\u8303\u56F4\u662F [1, 38]\uFF0C\u5C0F\u6570\u4F4D\u6570\u5B57\u6570\u91CF D \u7684\u8303\u56F4\u662F [0, precision]\u30020 < precision <= 9 \u7684\u573A\u5408\uFF0C\u5360\u7528 4 \u5B57\u8282\u30029 < precision <= 18 \u7684\u573A\u5408\uFF0C\u5360\u7528 8 \u5B57\u8282\u300216 < precision <= 38 \u7684\u573A\u5408\uFF0C\u5360\u7528 16 \u5B57\u8282\u3002"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u65E5\u671F\u7C7B\u578B",children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/data-type-overview#%E6%97%A5%E6%9C%9F%E7%B1%BB%E5%9E%8B",children:"\u65E5\u671F\u7C7B\u578B"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u7C7B\u578B\u540D"}),(0,d.jsx)(e.th,{children:"\u5B58\u50A8\u7A7A\u95F4\uFF08\u5B57\u8282\uFF09"}),(0,d.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/date-time/DATE",children:"DATE"})}),(0,d.jsx)(e.td,{children:"16"}),(0,d.jsx)(e.td,{children:"\u65E5\u671F\u7C7B\u578B\uFF0C\u76EE\u524D\u7684\u53D6\u503C\u8303\u56F4\u662F ['0000-01-01', '9999-12-31']\uFF0C\u9ED8\u8BA4\u7684\u6253\u5370\u5F62\u5F0F\u662F 'yyyy-MM-dd'\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/date-time/DATETIME",children:"DATETIME"})}),(0,d.jsx)(e.td,{children:"16"}),(0,d.jsxs)(e.td,{children:["\u65E5\u671F\u65F6\u95F4\u7C7B\u578B\uFF0C\u683C\u5F0F\uFF1ADATETIME([P])\u3002\u53EF\u9009\u53C2\u6570 P \u8868\u793A\u65F6\u95F4\u7CBE\u5EA6\uFF0C\u53D6\u503C\u8303\u56F4\u662F [0, 6]\uFF0C\u5373\u6700\u591A\u652F\u6301 6 \u4F4D\u5C0F\u6570\uFF08\u5FAE\u79D2\uFF09\u3002\u4E0D\u8BBE\u7F6E\u65F6\u4E3A 0\u3002",(0,d.jsx)(e.br,{}),"\u53D6\u503C\u8303\u56F4\u662F ['0000-01-01 00:00:00[.000000]', '9999-12-31 23:59:59[.999999]']\u3002\u6253\u5370\u7684\u5F62\u5F0F\u662F 'yyyy-MM-dd HH:mm:ss.SSSSSS'\u3002"]})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u5B57\u7B26\u4E32\u7C7B\u578B",children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/data-type-overview#%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%B1%BB%E5%9E%8B",children:"\u5B57\u7B26\u4E32\u7C7B\u578B"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u7C7B\u578B\u540D"}),(0,d.jsx)(e.th,{children:"\u5B58\u50A8\u7A7A\u95F4\uFF08\u5B57\u8282\uFF09"}),(0,d.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/string-type/CHAR",children:"CHAR"})}),(0,d.jsx)(e.td,{children:"M"}),(0,d.jsx)(e.td,{children:"\u5B9A\u957F\u5B57\u7B26\u4E32\uFF0CM \u4EE3\u8868\u7684\u662F\u5B9A\u957F\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u957F\u5EA6\u3002M \u7684\u8303\u56F4\u662F 1-255\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/string-type/VARCHAR",children:"VARCHAR"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"\u53D8\u957F\u5B57\u7B26\u4E32\uFF0CM \u4EE3\u8868\u7684\u662F\u53D8\u957F\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u957F\u5EA6\u3002M \u7684\u8303\u56F4\u662F 1-65533\u3002\u53D8\u957F\u5B57\u7B26\u4E32\u662F\u4EE5 UTF-8 \u7F16\u7801\u5B58\u50A8\u7684\uFF0C\u56E0\u6B64\u901A\u5E38\u82F1\u6587\u5B57\u7B26\u5360 1 \u4E2A\u5B57\u8282\uFF0C\u4E2D\u6587\u5B57\u7B26\u5360 3 \u4E2A\u5B57\u8282\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/string-type/STRING",children:"STRING"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"\u53D8\u957F\u5B57\u7B26\u4E32\uFF0C\u9ED8\u8BA4\u652F\u6301 1048576 \u5B57\u8282\uFF081MB\uFF09\uFF0C\u53EF\u8C03\u5927\u5230 2147483643 \u5B57\u8282\uFF082GB\uFF09\u3002\u53EF\u901A\u8FC7 BE \u914D\u7F6E string_type_length_soft_limit_bytes \u8C03\u6574\u3002String \u7C7B\u578B\u53EA\u80FD\u7528\u5728 Value \u5217\uFF0C\u4E0D\u80FD\u7528\u5728 Key \u5217\u548C\u5206\u533A\u5206\u6876\u5217\u3002"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u534A\u7ED3\u6784\u7C7B\u578B",children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/data-type-overview#%E5%8D%8A%E7%BB%93%E6%9E%84%E5%8C%96%E7%B1%BB%E5%9E%8B",children:"\u534A\u7ED3\u6784\u7C7B\u578B"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u7C7B\u578B\u540D"}),(0,d.jsx)(e.th,{children:"\u5B58\u50A8\u7A7A\u95F4\uFF08\u5B57\u8282\uFF09"}),(0,d.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/semi-structured/ARRAY",children:"ARRAY"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"\u7531 T \u7C7B\u578B\u5143\u7D20\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\u3002\u76EE\u524D\u652F\u6301\u5728 Duplicate \u548C Unique \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/semi-structured/MAP",children:"MAP"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"\u7531 K, V \u7C7B\u578B\u5143\u7D20\u7EC4\u6210\u7684 map\uFF0C\u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\u3002\u76EE\u524D\u652F\u6301\u5728 Duplicate \u548C Unique \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/semi-structured/STRUCT",children:"STRUCT"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"\u7531\u591A\u4E2A Field \u7EC4\u6210\u7684\u7ED3\u6784\u4F53\uFF0C\u4E5F\u53EF\u88AB\u7406\u89E3\u4E3A\u591A\u4E2A\u5217\u7684\u96C6\u5408\u3002\u4E0D\u80FD\u4F5C\u4E3A Key \u4F7F\u7528\uFF0C\u76EE\u524D STRUCT \u4EC5\u652F\u6301\u5728 Duplicate \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\u3002\u4E00\u4E2A Struct \u4E2D\u7684 Field \u7684\u540D\u5B57\u548C\u6570\u91CF\u56FA\u5B9A\uFF0C\u603B\u662F\u4E3A Nullable\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/semi-structured/JSON",children:"JSON"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"\u4E8C\u8FDB\u5236 JSON \u7C7B\u578B\uFF0C\u91C7\u7528\u4E8C\u8FDB\u5236 JSON \u683C\u5F0F\u5B58\u50A8\uFF0C\u901A\u8FC7 JSON \u51FD\u6570\u8BBF\u95EE JSON \u5185\u90E8\u5B57\u6BB5\u3002\u957F\u5EA6\u9650\u5236\u548C\u914D\u7F6E\u65B9\u5F0F\u4E0E String \u76F8\u540C"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/semi-structured/VARIANT",children:"VARIANT"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"\u52A8\u6001\u53EF\u53D8\u6570\u636E\u7C7B\u578B\uFF0C\u4E13\u4E3A\u534A\u7ED3\u6784\u5316\u6570\u636E\u5982 JSON \u8BBE\u8BA1\uFF0C\u53EF\u4EE5\u5B58\u5165\u4EFB\u610F JSON\uFF0C\u81EA\u52A8\u5C06 JSON \u4E2D\u7684\u5B57\u6BB5\u62C6\u5206\u6210\u5B50\u5217\u5B58\u50A8\uFF0C\u63D0\u5347\u5B58\u50A8\u6548\u7387\u548C\u67E5\u8BE2\u5206\u6790\u6027\u80FD\u3002\u957F\u5EA6\u9650\u5236\u548C\u914D\u7F6E\u65B9\u5F0F\u4E0E String \u76F8\u540C\u3002Variant \u7C7B\u578B\u53EA\u80FD\u7528\u5728 Value \u5217\uFF0C\u4E0D\u80FD\u7528\u5728 Key \u5217\u548C\u5206\u533A\u5206\u6876\u5217\u3002"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u805A\u5408\u7C7B\u578B",children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/data-type-overview#%E8%81%9A%E5%90%88%E7%B1%BB%E5%9E%8B",children:"\u805A\u5408\u7C7B\u578B"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u7C7B\u578B\u540D"}),(0,d.jsx)(e.th,{children:"\u5B58\u50A8\u7A7A\u95F4\uFF08\u5B57\u8282\uFF09"}),(0,d.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/aggregate/HLL",children:"HLL"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"HLL \u662F\u6A21\u7CCA\u53BB\u91CD\uFF0C\u5728\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u6027\u80FD\u4F18\u4E8E Count Distinct\u3002HLL \u7684\u8BEF\u5DEE\u901A\u5E38\u5728 1% \u5DE6\u53F3\uFF0C\u6709\u65F6\u4F1A\u8FBE\u5230 2%\u3002HLL \u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\uFF0C\u5EFA\u8868\u65F6\u914D\u5408\u805A\u5408\u7C7B\u578B\u4E3A HLL_UNION\u3002\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u957F\u5EA6\u6839\u636E\u6570\u636E\u7684\u805A\u5408\u7A0B\u5EA6\u7CFB\u7EDF\u5185\u63A7\u5236\u3002HLL \u5217\u53EA\u80FD\u901A\u8FC7\u914D\u5957\u7684 hll_union_agg\u3001hll_raw_agg\u3001hll_cardinality\u3001hll_hash \u8FDB\u884C\u67E5\u8BE2\u6216\u4F7F\u7528\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/aggregate/BITMAP",children:"BITMAP"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"Bitmap \u7C7B\u578B\u7684\u5217\u53EF\u4EE5\u5728 Aggregate \u8868\u3001Unique \u8868\u6216 Duplicate \u8868\u4E2D\u4F7F\u7528\u3002\u5728 Unique \u8868\u6216 Duplicate \u8868\u4E2D\u4F7F\u7528\u65F6\uFF0C\u5176\u5FC5\u987B\u4F5C\u4E3A\u975E Key \u5217\u4F7F\u7528\u3002\u5728 Aggregate \u8868\u4E2D\u4F7F\u7528\u65F6\uFF0C\u5176\u5FC5\u987B\u4F5C\u4E3A\u975E Key \u5217\u4F7F\u7528\uFF0C\u4E14\u5EFA\u8868\u65F6\u914D\u5408\u7684\u805A\u5408\u7C7B\u578B\u4E3A BITMAP_UNION\u3002\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u957F\u5EA6\u6839\u636E\u6570\u636E\u7684\u805A\u5408\u7A0B\u5EA6\u7CFB\u7EDF\u5185\u63A7\u5236\u3002BITMAP \u5217\u53EA\u80FD\u901A\u8FC7\u914D\u5957\u7684 bitmap_union_count\u3001bitmap_union\u3001bitmap_hash\u3001bitmap_hash64 \u7B49\u51FD\u6570\u8FDB\u884C\u67E5\u8BE2\u6216\u4F7F\u7528\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/aggregate/QUANTILE-STATE",children:"QUANTILE_STATE"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"QUANTILE_STATE \u662F\u4E00\u79CD\u8BA1\u7B97\u5206\u4F4D\u6570\u8FD1\u4F3C\u503C\u7684\u7C7B\u578B\uFF0C\u5728\u5BFC\u5165\u65F6\u4F1A\u5BF9\u76F8\u540C\u7684 Key\uFF0C\u4E0D\u540C Value \u8FDB\u884C\u9884\u805A\u5408\uFF0C\u5F53 value \u6570\u91CF\u4E0D\u8D85\u8FC7 2048 \u65F6\u91C7\u7528\u660E\u7EC6\u8BB0\u5F55\u6240\u6709\u6570\u636E\uFF0C\u5F53 Value \u6570\u91CF\u5927\u4E8E 2048 \u65F6\u91C7\u7528 TDigest \u7B97\u6CD5\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u805A\u5408\uFF08\u805A\u7C7B\uFF09\u4FDD\u5B58\u805A\u7C7B\u540E\u7684\u8D28\u5FC3\u70B9\u3002QUANTILE_STATE \u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\uFF0C\u5EFA\u8868\u65F6\u914D\u5408\u805A\u5408\u7C7B\u578B\u4E3A QUANTILE_UNION\u3002\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u957F\u5EA6\u6839\u636E\u6570\u636E\u7684\u805A\u5408\u7A0B\u5EA6\u7CFB\u7EDF\u5185\u63A7\u5236\u3002QUANTILE_STATE \u5217\u53EA\u80FD\u901A\u8FC7\u914D\u5957\u7684 QUANTILE_PERCENT\u3001QUANTILE_UNION\u3001TO_QUANTILE_STATE \u7B49\u51FD\u6570\u8FDB\u884C\u67E5\u8BE2\u6216\u4F7F\u7528\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-data-types/aggregate/AGG-STATE",children:"AGG_STATE"})}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B9A\u957F"}),(0,d.jsx)(e.td,{children:"\u805A\u5408\u51FD\u6570\uFF0C\u53EA\u80FD\u914D\u5408 state/merge/union \u51FD\u6570\u7EC4\u5408\u5668\u4F7F\u7528\u3002AGG_STATE \u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\uFF0C\u5EFA\u8868\u65F6\u9700\u8981\u540C\u65F6\u58F0\u660E\u805A\u5408\u51FD\u6570\u7684\u7B7E\u540D\u3002\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u5B9E\u9645\u5B58\u50A8\u7684\u6570\u636E\u5927\u5C0F\u4E0E\u51FD\u6570\u5B9E\u73B0\u6709\u5173\u3002"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"ip-\u7C7B\u578B",children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/data-type-overview#ip-%E7%B1%BB%E5%9E%8B",children:"IP \u7C7B\u578B"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u7C7B\u578B\u540D"}),(0,d.jsx)(e.th,{children:"\u5B58\u50A8\u7A7A\u95F4\uFF08\u5B57\u8282\uFF09"}),(0,d.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/ip/IPV4",children:"IPv4"})}),(0,d.jsx)(e.td,{children:"4 \u5B57\u8282"}),(0,d.jsx)(e.td,{children:"\u4EE5 4 \u5B57\u8282\u4E8C\u8FDB\u5236\u5B58\u50A8 IPv4 \u5730\u5740\uFF0C\u914D\u5408 ipv4_* \u7CFB\u5217\u51FD\u6570\u4F7F\u7528\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"../sql-manual/sql-data-types/ip/IPV6",children:"IPv6"})}),(0,d.jsx)(e.td,{children:"16 \u5B57\u8282"}),(0,d.jsx)(e.td,{children:"\u4EE5 16 \u5B57\u8282\u4E8C\u8FDB\u5236\u5B58\u50A8 IPv6 \u5730\u5740\uFF0C\u914D\u5408 ipv6_* \u7CFB\u5217\u51FD\u6570\u4F7F\u7528\u3002"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:["\u4E5F\u53EF\u901A\u8FC7",(0,d.jsx)(e.code,{children:"SHOW DATA TYPES;"}),"\u8BED\u53E5\u67E5\u770B Apache Doris \u652F\u6301\u7684\u6240\u6709\u6570\u636E\u7C7B\u578B\u3002"]})]})}function x(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(c,{...n})}):c(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return r}});var t=s(667294);let d={},l=t.createContext(d);function r(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);