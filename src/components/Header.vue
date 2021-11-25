<template>
  <div class="heder">
    <div class="heder__title-block">
      <span class="heder__title">Добавление товара</span>
    </div>
    <div class="heder__block-selection">
      <select class="heder__selection">
        <option class="heder__selection-text">По умолчанию</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heder',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/style.scss';
@import '@/scss/_mixins.scss';

  .heder{
    width: 1376px;
    height: 83px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__block{
      width: 30%;
      height: 83px;
    }
    &__title-block{
      width: 290px;
      height: 35px;
      margin-top: 32px;
    }
    &__title{
      @include textBlock(28px, 35px, #3F3F3F, normal, 600);
    }
    &__block-selection{
      width: 122px;
      height: 36px;
      margin-top: 31px;
    }
    &__selection{
      @include block(122px, 36px, 0, 4px, #FFFEFB);
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border: none;
    }
    &__selection-text{
      @include textBlock(12px, 15px, #B4B4B4, normal, normal);
    }
  }
</style>
