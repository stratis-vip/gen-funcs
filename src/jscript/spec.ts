import {checkObject, dbg, isEmptyObject} from "."
describe("checkObject", () => {
  test("empty object", () => {
    expect(checkObject({})).toBeTruthy()
  })

  test("number", () => {
    expect(checkObject(8)).not.toBeTruthy()
  })

  test("array", () => {
    expect(checkObject([])).toBeTruthy()
  })

  test("object ", () => {
    expect(checkObject(new Object())).toBeTruthy()
  })
})

describe("isEmptyObject", () => {
  test("empty object", () => {
    expect(isEmptyObject({})).toBeTruthy()
  })

  test("number", () => {
    expect(isEmptyObject(8)).toBeTruthy()
  })

  test("array", () => {
    expect(isEmptyObject([])).toBeTruthy()
  })

  test("object ", () => {
    expect(isEmptyObject(new Object())).toBeTruthy()
  })

  dbg(4,'number')
  dbg(4)

})