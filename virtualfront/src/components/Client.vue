<template>
    <div class="signUp client">
        <div class="container signUp_client">
            <h2> Cliente </h2>
            <form @submit.prevent="processClientGet">
                <input type="text"  v-model="client.id" placeholder="ID Cliente">
                <br>
                <input type="text"  v-model="client.name" placeholder="Nombre">
                <br>
                <input type="text" v-model="client.lastname" placeholder="Apellido">
                <br>
                <input type="text" v-model="client.email" placeholder="Email">
                <br>
                <input type="text" v-model="client.typedocument" placeholder="Id documento">
                <br>
                <input type="text" v-model="client.document" placeholder="Documento">
                <br>
                <input type="text" v-model="client.telephone" placeholder="Teléfono">
                <br>
                <input type="text" v-model="client.address" placeholder="Dirección">
                <br>
                <input type="text" v-model="client.gender" placeholder="Género">
                <br>
                <input type="text" v-model="client.isactive" placeholder="Activo">
                <br>
                <button type="submit" @click="processClientCreate"> Registrar </button> 
                <button type="submit" @click="processClientGet"> Buscar </button> 
                <button type="submit" @click="processClientEdit"> Editar </button> 
                <button type="submit" @click="processClientDelete"> Eliminar </button>             
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
        name: "Client",
        data: function(){
            return{
                client: {
                    name: "",
                    lastname: "",
                    email:"",
                    document:"",
                    typedocument:"",
                    telephone:"",
                    address:"",
                    gender:"",
                    isactive:true,
                    id:""
                }
            }      
        },
    
        
       methods: {
            processClientGet: function()
            {                               
                 // GET request using axios with set headers
                const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token_access')}`};
                axios.get("client/"+this.client.id, { headers })
                .then(response1 => {console.log(response1)
                    let datosClient = {
                        name: response1.data.name,
                        lastname: response1.data.lastname,
                        email: response1.data.email,
                        document: response1.data.document,
                        typedocument: response1.data.typedocument_id,
                        telephone: response1.data.telephone,
                        address: response1.data.address,
                        gender: response1.data.gender,
                        isactive: response1.data.isactive,
                        id: response1.data.id                    
                    }
    
                    this.client.name = datosClient.name,
                    this.client.lastname = datosClient.lastname,
                    this.client.email = datosClient.email,
                    this.client.document = datosClient.document,
                    this.client.typedocument = datosClient.typedocument,
                    this.client.telephone = datosClient.telephone,
                    this.client.address = datosClient.address,
                    this.client.gender = datosClient.gender,
                    this.client.isactive = datosClient.isactive,
                    this.client.id = datosClient.id  
    
                })
                .catch( (error) =>{                 
                        alert("Id de cliente no existe")   
                                         
                })
        },
    
        processClientDelete: function()
            {                               
                 // GET request using axios with set headers
                const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token_access')}`};            
                axios.delete("client/"+this.client.id, { headers })
                .then(() => alert('Cliente Eliminado'))
                    this.client.name = "",
                    this.client.lastname = "",
                    this.client.email = "",
                    this.client.document = "",
                    this.client.typedocument = "",
                    this.client.telephone = "",
                    this.client.address = "",
                    this.client.gender = "",
                    this.client.isactive = "",
                    this.client.id = ""             
        },
    
         processClientCreate: function()
            {                               
                const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token_access')}`};            
                axios.post("client/", this.client, {headers}) /* Promesa en java Scrip*/
                .then( (res)=> {
                    let datosClient = {
                        name : res.data.name,
                        lastname : res.data.lastname,
                        email : res.data.email,
                        document : res.data.document,
                        typedocument : res.data.typedocument,
                        telephone : res.data.telephone,
                        address : res.data.address,
                        gender : res.data.gender,
                        isactive : res.data.isactive
                    }                
                    console.log(res.data.access)
                    this.$emit('completedClientCreate', datosClient) /* Se le manda un evento */
        
                })
                .catch( (error) =>{
                        alert("Error: Fallo en el registro")
                        console.log(error.response.data)
                })                       
        },
                        
            processClientEdit: function()
            {   
                const article = { title: 'React PUT Request Example' };                            
                const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token_access')}`};            
                axios.put("client/"+this.client.id, this.client,  { headers })
                .then(response => { alert("Cliente Editada") })
                
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

    .container signUp_client {
        border: 3px solid #283747;
        border-radius: 10px;
        width: 80%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }

    .signUp_client h2 {
        color: #283747;
        width: 80%;
        margin: 1px auto;
        padding-top: 4%;
        text-align: center;
         
    }

    .signUp_client form {
        width: 80%;
        margin: 0px auto;
        padding-top: 3%;
    }

    .signUp_client input {
        height: 40px;
        width: 100%;
        padding: 3px 20px;
        margin: 5px 8;
        border: 1px solid #283747;
        margin-bottom: 2%;
    }

    .signUp_client button {
        width: 100%;
        height: 40px;
        color: #e5e7e9;
        background: #283747;
        border: 1px solid #e5e7e9;
        border-radius: 5px;
    }

    .signUp_client button:hover {
        color: #e5e7e9;
        background: crimson;
        border: 1px solid #283747;

    }

</style>