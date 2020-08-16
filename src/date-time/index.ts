import {
  makeGMTtoLocalDate,
  dateArrayToYYYMMDD,
  splitYYYYMMDDDate,
} from "./helpers"
import cloneDeep from "lodash.clonedeep"
import { JsonDateTime } from "api-general-classes"

export function yyyymmdd(d?: Date): string {
  const localD = d ? cloneDeep(d) : new Date()

  const ar = makeGMTtoLocalDate(localD)
  return dateArrayToYYYMMDD(ar)
}

/**
 *  Μετατρέπει την ημερομηνία - ώρα σε αντικείμενο JsonDateTime,
 *  Αν δε δωθεί ημερομηνία, τότε υπολογίζει την τρέχουσα ημερομηνία
 * @param d Η ημερομηνία που θα μετατραπεί (σε μορφή Date)
 */
export const fromDateToJsonDT = (d?: Date): JsonDateTime => {
  const localDate = d ? new Date(d.getTime()) : new Date
  const dateArray = makeGMTtoLocalDate(localDate)
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

export const fromYYYYMMDDToJsonDate = (s: string): JsonDateTime => {
  if (s !== undefined && s.length === 8) {
    const year = Number(s.substr(0, 4))
    const month = Number(s.substr(4, 2))
    const day = Number(s.substr(6, 2))
    return { year, month, day, hour: 0, mins: 0, sec: 0, mil: 0 }
  } else {
    throw new Error(`${s} is not a valid date`)
  }
}

export const fromYYYYMMDDtoSql = (d: string): string => {
  const a = d.toString()
  return `${a.substr(0, 4)}-${a.substr(4, 2)}-${a.substr(6, 2)}`
}

export const sqlToyyyymmdd = (s: string): string => {
  return s.split("-").join("")
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

