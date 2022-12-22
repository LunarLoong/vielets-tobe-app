<template>
	<aside class="layout-sidebar" :class="{ 'is-collapse': collapse }">
		<div class="sidebar-wrapper">
			<div class="logo-container">
				<a>
					<img src="src/assets/logo.svg" />
					<h1>Vielets Pro</h1>
				</a>
			</div>
			<div class="menu-container">
				<el-menu router :default-active="activePath" class="menu" :collapse="collapse" @open="handleOpen" @close="handleClose">
					<template v-for="item in menuList">
						<el-sub-menu
							v-if="item.children.length"
							:key="item.id"
							class="sub-menu"
							:popper-class="'sub-menu-popper'"
							popper-append-to-body
							:index="item.path"
						>
							<template #title>
								<el-icon>
									<component :is="item.icon"></component>
								</el-icon>
								<span>{{ item.label }}</span>
							</template>
							<el-menu-item v-for="subItem in item.children" :key="subItem.id" class="sub-menu-item" :index="subItem.path">
								<template #title>
									<span>{{ subItem.label }}</span>
								</template>
							</el-menu-item>
						</el-sub-menu>
						<el-menu-item v-else :key="item.id" class="menu-item" :index="item.path">
							<el-icon>
								<component :is="item.icon"></component>
							</el-icon>
							<template #title>
								<span>{{ item.label }}</span>
							</template>
						</el-menu-item>
					</template>
				</el-menu>
			</div>
			<div class="sidebar-controller" @click="collapse = !collapse">
				<span class="controller-action">
					<el-icon class="controller-icon">
						<Expand v-if="collapse" />
						<Fold v-else />
					</el-icon>
				</span>
			</div>
		</div>
	</aside>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useStaticStore } from '~/store/modules/static';
import { ElMessage } from 'element-plus';
import { onBeforeRouteUpdate, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const staticStore = useStaticStore();
const { collapse } = storeToRefs(staticStore);
watch(collapse, () => {
	staticStore.collapse = collapse.value;
});

const router = useRouter();
const current = router.currentRoute.value.fullPath.split('/');
const activePath = ref<string>(current.length <= 2 ? '/' + current[1] : '/' + current[1] + '/' + current[2]);
onBeforeRouteUpdate((to) => {
	activePath.value = to.path;
});

const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};

let menuList = reactive([]);

async function getMenuList() {
	await staticStore
		.getMenuList()
		.then(() => {
			for (let i = 0; i < staticStore.menuList.length; i++) {
				menuList.push(staticStore.menuList[i]);
			}
			console.log(menuList);
		})
		.catch((msg) => {
			ElMessage.error(msg);
		});
}

onMounted(() => {
	getMenuList();
});
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
	.layout-sidebar {
		width: var(--sidebar-width);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 100;
		background-color: var(--nav-bg-color);
		box-shadow: var(--nav-box-shadow);
		transition: width var(--translation-duration) var(--el-transition-function-ease-in-out-bezier);
	}
	.is-collapse {
		width: var(--sidebar-width-collapsed);
		.logo-container {
			padding: 16px 8px;

			h1 {
				display: none;
			}
		}
	}
	.sidebar-wrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.logo-container {
		position: relative;
		display: flex;
		align-items: center;
		padding: 16px;
		cursor: pointer;
		transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	.logo-container > a {
		min-height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #2d93ff;
		background-color: transparent;
		cursor: pointer;
		outline: none;
	}
	.logo-container img {
		display: inline-block;
		height: 32px;
		width: 32px;
		vertical-align: middle;
		border-style: none;
	}
	.logo-container h1 {
		display: inline-block;
		height: 32px;
		line-height: 32px;
		margin: 0 0 0 12px;
		font-weight: 600;
		font-size: 18px;
		vertical-align: middle;
		transition: display var(--translation-duration) ease-in-out;
	}
	//   menu
	.menu-container {
		flex: 1 1 0;
	}
	.menu {
		width: var(--sidebar-width-collapsed);
		min-height: 100%;
		background: transparent;
		border: none;
	}
	.menu:not(.el-menu--collapse) {
		width: var(--sidebar-width);
	}
	.menu-item:deep(.el-menu-tooltip__trigger) {
		padding: 0 0 0 12px;
	}
	.menu:not(.el-menu--collapse):deep(.el-menu-item) {
		padding: 0 0 0 12px;
	}
	.sub-menu:not(.el-menu--popup-container):deep(.el-sub-menu__title) {
		padding: 0 0 0 12px;
	}
	.menu:not(.el-menu--collapse):deep(.el-menu--inline > .el-menu-item) {
		padding: 0 0 0 32px;
	}
	.menu:deep(span) {
		font-size: 14px;
		color: var(--basic-text-color);
	}
	.menu:deep(.el-icon:first-child) {
		font-size: 16px;
		color: var(--basic-text-color);
	}
	.menu:deep(.el-icon:last-child) {
		color: var(--basic-text-color);
	}
	.menu:deep(*) {
		background: transparent;
	}
	.menu:deep(*:hover) {
		background: transparent;
	}
	.menu:not(.el-menu--collapse):deep(.menu-item.is-active) {
		border-right: 3px solid #2d93ff;
		background: var(--actived-bg-color);
	}
	.menu:not(.el-menu--collapse):deep(.sub-menu-item.is-active) {
		border-right: 3px solid #2d93ff;
		background: var(--actived-bg-color);
	}
	.menu-item.is-active:deep(.el-icon) {
		color: var(--el-menu-active-color);
	}
	.sub-menu.is-active:deep(.el-sub-menu__title > :first-child) {
		color: var(--el-menu-active-color);
	}
	.sub-menu.is-active:deep(.el-sub-menu__title > span) {
		color: var(--el-menu-active-color);
	}
	.menu-item:hover:deep(*) {
		color: var(--el-menu-active-color) !important;
		transition: color var(--translation-duration);
	}
	.sub-menu:deep(.el-sub-menu__title:hover > *) {
		color: var(--el-menu-active-color) !important;
		transition: color var(--translation-duration);
	}
	.sub-menu-item:hover:deep(span) {
		color: var(--el-menu-active-color) !important;
		transition: color var(--translation-duration);
	}
	.sub-menu-item.is-active {
		background: var(--actived-bg-color);
	}
	.menu:deep(.is-active > span) {
		color: var(--el-menu-active-color);
	}
	.menu:deep(.is-active > .el-icon) {
		color: var(--el-menu-active-color);
	}
	.menu:deep(.sub-menu-item) {
		padding: 0;
	}
	.menu:is(.el-menu--collapse):deep(.el-icon:first-child) {
		font-size: 18px;
	}
	.sidebar-controller {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
		cursor: pointer;
	}
	.sidebar-controller:hover:deep(.el-icon) {
		color: #2d93ff;
		transition: color var(--translation-duration);
	}
	.controller-action {
		height: 40px;
		padding-left: 14px;
		display: flex;
		align-items: center;
	}
	.controller-icon {
		color: var(--basic-text-color);
		font-size: 1.25rem;
	}
}
</style>
