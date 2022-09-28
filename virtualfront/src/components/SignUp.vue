<template>
    <div class="register user">
        <div class="container register_user">
            <h2> Registro </h2>
            <form @submit.prevent="processSignUp">
                <input type="text"  v-model="register.username" placeholder="Username">
                <br>
                <input type="text" v-model="register.password" placeholder="Password">
                <br>
                <input type="text" v-model="register.name" placeholder="Name">
                <br>
                <input type="text" v-model="register.lastname" placeholder="Lastname">
                <br>
                <input type="text" v-model="register.email" placeholder="Email">
                <br>
                <input type="text" v-model="register.typedocument" placeholder="Typedocument">
                <br>
                <input type="text" v-model="register.document" placeholder="Document">
                <br>
                <input type="text" v-model="register.telephone" placeholder="Telephone">
                <br>
                <input type="text" v-model="register.address" placeholder="Address">
                <br>
                <input type="text" v-model="register.gender" placeholder="Gender">
                <br>
                <input type="text" v-model="register.isactivate" placeholder="Isactivate">
                <br>
                <button type="submit"> Enviar </button>
                <br>
                <br>
                <br>
            </form>
        </div>
    </div>

  

</template>

<script>
export default {
    name: "SignUp",
    data: function(){
        return{
            register: {
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
                isactivate:"",


            }

        }      
    },

    methods: {
        processSignUp: function(){
            console.log(this.register)
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

    .container register_user {
        border: 3px solid #283747;
        border-radius: 10px;
        width: 80%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }

    .register_user h2 {
        color: #283747;
        width: 80%;
        margin: 1px auto;
        padding-top: 4%;
        text-align: center;
         
    }

    .register_user form {
        width: 80%;
        margin: 0px auto;
        padding-top: 3%;
    }

    .register_user input {
        height: 40px;
        width: 100%;
        padding: 3px 20px;
        margin: 5px 8;
        border: 1px solid #283747;
        margin-bottom: 2%;
    }

    .register_user button {
        width: 100%;
        height: 40px;
        color: #e5e7e9;
        background: #283747;
        border: 1px solid #e5e7e9;
        border-radius: 5px;
    }

    .register_user button:hover {
        color: #e5e7e9;
        background: crimson;
        border: 1px solid #283747;

    }

</style>