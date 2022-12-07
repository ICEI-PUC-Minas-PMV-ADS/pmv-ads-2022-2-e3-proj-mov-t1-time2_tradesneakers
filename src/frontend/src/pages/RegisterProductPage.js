import react, {useState,  useRef, useMemo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import {insertProduto} from '../services/produtos.services';
import {useUser} from '../context/UserContext';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../config/Colors';

const RegisterProductPage = ({navigation}) => {
  const {userId} = useUser();
  const [modeloTenis, setmodeloTenis] = useState("");
  const [marcaTenis, setmarcaTenis] = useState("");
  const [tamanhoTenis, settamanhoTenis] = useState("");
  const [precoTenis, setprecoTenis] = useState("");
  const [descricaoTenis, setdescricaoTenis] = useState("");
  const [urlImg, seturlImg] = useState("");
  const [image, setImage] = useState(null);
  const handleinsertProduto = () => {
    let informacoesSaoValidas = true;
    if (modeloTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir modelo do Tênis');
    }
    if (marcaTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir marca do Tênis!');
    }
    if (tamanhoTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir tamanho valido!');
    }
    if (descricaoTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir descrição do Tênis!');
    }
    if (precoTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir valor do Tênis!');
    }

    if (informacoesSaoValidas) {
        insertProduto({
        nome: modeloTenis,
        marca: marcaTenis,
        tamanho: tamanhoTenis,
        imagem: image ,
        descricao: descricaoTenis,
        preco: precoTenis,
        idUsuario: userId,
        statusDeRecebimento: "Aguardando recebimento do produto",
      }).then( res => {
            navigation.navigate('PostProductPage');
            if(res){
              Alert.alert('Atenção', 'Produto cadastrado com sucesso!');
            }
            else{
                Alert.alert('Atenção', "Um erro ocorreu durante o cadastro!");
            }
      });
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage("data:image/png;base64," + result.base64);
    }
  };
  return (
    <View style = {styles.homePage}>
      <Header
      goBackEnabled = {true}
      />
      <Text style={{fontSize: 24, marginBottom: 16,marginTop: '10%',}}>
        Adicionar Tênis
      </Text>
      <TextInput
      style={styles.tenisTextInput}
      label="Modelo"
      value={modeloTenis}
      mode= {"outlined"}
      onChangeText={modeloTenis => setmodeloTenis(modeloTenis)}
    />
    <TextInput
      style={styles.tenisTextInput}
      label="Marca"
      value={marcaTenis}
      mode= {"outlined"}
      onChangeText={marcaTenis => setmarcaTenis(marcaTenis)}
    />
    <TextInput
      style={styles.tenisTextInput}
      label="Tamanho"
      value={tamanhoTenis}
      mode= {"outlined"}
      keyboardType="numeric"
      maxLength={2}
      onChangeText={tamanhoTenis => settamanhoTenis(tamanhoTenis)}
    />
    <TextInput
      style={styles.tenisTextInput}
      label="Preço"
      value={precoTenis}
      mode= {"outlined"}
      keyboardType="numeric"
      onChangeText={precoTenis => setprecoTenis(precoTenis)}
    />
    <TextInput
      style={styles.descricaoTenisTextInput}
      label="Descrição"
      value={descricaoTenis}
      mode= {"outlined"}
      multiline = {true}
      numberOfLines = {4}
      onChangeText={descricaoTenis => setdescricaoTenis(descricaoTenis)}
    />
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {image && <Image source={{ uri: image }} style={{ width: 250, height: 200 }} />}
      <Button style={styles.botaoAdicionaImg} mode="contained" onPress={pickImage}>
        Adicione uma imagem
      </Button>
    </View>
    <Button style={styles.botaoPaginaRegistrar} mode="contained" onPress={handleinsertProduto}>
      Confirmar
    </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  botaoPaginaRegistrar: {
    width: "50%",
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16
  },
    botaoAdicionaImg: {
    width: 300,
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16
  },
  tenisTextInput: {
    width: "95%",
    height: 40
  },
    descricaoTenisTextInput: {
    width: "95%",
    height: 120
  },
});

export default RegisterProductPage;
