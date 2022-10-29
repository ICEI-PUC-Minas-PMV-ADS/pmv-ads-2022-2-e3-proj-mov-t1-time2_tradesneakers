import API from './webapi.services';
import {BASE_URL} from './urls';

export const getProdutos = async () => {
  try{
    return await API.get(`${BASE_URL}/produtos`).then( 
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

export const insertProduto = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/produtos`, param).then( 
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

export const updateProduto = async (param) => {
  try{
    return await API.put(`${BASE_URL}/660/produtos/${param.id}`, param).then( 
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

export const deleteProduto = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/660/produtos/${id}`).then( 
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

export const getProduto = async (id) => {
  try{
    return await API.get(`${BASE_URL}/produtos/${id}`).then( 
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

export const getProduto = async (id) => {
  try{
    return await API.get(`${BASE_URL}/produtos/${id}`).then( 
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
