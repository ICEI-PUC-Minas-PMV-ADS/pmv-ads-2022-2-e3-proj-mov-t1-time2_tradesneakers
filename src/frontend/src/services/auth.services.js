import API from './webapi.services';
import {BASE_URL} from './urls';

export const register = async (param) => {
  try{
    return await API.post(`${BASE_URL}/register`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const login = async (param) => {
  try{
    return await API.post(`${BASE_URL}/login`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const getUsers = async () => {
  try{
    return await API.get(`${BASE_URL}/660/users`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const getEmailAlreadyUsed = async (email) => {
  try{
    return await API.get(`${BASE_URL}/users`).then( 
      response => {
        if (response.data.find(u => u.email == email)) {
          return true;
        }
        return false;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const getUser = async (userId) => {
  try{
    return await API.get(`${BASE_URL}/660/users/${userId}`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const updateUsers = async (param) => {
  try{
    return await API.put(`${BASE_URL}/660/users/${param.id}`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}