//Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

let books = [
  {title: "Nirmala",                author: ' Munshi Prem Chand',     year: 1927 },
  {title: "The Girl In The House",  author: 'Harshvardhan Rao',       year: 2023 },
  {title: "Wish I Could Tell You",  author: 'Durjoy Dutta',           year: 2019 },
  {title: "Madhushala",             author: 'Harivansh Rai Bachchan', year: 1935 },
  {title: "Life's Amazing Secrets", author: 'Gaur Gopal Das',         year: 2018 },
];

function filterAndCapitalize(books){
  //filtering the books that published on or before 2010
  let filteredBooks = books.filter(book => book.year <=2010)
  
  //taking the filtered books and capitalizing it's authors name
  let capitalize = filteredBooks.map(book => ({
    title: book.title,
    author: book.author.toUpperCase(),
    year: book.year
  }));
  return capitalize;
}

//calling the desired result
let booksToShow = filterAndCapitalize(books);

console.log("Original Books: ", books);
console.log("Filtered And Capitalized Books: ", booksToShow);