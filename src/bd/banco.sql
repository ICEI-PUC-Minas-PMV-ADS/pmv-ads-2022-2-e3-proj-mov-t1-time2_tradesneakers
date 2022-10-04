-- Cria a tabela de usuários

CREATE TABLE Usuario(
IdUsuario INT NOT NULL,
Email varchar(50),
Nome_Usuario varchar(50),
Senha varchar(50),
Telefone varchar(50),
PRIMARY KEY(IdUsuario)
);

-- Cria a tabela de endereço

CREATE TABLE Endereco(
Logradouro varchar(50),
Cidade varchar(50),
Estado varchar(50),
Pais varchar(50),
Cep varchar(50),
PRIMARY KEY (Logradouro),
);

-- Cria a tabela de Mensagem

CREATE TABLE Mensagem(
IdRemetente int NOT NULL,
IdDestinatario int NOT NULL,
Assunto varchar(50),
Conteudo varchar(50),
VisualizadaOuNao (bool),
PRIMARY KEY (IdRemetente),
FOREIGN KEY (IdDestinatario) REFERENCES destinatario(IdDestinatario),
);

-- Cria a tabela de Pedido

CREATE TABLE Pedido(
IdPedido int NOT NULL,
IdVendedor int NOT NULL,
DataPedido varchar(50),
DataEnvio varchar(50),
PedidoFechado bool,
PedidoEntregue bool,
PRIMARY KEY (IdPedido),
FOREIGN KEY (IdUsuario) REFERENCES vendedor(IdVendedor),
);

-- Cria a tabela de Produto

CREATE TABLE Produto(
IdProduto int NOT NULL,
Nome varchar(50),
Marca varchar(50),
Numeracao int ,
Descricao varchar(50),
Preco float,
PRIMARY KEY (IdProduto),
);

-- Cria a tabela de Foto

CREATE TABLE Fotos_Produto(
IdFotoProduto int NOT NULL,
UrlDaImage varchar(50),
FOREIGN KEY (IdFotoProduto),
);

-- Cria a tabela de Troca

CREATE TABLE Proposta_troca(
IdUsuario int NOT NULL,
IdVendedor int NOT NULL,
IdProdutoDesejado int NOT NULL,
IdProdutoOferecido int NOT NULL,
CustoDeEnvio float,
Mensagem varchar(50),
PropostoAceitaOuNao bool,
PRIMARY KEY (IdProdutoDesejado),
PRIMARY KEY (IdProdutoDesejado),
FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario),
FOREIGN KEY (IdVendedor) REFERENCES Vendedor(IdVendedor),
);