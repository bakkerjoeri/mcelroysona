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
		"not too not familiar"
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
		"best friend's dad",
		"yadrew druid",
		"cousin",
		"dungeon master",
		"niece",
		"baby",
		"Chilean miner",
		"state bird",
		"developer",
		"nerd",
		"geek",
		"adult"
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
		"Elroy",
		"Clif",
		"Justin",
		"Travis",
		"Griffin",
		"Theresa",
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
		"Klarg"
	];

	taglineChoices = [
		"Kiss your dad square on the lips.",
		"Chase your bliss!",
		"who loves cinnamon toast.",
		"Bliss delight!",
		"COTTON!",
		"and can you be cool for, like, A SECOND?!",
		"and I am holding your hand.",
		"I never have time to be around on podcasts because I'm trapped in this damn boombox.",
		"Juggler",
		"It's pronounced Darlene.",
		"Totinos brand ambassador",
		"and y'all horny for this one.",
		"ABRACAFUCKYOU!",
		"D'you guys want a Yahoo?",
		"Vape 'em if you got 'em.",
		"and I have all your nasty gum.",
		"Point me to the toilet.",
		"👋👋",
		"from toe to tip!",
		"feeeeed meeeee",
		"GREATJOB!",
		"and you won't get those good good Gushie Tapes from me.",
		"Prince of McElroys",
		"Now it's time for Things I Bought At Sheetz 🎶",
		"Evil McElroy twin",
		"on... the Adventure Zone!",
		"Cake boss.",
		"Donde esta los thunder lizards?",
		"Set me free, blast my cache!",
		"I'm buying a shirt with wolves on it.",
		"Unless...",
		"and there's people living inside me.",
		"Penis cake expert",
		"I think dogs should vote!",
		"Buckets!"
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