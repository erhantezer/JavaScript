//!Değişken Tanımlama
// let $sayı = 4;
// console.log($sayı)


// var sayaç = 1;
// let yaş = 33;
// const pi = 3.14;

// let dil = "Javascript";
// dil = "java";
// console.log(dil);
// console.log(typeof dil);
// dil = 1;
// console.log(dil);
// dil = null;
// console.log(dil);


// var fiyat;
// fiyat = 23;
// console.log(fiyat);
// fiyat = 19;
// console.log(fiyat);
// var fiyat = "ücretsiz";
// console.log("FİYAT: " + fiyat);

// const yıl = 2022;
// const dtar = 1992;
// const yaş = yıl - dtar;
// console.log(`yaş: ${yıl - dtar}`);


//? çevre ve alan hesaplama
// const pi = 3.14;
// const r = 4;
// console.log(`çevre: ${2*pi*r}`);
// console.log(`alan: ${pi*r**2}`);


// let a = 3;
// let b = ++a;
// let c = ++b;
// console.log(`a= ${a} b= ${b} c= ${c}`)

// let a = 3;
// let b = a++;
// let c = b++;
// console.log(`a= ${a} b= ${b} c= ${c}`)


// s2 = "kuş";
// s3 = "kedi";
// console.log(s2 || s3); // kuş
// console.log(s2 && s3); // kedi
// s2 = true;
// s3 = false;
// console.log(!s2); // false
// console.log(!s3); // true
// s3 = null;
// console.log(!s3);


// let a = "";
// console.log(Boolean(a));

// !ÖDEVLER•
//? Soru - 1: Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız.•0 - 25 arası not karşılığı FF olmalı, 26 - 45 arası DD, 46 - 65 arası CC, 66 - 75 arası BB, 76 - 90 arası BA, 91 - 100 arası AA olarak çevrilmelidir.•100’ den büyük veya 0‘ dan küçük değerlerde hata mesajı verecektir. 
// const not = prompt(`Lütfen Notunuzu Giriniz : `);
// if (not >= 0 && not <= 100) {
//     if (not >= 0 && not <= 25) {
//         console.log(`Notunuz ${not} değeri: FF tir.`);
//     } else if (not >= 26 && not <= 45) {
//         console.log(`Notunuz ${not} değeri: DD tir.`);
//     } else if (not >= 46 && not <= 65) {
//         console.log(`Notunuz ${not} değeri: CC tir.`);
//     } else if (not >= 66 && not <= 75) {
//         console.log(`Notunuz ${not} değeri: BB tir.`);
//     } else if (not >= 76 && not <= 90) {
//         console.log(`Notunuz ${not} değeri: BA tir.`);
//     } else if (not >= 91 && not <= 100) {
//         console.log(`Notunuz ${not} değeri: AA tir.`);
//     }
// } else {
//     console.log(`Hatalı değer girdiniz:`)
// }
//? Soru - 2: Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız

// const ay = prompt("Ay giriniz:");
// switch(ay.toLowerCase()){
//     case "ocak":
//         sıra = 0;
//         break;
//     case "şubat":
//         sıra = 1;
//         break;
//     case "mart":
//         sıra = 2;
//         break;
//     case "nisan":
//         sıra = 3;
//         break;
//     case "mayıs":
//         sıra = 4;
//         break;
//     case "haziran":
//         sıra = 5;
//         break;
//     case "temmuz":
//         sıra = 6;
//         break;
//     case "ağustos":
//         sıra = 7;
//         break;
//     case "eylül":
//         sıra = 8;
//         break;
//     case "ekim":
//         sıra = 9;
//         break;
//     case "kasım":
//         sıra = 10;
//         break;
//     case "aralık":
//         sıra = 11;
//         break;
//     default:
//         alert("ocak------aralık değerleri ve arası giriniz");
//     break;
// }
// console.log(`Javascripte göre ${ay} ${sıra}. aydır`)


//? Soru - 3: Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en büyüğünü yazdıran programı yazınız.

// const sayi1 = +prompt(`Lütfen 1.sayıyı giriniz:`);
// const sayi2 = +prompt(`Lütfen 2.sayıyı giriniz:`);
// const sayi3 = +prompt(`Lütfen 3.sayıyı giriniz:`);

// console.log(`Sayıların toplamı=${sayi1+sayi2+sayi3}`);
// console.log(`Sayıların çarpımı=${sayi1*sayi2*sayi3}`);
// console.log(Math.max(sayi1,sayi2,sayi3));
// console.log(Math.min(sayi1,sayi2,sayi3));



//?Soru-4: Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternary deyimi ile yapınız).

// const sayi = +prompt(`Lütfen bir sayı giriniz : `);
// const mesaj =  sayi%2 === 0 ? "Çift" : "Tek";
// console.log(mesaj);


//?Soru-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı tasarlayınız.Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır.

