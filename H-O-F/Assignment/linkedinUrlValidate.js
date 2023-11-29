/*6 As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.

The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs that do not follow this format or contain invalid characters. The program should provide clear output messages indicating whether each input is a valid LinkedIn profile URL or not.*/

// Function to check if a string is a valid LinkedIn profile URL
function isValidLinkedInURL(url) {
  // Define the regular expression pattern
  const linkedInPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-Z0-9]$/;

  // Test the URL against the pattern
  return linkedInPattern.test(url);
}

// Function to display clear output messages
function displayValidationResult(url) {
  if (isValidLinkedInURL(url)) {
    console.log(`"${url}" is a valid LinkedIn profile URL.`);
  } else {
    console.log(`"${url}" is NOT a valid LinkedIn profile URL.`);
  }
}

// Test cases
let url1 = "https://www.linkedin.com/in/johndoe123";
let url2 = "https://www.linkedin.com/in/jane-smith_567";
let url3 = "https://www.linkedin.com/in/developer!"; // Invalid character
let url4 = "http://www.linkedin.com/in/invalid-url"; // Wrong format
let url5 = "https://www.linkedin.com/in/username_that_is_too_long_for_validation"; // Too long

// Display validation results
displayValidationResult(url1);
displayValidationResult(url2);
displayValidationResult(url3);
displayValidationResult(url4);
displayValidationResult(url5);

