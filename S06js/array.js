console.log("***********   ARRAY   **********");



const isim = ["ali", "veli", "deli", "teli"];
console.log(isim);
console.log(isim.length);

const diller = new Array("java", "python", "c++", "js", "go");
console.log(diller);

const arr = new Array(10);
console.log(arr);

console.log(diller[1]);

diller[2] = "c#";
console.log(diller);

const yaslar = [22,23,34];
const kisiler = ["Ahmet", "Yilmaz", 2022, 2022-1992,true,5.6, yaslar];
console.log(kisiler);
console.log(kisiler[6][1]);

kisiler[6][1]++;
console.log(kisiler);
console.log(yaslar);


const cars = ["BMW", "fiat","mercedes", "prosche"];
const deleted = cars.pop();
console.log(deleted);
console.log(cars.push("volvo"));
console.log(cars);

console.log(cars.unshift("renault"),cars);
console.log(cars.shift("renault"),cars);

console.log(cars.reverse());
console.log(cars);

console.log(cars.sort());


const rakam = [3, 5, 1, 10, 55];
console.log(rakam.sort());

rakam.sort((a,b) => a-b);
console.log(rakam);

cars.splice(1, 0, "vosvos");
console.log(cars);

cars.splice(2, 1, "anadol");
console.log(cars);