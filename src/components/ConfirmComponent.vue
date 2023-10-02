<template>
  <div class=" d-flex content-container">
    <div class="confirm-container">
      <div v-if="!confirmed" class="input-container" :class="{'active-serch': activeSerch}">
        <div class="search-container">
          <div class="text-label">{{activeSerch ? 'Buscar Codigo' : 'Insira Seu Codigo'}}</div>
          <div class="form-code">
            <v-text-field solo type="number" v-model="code"></v-text-field>
            <v-btn class="ml-2" elevation="2" height="48" @click="searchCode">Buscar</v-btn>
          </div>
        </div>
        <div class="divider"></div>
        <div class="content-family" :class="{'content-family-active': activeSerch}">
          <div class="family-title">Lista de Familiares</div>
          <div class="family-box">
            <div class="test">
              <div class="family-list-people" v-for="(people, i) in peopleGroup" :key="i">
                <v-icon size="30px" color="white" class="mr-2">mdi-account</v-icon>
                <div>{{ people }}</div>
              </div>
              <v-btn class="mt-3" color="#3E945F" dark elevation="2" height="48"  width="100%" @click="confirmPeople">Confirmar</v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="confirmed-screen" v-else >
        <v-icon color="white" size="80">mdi-emoticon-happy</v-icon>
        <div>Obrigado por</div>
        <div>Confirmar Presença!!</div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../services/db.js'
import { doc, setDoc } from 'firebase/firestore'

  export default {
    name: 'ConfirmComponent',
    props: ['allPeople'],

    components: {
    },

    data: () => ({
      activeSerch: false,
      code: null,
      confirmed: false,
      peopleGroup: [],
    }),


    methods: {
      setValueMenu(value) {
        this.selectedMenu = value
      },
      async searchCode() {
        const matchCode =  this.allPeople.find(x => x.code == this.code)
        this.peopleGroup = matchCode.people
        this.activeSerch = true
      },
      async confirmPeople() {
        this.confirmed = true
        window.open('https://chat.whatsapp.com/GiPxtMXJqEwBow2rberENn')
        const matchCode =  this.allPeople.find(x => x.code == this.code)
        delete matchCode.confirm
        await setDoc(doc(db, 'Convidados', matchCode.id), {
         ...matchCode,
         confirm: true
        })
        setTimeout(() => this.$emit('setValueMenu', 'home'), 1000);
      },
      setMenu() {
        this.$emit('setValueMenu', 'home')
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

    @media (max-width: 600px) {  
      padding: 20px;
      transform: none;
    }

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
    @media (max-width: 600px) { 
      background-color: #C79BF2;
      height: 170px;
      .v-btn {
        margin-left: 0px !important;
      }
      .form-code {
        width: 100%;
        flex-direction: column;
      }
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

.confirmed-screen {
  width: 100%;
  height: 100%;
  background-color: #8bfa5f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 20px;
}

</style>
