import react, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
import Header from '../components/Header';
import {getUsers} from '../services/auth.services';
import {useUser} from '../context/UserContext';
import {normalizarTextoParaComparacao} from '../config/CommonFunctions';

import Colors from '../config/Colors';
import DefaultImages from '../config/DefaultImages';

const NewChatPage = ({navigation}) => {
  const flatlistRef = useRef();

  const {userId, signed} = useUser();
  
  if (!signed) {
    navigation.navigate("LoginPage")
  }

  const [usersLoaded, setUsersLoaded] = useState(false);

  const [filteredUsers, setFilteredUsers] = useState([]);

  const [searchText, setSearchText] = useState("");
  
  const [filterText, setFilterText] = useState("");
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsersLoaded(false);
    getUsers().then(response => {
        setUsers(response.filter(user => user.id != userId).sort((a, b) => a.name.localeCompare(b.name)));
        setUsersLoaded(true);
      }
    );
  }, [userId]);

  const defaultPhoto = DefaultImages.defaultPhoto;

  const renderItem = ( {item} ) => {
    return (
      <View style={styles.userInfo}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <Image 
          style={styles.userPictureImage}
          source={{uri: defaultPhoto}}/>
        <Text style={{fontSize: 18, marginLeft: 6}}>
         {item.name}
        </Text>
        </View>
        <Button style={styles.botaoNovaConversa} mode="contained" onPress={() => navigation.navigate('ViewChatPage', {destinataryId: item.id})}>
        <Text style={styles.botaoNovaConversaText}>Conversar</Text>
      </Button>
      </View>
    );
  }

  const emptySearch = () => {
    if (usersLoaded) {
      return <Text style={styles.nenhumResultado}>Nenhum usuário encontrado</Text>
    }
    else {
          return <Text style={styles.nenhumResultado}>Carregando...</Text>;
    }
  }

  useEffect(() => {
    if (users != null) {
      setFilteredUsers(users.filter(user => normalizarTextoParaComparacao(user.name).includes(normalizarTextoParaComparacao(filterText))));
    }
  }, [users, filterText])
  
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
    borderRadius: 16
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
  
});

export default NewChatPage;