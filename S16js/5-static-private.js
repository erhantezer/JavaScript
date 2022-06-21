//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebiler.

class Book {
    //? Static Property
    static counter = 0;

    //! Private Property
    #id;

    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;

        //? Static degişken degeri bir arttırılıyor.
        Book.counter++;

         //! private prorety  deger atanmasi
         this.#id = '123456';
    }
    getSummary() {
        return `${this._title} was written by ${this._author} in ${this._year} so it is age ${this.#computeAge()} `;
    }
    //? Stsatic method
    static compareAge(b1, b2) {
        return `Book age diffrence: ${b1._year - b2._year}`;
    }

    //! private id'yi okumak icin getter metodu
    getId() {
        return this.#id;
    }

    //! private id'yi degisttiren setter metodu
    setId(id) {
        this.#id = id;
    }

    //! Private metot
    #computeAge() {
        return new Date().getFullYear() - this._year;
    }

}

//? instance
const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
const book3 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);

//? Static
console.log(Book.counter); //! 3
console.log(book1.counter); //! undefined 
console.log(Book.compareAge(book1, book3));

//! PRIVATE

//! private degisklenlere class disindan dogurudan erisilemez
// console.log(book1.#id);
// book1.#id = '4321';


console.log(book1.getId());
book1.setId('43210');
console.log(book1.getId());

//! Private metotlar class disraisindan cagirlamazlar.
//! Sadece class icerisindeki metotlar taradindan  cagirlabilirler
// console.log(book1.#computeAge());

console.log(book1.getSummary());