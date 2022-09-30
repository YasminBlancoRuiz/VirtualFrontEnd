<template>
    <div class="signUp pet">
        <div class="container signUp_pet">
            <h2> Mascotas </h2>
            <form @submit.prevent="processSignUp">
                <input type="text"  v-model="pet.name" placeholder="Nombre">
                <br>
                <input type="text" v-model="pet.age" placeholder="Edad">
                <br>
                <input type="text" v-model="pet.race" placeholder="Raza">
                <br>
                <input type="text" v-model="pet.sex" placeholder="Sexo">
                <br>
                <input type="text" v-model="pet.species" placeholder="Especie">
                <br>
                <input type="text" v-model="pet.feature" placeholder="Caracteristicas">
                <br>
                <input type="text" v-model="pet.client" placeholder="Cliente">
                <br>
                <button type="submit"> Registrar </button>                
                <br>
                <br>
                <br>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "../utils/axios" 
export default {
    name: "Pet",
    data: function(){
        return{
            pet: {
                name: "",
                age: "",
                race:"",
                sex:"",
                species:"",
                feature:"",
                isactive:true,
                client:"",
            }
        }      
    },

    methods: {
        processSignUp: function(){
            axios.post("pet/", this.pet, {headers: {}}) /* Promesa en java Scrip*/
            .then( (res)=> {
                let dataLogin = {
                    petname: this.pet.petname,
                }                
                console.log(res.data.access)
                this.$emit('completedRegisterPet', dataLogin) /* Se le manda un evento */
    
            })
            .catch( (error) =>{
                    alert("Error: Fallo en el registro")
                    console.log(error.response.data)
            })
        }
}

}
</script>


<style>
    .container {
        border: solid #283747;
        width: 30%;
        margin: auto;
        margin-top: 1%;
        border-radius: 20px;     
    }

    .container signUp_pet {
        border: 3px solid #283747;
        border-radius: 10px;
        width: 80%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }

    .signUp_pet h2 {
        color: #283747;
        width: 80%;
        margin: 1px auto;
        padding-top: 4%;
        text-align: center;
         
    }

    .signUp_pet form {
        width: 80%;
        margin: 0px auto;
        padding-top: 3%;
    }

    .signUp_pet input {
        height: 40px;
        width: 100%;
        padding: 3px 20px;
        margin: 5px 8;
        border: 1px solid #283747;
        margin-bottom: 2%;
    }

    .signUp_pet button {
        width: 100%;
        height: 40px;
        color: #e5e7e9;
        background: #283747;
        border: 1px solid #e5e7e9;
        border-radius: 5px;
    }

    .signUp_pet button:hover {
        color: #e5e7e9;
        background: crimson;
        border: 1px solid #283747;

    }

</style>