//Workshop 1
function addFavoriteBook(bookName){
    var favoriteBooks = ["c", "a", "k", "Great"];
    var bookName = favoriteBooks.includes("Great");
    if(bookName == false){
        favoriteBooks.push("Great");
    } else{
        console.log("there's the word Great")
    }
    console.log(favoriteBooks)
    function printFavoriteBooks(){
        // var favoriteBooks = ["c", "a", "k"];
        var N = favoriteBooks.length;
        console.log("Livres" + " " + "favoris" + " " + N)
    
         for(let favoriteBook of favoriteBooks) {
            console.log(favoriteBook);
        }
    }
    
    printFavoriteBooks();
}
addFavoriteBook();










    