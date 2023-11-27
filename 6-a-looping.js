/* Contoh Looping While

let a = 1;
while (a < 5) {
    console.log(a);
    a++;
}

let b = 5;
while (b > 1) {
    console.log(b);
    b--;
}
*/

/* Contoh Looping For

for (let a = 1; a < 5; a++) {
    console.log(a);
}

for (let b = 5; b > 0; b--) {
    console.log(b);
}
*/

/* Contoh method length untuk tipe data string dan array
method mengembalikan nilai angka, total huruf yang ada di string, total elemen yang ada di array

let nama = "SATY";
for (let i = 0; i < nama.length; i++) {
    console.log(nama[i])
}
*/

/* Contoh jika ingin menyentuh index paling kanan gunakan length - 1

let nama = "DONI";
let result = "";

for (let x = nama.length - 1; x >= 0; x--) {
    result += nama[x];
}
console.log(result); // hasilnya INOD
*/

//Contoh Nested Loop
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        console.log(j); //hasilnya 0123 sebanyak empat kali
    }
    console.log(""); //untuk spasi
}
console.log('selesai');

//Kesimpulannya Looping sering bertemu dengan method length
//Dalam Looping ada namanya arah kiri atau kanan, kiri itu pengurangan, kanan itu penjumlahan
//Looping bertujuan membuat proses jadi dinamis