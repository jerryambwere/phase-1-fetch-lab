function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';
  
  // Using fetch to make the API call
  return fetch(url)
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.log('Error fetching books:', error));
}
