import { splitDates, dateArrayToYYYMMDD, makeGMTtoLocalDate, splitYYYYMMDDDate } from "."

describe("splidates", () => {
  const date = new Date("2020-08-16T17:56:37.536Z")
  const array = splitDates(date.toISOString())
  const sqlArray = splitDates('2020-08-16 17:56:37')
  const yymmdddate = '20200816'

  test("check array members", () => {
    expect(array).toStrictEqual([2020, 8, 16, 17, 56, 37, 536])
  })

  test("check array members", () => {
    expect(sqlArray).toStrictEqual([2020, 8, 16, 17, 56, 37])
  })

  test("to be 20200816", () => {
    expect(dateArrayToYYYMMDD(array)).toBe("20200816")
  })

  test("splitYYYYMMDDDate", () => {
    expect(splitYYYYMMDDDate(yymmdddate)).toStrictEqual([2020,8,16])
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
