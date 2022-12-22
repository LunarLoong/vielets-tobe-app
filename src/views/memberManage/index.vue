<template>
	<GeneralPage :heading-crumb="'会员'" :sub-crumb="'会籍管理'">
		<template #search-form>
			<el-form class="search-form" :model="searchForm" label-width="100px">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="searchForm.username" style="width: 218px" />
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="searchForm.gender" class="ml-4">
						<el-radio label="m">男</el-radio>
						<el-radio label="fm">女</el-radio>
						<el-radio label="">无</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="卡种">
					<el-select v-model="searchForm.card" placeholder="选择卡种...">
						<el-option v-for="item in searchForm.cardCatagory" :key="item.value" :label="item.label" :value="item.value" />
					</el-select>
				</el-form-item>
				<el-form-item label="开卡时间">
					<el-date-picker v-model="searchForm.beginTime" type="datetime" placeholder="选择时间..." />
				</el-form-item>
				<el-form-item label="到期时间">
					<el-date-picker v-model="searchForm.endTime" type="datetime" placeholder="选择时间..." />
				</el-form-item>
			</el-form>
			<div class="search-operation-container">
				<el-button type="primary" style="margin-right: 20px" @click="onSubmit">查询</el-button>
				<el-button>清空条件</el-button>
			</div>
		</template>
		<template #table>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="member_name" label="姓名" width="120" />
				<el-table-column prop="member_type" label="会员类型" width="120" />
				<el-table-column prop="member_cost" label="统计消费" width="120" />
				<el-table-column prop="member_gender" label="性别" width="120" />
				<el-table-column prop="member_card" label="卡种" width="120" />
				<el-table-column prop="member_startDate" label="开卡日期" width="150" />
				<el-table-column prop="member_endDate" label="到期日期" width="150" />
				<el-table-column prop="member_rest" label="剩余时间" width="120" />
				<el-table-column label="操作">
					<template #default>
						<el-button link type="primary" size="small">编辑</el-button>
						<el-button link type="warning" size="small">冻结</el-button>
						<el-button link type="danger" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</template>
	</GeneralPage>
</template>

<script lang="ts" setup>
import GeneralPage from '~/components/generalPage.vue';
import { onMounted, reactive } from 'vue';
import memberApi from '~/api/modules/member';

let tableData: object[] = reactive([]);

async function getMemberList() {
	await memberApi.getMemberList().then((res) => {
		const { memberList } = res.data;
		for (let i = 0; i < memberList.length; i++) {
			tableData.push(memberList[i]);
		}
	});
}
onMounted(() => {
	getMemberList();
});

const searchForm = reactive({
	username: '',
	gender: '',
	card: '',
	cardCatagory: [
		{
			value: '年卡',
			label: '年卡',
		},
		{
			value: '月卡',
			label: '月卡',
		},
	],
	beginTime: '',
	endTime: '',
});
</script>

<style lang="scss" scoped>
.el-form {
	margin-top: 32px;
	display: flex;
	flex-flow: row wrap;
}

.search-operation-container {
	display: flex;
	align-items: center;
	justify-content: left;
	padding-left: 100px;
}
</style>
