//Vowel Count
function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i=0; i< str.length; i++) {
      if(vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }

//Digit*Digit
function squareDigits(num){
    const digits = num.toString().split('');
    const squaredDigits = digits.map(digit => digit ** 2);
    return Number(squaredDigits.join(''));
  }

 //Highest and Lowest
 function highAndLow(numbers){
    const numArr = numbers.split(' ').map(Number);
    const max = Math.max(...numArr);
    const min = Math.min(...numArr);
    return `${max} ${min}`; 
  }
 
