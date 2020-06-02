let _ = require("lodash");
let greet = (name) => {
    let greeting = _.shuffle(["Hello" , "Hi", "Hola"]);
    return `${greeting[0]} ${name}`;
};

module.exports = {
    "greet": greet
};