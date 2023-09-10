const express = require("express");

const app = express();
//parametros da rota usamos : e os parametros
//são obrigatorios como o ex de codigo abx
app.get("/users/:id/:user", (request, response) => {
    const { id, user} = request.params;

    response.send(`ID do usuário: ${id} ${user}`);
});


//query params são parametros que e acessado atraves de ? e &
//sao opcionais
app.get("/users",(request, response) =>{
    const { page, limit } = request.query;
    response.send ( `Pagina ${page} limite ${limit}`)

})

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`server is running on PORT => ${PORT}`);
});
