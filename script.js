/* READ ME

  everything follows from the submit button 

  this is the order 
    - Capture search Value 
    - Search BTN Click Handler ()
    - Filter Books 
    - flattenArray from helper.js
    - Prepare for HtmlStructure
    - structureBooks as HTML from helper.js
    - Finishes off at Search BTN Click Handler 

    **** Didn't use Render Books To Dom Created My Own Function ****
    - Map InnerHTML

*/

// ******* DISPLAY BOOKS METHOD ********* // 

// Click handler for search button
const captureSearchValue = () => {
  const input = document.getElementById('search-bar').value;
  return input;
};

// Filter books based on search input - return list of books
const filterBooks = (input) => {

  const flatArray = flattenObjectValuesIntoArray(books)
  const searchResults = []
  
  // search the flattened array for arrays that include input
  for (let i = 0; i < flatArray.length; i++) {
    if (flatArray[i].includes(input)) {
    searchResults.push(books[i])
    }
  }

  //enter results into HTML generator function
  const html = prepareForHtmlStructure(searchResults)
  return html


};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const prepareForHtmlStructure = (filteredBooks) => {
  let i = 0;
  const booksAsHtml = []
  while(i < filteredBooks.length) {
    // careful here this function comes from helper.js and converts to html
    booksAsHtml.push(structureBookAsHtml(filteredBooks[i]))
    i = i + 1;
    
  }

  console.log("books as HTML " + booksAsHtml)

  return booksAsHtml;

};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {
  const input = captureSearchValue()
  // filterbooks goes here
  const html = filterBooks(input)

  // map the innerhtml into a concatanated string
  function mapInnerHtml(preppedHtml) {
    let string = ""
    for(let i = 0; i < preppedHtml.length; i++) {
      string = string + preppedHtml[i].innerHTML
    }
    return string
  }
  document.getElementById("bookList").innerHTML = mapInnerHtml(html)
}

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn")

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });

// ******* DISPLAY TAGS METHOD ********* // 

// search the the tag objects of each instance of the book array 
// check if value is already in the array
// add to array 

// FUNCTIONALITY NOT YET COMPLETED



const tagBtnClickHandler = () => {
  console.log("button press")
  const tagArray = collectArrayOfTags(books)

  let string = ""
  for (let i = 0; i < tagArray.length; i++) {
    string = string + `${tagArray[i]} /  `
  }

  const finalString = `<p>${string}</p>`

  document.getElementById("tagList").innerHTML = finalString 
}

// CONCEPT IDEATED BUT NOT COMPLETED 

const collectArrayOfTags = () => {
  const tagArray = []
  for (let i = 0; i < books.length; i++) {
    let j = 0;
    console.log("length: " + books[i].tags.length)
    while(j < books[i].tags.length) {
      tagArray.push(books[i].tags[j])
       j = j+ 1
    }
    i = i + 1
  }
  const uniqueArray = [...new Set(tagArray)]
  return uniqueArray
}

const tagBtn = document.getElementById("tag-btn")

tagBtn.addEventListener("click", () => {tagBtnClickHandler()} )














