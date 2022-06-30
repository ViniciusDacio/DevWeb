<template>
    <div class="form_user">
        <h1>Cadastro de Usuário</h1>
        <div class="cad_user">
            <label>Nome<input type="text"></label><br>
            <label>Email<input type="email"></label><br>
            <label>Usuario<input type="text"></label><br>
            <label>Senha<input type="password"></label><br>
        </div>
    </div>
</template>

<style scoped>
.form_user{
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.form_user input{
    display: flex;
}
</style>