//iterazioni con cicli

// ciclo for

// for (let i = 0; i <= 100; i++){
     //istruzioni da eseguire
// }
// console.log(i);

//parola chiave for
// i è il contatore
// si impone la condizione da verificare

// i++ i-- prima legge i poi incrementa/decrementa
// ++i --i prima incrementa/decrementa e poi legge i

// !esercizio pari e dispari


const gridElem = document.querySelector(".grid");

for (let i = 0; i <=100; i++){

    let oddEven;
    if (i % 2 ===0) {
        oddEven = "pari";
    } else{
        oddEven = "dispari"
    }

console.log(i, oddEven);
gridElem.innerHTML += `<div class="box ${oddEven}">${i}</div>`

}


