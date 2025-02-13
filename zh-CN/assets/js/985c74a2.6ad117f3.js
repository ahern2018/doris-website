"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["40300"],{973165:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>E,assets:()=>d,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-AND-GENERATED-COLUMN","title":"ALTER TABLE AND GENERATED COLUMN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-AND-GENERATED-COLUMN.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-AND-GENERATED-COLUMN","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-AND-GENERATED-COLUMN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER TABLE AND GENERATED COLUMN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ALTER TABLE COMMENT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COMMENT"},"next":{"title":"CANCEL-ALTER-TABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/table-and-view/table/CANCEL-ALTER-TABLE"}}'),a=t("785893"),s=t("250065");let r={title:"ALTER TABLE AND GENERATED COLUMN",language:"zh-CN"},i=void 0,d={},c=[{value:"ALTER TABLE \u548C\u751F\u6210\u5217",id:"alter-table-\u548C\u751F\u6210\u5217",level:2},{value:"REORDER COLUMN",id:"reorder-column",level:3},{value:"RENAME COLUMN",id:"rename-column",level:3},{value:"DROP COLUMN",id:"drop-column",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"alter-table-\u548C\u751F\u6210\u5217",children:"ALTER TABLE \u548C\u751F\u6210\u5217"}),"\n",(0,a.jsx)(n.p,{children:"\u4E0D\u652F\u6301\u4F7F\u7528 ALTER TABLE ADD COLUMN \u589E\u52A0\u4E00\u4E2A\u751F\u6210\u5217\uFF0C\u4E0D\u652F\u6301\u4F7F\u7528 ALTER TABLE MODIFY COLUMN \u4FEE\u6539\u751F\u6210\u5217\u4FE1\u606F\u3002\u652F\u6301\u4F7F\u7528 ALTER TABLE \u5BF9\u751F\u6210\u5217\u987A\u5E8F\u8FDB\u884C\u4FEE\u6539\uFF0C\u4FEE\u6539\u751F\u6210\u5217\u540D\u79F0\u548C\u5220\u9664\u751F\u6210\u5217\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4E0D\u652F\u6301\u7684\u573A\u666F\u62A5\u9519\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'mysql> CREATE TABLE test_alter_add_column(a int, b int) properties("replication_num"="1");\nQuery OK, 0 rows affected (0.14 sec)\nmysql> ALTER TABLE test_alter_add_column ADD COLUMN c int AS (a+b);\nERROR 1105 (HY000): errCode = 2, detailMessage = Not supporting alter table add generated columns.\nmysql> ALTER TABLE test_alter MODIFY COLUMN c int KEY AS (a+b+1);\nERROR 1105 (HY000): errCode = 2, detailMessage = Not supporting alter table modify generated columns.\n'})}),"\n",(0,a.jsx)(n.h3,{id:"reorder-column",children:"REORDER COLUMN"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE products ORDER BY (product_id, total_value, price, quantity);\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\n\u4FEE\u6539\u540E\u7684\u5217\u987A\u5E8F\u4ECD\u7136\u9700\u8981\u6EE1\u8DB3\u751F\u6210\u5217\u5EFA\u8868\u65F6\u7684\u987A\u5E8F\u9650\u5236\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"rename-column",children:"RENAME COLUMN"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE products RENAME COLUMN total_value new_name;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\n\u5982\u679C\u8868\u4E2D\u67D0\u5217\uFF08\u751F\u6210\u5217\u6216\u8005\u666E\u901A\u5217\uFF09\u88AB\u5176\u5B83\u751F\u6210\u5217\u5F15\u7528\uFF0C\u9700\u8981\u5148\u5220\u9664\u5176\u5B83\u751F\u6210\u5217\u540E\uFF0C\u624D\u80FD\u4FEE\u6539\u6B64\u751F\u6210\u5217\u7684\u540D\u79F0\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"drop-column",children:"DROP COLUMN"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE products DROP COLUMN total_value;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\n\u5982\u679C\u8868\u4E2D\u67D0\u5217\uFF08\u751F\u6210\u5217\u6216\u8005\u666E\u901A\u5217\uFF09\u88AB\u5176\u5B83\u751F\u6210\u5217\u5F15\u7528\uFF0C\u9700\u8981\u5148\u5220\u9664\u5176\u5B83\u751F\u6210\u5217\u540E\uFF0C\u624D\u80FD\u5220\u9664\u6B64\u88AB\u5F15\u7528\u7684\u751F\u6210\u5217\u6216\u8005\u666E\u901A\u5217\u3002"})]})}function E(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var l=t(667294);let a={},s=l.createContext(a);function r(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);