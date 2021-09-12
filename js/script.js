let search = document.getElementById('search');
let btn = document.getElementById('btn');

let list = [
    { name: 'Вася', age: 25},
    { name: 'Коля', age: 32},
    { name: 'Дима', age: 12},
    { name: 'Слава', age: 23},
   ];


btn.addEventListener('click', function() {
    setTimeout (function () {
        if (search.value == 'google') {
            alert('Yandex круче. Но это не точно')
       }
       else {
         alert(search.value)
       }
       
   
       alert(list[0].name);
    }, 3000)
});


 

function  superSum( a, b) {
    return a + b
 };
 let result = superSum(2, 4);
 alert( result );


 let array = [10, 29, 39, 45, 21, 34];
 let min = array[0];
 let max =array[0];

 for (let i = 1; i < array.length; i++) {
     if (array[i] < min) {
         min = array[i];
     }
     if (array[i] > max) {
         max = array[i];
     }
 }

 console.log(min);
 console.log(max);


 let a = 5;
 let b = 333;
 [a, b] = [b, a];
 console.log(a);
 console.log(b);


 var numArray = [20, 48, 26, 98, 10, 27, 34]; 

 function findMax(numArray) {
    return Math.max.apply(null, numArray);
  }
  console.log(Math.max.apply(null, numArray));

