const name = "vishal"
const repocount = 30

// console.log(name + repocount);

console.log(`hello my name is ${name} and my repocount is ${repocount} `);

const gamename = new String ('vishal-singh')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(6 ));
console.log(gamename.indexOf("h"));

const newString = gamename.substring (0 , 3 )
console.log(newString);

const anotherString = gamename.slice(0 , 5 )
console.log(anotherString);

const newStringone = "    vishal     "
console.log(newStringone );
console.log(newStringone.trim());

const url = "https://vishal.com/vishal%20singh"

console.log(url.replace ('%20'), ('-'));
console.log(url.includes ('vishal'));
console.log(url.includes('savita'));


console.log(gamename.split('-'));












