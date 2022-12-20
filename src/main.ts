import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/theme-chalk/src/message.scss';
import '~/assets/styles/global.scss';
import { pinia } from '~/store';
import router from '~/router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.use(pinia);
app.use(router);

app.mount('#app');
