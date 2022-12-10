// import axios from "axios";

const axios = require('axios');
api = "https://www.balldontlie.io/api/v1/teams";
function callApi(){
    axios.get(api)
    .then(response=>{
        console.log(response.data);
    })
}

function callApiPost(){
    const student = {id:128,firstName:"Test"}
    axios.post("api url here",student)
    .then(respone =>{
        console.log(respone.data);
    })
}
callApi();