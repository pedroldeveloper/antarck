Changelog — ANTARCK

Histórico de mudanças desde a primeira versão enviada ao GitHub.

Geral (todas as páginas: index, sobre, garantia, produtos, produto, carrinho)

- Adicionado import das fontes Google Oswald (títulos) e Inter (texto), substituindo Segoe UI / Bahnschrift.
- Logo: `logoeoutrasimagens/antarck preto.png` → `logoeoutrasimagens/antarck.png` (agora com fundo transparente).
- Ícone Instagram: `logoeoutrasimagens/logo instagram.png` → `logoeoutrasimagens/logo_instagram.png` (agora com fundo transparente).
- Ícones `carrinho.png`, `logofacebook.png` e `logoyoutube.png` substituídos por versões com transparência real (mesmo nome de arquivo).

index.html (Home)

- Texto da seção "Sobre a marca" reescrito (título e parágrafo).
- Imagem da seção "Sobre a marca": `Imagemsobrenos.png` → `Imagemsobrenos3.png` (mesa de inspeção/controle de qualidade).
- Alt-text do banner ajustado, removendo menção a "premium".
- Banner principal (carrossel) com bordas arredondadas.

sobre.html

- H1 do hero reescrito ("Da garagem à linha de frente da engenharia tática").
- Bloco "Nossa história" totalmente reescrito (título e três parágrafos), com narrativa mais concreta no lugar de texto genérico.
- Adicionada imagem `Imagemsobrenos2.png` na seção "Nossa história" (antes a seção não tinha nenhuma imagem).
- Imagem de fundo do hero do topo corrigida para `Imagemsobrenos.png` (estava ausente/quebrada).
- Layout da seção "Nossa história" alterado de coluna única para duas colunas (texto + imagem).

garantia.html

- H1 do hero reescrito e corrigido erro de grafia ("extendida" → "estendida").
- Título e parágrafo da seção "Cobertura" reescritos.
- Botão "Conhecer a ANTARCK" adicionado (estava vazio/sem link).

produtos.html / produto.html / carrinho.html

- Apenas as mudanças gerais listadas no topo (fontes e nomes de arquivo de imagem).

script.js

- Todas as 16 descrições de produto reescritas, eliminando repetição excessiva das palavras "premium", "acabamento" e "excelente".
- Removida lógica órfã que nunca tinha elemento correspondente no HTML: busca por texto, filtro por categoria, ordenação por preço/nome e dots do carrossel.
- Função `normalizeText` removida (só era usada pela busca/filtro removidos).
- Botão "Finalizar agora" do carrinho: trocado de link `mailto:` para um `<button>` sem ação real, exibindo um aviso ("Finalização indisponível nesta demonstração") ao ser clicado.

styles.css

- Cor de destaque dourada (`#c9a55d`) substituída por platina (`#cdd3d6`) em todos os usos (variável, glow de fundo, rótulos "eyebrow", preço da página de produto).
- Fontes trocadas para Oswald (títulos) e Inter (texto).
- Header: altura aumentada (104px → 124px), logo maior, menu de navegação recentralizado de forma robusta (de grid para flex + posicionamento absoluto), efeito de blur reativado ao rolar a página.
- Ícone do carrinho no header: removido o círculo com borda branca ao redor, ícone ampliado.
- Cards de produto: corrigido alinhamento dos botões "Comprar" entre cards com descrições de tamanhos diferentes (troca de `display: grid` para `display: flex` no corpo do card, com alturas fixas em nome e descrição).
- Banner principal da Home: bordas arredondadas aplicadas de forma reforçada em três camadas (container, viewport e imagem).
- Página de produto individual: fundo da imagem trocado de gradiente sutil para branco sólido (eliminando aparência de "duas cores").
- Removidas regras CSS órfãs: `.catalog-toolbar`, `.filter-chip` e respectivos media queries.

Imagens

- Novos arquivos: `imgspaginas/Imagemsobrenos2.png`, `imgspaginas/Imagemsobrenos3.png`.
- `imgspaginas/Imagemsobrenos.png` original mantida no projeto (ainda em uso no hero da página Sobre Nós).
