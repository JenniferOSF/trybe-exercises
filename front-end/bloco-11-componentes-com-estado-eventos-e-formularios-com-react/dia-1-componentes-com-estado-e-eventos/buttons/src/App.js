import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree(this);
  
    this.state = {
      clickOne: 0,
      clickTwo: 0,
      clickThree: 0
    }
  }

  handleClickOne() {
    this.setState((accountant) => ({
      clickOne: accountant.clickOne + 1,
    }));
  }

  handleClickTwo() {
    this.setState((accountant) =>({
      clickTwo: accountant.clickTwo + 1,
    }));
  } 

  handleClickThree() {
    this.setState((accountant) => ({
      clickThree: accountant.clickThree + 1,
    }));
  } 

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickOne, clickTwo, clickThree } = this.state;
    return(
      <div>
        <button 
          onClick={ this.handleClickOne }
          style={{ backgroundColor: this.getButtonColor(clickOne) }}>
            Botão 1 | Count={ clickOne }</button>;
        <button 
          onClick={ this.handleClickTwo}
          style={{ backgroundColor: this.getButtonColor(clickTwo) }}>
            Botão 2 | Count={ clickTwo }</button>;
        <button 
          onClick={ this.handleClickThree }
          style={{ backgroundColor: this.getButtonColor(clickThree) }}>
            Botão 3 | Count={ clickThree }</button>;
      </div>
    );
  }
}

export default App;
