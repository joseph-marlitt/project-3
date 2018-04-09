import React, {Component} from 'React';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class RenterInfo extends Component {

  createList() {
    return this.props.form.map((info) => {
      return (
        <li key={info.id}>{info}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

export default connect(mapStateToProps)(RenterInfo);
