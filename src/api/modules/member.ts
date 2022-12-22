import { http } from '../index';

export default {
	getMemberList(): Promise<any> {
		return http.post('/member/memberList');
	},
};
