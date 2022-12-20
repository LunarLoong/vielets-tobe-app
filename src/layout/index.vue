<template>
	<div class="app-layout">
		<Header></Header>
		<Sidebar></Sidebar>
		<main class="layout-content" :class="{ 'content-stretched': collapse }">
			<router-view></router-view>
		</main>
	</div>
</template>

<script lang="ts" setup>
import Header from './components/HeadBar.vue';
import Sidebar from './components/sidebar.vue';
import { useStaticStore } from '~/store/modules/static';
import { storeToRefs } from 'pinia';

const staticStore = useStaticStore();
const { collapse } = storeToRefs(staticStore);
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
	//中心
	.layout-content {
		padding-top: calc(25px);
		padding-left: calc(var(--sidebar-width) + 20px);
		padding-right: 20px;
		transition: padding-left 0.6s;
	}
	.content-stretched {
		padding-left: calc(var(--sidebar-width-small) + 20px);
	}
}
</style>
