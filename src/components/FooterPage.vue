<template>
  <div class="container">
    <div class="footer">
      <div>
        <div class="title-footer">CONTAGEM REGRESSIVA PARA O GRANDE DIA</div>
        <div class="date">{{ manyDays }} Dias</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'FooterComponet',

    components: {
    },

    computed: {
      manyDays() {
        const currentDate = new Date()
        const weeddingDate = new Date(this.weeddingDate)
        const diffInDays = Math.floor((weeddingDate - currentDate) / (1000 * 60 * 60 * 24))
        return diffInDays
      }
    },

    data: () => ({
      weeddingDate: '12/09/2023'
    }),
  }
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');

.footer {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #E6E6FA;
  justify-content: center;
  align-items: center;

  // font-family: 'Architects Daughter', cursive;
  // font-family: 'Chivo Mono', monospace;
  // font-family: 'Molle', cursive;
  font-family: 'DM Serif Display', serif;

  .title-footer {
    font-size: 20px;
    @media (max-width: 600px) { 
      font-size: 16px
    }
  }
  .date {
    text-align: center;
    font-size: 70px;
    @media (max-width: 600px) { 
      font-size: 50px
    }
  }
}

</style>
