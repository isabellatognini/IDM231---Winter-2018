
//Magician character element buttons (use these for clicking)
var pennyEl = document.getElementById('penny-button');
var juliaEl = document.getElementById('julia-button');
var eliotEl = document.getElementById('eliot-button');
var joshEl = document.getElementById('josh-button');
var martinEl = document.getElementById('martin-button');
var quentinEl = document.getElementById('quentin-button');
var margoEl = document.getElementById('margo-button');
var emberEl = document.getElementById('ember-button');
var foggEl = document.getElementById('fogg-button');
var janeEl = document.getElementById('jane-button');
var umberEl = document.getElementById('umber-button');
var aliceEl = document.getElementById('alice-button');
var resultsContainerEl = document.getElementById('magician-card');
var resultsArray = resultsContainerEl.children //??
var exitButton = document.getElementsByClassName('magician-card-exit');

console.log(resultsArray);

//Functional buttons, this is where user clicks and it displays the card
pennyEl.addEventListener('click', function() {displayResults('Penny Adiyodi');});
juliaEl.addEventListener('click', function() {displayResults('Julia Wicker');});
eliotEl.addEventListener('click', function() {displayResults('Eliot Waugh');});
joshEl.addEventListener('click', function() {displayResults('Josh Hoberman');});
martinEl.addEventListener('click', function() {displayResults('Martin Chatwin');});
quentinEl.addEventListener('click', function() {displayResults('Quentin Coldwater');});
margoEl.addEventListener('click', function() {displayResults('Margo Hanson');});
emberEl.addEventListener('click', function() {displayResults('Ember');});
foggEl.addEventListener('click', function() {displayResults('Dean Fogg');});
janeEl.addEventListener('click', function() {displayResults('Jane Chatwin');});
umberEl.addEventListener('click', function() {displayResults('Umber');});
aliceEl.addEventListener('click', function() {displayResults('Alice Quinn');});

//exit button functionality. click X to exit
for (var i=0; i < exitButton.length; i++) {
    exitButton[i].addEventListener('click', function() {
        stopAllAudio();
        clearDisplay();
    });
}


