<template>
	<div class="select-quality">
		<SelectBox :data="qualitys" :currentClass="currentClass" @checkItem="checkItem"></SelectBox>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import SelectBox from "../SelectBox";
const qualitys = [
	{
		id: "n",
		title: "N",
	},
	{
		id: "r",
		title: "R",
	},
	{
		id: "s",
		title: "S",
	},
	{
		id: "sr",
		title: "SR",
	},
	{
		id: "ssr",
		title: "SSR",
	},
];
const currentClass = computed(() =>  'theme-background-' + currentAliveId.value);
const currentAliveId = ref("r");
// const currentAliveQuality = computed(
// 	() => qualitys.filter((item) => item.id == currentAliveId.value)[0] || {}
// );
function checkItem(item) {
	currentAliveId.value = item.id;
}
</script>
<style lang="scss" scoped>
.select-quality {
	display: inline-block;
}
</style>
