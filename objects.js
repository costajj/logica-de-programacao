// interface Person {
//   name: string;
//   age: number;
//   teacher?: boolean;
//   sayHello: Function;
// }

const person = {
    name: "CostaJ",
    age: 190,
    sayHello() {
        console.log(`Oi, o meu nome é ${this.name} e eu tenho ${this.age}.`);
    },
};

person.teacher = true;
person.sex = "male";
person.sayHello();

//Object.keys(person).map((key) => console.log(`${key}: ${person[key]}`));

