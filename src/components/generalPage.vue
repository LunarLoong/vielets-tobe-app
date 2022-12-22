<template>
	<div class="general-container">
		<div class="header-wrapper">
			<div class="page-header">
				<el-breadcrumb class="header-breadcrumb" separator="/">
					<el-breadcrumb-item class="heading-crumb">{{ headingCrumb }}</el-breadcrumb-item>
					<el-breadcrumb-item class="sub-crumb">{{ subCrumb }}</el-breadcrumb-item>
				</el-breadcrumb>
				<slot name="search-form"></slot>
			</div>
		</div>
		<div class="content-wrapper">
			<div class="content-list">
				<slot name="table"></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface Props {
	// Array<any> = any[]
	headingCrumb: string;
	subCrumb: string;
}

const props = withDefaults(defineProps<Props>(), {
	headingCrumb: () => 'headingCrumb',
	subCrumb: () => 'subCrumb',
});
</script>

<style lang="scss" scoped>
.header-wrapper {
	background: transparent;
}
.page-header {
	position: relative;
	background: var(--nav-bg-color);
	font-size: 14px;
	color: var(--basic-text-color);
	padding: 16px 24px 16px 24px;
}

:deep(.el-breadcrumb__separator) {
	font-weight: 100;
}
.heading-crumb:deep(.el-breadcrumb__inner) {
	color: #8c8c8c;
}
.sub-crumb:deep(.el-breadcrumb__inner) {
	color: var(--basic-text-color);
}
.sub-crumb:deep(.el-breadcrumb__inner:hover) {
	color: var(--basic-text-color);
}
.content-wrapper {
	margin: 32px 24px;
	background: transparent;
}
.content-list {
	position: relative;
	padding: 16px 24px 16px 24px;
	background: var(--nav-bg-color);
}
</style>
