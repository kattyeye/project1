// console.log("HELLO THERE");
// var magicnumber= 1;
// var sum = magicnumber + magicnumber
// console.log("sum", sum);
//
// // person object
// var person = {
//   name: "Jenny", // name is a property
//   age: 45,
//   favoriteColor: "blue"
// }
// console.log(person.favoriteColor);
//
// console.log ([99,100,101]
//
//    .length);
//
//    var students = ["Alejandra", "Jesse", "Jessica", "Tamar"];
//    console.log(students[3]);
//    console.log(students[2]);
//    console.log(students[0]);
//
//    var a = 8 * 2
//
//    function sentence () {
//      var speech = sentence ("Howdy ", "folks!");
//      speech = ("Howdy " + "folks!")
//    }
//
var buyBtn = document.getElementById('buyBtn')
 var number = 0
console.log(buyBtn);
  buyBtn.onclick= function (){
  buyBtn.style.backgroundColor = "rgba(255, 255, 255, 0)";
  buyBtn.style.color = 	"rgb(255, 255, 255)";
  buyBtn.style. border = "2px white solid";
  buyBtn.innerHTML = "Added to Cart";
  number = number +1;
  document.getElementById('cart').innerHTML = number

    setTimeout (function () {
      buyBtn.innerHTML = "Buy Now!";
      buyBtn.style.backgroundColor = "rgb(255, 255, 255)";
      buyBtn.style.color = "rgba(255, 255, 255, 0)";
      buyBtn.style. border = "2px white solid";
      buyBtn.style.fontColor = "rgba(255, 255, 255, 0)"})
  3000
}
var details = document.getElementById('details')
console.log(details);
details.onclick = function () {
  details.innerHTML = " Found your perfect shoe yet?"
}

// var jukeJam = console.log(document.getElementById('shoeimg')
// console.log(document.getElementById('shoeimg'));
