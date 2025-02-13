"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["791432"],{48495:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"admin-manual/auth/authentication/internal","title":"Built-in Authentication","description":"\x3c!--","source":"@site/docs/admin-manual/auth/authentication/internal.md","sourceDirName":"admin-manual/auth/authentication","slug":"/admin-manual/auth/authentication/internal","permalink":"/docs/dev/admin-manual/auth/authentication/internal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Built-in Authentication","language":"en"},"sidebar":"docs","previous":{"title":"Security Overview","permalink":"/docs/dev/admin-manual/auth/security-overview"},"next":{"title":"Federated Authentication","permalink":"/docs/dev/admin-manual/auth/authentication/federation"}}'),t=n("785893"),r=n("250065");let o={title:"Built-in Authentication",language:"en"},a=void 0,l={},d=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"User",id:"user",level:3},{value:"User Attributes",id:"user-attributes",level:4},{value:"Built-in Users",id:"built-in-users",level:4},{value:"Password",id:"password",level:3},{value:"Password Policy",id:"password-policy",level:4},{value:"Authentication Mechanism",id:"authentication-mechanism",level:2},{value:"Whitelist and Blacklist",id:"whitelist-and-blacklist",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"Other Explanations",id:"other-explanations",level:2}];function c(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,t.jsx)(s.h3,{id:"user",children:"User"}),"\n",(0,t.jsxs)(s.p,{children:["In Doris, a ",(0,t.jsx)(s.code,{children:"user_identity"})," uniquely identifies a user. ",(0,t.jsx)(s.code,{children:"user_identity"})," consists of two parts: ",(0,t.jsx)(s.code,{children:"user_name"})," and ",(0,t.jsx)(s.code,{children:"host"}),", where ",(0,t.jsx)(s.code,{children:"user_name"})," is the username. ",(0,t.jsx)(s.code,{children:"host"})," identifies the host address from which the user connects. The ",(0,t.jsx)(s.code,{children:"host"})," part can use ",(0,t.jsx)(s.code,{children:"%"})," for fuzzy matching. If ",(0,t.jsx)(s.code,{children:"host"})," is not specified, it defaults to ",(0,t.jsx)(s.code,{children:"%"}),", meaning the user can connect to Doris from any host."]}),"\n",(0,t.jsx)(s.h4,{id:"user-attributes",children:"User Attributes"}),"\n",(0,t.jsxs)(s.p,{children:["User attributes are directly attached to ",(0,t.jsx)(s.code,{children:"user_name"}),", not ",(0,t.jsx)(s.code,{children:"user_identity"}),", meaning ",(0,t.jsx)(s.code,{children:"user@'192.%'"})," and ",(0,t.jsx)(s.code,{children:"user@['domain']"})," share the same set of user attributes. These attributes belong to the user, not ",(0,t.jsx)(s.code,{children:"user@'192.%'"})," or ",(0,t.jsx)(s.code,{children:"user@['domain']"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"User attributes include, but are not limited to: maximum number of user connections, import cluster configuration, etc."}),"\n",(0,t.jsx)(s.h4,{id:"built-in-users",children:"Built-in Users"}),"\n",(0,t.jsxs)(s.p,{children:["Built-in users are users created by default in Doris and have certain permissions by default, including ",(0,t.jsx)(s.code,{children:"root"})," and ",(0,t.jsx)(s.code,{children:"admin"}),". Initial passwords are empty and can be changed after the frontend starts using password modification commands. Default users cannot be deleted."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"root@'%'"}),": Root user, allowed to log in from any node, role is operator."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"admin@'%'"}),": Admin user, allowed to log in from any node, role is admin."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"password",children:"Password"}),"\n",(0,t.jsx)(s.p,{children:"Credentials for user login, set by the administrator when creating the user, can also be changed by the user after creation."}),"\n",(0,t.jsx)(s.h4,{id:"password-policy",children:"Password Policy"}),"\n",(0,t.jsx)(s.p,{children:"Doris supports the following password policies to help users manage passwords better."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"PASSWORD_HISTORY"}),"\nWhether the current user is allowed to use historical passwords when resetting their password. For example, ",(0,t.jsx)(s.code,{children:"PASSWORD_HISTORY 10"})," means that the past 10 passwords cannot be reused as the new password. If set to ",(0,t.jsx)(s.code,{children:"PASSWORD_HISTORY DEFAULT"}),", the value of the global variable ",(0,t.jsx)(s.code,{children:"password_history"})," will be used. 0 means this feature is not enabled. The default is 0.\nExample:\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Set global variable: ",(0,t.jsx)(s.code,{children:"SET GLOBAL password_history = 10"})]}),"\n",(0,t.jsxs)(s.li,{children:["Set for user: ",(0,t.jsx)(s.code,{children:"ALTER USER user1@'ip' PASSWORD_HISTORY 10"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"PASSWORD_EXPIRE"}),"\nSet the password expiration time for the current user. For example, ",(0,t.jsx)(s.code,{children:"PASSWORD_EXPIRE INTERVAL 10 DAY"})," means the password will expire in 10 days. ",(0,t.jsx)(s.code,{children:"PASSWORD_EXPIRE NEVER"})," means the password will never expire. If set to ",(0,t.jsx)(s.code,{children:"PASSWORD_EXPIRE DEFAULT"}),", the value of the global variable ",(0,t.jsx)(s.code,{children:"default_password_lifetime"})," will be used (in days). The default is ",(0,t.jsx)(s.code,{children:"NEVER"})," (or 0), meaning the password will not expire.\nExample:\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Set global variable: ",(0,t.jsx)(s.code,{children:"SET GLOBAL default_password_lifetime = 1"})]}),"\n",(0,t.jsxs)(s.li,{children:["Set for user: ",(0,t.jsx)(s.code,{children:"ALTER USER user1@'ip' PASSWORD_EXPIRE INTERVAL 10 DAY"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"FAILED_LOGIN_ATTEMPTS"})," and ",(0,t.jsx)(s.code,{children:"PASSWORD_LOCK_TIME"}),"\nSet the number of incorrect password attempts before the account is locked and the lock time. For example, ",(0,t.jsx)(s.code,{children:"FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY"})," means the account will be locked for one day after 3 incorrect login attempts. Administrators can unlock locked accounts using the ",(0,t.jsx)(s.code,{children:"ALTER USER"})," statement.\nExample:\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Set for user: ",(0,t.jsx)(s.code,{children:"ALTER USER user1@'ip' FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Password Strength\nControlled by the global variable ",(0,t.jsx)(s.code,{children:"validate_password_policy"}),". The default is ",(0,t.jsx)(s.code,{children:"NONE/0"}),", meaning no password strength check. If set to ",(0,t.jsx)(s.code,{children:"STRONG/2"}),', the password must contain at least 3 of the following: "uppercase letters", "lowercase letters", "numbers", and "special characters", and the length must be at least 8.\nExample:\n',(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"SET validate_password_policy=STRONG"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"authentication-mechanism",children:"Authentication Mechanism"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Client Authentication Information Sending: The client packages user information (such as username, password, database, etc.) and sends it to the Doris server. This information is used to prove the client's identity and request access to the database."}),"\n",(0,t.jsx)(s.li,{children:"Server Authentication: After receiving the client's authentication information, Doris verifies it. If the username, password, and client IP are correct, and the user has permission to access the selected database, authentication is successful, and Doris maps the user entity to the system's user identity. Otherwise, authentication fails, and an error message is returned to the client."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"whitelist-and-blacklist",children:"Whitelist and Blacklist"}),"\n",(0,t.jsxs)(s.p,{children:["Doris itself does not support a blacklist, only a whitelist function, but we can simulate a blacklist in some ways. Suppose a user named ",(0,t.jsx)(s.code,{children:"user@'192.%'"})," is created, allowing users from 192.* to log in. If you want to prohibit users from 192.168.10.1 from logging in, you can create another user ",(0,t.jsx)(s.code,{children:"cmy@'192.168.10.1'"})," and set a new password. Since 192.168.10.1 has a higher priority than 192.%, users from 192.168.10.1 will no longer be able to log in using the old password."]}),"\n",(0,t.jsx)(s.h2,{id:"related-commands",children:"Related Commands"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Create User: ",(0,t.jsx)(s.a,{href:"../../../sql-manual/sql-statements/account-management/CREATE-USER",children:"CREATE USER"})]}),"\n",(0,t.jsxs)(s.li,{children:["View User: ",(0,t.jsx)(s.a,{href:"../../../sql-manual/sql-statements/account-management/SHOW-GRANTS",children:"SHOW ALL GRANTS"})]}),"\n",(0,t.jsxs)(s.li,{children:["Modify User: ",(0,t.jsx)(s.a,{href:"../../../sql-manual/sql-statements/account-management/ALTER-USER",children:"ALTER USER"})]}),"\n",(0,t.jsxs)(s.li,{children:["Change Password: ",(0,t.jsx)(s.a,{href:"../../../sql-manual/sql-statements/account-management/SET-PASSWORD",children:"SET PASSWORD"})]}),"\n",(0,t.jsxs)(s.li,{children:["Delete User: ",(0,t.jsx)(s.a,{href:"../../../sql-manual/sql-statements/account-management/DROP-USER",children:"DROP USER"})]}),"\n",(0,t.jsxs)(s.li,{children:["Set User Attributes: ",(0,t.jsx)(s.a,{href:"../../../sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY.md",children:"SET PROPERTY"})]}),"\n",(0,t.jsxs)(s.li,{children:["View User Attributes: ",(0,t.jsx)(s.a,{href:"../../../sql-manual/sql-statements/account-management/SHOW-PROPERTY",children:"SHOW PROPERTY"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"other-explanations",children:"Other Explanations"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"User Identity Priority Selection Issue During Login"}),"\n",(0,t.jsxs)(s.p,{children:["As introduced above, ",(0,t.jsx)(s.code,{children:"user_identity"})," consists of ",(0,t.jsx)(s.code,{children:"user_name"})," and ",(0,t.jsx)(s.code,{children:"host"}),", but when logging in, the user only needs to enter ",(0,t.jsx)(s.code,{children:"user_name"}),", so Doris determines based on the client's IP which ",(0,t.jsx)(s.code,{children:"user_identity"})," to use for login."]}),"\n",(0,t.jsxs)(s.p,{children:["If only one ",(0,t.jsx)(s.code,{children:"user_identity"})," can be matched based on the client's IP, it will be used for login without any issues. However, if multiple ",(0,t.jsx)(s.code,{children:"user_identity"})," can be matched, there will be a priority issue."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Priority between domain name and IP:\nSuppose the following users are created:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"     CREATE USER user1@['domain1'] IDENTIFIED BY \"12345\";\n     CREATE USER user1@'ip1'IDENTIFIED BY \"abcde\";\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"domain1"})," is resolved to two IPs: ",(0,t.jsx)(s.code,{children:"ip1"})," and ",(0,t.jsx)(s.code,{children:"ip2"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["In terms of priority, IP takes precedence over domain name. Therefore, when user ",(0,t.jsx)(s.code,{children:"user1"})," attempts to log in to Doris from ",(0,t.jsx)(s.code,{children:"ip1"})," using password ",(0,t.jsx)(s.code,{children:"'12345'"}),", the login will be rejected."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Priority between specific IP and range IP:\nSuppose the following users are created:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"     CREATE USER user1@'%' IDENTIFIED BY \"12345\";\n     CREATE USER user1@'192.%' IDENTIFIED BY \"abcde\";\n"})}),"\n",(0,t.jsxs)(s.p,{children:["In terms of priority, ",(0,t.jsx)(s.code,{children:"'192.%'"})," takes precedence over ",(0,t.jsx)(s.code,{children:"'%'"}),". Therefore, when user ",(0,t.jsx)(s.code,{children:"user1"})," attempts to log in to Doris from ",(0,t.jsx)(s.code,{children:"192.168.1.1"})," using password ",(0,t.jsx)(s.code,{children:"'12345'"}),", the login will be rejected."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Forgotten Password"}),"\n",(0,t.jsxs)(s.p,{children:["If you forget your password and cannot log in to Doris, you can add the ",(0,t.jsx)(s.code,{children:"skip_localhost_auth_check=true"})," parameter to the FE's configuration file and restart the FE. This will allow you to log in to Doris from the FE machine without a password using the ",(0,t.jsx)(s.code,{children:"root"})," user."]}),"\n",(0,t.jsxs)(s.p,{children:["After logging in, you can use the ",(0,t.jsx)(s.code,{children:"SET PASSWORD"})," command to reset your password."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Any user cannot reset the password of the ",(0,t.jsx)(s.code,{children:"root"})," user, except for the ",(0,t.jsx)(s.code,{children:"root"})," user itself."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"current_user()"})," and ",(0,t.jsx)(s.code,{children:"user()"})]}),"\n",(0,t.jsxs)(s.p,{children:["Users can use ",(0,t.jsx)(s.code,{children:"SELECT current_user()"})," and ",(0,t.jsx)(s.code,{children:"SELECT user()"})," to view ",(0,t.jsx)(s.code,{children:"current_user"})," and ",(0,t.jsx)(s.code,{children:"user"}),", respectively. ",(0,t.jsx)(s.code,{children:"current_user"})," indicates the identity used by the current user to pass the authentication system, while ",(0,t.jsx)(s.code,{children:"user"})," is the actual User Identity of the current user."]}),"\n",(0,t.jsx)(s.p,{children:"For example:"}),"\n",(0,t.jsxs)(s.p,{children:["Suppose ",(0,t.jsx)(s.code,{children:"user1@'192.%'"})," is created, and then a user named ",(0,t.jsx)(s.code,{children:"user1"})," logs in to the system from ",(0,t.jsx)(s.code,{children:"192.168.10.1"}),". At this time, ",(0,t.jsx)(s.code,{children:"current_user"})," is ",(0,t.jsx)(s.code,{children:"user1@'192.%'"}),", and ",(0,t.jsx)(s.code,{children:"user"})," is ",(0,t.jsx)(s.code,{children:"user1@'192.168.10.1'"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["All permissions are granted to a specific ",(0,t.jsx)(s.code,{children:"current_user"}),", and the actual user has all the permissions of the corresponding ",(0,t.jsx)(s.code,{children:"current_user"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return o}});var i=n(667294);let t={},r=i.createContext(t);function o(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);