<template>
	<header class="layout-navbar" :class="{ 'header-stretched': collapse }">
		<div class="navbar-wrapper">
			<div class="content-container">
				<div class="nav-menu">
					<a class="menu-item">
						<svg viewBox="0 0 1024 1024">
							<path
								d="M192 448c0-141.152 114.848-256 256-256s256 114.848 256 256-114.848 256-256 256-256-114.848-256-256z m710.624 409.376l-206.88-206.88A318.784 318.784 0 0 0 768 448c0-176.736-143.264-320-320-320S128 271.264 128 448s143.264 320 320 320a318.784 318.784 0 0 0 202.496-72.256l206.88 206.88 45.248-45.248z"
							></path>
						</svg>
					</a>
					<a class="menu-item">
						<svg viewBox="0 0 1024 1024">
							<path
								d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
							></path>
							<path
								d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7c0-19.7 12.4-37.7 30.9-44.8 59-22.7 97.1-74.7 97.1-132.5 0.1-39.3-17.1-76-48.3-103.3z"
							></path>
							<path d="M512 732m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"></path>
						</svg>
					</a>
					<a class="menu-item">
						<el-badge class="message-box" :value="3">
							<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"
								></path>
							</svg>
						</el-badge>
					</a>
				</div>
				<div class="theme-toggler">
					<div class="switch" @click="toggleDark()">
						<div class="switch__action">
							<div class="switch__icon">
								<el-icon>
									<Sunny class="dark-icon" />
									<Moon class="light-icon" />
								</el-icon>
							</div>
						</div>
					</div>
				</div>
				<div class="personal-menu">
					<el-popover popper-class="personal-popover" placement="bottom-end" trigger="hover" :show-arrow="false">
						<template #default>
							<div class="popover-item">
								<span class="popover-item-icon">
									<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
										></path>
									</svg>
								</span>
								<span class="popover-item-disc">个人中心</span>
							</div>
							<div class="popover-item">
								<span class="popover-item-icon">
									<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-0.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-0.5c-52.1-9.4-106.9-9.4-159 0l-2.7 0.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-0.9 2.6c-4.5 12.5-0.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l0.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7 0.5a449.4 449.4 0 0 0 159 0l2.7-0.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l0.9-2.6c4.5-12.3 0.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"
										></path>
									</svg>
								</span>
								<span class="popover-item-disc">个人设置</span>
							</div>
							<el-divider></el-divider>
							<div class="popover-item" @click="logout">
								<span class="popover-item-icon">
									<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-0.4-12.3-6.7-12.3z m88.9-226.3L815 393.7c-5.3-4.2-13-0.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"
										></path>
									</svg>
								</span>
								<span class="popover-item-disc">退出登录</span>
							</div>
						</template>
						<template #reference>
							<div class="personal-info">
								<el-avatar class="info-avatar" :src="headerImage"></el-avatar>
								<span class="info">{{ username }}</span>
							</div>
						</template>
					</el-popover>
				</div>
				<div class="nav-menu">
					<a class="menu-item">
						<svg style="width: 20px; height: 20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
							></path>
						</svg>
					</a>
					<el-popover popper-class="lang-popover" placement="bottom-end" trigger="hover" :show-arrow="false">
						<template #default>
							<div class="popover-item">
								<span class="popover-item-icon"> US </span>
								<span class="popover-item-disc">English</span>
							</div>
							<div class="popover-item">
								<span class="popover-item-icon"> CN </span>
								<span class="popover-item-disc">简体中文</span>
							</div>
						</template>
						<template #reference>
							<a class="menu-item">
								<svg style="width: 20px; height: 20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
									<path d="M140 188h584v164h76V144c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h544v-76H140V188z"></path>
									<path
										d="M414.3 256h-60.6c-3.4 0-6.4 2.2-7.6 5.4L219 629.4c-0.3 0.8-0.4 1.7-0.4 2.6 0 4.4 3.6 8 8 8h55.1c3.4 0 6.4-2.2 7.6-5.4L322 540h196.2L422 261.4c-1.3-3.2-4.3-5.4-7.7-5.4z m12.4 228h-85.5L384 360.2 426.7 484zM936 528H800v-93c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v93H592c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h136v152c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V752h136c13.3 0 24-10.7 24-24V552c0-13.3-10.7-24-24-24zM728 680h-88v-80h88v80z m160 0h-88v-80h88v80z"
									></path>
								</svg>
							</a>
						</template>
					</el-popover>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
