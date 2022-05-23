import aroundthehouse from "./aroundthehouse";
import beforeandafter from "./beforeandafter";
import eventt from "./event";
import fictionalcharacter from "./fictionalcharacter";
import foodanddrink from "./foodanddrink";
import funanggames from "./funandgames";
import inthekitchen from "./inthekitchen";
import landmark from "./landmark";
import livingthing from "./livingthing";
import place from "./place";
import thing from "./thing";

const wordbank = {
    "Around The House": aroundthehouse,
    "Before And After": beforeandafter,
    Event: eventt,
    "Fictional Character": fictionalcharacter,
    "Food And Drink": foodanddrink,
    "Fun And Games": funanggames,
    "In The Kitchen": inthekitchen,
    Landmark: landmark,
    "Living Thing": livingthing,
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
