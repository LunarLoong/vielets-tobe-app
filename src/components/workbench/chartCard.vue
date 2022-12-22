<template>
	<el-card class="chart-card" shadow="hover">
		<div class="card-content">
			<div class="top-box">
				<div class="meta-wrapper">
					<div class="meta">
						<span>{{ title }}</span>
						<el-tooltip :content="title" placement="top">
							<template #default>
								<el-icon class="meta-action">
									<Warning />
								</el-icon>
							</template>
						</el-tooltip>
					</div>
					<div class="total">
						<span>{{ total }}</span>
					</div>
				</div>
			</div>
			<div id="content-box">
				<slot name="content"></slot>
			</div>
			<div class="footer-box">
				<div class="field">
					<span class="label">{{ subtitle }}</span>
					<span class="number">{{ subtotal }}</span>
				</div>
			</div>
		</div>
	</el-card>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
// onMounted(() => {});
interface Props {
	// Array<any> = any[]
	title: string;
	total: string;
	subtitle: string;
	subtotal: string;
}

const props = withDefaults(defineProps<Props>(), {
	title: () => 'title',
	total: () => 'total',
	subtitle: () => 'subtitle',
	subtotal: () => 'subtotal',
});
</script>

<style scoped>
.chart-card {
	--divider-color: #f0f0f0;
}
.dark .chart-card {
	--divider-color: #3e4141;
}
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
	color: var(--basic-text-color);
}

.meta-action {
	position: absolute;
	top: 4px;
	right: 0;
	line-height: 1;
}

.total {
	height: 38px;
	margin-top: 4px;
	margin-bottom: 0;
	overflow: hidden;
	color: var(--basic-text-color);
	font-size: 30px;
	line-height: 38px;
	white-space: nowrap;
	text-overflow: ellipsis;
	word-break: break-all;
}

#content-box {
	height: 46px;
	position: relative;
}

.footer-box {
	margin-top: 8px;
	padding-top: 9px;
	border-top: 1px solid var(--divider-color);
}

.field {
	margin: 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: var(--basic-text-color);
}

.field > span {
	font-size: 14px;
	line-height: 22px;
}

.number {
	margin-left: 8px;
}
</style>
