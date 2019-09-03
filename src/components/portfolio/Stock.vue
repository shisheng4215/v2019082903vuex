<template>
	<div>
		<div class="panel-body">
			<div class="panel-title">
				<h2>&nbsp;{{stock.name}} <small>&nbsp;  Price:{{stock.price}} | Quantity: {{stock.quantity}}</small></h2>
			</div>
			<div class="form-inline">
				<div class="pull-left">
					<input type="number" class="form-control ">
				</div>
				<div class="pull-right">
					<button @click="sellStock" class="btn btn-success">Sell</button>
				</div>				
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		props:['stock'],
		methods:{
			sellStock(){
				const order={
					stockId:this.stock.id,
					stockPrice:this.stock.price,
					quantity:this.quantity
				};
				this.$store.dispatch('SELL_STOCKS',order);
			}

		}
		
	}
</script>

<style>
</style>
