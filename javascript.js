const CARD_COUNT_MAX = 52;
const CARD_SUITE_MAX = 13;

const SUITES = [`Spades`, `Clubs`, `Diamonds`, `Hearts`];

const dealer = {
    cards: [],
    players: [],
    hand: [],

    build: function(){
        for(const suite of SUITES){
            for(let i = 0; i < CARD_SUITE_MAX; i++){
                let currNum = i + 1;
                let isFaceCard = false;
                let id = currNum;
                if(currNum > 10){
                    currNum = 10;
                    isFaceCard = true;
                }
                this.cards.push(
                    {
                        suite: suite,
                        id: id,
                        num: currNum,
                        faceCard: isFaceCard,
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

    addPlayer: function(player){
        this.players.push({
            name: player,
            hand: [],
        });
    },

    drawCard(withdrawHand, depositHand){
        depositHand.push(withdrawHand.pop());
    },

    dealCards: function(){
        const rounds = 2;
        for(let i = 0; i < rounds; i++){
            for(const player of this.players){
                this.drawCard(this.cards, player.hand);
            }
        }
    },

    displayHands: function(){
        for(const player of this.players){
            console.table(player.hand);
        }
        console.table(this.hand);
        console.table(this.cards);
    }
    //
}

// Ready The Deck //
dealer.build();
dealer.shuffle();

// Add Players //
const playerNameList = [`Adam Dennison`, `Jerry Hence`, `Johsua Martin`]
for(const playerName of playerNameList){
    dealer.addPlayer(playerName);
}

// Deal Cards and Display //
dealer.dealCards();
//dealer.displayHands();
