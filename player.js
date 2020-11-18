
import {handleCardClick,is_Set,remove_set_from_table} from "./index.js";
import {render_lose_message,render_win_message} from "./render.js";

export class Player{
    constructor(name) {
        this.score = 0;
        this.turn = false;
        this.name = name;
        this.table = document.querySelector('#deck');

    }
    get_name (){
        return this.name;
    }
    make_action(){
        this.turn = true;
    }
    play (){

        this.turn = true;
        var timeleft = 10;
        var downloadTimer = setInterval(function(){
        const table_cards = document.querySelectorAll('#unselected');
        const selectedcards = document.querySelectorAll('#selected');
        if(timeleft <= 0 || selectedcards.length===3){
            this.turn = false;
            clearInterval(downloadTimer);
            for(let i=0;i<table_cards.length;i++){
    
                table_cards[i].removeEventListener('click',handleCardClick);
            }
            //evaluate the selected cards
            if(is_Set(selectedcards)){
                render_win_message();
                remove_set_from_table(); 
                this.score=this.score+1;   
                console.log( this.name +'has score : '+this.score);    
            }
            else{
                render_lose_message();
                this.score=this.score-1;   
                console.log( this.name +'has score : '+this.score);    
            }
            }
        document.getElementById("counter").innerText = 10 - timeleft;
        timeleft -= 1;

        }, 1000);
        
        
        //console.log(selectedcards);
        // while(selectedcards.length!=2){
        //     this.play();}
    }
}