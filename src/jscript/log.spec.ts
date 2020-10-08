import {dbg, dbgFactory, error, identify, info, makeInfo, makeObject} from "./index";

test('object', () => {
  expect(identify(4)).toBe('number')
  expect(identify('4')).toBe('string')
  expect(identify([1])).toBe('array')
  expect(identify([])).toBe('array')
  expect(identify(null)).toBe('null')
  expect(identify(undefined)).toBe('undefined')
  expect(identify({a: 1})).toBe('object')
  expect(identify(true)).toBe('boolean')
  expect(identify(Symbol('simbolo'))).toBe('symbol')
  expect(identify(() => {
  })).toBe('function')


  expect(makeInfo('INFO', {date: '2020-08-09 13:43:22', color: '[32m'})).toStrictEqual('[32mINFO> 13:43:22 - ')
  expect(makeInfo('INFO', {date: '2020-08-09 13:43:22', color: '[31m'})).toStrictEqual('[31mINFO> 13:43:22 - ')
  expect(makeInfo('ERROR', {date: '2020-08-09 13:43:22', color: '[32m'})).toStrictEqual('[32mERROR> 13:43:22 - ')
  expect(makeObject(43, {showType: true})).toStrictEqual('[0m[1m(NUMBER): 43[0m')
  expect(makeObject(43, {showType: true, json: true})).toStrictEqual('[0m[1m(NUMBER): 43[0m')
  expect(makeObject(43, {showType: false})).toStrictEqual('[0m[1m43[0m')

  expect(makeObject([1, 2], {showType: true, json: true})).toStrictEqual('[0m[1m(ARRAY): [1,2][0m')
  expect(makeObject({a: 1, b: [1, 2]}, {
    showType: true,
    json: true
  })).toStrictEqual('[0m[1m(OBJECT): {"a":1,"b":[1,2]}[0m')
  expect(makeObject({a: 1, b: [1, 2]}, {
    showType: true,
    json: false
  })).toStrictEqual('[0m[1m(OBJECT): [object Object][0m')
  expect(dbgFactory('DEBUG', 'alfa', {
    date: '2020-08-09 13:43:22',
    showType: true,
    json: false,
    showFileName:true
  })).toStrictEqual(`[32mDEBUG@/Users/stratis/dev/jscript/gen-funcs/src/jscript/index.ts> 13:43:22 - [0m[1m(STRING): alfa[0m`)

  dbg([45,{laser:1}])
  error( new Error('Κάτι πήγε Στραβά').stack)
})