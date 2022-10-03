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