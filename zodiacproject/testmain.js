// console.clear();

var magicianButtons = document.querySelectorAll('.magician');

//...........................................
//CLICK MAGICIAN BUTTON TO OPEN MAGICIAN CARD
//...........................................

//long way, get every element. These grab button.
var magicianPenny = document.getElementById('penny-button');
var magicianJulia = document.getElementById('julia-button');
var magicianEliot = document.getElementById('eliot-button');
var magicianJosh = document.getElementById('josh-button');
var magicianMartin = document.getElementById('martin-button');
var magicianQuentin = document.getElementById('quentin-button');
var magicianMargo = document.getElementById('margo-button');
var magicianEmber = document.getElementById('ember-button');
var magicianFogg = document.getElementById('fogg-button');
var magicianJane = document.getElementById('jane-button');
var magicianUmber = document.getElementById('umber-button');
var magicianAlice = document.getElementById('alice-button');

//the listeners, these show the sign when you click
magicianPenny.addEventListener('click', function() {
	displayMagician('cap');
}, false);
magicianJulia.addEventListener('click', function() {
	displayMagician('sag');
}, false);
magicianEliot.addEventListener('click', function() {
	displayMagician('sco');
}, false);
magicianJosh.addEventListener('click', function() {
	displayMagician('lib');
}, false);
magicianMartin.addEventListener('click', function() {
	displayMagician('vir');
}, false);
magicianQuentin.addEventListener('click', function() {
	displayMagician('leo');
}, false);
magicianMargo.addEventListener('click', function() {
	displayMagician('can');
}, false);
magicianEmber.addEventListener('click', function() {
	displayMagician('gem');
}, false);
magicianFogg.addEventListener('click', function() {
	displayMagician('tau');
}, false);
magicianJane.addEventListener('click', function() {
	displayMagician('ari');
}, false);
magicianUmber.addEventListener('click', function() {
	displayMagician('pis');
}, false);
magicianAlice.addEventListener('click', function() {
	displayMagician('aqu');
}, false);


//..........................
//CLOSE BUTTON FUNCTIONALITY
//..........................
var closeButtons = document.querySelectorAll('.magician-card-exit');
var allMagicianCards = document.querySelectorAll('.magician-card');


function closeSign(event) {

	event.preventDefault(); //stops the default action of an element from happening
	console.log('close sign');
	console.log(allMagicianCards.length);

	for (var i = 0; i < allMagicianCards.length; i++) {
		console.log(allMagicianCards[i]);

		allMagicianCards[i].hidden = true;
		// selectedMagicianCard.hidden = true;
	}

	document.getElementById('overlay').hidden=true;

}

for (var i = 0; i < closeButtons.length; i++) {
	closeButtons[i].addEventListener('click', closeSign, true);
}

//...................
//AUDIO FUNCTIONALITY
//...................
//make sure to only play current sound, played once. Stop playing when closed and repeated once


//..................
//FORM FUNCTIONALITY
//..................
const form = document.getElementById('dateForm');
var AstroSign = "none";

form.addEventListener('submit',handleFormSubmit, false);

//Get month and day, show feedback message if they did not have a valid date
function handleFormSubmit(event){
	event.preventDefault();

	const inputDate = document.getElementById('birthday');
	const birthday = new Date(inputDate.value);

	const feedbackDate = document.getElementById('feedback');
	if (isNaN(birthday)){
		inputDate.focus();
		inputDate.value='';
		feedbackDate.hidden=false;
	}
	else {
		feedbackDate.hidden=true;
	}

	const month = birthday.getUTCMonth();
	const day = birthday.getUTCDate();

	loadMagician(month, day); 
}
// Collecting month and day. Creating the function for loadMagician for the above function
function loadMagician(month, day){
	var zodiac = assignMagician(month, day);
	displayMagician(zodiac);

}

