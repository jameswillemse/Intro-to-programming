// 1. Defining an Object:
const person = {
  name: 'james',                // Key-value pair
  age: '19',
  Country: 'ZA',
  'favoritecolors': 'neon &&  matalic',     // Key with a space requires quotes
  isStudent: true
};

// 2. Accessing Object Values:
const name = person.name;
console.log("Name:", name);

// 3. Accessing Object Values:
const age = person['age'];
console.log("age:", age);

const Country = person['Country'];
console.log("Country:", Country);

const favoritecolors = person['favoritecolors'];
console.log("favoritecolors:", favoritecolors);

const isStudent = person['isStudent'];
console.log("isStudent:", isStudent);

// 4. Retrieving All Keys from an Object:
const keys = Object.keys(person);
console.log("Keys:", keys);

// 5. Adding New Key-Value Pairs:
// Key with special characters or spaces
person['occupation'] = 'gamerer';
console.log("new key-value pair:", person['occupation']);
//.notation
person.hobbies = 'strategy','coding','moding', 'apllication file editing';
console.log("new key-value pair:",person.hobbies)





console.log("Person-Object:", person);

// 6. Update the value of 'age'
person.age = 20;
console.log("Person-Age:", person.age);

// 7. Adding keys with numbers or special characters requires quotes:
person['1stLanguage'] = 'English';
console.log("Person-1stLanguage:", person['1stLanguage']);

person['2ndLanguage'] = 'africaanse';
console.log("Person-2ndLanguage:",person['2ndLanguage']);

person['email-address'] = 'yukiyifdir@gmail.com';
console.log("Person-Email:", person['email-address']);


person['gaming-email-address'] = 'thorinorcs73@gmail.com';
console.log("Person-Email:", person['email-address']);
 