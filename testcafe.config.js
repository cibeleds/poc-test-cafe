module.exports = {
    browsers: ['chrome', 'firefox', 'edge'], // Defina os navegadores que você quer usar
    src: 'tests/teste.js', // Ponto de entrada para os testes
    reporter: {
        name: 'spec',
        output: 'reports/test-results.txt'
    },
    screenshots: {
        takeOnFails: true,
        path: 'screenshots/'
    },
    video: {
        path: 'videos/',
        singleFile: true,
        failedOnly: true
    },
    hooks: {
        beforeEach: async (t) => {
            // Define as resoluções
            const resolutions = [
                { width: 1020, height: 920 },  // Resolução normal
                { width: 375, height: 812 }     // Resolução do iPhone 12 Pro
            ];

            // Redimensiona a janela para cada resolução
            for (const resolution of resolutions) {
                await t.resizeWindow(resolution.width, resolution.height);
                // Aqui você pode chamar uma função que executa o teste
                // ou simplesmente deixar o TestCafe rodar o teste normal
            }
        }
    }
};