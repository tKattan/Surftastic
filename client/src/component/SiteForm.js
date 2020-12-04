import React, {Component} from 'react';
import {FormControl, FormGroup, FormLabel,Checkbox, HelpBlock, Radio, Button} from 'react-bootstrap';



class SiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ville: '',
      spot:'',
      beachpollution: null,
      waterpollution: null,
      airpollution: null,
      temperature: null,
      populationsurfeurs: null,
      errormessage: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "temperature") {
      if (!Number(val)) {
        <br></br>
        err=<p  >⚠️: Vous devez rentrer une valeur correcte.</p>
        alert("⚠️: Vous devez rentrer une valeur correcte. ");
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render(){
    return (
      <form>
        <FormGroup controlId="formControlsText">
          <FormLabel>Ville : </FormLabel>
          <FormControl type="" placeholder="Lacanau" name='ville' onChange={this.myChangeHandler}/>
        </FormGroup>

        <FormGroup controlId="formControlsText">
          <FormLabel>Spot : </FormLabel>
          <FormControl type="" placeholder="L'Alexandre" name='spot' onChange={this.myChangeHandler}/>
        </FormGroup>

        <FormGroup controlId="formBasicRange">
          <FormLabel>Temperature de l'air: </FormLabel>
          <FormControl type="value" placeholder="18" name='temperature' onChange={this.myChangeHandler}/>
        </FormGroup>
        {this.state.errormessage}

        <FormGroup controlId="formBasicRange">
          <FormLabel>Pollution de la plage : </FormLabel>
          <FormControl type="range" name='beachpollution' onChange={this.myChangeHandler}/>
        </FormGroup>

        <FormGroup controlId="formBasicRange">
          <FormLabel>Pollution de la mer : </FormLabel>
          <FormControl type="range" name='waterpollution' onChange={this.myChangeHandler}/>
        </FormGroup>

        <FormGroup controlId="formBasicRange">
          <FormLabel>Pollution de l'air : </FormLabel>
          <FormControl type="range" name='airpollution' onChange={this.myChangeHandler}/>
        </FormGroup>

        <FormGroup controlId="exampleForm.ControlSelect1">
          <br></br>
        <FormLabel>Sur une échelle de 1 (très peu) à 5 (beaucoup), combien y avait t-il de surfeurs?</FormLabel> 
        <br></br>
        <FormControl as="select" name='populationsurfeurs' onChange={this.myChangeHandler}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </FormControl>
      </FormGroup>
       <br></br>
        <Button type="submit">
          Publier
        </Button>
      </form>
    );
  }
}
export default SiteForm;