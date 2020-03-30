//Workshop 1
function addFavoriteBook(bookName){
    var favoriteBooks = ["c", "a", "k", "Great"];
    var bookName = favoriteBooks.includes("Great");
    if(bookName != true){
        favoriteBooks.push("Great");
    }
    console.log(favoriteBooks);

    // } else{
    //     console.log("there's the word Great")
    
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










    