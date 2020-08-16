import { makeGMTtoLocalDate, dateArrayToYYYMMDD } from "./helpers"
import {JsonDateTime} from 'api-general-classes'

export function yyyymmdd(d?: Date): string {
  if (d === undefined) {
    d = new Date()
  }
  const ar = makeGMTtoLocalDate(d)
  return dateArrayToYYYMMDD(ar)
}

export const fromDateToJsonDate = (d: Date):JsonDateTime =>{
    return fromYYYYMMDDToJsonDate(yyyymmdd(d))
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