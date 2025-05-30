
console.log("logic.js loaded");

class Spell  {
    constructor(spellnumber ,spellname, element, manaCost, category, skillImage){
        this.spellnumber = spellnumber;
        this.spellname = spellname;
        this.element = element;
        this.manaCost = manaCost;
        this.category = category;
        this.skillImage = skillImage;
    }

}



function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	let name1 = ["blightrot",
    "fireball",
    "mindscorch",
    "frostlung",
    "wyrmpox",
    "ashvein",
    "gravebind",
    "hexbane",
    "doomrash",
    "bloodwither",
    "starcough",
    "moondrain",
    "voidcrack",
    "ironblight",
    "cursepox",
    "darkfever",
    "spiritflux",
    "armour",
    "magma spawn",
    "kuma"];

	let name2 = ["divinity", "archkana",
    "isildore",
    "death",
    "the lost",
    "aether",
    "myrrak",
    "valthur",
    "xenorith",
    "quireth",
    "oshvara",
    "drakzul",
    "fenlath",
    "flames",
    "healing",
    "scorching",
    "korveth",
    "iskareth",
    "lumirae",
    "thalorin",
    "despair"];

	var name = capFirst(name1[getRandomInt(0, name1.length)]) + ' of ' + capFirst(name2[getRandomInt(0, name2.length)]);
	return name;

}


let spellindex = [];
let spellno = 0



function createObject(spellno){
        const name =`object${spellno}`;
        spellindex[name] = new Spell(spellno, generateName());
            
        spellindex.push(name);
}


function spellRandom(){
    if(mana > 0){
        let spellno = (spellindex.length + 1);
        createObject(spellno);
        var i = spellindex[`object${spellno}`];
// This line will display random skill name       
        document.getElementById("skill-name").innerHTML=i.spellname;
// This is the animation engage line (hidden class opacity animation)
        document.getElementById("skill-name").classList="skill-animation-on";
// This is the skill stats assigner to p element. needs to be worked at to make it more dynamic
        document.getElementById("skill-desc").innerHTML=`Element: 
        ${i.element}
        Mana cost: ${i.manaCost}
        Category: ${i.category}`;

        document.getElementById("skill-desc").classList="skill-animation-on";
        console.log(i.spellname);
        console.log(i.element);
    } else {
        document.getElementById("skill-name").innerHTML="Not enough Mana.";
        document.getElementById("skill-name").classList="skill-animation-on";
        console.log('not enough mana to proceed');
    }
}





