import { http } from '../index';

export default {
	getMenuList(): Promise<any> {
		return http.get('/static/menuList');
	},
};