function calZodiac() {
    birthDay = new Date(document.getElementById('birthday').value);

    var whichYear = birthDay.getUTCFullYear();
    var whichMonth = birthDay.getUTCMonth();
    var whichDayOfMonth = birthDay.getUTCDate();
    whichMonth ++;
    whichDayOfMonth ++;

    var magicianCharacter;

if ((whichMonth === 11 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
		magicianCharacter = 'Penny Adiyodi';
	} else if ((whichMonth === 10 && whichDayOfMonth >= 22) || (whichMonth === 12 && whichDayOfMonth <= 21)) {
        magicianCharacter = 'Julia Wicker';
    } else if ((whichMonth === 9 && whichDayOfMonth >= 24) || (whichMonth === 11 && whichDayOfMonth <= 21)) {
        magicianCharacter = 'Eliot Waugh';
    } else if ((whichMonth === 8 && whichDayOfMonth >= 23) || (whichMonth === 10 && whichDayOfMonth <= 23)) {
        magicianCharacter = 'Josh Hoberman';
    } else if ((whichMonth === 7 && whichDayOfMonth >= 23) || (whichMonth === 9 && whichDayOfMonth <= 22)) {
        magicianCharacter = 'Martin Chatwin';
    } else if ((whichMonth === 6 && whichDayOfMonth >= 23) || (whichMonth === 8 && whichDayOfMonth <= 22)) {
        magicianCharacter = 'Quentin Coldwater';
    } else if ((whichMonth === 5 && whichDayOfMonth >= 22) || (whichMonth === 7 && whichDayOfMonth <= 22)) {
        magicianCharacter = 'Margo Hanson';
    } else if ((whichMonth === 4 && whichDayOfMonth >= 21) || (whichMonth === 6 && whichDayOfMonth <= 21)) {
        magicianCharacter = 'Ember';
    } else if ((whichMonth === 3 && whichDayOfMonth >= 20) || (whichMonth === 5 && whichDayOfMonth <= 20)) {
        magicianCharacter = 'Dean Fogg';
    } else if ((whichMonth === 2 && whichDayOfMonth >= 21) || (whichMonth === 4 && whichDayOfMonth <= 19)) {
        magicianCharacter = 'Jane Chatwin';
    } else if ((whichMonth === 1 && whichDayOfMonth >= 19) || (whichMonth === 3 && whichDayOfMonth <= 20)) {
        magicianCharacter = 'Umber';
    } else if ((whichMonth === 0 && whichDayOfMonth >= 20) || (whichMonth === 2 && whichDayOfMonth <= 18)) {
        magicianCharacter = 'Alice Quinn';
    }

displayResults (magicianCharacter);
return false;
}

//1000 miliseconds. will execute after the time
function timerHide(index) {
    setTimeout(function() {
        console.log('timeIndex', index)
        if(index!==activeCharacterId){
            resultsArray[index].classList.remove('display');
        }
    }, 1000)
}

//null or underfined??
var activeCharacterID = null;

function displayResults(magicianCharacter) {

    stopAllAudio();

    console.log('displayResults()');
    var i=0;
    for (var i=0; i<resultsArray.length; i++)
        timerHide(i)
}

//results Array. 1st-12th on the list of names above 
if(magicianCharacter === 'Penny Adiyodi') {
    resultsArray[1].classList.add('display');
    resultsArray[1].classList.add('stack');
    setTimeout (function() {
        resultsArray[1].classList.remove('stack');
        console.log('remove stack class'); 
    }, 1000);
    activeCharacterId = 1;
    document.getElementById('penny-audio').play();
}else if (magicianCharacter === 'Julia Wicker') {
    resultsArray[2].classList.add('display');
    resultsArray[2].classList.add('stack');
    setTimeout(function() {
        resultsArray[2].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId= 2;
    document.getElementById('julia-audio').play();
} else if (magicianCharacter === 'Eliot Waugh') {
    resultsArray[3].classList.add('display');
    resultsArray[3].classList.add('stack');
    setTimeout(function() {
        resultsArray[3].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 3;
    document.getElementById('eliot-audio').play();
} else if (officeCharacter === 'Josh Hoberman') {
    resultsArray[4].classList.add('display');
    resultsArray[4].classList.add('stack');
    setTimeout(function() {
        resultsArray[4].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 4;
    document.getElementById('josh-audio').play();
} else if (magicianCharacter === 'Martin Chatwin') {
    resultsArray[5].classList.add('display');
    resultsArray[5].classList.add('stack');
    setTimeout(function() {
        resultsArray[5].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 5;
    document.getElementById('martin-audio').play();
} else if (magicianCharacter === 'Quentin Coldwater') {
    resultsArray[6].classList.add('display');
    resultsArray[6].classList.add('stack');
    setTimeout(function() {
        resultsArray[6].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 6;
    document.getElementById('quentin-audio').play();
} else if (magicianCharacter === 'Margo Hanson') {
    resultsArray[7].classList.add('display');
    resultsArray[7].classList.add('stack');
    setTimeout(function() {
        resultsArray[7].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 7;
    document.getElementById('margo-audio').play();
 } else if (magicianCharacter === 'Ember') {
    resultsArray[8].classList.add('display');
    resultsArray[8].classList.add('stack');
    setTimeout(function() {
        resultsArray[8].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 8;
    document.getElementById('ember-audio').play();
} else if (magicianCharacter === 'Dean Fogg') {
    resultsArray[9].classList.add('display');
    resultsArray[9].classList.add('stack');
    setTimeout(function() {
        resultsArray[9].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 9;
    document.getElementById('fogg-audio').play();
 } else if (magicianCharacter === 'Jane Chatwin') {
    resultsArray[10].classList.add('display');
    resultsArray[10].classList.add('stack');
    setTimeout(function() {
        resultsArray[10].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 10;
    document.getElementById('jane-audio').play();
} else if (magicianCharacter === 'Umber') {
    resultsArray[11].classList.add('display');
    resultsArray[11].classList.add('stack');
    setTimeout(function() {
        resultsArray[11].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 11;
    document.getElementById('umber-audio').play();
} else if (magicianCharacter === 'Alice Quinn') {
    resultsArray[12].classList.add('display');
    resultsArray[12].classList.add('stack');
    setTimeout(function() {
        resultsArray[12].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 12;
    document.getElementById('alice-audio').play();
 } else {
    resultsArray[0].classList.add('display');
    resultsArray[0].classList.add('stack');
    setTimeout(function() {
        resultsArray[0].classList.remove('stack');
        console.log('remove stack class');
    }, 1000);
    activeCharacterId = 0;


function stopAllAudio() {
    var audio = document.getElementsByTagName('audio');
    for (i=o; i <audio.length; i++) {
        audio[i].pause();
    }
}

function clearDisplay() {
    for (var i = 0; i < resultsArray.length; i++) {
        resultsArray[i].classList.remove('display');
    }}
}

// const form = document.forms['myForms']
// function handleFormSubmit (event) {
// 	event.preventDefault();
// 	const inputDate = document.getElementById('date');
// 	const myDate = inputDate.value;

// 	console.log('Form Submitted', event)

// }

// form.addEventListener('submit', 
// 	handleFormSubmit, false)

// console.log(resultsArray);

// // pretty sure not entering displayresults correctly....
// pennyEl.addEventListener('click', function() {
//     displayResults('William Penny Adiyodi');
// });

// juliaEl.addEventListener('click', function() {
//     displayResults('Julia Wicker');
// });

// eliotEl.addEventListener('click', function() {
//     displayResults('Eliot Waugh');
// });

// joshEl.addEventListener('click', function() {
//     displayResults('Josh Hoberman');
// });

// martinEl.addEventListener('click', function() {
//     displayResults('Martin Chatwin');
// });

// quentinEl.addEventListener('click', function() {
//     displayResults('Quentin Coldwater');
// });

// margoEl.addEventListener('click', function() {
//     displayResults('Margo Hanson');
// });

// emberEl.addEventListener('click', function() {
//     displayResults('Ember');
// });

// foggEl.addEventListener('click', function() {
//     displayResults('Dean Fogg');
// });

// janeEl.addEventListener('click', function() {
//     displayResults('Jane Chatwin');
// });

// umberEl.addEventListener('click', function() {
//     displayResults('Umber');
// });

// aliceEl.addEventListener('click', function() {
//     displayResults('Alice Quinn');
// });

// for (var i = 0; i < exitButton.length; i++) {
//     exitButton[i].addEventListener('click', function() {
//         stopAllAudio();
//         clearDisplay();
//     });
// }
