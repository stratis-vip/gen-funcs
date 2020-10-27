/**
 * Returns all the integer factors of thwe number n. In n < 0
 * it returns and the negative factors of n. showNegatives
 * controlls if negative factors included
 *
 * @param n the number
 * @param showNegatives show negative factors of not
 *
 * @returns array with factors
 */
export const  factors = (n:number, showNegatives:boolean = true):number[] =>{
  if (n < 0) {
    if (showNegatives === true){
      const retVal = factors(-n)
      return [...retVal, ...retVal.map(a => -a)].sort()
    } else {
      return factors(-n)
    }
  } else {
    if (n === 0) return []
    if (n === 1) return [1]
    if (n === 2) return [1, 2]
    const retVal = [1]
    const mid = 1 + n / 2

    for (let i = 2; i <= mid; ++i) {
      if (n % i === 0) {
        retVal.push(i)
      }
    }
    return [...retVal, n]
  }
}