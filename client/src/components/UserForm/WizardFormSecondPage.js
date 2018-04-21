import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
// const creditScore = ["0-400", "400-500", "500-600", "600-700", "700-850"];
const creditScore = [400, 450, 500, 550, 600, 650, 700, 750, 800, 850];
const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
const distances = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30]


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

const renderZip = ({ input, meta: { touched, error } }) => (
  <div>
    <label>Zip</label>
    <div>
      <input {...input} placeholder="Zip" type="text" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderStateSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">State</option>
      {states.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const renderDistanceSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">In miles..</option>
      {distances.map(val => <option value={val} key={val}>{val}</option>)}
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
        name="lastName" type="text" component={renderField} label="Last Name"
      />
      <Field name="address.street1" type="address" component={renderField} label="Location"
      />
      <Field name="address.city" type="text" component={renderField} label="City"
      />
      <div className="stateDiv">
        <label>State</label>
        <Field name="address.state" component={renderStateSelector} />
      </div>
      <div className="zipCode">
        <Field name="address.zip" component={renderZip}/>
      </div>
      <div>
        <label>Distance from Location</label>
        <Field name="distance" component={renderDistanceSelector} />
      </div>

      <Field name="contactInfo.phone1" type="phone" component={renderField} label="Phone" />

      <div>
        <label>Preferred Contact</label>
        <div>
          <label>
            <Field name="preferred" component="input" type="radio" value="Phone" />
            {' '}
            Phone
          </label>
          <label>
            <Field name="preferred" component="input" type="radio" value="Email" />
            {' '}
            Email
          </label>
          <Field name="preferred" component={renderError} />
        </div>
        <div>
        <label>Estimated Credit Score</label>
        <Field  parse={Number}  name="creditrating" component={renderCreditSelector} />
        </div>
      </div>
      <div>
      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
      <button className="submit" type="submit">Submit</button>
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
