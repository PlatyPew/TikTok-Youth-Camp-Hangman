import aroundthehouse from "./aroundthehouse";
import funanggames from "./funandgames";
import place from "./place";
import thing from "./thing";

const wordbank = {
    "Around The House": aroundthehouse,
    "Fun And Games": funanggames,
    Place: place,
    Thing: thing,
};

// Get random key in wordbank
const getRandomCategory = () => {
    return Object.keys(wordbank)[Math.floor(Math.random() * Object.keys(wordbank).length)];
};

// Get random phrase from category
const getRandomPhrase = (category) => {
    const phrases = wordbank[category];
    return phrases[Math.floor(Math.random() * phrases.length)];
};

export { getRandomCategory, getRandomPhrase };
