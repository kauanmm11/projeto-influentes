let dados = [
    // Youtubers
    {
        titulo: "Alanzoka",
        foto: "imagens/Alanzoka.png",
        descricao: "Além de ser um streamer, Alanzoka também possui um canal no YouTube onde compartilha momentos engraçados e trechos de suas lives.",
        categoria: "youtuber",
        links: [
            "https://pt.wikipedia.org/wiki/Alanzoka",
            "https://www.twitch.tv/alanzoka"
        ],
        votos: 0
    },
    {
        titulo: "Felipe Neto",
        foto: "imagens/Felipe_Neto.png",
        descricao: "Felipe Neto é um dos maiores youtubers do Brasil, famoso por sua forte presença nas redes sociais e seus vídeos que abordam temas diversos com humor e crítica social.",
        categoria: "youtuber",
        links: [
            "https://pt.wikipedia.org/wiki/Felipe_Neto",
            "https://www.youtube.com/user/felipeneto"
        ],
        votos: 0
    },
    {
        titulo: "Whindersson Nunes",
        foto: "imagens/whindersson.png",
        descricao: "Whindersson Nunes é um dos maiores youtubers e comediantes do Brasil, conhecido por seus vídeos engraçados e sátiras sobre a vida cotidiana.",
        categoria: "youtuber",
        links: [
            "https://pt.wikipedia.org/wiki/Whindersson_Nunes",
            "https://www.youtube.com/user/whinderssonnunes"
        ],
        votos: 0
    },
    // Streamers
    {
        titulo: "Yoda",
        foto: "imagens/yoda.png",
        descricao: "Felipe 'YoDa' Noronha é um dos streamers brasileiros mais populares da Twitch, conhecido por suas transmissões de League of Legends e sua personalidade carismática.",
        categoria: "streamer",
        links: [
            "https://pt.wikipedia.org/wiki/YoDa",
            "https://www.twitch.tv/yoda"
        ],
        votos: 0
    },
    {
        titulo: "Rakin",
        foto: "imagens/rakin.png",
        descricao: "Rafael 'Rakin' Knittel é conhecido por suas transmissões divertidas e interativas de League of Legends. Ele conquistou o público com seu humor e paixão por games.",
        categoria: "streamer",
        links: [
            "https://ordemparanormal.fandom.com/wiki/Rakin",
            "https://www.twitch.tv/rakin"
        ],
        votos: 0
    },
    {
        titulo: "Alanzoka",
        foto: "imagens/alanzoka.jpg",
        descricao: "Uma das maiores estrelas brasileiras da Twitch Alanzoka, nome artístico de Alan Ferreira Pereira, é um dos streamers brasileiros mais populares e influentes da plataforma Twitch.",
        categoria: "streamer",
        links: [
            "https://pt.wikipedia.org/wiki/Alanzoka",
            "https://www.twitch.tv/alanzoka"
        ],
        votos: 0
    },
    // Cantores
    {
        titulo: "Gusttavo Lima",
        foto: "imagens/Gustavo_Lima.jpg",
        descricao: "Gusttavo Lima é um dos cantores de sertanejo mais populares do Brasil, conhecido por seus hits que dominam as paradas de sucesso.",
        categoria: "cantor",
        links: [
            "https://pt.wikipedia.org/wiki/Gusttavo_Lima",
            "https://www.instagram.com/gusttavolima/"
        ],
        votos: 0
    },
    {
        titulo: "Luan Santana",
        foto: "imagens/luan_santana.jpg",
        descricao: "Luan Santana é um cantor e compositor brasileiro, famoso por suas músicas românticas e pelo seu grande carisma com o público.",
        categoria: "cantor",
        links: [
            "https://pt.wikipedia.org/wiki/Luan_Santana",
            "https://www.instagram.com/luansantana/"
        ],
        votos: 0
    },
    {
        titulo: "Zé Neto & Cristiano",
        foto: "imagens/Ze_Neto_Cristiano.png",
        descricao: "Zé Neto & Cristiano são uma dupla sertaneja de grande sucesso, conhecidos por vários hits que conquistaram o público brasileiro.",
        categoria: "cantor",
        links: [
            "https://pt.wikipedia.org/wiki/Zé_Neto_&_Cristiano",
            "https://www.instagram.com/zenetoecristiano/"
        ],
        votos: 0
    },
    // Autores (diretores e roteiristas de filmes)
    {
        titulo: "Christopher Nolan",
        foto: "imagens/Christopher_Nolan.jpg",
        descricao: "Christopher Nolan é um dos diretores e roteiristas mais aclamados de Hollywood, conhecido por filmes como 'A Origem', 'Interestelar', e a trilogia 'O Cavaleiro das Trevas'.",
        categoria: "autor",
        links: [
            "https://pt.wikipedia.org/wiki/Christopher_Nolan",
            "https://www.imdb.com/name/nm0634240/"
        ],
        votos: 0
    },
    {
        titulo: "Quentin Tarantino",
        foto: "imagens/Quentin_Tarantino.jpg",
        descricao: "Quentin Tarantino é um dos mais conhecidos roteiristas e diretores do cinema contemporâneo, famoso por filmes como 'Pulp Fiction', 'Kill Bill' e 'Django Livre'.",
        categoria: "autor",
        links: [
            "https://pt.wikipedia.org/wiki/Quentin_Tarantino",
            "https://www.imdb.com/name/nm0000233/"
        ],
        votos: 0
    },
    {
        titulo: "Steven Spielberg",
        foto: "imagens/Steven_Spielberg.jpg",
        descricao: "Steven Spielberg é um dos mais bem-sucedidos diretores e roteiristas da história do cinema, responsável por filmes icônicos como 'Jurassic Park', 'E.T.', e 'Indiana Jones'.",
        categoria: "autor",
        links: [
            "https://pt.wikipedia.org/wiki/Steven_Spielberg",
            "https://www.imdb.com/name/nm0000229/"
        ],
        votos: 0
    }
];

