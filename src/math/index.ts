export const random = (max: number, isInt:boolean = true) => {
  if (max === 0) return 0
  return isInt ? Math.floor(Math.random() * max) : Math.random() * max
}
