import fastify from 'fastify'
import cors from '@fastify/cors'

const server = fastify();

server.register(cors, {
    origin:'*',
    methods: ['GET', 'POST']
})

const banco = [
    {
        email: 'aluno@gmail.com',
        senha: '1234'
    }
]

server.post('/login', (request) => {

    const usuario = request.body;
    for  (const userBanco of banco){
       if (userBanco.email === usuario.email && usuario.senha === userBanco.senha){
            return {mensagem:'Entra consagrado'};
       } else {
            return {mensagem: 'Não colou, faz dnv'};
       }
    }

});

server.get('/login', () => {
    return 'AAAAAAAAA';
});

server.listen({
    port: 3333
});