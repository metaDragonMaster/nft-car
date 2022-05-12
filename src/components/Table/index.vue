<template>
	<div class="table theme-bg-gary">
		<ul class="table-head">
			<li v-for="item in props.tableHead" :key="item">{{ item }}</li>
		</ul>
		<ul class="table-body">
			<li
				class="table-body-th"
				v-for="(item, index) in tableData"
				:key="index"
			>
				<!-- <div class="call theme-text-title">
                </div> -->
				<slot name="call" :item="item"></slot>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { computed, defineProps, toRefs } from "vue";
const props = defineProps({
	tableHead: {
		type: Array,
		default: () => [],
	},
	tableData: {
		type: Array,
		default: () => [],
	},
});
const cellNum = computed(() => props.tableHead.length);
const { tableData } = toRefs(props);
</script>
<style lang="scss" scoped>
.table {
	border-radius: 4px;
	font-size: 12px;
	padding: 12px;
	.table-head,
	.table-body .table-body-th {
		display: grid;
		grid-template-columns: repeat(v-bind(cellNum), 1fr);
		margin-bottom: 10px;
		text-align: center;
	}
	.table-head {
		border-bottom: 1px solid #fff;
		@media screen and (min-width: 769px) {
			font-size: 24px;
			padding: 20px 0;
		}
		@media screen and (max-width: 768px) {
			font-size: 14px;
			padding: 0 0 10px;
		}
	}
    .table-body .table-body-th {
        @media screen and (min-width: 769px) {
			font-size: 18px;
		}
		@media screen and (max-width: 768px) {
			font-size: 12px;
		}
    }
	:deep(.table-body) .call {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
</style>
