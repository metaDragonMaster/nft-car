<template>
	<div class="shadow-title font-y bold-500">
		<p
			class="shadow-title-item"
			:style="{
				color: props.cententColor,
				textAlign: props.textAlign,
			}"
		>
			{{ props.centent }}
		</p>
		<!-- 'margin-top' : `${props.num * 10}px`, -->
		<p
			class="shadow-title-item-sub theme-text-stroke"
			v-for="item in props.num"
			:key="item"
			:style="itemSubStyle(item)"
		>
			{{ props.centent }}
		</p>
	</div>
</template>

<script setup>
import { computed, defineProps } from "vue";
const props = defineProps({
	centent: {
		type: String,
		default: "",
	},
	cententColor: {
		type: String,
		default: "#fff",
	},
	subColor: {
		type: String,
		default: "#fff",
	},
	num: {
		type: Number,
		default: 1,
	},
	space: {
		type: Number,
		default: 14,
	},
	textAlign: {
		type: String,
		default: "left",
	},
});
const itemSubStyle = computed(() => (item) => ({
	"--stroke-color": props.subColor,
	top: `${item * props.space}px`,
	[props.textAlign]: "0",
}));
</script>
<style lang="scss" scoped>
.shadow-title {
	position: relative;
	.shadow-title-item {
		position: relative;
		z-index: 1;
	}
	.shadow-title-item-sub {
		position: absolute;
	}
}
</style>
