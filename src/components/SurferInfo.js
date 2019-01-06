import React, { Component, PropTypes } from 'react';
import {Form} from 'semantic-ui-react';

export default class SurferInfo extends Component {
  render() {
  	let options = [
      {
        text: 'Male',
        value: 'male'
      },
      {
        text: 'Female',
        value: 'female'
      }
    ];

    return (
      <Form className="SurferInfo">
      
        <Form.Group widths='equal'> 
      		<Form.Input
      			 name="name"  
      			 label="Name" 
      			 placeholder="Name" 
      		/> 
      	</Form.Group>	
	      	<Form.Group widths='equal'> 
	      		<Form.Input 
	      			name="height"  
	      			label="height"
	      			type="text" 
	      			placeholder="Height" 
	      		/> 
	      		<Form.Input 
	      			name="weight"
	      			type="text"
	      			placeholder="Weight" 
	      		/> 
	      	</Form.Group>	
	      	<Form.Group>
	      		<Form.Dropdown placeholder='Gender' options={options} />
	      	</Form.Group>	
      </Form>

    );
  }
}
