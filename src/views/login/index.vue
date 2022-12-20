<template>
	<el-form :model="loginForm">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username"></el-input>
		</el-form-item>
		<el-form-item>
			<el-input v-model="loginForm.password"></el-input>
		</el-form-item>
		<el-button @click="login">login</el-button>
	</el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useUserStore } from '~/store/modules/user';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const userStore = useUserStore();
const router = useRouter();

const loginForm = reactive({
	username: '',
	password: '',
});

async function login() {
	await userStore
		.login(loginForm)
		.then((msg: any) => {
			ElMessage.success(msg);
			router.push({ name: 'Layout' });
		})
		.catch((msg) => {
			ElMessage.error(msg);
		});
}
</script>

<style scoped></style>
