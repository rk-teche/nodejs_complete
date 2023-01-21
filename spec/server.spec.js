const request = require('request');

describe('calc', () => {
    it('should multiply 2 and 2', () => {
        expect(2*2).toBe(4)
    })
})

describe('get messages', () => {
    it('should return 200 Ok', (done) => {
        request.get('http://localhost:3000/messages', (err, res)=> {
            console.log(res.statusCode)
            expect(res.statusCode).toEqual(200)
            done()
        })
    })

    it('should return return a list, that not empty', (done) => {
        request.get('http://localhost:3000/messages', (err, res)=> {
            const response = JSON.parse(res.body)
            console.log('hello', response.length)
            expect(response.length).toBeGreaterThan(0)
            done()
        })
    })
})

describe('get message from user', () => {
    it('should return 200 Ok', (done) => {
        request.get('http://localhost:3000/messages/tim', (err, res)=> {
            console.log(res.statusCode)
            expect(res.statusCode).toEqual(200)
            done()
        })
    })

        it('user should be tim', (done) => {
            request.get('http://localhost:3000/messages/Rk', (err, res)=> {
                const response = JSON.parse(res.body)
                console.log('user', response[0])
                expect(response[0].name).toEqual('Rk')
                done()
            })
        })
})