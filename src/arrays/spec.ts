import {addArrays, first, hd, last, tl} from "."

describe("Arrays", () => {
  it("addArrays() = []", () => {
    expect(addArrays()).toStrictEqual([])
  })

  it("addArrays([1]) = [1]", () => {
    expect(addArrays([1])).toStrictEqual([1])
  })

  it("addArrays([1],[4,5,6,8],[4,5,6,8], [3,4,5,6,7,8]) = [12,14,17,22,7,8] ", () => {
    expect(
      addArrays([1], [4, 5, 6, 8], [4, 5, 6, 8], [3, 4, 5, 6, 7, 8])
    ).toStrictEqual([12, 14, 17, 22, 7, 8])
  })

  it('addarrys([1],[2,3] => [3,3])',()=>{
    expect(addArrays([1,2],[2])).toStrictEqual([3,2])
  })

  it('tl([1] => []', ()=>{
    expect(tl([1])).toStrictEqual([])
  })

  it('tl([1,2,3,4,5] => [2,3,4,5]', ()=>{
    expect(tl([1,2,3,4,5])).toStrictEqual([2,3,4,5])
  })

  it('tl("testArray" => "estArray"', ()=>{
    expect(tl('testArray')).toStrictEqual('estArray')
  })

  it('tl([] => raise', ()=>{
    expect(() => tl([])).toThrowError()
  })

  it('hd([1] => 1', ()=>{
    expect(hd([1])).toStrictEqual(1)
  })

  it('hd([] => raise', ()=>{
    expect(() => hd([])).toThrowError()
  })

  it('hd([1,2,3,4,5] => 1', ()=>{
    expect(hd([1,2,3,4,5])).toStrictEqual(1)
  })

  it('hd("testArray" => "t"', ()=>{
    expect(hd('testArray')).toStrictEqual('t')
  })

  it('first([1,2,3,4,5] => [1]', ()=>{
    expect(first([1,2,3,4,5])).toStrictEqual([1])
  })

  it('first("testArray" => ["t"]', ()=>{
    expect(first('testArray')).toStrictEqual(['t'])
  })

  it('last([1,2,3,4,5] => [5]', ()=>{
    expect(last([1,2,3,4,5])).toStrictEqual([5])
  })

  it('last("testArray" => ["y"]', ()=>{
    expect(last('testArray')).toStrictEqual(['y'])
  })

})
