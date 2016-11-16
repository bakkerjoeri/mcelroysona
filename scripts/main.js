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
		"small"
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
		"Yahoo Answers user",
		"horse",
		"ghost"
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
		"Bakula",
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
		"Ray Donovan"
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
		"juggler",
		"It's pronounced Darlene.",
		"Totinos brand ambassador",
		"and y'all horny for this one.",
		"ABRACAFUCKYOU!",
		"D'you guys want a Yahoo?",
		"Vape 'em if you got 'em.",
		"and I have all your nasty gum.",
		"Point me to the toilet.",
		"👋👋"
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

	function renderMcElroysona (descriptorId, typeId, firstNameId, taglineId) {
		hideMcElroysonaCard(function () {
			$(".sibling-descriptor").html(getItemFromListWithId(siblingDescriptorChoices, descriptorId));
			$(".sibling-type").html(getItemFromListWithId(siblingTypeChoices, typeId));
			$(".first-name").html(getItemFromListWithId(firstNameChoices, firstNameId));
			$(".tagline").html(getItemFromListWithId(taglineChoices, taglineId));

			updatePersonaIdentifierInUrlWithIds(descriptorId, typeId, firstNameId, taglineId);
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

	function createMcElroysonaWithIdentifier(identifier) {
		personaIdentifierList = identifier.split("-");
		
		renderMcElroysona(
			getItemFromListWithId(personaIdentifierList[0]),
			getItemFromListWithId(personaIdentifierList[1]),
			getItemFromListWithId(personaIdentifierList[2]),
			getItemFromListWithId(personaIdentifierList[3])
		);
	}

	if (getQueryVariables().mcelroysona) {
		createMcElroysonaWithIdentifier(getQueryVariables().mcelroysona);
	}

	$(".button-generate").click(rollMcElroysona);
});