<script>
import MenuLateral from "@/components/MenuLateral.vue";
import CabecalhoMenu from "./components/CabecalhoMenu.vue";
import ConteudoPrincipal from "./components/ConteudoPrincipal.vue";
import RodapeF from "./components/RodapeF.vue";
export default {
  components: { MenuLateral, CabecalhoMenu, ConteudoPrincipal, RodapeF },
      
};
</script>
<template>
  <MenuLateral />
  <CabecalhoMenu />
  <ConteudoPrincipal />
  <RodapeF />
  <!-- <header id="header">Cabeçalho</header> -->
  <!-- <main id="content">Principal</main> -->
  <!-- <footer id="footer">Rodapé</footer> -->
</template>
<style></style>
