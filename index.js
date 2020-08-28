/*Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer). 
Tampilkan panjang data Array
Tampilkan seluruh item pada array
Gunakan Console.log
Tampilkan data tersebut pada Halaman HTML menggunakan list tag
*/

let itTeam = ["Front-End Engineer", "Back-End Engineer", "Web Developper", "Android Developper", "IOS Developper"];

console.log(itTeam.length);

console.log(itTeam);

/*Buatlah sebuah data array yang berisi nama pada tim teman-teman.
Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
Console.log data array tersebut dengan memisahkan setiap data menggunakan  koma (,)
Tampilkan list data tersebut ke halaman HTML
hidden:
Cek built-in method Array
*/

let teamSuperDragon = ["Reo", "Tsuyopon", "Jean", "Payapaya", "Ogon", "Koki", "Oma", "Moy", "Rakumeng"];
let teamFireDragon = teamSuperDragon.slice(0, 4);
console.log(teamFireDragon);
let teamThunderDragon = teamSuperDragon.slice(4, 9);
console.log(teamThunderDragon);

/*Diberikan 1 data array [3, 5, 7, 9, 11]
Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan perkalian 5.
Tampilkan pada console.log
*/

let arr = [3, 5, 7, 9, 11];
newArr = arr.map(num => {
    console.log(num * 5);
});

console.log(newArr);

/*Tersedia 2 data Array. Tugas kita adalah untuk cek apakah ada nilai yang sama pada kedua Array.
Array pertama = [‘Math’, ‘English’, ‘Programming’]
Array kedua = [‘Geography’, ‘Spanish’, ‘Programming’]
Program akan mengembalikan nilai TRUE or FALSE */

let firstArr = ["Math", "English", "Programming"];
let secondArr = ["Geography", "Spanish", "Programming"];
let subject = firstArr.concat(secondArr);

console.log(subject);

let programming = subject.includes("Programming");

console.log(programming);