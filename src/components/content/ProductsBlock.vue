<template>
	<div class="block">
		<ProductCard 
			class="block__product"
			v-for="item in productCatalog" 
			:key="item.id"
			:id="item.id"
			:name="item.name"
			:description="item.description"
			:cost="item.cost"
			:image_alt="item.image_alt"
			:image_src="item.image_src" />
	</div>
</template>

<script>
import ProductCard from '@/components/content/ProductCard.vue'
import {mapGetters} from 'vuex'

export default {
	name: 'ProductsBlock',
	props: {
	},
	components: {
		ProductCard,
	},
	data(){
		return {
			productCatalog: [],
		}
	},
	computed: {
		...mapGetters([
			'GET_PRODUCTS'
			])
	},
	methods: {
		getProducts: function (value) {
			this.productCatalog = value;
		}
	},
	created(){
		this.$store.dispatch('SET_PRODUCTS');
	},
	mounted(){
		this.getProducts(this.GET_PRODUCTS);
	},
	watch: {
		GET_PRODUCTS(){
			this.getProducts(this.GET_PRODUCTS);
		}
	},
}
</script>

<style scoped lang="scss">
.block{
	width: 1044px;
	height: auto;
	display: flex;
	flex-wrap: wrap;

	&__product{
		margin: 0 0 16px 16px;
	}
}
@media (max-width: 1740px){
	.block{
		width: 803px;
	
		&__product{
			margin: 0 0 12px 12px;
		}
	}
}
/*@media (max-width: 1176px){
	.block{
		width: 348px;
	}
}*/
</style>
