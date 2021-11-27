<template>
  <div class="window">
    <div class="window__wrapper">
      <div class="window__close" @click="closeForm">
        <img src="@/assets/close.png" alt="close">
      </div>
      <SideForm class="window__form" :id="2" />
    </div>
  </div>
</template>

<script>
import SideForm from '@/components/content/SideForm.vue'
import {mapActions} from 'vuex'

export default {
  name: 'ModalWindowForm',
  components: {
    SideForm,
  },
  props: {
  },
  data(){
    return {
    }
  },
  methods: {
    ...mapActions([
      'SET_MODAL_WINDOW'
      ]),
    closeForm: function() {
      this.SET_MODAL_WINDOW(true);
    }
  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';

  .window{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999999999;
    background-color: rgba(0, 0, 0, 0.5);

    &__wrapper{
      position: fixed;
      top: 20%;
      left: 35.6%;
      width: 236px;
      height: 356px;
    }
    &__close{
      @include block(26px, 26px, 6px, 30px, #FFFEFB);
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      position: absolute;
      cursor: pointer;
      display: flex;
      z-index: 99999999;
      left: 230px;
      bottom: 330px;
    }

    &__close>img{
      width: 19px;
      height: 19px;
      margin: auto;
    }
  }
  @media (max-width: 896px){
    .window{

      &__wrapper{
        left: 30.6%;
        top: 10%;
      }
    }
  }
  @media (max-width: 556px){
    .window{
      
      &__wrapper{
        left: 25.6%;
        top: 5%;
      }
    }
  }
  @media (max-width: 456px){
    .window{
      
      &__wrapper{
        left: 22.6%;
      }
    }
  }
  @media (max-width: 379px){
    .window{
      
      &__wrapper{
        left: 14.6%;
      }
    }
  }
</style>
