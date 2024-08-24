class GameBoard{
    constructor(){
        this.board = [[]];
        this.x = 0;
        this.y = 0;
        this.pos_x = 0;
        this.pos_y = 0;
        this.missed = 0;
        this.ships = []
    }

    setX(val){
        this.x = val;
    }
    setY(val){
        this.y = val;
    }
    setPosX(val){
        this.pos_x = val;
    }
    setPosY(val){
        this.pos_y = val;
    }
    setMissed(val){
        this.missed = val;
    }
    getMissed(){
        return this.missed;
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y 
    }
    getPosX(){
        return this.pos_x
    }
    getPosY(){
        return this.pos_y;
    }
    receiveAttack(){
        return this.board[this.getX()][this.getY()] = 'X';
    }
    positionShip(ship){
        return this.board[this.getPosX()][this.getPosY()] = ship;
    }
    
    missedAttacks(){
        let count = 0;
        if((this.getPosX !== this.getX)&(this.getPosY!==this.getY)){
            count += 1;
            this.setMissed(count);
        }
        return this.getMissed();
    }
    shipsSunk(){
        if(this.ships.length === 0){
            return true;
        }
        return false;
    }
}
module.exports = GameBoard;