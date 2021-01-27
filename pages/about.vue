<!-- Questa sarà la pagina di About -->

<template>
    <div>
        <p class="text-white font-extrabold text-3xl md:text-5xl">About</p>
        <p class="text-2xl pt-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quia voluptatem minima fugit. Voluptatem, in repellat deleniti ex accusamus inventore totam eum. Repellendus, architecto esse ipsum labore facilis est adipisci!</p>
        <hr>
        <div>{{ postAbout }}</div>
    </div>
</template>

<script>

export default {
	data() {
		return {
			postAbout : {}
		}
	},
	mounted(){
        /* Quando monti la pagina e monti il componente richiama il post creato dallo store Vuex nella pagina Blog */
		this.postAbout = this.$store.getters.getPost;
	}
}
</script>