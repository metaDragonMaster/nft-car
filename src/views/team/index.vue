<template>
	<div class="view limit-max-width-media">
		<div class="pc-grid-head">
			<h1 class="title font-y theme-text-stroke">
				<span>团队累计收益</span>
				<span>999USDT</span>
			</h1>
			<div class="flex flex-sb">
				<div class="buttons">
					<button class="theme-gray-diamond-button active">
						我的团队
					</button>
				</div>
				<div class="text-right">
					<p>好友总数: 999</p>
					<p>团队总消耗: 999USDT</p>
				</div>
			</div>
		</div>
		<PCGrid v-model:value="currentFriendLv" :selects="friendLv">
			<template v-slot:table>
				<Table
					:tableHead="['钱包地址', '抽奖消耗(USDT)']"
					:tableData="tableData"
				>
					<template v-slot:call="{ item }">
						<div class="call">{{ item.t_address }}</div>
						<div class="call">{{ item.consume }}</div>
					</template>
				</Table>
			</template>
		</PCGrid>
	</div>
</template>

<script setup>
import PCGrid from "@/components/PCGrid";
import Table from "@/components/Table";
import { ref } from "vue";
const currentFriendLv = ref("1");
const friendLv = [
	{
		id: "1",
		title: "一级好友",
	},
	{
		id: "2",
		title: "二级好友",
	},
	{
		id: "3",
		title: "三级好友",
	},
];
const tableData = [
	{
		t_address: "123456",
		consume: "1",
	},
	{
		t_address: "123456",
		consume: "1",
	},
	{
		t_address: "123456",
		consume: "1",
	},
];
</script>
