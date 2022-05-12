<template>
	<div class="view limit-max-width-media">
		<div class="pc-grid-head">
			<h1 class="title font-y theme-text-stroke">
				<span>团队累计收益</span>
				<span>999USDT</span>
			</h1>
			<div class="buttons">
				<Link to='/logs/luck-draw'>
					<button class="theme-gray-diamond-button">
						抽奖记录
					</button>
				</Link>
				<Link to='/logs/exchange'>
					<button class="theme-gray-diamond-button">
						兑换记录
					</button>
				</Link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script setup></script>
<style lang="scss" scoped></style>
