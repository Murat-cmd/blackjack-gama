document.getElementById("start")
let MessageEl = document.getElementById("message-el")
let total = document.getElementById("sum")
let cards = document.getElementById("card")
document.getElementById("new")
let Chips = document.getElementById("chip")


let carda = []
let  sum = 0
isAlive = false
Won = false
let message = ""



function START(){

   won = false
   isAlive = true
   let firstcard = RandomNumber()
   let secondcard = RandomNumber()
   carda = [firstcard,secondcard]
   sum = firstcard + secondcard
   render()
}

function RandomNumber(){
  let x = Math.floor(Math.random()*13) + 1

  if (x > 10){
    return 10
  } else if (x === 1){
    return 11
  }else {
    return x
  }

}
function render(){

    

    total.textContent = "Sum:" + sum

    cards.textContent = "Cards: " 

    for ( let i = 0 ; i < carda.length ; i++){
          cards.textContent += carda[i] + ","
    }


   if (sum <= 20){
     message = "Draw Another Card"
   } else if (sum === 21){
     message ="You won"
     won = true
   } else {
     message = "You Lost"
     isAlive = false
   }
   MessageEl.textContent = message
   
  }



 function NEWCARD(){
   
  if (isAlive === true && won === false){
    let nextcard = RandomNumber()
    sum += nextcard
    carda.push(nextcard)
    render()
  }
  
}
