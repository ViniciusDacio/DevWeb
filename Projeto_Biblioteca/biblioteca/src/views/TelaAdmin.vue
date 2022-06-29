<template>
<div id="adm">
    <h1>Pagina Adm</h1>
<ul v-for="livro, in livros" :key="livro">
    <li>{{ livro }}</li>
</ul>
</div>
</template>

<script>
    export default{
        data(){
    return{
        livros: ['a', 'b', 'c', 'd']
    }
        }
  }
</script>