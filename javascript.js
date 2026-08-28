const CARD_COUNT_MAX = 52;
const CARD_SUITE_MAX = 13;

const SUITES = [`Spades`, `Clubs`, `Diamonds`, `Hearts`];

const deck = {
    cards: [],

    build: function(){
        for(const suite of SUITES){
            for(let i = 0; i < CARD_SUITE_MAX; i++){
                let currNum = i + 1;
                let isFaceCard = false;
                let id = currNum;
                if(currNum > 10){
                    currNum = 10;
                    faceCard = true;
                }else {faceCard = false;}
                this.cards.push(
                    {
                        suite: suite,
                        id: id,
                        num: currNum,
                        faceCard: faceCard,
                    }
                )
            }
        }
    },

    shuffle: function(){
        let currentIndex = this.cards.length
        while(currentIndex !== 0){
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    },

    draw: function(){return this.cards.pop();}

    //
}

deck.build();
deck.shuffle();
// console.table(deck.cards);
// console.log(deck.draw());
// console.table(deck.cards);
