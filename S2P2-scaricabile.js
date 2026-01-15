// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 2, 26, 3, 25, 10, 5]
const shippingCost = 50
const freeShippingOver = 100
const ambassadorDiscount = 30

let utenteCheEffettuaLAcquisto = marco

let shoppingCart = 0

for (let price of prices) {
  shoppingCart += price
}

console.log(
  `Il carrello di ${utenteCheEffettuaLAcquisto.name} è ${shoppingCart}`
)

if (utenteCheEffettuaLAcquisto.isAmbassador) {
  shoppingCart -= (shoppingCart * ambassadorDiscount) / 100
  console.log(
    `${utenteCheEffettuaLAcquisto.name} è ambassador, il carrello è scontato del ${ambassadorDiscount}%`
  )
  console.log(`Il carrello è diventato di ${shoppingCart}`)
}

if (shoppingCart <= freeShippingOver) {
  shoppingCart += shippingCost
  console.log(
    `Il carrello non supera i ${freeShippingOver}, sono stati aggiunti ${shippingCost} di spedizione`
  )
} else {
  console.log(
    `Il carrello supera i ${freeShippingOver}, la spedizione è gratuita`
  )
}

console.log(
  `Il totale da pagare per ${utenteCheEffettuaLAcquisto.name} è ${shoppingCart}`
)

let users = []

users.push(marco)
users.push(paul)
users.push(amy)

for (let user of users) {
  console.log(
    `${user.name} ${user.lastName} ${
      user.isAmbassador ? "è" : "non è"
    } un ambassador`
  )
}

let ambassadors = []

for (let user of users) {
  if (user.isAmbassador) {
    ambassadors.push(user)
  }
}

console.log(ambassadors)
