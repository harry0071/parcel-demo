<template>
	<div id="app">
		<router-view />
		Hello {{ msg }}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'Parcel'
			}
		},
	}
</script>

<style scoped lang="less">
	@textColor:pink;
	#app{
		height: 100vh;
		color: @textColor;
		font-size: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>