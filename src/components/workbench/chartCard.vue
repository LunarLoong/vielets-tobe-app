<template>
	<el-card class="chart-card" shadow="hover">
		<div class="card-content">
			<div class="top-box">
				<div class="meta-wrapper">
					<div class="meta">
						<span>总销售额</span>
						<el-tooltip effect="dark" content="Right Center prompts info" placement="top">
							<template #default>
								<el-icon class="meta-action">
									<Warning />
								</el-icon>
							</template>
						</el-tooltip>
					</div>
					<div class="total">
						<span>¥ 126,560</span>
					</div>
				</div>
			</div>
			<div id="content-box"></div>
			<div class="footer-box">
				<div class="field">
					<span class="label">日销售额</span>
					<span class="number">￥12,423</span>
				</div>
			</div>
		</div>
	</el-card>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';

onMounted(() => {
	let myChart = echarts.init(document.getElementById('content-box') as HTMLElement);
	// 绘制图表
	myChart.setOption({
		title: { text: '总用户量' },
		tooltip: {},
		xAxis: {
			data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8'],
		},
		yAxis: {},
		series: [
			{
				name: '用户量',
				type: 'line',
				data: [5, 20, 36, 10, 10, 20],
			},
		],
	});
	window.onresize = function () {
		//自适应大小
		myChart.resize();
	};
});
</script>

<style scoped>
.chart-card {
	background: var(--nav-bg-color);
	border-color: var(--nav-bg-color);
}
.chart-card:deep(.el-card__body) {
	padding: 20px 24px 8px 24px;
}
.card-content {
	position: relative;
}
.top-box {
	position: relative;
	width: 100%;
	overflow: hidden;
}
.meta-wrapper {
	float: left;
}
.meta {
	height: 22px;
	line-height: 22px;
	font-size: 14px;
	color: rgba(0, 0, 0, 0.45);
}
.meta-action {
	position: absolute;
	top: 4px;
	right: 0px;
	line-height: 1;
}
.total {
	height: 38px;
	margin-top: 4px;
	margin-bottom: 0;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.85);
	font-size: 30px;
	line-height: 38px;
	white-space: nowrap;
	text-overflow: ellipsis;
	word-break: break-all;
}

#content-box {
	height: 46px;
}

.footer-box {
	margin-top: 8px;
	padding-top: 9px;
	border-top: 1px solid #f0f0f0;
}
.field {
	margin: 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.field > span {
	font-size: 14px;
	line-height: 22px;
}

.number {
	margin-left: 8px;
}
</style>
