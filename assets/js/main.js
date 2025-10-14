document.addEventListener('DOMContentLoaded', () => {
    // Captura o novo botão que adicionamos no index.html
    const btnProjetos = document.getElementById('btn-projetos');

    if (btnProjetos) {
        btnProjetos.addEventListener('click', (e) => {
            // Previne o comportamento padrão do link (<a href="#">)
            e.preventDefault(); 
            
            // Redireciona para a página de projetos
            // IMPORTANTE: Certifique-se de que o caminho 'projetos.html' está correto
            window.location.href = 'https://github.com/TiagoFrontEnd-Dev?tab=repositories';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Captura o novo botão que adicionamos no index.html
    const btnProjetos = document.getElementById('btn-contato');

    if (btnProjetos) {
        btnProjetos.addEventListener('click', (e) => {
            // Previne o comportamento padrão do link (<a href="#">)
            e.preventDefault(); 
            
            // Redireciona para a página de projetos
            // IMPORTANTE: Certifique-se de que o caminho 'projetos.html' está correto
            window.location.href = 'projetos.html';
        });
    }
});