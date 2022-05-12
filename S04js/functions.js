
// function yazdır(){
//     console.log("merhaba");
// }
// yazdır();
// console.log(typeof yazdır);



// function selamla(name, lastname=''){
//     console.log(`Merhaba ${name} ${lastname}`);
// }
// selamla('Erhan', 'TEZER');
// selamla('Erol');
// selamla('Jason');


// function yasHesapla(year, name){
//     const mesaj=`${name}'in yaşı ${new Date().getFullYear()-year} dir` ;
//     return mesaj
// }
//  const mesaj1 = yasHesapla(2001, "Elif");
//  console.log(mesaj1);


// function tekCift(number){
//    return number % 2 === 0 ? "çift" : "tek"
// }
// console.log(tekCift(5));





//  const tekCift=function (number){
//    return number % 2 === 0 ? "çift" : "tek"
// }
// console.log(tekCift(5));


// const bul = function (x, y, z){
//     let enbüyük;
//     if(x>=y && x>=z){
//         enbüyük= x;
//     }
//     else if(y>=x && y>=z){
//         enbüyük= y;
//     }
//     else if(z>=y && z>=x){
//         enbüyük= z;
//     }else{
//         enbüyük= x;
//     }
// return enbüyük;
// }
// console.log('En büyük sayı:', bul(1,3,2));




const topla = (x, y) => x + y;
console.log(topla(3, 4))