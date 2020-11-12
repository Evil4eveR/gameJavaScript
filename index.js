import {Deck} from './deck.js';
import { Player } from './player.js';
import {renderDeck,rendernoplayers,render_win_message,render_lose_message,render_turns,render_3_cards,render_players_buttons} from "./render.js";

const players = [];
const noplayersdiv=document.querySelector('#noplayersdiv');
const noplayersselection = document.getElementById('nofplayersselection');    
const show_set_button = document.getElementById('show_set');
const is_set_exist_button = document.getElementById('is_set_exist');
const game_mode_selection = document.getElementById('Modes');
const deal_3_cards_button = document.getElementById('deal_3_cards');
const start_game = document.getElementById('start_game');
const difficulty_selection = document.getElementById('Difficulties');
const timeUP = document.getElementById('counter');
let deck = new Deck();

export function handleCardClick(evt){

    if(evt.target.id === 'selected'){
        evt.target.id = 'unselected';
        
    }
    else if(evt.target.id === 'unselected'){
        evt.target.id = 'selected';
    }  
}

export function handleplayerbuttonclick(e1){
    e1.target.disabled = true;
    var index = e1.target.id;
    players[index].play();
    console.log(players[index]);
    countdown();
}


export function countdown(e1){
    //i just created that score to see if is showing the score
    var score =10;
    var timeleft = 0;
    var index = e1.target.id;
    var downloadTimer = setInterval(function(){
        if(timeleft >= 10){
            clearInterval(downloadTimer);
            players[index].score =+ score;
            document.getElementById("score").innerHTML = "the score of " + players[index].name + ": " + players[index].score; 
        }
  document.getElementById("counter").innerHTML = 10 - timeleft;
  timeleft++;
  }, 1000);
  }

function handleDifficulty(){


    if(difficulty_selection.value ==='Advanced'){
        deck.generate_deck('Advanced');
    }else{
        deck.generate_deck('Starter');
    }
    deck.shuffle();
    renderDeck(deck.deal(12));
}

export function handlenumberofplayers(){
[]
    noplayersdiv.innerHTML='';

    for(let i=0;i<noplayersselection.value;i++){

        rendernoplayers(noplayersdiv,i);
    }
}

function displayplayers(){

    for(let i=0;i<players.length;i++){
        console.log(players[i]);
    }
}

export function storeinplayerslist(){

    const playersinput = document.querySelectorAll("#Player");

    for(let i=0;i<noplayersselection.value;i++){

        players.push(new Player(playersinput[i].value));
       
    }
        noplayersselection.removeEventListener('change',handlenumberofplayers);

    }

function handleGameMode(){

    if(game_mode_selection.value==='Competitive'){

        show_set_button.disabled=true;
        is_set_exist_button.disabled=true;
        deal_3_cards_button.disabled = true;
    }
    else{
        show_set_button.disabled=false;
        is_set_exist_button.disabled=false;
        deal_3_cards_button.disabled=false;
    }
}



export function remove_set_from_table(){
    const selectedcards = document.querySelectorAll('#selected');
    for(let i = 0 ;i<selectedcards.length;i++){
        selectedcards[i].parentNode.removeChild(selectedcards[i]);
    }
    render_3_cards(deck);
}
export function evaluate(id){
    console.log('here evaluate');
    const table_cards = document.querySelectorAll('#unselected');
    const selectedcards = document.querySelectorAll('#selected');
    if(selectedcards.length==2){
    for(let i=0;i<table_cards.length;i++){

        table_cards[i].removeEventListener('click',handleCardClick);
    }
    
    if(is_Set(selectedcards)){
        render_win_message();
        remove_set_from_table(); 
        players[id].score++;   
        console.log( players[id].name +'has score : '+ players[id].score);    
    }
    else{
        render_lose_message();
        players[playerindex].score--;   
        console.log( players[id].name +'has score : '+ players[id].score);    
    }
}
}

        


function is_Set(selectedcards){

if(selectedcards[0].className === selectedcards[1].className && selectedcards[1].className === selectedcards[2].className){
    return true;
}
else if (selectedcards[0].className != selectedcards[1].className && selectedcards[1].className != selectedcards[2].className && selectedcards[0].className != selectedcards[2].className){
    return true;
}
else{
    return false;
}
}

function handleStartGame(){
    
    storeinplayerslist();
    handleDifficulty();
    handleGameMode();
    render_players_buttons(players);

}

game_mode_selection.addEventListener('change',handleGameMode);
difficulty_selection.addEventListener('change',handleDifficulty);
noplayersselection.addEventListener('change',handlenumberofplayers);
start_game.addEventListener('click',handleStartGame);
start_game.addEventListener('click',handleStartGame);
