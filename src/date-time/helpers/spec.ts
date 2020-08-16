import { splitDates, dateArrayToYYYMMDD, makeGMTtoLocalDate } from "."

describe("splidates", () => {
  const date = new Date("2020-08-16T17:56:37.536Z")
  const array = splitDates(date.toISOString())

  test("check array members", () => {
    expect(array).toStrictEqual([2020, 8, 16, 17, 56, 37, 536])
  })

  test("to be 20200816", () => {
    expect(dateArrayToYYYMMDD(array)).toBe("20200816")
  })

  test("makeGMTtoLocalDate to add GMT difference", () => {
    expect(makeGMTtoLocalDate(date)).toStrictEqual([
      2020,
      8,
      16,
      20,
      56,
      37,
      536,
    ])
  })
})
