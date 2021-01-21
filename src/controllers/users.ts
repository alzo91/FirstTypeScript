import { Request, Response} from 'express';

interface IAddress{
  state: string,
  city: string,
  street: string,
  zipCode: string,
}

interface IUser {
  id: number,
  name: string,
  address?: Array<IAddress>
}

export const users: Array<IUser> = []

export function getUsers(request: Request,response:Response){
  return response.status(200).json(users)
}

export function setUser(request: Request,response:Response){
  const user : IUser ={id:users.length +1, name: request.body.name}
  users.push(user)
  return response.status(200).json(user)
}