//assigns month and day to sign
function assignMagician(month, day){
	var selectedMonth = month;
	var selectedDay = day;
	console.log('this is zodiacs day and month');
	console.log(selectedMonth);
	console.log(selectedDay);

	if ((selectedMonth == 11 && selectedDay >= 22) || (selectedMonth == 0 && selectedDay <= 19)) {
			AstroSign = 'cap';
	} else if ((selectedMonth == 10 && selectedDay >= 22) || (selectedMonth == 11 && selectedDay <= 21)) {
		AstroSign = 'sag';
	} else if ((selectedMonth == 9 && selectedDay >= 24) || (selectedMonth == 10 && selectedDay <= 21)) {
		AstroSign = 'sco';
	} else if ((selectedMonth == 8 && selectedDay >= 23) || (selectedMonth == 9 && selectedDay <= 23)) {
		AstroSign = 'lib';
	} else if ((selectedMonth == 7 && selectedDay >= 23) || (selectedMonth == 8 && selectedDay <= 22)) {
		AstroSign = 'vir';
	} else if ((selectedMonth == 6 && selectedDay >= 23) || (selectedMonth == 7 && selectedDay <= 22)) {
		AstroSign = 'leo';
	} else if ((selectedMonth == 5 && selectedDay >= 22) || (selectedMonth == 6 && selectedDay <= 22)) {
		AstroSign = 'can';
	} else if ((selectedMonth == 4 && selectedDay >= 21) || (selectedMonth == 5 && selectedDay <= 21)) {
		AstroSign = 'gem';
	} else if ((selectedMonth == 3 && selectedDay >= 20) || (selectedMonth == 4 && selectedDay <= 20)) {
		AstroSign = 'tau';
	} else if ((selectedMonth == 2 && selectedDay >= 21) || (selectedMonth == 3 && selectedDay <= 19)) {
		AstroSign = 'ari';
	} else if ((selectedMonth == 1 && selectedDay >= 19) || (selectedMonth == 2 && selectedDay <= 20)) {
		AstroSign = 'pis';
	} else if ((selectedMonth == 0 && selectedDay >= 20) || (selectedMonth == 1 && selectedDay <= 18)) {
		AstroSign = 'aqu';
	} else{
		console.log('something went wrong with input');
	}	

	console.log(AstroSign);
	return AstroSign;
}

//display magician
function displayMagician(sign){
stopAllAudio();

	if (sign === 'cap') {
	document.getElementById('magician-penny').hidden=false;
	document.getElementById('overlay').hidden=false;
	} document.getElementById('penny-audio').play();
	else if (sign === 'sag') {
	document.getElementById('magician-julia').hidden=false;
	document.getElementById('overlay').hidden=false;

	} document.getElementById('julia-audio').play();
	else if (sign === 'sco') {
	document.getElementById('magician-eliot').hidden=false;
	document.getElementById('overlay').hidden=false;

	} document.getElementById('eliot-audio').play();
	else if (sign === 'lib') {
	document.getElementById('magician-josh').hidden=false;
	document.getElementById('overlay').hidden=false;

	} document.getElementById('josh-audio').play();
	else if (sign === 'vir') {
	document.getElementById('magician-martin').hidden=false;
	document.getElementById('overlay').hidden=false;

	} document.getElementById('martin-audio').play();
	else if (sign === 'leo') {
	document.getElementById('magician-quentin').hidden=false;
	document.getElementById('overlay').hidden=false;

	} document.getElementById('quentin-audio').play();
	else if (sign === 'can') {
	document.getElementById('magician-margo').hidden=false;
	document.getElementById('overlay').hidden=false;

	} document.getElementById('margo-audio').play();
	else if (sign === 'gem') {
	document.getElementById('magician-ember').hidden=false;
	document.getElementById('overlay').hidden=false;

	} document.getElementById('ember-audio').play();
	else if (sign === 'tau') {
	document.getElementById('magician-fogg').hidden=false;
	document.getElementById('overlay').hidden=false;

	} document.getElementById('fogg-audio').play();
	else if (sign === 'ari') {
	document.getElementById('magician-jane').hidden=false;
	document.getElementById('overlay').hidden=false;

	} document.getElementById('jane-audio').play();
	else if (sign === 'pis') {
	document.getElementById('magician-umber').hidden=false;
	document.getElementById('overlay').hidden=false;
	} document.getElementById('umber-audio').play();
	else if (sign === 'aqu') {
	document.getElementById('magician-alice').hidden=false;
	document.getElementById('overlay').hidden=false;
	} document.getElementById('alice-audio').play();
	else {
		console.log('something went wrong');
	}
}

function stopAllAudio() {
    var audio = document.getElementsByTagName('audio');
    for (i = 0; i < audio.length; i++) {
        audio[i].pause();
    }
}






	

