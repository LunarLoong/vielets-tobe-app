<template>
	<div class="workbench-container">
		<el-row :gutter="20">
			<el-col :span="8">
				<ChartCard title="销售总额" total="¥ 126,560" subtitle="日销售额" subtotal="￥12,423">
					<template #content>
						<div class="variation">
							<div class="increase">
								<span class="vary-text">周同比<span class="vary-num">12%</span></span>
								<span class="vary-fix inc-icon">
									<el-icon>
										<CaretTop />
									</el-icon>
								</span>
							</div>
							<div class="decrease">
								<span class="vary-text">日同比<span class="vary-num">15%</span></span>
								<span class="vary-fix dec-icon">
									<el-icon>
										<CaretBottom />
									</el-icon>
								</span>
							</div>
						</div>
					</template>
				</ChartCard>
			</el-col>
			<el-col :span="8">
				<ChartCard title="访问量" total="8,846" subtitle="日访问量" subtotal="1,234"></ChartCard>
			</el-col>
			<el-col :span="8"><ChartCard></ChartCard></el-col>
		</el-row>
	</div>
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
				data: [2, 3, 3, 4, 5, 6, 7],
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
	// change();
});
</script>

<style lang="scss" scoped>
.workbench-container {
	padding-top: 25px;
	padding-left: 20px;
	padding-right: 20px;
}
#test1 {
	height: 100%;
}
.variation {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
}

.increase {
	margin-right: 16px;
	display: inline-block;
	font-size: 14px;
	line-height: 22px;
	color: var(--basic-text-color);
}
.decrease {
	display: inline-block;
	font-size: 14px;
	line-height: 22px;
	color: var(--basic-text-color);
}

.vary-num {
	margin-left: 8px;
}

.vary-fix {
	position: relative;
	margin-left: 4px;
	font-size: 12px;
}

.inc-icon {
	top: 1px;
	color: #f5222d;
}

.dec-icon {
	top: -1px;
	color: #52c41a;
}

.decrease {
	display: inline-block;
	font-size: 14px;
	line-height: 22px;
}
</style>
