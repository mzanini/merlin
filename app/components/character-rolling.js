import React from "react";
import ReactDOM from 'react-dom';
import SingleCharacterRolling from "./single-character-rolling"
import MultiCharacterRolling from "./multi-character-rolling"
import settings from 'electron-settings'

document.getElementById("btnSingleCharacter").addEventListener("click", selectSingleCharacter)
document.getElementById("btnMultipleCharacters").addEventListener("click", selectMultipleCharacters)
loadPage()

function loadPage() {
  if(!settings.getSync('racesTablePath') || !settings.getSync('socialClassesTablePath') || !settings.getSync('minorAbilititesTablePath') )
    ReactDOM.render(<NoTablesWarning/>, document.getElementById('main'))
  else
    ReactDOM.render(<SingleCharacterRolling/>, document.getElementById("main"))
}

function NoTablesWarning() {
  return (<div className="alert alert-danger" role="alert"><span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><strong> No tables have been specified!</strong> Please specify them from the Tables menu.</div>)
}

function selectSingleCharacter() {
  document.getElementById("tabSingleCharacter").className = "active";
  document.getElementById("tabMultipleCharacters").className = "";

  if(!settings.getSync('racesTablePath') || !settings.getSync('socialClassesTablePath') || !settings.getSync('minorAbilititesTablePath') )
    ReactDOM.render(<NoTablesWarning/>, document.getElementById("main"))
  else
    ReactDOM.render(<SingleCharacterRolling/>, document.getElementById("main"))
}

function selectMultipleCharacters() {
  document.getElementById("tabSingleCharacter").className = "";
  document.getElementById("tabMultipleCharacters").className = "active";

  if(!settings.getSync('racesTablePath') || !settings.getSync('socialClassesTablePath') || !settings.getSync('minorAbilititesTablePath') )
    ReactDOM.render(<NoTablesWarning/>, document.getElementById("main"))
  else
    ReactDOM.render(<MultiCharacterRolling/>, document.getElementById("main"))
}
