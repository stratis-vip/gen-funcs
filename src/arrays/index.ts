const findNext = (item: number, idx: number, array: number[]): number => {
  let it = item
  if (array[idx]) it += array[idx]
  return it
}

const add2Arrays: (a: number[], b: number[]) => number[] = (a, b) => {
  if (!a && !b) return []
  if (!a) return b
  if (!b) return a

  if (a.length > b.length) {
    return a.map((item, idx) => findNext(item, idx, b))
  } else {
    return b.map((item, idx) => findNext(item, idx, a))
  }
}

export const addArrays = (...args: Array<number[]>): number[] => {
  let ret = add2Arrays(args[0], args[1])
  for (let i = 2; i < args.length; i++) {
    ret = add2Arrays(ret, args[i])
  }
  return ret
}
