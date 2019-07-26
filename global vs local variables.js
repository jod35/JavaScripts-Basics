//possible to have both local and global variables with the same name

var fav_drink=' mountain dew';

function FavouriteDrink(){
    return fav_drink;

}

console.log(FavouriteDrink())   

function FavouriteFood(){
    var fav_drink='coffee';
    return fav_drink;
}
console.log(FavouriteFood());

// the variable considered will always be the one wthin the function scope. The global var will be left.

