import React from 'react';

export default class Character extends React.Component {
  render() {
    var character = this.props.character;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Character</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Name</td><td>{character.name}</td></tr>
          {character.race ? ( <tr><td>Race</td><td>{character.race}</td></tr> ) : null}
          {character.socialClass ? ( <tr><td>Social Class</td><td>{character.socialClass}</td></tr> ) : null}
          {
            character.minors ?
              character.minors.map(function(ability, index) {
                return (
                  <tr key={index}>
                    <td>Minor ability</td>
                    <td>{ability}</td>
                  </tr>
                );
              })
            : null
          }
          {
            character.stats ?
                  <tr>
                    <td>Strength</td>
                    <td>{character.stats.strength}</td>
                  </tr>
            : null
          }
          {
            character.stats ?
                  <tr>
                    <td>Intelligence</td>
                    <td>{character.stats.intelligence}</td>
                  </tr>
            : null
          }
          {
            character.stats ?
                  <tr>
                    <td>Wisdom</td>
                    <td>{character.stats.wisdom}</td>
                  </tr>
            : null
          }
          {
            character.stats ?
                  <tr>
                    <td>Constitution</td>
                    <td>{character.stats.constitution}</td>
                  </tr>
            : null
          }
          {
            character.stats ?
                  <tr>
                    <td>Dexterity</td>
                    <td>{character.stats.dexterity}</td>
                  </tr>
            : null
          }
          {
            character.stats ?
                  <tr>
                    <td>Charisma</td>
                    <td>{character.stats.charisma}</td>
                  </tr>
            : null
          }
        </tbody>
      </table>
    );
  }
}
