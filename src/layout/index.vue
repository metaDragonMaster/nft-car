<template>
	<div id="layout">
		<div id="header">
			<HeadNav></HeadNav>
		</div>
		<div id="main">
			<router-view></router-view>
		</div>
	</div>
</template>
<script setup>
import HeadNav from "./headNav";

// import Decimal from "decimal.js";
// import { computed, watch } from "vue";
// import { lockLoadHandler } from "@/utils/PlusElement";
// import { useRoute } from "vue-router";
import { UseStoreWeb3js } from "@/stores/web3js";
import { storeToRefs } from "pinia";
// import { uploadUserAllowance } from "@/common/fleekStorage";
// import {
// 	AbiAddressHash,
// 	addedValue,
// } from "@/abis/index";

// const Route = useRoute();
// const currentRouteIsNav = computed(() => Route.meta.isNav);

const storeWeb3 = UseStoreWeb3js();
const { web3,
// userAddress, Contracts
} = storeToRefs(storeWeb3);
const { startWeb3 } = storeWeb3;

init();
async function init() {
	if (!web3.value) {
		console.log("layout start web3");
		const hadweb = await startWeb3();
		console.log("layout start web3",hadweb);
	}
}

// watch(
	// () => userAddress.value,
	// (news, olds) => {
		// if (olds&&news != olds) {
		// 	console.log(`this is new userAddress: ${news}`);
		// 	allowance();
		// }
	// }
// );
// async function isRe(address) {
// 	try {
// 		// console.log(Contracts);
// 		const { HashContract } = Contracts.value;
// 		const res = await HashContract.methods.isRe(address).call();
// 		console.log("HashContract isRe", res);
// 		return res;
// 	} catch (e) {
// 		console.error(e);
// 		return false;
// 	}
// }
// async function allowance() {
// 	try {
// 		console.log(userAddress.value, AbiAddressHash);
// 		const { USDTContract } = Contracts.value;
// 		const res_allowance = await USDTContract.methods
// 			.allowance(userAddress.value, AbiAddressHash)
// 			.call();
// 		const v = new Decimal(res_allowance);
// 		console.log("是否有授权", v);
// 		if (v <= 0) {
// 			const res = await increaseAllowance();
// 			if (res) {
// 				uploadAllowance();
// 			}
// 		}
// 	} catch (e) {
// 		console.error(e);
// 	}
// }
// async function increaseAllowance() {
// 	const load = lockLoadHandler("sign in loading...");
// 	try {
// 		const { USDTContract } = Contracts.value;
// 		const res = await USDTContract.methods
// 			.increaseAllowance(AbiAddressHash, addedValue)
// 			.send({
// 				from: userAddress.value,
// 			});
// 		console.log("increaseAllowance", res);
// 		load.close();
// 		return res;
// 	} catch (e) {
// 		console.error(e);
// 		load.close();
// 		return false;
// 	}
// }
// async function uploadAllowance() {
// 	const load = lockLoadHandler("upload loading...");
// 	try {
// 		const res = await uploadUserAllowance(userAddress.value);
// 		if (res) {
// 			console.log("上传成功");
// 		}
// 		load.close();
// 	} catch (e) {
// 		console.error(e);
// 		load.close();
// 	}
// }
</script>
<style lang="scss" scoped>
#layout {
	display: flex;
	flex-direction: column;
	// justify-content: space-between;
	color: #fff;
}

#main {
	overflow: auto;
}

#header {
	position: relative;
	height: 100px;
	z-index: 999;
	@media screen and (max-width: 768px) {
		height: 60px;
	}
}
.view {
	background-color: #2a2a2a;
	min-height: calc(100vh - 100px);
	@media screen and (max-width: 768px) {
		min-height: calc(100vh - 60px);
	}
}
</style>
