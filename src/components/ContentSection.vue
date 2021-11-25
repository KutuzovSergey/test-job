<template>
	<section class="content">
		<SideForm />
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
	}
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
</style>
