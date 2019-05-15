import React, { Component} from 'react';
import Alert, {DismissedComponent} from './ui-compoennts/Alert';


class App extends Component {
  constructor() {
    super();

    this.state = {
      showAlert : true
    }

    this.toggleAlert = this.toggleAlert.bind(this);
  }

  toggleAlert() {
    this.setState({showAlert : !this.state.showAlert})
  }

  render() {
    return (
      <div class="container">
        <Alert 
          show={this.state.showAlert}
          type="success"
          msg="Sign up successful!"
          toggle={this.toggleAlert}
        />
        <Alert show={this.state.showAlert} type="info">
          <h4 class="alert-heading">Well done!</h4>
        </Alert>
        <DismissedComponent  show={this.state.showAlert} type="info"
          msg="bbnb up successful!"
          toggle={this.toggleAlert}>
        </DismissedComponent>
      </div>
    )
  }
}

export default App;
