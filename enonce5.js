// workshop 5
class collection{
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
}collection();
