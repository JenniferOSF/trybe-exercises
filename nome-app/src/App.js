import React from 'react'
import './App.css';

const Task = (value) => {
  return (
    <li key="value">{value}</li>
  );
}

const listaDeTarefas = ['Acordar', 'Ler', 'Meditar', 'Caminhar', 'Trabalhar'];

class App extends React.Component {
  render () {
    return (
      <ul>{listaDeTarefas.map(tarefa => Task(tarefa))}</ul>
    );
  }
}

export default App;
