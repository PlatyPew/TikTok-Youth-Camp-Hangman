import aroundthehouse from "./aroundthehouse";
import beforeandafter from "./beforeandafter";
import eventt from "./event";
import fictionalcharacter from "./fictionalcharacter";
import foodanddrink from "./foodanddrink";
import funanggames from "./funandgames";
import inthekitchen from "./inthekitchen";
import landmark from "./landmark";
import livingthing from "./livingthing";
import movietitle from "./movietitle";
import occupation from "./occupation";
import people from "./people";
import place from "./place";
import thing from "./thing";
import whatareyoudoing from "./whatareyoudoing";

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
    "Movie Title": movietitle,
    Occupation: occupation,
    People: people,
    Place: place,
    Thing: thing,
    "What Are You Doing": whatareyoudoing,
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
