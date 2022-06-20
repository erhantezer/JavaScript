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
    stPrice(price) {
        const taxRate = 1.1;
        this._price = (price * taxRate).toFixed(2);
    }
}

//? instance
const book1 = new Book("Gün olur asra bedel", "Cengiz Aytmatov", 1969);
const book2 = new Book("Sinekli Bakkal", "Halide Edip Adıvar", 1910);
console.log(book1);
console.log(book1.getSummary());

// console.log(book2);
// console.log(book2.getSummary());


//? Sub-Class tanımlaması (inheritance ("kalıtım"))

class Magazine extends Book {
    constructor(title, author, year, month){
        //! Book'un constructoru çağrıldı
        super(title,author,year);  //* Book'un Prototype ı kopyalanmış oldu.
        this._month = month;
    }

    //! Overrided Metot (Parent class daki bir metodun farkli
    //! fonksiyonellikle fakat aynı isimle tanımlanmasi)
    getSummary() {
        return `${this._title} was written by ${this._author} in ${this._year} in ${this._month}`
    }

     //! Overloaded Metot (Ayni metodun farkli parametreler ile kullanilmasi)
    setPrice(price, taxRate) {
        this._price = (price * taxRate).toFixed(2);
    }
    //! Override edilmiş bir parent fonksiyonunu kullanmak icin 
    setPriceParent(price) {
        super.setPrice(price)
    }
}


const mag1 = new Magazine('Kasagi', 'Omer Seyfettin', 1940, 'Nov');
console.log(mag1);
console.log(mag1.getSummary());
mag1.setPrice(100,1.2);
console.log(mag1._price);