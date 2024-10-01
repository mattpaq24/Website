let hintModal;
let instructionText;
let oddEvenStatus;

let hintStatus;
let relevantImage;

let stateList = [];
let currentStep = 1;
let diagrams = ['img/img/Fox1.svg',
    'img/img/Fox2.svg',
    'img/img/Fox3.svg',
    'img/img/Fox4.svg',
    'img/img/Fox5.svg',
    'img/img/Fox6.svg',
    'img/img/Fox7.svg'];
stateList[0] = document.getElementById('splash');
stateList[1] = document.getElementById('journey');
stateList[2] = document.getElementById('choose');
stateList[3] = document.getElementById('finish');


clearAll();
stateList[0].style.display = '';


//Turns off toggle
const bsCollapse = new bootstrap.Collapse('#collapseWidthExample', {
    toggle: false
})

function updateStepInfo() {
    $('#counter').text(currentStep + '/' + diagrams.length);
    $('#instructText').text(instructionText);
    let percent = (currentStep / diagrams.length) * 100;
    $('#progressBar').attr('style', 'width:' + percent + '%;');
}


//Runs after collapsable is hidden
$('#collapseWidthExample').on('hidden.bs.collapse', function () {
    updateStepInfo();
    //creates hint prompt, appends it
    hintModal = $("<div class='hinty container w-100 align-items-center d-flex justify-content-center bg-dark rounded' style='min-height: 250px; width: 250px'><div class='row w-100'><h6 class='fw-normal text-light'>Stuck?</h5><div class='p-1'/><button id ='btnHint' class='mx-auto btn btn-sm btn-outline-light' type='button' id='Hint'onclick='btnHintF()'><i class='bi bi-eye'></i>Show</button></div></div>");
    $('#putThingsHere').append(hintModal);
}).on('show.bs.collapse', function () {
    //Updates header info
    updateStepInfo();
    //When initialized, hint prompt doesn't exist yet.
    if (hintModal) {
        hintModal.remove();
    }
});

//BUTTONS
function btnStartF() {
    clearAll();
    document.getElementById('choose').style.display = '';
}

function btnEvenStart() {
    oddEvenStatus = 'Even';
    relevantImage = diagrams[currentStep - 1];
    clearAll();
    document.getElementById('journey').style.display = '';
    document.getElementById('counter').innerText = currentStep + '/' + diagrams.length;

    updateJourney();

}

function btnOddStart() {
    oddEvenStatus = 'Odd';
    relevantImage = diagrams[currentStep - 1];
    clearAll();
    document.getElementById('journey').style.display = '';
    document.getElementById('counter').innerText = currentStep + '/' + diagrams.length;


    updateJourney();
}

function btnNextF() {
    $('#putThingsHere').css('background-image', 'none');
    currentStep++;
    relevantImage = diagrams[currentStep - 1];
    updateJourney();
    if (currentStep === diagrams.length + 1) {
        document.getElementById('Next').innerText = 'Finish';
        document.getElementById('Next').setAttribute('onclick', btnFinishF());
        $('#Next').removeClass('btn-dark');
        $('#Next').addClass('btn-primary');
    }
}

function btnHintF() {
    relevantImage = diagrams[currentStep - 1];

    $('.hinty').hide("fast", function () { $('.hinty').remove(); });
    $('#putThingsHere').css({
        'background-image': "url(\'" + relevantImage + "\')", "background-size": "contain", "background-repeat": "no-repeat", "background-position": "center"
    });
    hintStatus = true;
}

function btnFinishF() {
    clearAll();
    document.getElementById('finish').style.display = '';
}












function clearAll() {
    for (let i = 0; i < stateList.length; i++) {
        stateList[i].style.display = 'none';
    }
}

function updateJourney() {


    if (oddEvenStatus === 'Odd') {  //if user claims odd set.
        if (currentStep % 2 == 1) {  //If current step is Odd
            instructionText = 'Show this fold to your partner';
            //SHOW IMAGE, HIDE HINT BTN
            $('#cardImage').attr('src', relevantImage);
            bsCollapse.show();  //Show image
        } else {    //Current Step is even
            instructionText = 'Watch your partner make this fold';
            bsCollapse.hide();  //Hide image
        }
    }
    if (oddEvenStatus === "Even") {

        if (currentStep % 2 == 1) {  //If current step is Odd
            if (currentStep == 1) {
                updateStepInfo();
                justPrintsModal();
            }
            instructionText = 'Watch your partner make this fold';

            bsCollapse.hide();  //Hide image

        } else {    //Current Step is even
            instructionText = 'Show this fold to your partner';
            //SHOW IMAGE, HIDE HINT BTN
            $('#cardImage').attr('src', relevantImage);
            bsCollapse.show();  //Show image
        }


    }
}



//VIS -> hint




function btnExit() {
    location.reload();
}

function btnHome() {
    location.reload();
}

function showHint() {
    updateStepInfo();
    //creates hint prompt, appends it
    $('#cardImage').attr('src', relevantImage);

    hintModal = $("<div class='hinty container w-100 align-items-center d-flex justify-content-center bg-dark rounded' style='min-height: 250px; width: 250px'><div class='row w-100'><h6 class='fw-normal text-light'>Stuck?</h5><div class='p-1'/><button id ='btnHint' class='mx-auto btn btn-sm btn-outline-light' type='button' id='Hint'onclick='btnHintF()'><i class='bi bi-eye'></i>Show</button></div></div>");
    $('#putThingsHere').append(hintModal);
}

function justPrintsModal() {
    instructionText = 'Watch your partner make this fold';
    $('#instructText').text(instructionText);


    hintModal = $("<div class='hinty container w-100 align-items-center d-flex justify-content-center bg-dark rounded' style='min-height: 250px; width: 250px'><div class='row w-100'><h6 class='fw-normal text-light'>Stuck?</h5><div class='p-1'/><button id ='btnHint' class='mx-auto btn btn-sm btn-outline-light' type='button' id='Hint'onclick='btnHintF()'><i class='bi bi-eye'></i>Show</button></div></div>");
    $('#putThingsHere').append(hintModal);
}








