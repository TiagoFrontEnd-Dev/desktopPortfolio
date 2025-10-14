document.addEventListener('DOMContentLoaded', () => {
    // Seletores de Elementos (usando as classes do seu novo HTML)
    const projetoCards = document.querySelectorAll('.projeto-card');
    const detalhesProjeto = document.getElementById('detalhes-projeto');
    const fecharDetalhesBtn = document.getElementById('fechar-detalhes');
    
    // Verifica se os elementos cruciais existem
    if (projetoCards.length === 0 || !detalhesProjeto) {
        console.error("Elementos .projeto-card ou #detalhes-projeto não encontrados. Verifique seu HTML.");
        return;
    }
    
    const detalhesConteudo = detalhesProjeto.querySelector('.detalhes-conteudo');
    const mensagemSelecao = detalhesProjeto.querySelector('.mensagem-selecao');

    // Mapeamento de dados estáticos (Seus dados dos 5 projetos)
    const dadosProjetos = {
        'projeto-1': {
            titulo: 'Portfolio Online (Projeto 1)',
            descricao: 'Este é o projeto do seu portfolio! Construído com foco em design responsivo e tema dark com gradiente.',
            linguagens: 'html css js bootstrap',
            githubLink: '#', 
            onlineLink: '#'
        },
        'projeto-2': {
            titulo: 'Título do Projeto 2',
            descricao: 'Descrição do Projeto 2.',
            linguagens: 'html css js',
            githubLink: '#',
            onlineLink: '#'
        },
        'projeto-3': {
            titulo: 'Título do Projeto 3',
            descricao: 'Descrição do Projeto 3.',
            linguagens: 'html css js Chart.js',
            githubLink: '#',
            onlineLink: '#'
        },
        'projeto-4': {
            titulo: 'Título do Projeto 4',
            descricao: 'Descrição do Projeto 4.',
            linguagens: 'html css bootstrap',
            githubLink: '#',
            onlineLink: '#'
        },
        'projeto-5': {
            titulo: 'Título do Projeto 5',
            descricao: 'Descrição do Projeto 5.',
            linguagens: 'html css three.js',
            githubLink: '#',
            onlineLink: '#'
        }
    };

    /** Função para atualizar os detalhes no painel direito. */
    function atualizarDetalhes(projectId) {
        const dados = dadosProjetos[projectId];
        if (!dados) return;

        detalhesProjeto.querySelector('.titulo-projeto-detalhe').textContent = dados.titulo;
        detalhesProjeto.querySelector('.lorem-ipsum').textContent = dados.descricao;
        detalhesProjeto.querySelector('.linguagens-projeto').textContent = dados.linguagens;
        
        detalhesProjeto.querySelector('.btn-outline-light').href = dados.githubLink;
        detalhesProjeto.querySelector('.btn-success').href = dados.onlineLink;
        
        detalhesConteudo.style.display = 'block';
        mensagemSelecao.style.display = 'none';
    }

    /** Função para mostrar o painel de detalhes (para mobile/tablet). */
    function mostrarDetalhes() {
        detalhesProjeto.classList.add('ativo'); 
    }

    /** Função para ocultar o painel de detalhes (apenas para mobile). */
    function ocultarDetalhes() {
        detalhesProjeto.classList.remove('ativo');
    }

    // =========================================================================
    // LÓGICA DE CLIQUE PRINCIPAL (Card > Detalhes)
    // =========================================================================
    projetoCards.forEach(card => {
        card.addEventListener('click', (e) => {
            
            // e.currentTarget garante que o evento seja sempre o elemento .projeto-card
            const targetCard = e.currentTarget; 
            if (!targetCard) return; 
            
            const projectId = targetCard.getAttribute('data-projeto');
            
            // 1. Remove a classe 'ativo' de todos os cards
            projetoCards.forEach(c => c.classList.remove('ativo'));
            
            // 2. Adiciona a classe 'ativo' ao card clicado
            targetCard.classList.add('ativo');

            // 3. Atualiza os detalhes do projeto no painel
            atualizarDetalhes(projectId);

            // 4. Mostra o painel de detalhes (para mobile)
            mostrarDetalhes();
        });
    });

    if (fecharDetalhesBtn) {
        fecharDetalhesBtn.addEventListener('click', ocultarDetalhes);
    }
    
    // =========================================================================
    // INICIALIZAÇÃO (Carrega o primeiro projeto em Desktop)
    // =========================================================================
    if (window.innerWidth >= 992) {
        if (projetoCards.length > 0) {
            projetoCards[0].classList.add('ativo');
            atualizarDetalhes('projeto-1');
            mensagemSelecao.style.display = 'none';
        }
    } else {
        // Em mobile, a mensagem de seleção fica visível no início
        detalhesConteudo.style.display = 'none';
        mensagemSelecao.style.display = 'block';
    }
});