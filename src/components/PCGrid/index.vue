<template>
	<div class="pc-grid">
		<div class="check-select">
			<button
				v-for="item in props.selects"
				:key="item[props.key]"
				class="theme-bg-gary"
				:class="{ active: currentId == item[props.key] }"
				@click="checkItem(item)"
			>
				{{ item.title }}
			</button>
		</div>
		<div class="grid-right">
			<div class="flex flex-rr">
				<SelectBox
					:data="props.selects"
					currentClass="theme-bg-gary"
					@checkItem="checkItem"
				></SelectBox>
			</div>
			<slot name="table"></slot>
		</div>
	</div>
</template>

<script setup>
import SelectBox from "../SelectBox";
import { defineProps } from "vue";
import { useVModel } from "@/hooks/useVModel";
// const emits = defineEmits(['update:value'])
const props = defineProps({
	key: {
		type: String,
		default: "id",
	},
	selects: {
		type: Array,
		default: () => [],
	},
	value: {
		type: [String, Number],
	},
});
const currentId = useVModel(props, "value");
function checkItem(item) {
	currentId.value = item[props.key];
}
</script>
<style lang="scss" scoped>
:deep() .select-button-bg {
	background-color: #999;
}
.select-box {
	margin-bottom: 10px;
}
.pc-grid {
	display: grid;
	grid-template-columns: 150px auto;
	grid-column-gap: 25px;
	.check-select {
		text-align: center;
		button {
			display: block;
			width: 100%;
			position: relative;
			height: 52px;
			margin-bottom: 10px;
			border-radius: 0;
			overflow: hidden;
			&::after,
			&::before {
				display: block;
				content: "";
				background-color: #ff4656;
				position: absolute;
				z-index: 1;
				transition: top 0.3s, left 0.3s;
			}
			&::after {
				width: 100%;
				height: 3px;
				top: 0;
				left: -100%;
			}
			&::before {
				width: 3px;
				height: 100%;
				left: 0;
				top: -100%;
			}
		}
		button.active {
			&::after {
				left: 0;
			}
			&::before {
				top: 0;
			}
		}
	}
	@media screen and (max-width: 768px) {
		display: initial;
		.check-select,
		.grid-right &::after,
		.grid-right &::before {
			display: none;
		}
	}
	.grid-right {
		@media screen and (min-width: 769px) {
			position: relative;
			padding-left: 30px;
			.flex {
				display: none;
			}
			&::after,
			&::before {
				display: block;
				content: "";
				position: absolute;
				top: 0;
				left: 0;
			}
			&::after {
				width: 8px;
				height: 8px;
				background-color: #fff;
				transform: rotateZ(45deg) translateX(-4px);
			}
			&::before {
				width: 3px;
				height: 100%;
				background-image: repeating-linear-gradient(
					transparent,
					transparent 10px,
					#fff 10px,
					#fff 20px
				);
			}
		}
	}
}
</style>
