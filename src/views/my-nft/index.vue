<template>
	<div class="view limit-max-width-media">
		<div class="view-title">
			<h1 class="font-y bold-500">我的NFT</h1>
			<SelectQuality></SelectQuality>
		</div>
		<div class="my-nft-cars">
			<div class="theme-text-stroke font-y only-pc">DIGITAL CAR</div>
			<div class="car-bg theme-bg-gary"><NFTCars></NFTCars></div>
		</div>
		<div class="only-pc my-nft-title ">
			<div class="title theme-text-stroke font-y">我的NFT</div>
		</div>
	</div>
</template>

<script setup>
import SelectQuality from "@/components/SelectQuality";
import NFTCars from "@/components/NFTCars";
</script>
<style lang="scss" scoped>
.view {
	background-image: url("~@/assets/background/my-nft.png");
	background-repeat: no-repeat;
	background-position: top center;
	background-size: cover;
	padding-bottom: 60px;
	.view-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 0;
	}
	.only-pc {
		@media screen and (min-width: 1550px) {
			display: initial;
		}
		@media screen and (max-width: 1549px) {
			display: none;
		}
	}
	.my-nft-cars {
		position: relative;
		.car-bg {
			position: relative;
			z-index: 1;
			backdrop-filter: blur(8px);
			@media screen and (min-width: 1080px) {
				padding: 48px 30px 100px;
			}
			@media screen and (max-width: 1079px) {
				padding: 20px 0;
			}
		}
		.theme-text-stroke {
			font-size: 100px;
			transform: rotateZ(180deg);
			writing-mode: vertical-lr;
			white-space: nowrap;
			position: absolute;
			bottom: 0;
			left: -80px;
			z-index: 1;
		}
	}
	.my-nft-title {
		font-size: 150px;
		line-height: 100px;
		.title {
			text-align: right;
			position: relative;
			top: -50px;
			z-index: 3;
			&::after {
				display: block;
				content: '';
				position: absolute;
				left: -45px;
				bottom: 0;
				width: calc(100% - 585px);
				height: 1px;
				background-color: #fff;
			}
		}
	}
}
</style>
