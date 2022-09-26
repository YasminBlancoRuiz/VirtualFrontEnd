<template>
    <div class="login user">
        <div class="container login_user">
            <h2> Iniciar sesión </h2>
            <form @submit.prevent="processLoginUser">
                <input type="text"  v-model="user.username" placeholder="Username">
                <br>
                <input type="text" v-model="user.password" placeholder="Password">
                <br>
                <button type="submit"> Iniciar Sesión </button>
                <br>
                <br>
                <br>
                

            </form>
        </div>
    </div>

  

</template>

<script>
export default {
    name: "Login",
    data: function(){
        return{
            user: {
            username: "",
            password: ""
            }

        }      
    },

    methods: {
        processLoginUser: function(){
            console.log(this.user)
        }
}

}



</script>

<style>


    .container {
        border: solid #283747;
        width: 30%;
        margin: auto;
        margin-top: 9%;

        border-radius: 20px;
 
    }

    .container login_user {
        border: 3px solid #283747;
        border-radius: 10px;
        width: 80%;
        height: 60%;
       
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }

    .login_user h2 {
        color: #283747;
        width: 80%;
        margin: 1px auto;
        padding-top: 4%;
        
        text-align: center;
         
    }

    .login_user form {
        width: 80%;
        margin: 0px auto;
        padding-top: 3%;
    
    }

    .login_user input {
        height: 40px;
        width: 100%;

        padding: 3px 20px;
        margin: 5px 8;

        border: 1px solid #283747;

        margin-bottom: 2%;
    }

    .login_user button {
        width: 100%;
        height: 40px;
        color: #e5e7e9;
        background:#283747;
        border: 1px solid #e5e7e9;

        border-radius: 5px;
    }

    .login_user button:hover {
        color: #283747;
        background: crimson;
        border: 1px solid #283747;

    }


</style>