import axios from "axios";

const headers = {
  "Content-Type": "application/json; charset=utf-8"
};
const burl = "http://localhost:8800";

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  signup: function(send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  },
  getAllSushi: function(){
    return axios.get(`${burl}/sushis/getallsushi`, { headers: headers });
  },
  getUserbyEmail: function(email) {
    return axios.get(`${burl}/user/getuserbyemail/${email}`,
      {
        email
      },
      {
        headers: headers
      }
    );
  },
};