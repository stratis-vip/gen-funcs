/**
 * check if the value is an object
 * @param value object to check
 */
export const checkObject = (value: any): boolean => {
  return value !== null && typeof value === "object"
}

export const isEmptyObject = (obj: any): boolean => {
  return Object.keys(obj).length === 0
}