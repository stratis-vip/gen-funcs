/**
 * Convert a date to an array. take care the time difference from GMT
 * @param d
 */
export function makeGMTtoLocalDate(d: Date): Array<number> {
  const offset = d.getTimezoneOffset()
  d.setMinutes(d.getMinutes() - offset)
  return splitDates(d.toISOString())
}

export const dateArrayToYYYMMDD = (ar: Array<number>): string => {
  return `${ar[0].toString().padStart(4, "0")}${ar[1]
    .toString()
    .padStart(2, "0")}${ar[2].toString().padStart(2, "0")}`
}

export const splitDates = (d: string): Array<number> => {
  if (d === undefined || d.length === 0) return []
  const ar = d.split(/[TZ:.\s*\/\t*-]/g)

  return ar.filter(a => a!=='').map((n) => Number(n))
}

