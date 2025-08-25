let user = {
  name: "John",
  age: 30
};

let clone = {};

Object.assign(user, clone)

clone.name = "Vasya";

alert(`user: ${user.name}`); // "John"
alert(`clone: ${clone.name}`); // "John"