import headerImage from '~/assets/default-head-image.png';
import { toggleDark } from '~/utils/composables';
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/store/modules/user';
import { useStaticStore } from '~/store/modules/static';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus';

const staticStore = useStaticStore();
const { collapse } = storeToRefs(staticStore);

const router = useRouter();
function logout() {
	userStore.logout();
	ElMessage.success('退出登录成功');
	router.push({ name: 'Login' });
}

const userStore = useUserStore();
let username = ref(userStore.username);
async function getInfo() {
	await userStore
		.getInfo()
		.then(() => {
			username.value = userStore.username;
		})
		.catch((msg) => {
			userStore.logout();
			ElMessage.error(msg);
			router.push({ name: 'Login' });
		});
}
onMounted(() => {
	getInfo();
});
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
	.layout-navbar {
		position: sticky;
		z-index: 99;
		width: calc(100% - var(--sidebar-width));
		top: 0;
		left: var(--sidebar-width);
		transition: width 0.6s, left 0.6s;
	}
	.header-stretched {
		width: calc(100% - var(--sidebar-width-collapsed));
		left: var(--sidebar-width-collapsed);
	}
	.navbar-wrapper {
		height: var(--header-height);
		position: relative;
		top: 0;
		padding: 0 16px;
		background-color: var(--nav-bg-color);
		box-shadow: var(--nav-box-shadow);
	}
	//   navmenu
	.content-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-grow: 1;
	}
	.nav-menu {
		display: flex;
	}
	.menu-item {
		display: flex;
		align-items: center;
		padding: 0 12px;
		height: var(--header-height);
		cursor: pointer;
	}
	.menu-item svg {
		fill: var(--basic-text-color);
		color: var(--basic-text-color);
		width: 18px;
		height: 18px;
	}
	.el-badge {
		vertical-align: 0 !important;
		display: flex;
	}
	.message-box:deep(.el-badge__content.is-fixed) {
		color: #e5e0d8;
		background-color: #f64f47;
		border-color: transparent;
	}
	.dark .message-box:deep(.el-badge__content.is-fixed) {
		color: #ced4d9;
		background-color: #8d1404;
	}
	//   dark-mode
	.theme-toggler {
		display: flex;
		align-items: center;
		padding: 0 12px;
	}
	.switch {
		display: inline-block;
		position: relative;
		width: 40px;
		height: 20px;
		outline: none;
		border-radius: 100px;
		background-color: var(--switch-bg-color);
		cursor: pointer;
		transition: background-color var(--translation-duration);
	}
	.switch {
		--switch-bg-color: #ddd;
	}
	.dark .switch {
		--switch-bg-color: #313232;
	}
	.switch__action,
	.switch__icon {
		width: 16px;
		height: 16px;
	}
	.switch__action {
		position: absolute;
		top: 2px;
		left: 2px;
		border-radius: 50%;
		box-shadow: var(--nav-box-shadow);
		background-color: var(--bg-color);
		transform: translate(0);
		transition: background-color var(--translation-duration), transform var(--translation-duration);
	}
	.dark .switch__action {
		transform: translate(20px);
	}
	.switch__icon {
		position: relative;
	}
	.switch__icon .el-icon {
		font-size: 0.875rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.dark-icon,
	.light-icon {
		position: absolute;
		top: 0;
		left: 0;
		color: var(--basic-text-color);
		transition: color var(--translation-duration), opacity var(--translation-duration);
	}
	.dark-icon {
		opacity: 0;
	}
	.light-icon {
		opacity: 1;
	}
	.dark .dark-icon {
		opacity: 1;
	}
	.dark .light-icon {
		opacity: 0;
	}
	//   personal-menu
	.personal-menu {
		display: flex;
		padding: 0 12px;
	}
	.personal-info {
		height: var(--header-height);
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.info-avatar {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}
	.info {
		font-size: 14px;
		color: var(--basic-text-color);
	}
}
</style>
