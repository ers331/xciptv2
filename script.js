function downloadApp() {
    // Nome do arquivo APK
    const fileName = 'https://testeappweb.s3.us-east-1.amazonaws.com/xciptv-7-0.apk';    
    // Criar um link de download
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    
    // Adicionar o link ao documento
    document.body.appendChild(link);
    
    // Simular o clique no link
    link.click();
    
    // Remover o link do documento
    document.body.removeChild(link);
    
    // Mostrar feedback visual
    showDownloadFeedback();
}

function showDownloadFeedback() {
    const button = document.querySelector('.download-btn');
    const originalText = button.innerHTML;
    
    // Mudar o texto do botão temporariamente
    button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
        </svg>
        Download Iniciado!
    `;
    
    // Desabilitar o botão temporariamente
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // Restaurar o botão após 3 segundos
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        button.style.opacity = '1';
    }, 3000);
}

// Adicionar efeito de loading quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.download-card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
});
