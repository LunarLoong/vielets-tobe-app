import { defineStore } from 'pinia';
import staticApi from '~/api/modules/static';

export const useStaticStore = defineStore('STATIC', {
	state: () => ({
		menuList: [],
		collapse: false,
	}),
	actions: {
		getMenuList() {
			return new Promise((resolve, reject) => {
				staticApi
					.getMenuList()
					.then((result) => {
						// analyzing
						const { data, message } = result;
						// processing
						if (data) {
							const { menuList } = data;
							this.menuList = menuList;
							resolve(message);
						}
					})
					.catch((message) => {
						reject(message);
					});
			});
		},
	},
});
