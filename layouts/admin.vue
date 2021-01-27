<!-- Questa pagina è un layout che viene rendirizzato sulla pagina Admin -->

<!-- Layout che da effetto su tutte le pagine -->
<template>
  <div>

    <!-- Inserisco il container preso dal tema di tailwind -->
    <div class="container px-4 md:px-0 max-w-6xl mx-auto mt-32">
      <Nuxt />
    </div>
  </div>
</template>

<script>

export default {
  components : {

  },
  data() {
    return {
      sidenav : false
    }
  }
}
</script>

<style>
html {
  /*font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;*/
  /* importare un font esterno */
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.header-site{
  /* Come richiamare risorse esterne */
  background-image: url('~assets/bg/cover.jpg');
  height: 60vh;
  max-height: 360px;
}
</style>
