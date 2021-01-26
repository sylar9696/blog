<!-- Crea una pagina con le anteprime dei posts -->

<template>
    <div>
        <h1 class="title">
            Lista dei post con anteprima
        </h1>
        <a href="/posts/1">POST 1</a>
        <a href="/posts/2">POST 2</a>
        <a href="/posts/3">POST 3</a>


        <!-- Codice per i post del tema di Tailwind -->
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
			</div>
		</div>

                <!-- Fine Codice tema Tailwind -->


    </div>
</template>

<script>
import PostPreview from '~/components/PostPreview.vue'

export default {
	components : {
		PostPreview
	},
	data() {
		return {
			posts : [
				{ id : '1', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/225/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '2', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/3106804/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '3', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/3657445/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '4', tail : '1/2', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/764827/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '5', tail : '1/2', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/1118905/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '6', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/325867/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '6', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/325867/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'},
				{ id : '6', tail : '1/3', title : 'Lorem ipsum dolor sit amet.', description : 'Lorem ipsum eu nunc commodo posudue', thumbnail : 'https://source.unsplash.com/collection/325867/800x600', userImg : 'http://i.pravatar.cc/300', timeToRead : '1MIN READ'}
			]
		}
	}
}
</script>