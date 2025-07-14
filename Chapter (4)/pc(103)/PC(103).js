const scores = {
calip: 0,
henre: 0,
james: 0, 

};


// Display each friend in the console
console.log("------All Friends Info------");

scores.james = 3;
console.log("james's scores:", scores.james);

scores.calip= 3;
console.log("calip's scores:", scores.calip);

scores.henre= 2;
console.log("henre's scores:", scores.henre);

var weirdObject = {
 "name": "A ridiculous object",
 "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
 "random animal": "banana Shark"
};

console.log(weirdObject["some array"][2]["number"]); 