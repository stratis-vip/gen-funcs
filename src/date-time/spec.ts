import {
  yyyymmdd,
  fromYYYYMMDDToJsonDate,
  fromDateToJsonDT,
  fromYYYYMMDDtoSql,
  sqlToyyyymmdd,
  isValidDate,
} from "."
describe("yyyymmdd", () => {
  const date = new Date("2020-08-16T17:56:37.536Z")
  const yyymmddDate = yyyymmdd(date)
  const sqlDate = "2020-08-16"
  const jsonObj = {
    day: 16,
    hour: 20,
    mil: 536,
    mins: 56,
    month: 8,
    sec: 37,
    year: 2020,
  }
  const jsonObjWNT = {
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
    expect(fromYYYYMMDDToJsonDate(yyymmddDate)).toStrictEqual(jsonObjWNT)
  })

  test("fromDateToJsonDT", () => {
    expect(fromDateToJsonDT(date)).toStrictEqual(jsonObj)
  })

  test("fromYYYYMMDDtoSql", () => {
    expect(fromYYYYMMDDtoSql(yyymmddDate)).toBe(sqlDate)
  })
  test("sqlToyyyymmdd", () => {
    expect(sqlToyyyymmdd(sqlDate)).toBe(yyymmddDate)
  })

  test("isValidDate", () => {
    expect(isValidDate(yyymmddDate)).toBeTruthy()
  })
})
