//1

let a = +prompt('Диапазон чисел от');
const b = +prompt('Диапазон чисел до');
let result =0;
let i = 0;
do{
i= a++;
 result += i;
}while(a <= b)
console.log(`Сума чисел в диапазоне= ${result}`);

//2

// // example 36 and 48=12
// const d = +prompt('enter number1');
// const c = +prompt('enter enter number2');
// let i = 1;
// for( i = d; i > 0 ; i--){
//   if( d % i == 0 && c % i == 0){
//     console.log(i);
//     break;
//   }
// }

//3

// const d = +prompt('enter number');
// let i = 1;
// while( i<= d){
//   if(!(d % i)){
//    console.log(i);
// }
//   i++;
// }

//4

// let i = 0;
// let d = prompt('enter number');
// for(i = 0; d > 1; i++){
//   d/=10;
// }
// console.log(i);

//5

// let num = 0;
// let positive=0;
// let negative=0;
// let zero=0;
// let even = 0;//четное
// let odd =0;
// for(let i=0;i<10;i++){
//  num= +prompt('enter  num'); 
// console.log(num);
// if(Math.sign(num)==1){
//   positive++;  
//   }else if(Math.sign(num)==(-1)){
//     negative++;
//   }else if(Math.sign(num)==0){
//     zero++;
//   }
//   if(num%2==0){
//     even++;
//   }else{
//     odd++;
//   }
// }
// alert(` Positive number: ${positive}\n Negative number: ${negative}\n Zero number: ${zero}\n Even number: ${even}\n Odd number: ${odd}` );

//6

// do{
// let a = +prompt('enter num1');
// let b = +prompt('enter num2');
// let sign = prompt('enter sign');
// if(sign=='+'){
// alert(a + b);
// }
//  if(sign=='-'){
//   alert(a - b);}
//   if(sign=='/'){
//     alert(a / b);
//     }
//      if(sign=='*'){
//       alert(a * b);}
// }while(confirm('Хотите посчитать еще?'))

//7

// let num1 = prompt('Введите число')
// let step = +prompt('На сколько сдвинуть')
// arr = num1.split('');
// for(let i = 0; i < step; i++) {
//   arr.push(arr.shift())
// }
// alert(arr.join(''));

//8 

// const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// let i =0 ;
// do{
//   alert(days[i]);
//   i++;
//   if(i==7){
//     i=0;
//   }
// }while (confirm(`Хотите увидеть следующий день?`)) 

//9

// let a=0;
// for (let i=2; i<10;i++){
//  for(a=1;a<=10;a++){ 
//  console.log(`${i}*${a}=${a*i}\n`);
// }
// }

//10????
