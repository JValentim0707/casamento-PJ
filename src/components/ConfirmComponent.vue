<template>
  <div class=" d-flex content-container">
    <div class="confirm-container">
      <div class="input-container" :class="{'active-serch': activeSerch}">
        <div class="search-container">
          <div class="text-label">{{activeSerch ? 'Buscar Codigo' : 'Insira Seu Codigo'}}</div>
          <div class="form-code">
            <v-text-field solo type="number"></v-text-field>
            <v-btn class="ml-2" elevation="2" height="48" @click="searchCode">Buscar</v-btn>
          </div>
        </div>
        <div class="divider"></div>
        <div class="content-family" :class="{'content-family-active': activeSerch}">
          <div class="family-title">Lista de Familiares</div>
          <div class="family-box">
            <div class="test">
              <div class="family-list-people" v-for="(people, i) in peopleGroup.people" :key="i">
                <v-icon size="30px" color="white" class="mr-2">mdi-account</v-icon>
                <div>{{ people }}</div>
              </div>
              <v-btn class="mt-3" color="#3E945F" dark elevation="2" height="48"  width="100%" @click="searchCode">Confirmar</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ConfirmComponent',

    components: {
    },

    data: () => ({
      activeSerch: false,
      peopleGroup:
        {
          code: '5543',
          people: ['Fabiana Valentim Ferraz', 'Jose Alfredo', 'Lulu Maravilha', 'Bia Bacia']
        }
    }),


    methods: {
      setValueMenu(value) {
        this.selectedMenu = value
      },
      searchCode() {
        this.activeSerch = true
      }
    }
  }
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
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

.content-container {
  width: 100%;
  height: 100%;
}

.active-serch {
  height: 100% !important;
  transition: height 2s !important;
  padding: 0px !important;

  .search-container {
    // margin-left: 45%;
    transition: transform 2s;
    transform: translateX(25%);
    width: 100%;

  }

  .form-code {
    width: 100% !important;
    max-width: 700px;
  }
}

.confirm-container {
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 100%;
  .input-container {
    display: flex;
    flex-direction: column;
    height: 110px;
    background-color: #744D94;
    transition: width 60s;
    width: 100%;
    padding: 12px;

    .text-label {
      color: white;
      font-size: 18px;
      font-weight: bold;
    }

    .form-code {
      display: flex;
      width: 45%;
    }
  }
}

.divider {
  background-color: white;
  width: 100%;
  height: 2px;
}

.content-family {
  display: none;
}

.content-family-active {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-left: 34%;

  .family-title{
    margin-top: 12px;
    font-family: 'Great Vibes', cursive;
    color: white;
    font-size: 32px;
    font-weight: bold;
  }

  .family-box {
    width: 30%;
    max-width: 500px;
    min-width: 300px;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .test {

  }

  .family-list-people {
    font-family: 'DM Serif Display', serif;
    display: flex;
    // justify-content: center; 
    margin-bottom: 12px;
    text-align: start;
    font-size: 22px;
    color: white;
  }
}

</style>
