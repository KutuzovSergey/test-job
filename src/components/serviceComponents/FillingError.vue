<template>
  <div class="error">
    <span class="error__text">{{error_text}}</span>
  </div>
</template>

<script>
export default {
  name: 'FillingError',
  props: {
    error_text: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
    }
  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';

  .error{
    width: 100%;
    height: auto;

    &__text{
      @include textBlock(8px, 10px, #FF8484, normal, normal);
      letter-spacing: -0.02em;
    }
  }
</style>
