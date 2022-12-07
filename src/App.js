import React from 'react';
import './App.css';

class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 'Écrivez une question ici',
      reponse: 'Écrivez une reponse ici',
      explication: 'Écrivez une explication ici'
    };
    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    this.handleChangeReponse = this.handleChangeReponse.bind(this);
    this.handleChangeExplication = this.handleChangeExplication.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeQuestion(event) {
    this.setState({question: event.target.value});
  }

  handleChangeReponse(event) {
    this.setState({reponse: event.target.value});
  }

  handleChangeExplication(event) {
    this.setState({explication: event.target.value});
  }

  handleSubmit(event) {
    alert(
      'Le formulaire contient : ' +
      '\n' +
      this.state.question +
      '\n' +
      this.state.reponse +
      '\n' +
      this.state.explication
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Question:
          <textarea value={this.state.question} onChange={this.handleChangeQuestion} />
        </label>
        <br />
        <label>
          Reponse:
          <textarea value={this.state.reponse} onChange={this.handleChangeReponse} />
        </label>
        <br />
        <label>
          Explication:
          <textarea value={this.state.explication} onChange={this.handleChangeExplication} />
        </label>
        <br />
        <input type="submit" value="Créer une carte" />
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Formulaire />
    </div>
  );
}

export default App;