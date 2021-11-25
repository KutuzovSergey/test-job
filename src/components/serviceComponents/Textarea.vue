<template>
  <div class="block">
    <label :for="name" class="block__description" >{{labelDescription}}</label>
    <textarea 
      :type="type" 
      :name="name" 
      :placeholder="placeholderProps"
      class="block__textarea">
    </textarea>
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
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';

  .block{
    width: 284px;
    height: 125px;
    display: flex; 
    flex-direction: column;

    &__description{
      @include textBlock(10px, 13px, #49485E, normal, normal);
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
    &__textarea::-webkit-input-placeholder {
      @include textBlock(12px, 15px, #B4B4B4, normal, normal);
    }
    &__textarea:-moz-placeholder {
      @include textBlock(12px, 15px, #B4B4B4, normal, normal);
    }
  }
</style>
