console.log("*******  OBJECTS  *******");



const arac = new Object();

arac.marka="bmw";
arac.motor = 1.3;
arac.model = 2022;
arac["jant"] = 22

console.log(arac);
console.log(arac.motor);
console.log(arac["model"]);


//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//* Object constructor

function Personel(id, ad, maas) {
this.perId = id;
this.perAdi = ad;
this.perMaas = maas;
console.log(this); //! Personel objesine bağlanmıştır (binded)
}

const ahmet = new Personel(101, "Ahmet", 75000);
const canan = new Personel(102, "Canan", 85000);
const erhan = new Personel(103, "Erhan", 150000);
console.log(ahmet, canan);
console.log(canan.perMaas);
console.log(ahmet.perAdi);
console.log(this); //! window objesine bağlanmıştır


//* 3- object literal

const calısan ={
    ad:"Ahmet",
    soyad:"yılmaz",
    yas:30,
    is:"developer",
    diller: ["c", "c++", "python", "js"],
    maas:120000
};
console.log(calısan);
console.log(calısan.yas);
console.log(calısan.diller[3]);

calısan.konum ="Turkey";
calısan["dogum"] = 1992;
console.log(calısan);

const isci = calısan;
isci.maas =50000;
console.log(isci,calısan);





//*              Object Metotları
//* ======================================================

const kisi = {
  ad: 'Can',
  soyad: 'Canan',
  dogum: 1990,
  meslek: 'developer',
  ehliyet: true,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogum;
  },
  ozet: function () {
    return `${this.ad}, ${this.yasHesapla()} yasindadir`;
  },
//   ozet: () => {
//     return `${this.ad}, ${this.yasHesapla()} yasindadir`;
//   },
};
console.log(this);

console.log('YAS:', kisi.yasHesapla());
console.log('BILGI:', kisi.ozet());

// console.log('BILGI:', this.ozet());

//! NOT: arrow fonksiyonları farklı amaç için geliştirilmiş fonksiyonlarıdır
//! ve lexical context'e sahiptirler. Dolayısıyla, bir arrow fonk. içerisinde
//! this kelimesi kullanılrsak beklenmeyen sonuclar alabiliriz.
//! Çünkü, arrow içerisindeki this kelimesi global scope'u gösterir. (window nesnesini) gösterir.
//! Bunu engellemek için object fonskyionlarını tanımlamak için normal fonksiyon  yöntemlerini kullanmak gerekir.

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

//? Nested objects
const kisilerObject = {
    ahmet: {
      ad: 'Ahmet',
      soyad: 'Yilmaz',
      yas: 30,
      is: 'developer',
      diller: ['C', 'C++', 'Pyhton', 'JS'],
      maas: 120000,
    },
    mehmet: {
      ad: 'Mehmet',
      soyad: 'Yilmaz',
      yas: 24,
      is: 'developer',
      diller: ['C', 'C++', 'Pyhton', 'JS'],
      maas: 200000,
    },
  };
  
  console.log(kisilerObject);
  console.log(kisilerObject.ahmet.is);
  
  const kisiler = [
    {
      name: 'Ahmet',
      surname: 'Can',
      job: 'developer',
      age: 30,
    },
    {
      name: 'Mehmet',
      surname: 'Baki',
      job: 'tester',
      age: 35,
    },
    {
      name: 'Nur',
      surname: 'Ersan',
      job: 'team lead',
      age: 40,
    },
    {
      name: 'Merve',
      surname: 'Veli',
      job: 'developer',
      age: 26,
    },
  
    {
      name: 'Ruzgar',
      surname: 'Kuzey',
      job: 'tester',
      age: 24,
    },
  ];
  console.log(kisiler);
  console.log(kisiler[4]);

//* Ornek1: kisiler dizisindeki job'lari tek tek yazdiriniz.
  kisiler.forEach((v)=> console.log(v.job));

  //* Ornek2: yaslari bir artirarak yeni bir diziye saklayiniz.
  const yas =kisiler.map((k)=> k.age+1);
  console.log(yas);

 //* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu name key'i olarak saklayan, aynı zamanda age degerlerini 5
//* arttırarak age key'ine saklayan ve oluşan diziyi döndüren kodu yazınız.



const fulisim = kisiler.map((kisi)=> ( {
    fullname:kisi.name.toUpperCase() + " " + kisi.surname.toUpperCase(), 
    age:kisi.age +5
}));
console.log(fulisim);


//* Ornek4: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.
const yas33 = kisiler.filter((yas)=>yas.age<33).map((ısım)=> ısım.name);
console.log(yas33);

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.
const ısımler = kisiler.filter((yas)=>yas.age<33).map((kisi)=>({
  names:kisi.name
}));
console.log(ısımler);


//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye saklayiniz.


//* Ornek7: kisilerin ortalama yasini hesaplayiniz.

const ort =kisiler.reduce((t,kisi)=> t+kisi.age,0)/kisiler.length
console.log(ort);