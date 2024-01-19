

## 说明
tomatinajs
是基于typescript编写的常用工具类库

## 安装
```js
npm install tomatinajs

yarn add tomatinajs

npm install tomatinajs@latest // 安装最新版
```

## 工具库列表
### `getDataType` 
鉴别数据类型

### `changeString` 
截取字符串并使用新字符替换

### `addObjectToArray` 
在编辑表单时, 下拉框列表中某一项已删除, 但表单中仍保留该字段, 需回显在表单中

### `downloadFile` 
下载/导出文件, 根据返回的全地址进行下载
###  `encodeBase64` 
使用base64加密字符串
### `encryptPhone` 
加密手机号(中间四位数字使用星号替换)
###  `recursionRouter` 
根据后台返回的权限路由数据过滤本地路由菜单
###  `getBirthdaySex` 
根据身份证获取出生日期和性别
###  `session.js` 
本地存储封装
###  `validate.js` 
表单项验证
###  `urlGetParam` 
获取url上的值
###  `thousandsDivide` 
数字千分位分隔
```js
thousandsDivide(123) // 123
thousandsDivide(12345678) // 12,345,678
thousandsDivide(12345.67) // 1,234,567.67
```

## 使用

全部引用

```js
import _ from 'tomatinajs'

_.getDataType(12)
```

部分引用
```js
import { getDataType } from 'tomatinajs'

getDataType(12)
```