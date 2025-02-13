"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["112673"],{348398:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"admin-manual/cluster-management/time-zone","title":"Time Zone","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/cluster-management/time-zone.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/time-zone","permalink":"/docs/admin-manual/cluster-management/time-zone","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Time Zone","language":"en"},"sidebar":"docs","previous":{"title":"Load Balancing","permalink":"/docs/admin-manual/cluster-management/load-balancing"},"next":{"title":"FQDN","permalink":"/docs/admin-manual/cluster-management/fqdn"}}'),s=i("785893"),o=i("250065");let a={title:"Time Zone",language:"en"},r="Time Zone",d={},l=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Specific operations",id:"specific-operations",level:2},{value:"Data source",id:"data-source",level:2},{value:"Impact of time zone",id:"impact-of-time-zone",level:2},{value:"1. functions",id:"1-functions",level:3},{value:"2. Values of time types",id:"2-values-of-time-types",level:3},{value:"3. Daylight Saving Time",id:"3-daylight-saving-time",level:3},{value:"Usage",id:"usage",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Time Zone Sensitive Data",id:"time-zone-sensitive-data",level:3},{value:"Daylight Saving Time",id:"daylight-saving-time",level:3},{value:"Information Update",id:"information-update",level:3},{value:"Extended Reading",id:"extended-reading",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"time-zone",children:"Time Zone"})}),"\n",(0,s.jsx)(n.p,{children:"Doris supports custom time zone settings"}),"\n",(0,s.jsx)(n.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,s.jsx)(n.p,{children:"The following two time zone related parameters exist within Doris:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"system_time_zone"})," : When the server starts up, it will be set automatically according to the time zone set by the machine, and cannot be modified after it is set."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"time_zone"})," : The current time zone of the cluster. This variable will be set to the same as ",(0,s.jsx)(n.code,{children:"system_time_zone"})," when the cluster starts and will not be changed again unless manually changed by the user."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"specific-operations",children:"Specific operations"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"SHOW VARIABLES LIKE '% time_zone%'"})}),"\n",(0,s.jsx)(n.p,{children:"View the current time zone related configuration"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"SET [global] time_zone = 'Asia/Shanghai'"})}),"\n",(0,s.jsxs)(n.p,{children:["This command sets the time zone at the session level. If the ",(0,s.jsx)(n.code,{children:"global"})," keyword is used, Doris FE persists the parameter and it takes effect for all new sessions afterwards."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"data-source",children:"Data source"}),"\n",(0,s.jsxs)(n.p,{children:["The time zone data contains the name of the time zone, the corresponding time offset, and the change of daylight saving time. On the machine where the BE is located, the source of the data is the directory returned by command ",(0,s.jsx)(n.code,{children:"TZDIR"}),". If was not supported, the directory ",(0,s.jsx)(n.code,{children:"/usr/share/zoneinfo"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"impact-of-time-zone",children:"Impact of time zone"}),"\n",(0,s.jsx)(n.h3,{id:"1-functions",children:"1. functions"}),"\n",(0,s.jsxs)(n.p,{children:["Includes values displayed by time functions such as ",(0,s.jsx)(n.code,{children:"NOW()"})," or ",(0,s.jsx)(n.code,{children:"CURTIME()"}),", and also time values in ",(0,s.jsx)(n.code,{children:"show load"}),", ",(0,s.jsx)(n.code,{children:"show backends"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["However, it does not affect the less than value of the time-type partitioned columns in ",(0,s.jsx)(n.code,{children:"create table"}),", nor does it affect the display of values stored as ",(0,s.jsx)(n.code,{children:"date/datetime"})," types."]}),"\n",(0,s.jsx)(n.p,{children:"Functions affected by time zone:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FROM_UNIXTIME"}),": Given a UTC timestamp, return its date and time in the time zone specified by Doris session ",(0,s.jsx)(n.code,{children:"time_zone"}),". For example, when ",(0,s.jsx)(n.code,{children:"time_zone"})," is ",(0,s.jsx)(n.code,{children:"CST"}),", ",(0,s.jsx)(n.code,{children:"FROM_UNIXTIME(0)"})," returns ",(0,s.jsx)(n.code,{children:"1970-01-01 08: 00:00"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"UNIX_TIMESTAMP"}),": Given a date and time, return its UTC timestamp in the time zone specified by Doris session ",(0,s.jsx)(n.code,{children:"time_zone"}),", such as when ",(0,s.jsx)(n.code,{children:"time_zone"})," is ",(0,s.jsx)(n.code,{children:"CST"})," ",(0,s.jsx)(n.code,{children:"UNIX_TIMESTAMP('1970-01-01 08:00:00 ')"})," returns ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CURTIME"}),": Returns the time in the time zone specified by the current Doris session ",(0,s.jsx)(n.code,{children:"time_zone"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"NOW"}),": Returns the date and time of the current Doris session ",(0,s.jsx)(n.code,{children:"time_zone"})," specified time zone."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CONVERT_TZ"}),": Convert a datetime from one specified time zone to another."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-values-of-time-types",children:"2. Values of time types"}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"DATE"})," and ",(0,s.jsx)(n.code,{children:"DATETIME"})," types, we support time zone conversion when importing data."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['If the data has a time zone, such as "2020-12-12 12:12:12+08:00" with the current Doris ',(0,s.jsx)(n.code,{children:"time_zone = +00:00"}),', then the data is imported into Doris and the actual value is "2020-12-12 04:12:12".']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'If the data does not contain a time zone, such as "2020-12-12 12:12:12", the time is considered to be an absolute time and no conversion occurs.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-daylight-saving-time",children:"3. Daylight Saving Time"}),"\n",(0,s.jsx)(n.p,{children:"Daylight Saving Time is essentially the actual time offset of a named time zone, which changes on certain dates."}),"\n",(0,s.jsxs)(n.p,{children:["For example, the ",(0,s.jsx)(n.code,{children:"America/Los_Angeles"})," time zone contains a Daylight Saving Time adjustment that begins and ends approximately in March and November of each year. That is, the ",(0,s.jsx)(n.code,{children:"America/Los_Angeles"})," actual time zone offset changes from ",(0,s.jsx)(n.code,{children:"-08:00"})," to ",(0,s.jsx)(n.code,{children:"-07:00"})," at the start of Daylight Savings Time in March, and from ",(0,s.jsx)(n.code,{children:"-07:00"})," to ",(0,s.jsx)(n.code,{children:"-08:00"})," at the end of Daylight Savings Time in November.\nIf you do not want Daylight Saving Time to be turned on, set ",(0,s.jsx)(n.code,{children:"time_zone"})," to ",(0,s.jsx)(n.code,{children:"-08:00"})," instead of ",(0,s.jsx)(n.code,{children:"America/Los_Angeles"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Time zone values can be given in a variety of formats. The following standard formats are well supported in Doris:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['standard named time zone formats, such as "Asia/Shanghai", "America/Los_Angeles". This format is derived from ',(0,s.jsx)(n.a,{href:"#data-source",children:"time zone data on this machine"}),'. "Etc/GMT+3" etc. also belongs to this category.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'standard offset formats, such as "+02:30", "-10:00".(special offsets such as "+12:03" are not supported)'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"abbreviated time zone formats, currently only support:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'"GMT", "UTC", equivalent to "+00:00" time zone'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'"CST", which is equivalent to the "Asia/Shanghai" time zone'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'single letter Z, for Zulu time zone, equivalent to "+00:00" time zone'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Besides, all parsing of alphabet is case insensitive."}),"\n",(0,s.jsxs)(n.p,{children:["Note: Some other formats are currently supported in some imports in Doris due to different implementations. ",(0,s.jsx)(n.strong,{children:"Production environments should not rely on these formats that are not listed here, and their behaviour may change at any time"}),", so keep an eye on the relevant changelog for version updates."]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"time-zone-sensitive-data",children:"Time Zone Sensitive Data"}),"\n",(0,s.jsx)(n.p,{children:"The time zone issue involves three main influences:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["session variable ",(0,s.jsx)(n.code,{children:"time_zone"})," -- cluster timezone"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["header ",(0,s.jsx)(n.code,{children:"timezone"})," specified during import(Stream Load, Broker Load etc.) -- importing timezone"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'timezone type literal "+08:00" in "2023-12-12 08:00:00+08:00" -- data timezone'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We can understand it as follows:"}),"\n",(0,s.jsxs)(n.p,{children:["Doris is currently compatible with importing data in various time zones into Doris. Since Doris's own ",(0,s.jsx)(n.code,{children:"DATETIME"})," and other time types do not contain time zone information, and the data will not change with time zone changes after being imported, when time data is imported into Doris, it can be divided into the following two categories:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Absolute time"}),"\n",(0,s.jsx)(n.p,{children:"Absolute time means that the data scene it is associated with has nothing to do with time zones. This type of data should be imported without any time zone suffix and will be stored as-is."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Time in a specific time zone"}),"\n",(0,s.jsxs)(n.p,{children:["The time in a specific time zone means that the data scenario it is associated with is related to the time zone. For this type of data, it should be imported with a specific time zone suffix. When imported, they will be converted to the Doris cluster ",(0,s.jsx)(n.code,{children:"time_zone"})," time zone or the header ",(0,s.jsx)(n.code,{children:"timezone"})," specified in Stream Load/Broker Load."]}),"\n",(0,s.jsx)(n.p,{children:"This type of data is converted to absolute time storage in the time zone specified during import after import, so subsequent imports and queries should maintain this time zone to avoid confusion in the meaning of the data."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For the Insert statement, we can illustrate it through the following example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"Doris > select @@time_zone;\n+---------------+\n| @@time_zone   |\n+---------------+\n| Asia/Shanghai |\n+---------------+\n\nDoris > insert into dt values('2020-12-12 12:12:12+02:00'); --- The imported data specifies a time zone of +02:00\n\nDoris > select * from dt;\n+---------------------+\n| dt                  |\n+---------------------+\n| 2020-12-12 18:12:12 | --- Is converted to the Doris cluster time zone Asia/Shanghai, subsequent imports and queries should maintain this time zone.\n+---------------------+\n\nDoris > set time_zone = 'America/Los_Angeles';\n\nDoris > select * from dt;\n+---------------------+\n| dt                  |\n+---------------------+\n| 2020-12-12 18:12:12 | --- If time_zone is modified, the time value will not change accordingly, and its meaning during query will be confused.\n+---------------------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For import methods such as Stream Load and Broker Load, we can achieve this by specifying header ",(0,s.jsx)(n.code,{children:"timezone"}),". For example, for Stream Load, we can illustrate it through the following example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'cat dt.csv\n2020-12-12 12:12:12+02:00\n\ncurl --location-trusted -u root: \\\n -H "Expect:100-continue" \\\n -H "strict_mode: true" \\\n -H "timezone: Asia/Shanghai" \\\n -T dt.csv -XPUT \\\n http://127.0.0.1:8030/api/test/dt/_stream_load\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"Doris > select @@time_zone;\n+---------------+\n| @@time_zone   |\n+---------------+\n| Asia/Shanghai |\n+---------------+\n\nDoris > select * from dt;\n+---------------------+\n| dt                  |\n+---------------------+\n| 2020-12-12 18:12:12 | --- Is converted to the Doris cluster time zone Asia/Shanghai, subsequent imports and queries should maintain this time zone.\n+---------------------+\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In import methods such as Stream Load and Broker Load, the header ",(0,s.jsx)(n.code,{children:"timezone"})," will overwrite the Doris cluster ",(0,s.jsx)(n.code,{children:"time_zone"}),", so it should be consistent during import."]}),"\n",(0,s.jsxs)(n.li,{children:["In import methods such as Stream Load and Broker Load, the header ",(0,s.jsx)(n.code,{children:"timezone"})," will affect the functions used in import conversion."]}),"\n",(0,s.jsxs)(n.li,{children:["If the header ",(0,s.jsx)(n.code,{children:"timezone"})," is not specified when importing, the East Eighth Zone will be used by default."]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To sum up, the best practice for dealing with time zone issues is:"})}),"\n",(0,s.jsx)(n.admonition,{title:"Best Practices",type:"info",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Confirm the time zone represented by the cluster and set ",(0,s.jsx)(n.code,{children:"time_zone"})," before use, and do not change it after that."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set header ",(0,s.jsx)(n.code,{children:"timezone"})," to be consistent with cluster ",(0,s.jsx)(n.code,{children:"time_zone"})," when importing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For absolute time, import without time zone suffix; for time with time zone, import with specific time zone suffix, and it will be converted to Doris ",(0,s.jsx)(n.code,{children:"time_zone"})," time zone after import."]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"daylight-saving-time",children:"Daylight Saving Time"}),"\n",(0,s.jsxs)(n.p,{children:["The start and end times for Daylight Saving Time are taken from the ",(0,s.jsx)(n.a,{href:"#data-source",children:"current time zone data source"})," and may not necessarily correspond exactly to the actual officially recognised times for the current year's time zone location. This data is maintained by ICANN. If you need to ensure that Daylight Saving Time behaves as specified for the current year, please make sure that data source selected by Doris is the latest ICANN published time zone data. See below for download access."]}),"\n",(0,s.jsx)(n.h3,{id:"information-update",children:"Information Update"}),"\n",(0,s.jsx)(n.p,{children:"Real-world time zone and daylight saving time data may change from time to time for a variety of reasons, and IANA periodically records these changes and updates the corresponding time zone files. If you want the time zone information in Doris to be up to date with the latest IANA data, do one of the followings:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Use the Package Manager to update"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Depending on the package manager used by the current operating system, you can update the time zone data directly using the corresponding command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# yum\n> sudo yum update tzdata\n# apt\n> sudo apt update tzdata\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The data updated in this way is located under the system ",(0,s.jsx)(n.code,{children:"$TZDIR"})," (typically ",(0,s.jsx)(n.code,{children:"usr/share/zoneinfo"}),")."]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"pull the IANA time zone database manually (recommended)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Most Linux distributions have a package manager where tzdata is not synchronised in a timely manner. If the accuracy of the time zone data is important, you can pull the data published by IANA on a regular basis:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"wget https://www.iana.org/time-zones/repository/tzdb-latest.tar.lz\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then generate the specific zoneinfo data according the README file in the extracted folder. The generated data should be copied to override ",(0,s.jsx)(n.code,{children:"$TZDIR"})," folder."]}),"\n",(0,s.jsxs)(n.p,{children:["Please note that all the above operations ",(0,s.jsx)(n.strong,{children:"must"})," be restarted on the corresponding BE to take effect after they are done on the BE machine."]}),"\n",(0,s.jsx)(n.h2,{id:"extended-reading",children:"Extended Reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"List of tz database time zones"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.iana.org/time-zones",children:"IANA Time Zone Database"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://mm.icann.org/pipermail/tz-announce/",children:"The tz-announce Archives"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var t=i(667294);let s={},o=t.createContext(s);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);