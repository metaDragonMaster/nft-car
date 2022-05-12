<template>
	<div class="view">
		<div class="banner">
			<h4>豪车等你来提！</h4>
			<h1 class="font-y bold-500">2022幸运玩家</h1>
			<button class="join-button">
				<img src="@/assets/background/arrow-right.png" alt="" />
				<span class="font-y">马上参与</span>
				<img src="@/assets/background/arrow-left.png" alt="" />
			</button>
		</div>
		<div class="limit-max-width-media content">
			<div class="flex">
				<SelectQuality class="right"></SelectQuality>
			</div>
			<NFTCars></NFTCars>
			<div class="flex flex-center">
				<button class="button-2 font-y"><span>25</span>U</button>
			</div>
			<h1 class="t-title font-y bold-500 theme-text-stroke text-center">
				中奖记录
			</h1>
			<div class="theme-bg-gary">
				<ul class="logs">
					<li></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
import SelectQuality from "@/components/SelectQuality";
import NFTCars from "@/components/NFTCars";
</script>
<style lang="scss" scoped>
.view {
	background-repeat: no-repeat;
	background-position: right 850px;
	background-image: url("~@/assets/background/lg-bg-1.png");
	@media screen and (max-width: 768px) {
		background-size: contain;
	}

	.banner {
		background-image: url("~@/assets/background/lg-banner.png");
		background-repeat: no-repeat;
		background-position: top center;
		background-size: cover;
		height: 280px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		h4 {
			letter-spacing: 4px;
		}
		h1 {
			font-size: 64px;
		}
		.join-button {
			color: #2ae4d9;
			font-size: 32px;
			display: flex;
			align-items: center;
			border-top: 1px solid #2ae4d9;
			border-bottom: 1px solid #2ae4d9;
			padding: 0 18px;
		}
	}
	.content {
		padding-block: 25px;
		.right {
			margin-left: auto;
		}
	}
	.button-2 {
		width: 420px;
		height: 80px;
		background-image: url("~@/assets/background/six-button-2.png");
		font-size: 36px;
        margin: 20px;
		span {
			padding-right: 10px;
		}
		@media screen and (max-width: 768px) {
			width: 210px;
			height: 40px;
			background-size: cover;
		}
	}
	.t-title {
		font-size: 48px;
		padding-top: 48px;
	}
	.logs {
		padding: 20px;
	}
}
</style>
