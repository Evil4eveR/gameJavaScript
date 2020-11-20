import {handleCardClick,handleplayerbuttonclick,displaywinner} from './index.js';
import {Deck} from './deck.js';

export function renderDeck(deck) {
  let deckTable = document.getElementById("deck")
  deckTable.innerHTML = ""
  for (let n = 0; n < 3; n++) {
    let row = document.createElement("tr")
    for (let m = 0; m < 4; m++) {
      let cell = document.createElement("td")
      let card = document.createElement("div")
      card.classList.add(
        "card",
        "g-card",
        deck[m + n].shape,
        deck[m + n].color,
        deck[m + n].number,
        deck[m + n].shading,
      )
      card.id = "unselected"

      card.addEventListener("click", handleCardClick)

      cell.appendChild(card)
      row.appendChild(cell)
      deckTable.appendChild(row)
    }
  }
}

export function render_3_cards(deck){

if(deck.get_length()>=1){
  var endgame = false;
  const empty_tds = document.querySelectorAll('td');
  const cards = deck.deal(3);

  for(let i =0;i<empty_tds.length;i++){
    var j=0;
    if(empty_tds[i].children.length==0){
      
      let card = document.createElement("div");
      card.className = 'card '+ cards[j].shape +' '+ cards[j].color +' '+cards[j].number+' '+cards[j].shading;
      card.id = 'unselected';
      empty_tds[i].appendChild(card);
      j++;
    }
  }
  let div = document.getElementById('no_remaining_cards');
  div.innerHTML = 'Number of remaining Cards in the Deck is : '+deck.get_length();
}
else{
  endgame = true;
  let div = document.getElementById('no_remaining_cards');
  div.innerHTML ='There is No Remaining Cards in the Deck';
  displaywinner();
} 
}
export function render_3_cards_button(deck){

  if(deck.get_length()>=1){
    var endgame = false;
    const tds = document.querySelectorAll('td');
    const cards = deck.deal(3);
  
    for(let i =0;i<3;i++){
      var j=0;
      var randomindex = Math.floor(Math.random() * 12) ;
        tds[randomindex].removeChild(tds[randomindex].childNodes[0]); 
        let card = document.createElement("div");
        card.className = 'card '+ cards[j].shape +' '+ cards[j].color +' '+cards[j].number+' '+cards[j].shading;
        card.id = 'unselected';
        tds[randomindex].appendChild(card);
        j++;
    }
    let div = document.getElementById('no_remaining_cards');
    div.innerHTML = 'Number of remaining Cards in the Deck is : '+deck.get_length();
  }
  else{
    endgame = true;
    let div = document.getElementById('no_remaining_cards');
    div.innerHTML ='There is No Remaining Cards in the Deck';
    displaywinner();
  } 
  }

export function rendernoplayers(noplayersdiv,i){

  var input = document.createElement("INPUT");
  var label = document.createElement("LABEL");
  var br = document.createElement("br");
  input.setAttribute("type", "text");
  input.id = "Player";
  input.defaultValue = "Player"+ (i+1) ;
  label.innerHTML = "Player "+ (i+1) +" : ";
  noplayersdiv.appendChild(label);
  noplayersdiv.appendChild(input);
  noplayersdiv.appendChild(br);

}
export function render_players_buttons(players) {
  let div = document.getElementById("players_buttons")

  for (let i = 0; i < players.length; i++) {
    //var PlayerLogo= document.createElement('div');
    var button = document.createElement("BUTTON")

    var col = document.createElement("div")
    col.classList.add("col")

    //const image= ./cards/player.png";
    button.innerHTML = players[i].name
    button.id = i
    button.classList.add("PlayerButton", "m-1")
    button.addEventListener("click", handleplayerbuttonclick)
    //button.addEventListener("click", countdown)
    col.appendChild(button)
    div.appendChild(col)
    start_game.disabled = true
  }
}
export function render_win_message(){

  let div = document.getElementById('message_container');
  div.innerHTML = 'Great ! It is a SET!';

}
export function render_turns(message){

   let div = document.getElementById('message_container');    
   div.innerHTML = message ;

 }

export function render_lose_message(){

  let div = document.getElementById('message_container');
  div.innerHTML = 'Sorry ! it is not a SET';

}
export function renderwinner(msg){

   let div = document.getElementById('winner');    
   div.innerHTML = msg ;
}
export function render_no_selectedcards(){
  let div = document.getElementById('message_container');
  div.innerHTML = 'No Cards have been selected';
}