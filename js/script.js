let currentSubject = 0;

const jumbotron = document.querySelector(".jumbotron");
const startButton = document.getElementById("startBtn");
const titleHeader = document.getElementById("title");
const statementPara = document.getElementById("statement");
const opinie = document.getElementById("opinie");
const optionButtons = document.querySelectorAll(".option");
const selResult = document.getElementById("parties");
const Field = document.getElementById("parties");
var userInput = [];
var statementId = 0;
var select;

/* start van de stemwijzer */

function start() {
    jumbotron.hidden = true;
    statementPara.hidden = false;
    titleHeader.innerText = subjects[0].title;
    opinie.innerText = subjects[0].statement;
    optionButtons.forEach(element => {
        element.addEventListener("click", function () {
            keepProgress(element.value);
        })
    });
}

/* 
Elke keer als er op een bepaalde keuze knop wordt geklikt,
wordt de keuze opgeslagen en gaat hij door naar de volgende statement
*/

function keepProgress(choice) {
    /*
    keuze opslaan in userInput array
    en doorgaan naar volgende statement
    display actuele statement ID
     */
    if (choice != "terug") {
        userInput[currentSubject] = choice;
        currentSubject++;
    }

    if (currentSubject >= subjects.length) {
        return generateCheckboxList(parties, Field);
    }

    titleHeader.innerText = subjects[currentSubject].title;
    opinie.innerText = subjects[currentSubject].statement;
    console.log(userInput);
}

function generateCheckboxList(givenArray, givenField) {
    /*
    display partij namen
    "next" knop die geselecteerde partijen mee neemt
    naar eind resultaat.
    */
    statementPara.hidden = true;
    selResult.hidden = false;

    var checkboxes = "";
    var classLabel = "";

    if (givenArray == subjects) {
        checkboxes = "statementCheckbox";
        classLabel = "statementLabel";
    }

    if (givenArray == parties) {
        checkboxes = "partyCheckbox";
        classLabel = "partyLabel";
    }

    var loopCount = 0;
    givenArray.forEach(object => {
        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.value = loopCount;
        if (givenArray == parties) {
            newCheckbox.dataset.secular = parties[loopCount].secular;
            newCheckbox.dataset.partysize = parties[loopCount].size;
        }

        newCheckbox.setAttribute("class", 'mr-2 ml-1 ${checkboxes}');
        var newLabel = document.createElement("label");
        if (object.title != null) {
            newLabel.innerHTML = object.title;
        }

        if (object.name != null) {
            newLabel.innerHTML = object.name;
        }

        newLabel.setAttribute("class", classLabel);

        var newLine = document.createElement("br");

        givenField.append(newLabel);
        givenField.append(newCheckbox);
        givenField.append(newLine);

        newCheckbox = null;
        loopCount++;
    });

    if (givenArray == parties) {
        var btnSecular = document.createElement("button");
        var partyCheckboxes = document.querySelectorAll(".partyCheckbox");

        btnSecular = select.setAttribute("class", "btn btn-primary");
        btnSecular.innerHTML = "Seculiere partijen";
        btnSecular.onclick = function () {
            partyCheckboxes.forEach(element => {
                if (element.dataset.secular == "true") {
                    element.checked = true;
                }
            });
        }

        var btnSize = document.createElement("button");
        var partyCheckboxes = document.querySelectorAll(".partyCheckbox");
        btnSize.setAttribute("class", "btn btn-primary");
        btnSize.innerHTML = "Selecteer alle grote partijen";
        btnSize.onclick = function () {
            partyCheckboxes.forEach(element => {
                if (element.dataset.partysize != "0") {
                    element.checked = true;
                }
            });
        }

        givenField.append(btnSize);
        givenField.append(btnSecular);
    }
}