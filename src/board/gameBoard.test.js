import GameBoard from "./gameBoard";
import Ship from "../ship/ship";

jest.mock('./gameBoard')
beforeEach(()=>{
    GameBoard.mockClear();  
})

describe('testing gameBoard class',()=>{
    let gameBoard = new GameBoard();
    it('gameboard returns a 2d array',()=>{
        let mockGameBoard = jest.fn();
        let mock = mockGameBoard.mockImplementation(()=>{
            return gameBoard;
        }) 
        expect(gameBoard).toEqual(expect.any(Object))
    })
    it('receiveAttack should return a mark',()=>{
        jest.spyOn(GameBoard.prototype,'receiveAttack').mockReturnValue(expect.any(String));
        expect(gameBoard.receiveAttack()).toEqual(expect.any(String))
    })
    it('positionShip should return a ship at a particular pos',()=>{
        jest.spyOn(GameBoard.prototype,'positionShip').mockReturnValue(expect.any(Object));
        let ship = new Ship(7,4,false)
        expect(gameBoard.positionShip(ship)).toEqual(expect.any(Object))
    })
    it('missedAttack should return a number of missed attacks',()=>{
        jest.spyOn(GameBoard.prototype,'missedAttacks').mockReturnValue(expect.any(Number));
        expect(gameBoard.missedAttacks()).toEqual(expect.any(Number))
    })
    it('shipsSunk should return true/false if all ships have been sunk',()=>{
        jest.spyOn(GameBoard.prototype,'shipsSunk').mockReturnValue(expect.any(Boolean));
        expect(gameBoard.shipsSunk()).toEqual(expect.any(Boolean))
    })
})