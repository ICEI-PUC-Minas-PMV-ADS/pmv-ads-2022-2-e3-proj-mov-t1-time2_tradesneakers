import react, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Keyboard,Pressable} from 'react-native';
import {TextInput} from 'react-native-paper';
import Header from '../components/Header';
import {useUser} from '../context/UserContext';
import {getUser} from '../services/auth.services';
import {getMessages} from '../services/messages.services';
import {insertMessage} from '../services/messages.services';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../config/Colors';
import DefaultImages from '../config/DefaultImages';

const ChatPage = ({route, navigation}) => {

const {userId, signed} = useUser();
  
if (!signed) {
  navigation.navigate("LoginPage")
}

const [text, setText] = useState('');

const flatlistRef = useRef();

const { destinataryId } = route.params? route.params : 0;

const [destinataryName, setDestinataryName] = useState("");
  useEffect(() => {
    getUser(destinataryId).then(response => {
        setDestinataryName(response.name);
      }
    );
  }, [destinataryId]);

  const [messages, setMessages] = useState([]);
  useEffect(() => {
      getMessages(userId, destinataryId).then(response => {
      setMessages(response);
    }
    );
  }, [userId, destinataryId]);

  useEffect(() => {
      let timer = setInterval(() => refreshMessages(), 5000);
      return () => clearInterval(timer)
  }, [])

  const refreshMessages = async() => {
    getMessages(userId, destinataryId).then(response => {
      setMessages(response);
      if (messages.length > 0) {
        flatlistRef.current.scrollToIndex({index: 0});
      }
    }
    );
  } 

const defaultPhoto = DefaultImages.defaultPhoto;

  const renderItem = ( {item} ) => {
    const dateSent = item.dateSent;
    if (dateSent == null) {
      const dateSent = "";
    }
    return (
        <View style={(userId == item.authorId)? styles.textFromUserRight : styles.textFromUser}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 11}}>{dateSent}</Text>
            <Icon name='check' style={(item.messageHasBeenSeen)? styles.checkMarkSeen : styles.checkMark}/>
          </View>
            <Text style={{fontSize: 18}}>{item.message}</Text>
        </View>
    );
  }

  function getCurrentDate()
  {
    const date = new Date().toString();
    const separatedDateElements = date.split(" ");
    const formatedDate = separatedDateElements[1] + " " + separatedDateElements[2] + " " + separatedDateElements[3] + " " + separatedDateElements[4];
    return formatedDate;
  }

  const handleSendMessage = () => {
  setText("");
  Keyboard.dismiss();
  const date = getCurrentDate();
  if (text.length > 0) {
    insertMessage({
      message: text,
      authorId: userId,
      destinataryId: destinataryId,
      dateSent: date,
      dateSentInTicks: new Date().getTime(),
      messageHasBeenSeen: false
    }).then(refreshMessages);
  }
  }

  return (
    <View style = {styles.homePage}>
      <Header
      goBackEnabled={true}
      />
      <View style={styles.otherUserInfoBox}>
        <Image 
        style={styles.userPictureImage}
        source={{uri: defaultPhoto}}/>
        <Text style={styles.otherUserInfoBoxText}>
          {destinataryName}
        </Text>
      </View>
      <FlatList
        data={messages}
        inverted={true}
        ref={flatlistRef}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />   
      <View style={{height: 68, padding: 4, width: '100%', alignItems: 'center', flexDirection: 'row'}}>
        <TextInput
          style={{height: 60, width: '85%'}}
          type="outlined"
          label="Digite sua mensagem..."
          value={text}
          onChangeText={text => setText(text)}
          onSubmitEditing={handleSendMessage}
        />
         <Icon name="send" style={{width: '15%', padding: '5%', borderWidth: 1, borderColor: Colors.cardBorderColor}} size={21} onPress={handleSendMessage}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
  otherUserInfoBox: {
    height: 60,
    width: '100%',
    borderBottomColor: Colors.headerTextColor,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
  },
  otherUserInfoBoxText: {
    color: 'white',
    fontSize: 21,
    marginLeft: 12,
  },
  userPictureImage: {
    width: 42,
    height: 42,
    borderRadius: 42
  },
  textFromUser: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    margin: 4,
    backgroundColor: Colors.messageColorOtherUser,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  textFromUserRight: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    margin: 4,
    backgroundColor: Colors.messageColorUser,
    maxWidth: '80%',
    alignSelf: 'flex-end',
  },
  checkMark: {
    height: 14, 
    marginLeft: 4, 
    color: Colors.mutedTextColor
  },
    checkMarkSeen: {
    height: 14, 
    marginLeft: 4, 
    color: Colors.checkMarkSeenColor
  }
});

export default ChatPage;