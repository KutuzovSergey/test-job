<template>
	<section class="content">
		<SideForm class="content__form-adaptive" :id="1" />
		<ProductsBlock />
	</section>
</template>

<script>
import SideForm from '@/components/content/SideForm.vue'
import ProductsBlock from '@/components/content/ProductsBlock.vue'

export default {
	name: 'ContentSection',
	components: {
		SideForm,
		ProductsBlock,
	},
	props: {
		msg: String
	},
}
</script>

<style scoped lang="scss">
	.content{
		width: 1376px;
		height: 100%;
		display: flex;
		height: auto;
		padding: 0 32px;
	}
	@media (max-width: 1740px){
		.content{
			width: 1058px;
			padding: 0 25px;
		}
	}
	@media (max-width: 1096px){
		.content{
			width: 803px;
			&__form-adaptive{
				display: none;
			}
		}
	}
	@media (max-width: 896px){
		.content{
			width: 536px;
		}
	}
	@media (max-width: 556px){
		.content{
			width: 269px;
		}
	}
</style>
