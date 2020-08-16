import cloneDeep from "lodash.clonedeep"

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

