<template>
	<div>
		<div class="panel-body">
			<div class="panel-title">
				<h2>&nbsp;{{stock.name}} <small>&nbsp;  Price:{{stock.price}}</small></h2>
			</div>
			<div class="form-inline">
				<div class="pull-left">
					<input type="number" class="form-control" v-model="quantity">
				</div>
				<div class="pull-right">
					<button @click="buyStock" class="btn btn-success">Buy</button>
				</div>				
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		props:['stock'],
		data(){
			return{
				quantity:0
			}
		},
		methods:{
			buyStock(){
				const order={
					stockId:this.stock.id,
					stockPrice:this.stock.price,
					quantity:this.quantity
				};
				console.log(order);
				this.$store.dispatch('BUY_STOCKS',order);
				this.quantity=0;
				
			}
		}
		
	}
</script>

<style>
</style>
