console.log("Merhaba Kodlama.io")

//JS type safe değildir
//değişken değer
let dolarBgun = 9.30

let dolarDun = 9.20
//dolarDun = "Ankara"
{
    let dolarDun = 9.10
    console.log(dolarDun)
}

console.log(dolarDun)

//sabit değer
const euroDun = 11.2
//euroDun = 11 //error line

console.log(euroDun)

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]

console.log("<ul>") 
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>") 
