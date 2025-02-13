"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["121344"],{384457:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>t,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"admin-manual/fe/upload-action","title":"Upload Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/upload-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/upload-action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/upload-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Upload Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Table Schema Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/table-schema-action"},"next":{"title":"Import Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/import-action"}}'),i=d("785893"),l=d("250065");let r={title:"Upload Action",language:"zh-CN"},a=void 0,t={},c=[{value:"\u4E0A\u4F20\u5BFC\u5165\u6587\u4EF6",id:"\u4E0A\u4F20\u5BFC\u5165\u6587\u4EF6",level:2},{value:"Request",id:"request",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"\u5BFC\u5165\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6",id:"\u5BFC\u5165\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6",level:2},{value:"Request",id:"request-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Header",id:"header",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Upload Action \u76EE\u524D\u4E3B\u8981\u670D\u52A1\u4E8E FE \u7684\u524D\u7AEF\u9875\u9762\uFF0C\u7528\u4E8E\u7528\u6237\u5BFC\u5165\u4E00\u4E9B\u6D4B\u8BD5\u6027\u8D28\u7684\u5C0F\u6587\u4EF6\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4E0A\u4F20\u5BFC\u5165\u6587\u4EF6",children:"\u4E0A\u4F20\u5BFC\u5165\u6587\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u5C06\u6587\u4EF6\u4E0A\u4F20\u5230 FE \u8282\u70B9\uFF0C\u53EF\u5728\u7A0D\u540E\u7528\u4E8E\u5BFC\u5165\u8BE5\u6587\u4EF6\u3002\u76EE\u524D\u4EC5\u652F\u6301\u4E0A\u4F20\u6700\u5927 100MB \u7684\u6587\u4EF6\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"POST /api/<namespace>/<db>/<tbl>/upload\n"})}),"\n",(0,i.jsx)(n.h3,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<namespace>"})}),"\n",(0,i.jsxs)(n.p,{children:["\u547D\u540D\u7A7A\u95F4\uFF0C\u76EE\u524D\u4EC5\u652F\u6301 ",(0,i.jsx)(n.code,{children:"default_cluster"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<db>"})}),"\n",(0,i.jsx)(n.p,{children:"\u6307\u5B9A\u7684\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<tbl>"})}),"\n",(0,i.jsx)(n.p,{children:"\u6307\u5B9A\u7684\u8868"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"column_separator"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u9009\u9879\uFF0C\u6307\u5B9A\u6587\u4EF6\u7684\u5206\u9694\u7B26\u3002\u9ED8\u8BA4\u4E3A ",(0,i.jsx)(n.code,{children:"\\t"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"preview"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u9009\u9879\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,i.jsx)(n.code,{children:"true"}),"\uFF0C\u5219\u8FD4\u56DE\u7ED3\u679C\u4E2D\u4F1A\u663E\u793A\u6700\u591A 10 \u884C\u6839\u636E ",(0,i.jsx)(n.code,{children:"column_separator"})," \u5207\u5206\u597D\u7684\u6570\u636E\u884C\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"request-body",children:"Request body"}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u4E0A\u4F20\u7684\u6587\u4EF6\u5185\u5BB9\uFF0CContent-type \u4E3A ",(0,i.jsx)(n.code,{children:"multipart/form-data"})]}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n        "id": 1,\n        "uuid": "b87824a4-f6fd-42c9-b9f1-c6d68c5964c2",\n        "originFileName": "data.txt",\n        "fileSize": 102400,\n        "absPath": "/path/to/file/data.txt"\n        "maxColNum" : 5\n	},\n	"count": 1\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u5BFC\u5165\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6",children:"\u5BFC\u5165\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6"}),"\n",(0,i.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PUT /api/<namespace>/<db>/<tbl>/upload\n"})}),"\n",(0,i.jsx)(n.h3,{id:"path-parameters-1",children:"Path parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<namespace>"})}),"\n",(0,i.jsxs)(n.p,{children:["\u547D\u540D\u7A7A\u95F4\uFF0C\u76EE\u524D\u4EC5\u652F\u6301 ",(0,i.jsx)(n.code,{children:"default_cluster"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<db>"})}),"\n",(0,i.jsx)(n.p,{children:"\u6307\u5B9A\u7684\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<tbl>"})}),"\n",(0,i.jsx)(n.p,{children:"\u6307\u5B9A\u7684\u8868"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"query-parameters-1",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"file_id"})}),"\n",(0,i.jsx)(n.p,{children:"\u6307\u5B9A\u5BFC\u5165\u7684\u6587\u4EF6 id\uFF0C\u6587\u4EF6 id \u7531\u4E0A\u4F20\u5BFC\u5165\u6587\u4EF6\u7684 API \u8FD4\u56DE\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"file_uuid"})}),"\n",(0,i.jsx)(n.p,{children:"\u6307\u5B9A\u5BFC\u5165\u7684\u6587\u4EF6 uuid\uFF0C\u6587\u4EF6 uuid \u7531\u4E0A\u4F20\u5BFC\u5165\u6587\u4EF6\u7684 API \u8FD4\u56DE\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,i.jsx)(n.p,{children:"Header \u4E2D\u7684\u53EF\u9009\u9879\u540C Stream Load \u8BF7\u6C42\u4E2D header \u7684\u53EF\u9009\u9879\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"request-body-1",children:"Request body"}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u4E0A\u4F20\u7684\u6587\u4EF6\u5185\u5BB9\uFF0CContent-type \u4E3A ",(0,i.jsx)(n.code,{children:"multipart/form-data"})]}),"\n",(0,i.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"TxnId": 7009,\n		"Label": "9dbdfb0a-120b-47a2-b078-4531498727cb",\n		"Status": "Success",\n		"Message": "OK",\n		"NumberTotalRows": 3,\n		"NumberLoadedRows": 3,\n		"NumberFilteredRows": 0,\n		"NumberUnselectedRows": 0,\n		"LoadBytes": 12,\n		"LoadTimeMs": 71,\n		"BeginTxnTimeMs": 0,\n		"StreamLoadPutTimeMs": 1,\n		"ReadDataTimeMs": 0,\n		"WriteDataTimeMs": 13,\n		"CommitAndPublishTimeMs": 53\n	},\n	"count": 1\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PUT /api/default_cluster/db1/tbl1/upload?file_id=1&file_uuid=b87824a4-f6fd-42c9-b9f1-c6d68c5964c2\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return a},a:function(){return r}});var s=d(667294);let i={},l=s.createContext(i);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);