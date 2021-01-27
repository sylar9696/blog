<!-- Questa sarà la pagina di Admin -->

<template>
    <div>
        <!-- Inserisco un testo che definisce la pagina come titoletto -->
        <p class="text-black font-extrabold text-3xl md:text-5xl">Admin</p>
        <!-- Creo un nuovo button per creare nuovi post dalla sezione admin, richiamo il method creato nello script -->
        <button @click="newPostPage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Nuovo Post
        </button>
        <div class="pt-20">
            <p class="text-3xl">PostList</p>
            <!-- Inserisco il componente PostList così da avere tutti i post in questa pagina -->
            <!-- Se c'è isAdmin all'interno come in questa pagina verranno mostrati i button di modifica -->
            <PostList type="all" isAdmin />
        </div>
    </div>
</template>



<script>
/* Importo il mio componente PostList */
import PostList from '~/components/PostList.vue'

export default {
    /* Importo il compoentne nello script */
    components: {
        PostList
    },
    data(){
        return {

        }
    },
    methods : {
        /* Al click del button rimandami alla pagina con rotta localhost:3000/admin/post/new */
        newPostPage(){
        this.$router.push('/admin/post/new');
        }
    },
    /* Usa il layout dell'admin */
    layout : 'admin'
}
</script>