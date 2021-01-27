<!-- Pagina di creazione dei post -->
<template>
    <div>
        <p class="text-black font-extrabold text-3xl md:text-5xl">Create New Post</p>
        <!-- Richiamiamo il componente PostForm -->
            <PostForm :post="newPost" />
            <!-- Inserisco del testo di copyright -->
            <p class="text-center text-gray-500 text-xs">
                &copy;2019 Acme Corp. All rights reserved.
            </p>
    </div>
</template>


<script>
/* Importo il componente PostForm */
import PostForm from '~/components/Admin/PostForm.vue'

export default {
    components: {
        PostForm
    },
    data(){
        return {
        /* Questi sono i dati dei campi che mi servono per creare il nuovo post */
            newPost : {
                id : '',
                title : '',
                description : '',
                thumbnail : '',
                userImg : '',
                timeToRead : '1 MIN READ',
                tail : '1/3',
            }
        }
    },
    methods : {
        /* Nel momento in cui clicchiamo sul button in console ci stamperà il salvataggio dei dati */
        save(){
        console.log(this.newPost)
        },
        /* C'è anche un button che se cliccato ci riporta alla rotta per la pagina di admin */
        cancel(){
        this.$router.push('/admin');
        }
    },
    layout : 'admin'
}
</script>
