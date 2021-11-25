<template>
	<form class="form" @submit.prevent="getData">
		<div class="form__block">
			<label for="name" class="form__description" >Наименование товара<FieldMarking class="form__marking" /></label>
			<input 
				type="text" 
				name="name" 
				placeholder="Введите наименование товара" 
				class="form__input" 
				v-model.trim="productInfo.name" />
			<FillingError 
				v-if="!showError" 
				:error_text="error_text"
				class="form__error" />
		</div>
		<div class="form__block form__block-textarea">
			<label for="description_product" class="form__description" >Описание товара</label>
			<textarea 
			name="description_product" 
			placeholder="Введите описание товара"
			class="form__textarea"
			v-model.trim="productInfo.description">
			</textarea>
		</div>
		<div class="form__block">
			<label for="linck_product" class="form__description" >Ссылка на изображение товара<FieldMarking class="form__marking" /></label>
			<input 
			type="text" 
			name="linck_product" 
			placeholder="Введите ссылку" 
			class="form__input" 
			v-model.trim="productInfo.link" />
			<FillingError 
				v-if="!showError" 
				:error_text="error_text"
				class="form__error" />
		</div>
		<div class="form__block">
			<label for="product_price" class="form__description" >Цена товара<FieldMarking class="form__marking" /></label>
			<input 
			type="text" 
			name="product_price" 
			placeholder="Введите цену" 
			class="form__input" 
			v-model.trim="productInfo.price" />
			<FillingError 
				v-if="!showError" 
				:error_text="error_text"
				class="form__error" />
		</div>
		<button type="submit" class="form__button">Добавить товар</button>
	</form>
</template>

<script>
import FieldMarking from '@/components/serviceComponents/FieldMarking.vue'
import FillingError from '@/components/serviceComponents/FillingError.vue'

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
				link: '',
				price: '',
			},
			showError: true,
			error_text: 'Поле является обязательным',
		}
	},
	methods:{
		getData: function () {
			const required_fields = document.querySelectorAll('input.form__input');

			for (var i = 0; i < required_fields.length; i++) {
				if (required_fields[i].value == '') {
					this.showError = false;
				}
			}
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';

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
		&__input{
			@include block(252px, 36px, 0, 4px, #FFFEFB);
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			padding: 0 16px;
			border: none;
		}
		&__textarea{
			@include block(252px, 108px, 0, 4px, #FFFEFB);
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			padding-left: 16px;
			padding-right: 16px;
			padding-top: 9px;
			border: none;
			resize: none;
		}
		&__input::-webkit-input-placeholder {
			@include textBlock(12px, 15px, #B4B4B4, normal, normal);
		}
		&__input:-moz-placeholder {
			@include textBlock(12px, 15px, #B4B4B4, normal, normal);
		}
		&__textarea::-webkit-input-placeholder {
			@include textBlock(12px, 15px, #B4B4B4, normal, normal);
		}
		&__textarea:-moz-placeholder {
			@include textBlock(12px, 15px, #B4B4B4, normal, normal);
		}
	}
</style>
