console.log("hello");

document.addEventListener("DOMContentLoaded", function(event) {

        console.log("DOM fully loaded and parsed")
        fetch('/signup', { method: 'GET'})
        .then((response) => {
          return response.json()
        })
        .then((myUsers) => {
          console.log(myUsers)
