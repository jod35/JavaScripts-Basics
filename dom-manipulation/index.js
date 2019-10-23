// const li =document.getElementsByTagName('li');
// for (let index = 0; index < li.length; index++) {
//     alert(typeof li[index]);
// }
// alert (document.getElementsByTagName("*").length);

var stuff =document.getElementById('stuff');

var items=stuff.getElementsByTagName("*");

alert(items.length); //returns 4 items in the list