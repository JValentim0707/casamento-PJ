<template>
  <div style="height: 100%; background-color: whitesmoke;" class="d-flex flex-column content-container">
    <div>
      <div class="hover-image">
        <div class="hover-text">Seja Benvido</div>
        <div class="hover-text">Ficamos Felizes de Ver Você!</div>
      </div>
      <v-img
      lazy-src="../assets/gift.jpg"
      src="../assets/gift.jpg"
      min-width="100%"
      max-height="500"
      ></v-img>
    </div>
    <div class="present-container">
      <div class="main-text"> Gostaria de Presentear Nosso Casal</div>
      <div class="main-text">De uma Olhada na Nossa Lista de Presentes</div>
      <v-btn class="button-present" color="#3E945F" dark elevation="2" height="48" @click="openListPresent">Veja Nossa Lista</v-btn>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'PresentComponent',

    components: {
    },

    data: () => ({
      activeSerch: false,
      code: null,
      confirmed: false,
      peopleGroup: [],
    }),


    methods: {
      openListPresent() {
        window.open('https://lista.havan.com.br/Convidado/ItensListaPresente/693751')
      }
    }
  }
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100;200;300;400;500;600;700;800&display=swap');

.hover-image {
  // background-color: #59365c69;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 14;
  height: 100%;
  max-height: 50%;
  position: absolute;

  .hover-text {
    font-size: 30px;
    font-family: 'Martian Mono', monospace;
    font-weight: 700;
    color: black;
  }

  @media (max-width: 600px) {
    max-height: 250px;
    .hover-text {
      font-size: 14px;
    }
  }
}
.present-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  background-color: #59365c69;

  @media (max-width: 600px) {
    align-items: center;
  }
}

.main-text {
  font-family: 'Martian Mono', monospace;
  font-weight: 700;
  font-size: 30px;
  text-align: start;
  color: white;
  margin-right: 35px;

  @media (max-width: 600px) {
   font-size: 18px;
   margin-bottom: 8px;
   margin-right: 0px;
   padding: 8px;
   text-align: center;
  }

}

.image-computer {
  @media (max-width: 600px) {
    display: none;
  }
}

.button-present {
  margin-top: 14px;
  margin-right: 35px;

  @media (max-width: 600px) {
    margin-right: 0px;
    
  }

}
</style>
