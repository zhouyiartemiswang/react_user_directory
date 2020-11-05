import axios from "axios";
const URL = "https://randomuser.me/api/?results=";

export default {
    search: numResults => axios.get(URL + numResults)
};
