import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import API from "../utils/API";
import Dashboard from '../components/RenterDashboard/RenterDashboard.js';
import Apartment from '../components/ApartmentList/Apartment.js';
import UnitList from '../components/UnitList/UnitList.js';
// using renter as default test object, value will be replaced with current logged in user, or the "renter" who just submitted the form.
import renter from './renter.json'
// manager dashboard to be added


class RenterDashboard extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      apartments: [],
      renter,
      secretData: '',
      user: {}
    };
  }

  calcDist = (lat1, lat2, lon1, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a =
       0.5 - Math.cos(dLat)/2 +
       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
       (1 - Math.cos(dLon))/2;
    return R * 2 * Math.asin(Math.sqrt(a));
  };

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
  }

  showApartments = () => {
    const testAptLat = 30.397194;
    const testAptLon = -97.702681;
    const testRentLat = this.state.renter[0].address.lat;
    const testRentLon = this.state.renter[0].address.lon;
    const conditions = {
      pets: this.state.renter[0].pets,
      beds: this.state.renter[0].minBeds,
      baths: this.state.renter[0].minBaths,
      price: this.state.renter[0].maxRent,
      credit: this.state.renter[0].creditrating
    };
      console.log(this.state.renter[0].firstName)
      console.log(this.calcDist(testAptLat, testRentLat, testAptLon, testRentLon))
      API.getApartments(conditions)
        .then(res =>
          this.setState({ apartments: res.data }))
        .catch(err => console.log(err));
      };

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
      <Dashboard secretData={this.state.secretData} user={this.state.user} />
      <div>
        {this.state.apartments.map(function(apartment, i) {
          console.log(i)
          console.log(apartment)
          return (
            <div key={apartment._id}>
                        <Apartment
                          name={apartment.name}
                          address={apartment.address.street1}
                          city={apartment.address.city}
                          state={apartment.address.state}
                          contact={apartment.contactInfo.phone1}
                        />
                        <h1>Current Available Units:</h1>
                        {apartment.units.map(function(info, j) {
                          return(
                            <div key={j}>
                              <UnitList
                                beds={info.beds}
                                baths={info.baths}
                                $from={info.minRent}
                                $to={info.maxRent}
                              />
                            </div>
                          )
                        }, this) }
                      </div>
                    )
                  }, this )}

                </div>
                <div>

                <button type='submit' onClick={this.showApartments}>Show Apartments!</button>
            
                </div>
              </div>
              )
            }
          }

export default RenterDashboard;
