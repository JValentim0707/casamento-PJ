<template>
  <div class=" d-flex">
    <div class="d-flex flex-column">
      <MenuNavigation @setValueMenu="setValueMenu"></MenuNavigation>
    </div>
    <div>
      <div class="content-stage">
        <ConfirmComponent class="test" v-if="selectedMenu === 'confirm'"></ConfirmComponent>
      </div>
      <div class="content-text">
        <div class="text-content-name">Patricia</div>
        <div class="text-content-name">E</div>
        <div class="text-content-name">Jonathan</div>
        <div class="text-content-date">09/12/2023</div>

      </div>
      <v-img
        lazy-src="../assets/background1.jpeg"
        src="../assets/background1.jpeg"
        max-height="850"
        min-width="1920"
      ></v-img>
    </div>
  </div>
</template>

<script>
import MenuNavigation from './MenuNavigation.vue'
import ConfirmComponent from './ConfirmComponent.vue';

  export default {
    name: 'HomePage',

    components: {
      MenuNavigation,
      ConfirmComponent
    },

    data: () => ({
      selectedMenu: 'home'
    }),

    methods: {
      setValueMenu(value) {
        this.selectedMenu = value
      }
    }
  }
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
.content-text {
  z-index: 5;
  position: absolute;
  margin-left: 250px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .text-content-name {
    font-family: 'Great Vibes', cursive;
    font-size: 80px;
  }

  .text-content-date {
    font-family: 'Great Vibes', cursive;
    font-size: 60px;
  }
}

.content-stage {
  position: absolute;
  z-index: 7;
  width: calc(100% - 256px);
  height: 100%;
}


</style>
