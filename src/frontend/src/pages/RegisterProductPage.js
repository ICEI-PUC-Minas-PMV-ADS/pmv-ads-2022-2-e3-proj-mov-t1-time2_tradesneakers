import react, {useState,  useRef, useMemo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import {insertProduto} from '../services/produtos.services';
import {useUser} from '../context/UserContext';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../config/Colors';

const RegisterProductPage = () => {
  const {userId} = useUser();
  const [modeloTenis, setmodeloTenis] = useState("");
  const [marcaTenis, setmarcaTenis] = useState("");
  const [tamanhoTenis, settamanhoTenis] = useState("");
  const [precoTenis, setprecoTenis] = useState("");
  const [descricaoTenis, setdescricaoTenis] = useState("");
  const [urlImg, seturlImg] = useState("");
  const [image, setImage] = useState(null);
  const handleinsertProduto = () => {
    insertProduto({
      nome: modeloTenis,
      marca: marcaTenis,
      tamanho: tamanhoTenis,
      imagem: image ,
      descricao: descricaoTenis,
      preco: precoTenis,
      idUsuario: userId,
      statusDeRecebimento: "Aguardando recebimento do produto",
    }).then(window.alert("Produto cadastrado com sucesso!"))

    let informacoesSaoValidas = true;
    if (modeloTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 3) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir modelo do Tênis');
    }
    if (marcaTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 8) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir marca do Tênis!');
    }
    if (tamanhoTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir tamanho valido!');
    }
    if (descricaoTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 10) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir descrição do Tênis!');
    }
    if (precoTenis.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 5) {
      informacoesSaoValidas = false;
      Alert.alert('Atenção','Inserir valor do Tênis!');
    }

    if (informacoesSaoValidas) {
      insertProduto({
        modelo: modeloTenis,
        nome: modeloTenis,
        marca: marcaTenis,
        tamanho: tamanhoTenis,
        imagem: image ,
        descricao: descricaoTenis,
        preco: precoTenis,

      }).then( res => {
            if(res){
              Alert.alert('Atenção', 'Produto cadastrado com sucesso!',[
                { text: "OK", onPress: () => navigation.goBack() }
              ]);
            }
            else{
              getEmailAlreadyUsed(email).then(response => {
              if (response) {
                Alert.alert('Atenção', 'Email já cadastrado!');
              }
              else {
                Alert.alert('Atenção', "Um erro ocorreu durante o cadastro!");
              }
            }
          );
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
      style={styles.modeloTenisTextInput}
      label="Modelo"
      value={modeloTenis}
      mode= {"outlined"}
      onChangeText={modeloTenis => setmodeloTenis(modeloTenis)}
    />
    <TextInput
      style={styles.marcaTenisTextInput}
      label="Marca"
      value={marcaTenis}
      mode= {"outlined"}
      onChangeText={marcaTenis => setmarcaTenis(marcaTenis)}
    />
    <TextInput
      style={styles.tamanhoTenisTextInput}
      label="Tamanho"
      value={tamanhoTenis}
      mode= {"outlined"}
      onChangeText={tamanhoTenis => settamanhoTenis(tamanhoTenis)}
    />
    <TextInput
      style={styles.precoTenisTextInput}
      label="Preço"
      value={precoTenis}
      mode= {"outlined"}
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
    <Button style={styles.botaoAdicionaImg} mode="contained" onPress={pickImage}>
      Adicione uma imagem
    </Button>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
    width: "100%",
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16
  },
});

export default RegisterProductPage;
