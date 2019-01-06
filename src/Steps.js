import React, { Component } from 'react';
import { Form, Button, Grid, Message, List } from 'semantic-ui-react';
import { states } from './States.js';

export const Welcome = (props) => {
  return(
    <Grid>
      <p>Lets get started finding your ride!</p>
      <Grid.Column floated='left' width={5}>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <Button primary onClick={() => props.next(states.PERSONAL_INFO)}>Next</Button>
      </Grid.Column>
    </Grid>
  );
}


export class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this._back = this._back.bind(this);
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);

  }

  _onChange(e) {
    
  }

  _validate(e) {
    this.props.next(states.BOARD_TYPE);
  }

  _back() {
    this.props.back(states.WELCOME)
  }

  render() {
    return(
      <div>
        <h1> PersonalInfo page! </h1>
        <Grid>
          <Grid.Column floated='left' width={5}>
            <Button secondary onClick={this._back}>Back</Button>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Button primary onClick={this._validate}>Next</Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


export class BoardType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this._back = this._back.bind(this);
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _onChange(e) {
    
  }

  _validate(e) {
    this.props.next(states.BOARD_PICKER);
  }

  _back() {
    this.props.back(states.PERSONAL_INFO)
  }

  render() {
    return(
      <div>
        <h1> BoardType page! </h1>
        <Grid>
            <Grid.Column floated='left' width={5}>
              <Button secondary onClick={this._back}>Back</Button>
            </Grid.Column>
            <Grid.Column floated='right' width={5}>
              <Button primary onClick={this._validate}>Next</Button>
            </Grid.Column>
        </Grid>
      </div>  
    );
  }
}


export class BoardPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this._back = this._back.bind(this);
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _onChange(e) {
    
  }

  _validate(e) {
     this.props.next(states.FIN_PICKER);
  }

  _back() {
    this.props.back(states.BOARD_TYPE)
  }

  render() {
    return(
      <div>
        <h1> BoardPicker page! </h1>
        <Grid>
            <Grid.Column floated='left' width={5}>
              <Button secondary onClick={this._back}>Back</Button>
            </Grid.Column>
            <Grid.Column floated='right' width={5}>
              <Button primary onClick={this._validate}>Next</Button>
            </Grid.Column>
        </Grid>
      </div>
    );
  }
}


export class FinPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this._back = this._back.bind(this);
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _onChange(e) {
    
  }

  _validate(e) {
      this.props.next(states.SHOW_ORDER);
  }

  _back() {
    this.props.back(states.BOARD_PICKER)
  }

  render() {
    return(
      <div>
        <h1> FinPicker page! </h1>
        <Grid>
          <Grid.Column floated='left' width={5}>
            <Button secondary onClick={this._back}>Back</Button>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Button primary onClick={this._validate}>Next</Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


export class ShowOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this._back = this._back.bind(this);
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _onChange(e) {
    
  }

  _validate(e) {
    //this.props.next(states.SHOW_ORDER);
  }

  _back() {
    this.props.back(states.FIN_PICKER)
  }

  render() {
    return(
      <div>
        <h1> ShowOrder page! </h1>
        <Grid>
            <Grid.Column floated='left' width={5}>
              <Button secondary onClick={this._back}>Back</Button>
            </Grid.Column>   
        </Grid>
      </div>  
    );
  }
}
