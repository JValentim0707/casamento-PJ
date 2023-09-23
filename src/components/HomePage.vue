<template>
  <div class="background-home d-flex">
    <div class="d-flex flex-column">
      <MenuNavigation @setValueMenu="setValueMenu"></MenuNavigation>
    </div>
    <div>
      <div class="content-stage">
        <ConfirmComponent @setValueMenu="setValueMenu" class="test" v-if="selectedMenu === 'confirm'"></ConfirmComponent>
      </div>
      <div class="content-text">
        <div class="text-content-name">Patricia</div>
        <div class="text-content-name">E</div>
        <div class="text-content-name">Jonathan</div>
        <div class="text-content-date">09/12/2023</div>

      </div>
      <v-img
        class="image-computer"
        lazy-src="../assets/background1.jpeg"
        src="../assets/background1.jpeg"
        max-height="850"
        min-width="1920"
      ></v-img>
      <!-- <v-img
        class="image-mobile"
        lazy-src="../assets/background1.jpeg"
        src="../assets/background1.jpeg"
        max-width="360px"
        min-height="400px"
        max-height="640px"
      ></v-img> -->
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

.background-home {
  background-color: #F5F6F1;
  @media (max-width: 600px) { 
    background-color: #8351A6;
  }
}
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

  @media (max-width: 600px) {
    margin: 0px;
    align-items: center;
    width: calc(100% - 56px);
    // padding-right: 20%;
    padding-top: 30px;
    .text-content-name {
      font-size: 40px;
      color: white;
    }

    .text-content-date {
      font-size: 25px;
      color: white; 
    }
  }
}

.content-stage {
  position: absolute;
  z-index: 7;
  width: calc(100% - 56px);
  height: 100%;
  @media (max-width: 600px) {
    // width: calc(100% - 56px);
    // padding-right: 20%;
  }
}
.image-computer {
  @media (max-width: 600px) {
    display: none;
  }
}

.image-mobile {
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
}


</style>
