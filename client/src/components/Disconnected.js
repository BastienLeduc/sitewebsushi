import API from "../utils/API";
const Disconnect = () => {
    API.logout();
    window.location = "/";
};