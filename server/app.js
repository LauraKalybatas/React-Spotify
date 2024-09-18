import express from 'express';
import connectDB from './db.js';
import cors from 'cors';

const app = express();
app.use(cors());
const conexao = await connectDB()

conexao.on('error', (erro) => {
    console.error('erro ao conectar', erro)
})

conexao.once('open', () => {
    console.log('conectado ao mongodb')
})

app.listen(3000, () =>{
    console.log('servidor rodando')
}) 