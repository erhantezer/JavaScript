
console.log("************ STRING ***********");

const str1 = 'Clarusway ';
const str2 = "Hello";
const str3 = " World";

console.log(typeof str1);
const str4 = str1 + str2;
console.log(str4);
console.log(str4.concat(str3));



//? concat()
const s1 = "hello "
const s2 = "world"
const s3 = s1.concat(s2);
console.log(s3);
console.log(s3.concat(' clarusway ', str2, " merhaba"));


//? charAt()
console.log(s3.charAt());
console.log(s3.charAt(4));
console.log(s3.charAt(s3.length-1));

//? includes()
const word = 'To be or not to be, that is the question';
console.log(word.includes('to be'));
console.log(word.includes('That'));
console.log(word.includes(''));
console.log(word.includes('to be', 14));
console.log(word.includes('to be', 13));

//? indexOf(), lastIndexOf()
console.log(word.indexOf('or'));
console.log(word.lastIndexOf('be'));
console.log(word.lastIndexOf('Be'));
console.log(word.lastIndexOf('be', 15));

//?  startWith(), endsWith()
const word2 = 'Salına salına sinsice';
console.log(word2.startsWith('sa'));
console.log(word2.startsWith('sa',7));
console.log(word2.endsWith('e'));

//? replace(searchFor, replaceWith)
const oku = "Oku baban gibi, saf olma.";
console.log(oku.replace('saf olma', 'akıllı ol'));
console.log(oku);


//? slice(), substring()
const veysel = "uzun ince bir yoldayız gidiyoruz gündüz gece.";
console.log(veysel.slice(33));
console.log(veysel);
console.log(typeof veysel);

console.log(veysel.slice(17, 30));
console.log(veysel.slice(-10));
console.log(veysel.substring(17, 30));// negatif index almaz

//? split()
const tarkan = 'gel gündüz ile gece olalım';
console.log(tarkan.split(" "));

//* ÖDEV
//* ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE


//? trim()
const ramazan = '      Hoş geldin ya şehri ramazan      ';
console.log(ramazan.trim());
console.log(ramazan.length);
console.log(ramazan.trim().length);