// const ölcü = prompt(`fahrenaytı dereceye çevirmek için "D" ye, dereceyi fahrenayta çevirmek için "F" yazınınız`);

// if(ölcü.toUpperCase()==="D"){
// const sayı = +prompt(`Lütfen bir sayı giriniz:`);

//     console.log(`${sayı} fahrenayt ${((sayı-32)*5/9).toFixed(2)} derecedir.`);

// }
// else if(ölcü.toUpperCase()==="F"){
// const sayı = +prompt(`Lütfen bir sayı giriniz:`); 

// console.log(`${sayı} derece ${sayı*9/5+32} farenayttır.`);
// }



//! FONKSİYONLAR (FUNCTIONS)

//? 1) klasik yöntem

// ÖRNEK 1:
// function yaşYazdır(){
//     console.log(`Benim adım Erhan ve ben ${new Date().getFullYear()-1992} yaşındayım`);
// }
// yaşYazdır();
// yaşYazdır();
// yaşYazdır();
// yaşYazdır();



// ÖRNEK 2:
// function yaşYazdır(ad, tarih){
//     console.log(`Benim adım ${ad} ve ben ${new Date().getFullYear()-tarih} yaşındayım....`);
// }
// yaşYazdır('Erhan', 1992);


// ÖRNEK 3:
// function yaşYazdır(ad, tarih){
//     const yaş= 2022-tarih;
//     console.log(`Benim adım ${ad} ve ben ${yaş} yaşındayım....`);
//     return yaş;
// }
// const yaşerhan= yaşYazdır('Erhan', 1992);
// const yaşmerhan= yaşYazdır('mErhan', 1993);
// const yaşserhan= yaşYazdır('sErhan', 1995);
// console.log(`Yaşların ortolaması = ${((yaşerhan+yaşmerhan+yaşserhan)/3).toFixed(1)}`)




// * SORU
// function tekcift(sayı){
//     return sayı%2 ? "TEK" : "ÇİFT";
// }
// const number = +prompt(`Lütfen Bir sayı giriniz: `);
// console.log(`${number} Sayısı bir ${tekcift(number)} sayıdır.`);


//?  2.YÖNTEM(EXPRESSION)

// const tekcift = function (sayı){
//     return sayı % 2 ? "TEK" : "ÇİFT";
// }

// const number =Number(prompt(`Sayı Giriniz : `))
// console.log(`${number} ${tekcift(number)}`);




// const sayı = Number(prompt("Sayıyı giriniz:"));
// console.log(`${sayı} ${tekMi(sayı)}`);
// Function expression  üstte tanımlayamayız.... hata verir bu şekilde program.
// const tekMi = function (x){
// return x % 2 ? "TEK" : "ÇİFT";
// }

 

 //? 3.YÖNTEM(ARROW)
 

// const topla = (a, b) => a+b;
// console.log(topla(1,2));


//* Örnek
// const yasHesapla = (tarih)=> 2022-tarih;
// console.log(yasHesapla(1992));

//* Örnek
// let selamVer = ()=> console.log(`Merhaba Arkadaşlar`);
// selamVer();


//* Örnek
// const üsAl = (taban, üs)=> taban**üs;
// console.log(üsAl(3, 2))



//* Örnek
// const sayı = +prompt(`Bir sayı girin: `);
// const tekMi = (x)=> x%2 ? "TEK" : "ÇİFT";

// console.log(tekMi(sayı));


//?ÇOK SATIRLI ARROW
// const topla = (a, b) => {
//     const sonuç = a + b;
//     return sonuç;
//     };
//     alert(topla(3, 2) );


// const yaşYazdır = (doğumTarihi) => {
//     const yaş = new Date().getFullYear() - doğumTarihi ;
//     return `Yaşım ${yaş}`;
//     }
//     alert(yaşYazdır(2000));






// const meyveDilimle = (meyveSayısı) => meyveSayısı * 4;
// const meyveSuyuHazırla = function (portakal, elma, muz) {
// const pDilimSayısı = meyveDilimle(portakal);
// const eDilimSayısı = meyveDilimle(elma);
// const mDilimSayısı = meyveDilimle(muz);
// const meyveSuyu = `Meyve Suyu, ${pDilimSayısı} dilim portakal, 
// ${eDilimSayısı} dilim elma ve ${mDilimSayısı} dilim muz'dan oluşmaktadır`;
// return meyveSuyu;
// };
// console.log(meyveSuyuHazırla(2, 1, 3));
// console.log(meyveSuyuHazırla(4, 2, 1))














//? Function declaration
// function topla(a,b){
//     return a+b;
//     }
//     alert( topla(1, 2) ); // 3



//? Function expression
// const topla = function(a, b){
//     return a + b;
// };
//     alert( topla(1, 2) ); // 


//? Arrow fonksiyonu
// const topla = (a, b) => a + b;
// alert( topla(1, 2) ); // 3











