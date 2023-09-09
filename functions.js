const axios = require('axios');

const functions ={
    add:(num1, num2) => num1+num2,
    isNull:()=>null,
    checkValue:(x)=>x,
    createUser: ()=>{
        const user = {email:'kodego@test.com',password:'12345678'}
        return user;
    },
    fetchUser: ()=> axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>res.data)
    .catch(err => 'something went wrong!')
};

const credential = {
    email:'kodego@test.com',
    password: '12345678'
}


module.exports = functions;

// const functions ={
//     add:(num1, num2) => num1 + num2,
//     isNull:()=>null
// };



module.exports = functions;
