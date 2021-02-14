// Jasmine Test 

// #1 calculate taxes
describe('calculate taxes based on income', function() {
    // regular function 
    it('should calculate lower income-bracket', function() {
        // expect 500
        expect(calculateTaxes(500)).toEqual(75); 
    })
    // arrow function
    it('should calculate higher income-bracket', () => {
        // expect 150000
        expect(calculateTaxes(150000)).toEqual(37500)
        // expect 275000 
        expect(calculateTaxes(275000)).toEqual(68750)
    })
})

