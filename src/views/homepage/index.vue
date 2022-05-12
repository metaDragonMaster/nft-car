<template>
	<div class="view">
		<div class="module-1 limit-max-width-media">
			<img class="logo" src="@/assets/logo/logo.png" />
			<h1 class="t-title font-y bold-500">数字汽车</h1>
			<h1 class="t-title font-y bold-500">NFT收藏平台</h1>
			<p class="ps-cell bold">
				BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS
				CAR
			</p>
			<Link class="theme-miss-angle-button" to="/luck-draw"
				>前往抽奖</Link
			>
		</div>
		<div class="module-2 limit-max-width-media">
			<div class="pc-flex">
				<div class="m2-title only-pc-1280">
					<img
						class="m2-icon"
						src="@/assets/home/m2-icon.png"
						alt=""
					/>
					<h1 class="theme-text-stroke handstand-text font-y">
						<span>N</span><span>F</span><span>T</span
						><span class="rz-90">价</span
						><span class="rz-90">值</span>
					</h1>
				</div>
				<div class="pz-right">
					<div class="only-pc">
						<ShadowTitle
							centent="官网保底回收"
							:num="2"
							cententColor="#FF4656"
							textAlign="right"
							class="t-title"
						></ShadowTitle>
					</div>
					<div class="only-ph text-center ph-m2-title  font-y">
						<h1 class="theme-text-stroke">NFT价值</h1>
						<div class="title-divider">官网保底回收</div>
					</div>
					<NFTCars></NFTCars>
				</div>
			</div>
		</div>
		<div class="module-3 limit-max-width-media">
			<!-- <h1 class="t-title font-y bold-500">图鉴收藏</h1> -->
			<ShadowTitle class="t-title" centent="图鉴收藏"></ShadowTitle>
			<p class="ps-cell bold">
				BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS
				CAR
			</p>
			<Link class="theme-miss-angle-button" to="/luck-draw"
				>前往抽奖</Link
			>
		</div>
		<div class="module-4 limit-max-width-media">
			<div class="infor">
				<h1 class="t-title font-y bold-500">合作伙伴</h1>
				<p class="ps-cell bold">
					BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A
					SPORTS CAR
				</p>
			</div>
			<img class="banner" src="@/assets/home/m4-banner.png" />
		</div>
	</div>
</template>

<script setup>
import ShadowTitle from "@/components/shadowTitle";
import NFTCars from "@/components/NFTCars"
</script>
<style lang="scss" scoped>
.view {
	user-select: none;
	.theme-miss-angle-button {
		@media screen and (max-width: 768px) {
			min-width: 120px;
			font-size: 12px;
		}
		@media screen and (min-width: 769px) {
			min-width: 245px;
		}
	}
	.ps-cell {
		margin: 20px 0;
		@media screen and (max-width: 768px) {
			font-size: 12px;
		}
		@media screen and (min-width: 769px) {
			font-size: 18px;
		}
	}
	& > [class^="module"] {
		background-repeat: no-repeat;
		background-position: top center;
		background-size: cover;
		background-color: #000;
		@media screen and (max-width: 768px) {
			min-height: 667px;
			.t-title {
				font-size: 48px;
			}
			.ps-cell {
				max-width: 390px;
			}
		}
		@media screen and (min-width: 769px) {
			min-height: 1080px;
			.t-title {
				font-size: 128px;
			}
			.ps-cell {
				max-width: 580px;
			}
		}
	}
	.module-1 {
		background-image: url("~@/assets/home/module-1-bg.png");
		@media screen and (max-width: 375px) {
			background-position: -580px 0;
		}
		@media screen and (max-width: 768px) {
			.logo {
				padding: 20px 0 100px 0;
			}
		}
		@media screen and (min-width: 769px) {
			.logo {
				padding: 85px 0 100px 0;
			}
		}
	}
	.module-2 {
		background-image: url("~@/assets/home/module-2-bg.png");
		// @media screen and (max-width: 768px) {
		// }
		// @media screen and (min-width: 769px) {
		// }
		display: grid;
		place-items: center;
		padding-bottom: 50px;
		.pc-flex {
			@media screen and (min-width: 769px) {
				display: flex;
			}
		}
		.m2-icon {
			width: 80px;
		}
		.m2-title {
			display: flex;
			align-items: flex-end;
		}
		.ph-m2-title {
			padding: 60px 0;
			h1 {
				font-size: 40px;
			}
		}
		.title-divider {
			color: #FF4656;
			font-size: 20px;
			position: relative;
			display: inline-block;
			padding: 10px 20px;
			&::after ,
			&::before {
				display: block;
				content: '';
				position: absolute;
				background-color: #ffffff80;
				width: 50px;
				height: 4px;
				top: calc(50% - 2px);
			}
			&::after {
				right: 100%;
			}
			&::before {
				left: 100%;
			}
		}
		.only-pc {
			@media screen and (max-width: 768px) {
				display: none;
			}
		}
		.only-ph {
			@media screen and (min-width: 769px) {
				display: none;
			}
		}
		.only-pc-1280 {
			@media screen and (max-width: 1280px) {
				display: none;
			}
		}
		.handstand-text {
			writing-mode: vertical-lr;
			transform: rotateZ(180deg);
			font-size: 125px;
			word-spacing: 20px;
			padding-bottom: 50px;
			.rz-90 {
				display: inline-block;
				transform: rotateZ(90deg);
			}
			span:not(.rz-90) {
				margin: 15px 0;
			}
		}
		.pz-right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			@media screen and (min-width: 769px) {
				flex: 1;
			}
		}
		.nft-cars {
			display: grid;
			@media screen and (min-width: 769px) {
				grid-template-columns: repeat(4, 1fr);
			}
			@media screen and (max-width: 768px) {
				grid-template-columns: repeat(2, 1fr);
			}
			.car {
				max-width: 310px;
				@media screen and (max-width: 768px) {
					margin: 0 18px;
				}
				@media screen and (min-width: 769px) {
					margin: 0 30px;
				}
			}
			.car-price {
				position: relative;
				left: 20px;
				background-color: #2b2b2b;
				border: 2px solid #fff;
				text-align: center;
				@media screen and (max-width: 768px) {
					font-size: 18px;
					padding: 4px 10px;
					top: -15px;
				}
				@media screen and (min-width: 769px) {
					font-size: 32px;
					padding: 10px;
					top: -30px;
				}
			}
		}
	}
	.module-3 {
		background-image: linear-gradient(
				to bottom,
				#2b2b2baa 30%,
				rgba(255, 255, 255, 0)
			),
			url("~@/assets/home/m3-banner.png"),
			url("~@/assets/home/module-3-bg.png"); //transparent
		background-position: 100% 100%, top right, top center;
		.shadow-title {
			font-size: 75px;
		}
		@media screen and (max-width: 768px) {
			background-size: 100%, cover, cover;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.theme-miss-angle-button {
				margin-top: 100px;
			}
		}
		@media screen and (min-width: 769px) {
			background-size: 100%, contain, cover;
			padding-block: 300px;
		}
	}
	.module-4 {
		background-image: url("~@/assets/home/module-4-bg.png");
		display: flex;
		@media screen and (max-width: 768px) {
			flex-direction: column-reverse;
			text-align: center;
			padding-block: 100px;
			h1 {
				margin: 50px 0 0 0;
				color: transparent;
				-webkit-text-stroke: 1px var(--color, #fff);
			}
		}
		@media screen and (min-width: 769px) {
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			.infor {
				width: 500px;
			}
			.banner {
				max-width: 850px;
			}
		}
	}
}
</style>
