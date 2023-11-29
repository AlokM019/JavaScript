/*5 Write a program using a regex that matches the valid URLs. Valid URLs should start with either http:// or https://, followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more characters. Print a message indicating if the inpput matches the condition or not.*/

function urlValidate(url){
  //regex pattern
  const urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9_\-]+(\.[a-zA-Z]+)+$/;

  //testing the url
  return urlPattern.test(url);
};

//Urls for testing
let url1 = 'http://www.hellobro.com';
let url2 = 'https://www.hindustan.com';
let url3 = 'gtp://www.clearIt.com';

console.log(`Is "${url1}" a valid URL? ${urlValidate(url1) ? 'Yes' : 'No'}`);
console.log(`Is "${url2}" a valid URL? ${urlValidate(url2) ? 'Yes' : 'No'}`);
console.log(`Is "${url3}" a valid URL? ${urlValidate(url3) ? 'Yes' : 'No'}`);

