<template>
	<div class="login-layout">
		<div class="login-container">
			<div class="logo-container"></div>
			<el-form :model="loginForm" style="display: flex; flex-flow: column nowrap">
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" prefix-icon="User"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="loginForm.password" prefix-icon="Lock"></el-input>
				</el-form-item>
				<el-button style="width: 200px; margin: 0 auto" @click="login">login</el-button>
			</el-form>
		</div>
	</div>
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

<style scoped>
.login-layout {
	width: 100%;
	height: 100vh;
	position: relative;
	background: rgba(0, 0, 0, 0.81);
}

.login-container {
	width: 400px;
	height: 200px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	border-radius: 5px;
	padding: 50px 32px 20px 32px;
}

.logo-container {
	position: absolute;
	top: -35%;
	left: 50%;
	transform: translate(-50%, 35%);
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-size: 100%;
	background: url('../../assets/logo.svg') no-repeat center;
}
</style>
