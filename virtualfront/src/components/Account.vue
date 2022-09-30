<template>
    <div v-if="loaded" class="information">  
        <h1>Información de su cuenta</h1>
        <h2>Nombre: <span> {{name}}</span></h2>
        <h2>Correo electrónico: <span> {{email}}</span></h2>
    </div>
    
</template>


<script>
import axios from '../utils/axios'
import jwt_decode from "jwt-decode"
    export default {
        name: "Account",
        data: function(){
            return {
                name: "",
                email: "",
                loaded: false
            }
        },

        methods: {
            getData: async function() {
                if (localStorage.getItem("token_access") == null || localStorage.getItem("token_refresh") == null){
                    this.$emit('logout')
                }
            
                await this.verifyToken();
                
                let token = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();

                axios.get("user/"+iserId+"/", {headers: {"Authorization": "Bearer "+token}})
                     .then((result) => {
                        this.name = result.data.name,
                        this.email = result.data.email,
                        this.loaded = true;
                     })
                     .catch(()=>{
                                this.$emit("logout")
                             })

            },


            verifyToken: function(){
                let refresh = localStorage.getItem("token_refresh")
                return axios.post("refresh/", {refresh})
                             .then(res => {
                                localStorage.setItem("token_access", res.data.access)
                             })
                             .catch(()=>{
                                this.$emit("logout")

                             })
            },

            created: function(){
                this.getData();
            }

        }

    }
</script>


<style>
    .information {
        margin: 0;
        padding: 0%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;     
    }

    .information h1 {
        font-size: 60px;
        color: #0f1316;      
    }

    .information h2 {
        font-size: 40px;
        color: #283747;   
    }

    .information span {
        color: #283747;
        font-weight: bold;
    }
</style>