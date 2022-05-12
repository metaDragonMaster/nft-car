<template>
	<div class="select-box" ref="selectBoxRef">
		<div
			class="select-button"
			:class="currentClass"
			@click.stop="openSelect"
		>
			<slot name="current" :current="currentItem">
				<span>{{ currentItemTitle }}</span>
			</slot>
			<el-icon class="arrow-icon" :class="{ flip: handlerSelectState }"
				><ArrowUp
			/></el-icon>
		</div>
		<transition name="el-fade-in">
			<ul class="select-items" v-show="handlerSelectState">
				<li
					v-for="item in props.data"
					:key="item[props.key]"
					:class="{
						'current-item': item[props.key] == currentId
					}"
					@click="checkItem(item)"
				>
					<slot name="item" :item="item">
						{{ item[props.title] }}
					</slot>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed, toRefs } from "vue";
import { useSafeListener } from "@/hooks/useSafeListener";
import { ArrowUp } from "@element-plus/icons-vue";

const emits = defineEmits(["checkItem"]);
const props = defineProps({
	key: {
		type: String,
		default: "id",
	},
	title: {
		type: String,
		default: "title",
	},
	data: {
		type: Array,
		default: () => [],
	},
	currentClass: {
		type: String,
	},
});
const { currentClass } = toRefs(props);
const selectBoxRef = ref();
const currentItem = computed(
	() =>
		props.data.filter((item) => currentId.value == item[props.key])[0] || {}
);
const currentItemTitle = computed(() => currentItem.value[props.title] || "");
const currentId = ref(props.data[0][props.key]);
function checkItem(item) {
	currentId.value = item[props.key];
	emits("checkItem", item);
}

// 控制下拉框
const handlerSelectState = ref(false);
function openSelect() {
	handlerSelectState.value = true;
}
function closeSelect() {
	handlerSelectState.value = false;
}
useSafeListener("click", handler);
function handler(e) {
	if (handlerSelectState.value == true && selectBoxRef.value != e.target) {
		closeSelect();
		// console.log(selectBoxRef.value,e.target)
	}
}
</script>
<style lang="scss" scoped>
.select-box {
	display: inline-block;
	cursor: pointer;
	position: relative;
	.select-button,
	.select-items {
		text-align: center;
		width: 200px;
	}
	.select-button {
		position: relative;

	}
	.select-items {
		border: 1px solid #fff;
		border-top: none;
		position: absolute;
		top: 100%;
		z-index: 999;
		li {
			display: block;
			padding: 0 10px;
			background-color: #666;
			&:not(:last-child) {
				border-bottom: 1px solid #fff;
			}
		}
		li:hover,
		.current-item {
			background-color: #333;
		}
	}
	@media screen and (min-width: 769px) {
		height: 52px;
		font-size: 16px;
		line-height: 52px;
	}
	@media screen and (max-width: 768px) {
		height: 30px;
		font-size: 12px;
		line-height: 30px;
		.select-button,
		.select-items {
			width: 140px;
		}
		.select-items {
			line-height: 45px;
		}
	}
}
.arrow-icon {
	transition: transform 0.3s;
	margin-left: 8px;
	position: absolute;
	right: 10px;
	top: calc(50% - 8px);
	&.flip {
		transform: rotateZ(180deg) translateY(-2px);
	}
}
</style>
