<template>
	<div class="home">
		<ModalWindowForm v-if="!GET_MODAL_WINDOW" class="home__modal-window"/>
		<Header class="home__block" />
		<ContentSection class="home__block" />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import ContentSection from '@/components/ContentSection.vue'
import ModalWindowForm from '@/components/serviceComponents/ModalWindowForm.vue'
import {mapGetters} from 'vuex'

export default {
	name: 'Home',
	components: {
		Header,
		ContentSection,
		ModalWindowForm
	},
	data(){
		return{
		}
	},
	computed: {
		...mapGetters([
			'GET_MODAL_WINDOW'
		])
	},
}
</script>

<style scoped lang="scss">
	.home{
		width: 100%;
		height: 100%;

		&__block{
			margin: auto;
		}
		&__modal-window{
			display: none;
		}
	}
	@media (max-width: 1096px){
		.home{
			&__modal-window{
				display: block;
			}
		}
	}
</style>
