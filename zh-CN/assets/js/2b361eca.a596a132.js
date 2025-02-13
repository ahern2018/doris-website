"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["279451"],{215259:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-governance/CREATE-ROW-POLICY","title":"CREATE ROW POLICY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/data-governance/CREATE-ROW-POLICY.md","sourceDirName":"sql-manual/sql-statements/data-governance","slug":"/sql-manual/sql-statements/data-governance/CREATE-ROW-POLICY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-governance/CREATE-ROW-POLICY","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE ROW POLICY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW SQL_BLOCK_RULE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-governance/SHOW-SQL_BLOCK_RULE"},"next":{"title":"DROP ROW POLICY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/data-governance/DROP-ROW-POLICY"}}'),s=t("785893"),i=t("250065");let r={title:"CREATE ROW POLICY",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u521B\u5EFA\u884C\u5B89\u5168\u7B56\u7565\uFF0CExplain \u53EF\u4EE5\u67E5\u770B\u6539\u5199\u540E\u7684\u6267\u884C\u8BA1\u5212\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE ROW POLICY [ IF NOT EXISTS ] <policy_name> \nON <table_name> \nAS { RESTRICTIVE | PERMISSIVE } \nTO { <user_name> | ROLE <role_name> } \nUSING (<filter>);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<policy_name>"}),": \u884C\u5B89\u5168\u7B56\u7565\u540D\u79F0"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<table_name>"}),": \u8868\u540D\u79F0"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<filter_type>"}),": RESTRICTIVE \u5C06\u4E00\u7EC4\u7B56\u7565\u901A\u8FC7 AND \u8FDE\u63A5\uFF0CPERMISSIVE \u5C06\u4E00\u7EC4\u7B56\u7565\u901A\u8FC7 OR \u8FDE\u63A5"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<filter>"}),": \u76F8\u5F53\u4E8E\u67E5\u8BE2\u8BED\u53E5\u7684\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u4F8B\u5982\uFF1Aid=1"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<user_name>"}),": \u7528\u6237\u540D\u79F0\uFF0C\u4E0D\u5141\u8BB8\u5BF9 root \u548C admin \u7528\u6237\u521B\u5EFA"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<role_name>"}),": \u89D2\u8272\u540D\u79F0"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6743\u9650\uFF08Privilege\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u5BF9\u8C61\uFF08Object\uFF09"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8BF4\u660E\uFF08Notes\uFF09"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["ADMIN_PRIV \u6216 ",(0,s.jsx)(n.em,{children:"GRANT_PRIV"})]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u5168\u5C40"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u7EC4\u884C\u5B89\u5168\u7B56\u7565"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS RESTRICTIVE TO test USING (c1 = 'a');\nCREATE ROW POLICY test_row_policy_2 ON test.table1 \nAS RESTRICTIVE TO test USING (c2 = 'b');\nCREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c3 = 'c');\nCREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c4 = 'd');\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u6211\u4EEC\u6267\u884C\u5BF9 table1 \u7684\u67E5\u8BE2\u65F6\u88AB\u6539\u5199\u540E\u7684 sql \u4E3A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM (SELECT * FROM table1 WHERE c1 = 'a' AND c2 = 'b' OR c3 = 'c' OR c4 = 'd')\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var l=t(667294);let s={},i=l.createContext(s);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);