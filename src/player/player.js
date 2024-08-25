import GameBoard from "../board/gameBoard";
class Player{
    constructor(_realPlayer,_computer){
        this.realPlayer = _realPlayer;
        this.computerPlayer = _computer;
    }
    getRealPlayer(){
        return this.realPlayer;
    }
    getComputerPlayer(){
        return this.computerPlayer;
    }
    realPlayerBoard(){
        return new GameBoard();
    }
    computerPlayerBoard(){
        return new GameBoard();
    }
}

module.exports = Player;