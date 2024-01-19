/*
 * @Author: huwanfei
 * @Date: 2022-11-14 11:19:01
 * @LastEditTime: 2022-12-12 10:52:40
 * @LastEditors: huwanfei
 * @Description:  getDataType测试示例
 * @FilePath: /autobots-equipment-depot-js/test/getDataType.test.ts
 */
import getDataType from "../src/getDataType";

describe('getDataType', () => {
  const array = [{
    target: 2,
    type: 'number'
  },
  {
    target: {a:1},
    type: 'object'
  },
  {
    target: [1,2],
    type: 'array'
  },
  {
    target: null,
    type: 'null'
  },
  {
    target: undefined,
    type: 'undefined'
  }]

  array.forEach(item => {
    test(`data type is ${item.type}`, () => {
      expect(getDataType(item.target)).toBe(item.type)
    })
  })
})
