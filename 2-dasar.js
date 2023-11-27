//keyword untuk mendeklarasikan variabel
var a = "a"; //var (dapat diperbarui dan dideklarasikan ulang)
let b = "b"; //let (dapat diperbarui tetapi tidak dapat dideklarasikan ulang)
const c = "c"; //const (tidak dapat diperbarui dan tidak dapat dideklarasikan ulang)

let nama = "saty"; //string
let umur = 20; //number
let apakahBenar = true; //boolean
let uang = 3000.2; //number decimal

//operator aritmatika (+ - / * %)
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2); //hasilnya 30
console.log(angka1 - angka2); //hasilnya -10
console.log(angka1 / angka2); //hasilnya 0.5
console.log(angka1 * angka2); //hasilnya 200
console.log(angka1 % angka2); //hasilnya 10

let hasilAritmatika = angka1 + angka2;
console.log(hasilAritmatika, "pertambahan"); //hasilnya 30

hasilAritmatika = angka1 - angka2;
console.log(hasilAritmatika, "pengurangan"); //hasilnya -10

hasilAritmatika = angka1 / angka2;
console.log(hasilAritmatika, "pembagian"); //hasilnya 0.5

hasilAritmatika = angka1 * angka2;
console.log(hasilAritmatika, "perkalian"); //hasilnya 200

hasilAritmatika = angka1 % angka2;
console.log(hasilAritmatika, "hasil bagi"); //hasilnya 10

//contoh string
let firstname = "Jon";
let lastname = "Don";
let fullname = firstname + lastname;
console.log(fullname); //hasilnya JonDon
console.log(firstname + " " + lastname); //hasilnya Jon Don

//contoh number
let number = 20;
console.log(number + 10); //hasilnya 30
number = 10; //nilainya diperbarui
console.log(number + 10); //hasilnya 20
number = false; //nilainya diperbarui. (False bernilai 0 dan True bernilai 1)
console.log(number + 10); //hasilnya 0 + 10 = 10
