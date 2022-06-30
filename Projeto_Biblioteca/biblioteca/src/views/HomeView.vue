<template>
    <div class="livros_view">
        <h1>Sistema da Biblioteca</h1>
        <hr>

        <h3>Livros: </h3>
        <ul v-for="livro in livros" :key="livro">
            <li>
                {{ livro.titulo }} <br>
                Autor: {{ livro.autor }} <br>
                Editora: {{ livro.editora }} <br>
                Preço: R${{ livro.preco }} <br>
            </li>
</ul>
    </div>
</template>

<style scoped>

ul li{
    margin-left: -40px;
    list-style: none;
    border: 1px solid black;
}
</style>

<script>

import CadastroLivro from '../views/CadastroLivro.vue'

export default{
    data(){
        return{
            livros: [
                {titulo: 'Sherlock Holmes: Um estudo em vermelho', autor: 'Arthur Conan Doyle', editora: 'Person', preco: '29.99'},
                {titulo: 'Sherlock Holmes: O sinal dos quatro', autor: 'Arthur Conan Doyle', editora: 'Etica', preco: '19.99'},
            ]
        }
    },
    methods:{
        addBook(book){
            this.livros.push({
                titulo: this.titulo
            })
        }
    }
}
</script>