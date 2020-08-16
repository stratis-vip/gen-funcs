import {random} from '.'
test('random 0 = 0', ()=>{
    expect(random(0)).toBe(0)
})

test("random 10 < 10 (500times)", () => {
  let a =0
  do{
    expect(random(10)).toBeLessThanOrEqual(10)
    expect(random(10)).toBeGreaterThanOrEqual(0)
    a ++
  } while (a<500)
})

