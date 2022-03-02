const { assert } = require('chai')

const MemoryToken = artifacts.require('./contratcs/MemoryToken.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Memory Token', (accounts) => {

    let token        

    describe('deployment', async () => {
        it('deploys successfully', async () => {

            token = await MemoryToken.deployed()

            const address = token.address

            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        }) 
        it('has a name', async () => {
            const name = await token.name()
            assert.equal(name, 'Memory Token')
        }) 
        it('has a symbol', async () => {
            const name = await token.symbol()
            assert.equal(name, 'MTT')
        }) 
    })

    describe('token distribuition', async () =>{
        let result 

        it('mints tokens', async () =>{
            await token.mint(accounts[0], 'https://www.token-uri.com/nft')
        //it should increase the total supply

        result = await token.totalSupply()
        assert.equal(result.toString(), '1', 'total supply is correct')

        })
    })

})