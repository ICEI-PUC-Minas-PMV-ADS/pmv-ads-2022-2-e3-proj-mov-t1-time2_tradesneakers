# Programação de Funcionalidades

Nessa seção são apresentadas as telas correspondentes as funcionalidades implementadas. As instruções de acesso da aplicação são apresentadas a seguir:

Como o backend do projeto ainda não se encontra hospedado, o usuário que deseja utilizar a aplicação na versão atual deverá rodar o JSON Server em seu próprio computador através dos seguintes passos:
- Fazer download do arquivo db.json presente na pasta https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time2_tradesneakers/tree/main/src/backend.
- Colocar o arquivo em um diretório e abrir este diretório no VS Code.
- Instalar as bibliotecas JSON Server e JSON Server auth utilizando os comandos "npm install -g json-server" e 
"npm install -g json-server-auth" no terminal do VS Code.
- Instalar o localtunnel utilizando o comando "npm install -g localtunnel".
- Rodar o JSON Server localmente utilizando o comando "json-server-auth db.json" no terminal do VS Code.
- Utilizar o localtunnel para expor a porta 3000 em que o JSON Server está rodando para a internet utilizando o comando "lt --port 3000" no prompt de comando do seu sistema operacional.
- Acessar a URL fornecida pelo localtunnel em um navegador e clicar em "Click to continue" para habilitar a URL.

Após a realização destas etapas para rodar o backend, o usuário deverá acessar o link da aplicação no Snack em https://snack.expo.dev/@sergiomenezes/tradesneakers e seguir os seguintes passos:
- Acessar o arquivo urls.js presente na pasta src/services nos diretórios do Snack (presentes no canto esquerdo da página do Snack acessada através do link acima).
- Substituir a URL presente como valor da variável "BASE_URL" pela nova URL fornecida pelo localtunnel na etapa anterior (as URLs fornecidas são temporárias e deixam de ser válidas após finalizar o processo no prompt de comando, de modo que uma nova URL precisa ser fornecida a cada vez que a aplicação for ser executada).
- Caso deseje rodar a aplicação em um dispositivo físico, baixar o aplicativo "Expo Go" na App Store/Apple Store e escanear o QR code fornecido pelo snack ao clicar na aba de "My device" presente na página do Snack.
- Caso deseje rodar a aplicação em um emulador de Android ou IoS, clicar na taba "Android" ou "IoS" na página do Snack.
Observação: Algumas funcionalidades como o sistema de alertas não funciona apropriadamente ao rodar a aplicação no modo "Web" do Snack. Por isto, é recomendado rodar a aplicação nos emuladores de Android, IoS ou em um dispositivo físico através do Expo Go.

## Cadastro de conta de usuário (RF-01)
A funcionalidade de cadastro de conta de usuário pode ser acessada a partir da tela de login clicando-se no botão "Registrar-se". O usuário deverá informar seu nome de usuário, e-mail, telefone e a senha que deseja usar (além de repetir a senha). Caso todas as informações sejam válidas e o e-mail já não esteja em uso por outro usuário, o usuário terá sua conta cadastrada receberá uma mensagem de "Cadastro realizado com sucesso" ao clicar no botão "Confirmar".

