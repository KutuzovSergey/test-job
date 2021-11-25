<template>
  <div class="block">
    <label :for="name" class="block__description" >{{labelDescription}}</label>
    <input 
      :type="type" 
      :name="name" 
      :placeholder="placeholderProps" 
      class="block__input" 
      />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholderProps: {
      type: String,
      required: true,
    },
    labelDescription: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
      placeholder: '',
    }
  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';

  .block{
    width: 284px;
    height: 53px;
    display: flex; 
    flex-direction: column;

    &__description{
      @include textBlock(10px, 13px, #49485E, normal, normal);
      letter-spacing: -0.02em;
    }

    &__input{
      @include block(252px, 36px, 0, 4px, #FFFEFB);
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      padding: 0 16px;
      border: none;
    }
    &__input::-webkit-input-placeholder {
      @include textBlock(12px, 15px, #B4B4B4, normal, normal);
    }
    &__input:-moz-placeholder {
      @include textBlock(12px, 15px, #B4B4B4, normal, normal);
    }
  }
</style>
