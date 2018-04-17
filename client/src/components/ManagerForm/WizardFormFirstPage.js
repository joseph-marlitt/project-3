import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
const rooms = [1, 2, 3, 4, 5];
const baths = [1, 2, 3, 4, 5];
const rent = [500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 3500];
const pets = ["Yes", "No"]
const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];



const renderRentSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Maximum Rent</option>
      {rent.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const renderMinRentSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Minimum Rent</option>
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
      <option value="">Pets?</option>
      {pets.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
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

const WizardFormFirstPage = props => {
  const { handleSubmit, pristine, submitting } = props;
  var roomsArray = [];
  for (var i = props.rooms; i > 0; i--) {
    roomsArray.push(
      <div className="roomContainer" key={i}>
        <h3>Room information</h3>
        <p>Describe every type of apartment in your complex, even if they are not available. You can set them to available later.</p>
        <label>Bedrooms</label>
        <Field name={"room[" + i + "][beds]"} key={"room[" + i + "][beds]"} component={renderRoomSelector} label= "Beds" />
        <label>Bathrooms</label>
        <Field name={"room[" + i + "][bath]"} key={"room[" + i + "][baths]"} component={renderBathsSelector} label= "Baths" />
        <label>Lowest Rent Available</label>
        <Field name={"room[" + i + "][min]"} key={"room[" + i + "][min]"} component={renderMinRentSelector} label= "Minimum Rent" />
        <label>Highest Rent Available</label>
        <Field type="text" name={"room[" + i + "][max]"} key={"room[" + i + "][max]"} component={renderRentSelector} label= "Maximum Rent"/>
        <button onClick={props.addRoom()} className="addRoom">Add Room</button>
      </div>
      );
  }


  return (
    <form onSubmit={handleSubmit}>
      <Field name="apartmentName" type="text" component={renderField} label="Apartment Complex Name" />
      <Field name="street" type="address" component={renderField} label="Street Address" />
      <label>State</label>
      <Field name="state" component={renderStateSelector} label="State" />
      <Field name="email" type="email" component={renderField} label="Leasing Office Email" />
      <Field name="phone" type="phone" component={renderField} label="Leasing Office Phone" />
      <div>
       {roomsArray.slice(0).reverse().map((room) => {
        return room;
       })}
      </div>
      <div>
        <label>Do you allow pets?</label>
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
        <button type="submit"  className="next">Next</button>
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
