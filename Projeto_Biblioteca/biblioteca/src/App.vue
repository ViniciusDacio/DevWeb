<template>
  <nav id="menu_top">
    <router-link to="/">Home</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/new_user" class="cad_user">Novo Usuario</router-link>
  </nav>
  <hr>
  <router-view/>
</template>


<style>
#menu_top{
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}

</style>
