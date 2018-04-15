import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import "./Form.css"

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.addRoom = this.addRoom.bind(this);
    this.state = {
      page: 1,
      rooms: 1
    };
    
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  addRoom(){
    this.setState({ rooms: this.state.rooms + 1 })
  }

  removeRoom(){
    this.setState({rooms: this.state.rooms - 1})
  }

  render() {
    const { onSubmit } = this.props;

    return (
      <div className="form-style">
        {this.state.page === 1 && <WizardFormFirstPage rooms={this.state.rooms} onSubmit={this.nextPage} />}
        {this.state.page === 2 &&
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;