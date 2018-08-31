<template>
	<div>
		我是Header组件
		<router-link to="/page1">前往page1</router-link>
	</div>
</template>

<style scoped lang="less">
	@textColor:orange;
	div{
		color:@textColor;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>