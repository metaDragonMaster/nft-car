<template>
	<div class="view limit-max-width-media">
		<div class="content-bg">
			<div class="content">
				<h1 class="font-y bold-500 theme-text-stroke">我的邀请链接</h1>
				<p>{{ slocationLink }}</p>
				<button class="copy-button" @click="PlusElCopy(locationLink)">
					复制
				</button>
				<div class="theme-bg-gary friend-card">
					<h1 class="font-y bold-500 theme-text-stroke">
						好友收益比例
					</h1>
					<p>一级好友收益比例 0.5%</p>
					<p>二级好友收益比例 0.3%</p>
					<p>一级好友收益比例 0.2%</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";

import { truncation, PlusElCopy } from "@/utils/tools";
import { UseStoreWeb3js } from "@/stores/web3js";
import { storeToRefs } from "pinia";
const storeWeb3js = UseStoreWeb3js();
const { userAddress } = storeToRefs(storeWeb3js);
const locationLink = computed(() =>
	userAddress.value
		? `${window.location.origin}/#/homepage?bind=${userAddress.value}`
		: ""
);
const slocationLink = computed(() =>
	userAddress.value ? truncation(locationLink.value, 0, 16) : ""
);
</script>
<style lang="scss" scoped>
.view {
	.content-bg {
		min-height: 100vh;
		background-image: url("~@/assets/background/invitation-title.png"),
			url("~@/assets/background/red-car.png");
		background-position: top center, left 275px;
		background-size: contain, 957px 605px;
		background-repeat: no-repeat;
		display: flex;
		@media screen and (max-width: 1080px) {
			background-size: contain;
			background-position: 0 120px, left 300px;
		}
	}
	.content {
		margin-left: auto;
		text-align: center;

		@media screen and (min-width: 1080px) {
			width: 1080px;
			& > h1,
			& > p {
				margin: 40px 0 0;
			}
			& > button {
				margin: 40px 0;
			}
		}
		@media screen and (max-width: 1080px) {
			width: 100%;
			& > h1 {
				margin: 80px 0 0;
			}
			& > p {
				margin: 40px 0 0;
			}
            & > button {
				margin: 40px 0 150px;
			}
		}

		& > button {
			width: 200px;
			height: 52px;
			background-color: #ff4656;
		}
        .friend-card {
            padding: 40px 0 0;
            & > * {
                padding-bottom: 30px;
            }
        }
	}
}
</style>
