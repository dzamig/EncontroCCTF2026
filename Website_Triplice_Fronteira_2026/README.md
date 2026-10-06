# Encontro Tríplice Fronteira 2026

Website de rolagem contínua do I Encontro de Ciências do Comportamento da Tríplice Fronteira, em 12 e 13 de novembro de 2026, Foz do Iguaçu - UNIGUAÇU.

## Abrir e editar

- A página completa está em `public/index.html`. Pode ser aberta diretamente no navegador; estilos, imagens e navegação usam caminhos relativos.
- `public/styles.css` contém a identidade visual responsiva.
- `public/site.js` melhora a navegação por teclado e o menu móvel. O conteúdo completo permanece disponível sem JavaScript.
- `public/assets/` contém as oito logos originais, a paisagem derivada do banner aprovado, versões JPG dos três materiais completos e a programação DOCX original.
- `public/manus-routes.json` declara a única página `/`.

## Prévia local

Use Node.js instalado e a porta que estiver declarada para esta sessão Manus. Exemplo no PowerShell para a sessão atual:

```powershell
$env:PORT = '5174'
node .\dev-server.mjs
```

Abra `http://127.0.0.1:5174`. O servidor não muda de porta automaticamente e atende somente em `127.0.0.1`. Se a porta estiver ocupada, não interrompa processos alheios: declare outra porta da sessão nas ferramentas Manus e ajuste `PORT`.

## Conteúdo

A programação completa está no HTML inicial, em quatro blocos: dois dias × Sala Auditório e Sala B – Quati. Todos os horários e palestrantes foram transcritos do documento fornecido. Títulos em português e espanhol são preservados. A grafia “Tdha” foi mantida conforme a fonte, sem correção editorial por suposição.

Os três botões “Quero me inscrever” abrem a página pública Sympla do evento 3581518. Não existe formulário interno de inscrição, checkout ou captura de dados. A página não afirma gratuidade dos ingressos, emissão de certificados ou condições não fornecidas.

Logos de realização: ABPMC, ALAMOC e Faculdade UNIGUAÇU. Organização: díadeLab, Catarine Sousa, InPaSex e Instituto Par. Apoio: RedeTAC. A comissão organizadora está transcrita do DOCX, incluindo a grafia “Catarine Souza” usada nesse documento.

## Publicação

A pasta `public/` pode ser entregue a uma hospedagem estática, sem instalação de dependências ou serviços de servidor/banco de dados. No projeto Manus associado, a declaração estática existente usa comando `true` e saída `public`.

O site não foi publicado automaticamente. Canonical, `og:url` e metadados sociais com URLs absolutas de imagem devem ser preenchidos somente após definição do endereço público real. Não foram usadas URLs fictícias ou endereços de localhost nesses metadados.

O salvamento de versões Manus é separado da cópia local e da prévia. A preparação do Git gerenciado retornou `managed_git_unavailable`; não há checkpoint confirmado até resolução dessa condição. Nenhuma história ou metadado privado foi substituído para contornar essa falha.
