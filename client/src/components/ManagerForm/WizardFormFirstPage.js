import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
const rooms = [1, 2, 3, 4, 5];
const baths = [1, 2, 3, 4, 5];
const rent = [500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 3500];
const pets = ["Yes", "No"]


const renderRentSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Maximum Rent</option>
      {rent.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const renderBathsSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Minumum Bathrooms</option>
      {baths.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const renderRoomSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Number of Rooms</option>
      {rooms.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const renderPetSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Number of Rooms</option>
      {pets.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>How many Bedrooms do you need?</label>
        <Field name="rooms" component={renderRoomSelector} />
      </div>
      <div>
        <label>How many bathrooms do you need?</label>
        <Field name="baths" component={renderBathsSelector} />
      </div>
      <div>
        <label>What is your maximum Rent</label>
        <Field name="rent" component={renderRentSelector} />
      </div>
      <div>
        <label>Do you have Pets?</label>
        <Field name="pets" component={renderPetSelector} />
      </div>
  <div className="ammenitiesContainer">
    <label htmlFor="smoking">Smoking</label>
      <Field
        name="smoking"
        className="ammenities"
        component="input"
        type="checkbox"
      />
      <label htmlFor="gym">Gym</label>
      <Field
        name="gym"
        className="ammenities"
        component="input"
        type="checkbox"
      />
      <label htmlFor="dishwasher">Dishwasher</label>
      <Field
        name="dishwasher"
        className="ammenities"
        component="input"
        type="checkbox"
      />
      <label htmlFor="laundry">Laudry in Unit</label>
      <Field
        name="laundry"
        className="ammenities"
        component="input"
        type="checkbox"
      />
      <label htmlFor="Parking">Parking</label>
      <Field
        name="Parking"
        className="ammenities"
        component="input"
        type="checkbox"
      />
      <label htmlFor="Pool">Pool</label>
      <Field
        name="Pool"
        className="ammenities"
        component="input"
        type="checkbox"
      />
    </div>
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
