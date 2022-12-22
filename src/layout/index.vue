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
	.layout-content {
		padding-top: 0;
		padding-left: calc(var(--sidebar-width));
		transition: padding-left var(--translation-duration);
	}
	.content-stretched {
		padding-left: var(--sidebar-width-collapsed);
	}
}
</style>
