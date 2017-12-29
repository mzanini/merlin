
document.getElementById("btnPercentile").addEventListener("click", selectPercentile);
document.getElementById("btnThousand").addEventListener("click", selectThousand);
document.getElementById("btnVariable").addEventListener("click", selectVariable);
document.getElementById("btnClear").addEventListener("click", clearResults);
document.getElementById("roll_dice").addEventListener("click", rollPercentage);

function getRadioButtonValue(radios) {
  for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked)
            return radios[i].value;
  }
}

function getNumberFromTextInput(textInputElement) {
  if(textInputElement.value === "")
    return 0;
  else
    return parseInt( textInputElement.value );
}

function selectPercentile() {
  document.getElementById("tabPercentile").className = "active";
  document.getElementById("tabThousand").className = "";
  document.getElementById("tabVariable").className = "";

  $("#rolling_options").addClass("hidden");
}

function selectThousand() {
  document.getElementById("tabPercentile").className = "";
  document.getElementById("tabThousand").className = "active";
  document.getElementById("tabVariable").className = "";

  $("#rolling_options").addClass("hidden");
}

function selectVariable() {
  document.getElementById("tabPercentile").className = "";
  document.getElementById("tabThousand").className = "";
  document.getElementById("tabVariable").className = "active";

  $("#rolling_options").removeClass("hidden");
}

function clearResults() {
  var node = document.getElementById("dice_result");
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

function roll(dieType) {
  if(document.getElementById("tabPercentile").className === "active") {
    return Math.floor((Math.random() * 100) + 1);
  }
  else if(document.getElementById("tabThousand").className == "active") {
    return Math.floor((Math.random() * 1000) + 1);
  }
  else if(document.getElementById("tabVariable").className == "active") {
    var selectElement = document.getElementsByName("die_faces")[0];
    var die_faces = getNumberFromTextInput( selectElement.options[selectElement.selectedIndex] );
    var die_adjust = getNumberFromTextInput( document.getElementsByName("die_adjust")[0] );
    return Math.floor((Math.random() * die_faces) + 1) + die_adjust;
  }
}

function rollPercentage() {
  var rolls = getNumberFromTextInput( document.getElementsByName("number_of")[0] );
  var diceRollingResult = document.createElement('ul');
  diceRollingResult.style.listStyleType = "none";
  for(var i = 0; i < rolls; i++) {
    var newRoll = document.createElement("li");
    var rollValue = roll( getRadioButtonValue(document.getElementsByName("die_type")) );
    newRoll.appendChild(document.createTextNode(rollValue));
    diceRollingResult.appendChild(newRoll);
  }

  document.getElementById("dice_result").appendChild(diceRollingResult);
}
