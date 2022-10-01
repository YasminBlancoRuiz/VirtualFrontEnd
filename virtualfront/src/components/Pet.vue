<template>
    <div class="signUp pet">
        <div class="container signUp_pet">
            <h2> Mascota </h2>
            <form @submit.prevent="processPetGet">
                <input type="text"  v-model="pet.id" placeholder="ID Mascota">
                <br>
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
                <input type="text" v-model="pet.features" placeholder="Caracteristicas">
                <br>
                <input type="text" v-model="pet.client" placeholder="Cliente">
                <br>
                <button type="submit" @click="processPetCreate"> Registrar </button> 
                <button type="submit" @click="processPetGet"> Buscar </button> 
                <button type="submit" @click="processPetEdit"> Editar </button> 
                <button type="submit" @click="processPetDelete"> Eliminar </button>             
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
                features:"",
                isactive:true,
                client:"",
                id:""
            }
        }      
    },

    


    
   methods: {
        processPetGet: function()
        {                               
             // GET request using axios with set headers
            const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token_access')}`};
            axios.get("pet/"+this.pet.id, { headers })
            .then(response1 => {console.log(response1)
                let datosPet = {
                    name: response1.data.name,
                    age: response1.data.age,
                    race: response1.data.race,
                    sex: response1.data.sex,
                    species: response1.data.species,
                    features: response1.data.features,
                    client: response1.data.client_id,
                    id: response1.data.id                    
                }

                this.pet.name = datosPet.name,
                this.pet.age = datosPet.age,
                this.pet.race = datosPet.race,
                this.pet.sex = datosPet.sex,
                this.pet.species = datosPet.species,
                this.pet.features = datosPet.features,
                this.pet.client = datosPet.client,
                this.pet.id = datosPet.id  

            })
            .catch( (error) =>{                 
                    alert("Id de mascota no existe")   
                                     
            })
    },

    processPetDelete: function()
        {                               
             // GET request using axios with set headers
            const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token_access')}`};            
            axios.delete("pet/"+this.pet.id, { headers })
            .then(() => alert('Mascota Eliminada'))
                this.pet.name = "",
                this.pet.age = "",
                this.pet.race = "",
                this.pet.sex = "",
                this.pet.species = "",
                this.pet.features = "",
                this.pet.client = "",
                this.pet.id = ""                
    },

     processPetCreate: function()
        {                               
            const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token_access')}`};            
            axios.post("pet/", this.pet, {headers}) /* Promesa en java Scrip*/
            .then( (res)=> {
                let datosPet = {
                    name: res.data.name,
                    age: res.data.age,
                    race: res.data.race,
                    sex: res.data.sex,
                    species: res.data.species,
                    features: res.data.features,
                    client: res.data.client
                }                
                console.log(res.data.access)
                this.$emit('completedPetCreate', datosPet) /* Se le manda un evento */
    
            })
            .catch( (error) =>{
                    alert("Error: Fallo en el registro")
                    console.log(error.response.data)
            })                       
    },
                    
        processPetEdit: function()
        {   
            const article = { title: 'React PUT Request Example' };                            
            const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token_access')}`};            
            axios.put("pet/"+this.pet.id, this.pet,  { headers })
            .then(response => { alert("Mascota Editada") })
            
            .catch( (error) =>{
                    alert("Error: Fallo en la edición")
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