//card counting function
var count =0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "K":
        case "Q":
        case "A":
        case "J":
            count--;
            break;
    }
     
    var holdbet='Hold';
    if (count > 0){
        holdbet='Bet';
    }

    return count + " " + holdbet;
}
cc(4);cc(1);cc("A")
console.log(cc(4));