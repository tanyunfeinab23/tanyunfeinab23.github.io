<template>
	<div id="app">
		 <div style="height: 60px;background: #ccc;position: absolute;top: 0;left: 0;width: 100%;">
		 	<menus></menus>
		 </div>
		 <div style="min-height: 500px;margin-top: 60px;">
		 	   <router-view></router-view>
		 </div>
		 <div style="height: 150px;background: #ccc;">
		 	
		 </div>
	</div>
</template>

<script>
	import menus from './menu.vue'
	export default {
		name: 'app',
		components:{
			menus
		},
		data() {
			return {
                
			}
		}
	}
</script>

<style>
    *{
    	margin: 0;
    	padding: 0;
    }
</style>