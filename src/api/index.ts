import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from '~/utils/authorization';
import { ElMessage } from 'element-plus';

const service = (config?: AxiosRequestConfig): AxiosInstance => {
	// axios instance
	const instance = axios.create({
		baseURL: '/api',
		timeout: 3000, // milliseconds
		withCredentials: true,
		...config,
	});

	// interceptor for request
	instance.interceptors.request.use(
		function (config: any) {
			// before requested
			config.headers.Authorization = getToken();
			return config;
		},
		function (error) {
			// handle error
			return Promise.reject(error);
		}
	);

	// interceptor for response
	instance.interceptors.response.use(
		function (response: any) {
			// before respond
			// 2xx for activating
			console.log('response of raw data =>', response.data);

			return response.data;
		},
		function (error) {
			// handle error
			// not 2xx for activating
			const { code, message } = error.response.data;
			console.log('ERROR from interceptor of response =>', code);
			return Promise.reject(message);
		}
	);
	return instance;
};

export const http = service();
