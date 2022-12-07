import API from './webapi.services';
import {BASE_URL} from './urls';
import {getProdutos} from './produtos.services';

export const getOrders = async (userId) => {
  try{
    return await API.get(`${BASE_URL}/produtos`).then( 
      async responseProdutos => {
          try{
            return await API.get(`${BASE_URL}/orders`).then( 
              async responseOrders => {
                let produtos = responseProdutos.data;
                let orders = responseOrders.data.filter(o => o.buyerId == userId);
                for (let i = 0; i < orders.length; i++) {
                  orders[i].produto = produtos.find(p => p.id == orders[i].produtoId);
                }
                return orders.reverse();
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


export const insertOrder = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/orders`, param).then( 
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

export const updateOrder = async (param) => {
  try{
    return await API.put(`${BASE_URL}/660/orders/${param.id}`, param).then( 
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

export const getOrder = async (id) => {
  try{
    return await API.get(`${BASE_URL}/orders/${id}`).then( 
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

export const deleteOrder = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/660/orders/${id}`).then( 
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