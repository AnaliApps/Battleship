class Ship{
    constructor(_length,_hit,_sunk){
        this.length = _length;
        this.hit = _hit;
        this.sunk = _sunk;
    }
    getLength(){
        return this.length;
    }
    setHit(val){
        this.hit = val;
    }
    getHit(){
        return this.hit;
    }
    setSunk(numOfHits,shipLength){
        if(numOfHits > 5 || shipLength < 8){
            this.sunk = true;
        }else{
            this.sunk = false;
        }
    }
    getSunk(){
        return this.sunk;
    }
    hits(){
        this.getHit();
    }

    isSunk(){
        return this.getSunk();
    }
}

module.exports = Ship;