// 1.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];
console.log(secondCity);

// 2.
euroCities[0] = "Berlin";
console.log(euroCities);

// 3.
console.log(euroCities.length);

// 4.
euroCities.pop();
console.log(euroCities);

// 5.
euroCities.push("Budapest");
console.log(euroCities);

// 6.
const asianCities = ["Honkong", "Delhi", "Sirnak", "Osaka", "Dhaka"];

// 7.
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 8.
worldCities.reverse();
console.log(worldCities);

// 9.
euroCities.splice(2, 1);
console.log(euroCities);

// 10.
const otherCities = asianCities.slice(1, 4);
console.log(otherCities);

// 11.
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);

// 12.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

// 13.
console.log(worldCities.join());

console.log(worldCities.join(" + "));

// Bonus

const blöderSpruch = "Hello world";
console.log(blöderSpruch.split("").reverse().join(""));

// Extra Practice
// 1.

const siblings = ["Fiona","Vincent"]
console.log(siblings);

// 2.
const parents = ["Elke","Raik"]

// 3.
const family = siblings.concat(parents)
console.log(family)

// 4.
family.push("Paddy","Morla")
console.log(family);

// 5.
family.reverse()
console.log(family);

// 6.
const Mutter = family[3];
console.log(Mutter);

// 7.
console.log(parents.splice(1,1,"Vaddiii")); 
console.log(parents);
parents[0] = "Mama"
console.log(parents);