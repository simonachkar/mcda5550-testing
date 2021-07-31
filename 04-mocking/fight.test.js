const fight = require("./fight");
const utils = require("./utils")

// Mock utils module
// ...

test('Winner is Elon Musk', () => {
    const winner = fight('Jeff Bezos', 'Elon Musk')
    expect(winner).toBe('Elon Musk')

    // cleanup
})
