//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

class Book {
    constructor(title, author, year){
        this._title = title;
        this._author = author;
        this._year = year;
    }
    getSummary(){
        return `${this._title} was written by ${this._author} in ${this._year}.`
    }
}

//? instance
const book1 = new Book("Gün olur asra bedel", "Cengiz Aytmatov", 1969);
const book2 = new Book("Sinekli Bakkal", "Halide Edip Adıvar", 1910);
console.log(book1);
console.log(book1.getSummary());

console.log(book2);
console.log(book2.getSummary());