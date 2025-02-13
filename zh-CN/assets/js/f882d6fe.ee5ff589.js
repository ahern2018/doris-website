"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["832759"],{191064:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>o,assets:()=>c,toc:()=>h,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-hash","title":"BITMAP_HASH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-hash","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BITMAP_HASH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TO_BITMAP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/to-bitmap"},"next":{"title":"BITMAP_FROM_STRING","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-from-string"}}'),i=s("785893"),r=s("250065");let a={title:"BITMAP_HASH",language:"zh-CN"},l=void 0,c={},h=[{value:"bitmap_hash",id:"bitmap_hash",level:2},{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"bitmap_hash",children:"bitmap_hash"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"BITMAP_HASH"}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(n.p,{children:["\u5BF9\u4EFB\u610F\u7C7B\u578B\u7684\u8F93\u5165\uFF0C\u8BA1\u7B97\u5176 32 \u4F4D\u7684\u54C8\u5E0C\u503C\uFF0C\u5E76\u8FD4\u56DE\u5305\u542B\u8BE5\u54C8\u5E0C\u503C\u7684 bitmap\u3002\u8BE5\u51FD\u6570\u4F7F\u7528\u7684\u54C8\u5E0C\u7B97\u6CD5\u4E3A MurMur3\u3002MurMur3 \u7B97\u6CD5\u662F\u4E00\u79CD\u9AD8\u6027\u80FD\u7684\u3001\u4F4E\u78B0\u649E\u7387\u7684\u6563\u5217\u7B97\u6CD5\uFF0C\u5176\u8BA1\u7B97\u51FA\u6765\u7684\u503C\u63A5\u8FD1\u4E8E\u968F\u673A\u5206\u5E03\uFF0C\u5E76\u4E14\u80FD\u901A\u8FC7\u5361\u65B9\u5206\u5E03\u6D4B\u8BD5\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E0D\u540C\u786C\u4EF6\u5E73\u53F0\u3001\u4E0D\u540C Seed \u503C\u8BA1\u7B97\u51FA\u6765\u7684\u6563\u5217\u503C\u53EF\u80FD\u4E0D\u540C\u3002\u5173\u4E8E\u6B64\u7B97\u6CD5\u7684\u6027\u80FD\u53EF\u4EE5\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"http://rurban.github.io/smhasher/",children:"Smhasher"})," \u6392\u884C\u699C\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BITMAP BITMAP_HASH(<any_value>)"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<any_value>"}),"\n\u4EFB\u4F55\u503C\u6216\u5B57\u6BB5\u8868\u8FBE\u5F0F\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"return-type",children:"Return Type"}),"\n",(0,i.jsx)(n.p,{children:"BITMAP"}),"\n",(0,i.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(n.p,{children:"\u4E00\u822C\u6765\u8BF4\uFF0CMurMur 32 \u4F4D\u7B97\u6CD5\u5BF9\u4E8E\u5B8C\u5168\u968F\u673A\u7684\u3001\u8F83\u77ED\u7684\u5B57\u7B26\u4E32\u7684\u6563\u5217\u6548\u679C\u8F83\u597D\uFF0C\u78B0\u649E\u7387\u80FD\u8FBE\u5230\u51E0\u5341\u4EBF\u5206\u4E4B\u4E00\uFF0C\u4F46\u5BF9\u4E8E\u8F83\u957F\u7684\u5B57\u7B26\u4E32\uFF0C\u6BD4\u5982\u4F60\u7684\u64CD\u4F5C\u7CFB\u7EDF\u8DEF\u5F84\uFF0C\u78B0\u649E\u7387\u4F1A\u6BD4\u8F83\u9AD8\u3002\u5982\u679C\u4F60\u626B\u63CF\u4F60\u7CFB\u7EDF\u91CC\u7684\u8DEF\u5F84\uFF0C\u5C31\u4F1A\u53D1\u73B0\u78B0\u649E\u7387\u4EC5\u4EC5\u53EA\u80FD\u8FBE\u5230\u767E\u4E07\u5206\u4E4B\u4E00\u751A\u81F3\u662F\u5341\u4E07\u5206\u4E4B\u4E00\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4E0B\u9762\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684 MurMur3 \u6563\u5217\u503C\u662F\u4E00\u6837\u7684\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT bitmap_to_string(bitmap_hash('/System/Volumes/Data/Library/Developer/CommandLineTools/SDKs/MacOSX12.3.sdk/System/Library/Frameworks/KernelManagement.framework/KernelManagement.tbd')) AS a ,\n       bitmap_to_string(bitmap_hash('/System/Library/PrivateFrameworks/Install.framework/Versions/Current/Resources/es_419.lproj/Architectures.strings')) AS b;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-----------+-----------+\n| a         | b         |\n+-----------+-----------+\n| 282251871 | 282251871 |\n+-----------+-----------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u4F60\u60F3\u8BA1\u7B97\u67D0\u4E2A\u503C\u7684 MurMur3\uFF0C\u4F60\u53EF\u4EE5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"select bitmap_to_array(bitmap_hash('hello'))[1];\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------+\n| %element_extract%(bitmap_to_array(bitmap_hash('hello')), 1) |\n+-------------------------------------------------------------+\n|                                                  1321743225 |\n+-------------------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u60F3\u7EDF\u8BA1\u67D0\u4E00\u5217\u53BB\u91CD\u540E\u7684\u4E2A\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4F4D\u56FE\u7684\u65B9\u5F0F\uFF0C\u67D0\u4E9B\u573A\u666F\u4E0B\u6027\u80FD\u6BD4 ",(0,i.jsx)(n.code,{children:"count distinct"})," \u597D\u5F88\u591A\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select bitmap_count(bitmap_union(bitmap_hash(`word`))) from `words`;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| bitmap_count(bitmap_union(bitmap_hash(`word`))) |\n+-------------------------------------------------+\n|                                        33263478 |\n+-------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"BITMAP_HASH,BITMAP\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD8\u53EF\u53C2\u89C1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../bitmap-functions/bitmap-hash64",children:"BITMAP_HASH64"})}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(667294);let i={},r=t.createContext(i);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);