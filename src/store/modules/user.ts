import { defineStore } from 'pinia';
import userApi from '~/api/modules/user';
import { getToken, removeToken, setToken } from '~/utils/authorization';
import { getRole, getUsername, removeRole, removeUsername, setRole, setUsername } from '~/utils/user';

export const useUserStore = defineStore('USER', {
	state: () => ({
		token: getToken() || '',
		username: getUsername() || '',
		role: getRole() || '',
	}),
	actions: {
		login(userInfo: object) {
			return new Promise((resolve, reject) => {
				userApi.login(userInfo).then((result) => {
					// analyzing
					const { data, message } = result;
					const { token } = data;
					// processing
					if (token) {
						setToken(token);
						this.token = token;
						resolve(message);
					} else {
						reject(message);
					}
				});
			});
		},
		getInfo() {
			return new Promise((resolve, reject) => {
				userApi
					.getInfo()
					.then((result) => {
						// analyzing
						const { data, message } = result;
						// processing
						if (data) {
							const { username, role } = data;
							setUsername(username);
							setRole(role);
							this.username = username;
							this.role = role;
							resolve(message);
						}
					})
					.catch((message) => {
						reject(message);
					});
			});
		},
		logout() {
			removeToken();
			removeUsername();
			removeRole();
			this.$reset();
		},
	},
});
