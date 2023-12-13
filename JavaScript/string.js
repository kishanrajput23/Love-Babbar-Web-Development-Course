let firstName = "kishan";
console.log(firstName.toUpperCase());
console.log(firstName.length);
console.log(firstName.includes('sh'));
console.log(firstName.startsWith('ki'));
console.log(firstName.endsWith('n'));
console.log(firstName.indexOf('s'));
console.log(firstName.replace("kishan", "kishna"));

let str = "   kishan   ";
console.log(str.trim());

let str1 = " $$  kishan $$  ";
console.log(str1.trimStart()); 

let str2 = " $$  kishan $$  ";
console.log(str2.trimEnd()); 

let sentence = "I am an Iron Man";
let words = sentence.split(" ");
console.log(words);

// string literals
let message = 
`Hello Ji...,

Thanks for the Opportunity

Regards,
Kishan`;

console.log(message);

// split method
let message1 = 'This is my first message';
let parts = message1.split(' ');
console.log(parts);

// joined method
let joined = parts.join('_');
console.log(joined);