<template>
    <div>
        <!-- importo quello che ho nella pagina Blog qui dentro per generarlo tramite il componente PostList -->
        <div class="flex flex-wrap justify-between pt-12 -mx-6">
			<!-- All'interno di questo div "row" inseriamo un ciclo for per ciclare il nostro components -->
			<div v-for="(post, index) in posts" :key=" `__post_${index}` " :class=" `w-full md:w-${post.tail} p-6 flex flex-col flex-grow flex-shrink` ">
					<!-- Inserimento del componente PostPreview.vue -->
					<!-- 1- Bisogna passare le proprietà dei props del componente all'interno del tag -->
					<!-- Per renderlo dinamico il componentne in base all'array devo usare il v-bind e richiamare le prorpietà dell'array -->
					<PostPreview
						:id="post.id"
						:title="post.title"
						:description="post.description"
						:thumbnail="post.thumbnail"
						:userImg="post.userImg"
						:timeToRead="post.timeToRead"
						:tail="post.tail"
					>
					</PostPreview>
                    <!-- Inserisco un button che permetterà di modificare il singolo post -->
                    <!-- Tramite i props di isAdmin capisco se sono nella pagina Admin e perciò solo in quella mostrerò il bottone -->
                    <button v-if="isAdmin" @click="linkToEdit(post.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                    </button>
			</div>
		</div>
        <!-- Fine traferimento dalla pagina Blog -->

    </div>
</template>

<script>
/* Importo il componente esterno PostPreview per concatenarlo a quello nuovo */
import PostPreview from '~/components/PostPreview.vue'

export default {
    name : 'PostList',
    components : {
		PostPreview
	},
    data() {
        return {
            posts : [],
            /* Reinserisco i dati dell'array del componente PostPreview */
            /*allPosts : [
				{ id : '1', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/225/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '2', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/3106804/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '3', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/3657445/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '4', tail : '1/2', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/764827/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '5', tail : '1/2', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/1118905/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '6', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/325867/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '6', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/325867/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '6', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/325867/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'}
            ],
            lastPosts : [
                { id : '7', tail : '1/2', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/225/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '8', tail : '1/2', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/3106804/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '9', tail : '1/2', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/3657445/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '10', tail : '1/2', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/764827/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
            ] */



        }
    },
    methods : {
        /* creiamo un metodo che genera il link di modifca del post agganciandosi al suo id */
        linkToEdit(id){
            this.$router.push('admin/post/' + id);
        }
    },
    props : {
        type : {
            type : String,
            required : true
        },
        isAdmin : {
            type : Boolean,
            default : false
        }
    },
    mounted () {
        /* durante il montaggio del componente controlla se il type di input è uguale a "all" oppure "last" e sostituisci all'array posts vuoto uno dei due array pieni e crea il componente */
        /*if(this.type == 'all'){
            this.posts = this.allPosts;
        } else if(this.type == 'last'){
            this.posts = this.lastPosts;
        }*/
        /* Recuperiamo non più l'array fake ma bensì i post che creiamo e salviamo su firebase però non funziona più il ciclo per capire se il type è all o last */
        if(this.type == 'all'){
            this.posts = this.$store.getters.getPosts;
        } else if(this.type == 'last'){
            this.posts = this.$store.getters.getPosts;
        }
    }
}
</script>