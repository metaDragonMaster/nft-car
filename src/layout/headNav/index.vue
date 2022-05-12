<template>
	<div class="header-inner limit-max-width-media">
		<img class="logo" src="../../assets/logo/logo.png"/>
		<SelectRoute></SelectRoute>
	</div>
</template>

<script setup>
import SelectRoute from "./selectRoute"
</script>
<style lang="scss" scoped>
.header-inner {
	background-color: #1f2326;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
