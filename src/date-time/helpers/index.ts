import cloneDeep from "lodash.clonedeep"
import { JsonDateTime, JsonDate, DateTimeShowOptions } from "api-general-classes"

/**
 * Convert a date to an array. take care the time difference from GMT
 * @param d
 */
export function makeGMTtoLocalDate(d: Date): Array<number> {
  const localD = cloneDeep(d)
  const offset = localD.getTimezoneOffset()
  localD.setMinutes(localD.getMinutes() - offset)
  return splitDates(localD.toISOString())
}

export const dateArrayToYYYMMDD = (ar: Array<number>): string => {
  return `${ar[0].toString().padStart(4, "0")}${ar[1]
    .toString()
    .padStart(2, "0")}${ar[2].toString().padStart(2, "0")}`
}

export const splitYYYYMMDDDate = (d:string): number[] =>{
  const ret:number[] = []
  if (d && d.length===8){
    ret.push(Number(d.slice(0,4)))
    ret.push(Number(d.slice(4, 6)))
    ret.push(Number(d.slice(6, 8)))
  }
  return ret
}

export const splitDates = (d: string): Array<number> => {
  if (d === undefined || d.length === 0) return []
  const ar = d.split(/[TZ:.\s*\/\t*-]/g)

  return ar.filter(a => a!=='').map((n) => Number(n))
}



export const constructTimePart = (dtOptions: DateTimeShowOptions, d: JsonDateTime): string => {
  const { date, time, secs, mils } = dtOptions
  let retVal: string = ""
  if (time) {
    if (date) {
      retVal += " "
    }
    retVal += (d as JsonDateTime).hour !== undefined ? d.hour.toString().padStart(2, '0') + ':' : ' 00:'
    retVal += (d as JsonDateTime).mins !== undefined ? d.mins.toString().padStart(2, '0') : '00'
    if (secs) {
      retVal += ':'
      retVal += (d as JsonDateTime).sec !== undefined ? d.sec.toString().padStart(2, '0') : '00'
      if (mils) {
        retVal += '.'
        retVal += (d as JsonDateTime).mil !== undefined ? d.mil.toString().padStart(3, '0') : '000'
      }
    }
  } return retVal
}

export const removeTH = (value: number, ada: number) => {
  let c = value
  // remove thousands
  c = c / ada
  const ar = c.toString().split('.')
  if (ar.length === 2) {
    c = Number('0.' + ar[1]) * ada
  } else { c = 0 }
  return c
}