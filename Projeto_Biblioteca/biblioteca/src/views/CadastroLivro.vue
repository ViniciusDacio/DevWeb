<template>
    <div class="cad_book">
        <h1>Cadastro de Livro</h1>
        <div class="cad_book">
            <label>Titulo<input type="text" v-model="titulo"></label><br>
            <label>ISBN<input type="text"></label><br>
            <label>Nome Editora<input type="text"></label><br>
            <label>Site Editora<input type="text"></label><br>
            <label>Autor<input type="text"></label><br>
            <label>Categoria</label>
            <select name="select">
                <option value=""></option>
                <option v-for="option in categorias" :key="option.text"
                :value="option.id" >
                {{ option.text }}
                </option>
            </select><br>
            <label>Quantidade<input type="number"></label><br>
            <label>Preço<input type="number"></label><br>

            <button @click="add">Cadastrar</button>
        </div>
    </div>
</template>

<style>
.cad_book{
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.cad_book input{
    display: flex;
}
</style>

<script>
  export default{
    data(){
      return{
        titulo: '',

        categorias: [
        {id: 1, text:'Lançamentos'}, 
        {id: 2, text:'Mais Vendidos'}, 
        {id: 3, text: 'Computação'}
        ]
      }
    },
    methods:{
        add(){
            this.$emit('addBook', {titulo: this.titulo})
            alert('Livro Cadastrado')
        }
    }
  }
</script>