**Tela - Tela de cadastro de conta de usuário**<br>
![cadastro1](https://user-images.githubusercontent.com/74699119/194682734-8e4a73ab-1893-4470-99ff-b8e1b9c88d8e.png)

**Alerta - Mensagem de sucesso**<br>
![cadastro2](https://user-images.githubusercontent.com/74699119/194682741-23862030-71dd-4bca-809c-45e128cf1efc.png)

Estrutura de dados:
Os dados prenchidos no formulário de cadastro são enviados para o backend em formato JSON na seguinte estrutura:

    {
      "email": "Usuario@email.com",
      "password": "Senha",
      "name": "Usuario",
      "phone": "99999999",
    }

A senha é então encriptada utilizando-se o bcrypjs e os dados são armazenados em formato JSON no backend simulado do JSON server na seguinte estrutura de dados.
```
"users": [
    {
      "email": "Usuario@email.com",
      "password": "$2a$10$adRRvEnLyMsJSPuAWA2bwenACnDlQCqKfVbCzuUrxjVoEbTtY8tTa",
      "name": "Usuario",
      "phone": "99999999",
      "id": 15
    },
]
```
### Requisitos atendidos
- RF-01

### Artefatos da funcionalidade
Páginas:
- RegisterPage.js

Serviços:
- auth.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Fazer login" no canto direito do cabeçalho;
- Visualizar a tela de login;
- Clicar no botão "Registrar-se";
- Visualizar a tela de cadastro de conta de usuário;
- Preencher as informações solicitadas;
- Clicar no botão "Confirmar";
- Caso as informações sejam válidas e o e-mail já não tenha sido cadastrado anteriormente, visualizar a mensagem de "Usuário cadastrado com sucesso!".

## Login de usuário (RF-01)
A tela de login pode ser acessada clicando na opção "Fazer login" presente no canto direito do cabeçalho, que estará presente caso nenhum usuário esteja logado no sistema. A partir da tela de login, o usuário que já possuir uma conta cadastrada poderá realizar login ao informar seu email e senha cadastrados, sendo redirecionado para a homepage caso o login seja bem sucedido. Após a realização do login, a opção de "Fazer login" no cabeçalho é substituida por um icone de conta de usuário.

**Tela - Tela de login**<br>
![login1](https://user-images.githubusercontent.com/74699119/194682839-323020b5-c4b2-4b16-890e-53a8c1a81bae.png)

**Cabeçalho após login de usuário**<br>
![login2](https://user-images.githubusercontent.com/74699119/194682859-7e7e2329-4f0a-4df6-8554-254ba1604bed.png)

Estrutura de dados:
Os dados prenchidos no formulário de login são enviados em formato JSON para o backend na seguinte estrutura:

    {
      "email": "Usuario@email.com",
      "password": "Senha",
    }

Caso as informações de login estejam corretas, o backend responde a requisição retornando um Token JWT na seguinte estrutura:
```
{
  "accessToken": "xxx.xxx.xxx"
}
```

### Requisitos atendidos
- RF-01

### Artefatos da funcionalidade
Páginas:
- LoginPage.js

Serviços:
- auth.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Fazer login" no canto direito do cabeçalho;
- Visualizar a tela de login;
- Preencher as informações solicitadas;
- Clicar no botão "Entrar";
- Caso as informações sejam válidas, o login será realizado e o usuário será redirecionado para a homepage, podendo observar que a opção de "Fazer login" do cabeçalho foi substituida por um ícone de conta de usuário.

## Busca de produtos (RF-03)
A tela de busca de produtos poderá ser acessada ao clicar no icone de "Buscar" representado por uma lupa presente no menu de navegação inferior. Dentro desta tela o usuário é capaz de informar um texto na caixa de busca para realizar uma pesquisa e obter assim a lista de tênis filtados de acordo com as palavras utilizadas na busca. O usuário poderá também nesta tela selecionar um filtro de tamanho/numeração do tênis, que realizará a filtragem dos resultados de modo a mostrar somente tênis que possuam a numeração desejada.

**Tela - Tela de busca**<br>
![busca1](https://user-images.githubusercontent.com/74699119/194682865-111f2484-7108-4993-a71a-3a84a1d0529c.png)

**Tela - Tela de busca após realização de busca**<br>
![busca2](https://user-images.githubusercontent.com/74699119/194682867-7bfbcded-9342-4e03-b5a4-5a9094c7507a.png)

**Tela - Tela de busca após filtrar resultados por numeração do tênis**<br>
![busca3](https://user-images.githubusercontent.com/74699119/194682872-eccc7ed0-6b88-430c-9540-e26e980c0e8e.png)
<br>
![busca4](https://user-images.githubusercontent.com/74699119/194682875-f21e369a-6929-4978-8999-2fd7f6369c06.png)

Estrutura de dados:
As informações sobre os produtos a serem mostrados na tela são recuperadas em formato JSON da API fake criada pelo JSON server na seguinte estrutura:

Obs: Como não possuímos um serviço de armazenamento separado para hospedar as imagens em URLs próprias e o React Native é incapaz de utilizar sources dinâmicos para imagens, as imagens dos produtos estão armazenadas em Base64, com a string completa das imagens tendo sido parcialmente omitidas no exemplo abaixo por serem muito grandes. 
```
    produtos: [
    {
      "id": 1,
      "nome": "Tênis Air Jordan Cinza",
      "tamanho": 40,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 85.5,
    },
    {
      "id": 2,
      "nome": "Tênis Air Jordan Branco e Preto",
      "tamanho": 38,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QAA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 90,
    },
    {
      "id": 3,
      "nome": "Tênis Vans Amarelo",
      "tamanho": 36,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 100,
    },
    {
      "id": 4,
      "nome": "Tênis All Star Branco",
      "tamanho": 42,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 75,
    },
    {
      "id": 5,
      "nome": "Tênis Adidas Preto",
      "tamanho": 39,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAYAAAAiQxiZAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 60,
    },
    {
      "id": 6,
      "nome": "Tênis Puma Vermelho",
      "tamanho": 37,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlQAAAJSCAYAAAAFwVs0AAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 70,
    },
  ]
```
### Requisitos atendidos
- RF-03

### Artefatos da funcionalidade
Páginas:
- SearchPage.js

Componentes:
- SearchBar.js

Serviços:
- auth.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Buscar" no menu de navegação inferior;
- Visualizar a tela de busca de produtos;
- Inserir o texto na caixa de busca presente no topo da tela para realizar a busca;
- Visualizar resultados da busca;
- Caso deseje filtrar os resultados da busca pela numeração do tênis, selecionar um tamanho na caixa de seleção presente ao lado de "Filtrar por tamanho";
- Visualizar resultados da busca filtrados pela numeração dos tênis.

## Visualização do produto selecionado na tela de busca (RF-03)
A tela de visualização do produto selecionado poderá ser acessada quando o usuário selecionar um produto através do filtro na tela de busca e clicando no botão "Ver Detalhes" que estará abaixo da descrição do produto, sendo assim, ele será redirecionado para a tela de visualização do produto selecionado com os detalhes do mesmo e terá a opção de trocar ou comprar o tênis.

Obs: Esse desenvolvimento foi feito por mim, aluno Álvaro Alfaya Fonseca e abaixo estarei deixando um link com o vídeo da aplicação sendo executada:
https://youtu.be/cPM_4womrFQ

**Tela - Tela de busca com o botão "Ver Detalhes" no produto selecionado**<br>
![botao-ver-detalhes](https://user-images.githubusercontent.com/91163177/198849506-164de7e4-d10f-436a-bc18-6052b17c0541.png)

**Tela - Tela de visualização do produto selecionado após clicar no botão "Ver Detalhes"**<br>
![pagina-details-product](https://user-images.githubusercontent.com/91163177/198849539-84ee7c7e-00b2-458b-bc3e-038c8841a176.png)

Estrutura de dados:
As informações sobre o produto selecionado na tela de busca e também mostrado na tela de visualização são recuperadas em formato JSON da API fake criada pelo JSON server na seguinte estrutura:

```
    produtos: [
    {
      "id": 1,
      "nome": "Tênis Air Jordan Cinza",
      "tamanho": 40,
      "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAAJSCAIAAACtIY/OAAAAAXNSR0IArs4c6QA...",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "preco": 85.5,
    },
]
```
O botão "ver detalhes" criado no componente "CardProduto.js" que fará o navigation.
```
 <Button
          style={styles.button}
          onPress={() =>
            navigation.navigate('ProductDetailsPage', {
              paramKey: produtoId,
            })
          }
        >
```
A página "ProductDetailsPage.js" que é visualizado os detalhes do produto selecionado na tela de busca.
```
const ProductDetailsPage = ({ route }) => {
  const [produto, setProduto] = useState();
  const [produtoLoaded, setProdutoLoaded] = useState(false);
  const produtoId = 1;

  const formatarPreco = (preco) => {
    preco = preco.toFixed(2).toString();
    preco = preco.replace('.', ',');
    return preco;
  };

  const handleTrocar = () => {};

  const handleComprar = () => {};

  useEffect(() => {
    getProduto(produtoId).then((response) => {
      setProduto(response);
      if (response != null) {
        setProdutoLoaded(true);
      }
    });
  }, [produtoId]);

  if (produtoLoaded) {
    return (
      <View style={styles.detailsProduto}>
        <Header goBackEnabled={true} />
        <Text style={styles.nomeProdutoText}>{produto.nome}</Text>
        <Text style={styles.tamanhoProdutoText}>Tamanho {produto.tamanho}</Text>
        <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
        <Text style={styles.descricaoProduto}>{produto.descricao} </Text>
        <View style={styles.container}>
          <Button
            mode="contained"
            style={styles.buttonTroca}
            onPress={handleTrocar}>
            <Text style={styles.buttonTrocaTexto}>Trocar</Text>
          </Button>
          <Button
            mode="contained"
            style={styles.buttonComprar}
            onPress={handleComprar}>
            <Text style={styles.precoText}>
              R$ {formatarPreco(produto.preco)} Comprar
            </Text>
          </Button>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Header goBackEnabled={true} />
        <Text> Carregando produto... </Text>
      </View>
    );
  }
};
```
O service "produto.service.js"
```
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
```
### Requisitos atendidos
- RF-03

### Artefatos da funcionalidade
Páginas:
- ProductDetailsPage.js

Componentes:
- CardProduto.js 

Serviços:
- produto.services.js

### Instruções de acesso
- Visualizar a tela inicial do aplicativo;
- Clicar em "Buscar" no menu de navegação inferior;
- Visualizar a tela de busca de produtos;
- Inserir o texto na caixa de busca presente no topo da tela para realizar a busca;
- Caso deseje filtrar os resultados da busca pela numeração do tênis, selecionar um tamanho na caixa de seleção presente ao lado de "Filtrar por tamanho";
- Visualizar resultados da busca do produto selecionado e clicar no botão "Ver Detalhes";
- Após clicar no botão será redirecionado para a página de visualização dos detalhes do produto selecionado onde o usuário trocar ou comprar o tênis.
