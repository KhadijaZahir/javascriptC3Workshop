// workshop 5
// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Completer la fonction suivante
function updateRecords(id, prop, value) {

    if(prop !== "tracks" && value !== " "){
        // value = "hate";
        // console.log(collection);
    }
    else if (prop == "tracks" && id !== "tracks"){
        let tab= [];
        let add = tab.push("tracks");
        console.log(tab) 
    }
    else (prop == "tracks" && value !== " ")
    {    let tab= [];
        let add = tab.push(value);
    }
    return collection;
}updateRecords(2468, "tracks", "Free");
/* class collection{
    constructeur ()
}
function collection(id, prop, value){
    // album: "2548";
    // prop:"tracks";
    // valeur:"addicted to love";
if(collection.prop !== "tracks" && collection.valeur !== " "){
    collection.valeur = "hate";
    console.log("i added" );
}
else if (collection.prop == "tracks" && collection.album !== "tracks"){
    let tab= [];
    let add = tab.push("tracks");
    console.log(tab) 
}
else (collection.prop == "tracks" && collection.valeur == " ")
{    let tab= [];
    let add = tab.push(collection.valeur);
}
 return collection;
}collection(); */
  