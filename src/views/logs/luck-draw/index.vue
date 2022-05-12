<template>
	<PCGrid v-model:value="currentFriendLv" :selects="friendLv">
		<template v-slot:table>
			<Table
				:tableHead="['时间', '抽奖消耗(USDT)','结果','NFT']"
				:tableData="tableData"
			>
				<template v-slot:call="{ item }">
					<div class="call">{{ item.t_address }}</div>
					<div class="call">{{ item.consume }}</div>
					<div class="call">{{ item.consume }}</div>
					<div class="call">{{ item.consume }}</div>
				</template>
			</Table>
		</template>
	</PCGrid>
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
<style lang="scss" scoped></style>
