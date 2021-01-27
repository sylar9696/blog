<!-- Stile pagina di Autenticazione -->

<template>
    <div class="admin-auth-page">
        <p class="mt-14 text-3xl">{{ isLogin ? 'Login' : 'Registrati' }}</p>
        <div class="bg-white shadow-md rounded px-8 pt-20 pb-8 mb-4 mt-1">
            <!--<form class="w-64 inline-block">-->
                
                <!-- Inserisco un form per la richiesta di una mail -->
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                        E-Mail
                    </label>
                    <!-- Aggancio con il v-model il campo email -->
                    <input v-model="user.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="title" type="email" placeholder="Title">
                        <p class="text-red-500 text-xs italic">Please Email</p>
                </div>

                <!-- Inserisco un form per la richiesta di una password -->
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                        Password
                    </label>
                    <!-- Aggancio con il v-model il campo password -->
                    <input v-model="user.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="title" type="password" placeholder="Title">
                        <p class="text-red-500 text-xs italic">Please Password</p>
                </div>

                <!-- Inserisco un button che ti fa visualizzare o Login o Registrati a seconda di cosa devi fare grazie alla variabile isLogin se è true o false -->
                <!-- Quando si preme il button di Invia, si attiva il return con i dati dello user compilati si manda un console log grazie al method con i dati compilati -->
                <button @click="invia" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {{ isLogin ? 'Login' : 'Registrati' }}
                </button>
            <!--</form>-->
            <br><br><br>
            <!-- Button che cambia da login a registrazione in base a quello che l'utente deve fare -->
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeLogin">Switch to {{ isLogin ? 'Registrati' : 'Login' }}</button>
            {{ user }}
        </div>
    </div>
</template>

<script>

export default {
    name: 'AdminAuthPage',
    components: {
    },
    data() {
        return {
        isLogin: true,
        /* I due campi email e password sono agganciati grazie al v-model */
        user : {
            email : '',
            password : ''
        }
        }
    },
    methods :{
        /* Questo method changeLogin permette di switcchare tra true o false lo stato di isLogin ma si aggancia poi al button chiamato "switch to" */
        changeLogin(){
            this.isLogin = !this.isLogin;
        },
        invia(){
            console.log(this.user);
        }
    },
    layout: 'admin'
}
</script>