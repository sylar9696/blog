<!-- Pagina di modifca del singolo post in base al suo id grazie al button Edit nella pagina Admin -->

<template>
    <div>
        <!-- Aggiungo utilizzando i params di vue la possibilità di scrivere il numero del post corretto -->
        <p class="text-black font-extrabold text-3xl md:text-5xl">Edit Post : {{ $route.params.postId }}</p>
            <PostForm :post="editPost" />
            <p class="text-center text-gray-500 text-xs">
                &copy;2019 Acme Corp. All rights reserved.
            </p>
    </div>
</template>


<script>
import PostForm from '~/components/Admin/PostForm.vue'

export default {
    components: {
        PostForm
    },
    data(){
        return {
            editPost : {
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
        save(){
        console.log(this.newPost)
        },
        cancel(){
        this.$router.push('/admin');
        }
    },
        layout : 'admin'
}
</script>
