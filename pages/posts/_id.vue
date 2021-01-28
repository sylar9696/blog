<!-- Questa sarà la pagina del singolo post -->

<template>
    <div>
        <h1 class="title">
            QUESTO E' IL POST NUMERO : {{ $route.params.id }}
        </h1>
        <p class="py-6 text-left">
            {{ currentPost }}
        </p>
    </div>
</template>


<script>

import axios from 'axios';

export default {
    asyncData(context){
        return axios.get(`https://nuxt-alessandro-corso-default-rtdb.firebaseio.com/posts/${context.params.id}.json`)
        /* Secondo metodo di concatenzazione */
        /*return axios.get('https://nuxt-alessandro-corso-default-rtdb.firebaseio.com/posts/' + context.params.id +'.json')*/
        .then (res => {
            return { currentPost : res.data};
        }).catch(error => console.log(error));
    },
    data(){
        return {

        }
    },
    computed: {

    }
}
</script>