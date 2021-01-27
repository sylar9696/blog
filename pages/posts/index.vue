<!-- Crea una pagina con le anteprime dei posts -->

<template>
    <div>
		<p class="text-white font-extrabold text-3xl md:text-5xl">Post</p>
        <!-- Codice per i post del tema di Tailwind -->
        <PostList type="all" />

        <!-- Fine Codice tema Tailwind -->


    </div>
</template>

<script>
import PostList from '~/components/PostList.vue'

export default {
	components : {
		PostList
	},
	data() {
		return {
			post : {
				id : '4',
				title : 'titolo di prova actionPost',
				description : 'Descrizione actionPost di prova',
				thumbnail : 'actionPost',
				userImg : 'actionPost',
				timeToRead : '1 MIN READ',
				tail : '1/3'
			}
		}
	},
	mounted(){
		this.$store.dispatch('actionPost', this.post)
	}
}
</script>