---
{
    "title": "LTRIM",
    "language": "zh-CN"
}
---

<!-- 
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

## ltrim
## 描述
## 语法
 
`VARCHAR ltrim(VARCHAR str[, VARCHAR rhs])`


当没有rhs参数时，将参数 str 中从左侧部分开始部分连续出现的空格去掉，否则去掉rhs

## 举例

```
mysql> SELECT ltrim('   ab d') str;
+------+
| str  |
+------+
| ab d |
+------+

mysql> SELECT ltrim('ababccaab','ab') str;
+-------+
| str   |
+-------+
| ccaab |
+-------+
```
### keywords
    LTRIM
