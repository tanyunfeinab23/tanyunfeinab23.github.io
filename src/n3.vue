<template>
	<div>
		<el-row :gutter="20" style="line-height: 50px;text-align: center;">
			<el-col :span="3" :offset="16">
				<a href="#/n3/经典火锅">
					<div class="grid-content bg-purple">经典火锅</div>
				</a>
			</el-col>
			<el-col :span="3">
				<a href="#/n3/特色菜品">
				<div class="grid-content bg-purple">特色菜品</div>
				</a>
			</el-col>
		</el-row>
		<div>
			 当前的分类是：{{$route.params}}
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	};
</script>

<style>

</style>