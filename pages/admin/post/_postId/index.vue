<!-- Pagina di modifca del singolo post in base al suo id grazie al button Edit nella pagina Admin -->

<template>
    <div>
        <p class="text-black font-extrabold text-3xl md:text-5xl">Edit Post : {{ $route.params.postId }}</p>

            <div class="text-2xl" v-if="loading">Caricamento in corso...</div>
            <div class="text-2xl" v-if="saved">Salvato correttamente...</div>



        <!-- Richiamiamo il componente PostForm -->
            <PostForm v-if="!loading" :post="editViewPost" @save="editSavePost" />
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
    asyncData(context){
        console.log('asyncData');
        return axios.get(`https://nuxt-alessandro-corso-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
        .then (res => {
            console.log(res.data);
            return {
                editViewPost : res.data
            }
        })
        .catch(error => {
            console.log(error);
        });
    },
    data(){
        return {
            loading : false,
            saved : false
        }
    },
    methods : {
        /* Nel momento in cui clicchiamo sul button in console ci stamperà il salvataggio dei dati */
        editSavePost(postDaForm){
            this.loading = true;
            console.log(postDaForm)
            this.$store.dispatch('editPost', postDaForm)
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

