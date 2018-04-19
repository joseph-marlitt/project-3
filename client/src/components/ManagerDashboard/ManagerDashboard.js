import React, { Component } from 'react';
import API from "../../utils/API";

class ManagerDashboard extends React.Component{
  constructor(props) {
    super(props);

  }
}
render() {
  return (
    <div>
      <h1>
        Manager Page: Under Construction
      </h1>
    </div>
  )
}
//
// // using renter as default test object, value will be replaced with current logged in user, or the "renter" who just submitted the form.
// import renter from './renter.json'
//
// class ShowApartmentsTest extends Component {
//
//   state = {
//     apartments: [],
//     renter
//   };
//
//   calcDist = (lat1, lat2, lon1, lon2) => {
//     var R = 6371; // Radius of the earth in km
//     var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
//     var dLon = (lon2 - lon1) * Math.PI / 180;
//     var a =
//        0.5 - Math.cos(dLat)/2 +
//        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//        (1 - Math.cos(dLon))/2;
//     return R * 2 * Math.asin(Math.sqrt(a));
//   };
//
// showApartments = () => {
//   const testAptLat = 30.397194;
//   const testAptLon = -97.702681;
//   const testRentLat = this.state.renter[0].address.lat;
//   const testRentLon = this.state.renter[0].address.lon;
//   const conditions = {
//     pets: this.state.renter[0].pets,
//     beds: this.state.renter[0].minBeds,
//     baths: this.state.renter[0].minBaths,
//     price: this.state.renter[0].maxRent,
//     credit: this.state.renter[0].creditrating
//   };
//
//     console.log(this.state.renter[0].firstName)
//     console.log(this.calcDist(testAptLat, testRentLat, testAptLon, testRentLon))
//     API.getApartments(conditions)
//       .then(res =>
//         this.setState({ apartments: res.data }))
//       .catch(err => console.log(err));
//     };
//
// render() {
//   return(
//     <div>
//       {this.state.apartments.map(function(apartment, i) {
//         console.log(i)
//         console.log(apartment)
//         return (
//           <div key={apartment._id}>
//                       <Apartment
//                         name={apartment.name}
//                         address={apartment.address.street1}
//                         city={apartment.address.city}
//                         state={apartment.address.state}
//                         contact={apartment.contactInfo.phone1}
//                       />
//                       <h1>Current Available Units:</h1>
//                       {apartment.units.map(function(info, j) {
//                         return(
//                           <div key={j}>
//                             <UnitList
//                               beds={info.beds}
//                               baths={info.baths}
//                               $from={info.minRent}
//                               $to={info.maxRent}
//                             />
//                           </div>
//                         )
//                       }, this) }
//                     </div>
//                   )
//                 }, this )}
//                 <div>
//                   <h1>Test Display
//                     <button type='submit' onClick={this.showApartments}>Test</button>
//                   </h1>
//                 </div>
//               </div>
//               // Above div is temporarily here to push Test button below header, can't click otherwise
//             )
//           }
//         }
//
// export default ShowApartmentsTest;
