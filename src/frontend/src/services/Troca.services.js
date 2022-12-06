import API from './webapi.services';
import {BASE_URL} from './urls';

export const getTroca = async () => {
  try{
    return await API.get(`${BASE_URL}/660/tradeOffers`).then( 
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

export const insertTroca = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/tradeOffers`, param).then( 
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

export const updateTroca = async (param) => {
  try{
    return await API.put(`${BASE_URL}/660/tradeOffers/${param.id}`, param).then( 
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


export const deleteTroca = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/660/tradeOffers/${id}`).then( 
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