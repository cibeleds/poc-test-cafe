import { Selector } from 'testcafe';
import LoginPage from '../pages/LoginPage'; // Importa o Page Object
import percySnapshot from '@percy/testcafe';

require('dotenv').config();

fixture`Meu Portal`
    .page`https://superportal-empregador-qa.vr.com.br/conheca-mais`;



test('Teste de Acesso', async t => {
    await t
        .click(Selector('button').withText('Entrar'))
        .expect(Selector('h4').innerText).eql('Para acessar, informe os dados do seu Acesso VR');
    await LoginPage.login(t, process.env.EMAIL, process.env.PASSWORD); // Chama o método de login
    await t.expect(Selector('h3').innerText).eql('Valores que a sua empresa paga aos trabalhadores atualmente');
    await percySnapshot(t, 'Página Inicial');
});