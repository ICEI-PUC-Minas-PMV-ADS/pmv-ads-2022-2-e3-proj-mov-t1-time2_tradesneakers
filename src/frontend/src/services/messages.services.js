import API from './webapi.services';
import {BASE_URL} from './urls';

export const getMessages = async (userId, destinataryId) => {
  try{
    return await API.get(`${BASE_URL}/660/messages`).then( 
      response => {
        let messages = response.data.filter(message => (message.authorId == userId && message.destinataryId == destinataryId) || (message.authorId == destinataryId && message.destinataryId == userId)).reverse();
        let messagesStillNotSeen = response.data.filter(message => message.messageHasBeenSeen != true && message.destinataryId == userId);
        for (let i = 0; i < messagesStillNotSeen.length; i++) {
              let currentMessage = messagesStillNotSeen[i];
              updateMessage({
              id: currentMessage.id,
              message: currentMessage.message,
              authorId: currentMessage.authorId,
              destinataryId: currentMessage.destinataryId,
              dateSent: currentMessage.dateSent,
              dateSentInTicks: currentMessage.dateSentInTicks,
              messageHasBeenSeen: true
            })
          }
        messages = messages.sort((a, b) => b.dateSentInTicks - a.dateSentInTicks);
        return messages;
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

export const getChats = async (userId) => {
  try{
    return await API.get(`${BASE_URL}/660/users`).then( 
      async responseUsers => {
          try{
            return await API.get(`${BASE_URL}/messages`).then( 
              async responseMessages => {
                let selectedUsers = responseUsers.data;
                let selectedMessages = responseMessages.data;
                selectedMessages = selectedMessages.filter(message => message.authorId == userId || message.destinataryId == userId);
                selectedUsers = selectedUsers.filter(user => (user.id != userId) && selectedMessages.find(message => message.authorId == user.id || message.destinataryId == user.id ));
              if (selectedMessages.length > 0) {
              for (let i = 0; i < selectedUsers.length; i++) {
                let messagesToLookFor = selectedMessages.filter(message => (message.authorId == userId && message.destinataryId == selectedUsers[i].id) || (message.authorId == selectedUsers[i].id && message.destinataryId == userId));  
                if (messagesToLookFor.length > 0) {
                  let lastMessage = messagesToLookFor[messagesToLookFor.length - 1].message;
                  if (lastMessage.length > 50) {
                    lastMessage = lastMessage.substring(0, 20) + "...";
                  }
                  selectedUsers[i].lastMessage = lastMessage;
                  selectedUsers[i].lastMessageHasBeenSeen = messagesToLookFor[messagesToLookFor.length - 1].messageHasBeenSeen;
                  selectedUsers[i].lastMessageDate = messagesToLookFor[messagesToLookFor.length - 1].dateSent;
                  selectedUsers[i].lastMessageDateInTicks =messagesToLookFor[messagesToLookFor.length - 1].dateSentInTicks;  
                }
                else {
                  selectedUsers[i].lastMessage = "";
                  selectedUsers[i].lastMessageHasBeenSeen = false;
                  selectedUsers[i].lastMessageDate = "";
                  selectedUsers[i].lastMessageDateInTicks = 0;  
                }
              }
            }
            selectedUsers.sort((a, b) => b.lastMessageDateInTicks - a.lastMessageDateInTicks);
                return selectedUsers;
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

export const insertMessage = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/messages`, param).then( 
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

export const updateMessage = async (param) => {
  try{
    return await API.put(`${BASE_URL}/660/messages/${param.id}`, param).then( 
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

export const deleteMessage = async (param) => {
  try{
    return await API.delete(`${BASE_URL}/660/messages/${param.id}`).then( 
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