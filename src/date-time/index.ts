import {
  makeGMTtoLocalDate,
  dateArrayToYYYMMDD,
  splitYYYYMMDDDate,
  splitDates,
  constructTimePart,
  removeTH,
} from "./helpers"
import cloneDeep from "lodash.clonedeep"
import isEqual from 'lodash.isequal'
import {JsonDateTime, JsonDate, DateTimeShowOptions, JsonTime, defaultDateTimeOptions} from "api-general-classes"
import {checkObject, isEmptyObject} from ".."

/** μετατρέπει το αντικείμενο Date σε ημερομηνία με την μορφή ΕΕΕΕΜΜΗΗ
 * Αν δεν δοθεί ημερομηνία δημιουργεί μια με την τρέχουσα ώρα - ημέρα*/
export function yyyymmdd(d?: Date): string {
  const localD = d ? cloneDeep(d) : new Date()

  const ar = makeGMTtoLocalDate(localD)
  return dateArrayToYYYMMDD(ar)
}

/** μετατρέπει την ημερομηνία της μορφής ΕΕΕΕΜΜΗΗ σε αντικείμενο JsonDateTime.
 * Ta πεδία της ώρας είναι μηδενικά*/
export const fromYYYYMMDDToJsonDate = (s: string): JsonDateTime => {
  if (s !== undefined && s.length === 8) {
    const year = Number(s.substr(0, 4))
    const month = Number(s.substr(4, 2))
    const day = Number(s.substr(6, 2))
    return {year, month, day, hour: 0, mins: 0, sec: 0, mil: 0}
  } else {
    throw new Error(`${s} is not a valid date`)
  }
}

export const fromYYYYMMDDtoSql = (d: string): string => {
  const a = d.toString()
  return `${a.substr(0, 4)}-${a.substr(4, 2)}-${a.substr(6, 2)}`
}

export const sqlToyyyymmdd = (sql: string): string => {
  return sql.split('-').reduce((a, b) => a + b).slice(0, 8)
}

/**
 *
 * @param d must be in format yyyymmdd
 */
export const isValidDate: (d: string) => boolean = (d) => {
  const ar = splitYYYYMMDDDate(d)
  if (ar.length === 3) {
    if (ar[0] !== 0 && ar[1] > 0 && ar[1] <= 12 && ar[2] > 0 && ar[2] <= 31) {
      return true
    }
  }
  return false
}

const fromArray = (dateArray: number[]): JsonDateTime => {
  const year = dateArray[0] !== undefined ? dateArray[0] : 0
  const month = dateArray[1] !== undefined ? dateArray[1] : 0
  const day = dateArray[2] !== undefined ? dateArray[2] : 0
  const hour = dateArray[3] !== undefined ? dateArray[3] : 0
  const mins = dateArray[4] !== undefined ? dateArray[4] : 0
  const sec = dateArray[5] !== undefined ? dateArray[5] : 0
  const mil = dateArray[6] !== undefined ? dateArray[6] : 0
  return {
    year,
    month,
    day,
    hour,
    mins,
    sec,
    mil,
  }
}

export const sqlToJsonDateTime = (s: string): JsonDateTime => {
  return fromArray(splitDates(s))
}

/**
 *  Μετατρέπει την ημερομηνία - ώρα σε αντικείμενο JsonDateTime,
 *  Αν δε δωθεί ημερομηνία, τότε υπολογίζει την τρέχουσα ημερομηνία
 * @param d Η ημερομηνία που θα μετατραπεί (σε μορφή Date)
 */
export const fromDateToJsonDT = (d?: Date): JsonDateTime => {
  const localDate = d ? new Date(d.getTime()) : new Date
  return fromArray(makeGMTtoLocalDate(localDate))
}

export const jsonDateTimeToSql = (d: JsonDateTime): string => {
  return JsonDateToIsoString(d).substr(0, 19)
}

export function JsonDateToString(d: JsonDateTime, dtOptions: DateTimeShowOptions): string
export function JsonDateToString(d: JsonDate, dtOptions: DateTimeShowOptions): string
export function JsonDateToString(d: any, dtOptions: DateTimeShowOptions = defaultDateTimeOptions): string {
  if (dtOptions === undefined || isEmptyObject(dtOptions)) {
    dtOptions = defaultDateTimeOptions
  }
  let retVal: string = ""
  if (dtOptions.date) {
    retVal = `${d.day.toString().padStart(2, '0')}/${d.month.toString().padStart(2, '0')}/${d.year.toString().padStart(4, '0')}`
  }
  retVal += constructTimePart(dtOptions, d)
  return retVal
}

export function JsonDateToIsoString(d: JsonDateTime): string
export function JsonDateToIsoString(d: JsonDate): string
export function JsonDateToIsoString(d: any): string {
  const dtOptions: DateTimeShowOptions = {
    time: true,
    date: true,
    secs: true,
    mils: true
  }
  let retVal = `${d.year.toString().padStart(4, '0')}-${d.month.toString().padStart(2, '0')}-${d.day.toString().padStart(2, '0')}`
  retVal += constructTimePart(dtOptions, d)
  return retVal
}

export const numberToTime = (s: number, showMilliseconds: boolean = false) => {
  if (s === undefined || s === 0) {
    return "00:00:00"
  }
  let retVal = ""
  const hours = Math.floor(s / 3600)
  s = s - 3600 * hours
  const mins = Math.floor(s / 60)
  s = s - 60 * mins
  const secs = Math.floor(s)

  retVal = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  if (showMilliseconds) {
    const st = (s - secs).toString()
    const ar = st.split('.')
    const mils = ar[1] ? ar[1] : '0'
    retVal += `.${mils.padEnd(3, '0')}`
  }
  return retVal
}

export const extractDate = (s: JsonDateTime): JsonDate => {
  if (!checkObject(s)) throw new Error(`${s} is not a valid date`)
  return {year: s.year, month: s.month, day: s.day}
}

export const extractTime = (s: JsonDateTime): JsonTime => {
  if (!checkObject(s)) throw new Error(`${s} is not a valid date`)
  return {hour: s.hour, mins: s.mins, sec: s.sec, mil: s.mil}
}

export const isEqualJsonDate = (a: JsonDateTime, b: JsonDateTime, checkTime: boolean = false) => {
  if (!checkObject(a) || !checkObject(b)) {
    throw new Error('Δεν είναι αντικείμενα JsonDate(Time)')
  }
  if (checkTime === undefined) {
    checkTime = false
  }
  if (checkTime) {
    return isEqual(a, b)
  } else {
    return isEqual(extractDate(a), extractDate(b))
  }
}

export const getYearToTwodigits = (value: number): number => {
  let c = value
  c = removeTH(c, 1000)
  if (c > 100)
    c = removeTH(c, 100)
  return c
}

