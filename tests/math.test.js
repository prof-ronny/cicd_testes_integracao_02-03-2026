const math=require('../math');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
}); 

test('subtracao 3 -  2 igual a 1', () => { 
    expect(math.subtract(3, 2)).toBe(1); 
});
