<template>
	<div class="home">
		<Header class="home__block" />
		<ContentSection class="home__block" />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import ContentSection from '@/components/ContentSection.vue'

export default {
	name: 'Home',
	components: {
		Header,
		ContentSection,
	}
}
</script>

<style scoped lang="scss">
	.home{
		width: 100%;
		height: 100%;

		&__block{
			margin: auto;
		}
	}
</style>
