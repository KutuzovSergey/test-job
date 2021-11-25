<template>
	<div class="card">
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
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
	.card{
		overflow: hidden;
		@include block(332px, 423px, 0, 4px, #FFFEFB);
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);

		&__image{
			width: 332px;
			height: 200px;
		}

		&__image>img{
			width: 100%;
			height: auto;
		}

		&__info{
			@include block(300px, 199px, 16px, 4px, #FFFEFB);
			padding-bottom: 24px;
		}

		&__name>span{
			@include textBlock(20px, 25px, #3F3F3F, normal, 600);
		}

		&__description>p{
			@include textBlock(16px, 20px, #3F3F3F, normal, normal);
		}

		&__cost{
			@include textBlock(24px, 30px, #3F3F3F, normal, 600);
		}
	}
</style>
