<template>
	<form class="form" @submit.prevent="getData">
		<div class="form__block">
			<label for="name" class="form__description" >Наименование товара<FieldMarking class="form__marking" /></label>
			<input 
				type="text" 
				name="name" 
				placeholder="Введите наименование товара" 
				class="form__field" 
				@focus="usualView($event)"
				v-model.trim="productInfo.name" />
			<FillingError 
				:error_text="error_text"
				class="form__error name" />
		</div>
		<div class="form__block form__block-textarea">
			<label for="description_product" class="form__description" >Описание товара</label>
			<textarea 
				name="description_product" 
				placeholder="Введите описание товара"
				class="form__textarea form__field"
				v-model.trim="productInfo.description">
			</textarea>
		</div>
		<div class="form__block">
			<label for="linck_product" class="form__description" >Ссылка на изображение товара<FieldMarking class="form__marking" /></label>
			<input 
				type="text" 
				name="linck_product" 
				placeholder="Введите ссылку" 
				class="form__field" 
				@focus="usualView($event)"
				v-model.trim="productInfo.image_src" />
			<FillingError 
				:error_text="error_text"
				class="form__error linck_product" />
		</div>
		<div class="form__block">
			<label for="product_cost" class="form__description" >Цена товара<FieldMarking class="form__marking" /></label>
			<input 
				type="text" 
				name="product_cost" 
				placeholder="Введите цену" 
				class="form__field"
				@focus="usualView($event)" 
				v-model.trim="productInfo.cost" />
			<FillingError  
				:error_text="error_text"
				class="form__error product_cost" />
		</div>
		<button type="submit" class="form__button" :disabled="!disable">Добавить товар</button>
	</form>
</template>

<script>
import FieldMarking from '@/components/serviceComponents/FieldMarking.vue'
import FillingError from '@/components/serviceComponents/FillingError.vue'
import {mapActions} from 'vuex'

export default {
	name: 'SideForm',
	components: {
		FieldMarking,
		FillingError,
	},
	props: {
	},
	data(){
		return {
			productInfo: {
				name: '',
				description: '',
				image_src: '',
				cost: '',
			},
			disable: true,
			error_text: 'Поле является обязательным',
		}
	},
	methods:{
		...mapActions(['SET_PRODUCT']),
		processingData: function (data) {
			let id = 1;
			let arrly_id = [];
			let received_data = {};

			for (let key in data) {
				received_data[key] = data[key];
			}

			this.productInfo.name = '';
			this.productInfo.description = '';
			this.productInfo.image_src = '';
			this.productInfo.cost = '';

			let get_id = (all_products) =>{
				for (let i = 0; i < all_products.length; i++) {
					arrly_id.push(+all_products[i].id);
				}
				id = Math.max.apply(null, arrly_id);

				return `${++id}`
			}
			
			received_data.cost = `${received_data.cost} руб.`;			
			received_data.image_alt = received_data.name;
			received_data.id = get_id(this.$store.getters.GET_PRODUCTS);
			
			this.SET_PRODUCT(received_data);
		},
		getData: function () {
			const required_fields = document.querySelectorAll('input.form__field');
			const button = document.querySelector('button.form__button');
			let number_fields = required_fields.length;

			for (var i = 0; i < required_fields.length; i++) {

				if (required_fields[i].value == '') {
					const message_error = document.querySelector(`.form__error.${required_fields[i].name}`);
					
					message_error.classList.add('show-error');
					required_fields[i].classList.add('input-error');
					button.classList.add('form__button-disable');
					this.disable = false;
					number_fields = --number_fields;
				}
			}

			if (number_fields === required_fields.length) {
				this.processingData(this.productInfo);
			}
		},
		usualView: function (event) {
			const elem = event.target;
			const message_error_elem = document.querySelector(`.form__error.${elem.name}`);
			const but = document.querySelector('button.form__button');

			message_error_elem.classList.remove('show-error');
			elem.classList.remove('input-error');
			but.classList.remove('form__button-disable');
			this.disable = true;
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/style.scss';

	.form{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@include block(284px, 440px, 24px, 4px, #FFFEFB);
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);

		&__button{
			width: 284px;
			height: 36px;
			border-radius: 10px;
			font-size: 12px;
			line-height: 15px;
			border: none;
			background-color: #7BAE73;
			@include textBlock(12px, 15px, #FFFFFF, normal, 600);
		}
		&__button-disable{
			color: #B4B4B4!important;
			background-color: #EEEEEE!important;
		}
		&__block{
			width: 284px;
			height: 53px;
			display: flex;
			flex-direction: column;
			position: relative;
		}

		&__error{
			position: absolute;
			top: 49px;
			display: none;
		}

		&__block-textarea{
			height: 125px;
		}

		&__description{
			@include textBlock(10px, 13px, #49485E, normal, normal);
			letter-spacing: -0.02em;
			position: relative;
		}

		&__marking{
			position: absolute;
		}

		&__field{
			@include block(252px, 36px, 0, 4px, #FFFEFB);
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			padding: 0 16px;
			border: none;
		}

		&__textarea{
			height: 108px;
			padding-left: 16px;
			padding-right: 16px;
			padding-top: 9px;
			resize: none;
		}

		&__field::-webkit-input-placeholder {
			@include textBlock(12px, 15px, #B4B4B4, normal, normal);
		}

		&__field:-moz-placeholder {
			@include textBlock(12px, 15px, #B4B4B4, normal, normal);
		}
	}
	@media (max-width: 1740px){
		.form{
			width: 218px;
			height: 338px;
			padding: 18px;

			&__button{
				width: 218px;
				height: 27px;
			}

			&__block{
				width: 218px;
				height: 41px;
			}

			&__error{
				top: 37px;
			}

			&__block-textarea{
				height: 96px;
			}

			&__field{
				width: 193px;
				height: 27px;
				padding: 0 12px;
			}
			
			&__textarea{
				height: 83px;
				padding-left: 12px;
				padding-right: 12px;
				padding-top: 7px;
			}
		}
	}
</style>
