const state={
	fouds:10000,
	stocks:[]
};

const mutations={
	'BUY_STOCK'(state,{stockId,quantity,stockPrice}){
		const record = state.stocks.find(element=>element.id==stockId);
		if(record){
			record.quantity +=quantity;
		}else{
			state.stocks.push({
				id:stockId,
				quantity:quantity
			});
		}
		const costFouds = stockPrice*quantity;
		if(state.fouds>=costFouds){
			state.fouds -=costFouds
		}else{
			alert('余额不足! \n所需金额:'+costFouds);
		}

	},
	
	'SELL_STOCK'(state,{stockId,quantity,stockPrice}){
		const record = state.stocks.find(element=>element.id==stockId);
		if(record.quantity > quantity){
			record.quantity-=quantity;
		}else{
			state.stocks.splice(state.stocks.indexOf(record),1);
		}
		state.fouds+=stockPrice*quantity;
	}
};

const actions={
	'SELL_STOCKS'({commit},order){
		commit('SELL_STOCKS',order);
	},
	'BUY_STOCKS'({commit},order){
		commit('BUY_STOCK',order);
	}
};

const getters={
	stockPortfolio(state,getters){
		return state.stocks.map(stock=>{
			const record = getters.stocks.find(element=>element.id==stock.id);
			return{
				id:stock.id,
				quantity:stock.quantity,
				name:record.name,
				price:record.price
			}
		});
	},
	fouds(state){
		return state.fouds;
	}
};

export default{
	state,
	mutations,
	actions,
	getters
}