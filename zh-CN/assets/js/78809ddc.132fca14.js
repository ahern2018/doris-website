"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["203697"],{907494:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>u,assets:()=>i,toc:()=>l,frontMatter:()=>d});var r=JSON.parse('{"id":"data-operate/update/update-of-aggregate-model","title":"\u805A\u5408\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/update/update-of-aggregate-model.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/update-of-aggregate-model","permalink":"/zh-CN/docs/data-operate/update/update-of-aggregate-model","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u805A\u5408\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4E3B\u952E\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0","permalink":"/zh-CN/docs/data-operate/update/update-of-unique-model"},"next":{"title":"\u4E3B\u952E\u6A21\u578B\u7684\u66F4\u65B0\u5E76\u53D1\u63A7\u5236","permalink":"/zh-CN/docs/data-operate/update/unique-update-concurrent-control"}}'),a=t("785893"),o=t("250065");let d={title:"\u805A\u5408\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0",language:"zh-CN"},s=void 0,i={},l=[{value:"\u6574\u884C\u66F4\u65B0",id:"\u6574\u884C\u66F4\u65B0",level:2},{value:"\u805A\u5408\u6A21\u578B\u7684\u90E8\u5206\u5217\u66F4\u65B0",id:"\u805A\u5408\u6A21\u578B\u7684\u90E8\u5206\u5217\u66F4\u65B0",level:2},{value:"\u90E8\u5206\u5217\u66F4\u65B0\u4F7F\u7528\u6CE8\u610F",id:"\u90E8\u5206\u5217\u66F4\u65B0\u4F7F\u7528\u6CE8\u610F",level:2}];function c(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u8FD9\u7BC7\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD Doris \u805A\u5408\u6A21\u578B\u4E0A\u57FA\u4E8E\u5BFC\u5165\u7684\u66F4\u65B0\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6574\u884C\u66F4\u65B0",children:"\u6574\u884C\u66F4\u65B0"}),"\n",(0,a.jsx)(n.p,{children:"\u4F7F\u7528 Doris \u652F\u6301\u7684 Stream Load\uFF0CBroker Load\uFF0CRoutine Load\uFF0CInsert Into \u7B49\u5BFC\u5165\u65B9\u5F0F\uFF0C\u5F80\u805A\u5408\u6A21\u578B\uFF08Agg \u6A21\u578B\uFF09\u4E2D\u8FDB\u884C\u6570\u636E\u5BFC\u5165\u65F6\uFF0C\u90FD\u4F1A\u5C06\u65B0\u7684\u503C\u4E0E\u65E7\u7684\u805A\u5408\u503C\uFF0C\u6839\u636E\u5217\u7684\u805A\u5408\u51FD\u6570\u4EA7\u51FA\u65B0\u7684\u805A\u5408\u503C\uFF0C\u8FD9\u4E2A\u503C\u53EF\u80FD\u662F\u63D2\u5165\u65F6\u4EA7\u51FA\uFF0C\u4E5F\u53EF\u80FD\u662F\u5F02\u6B65 Compaction \u65F6\u4EA7\u51FA\uFF0C\u4F46\u662F\u7528\u6237\u67E5\u8BE2\u65F6\uFF0C\u90FD\u4F1A\u5F97\u5230\u4E00\u6837\u7684\u8FD4\u56DE\u503C\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u805A\u5408\u6A21\u578B\u7684\u90E8\u5206\u5217\u66F4\u65B0",children:"\u805A\u5408\u6A21\u578B\u7684\u90E8\u5206\u5217\u66F4\u65B0"}),"\n",(0,a.jsx)(n.p,{children:"Aggregate \u8868\u4E3B\u8981\u5728\u9884\u805A\u5408\u573A\u666F\u4F7F\u7528\u800C\u975E\u6570\u636E\u66F4\u65B0\u7684\u573A\u666F\u4F7F\u7528\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5C06\u805A\u5408\u51FD\u6570\u8BBE\u7F6E\u4E3A REPLACE_IF_NOT_NULL \u6765\u5B9E\u73B0\u90E8\u5206\u5217\u66F4\u65B0\u6548\u679C\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u5EFA\u8868"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5C06\u9700\u8981\u8FDB\u884C\u5217\u66F4\u65B0\u7684\u5B57\u6BB5\u5BF9\u5E94\u7684\u805A\u5408\u51FD\u6570\u8BBE\u7F6E\u4E3A",(0,a.jsx)(n.code,{children:"REPLACE_IF_NOT_NULL"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE order_tbl (\n  order_id int(11) NULL,\n  order_amount int(11) REPLACE_IF_NOT_NULL NULL,\n  order_status varchar(100) REPLACE_IF_NOT_NULL NULL\n) ENGINE=OLAP\nAGGREGATE KEY(order_id)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(order_id) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6570\u636E\u5199\u5165"})}),"\n",(0,a.jsxs)(n.p,{children:["\u65E0\u8BBA\u662F Stream Load\u3001Broker Load\u3001Routine Load \u8FD8\u662F",(0,a.jsx)(n.code,{children:"INSERT INTO"}),", \u76F4\u63A5\u5199\u5165\u8981\u66F4\u65B0\u7684\u5B57\u6BB5\u7684\u6570\u636E\u5373\u53EF"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u793A\u4F8B"})}),"\n",(0,a.jsx)(n.p,{children:"\u4E0E\u524D\u9762\u4F8B\u5B50\u76F8\u540C\uFF0C\u5BF9\u5E94\u7684 Stream Load \u547D\u4EE4\u4E3A\uFF08\u4E0D\u9700\u8981\u989D\u5916\u7684 header\uFF09\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'$ cat update.csv\n\n1,To be shipped\n\ncurl  --location-trusted -u root: -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:8030/api/db1/order_tbl/_stream_load\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5BF9\u5E94\u7684",(0,a.jsx)(n.code,{children:"INSERT INTO"}),"\u8BED\u53E5\u4E3A\uFF08\u4E0D\u9700\u8981\u989D\u5916\u8BBE\u7F6E session variable\uFF09\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO order_tbl (order_id, order_status) values (1,'\u5F85\u53D1\u8D27');\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u90E8\u5206\u5217\u66F4\u65B0\u4F7F\u7528\u6CE8\u610F",children:"\u90E8\u5206\u5217\u66F4\u65B0\u4F7F\u7528\u6CE8\u610F"}),"\n",(0,a.jsx)(n.p,{children:"Aggregate Key \u6A21\u578B\u5728\u5199\u5165\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u4EFB\u4F55\u989D\u5916\u5904\u7406\uFF0C\u6240\u4EE5\u5199\u5165\u6027\u80FD\u4E0D\u53D7\u5F71\u54CD\uFF0C\u4E0E\u666E\u901A\u7684\u6570\u636E\u5BFC\u5165\u76F8\u540C\u3002\u4F46\u662F\u5728\u67E5\u8BE2\u65F6\u8FDB\u884C\u805A\u5408\u7684\u4EE3\u4EF7\u8F83\u5927\uFF0C\u5178\u578B\u7684\u805A\u5408\u67E5\u8BE2\u6027\u80FD\u76F8\u6BD4 Unique Key \u6A21\u578B\u7684 Merge-on-Write \u5B9E\u73B0\u4F1A\u6709 5-10 \u500D\u7684\u4E0B\u964D\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u7531\u4E8E ",(0,a.jsx)(n.code,{children:"REPLACE_IF_NOT_NULL"})," \u805A\u5408\u51FD\u6570\u4EC5\u5728\u975E NULL \u503C\u65F6\u624D\u4F1A\u751F\u6548\uFF0C\u56E0\u6B64\u7528\u6237\u65E0\u6CD5\u5C06\u67D0\u4E2A\u5B57\u6BB5\u503C\u4FEE\u6539\u4E3A NULL \u503C\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return d}});var r=t(667294);let a={},o=r.createContext(a);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);