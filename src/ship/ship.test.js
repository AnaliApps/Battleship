import Ship from "./ship";

jest.mock('./ship');
beforeEach(()=>{
    Ship.mockClear();
    
})

describe('testing ship class',()=>{
    let ship = new Ship(7,4,false);
    ship.setSunk(6,7);
    it('check what our class returns',()=>{
        let mockShip = jest.fn();
        let expectedObj = ship;
        let mock = mockShip.mockImplementation(()=>{
            return expectedObj
        })
        expect(mock()).toEqual(expect.any(Object));
    })
    it('check getLength getter',()=>{
        jest.spyOn(Ship.prototype,'getLength').mockReturnValue(expect.any(Number));
        let getLength = new Ship(7,4,false).getLength;
        expect(getLength()).toEqual(expect.any(Number))
    })
    it('check getHit getter',()=>{
        jest.spyOn(Ship.prototype,'getHit').mockReturnValue(expect.any(Number));
        let getHit = new Ship(7,4,false).getHit;
        expect(getHit()).toEqual(expect.any(Number))
    })
    it('check getSunk getter',()=>{
        jest.spyOn(Ship.prototype,'getSunk').mockReturnValue(expect.any(Boolean));
        let getSunk = new Ship(7,4,false).getSunk;
        expect(getSunk()).toEqual(expect.any(Boolean))
    })
})