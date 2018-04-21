import React from 'react';
import API from "../utils/API";
// import Dashboard from '../components/RenterDashboard/RenterDashboard.js';
import Apartment from '../components/ApartmentList/Apartment.js';
import UnitList from '../components/UnitList/UnitList.js';
import UserForm from "../pages/UserForm/UserForm.js";
// using renter as default test object, value will be replaced with current logged in user, or the "renter" who just submitted the form.
// import renter from './renter.json'
// manager dashboard to be added


class RenterDashboard extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      apartments: [],
      renterForm: {},
      userId: props.userId
    };
  }

  componentDidMount() {
    // console.log(this.state.userId)
    this.getRenterForm()
    // this.showApartments()
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

  getRenterForm = () => {
    console.log('test')
    const userId = this.state.userId
    API.getRenter(userId)
    .then(res =>
      this.setState({
        renterForm: res.data
      }))
      .catch(err => console.log(err));
  };


  showApartments = () => {
    console.log(this.state.renterForm)
    const testAptLat = 30.397194;
    const testAptLon = -97.702681;
    const testRentLat = this.state.renterForm[0].address.lat;
    const testRentLon = this.state.renterForm[0].address.lon;
    const conditions = {
      pets: this.state.renterForm[0].pets,
      beds: this.state.renterForm[0].minBeds,
      baths: this.state.renterForm[0].minBaths,
      price: this.state.renterForm[0].maxRent,
      credit: this.state.renterForm[0].creditrating
    };
      console.log(this.state.renterForm[0].firstName)
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
      <UserForm userId={this.state.userId}/>
      <div className="dashboardContainer">
        <h2>Renter Dashboard</h2>
      <div>
        {this.state.apartments.map(function(apartment, i) {
          // console.log(i)
          // console.log(apartment)
          return (
            <div className="resultsContainer" key={apartment._id}>

                        <Apartment
                          name={apartment.name}
                          address={apartment.address.street1}
                          city={apartment.address.city}
                          state={apartment.address.state}
                          contact={apartment.contactInfo.phone1}
                        />
                        {apartment.units.map(function(info, j) {
                          return(
                            <div className="unitListContainer" key={j}>
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
              </div>
                </div>

              )
            }
          }

export default RenterDashboard;
