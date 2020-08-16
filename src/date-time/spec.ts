import {
  yyyymmdd,
  fromYYYYMMDDToJsonDate,
  fromDateToJsonDate,
  fromYYYYMMDDtoSql,
  sqlToyyyymmdd,
} from "."
describe("yyyymmdd", () => {
  const date = new Date("2020-08-16T17:56:37.536Z")
  const yyymmddDate = yyyymmdd(date)
  const sqlDate = '2020-08-16'
  const jsonObj = {
    day: 16,
    hour: 0,
    mil: 0,
    mins: 0,
    month: 8,
    sec: 0,
    year: 2020,
  }

  test("undefined gets current time", () => {
    expect(yyyymmdd()).not.toBeUndefined()
  })

  test("comvert the date", () => {
    expect(yyymmddDate).toBe("20200816")
  })

  test("yyyymmdd to JSONDATE", () => {
    expect(fromYYYYMMDDToJsonDate(yyymmddDate)).toStrictEqual(jsonObj)
  })

  test("fromDateToJsonDate", () => {
    expect(fromDateToJsonDate(date)).toStrictEqual(jsonObj)
  })

  test("fromYYYYMMDDtoSql", () => {
    expect(fromYYYYMMDDtoSql(yyymmddDate)).toBe(sqlDate)
  })
  test("sqlToyyyymmdd", () => {
    expect(sqlToyyyymmdd(sqlDate)).toBe(yyymmddDate)
  })
})
