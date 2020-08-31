/*Buatlah sebuah program registrasi berisi username dan password
Lakukan validasi berikut
Username minimal 6 karakter
Password minimal 8 karakter
Saat user melakukan registrasi simpan data didalam Array
Tampilkan data setiap user melakukan registrasi
Saat password ditampilkan, ganti dengan string yang berbeda. Gunakan replace method.*/

let username = prompt("Username (min. 6 karakter)");
let password = prompt("Password (min. 8 karakter)");

let userArray = [];
let strPass = "1diH4l4y";
let changePass = strPass.replace("1diH4l4y", password)

userArray.unshift(username);
console.log(userArray);
console.log(changePass);