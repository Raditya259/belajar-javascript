// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("Soal Nomor 1. Melakukan Looping Menggunakan While");
console.log("Looping Pertama atau Maju");
let a = 1

while (a <= 5) {
    console.log(a);
    a++;
}

console.log("Looping Kedua atau Mundur");
let b = 5

while (b >= 1) {
    console.log(b);
    b--;
}
console.log();

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("Soal Nomor 2. Melakukan Looping Menggunakan For");
console.log("Looping Pertama atau Maju");
for (c = 1; c <= 5; c++) {
    console.log(c);
}

console.log("Looping Kedua atau Mundur");
for (d = 5; d >= 1; d--) {
    console.log(d);
}
console.log();

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log("Soal Nomor 3. Angka Ganjil dan Genap");
for (e = 1; e <= 100; e++) {
    if (e % 2 == 0) {
        console.log(e + " adalah bilangan genap");
    }
    else {
        console.log(e + " adalah bilangan ganjil");
    }
}
console.log();

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("Soal Nomor 4. counter kelipatan");
for (f = 1; f <= 100; f++) {
    if (f % 2 == 0) {
        console.log(f + " adalah kelipatan 2");
    }
    else if (f % 5 == 0) {
        console.log(f + " adalah kelipatan 5");
    }
    else if (f % 9 == 0) {
        console.log(f + " adalah kelipatan 9");
    }
    else {
        continue;
    }
}
console.log();

//5. Bintang asteriks
//Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****

console.log("Soal Nomor 5. Bintang asteriks");
let result = "";
for (x = 1; x <= 5; x++) {
    for (y = 1; y <= x; y++) {
        result += "*"
    }
    result += '\n';
}
console.log(result);

