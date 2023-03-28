function countDanishLetters(str) {
    const danishLetters = {æ: 0, ø: 0, å: 0};
    let totalDanishLetters = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i).toLowerCase();
      if (char in danishLetters) {
        danishLetters[char]++;
        totalDanishLetters++;
      }
    }
    danishLetters.total = totalDanishLetters;
    return danishLetters;
  }
  
  const danishString = "Jeg har en blå bil";
  console.log(countDanishLetters(danishString)); // {total: 1, å: 1}
  
  const danishString2 = "Blå grød med røde bær";
  console.log(countDanishLetters(danishString2)); // {total: 4, æ: 1, ø: 2, å: 1}
  