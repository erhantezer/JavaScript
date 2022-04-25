// console.log("hello erhan");

//  let ad = prompt("adınızı girin");
// console.log(ad);
// console.log("adım:", ad)
// console.log("adım = " + ad) */
// let sonuc = confirm("eminmisiniz");
// console.log(sonuc);
// document.write("erhan bugün bize geldi");
// console.log(`adınız:${ad} dır.`)

// DERS_02 DATA TYPES

// 1) Undefined
// let a ;
// console.log(a);

// console.log(a);
// var b = 5;


// console.log(c);
// let c = 7;          //let ile yapılamaz hata verir


// 2) Number
// let myNumber = 10;
// console.log(myNumber);
// console.log(typeof myNumber);

// let e = +prompt("bir sayı giriniz:")
// console.log(e);
// let pi = 3.14;
// let h = 1_000_000; // (okunabilirlik)
// console.log(pi);
// console.log(h);
// console.log(typeof pi);
// console.log(typeof h);

// let i = 1e3;
// console.log(i)




// 3) String
// let firstName = "Erhan";
// console.log(firstName);
// console.log(typeof firstName);

// let m = `Clarusway`;
// console.log(m);
// console.log(typeof m);

// let p = `Hello ${1+2} ${m}`
// console.log(p)









// 4) Boolean
// true
// false
// truty
// falsy
// let x = 5;
// let y = 10;
// val = x>y;
// console.log(val);




// 5) null
// let f = null;
// console.log(typeof f);
// console.log(Boolean(null))

// 6) Symbol



  
//   define=declare===>>let a;
//   assign===> a=5;


// let k = Number("a");
// console.log(typeof k, k);

// console.log(isNaN(k));   // NuN kontrolü yapar nun mı değil mi?

// console.log(015+025); // oktal sistem
// console.log(0.1 + 0.2); // 0.3000000000000004

// let l = 0.1 + 0.2 ;
// console.log(+l.toFixed(2)) // + koymazsak toFixed string döner




// OBJECT
// const car ={
//     make: "Ford",
//     model: "Mustang",
//     year: 1965,
//     color: "Black"
// };
// car.make = "Toyota"
// console.log(car)

// console.log(car.color[0])

// car.sanroof = true;
// console.log(car);

// car.age = function(current) {
//     console.log(current - this.year)
//   }
  
//   console.log(car);
//   car.age(2022);
// delete car.sanroof;
// console.log(car);



// ASSİGNMENT OPERATORS
// let m =5; // m'e 5 atamak atama sağdan sola gider



// ARITMATIC OPERATORS
// let x = "Hello ";
// let y = "World";
// console.log(x+y);

// z=3;
// console.log(x+z);

// postfix a++
 
// prefix ++a


// Postfix Increment
// let a = 10;
// let b = a++; // a=11 b= 10
// console.log(a);
// console.log(b);

//Postfix Decrement
// let k = 10;
// let m = k--; //k=9 m=10
// console.log(k)
// console.log(m)

// PrefixIncrement
// let t = 10;
// let g = ++t; // t=11 g= 11
// console.log(t)
// console.log(g)

//Prefix Decrement
// let n = 10;
// let v = --n; //n=9 v=9
// console.log(n)
// console.log(v)




// COMPARİSON OPERATORS(KARŞILAŞTIRMA OPERATÖRÜ)
// let x=5, y="5";
// console.log(x==y);
// console.log(x===y);
// console.log(x!=y);
// console.log(x!==y);
// console.log(!false);


// LOGICAL OPERATORS

// && (AND)
// || (OR)
// ! (NOT)
// && ⇒ and operatoru. Hepsi true ise son true. false var ise ilk false döner
// || ⇒ or operatoru  Hepsi false ise son false, ya da ilk true döner

// console.log(null == false);
// console.log(null == true);
// console.log(null == null);
// console.log(NaN == NaN);



// NULLISH COALESCING OPERATORS
// let d;
// let e= "hello world"
// console.log(d ?? e);
// console.log(e ?? d);   // 1. değer null ve undefined se 2. değer çıkar
// 2. değer null ve undefined ise 2. değer çıkar
// geri kalan herşeyde 1. değer çıkar