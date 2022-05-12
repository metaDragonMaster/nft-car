<template>
	<div class="select-route" ref="selectRouteRef">
		<!-- @mouseenter="openSelect"
		@mouseleave="closeSelect" -->
		<div class="select-button" @click.stop="clickSelect">
			<span>{{ truncationUserAddress }}</span>
			<el-icon class="arrow-icon" :class="{ flip: handlerSelectState }"
				><ArrowUp
			/></el-icon>
		</div>
		<transition name="el-fade-in">
			<div class="select-items" v-show="handlerSelectState">
				<Link
					v-for="item in navList"
					:key="item.path"
					:to="item.path"
					>{{ item.title }}</Link
				>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";
import { UseStoreWeb3js } from "@/stores/web3js";
import { storeToRefs } from "pinia";
import { truncation, deepClone } from "@/utils/tools";
import { useRouter } from "vue-router";
import { ArrowUp } from "@element-plus/icons-vue";
// import { useSafeListener } from "@/hooks/useSafeListener";

const storeWeb3 = UseStoreWeb3js();
const { userAddress } = storeToRefs(storeWeb3);
const { startWeb3 } = storeWeb3;
const Router = useRouter();
// 获取所有路由
const AllRoutes = Router.options.routes;

// 是否有用户地址
const hadUserAddress = computed(() => userAddress.value != "");
// 页面展示用
const truncationUserAddress = computed(() =>
	hadUserAddress.value ? truncation(userAddress.value) : "链接钱包"
);
// 点击事件
function clickSelect() {
	if (hadUserAddress.value) {
		openSelect();
	} else {
		startWeb3();
	}
}

// 获取需要切换的路由
const navList = ref(flatDeepArr(AllRoutes));
function flatDeepArr(arr) {
	let list = [];
	const deepArr = deepClone(arr);
	list = deepSome(deepArr);
	return list;
}
function deepSome(arr) {
	let list = [];
	let navItem;
	for (const i in arr) {
		const element = arr[i];
		if (element.children) {
			const Navlist = element.children.filter(
				(item) => item.meta && item.meta.isNav
			);
			Navlist.map((item) => {
				navItem = {
					path: item.path,
					name: item.name,
					title: item.meta.title || "",
				};
				list.push(navItem);
			});
		}
	}
	return list;
}

// 监听点击事件，控制下拉框
const selectRouteRef = ref();

// 控制下拉框
const handlerSelectState = ref(false);

function openSelect() {
	handlerSelectState.value = true;
	window.addEventListener("click", handler, true);
}
function closeSelect() {
	handlerSelectState.value = false;
	window.removeEventListener("click", handler, true);
}
onUnmounted(() => {
	window.removeEventListener("click", handler, true);
});
// useSafeListener("click", handler,)
function handler(e) {
	if (handlerSelectState.value == true && selectRouteRef.value != e.target) {
		closeSelect();
	}
}
</script>

<style lang="scss" scoped>
.select-route {
	cursor: pointer;
	.select-button,
	.select-items {
		background-color: #ff4656;
		text-align: center;
		width: 200px;
	}
	.select-items {
		a {
			display: block;
			&:not(:last-child) {
				border-bottom: 1px solid #fff;
			}
		}
		a:hover,
		.router-link-active {
			background-color: #db2f3d;
		}
	}
	.arrow-icon {
		transition: transform 0.3s;
		margin-left: 8px;
		&.flip {
			transform: rotateZ(180deg) translateY(-2px);
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
</style>
