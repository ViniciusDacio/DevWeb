<template>
    <div class="cad_book">
        <h1>Cadastro de Livro</h1>
        <div class="cad_book">
            <label>Titulo<input type="text" v-model="titulo"></label><br><br>
            <label>ISBN<input type="text"></label><br><br>
            <label>Nome Editora<input type="text"></label><br><br>
            <label>Site Editora<input type="text"></label><br><br>
            <label>Autor<input type="text"></label><br><br>
            <label>Categoria</label>
              <select name="select">
                  <option value=""></option>
                  <option v-for="option in categorias" :key="option.text"
                  :value="option.id" >
                  {{ option.text }}
                  </option>
              </select>
              <label>Nova Categoria <input type="text" v-model="newText" placeholder="Digite Aqui"></label>
              <button @click="add()" >Adicionar</button>
            <br><br>
            <label>Quantidade<input type="number"></label><br><br>
            <label>Preço<input type="number"></label><br><br>

            <button>Cadastrar</button>
        </div>
    </div>
</template>

<style>
.cad_book{
    padding: 10px;
}
</style>

<script>
  export default{
    data(){
      return{
        newText: '',

        categorias: [
        {id: 1, text:'Lançamentos'}, 
        {id: 2, text:'Mais Vendidos'}, 
        {id: 3, text: 'Computação'}
        ],
        nextId: 4
      }
    },
    methods:{
        add() {
            this.categorias.push({
              id: this.nextId++,
              text: this.newText,
            })
            this.newText = ''
        }
    }
  }
</script>