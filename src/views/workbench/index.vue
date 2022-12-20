<template>
	<el-row :gutter="20">
		<el-col :span="8"><ChartCard></ChartCard></el-col>
		<el-col :span="8"><ChartCard></ChartCard></el-col>
		<el-col :span="8"><ChartCard></ChartCard></el-col>
	</el-row>
</template>

<script lang="ts" setup>
import ChartCard from '~/components/workbench/chartCard.vue';
</script>

<style lang="scss" scoped></style>
