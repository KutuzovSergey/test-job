<template>
	<div class="card">
		<div class="card__delete" @click="deleteProduct($event)" :id="id">
			<img src="@/assets/delete_button.png" alt="delete an item">
		</div>
		<div class="card__image">
			<img :src="image_src" :alt="image_alt" />
		</div>
		<div class="card__info">
			<div class="card__name">
				<span>{{name}}</span>
			</div>
			<div class="card__description">
				<p>{{description}}</p>
			</div>
			<div class="card__cost">
				<span>{{cost}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
	name: 'ProductCard',
	props: {
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		cost: {
			type: String,
			required: true,
		},
		image_src: {
			type: String,
			required: true,
		},
		image_alt: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
	methods:{
		...mapActions(['SET_DELETE_PRODUCT']),
		deleteProduct: function (event) {
			const product = event.target;
			let id;

			if (product.hasAttribute('id')) {
				id = product.getAttribute('id');
			} else if (product.parentElement.hasAttribute('id')) {
				id = product.parentElement.getAttribute('id');
			}
			this.SET_DELETE_PRODUCT(id);
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
	.card{
		position: relative;
		@include block(332px, 423px, 0, 4px, #FFFEFB);
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);

		&__image{
			width: 332px;
			height: 200px;
		}

		&__image>img{
			width: 332px;
			height: 200px;
		}

		&__info{
			@include block(300px, 167px, 16px, 4px, #FFFEFB);
			padding-bottom: 24px;
		}

		&__name>span{
			@include textBlock(20px, 25px, #3F3F3F, normal, 600);
		}

		&__description{
			@include block(100%, 112px, 0, 0, #FFFEFB);
		}
		&__description>p{
			@include textBlock(16px, 20px, #3F3F3F, normal, normal);
		}

		&__cost{
			@include textBlock(24px, 30px, #3F3F3F, normal, 600);
		}

		&__delete{
			@include block(32px, 32px, 0, 10px, #FF8484);
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
			bottom: 399px;
			left: 308px;
			position: absolute;
			cursor: pointer;
			z-index: 999999;
			display: none;
		}

		&__delete>img{
			margin: auto;
			width: 13px;
			height: 16px;
		}
	}
	.card:hover>.card__delete{
		display: flex;
	}
	@media (max-width: 1740px){
		.card{
			width: 255px;
			height: 325px;

			&__image{
				width: 255px;
				height: 153px;
			}

			&__image>img{
				width: 255px;
				height: 153px;
			}

			&__info{
				width: 230px;
				height: 128px;
				padding-left: 12px;
				padding-right: 12px;
				padding-top: 12px;
				padding-bottom: 18px;
			}
			&__name>span{
				font-size: 16px;
				@include textBlock(16px, 25px, #3F3F3F, normal, 600);
			}
			&__description{
				height: 86px;
			}
			&__description>p{
				font-size: 12px;
			}
			&__cost{
				font-size: 19px;
			}
			&__delete{
				bottom: 306px;
				left: 237px;
			}
		}
	}
</style>
