function highAndLow(numbers){
    let array = numbers.split(" ");
    let sortedArray = array.sort((a, b) => b - a); 
    let str1 = sortedArray[0] 
    let str2 = sortedArray.slice(-1)[0] 
    let result = str1 +  " " + str2
    return result;
   }