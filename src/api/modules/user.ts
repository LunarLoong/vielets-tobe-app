import { http } from '../index';

export default {
	login(userInfo: object): Promise<any> {
		return http.post('/user/login', { params: userInfo });
	},
	getInfo(): Promise<any> {
		return http.get('/user/Info');
	},
};
