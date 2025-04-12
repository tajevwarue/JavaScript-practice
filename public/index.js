// 1.  Creating Variables to store my information
const myName = "Theophilus";
const age = 28;
const nationality = "Nigeria";

// Concatenating my information into a sentence
const introduction = `My name is ${myName}, I am ${age} years old and I am from ${nationality}.`;
console.log(introduction);  // Displaying the sentence.

// 2. Creating Variable of my favourite quote
const favouriteQuote = "To every disciplined effort, there's a multiple rewards.";
console.log(favouriteQuote.toLocaleUpperCase()); // Changing entire text to upper case.
console.log(favouriteQuote.toLocaleLowerCase()); // Changing entire text to lower case.

// 3. Creating a word and reversing it order
const word = "Monopoly";
const wordReversed = word.split("").reverse().join("");
// The above splits the word into an array of with letters. Reverse their order and joins them. 
console.log(`The word is "${word}" and when reversed becomes "${wordReversed}"`); // Displaying the reversed word.

// 4. Calculating total price of 3 items
const indomie = 550;
const egg = 250;
const onion = 200;
const totalPrice = indomie + egg + onion; // Calculating the total price
console.log(`The total price of the 3 items is ₦${totalPrice}`); // Displaying the total price

// 5. Calculating average of 5 test scores
const score1 = 56;
const score2 = 79;
const score3 = 86;
const score4 = 20;
const score5 = 32;
const averageScore = (score1 + score2 + score3 + score4 + score5) / 5 // Calculating the average scores
console.log(`The average of the 5 test scores is ${averageScore}.`)  // Displaying the average scores

// 6. Array of my 5 favourite foods
const favouriteFoods = [
    "Banga soup",
    "Indomie",
    "Fried rice",
    "Tuwo Shinkafa",
    "Vegetable soup"
]
console.log(`First Item in FavouriteFoods Array: ${favouriteFoods[0]}`) // Displaying the first item in the array
console.log(`First Item in FavouriteFoods Array: ${favouriteFoods[4]}`) // Displaying the last item in the array


// 7. Adding new items to the favouriteFoods array
favouriteFoods.unshift("Coconut rice") // Adding a new food at the beginning of the array
favouriteFoods.push("Bitterleaf soup") // Adding a new food at the end of the array
console.log("Updated list:", favouriteFoods) // Displaying the updated list

// 8. Creating jssOne array with 10 students
const jssOne = [
    "Kainos",
    "Prince",
    "Prosper",
    "Mary",
    "Ebi",
    "Joy",
    "Fumnanya",
    "Precious",
    "Wealth",
    "Alaire"
];
console.log("jssOne:", jssOne); // Displaying the jssOne array

// 9. Creating jssTwo array with 10 students
const jssTwo = [
    "Chidinma",
    "David",
    "Daniel",
    "Ruqaiyat",
    "Josiah",
    "Bukola",
    "Oguntade",
    "Sheba",
    "Azi",
    "Abdullahi",
];
console.log("jssTwo:", jssTwo); // Displaying the jssTwo array

// 10. Creating jssOne array with 10 students
const jssThree = [
    "Ebube",
    "Oyinyechi",
    "Ariyo",
    "Ifeoluwa",
    "Oluwatomiyin",
    "Bosun",
    "Ibey",
    "Gift",
    "Jennifer",
    "Udo"
];
console.log("jssThree:", jssThree); // Displaying the jssThree array