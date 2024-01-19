/*
 * @Author: huwanfei
 * @Date: 2022-11-16 10:34:47
 * @LastEditTime: 2022-12-12 10:53:18
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /autobots-equipment-depot-js/test/changeString.test.ts
 */
import changeString from '../src/changeString'

test(`changeString('15605885386') === '156****5386'`, () => {
  expect(changeString('15605885386',3,6,'****')).toBe('156****5386')
})