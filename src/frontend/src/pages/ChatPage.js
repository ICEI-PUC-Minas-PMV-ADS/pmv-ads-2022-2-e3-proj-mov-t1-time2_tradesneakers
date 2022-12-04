import react, {useState, useRef, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Pressable, Keyboard} from 'react-native';
import { Searchbar } from 'react-native-paper';
import {Button} from 'react-native-paper';
import Header from '../components/Header';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {getChats} from '../services/messages.services';
import {useUser} from '../context/UserContext';

import {normalizarTextoParaComparacao} from '../config/CommonFunctions';
import Colors from '../config/Colors';
import DefaultImages from '../config/DefaultImages';

const ChatPage = ({navigation}) => {

  const {userId, signed} = useUser();

  if (!signed) {
    navigation.goBack();
    navigation.navigate("LoginPage")
  }

  const flatlistRef = useRef();

  const [users, setUsers] = useState([]);

  const [filteredUsers, setFilteredUsers] = useState([]);

  const defaultPhoto = DefaultImages.defaultPhoto;

  const [chatsLoaded, setChatsLoaded] = useState(false);

  const [searchText, setSearchText] = useState("");

  const [filterText, setFilterText] = useState("");

  useFocusEffect(
    useCallback(() => {
      setChatsLoaded(false);
      getChats(userId).then(response => {
        setUsers(response);
        setChatsLoaded(true);
      })
    }, [userId])
  );

  useEffect(() => {
      let timer = setInterval(() => refreshChats(), 5000);
      return () => clearInterval(timer)
  }, [])

  const refreshChats = () => {
      getChats(userId).then(response => {
        setUsers(response);
        setChatsLoaded(true);
      })
  }

  useEffect(() => {
    if (users != null) {
      setFilteredUsers(users.filter(user => normalizarTextoParaComparacao(user.name).includes(normalizarTextoParaComparacao(filterText))));
    }
  }, [users, filterText])

  const renderItem = ( {item} ) => {
    return (
      <Pressable style={styles.userInfo} onPress={() => navigation.navigate("ViewChatPage", {destinataryId: item.id})}>
        <View style={{flexDirection: 'row',  width: '100%'}}>
        <Image 
          style={styles.userPictureImage}
          source={{uri: defaultPhoto}}/>
        <View style={{width: '100%'}}>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18, marginLeft: 6}}>
          {item.name}
          </Text>
          <View style={{flexDirection: 'row', marginRight: 40}}>
          <Text style={{fontSize: 12}}>
          {item.lastMessageDate}
          </Text>
          <Icon name='check' style={(item.lastMessageHasBeenSeen)? styles.checkMarkSeen : styles.checkMark}/>
          </View>
        </View>
        <Text style={{fontSize: 16, marginLeft: 12, color: Colors.mutedTextColor}}>
         {item.lastMessage}
        </Text>
        </View>
        </View>
      </Pressable>
    );
  }

    const emptySearch = () => {
    if (chatsLoaded) {
      return <Text style={styles.nenhumResultado}>Nenhuma conversa encontrada</Text>;
    }
    else {
          return <Text style={styles.nenhumResultado}>Carregando...</Text>;
    }
  }

  const handleOnChangeSearch = text => {
    setSearchText(text)
    if (text == "") {
      setFilterText("");
    }
  };

  const handleOnSubmitSearch = () => {
      Keyboard.dismiss;
      setFilterText(searchText)    
    };

  return (
    <View style = {styles.chatPage}>
      <Header
      goBackEnabled={true}
      />
    <Searchbar
      style={styles.buscarChat}
      placeholder="Buscar conversa"
      onChangeText={handleOnChangeSearch}
      value={searchText}
      onIconPress={handleOnSubmitSearch}
      onSubmitEditing={handleOnSubmitSearch}
    />
      <FlatList
        ListEmptyComponent={emptySearch}
        style={{width: '100%'}}
        data={filteredUsers}
        ref={flatlistRef}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button style={styles.botaoNovaConversa} mode="contained" onPress={() => navigation.navigate('NewChatPage')}>
        <Text style={styles.botaoNovaConversaText}>Nova conversa</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  chatPage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
  botaoNovaConversa: {
    width: "45%",
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16,
     marginBottom: 16
  },
  botaoNovaConversaText: {
    fontSize: 12,
  },
  userInfo: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 6,
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 1,
    marginBottom: 2,
    marginTop: 2,
    borderRadius: 5,
    borderColor: Colors.cardBorderColor,
    backgroundColor: Colors.cardColor
  },
    userPictureImage: {
    width: 42,
    height: 42,
    borderRadius: 42
  },
    nenhumResultado: {
      textAlign: 'center',
      fontSize: 18,
      marginTop: 32
    },
    buscarChat: {
      width: '95%',
      margin: '2.5%'
    },
      checkMark: {
    height: 14, 
    marginLeft: 4,
    marginTop: 2, 
    color: Colors.mutedTextColor
  },
    checkMarkSeen: {
    height: 14, 
    marginLeft: 4, 
    marginTop: 2,
    color: Colors.checkMarkSeenColor
  }
});

export default ChatPage;
