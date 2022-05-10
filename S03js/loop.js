console.log("*****Loops*****");


// for (let i = 1; i <= 10; i++) {
//     console.log("Merhaba", i);
// }
// for (let i = 1; i <= 10; i++) {
//     const rdmSayi = Math.floor(Math.random() * 100 + 1);
//     console.log(rdmSayi);
// }

//*asal sayı
// const sayi = prompt("sayı giriniz : ");
// let asal = 0;
// for (let i = 2; i < sayi;) {
//     if (sayi % i == 0) {
//         asal++;
//     }
//     i++;
// }
// if (asal == 0) {
//     console.log("asal ");
// } else {
//     console.log("asal değil");
// }
//! ÖDEV: Klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// console.log("OYUN");
// let devam;
// do {
//     let hak = 5;
//     const rastgeleSayı = Math.floor(Math.random() * 100 + 1);
//     console.log(rastgeleSayı);
//     do {
//         const tahmin = Number(prompt("Lütfen 0-100 arasıda bir sayı giriniz:"));
//         hak -= 1;
//         if (tahmin === rastgeleSayı) {
//             console.log(`Tebrikler ${5-hak},denemede bildiniz🥳`)
//             break
//         } else {
//             console.log(`Dikkat ${hak} hakkınız kaldı.`);
//             if (tahmin < rastgeleSayı) {
//                 console.log(`ARTTIR ⬆️ `)
//             } else {
//                 console.log(`AZALT ⬇️`);
//             }
//         }
//     } while (hak > 0);
//     if (hak === 0) {
//         console.log(`Üzgünüz oyunu kaybettiniz`);
//     }
//     devam = prompt(`yeniden oynamak istermisiniz e/h?`);
// } while (devam == "e" || devam == "E");
// console.log(`yine bekleriz`);console.log('****** LOOPS *******');

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// Math.floor() =>aşağıya yuvarlar
// Math.ceil() =>sürekli yukarıya yuvarlar
// Math.round() => değerine göre yuvarlar.
// Math.trunc() => kesirli sayının tam kısmı alır.

// for (let i = 1; i <= 10; i++) {
//   const randomSayi = Math.floor(Math.random() * 100 + 1);
//   console.log(randomSayi);
// }

// console.log('Program bitti');

//? Ornek: 1 den n kadar sayıları toplayan kodu yazınız.

// const n = prompt('n sayisini girinz:');
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   toplam += i;
// }

// console.log('Toplam:', toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//******************** WHILE ******************

// let i = 1;
// while (i <= 5) {
//   console.log('Merhaba-', i);
//   i++;
// }

// console.log('Bitti');

// let not = prompt('Lütfen notunuzu giriniz (0-100):');

// while (not < 0 || not > 100) {
//   alert('Girdiğiniz not 0-100 arasında olmalıdır');
//   not = prompt('Lütfen notunuzu giriniz (0-100):');
// }
// console.log('Girdiğiniz not', not);

//* Ornek

//******************** DO-WHILE ******************
// let i = 1;

// do {
//   console.log('Merhaba-', i);
//   i++;
// } while (i <= 5);




// let not;

// do {
//     not = prompt('Lütfen notunuzu giriniz (0-100):');
//     if (not < 0 || not > 100) {
//         alert('Girdiğiniz not 0-100 arasında olmalıdır');
//     }
// } while (not < 0 || not > 100);

// console.log('Girdiğiniz not', not);

//? ODEV1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.