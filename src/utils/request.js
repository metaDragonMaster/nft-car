import axios from 'axios'
const baseURL = `https://api.defender.openzeppelin.com`
const service = axios.create({
	baseURL: baseURL,
	timeout: 5000, // request timeout
	headers:{
		"Content-Type":"application/json"
	},
})
// request interceptor
service.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
)

// response interceptor
service.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return error.response.data
	}
)

export default service
