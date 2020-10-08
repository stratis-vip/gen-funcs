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

export const identify = (what:any):string => {
  switch (typeof what){
    case 'string': return 'string'
    case 'number': return 'number'
    case 'object': {
      if (what === null ) return 'null'
      if (what === undefined) return 'undefined'
      if (what instanceof Array){
        return 'array'
      }
    }
    default: return typeof what
  }

}

export interface DebugOptions {
  date?:string
  color?:string
  showType?:boolean
  json?:boolean
  showFileName?:boolean
}

export const dbgFactory = (title:string, msg: any, options:DebugOptions) => {
  if (process.env.NODE_ENV !== 'production') {
    return constructDebug(title, msg, options)
  }
}

const constructDebug = (title:string, value: any, options:DebugOptions) => {
  const Reset = "\x1b[0m"
  const Bright = "\x1b[1m"
  // const Dim = "\x1b[2m"
  // const Underscore = "\x1b[4m"
  // const Blink = "\x1b[5m"
  // const Reverse = "\x1b[7m"
  // const Hidden = "\x1b[8m"
  //
  // const FgBlack = "\x1b[30m"
  // const FgRed = "\x1b[31m"
  const FgGreen = "\x1b[32m"
  const FgYellow = "\x1b[33m"
  // const FgBlue = "\x1b[34m"
  // const FgMagenta = "\x1b[35m"
  // const FgCyan = "\x1b[36m"
  // const FgWhite = "\x1b[37m"
  //
  // const BgBlack = "\x1b[40m"
  // const BgRed = "\x1b[41m"
  // const BgGreen = "\x1b[42m"
  // const BgYellow = "\x1b[43m"
  // const BgBlue = "\x1b[44m"
  // const BgMagenta = "\x1b[45m"
  // const BgCyan = "\x1b[46m"
  // const BgWhite = "\x1b[47m"
  const {date,color,showType, json,showFileName} = options
  const info = makeInfo(title, {date,color,showFileName})//`${FgGreen}DEBUG INFO ${new Date().toLocaleTimeString()}: `
  const objectType = makeObject(value,{showType,json})//`${Reset}${Bright}(${(typeof value).toUpperCase()})${Reset}`
  return info + objectType
}

export const makeInfo = (title:string, options:DebugOptions):string =>{
  const {date, color, showFileName} = options
  const dateString = (date ? new Date(date) : new Date()).toLocaleTimeString('el-GR', {hour12:false})
  const colorString = color ? color : '[32m';
  const fileString = showFileName ? `@${__filename}` : ''
  return `${colorString}${title}${fileString}> ${dateString} - `
}

export const makeObject = (obj:any, options:DebugOptions) =>{
  const Reset = "[0m"
  const Bright = "[1m"
  const {showType, json} = options
  const objType = showType? `(${identify(obj).toUpperCase()}): ` : ''
  const objString = json ? JSON.stringify(obj) : `${obj}`
  return `${Reset}${Bright}${objType}${objString}${Reset}`
}

export const info = (message:string, showFileName:boolean = false) =>{
  console.log(dbgFactory('INFO',message, {showFileName}))
}

export const error = (errorMessage:any) =>{
  const FgRed = "\x1b[31m"
  console.log(dbgFactory('ERROR',errorMessage, {showFileName:true,color:FgRed}))
}

export const dbg = (value:any, json:boolean = true, showFileName:boolean = false) =>{
  const FgCyan = "\x1b[36m"
  console.log(dbgFactory('DEBUG',value, {color:FgCyan,showType:true,showFileName, json}))
}