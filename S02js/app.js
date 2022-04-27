// const n1 = promp5t("enter a number: ");
// if (n1 >0) {
//     console.log(`${n1} is positive`);
// }
// else {
// console.log(`the number is either 0 or negative`);
// }




//        İF ELSE İF ELSE

// const chest = prompt("beden giriniz: ");
// if(chest>=32 && chest<=34){
//    console.log(`bedeniniz XS dir` );
// }
// else if(chest>=35 && chest<=37){
//     console.log(`bedeniniz S dir` );
// }
// else if(chest>=38 && chest<=40){
//     console.log(`bedeniniz M dir` );
// }
// else if(chest>=42 && chest<=43){
//     console.log(`bedeniniz L dir` );
// }
// else if(chest>=44 && chest<=46){
//     console.log(`bedeniniz XL dir` );
// }
// else if(chest>=47 && chest<=49){
//     console.log(`bedeniniz XLL dir` );
// }
// else {
//     console.log("kayıt dışı beden");
// }


//  TENARY İF OPERATOR

// let grade =prompt("Enter your score : ");
// let result = grade >= 50 
// ? 'pass'
// : 'fail';
// console.log(`You ${result} the exam.`);



//    ÖRNEK PROGRAM 
// let day = prompt("enter a day").toLowerCase;
// let program;
// switch (day) {
//   case "monday":
//     program = 'Monday inclass';
//     break;
//   case "tuesday":
//     program = 'Tuesday inclass';
//     break;
//   case "wednesday":
//     program = 'Wednesday inclass';
//     break;
//   case "thursday":
//     program = 'Thursday inclass';
//     break;
//   case "friday":
//     program = 'Friday team work';
//     break;
//   case "saturday":
//     program = 'Saturday inclass + workshop';
//     break;
//   case "sunday":
//       program = "sunday free day";
//       break;
//   default:
//     program = 'Invalid day';
// }
// console.log(program);



const year = 2152;
const month = 0;
let dayCount;
 switch()


console.log(dayCount);





//    BAŞKA ÖRNEK ARTIK YIL

// function dayCount(year, month){
//     let day;
//     if(month === 2){
//         if(!(year % 400)){
//             return 29
//         }
//         else if(year % 100 && !(year % 4)){
//             return 29
//         }
//         else{
//             return 28
//         }
//     }
//     else {
//         switch(month){
//             case 1 :
//             case 3 :
//             case 5 :
//             case 7 :
//             case 8 :
//             case 10 :
//             case 12 :
//                 day = 31
//                 break
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 day = 30
//                 break
//             default:
//                 day = 'invalid input'
//         }
//     }
//     return day
// }