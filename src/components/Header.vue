<template>
  <div class="heder">
    <div class="heder__hamburger-menu" @click="showForm">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="heder__title-block">
      <span class="heder__title">Добавление товара</span>
    </div>
    <div class="heder__block-selection">
      <select class="heder__selection" v-model="select">
        <option v-for="(item, index) in selects" :key="index" class="heder__option">{{ item }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Heder',
  props: {
    msg: String
  },
  data(){
    return {
      selects: [ 
        "По умолчанию", 
        "По цене min (от меньшего к большему)",
        "По цене max (от большего к меньшему)",
        "По наименованию",
      ],
      select: "По умолчанию",
    }
  },
  methods: {
    ...mapActions([
      'SET_MODAL_WINDOW'
      ]),
    showForm: function() {
      this.SET_MODAL_WINDOW(false);
    }
  },
  mounted(){
  },
  watch: {
    select: function () {
      let block_selection = document.querySelector('.heder__block-selection');
      let selection = document.querySelector('select.heder__selection');

      if (this.select == "По умолчанию") {

        block_selection.classList.remove('heder__selection-big');
        selection.classList.remove('heder__selection-big');
        block_selection.classList.remove('heder__selection-medium');
        selection.classList.remove('heder__selection-medium');

      } else if (this.select == "По цене min (от меньшего к большему)" || 
        this.select == "По цене max (от большего к меньшему)"){

        block_selection.classList.remove('heder__selection-medium');
        selection.classList.remove('heder__selection-medium');

        block_selection.classList.add('heder__selection-big');
        selection.classList.add('heder__selection-big');

      } else if (this.select == "По наименованию") {

        block_selection.classList.remove('heder__selection-big');
        selection.classList.remove('heder__selection-big');

        block_selection.classList.add('heder__selection-medium');
        selection.classList.add('heder__selection-medium');
      }
      this.$store.dispatch('SET_SORTING_OPTION', this.select);
    }
  },
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

    &__title-block{
      width: 290px;
      height: 35px;
      margin-top: 32px;
      text-align: center;
    }
    &__title{
      @include textBlock(28px, 35px, #3F3F3F, normal, 600);

    }
    &__block-selection{
      width: 122px;
      height: 36px;
      margin-top: 31px;
    }
    &__selection-big{
      width: 250px;
    }
    &__selection-medium{
      width: 130px;
    }
    &__selection{
      @include block(122px, 36px, 0, 4px, #FFFEFB);
      @include textBlock(12px, 15px, #B4B4B4, normal, normal);
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border: none;
    }
    &__option{
      @include textBlock(12px, 15px, #3F3F3F, normal, normal);
      @include block(122px, 36px, 0, 0, #FFFEFB);
    }
    &__hamburger-menu{
      display: none;
    }
  }
  @media (max-width: 1740px){
    .heder{
      width: 1058px;
      height: 64px;

       &__title-block{
        width: 223px;
        height: 27px;
        margin-top: 25px;
      }
      &__title{
        font-size: 22px;
      }
      &__block-selection{
        width: 94px;
        height: 28px;
        margin-top: 24px;
      }
      &__selection-big{
        width: 250px;
      }
      &__selection-medium{
        width: 130px;
      }
      &__selection{
        width: 94;
        height: 28;
      }
    }
  }
  @media (max-width: 1096px){
    .heder{
      width: 803px;
      justify-content: space-around;
    
      &__hamburger-menu{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        margin-top: 5px; 
        @include block(34px, 34px, 10px, 4px, #FFFEFB);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      }
      &__hamburger-menu>span{
        display: block;
        @include block(30, 8, 5px, 10px, #EEEEEE);
      }
    }
  }
  @media (max-width: 896px){
    .heder{
      width: 536px;
    }
  }
  @media (max-width: 556px){
    .heder{
      width: 269px;
      height: 180px;
      flex-direction: column;

      &__title-block{
        width: 100%;
        height: auto;
        margin-top: 5px;
      }
      &__title{
        font-size: 20px;
      }
      &__block-selection{
        width: 100%;
        height: auto;
        margin-top: 5px;
      }
    }
  }
</style>