<template>
  <div class="d-flex flex-column tres">
    <v-navigation-drawer class="test" permanent height="820px" :mini-variant.sync="mini" v-model="menu">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Bem Vindo
          </v-list-item-title>
          <v-list-item-subtitle>
            Selecione uma Opção
          </v-list-item-subtitle>
        </v-list-item-content>
        <div @click="mini = true"><v-icon>mdi-close</v-icon></div>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="selectOptionMenu(selectOptionMenu(item.value))"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      items: [
          { title: 'Inicio', icon: 'mdi-home', value: 'home' },
          { title: 'Confirmar Presença', icon: 'mdi-account-group', value: 'confirm' },
          { title: 'Lista de Presentes', icon: 'mdi-list-box-outline', value: 'gift' },
          { title: 'Sobre Nós', icon: 'mdi-ring', value: 'about' },
        ],
        menu: false,
        mini: true,
    }),
    methods: {
      selectOptionMenu(value) {
        this.mini = true
        if(value) this.$emit('setValueMenu', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.test {
  @media (max-width: 600px) {
    // width: calc(100% - 56px);
    // padding-right: 20%;
    height: 100vh !important;
  }
  // display: none;
}
</style>
