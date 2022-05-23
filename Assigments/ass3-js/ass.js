
console.log("******** ARRAYS ********");

const fiyatlar = [100, 250, 50, 89];

// ?## ÖDEV1: fiyatlar dizisinde her bir fiyata %10 zam yapalım.
// NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

//! 1. çözüm:

// const fiyat110 = fiyatlar.map((v) => v*1.1).forEach((a) => console.log(a.toFixed()));



//! 2. çözüm:

// let i = []
// const fiyat110 = fiyatlar.map((v) => v*1.1);
// i.push(fiyat110);
// console.log(i);




//?## ÖDEV2 fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.

//! 1.çözüm:

// const büyük90 = fiyatlar.filter((a) => a>90);
// console.log(büyük90);



//? ## ÖDEV3: fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.


//! 1.çözüm

// const kücük110 = fiyatlar.filter((f) => f < 110 ).map((a) => a*1.1);
// console.log(kücük110);


//! 2.çözüm
// const kücük110 = fiyatlar.filter((f) => f < 110 ).map((a) => a*1.1).forEach((w) =>console.log(w));




const maaslar = [3000, 5000, 4000, 6000, 6500];

//? ## ÖDEV4: maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

// let h = [];
// const düsük = maaslar.filter((m) => m<4000).map((z) => z*1.5);
// h.push(düsük)
// console.log(h);



//? ## ÖDEV5: Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

// const büyük = maaslar.filter((m) => m>4000).map((z) => z*1.25);
// console.log(büyük);




//? ## ÖDEV6: Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.

// let total = 0;
// maaslar.forEach((fiat) =>total +=fiat)
// console.log(`Toplam : ${total}`);