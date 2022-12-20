<template>
	<el-row :gutter="20">
		<el-col :span="8"
			><ChartCard>
				<template #chart>
					<div id="test1"></div>
				</template> </ChartCard
		></el-col>
		<el-col :span="8"><ChartCard></ChartCard></el-col>
		<el-col :span="8"><ChartCard></ChartCard></el-col>
	</el-row>
</template>

<script lang="ts" setup>
import ChartCard from '~/components/workbench/chartCard.vue';
import { inject, onMounted } from 'vue';

let echarts: any = inject('echarts');

const change = () => {
	const chartBox = echarts.init(document.getElementById('test1'));
	const option = {
		xAxis: {
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		},
		yAxis: {
			show: false,
		},
		series: [
			{
				type: 'bar',
				data: [1, 2, 3, 4, 5, 6, 7, 7, 8, 10, 23, 10],
			},
		],
	};
	chartBox.setOption(option);
	// 根据页面大小自动响应图表大小
	window.addEventListener('resize', function () {
		chartBox.resize();
	});
};
onMounted(() => {
	change();
});
</script>

<style lang="scss" scoped>
#test1 {
	height: 100%;
}
</style>
