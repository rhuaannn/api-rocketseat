const express = require("express");

const app = express();

app.use(express.json())


//parametros da rota usamos : e os parametros
//são obrigatorios como o ex de codigo abx
// app.get("/users/:id/:user", (request, response) => {
//     const { id, user} = request.params;

//     response.send(`ID do usuário: ${id} ${user}`);
// });


//query params são parametros que e acessado atraves de ? e &
//sao opcionais
app.post("/users",(request, response) =>{
    const { name, email,password } = request.body;
   response.json({name, email, password})

})

const PORT = 3332;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
