var faker = require("faker");

faker.locale = "vi";

console.log(faker.name.findName());
console.log(faker.internet.email());
console.log(faker.helpers.createCard());
