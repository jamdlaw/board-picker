import React, { Component } from 'react';
import {Grid,Button} from 'semantic-ui-react';
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
      firstName: null,
      lastName: null,
      feet: null,
      inches: null,
      weight: null
    }
    this._back = this._back.bind(this);
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _onChange(e) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  _validate(e) {
    e.preventDefault();
    this.props.saveForm({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      feet: this.state.feet,
      inches: this.state.inches,
      weight: this.state.weight
    });
    this.props.next(states.BOARD_TYPE);
    
  }

  _back() {
    this.props.back(states.WELCOME)
  }

  render() {
    return(
      <div>
        <h1> Surfer Info </h1>
        <form action="POST" className="surfer-info needs-validation">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" className="form-control" name="firstName" placeholder="First Name" onChange={this._onChange} value={this.state.firstName} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" className="form-control" name="lastName" placeholder="Last Name" onChange={this._onChange} value={this.state.LastName} />
          </div>
          <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="feet">Feet</label>
                <input type="text" id="feet" className="form-control" name="feet" placeholder="Feet" onChange={this._onChange} value={this.state.feet} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inches">Inches</label>
                <input type="text" id="inches" className="form-control" name="inches" placeholder="Inches" onChange={this._onChange} value={this.state.inches} />
              </div>
              <div className="form-group col-md-4">
                  <label htmlFor="weight">Weight</label>
                  <input type="text" id="weight" className="form-control" name="weight" placeholder="Weight (pounds)" onChange={this._onChange} value={this.state.weight} />
              </div>
          </div>
        </form>
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
