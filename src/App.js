import React, { Component } from 'react';
import { Container, Header, } from 'semantic-ui-react';
import { Welcome, PersonalInfo, BoardType, BoardPicker, FinPicker, ShowOrder } from './Steps.js';
import { states } from './States.js';
import { StateMachine } from './StateMachine.js';
import  surfboardInventory  from "./surfboardInventory.js"


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentState: states.WELCOME,
      surfer: {},
      answers: []
    };
    this._next = this._next.bind(this);
    this._back = this._back.bind(this); 
    this._saveAnswers = this._saveAnswers.bind(this);
    this.stateMachine = new StateMachine();
}

  componentDidMount(){
    this.setState({surfboardInventory: surfboardInventory});
  }
  
  _saveAnswers(answer) {
    if (this.state.currentState === 'PERSONAL_INFO'){
      let surfer = this.state.surfer;
      this.setState({
        surfer: answer
      });  
    }
    else {
      let answers  = this.state.answers.concat();
      if(this.state.currentState === 'BOARD_TYPE'){
        let filteredSurfboards = Object.keys(surfboardInventory)
                                 .filter((key) => surfboardInventory[key].type == answer.boardType )
                                 .reduce((res, key) => (res[key] = surfboardInventory[key], res), {});
      this.setState({surfboardInventory: filteredSurfboards});
      }
      answers.push(answer);
      this.setState({
        answers: answers
      });  
    }
    
  }


  _next(desiredState) {
    let currentState = this.state.currentState;
    let nextState = this.stateMachine.transitionTo(currentState, desiredState);
    this.setState({
      currentState: nextState
    });
  }

  _back(desiredState) {
    let currentState = this.state.currentState;
    this.setState({
      currentState: this.stateMachine.transitionFrom(currentState, desiredState)
    });
  }

  _currentStep() {
    switch(this.state.currentState) {
      case states.WELCOME:
        return(<Welcome next={this._next}/>);
      case states.PERSONAL_INFO:
        return(<PersonalInfo 
          saveForm={this._saveAnswers}
          back={this._back}
          next={this._next}/>);
      case states.BOARD_TYPE:
        return(<BoardType 
          saveForm={this._saveAnswers}
          back={this._back}
          next={this._next} />);
      case states.BOARD_PICKER:
        return(<BoardPicker 
          saveForm={this._saveAnswers}
          back={this._back}
          next={this._next} />);
      case states.FIN_PICKER:
       return(<FinPicker
         back={this._back}
         next={this._next} />);
      case states.SHOW_ORDER:
        return(<ShowOrder
          answers={this.state.Answers}
          back={this._back}
          next={this._next} />);
      default:
        return(<Welcome next={this._next}/>);
    }
  }

  render() {
    return (
      <div>
        <Container text>
          <Header as='h2'>Board Picker!</Header>
          {this._currentStep()}
        </Container>
      </div>
    );
  }
}

export default App;