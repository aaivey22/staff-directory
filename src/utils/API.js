import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomStaffList: function() {
    return axios.get("https://randomuser.me/api/?results=100");
  }
  // getStaffByName: function(employee) {
  //   return axios.get("https://randomuser.me/api/name/" + employee + "/images");
  // }
  // getBaseBreedsList: function() {
  //   return axios.get("https://dog.ceo/api/breeds/list");
  // }
};
