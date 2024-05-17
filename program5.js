let person = {
    name: "Suraj",
    age: 28,
    gender: "male",
    city: "Mumbai"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
