// import { fixedDishes } from "./fixedDishes.js";
// import { plates } from "./plates.js";

// plates();
// fixedDishes();


fetch("https://servercardapio.onrender.com/api/products")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

/*
const container = document.querySelector('.faqContainer');
container.innerHTML = 'Carregando cardápio...';

fetch('https://servercardapio.onrender.com/api/produtos')
    .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar cardápio');
        return res.json();
    })
    .then(data => {
        container.innerHTML = '';

        // Junta os arrays plates e platesOfDay
        const produtos = [...(data.plates || []), ...(data.platesOfDay || [])];

        produtos.forEach((produto, index) => {
            const divItem = document.createElement('div');
            divItem.className = 'faqItem';

            // Botão com o nome do prato
            const btnNome = document.createElement('button');
            btnNome.className = 'faqQuestion';
            btnNome.setAttribute('aria-expanded', 'false');
            btnNome.setAttribute('aria-controls', `produto-desc-${index}`);
            btnNome.textContent = produto.name || 'Produto sem nome';

            const spanIcon = document.createElement('span');
            spanIcon.className = 'faqIcon';
            spanIcon.textContent = '▼';
            btnNome.appendChild(spanIcon);

            // Div resposta com detalhes
            const divResposta = document.createElement('div');
            divResposta.id = `produto-desc-${index}`;
            divResposta.className = 'faqAnswer';
            divResposta.setAttribute('role', 'region');
            divResposta.setAttribute('aria-hidden', 'true');

            // Imagem (URL relativa - ajusta para absoluta)
            if (produto.url_image) {
                const img = document.createElement('img');
                // Se for url relativa sem http(s), concatena base
                if (!produto.url_image.startsWith('http')) {
                    // Ajuste base URL conforme seu domínio
                    img.src = `https://servercardapio.onrender.com/${produto.url_image.replace(/^\/+/, '')}`;
                } else {
                    img.src = produto.url_image;
                }
                img.alt = produto.name || 'Imagem do prato';
                img.style.maxWidth = '100%';
                img.style.borderRadius = '8px';
                img.style.marginBottom = '10px';
                divResposta.appendChild(img);
            }

            // Lista dos acompanhamentos (company)
            if (produto.company && produto.company.length > 0) {
                const ul = document.createElement('ul');
                produto.company.forEach(comp => {
                    const li = document.createElement('li');
                    li.textContent = comp;
                    ul.appendChild(li);
                });
                divResposta.appendChild(ul);
            }

            // Preço formatado
            if (typeof produto.price === 'number') {
                const pPreco = document.createElement('p');
                pPreco.textContent = `Preço: R$ ${produto.price.toFixed(2).replace('.', ',')}`;
                pPreco.style.fontWeight = 'bold';
                pPreco.style.marginTop = '10px';
                divResposta.appendChild(pPreco);
            }

            btnNome.addEventListener('click', () => {
                const isActive = divItem.classList.contains('active');

                // Fecha todos os abertos
                document.querySelectorAll('.faqItem.active').forEach(item => {
                    item.classList.remove('active');
                    const btn = item.querySelector('.faqQuestion');
                    const answer = item.querySelector('.faqAnswer');
                    btn.setAttribute('aria-expanded', 'false');
                    answer.setAttribute('aria-hidden', 'true');
                });

                if (!isActive) {
                    divItem.classList.add('active');
                    btnNome.setAttribute('aria-expanded', 'true');
                    divResposta.setAttribute('aria-hidden', 'false');
                }
            });

            divItem.appendChild(btnNome);
            divItem.appendChild(divResposta);
            container.appendChild(divItem);
        });
    })
    .catch(err => {
        container.innerHTML = 'Erro ao carregar cardápio.';
        console.error(err);
    });

*/