import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
    <label htmlFor="smoking">Smoking</label>
      <Field
        name="smoking"
        id="employed"
        component="input"
        type="checkbox"
      />
      <label htmlFor="gym">Gym</label>
      <Field
        name="gym"
        id="employed"
        component="input"
        type="checkbox"
      />
      <label htmlFor="dishwasher">Dishwasher</label>
      <Field
        name="dishwasher"
        id="employed"
        component="input"
        type="checkbox"
      />
      <label htmlFor="laundry">Laudry in Unit</label>
      <Field
        name="laundry"
        id="employed"
        component="input"
        type="checkbox"
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
