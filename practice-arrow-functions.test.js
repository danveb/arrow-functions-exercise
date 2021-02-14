// Jasmine Test 

// #1 calculate taxes
describe('calculate taxes based on income', function() {
    // string, callback function 
    it('should calculate lower income-bracket', function() {
        // expect 500
        expect(calculateTaxes(500)).toEqual(75); 
    })
    // string, arrow function
    it('should calculate higher income-bracket', () => {
        // expect 150000
        expect(calculateTaxes(150000)).toEqual(37500)
        // expect 275000 
        expect(calculateTaxes(275000)).toEqual(68750)
    })
    // string, arrow function 
    it('should calculate cut off for lower income-bracket', () => {
        // expect 29000 to be less than X 
        expect(calculateTaxes(29999)).toBeLessThan(4500)
    })
    // string, arrow function
    it('should not work with strings', () => {
        // expect 'abc' to equal NaN 
        expect(calculateTaxes('abc')).toEqual(NaN); 
    })

})

