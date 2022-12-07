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

export const getPropostasDeTrocaDoUsuario = async (userId) => {
  try{
      return await API.get(`${BASE_URL}/660/users`).then( 
      async responseUsers => {
          try{
            return await API.get(`${BASE_URL}/produtos`).then( 
              async responseProdutos => {
                  try{
                    return await API.get(`${BASE_URL}/660/tradeOffers`).then( 
                      async responseOffers => {
                        let users = responseUsers.data;
                        let produtos = responseProdutos.data;
                        let offers = responseOffers.data.filter(o => (o.idUsuario == userId || o.idVendedor == userId));
                        for (let i = 0; i < offers.length; i++) {
                          offers[i].proponente = users.find(u => u.id == offers[i].idUsuario);
                          offers[i].vendedor = users.find(u => u.id == offers[i].idVendedor);

                          offers[i].produtoDesejado = produtos.find(p => p.id == offers[i].idProdutoDesejado);
                          offers[i].produtoOferecido = produtos.find(p => p.id == offers[i].idProdutoOferecido);

                          if (offers[i].proponente == null) {
                            offers[i].proponente = users.find(u => u.id == 1);
                          }
                          if (offers[i].vendedor == null) {
                            offers[i].vendedor = users.find(u => u.id == 1);
                          }
                          if (offers[i].produtoDesejado == null) {
                            offers[i].produtoDesejado = produtos.find(p => p.id == 1);
                          }
                          if (offers[i].produtoOferecido == null) {
                            offers[i].produtoOferecido = produtos.find(p => p.id == 1);
                          }
                        }
                        return offers.reverse();
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