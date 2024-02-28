function numberOfVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i=0; i<str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(numberOfVowels("JavaScript"));
console.log(numberOfVowels("AEIOU"));
console.log(numberOfVowels("Hello"));
console.log(numberOfVowels("Kishan"));
