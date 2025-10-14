document.addEventListener('DOMContentLoaded', () => {
    const projetoCards = document.querySelectorAll('.projeto-card');
    const detalhesProjeto = document.getElementById('detalhes-projeto');
    const fecharDetalhesBtn = document.getElementById('fechar-detalhes');
    const detalhesConteudo = detalhesProjeto.querySelector('.detalhes-conteudo');
    const mensagemSelecao = detalhesProjeto.querySelector('.mensagem-selecao');

    // Mapeamento de dados estáticos para os 5 projetos
    const dadosProjetos = {
        'projeto-1': {
            titulo: 'Projeto E-commerce Moderno',
            descricao: 'Este é um projeto de simulação de e-commerce construído com foco em usabilidade e design responsivo, utilizando a metodologia BEM.',
            linguagens: 'html css js bootstrap',
            githubLink: '#', // Substitua por links reais
            onlineLink: '#'
        },
        'projeto-2': {
            titulo: 'Landing Page de SaaS',
            descricao: 'Criação de uma landing page para um software como serviço (SaaS), focada em alta conversão e carregamento rápido.',
            linguagens: 'html css js',
            githubLink: '#',
            onlineLink: '#'
        },
        'projeto-3': {
            titulo: 'Dashboard Administrativo',
            descricao: 'Desenvolvimento de uma interface de usuário para um painel administrativo, utilizando gráficos e tabelas interativas.',
            linguagens: 'html css js Chart.js',
            githubLink: '#',
            onlineLink: '#'
        },
        'projeto-4': {
            titulo: 'Blog Pessoal Responsivo',
            descricao: 'Um blog simples e responsivo, focado em acessibilidade e otimização para motores de busca (SEO).',
            linguagens: 'html css bootstrap',
            githubLink: '#',
            onlineLink: '#'
        },
        'projeto-5': {
            titulo: 'Portfólio 3D Interativo',
            descricao: 'Projeto experimental utilizando bibliotecas JS para criar uma experiência de portfólio 3D no navegador.',
            linguagens: 'html css three.js',
            githubLink: '#',
            onlineLink: '#'
        }
    };

    /**
     * Função para atualizar o conteúdo do lado direito com base no projeto selecionado.
     * @param {string} projectId O data-projeto ID (ex: 'projeto-1').
     */
    function atualizarDetalhes(projectId) {
        const dados = dadosProjetos[projectId];
        if (!dados) return;

        detalhesProjeto.querySelector('.titulo-projeto-detalhe').textContent = dados.titulo;
        detalhesProjeto.querySelector('.lorem-ipsum').textContent = dados.descricao;
        detalhesProjeto.querySelector('.linguagens-projeto').textContent = dados.linguagens;
        detalhesProjeto.querySelector('.btn-outline-light').href = dados.githubLink;
        detalhesProjeto.querySelector('.btn-success').href = dados.onlineLink;
        
        // Exibe o conteúdo e oculta a mensagem de seleção
        detalhesConteudo.style.display = 'block';
        mensagemSelecao.style.display = 'none';
    }

    /**
     * Função para mostrar o lado direito (principalmente para mobile).
     */
    function mostrarDetalhes() {
        // Adiciona a classe 'ativo' para mover o painel (em mobile)
        detalhesProjeto.classList.add('ativo');
    }

    /**
     * Função para ocultar o lado direito (apenas para mobile).
     */
    function ocultarDetalhes() {
        // Remove a classe 'ativo' para mover o painel para fora (em mobile)
        detalhesProjeto.classList.remove('ativo');
    }

    // Adiciona evento de clique a cada card
    projetoCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-projeto');
            
            // 1. Remove a classe 'ativo' de todos os cards
            projetoCards.forEach(c => c.classList.remove('ativo'));
            
            // 2. Adiciona a classe 'ativo' ao card clicado
            card.classList.add('ativo');

            // 3. Atualiza os detalhes do projeto no painel
            atualizarDetalhes(projectId);

            // 4. Mostra o painel de detalhes (efeito de transição em mobile)
            mostrarDetalhes();
        });
    });

    // Adiciona evento ao botão de fechar (em mobile)
    if (fecharDetalhesBtn) {
        fecharDetalhesBtn.addEventListener('click', ocultarDetalhes);
    }
    
    // Configuração inicial: Em desktop, exibe o conteúdo padrão. Em mobile, exibe a mensagem de seleção.
    if (window.innerWidth >= 992) {
        // Para telas maiores que mobile (>= 992px, que é o 'lg' do Bootstrap)
        // Seleciona o primeiro projeto por padrão para preencher o painel
        projetoCards[0].classList.add('ativo');
        atualizarDetalhes('projeto-1');
        mensagemSelecao.style.display = 'none';
    } else {
        // Em mobile, garante que a mensagem de seleção esteja visível se o painel não estiver ativo
        detalhesConteudo.style.display = 'none';
        mensagemSelecao.style.display = 'block';
    }

});