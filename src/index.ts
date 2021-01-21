import express from 'express'
import {getUsers,setUser } from './controllers/users'

const app =  express();

app.use(express.json());

app.get('/',(request, response)=>{
  return response.status(200).json({message: 'Server is online'})
});

app.get('/users',getUsers);

app.post('/user',setUser);

app.listen(3333,()=>{
  console.log('==> Server is runnig at port 3333')
});
