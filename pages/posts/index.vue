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
		}
	},
	mounted(){

	}
}
</script>