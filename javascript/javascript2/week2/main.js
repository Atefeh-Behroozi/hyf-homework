import { movies } from"movies.js";
//1
const shortMovies = movies.filter(movie => movie.title.length <= 5);
console.log(shortMovies); 

//2
const longMovieTitles = movies.filter(movie => movie.title.length >= 40)
console.log(longMovieTitles);

//3
const movies1980s = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
console.log(movies1980s.length); 

//4
const taggedMovies = movies.map(movie => {
    let tag = '';
    if (movie.rating >= 7) {
      tag = 'Good';
    } else if (movie.rating >= 4 && movie.rating < 7) {
      tag = 'Average';
    } else {
      tag = 'Bad';
    }
    return {...movie, tag};
  });
  console.log(taggedMovies); 

//5
const highRatedMovies = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
console.log(highRatedMovies); 

//6
const keywords = ["surfer", "alien", "benjamin"];

const moviesWithKeywords = movies.filter(movie => {
  const title = movie.title.toLowerCase();
  return keywords.some(keyword => title.includes(keyword));
});

const totalMoviesWithKeywords = moviesWithKeywords.length;

console.log(totalMoviesWithKeywords);

//7
const moviesWithDuplicateWords = movies.filter(movie => {
    const words = movie.title.toLowerCase().split(" ");
    const uniqueWords = new Set(words);
    return words.length !== uniqueWords.size;
  });
  
  console.log(moviesWithDuplicateWords);

  //8
  const totalRating = movies.reduce((acc, movie) => {
    return acc + movie.rating;
  }, 0);
  
  const averageRating = totalRating / movies.length;
  
  console.log(averageRating); 
  
  


  


