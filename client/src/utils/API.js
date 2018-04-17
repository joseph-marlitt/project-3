import axios from "axios";
import Auth from '../modules/Auth';

export default {
  // Gets all apartments matching conditions
  getApartments: function(conditions) {
    console.log(conditions)
    return axios.get("/api/apartments/", {
      headers: {
   Authorization: 'Bearer ' + Auth.getToken() //the token is a variable which holds the token
    },
      params: {
        pets: conditions.pets,
        beds: conditions.beds,
        baths: conditions.baths,
        price: conditions.price,
        credit: conditions.credit
      }
    });
  },
  // Gets the aparment with the given id
  getApartment: function(id) {
    return axios.get("/api/apartments/" + id);
  },
  // Deletes the apartment with the given id
  deleteApartment: function(id) {
    return axios.delete("/api/apartments/" + id);
  },
  // Saves a apartment to the database
  saveApartment: function(apartmentInfo) {
    return axios.post("/api/apartments", apartmentInfo);
  },
  // Gets all apartments
  getRenters: function() {
    return axios.get("/api/renters");
  },
  // Gets the aparment with the given id
  getRenter: function(id) {
    return axios.get("/api/renters/" + id);
  },
  // Deletes the apartment with the given id
  deleteRenter: function(id) {
    return axios.delete("/api/renters/" + id);
  },
  // Saves a apartment to the database
  saveRenter: function(renterInfo) {
    console.log(renterInfo)
    return axios.post("/api/renters", renterInfo);
  },
  logOut: function() {
    return axios.get("/logout")
  }
};
