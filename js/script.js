var partieCheck = document.getElementById("partie");
var partiesCheckText = document.createElement("p");
var statementCheck = document.getElementById("statements");
var statementCheckText = document.createElement("p");

//checkboxes checken of dat ze aangevinkt zijn
function ShowPartiesCheck(){
  for(index = 0; index < parties.length; index++){
    var checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = false;

    var partieCheck = document.getElementById("partie");
    var partiesCheckText = document.createElement("p");

    partiesCheckText.innerHTML = parties[index].name;
    partieCheck.appendChild(checkBox);
    partieCheck.appendChild(partiesCheckText); 

    partiesCheckText.className = "text";
    checkBox.className = "checkBox";
  }
}

//berekend de statements voor de partijen voor de extra punten
function ShowStatementsCheck(){
  for(index1 = 0; index1 < subjects.length; index1++){
    var checkBoxStatements = document.createElement("INPUT");
    checkBoxStatements.setAttribute("type", "checkBox");
    checkBoxStatements.checked = false;

    var statementCheck = document.getElementById("statements");
    var statementCheckText = document.createElement("p"); 

    statementCheckText.innerHTML = subjects[index1].statement;
    statementCheck.appendChild(checkBoxStatements);
    statementCheck.appendChild(statementCheckText); 

    statementCheckText.className = "text1";
    checkBoxStatements.className = "checkBoxStatements";
  }
}



//dit was omdat hij niet werkte via de data.js
let partijScore = { 
  "VVD" : 0,
  "CDA" : 0,
  "PVV" : 0,
  "D66" : 0,
  "GroenLinks" : 0,
  "SP" : 0,
  "PvdA" : 0,
  "ChristenUnie" : 0,
  "Partij voor de Dieren" : 0,
  "SGP" : 0,
  "DENK" : 0,
  "Forum voor Democratie" : 0,
  "Lokaal in de Kamer" : 0,
  "OndernemersPartij" : 0,
  "VNL" : 0,
  "Nieuwe Wegen" : 0,
  "De Burger Beweging" : 0,
  "Piratenpartij" : 0,
  "Artikel 1" : 0,
  "Libertarische Partij" : 0,
  "50Plus" : 0,
  "Vrijzinnige Partij" : 0,
  "Libertarische Partij" : 0,
  "Niet Stemmers" : 0,
};



//for (let index = 0; index < parties.length; index++) {
  //parties.name = partijScore[index];
//}


var i = 0;
let anwsers = [];

