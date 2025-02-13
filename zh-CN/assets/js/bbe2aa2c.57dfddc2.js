"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["156323"],{22828:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>E,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-AS-SELECT","title":"CREATE TABLE AS SELECT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-AS-SELECT.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-AS-SELECT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-AS-SELECT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE TABLE AS SELECT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE TABLE LIKE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-LIKE"},"next":{"title":"DESCRIBE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/DESC-TABLE"}}'),l=t("785893"),a=t("250065");let i={title:"CREATE TABLE AS SELECT",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u901A\u8FC7 Select \u8BED\u53E5\u8FD4\u56DE\u7ED3\u679C\u521B\u5EFA\u8868\u7ED3\u6784\uFF0C\u540C\u65F6\u5BFC\u5165\u6570\u636E"}),"\n",(0,l.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE table_name [( column_name_list )]\n    opt_engine:engineName\n    opt_keys:keys\n    opt_comment:tableComment\n    opt_partition:partition\n    opt_distribution:distribution\n    opt_rollup:index\n    opt_properties:tblProperties\n    opt_ext_properties:extProperties\n    KW_AS query_stmt:query_def\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u7528\u6237\u9700\u8981\u62E5\u6709\u6765\u6E90\u8868\u7684",(0,l.jsx)(n.code,{children:"SELECT"}),"\u6743\u9650\u548C\u76EE\u6807\u5E93\u7684",(0,l.jsx)(n.code,{children:"CREATE"}),"\u6743\u9650"]}),"\n",(0,l.jsx)(n.li,{children:"\u521B\u5EFA\u8868\u6210\u529F\u540E\uFF0C\u4F1A\u8FDB\u884C\u6570\u636E\u5BFC\u5165\uFF0C\u5982\u679C\u5BFC\u5165\u5931\u8D25\uFF0C\u5C06\u4F1A\u5220\u9664\u8868"}),"\n",(0,l.jsxs)(n.li,{children:["\u53EF\u4EE5\u81EA\u884C\u6307\u5B9A key type\uFF0C\u9ED8\u8BA4\u4E3A",(0,l.jsx)(n.code,{children:"Duplicate Key"})]}),"\n",(0,l.jsx)(n.li,{children:"\u6240\u6709\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u5217 (varchar/var/string) \u90FD\u4F1A\u88AB\u521B\u5EFA\u4E3A string \u7C7B\u578B\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679C\u521B\u5EFA\u7684\u6765\u6E90\u4E3A\u5916\u90E8\u8868\uFF0C\u5E76\u4E14\u7B2C\u4E00\u5217\u4E3A String \u7C7B\u578B\uFF0C\u5219\u4F1A\u81EA\u52A8\u5C06\u7B2C\u4E00\u5217\u8BBE\u7F6E\u4E3A VARCHAR(65533)\u3002\u56E0\u4E3A Doris \u5185\u90E8\u8868\uFF0C\u4E0D\u5141\u8BB8 String \u5217\u4F5C\u4E3A\u7B2C\u4E00\u5217\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528 select \u8BED\u53E5\u4E2D\u7684\u5B57\u6BB5\u540D"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'create table `test`.`select_varchar` \nPROPERTIES("replication_num" = "1") \nas select * from `test`.`varchar_table`\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D (\u9700\u8981\u4E0E\u8FD4\u56DE\u7ED3\u679C\u5B57\u6BB5\u6570\u91CF\u4E00\u81F4)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'create table `test`.`select_name`(user, testname, userstatus) \nPROPERTIES("replication_num" = "1") \nas select vt.userId, vt.username, jt.status \nfrom `test`.`varchar_table` vt join \n`test`.`join_table` jt on vt.userId=jt.userId\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6307\u5B9A\u8868\u6A21\u578B\u3001\u5206\u533A\u3001\u5206\u6876"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE t_user(dt, id, name)\nENGINE=OLAP\nUNIQUE KEY(dt, id)\nCOMMENT "OLAP"\nPARTITION BY RANGE(dt)\n(\n   FROM ("2020-01-01") TO ("2021-12-31") INTERVAL 1 YEAR\n)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES("replication_num"="1")\nAS SELECT cast(\'2020-05-20\' as date) as dt, 1 as id, \'Tom\' as name;\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,l.jsx)(n.p,{children:"CREATE, TABLE, AS, SELECT"})]})}function E(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);