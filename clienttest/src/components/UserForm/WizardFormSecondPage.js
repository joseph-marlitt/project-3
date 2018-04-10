import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
const creditScore = ["0-400", "400-500", "500-600", "600-700", "700-850"];
const minor = ["Yes", "No"];


const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const renderCreditSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Credit Score</option>
      {creditScore.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const renderMinorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Are you over 18?</option>
      {minor.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
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
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>Preferred Contact</label>
        <div>
          <label>
            <Field name="contact" component="input" type="radio" value="Phone" />
            {' '}
            Phone
          </label>
          <label>
            <Field name="contact" component="input" type="radio" value="Email" />
            {' '}
            Email
          </label>
          <Field name="contact" component={renderError} />
        </div>
        <div>
        <label>Over 18?</label>
        <Field name="minor" component={renderMinorSelector} />
        </div>
        <div>
        <label>Credit Score</label>
        <Field name="credit" component={renderCreditSelector} />
        </div>
      </div>
      <div>
      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
