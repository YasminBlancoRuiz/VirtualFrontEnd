<!-- Borro la estructura que tenia por defecto y hago esta nueva -->

<template>

  <div id="app" class="app">
    <div class="header">
      <h1>  Virtual Animal</h1>
      <nav v-if="is_auth">
        <button>Inicio</button>
        <button>Servicios</button>
        <button>Vacunación</button>
        <button>Animales</button>
        <button>Enfermedades</button>
      </nav>

      <nav v-else>
        <button @click="loadLogin"> Iniciar sesión </button>
        <button @click="loadSignUp">Registrarse</button>
      </nav>

    </div>

    <div class="main-component">
      <router-view>

      </router-view>
    </div>
  	   
    
  </div>  

</template>

<!-- Se exporta un objeto desde el componente App -->
<!-- //options API // documentacion vue 3 cambia "Composicion API" -->
<script>
export default {
  name : "App",
  data: function() {
    return {
      is_auth: false,
    }


  },
  methods: {
    loadLogin: function(){
      this.$router.push({name:"login"})
    },

    loadSignUp: function(){
      this.$router.push({name:"signup"})
    },

  }


}

</script>


<!-- Borro la estructura que tenia por defecto y hago esta nueva -->
<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    font-family: 'Roboto', sans-serif;
  }

  .header {
    width: 100;
    height: 10vh;
    min-height: 100px;
    background-color:  #283747;
    color: #e5e7e9;
    display:  flex;
    justify-content: space-between;
    align-items: center;
  }

  
  .header h1{
    width: 20%;
    text-align: center;

  }

  .header nav { 
    height: 100%; 
    width: 20%;
    font-size: 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .header nav button { 
    color: #e5e7e9;
    background-color: #283747;
    border: 1px solid #e5e7e9;
    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover { 
    color: #283747;
    background-color: #e5e7e9;
    border: 1px solid #e5e7e9;
   
  }

  .main-componet {
    height: 75vh;
  }

  .footer {
    width: 100%;
    height: 6vh;
    min-height: 74px;
    background-color: #283747;
    color: #e5e7e9;

    padding: 1%;
    margin-top: 9%;

  }

  .footer h2 {
    width: 100%;
    height: 100;

    display: flex;
    justify-content: center;
    align-items: center;

  }



</style>
