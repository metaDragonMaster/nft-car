<template>
	<ul class="nft-cars">
		<li class="car">
			<img src="@/assets/home/car-s.png" alt="" />
			<div class="font-y car-price">= 50u</div>
		</li>
		<li class="car">
			<img src="@/assets/home/car-sr.png" alt="" />
			<div class="font-y car-price">= 50u</div>
		</li>
		<li class="car">
			<img src="@/assets/home/car-n.png" alt="" />
			<div class="font-y car-price">= 50u</div>
		</li>
		<li class="car">
			<img src="@/assets/home/car-ssr.png" alt="" />
			<div class="font-y car-price">= 50u</div>
		</li>
	</ul>
</template>
<style lang="scss" scoped>
.nft-cars {
	display: grid;
	@media screen and (min-width: 1080px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (max-width: 1079px) {
		grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 20px;
	}
	.car {
		max-width: 310px;
		@media screen and (max-width: 768px) {
			margin: 0 10px;
		}
		@media screen and (min-width: 769px) {
			margin: 0 30px;
		}
	}
	.car-price {
		background-color: #2b2b2b;
		border: 2px solid #fff;
		text-align: center;
		@media screen and (max-width: 768px) {
			font-size: 18px;
			padding: 4px 10px;
		}
		@media screen and (min-width: 769px) {
            position: relative;
		    left: 20px;
			font-size: 32px;
			padding: 10px;
			top: -30px;
		}
	}
}
</style>
