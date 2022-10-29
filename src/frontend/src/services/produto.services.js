import API from './webapi.services';
import {BASE_URL} from './urls';

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