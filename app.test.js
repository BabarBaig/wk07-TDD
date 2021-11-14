

// remove names "S" prefix names
const removeSNames = require('./app')

describe('removeSNames', () => {
    // test 1: names with "S" prefix shouldn't be present in the resultant array
    it('should remove all S-prefix names', () => {
        const names = ['Apple', 'Strawberry', 'Star fruit', 'Guava']
        expect( removeSNames(names)).not.toContain('Strawberry')
        expect( removeSNames(names)).not.toContain('Star Fruit')
    })

    // test 2: names without "S" prefix should still be there
    it('should not remove non-S-prefix names', () => {
        const names = ['Apple', 'Strawberry', 'Pineapple']
        expect( removeSNames(names)).toContain('Apple')
        expect( removeSNames(names)).toContain('Pineapple')
    })

    // test3: names with "S" or "s" prefix should not be present
    it( 'should mind case', () => {
        const names = ['Apple', 'Strawberry', 'Pineapple', 'shrimp']
        expect( removeSNames(names)).not.toContain('Strawberry')
        expect( removeSNames(names)).not.toContain('shrimp')
    })
})
