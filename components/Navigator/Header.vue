<!-- Menu bar che si vede nella versione desktop -->
<template>
<div class="header-container">
  <header class="the-header">
    <SideNavBtn @toggle="$emit('sidenavToggle')" />
    <div class="logo">
      <nuxt-link to="/">Alessandro BLOG</nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin/auth">Auth</nuxt-link></li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import SideNavBtn from "@/components/Navigator/SideNavBtn";

export default {
  name: "Header",
  components: {
    SideNavBtn
  }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  background-color: #a2f5cb;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: black;
}

.spacer {
  flex: 1;
}

.navigation-items {
  text-align: center;
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: black;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: green;
}
</style>