// hiermee wordt de stemwijzer gestart
function start(){


  document.getElementById("title").innerHTML = subjects[i].title;
  document.getElementById("statement").innerHTML = subjects[i].statement;
  //eens button aanmaken
  var eens = document.createElement("BUTTON");
  eens.innerHTML = "eens";
  eens.setAttribute("id", "eensbutton");
  document.getElementById("grid-container").appendChild(eens);

  //eens button function 
  eens.onclick = function(){
    anwsers[i] = "pro";
    console.log(anwsers);
    i++;
    if (i === subjects.length){
      document.getElementById("title").innerHTML = "U bent klaar!";
      document.getElementById("statement").innerHTML = "klik op de knop: krijg resultaten om uw resultaten op te halen";
      ShowPartiesCheck();
      ShowStatementsCheck();
      eens.remove();
      oneens.remove();
      geenKeus.remove();
      terug.remove();
      overslaan.remove();
      var getResults = document.createElement("BUTTON");
      getResults.innerHTML = "krijg resultaat";
      getResults.setAttribute("id", "getresult");
      document.getElementById("grid-container").appendChild(getResults);
      getResults.onclick = function(){
        berekenEindResultaat();
        getResults.remove();
        document.getElementById("title").innerHTML = "resultaten:";
        document.getElementById("statement").innerHTML = "";
      }
    }
    else {
      document.getElementById("title").innerHTML = subjects[i].title;
    document.getElementById("statement").innerHTML = subjects[i].statement;
    }
  };
//oneens button aanmaken
  var oneens = document.createElement("BUTTON");
  oneens.innerHTML = "oneens";
  oneens.setAttribute("id", "oneensbutton");
  document.getElementById("grid-container").appendChild(oneens);

//oneens function
  oneens.onclick = function(){
    anwsers[i] = "contra";
    console.log(anwsers);
    i++
    if (i === subjects.length){
      document.getElementById("title").innerHTML = "U bent klaar!";
      document.getElementById("statement").innerHTML = "klik op de knop: krijg resultaten om uw resultaten op te halen";
      ShowPartiesCheck();
      ShowStatementsCheck();
      eens.remove();
      oneens.remove();
      geenKeus.remove();
      terug.remove();
      overslaan.remove();
      var getResults = document.createElement("BUTTON");
      getResults.innerHTML = "krijg resultaat";
      getResults.setAttribute("id", "getresult");
      document.getElementById("grid-container").appendChild(getResults);
      getResults.onclick = function(){
        berekenEindResultaat();
        getResults.remove();
        document.getElementById("title").innerHTML = "resultaten:";
        document.getElementById("statement").innerHTML = "";
        
      }
    }
    else {
      document.getElementById("title").innerHTML = subjects[i].title;
    document.getElementById("statement").innerHTML = subjects[i].statement;
    }
  };
//geen mening/geen keus button aanmaken
  var geenKeus = document.createElement("BUTTON");
  geenKeus.innerHTML = "geen keus";
  geenKeus.setAttribute("id", "geenkeusbutton");
  document.getElementById("grid-container").appendChild(geenKeus);

//geen mening/geen keus button function
  geenKeus.onclick = function(){
    anwsers[i] = "geen mening";
    console.log(anwsers);
    i++;
    if (i === subjects.length){
      document.getElementById("title").innerHTML = "U bent klaar!";
      document.getElementById("statement").innerHTML = "klik op de knop: krijg resultaten om uw resultaten op te halen";
      ShowPartiesCheck();
      ShowStatementsCheck();
      eens.remove();
      oneens.remove();
      geenKeus.remove();
      terug.remove();
      overslaan.remove();
      var getResults = document.createElement("BUTTON");
      getResults.innerHTML = "krijg resultaat";
      getResults.setAttribute("id", "getresult");
      document.getElementById("grid-container").appendChild(getResults);
      getResults.onclick = function(){
        berekenEindResultaat();
        getResults.remove();
        document.getElementById("title").innerHTML = "resultaten:";
        document.getElementById("statement").innerHTML = "";
      }
    }
    else {
      document.getElementById("title").innerHTML = subjects[i].title;
    document.getElementById("statement").innerHTML = subjects[i].statement;
    }
    
  };
//overslaan button aanmaken
  var overslaan = document.createElement("BUTTON");
  overslaan.innerHTML = "overslaan";
  overslaan.setAttribute("id", "overslaanbutton");
  document.getElementById("grid-container").appendChild(overslaan);
//overslaan function
  overslaan.onclick = function(){
    anwsers[i] = "overgeslagen";
    console.log(anwsers);
    i++
    if (i === subjects.length){
      document.getElementById("title").innerHTML = "U bent klaar!";
      document.getElementById("statement").innerHTML = "klik op de knop: krijg resultaten om uw resultaten op te halen";
      ShowPartiesCheck();
      ShowStatementsCheck();
      eens.remove();
      oneens.remove();
      geenKeus.remove();
      terug.remove();
      overslaan.remove();
      var getResults = document.createElement("BUTTON");
      getResults.innerHTML = "krijg resultaat";
      getResults.setAttribute("id", "getresult");
      document.getElementById("grid-container").appendChild(getResults);
      getResults.onclick = function(){
        getResults.remove();
        berekenEindResultaat();
        document.getElementById("title").innerHTML = "resultaten:";
        document.getElementById("statement").innerHTML = "";
      }
    }
    document.getElementById("title").innerHTML = subjects[i].title;
    document.getElementById("statement").innerHTML = subjects[i].statement;
  };
//het aanmaken van de terug button en de function die erbij hoort om terug te gaan naar de vorige vraag/of als hij bij de eerste vraag is en op de terug button klik dan gaat hij terug naar het begin van de stemwijzer AKA hij start dan weer opnieuw
  var terug = document.createElement("BUTTON");
  terug.innerHTML = "terug";
  terug.setAttribute("id", "terugbutton");
  document.getElementById("grid-container").appendChild(terug);
  terug.onclick = function(){
    i--;
    if (i < 0){
      document.getElementById("title").innerHTML = "U gaat 30 vragen beantwoorden";
      document.getElementById("statement").innerHTML = "";
      eens.remove(), oneens.remove(), geenKeus.remove(), terug.remove(),  overslaan.remove();
      startButton = document.createElement("BUTTON");
      startButton.innerHTML = "start";
      startButton.setAttribute("id", "startbutton");
      document.getElementById("grid-container").appendChild(startButton);
      startButton.onclick = function (){
        i = 0;
        anwsers = [];
        start();
      }
    }
        document.getElementById("title").innerHTML = subjects[i].title;
        document.getElementById("statement").innerHTML = subjects[i].statement;
  }
    var startButton = document.getElementById("startbutton");
    startButton.remove();

    
}
//brekend de punten van antwoorden van de vragen met de positie van de partij erin (pro, contra) zodat hij de totale punten aan kan geven aan het eind
function berekenEindResultaat() {
  partieCheck.hidden = true;
  statementCheck.hidden= true;
  for(b = 0; b < anwsers.length; b++) {
    for(a=0;a<subjects[b].parties.length;a++){

      if(anwsers[b] == subjects[b].parties[a].position){
        console.log("je bent het eens met " + subjects[b].parties[a].name);
        partijScore[subjects[b].parties[a].name]++
        console.log(partijScore);
        
      }

      for(index = 0; index < parties.length; index++){
        if(parties[index].name == subjects[b].parties[a].name){
          partijScore[subjects[b].parties[a].name]++
       }

      }
    
      
    }
  }
//Hier plaatst hij dan de antwoorden in html met het totale aantal punten
for(var key in partijScore){

  var resultElement = document.createElement("p");
  resultElement.innerHTML = key + ": " + partijScore[key];
  resultElement.setAttribute("id", "resultElement");
  document.getElementById("grid-container").appendChild(resultElement);
  
 
}

}
/*var showPrimair = document.createElement("BUTTON");
      getPrimair.innerHTML = "Laat primaire partijen zien";
      getPrimair.setAttribute("id", "getprimair");
      document.getElementById("grid-container").appendChild(getPrimair);
      getPrimair.onclick = function (){
        getPrimair.remove();
        getPrimairPartij();
      }

function getPrimairPartij(){
  for(b = 0; b < anwsers.length; b++) {
    for(a=0;a<subjects[b].parties.length;a++){
      if (parties[b].secular == false) {
        console.log (parties[b].name)
        
      }
      else if (parties[b].secular == true) {
        
      }
    }
  }
} */
