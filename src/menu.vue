<template>
	<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
		<el-menu-item index="/">首页</el-menu-item>
		<el-menu-item index="/n2">品牌</el-menu-item>
		<el-menu-item index="/n3/经典锅底">菜品</el-menu-item>
		<el-menu-item index="/n4">动态</el-menu-item>
		<el-menu-item index="/n5">门店</el-menu-item>
		<el-menu-item index="/n6">加盟</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex2: '/'
			};
		},
		mounted(){
			this.activeIndex2 = this.$route.path
		},
		methods: {
			handleSelect(key, keyPath) {
				location.href = '#'+key
//				console.log(key);
			}
		}
	}
</script>

<style>

</style>