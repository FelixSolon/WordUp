import axios from "axios";
import 'whatwg-fetch';


export default {
    getwordsOfTheDay: function() {
    return axios.get('http://localhost:8080/getwords');
  },
	
  createUser: function(user) {
    return axios.post('http://localhost:8080/create/user');
  },  
  
  createUserScores: function(score) {
    return axios.post('http://localhost:8080/create/userscore');
  },

getWords: function() {
	var promise = new Promise((resolve, reject) => {
		console.log("promise");
		console.log(resolve);
	axios.get('http://localhost:8080/getwords')
	.then(response => {
		console.log("response");
		console.log(response);
		
		resolve(response);		
		 })
	});
		
	return promise;
	}
};