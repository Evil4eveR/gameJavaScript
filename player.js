
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
        const table_cards = document.querySelectorAll('#unselected');
        const selectedcards = document.querySelectorAll('#selected');
        console.log(selectedcards);
        while(selectedcards.length!=2){
            this.play();}

        for(let i=0;i<table_cards.length;i++){
    
            table_cards[i].removeEventListener('click',handleCardClick);
        }
        
        if(is_Set(selectedcards)){
            render_win_message();
            remove_set_from_table(); 
            this.score++;   
            console.log( this.name +'has score : '+this.score);    
        }
        else{
            render_lose_message();
            players[playerindex].score--;   
            console.log( this.name +'has score : '+this.score);    
        }
    }
}
   
//}