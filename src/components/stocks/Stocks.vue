<template>
	<div >
		<div class="row">
			<app-stock 
				v-for="stock in stocks" 
				:stock="stock" 
				 class="col-lg-2"></app-stock>
		</div>
	</div>
</template>

<script>
	import Stock from './Stock.vue';
	
	export default{
		components:{
			'app-stock':Stock
		},
		computed:{
			stocks(){
				return this.$store.getters.stocks;
			}
		}
	}
</script>

<style>
</style>
