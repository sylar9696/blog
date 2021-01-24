<!-- Questa pagina è un layout che viene rendirizzato su tutte le pagine che abbiamo creato -->

<template>
  <div>
    <!-- Questo menu verrà visto su tutte le pagine -->
    <p>MENUBAR</p>
    <a href="/">HOME</a>
    <a href="/posts">BLOG</a>
    <a href="/about">ABOUT</a>
    <!-- Inserisco il container prso dal tema di tailwind -->
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
