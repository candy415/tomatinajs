/*
 * @Author: huwanfei
 * @Date: 2022-11-16 11:14:16
 * @LastEditTime: 2022-12-12 10:53:05
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /autobots-equipment-depot-js/test/encryPhone.test.ts
 */

import encryptPhone from '../src/encryptPhone'

test("encryptPhone('15605885386')",() => {
  expect(encryptPhone('15605885386')).toBe('156****5386')
})