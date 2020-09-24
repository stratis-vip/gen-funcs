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

export function hd(a:string):string;
export function hd<T>(a: T[]): T ;
export function hd(a:any):any {
  if (!a) throw new TypeError
  if (a.length === 0) throw new TypeError('variable is empty')
  const [h,..._] = a
  if (typeof a === 'string'){
    return h
  }
  return h
}

export function tl(a:string):string;
export function tl<T>(a:T[]):T;
export function tl(a:any):any{
  if (!a) throw new TypeError
  if (a.length === 0) throw new TypeError('variable is empty')
  const [_,...t] = a
  if (typeof a === 'string'){
    return t.join('')
  }
  return t
}

export function first(a:string):string[];
export function first<T>(a:T[]):T[];
export function first(a:any):any[]{
  if (!a) throw new TypeError
  if (a.length === 0) throw new TypeError('variable is empty')
  return [hd(a)]
}

export function last(a:string):string[];
export function last<T>(a:T[]):T[];
export function last(a:any):any[]{
  if (!a) throw new TypeError
  if (a.length === 0) throw new TypeError('variable is empty')
  return  [[...a].pop()];
}