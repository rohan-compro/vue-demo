const isSumEven = (a,b)=>{
  return (a+b)%2;
}

test('Check is sum is even', ()=>{
  expect(
    isSumEven(2,8)
  ).toBe(0);
})

test('Check if sum is odd', ()=>{
  expect(
    isSumEven(2,7)
  ).toBe(1);
})