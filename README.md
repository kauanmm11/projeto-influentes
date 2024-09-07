# projeto-influentes
 Criando o Meu Projeto do evento Imersão-Gemini
 https://kauanmm11.github.io/projeto-influentes/

 # Sistema de Votação de Personalidades

Este projeto é um sistema de votação para diferentes personalidades em várias categorias, como Youtubers, Streamers, Cantores e Autores. O site permite que os usuários visualizem informações sobre cada personalidade e votem em sua favorita. 

## Funcionalidades

- **Visualização de Cards**: Exibe personalidades em formato de cards com imagem, título, descrição e links relevantes.
- **Sistema de Votação**: Permite que os usuários votem em suas personalidades favoritas, atualizando o número de votos em tempo real.
- **Filtro por Categoria**: Permite que os usuários filtrem as personalidades por categoria (Youtuber, Cantor, Autor, Streamer) ou visualizem todas as categorias.
- **Pesquisa**: Os usuários podem pesquisar personalidades por título ou descrição.

## Estrutura do Projeto

### HTML
- `index.html`: Estrutura básica da página, incluindo seções para os cards, botões de categorias e o campo de pesquisa.

### CSS
- `styles.css`: Estilos para o layout da página, incluindo a aparência dos cards, botões e o contêiner para exibir o vencedor (caso a votação seja concluída).

### JavaScript
- `script.js`: Lógica principal para:
  - Renderizar os cards de personalidades.
  - Adicionar e gerenciar votos.
  - Filtrar e pesquisar personalidades.
  - Gerenciar os botões de categoria.

## Como Usar

1. **Inicie o Projeto**: Abra o arquivo `index.html` em um navegador para visualizar a página.
2. **Vote**: Clique no botão de votação nos cards das personalidades para registrar seu voto.
3. **Filtre e Pesquise**: Use os botões de categoria ou o campo de pesquisa para filtrar e encontrar personalidades específicas.

## Implementação

### JavaScript
- **Dados**: Os dados das personalidades são armazenados em um array de objetos. Cada objeto contém informações como título, foto, descrição, categoria, links e número de votos.
- **Renderização de Cards**: Os cards são criados dinamicamente e exibidos com base nas categorias e votos.
- **Votação**: Os votos são atualizados localmente e exibidos em tempo real no card.

### CSS
- **Estilos de Cards**: Os cards são estilizados para ter uma aparência moderna e limpa, com uma imagem, texto e botões.
- **Estilos de Botões**: Os botões são estilizados para serem clicáveis e visíveis.

### Exemplo de Dados

```javascript
const dados = [
    {
        titulo: "Alanzoka",
        foto: "imagens/Alanzoka.png",
        descricao: "Além de ser um streamer, Alanzoka também possui um canal no YouTube onde compartilha momentos engraçados e trechos de suas lives.",
        categoria: "youtuber",
        links: [
            "https://pt.wikipedia.org/wiki/Alanzoka",
            "https://www.twitch.tv/alanzoka"
        ],
        votos: 0 // Adiciona a propriedade votos
    },
    // Adicione outros itens aqui...
];

