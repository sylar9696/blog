<!-- Pagina di creazione dei post -->
<template>
    <div>
        <p class="text-black font-extrabold text-3xl md:text-5xl">Create New Post</p>

            <div class="text-2xl" v-if="loading">Caricamento in corso...</div>
            <div class="text-2xl" v-if="saved">Salvato correttamente...</div>



        <!-- Richiamiamo il componente PostForm -->
            <PostForm @save="newSavePost" />
            <!-- Inserisco del testo di copyright -->
            <p class="text-center text-gray-500 text-xs">
                &copy;2019 Acme Corp. All rights reserved.
            </p>
    </div>
</template>


<script>
/* Importo il componente PostForm */
import PostForm from '~/components/Admin/PostForm.vue'
import axios from 'axios'

export default {
    components: {
        PostForm
    },
    data(){
        return {
            loadig : false,
            saved : false
        }
    },
    methods : {
        /* Nel momento in cui clicchiamo sul button in console ci stamperà il salvataggio dei dati */
        newSavePost(postDaForm){
            this.loading = true;
            console.log(postDaForm)
            axios.post('https://nuxt-alessandro-corso-default-rtdb.firebaseio.com/posts.json',postDaForm)
            .then(result => {
                console.log(result)
                this.loading = false;
                this.saved = true;
                })
            .catch(result => {
                console.log(error)
                this.loading = false;
                });
        },
        /* C'è anche un button che se cliccato ci riporta alla rotta per la pagina di admin */
        cancel(){
        this.$router.push('/admin');
        }
    },
    layout : 'admin'
}
</script>
