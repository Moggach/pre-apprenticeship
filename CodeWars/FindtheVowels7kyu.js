function vowelIndices(word){
let result =[]
  let array =word.split('');
  for (let i=0; i<word.length; i++){
  if (/[aeuoiy]/gi.test(array[i])) {result.push(i+1)}
  }
  return result
}
