import { addArrays } from "."

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

})
