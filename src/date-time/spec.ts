import {
  yyyymmdd,
  fromYYYYMMDDToJsonDate,
  fromDateToJsonDT,
  fromYYYYMMDDtoSql,
  sqlToyyyymmdd,
  isValidDate,
  sqlToJsonDateTime,
  JsonDateToIsoString,
  jsonDateTimeToSql,
  getYearToTwodigits, fromDateToSql,
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

  test("sqltoyyyymmdd", ()=> {
    expect(sqlToyyyymmdd('2020-08-19 00:00:00')).toBe('20200819')
  })

  test("sqlToJsonDateTime", ()=> {
    expect(sqlToJsonDateTime('2020-08-19 00:34:00').mins).toBe(34)
  })

  test("sqlToJsonDateTime", ()=> {
    expect(JsonDateToIsoString(jsonObj)).toBe('2020-08-16 20:56:37.536')
  })

  test("jsonDateTimeToSql", ()=> {
    expect(jsonDateTimeToSql(jsonObj)).toBe('2020-08-16 20:56:37')
  })
})


test('get two digit year', () => {
  expect(getYearToTwodigits(2020)).toBe(20)
  expect(getYearToTwodigits(2120)).toBe(20)
  expect(getYearToTwodigits(2000)).toBe(0)
})

test('fromdatetoSql', ()=>{
  expect(fromDateToSql(new Date('2020-09-09 23:03:12'))).toBe('2020-09-09 23:03:12')
})