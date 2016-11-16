$(document).ready(function () {
	var siblingTypeChoices,
			siblingDescriptorChoices,
			firstNameChoices,
			tagline;

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
		"Glass Shark"
	];

	tagline = [
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
		"Vape 'em if you got 'em."
	];

	function getRandomItemFromList (list) {
		if (list.length > 0) {
			return list[Math.floor(Math.random() * list.length)];
		}

		return "";
	}

	function hideMcElroysona (callback) {
		$(".mcelroysona").slideUp(200, callback);
	}

	function showMcElroysona (callback) {
		$(".mcelroysona").slideDown(400, callback);
	}

	function rollMcElroysona () {
		$(".sibling-descriptor").html(getRandomItemFromList(siblingDescriptorChoices));
		$(".sibling-type").html(getRandomItemFromList(siblingTypeChoices));
		$(".first-name").html(getRandomItemFromList(firstNameChoices));
		$(".tagline").html(getRandomItemFromList(tagline));
	}

	$(".button-generate").click(function () {
		hideMcElroysona(function () {
			rollMcElroysona();
			showMcElroysona();
		});
	});
});