// Define o prazo para a votação
const deadline = new Date('2024-09-09T20:00:00');

function renderCards(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Limpa o contêiner antes de adicionar novos cards
    
    // Agrupando dados por categoria
    let categorias = {
        youtuber: [],
        cantor: [],
        autor: [],
        streamer: []
    };

    data.forEach(item => {
        categorias[item.categoria].push(item);
    });

    // Adiciona os tópicos e cards ao contêiner
    for (let categoria in categorias) {
        if (categorias[categoria].length > 0) {
            // Adiciona o tópico
            let heading = document.createElement('h2');
            heading.textContent = capitalizeFirstLetter(categoria) + 's';
            resultsContainer.appendChild(heading);

            // Adiciona o contêiner para os cards
            let container = document.createElement('div');
            container.classList.add('card-container');

            categorias[categoria].forEach(item => {
                let card = document.createElement('div');
                card.classList.add('card-primeiro');

                card.innerHTML = `
                    <article class="card-segundo">
                        <img src="${item.foto}" alt="Imagem de ${item.titulo}" class="igm">
                        <div class="texto">
                            <h2>${item.titulo}</h2>
                            <p>${item.descricao}</p>
                            <a href="${item.links[0]}" target="_blank">Mais Informações</a>
                            <a href="${item.links[1]}" target="_blank">${item.titulo} </a>
                            <div class="votos">
                                <span class="contador">Votos: ${item.votos}</span>
                                <button class="votar">Votar</button>
                            </div>
                        </div>
                    </article>
                `;

                container.appendChild(card);
            });

            resultsContainer.appendChild(container);
        }
    }

    // Adiciona eventos de votação aos botões
    document.querySelectorAll('.votar').forEach(button => {
        button.addEventListener('click', (event) => {
            if (new Date() > deadline) {
                alert("A votação terminou.");
                return;
            }
            const article = event.target.closest('article');
            const titulo = article.querySelector('h2').textContent;
            const item = dados.find(dado => dado.titulo === titulo);
            
            if (item) {
                item.votos += 1;
                article.querySelector('.contador').textContent = `Votos: ${item.votos}`;
            }
        });
    });

    // Verifica se a votação terminou e exibe o vencedor
    if (new Date() > deadline) {
        displayWinner();
    }
}

// Função para filtrar os dados com base no termo pesquisado
function filterData(searchTerm) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return dados.filter(item => 
        item.titulo.toLowerCase().includes(lowerCaseTerm) || 
        item.descricao.toLowerCase().includes(lowerCaseTerm)
    );
}

// Função auxiliar para capitalizar a primeira letra de uma string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Função para criar botões de tópicos
function createTopicButtons() {
    const buttonsSection = document.getElementById('buttons-section');
    const topics = ['youtuber', 'cantor', 'autor', 'streamer', 'todos'];

    topics.forEach(topic => {
        let button = document.createElement('button');
        button.textContent = capitalizeFirstLetter(topic);
        button.addEventListener('click', () => {
            if (topic === 'todos') {
                renderCards(dados);
            } else {
                const filteredData = dados.filter(item => item.categoria === topic);
                renderCards(filteredData);
            }
        });
        buttonsSection.appendChild(button);
    });
}

// Função para exibir o vencedor
function displayWinner() {
    const winner = dados.reduce((prev, current) => (prev.votos > current.votos) ? prev : current);
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<h2>Vencedor</h2>
                                  <div class="winner">
                                      <h2>${winner.titulo}</h2>
                                      <img src="${winner.foto}" alt="Imagem de ${winner.titulo}" class="igm">
                                      <p>${winner.descricao}</p>
                                      <p>Votos: ${winner.votos}</p>
                                      <a href="${winner.links[0]}" target="_blank">Mais Informações</a>
                                      <a href="${winner.links[1]}" target="_blank">${winner.titulo}</a>
                                  </div>`;
}

// Inicializa a página com os botões de tópicos
createTopicButtons();

// Manipulador de evento para o botão de pesquisa
document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('inome').value;
    const filteredData = filterData(searchTerm);
    renderCards(filteredData);
});

// Verifica se a votação terminou ao carregar a página
window.addEventListener('load', () => {
    if (new Date() > deadline) {
        displayWinner();
    } else {
        renderCards(dados);
    }
});