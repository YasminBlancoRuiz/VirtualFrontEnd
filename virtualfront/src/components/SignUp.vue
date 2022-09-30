<template>
    <div class="signUp user">
        <div class="container signUp_user">
            <h2> Registrarse </h2>
            <form @submit.prevent="processSignUp">
                <input type="text"  v-model="user.username" placeholder="Username">
                <br>
                <input type="text" v-model="user.password" placeholder="Password">
                <br>
                <input type="text" v-model="user.name" placeholder="Name">
                <br>
                <input type="text" v-model="user.lastname" placeholder="Lastname">
                <br>
                <input type="text" v-model="user.email" placeholder="Email">
                <br>
                <input type="text" v-model="user.typedocument" placeholder="Typedocument">
                <br>
                <input type="text" v-model="user.document" placeholder="Document">
                <br>
                <input type="text" v-model="user.telephone" placeholder="Telephone">
                <br>
                <input type="text" v-model="user.address" placeholder="Address">
                <br>
                <input type="text" v-model="user.gender" placeholder="Gender">
                <br>
                <button type="submit"> Registrarse </button>
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
    name: "SignUp",
    data: function(){
        return{
            user: {
                username: "",
                password: "",
                name:"",
                lastname:"",
                email:"",
                typedocument:"",
                document:"",
                telephone:"",
                address:"",
                gender:"",
                isactivate:true,
            }
        }      
    },

    methods: {
        processSignUp: function(){
            axios.post("user/", this.user, {headers: {}}) /* Promesa en java Scrip*/
            .then( (res)=> {
                let dataLogin = {
                    username: this.user.username,
                }                
                console.log(res.data.access)
                this.$emit('completedSignUp', dataLogin) /* Se le manda un evento */
    
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

    .container signUp_user {
        border: 3px solid #283747;
        border-radius: 10px;
        width: 80%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }

    .signUp_user h2 {
        color: #283747;
        width: 80%;
        margin: 1px auto;
        padding-top: 4%;
        text-align: center;
         
    }

    .signUp_user form {
        width: 80%;
        margin: 0px auto;
        padding-top: 3%;
    }

    .signUp_user input {
        height: 40px;
        width: 100%;
        padding: 3px 20px;
        margin: 5px 8;
        border: 1px solid #283747;
        margin-bottom: 2%;
    }

    .signUp_user button {
        width: 100%;
        height: 40px;
        color: #e5e7e9;
        background: #283747;
        border: 1px solid #e5e7e9;
        border-radius: 5px;
    }

    .signUp_user button:hover {
        color: #e5e7e9;
        background: crimson;
        border: 1px solid #283747;

    }

</style>