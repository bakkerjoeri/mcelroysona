$(document).ready(function () {
	var siblingTypeChoices,
			siblingDescriptorChoices,
			firstNameChoices,
			taglineChoices;

	siblingDescriptorChoices = [
		"oldest",
		"middlest",
		"sweet",
		"nihilist",
		"dankest",
		"bestest",
		"funnest",
		"funniest",
		"saddest",
		"anxious",
		"simple",
		"simplest",
		"stinky",
		"stanky",
		"stankiest",
		"bounciest",
		"darkest",
		"happy",
		"happiest",
		"thickest",
		"sensual",
		"most sensual",
		"fabulous",
		"most fabulous",
		"densest",
		"sweet",
		"sweetest",
		"sleepiest",
		"soft",
		"softest",
		"good",
		"good good",
		"summer",
		"ridiculous",
		"spookiest",
		"goofy",
		"weird",
		"new best",
		"extremely hairy",
		"tiny",
		"small",
		"giant",
		"regular sized",
		"realest",
		"regular",
		"new",
		"very goofy",
		"very normal",
		"tastiest",
		"very very tasty",
		"supreme",
		"cool",
		"#1",
		"familiar",
		"modren",
		"level 9000",
		"bearded",
		"fastest",
		"shitty",
		"smelly",
		"smelliest",
		"babiest",
		"hungriest",
		"not too familiar", 
		"not too not familiar",
		"frosty",
		"friendliest",
		"undead",
		"evil",
		"long lost",
		"tipsy",
		"drunk",
		"blazed",
		"dang",
		"cute",
		"toasty",
		"tanned",
		"spooky",
		"one armed",
		"ripped",
		"sticky",
		"smooth",
		"juicy",
		"spectral",
		"minor",
		"wispiest",
		"magic",
		"dancing",
		"funky",
		"douchey",
		"douchiest",
		"best",
		"worst",
		"fancy",
		"hungee",
		"grifty",
		"saturated",
		"mediocre",
		"rare",
		"basketball playing",
		"bigtime",
		"garbage",
		"poor",
		"fun",
		"knee high to a frog",
		"precious",
		"trash",
		"dangerous",
		"future",
		"other",
		"nasty",
		"gaslit",
		"loose and easy",
		"dictator",
		"incompetent"
	];


	siblingTypeChoices = [
		"baby brother",
		"baby sister",
		"brother",
		"sister",
		"dad",
		"mom",
		"parent",
		"sibling",
		"boy",
		"girl",
		"gentleman",
		"lady",
		"haunted doll",
		"uncle",
		"aunt",
		"grand mama",
		"grand papa",
		"friend",
		"Yahoo! Answers user",
		"horse",
		"ghost",
		"friend",
		"daddy",
		"yadrew druid",
		"cousin",
		"dungeon master",
		"niece",
		"baby",
		"Chilean miner",
		"state bird",
		"corpse",
		"nerd",
		"geek",
		"adult",
		"champion",
		"gator",
		"twin",
		"juggalo",
		"mall cop",
		"juggler",
		"pony",
		"dog",
		"boy detective",
		"radio sweetheart",
		"shopkeeper",
		"robot",
		"orb",
		"druid",
		"wizard",
		"sock wizard",
		"cleric",
		"warrior",
		"gerblin",
		"thief",
		"bus driver",
		"cab driver",
		"king",
		"queen",
		"anxiety gator",
		"unicorn",
		"patronus",
		"cable guy",
		"physician",
		"iron man",
		"Alf enthusiast",
		"DJ",
		"president",
		"dread pirate",
		"cowboy",
		"lover",
		"Candlenights wizard",
		"cult leader",
		"carboy",
		"stepdad",
		"stepmom",
		"warlock",
		"deals warlock",
		"magician",
		"Munch Squad captain",
		"Munch Squad scout",
		"boyscout",
		"Pokémon",
		"ghost dad",
		"sex wolf",
		"wedding DJ",
		"donkey",
		"lawyer",
		"meemaw",
		"peepaw",
		"child",
		"hulk",
		"boy mayor",
		"mayor",
		"Applebee's server",
		"pisskid",
		"ratbag",
		"monster",
		"monstrosity",
		"dolphin jockey",
		"cop",
		"skeleton",
		"sock detective",
		"warrior cat",
		"cat",
		"chinchilla",
		"sexpert",
		"athlete",
		"craft beer enthusiast",
		"guestspert",
		"camp councelor"
	];

	firstNameChoices = [
		"Ditto",
		"Jerry",
		"Clint",
		"Dan",
		"Roy",
		"Susan",
		"Ron",
		"Rory",
		"Cassie",
		"Chaz",
		"Pam",
		"Debra",
		"Dennis",
		"Cliff",
		"Justin",
		"Travis",
		"Griffin",
		"Teresa",
		"Carly Rae",
		"Scott",
		"Scott Bakula",
		"Niki",
		"Olivia",
		"Debby",
		"Aspen",
		"Joeri",
		"Casey",
		"Dick",
		"Jenna",
		"Shaq",
		"Mac",
		"Linda",
		"Linsey",
		"Lin",
		"Miranda",
		"Lin-Manuel",
		"Goof",
		"Hoops",
		"Lauren",
		"Mady",
		"Cameron",
		"Jenaya",
		"Glass Shark",
		"Peepums",
		"Ray Donovan",
		"Vicki",
		"Final Pam",
		"Ja'am",
		"Bart",
		"Garfield",
		"Zoe",
		"Drew",
		"Rebeccah",
		"Sonic the",
		"Yiffin",
		"Screech",
		"Danzig",
		"J.R.R.",
		"Big",
		"Taako",
		"Merle",
		"Magnus",
		"Barry",
		"Klarg",
		"Steven",
		"Jack",
		"Keanu",
		"Sting",
		"Kitsune",
		"Paul",
		"Blart",
		"Toke",
		"Sydnee",
		"Rachel",
		"Jesse",
		"Jordan",
		"Angus",
		"George R.R.",
		"Spanky",
		"Dwight",
		"Boo",
		"Garyl",
		"Busto",
		"Jistin",
		"Torsey",
		"Noah",
		"Ben \"the Axeman\"",
		"Waluigi",
		"Reggie Fils",
		"Miyamoto",
		"Dan",
		"Gilbert",
		"Druncle",
		"Ira Wray",
		"Morgan",
		"Jacob",
		"Dr. Love",
		"Dr.",
		"Jeffrey",
		"Fergie",
		"Curtis",
		"Magic Brian",
		"Nick",
		"Stephen",
		"Amelie",
		"Shnowden",
		"Mackenzie",
		"Tristan the Marine",
		"Gushie",
		"Dunkey",
		"Nermal",
		"Tit Liquid",
		"Chase?",
		"John",
		"Charlie",
		"BeBe",
		"Ron Don",
		"Arnold",
		"Riley",
		"Caila-001",
		"Bobby",
		"Troutleap",
		"Sports",
		"Kevin",
		"Jake",
		"Amir",
		"McCheese"
	];

	taglineChoices = [
		"Kiss your dad square on the lips.",
		"Chase your bliss!",
		"Welcome to the 'lympo's, boys.",
		"Bliss delight!",
		"COTTON!",
		"and can you be cool for, like, A SECOND?!",
		"and I am holding your hand.",
		"I never have time to be around on podcasts because I'm trapped in this damn boombox.",
		"Woopwoop!",
		"It's pronounced Darlene.",
		"Totino's brand ambassador",
		"and y'all horny for this one.",
		"ABRACAFUCKYOU!",
		"D'you guys want a Yahoo?",
		"Vape 'em if you got 'em.",
		"and I have all your nastygum.",
		"Point me to the toilet.",
		"👋👋",
		"from toe to tip!",
		"feeeeed meeeee",
		"GREATJOB!",
		"and you won't get those good good Gushie Tapes from me.",
		"Prince of McElroys",
		"Now it's time for Things I Bought At Sheetz 🎶",
		"I'm good out here.",
		"on... the Adventure Zone!",
		"Cake boss.",
		"Donde esta los thunder lizards?",
		"Set me free, blast my cache!",
		"I'm buying a shirt with wolves on it.",
		"Unless...",
		"and there's people living inside me.",
		"Penis cake expert",
		"I think dogs should vote!",
		"Buckets!",
		"Is this your first time at Denny's?",
		"Where all your dreams come true; got a deal for you!",
		"... a REAL sword? Eeaaaaghhh",
		"Where's the beef?!",
		"Watch me do some wet stunts.",
		"Check out these GLISTENING FISH LIFTERS",
		"What's up, you cool baby?",
		"Forget a gun. This tactical flashlight can blind a bear!",
		"Chin up, motherfuckers!",
		"and I put jelly on it.",
		"Devourer of worlds",
		"I demand recompense.",
		"All aboard the SS Fart Touch!",
		"Who wants to know?",
		"Freak in the Bedroll",
		"But my friends call me Jimmy Cleanears.",
		"... in the Japanese style.",
		"Get it?!",
		"Pack your bags and move away",
		"when you're ready.",
		"I am inside your pocket; you have enough money to buy my DVD.",
		"Get these feeners clean.",
		"Whoopsadoodle!",
		"Did you hear the good news about Robot Jesus?",
		"Noodle up you unfunny fucks.",
		"The Man with the Flan Plan",
		"I in dat bad dahk wadah",
		"I'm speaking to you through the equestriverse.",
		"and I'm here for the right reasons.",
		"No middle sliders!",
		"Please eat my nasty space gum.",
		"Am I good?",
		"Should you choose to forgo your individual rooms, please use this key to get nakee.",
		"your friendly Applebee's server.",
		"Chomping your flavor",
		"and I hate you, Ron.",
		"Sorry, something's gone wrong.",
		"N'aw, beans.",
		"It's a Candlenights miracle! 🕯🌙",
		"but I'm secretly three kids stacked up in a raincoat.",
		"and I'm even a republican!",
		"FUCKED UP on pasta.",
		"emerging from my hole.",
		"What's up, Moon? I failed.",
		"Ready to go chin deep?",
		"Let's roll initiative.",
		"harbinger of chaos."
	];

	function getItemFromListWithId (list, id) {
		if (list[id]) {
			return list[id];
		}

		return getRandomItemFromList(list);
	}

	function getRandomItemFromList (list) {
		if (list.length > 0) {
			return list[Math.floor(Math.random() * list.length)];
		}

		return "";
	}

	function getRandomIndexForList (list) {
		return Math.floor(Math.random() * list.length);
	}

	function hideMcElroysonaCard (callback) {
		$(".mcelroysona").slideUp(200, callback);
	}

	function showMcElroysonaCard (callback) {
		$(".mcelroysona").slideDown(300, callback);
	}

	function renderMcElroysona (descriptorId, typeId, firstNameId, taglineId, pushNewState) {
		if (pushNewState === undefined) {
			pushNewState = true;
		}

		hideMcElroysonaCard(function () {
			$(".sibling-descriptor").html(getItemFromListWithId(siblingDescriptorChoices, descriptorId));
			$(".sibling-type").html(getItemFromListWithId(siblingTypeChoices, typeId));
			$(".first-name").html(getItemFromListWithId(firstNameChoices, firstNameId));
			$(".tagline").html(getItemFromListWithId(taglineChoices, taglineId));

			if (pushNewState) {
				updatePersonaIdentifierInUrlWithIds(descriptorId, typeId, firstNameId, taglineId, pushNewState);
			}
	
			showMcElroysonaCard();
		});
	}

	function updatePersonaIdentifierInUrlWithIds(descriptorId, typeId, firstNameId, taglineId) {
		var personaIdentifierQuery = "?mcelroysona=" + descriptorId + "-" + typeId + "-" + firstNameId + "-" + taglineId;
		window.history.pushState({}, getItemFromListWithId(firstNameId), personaIdentifierQuery);
	}

	function rollMcElroysona () {
		renderMcElroysona(
			getRandomIndexForList(siblingDescriptorChoices),
			getRandomIndexForList(siblingTypeChoices),
			getRandomIndexForList(firstNameChoices),
			getRandomIndexForList(taglineChoices)
		);
	}

	function getQueryVariables () {
    var variables = [], 
    		hash, 
    		i, 
    		hashes;

    hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (i = 0; i < hashes.length; i += 1) {
        hash = hashes[i].split("=");
        variables.push(hash[0]);
        variables[hash[0]] = hash[1];
    }

    return variables;
	}

	function createMcElroysonaWithIdentifier(identifier, pushNewState) {
		personaIdentifierList = identifier.split("-");
		
		renderMcElroysona(
			personaIdentifierList[0],
			personaIdentifierList[1],
			personaIdentifierList[2],
			personaIdentifierList[3],
			pushNewState
		);
	}

	function createMcElroysonaIfPersonaIdentifierIsFound () {
		if (getQueryVariables().mcelroysona) {
			createMcElroysonaWithIdentifier(getQueryVariables().mcelroysona, false);
		}
	}

	createMcElroysonaIfPersonaIdentifierIsFound();

	$(".button-generate").click(rollMcElroysona);

	window.onpopstate = function () {
		createMcElroysonaIfPersonaIdentifierIsFound();
	}
});