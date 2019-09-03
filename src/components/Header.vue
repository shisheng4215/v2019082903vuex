<template>
	<div >
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<router-link to="/" tag="li" class="navbar-brand"><a>Stocks Trade</a></router-link>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul class="navbar-nav mr-auto">
		      <router-link to="/stocks" activeClass="active"  class="nav-link active"><a>Stocks</a></router-link>
			   <router-link to="/portfolio" activeClass="active"  class="nav-link active"><a>Portfolio</a></router-link>
			   	  
		      <li class="nav-item dropdown">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          Save && Load
		        </a>
		        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a class="dropdown-item" href="#">Save Data</a>
		          <a class="dropdown-item" href="#">Load Data</a>
		          <div class="dropdown-divider"></div>
		        </div>
		      </li>
			  <router-link to="" class="nav-link active">Fouds:{{fouds}}</router-link>	
		    </ul>
		  </div>
		</nav>
	</div>
</template>

<script>
	export default{
		computed:{
			fouds(){
				return this.$store.getters.fouds;
			}
		}
	}
</script>

<style>
	body{
		padding:50px;
	}
</style>
