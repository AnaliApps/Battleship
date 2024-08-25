import Player from './player'

jest.mock('./player')
beforeEach(()=>{
    Player.mockClear();
})

describe('testing player class',()=>{
    let player = new Player('person','computer')
    it('expect player to return 2 objects',()=>{
        let mockPlayer = jest.fn();
        let mock = mockPlayer.mockImplementation(()=>{
            return player;
        })
        expect(mock()).toEqual(expect.any(Object))
    })
    it('expect realPlayerBoard to return an object',()=>{
        jest.spyOn(Player.prototype,'realPlayerBoard').mockReturnValue(expect.any(Object))
        expect(player.realPlayerBoard()).toEqual(expect.any(Object))
    })
    it('expect computerPlayerBoard to return an object',()=>{
        jest.spyOn(Player.prototype,'computerPlayerBoard').mockReturnValue(expect.any(Object))
        expect(player.computerPlayerBoard()).toEqual(expect.any(Object))
    })
    it('expect getcomputerPlayer to return name of computerPLayer',()=>{
        jest.spyOn(Player.prototype,'getComputerPlayer').mockReturnValue(expect.any(String))
        expect(player.getComputerPlayer()).toEqual(expect.any(String))
    })
    it('expect getRealPlayer to return name of realPLayer',()=>{
        jest.spyOn(Player.prototype,'getRealPlayer').mockReturnValue(expect.any(String))
        expect(player.getRealPlayer()).toEqual(expect.any(String))
    })
})