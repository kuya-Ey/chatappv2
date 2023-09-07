const functions = require('./functions');

test('add 1 and 1 to equal 2', ()=>{
    expect(functions.add(1,1)).not.toBe(3);
    expect(functions.add(1,1)).toBe(2);
});

test('should be null', ()=>{
    expect(functions.isNull()).toBeNull();
});

test('should be falsy', ()=>{
    expect(functions.checkValue(1)).toBeTruthy();
});

test('should be kodego object', ()=>{
    expect(functions.createUser()).toEqual({email:'kodego@test.com',password:'12345678'});
});

test('should be under 1600', ()=>{
    const num1= 700;
    const num2= 600;
    expect(num1+num2).toBeLessThan(1600);
});

test('There is no i in team', ()=>{
    expect('teami').toMatch(/I/i);
});

test('Admin should be in username', ()=>{
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

test('Use fetch should be leanne Graham', ()=>{
    expect.assertions(1);
    return functions.fetchUser().then(data=>{
        expect(data.name).toEqual('Leanne Graham');
    })
});

